import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const responsePath = 'revise/Response_to_Editors_and_Reviewers_TCSVT_GPT5-6_v14/Response_to_Editors_and_Reviewers_TCSVT_GPT5-6_v14.tex';
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
const responseAuxPath=responsePath.replace(/\.tex$/,'.aux');
const responsePages=new Map([...read(responseAuxPath).matchAll(/\\newlabel\{([^}]+)\}\{\{[^}]*\}\{(\d+)\}/g)].map(m=>[m[1],m[2]]));
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Website-only wording edits requested by the author. Keep claims, qualifications,
// measurements and evidence intact; the read-only response source is never changed.
function directResponse(fragment) {
  const edits = [
    ['Rather than treating unreliable target evidence and parameter drift as two independent failure sources, DCF addresses their interaction', 'DCF addresses the interaction between unreliable target evidence and parameter drift'],
    ['The contribution is therefore not merely an additional filtering criterion, but an explicit routing decision over heterogeneous target evidence.', 'PSR makes an explicit routing decision over heterogeneous target evidence, extending sample selection into coordinated evidence control.'],
    ['This suppresses error-amplifying drift in source-sensitive layers while preserving useful plasticity elsewhere, rather than applying a single global stabilization rule to the entire model.', 'This layer-dependent control suppresses error-amplifying drift in source-sensitive layers while preserving useful plasticity elsewhere.'],
    ['\\textbf{Importantly, the unique advantage of DCF does not arise from any of these components in isolation.} It arises from coordinating', '\\textbf{The unique advantage of DCF is the coordinated control of the recurrent sample--layer feedback process.} DCF coordinates'],
    ['within the same recurrent adaptation loop. In this sense, DCF moves beyond homogeneous adaptation control: it controls not only whether the model adapts, but', 'within the same recurrent adaptation loop. DCF moves beyond homogeneous adaptation control by jointly determining whether the model adapts,'],
    ['as a coordinated sample--layer control framework rather than a collection of independent filtering, alignment, or regularization components.', 'as a coordinated sample--layer control framework that integrates evidence routing, geometry repair, and layer-dependent update persistence.'],
    ['Its role in DCF does not require identifying every possible shortcut in isolation; it is sufficient that the structured response provides complementary evidence for deciding which confident predictions should drive adaptation.', 'Within DCF, the structured response supplies complementary evidence for deciding which confident predictions should drive adaptation, directly supporting shortcut-sensitive routing.'],
    ['These results show that PCS is not merely a second threshold correlated with entropy: it captures', 'These results show that PCS captures'],
    ['Statistical inference is intentionally conducted at this aggregate run level, which matches the reported cross-domain summary metric; the per-transfer cells are reported with mean $\\pm$ standard deviation to transparently characterize the distribution of gains rather than being overinterpreted as independently powered significance tests.', 'Statistical inference uses matched run-level aggregates, consistent with the reported cross-domain summary metric. The per-transfer cells report mean $\\pm$ standard deviation to characterize the distribution and variability of the gains.'],
    ['This experiment therefore tests whether the representation-preservation behavior observed on ImageNet-C carries to a distinct dataset and a different family of domain shifts, rather than only to held-out corruptions within the same benchmark.', 'This experiment tests whether the representation-preservation behavior observed on ImageNet-C carries to a distinct dataset and a different family of domain shifts, extending the evaluation beyond held-out corruptions.'],
  ];
  for (const [before, after] of edits) fragment = fragment.replace(before, after);
  return fragment;
}

function prepare(fragment) {
  fragment=fragment.replace(/\\pageref\*?\{([^}]+)\}/g,(_,label)=>{
    const page=responsePages.get(label);
    if(!page)throw new Error('Missing compiled response page reference: '+label);
    return page;
  });
  // Expand the author's caption macro without losing nested emphasis or equations.
  fragment = fragment.replace(/\\manuscripttablecaption\{([^}]+)\}\{/g, '\\textit{\\textbf{Table~$1.} ');
  // Pandoc's table reader needs a plain alignment in spanning cells.
  fragment = fragment.replace(/(\\multicolumn\{\d+\})\{@\{\}([lcr])\}/g, '$1{$2}');
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
      const firstRow = fragment.slice(start, end).split('\\\\')[0];
      const columns = (firstRow.match(/&/g) || []).length + 1;
      return '\\begin{longtable}{' + 'l'.repeat(columns) + '}\n';
    })
    .replace(/\\begin\{minipage\}\[[bt]\]\{\\linewidth\}\\raggedright/g, '')
    .replace(/\\end\{minipage\}|\\strut|\\noalign\{\}/g, '')
    .replace(/\\(?:Needspace|label)\{[^}]*\}/g, '')
    .replace(/\\(?:vspace|hspace)\*?\{[^}]*\}/g, '')
    .replace(/\\(?:clearpage|noindent|centering|tightlist)/g, '')
    .replace(/\\(?:changeslabel|revisionlabel)\{/g, '\\textbf{')
    .replace(/\\begin\{(?:revisionquote|center)\}|\\end\{(?:revisionquote|center)\}/g, '')
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
          if (entry[2] !== 1) throw new Error('Row-spanning response table cell needs explicit handling');
          const decoded = cell(entry[4]);
          if (entry[3] > 1) decoded.colspan = entry[3];
          return decoded;
        });
        rows = [...block.c[3][1], ...block.c[4].flatMap(body => [...body[2], ...body[3]]), ...block.c[5][1]].map(decodeRow);
      } else throw new Error('Unsupported Pandoc table schema');
      result.push({ kind: 'table', rows });
    } else if (block.t === 'OrderedList' || block.t === 'BulletList') {
      const entries = block.t === 'OrderedList' ? block.c[1] : block.c;
      result.push({kind:'list', ordered:block.t === 'OrderedList', items:entries.map(entry => entry.map(part => {
        if (!['Para','Plain'].includes(part.t)) throw new Error('Unsupported list content: '+part.t);
        return {kind:'paragraph',html:inline(part.c),text:inline(part.c,false)};
      }))});
    } else if (block.t === 'BlockQuote') {
      for (const part of block.c) {
        if (!['Para','Plain'].includes(part.t)) throw new Error('Unsupported quote content: '+part.t);
        result.push({kind:'excerpt',html:inline(part.c),text:inline(part.c,false)});
      }
    } else if (block.t === 'Para' || block.t === 'Plain') {
      const picture = block.c.find(x => x.t === 'Image');
      if (picture) {
        const basename = path.basename(picture.c[2][0]);
        result.push({ kind: 'image', src: 'assets/response/' + (basename === 'retention_gate_heatmap.png' ? 'retention-gates.png' : basename.replace(/\.pdf$/i,'.png')), alt: basename.replace(/_/g,' ').replace(/\.(pdf|png)$/i,'') });
        continue;
      }
      const html = inline(block.c), text = inline(block.c, false);
      const kind = text.startsWith('Changes in the manuscript:') ? 'location'
        : /^"/.test(text) ? 'excerpt'
        : /^Table [IVX]+\.|^Fig\.\s*\d|^Evidence from|^Selected measurements|^Measurements from|^Additional evidence|^Definitions added|^Implementation settings|^Reproduced from/.test(text) ? 'caption' : 'paragraph';
      result.push({ kind, html, text });
    } else {
      throw new Error('Unsupported response block: ' + JSON.stringify(block));
    }
  }
  return result;
}

const headings = [...source.matchAll(/\\(?:subsection|section)\{([^}]*)\}(?:\\label\{[^}]+\})?/g)];
const parts = new Map();
const sourceComments = new Map();
for (let i = 0; i < headings.length; i++) {
  const title = headings[i][1];
  const fragment = source.slice(headings[i].index + headings[i][0].length, headings[i + 1]?.index ?? source.indexOf('\\end{document}'));
  const marker = '\\responselabel{Response}';
  const start = fragment.indexOf(marker);
  if (start < 0) continue;
  const link = /\\reviewlinks\{([^}]+)\}\{([^}]+)\}/.exec(fragment);
  const comment = /\\begin\{Comment\}\{([^}]+)\}([\s\S]*?)\\end\{Comment\}/.exec(fragment);
  const id = link?.[2];
  if (id && comment) {
    parts.set(id, blocks(directResponse(fragment.slice(start + marker.length))));
    const parsedComment = blocks(comment[2]);
    sourceComments.set(link[1], {title:comment[1].replace(/^(?:AE\d|R\d\.\d):\s*/,''),comment:parsedComment.map(b=>b.text||'').join(' ')});
  }
}
for (const comment of data.comments) {
  const key = comment.id === 'sae' ? 'SAE' : comment.label;
  const reply = comment.id === 'eic'
    ? parts.get('EIC')
    : parts.get(key);
  if (!reply?.length) throw new Error('Missing response: ' + key);
  comment.fullResponse = reply;
  Object.assign(comment, sourceComments.get(comment.id));
  const imageEvidence = {
    'ab_margin_3d_lambda_u2.png':'probe-sensitivity',
    'ab_margin_3d_N_sk_varepsilon.png':'sinkhorn',
    'retention-gates.png':'retention-heatmap',
    'imagenet_c_cross_heatmap_with_gain.png':'transfer',
    'domainnet_heatmap_with_gain.png':'domainnet',
  };
  for (let i=0;i<reply.length;i++) if(reply[i].kind==='image') {
    reply[i].evidenceId=imageEvidence[path.basename(reply[i].src)];
    if(reply[i+1]?.kind==='caption') {
      reply[i].alt=reply[i+1].text;
      reply[i+1].evidenceId=reply[i].evidenceId;
    }
  }
  comment.responseWordCount = reply.flatMap(b => b.rows ? b.rows.flat().map(c => c.text) : b.items ? b.items.flat().map(c=>c.text) : b.text || '').join(' ').split(/\s+/).filter(Boolean).length;
}

if (process.env.REVIEW_RESPONSES_ONLY === '1') {
  const start=source.indexOf('Dear Editor-in-Chief,');
  const end=source.indexOf('\\clearpage',start);
  if(start<0||end<0)throw new Error('Missing response-letter opening page');
  const opening=source.slice(start,end).replace(/\\vspace\{[^}]*\}/g,'').replace(/\\reviewwebsite/g,'https://tcsvt-29693-2026.xhy.im');
  const overview=blocks(opening);
  fs.writeFileSync(process.env.REVIEW_RESPONSE_OUTPUT, JSON.stringify({parts:[...parts], comments:data.comments,overview}, null, 2));
  process.exit(0);
}

const manuscript = read('latex_revise/main.tex');
const aux = read('latex_revise/main.aux');
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
    if (key.includes(',')) return key.split(',').map(k => manuscriptFragment('\\Cref{' + k.trim() + '}', referenceMap, citationMap)).join(' and ');
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
for (const [version, directory] of [['original', 'latex_old_version'], ['revised', 'latex_revise']]) {
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
const cleanManuscript=manuscript.replace(/(?<!\\)%[^\n]*/g,'');
const uncertaintyStart=cleanManuscript.indexOf('Beyond visual tasks,');
const uncertaintyEnd=cleanManuscript.indexOf('Nonetheless,',uncertaintyStart);
changes.get('uncertainty-literature').after=narrativeText(cleanManuscript.slice(uncertaintyStart,uncertaintyEnd),refs,cites);
const surveyStart=cleanManuscript.indexOf('Representative approaches update');
const surveyEnd=cleanManuscript.indexOf('Test-time training',surveyStart);
const goldStart=cleanManuscript.indexOf('CoTTA~\\cite{CoTTA}',cleanManuscript.indexOf('\\textbf{Reliability- and Stability-aware TTA.}'));
const goldLast='within one online adaptation loop.';
const goldEnd=cleanManuscript.indexOf(goldLast,goldStart)+goldLast.length;
if(goldStart<0||goldEnd<goldStart)throw new Error('Missing GOLD comparison boundary');
changes.get('recent-literature').after=narrativeText(cleanManuscript.slice(surveyStart,surveyEnd),refs,cites)+'\n\n'+narrativeText(cleanManuscript.slice(goldStart,goldEnd),refs,cites);

const figureLabels = {
  f1: 'fig:all_baselines_drop', f2: 'fig:motivation', f3: 'fig:overview', f4: 'fig:test_stream_type',
  f5: 'fig:ab_design_choices', f6: 'fig:qualitative_analysis', f7: 'fig:vis_pcs_entropy',
  f8: 'fig:drift_comparison', f9: 'fig:layerwise_mu', f10: 'fig:static_vs_t_cs', f12: 'fig:ab_hyperparameters',
};
for (const [version, directory] of [['original', 'latex_old_version'], ['revised', 'latex_revise']]) {
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
data.figures.find(f => f.id === 'f3').title='Route-adapt-retain overview';
data.figures.find(f => f.id === 'f7').title='PCS-entropy diagnostic regions';
data.meta.snapshot = '7 October 2026';
data.meta.revisedManuscriptSource = 'latex_revise/main.tex';
data.meta.fullResponseSource = responsePath;
data.meta.fullResponseSha256 = hash(responsePath);
for (const [version, dir] of [['original', 'latex_old_version'], ['revised', 'latex_revise']]) {
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
if(process.env.REVIEW_MANUSCRIPT_OUTPUT){
  fs.writeFileSync(process.env.REVIEW_MANUSCRIPT_OUTPUT,JSON.stringify(data,null,2));
  process.exit(0);
}
fs.writeFileSync(path.join(root, 'website/data.js'), 'window.REVIEW_DATA=' + JSON.stringify(data, null, 2) + ';\n');
console.log(manuscriptOnly
  ? 'Synchronized manuscript evidence, captions, narrative diffs and source hashes; response content preserved.'
  : `Synchronized ${data.comments.length} responses, PCS evidence, captions, narrative diffs, and source hashes.`);

