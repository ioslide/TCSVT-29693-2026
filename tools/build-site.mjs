import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const site = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(site, '_site');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(site, 'data.js'), 'utf8'), context);
const data = context.window.REVIEW_DATA;
assert(data && data.comments.length === 17, 'Expected 17 review comments');
assert(/^v\d+$/.test(data.meta.responseRevision), 'Missing response revision');

const referenced = new Set();
function inspect(value) {
  if (typeof value === 'string' && /^assets\/[\w./-]+$/.test(value)) referenced.add(value);
  else if (Array.isArray(value)) value.forEach(inspect);
  else if (value && typeof value === 'object') Object.values(value).forEach(inspect);
}
inspect(data);
for (const asset of referenced) {
  const resolved = path.resolve(site, asset);
  assert(resolved.startsWith(site + path.sep), 'Asset is outside the website');
  assert(fs.statSync(resolved).isFile(), `Missing asset: ${asset}`);
}
for (const name of ['original', 'revised', 'response']) {
  assert(fs.statSync(path.join(site, 'assets', 'pdf', name + '.pdf')).size > 0);
}
const rootFiles = fs.readdirSync(site).filter(name => /\.(html|js|css)$/.test(name));
const hash = createHash('sha256');
for (const name of [...rootFiles].sort()) hash.update(fs.readFileSync(path.join(site, name)));
const version = hash.digest('hex').slice(0, 12);

// Delete only this script's fixed output directory inside the website checkout.
assert.equal(path.dirname(output), site);
assert.equal(path.basename(output), '_site');
fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output);
for (const name of rootFiles) fs.copyFileSync(path.join(site, name), path.join(output, name));
fs.cpSync(path.join(site, 'assets'), path.join(output, 'assets'), { recursive: true });
for (const name of ['CNAME', '.nojekyll']) fs.copyFileSync(path.join(site, name), path.join(output, name));
const index = path.join(output, 'index.html');
fs.writeFileSync(index, fs.readFileSync(index, 'utf8').replace(/([?&])v=\d+/g, `$1v=${version}`));
console.log(`Packaged 17 review comments, ${referenced.size} referenced assets, and three PDFs; cache version ${version}.`);
