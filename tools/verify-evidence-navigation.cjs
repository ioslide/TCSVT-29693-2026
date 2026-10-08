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
 const errors=[];page.on('pageerror',error=>errors.push(error.message));
 await page.addInitScript(()=>localStorage.setItem('dcf-reading-guide-v1','done'));
 await page.emulateMedia({reducedMotion:'reduce'});
 for (const width of [1440,390]) {
  await page.setViewportSize({width,height:1000});
  await page.goto(base+'#review/r1-3',{waitUntil:'networkidle'});
  const comments=await page.evaluate(()=>window.REVIEW_DATA.comments);
  for(const comment of comments){
   await page.evaluate(id=>{location.hash='#review/'+id},comment.id);
   await page.waitForFunction(title=>document.querySelector('.view-header h1')?.textContent===title,comment.title);
   assert.equal(await page.locator('.review-section-nav').count(),1);
   assert.equal(await page.locator('.review-evidence-directory').getAttribute('open'),null,'Evidence directory must start collapsed');
   assert.equal(await page.locator('.review-evidence-section').count(),1);
   assert.equal(await page.locator('#review-pdf-link').getAttribute('href'),'#pdf/free/'+comment.id);
   assert.deepEqual(await page.locator('#review-evidence-select option').evaluateAll(options=>options.map(option=>option.value)),comment.changes);
   if(comment.changes.length>1){
    for(const [index,id] of comment.changes.entries()){
     await page.selectOption('#review-evidence-select',id);
     assert.equal(await page.locator('.review-evidence-section').getAttribute('data-evidence'),id);
     assert.equal(await page.locator('#evidence-position').textContent(),`${index+1} / ${comment.changes.length}`);
     assert.equal(await page.locator('#review-evidence-stage .pdf-cta').getAttribute('href'),'#pdf/'+id+'/'+comment.id);
    }
   }
   assert(!await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1));
  }
  await page.goto(base+'#review/r1-3',{waitUntil:'networkidle'});
  const ids=await page.evaluate(()=>window.REVIEW_DATA.comments.find(c=>c.id==='r1-3').changes);
  await page.locator('[data-review-section="response"]').click();
  await page.waitForFunction(()=>document.querySelector('[data-review-section="response"]').getAttribute('aria-current')==='location');
  await page.locator('.review-evidence-directory summary').click();
  assert(await page.locator('.review-evidence-directory').evaluate(el=>el.open));
  await page.locator('.review-evidence-link[data-change="'+ids.at(-1)+'"]').click();
  assert.equal(await page.locator('#review-evidence-select').inputValue(),ids.at(-1));
  await page.waitForFunction(()=>document.getElementById('evidence').getBoundingClientRect().top<innerHeight-150);
  assert.equal(await page.locator('.review-evidence-link.selected').getAttribute('data-change'),ids.at(-1));
  await page.goto(base+'#review/r1-3',{waitUntil:'networkidle'});
  assert(await page.locator('[data-evidence-step="-1"]').isDisabled());
  await page.locator('[data-action="jump-evidence"]').click();
  await page.locator('#review-evidence-stage [data-mode="text"]').click();
  await page.locator('[data-evidence-step="1"]').click();
  assert.equal(await page.locator('#review-evidence-select').inputValue(),ids[1]);
  assert.equal(await page.locator('#review-evidence-stage [data-mode="split"]').getAttribute('aria-pressed'),'true');
  await page.locator('[data-evidence-step="-1"]').click();
  assert.equal(await page.locator('#review-evidence-stage [data-mode="text"]').getAttribute('aria-pressed'),'true','Comparison preference should be preserved');
  await page.selectOption('#review-evidence-select',ids.at(-1));
  assert(await page.locator('[data-evidence-step="1"]').isDisabled());
  // Sticky controls must remain available within a long evidence passage.
  await page.selectOption('#review-evidence-select',ids[0]);
  await page.locator('#review-evidence-stage [data-mode="text"]').click();
  await page.evaluate(()=>window.scrollBy(0,220));
  const nav=await page.locator('.evidence-nav').boundingBox();
  assert(nav.y>=105&&nav.y<150,'Evidence controls should stick below the page header');
  await page.locator('#review-evidence-stage [data-mode="split"]').click();
  await page.evaluate(()=>document.getElementById('evidence').scrollIntoView({block:'start',behavior:'instant'}));
  await page.screenshot({path:path.join(output,`evidence-browser-${width}.png`)});
  await page.goto(base+'#review/r1-3/'+ids[1],{waitUntil:'networkidle'});
  assert.equal(await page.locator('#review-evidence-select').inputValue(),ids[1]);
  assert.equal(await page.locator('.review-evidence-section').count(),1);
  await page.waitForFunction(()=>document.getElementById('evidence').getBoundingClientRect().top<innerHeight-150);
 }
 // A long supporting response loads multiple images above the destination.
 // Cold-cache deep links must stay aligned after every response figure loads.
 const cold = await browser.newPage({viewport:{width:1440,height:1000}});
 await cold.addInitScript(()=>localStorage.setItem('dcf-reading-guide-v1','done'));
 await cold.goto(base+'#review/sae/shape-texture',{waitUntil:'networkidle'});
 await cold.waitForFunction(()=>document.getElementById('evidence')?.getBoundingClientRect().top<innerHeight-150);
 await cold.waitForFunction(()=>[...document.querySelectorAll('.response-figure img')].every(img=>img.complete&&img.naturalWidth>0));
 assert((await cold.locator('#evidence').boundingBox()).y<850,'Response images moved the deep-link destination');
 await cold.close();
 assert.deepEqual(errors,[]);await browser.close();
 console.log('Verified the compact evidence browser for all 17 replies, collapsed page navigation, all selections and PDF links, Previous/Next boundaries, remembered modes, sticky controls, mobile layout and deep links.');
})().catch(error=>{console.error(error);process.exit(1)});
