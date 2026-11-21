"""Build per-slice candidate clusters of West monuments (city register + Wikidata).
Usage: prepare.py <west.json from the city monuments API, with ggw/wijk set> <outdir>"""
import json, sys, math, urllib.request, urllib.parse, time, collections
recs = json.load(open(sys.argv[1])); out = sys.argv[2]
existing = {n.strip() for p in json.load(open("scripts/data/bos-en-lommer-monuments.json"))
            for n in (p.get("attributes", {}).get("monument_number") or "").split(",")}
SLICES = {
  "spaarndammer": {"Spaarndammerbuurt/Zeeheldenbuurt", "Houthavens", "Sloterdijk-West"},
  "staatslieden": {"Staatsliedenbuurt", "Frederik Hendrikbuurt", "Centrale Markt"},
  "vondelpark": {"Vondelparkbuurt"},
  "oud-west": {"Helmersbuurt", "Overtoomse Sluis", "Bellamybuurt", "Da Costabuurt", "Van Lennepbuurt"},
  "baarsjes": {"Chassébuurt", "Geuzenbuurt", "Hoofdweg e.o.", "Van Galenbuurt", "Westindische Buurt"},
}
recs = [r for r in recs if str(r["monumentnummer"]) not in existing and r["ggw"] != "Bos en Lommer"]
# Wikidata by rijksmonument number
rm = [str(r["monumentnummer"]) for r in recs if r["status"] == "Rijksmonument"]
q = """SELECT ?item ?rm ?itemLabel ?image ?nlwiki ?enwiki WHERE { VALUES ?rm { %s } ?item wdt:P359 ?rm .
 OPTIONAL { ?item wdt:P18 ?image } OPTIONAL { ?nlwiki schema:about ?item ; schema:isPartOf <https://nl.wikipedia.org/> }
 OPTIONAL { ?enwiki schema:about ?item ; schema:isPartOf <https://en.wikipedia.org/> }
 SERVICE wikibase:label { bd:serviceParam wikibase:language "nl,en". } }""" % " ".join(f'"{n}"' for n in rm)
req = urllib.request.Request("https://query.wikidata.org/sparql", data=urllib.parse.urlencode({"query": q}).encode(),
      headers={"Accept": "application/sparql-results+json", "User-Agent": "deep-cities-research/0.1"})
wd = collections.defaultdict(lambda: {"images": set()})
for b in json.load(urllib.request.urlopen(req))["results"]["bindings"]:
    w = wd[b["rm"]["value"]]; w["qid"] = b["item"]["value"].rsplit("/", 1)[1]; w["name"] = b["itemLabel"]["value"]
    if "image" in b: w["images"].add(b["image"]["value"])
    for k in ("nlwiki", "enwiki"):
        if k in b: w[k] = b[k]["value"]
def dist(a, b):
    (x1, y1), (x2, y2) = a, b
    return math.hypot((x1 - x2) * 68000, (y1 - y2) * 111000)
for name, wijken in SLICES.items():
    rs = [r for r in recs if r.get("wijk") in wijken]
    # cluster: same complex, or within 40 m
    parent = list(range(len(rs)))
    def f(i):
        while parent[i] != i: parent[i] = parent[parent[i]]; i = parent[i]
        return i
    for i in range(len(rs)):
        for j in range(i):
            a, b = rs[i], rs[j]
            same = a.get("ligtInMonumentenComplexId") and a.get("ligtInMonumentenComplexId") == b.get("ligtInMonumentenComplexId")
            if same or dist(a["puntCoordinaten"]["coordinates"], b["puntCoordinaten"]["coordinates"]) < 40:
                parent[f(i)] = f(j)
    groups = collections.defaultdict(list)
    for i, r in enumerate(rs):
        lng, lat = r["puntCoordinaten"]["coordinates"]
        rec = {"src": "city", "id": r["identificatie"], "monnr": r["monumentnummer"], "name": r["naam"],
               "address": r["adressering"], "type": r["type"], "status": r["status"], "architect": r["architectOntwerp"],
               "year_from": r["jaarBeginVan"], "year_to": r["jaarBeginTot"], "use": r["oorspronkelijkeFunctie"],
               "listed": (r["datumAanwijzing"] or "")[:4] or None, "lat": round(lat, 6), "lng": round(lng, 6),
               "area": {"borough": "West", "neighbourhood": r["ggw"], "subNeighbourhood": r["wijk"]},
               "text": r.get("redengevendeOmschrijvingPubliek")}
        w = wd.get(str(r["monumentnummer"])) if r["status"] == "Rijksmonument" else None
        if w: rec["wikidata"] = {**w, "images": sorted(w["images"])}
        groups[f(i)].append(rec)
    clusters = sorted(groups.values(), key=lambda g: g[0]["address"] or "")
    json.dump(clusters, open(f"{out}/{name}.json", "w"), ensure_ascii=False, indent=1)
    print(name, len(rs), "records,", len(clusters), "clusters")
