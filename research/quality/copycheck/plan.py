import json, glob, re, sys, collections, os
W = sys.argv[1]
ysrc = json.load(open(W + '/yamlsrc.json'))
norm = lambda s: re.sub(r'\W+', ' ', s.lower()).strip()
ynorm = {norm(k): v for k, v in ysrc.items()}
plan = {}
stats = collections.Counter()
for f in glob.glob(W + '/dl/place/*.json'):
    p = json.load(open(f))['place']
    nl = (p.get('translations') or {}).get('nl') or {}
    urls = [l['url'] for l in p.get('links') or [] if l.get('url')]
    mons = re.findall(r'\d{3,7}', str((p.get('attributes') or {}).get('monument_number') or ''))
    ys = ysrc.get(p['title']) or ynorm.get(norm(p['title'])) or ysrc.get(nl.get('title', '')) or []
    stats['yaml_match' if ys else 'yaml_nomatch'] += 1
    src = list(urls)
    for s in ys:
        for u in re.findall(r'https?://[^\s\'"]+', s):
            u = u.rstrip(',.;')
            while u.endswith(')') and u.count(')') > u.count('('): u = u[:-1]
            src.append(u)
        for n in re.findall(r'rce:\s*(\d+)', s): src.append('https://monumentenregister.cultureelerfgoed.nl/monumenten/' + n)
        for q in re.findall(r'wd:\s*(Q\d+)', s): src.append('wd:' + q)
    plan[p['id']] = dict(id=p['id'], title=p['title'], borough=p.get('borough'), mons=mons,
        sources=list(dict.fromkeys(u.rstrip('.') for u in src)),
        nl_summary=nl.get('summary') or '', nl_body=nl.get('body') or '')
json.dump(plan, open(W + '/plan.json', 'w'), indent=1, ensure_ascii=False)
print(stats, sum(1 for p in plan.values() if not p['nl_body']), 'without nl body')
c = collections.Counter(); allu = set()
for p in plan.values():
    allu.update(p['sources'])
for u in allu: c[re.sub(r'^(https?://[^/]+).*', r'\1', u)[:45]] += 1
print(len(allu), 'unique urls;', sum(len(p['mons']) for p in plan.values()), 'monument refs')
print(c.most_common(60))
