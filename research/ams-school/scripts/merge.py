"""Merge Amsterdam School candidates from RCE, City of Amsterdam and Wikidata
into research/ams-school/candidates.json (one record per source object,
clustered by proximity into candidate places)."""
import json, re, math, os, collections

HERE = os.path.dirname(os.path.abspath(__file__))
RAW = os.environ["AMS_RAW"]  # raw downloads (kept out of the repo)
OUT = os.path.join(RAW, "..", "candidates.json")


def rd_to_wgs(x, y):
    # Schreutelkamp & Strang van Hees approximation (~1 m accuracy)
    dX, dY = (x - 155000) * 1e-5, (y - 463000) * 1e-5
    K = [(0, 1, 3235.65389), (2, 0, -32.58297), (0, 2, -0.24750), (2, 1, -0.84978),
         (0, 3, -0.06550), (2, 2, -0.01709), (1, 0, -0.00738), (4, 0, 0.00530),
         (2, 3, -0.00039), (4, 1, 0.00033), (1, 1, -0.00012)]
    L = [(1, 0, 5260.52916), (1, 1, 105.94684), (1, 2, 2.45656), (3, 0, -0.81885),
         (1, 3, 0.05594), (3, 1, -0.05607), (0, 1, 0.01199), (3, 2, -0.00256),
         (1, 4, 0.00128), (0, 2, 0.00022), (2, 0, -0.00022), (5, 0, 0.00026)]
    lat = 52.15517440 + sum(c * dX**p * dY**q for p, q, c in K) / 3600
    lng = 5.38720621 + sum(c * dX**p * dY**q for p, q, c in L) / 3600
    return round(lat, 6), round(lng, 6)


def dist(a, b):
    dy = (a[0] - b[0]) * 111320
    dx = (a[1] - b[1]) * 111320 * math.cos(math.radians(a[0]))
    return math.hypot(dx, dy)


AS_RX = re.compile(r"amsterdamse?c?h?e?[\s-]+school", re.I)
recs = []

# City of Amsterdam monuments (text mentions the style)
for m in json.load(open(os.path.join(RAW, "ams-monumenten-all.json"))):
    txt = (m.get("redengevendeOmschrijvingPubliek") or "") + "\n" + (m.get("beschrijvingPubliek") or "")
    if not AS_RX.search(txt) or m.get("datumAfvoeren"):
        continue
    y = int(m["jaarBeginVan"]) if (m.get("jaarBeginVan") or "").isdigit() else None
    c = m["puntCoordinaten"]["coordinates"]
    lat, lng = rd_to_wgs(*c)
    recs.append(dict(src="city", id=f"city:{m['monumentnummer']}", monnr=str(m["monumentnummer"]),
                     status=m["status"], name=m.get("naam"), address=m.get("adressering"),
                     architect=m.get("architectOntwerp"), client=m.get("opdrachtgeverBouw"),
                     year_from=y, year_to=m.get("jaarBeginTot"), use=m.get("oorspronkelijkeFunctie"),
                     listed=(m.get("datumAanwijzing") or "")[:4], lat=lat, lng=lng, text=txt.strip()))

# RCE national register (description mentions the style)
for b in json.load(open(os.path.join(RAW, "rce-ams-school.json")))["results"]["bindings"]:
    pt = b.get("point", {}).get("value", "")
    mm = re.match(r"POINT\(([\d.]+) ([\d.]+)\)", pt)
    if not mm:
        continue
    recs.append(dict(src="rce", id=f"rce:{b['nr']['value']}", monnr=b["nr"]["value"], status="Rijksmonument",
                     lat=round(float(mm.group(2)), 6), lng=round(float(mm.group(1)), 6), text=b["desc"]["value"]))

# Wikidata (style = Amsterdam School, or by an AS architect)
def wd(fname, via):
    items = collections.OrderedDict()
    for b in json.load(open(os.path.join(RAW, fname)))["results"]["bindings"]:
        g = lambda k: b.get(k, {}).get("value", "")
        q = g("item").split("/")[-1]
        it = items.setdefault(q, dict(src="wikidata", via=via, id=f"wd:{q}", qid=q, archs=set(), images=set(), insts=set()))
        mm = re.match(r"Point\(([-\d.]+) ([-\d.]+)\)", g("coord"))
        if mm:
            it["lat"], it["lng"] = round(float(mm.group(2)), 6), round(float(mm.group(1)), 6)
        it["name"] = g("nlLabel") or g("itemLabel")
        if g("archLabel"): it["archs"].add(g("archLabel"))
        if g("image"): it["images"].add(g("image"))
        if g("instLabel"): it["insts"].add(g("instLabel"))
        if g("inception"): it["year_from"] = int(g("inception")[:4]) if g("inception")[:4].isdigit() else None
        if g("rm"): it["monnr"] = g("rm")
        if g("nlwiki"): it["nlwiki"] = g("nlwiki")
        if g("enwiki"): it["enwiki"] = g("enwiki")
        if g("styleLabel"): it.setdefault("styles", set()).add(g("styleLabel"))
    for it in items.values():
        for k in ("archs", "images", "insts", "styles"):
            if k in it: it[k] = sorted(it[k])
        it["architect"] = ", ".join(it.pop("archs"))
    return list(items.values())

wd_style = wd("wd-ams-school.json", "style")
wd_arch = [w for w in wd("wd-by-architect.json", "architect")
           if (w.get("year_from") is None or 1905 <= w["year_from"] <= 1945)]
seen = {w["qid"] for w in wd_style}
recs += wd_style + [w for w in wd_arch if w["qid"] not in seen]

# Cluster: same monument number, or within 60 m
recs = [r for r in recs if r.get("lat")]
parent = list(range(len(recs)))
def find(i):
    while parent[i] != i:
        parent[i] = parent[parent[i]]; i = parent[i]
    return i
by_nr = {}
for i, r in enumerate(recs):
    if r.get("monnr"):
        j = by_nr.setdefault(r["monnr"], i); parent[find(i)] = find(j)
for i in range(len(recs)):
    for j in range(i + 1, len(recs)):
        if dist((recs[i]["lat"], recs[i]["lng"]), (recs[j]["lat"], recs[j]["lng"])) < 60:
            parent[find(i)] = find(j)
clusters = collections.defaultdict(list)
for i, r in enumerate(recs):
    clusters[find(i)].append(r)
out = []
for n, members in enumerate(sorted(clusters.values(), key=lambda ms: (-ms[0]["lat"], ms[0]["lng"]))):
    out.append(dict(cluster=n, n=len(members), members=members))
json.dump(out, open(OUT, "w"), ensure_ascii=False, indent=1)
print(len(recs), "records,", len(out), "clusters")
print(collections.Counter(r["src"] for r in recs))
