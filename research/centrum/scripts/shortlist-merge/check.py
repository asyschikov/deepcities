import json, collections
items = {x['id']: x for x in json.load(open('items.json'))}
dec = {}
dup = []
for f in ['dec-west.txt', 'dec-core.txt', 'dec-east.txt', 'dec-g.txt']:
    for ln in open(f):
        if not ln.strip() or ln.startswith('#'):
            continue
        p = [x.strip() for x in ln.split(' | ')]
        if p[0] in dec:
            dup.append((p[0], f))
        dec[p[0]] = p
print('dups', dup)
print('missing', [k for k in items if k not in dec])
print('unknown', [k for k in dec if k not in items])
bad = [(k, p) for k, p in dec.items() if p[1] == 'MEM' and (p[2] not in dec or dec[p[2]][1] != 'NEW')]
print('bad mem', bad)
print('short NEW', [k for k, p in dec.items() if p[1] == 'NEW' and len(p) != 7])
print(collections.Counter(p[1] for p in dec.values()))
print(list(items['DW-01'].keys()))
