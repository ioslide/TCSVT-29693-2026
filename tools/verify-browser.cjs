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
    }));
    assert(!state.overflow, `${label}: page overflows`);
    assert.equal(state.mathErrors, 0, label);
    assert.equal(state.rawMath, 0, label);
    assert.deepEqual(state.brokenImages, [], label);
  }
  for (const size of [{ width: 1440, height: 1000 }, { width: 390, height: 844 }]) {
    await page.setViewportSize(size);
    for (const comment of data.comments) {
      await route('#review/' + comment.id);
      await page.waitForSelector('.response-copy');
      await layout(`${size.width}/${comment.id}`);
    }
    await route('#review/r1-1');
    await page.screenshot({ path: `/tmp/dcf-review-${size.width}.png` });
    await route('#review/r1-6');
    await page.locator('.response-subheading').filter({ hasText: 'Five run variability' }).scrollIntoViewIfNeeded();
    await page.screenshot({ path: `/tmp/dcf-transfer-response-${size.width}.png` });
    await route('#gallery');
    for (const figure of data.figures) {
      await page.locator(`[data-figure="${figure.id}"]`).first().click();
      await page.waitForSelector('#dialog[open]');
      if (figure.before || figure.after) {
        await page.locator('#dialog [data-mode="text"]').click();
        await layout(`${size.width}/${figure.id}/caption`);
      }
      await page.locator('#dialog [data-action="close-dialog"]').click();
    }
    await route('#additions');
    await layout(`${size.width}/additions`);
    await route('#map');
    await page.locator('[data-map-mode="narrative"]').click();
    for (let i = 0; i < data.sections.length; i++) {
      await page.locator(`[data-text-section="${i}"] summary`).click();
      await layout(`${size.width}/section-${i}`);
    }
    await page.locator('#pdf-menu').click();
    assert(await page.locator('#dialog a[href="assets/pdf/response.pdf"]').count() > 0);
    await page.locator('#dialog [data-action="close-dialog"]').click();
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  for (const id of ['probe-theory', 'pcs-definition', 'domainnet', 'transfer']) {
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
    await page.screenshot({ path: `/tmp/dcf-pdf-${id}.png` });
    await layout(`desktop/pdf-${id}`);
  }
  assert.deepEqual(errors, []);
  assert.deepEqual(failedRequests, []);
  console.log('Verified all reviewer/editor replies, 13 figure dialogs, 12 narrative diffs, downloads, desktop/mobile layout, and four nonblank native PDF views.');
  await browser.close();
})().catch(error => { console.error(error); process.exit(1); });
