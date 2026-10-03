import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const read = file => fs.readFileSync(path.join(root, file));
const sha = file => createHash('sha256').update(read(file)).digest('hex');
const context = { window: {} };
vm.runInNewContext(read('website/data.js').toString(), context);
const data = context.window.REVIEW_DATA;
const katex = createRequire(import.meta.url)('../assets/vendor/katex/katex.min.js');
assert.equal(data.comments.length, 17);
assert.deepEqual(Array.from(data.comments.find(c=>c.id==='eic').responseSourceSections), ['EIC'], 'The editorial request must be one merged response');
assert.equal(data.overview.filter(b => /^[1-3]\. /.test(b.text)).length, 3, 'Overview must preserve all three opening-letter revision groups');
assert(data.overview.some(b => b.text.startsWith('Dear Dr.')), 'Missing opening salutation');
assert(data.overview.some(b => b.text.includes('Corresponding authors, on behalf of all authors')), 'Missing complete closing signature');
assert.equal(data.changes.length, 26);
assert.equal(data.figures.length, 13);
assert.equal(data.sections.length, 12);
assert.equal(data.meta.fullResponseSha256, sha(data.meta.fullResponseSource));
assert.equal(data.meta.responseRevision, 'v12');
assert(data.meta.fullResponseSource.includes('revise/Response_to_Editors_and_Reviewers_TCSVT_GPT5-6_v12/'));
assert.equal(data.meta.responsePdfSha256, sha('website/assets/pdf/response.pdf'));
for (const [version, directory] of [['original', 'latex_old_version'], ['revised', 'latex']]) {
  if(data.meta.hashes[version].pdf !== sha(directory + '/main.pdf')) {
    // Recompilation may change PDF metadata without changing the displayed pages.
    const python=process.env.REVIEW_PYTHON || 'C:/Users/Administrator/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe';
    const equivalent=spawnSync(python,['-c',String.raw`import sys,re,pypdfium2 as p,hashlib
a=p.PdfDocument(sys.argv[1]);b=p.PdfDocument(sys.argv[2]);assert len(a)==len(b)
for i in range(len(a)):
 assert re.sub(r'\s+','',a[i].get_textpage().get_text_range())==re.sub(r'\s+','',b[i].get_textpage().get_text_range())
 assert hashlib.sha256(a[i].render(scale=.5).to_pil().tobytes()).digest()==hashlib.sha256(b[i].render(scale=.5).to_pil().tobytes()).digest()
`,path.join(root,directory,'main.pdf'),path.join(root,'website/assets/pdf',version+'.pdf')],{encoding:'utf8'});
    assert.equal(equivalent.status,0,'Current manuscript PDF differs from website evidence: '+equivalent.stderr);
  }
  assert.equal(data.meta.hashes[version].pdf, sha('website/assets/pdf/' + version + '.pdf'));
  assert.equal(data.meta.hashes[version].tex, sha(directory + '/main.tex'));
  for (let n = 1; n <= data.meta.pages[version]; n++) read(`website/assets/pages/${version}-${n}.webp`);
}
for (const item of [...data.changes, ...data.figures, ...data.sections]) {
  for (const [version, field] of [['original', 'before'], ['revised', 'after']]) {
    assert.equal(item.diff[version].map(d => d.text).join(''), item[field], `Diff text mismatch: ${item.id || item.title}/${version}`);
    const ref = item[version];
    if (!ref) continue;
    assert(ref.page >= 1 && ref.page <= data.meta.pages[version], item.id);
    read('website/' + ref.image);
    for (const box of ref.boxes || (ref.box ? [ref.box] : [])) {
      assert(box[0] >= 0 && box[1] >= 0 && box[0] + box[2] <= 100 && box[1] + box[3] <= 100, item.id);
    }
  }
}
let mathCount = 0;
function walk(value, location = '') {
  if (typeof value === 'string') {
    for (const m of value.matchAll(/\u27ea(.*?)\u27eb/gs)) {
      katex.renderToString(m[1], { throwOnError: true, strict: false, displayMode: m[1].startsWith('\\displaystyle') });
      mathCount++;
    }
    for (const m of value.matchAll(/data-response-math="([^"]*)" data-display="(true|false)"/g)) {
      const latex = m[1].replace(/&(amp|lt|gt|quot|#39);/g, (_, name) => ({ amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'" })[name]);
      katex.renderToString(latex, { throwOnError: true, strict: false, displayMode: m[2] === 'true' });
      mathCount++;
    }
  } else if (value && typeof value === 'object') {
    for (const [key, child] of Object.entries(value)) walk(child, location + '.' + key);
  }
}
walk(data);
for (const comment of data.comments) {
  assert(comment.fullResponse.length > 0, comment.id);
  for (const id of comment.changes) assert(data.changes.some(c => c.id === id), id);
  for (const b of comment.fullResponse) if (b.kind === 'image') read('website/' + b.src);
  for (const b of comment.fullResponse) if (b.kind === 'table') {
    assert(b.rows.length > 1, 'Incomplete reply table: '+comment.id);
    assert(b.rows.every(row=>row.length===b.rows[0].length), 'Split table rows: '+comment.id);
    assert(b.rows.every(row=>row.some(cell=>cell.text.trim())), 'Blank reply table row: '+comment.id);
  }
  const text = [...comment.response, ...comment.fullResponse.map(b => b.text || '')].join(' ');
  assert(!/we do not claim|does not guarantee|do not establish|rather than|not only|without implying/i.test(text), `Defensive author text: ${comment.id}`);
}
const transferTable = data.comments.find(c => c.id === 'r1-6').fullResponse.find(b => b.kind === 'table');
assert.equal(transferTable.rows.length, 3, 'Transfer summary must have one header and two complete data rows');
assert(transferTable.rows[1][0].text.includes('ImageNet-C') && transferTable.rows[1][1].text.includes('30.30'), 'ImageNet-C transfer cells are misaligned');
assert(transferTable.rows[2][0].text.includes('DomainNet-126') && transferTable.rows[2][1].text.includes('61.40') && transferTable.rows[2][2].text.includes('60.13'), 'DomainNet transfer cells are misaligned');
const resourceTable = data.comments.find(c => c.id === 'r1-3').fullResponse.find(b => b.kind === 'table');
assert.equal(resourceTable.rows.length, 15, 'Table XI must include all 14 methods');
const liteRow = resourceTable.rows.find(row => row[0].text === 'DCF-Lite');
assert.deepEqual(Array.from(liteRow, cell => cell.text), ['DCF-Lite', '9.4', '6,080', '3.19', '42.06']);
const probeFigures = data.comments.find(c => c.id === 'r1-1').fullResponse.filter(b => b.kind === 'image');
assert(probeFigures.some(b => b.evidenceId === 'probe-sensitivity'), 'Missing Fig. 12(c) in the complete probe response');
assert(probeFigures.some(b => b.evidenceId === 'sinkhorn'), 'Missing Fig. 12(d) in the complete probe response');
const theory = data.changes.find(c => c.id === 'probe-theory');
assert(theory.after.includes('(-g_x^\\top\\delta)_+^2'));
assert(theory.after.includes('bounded above'));
const routing = data.sections.find(s => s.title === 'Sample routing');
assert(routing.after.includes('positive-part operation'));
assert(!routing.after.includes('\\left| p_'));
console.log(`Verified 17 responses, 26 mappings, 13 figures, 12 complete narrative sections, all assets and source hashes, and ${mathCount} mathematical expressions.`);
