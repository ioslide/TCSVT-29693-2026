const assert = require('node:assert/strict');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROME_EXECUTABLE, headless: true });
  const page = await browser.newPage();
  const base = process.env.REVIEW_URL || 'http://127.0.0.1:4173/';
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.addInitScript(() => localStorage.setItem('dcf-reading-guide-v1', 'done'));
  await page.emulateMedia({ reducedMotion: 'reduce' });
  async function point(step) {
    const rect = await page.locator(`[data-evidence-step="${step}"]`).boundingBox();
    return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
  }
  async function expectPosition(before, step) {
    const after = await point(step);
    assert(Math.abs(before.x - after.x) < 1 && Math.abs(before.y - after.y) < 1,
      `Paging button moved: ${JSON.stringify({ before, after })}`);
  }
  for (const width of [1920, 1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const comment of ['r1-1', 'r1-3', 'eic']) {
      await page.goto(base + '#review/' + comment, { waitUntil: 'networkidle' });
      const ids = await page.evaluate(id => window.REVIEW_DATA.comments.find(c => c.id === id).changes, comment);
      await page.locator('[data-action="jump-evidence"]').click();
      const next = await point(1), previous = await point(-1);
      for (let i = 1; i < ids.length; i++) {
        await page.mouse.click(next.x, next.y);
        await page.waitForFunction(id => document.querySelector('#review-evidence-select').value === id, ids[i]);
        await page.waitForTimeout(100);
        await expectPosition(next, 1);
        await expectPosition(previous, -1);
      }
      for (let i = ids.length - 2; i >= 0; i--) {
        await page.mouse.click(previous.x, previous.y);
        await page.waitForFunction(id => document.querySelector('#review-evidence-select').value === id, ids[i]);
        await page.waitForTimeout(100);
        await expectPosition(next, 1);
        await expectPosition(previous, -1);
      }
      if (comment === 'eic') {
        // Move down a tall passage until the toolbar is sticky, then switch to a short one.
        await page.evaluate(() => window.scrollBy(0, 260));
        const stickyNext = await point(1), stickyPrevious = await point(-1);
        for (let cycle = 0; cycle < 3; cycle++) {
          await page.mouse.click(stickyNext.x, stickyNext.y);
          await page.waitForFunction(id => document.querySelector('#review-evidence-select').value === id, ids[1]);
          await page.waitForTimeout(100);
          await expectPosition(stickyNext, 1);
          assert(await page.locator('#review-evidence-stage .evidence-header').isVisible());
          await page.mouse.click(stickyPrevious.x, stickyPrevious.y);
          await page.waitForFunction(id => document.querySelector('#review-evidence-select').value === id, ids[0]);
          await expectPosition(stickyPrevious, -1);
        }
      }
    }
  }
  assert.deepEqual(errors, []);
  await browser.close();
  console.log('Verified repeated clicks at unchanged mouse coordinates, forward/backward paging, tall-to-short passages, and sticky toolbars at 1920, 1440 and 390 px.');
})().catch(error => { console.error(error); process.exit(1); });
