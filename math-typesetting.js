(function(root){
  'use strict';
  const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const supers={'⁻':'-','⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9'};
  const exponent=s=>[...s].map(c=>supers[c]||c).join('');
  const symbols={
    'υEnt':'\\upsilon_{\\mathrm{Ent}}','υPCS':'\\upsilon_{\\mathrm{PCS}}',
    'νEnt':'\\nu_{\\mathrm{Ent}}','νPCS':'\\nu_{\\mathrm{PCS}}',
    'ρM':'\\rho_M','αb':'\\alpha_b','εOT':'\\varepsilon_{\\mathrm{OT}}',
    'Nsk':'N_{\\mathrm{sk}}','λ':'\\lambda','ρ':'\\rho'
  };
  const symbol=s=>symbols[s.replace(/<\/?sub>/g,'')];
  const sym='(?:[υν](?:<sub>(?:Ent|PCS)</sub>|Ent|PCS)|ρ(?:<sub>M</sub>|M)|α(?:<sub>b</sub>|b)|ε(?:<sub>OT</sub>|OT)|N(?:<sub>sk</sub>|sk)|[λρ])';
  const relation=s=>({'&lt;':'<','&gt;':'>','≥':'\\ge','≤':'\\le'})[s]||s;
  // Replace only recorded mathematical notation, preserving the original reply text.
  const rules=[
    [/E\[PCS²\] = gᵀQg \+ O\(E\[‖δ‖₂³\]\)/g,()=>String.raw`\mathbb{E}[\mathrm{PCS}^{2}]=g^{\top}Qg+O\!\left(\mathbb{E}[\lVert\delta\rVert_{2}^{3}]\right)`],
    [/Q = E\[δδᵀ\]/g,()=>String.raw`Q=\mathbb{E}[\delta\delta^{\top}]`],
    [new RegExp('(E|s)\\s*(&lt;|&gt;|≥|≤|<|>)\\s*('+sym+')','g'),m=>m[1]+relation(m[2])+symbol(m[3])],
    [new RegExp('('+sym+')\\s*=\\s*([0-9]+(?:\\.[0-9]+)?)(?:\\s*ln\\s*K)?','g'),m=>symbol(m[1])+'='+m[2]+(/ln\s*K/.test(m[0])?String.raw`\ln K`:'')],
    [/p\s*=\s*([0-9]+(?:\.[0-9]+)?)\s*×\s*10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g,m=>'p='+m[1]+String.raw`\times10^{`+exponent(m[2])+'}'],
    [/t\((\d+)\)\s*=\s*([0-9]+(?:\.[0-9]+)?)/g,m=>'t('+m[1]+')='+m[2]],
    [/([0-9]+(?:\.[0-9]+)?)\s*×\s*10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g,m=>m[1]+String.raw`\times10^{`+exponent(m[2])+'}'],
    [/([0-9]+(?:\.[0-9]+)?)\s*±\s*([0-9]+(?:\.[0-9]+)?)/g,m=>m[1]+String.raw`\pm`+m[2]],
    [/([0-9]+(?:\.[0-9]+)?)\s*×\s*([0-9]+(?:\.[0-9]+)?)/g,m=>m[1]+String.raw`\times`+m[2]],
    [/10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g,m=>'10^{'+exponent(m[1])+'}'],
    [/0\.99\/K/g,()=>String.raw`\frac{0.99}{K}`],
    [/1\/λ/g,()=>String.raw`1/\lambda`],
    [/μₜˡ|\\mu_t\^l/g,()=>String.raw`\mu_t^{l}`],
    [/‖δ‖₂³/g,()=>String.raw`\lVert\delta\rVert_{2}^{3}`],
    [/\bln K\b/g,()=>String.raw`\ln K`],
    [/\bL1\b/g,()=>String.raw`L_1`],
    [new RegExp(sym,'g'),m=>symbol(m[0])],
    [/[δλμτθσ]/g,m=>({'δ':String.raw`\delta`,'λ':String.raw`\lambda`,'μ':String.raw`\mu`,'τ':String.raw`\tau`,'θ':String.raw`\theta`,'σ':String.raw`\sigma`})[m[0]]],
    [/\bg(?= be the input gradient)/g,()=> 'g'],
    [/\b[Es](?= denote (?:predictive entropy|PCS))/g,m=>m[0]],
    [/\bK(?=-class dataset)/g,()=> 'K'],
    [/≈\s*([0-9]+(?:\.[0-9]+)?)/g,m=>String.raw`\approx`+m[1]],
    [/~0\.005s\/image/g,()=>String.raw`\sim0.005\,\mathrm{s}/\mathrm{image}`]
  ];
  function tokenize(html){
    const tokens=[];
    for(const [pattern,toLatex] of rules){
      html=html.replace(pattern,(...args)=>{
        const match=args.slice(0,-2),index=tokens.length;
        tokens.push({source:match[0],latex:toLatex(match)});
        return '\uE000'+index+'\uE001';
      });
    }
    return {html,tokens};
  }
  function render(latex,display=false,source=latex){
    if(!root.katex)return escape(source);
    const body=root.katex.renderToString(latex,{throwOnError:true,strict:false,trust:false,displayMode:display,output:'htmlAndMathml'});
    return `<span class="review-math ${display?'review-math-display':'review-math-inline'}${!display&&latex.length>80?' review-math-long':''}" data-latex="${escape(latex)}" data-original="${escape(source)}">${body}</span>`;
  }
  function formatHtml(html){
    const explicit=[];
    html=String(html??'').replace(/<span data-response-math="([^"]*)" data-display="(true|false)">[\s\S]*?<\/span>/g,(_,encoded,display)=>{
      const latex=encoded.replace(/&(amp|lt|gt|quot|#39);/g,(_,name)=>({amp:'&',lt:'<',gt:'>',quot:'"','#39':"'"})[name]);
      const index=explicit.length;
      try{explicit.push(render(latex,display==='true'))}catch{explicit.push(escape(latex))}
      return '\uE100'+index+'\uE101';
    });
    const annotated=tokenize(String(html??''));
    return annotated.html.replace(/\uE000(\d+)\uE001/g,(_,i)=>{
      const token=annotated.tokens[Number(i)];
      try{return render(token.latex,false,token.source)}catch{return token.source;}
    }).replace(/\uE100(\d+)\uE101/g,(_,i)=>explicit[Number(i)]);
  }
  root.REVIEW_MATH={tokenize,render,formatHtml};
})(window);
