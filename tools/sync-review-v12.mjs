import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const responsePath = 'revise/Response_to_Editors_and_Reviewers_TCSVT_GPT5-6_v13/Response_to_Editors_and_Reviewers_TCSVT_GPT5-6_v13.tex';
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const hash = p => createHash('sha256').update(fs.readFileSync(path.join(root, p))).digest('hex');
const context = { window: {} };
vm.runInNewContext(read('website/data.js'), context);
const data = context.window.REVIEW_DATA;
const manuscriptOnly = process.env.REVIEW_MANUSCRIPT_ONLY === '1';
const savedResponse = manuscriptOnly ? JSON.parse(JSON.stringify({
  comments: data.comments, overview: data.overview,
  source: data.meta.fullResponseSource, hash: data.meta.fullResponseSha256,
})) : null;
const source = read(responsePath).replace(/\r\n/g, '\n');
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function prepare(fragment) {
  // A minipage's internal line breaks must stay inside its table cell.
  fragment = fragment.replace(/\\begin\{minipage\}\[[bt]\]\{\\linewidth\}\\raggedright\s*([\s\S]*?)\\end\{minipage\}/g,
    (_, contents) => contents.replace(/\\\\/g, ' '));
  // A makecell line break belongs inside one cell, not to the table row structure.
  fragment = fragment.replace(/\\makecell\{/g, (_, offset) => '__MAKECELL__{');
  let index;
  while ((index = fragment.indexOf('__MAKECELL__{')) >= 0) {
    const start = index + '__MAKECELL__{'.length;
    let end = start, depth = 1;
    for (; depth; end++) {
      if (fragment[end] === '{' && fragment[end - 1] !== '\\') depth++;
      if (fragment[end] === '}' && fragment[end - 1] !== '\\') depth--;
    }
    fragment = fragment.slice(0, index) + '\\textbf{' + fragment.slice(start, end - 1).replace(/\\\\/g, ' ') + '}' + fragment.slice(end);
  }
  return fragment
    .replace(/\\begin\{longtable\}[\s\S]*?(?=\\toprule)/g, (match, offset) => {
      const start = fragment.indexOf('\\toprule', offset);
      const end = fragment.indexOf('\\midrule', start);
      const columns = (fragment.slice(start, end).match(/&/g) || []).length + 1;
      return '\\begin{longtable}{' + 'l'.repeat(columns) + '}\n';
    })
    .replace(/\\begin\{minipage\}\[[bt]\]\{\\linewidth\}\\raggedright/g, '')
    .replace(/\\end\{minipage\}|\\strut|\\noalign\{\}/g, '')
    .replace(/\\(?:Needspace|label)\{[^}]*\}/g, '')
    .replace(/\\(?:clearpage|noindent|centering|tightlist)/g, '')
    .replace(/\\(?:changeslabel|revisionlabel)\{/g, '\\textbf{')
    .replace(/\\begin\{revisionquote\}|\\end\{revisionquote\}/g, '')
    .replace(/\\begin\{figure\}(?:\[[^\]]*\])?|\\end\{figure\}/g, '')
    .replace(/\\caption\{/g, '\\textbf{')
    .replace(/\\makecell\{/g, '\\textbf{');
}

function parse(fragment) {
  const result = spawnSync('pandoc', ['-f', 'latex', '-t', 'json'], {
    input: prepare(fragment), encoding: 'utf8', maxBuffer: 10_000_000,
  });
  if (result.status !== 0) throw new Error(result.stderr);
  return JSON.parse(result.stdout).blocks;
}

function inline(items, html = true) {
  return items.map(item => {
    const c = item.c;
    switch (item.t) {
      case 'Str': return html ? esc(c) : c;
      case 'Space': case 'SoftBreak': return ' ';
      case 'LineBreak': return html ? '<br>' : '\n';
      case 'Math': return html
        ? `<span data-response-math="${esc(c[1])}" data-display="${c[0].t === 'DisplayMath'}">${esc(c[1])}</span>`
        : '\u27ea' + (c[0].t === 'DisplayMath' ? '\\displaystyle ' : '') + c[1] + '\u27eb';
      case 'Code': return html ? `<code>${esc(c[1])}</code>` : c[1];
      case 'Strong': case 'Emph': case 'Superscript': case 'Underline': {
        const tag = { Strong: 'strong', Emph: 'em', Superscript: 'sup', Underline: 'u' }[item.t];
        return html ? `<${tag}>${inline(c)}</${tag}>` : inline(c, false);
      }
      case 'Span': case 'Link': return inline(c[1], html);
      case 'Quoted': return (c[0].t === 'DoubleQuote' ? '"' : "'") + inline(c[1], html) + (c[0].t === 'DoubleQuote' ? '"' : "'");
      case 'Image': return html ? `<img src="assets/response/${esc(path.basename(c[2][0]))}" alt="${esc(inline(c[1], false))}">` : inline(c[1], false);
      case 'RawInline': throw new Error('Unconverted LaTeX: ' + JSON.stringify(c));
      default: throw new Error('Unsupported inline: ' + item.t);
    }
  }).join('');
}

function cell(blocks) {
  const items = blocks.flatMap(b => b.c);
  return { html: inline(items), text: inline(items, false) };
}

function blocks(fragment) {
  const result = [];
  for (const block of parse(fragment)) {
    if (block.t === 'Header') {
      result.push({ kind: 'heading', html: inline(block.c[2]), text: inline(block.c[2], false) });
    } else if (block.t === 'Table') {
      let rows;
      if (block.c.length === 5) rows = [block.c[3], ...block.c[4]].map(row => row.map(cell));
      else if (block.c.length === 6) {
        const decodeRow = row => row[1].map(entry => {
          if (entry[2] !== 1 || entry[3] !== 1) throw new Error('Spanning response table cell needs explicit handling');
          return cell(entry[4]);
        });
        rows = [...block.c[3][1], ...block.c[4].flatMap(body => [...body[2], ...body[3]]), ...block.c[5][1]].map(decodeRow);
      } else throw new Error('Unsupported Pandoc table schema');
      result.push({ kind: 'table', rows });
    } else if (block.t === 'Para' || block.t === 'Plain') {
      const picture = block.c.find(x => x.t === 'Image');
      if (picture) {
        const basename = path.basename(picture.c[2][0]);
        result.push({ kind: 'image', src: 'assets/response/' + (basename === 'retention_gate_heatmap.png' ? 'retention-gates.png' : basename), alt: 'Retention gates reproduced from revised Fig. 9' });
        continue;
      }
      const html = inline(block.c), text = inline(block.c, false);
      const kind = text.startsWith('Changes in the manuscript:') ? 'location'
        : /^"/.test(text) ? 'excerpt'
        : /^Evidence from|^Selected measurements|^Measurements from|^Additional evidence|^Definitions added|^Implementation settings|^Reproduced from/.test(text) ? 'caption' : 'paragraph';
      result.push({ kind, html, text });
    } else {
      throw new Error('Unsupported response block: ' + block.t);
    }
  }
  return result;
}

const headings = [...source.matchAll(/\\(?:subsection|section)\{([^}]+)\}(?:\\label\{[^}]+\})?/g)];
const parts = new Map();
for (let i = 0; i < headings.length; i++) {
  const title = headings[i][1];
  const fragment = source.slice(headings[i].index + headings[i][0].length, headings[i + 1]?.index ?? source.indexOf('\\end{document}'));
  const marker = '\\responselabel{Response}';
  const start = fragment.indexOf(marker);
  if (start < 0) continue;
  const id = /^(EIC|E[12]|AE[1-5]|R[12]\.[1-6])\b/.exec(title)?.[1] ?? (title === 'Response to the Senior Area Editor' ? 'SAE' : null);
  if (id) parts.set(id, blocks(fragment.slice(start + marker.length)));
}
for (const comment of data.comments) {
  const key = comment.id === 'sae' ? 'SAE' : comment.label;
  const reply = comment.id === 'eic'
    ? parts.get('EIC')
    : parts.get(key);
  if (!reply?.length) throw new Error('Missing response: ' + key);
  comment.fullResponse = reply;
  comment.responseWordCount = reply.flatMap(b => b.rows ? b.rows.flat().map(c => c.text) : b.text || '').join(' ').split(/\s+/).filter(Boolean).length;
}

if (process.env.REVIEW_RESPONSES_ONLY === '1') {
  const start=source.indexOf('Dear Dr.~Shan Liu');
  const end=source.indexOf('\\clearpage',start);
  if(start<0||end<0)throw new Error('Missing response-letter opening page');
  const opening=source.slice(start,end).replace(/\\vspace\{[^}]*\}/g,'').replace(/\\reviewwebsite/g,'https://tcsvt-29693-2026.xhy.im');
  const overview=blocks(opening);
  fs.writeFileSync(process.env.REVIEW_RESPONSE_OUTPUT, JSON.stringify({parts:[...parts], comments:data.comments,overview}, null, 2));
  process.exit(0);
}

const manuscript = read('latex/main.tex');
const aux = read('latex/main.aux');
const refs = new Map([...aux.matchAll(/\\newlabel\{([^}]+)\}\{\{([^}]+)\}\{(\d+)\}/g)].map(m => [m[1], { number: m[2], page: Number(m[3]) }]));
for (const m of aux.matchAll(/\\newlabel\{([^}]+)\}\{\{\\mbox\s*\{([^}]+)\}\}\{(\d+)\}/g)) refs.set(m[1], { number: m[2], page: Number(m[3]) });
const cites = new Map([...aux.matchAll(/\\bibcite\{([^}]+)\}\{(?:\{)?(\d+)/g)].map(m => [m[1], m[2]]));
const macros = {
  methodname: 'DCF', methodprinciple: 'route--adapt--retain', componentone: 'PSR', componenttwo: 'RGR', componentthree: 'CLR',
  componentonename: 'Probe-supported Sample Routing', componenttwoname: 'Routed-away Geometry Repair', componentthreename: 'Curvature-aware Layer Retention',
  methodfullname: 'Decoupled Control Framework', diagnosticname: 'centroid entropy deficit',
};
function manuscriptFragment(fragment, referenceMap = refs, citationMap = cites) {
  fragment = fragment.replace(/\\(?:Cref|cref|eqref)\{([^}]+)\}/g, (m, key) => {
    const ref = referenceMap.get(key);
    if (!ref) throw new Error('Missing manuscript reference: ' + key);
    return key.startsWith('eq:') ? '(' + ref.number + ')' : (key.startsWith('fig:') || key.startsWith('hyperparams:') ? 'Fig. ' : key.startsWith('tab:') ? 'Table ' : 'Section ') + ref.number;
  }).replace(/\\cite\{([^}]+)\}/g, (m, keys) => '[' + keys.split(',').map(key => {
    const k = key.trim();
    if (!citationMap.has(k)) throw new Error('Missing citation: ' + k);
    return citationMap.get(k);
  }).join(', ') + ']');
  for (const [key, value] of Object.entries(macros)) fragment = fragment.replace(new RegExp('\\\\' + key + '(?:\\{\\})?(?![a-zA-Z])', 'g'), value);
  return fragment.replace(/\\looseness=-?\d+/g, '').replace(/\\noindent/g, '');
}
function textOf(fragment) {
  return parse(manuscriptFragment(fragment)).map(b => inline(b.t === 'Header' ? b.c[2] : b.c, false)).join(' ');
}
const changes = new Map(data.changes.map(c => [c.id, c]));
const pcsStart = manuscript.indexOf('For sample $x_{t,i}$');
const theoryStart = manuscript.indexOf('\\noindent\\textbf{Theoretical interpretation.}');
const routingStart = manuscript.indexOf('\\noindent\\textbf{Sample routing.}', theoryStart);
let pcsTex = manuscript.slice(pcsStart, theoryStart).replace(/\\label\{[^}]*\}/g, '');
pcsTex = pcsTex.replace('\\begin{equation}', '\\[').replace('\\end{equation}', '\\] (5)');
const pcsText = textOf(pcsTex);
const theoryText = textOf(manuscript.slice(theoryStart, routingStart));
const pcs = changes.get('pcs-definition'), theory = changes.get('probe-theory');
const oldPcs = pcs.after, oldTheory = theory.after;
pcs.title = 'One-sided PCS probability-drop definition';
pcs.summary = 'PCS retains the positive part of the original predicted-class probability drop. The revision clarifies its role as a complementary routing signal alongside entropy.';
pcs.after = pcsText;
theory.title = 'Local squared-response interpretation of PCS';
theory.summary = 'The local PCS expansion retains the positive-part truncation. Its leading squared response is bounded above by the gradient quadratic form under the actual post-clamp perturbation second moment.';
theory.after = theoryText;
for (const section of data.sections) {
  section.after = section.after.replace(oldPcs, pcsText).replace(oldTheory, theoryText).replace(/\s*IEEEexample:BSTcontrol\b/g, '').replace(/\s+itemize\b/g, '');
  if (section.title === 'Sample routing' && !section.after.includes('positive-part')) throw new Error('Narrative PCS replacement failed');
}

function narrativeText(fragment, referenceMap, citationMap) {
  fragment = fragment.replace(/(?<!\\)%[^\n]*/g, '')
    .replace(/\\begin\{(figure\*?|table\*?|algorithm)\}[\s\S]*?\\end\{\1\}/g, '')
    .replace(/\\input\{[^}]*\}|\\bstctlcite\{[^}]*\}/g, '')
    .replace(/\\(?:vspace|hspace|label|setlength|caption)\*?\{[^}]*\}/g, '')
    .replace(/\\(?:small|footnotesize|normalsize|hfill|raggedbottom|clearpage|newpage|centering)/g, '')
    .replace(/\\begin\{itemize\}(?:\[[^\]]*\])?|\\end\{itemize\}|\\item/g, '')
    .replace(/\\begin\{(?:center|takeaway)\}(?:\[[^\]]*\])?|\\end\{(?:center|takeaway)\}/g, '')
    .replace(/\\begin\{equation\}/g, '\\[').replace(/\\end\{equation\}/g, '\\]')
    .replace(/\\begin\{align\}/g, '\\[\\begin{aligned}').replace(/\\end\{align\}/g, '\\end{aligned}\\]');
  return parse(manuscriptFragment(fragment, referenceMap, citationMap)).map(b => {
    if (b.t !== 'Para' && b.t !== 'Plain' && b.t !== 'Header') throw new Error('Unsupported manuscript block: ' + b.t);
    return inline(b.t === 'Header' ? b.c[2] : b.c, false);
  }).join(' ').replace(/\s+/g, ' ').trim();
}
if(process.env.REVIEW_RELATED_WORK_OUTPUT){
 const start=manuscript.indexOf('\\section{Related Work}');
 const end=manuscript.indexOf('\\section{Methodology}',start);
 const fragment=manuscript.slice(start,end);
 const paragraphs=fragment.split(/\n\s*\n/).filter(p=>!p.trim().startsWith('%')).map(p=>narrativeText(p,refs,cites)).filter(Boolean);
 fs.writeFileSync(process.env.REVIEW_RELATED_WORK_OUTPUT,JSON.stringify({text:narrativeText(fragment,refs,cites),paragraphs},null,2));
 process.exit(0);
}
const narrativeCuts = [
  ['Abstract', '\\begin{abstract}', '\\end{abstract}'],
  ['Introduction', '\\section{Introduction}', '\\section{Related Work}'],
  ['Related work', '\\section{Related Work}', '\\section{Methodology}'],
  ['Problem setup', '\\subsection{Problem Setup}', '\\subsection{Decoupled Control View'],
  ['Decoupled control view', '\\subsection{Decoupled Control View', '\\subsection{Route:'],
  ['Sample routing', '\\subsection{Route:', '\\subsection{Adapt:'],
  ['Sample-side adaptation', '\\subsection{Adapt:', '\\subsection{Retain:'],
  ['Layer retention', '\\subsection{Retain:', '\\section{Experiments}'],
  ['Experimental setup', '\\subsection{Setup}', '\\subsection{Main Results}'],
  ['Main results', '\\subsection{Main Results}', '\\subsection{Ablations and Further Analysis}'],
  ['Ablations and analysis', '\\subsection{Ablations and Further Analysis}', '\\section{Conclusions}'],
  ['Conclusions', '\\section{Conclusions}', '\\bibliographystyle'],
];
for (const [version, directory] of [['original', 'latex_old_version'], ['revised', 'latex']]) {
  const tex = read(directory + '/main.tex').replace(/(?<!\\)%[^\n]*/g, '');
  const auxText = read(directory + '/main.aux');
  const referenceMap = new Map([...auxText.matchAll(/\\newlabel\{([^}]+)\}\{\{(?:\\mbox\s*\{)?([^}]+)\}(?:\})?\{(\d+)\}/g)].map(m => [m[1], { number: m[2], page: Number(m[3]) }]));
  const citationMap = new Map([...auxText.matchAll(/\\bibcite\{([^}]+)\}\{(?:\{)?(\d+)/g)].map(m => [m[1], m[2]]));
  for (const [title, startMarker, endMarker] of narrativeCuts) {
    let start = tex.indexOf(startMarker), end = tex.indexOf(endMarker, start + startMarker.length);
    if (start < 0 || end < 0) throw new Error('Missing section: ' + title);
    start = title === 'Abstract' ? start + startMarker.length : tex.indexOf('\n', start);
    const section = data.sections.find(s => s.title === title);
    section[version === 'original' ? 'before' : 'after'] = narrativeText(tex.slice(start, end), referenceMap, citationMap);
  }
}

const snippetCuts = [
  ['probe-definition', '\\noindent\\textbf{Fourier-basis stress probe.}', 'For sample $x_{t,i}$'],
  ['prior-safeguards', '\\noindent\\emph{Dynamic-marginal OT:}', 'The entropic OT plans are then obtained'],
  ['implementation', '\\noindent\\textbf{Models and Implementation Details.}', '\\noindent\\textbf{Scenarios.}'],
  ['regions', 'As illustrated in \\Cref{fig:overview}', '\\subsection{Adapt:'],
  ['threshold-guidance', '\\noindent\\textbf{Hyperparameter Sensitivity.}', '\\begin{figure}'],
  ['curvature-definition', '\\noindent\\textbf{Curvature-aware proxy and retention gate.}', '\\begin{algorithm}'],
];
for (const [id, startMarker, endMarker] of snippetCuts) {
  const start = manuscript.indexOf(startMarker), end = manuscript.indexOf(endMarker, start + startMarker.length);
  if (start < 0 || end < 0) throw new Error('Missing excerpt: ' + id);
  changes.get(id).after = narrativeText(manuscript.slice(start, end), refs, cites);
}
changes.get('tcsvt-literature').after = data.sections.find(s => s.title === 'Related work').after;

const figureLabels = {
  f1: 'fig:all_baselines_drop', f2: 'fig:motivation', f3: 'fig:overview', f4: 'fig:test_stream_type',
  f5: 'fig:ab_design_choices', f6: 'fig:qualitative_analysis', f7: 'fig:vis_pcs_entropy',
  f8: 'fig:drift_comparison', f9: 'fig:layerwise_mu', f10: 'fig:static_vs_t_cs', f12: 'fig:ab_hyperparameters',
};
for (const [version, directory] of [['original', 'latex_old_version'], ['revised', 'latex']]) {
  const tex = read(directory + '/main.tex').replace(/(?<!\\)%[^\n]*/g, '');
  const auxText = read(directory + '/main.aux');
  const referenceMap = new Map([...auxText.matchAll(/\\newlabel\{([^}]+)\}\{\{(?:\\mbox\s*\{)?([^}]+)\}(?:\})?\{(\d+)\}/g)].map(m => [m[1], { number: m[2], page: Number(m[3]) }]));
  const citationMap = new Map([...auxText.matchAll(/\\bibcite\{([^}]+)\}\{(?:\{)?(\d+)/g)].map(m => [m[1], m[2]]));
  for (const figure of data.figures) {
    if (!figure[version]) continue;
    const label = figure.id === 'f11' ? (version === 'original' ? 'fig:cross_domain_generalization' : 'fig:combined_cross_domain_side_by_side')
      : figure.id === 'f-runtime' ? (version === 'original' ? 'fig:time_vs_error' : 'tab:overhead_and_lightweight') : figureLabels[figure.id];
    const environment = [...tex.matchAll(/\\begin\{(figure\*?|table\*?)\}[\s\S]*?\\end\{\1\}/g)].find(m => m[0].includes('\\label{' + label + '}'))?.[0];
    if (!environment) throw new Error('Missing figure: ' + label);
    const captionStart = environment.indexOf('\\caption{') + 9;
    let captionEnd = captionStart, depth = 1;
    for (; depth; captionEnd++) {
      if (environment[captionEnd] === '{' && environment[captionEnd - 1] !== '\\') depth++;
      if (environment[captionEnd] === '}' && environment[captionEnd - 1] !== '\\') depth--;
    }
    figure[version === 'original' ? 'before' : 'after'] = figure[version].label + ': ' + narrativeText(environment.slice(captionStart, captionEnd - 1), referenceMap, citationMap);
    const ref = referenceMap.get(label);
    if (ref) figure[version].page = ref.page;
  }
}
for (const [changeId, figureId] of [['overview', 'f3'], ['retention-heatmap', 'f9']]) changes.get(changeId).after = data.figures.find(f => f.id === figureId).after;

const captionMatch = [...manuscript.matchAll(/\\caption\{/g)].find(m => manuscript.slice(m.index, m.index + 150).includes('Cross-domain transfer.'));
let depth = 1, end = captionMatch.index + captionMatch[0].length;
for (; depth; end++) {
  if (manuscript[end] === '{' && manuscript[end - 1] !== '\\') depth++;
  if (manuscript[end] === '}' && manuscript[end - 1] !== '\\') depth--;
}
const transferCaption = 'Fig. 11: ' + textOf(manuscript.slice(captionMatch.index + captionMatch[0].length, end - 1));
changes.get('transfer').after = transferCaption;
const transferFigure = data.figures.find(f => f.id === changes.get('transfer').figure);
transferFigure.after = transferCaption;
changes.get('domainnet').summary = 'DomainNet-126 reports five-run accuracy gains over No Adapt for 12 transfer pairs and an average column. DCF exceeds DeYO on all pairs and achieves the highest mean gain on 10 of 12 pairs.';
data.comments.find(c => c.id === 'r1-1').response = ['The positive-part PCS expansion, controlled shortcut interventions, matched-coverage diagnostics, and frequency/amplitude sensitivity jointly explain and validate the routing criterion.'];
data.comments.find(c => c.id === 'r1-3').response = [
  'Table XI reports FLOPs, peak memory, latency, and accuracy on the A100 benchmark. DCF-Lite reduces FLOPs by 61.8% and peak memory by 58.6%, retaining 42.06% accuracy versus 43.48% for full DCF.',
  'Latency-derived throughput estimates and the measured resource profile support device-specific deployment assessment.',
];
data.comments.find(c => c.id === 'r1-6').response = [
  'Five matched runs show significant aggregate transfer improvements over AEA on ImageNet-C and DeYO on DomainNet-126; individual entries report mean and standard deviation.',
  'DCF exceeds the domain-wise strongest baseline in 13 of 15 ImageNet-C adaptation domains and exceeds DeYO on all 12 DomainNet transfer pairs, with the highest mean gain on 10 pairs.',
];
data.figures.find(f => f.id === 'f5').changes = ['probe-definition', 'pcs-definition'];
data.figures.find(f => f.id === 'f6').changes = ['probe-definition', 'shape-texture'];
data.figures.find(f => f.id === 'f7').summary = 'The retained diagnostic plots visualize the four routing regions explicitly defined in revised Section III-C.';
data.meta.snapshot = '4 October 2026';
data.meta.fullResponseSource = responsePath;
data.meta.fullResponseSha256 = hash(responsePath);
for (const [version, dir] of [['original', 'latex_old_version'], ['revised', 'latex']]) {
  data.meta.hashes[version] = { pdf: hash('website/assets/pdf/' + version + '.pdf'), tex: hash(dir + '/main.tex') };
}

// Regenerate token-level diffs through Python's standard sequence matcher.
const diffs = [...data.changes, ...data.figures, ...data.sections];
const comparison = spawnSync(process.env.REVIEW_PYTHON || 'python3', ['-c', `import json,sys,re,difflib
items=json.load(sys.stdin)
def tokens(s): return re.findall(r'\u27ea[^\u27eb]*\u27eb\\s*|\\S+\\s*|\\s+',s)
out=[]
for item in items:
 a,b=tokens(item.get('before','')),tokens(item.get('after',''))
 d={'original':[],'revised':[]}
 for tag,i,j,k,l in difflib.SequenceMatcher(None,a,b,autojunk=False).get_opcodes():
  if tag=='equal':
   for v,t in [('original',a[i:j]),('revised',b[k:l])]: d[v].append({'kind':'same','text':''.join(t)})
  else:
   if i<j:d['original'].append({'kind':'del','text':''.join(a[i:j])})
   if k<l:d['revised'].append({'kind':'add','text':''.join(b[k:l])})
 out.append(d)
json.dump(out,sys.stdout,ensure_ascii=False)`], { input: JSON.stringify(diffs), env: { ...process.env, PYTHONUTF8: '1' }, encoding: 'utf8', maxBuffer: 10_000_000 });
if (comparison.status !== 0) throw new Error(comparison.stderr);
JSON.parse(comparison.stdout).forEach((diff, i) => { diffs[i].diff = diff; });
if (savedResponse) {
  data.comments = savedResponse.comments;
  data.overview = savedResponse.overview;
  data.meta.fullResponseSource = savedResponse.source;
  data.meta.fullResponseSha256 = savedResponse.hash;
}
fs.writeFileSync(path.join(root, 'website/data.js'), 'window.REVIEW_DATA=' + JSON.stringify(data, null, 2) + ';\n');
console.log(manuscriptOnly
  ? 'Synchronized manuscript evidence, captions, narrative diffs and source hashes; response content preserved.'
  : `Synchronized ${data.comments.length} responses, PCS evidence, captions, narrative diffs, and source hashes.`);

