import yaml, glob, json, sys, re
roots, out = sys.argv[1:-1], sys.argv[-1]
res = {}
def walk(o, file):
    if isinstance(o, dict):
        if 'title' in o and isinstance(o.get('title'), str):
            srcs = []
            def col(x):
                if isinstance(x, dict):
                    for k, v in x.items():
                        if k == 'sources' and isinstance(v, list): srcs.extend(str(s) for s in v)
                        elif k in ('nl', 'en'): col(v)
            col(o)
            for l in o.get('links') or []:
                if isinstance(l, dict) and l.get('url'): srcs.append(l['url'])
            if srcs: res.setdefault(o['title'].strip(), []).extend(srcs)
        for v in o.values(): walk(v, file)
    elif isinstance(o, list):
        for v in o: walk(v, file)
files = [f for root in roots for pat in ('/*/places/*.yaml', '/*/slices/*.json', '/*/rewrite/*/*.json', '/c-list-loops/*.json', '/*/places/*.json') for f in glob.glob(root + pat)]
for f in files:
    try: walk(json.load(open(f)) if f.endswith('.json') else yaml.safe_load(open(f)), f)
    except Exception as e: print('ERR', f, e, file=sys.stderr)
res = {k: list(dict.fromkeys(v)) for k, v in res.items()}
json.dump(res, open(out, 'w'), indent=1, ensure_ascii=False)
print(len(res))
