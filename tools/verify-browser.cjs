const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROME_EXECUTABLE, headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [], failedRequests = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('response', r => { if (r.status() >= 400) failedRequests.push(`${r.status()} ${r.url()}`); });
  await page.addInitScript(() => localStorage.setItem('dcf-reading-guide-v1', 'done'));
  const base = process.env.REVIEW_URL || 'http://127.0.0.1:4173/';
  const screenshots = process.env.REVIEW_SCREENSHOTS || path.join(__dirname, '../.deployment/browser-qa');
  fs.mkdirSync(screenshots, { recursive: true });
  await page.goto(base, { waitUntil: 'networkidle' });
  const data = await page.evaluate(() => window.REVIEW_DATA);
  async function route(hash) {
    await page.evaluate(hash => { location.hash = hash; }, hash);
    await page.waitForTimeout(80);
  }
  async function layout(label) {
    const state = await page.evaluate(() => ({
      overflow: document.documentElement.scrollWidth > innerWidth + 1,
      mathErrors: document.querySelectorAll('.katex-error').length,
      rawMath: document.querySelectorAll('[data-response-math]').length,
      brokenImages: [...document.images].filter(i => i.complete && !i.naturalWidth).map(i => i.src),
      unrenderedText: (() => {
        const issues=[],walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
        while(walker.nextNode()){
          const node=walker.currentNode,parent=node.parentElement;
          // KaTeX's hidden MathML annotations intentionally retain the source.
          if(!parent || parent.closest('.katex,script,style,code,pre'))continue;
          if(/⟪|⟫|\\[A-Za-z]+|&(?:amp|lt|gt|quot|#\d+|#x[\da-f]+);|[\uE000\uE001\uE100\uE101]/i.test(node.textContent)){
            issues.push({text:node.textContent.slice(0,250),element:parent.className});
          }
        }
        return issues;
      })(),
      nestedMath: document.querySelectorAll('.review-math .review-math').length,
    }));
    assert(!state.overflow, `${label}: page overflows`);
    assert.equal(state.mathErrors, 0, label);
    assert.equal(state.rawMath, 0, label);
    assert.deepEqual(state.brokenImages, [], label);
    assert.deepEqual(state.unrenderedText, [], `${label}: raw formula or HTML escape displayed`);
    assert.equal(state.nestedMath,0,`${label}: formula rendered twice`);
  }
  async function inspectDialog(item, label) {
    await page.waitForSelector('#dialog[open]');
    await page.locator('#dialog .compare-image').evaluateAll(images => images.forEach(img => { img.loading = 'eager'; }));
    await page.waitForFunction(() => [...document.querySelectorAll('#dialog .compare-image')].every(img => img.complete && img.naturalWidth > 0));
    const images = await page.locator('#dialog .compare-image').evaluateAll(images => images.map(img => ({src: img.src, alt: img.alt})));
    for (const version of ['original', 'revised']) {
      if (!item[version]) continue;
      const image = images.find(img => new URL(img.src).pathname.endsWith('/' + item[version].image));
      assert(image, `${label}: missing ${version} source crop`);
      assert.equal(new URL(image.src).searchParams.get('v'), data.meta.hashes[version].pdf.slice(0, 12), `${label}: stale crop URL`);
      assert(image.alt.includes('page ' + item[version].page), `${label}: stale page label`);
    }
    await layout(label + '/images');
    if (item.before || item.after) {
      await page.locator('#dialog [data-mode="text"]').click();
      await layout(label + '/text');
    }
    await page.locator('#dialog [data-action="close-dialog"]').click();
  }
  for (const size of [{ width: 1440, height: 1000 }, { width: 390, height: 844 }]) {
    await page.setViewportSize(size);
    await route('#review/overview');
    await layout(`${size.width}/overview`);
    for (const comment of data.comments) {
      await route('#review/' + comment.id);
      await page.waitForSelector('.response-copy');
      await layout(`${size.width}/${comment.id}`);
    }
    // Regression checks for formulas in reviewer quotations, the route omitted
    // by the earlier audit of response HTML and mathematical source validity.
    await route('#review/r1-1');
    assert.equal(await page.locator('#review-comment .review-math').evaluateAll(nodes=>nodes.filter(n=>n.dataset.latex==='\\lambda').length),1);
    await page.locator('#review-comment').screenshot({path:path.join(screenshots,`dcf-comment-lambda-${size.width}.png`)});
    await route('#review/r1-4');
    assert.equal(await page.locator('#review-comment .review-math').evaluateAll(nodes=>nodes.filter(n=>n.dataset.latex==='\\mu_{t}^{l}').length),2);
    await route('#review/r1-1');
    await page.screenshot({ path: path.join(screenshots, `dcf-review-${size.width}.png`) });
    await route('#review/r1-6');
    await page.locator('.response-subheading').filter({ hasText: 'Variability across five runs' }).scrollIntoViewIfNeeded();
    await page.screenshot({ path: path.join(screenshots, `dcf-transfer-response-${size.width}.png`) });
    await route('#gallery');
    for (const figure of data.figures) {
      await page.locator(`[data-figure="${figure.id}"]`).first().click();
      await inspectDialog(figure, `${size.width}/gallery/${figure.id}`);
    }
    await route('#additions');
    await layout(`${size.width}/additions`);
    for (const item of data.changes.filter(c => c.status === 'added')) {
      await page.locator(`[data-inspect="${item.id}"]`).first().click();
      await inspectDialog(item, `${size.width}/addition/${item.id}`);
    }
    await route('#map');
    await page.locator('[data-map-mode="mapped"]').click();
    for (const item of data.changes) {
      await page.locator(`[data-inspect="${item.id}"]`).first().click();
      await inspectDialog(item, `${size.width}/map/${item.id}`);
    }
    await page.locator('[data-map-mode="narrative"]').click();
    for (let i = 0; i < data.sections.length; i++) {
      await page.locator(`[data-text-section="${i}"] summary`).click();
      await layout(`${size.width}/section-${i}`);
    }
    await page.locator('#pdf-menu').click();
    assert(await page.locator('#dialog a[href^="assets/pdf/response.pdf?v="]').count() > 0);
    await page.locator('#dialog [data-action="close-dialog"]').click();
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  // Check every mapped overlay, its coordinates and the dialog reached by a page tag.
  for (const item of data.changes.filter(c => c.revised.box)) {
    await route('#pdf/' + item.id);
    const boxes = await page.locator(`[data-pdf-scroll="revised"] .pdf-page-item[data-page="${item.revised.page}"] .pdf-region[data-inspect="${item.id}"]`).evaluateAll(regions => regions.map(el => [el.style.left, el.style.top, el.style.width, el.style.height].map(parseFloat)));
    assert.deepEqual(boxes, item.revised.boxes || [item.revised.box], item.id + ': incorrect highlight geometry');
    await page.locator(`[data-pdf-scroll="revised"] .pdf-page-item[data-page="${item.revised.page}"] .pdf-page-tag[data-inspect="${item.id}"]`).click();
    await inspectDialog(item, 'pdf-highlight/' + item.id);
  }
  for (const id of ['probe-theory', 'pcs-definition', 'domainnet', 'transfer', 'efficiency', 'probe-sensitivity', 'threshold-guidance']) {
    await route('#pdf/' + id);
    await page.waitForFunction(() => document.querySelector('[data-pdf-scroll="revised"] canvas:not([hidden])')?.width > 0, null, { timeout: 30_000 });
    const pixels = await page.evaluate(() => {
      const canvas = document.querySelector('[data-pdf-scroll="revised"] canvas:not([hidden])');
      const ctx = canvas.getContext('2d');
      const image = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      let nonwhite = 0;
      for (let i = 0; i < image.length; i += 16) if (image[i] < 240 || image[i + 1] < 240 || image[i + 2] < 240) nonwhite++;
      return nonwhite;
    });
    assert(pixels > 1000, `${id}: blank PDF canvas`);
    await page.screenshot({ path: path.join(screenshots, `dcf-pdf-${id}.png`) });
    await layout(`desktop/pdf-${id}`);
  }
  assert.deepEqual(errors, []);
  assert.deepEqual(failedRequests, []);
  console.log('Verified the opening letter, 17 replies and reviewer quotations, every figure/addition/change-map dialog on desktop and mobile, all mapped PDF highlights, 12 narrative diffs, assets/downloads, seven native PDF views, and no exposed formula markers, LaTeX commands, HTML escapes or duplicate math rendering.');
  await browser.close();
})().catch(error => { console.error(error); process.exit(1); });
