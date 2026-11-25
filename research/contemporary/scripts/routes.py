"""Validate, build and import the map's routes (research/contemporary/routes/*.yaml).

  python3 scripts/routes.py check                 validate every route file
  python3 scripts/routes.py build OUT_DIR         write one dc route JSON per file
  python3 scripts/routes.py import [--dry-run]    create or update on the dc site

Route file format (see ROUTES-BRIEF.md):

  title: …             summary: …  (≤280)      body: markdown intro
  mode: walk | bike    (default for legs)
  photos: [commons:File:…]   (optional; first is the cover)
  nl: {title, summary, body}
  stops:
    - place: Exact English place title       # or name + lat + lng (name isn't translated)
      narration: …
      nl: Dutch narration
      next:                                  # the leg to the following stop (optional)
        mode: ferry                          # default: the route's mode
        directions: …
        nl: Dutch directions
        via: [[lng, lat], …]

`import` matches routes by title: existing ones are updated, new ones created.
It uses the same site/token as `pnpm dc` (DC_URL / DC_TOKEN or the config file).
"""
import glob, json, os, subprocess, sys, tempfile
import yaml

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, "..")
REPO = os.path.abspath(os.path.join(ROOT, "..", ".."))
MODES = {"walk", "bike", "tram", "bus", "metro", "ferry", "train"}
MAX_STOPS = 30


def places():
    # Stops can be any place on the live list view (theme drafts and existing Deep Amsterdam places).
    return {p["title"]: p for p in dc("places", "contemporary")}


def files():
    return sorted(glob.glob(os.path.join(ROOT, "routes", "*.yaml")))


def check_one(path, known):
    r = yaml.safe_load(open(path))
    errs = []
    need = lambda cond, msg: cond or errs.append(msg)
    for k in ("title", "summary", "body", "stops", "nl"):
        need(r.get(k), f"missing {k}")
    need(len(r.get("summary", "")) <= 280, "summary > 280 chars")
    need(r.get("mode", "walk") in MODES, f"bad mode {r.get('mode')}")
    nl = r.get("nl") or {}
    for k in ("title", "summary", "body"):
        need(nl.get(k), f"nl.{k} missing")
    need(len(nl.get("summary", "")) <= 280, "nl.summary > 280 chars")
    stops = r.get("stops") or []
    need(2 <= len(stops) <= MAX_STOPS, f"{len(stops)} stops (2–{MAX_STOPS})")
    titles = [s.get("place") for s in stops if s.get("place")]
    # A loop ends where it started: the first place may come back as the last stop.
    loop = len(stops) > 2 and stops[0].get("place") and stops[0].get("place") == stops[-1].get("place")
    need(len(titles) - bool(loop) == len(set(titles)), "a place appears twice (only a loop may repeat its start, as the last stop)")
    for i, s in enumerate(stops, 1):
        where = f"stop {i} ({s.get('place') or s.get('name')})"
        if s.get("place"):
            need(s["place"] in known, f"{where}: not an exact place title")
        else:
            need(s.get("name") and s.get("lat") and s.get("lng"), f"{where}: needs place, or name+lat+lng")
        need(s.get("narration"), f"{where}: no narration")
        need(s.get("nl"), f"{where}: no nl narration")
        need(len(s.get("narration", "")) <= 4000 and len(s.get("nl", "")) <= 4000, f"{where}: narration too long")
        nxt = s.get("next")
        if nxt is not None:
            need(i < len(stops), f"{where}: last stop can't have next")
            need(nxt.get("mode", r.get("mode", "walk")) in MODES, f"{where}: bad leg mode")
            need(bool(nxt.get("directions")) == bool(nxt.get("nl")), f"{where}: leg directions need both en and nl")
    return r, errs


def build(r, known):
    mode = r.get("mode", "walk")
    stops, legs = [], []
    for i, s in enumerate(r["stops"]):
        if s.get("place"):
            stop = {"place": s["place"]}
        else:
            stop = {"name": s["name"], "lat": s["lat"], "lng": s["lng"]}
        stop["narration"] = s["narration"].strip()
        stop["translations"] = {"nl": {"narration": s["nl"].strip()}}
        stops.append(stop)
        if i < len(r["stops"]) - 1:
            n = s.get("next") or {}
            leg = {"mode": n.get("mode", mode)}
            if n.get("directions"):
                leg["directions"] = n["directions"].strip()
                leg["translations"] = {"nl": {"directions": n["nl"].strip()}}
            if n.get("via"):
                leg["via"] = n["via"]
            legs.append(leg)
    out = {
        "title": r["title"],
        "mode": mode if mode in ("walk", "bike") else "walk",  # the route's main mode
        "summary": r["summary"].strip(),
        "body": r["body"].strip(),
        "stops": stops,
        "legs": legs,
        "translations": {"nl": {k: r["nl"][k].strip() for k in ("title", "summary", "body")}},
    }
    if r.get("photos"):
        out["photos"] = r["photos"]
    return out


def dc(*args):
    res = subprocess.run(["pnpm", "-s", "dc", *args], cwd=REPO, env={k: v for k, v in os.environ.items() if k not in ("DC_URL", "DC_TOKEN")}, capture_output=True, text=True)
    if res.returncode != 0:
        raise SystemExit(f"dc {' '.join(args)} failed:\n{res.stdout}\n{res.stderr}")
    return json.loads(res.stdout)


def main():
    cmd = sys.argv[1] if len(sys.argv) > 1 else "check"
    known = places()
    routes, bad = [], 0
    for f in files():
        r, errs = check_one(f, known)
        for e in errs:
            print(f"{os.path.basename(f)}: {e}", file=sys.stderr)
        bad += len(errs)
        routes.append((f, r))
    print(f"{len(routes)} routes, {bad} problems", file=sys.stderr)
    if bad or cmd == "check":
        sys.exit(1 if bad else 0)
    if cmd == "build":
        out = sys.argv[2]
        os.makedirs(out, exist_ok=True)
        for f, r in routes:
            name = os.path.splitext(os.path.basename(f))[0] + ".json"
            json.dump(build(r, known), open(os.path.join(out, name), "w"), ensure_ascii=False, indent=1)
        return
    if cmd == "import":
        dry = "--dry-run" in sys.argv
        listed = dc("routes", "contemporary")
        existing = {x["title"]: x["id"] for x in listed}
        # The CLI appends photos on update, so only send them to routes without a cover.
        has_cover = {x["title"] for x in listed if x.get("coverPhotoId")}
        tmp = tempfile.mkdtemp()
        for f, r in routes:
            path = os.path.join(tmp, os.path.basename(f) + ".json")
            data = build(r, known)
            if r["title"] in has_cover:
                data.pop("photos", None)
            json.dump(data, open(path, "w"), ensure_ascii=False)
            rid = existing.get(r["title"])
            action = "update" if rid else "create"
            if dry:
                print(json.dumps({"title": r["title"], "action": action, "stops": len(r["stops"])}, ensure_ascii=False))
                continue
            note = "Contemporary Architecture routes (research/contemporary/routes)"
            res = dc("route-update", rid, path, "--note", note) if rid else dc("route-create", "contemporary", path, "--note", note)
            print(json.dumps({"title": r["title"], "action": action, "warnings": res.get("warnings") if isinstance(res, dict) else None}, ensure_ascii=False))
        return
    raise SystemExit(f"unknown command {cmd}")


if __name__ == "__main__":
    main()
