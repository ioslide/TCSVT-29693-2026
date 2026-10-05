import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import os from 'node:os';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const directory=path.dirname(fileURLToPath(import.meta.url)),root=path.resolve(directory,'../..'),site=path.join(root,'website');
const temporary=fs.mkdtempSync(path.join(os.tmpdir(),'dcf-response-sync-')),output=path.join(temporary,'replies.json');
try{
 const result=spawnSync(process.execPath,[path.join(directory,'sync-review-v12.mjs')],{env:{...process.env,REVIEW_RESPONSES_ONLY:'1',REVIEW_RESPONSE_OUTPUT:output},encoding:'utf8'});
 if(result.status!==0)throw new Error(result.stderr||'Response parsing failed');
 const parsed=JSON.parse(fs.readFileSync(output,'utf8'));
 const replies=new Map(parsed.comments.map(c=>[c.id,c]));
 const context={window:{}};vm.runInNewContext(fs.readFileSync(path.join(site,'data.js'),'utf8'),context);const data=context.window.REVIEW_DATA;
 data.overview=parsed.overview;
 for(const comment of data.comments){const reply=replies.get(comment.id);if(!reply)throw new Error('Missing response '+comment.id);comment.title=reply.title;comment.comment=reply.comment;comment.fullResponse=reply.fullResponse;comment.responseWordCount=reply.responseWordCount;comment.response=reply.fullResponse.filter(b=>b.kind==='paragraph').slice(0,2).map(b=>b.text);comment.responseSourceSections=comment.id==='eic'?['EIC']:[comment.id==='sae'?'SAE':comment.label];}
 for(const id of ['probe-sensitivity','sinkhorn']){
  const evidence=data.changes.find(c=>c.id===id);
  for(const commentId of ['r1-1','sae']){
   if(!evidence.comments.includes(commentId))evidence.comments.push(commentId);
   const comment=data.comments.find(c=>c.id===commentId);
   if(!comment.changes.includes(id))comment.changes.push(id);
  }
 }
 const source='revise/Response_to_Editors_and_Reviewers_TCSVT_GPT5-6_v14/Response_to_Editors_and_Reviewers_TCSVT_GPT5-6_v14.tex',sourcePath=path.join(root,source),pdfPath=sourcePath.replace(/\.tex$/,'.pdf');
 const hash=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex');
 data.meta.fullResponseSource=source;data.meta.fullResponseSha256=hash(sourcePath);data.meta.responsePdfSha256=hash(pdfPath);data.meta.responseRevision='v14';
 const python=process.env.REVIEW_PYTHON||'C:/Users/Administrator/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe';
 const pages=spawnSync(python,['-c','from pypdf import PdfReader; import sys; print(len(PdfReader(sys.argv[1]).pages))',pdfPath],{encoding:'utf8'});
 if(pages.status!==0)throw new Error(pages.stderr||'Response PDF page count failed');
 data.meta.responsePages=Number(pages.stdout.trim());
 fs.copyFileSync(pdfPath,path.join(site,'assets/pdf/response.pdf'));
 fs.copyFileSync(path.join(path.dirname(sourcePath),'assets/retention_gate_heatmap.png'),path.join(site,'assets/response/retention-gates.png'));
 fs.writeFileSync(path.join(site,'data.js'),'window.REVIEW_DATA='+JSON.stringify(data,null,2)+';\n');
 console.log('Synchronized all 17 complete v14 replies, titles, tables, figures, and the response PDF. Manuscript excerpts and interaction settings preserved.');
}finally{fs.rmSync(temporary,{recursive:true,force:true})}
