import json, sys, urllib.request
flag = sys.argv[1]
url = f"https://api.data.amsterdam.nl/v1/objectenopenbareruimte/groenobjecten/?{flag}=true&_pageSize=2000&_format=json"
out = []
while url:
    req = urllib.request.Request(url, headers={"User-Agent": "deep-cities-research/0.1", "Accept-Crs": "EPSG:4326"})
    d = json.load(urllib.request.urlopen(req, timeout=120))
    rows = d["_embedded"]["groenobjecten"]
    for r in rows:
        out.append({k: r.get(k) for k in ("id", "beheerafspraak", "groenobjecttype", "type", "subtype", "gbdBuurtNaam", "gbdWijkNaam", "gbdStadsdeelNaam", "bagOpenbareRuimteNaam", "oppervlakte", "bollen", "ecologischBeheer", "geometrie")})
    url = (d.get("_links", {}).get("next") or {}).get("href")
    print(len(out), file=sys.stderr)
json.dump(out, open(f"groen-{flag}.json", "w"))
