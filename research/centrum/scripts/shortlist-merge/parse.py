"""Parse Centrum scout shortlists and place drafts; find candidate matches.
Writes items.json, drafts.json, review.txt into this directory."""
import glob, json, math, os, re, sys

ROOT = "/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/everything-from-here-current-b8db62f6/research/centrum"
HERE = os.path.dirname(os.path.abspath(__file__))
os.environ.setdefault("AMS_RAW", os.path.join(os.path.dirname(HERE), "raw"))
sys.path.insert(0, os.path.join(ROOT, "scripts"))
import areas  # noqa: E402
import yaml  # noqa: E402

ZONE = {"C": "Core", "W": "West", "E": "East-South"}


def dist(a, b, c, d):
    return math.hypot((a - c) * 111320, (b - d) * 111320 * math.cos(math.radians(a)))


def parse_scout(path):
    pre = os.path.basename(path)[6:-3]
    lines = open(path).read().split("\n")
    start = next(i for i, l in enumerate(lines) if l.startswith("## Shortlist"))
    end = next((i for i in range(start + 1, len(lines)) if lines[i].startswith("## ")), len(lines))
    items, cur, heading = [], None, ""
    head_re = re.compile(r"^\*\*([^*]+)\*\*\s*$")
    item_re = re.compile(rf"^\*\*({pre}-\d+)\.?\s*(.*)")
    for l in lines[start + 1:end]:
        m = item_re.match(l)
        if m:
            cur = {"id": m.group(1), "scout": pre, "heading": heading, "text": l}
            items.append(cur)
            continue
        if l.startswith("#") or head_re.match(l):
            heading = (heading.split(" / ")[0] + " / " if l.startswith("####") else "") + re.sub(r"^#+\s*|\*", "", l).strip() if l.startswith("#") else re.sub(r"\*", "", l).strip()
            cur = None
            continue
        if cur is not None:
            cur["text"] += "\n" + l
    for it in items:
        t = re.sub(r"\n(?!\n)", " ", it["text"]).strip()
        it["text"] = t
        tm = re.match(r"\*\*[A-Z]+-\d+\.?\s*(.*?)\*\*", t)
        it["title"] = tm.group(1).rstrip(".") if tm else t[:80]
        pm = re.search(r"Pins?\b[^0-9]{0,40}?(5[12]\.\d{3,})\s*,\s*(4\.\d{3,})", t)
        it["lat"], it["lng"] = (float(pm.group(1)), float(pm.group(2))) if pm else (None, None)
        it["pin_approx"] = bool(re.search(r"Pins?\s*(approx|\(approx|to set|to fix)|pin approximate|approximate", t, re.I))
        rm = re.search(r"Rank:?\s*\**\s*(Amazing|Nice|Okay)", t) or list(re.finditer(r"\*\*(Amazing|Nice|Okay)\*\*", t) or [None])[-1]
        it["rank"] = rm.group(1) if rm else None
        it["rank_text"] = t[rm.start():rm.start() + 200] if rm else ""
        it["monuments"] = sorted(set(re.findall(r"(?:monument|rijksmonument|register|nr\.?|number)\s*(?:no\.?\s*)?(\d{3,6})", t, re.I)))
        it["zone"] = ZONE.get(pre[1], "All") if len(pre) == 2 and pre != "GR" else "All"
        it["urls"] = re.findall(r"https?://[^\s;,)]+", t)
    return items


def parse_drafts():
    out = []
    for f in sorted(glob.glob(os.path.join(ROOT, "places", "*.yaml"))):
        for p in yaml.safe_load(open(f)) or []:
            a = p.get("attributes", {}) or {}
            out.append({
                "slice": os.path.basename(f)[:-5], "title": p["title"], "address": p.get("address", ""),
                "lat": p.get("lat"), "lng": p.get("lng"), "category": p.get("category"), "rank": a.get("rank"),
                "monuments": [x.strip() for x in str(a.get("monument_number", "")).split(",") if x.strip()],
                "summary": p.get("summary", ""), "body": p.get("body", ""), "status": a.get("status"),
            })
    return out


def street_tokens(s):
    return set(re.findall(r"([A-Z][a-zë'\- ]+?(?:straat|gracht|steeg|plein|kade|dijk|burgwal|markt|laan|weg|pad|dwarsstraat|plantsoen|park|sluis|brug|eiland|hoek|tuin|poort|wal|kolk|dam|Rokin|Damrak|Spui|Amstel|Singel)\s*\d+)", s or ""))


def main():
    items = [it for f in sorted(glob.glob(os.path.join(ROOT, "scouts", "SCOUT-*.md"))) for it in parse_scout(f)]
    drafts = parse_drafts()
    for it in items:
        if it["lat"]:
            loc = areas.locate(it["lat"], it["lng"])
            it["wijk"], it["borough"] = loc["subNeighbourhood"], loc["borough"]
        else:
            it["wijk"], it["borough"] = None, None
        cands = {}
        if it["lat"]:
            for i, d in enumerate(drafts):
                if d["lat"]:
                    dd = dist(it["lat"], it["lng"], d["lat"], d["lng"])
                    if dd <= 80:
                        cands[i] = f"{dd:.0f}m"
        for i, d in enumerate(drafts):
            if set(it["monuments"]) & set(d["monuments"]):
                cands[i] = cands.get(i, "") + " MON"
            da = (d["address"] or "").split(",")[0].strip()
            if da and len(da) > 6 and da.lower() in it["text"].lower():
                cands[i] = cands.get(i, "") + " ADDR"
        it["cands"] = sorted(([i, v] for i, v in cands.items()), key=lambda x: (int(re.match(r"\d+", x[1]).group()) if re.match(r"\d+", x[1]) else 999))
    json.dump(items, open(os.path.join(HERE, "items.json"), "w"), indent=1, ensure_ascii=False)
    json.dump(drafts, open(os.path.join(HERE, "drafts.json"), "w"), indent=1, ensure_ascii=False)
    with open(os.path.join(HERE, "review.txt"), "w") as fh:
        for it in items:
            fh.write(f"\n{it['id']} [{it['rank']}] {it['title'][:110]} | {it['wijk']} | {'~' if it['pin_approx'] else ''}{it['lat']},{it['lng']}\n")
            for i, v in it["cands"][:6]:
                d = drafts[i]
                fh.write(f"   -> {v:>10} {d['slice']}: {d['title'][:90]} ({d['address']})\n")
    print(len(items), "items;", len(drafts), "drafts;", sum(1 for it in items if it["cands"]), "with candidates;",
          sum(1 for it in items if not it["lat"]), "without pin;", sum(1 for it in items if not it["rank"]), "without rank;",
          sum(1 for it in items if it["lat"] and it["borough"] != "Centrum"), "pin outside Centrum")


main()
