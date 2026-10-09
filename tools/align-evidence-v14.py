"""Measure changed-layout passages against the supplied final manuscript PDF.

Only website data and QA artifacts are written. All manuscript/response inputs
are read-only. Unchanged pages retain their previously reviewed coordinates.
"""
from pathlib import Path
from io import BytesIO
import json
import pdfplumber

ROOT = Path(__file__).resolve().parents[2]
SITE = ROOT / 'website'
DATA = SITE / 'data.js'
data = json.loads(DATA.read_text(encoding='utf-8').split('=', 1)[1].rsplit(';', 1)[0])
changes = {c['id']: c for c in data['changes']}

def rect(x0, top, x1, bottom):
    return [round(x0/612*100, 3), round(top/792*100, 3),
            round((x1-x0)/612*100, 3), round((bottom-top)/792*100, 3)]

def phrase_boxes(page, column, first, last):
    crop = page.crop((46 if column == 1 else 309, 45,
                      304 if column == 1 else 567, 754))
    start = crop.search(first, regex=False)[0]
    finish = next(m for m in crop.search(last, regex=False) if m['top'] >= start['top'])
    boxes = []
    for line in crop.extract_text_lines():
        if line['top'] < start['top']-1 or line['top'] > finish['top']+1:
            continue
        chars = line['chars']
        if abs(line['top']-start['top']) < 1:
            chars = [c for c in chars if c['x0'] >= start['x0']-.1]
        if abs(line['top']-finish['top']) < 1:
            chars = [c for c in chars if c['x1'] <= finish['x1']+.1]
        boxes.append(rect(min(c['x0'] for c in chars)-1,
                          min(c['top'] for c in chars)-1,
                          max(c['x1'] for c in chars)+1,
                          max(c['bottom'] for c in chars)+1))
    return boxes

with pdfplumber.open(BytesIO((ROOT/'latex_revise/main.pdf').read_bytes())) as pdf:
    # Full Related Work ends above III. Methodology in the right column.
    ref = changes['tcsvt-literature']['revised']
    ref['boxes'] = [rect(46,50,304,751), rect(309,50,567,225)]
    ref['box'] = ref['boxes'][0]
    ref = changes['uncertainty-literature']['revised']
    ref['boxes'] = phrase_boxes(pdf.pages[2],1,'Beyond visual tasks,','21].')
    ref['box'] = ref['boxes'][0]
    ref = changes['recent-literature']['revised']
    ref['boxes'] = (phrase_boxes(pdf.pages[2],1,'Representative approaches','adaptation [12, 13, 28].')
                    + phrase_boxes(pdf.pages[2],2,'CoTTA','adaptation loop.'))
    ref['box'] = ref['boxes'][0]
    # The local-analysis continuation now ends at y=377.71 pt, before Sample routing.
    ref = changes['probe-theory']['revised']
    ref['boxes'] = [rect(46,640,304,752),rect(309,257.5,567,379)]
    ref['box'] = ref['boxes'][0]
    # Include all four region definitions and the Rt/Ut notation, excluding III-D.
    ref = changes['regions']['revised']
    ref['box'] = rect(309,516.5,567,593)
    ref.pop('boxes',None)

    # Bounds are measured against the supplied current author PDF.
    current = {
        'shape-texture': (8, (309,484,567,665)),
        'rgr-alternatives': (10, (46,266,304,380)),
        'routing-ratio': (10, (46,397,304,547)),
        'curvature-proxies': (10, (309,525,567,655)),
        'retention-heatmap': (10, (309,266,567,506)),
        'implementation': (6, (309,592,567,750)),
        'efficiency': (12, (309,51,567,253)),
        'transfer': (11, (309,182,567,583)),
        # Include the complete top edge and colorbar tick labels of panel (b).
        'domainnet': (11, (309,347,570,494)),
        'probe-sensitivity': (12, (46,178.6,175,305)),
        'sinkhorn': (12, (175,178.6,304,305)),
    }
    for id,(page,bounds) in current.items():
        ref = changes[id]['revised']
        ref['page'],ref['box'] = page,rect(*bounds)
        ref.pop('boxes',None)
        ref.pop('regions',None)
    ref = changes['threshold-guidance']['revised']
    ref['page'] = 11
    # Locate the complete current paragraph; its former p. 12 continuation
    # disappeared in the author's latest reflow. Do not include the next plot.
    paragraph = pdf.pages[10].crop((309,580,567,754))
    first = paragraph.search('Hyperparameter Sensitivity.', regex=False)[0]
    last = paragraph.search('minimal hyperparameter tuning.', regex=False)[0]
    ref['box'] = rect(309,first['top']-2,567,last['bottom']+2)
    ref['label'] = 'Hyperparameter Sensitivity (p. 11)'
    ref.pop('regions',None)
    ref.pop('boxes',None)
    # Include the entire prior safeguard continuation before the OT objective.
    ref = changes['prior-safeguards']['revised']
    continuation = pdf.pages[4].crop((309,54,567,120))
    end = continuation.search('The entropic OT plans are then obtained by solving:', regex=False)[0]
    ref['boxes'] = [rect(46,491,304,752),rect(309,54,567,end['top']-1)]
    ref['box'] = ref['boxes'][0]

    figures = {f['id']:f for f in data['figures']}
    for change_id,figure_id in [('retention-heatmap','f9'),('transfer','f11'),('efficiency','f-runtime')]:
        figures[figure_id]['revised']['page'] = changes[change_id]['revised']['page']
        figures[figure_id]['revised']['box'] = changes[change_id]['revised']['box']
    for id,bounds in [('f8',(309,89,567,252)),('f10',(46,140,304,299)),('f12',(46,54,304,417))]:
        figures[id]['revised']['box'] = rect(*bounds)

DATA.write_text('window.REVIEW_DATA='+json.dumps(data,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
print('Measured current passages, tables, figures, the complete DomainNet panel, and exact prior/sensitivity paragraph boundaries against the supplied manuscript PDF.')
