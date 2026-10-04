const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROME_EXECUTABLE, headless: true });
  const page = await browser.newPage();
  const base = process.env.REVIEW_URL || 'http://127.0.0.1:4173/';
  const output = path.join(__dirname, '../.deployment/evidence-navigation');
  fs.mkdirSync(output, { recursive: true });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.addInitScript(() => localStorage.setItem('dcf-reading-guide-v1', 'done'));
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto(base + '#review/r1-3', { waitUntil: 'networkidle' });
    const comments = await page.evaluate(() => window.REVIEW_DATA.comments);
    for (const comment of comments) {
      await page.evaluate(id => { location.hash = '#review/' + id; }, comment.id);
      await page.waitForFunction(title => document.querySelector('.view-header h1')?.textContent === title, comment.title);
      assert.deepEqual(await page.locator('.review-evidence-section').evaluateAll(sections => sections.map(section => section.dataset.evidence)), comment.changes, comment.id + ': missing or reordered evidence');
      for (const id of comment.changes) assert.equal(await page.locator('#evidence-' + id + ' .pdf-cta').getAttribute('href'), '#pdf/' + id + '/' + comment.id);
    }
    await page.goto(base + '#review/r1-3', { waitUntil: 'networkidle' });
    const ids = await page.evaluate(() => window.REVIEW_DATA.comments.find(c => c.id === 'r1-3').changes);
    assert.equal(await page.locator('.review-evidence-section').count(), ids.length);
    assert.equal(await page.locator('.rail-change.selected').count(), 0, 'No evidence should be marked while reading the response');
    // A mode belongs to its own evidence block, and every other block remains present.
    await page.locator('#evidence-' + ids[0] + ' [data-mode="text"]').click();
    assert.equal(await page.locator('#evidence-' + ids[0] + ' [data-mode="text"]').getAttribute('aria-pressed'), 'true');
    assert.equal(await page.locator('#evidence-' + ids[1] + ' [data-mode="split"]').getAttribute('aria-pressed'), 'true');
    for (const id of ids) {
      // Scroll manually: the navigation follows the passage without a click or replacing content.
      await page.evaluate(id => document.getElementById('evidence-' + id).scrollIntoView({ block: 'start', behavior: 'instant' }), id);
      await page.waitForFunction(id => [...document.querySelectorAll('.rail-change')].filter(a => a.dataset.change === id).every(a => a.getAttribute('aria-current') === 'location'), id);
      assert.equal(await page.locator('.review-evidence-section').count(), ids.length);
      assert.equal(await page.locator('#review-pdf-link').getAttribute('href'), '#pdf/' + id + '/r1-3');
    }
    if (width === 1440) {
      await page.locator('.rail [data-change="' + ids[0] + '"]').click();
    } else {
      await page.locator('.mobile-evidence summary').click();
      await page.locator('.mobile-evidence [data-change="' + ids[0] + '"]').click();
    }
    await page.waitForFunction(id => document.activeElement?.id === 'evidence-' + id, ids[0]);
    assert.equal(await page.locator('.review-evidence-section').count(), ids.length);
    assert.equal(await page.locator('#evidence-' + ids[0] + ' [data-mode="text"]').getAttribute('aria-pressed'), 'true', 'Jumping must preserve comparison state');
    await page.screenshot({ path: path.join(output, `evidence-${width}.png`) });
    // Existing response-letter URLs open the intended evidence in the complete list.
    await page.goto(base + '#review/r1-3/' + ids[1], { waitUntil: 'networkidle' });
    await page.waitForFunction(id => document.querySelector('.rail-change.selected')?.dataset.change === id, ids[1]);
    assert.equal(await page.locator('.review-evidence-section').count(), ids.length);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.waitForFunction(() => document.querySelectorAll('.rail-change.selected').length === 0);
    assert(!await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1));
  }
  assert.deepEqual(errors, []);
  await browser.close();
  console.log('Verified all evidence stays visible, independent comparison modes, scroll-aware navigation, desktop/mobile jumps, and existing deep links.');
})().catch(error => { console.error(error); process.exit(1); });
