"""Download Amsterdam area boundaries (stadsdeel / gebied / wijk) and assign them
to points by point-in-polygon. Usage as module: areas.locate(lat, lng)."""
import json, os, urllib.request

CACHE = os.path.join(os.environ["AMS_RAW"], "areas")
BASE = "https://api.data.amsterdam.nl/v1/gebieden/{}/?_format=geojson&_pageSize=500"
LAYERS = {"stadsdelen": "borough", "ggwgebieden": "neighbourhood", "wijken": "subNeighbourhood"}


def _load(layer):
    os.makedirs(CACHE, exist_ok=True)
    path = os.path.join(CACHE, layer + ".json")
    if not os.path.exists(path):
        feats, url = [], BASE.format(layer)
        while url:
            req = urllib.request.Request(url, headers={"Accept-Crs": "EPSG:4326", "User-Agent": "deep-cities-research/0.1"})
            with urllib.request.urlopen(req, timeout=120) as r:
                d = json.load(r)
            feats += d["features"]
            url = next((l["href"] for l in d.get("_links", []) if l.get("rel") == "next"), None) if isinstance(d.get("_links"), list) else None
        json.dump(feats, open(path, "w"))
    feats = json.load(open(path))
    # keep only currently valid versions
    return [f for f in feats if not (f["properties"].get("eindGeldigheid"))]


def _in_ring(x, y, ring):
    inside, j = False, len(ring) - 1
    for i in range(len(ring)):
        xi, yi = ring[i][0], ring[i][1]
        xj, yj = ring[j][0], ring[j][1]
        if (yi > y) != (yj > y) and x < (xj - xi) * (y - yi) / (yj - yi) + xi:
            inside = not inside
        j = i
    return inside


def _contains(geom, x, y):
    polys = [geom["coordinates"]] if geom["type"] == "Polygon" else geom["coordinates"]
    return any(_in_ring(x, y, p[0]) and not any(_in_ring(x, y, h) for h in p[1:]) for p in polys)


_layers = {}


def locate(lat, lng):
    out = {"municipality": None, "borough": None, "neighbourhood": None, "subNeighbourhood": None}
    for layer, key in LAYERS.items():
        feats = _layers.setdefault(layer, _load(layer))
        hit = next((f for f in feats if f.get("geometry") and _contains(f["geometry"], lng, lat)), None)
        if hit:
            out[key] = hit["properties"]["naam"]
    if out["borough"]:
        out["municipality"] = "Amsterdam"
    return out


if __name__ == "__main__":
    print(locate(52.390300, 4.873100))  # Het Schip
    print(locate(52.377672, 4.842943))  # Kolenkit church (existing map: West / Bos en Lommer / De Kolenkit)
