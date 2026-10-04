const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROME_EXECUTABLE, headless: true });
  const page = await browser.newPage();
  const base = process.env.REVIEW_URL || 'http://127.0.0.1:4173/';
  const output = path.join(__dirname, '../.deployment/pdf-context');
  fs.mkdirSync(output, { recursive: true });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.addInitScript(() => localStorage.setItem('dcf-reading-guide-v1', 'done'));
  async function expectContext(comment, evidence = 'free') {
    await page.waitForFunction(({ comment, evidence }) => document.querySelector('#pdf-comment')?.value === comment && document.querySelector('#change-select')?.value === evidence, { comment, evidence });
    const expected = await page.evaluate(({ comment, evidence }) => {
      const c = window.REVIEW_DATA.comments.find(c => c.id === comment);
      const e = window.REVIEW_DATA.changes.find(c => c.id === evidence);
      return c.title + ' — ' + (e?.title || 'Full manuscripts / free comparison');
    }, { comment, evidence });
    assert.equal(await page.locator('.view-header h1').textContent(), expected);
  }
  async function expectUnclippedTags(expectedHeaders = 2) {
    const state = await page.locator('.pdf-page-item[data-page="4"] .pdf-page-number').evaluateAll(headers => headers.map(header => {
      const tags = header.querySelector('.pdf-page-tags'), rect = tags.getBoundingClientRect();
      return {
        overflows: tags.scrollWidth > tags.clientWidth + 1,
        clipped: [...tags.children].some(tag => {
          const box = tag.getBoundingClientRect();
          return box.left < rect.left - 1 || box.right > rect.right + 1 || box.bottom > header.getBoundingClientRect().bottom + 1;
        }),
        wrap: getComputedStyle(tags).flexWrap,
      };
    }));
    assert.equal(state.length, expectedHeaders);
    for (const header of state) assert(header.wrap === 'wrap' && !header.overflows && !header.clipped, JSON.stringify(header));
  }
  for (const width of [1920, 1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto(base + '#review/r1-1', { waitUntil: 'networkidle' });
    assert.equal(await page.locator('#review-pdf-link').getAttribute('href'), '#pdf/free/r1-1');
    await page.locator('#review-pdf-link').click();
    await expectContext('r1-1');
    assert.equal(await page.locator('[data-pdf-scroll="revised"] .pdf-page-item').count(), 14);
    await page.selectOption('#change-select', 'probe-theory');
    await expectContext('r1-1', 'probe-theory');
    await page.selectOption('#change-select', 'free');
    await expectContext('r1-1');
    await page.selectOption('#pdf-comment', 'r1-3');
    await expectContext('r1-3');
    await page.selectOption('#pdf-role', 'Reviewer 2');
    assert.equal(await page.locator('#pdf-comment').inputValue(), 'all');
    assert.equal(await page.locator('#change-select').inputValue(), 'free');
    await page.selectOption('#pdf-comment', 'r2-3');
    await expectContext('r2-3');
    // Evidence-specific links still open their exact mapped item and retain the comment.
    await page.goto(base + '#review/r1-1', { waitUntil: 'networkidle' });
    const evidence = await page.locator('#review-evidence-select').inputValue();
    await page.locator('#review-evidence-stage .pdf-cta').click();
    await expectContext('r1-1', evidence);
    await page.selectOption('#change-select', 'free');
    await page.selectOption('#original-page', '4');
    await page.waitForFunction(() => document.querySelector('[data-pdf-scroll="revised"] .pdf-page-item[data-page="4"]')?.dataset.rendered === 'true');
    await expectContext('r1-1');
    await expectUnclippedTags();
    await page.screenshot({ path: path.join(output, `comparison-${width}.png`) });
    if (width > 800) {
      await page.selectOption('#change-select', 'probe-theory');
      await page.locator('[data-action="focus-evidence"]').click();
      await expectUnclippedTags(1);
    }
    assert(!await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1));
  }
  assert.deepEqual(errors, []);
  await browser.close();
  console.log('Verified comment-level full comparison, contextual titles, role/comment/evidence switching, exact evidence links, and unclipped wrapping page tags on desktop, mobile and zoomed PDFs.');
})().catch(error => { console.error(error); process.exit(1); });
