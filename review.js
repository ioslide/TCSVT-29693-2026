const D=window.REVIEW_DATA,$=s=>document.querySelector(s),by=id=>D.changes.find(c=>c.id===id),fig=id=>D.figures.find(c=>c.id===id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const names={added:'Added',modified:'Revised',moved:'Moved',context:'Reused / context',removed:'Replaced'},badge=s=>`<span class="badge ${s}">${names[s]||s}</span>`;
const assetUrl=window.reviewAssetUrl=s=>{
 const path=String(s),version=/^assets\/pdf\/(original|revised|response)\.pdf$/.exec(path)?.[1]||/^assets\/pages\/(original|revised)-\d+\.webp$/.exec(path)?.[1]||/^assets\/crops\/.*-(original|revised)\.webp$/.exec(path)?.[1];
 const hash=version==='response'?D.meta.responsePdfSha256:D.meta.hashes[version]?.pdf;
 return hash&&location.protocol!=='file:'?`${path}?v=${hash.slice(0,12)}`:path;
};
const link=(v,p,t)=>`<a href="${assetUrl(`assets/pdf/${v}.pdf`)}#page=${p}" target="_blank" rel="noopener">${t||'p. '+p}</a>`;
const mathHtml=s=>window.REVIEW_MATH?.formatHtml(s)||String(s??'');
const mathText=s=>mathHtml(esc(s));
function rich(s,display=false){return String(s??'').split(/(⟪.*?⟫)/gs).map(t=>t.startsWith('⟪')?window.REVIEW_MATH?.render(t.slice(1,-1),t.startsWith('⟪\\displaystyle'))||esc(t):mathText(t)).join('')}
const diff=(c,v)=>c.diff?.[v]?.map(t=>t.kind==='same'?rich(t.text,c.type==='Equation'):`<${t.kind==='del'?'del':'ins'}>${rich(t.text,c.type==='Equation')}</${t.kind==='del'?'del':'ins'}>`).join('')||rich(v==='original'?c.before:c.after,c.type==='Equation');
let selected='r1-1',change='',galleryFilter='all',mapFilter='all',mapMode='mapped',modal=null;
let disposeEvidenceNavigation=()=>{};
let pdf={id:'free',oldPage:1,newPage:1,mode:'native',fullDocument:true,zoom:100,sync:true,highlights:true,syncPages:true,focus:false};
const pdfRoles=['Editors','Reviewer 1','Reviewer 2'];
let pdfScope={group:'all',comment:'all'};
function evidenceComments(c){return D.comments.filter(comment=>c.comments?.includes(comment.id)||c.changes?.some(id=>by(id)?.comments?.includes(comment.id)))}
function visibleEvidenceComments(c){return evidenceComments(c).filter(comment=>(pdfScope.group==='all'||comment.group===pdfScope.group)&&(pdfScope.comment==='all'||comment.id===pdfScope.comment))}
function matchesPdfScope(c){return pdfScope.group==='all'&&pdfScope.comment==='all'||visibleEvidenceComments(c).length>0}
function pdfHref(id,comment=pdfScope.comment){const context=comment!=='all'?comment:pdfScope.group!=='all'?'role-'+pdfScope.group.toLowerCase().replaceAll(' ','-'):'';return '#pdf/'+id+(context?'/'+context:'')}
function restorePdfContext(context){
 const comment=D.comments.find(x=>x.id===context),group=pdfRoles.find(x=>'role-'+x.toLowerCase().replaceAll(' ','-')===context);
 if(comment)pdfScope={group:comment.group,comment:comment.id};else if(group)pdfScope={group,comment:'all'};
}
function setPdfScope(c,commentId){
 restorePdfContext(commentId);
 const comment=D.comments.find(x=>x.id===commentId&&evidenceComments(c).includes(x));
 if(comment){pdfScope={group:comment.group,comment:comment.id};return;}
 if(!matchesPdfScope(c))pdfScope={group:'all',comment:'all'};
}
function pdfFilters(c){
 const comments=D.comments.filter(x=>pdfScope.group==='all'||x.group===pdfScope.group),changes=D.changes.filter(matchesPdfScope);
 return `<div class="pdf-controls pdf-review-filters"><label for="pdf-role">Role<select id="pdf-role" aria-label="Choose reviewer or editor"><option value="all" ${pdfScope.group==='all'?'selected':''}>All roles</option>${pdfRoles.map(group=>`<option value="${group}" ${group===pdfScope.group?'selected':''}>${group}</option>`).join('')}</select></label><label for="pdf-comment">Comment<select id="pdf-comment" aria-label="Choose reviewer or editor comment"><option value="all" ${pdfScope.comment==='all'?'selected':''}>All comments</option>${comments.map(comment=>`<option value="${comment.id}" ${comment.id===pdfScope.comment?'selected':''}>${esc(comment.label+' · '+comment.title)}</option>`).join('')}</select></label><label for="change-select">Evidence<select id="change-select" aria-label="Choose mapped change"><option value="free" ${!c?'selected':''}>Full manuscripts / free comparison</option>${changes.map(x=>`<option value="${x.id}" ${x.id===pdf.id?'selected':''}>${esc(x.section+' · '+x.title)}</option>`).join('')}${fig(pdf.id)?`<option selected value="${pdf.id}">${esc(c.title)}</option>`:''}</select></label></div>`;
}
function selectPdfScope(group,commentId='all'){
 pdfScope={group,comment:commentId};pdf.zoom=100;
 const comment=D.comments.find(c=>c.id===commentId),next=comment?by(comment.changes[0]):null;
 if(!comment)Object.assign(pdf,{id:'free',oldPage:1,newPage:1,mode:'native',fullDocument:true,sync:true,syncPages:true,focus:false});
 const target=pdfHref(next?.id||'free');
 if(location.hash===target)pdfViewer(next?.id);else location.hash=target;
}
const preferred=c=>c.comments?.find(id=>id.startsWith('r'))||c.comments?.[0];
function sidebar(){$('#sidebar').innerHTML=`<a class="comment-link overview-link" data-comment="overview" href="#review/overview">Revision overview</a>`+['Editors','Reviewer 1','Reviewer 2'].map(g=>`<div class="side-group"><div class="side-group-label"><span>${g}</span><span>${D.comments.filter(c=>c.group===g).length}</span></div>${D.comments.filter(c=>c.group===g).map(c=>`<a class="comment-link" data-comment="${c.id}" href="#review/${c.id}"><span class="comment-id">${c.label}</span><span>${esc(c.title)}</span></a>`).join('')}</div>`).join('')+`<div class="side-note"><a href="#map">Browse ${D.changes.length} mapped changes</a></div>`;$('#comment-count').textContent=D.comments.length}
function rail(c){return `<a class="rail-change" data-change="${c.id}" href="#review/${selected}/${c.id}"><span>${esc(c.title)}</span><small>${c.type} · § ${c.section} · ${c.original?'p. '+c.original.page+' / '+c.revised.page:'Revised p. '+c.revised.page}</small></a>`}
const head=(v,r)=>`<div class="compare-label"><span class="version-dot ${v==='revised'?'new':''}"></span><strong>${v==='original'?'Original':'Revised'}</strong><span>${esc(r?.label||'No counterpart')}</span>${r?link(v,r.page):''}</div>`;
const img=(r,v)=>`<img class="compare-image" src="${assetUrl(r.image)}" width="1000" height="${Math.round(1000/(r.aspect||612/792))}" alt="${esc(v+' '+r.label+', page '+r.page)}" loading="lazy">`;
function slider(a,b,pages=false){let ratio=pages?612/792:Math.min(a.aspect||1.3,b.aspect||1.3);return `<div class="slider-wrap ${pages?'pdf-slider':''}"><div class="slider-canvas" style="--split:50%;aspect-ratio:${ratio}"><img src="${assetUrl(b.image)}" alt="Revised ${esc(b.label)}"><img class="slider-before" src="${assetUrl(a.image)}" alt="Original ${esc(a.label)}"><span class="slider-version-label">Original</span><span class="slider-version-label after">Revised</span><div class="slider-line"><span class="slider-knob" aria-hidden="true">↔</span></div><input class="slider-range" type="range" min="0" max="100" value="50" aria-label="Reveal original versus revised" aria-valuetext="50 percent original"></div><div class="slider-bottom"><span>Drag to compare · Arrow keys adjust</span><output class="slider-output">50% original</output></div></div>`}
function evidence(c,m='split',scope='evidence'){
const text=!!(c.before||c.after),both=!!(c.original&&c.revised);if(m==='slider'&&!both||m==='text'&&!text)m='split';
const body=m==='slider'?slider(c.original,c.revised):`<div class="comparison-grid">${['original','revised'].map(v=>`<div class="compare-column">${head(v,c[v])}${!c[v]?'<div class="empty-version"><div><strong>Added in the revision</strong><br>No corresponding material in the original manuscript.</div></div>':m==='text'?`<div class="compare-text">${(v==='original'?c.before:c.after)?diff(c,v):'<span class="source-note">See the PDF excerpt for this version.</span>'}</div>`:`<div class="image-container">${img(c[v],v)}</div>`}</div>`).join('')}</div>`;
return `<div class="evidence-header"><div><div class="eyebrow">${esc(c.type||'Figure')} evidence · ${esc(c.section||'Figure gallery')}</div><h2>${esc(c.title)}</h2></div>${badge(c.status)}</div>${scope==='modal'?'':`<p class="detail-summary">${mathText(c.summary)}</p>`}<div class="evidence-toolbar"><div class="segmented" role="group" aria-label="Comparison mode"><button data-mode="split" data-scope="${scope}" class="${m==='split'?'active':''}" aria-pressed="${m==='split'}">Side by side</button><button data-mode="slider" data-scope="${scope}" class="${m==='slider'?'active':''}" ${both?'':'disabled'} aria-pressed="${m==='slider'}">Before / after</button>${text?`<button data-mode="text" data-scope="${scope}" class="${m==='text'?'active':''}" aria-pressed="${m==='text'}">${c.textScope==='caption'?'Caption diff':'Text diff'}</button>`:''}</div><a class="button small pdf-cta" href="${pdfHref(c.id,scope==='evidence'?selected:matchesPdfScope(c)?pdfScope.comment:'all')}">Open PDF diff</a></div>${m==='text'?'<p class="diff-legend"><span class="del-key">Removed</span><span class="add-key">Added or rewritten</span></p>':''}${body}${scope==='modal'?linkedResponses(c):''}`}
function responseBlocks(c){return c.fullResponse.map(b=>{
if(b.kind==='table')return `<div class="response-table-wrap"><table class="response-table"><thead><tr>${b.rows[0].map(cell=>`<th>${mathHtml(cell.html)}</th>`).join('')}</tr></thead><tbody>${b.rows.slice(1).map(row=>`<tr>${row.map(cell=>`<td>${mathHtml(cell.html)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
if(b.kind==='image')return `<figure class="response-figure"><img src="${b.src}" alt="${esc(b.alt)}" loading="lazy">${b.caption?`<figcaption class="response-caption">${esc(b.caption)}${b.evidenceId?` · <a href="${pdfHref(b.evidenceId,c.id)}">Open PDF evidence</a>`:''}</figcaption>`:''}</figure>`;
if(b.kind==='heading')return `<h3 class="response-subheading">${mathHtml(b.html)}</h3>`;
if(b.text?.startsWith('The Lite implementation uses four approximations')){
 const matches=[...b.html.matchAll(/\([1-4]\)/g)];
 if(matches.length===4){const intro=b.html.slice(0,matches[0].index),items=matches.map((m,i)=>b.html.slice(m.index+m[0].length,matches[i+1]?.index).trim().replace(/;\s*(?:and\s*)?$/,''));return `<p class="response-paragraph">${mathHtml(intro)}</p><ol class="response-steps">${items.map(item=>`<li>${mathHtml(item)}</li>`).join('')}</ol>`;}
}
return `<p class="response-${b.kind}">${mathHtml(b.html)}</p>`;
}).join('')}
function fullResponse(c){
const related={ae1:['r1-1'],ae2:['r1-2'],ae3:['r1-3'],ae4:['r1-4'],ae5:['r1-6'],sae:['r1-1','r1-2','r1-3','r1-4','r1-6']};
return responseBlocks(c)+(related[c.id]||[]).map(id=>{const support=D.comments.find(x=>x.id===id);return `<h3 class="response-subheading">Detailed supporting response · ${esc(support.label)} · ${esc(support.title)}</h3>${responseBlocks(support)}`}).join('');
}
function linkedResponses(c){
const ids=new Set(c.comments||[]);for(const id of c.changes||[])for(const comment of by(id)?.comments||[])ids.add(comment);
const entries=D.comments.filter(comment=>ids.has(comment.id)).sort((a,b)=>Number(b.id===pdfScope.comment)-Number(a.id===pdfScope.comment));if(!entries.length)return '';
return `<section class="linked-responses"><h2>Complete responses linked to this evidence</h2>${entries.map(comment=>`<details class="linked-response" open><summary>${esc(comment.label)} · ${esc(comment.title)} · Full response</summary><div class="response-copy"><div class="comment-quote"><strong>${comment.group==='Editors'?'Editorial':'Reviewer'} comment</strong><p>${mathText(comment.comment)}</p></div>${fullResponse(comment)}<a class="button small" href="#review/${comment.id}">Open comment and all evidence</a></div></details>`).join('')}</section>`;
}
function overview(){
 const groups={
  1:[['#review/r1-1','R1.1 · Fourier probe'],['#review/r1-4','R1.4 · Layer retention'],['#pdf/probe-sensitivity/r1-1','Fig. 12(c)'],['#pdf/retention-heatmap/r1-4','Fig. 9']],
  2:[['#review/r1-2','R1.2 · Geometry repair'],['#review/r1-3','R1.3 · Computational cost'],['#pdf/rgr-alternatives/r1-2','Table VII'],['#pdf/efficiency/r1-3','Table XI']],
  3:[['#review/r1-6','R1.6 · Transfer evidence'],['#review/r2-1','R2.1 · Implementation'],['#review/eic','Editors · Related work'],['#pdf/transfer/r1-6','Fig. 11']]
 };
 const body=D.overview.map(block=>{
  const group=/^([1-3])\. /.exec(block.text);
  if(!group)return `<p>${mathHtml(block.html)}</p>`;
  const heading=/^<strong>(.*?)<\/strong>\s*/.exec(block.html);
  return `<section class="overview-revision"><h2>${mathHtml(heading[1])}</h2><p>${mathHtml(block.html.slice(heading[0].length))}</p><nav class="overview-links" aria-label="Evidence for revision group ${group[1]}">${groups[group[1]].map(([href,label])=>`<a href="${href}">${esc(label)}</a>`).join('')}</nav></section>`;
 }).join('');
 $('#workspace').innerHTML=`<div class="view-header"><div><div class="eyebrow">Response to the Editors and Reviewers</div><h1>Revision overview</h1></div><div class="actions"><a class="button small" href="${assetUrl('assets/pdf/response.pdf')}#page=1" target="_blank" rel="noopener">Response letter PDF</a></div></div><article class="overview-letter response-copy"><p class="overview-manuscript"><strong>Manuscript ${esc(D.meta.id)}</strong><br><em>${esc(D.meta.fullTitle)}</em></p>${body}</article><nav class="overview-next" aria-label="Continue review"><a href="#review/eic">Editors</a><a href="#review/r1-1">Reviewer 1</a><a href="#review/r2-1">Reviewer 2</a></nav>`;
 document.querySelectorAll('[data-comment]').forEach(x=>{const active=x.dataset.comment==='overview';x.classList.toggle('active',active);if(active)x.setAttribute('aria-current','page');else x.removeAttribute('aria-current')});
}
function review(id,cid){
 disposeEvidenceNavigation();
 if(id==='overview'){overview();return;}
 const c=D.comments.find(c=>c.id===id)||D.comments.find(c=>c.id==='r1-1');selected=c.id;change=c.changes.includes(cid)?cid:c.changes[0];
 const list=D.comments.filter(x=>x.group===c.group),i=list.indexOf(c);
 $('#workspace').innerHTML=`<div class="view-header"><div><div class="eyebrow">${esc(c.group)} · ${c.label}</div><h1>${esc(c.title)}</h1><p>${c.changes.length} linked changes · Original and revised evidence in one place</p></div><div class="actions"><a class="button pdf-cta" id="review-pdf-link" href="${pdfHref(change,c.id)}">Open PDF diff</a></div></div><div class="review-layout"><div class="review-main"><section class="panel"><div class="panel-head"><h2>${c.group==='Editors'?'Editorial':'Reviewer'} comment</h2><span class="badge">${c.label}</span></div><div class="panel-content comment-quote">${mathText(c.comment)}</div></section><section class="panel"><div class="panel-head"><h2>Response</h2><span class="badge">Full response</span></div><div class="panel-content response-copy">${fullResponse(c)}<details class="mobile-evidence"><summary>Jump to evidence (${c.changes.length})</summary><nav aria-label="Evidence in this response">${c.changes.map(id=>rail(by(id))).join('')}</nav></details></div></section><div class="review-evidence-list" id="evidence" aria-labelledby="review-evidence-title"><header class="review-evidence-intro"><h2 id="review-evidence-title">Evidence in this revision</h2><p>All ${c.changes.length} linked changes are shown below, in order.</p></header>${c.changes.map(id=>`<section class="panel review-evidence-section" id="evidence-${id}" data-evidence="${id}" tabindex="-1"><div class="panel-content">${evidence(by(id),'split')}</div></section>`).join('')}</div><div class="review-pagination">${i>0?`<a class="button" href="#review/${list[i-1].id}">Previous comment</a>`:'<span></span>'}${i<list.length-1?`<a class="button" href="#review/${list[i+1].id}">Next comment · ${list[i+1].label}</a>`:''}</div></div><aside class="rail"><div class="rail-card"><h3>Evidence in this revision</h3><p class="rail-help">Jump to a passage below.</p><nav aria-label="Evidence navigation">${c.changes.map(id=>rail(by(id))).join('')}</nav></div><div class="rail-card"><h3>Source documents</h3><a class="rail-link" href="${assetUrl('assets/pdf/original.pdf')}" target="_blank" rel="noopener">Original PDF · ${D.meta.pages.original} pages</a><a class="rail-link" href="${assetUrl('assets/pdf/revised.pdf')}" target="_blank" rel="noopener">Revised PDF · ${D.meta.pages.revised} pages</a></div></aside></div>`;
 document.querySelectorAll('[data-comment]').forEach(x=>{const active=x.dataset.comment===c.id;x.classList.toggle('active',active);if(active)x.setAttribute('aria-current','page');else x.removeAttribute('aria-current')});
 trackEvidence();
 if(c.changes.includes(cid))requestAnimationFrame(()=>{const target=document.getElementById('evidence-'+cid);if(target){target.scrollIntoView({block:'start'});activateEvidence(cid);}});
}
function activateEvidence(id){
 document.querySelectorAll('.rail-change[data-change]').forEach(el=>{const active=el.dataset.change===id;el.classList.toggle('selected',active);if(active)el.setAttribute('aria-current','location');else el.removeAttribute('aria-current');});
 if(id){change=id;const button=$('#review-pdf-link');if(button)button.href=pdfHref(id,selected);}
}
function trackEvidence(){
 const sections=[...document.querySelectorAll('.review-evidence-section')];let frame=0;
 const update=()=>{
  frame=0;if(!sections[0]?.isConnected)return;
  const top=(document.querySelector('.topnav')?.getBoundingClientRect().bottom||0)+32,last=sections.at(-1),bottom=window.scrollY+innerHeight>=document.documentElement.scrollHeight-3;
  let active=null;
  for(const section of sections){if(section.getBoundingClientRect().top<=top)active=section;else break;}
  if(last.getBoundingClientRect().bottom<=top-32)active=null;
  if(bottom&&last.getBoundingClientRect().top<innerHeight&&last.getBoundingClientRect().bottom>top)active=last;
  activateEvidence(active?.dataset.evidence||'');
 };
 const queue=()=>{if(!frame)frame=requestAnimationFrame(update);};
 const resize=new ResizeObserver(queue);sections.forEach(section=>resize.observe(section));
 window.addEventListener('scroll',queue,{passive:true});window.addEventListener('resize',queue);queue();
 disposeEvidenceNavigation=()=>{window.removeEventListener('scroll',queue);window.removeEventListener('resize',queue);resize.disconnect();if(frame)cancelAnimationFrame(frame);disposeEvidenceNavigation=()=>{};};
}
function selectEvidence(id){
 const target=document.getElementById('evidence-'+id);if(!target)return;
 activateEvidence(id);history.replaceState(null,'',`#review/${selected}/${id}`);
 target.focus({preventScroll:true});target.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
 $('#announcement').textContent='Jumping to '+by(id).title;
}

function pageAnnotations(v,n){
 if(!pdf.highlights)return [];
 const rows=D.changes.filter(c=>c[v]?.page===n&&c[v].box&&c.comments?.length&&matchesPdfScope(c)).map(c=>({c,code:'M'+String(D.changes.indexOf(c)+1).padStart(2,'0'),figure:false}));
 const selected=fig(pdf.id);if(selected?.[v]?.page===n&&selected[v].box&&!rows.some(r=>r.c[v].box.join()===selected[v].box.join()))rows.push({c:selected,code:'F'+String(D.figures.indexOf(selected)+1).padStart(2,'0'),figure:true});
 return rows;
}
function annotationLabels(c){return evidenceComments(c).map(comment=>comment.label)}
function annotationButton(row,tag=false){
 const labels=visibleEvidenceComments(row.c).map(c=>c.label),description=`${labels.join(' · ')||'Figure'} · ${row.c.title}`;
 return `<button class="${tag?'pdf-page-tag':'pdf-region-marker'}" ${row.figure?'data-figure':'data-inspect'}="${row.c.id}" aria-label="Inspect ${esc(description)}" title="${esc(description)}"><strong>${esc(labels.join(' · ')||'Figure')}</strong>${tag?' <span>· '+esc(row.c.title)+'</span>':''}</button>`;
}
function annotationRegions(v,n){
 return pageAnnotations(v,n).map(row=>(row.c[v].boxes||[row.c[v].box]).map((box,i)=>{
 const labels=visibleEvidenceComments(row.c).map(c=>c.label),description=`${labels.join(' · ')||'Figure'} · ${row.c.title}`,fragment=box[3]<2.5;
 const area=box[2]*box[3],depth=pageAnnotations(v,n).flatMap(item=>item.c[v].boxes||[item.c[v].box]).filter(other=>other[2]*other[3]>area+1).length;
 return `<button class="pdf-highlight annotated pdf-region ${fragment?'line-fragment':''} ${v==='revised'?'revised':''} ${pdf.id===row.c.id?'is-selected':''}" ${row.figure?'data-figure':'data-inspect'}="${row.c.id}" data-annotation="${row.code}" data-part="${i+1}" aria-label="Inspect ${esc(description)}" title="${esc(description)}" style="left:${box[0]}%;top:${box[1]}%;width:${box[2]}%;height:${box[3]}%;z-index:${4+depth*2+(pdf.id===row.c.id?1:0)}"><span class="pdf-region-marker" aria-hidden="true">${esc(labels.join(' · ')||'Figure')}</span></button>`;
 }).join('')).join('');
}
function pageHeading(v,n){const rows=pageAnnotations(v,n);return `<div class="pdf-page-number"><div><span>Page ${n} of ${D.meta.pages[v]}</span><span class="pdf-page-count">${!pdf.highlights?'Annotations hidden':rows.length?rows.length+' mapped '+(v==='original'?'contexts':'passages'):'No mapped '+(v==='original'?'context':'revision')+' on this page'}</span></div><div class="pdf-page-tags" aria-label="Comments addressed on ${v} page ${n}">${rows.map(row=>annotationButton(row,true)).join('')}</div></div>`}
function pageImage(v,n,r){if(!n)return '<div class="empty-version pdf-empty"><div><h2>No original counterpart</h2><p>This material was added in the revision.</p><p>Choose an original page above for source context.</p></div></div>';return `<div class="page-scroll" data-pdf-scroll="${v}"><div class="pdf-page-item" style="width:${pdf.zoom}%;--pdf-zoom:${pdf.zoom/100}">${pageHeading(v,n)}<div class="page-shell"><img src="${assetUrl(`assets/pages/${v}-${n}.webp`)}" alt="${v} manuscript page ${n}">${annotationRegions(v,n)}</div></div></div>`}
function nativePane(v,n,ref){
 if(!n)return pageImage(v,n,ref);
 const count=D.meta.pages[v],numbers=pdf.fullDocument?Array.from({length:count},(_,i)=>i+1):[n];
 return `<div class="page-scroll pdf-live" data-pdf-scroll="${v}" data-start-page="${n}" ${pdf.focus&&ref?.page===n&&ref.box?`data-start-box="${ref.box.join(',')}"`:""} tabindex="0" aria-label="${v} PDF scroll area"><div class="pdf-loading">Rendering source PDF…</div><div class="pdf-document-pages">${numbers.map(page=>`<article class="pdf-page-item" data-page="${page}" style="width:${pdf.zoom}%;--pdf-zoom:${pdf.zoom/100}">${pageHeading(v,page)}<div class="pdf-render-page"><img class="pdf-page-preview" src="${assetUrl(`assets/pages/${v}-${page}.webp`)}" alt="${v} manuscript page ${page}" loading="lazy"><canvas hidden aria-label="${v} PDF page ${page}"></canvas><div class="textLayer"></div>${annotationRegions(v,page)}</div></article>`).join('')}</div></div><p class="source-note">${pdf.fullDocument?'Complete PDF · continuous scrolling':'Selected PDF page'} · selectable text. <a data-pdf-open="${v}" href="${assetUrl(`assets/pdf/${v}.pdf`)}#page=${n}" target="_blank" rel="noopener">Open source PDF</a></p>`;
}
function pdfViewer(id,commentId){
 const pick=by(id)||fig(id);
 if(pick){setPdfScope(pick,commentId);pdf.id=id;pdf.oldPage=pick.original?.page||0;pdf.newPage=pick.revised.page;pdf.syncPages=!!pdf.oldPage&&pdf.oldPage===pdf.newPage;pdf.sync=true;pdf.highlights=true;pdf.focus=true;pdf.zoom=100;}
 const c=by(pdf.id)||fig(pdf.id),a=pdf.oldPage,b=pdf.newPage;
 window.disposePdfPanes?.();
 const opts=v=>`${v==='original'&&!pdf.syncPages?'<option value="0">No counterpart</option>':''}${Array.from({length:D.meta.pages[v]},(_,i)=>`<option value="${i+1}" ${i+1===(v==='original'?a:b)?'selected':''}>Page ${i+1}</option>`).join('')}`;
 const body=pdf.mode==='slider'&&a&&b?slider({label:'page '+a,image:`assets/pages/original-${a}.webp`},{label:'page '+b,image:`assets/pages/revised-${b}.webp`},true):`<div class="pdf-panes">${['original','revised'].map(v=>{const n=v==='original'?a:b;return `<section class="pdf-pane"><div class="compare-label"><span class="version-dot ${v==='revised'?'new':''}"></span><strong>${v==='original'?'Original':'Revised'}</strong><span data-pdf-position="${v}">${pdf.mode==='native'&&pdf.fullDocument?'Full document · ':''}Page ${n||'—'} of ${D.meta.pages[v]}</span></div>${pdf.mode==='native'?nativePane(v,n,c?.[v]):pageImage(v,n,c?.[v])}</section>`}).join('')}</div>`;
 $('#workspace').innerHTML=`<div class="view-header"><div><div class="eyebrow">PDF diff viewer</div><h1>${esc(c?.title||'Read both complete manuscripts')}</h1><p>${mathText(c?.summary||'Read both complete manuscripts. Page selection is synchronized by default.')}</p></div><button class="button" data-action="fallback">PDF fallback</button></div>${pdfFilters(c)}<div class="pdf-controls pdf-view-controls"><div class="segmented" aria-label="PDF view mode">${[['split','Page images'],['slider','Layout slider'],['native','Native PDFs']].map(([k,t])=>`<button data-pdf-mode="${k}" class="${pdf.mode===k?'active':''}" aria-pressed="${pdf.mode===k}" ${k==='slider'&&!a?'disabled':''}>${t}</button>`).join('')}</div>${pdf.mode==='native'?`<div class="segmented" aria-label="PDF document range"><button data-pdf-scope="full" class="${pdf.fullDocument?'active':''}" aria-pressed="${pdf.fullDocument}">Full document</button><button data-pdf-scope="selected" class="${!pdf.fullDocument?'active':''}" aria-pressed="${!pdf.fullDocument}">Selected pages</button></div>`:''}</div><div class="pdf-controls"><label>Original <select id="original-page" aria-label="Original page">${opts('original')}</select></label><label>Revised <select id="revised-page" aria-label="Revised page">${opts('revised')}</select></label><label><input id="sync-scroll" type="checkbox" ${pdf.mode==='slider'||!a?'disabled':''} ${pdf.sync?'checked':''}>Sync scrolling</label><label><input id="show-highlights" type="checkbox" ${pdf.mode==='slider'?'disabled':''} ${pdf.highlights?'checked':''}>Evidence highlight</label><label><input id="sync-pages" type="checkbox" ${pdf.syncPages?'checked':''}>Sync page selection</label><div class="page-tools"><button class="button small" data-zoom="-25" aria-label="Zoom out" ${pdf.zoom===100||pdf.mode==='slider'?'disabled':''}>−</button><span>${pdf.zoom}%</span><button class="button small" data-zoom="25" aria-label="Zoom in" ${pdf.zoom===250||pdf.mode==='slider'?'disabled':''}>+</button><button class="button small" data-action="focus-evidence" ${!c?'disabled':''}>Focus evidence</button></div></div>${c?`<p class="diff-legend"><span class="old-key">Evidence: original ${c.original?'p. '+c.original.page:'no counterpart'}</span><span class="add-key">revised p. ${c.revised.page}</span>${annotationLabels(c).length?`<span>Linked comments: ${annotationLabels(c).map(label=>{const comment=D.comments.find(item=>item.label===label);return `<a href="#review/${comment.id}">${esc(label)}</a>`}).join(' · ')}</span>`:''}</p>`:''}${body}${c?linkedResponses(c):''}`;
 bindScroll();if(pdf.mode==='native')window.renderPdfPanes([...document.querySelectorAll('.pdf-live')],pdf.zoom);
}
function bindScroll(){
 const panes=[...document.querySelectorAll('[data-pdf-scroll]')],positions=new Map(panes.map(p=>[p,p.scrollTop]));let driving=null,clear;
 function claim(p){driving=p;clearTimeout(clear);clear=setTimeout(()=>driving=null,180)}
 for(const p of panes){for(const event of ['wheel','pointerdown','touchstart','keydown'])p.addEventListener(event,()=>claim(p),{passive:true});p.addEventListener('scroll',()=>{
 const previous=positions.get(p);positions.set(p,p.scrollTop);
 if(!pdf.sync||p.dataset.programmaticJump||driving&&driving!==p)return;claim(p);const other=panes.find(q=>q!==p);if(!other)return;
 const max=p.scrollHeight-p.clientHeight,maxX=p.scrollWidth-p.clientWidth;
 if(pdf.mode==='native'&&pdf.fullDocument&&!pdf.syncPages)other.scrollTop+=p.scrollTop-previous;
 else other.scrollTop=max>0?p.scrollTop/max*(other.scrollHeight-other.clientHeight):0;
 other.scrollLeft=maxX>0?p.scrollLeft/maxX*(other.scrollWidth-other.clientWidth):0;
 positions.set(other,other.scrollTop);
 },{passive:true});}
}
function updatePagePosition(version,n){
 pdf[version==='original'?'oldPage':'newPage']=n;const field=$(`#${version}-page`);if(field)field.value=String(n);
 const label=document.querySelector(`[data-pdf-position="${version}"]`);if(label)label.textContent=(pdf.fullDocument?'Full document · ':'')+`Page ${n} of ${D.meta.pages[version]}`;
 const open=document.querySelector(`[data-pdf-open="${version}"]`);if(open)open.href=assetUrl(`assets/pdf/${version}.pdf`)+`#page=${n}`;
}
window.addEventListener('pdf-page-change',e=>updatePagePosition(e.detail.version,e.detail.page));
function applyPdfPageSelection(version,n){
 pdf[version==='original'?'oldPage':'newPage']=n;if(pdf.syncPages)pdf.oldPage=pdf.newPage=n;
 const hadEvidence=pdf.id!=='free';pdf.focus=false;pdf.id='free';history.replaceState(null,'',pdfHref('free'));
 if(!hadEvidence&&pdf.mode==='native'&&pdf.fullDocument&&pdf.oldPage&&pdf.newPage){
  for(const v of pdf.syncPages?['original','revised']:[version]){const page=v==='original'?pdf.oldPage:pdf.newPage;updatePagePosition(v,page);window.jumpPdfPage?.(v,page);}
  const select=$('#change-select');if(select)select.value='free';
 }else{if(!pdf.oldPage&&pdf.mode==='slider')pdf.mode='split';pdfViewer();}
}
function focusEvidence(){
 const c=by(pdf.id)||fig(pdf.id);if(!c)return;
 pdf.focus=true;pdf.syncPages=false;pdf.oldPage=c.original?.page||0;pdf.newPage=c.revised.page;pdf.zoom=Math.max(pdf.zoom,175);
 if(pdf.mode==='native'){
  pdf.fullDocument=true;pdfViewer();
 }else{
  pdf.mode='split';pdfViewer();for(const v of ['original','revised']){const pane=document.querySelector(`[data-pdf-scroll="${v}"]`),r=c[v];if(!pane||!r?.box)continue;const image=pane.querySelector('img');const place=()=>{pane.scrollTop=Math.max(0,r.box[1]/100*image.clientHeight-24);pane.scrollLeft=Math.max(0,r.box[0]/100*image.clientWidth-24)};if(image.complete)requestAnimationFrame(place);else image.addEventListener('load',place,{once:true});}
 }
}

function gallery(){const items=D.figures.filter(f=>galleryFilter==='all'||(galleryFilter==='context'?['context','moved'].includes(f.status):f.status===galleryFilter));$('#workspace').innerHTML=`<div class="view-header"><div><div class="eyebrow">Figure revision gallery</div><h1>The figures, before and after</h1><p>${D.figures.length} visual comparisons: new evidence, retained plots, renumbered figures, and the runtime plot replaced by Table XI.</p></div></div><div class="filters">${[['all','All figures'],['added','New figures'],['modified','Revised'],['context','Moved or reused'],['removed','Replaced']].map(([k,t])=>`<button class="filter-chip ${galleryFilter===k?'active':''}" data-gallery-filter="${k}">${t}</button>`).join('')}</div><div class="gallery-grid">${items.map(f=>`<article class="gallery-card"><div class="thumb">${img(f.revised,'Revised')}</div><div class="card-body"><div class="card-top"><span class="source-note">${f.original?esc(f.original.label)+' / ':''}${esc(f.revised.label)}</span>${badge(f.status)}</div><h2>${esc(f.title)}</h2><p>${mathText(f.summary)}</p><div class="actions"><button class="button primary small" data-figure="${f.id}">${f.original?'Compare figure':'Inspect addition'}</button><a class="button small" href="#pdf/${f.id}">View in PDF</a></div></div></article>`).join('')}</div>`}
function additions(){const items=D.changes.filter(c=>c.status==='added');$('#workspace').innerHTML=`<div class="view-header"><div><div class="eyebrow">New content</div><h1>What was added in the revision</h1><p>${items.length} additions linked to reviewer comments and manuscript locations.</p></div></div><div class="gallery-grid">${items.map(c=>`<article class="gallery-card"><div class="thumb">${img(c.revised,'Revised')}</div><div class="card-body"><div class="card-top"><span class="source-note">§ ${c.section} · ${c.revised.label} · p. ${c.revised.page}</span>${badge('added')}</div><h2>${esc(c.title)}</h2><p>${mathText(c.summary)}</p><div class="actions"><button class="button primary small" data-inspect="${c.id}">Inspect addition</button>${c.comments?.length?`<a class="button small" href="#review/${preferred(c)}/${c.id}">Related comment</a>`:''}<a class="button small" href="#pdf/${c.id}">PDF evidence</a></div></div></article>`).join('')}</div>`}
function changeMap(){const items=D.changes.filter(c=>mapFilter==='all'||c.type===mapFilter);$('#workspace').innerHTML=`<div class="view-header"><div><div class="eyebrow">Change map</div><h1>A content map across both versions</h1><p>Browse revisions by content, page, and reviewer comment.</p></div><button class="button" data-action="print">Print this view</button></div><div class="map-summary"><div><strong>${D.changes.length}</strong><span>Mapped changes</span></div><div><strong>${D.changes.filter(c=>c.status==='added').length}</strong><span>New content entries</span></div><div><strong>${D.figures.length}</strong><span>Visual comparisons</span></div><div><strong>${D.meta.pages.original} / ${D.meta.pages.revised}</strong><span>Original / revised pages</span></div></div><div class="evidence-toolbar"><div class="segmented"><button data-map-mode="mapped" class="${mapMode==='mapped'?'active':''}">Mapped changes</button><button data-map-mode="narrative" class="${mapMode==='narrative'?'active':''}">Narrative text diff</button></div>${mapMode==='mapped'?`<select class="filter-select" id="map-type" aria-label="Filter change type">${['all','Text','Equation','Table','Figure','Layout'].map(t=>`<option value="${t}" ${t===mapFilter?'selected':''}>${t==='all'?'All change types':t}</option>`).join('')}</select>`:''}</div>${mapMode==='mapped'?`<div class="map-table-wrap"><table class="map-table"><thead><tr><th>Content</th><th>Change</th><th>Original</th><th>Revised</th><th>Review link</th></tr></thead><tbody>${items.map(c=>`<tr><td><div class="row-title"><button data-inspect="${c.id}">${esc(c.title)}</button></div><small>§ ${c.section} · ${c.type}</small></td><td>${badge(c.status)}</td><td class="page-ref">${c.original?link('original',c.original.page):'—'}</td><td class="page-ref">${link('revised',c.revised.page)}</td><td>${c.comments.length?`<a href="#review/${preferred(c)}/${c.id}">${D.comments.find(x=>x.id===preferred(c))?.label}</a>`:'Layout / context'}</td></tr>`).join('')}</tbody></table></div>`:`<div class="text-section-list">${D.sections.map((s,i)=>`<details data-text-section="${i}"><summary>${esc(s.title)} <span class="source-note">Original p. ${s.originalPage} / Revised p. ${s.revisedPage}</span></summary><div class="section-diff"></div></details>`).join('')}</div>`}`;
document.querySelectorAll('[data-text-section]').forEach(el=>el.addEventListener('toggle',()=>{if(!el.open)return;const s=D.sections[Number(el.dataset.textSection)],out=el.querySelector('.section-diff');if(out.childElementCount)return;out.innerHTML=`<div class="comparison-grid">${['original','revised'].map(v=>`<div class="compare-column">${head(v,{page:v==='original'?s.originalPage:s.revisedPage,label:s.title})}<div class="compare-text">${diff(s,v)}</div></div>`).join('')}</div>`}))}
function showDialog(s){$('#dialog-content').innerHTML=s;if(!$('#dialog').open)$('#dialog').showModal();$('#dialog').scrollTop=0}
function inspect(c){modal={...c,type:c.type||'Figure'};showDialog(`<div class="dialog-evidence">${evidence(modal,'split','modal')}</div>`)}
function fallback(){showDialog(`<div class="dialog-title"><div class="eyebrow">PDF fallback</div><h1>Full-resolution source documents</h1><p>The original PDFs remain available independently of every interactive view.</p></div><div class="sources-list">${['original','revised','response'].map(v=>`<div class="source-file"><h3>${v==='original'?'Original manuscript':v==='revised'?'Revised manuscript':'Response letter'}</h3><p>${v==='response'?D.meta.responsePages:D.meta.pages[v]} pages · Source PDF</p><div class="actions"><a class="button primary" href="${assetUrl(`assets/pdf/${v}.pdf`)}" target="_blank" rel="noopener">Open PDF</a><a class="button" href="${assetUrl(`assets/pdf/${v}.pdf`)}" download="DCF-${v}.pdf">Download PDF</a></div></div>`).join('')}</div><p class="notice">If embedded PDFs are unavailable, choose page images. This site also works offline when its complete folder is kept together.</p><div class="provenance"><strong>Source snapshot · ${D.meta.snapshot}</strong><p>Original PDF SHA-256<br><code>${D.meta.hashes.original.pdf}</code></p><p>Revised PDF SHA-256<br><code>${D.meta.hashes.revised.pdf}</code></p></div>`)}
function route(){disposeEvidenceNavigation();window.disposePdfPanes?.();const [v,id,cid]=location.hash.slice(1).split('/'),view=['pdf','gallery','additions','map'].includes(v)?v:'review';document.body.classList.toggle('full-width',view!=='review');document.querySelectorAll('[data-view]').forEach(a=>a.classList.toggle('active',a.dataset.view===view));if($('#dialog').open)$('#dialog').close();if(view==='review')review(id,cid);if(view==='pdf'){pdf.mode='native';pdf.fullDocument=true;if(!cid)pdfScope={group:'all',comment:'all'};if(!id){pdfScope={group:'all',comment:'all'};pdf.id='free';pdf.focus=false;pdf.oldPage=pdf.newPage=1;pdf.zoom=100;pdf.sync=pdf.syncPages=true;}if(id==='free'){restorePdfContext(cid);pdf.id='free';pdf.sync=true;pdf.focus=false;pdf.zoom=100;}pdfViewer(id,cid);}if(view==='gallery')gallery();if(view==='additions')additions();if(view==='map')changeMap();$('#sidebar').classList.remove('open');$('#menu-toggle').setAttribute('aria-expanded','false');window.scrollTo(0,0);document.title=`TCSVT-29693-2026 · ${({'review':'Reviewer comments','pdf':'PDF diff viewer','gallery':'Figure revisions','additions':'New content','map':'Change map'})[view]}`}
document.addEventListener('click',e=>{const evidenceLink=e.target.closest('a[data-change]');if(evidenceLink&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey&&!e.altKey){e.preventDefault();selectEvidence(evidenceLink.dataset.change);return;}const pdfLink=e.target.closest('a[href^="#pdf"]');if(pdfLink&&pdfLink.getAttribute('href')===location.hash){e.preventDefault();if($('#dialog').open)$('#dialog').close();pdf.mode='native';pdf.fullDocument=true;const [,id,cid]=location.hash.split('/');if(!cid)pdfScope={group:'all',comment:'all'};if(!id){pdfScope={group:'all',comment:'all'};pdf.id='free';pdf.focus=false;pdf.oldPage=pdf.newPage=1;pdf.zoom=100;pdf.sync=pdf.syncPages=true;}if(id==='free'){restorePdfContext(cid);pdf.id='free';pdf.sync=true;pdf.focus=false;pdf.zoom=100;}pdfViewer(id,cid);return;}const b=e.target.closest('button');if(!b)return;if(b.dataset.change){selectEvidence(b.dataset.change);return;}if(b.dataset.mode){if(b.dataset.scope==='modal')$('#dialog-content').innerHTML=`<div class="dialog-evidence">${evidence(modal,b.dataset.mode,'modal')}</div>`;else{const section=b.closest('.review-evidence-section');if(section)section.querySelector('.panel-content').innerHTML=evidence(by(section.dataset.evidence),b.dataset.mode)}return;}if(b.dataset.figure){inspect(fig(b.dataset.figure));return;}if(b.dataset.inspect){inspect(by(b.dataset.inspect));return;}if(b.dataset.galleryFilter){galleryFilter=b.dataset.galleryFilter;gallery();return;}if(b.dataset.mapMode){mapMode=b.dataset.mapMode;changeMap();return;}if(b.dataset.pdfMode){pdf.zoom=100;pdf.mode=b.dataset.pdfMode;pdfViewer();return;}if(b.dataset.pdfScope){pdf.zoom=100;pdf.fullDocument=b.dataset.pdfScope==='full';pdfViewer();return;}if(b.dataset.zoom){pdf.zoom=Math.max(100,Math.min(250,pdf.zoom+Number(b.dataset.zoom)));pdfViewer();return;}({'fallback':fallback,'close-dialog':()=>$('#dialog').close(),'focus-evidence':focusEvidence,'print':()=>window.print()})[b.dataset.action]?.()});
document.addEventListener('input',e=>{if(e.target.matches('.slider-range')){const val=Number(e.target.value),wrap=e.target.closest('.slider-wrap');wrap.querySelector('.slider-canvas').style.setProperty('--split',val+'%');wrap.querySelector('.slider-output').textContent=val+'% original';e.target.setAttribute('aria-valuetext',val+' percent original')}});
document.addEventListener('change',e=>{const t=e.target;
if(t.id==='pdf-role'){selectPdfScope(t.value);}
if(t.id==='pdf-comment'){const comment=D.comments.find(c=>c.id===t.value);selectPdfScope(comment?.group||pdfScope.group,t.value);}
if(t.id==='change-select'){pdf.zoom=100;if(t.value==='free'){pdf.sync=true;pdf.focus=false;pdf.id='free';history.replaceState(null,'',pdfHref('free'));if(!pdf.oldPage)pdf.oldPage=pdf.newPage;pdfViewer()}else{const target=pdfHref(t.value);if(location.hash===target)pdfViewer(t.value);else location.hash=target;}}
if(t.id==='original-page'||t.id==='revised-page')applyPdfPageSelection(t.id==='original-page'?'original':'revised',Number(t.value));
if(t.id==='sync-scroll'){pdf.sync=t.checked;if(t.checked&&pdf.syncPages){const p=document.querySelector('[data-pdf-scroll=original]'),q=document.querySelector('[data-pdf-scroll=revised]');if(p&&q){const max=p.scrollHeight-p.clientHeight;q.scrollTop=max>0?p.scrollTop/max*(q.scrollHeight-q.clientHeight):0}}}
if(t.id==='sync-pages'){pdf.syncPages=t.checked;if(t.checked){const n=pdf.oldPage||pdf.newPage||1;pdf.oldPage=pdf.newPage=n;}pdfViewer();}
if(t.id==='show-highlights'){pdf.highlights=t.checked;pdfViewer();}
if(t.id==='map-type'){mapFilter=t.value;changeMap();}
});
document.addEventListener('error',e=>{if(e.target.tagName==='IMG')e.target.replaceWith(Object.assign(document.createElement('p'),{className:'notice',textContent:'This excerpt could not be loaded. Use the source PDF page link.'}))},true);
$('#menu-toggle').onclick=()=>{const on=$('#sidebar').classList.toggle('open');$('#menu-toggle').setAttribute('aria-expanded',on)};
$('#dialog').addEventListener('click',e=>{if(e.target===$('#dialog')){const r=$('#dialog').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)$('#dialog').close()}});
window.addEventListener('hashchange',route);sidebar();route();
