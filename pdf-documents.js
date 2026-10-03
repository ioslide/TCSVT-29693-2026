(() => {
  let library, generation=0;
  const documents=new Map(), readers=new Map(), tasks=new Set();
  const pageTop=(pane,item)=>item.getBoundingClientRect().top-pane.getBoundingClientRect().top+pane.scrollTop;
  const alive=(token,pane)=>token===generation&&pane.isConnected;
  function loadLibrary(){
    if(!library)library=import('./assets/vendor/pdfjs/pdf.mjs').then(api=>{
      api.GlobalWorkerOptions.workerSrc=new URL('assets/vendor/pdfjs/pdf.worker.mjs',document.baseURI).href;
      return api;
    });
    return library;
  }
  function documentFor(version){
    if(!documents.has(version))documents.set(version,loadLibrary().then(api=>api.getDocument({
      url:new URL(window.reviewAssetUrl?.(`assets/pdf/${version}.pdf`)||`assets/pdf/${version}.pdf`,document.baseURI).href,
      cMapUrl:new URL('assets/vendor/pdfjs/cmaps/',document.baseURI).href,
      standardFontDataUrl:new URL('assets/vendor/pdfjs/standard_fonts/',document.baseURI).href,
      wasmUrl:new URL('assets/vendor/pdfjs/wasm/',document.baseURI).href,
      iccUrl:new URL('assets/vendor/pdfjs/iccs/',document.baseURI).href,
      cMapPacked:true,isEvalSupported:false
    }).promise));
    return documents.get(version);
  }
  function dispose(){
    generation++;
    for(const reader of readers.values())reader.dispose();
    readers.clear();
    for(const task of tasks)try{task.cancel()}catch{}
    tasks.clear();
  }
  window.disposePdfPanes=dispose;
  window.jumpPdfPage=(version,n,fraction=0)=>readers.get(version)?.jump(n,fraction);
  window.focusPdfRegion=(version,n,box)=>readers.get(version)?.jump(n,(box?.[1]||0)/100,(box?.[0]||0)/100);
  window.renderPdfPanes=async function(panes,zoom,onComplete){
    dispose();const token=generation;
    await Promise.all(panes.map(async pane=>{
      const version=pane.dataset.pdfScroll,items=[...pane.querySelectorAll('.pdf-page-item')];
      if(!items.length)return;
      let api,doc,running=false,queue=[],frame=0,visible=Number(pane.dataset.startPage)||1,finished=false;
      const rendered=new Set(),pending=new Set(),failed=new Set();
      const itemFor=n=>items.find(x=>Number(x.dataset.page)===n);
      function currentPage(){
        const marker=pane.scrollTop+Math.min(pane.clientHeight*.25,150);
        let item=items[0];
        for(const candidate of items){if(pageTop(pane,candidate)<=marker)item=candidate;else break;}
        return Number(item.dataset.page);
      }
      function notify(){
        if(!alive(token,pane))return;
        const n=currentPage();visible=n;
        window.dispatchEvent(new CustomEvent('pdf-page-change',{detail:{version,page:n}}));
        schedule(n);
      }
      function schedule(n){
        const center=items.findIndex(x=>Number(x.dataset.page)===n);
        const near=[center,center+1,center-1].filter(i=>i>=0&&i<items.length);
        queue=queue.filter(num=>near.some(i=>Number(items[i].dataset.page)===num));
        pending.clear();for(const num of queue)pending.add(num);
        for(const i of near){const num=Number(items[i].dataset.page);if(!rendered.has(num)&&!failed.has(num)&&!pending.has(num)){queue.push(num);pending.add(num);}}
        // Keep at most a small neighborhood of canvases; distant pages retain their preview.
        for(const num of [...rendered])if(Math.abs(items.findIndex(x=>Number(x.dataset.page)===num)-center)>2){
          const shell=itemFor(num)?.querySelector('.pdf-render-page');if(!shell)continue;
          const canvas=shell.querySelector('canvas');canvas.width=0;canvas.height=0;canvas.hidden=true;
          shell.querySelector('.textLayer').replaceChildren();shell.querySelector('.pdf-page-preview').hidden=false;
          itemFor(num).dataset.rendered='preview';rendered.delete(num);
        }
        pump();
      }
      function jump(n,fraction=0,xFraction=0){
        const item=itemFor(n);if(!item)return false;
        const shell=item.querySelector('.pdf-render-page');
        pane.dataset.programmaticJump='true';setTimeout(()=>{if(alive(token,pane))delete pane.dataset.programmaticJump},120);
        pane.scrollTop=Math.max(0,pageTop(pane,item)+fraction*shell.clientHeight-16);
        pane.scrollLeft=Math.max(0,xFraction*shell.clientWidth-20);
        visible=n;schedule(n);return true;
      }
      const onScroll=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(notify)};
      pane.addEventListener('scroll',onScroll,{passive:true});
      readers.set(version,{jump,dispose:()=>{pane.removeEventListener('scroll',onScroll);cancelAnimationFrame(frame);queue=[]}});
      const startPage=Number(pane.dataset.startPage)||Number(items[0].dataset.page),startBox=pane.dataset.startBox?.split(',').map(Number);
      jump(startPage,startBox?startBox[1]/100:0,startBox?startBox[0]/100:0);
      try{[api,doc]=await Promise.all([loadLibrary(),documentFor(version)])}
      catch(error){
        if(!alive(token,pane))return;
        pane.dataset.rendered='fallback';pane.querySelector('.pdf-loading')?.remove();
        const note=document.createElement('p');note.className='notice';note.textContent='Direct PDF rendering is unavailable here. All page previews and the original PDF links remain available.';
        pane.before(note);failed.add(visible);return;
      }
      if(!alive(token,pane))return;
      pane.dataset.ready='true';schedule(visible);
      async function pump(){
        if(running||!api||!doc||!alive(token,pane))return;running=true;
        while(queue.length&&alive(token,pane)){
          const n=queue.shift();pending.delete(n);if(rendered.has(n)||failed.has(n))continue;
          const item=itemFor(n),shell=item.querySelector('.pdf-render-page');
          try{
            const page=await doc.getPage(n);if(!alive(token,pane))break;
            const base=page.getViewport({scale:1}),scale=shell.clientWidth/base.width;
            const viewport=page.getViewport({scale});
            const ratio=Math.min(window.devicePixelRatio||1,2,Math.sqrt(5_000_000/(viewport.width*viewport.height)));
            shell.style.height=viewport.height+'px';shell.style.setProperty('--scale-factor',scale);
            shell.style.setProperty('--total-scale-factor',scale);shell.style.setProperty('--user-unit','1');
            const canvas=shell.querySelector('canvas');canvas.width=Math.ceil(viewport.width*ratio);canvas.height=Math.ceil(viewport.height*ratio);
            canvas.style.width=viewport.width+'px';canvas.style.height=viewport.height+'px';
            const task=page.render({canvasContext:canvas.getContext('2d'),canvas,viewport,transform:ratio===1?null:[ratio,0,0,ratio,0,0]});
            tasks.add(task);await task.promise;tasks.delete(task);if(!alive(token,pane))break;
            const text=shell.querySelector('.textLayer');text.replaceChildren();
            await new api.TextLayer({textContentSource:page.streamTextContent(),container:text,viewport}).render();
            if(!alive(token,pane))break;
            canvas.hidden=false;shell.querySelector('.pdf-page-preview').hidden=true;item.dataset.rendered='true';rendered.add(n);
            pane.querySelector('.pdf-loading')?.remove();pane.dataset.rendered='true';
            if(!finished&&n===visible){finished=true;window.dispatchEvent(new CustomEvent('pdf-pane-rendered',{detail:{version,page:n}}));}
          }catch(error){
            if(!alive(token,pane)||error?.name==='RenderingCancelledException')break;
            failed.add(n);item.dataset.rendered='fallback';pane.querySelector('.pdf-loading')?.remove();pane.dataset.rendered='fallback';
          }
        }
        running=false;
      }
    }));
    if(token===generation){onComplete?.();window.dispatchEvent(new Event('pdf-rendered'));}
  };
})();
