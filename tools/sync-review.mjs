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
 const replies=new Map(JSON.parse(fs.readFileSync(output,'utf8')).comments.map(c=>[c.id,c]));
 const context={window:{}};vm.runInNewContext(fs.readFileSync(path.join(site,'data.js'),'utf8'),context);const data=context.window.REVIEW_DATA;
 for(const comment of data.comments){const reply=replies.get(comment.id);if(!reply)throw new Error('Missing response '+comment.id);comment.fullResponse=reply.fullResponse;comment.responseWordCount=reply.responseWordCount;comment.response=reply.fullResponse.filter(b=>b.kind==='paragraph').slice(0,2).map(b=>b.text);comment.responseSourceSections=comment.id==='eic'?['E1','E2']:[comment.id==='sae'?'SAE':comment.label];}
 const source='revise/Response_to_Editors_and_Reviewers_TCSVT_GPT5-6_v12/Response_to_Editors_and_Reviewers_TCSVT_GPT5-6_v12.tex',sourcePath=path.join(root,source),pdfPath=sourcePath.replace(/\.tex$/,'.pdf');
 const hash=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex');
 data.meta.fullResponseSource=source;data.meta.fullResponseSha256=hash(sourcePath);data.meta.responsePdfSha256=hash(pdfPath);data.meta.responseRevision='v12';
 fs.copyFileSync(pdfPath,path.join(site,'assets/pdf/response.pdf'));
 fs.copyFileSync(path.join(path.dirname(sourcePath),'assets/retention_gate_heatmap.png'),path.join(site,'assets/response/retention-gates.png'));
 fs.writeFileSync(path.join(site,'data.js'),'window.REVIEW_DATA='+JSON.stringify(data,null,2)+';\n');
 console.log('Synchronized all 17 complete v12 replies, their tables and image, and the response PDF. Manuscript excerpts and interaction settings preserved.');
}finally{fs.rmSync(temporary,{recursive:true,force:true})}
