import json, sys, re, subprocess, time, urllib.parse
W = sys.argv[1]
plan = json.load(open(W + '/plan.json'))
qs = sorted({re.search(r'Q\d+', u).group(0) for p in plan.values() for u in p['sources'] if re.search(r'(^wd:|wikidata\.org/wiki/)Q\d+', u)})
m = {}
for i in range(0, len(qs), 50):
    url = 'https://www.wikidata.org/w/api.php?' + urllib.parse.urlencode(dict(action='wbgetentities', ids='|'.join(qs[i:i+50]), props='sitelinks', sitefilter='nlwiki', format='json'))
    for attempt in range(5):
        try:
            d = json.loads(subprocess.run(['curl', '-s', '-A', 'deep-cities-research/0.1', url], capture_output=True).stdout); break
        except Exception: d = {}; time.sleep(5)
    for q, e in d.get('entities', {}).items():
        sl = e.get('sitelinks', {}).get('nlwiki')
        if sl: m[q] = 'https://nl.wikipedia.org/wiki/' + sl['title'].replace(' ', '_')
    time.sleep(1.5)
n = 0
for p in plan.values():
    add = [m[q] for u in p['sources'] for q in re.findall(r'Q\d+', u) if re.search(r'(^wd:|wikidata\.org/wiki/)', u) and q in m]
    for a in add:
        if a not in p['sources']: p['sources'].append(a); n += 1
json.dump(plan, open(W + '/plan.json', 'w'), indent=1, ensure_ascii=False)
print(len(qs), 'qids', len(m), 'with nlwiki', n, 'added')
