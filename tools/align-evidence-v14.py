"""Measure changed-layout passages against the supplied final manuscript PDF.

Only website data and QA artifacts are written. All manuscript/response inputs
are read-only. Unchanged pages retain their previously reviewed coordinates.
"""
from pathlib import Path
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

with pdfplumber.open(ROOT/'latex_revise/main.pdf') as pdf:
    # Full Related Work ends above III. Methodology in the right column.
    ref = changes['tcsvt-literature']['revised']
    ref['boxes'] = [rect(46,50,304,751), rect(309,50,567,225)]
    ref['box'] = ref['boxes'][0]
    ref = changes['uncertainty-literature']['revised']
    ref['boxes'] = phrase_boxes(pdf.pages[2],1,'Beyond visual tasks,','streams [19–21].')
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

DATA.write_text('window.REVIEW_DATA='+json.dumps(data,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
print('Measured Related Work, uncertainty/survey/GOLD excerpts, PCS analysis, and routing-region boxes against latex_revise/main.pdf.')
