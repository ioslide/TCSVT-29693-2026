"""Read-only PDF audit; diagnostics stay inside the website's ignored QA folder."""
from pathlib import Path
import json, difflib, re
import fitz

site = Path(__file__).resolve().parents[1]
out = site / '.deployment/current-sync'
old = fitz.open(out / 'before-revised.pdf')
new = fitz.open(site.parent / 'latex_revise/main.pdf')
data = json.loads((site/'data.js').read_text(encoding='utf-8').split('=',1)[1].rsplit(';',1)[0])
reports=[]
for number,page in enumerate(new,1):
    blocks=page.get_text('blocks')
    lines=[]
    for block in blocks:
        if block[6]==0:
            lines.append(f'{tuple(round(v,1) for v in block[:4])}: {block[4].strip()}')
    (out/f'page-{number}.txt').write_text('\n\n'.join(lines),encoding='utf-8')
    print(f'Page {number}: text changed={old[number-1].get_text()!=page.get_text()}')
for item in [*data['changes'],*data['figures']]:
    ref=item.get('revised')
    if not ref or 'box' not in ref:continue
    page=ref['page']-1
    oldwords=old[page].get_text('words',sort=True)
    newwords=new[page].get_text('words',sort=True)
    match=difflib.SequenceMatcher(None,[w[4] for w in oldwords],[w[4] for w in newwords],autojunk=False)
    pairs={a+k:b+k for a,b,size in match.get_matching_blocks() for k in range(size)}
    shifts=[]
    for box in ref.get('boxes',[ref['box']]):
        x,y,w,h=box
        rect=fitz.Rect(x*6.12,y*7.92,(x+w)*6.12,(y+h)*7.92)
        hits=[i for i,word in enumerate(oldwords) if rect.contains(fitz.Rect(word[:4]))]
        points=[(newwords[pairs[i]][0]-oldwords[i][0],newwords[pairs[i]][1]-oldwords[i][1]) for i in hits if i in pairs]
        if points:
            ys=sorted(v[1] for v in points);xs=sorted(v[0] for v in points)
            shifts.append({'matched':len(points),'words':len(hits),'dyRange':[round(ys[0],2),round(ys[-1],2)],'dyMedian':round(ys[len(ys)//2],2),'dxMedian':round(xs[len(xs)//2],2)})
        else:shifts.append({'matched':0,'words':len(hits)})
    reports.append({'id':item['id'],'page':page+1,'shifts':shifts})
    print(json.dumps(reports[-1]))
(out/'layout-audit.json').write_text(json.dumps(reports,indent=2),encoding='utf-8')
