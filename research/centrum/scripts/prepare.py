"""Build per-slice monument files for Centrum from the screened candidates.
Usage: S=<scratchpad> python3 -B prepare.py [suffix]
Needs $S/centrum/monuments.json, $S/centrum/wd.json, $S/raw/rce/<nr>.json.
Writes research/centrum/slices/<wijk>-<n>.json (candidates, sorted by street, about 65 per
slice, a street never split) and research/centrum/slices/_done.json (ids already sliced, so a
second run with a suffix only slices new candidates)."""
import json, os, re, sys, collections
sys.path.insert(0, os.path.dirname(__file__)); import screen
S = os.environ["S"]; OUT = os.path.join(os.path.dirname(__file__), "..", "slices")
suffix = sys.argv[1] if len(sys.argv) > 1 else ""
R = screen.R; W = screen.W
donef = os.path.join(OUT, "_done.json"); done = set(json.load(open(donef))) if os.path.exists(donef) else set()
SLUG = {"Jordaan": "jordaan", "Haarlemmerbuurt": "haarlemmer", "Grachtengordel-West": "gg-west", "Burgwallen-Nieuwe Zijde": "nieuwezijde",
        "Burgwallen-Oude Zijde": "oudezijde", "Nieuwmarkt/Lastage": "nieuwmarkt", "Grachtengordel-Zuid": "gg-zuid",
        "De Weteringschans": "wetering", "Weesperbuurt/Plantage": "plantage", "Oostelijke Eilanden/Kadijken": "eilanden"}
def street(r):
    a = r["adressering"] or r["naam"] or "?"
    return re.split(r"\s+\d", a, 1)[0].strip()
def num(r):
    m = re.search(r"\s(\d+)", r["adressering"] or ""); return int(m.group(1)) if m else 0
def rec(r, why):
    lng, lat = r["puntCoordinaten"]["coordinates"]
    o = {"monnr": r["monumentnummer"], "city_id": r["identificatie"], "why": why, "name": r["naam"], "address": r["adressering"],
         "status": r["status"], "architect": r["architectOntwerp"], "client": r["opdrachtgeverBouw"], "year_from": r["jaarBeginVan"],
         "year_to": r["jaarBeginTot"], "use": r["oorspronkelijkeFunctie"], "listed": (r["datumAanwijzing"] or "")[:4] or None,
         "lat": round(lat, 6), "lng": round(lng, 6), "wijk": r["wijk"], "complex": r.get("ligtInMonumentenComplexId"),
         "text": screen.text(r) or None}
    if r["status"] == "Rijksmonument":
        p = f"{S}/raw/rce/{r['monumentnummer']}.json"
        if os.path.exists(p):
            x = json.load(open(p)); o["rce_text"] = x["text"]
            o["rce_function"] = (x["function"] or "").replace("Hoofdfunctie Hoofdcategorie Subcategorie Functie Verbijzondering Toelichting ", "").split(" Kenmerken zoals")[0]
        w = W.get(str(r["monumentnummer"]))
        if w: o["wikidata"] = w
    return o
total = 0; new_done = []
for wijk, slug in SLUG.items():
    rs = [(r, screen.why(r)) for r in R if r["wijk"] == wijk]
    rs = [(r, w) for r, w in rs if w and r["identificatie"] not in done]
    by = collections.defaultdict(list)
    for r, w in rs: by[street(r)].append((r, w))
    chunks = [[]]
    for st in sorted(by):
        grp = sorted(by[st], key=lambda x: num(x[0]))
        if chunks[-1] and len(chunks[-1]) + len(grp) > 75: chunks.append([])
        while len(grp) > 90:  # a very long street: split by house number
            chunks[-1].extend(grp[:70]); grp = grp[70:]; chunks.append([])
        chunks[-1].extend(grp)
    if len(chunks) > 1 and len(chunks[-1]) < 25: chunks[-2].extend(chunks.pop())
    for i, ch in enumerate([c for c in chunks if c], 1):
        name = f"{slug}{suffix}-{i}"
        json.dump([rec(r, w) for r, w in ch], open(os.path.join(OUT, name + ".json"), "w"), ensure_ascii=False, indent=1)
        sts = sorted({street(r) for r, _ in ch}); total += len(ch); new_done += [r["identificatie"] for r, _ in ch]
        print(f"{name}: {len(ch)} records, {sts[0]} .. {sts[-1]}")
json.dump(sorted(done | set(new_done)), open(donef, "w"))
print("total", total)
