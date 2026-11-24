import json,re,sys
drafts=json.load(open('drafts.json'))
for q in sys.argv[1:]:
    pat=re.compile(q,re.I); hs=[]
    for d in drafts:
        txt=d['title']+' '+d['summary']+' '+d['body']+' '+(d['address'] or '')
        m=pat.search(txt)
        if m: hs.append(f"{d['slice']}: {d['title'][:60]} «{txt[max(0,m.start()-50):m.end()+50]}»".replace('\n',' '))
    print(f"[{q}] {len(hs)}"); [print('   ',h) for h in hs[:5]]
