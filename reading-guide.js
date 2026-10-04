(() => {
  'use strict';
  const key='dcf-reading-guide-v1',trigger=document.getElementById('reading-guide-trigger');
  const card=document.createElement('dialog');
  card.className='reading-guide';card.setAttribute('aria-label','Reading guide');document.body.append(card);
  const steps=[
    {short:'Your role',title:'Start with your own review comments',intro:'Choose Editors, Reviewer 1, or Reviewer 2 to enter the relevant comments and responses.',points:['The comment IDs are consistent throughout the site: EIC / AE / SAE for editors, R1.x for Reviewer 1, and R2.x for Reviewer 2.','You can switch roles at any time. Shared revisions may answer more than one comment.'],preview:'roles'},
    {short:'Comments & replies',title:'Read the comment and the complete response',intro:'Reviewer comments puts the original question, the full author response, and its supporting evidence together.',points:['Use the left navigation, or the menu on smaller screens, to select a comment. Previous comment and Next comment follow the order within that role.','Response includes the complete reply, with its tables, figures, equations, and cited manuscript locations.','All linked evidence is displayed below the response. The navigation on the right jumps to each passage and highlights the passage you are reading; Jump to evidence provides the same links on smaller screens.'],preview:'comment'},
    {short:'Locate changes',title:'Find the exact revision in the PDFs',intro:'Open PDF diff takes you from a response to its mapped manuscript passage.',points:['Role → Comment → Evidence narrows the viewer to the reviewer or editor, the question, and the relevant change.','Changing Role resets Comment to All comments and Evidence to Full manuscripts / free comparison. Selecting All comments also restores the full comparison.','Choosing a specific comment or evidence aligns the mapped passages in Original and Revised at 100%. Their page numbers may differ.'],preview:'filters'},
    {short:'Compare evidence',title:'Compare the compiled passages and read the replies',intro:'The outlined regions use the same comment IDs as the reviewer navigation.',points:['Click anywhere inside an outlined region, or its page tag, to open the comparison.','Side by side is the default. Before / after provides a slider when both versions are available; Text diff compares matched text, while Caption diff compares figure captions.','Complete responses linked to this evidence are already expanded. Added material may have no Original counterpart.'],preview:'comparison'},
    {short:'Read the PDFs',title:'Control scrolling, page selection, and zoom',intro:'Native PDFs opens the full manuscripts for continuous reading.',points:['Sync scrolling is enabled by default and moves the two available versions together. Sync page selection chooses the same page number in both versions when enabled.','Mapped evidence can use different source pages. Use the page selectors for free reading, or Full manuscripts / free comparison to leave a specific evidence item.','Evidence highlight toggles the outlines. New evidence opens at 100%; Focus evidence enlarges the passage only when you choose it.'],preview:'reader'},
    {short:'Figures & additions',title:'Browse revised figures and newly added material',intro:'The visual galleries provide a quick way to inspect the larger changes.',points:['Figure revisions includes new, revised, moved, reused, and replaced figures. Compare figure opens the compiled views.','New content collects additions such as new tables, analyses, definitions, and figures. Inspect addition opens the evidence and complete linked replies.','Use View in PDF or PDF evidence to return to the source page. A new addition does not invent an Original counterpart.'],preview:'gallery'},
    {short:'Map & downloads',title:'Use the change map and source PDFs',intro:'Finish with the overview, or keep either complete PDF open alongside your review.',points:['Change map organizes revisions by content, section, original page, revised page, and linked comment. Its narrative view compares broader manuscript text.','PDFs & downloads and PDF fallback provide the complete Original and Revised PDFs, including download links.','You can close or skip this guide at any time. Once dismissed or completed, it will not reopen automatically in this browser; Reading guide in the header brings it back.'],preview:'map'}
  ];
  let active=false,paused=false,step=0,commentId=null,returnFocus=null,frame=0;
  function remembered(){for(const store of ['localStorage','sessionStorage'])try{if(window[store].getItem(key))return true}catch{}return false}
  function remember(){for(const store of ['localStorage','sessionStorage'])try{window[store].setItem(key,'done');return}catch{}}
  function comment(){
    const [view,id]=location.hash.slice(1).split('/');
    const current=view==='review'?D.comments.find(c=>c.id===id):view==='pdf'?(D.comments.find(c=>c.id===pdfScope.comment)||D.comments.find(c=>c.group===pdfScope.group)):null;
    return D.comments.find(c=>c.id===commentId)||current||D.comments.find(c=>c.id===selected)||D.comments.find(c=>c.id==='r1-1');
  }
  function unmark(){document.querySelectorAll('.reading-guide-highlight').forEach(el=>el.classList.remove('reading-guide-highlight'))}
  function target(){
    return [()=>document.getElementById('pdf-role')||document.querySelector('[data-view="review"]'),()=>document.querySelector('.comment-quote'),()=>document.getElementById('review-pdf-link')||document.querySelector('.pdf-review-filters'),()=>document.querySelector('[data-pdf-scroll="revised"] .pdf-region.is-selected')||document.getElementById('change-select'),()=>document.querySelector('.pdf-view-controls'),()=>document.querySelector('.gallery-card'),()=>document.querySelector('.map-table-wrap')||document.getElementById('pdf-menu')][step]();
  }
  function refresh(){frame=0;unmark();if(active&&paused){const el=target();if(el)el.classList.add('reading-guide-highlight')}}
  function queueRefresh(){if(active&&!frame)frame=requestAnimationFrame(refresh)}
  function preview(kind){
    const id=comment().label,lines='<i></i><i></i><i></i>';
    const templates={
      roles:`<div class="reading-guide-roles">${['Editors','Reviewer 1','Reviewer 2'].map(group=>`<button data-guide-role="${group}"><strong>${group}</strong><span>${D.comments.filter(c=>c.group===group).length} comments</span></button>`).join('')}</div>`,
      comment:`<div class="guide-example-columns"><div class="guide-example-box"><span class="guide-example-label">${id} · Comment</span><div class="guide-example-lines">${lines}</div></div><div class="guide-example-box"><span class="guide-example-label">Complete response</span><div class="guide-example-lines">${lines}</div><span class="guide-example-chip">Linked evidence</span></div></div>`,
      filters:'<div class="guide-example-flow"><span>Role</span><b>→</b><span>Comment</span><b>→</b><span>Evidence</span></div><div class="guide-example-note">All comments → Full manuscripts / free comparison</div>',
      comparison:`<div class="guide-example-tabs"><span class="selected">Side by side</span><span>Before / after</span><span>Text / Caption diff</span></div><div class="guide-example-columns"><div class="guide-example-box"><span class="guide-example-label">Original</span><div class="guide-example-lines">${lines}</div></div><div class="guide-example-box revised"><span class="guide-example-label">Revised · ${id}</span><div class="guide-example-lines">${lines}</div></div></div><div class="guide-example-note">▼ Complete responses linked to this evidence</div>`,
      reader:'<div class="guide-example-tabs"><span class="selected">Native PDFs</span><span>Full document</span><span>100%</span></div><div class="guide-example-checks"><span>✓ Sync scrolling</span><span>✓ Evidence highlight</span><span>Sync page selection</span></div>',
      gallery:'<div class="guide-example-columns"><div class="guide-example-box"><span class="guide-example-label">Figure revisions</span><div class="guide-example-lines">'+lines+'</div><span class="guide-example-chip">Compare figure</span></div><div class="guide-example-box"><span class="guide-example-label">New content</span><div class="guide-example-lines">'+lines+'</div><span class="guide-example-chip">Inspect addition</span></div></div>',
      map:'<div class="guide-example-flow"><span>Change map</span><b>→</b><span>Page & comment</span></div><div class="guide-example-downloads"><span>Original PDF</span><span>Revised PDF</span></div>'
    };
    return templates[kind];
  }
  function updateTrigger(){trigger.setAttribute('aria-expanded',String(card.open));const text=trigger.querySelector('.reading-guide-text');if(text)text.textContent=active&&paused?'Continue guide':'Reading guide'}
  function render(focus=false){
    const item=steps[step];
    card.innerHTML=`<header class="reading-guide-top"><div><strong>Reading guide</strong><span>Step ${step+1} of ${steps.length}</span></div><button class="reading-guide-close" data-guide="close" aria-label="Close reading guide">×</button></header><div class="guide-progress" aria-hidden="true"><span style="width:${(step+1)/steps.length*100}%"></span></div><div class="reading-guide-body"><nav class="reading-guide-steps" aria-label="Guide steps">${steps.map((s,i)=>`<button data-guide-step="${i}" class="${i===step?'active':''}" ${i===step?'aria-current="step"':''}><span>${i+1}</span>${s.short}</button>`).join('')}</nav><div class="reading-guide-content"><h2>${item.title}</h2><p class="reading-guide-intro">${item.intro}</p><div class="reading-guide-preview" aria-label="${item.short} illustration">${preview(item.preview)}</div><ul>${item.points.map(point=>`<li>${point}</li>`).join('')}</ul><button class="reading-guide-try" data-guide="try">Show on page ↗</button></div></div><footer class="reading-guide-actions"><button data-guide="skip" class="reading-guide-skip">Skip guide</button><div>${step>0?'<button data-guide="back" class="button">Previous</button>':''}<button data-guide="next" class="button primary">${step===steps.length-1?'Finish guide':'Next step'}</button></div></footer>`;
    updateTrigger();refresh();if(focus)card.querySelector('[data-guide="next"]').focus({preventScroll:true});
  }
  function visit(hash){if(location.hash===hash)route();else location.hash=hash}
  function show(focus=true){paused=false;render();if(!card.open)card.showModal();updateTrigger();if(focus)card.querySelector(step===0?'[data-guide-role]':'[data-guide="next"]').focus({preventScroll:true})}
  function start(manual=false){if(active&&paused){show();return}returnFocus=manual?document.activeElement:null;active=true;paused=false;step=0;commentId=null;show(manual)}
  function end(){active=false;paused=false;unmark();remember();if(card.open)card.close();updateTrigger();(returnFocus?.isConnected?returnFocus:trigger).focus({preventScroll:true})}
  function finish(){const first=D.comments.find(c=>c.group===comment().group);end();visit('#review/'+first.id)}
  function choose(id){commentId=id;step=1;visit('#review/'+id);render(true)}
  function next(){if(step===steps.length-1){finish();return}if(step===0){choose(comment().id);return}step++;if(step===3){const c=comment();visit('#pdf/'+c.changes[0]+'/'+c.id)}render(true)}
  function showOnPage(){
    const c=comment();commentId=c.id;
    const hashes=['#pdf/free/role-'+c.group.toLowerCase().replaceAll(' ','-'),'#review/'+c.id,'#review/'+c.id,'#pdf/'+c.changes[0]+'/'+c.id,'#pdf/'+c.changes[0]+'/'+c.id,'#gallery','#map'];
    paused=true;if(card.open)card.close();visit(hashes[step]);updateTrigger();queueRefresh();
  }
  card.addEventListener('click',e=>{
    const b=e.target.closest('button');if(!b)return;
    if(b.dataset.guideRole){choose(D.comments.find(c=>c.group===b.dataset.guideRole).id);return}
    if(b.dataset.guideStep!==undefined){step=Number(b.dataset.guideStep);render(true);return}
    if(b.dataset.guide==='next')next();
    if(b.dataset.guide==='back'){step=Math.max(0,step-1);render(true)}
    if(b.dataset.guide==='try')showOnPage();
    if(['close','skip'].includes(b.dataset.guide))end();
  });
  card.addEventListener('cancel',e=>{e.preventDefault();end()});
  trigger.addEventListener('click',()=>start(true));
  document.addEventListener('click',e=>{
    if(!active||!paused||card.contains(e.target))return;
    const link=e.target.closest('a'),region=e.target.closest('.pdf-region,.pdf-page-tag');
    if(step===1&&link?.dataset.comment)commentId=link.dataset.comment;
    if(step===2&&link?.getAttribute('href')?.startsWith('#pdf/')){step=3;queueRefresh()}
    if(step===3&&region){step=4;queueRefresh()}
  },true);
  document.addEventListener('change',e=>{
    if(!active||!paused)return;
    if(e.target.id==='pdf-role'){
      const c=D.comments.find(c=>c.group===e.target.value);
      if(c){commentId=c.id;if(step===0)step=1;queueRefresh()}
    }
    if(e.target.id==='pdf-comment'){
      const c=D.comments.find(c=>c.id===e.target.value);
      if(c){commentId=c.id;if(step<=2)step=3;queueRefresh()}
    }
  });
  window.addEventListener('hashchange',queueRefresh);
  window.addEventListener('pdf-rendered',queueRefresh);
  new MutationObserver(queueRefresh).observe(document.getElementById('workspace'),{childList:true});
  if(!remembered())start();
})();
