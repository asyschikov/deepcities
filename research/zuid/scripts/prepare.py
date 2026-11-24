"""Build per-slice monument files for Zuid.
Usage: S=<scratchpad> prepare.py   (needs $S/zuid/monuments.json, $S/raw/rce/<nr>.json, $S/all.json = dc places sights)
Writes research/zuid/slices/<slice>.json: a list of records, sorted by street."""
import json, os, re, time, collections, urllib.request, urllib.parse, urllib.error
S = os.environ["S"]; OUT = os.path.join(os.path.dirname(__file__), "..", "slices")
recs = json.load(open(S + "/zuid/monuments.json"))
live = json.load(open(S + "/all.json")); live = live.get("places", live) if isinstance(live, dict) else live
on_map = {n.strip() for p in live for n in str((p.get("attributes") or {}).get("monument_number") or "").split(",") if n.strip()}
skipped = [r for r in recs if str(r["monumentnummer"]) in on_map]
recs = [r for r in recs if str(r["monumentnummer"]) not in on_map]
print("already on the map:", [(r["monumentnummer"], r["adressering"] or r["naam"]) for r in skipped])
rm = [str(r["monumentnummer"]) for r in recs if r["status"] == "Rijksmonument"]
wd = collections.defaultdict(lambda: {"images": set()})
for i in range(0, len(rm), 150):
    q = """SELECT ?item ?rm ?itemLabel ?image ?nlwiki ?enwiki WHERE { VALUES ?rm { %s } ?item wdt:P359 ?rm .
     OPTIONAL { ?item wdt:P18 ?image } OPTIONAL { ?nlwiki schema:about ?item ; schema:isPartOf <https://nl.wikipedia.org/> }
     OPTIONAL { ?enwiki schema:about ?item ; schema:isPartOf <https://en.wikipedia.org/> }
     SERVICE wikibase:label { bd:serviceParam wikibase:language "nl,en". } }""" % " ".join(f'"{n}"' for n in rm[i:i+150])
    req = urllib.request.Request("https://query.wikidata.org/sparql", data=urllib.parse.urlencode({"query": q}).encode(),
          headers={"Accept": "application/sparql-results+json", "User-Agent": "deep-cities-research/0.1"})
    for attempt in range(6):
        try: res = json.load(urllib.request.urlopen(req, timeout=120)); break
        except urllib.error.HTTPError as e:
            if e.code != 429: raise
            time.sleep(int(e.headers.get("Retry-After") or 30) + 2)
    for b in res["results"]["bindings"]:
        w = wd[b["rm"]["value"]]; w["qid"] = b["item"]["value"].rsplit("/", 1)[1]; w["name"] = b["itemLabel"]["value"]
        if "image" in b: w["images"].add(urllib.parse.unquote(b["image"]["value"].rsplit("/", 1)[1]).replace("_", " "))
        for k in ("nlwiki", "enwiki"):
            if k in b: w[k] = urllib.parse.unquote(b[k]["value"])
def street(r):
    a = r["adressering"] or r["naam"] or "?"
    return re.split(r"\s+\d", a, 1)[0].strip()
def rec(r):
    lng, lat = r["puntCoordinaten"]["coordinates"]
    o = {"monnr": r["monumentnummer"], "city_id": r["identificatie"], "name": r["naam"], "address": r["adressering"], "type": r["type"],
         "status": r["status"], "architect": r["architectOntwerp"], "client": r["opdrachtgeverBouw"], "year_from": r["jaarBeginVan"],
         "year_to": r["jaarBeginTot"], "use": r["oorspronkelijkeFunctie"], "listed": (r["datumAanwijzing"] or "")[:4] or None,
         "lat": round(lat, 6), "lng": round(lng, 6), "wijk": r["wijk"], "complex": r.get("ligtInMonumentenComplexId"),
         "text": r.get("redengevendeOmschrijvingPubliek") or r.get("beschrijvingPubliek")}
    if r["status"] == "Rijksmonument":
        p = f"{S}/raw/rce/{r['monumentnummer']}.json"
        if os.path.exists(p):
            x = json.load(open(p)); o["rce_text"] = x["text"]; o["rce_function"] = (x["function"] or "").replace("Hoofdfunctie Hoofdcategorie Subcategorie Functie Verbijzondering Toelichting ", "").split(" Kenmerken zoals")[0]
        w = wd.get(str(r["monumentnummer"]))
        if w: o["wikidata"] = {**w, "images": sorted(w["images"])}
    return o
GROUPS = {  # slice prefix: (wijken, number of parts)
  "museum": ({"Museumkwartier"}, 4), "willemspark": ({"Willemspark"}, 2), "apollo": ({"Apollobuurt"}, 2),
  "stadion": ({"Stadionbuurt"}, 1), "schinkel": ({"Schinkelbuurt", "Hoofddorppleinbuurt"}, 1),
  "oudepijp": ({"Oude Pijp"}, 1), "pijp-zuid": ({"Nieuwe Pijp", "Zuid Pijp"}, 1),
  "rivieren-noord": ({"IJselbuurt", "Scheldebuurt"}, 1), "rijnbuurt": ({"Rijnbuurt"}, 1),
  "buitenveldert": ({"Buitenveldert-West", "Buitenveldert-Oost", "Zuidas", "Prinses Irenebuurt e.o."}, 1),
}
total = 0
for name, (wijken, parts) in GROUPS.items():
    rs = [r for r in recs if r["wijk"] in wijken]
    # keep complexes and streets together: union by complex, then by street
    key = {}
    for r in rs: key[r["identificatie"]] = street(r)
    bycx = collections.defaultdict(list)
    for r in rs:
        if r.get("ligtInMonumentenComplexId"): bycx[r["ligtInMonumentenComplexId"]].append(r)
    for g in bycx.values():
        for r in g: key[r["identificatie"]] = key[g[0]["identificatie"]]
    groups = collections.defaultdict(list)
    for r in rs: groups[key[r["identificatie"]]].append(r)
    gl = sorted(groups.values(), key=lambda g: sum(r["puntCoordinaten"]["coordinates"][0] for r in g) / len(g))
    target = len(rs) / parts; chunks = [[]]
    for g in gl:
        if len(chunks) < parts and len(chunks[-1]) and len(chunks[-1]) + len(g) / 2 > target: chunks.append([])
        chunks[-1] += g
    for i, c in enumerate(chunks):
        sl = name if parts == 1 else f"{name}-{'abcd'[i]}"
        out = sorted((rec(r) for r in c), key=lambda o: (o["address"] or o["name"] or ""))
        json.dump(out, open(f"{OUT}/{sl}.json", "w"), ensure_ascii=False, indent=1)
        total += len(out)
        print(sl, len(out), "records;", ", ".join(f"{k} {v}" for k, v in collections.Counter(street(r) for r in c).most_common(8)))
print("total", total, "of", len(recs))
