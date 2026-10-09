const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {chromium} = require('playwright');

(async () => {
  const output = path.join(__dirname, '../.deployment/alignment-20261008');
  const audit = JSON.parse(fs.readFileSync(path.join(output, 'response-links.json'), 'utf8'));
  const browser = await chromium.launch({executablePath: process.env.CHROME_EXECUTABLE, headless: true});
  const base = process.env.REVIEW_URL || 'http://127.0.0.1:4173/';
  const results = [], errors = [];
  for (const width of [1440, 390]) {
    const page = await browser.newPage({viewport: {width, height: 1000}});
    page.on('pageerror', error => errors.push(error.message));
    await page.addInitScript(() => localStorage.setItem('dcf-reading-guide-v1', 'done'));
    await page.emulateMedia({reducedMotion: 'reduce'});
    for (const {url, page: sourcePage} of audit.external_links) {
      const hash = new URL(url).hash;
      const parts = hash.slice(1).split('/');
      const cid = parts[0] === 'review' ? parts[1] : parts[2];
      const evidence = parts[0] === 'review' ? parts[2] : parts[1];
      await page.goto(base + hash, {waitUntil: 'networkidle'});
      if (parts[0] === 'review') {
        await page.waitForFunction(id => document.querySelector('#review-evidence-select')?.value === id, evidence);
        await page.waitForFunction(() => {
          const rect = document.getElementById('evidence')?.getBoundingClientRect();
          return rect && rect.top < innerHeight - 150;
        });
        const state = await page.evaluate(cid => {
          const c = window.REVIEW_DATA.comments.find(x => x.id === cid);
          const response = document.getElementById('review-response');
          return {title: document.querySelector('.view-header h1').textContent, expectedTitle: c.title,
            actualTables: response.querySelectorAll('.response-table').length,
            expectedTables: c.fullResponse.filter(b => b.kind === 'table').length,
            actualFigures: response.querySelectorAll('.response-figure').length,
            expectedFigures: c.fullResponse.filter(b => b.kind === 'image').length,
            evidenceTop: document.getElementById('evidence').getBoundingClientRect().top};
        }, cid);
        assert.equal(state.title, state.expectedTitle);
        assert.equal(state.actualTables, state.expectedTables, cid + ': extra/missing response tables');
        assert.equal(state.actualFigures, state.expectedFigures, cid + ': extra/missing response figures');
        assert(state.evidenceTop >= 108, cid + ': evidence hidden under header');
        await page.locator('[data-review-section="response"]').click();
        await page.waitForFunction(() => document.querySelector('[data-review-section="response"]').getAttribute('aria-current') === 'location');
        const responseTop = await page.locator('#review-response').evaluate(el => el.getBoundingClientRect().top);
        assert(responseTop >= 108 && responseTop < 850, cid + ': response section navigation offset');
      } else {
        await page.waitForFunction(({cid, evidence}) => document.querySelector('#pdf-comment')?.value === cid &&
          document.querySelector('#change-select')?.value === evidence, {cid, evidence});
        const expected = await page.evaluate(id => window.REVIEW_DATA.changes.find(x => x.id === id).revised.page, evidence);
        assert.equal(Number(await page.locator('#revised-page').inputValue()), expected, cid + ': PDF starts on wrong page');
      }
      assert(!await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1));
      results.push({width, sourcePage, hash, passed: true});
    }
    await page.close();
  }
  assert.deepEqual(errors, []);
  await browser.close();
  fs.writeFileSync(path.join(output, 'response-web-links.json'), JSON.stringify(results, null, 2));
  console.log(`Verified all ${audit.external_links.length} response-PDF website routes on desktop and mobile, exact reply table/figure counts, response-section positions and PDF starting pages.`);
})().catch(error => {console.error(error); process.exit(1)});
