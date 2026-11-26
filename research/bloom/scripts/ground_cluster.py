import json, math, sys, collections
kind, src, link_m, min_area = sys.argv[1], sys.argv[2], float(sys.argv[3]), float(sys.argv[4])
rows = [r for r in json.load(open(src)) if r["beheerafspraak"] == kind and r["geometrie"]]
def cent(g):
    pts = [p for poly in (g["coordinates"] if g["type"] == "MultiPolygon" else [g["coordinates"]]) for p in poly[0]]
    return sum(p[1] for p in pts) / len(pts), sum(p[0] for p in pts) / len(pts), pts
for r in rows: r["lat"], r["lng"], r["pts"] = cent(r["geometrie"])
# grid-based single linkage on polygon vertices (approx: object centroid + its extent)
def d(a, b): return math.hypot((a[0]-b[0])*111320, (a[1]-b[1])*67800)
n = len(rows); parent = list(range(n))
def find(i):
    while parent[i] != i: parent[i] = parent[parent[i]]; i = parent[i]
    return i
cell = collections.defaultdict(list)
for i, r in enumerate(rows):
    for p in r["pts"][::3]:
        cell[(int(p[1]*111320//link_m), int(p[0]*67800//link_m))].append((i, p))
for (cx, cy), items in list(cell.items()):
    near = [it for dx in (-1,0,1) for dy in (-1,0,1) for it in cell.get((cx+dx, cy+dy), [])]
    for i, p in items:
        for j, q in near:
            if i < j and find(i) != find(j) and d((p[1],p[0]),(q[1],q[0])) <= link_m: parent[find(j)] = find(i)
groups = collections.defaultdict(list)
for i in range(n): groups[find(i)].append(rows[i])
out = []
for g in groups.values():
    area = sum(r["oppervlakte"] or 0 for r in g)
    if area < min_area: continue
    lat = sum(r["lat"]*(r["oppervlakte"] or 1) for r in g)/sum(r["oppervlakte"] or 1 for r in g)
    lng = sum(r["lng"]*(r["oppervlakte"] or 1) for r in g)/sum(r["oppervlakte"] or 1 for r in g)
    streets = collections.Counter(r["bagOpenbareRuimteNaam"] for r in g if r["bagOpenbareRuimteNaam"])
    out.append({"area_m2": round(area), "objects": len(g), "lat": round(lat, 6), "lng": round(lng, 6),
                "streets": streets.most_common(4), "buurt": collections.Counter(r["gbdBuurtNaam"] for r in g).most_common(2),
                "wijk": collections.Counter(r["gbdWijkNaam"] for r in g).most_common(1)[0][0], "stadsdeel": g[0]["gbdStadsdeelNaam"],
                "ids": [r["id"] for r in g][:40]})
out.sort(key=lambda x: -x["area_m2"])
json.dump(out, sys.stdout, ensure_ascii=False, indent=1)
print(f"{len(out)} clusters >= {min_area} m2, total {round(sum(o['area_m2'] for o in out)/10000,1)} ha", file=sys.stderr)
