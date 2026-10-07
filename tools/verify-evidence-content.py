"""Read-only semantic audit of PDF evidence locations and published excerpts.

Use the local authoring Python with PyMuPDF. No source or website file is written.
"""
from pathlib import Path
import json, re, hashlib
import fitz

site = Path(__file__).resolve().parents[1]
data = json.loads((site/'data.js').read_text(encoding='utf-8').split('=',1)[1].rsplit(';',1)[0])
documents = {v:fitz.open(site.parent/d/'main.pdf') for v,d in
             [('original','latex_old_version'),('revised','latex_revise')]}
changes = {c['id']:c for c in data['changes']}

def excerpt(ref, version):
    parts=[]
    for region in ref.get('regions',[{'page':ref['page'],'box':b}
                      for b in ref.get('boxes',[ref.get('box',[0,0,100,100])])]):
        page=documents[version][region['page']-1]
        x,y,w,h=region['box']
        parts.append(page.get_text(clip=fitz.Rect(x*page.rect.width/100,
            y*page.rect.height/100,(x+w)*page.rect.width/100,
            (y+h)*page.rect.height/100),sort=True).strip())
    return '\n'.join(parts)

caption_count=0
for item in data['figures']+data['changes']:
    for version in documents:
        ref=item.get(version)
        if not ref or 'box' not in ref:continue
        label=re.match(r'(Fig\.|Table)\s+([\dIVX]+)(?:\(([a-d])\))?',ref['label'])
        if not label:continue
        text=re.sub(r'\s+','',excerpt(ref,version)).upper()
        if label[3]:
            assert '('+label[3].upper()+')' in text,(item['id'],version,'Wrong subpanel')
        else:
            prefix='FIG.' if label[1]=='Fig.' else 'TABLE'
            assert prefix+label[2] in text,(item['id'],version,'Caption outside evidence box')
        caption_count+=1

compiled=['shape-texture','colored-mnist','rgr-alternatives','routing-ratio',
          'curvature-proxies','efficiency','purity-protocol','domainnet']
for id in compiled:
    # Use the same published numeric rectangle, independently read from the
    # supplied author PDF, so a stale excerpt cannot pass a source-hash check.
    assert changes[id]['after']==excerpt(changes[id]['revised'],'revised'),id
for id,number in [('shape-texture','IV'),('colored-mnist','V'),('purity-protocol','VI'),
                  ('rgr-alternatives','VII'),('routing-ratio','VIII'),
                  ('curvature-proxies','IX'),('efficiency','XI')]:
    assert changes[id]['after'].startswith('TABLE '+number+':'),id
for value in ['99.60','229.0','64.0','3.58']:
    assert value in changes['shape-texture']['after'],value
for id,comment_id in [('probe-sensitivity','r1-1'),('sinkhorn','r1-3')]:
    comment=next(c for c in data['comments'] if c['id']==comment_id)
    caption=next(b for b in comment['fullResponse'] if b['kind']=='caption' and b.get('evidenceId')==id)
    assert changes[id]['after']==caption['text'] and changes[id]['textScope']=='caption',id
    assert 'Fig. 12:' not in excerpt(changes[id]['revised'],'revised'),'Truncated overall caption inside subpanel'
threshold=changes['threshold-guidance']['revised']
assert threshold['page']==11 and not threshold.get('regions'),'Obsolete p. 12 continuation'
assert 'minimal hyperparameter tuning.' in excerpt(threshold,'revised'),'Incomplete threshold paragraph'
assert 'Hyperparameter' not in excerpt(changes['probe-sensitivity']['revised'],'revised')
assert data['figures'][next(i for i,c in enumerate(data['figures']) if c['id']=='f12')]['revised']['box'][1]<7,'Fig. 12 top is clipped'

response_dir=(site.parent/data['meta']['fullResponseSource']).parent
assert hashlib.sha256((site/'assets/response/retention-gates.png').read_bytes()).digest()==hashlib.sha256((response_dir/'assets/retention_gate_heatmap.png').read_bytes()).digest()
print(f'Verified {caption_count} original/revised caption or subpanel locations, 8 compiled excerpts, all 7 evidence tables, complete sensitivity captions, p. 11 threshold boundaries, and the response heatmap source.')
