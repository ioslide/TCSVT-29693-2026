"""Refresh every compiled table/panel excerpt from the read-only manuscript PDF.

Run after align-evidence-v14.py and sync-assets.py. Needs PyMuPDF (the local
authoring Python supplies it). Does not modify manuscript or response inputs.
"""
from pathlib import Path
import json, re, difflib
import fitz

site=Path(__file__).resolve().parents[1]
target=site/'data.js'
data=json.loads(target.read_text(encoding='utf-8').split('=',1)[1].rsplit(';',1)[0])
doc=fitz.open(site.parent/'latex_revise/main.pdf')
changes={c['id']:c for c in data['changes']}
for id in ['shape-texture','colored-mnist','rgr-alternatives','routing-ratio',
           'curvature-proxies','efficiency','purity-protocol','domainnet']:
    ref=changes[id]['revised']
    x,y,w,h=ref['box']
    changes[id]['after']=doc[ref['page']-1].get_text(
        clip=fitz.Rect(x*6.12,y*7.92,(x+w)*6.12,(y+h)*7.92),sort=True).strip()

# The 3-D panel axes do not have a linear PDF reading order. Use the complete
# source caption for their text view, just as in the main figure gallery.
for id,comment_id in [('probe-sensitivity','r1-1'),('sinkhorn','r1-3')]:
    comment=next(c for c in data['comments'] if c['id']==comment_id)
    caption=next(b for b in comment['fullResponse'] if b['kind']=='caption' and b.get('evidenceId')==id)
    changes[id]['after']=caption['text']
    changes[id]['textScope']='caption'

changes['probe-theory']['summary']='The local squared-response analysis establishes PCS as a structured directional-sensitivity measure. Controlled shortcut interventions connect this response to routing and improved trusted-set purity beyond entropy alone.'
changes['prior-safeguards']['summary']='Uniform prior mixing bounds deviation from the uniform marginal; trusted-set EMA updates and conservative centroid smoothing stabilize geometry repair under changing routing ratios.'
changes['threshold-guidance']['summary']='Broad high-accuracy plateaus support an out-of-the-box configuration for an unseen K-class dataset: υPCS = 0.2, υEnt = 0.6 ln K, and Fourier strength λ = 0.2. Dynamic CLR outperforms static baselines, and stable OT performance enables a minimal Sinkhorn budget with minimal hyperparameter tuning.'
changes['transfer']['summary']='Five matched runs establish significant aggregate transfer gains over AEA on ImageNet-C and DeYO on DomainNet-126. Fig. 11 reports mean ± SD and adds the DomainNet-126 transfer matrix.'
changes['efficiency']['summary']='Table XI reports FLOPs, peak memory, latency, and accuracy. DCF-Lite reduces FLOPs by 61.8% and peak memory by 58.6%, achieving 42.06% accuracy, 1.42 pp below full DCF and 3.16 pp above SAR.'
titles={'f1':'Long-horizon instability of existing TTA methods','f2':'Why homogeneous TTA fails',
        'f3':'Overview of DCF','f4':'Illustration of temporally correlated test streams',
        'f5':'Ablation of design choices in stress probe and router','f6':'Qualitative comparison of model responses to stress probes',
        'f7':'PCS-Entropy distribution of samples','f8':'Layer-wise parameter drift',
        'f9':'Per-layer retention gates of CLR','f10':'Static vs. Temporally Correlated Streams',
        'f11':'Cross-domain transfer','f12':'Hyperparameter sensitivity',
        'f-runtime':'Computational overhead and lightweight variant'}
for figure in data['figures']:
    figure['title']=titles[figure['id']]
    if figure['id']=='f-runtime':figure['summary']=changes['efficiency']['summary']
changes['overview']['title']='Overview of DCF'
changes['probe-sensitivity']['title']='Frequency range and perturbation strength'
changes['curvature-proxies']['title']='Granularity and curvature proxy comparisons'
changes['retention-heatmap']['title']='Which groups are retained and when'
changes['rgr-alternatives']['title']='Comparison with simpler alternatives'
changes['prior-safeguards']['title']='Conservative prior and centroid updates'
changes['routing-ratio']['title']='Small and dominant routed-away subsets'
changes['transfer']['title']='Variability across five runs and paired comparisons'
changes['domainnet']['title']='Transfer on a distinct dataset'
changes['probe-definition']['title']='Fourier-basis stress probe'
changes['shape-texture']['title']='Controlled shortcut evidence'
changes['colored-mnist']['title']='Controlled color shortcut on binary Colored-MNIST'
changes['efficiency']['title']='Computational overhead and lightweight variant'
changes['implementation']['title']='Models and Implementation Details'
changes['regions']['title']='Definitions added to revised Section III-C'
changes['threshold-guidance']['title']='Practical threshold guidance and OT settings'
changes['uncertainty-literature']['title']='Additional literature on uncertainty-aware modeling'
changes['recent-literature']['title']='Recent work on continual adaptation'
changes['purity-protocol']['title']='Selected-sample quality at matched trusted-set coverage'

def tokens(s):return re.findall(r'⟪[^⟫]*⟫\s*|\S+\s*|\s+',s)
for item in [*data['changes'],*data['figures'],*data['sections']]:
    a,b=tokens(item.get('before','')),tokens(item.get('after',''))
    diff={'original':[],'revised':[]}
    for tag,i,j,k,l in difflib.SequenceMatcher(None,a,b,autojunk=False).get_opcodes():
        if tag=='equal':
            for version,t in [('original',a[i:j]),('revised',b[k:l])]:diff[version].append({'kind':'same','text':''.join(t)})
        else:
            if i<j:diff['original'].append({'kind':'del','text':''.join(a[i:j])})
            if k<l:diff['revised'].append({'kind':'add','text':''.join(b[k:l])})
    item['diff']=diff
target.write_text('window.REVIEW_DATA='+json.dumps(data,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
print('Synchronized 8 compiled table/panel texts, 2 complete panel captions, evidence summaries, source-aligned titles, and all comparison diffs.')
