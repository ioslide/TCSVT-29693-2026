(() => {
  let library;
  const documents=new Map();
  let generation=0;
  const activeTasks=new Set();
  function loadLibrary(){
    if(!library) library=import('./assets/vendor/pdfjs/pdf.mjs').then(api=>{
      api.GlobalWorkerOptions.workerSrc=new URL('assets/vendor/pdfjs/pdf.worker.mjs',document.baseURI).href;
      return api;
    });
    return library;
  }
  async function documentFor(version){
    if(!documents.has(version))documents.set(version,loadLibrary().then(api=>api.getDocument({
      url:new URL(`assets/pdf/${version}.pdf`,document.baseURI).href,
      cMapUrl:new URL('assets/vendor/pdfjs/cmaps/',document.baseURI).href,
      standardFontDataUrl:new URL('assets/vendor/pdfjs/standard_fonts/',document.baseURI).href,
      wasmUrl:new URL('assets/vendor/pdfjs/wasm/',document.baseURI).href,
      iccUrl:new URL('assets/vendor/pdfjs/iccs/',document.baseURI).href,
      cMapPacked:true,isEvalSupported:false
    }).promise));
    return documents.get(version);
  }
  window.renderPdfPanes=async function(panes,zoom,onComplete){
    const token=++generation;
    for(const task of activeTasks)try{task.cancel()}catch{}activeTasks.clear();
    await Promise.all(panes.map(async pane=>{
      const shell=pane.querySelector('.pdf-render-page'),version=pane.dataset.pdfScroll,pageNumber=Number(pane.dataset.page);
      if(!shell||!pageNumber)return;
      try{
        const [api,doc]=await Promise.all([loadLibrary(),documentFor(version)]);
        const page=await doc.getPage(pageNumber);
        if(token!==generation||!pane.isConnected)return;
        const original=page.getViewport({scale:1});
        const targetWidth=Math.max(240,pane.clientWidth-2)*zoom/100,scale=targetWidth/original.width;
        const viewport=page.getViewport({scale}),ratio=Math.min(window.devicePixelRatio||1,2);
        shell.style.width=viewport.width+'px';shell.style.height=viewport.height+'px';
        shell.style.setProperty('--scale-factor',scale);shell.style.setProperty('--total-scale-factor',scale);shell.style.setProperty('--user-unit','1');
        const canvas=shell.querySelector('canvas');
        canvas.width=Math.ceil(viewport.width*ratio);canvas.height=Math.ceil(viewport.height*ratio);
        canvas.style.width=viewport.width+'px';canvas.style.height=viewport.height+'px';
        const task=page.render({canvasContext:canvas.getContext('2d'),canvas,viewport,transform:ratio===1?null:[ratio,0,0,ratio,0,0]});
        activeTasks.add(task);await task.promise;activeTasks.delete(task);
        if(token!==generation||!pane.isConnected)return;
        pane.querySelector('.pdf-loading')?.remove();
        pane.dataset.rendered='true';
        const text=shell.querySelector('.textLayer');
        await new api.TextLayer({textContentSource:page.streamTextContent(),container:text,viewport}).render();
      }catch(error){
        if(token!==generation||!pane.isConnected||error?.name==='RenderingCancelledException')return;
        pane.querySelector('.pdf-loading')?.remove();
        const note=document.createElement('p');note.className='notice';note.textContent='Direct PDF rendering is unavailable here. The page image is shown below; the source PDF link remains available.';
        const image=document.createElement('img');image.src=`assets/pages/${version}-${pageNumber}.webp`;image.alt=`${version} manuscript page ${pageNumber}`;image.style.width='100%';
        shell.replaceChildren(note,image);shell.style.width=zoom+'%';shell.style.height='auto';pane.dataset.rendered='fallback';
      }
    }));
    if(token===generation){onComplete?.();window.dispatchEvent(new Event('pdf-rendered'));}
  };
})();
