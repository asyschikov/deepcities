"""Build research/centrum/SHORTLIST.md and notes/shortlist-merge.json from items.json + dec-*.txt."""
import collections, json, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = "/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/everything-from-here-current-b8db62f6"
items = {x["id"]: x for x in json.load(open(os.path.join(HERE, "items.json")))}

dec = {}
for f in ["dec-west.txt", "dec-core.txt", "dec-east.txt", "dec-g.txt"]:
    for ln in open(os.path.join(HERE, f)):
        if ln.strip() and not ln.startswith("#"):
            p = [x.strip() for x in ln.rstrip("\n").split(" | ")]
            dec[p[0]] = p
assert set(dec) == set(items), set(items) ^ set(dec)

CATS = {"religious", "schools", "housing", "civic", "industrial", "infrastructure", "hidden-history",
        "curiosities", "street-art", "odd-museums", "food-drink", "green"}
WIJK_FIX = {"DW-54": "Grachtengordel-West", "CC-03": "Burgwallen-Oude Zijde"}
ZONES = [("West", ["Jordaan", "Haarlemmerbuurt", "Grachtengordel-West"]),
         ("Core", ["Burgwallen-Nieuwe Zijde", "Burgwallen-Oude Zijde", "Nieuwmarkt/Lastage"]),
         ("East-South", ["Grachtengordel-Zuid", "De Weteringschans", "Weesperbuurt/Plantage",
                         "Oostelijke Eilanden/Kadijken"])]
WIJK_ZONE = {w: z for z, ws in ZONES for w in ws}
RANKV = {"Amazing": 3, "Nice": 2, "Okay": 1, None: 0}

def wijk(i):
    return WIJK_FIX.get(i) or items[i]["wijk"]

def num(i):
    s, n = i.split("-")
    return (s, int(n))

members = collections.defaultdict(list)
for k, p in dec.items():
    if p[1] == "MEM":
        members[p[2]].append(k)

new = []
for k, p in dec.items():
    if p[1] != "NEW":
        continue
    _, _, cat, default, title, hook, reason = p
    assert cat in CATS, (k, cat)
    assert default in ("IN", "ASK"), k
    mem = [k] + sorted(members[k], key=num)
    best = max(mem, key=lambda m: RANKV[items[m]["rank"]])
    urls = []
    for m in mem:
        for u in items[m]["urls"]:
            if u not in urls:
                urls.append(u)
    w = wijk(k)
    new.append(dict(lead=k, title=title, hook=hook, reason=reason if reason != "-" else "",
                    category=cat, default=default, members=mem, rank=items[best]["rank"],
                    wijk=w, zone=WIJK_ZONE[w],
                    pin=None if items[k]["lat"] is None else [items[k]["lat"], items[k]["lng"]],
                    pin_approx=bool(items[k]["pin_approx"]),
                    member_pins={m: [items[m]["lat"], items[m]["lng"]] for m in mem if items[m]["lat"] is not None},
                    lead_sources=urls[:6]))

order_w = [w for _, ws in ZONES for w in ws]
new.sort(key=lambda e: (order_w.index(e["wijk"]), e["default"] != "IN", -RANKV[e["rank"]], num(e["lead"])))
for n, e in enumerate(new, 1):
    e["sid"] = f"S-{n:03d}"

# counts
c_kind = collections.Counter(p[1] for p in dec.values())
in_ids = [k for k, p in dec.items() if p[1] == "IN"]
en_ids = [k for k, p in dec.items() if p[1] == "EN"]
mem_ids = [k for k, p in dec.items() if p[1] == "MEM"]
new_items = len(new) + len(mem_ids)
c_def = collections.Counter(e["default"] for e in new)
c_cat = collections.Counter(e["category"] for e in new)
c_zone = collections.Counter(e["zone"] for e in new)

L = []
A = L.append
A("# Deep Centrum: merged scout shortlist")
A("")
A("Built 2026-11-24 from the 14 scout files in `research/centrum/scouts/` (DC, DW, DE, AC, AW, AE, BC, BW, BE, CC, CW, CE, G, GR),")
A("matched against the 536 drafts in `research/centrum/places/`. Machine-readable copy: `notes/shortlist-merge.json`.")
A("Nothing here is imported. Pick from the NEW list; IN is a default yes, ASK needs your call.")
A("")
A("## Counts")
A("")
A(f"- Scout items: {len(items)}")
A(f"- Already in a draft: {len(in_ids)}")
A(f"- Enrich an existing draft: {len(en_ids)}")
A(f"- New: {new_items} scout items, merged into {len(new)} entries ({len(mem_ids)} items folded into another entry as duplicates or groups)")
A(f"- New entries by default: IN {c_def['IN']}, ASK {c_def['ASK']}")
A("- New entries by zone: " + ", ".join(f"{z} {c_zone[z]}" for z, _ in ZONES))
A("- New entries by category guess: " + ", ".join(f"{c} {n}" for c, n in c_cat.most_common()))
A("")
A("Line format: `S-id [default] Title (rank, category guess): hook. ids: scout ids (lead first). ⚠ caveat or ASK reason`.")
A("Rank is the best rank among the merged items. Ids after the lead are duplicates or group members.")
A("")
A("## New")
for z, ws in ZONES:
    A("")
    A(f"### {z}")
    for w in ws:
        es = [e for e in new if e["wijk"] == w]
        if not es:
            continue
        A("")
        A(f"#### {w} ({len(es)})")
        A("")
        for e in es:
            warn = f" ⚠ {e['reason']}" if e["reason"] else ""
            if e["pin"] is None:
                warn += " ⚠ no pin"
            A(f"- {e['sid']} [{e['default']}] {e['title']} ({e['rank']}, {e['category']}): {e['hook']} ids: {', '.join(e['members'])}.{warn}")

A("")
A("## Enrich existing drafts")
A("")
A("Draft title ← scout ids: what to add.")
A("")
by_draft = collections.defaultdict(list)
for k in en_ids:
    by_draft[dec[k][2]].append((k, dec[k][3]))
for d in sorted(by_draft):
    ids = ", ".join(k for k, _ in sorted(by_draft[d], key=lambda x: num(x[0])))
    adds = "; ".join(a for _, a in sorted(by_draft[d], key=lambda x: num(x[0])))
    A(f"- {d} ← {ids}: {adds}")

A("")
A("## Already in")
A("")
A("Scout ids whose place is already drafted (title of the draft; a note where the scout adds a line).")
A("")
by_draft = collections.defaultdict(list)
for k in in_ids:
    by_draft[dec[k][2]].append(k)
for d in sorted(by_draft):
    ks = sorted(by_draft[d], key=num)
    notes = [dec[k][3] for k in ks if dec[k][3] not in ("-", "")]
    A(f"- {', '.join(ks)} → {d}" + (f" (add: {'; '.join(notes)})" if notes else ""))

A("")
A("## A-list candidates")
A("")
A("Collected from the scouts' A-list sections. No scout proposes a new A-list entry. Notes:")
A("")
for s in [
    "AE: Nationaal Holocaust Namenmonument (Libeskind, 2021) is a national monument, heavily covered; the Stadsschouwburg plaques sit inside an A-list building. Both left out.",
    "AW: the Anne Frank statue on the Westermarkt stays a Look for line; the Homomonument is second tier per A-LIST.md.",
    "BC: Zuiderkerk is close to A-list level, kept as C because the hidden layers are the pitch (enrich). Schreierstoren is well known, not on A-LIST.md, not scouted.",
    "BW: De Rode Hoed is the one well-known item (already in); Karthuizerhof is on hofjes walks but not on the A-list (already in).",
    "CC: the Stopera is not on A-LIST.md and should stay off it (S entry for CC-04).",
    "CE: the Melkweg (CE-25) is the nearest call, famous as a venue rather than a sight: judge against A-LIST.md. Micropia and the Hortus Drieklimatenkas stay inside their A-list parents.",
    "DC: the Waag stays A-list; Nieuwmarkt items are pitched on the square's other things.",
    "DE: items beside A-list sights (DE-24 by the Hollandsche Schouwburg, DE-37 by the Leidseplein) are pitched on themselves.",
    "DW: the Johnny Jordaanplein and the Noordermarkt as a market sit near the Jordaan-as-concept line; pitched on the fights and small things only.",
    "G: the Waag (for G-07) and the Begijnhof Houten Huys stay out; G-07 is the culvert, not the building.",
    "GR: champion trees inside the Hortus and Artis (the 1795 tree hazel, Heimanseik, the pluimiep) stay inside their A-list parents.",
    "Entries pitched beside an A-list sight, flagged in their caveats: AC-05 and AC-20 (Centraal Station), AC-10 (Oude Kerk), AE-18 (Leidseplein), CE-15 (Artis), CC-10 (Waag), DC-15 (Dam), DC-25 (Ons' Lieve Heer op Solder), GR-02 (Stationsplein), GR-09 (Hortus).",
]:
    A(f"- {s}")

A("")
A("## Food and drink, borderline")
A("")
A("Collected from the scouts. None is on the NEW list except where marked; say which, if any, to add.")
A("")
for s in [
    "'t Mandje, Zeedijk 63 (DC): on the list as S entry for DC-16 (ASK), with Bet van Beeren and Hartjesdag.",
    "De Mof / SLUYS (DW-51 + AW-25): on the list (ASK).",
    "Jacob Hooy & Co. (DC-42) and Apotheek Van der Meulen (BC-18): shops, on the list (ASK).",
    "Distilleerderij A. van Wees, De Ooievaar, Driehoekstraat 10 (DW): the last craft distillery of the city, family-run a century; the scout's strongest case. Producer and shop.",
    "Café Eijlders, Korte Leidsedwarsstraat 47 (CE): artists' café of 1940, poets after curfew, the \"Voor Joden verboden\" sign on a sucker, Braak founded here. Sign story Wikipedia-only so far.",
    "Saarein, Elandsstraat 119 (CW): oldest women's café still open (1978), bought into a foundation by regulars in 2024. A café; queer history is the pitch.",
    "De Pilsener Club, \"De Engelse Reet\", Begijnensteeg 4 (BC): cellar café since 1899, no bar counter.",
    "Wynand Fockink, Pijlsteeg 31 (BC): 1679 tasting room; a line in the Pijlsteeg entry (BC-22).",
    "Café Brandon, Keizersgracht 157 (DW): the family's first café was destroyed by the 1940 Blauwburgwal bomb; closed 18 years. A café.",
    "Melkwinkel Nieuw Leven, Prinsengracht 392 (DW): 1946 milk shop interior; status unknown since 2015.",
    "Cotton Club, Nieuwmarkt 5 (BC): Surinamese and jazz café since about 1940.",
    "Café De Dokter, Rozenboomsteeg 4 (CC): claims smallest bar, one family since 1798; single tourist source.",
    "Karpershoek, Martelaarsgracht 2 (CC): claims to be the oldest café; unverified.",
    "Sea Palace, Oosterdokskade 8 (CC): floating pagoda restaurant; claim from a tourist list.",
    "De Kruiwagen, Singel 2 (BW): café half since the 17th century; in BW-29's draft.",
    "Weaker, scouts suggest drop or a line elsewhere: Scheltema (BC), In 't Aepjen (BC-13's house), De Drie Fleschjes, Hoppe, Van der Linde, Vleminckx, Nam Kee (CC), Café Bern, Hajenius, Dun Yong (DC; Dun Yong is a line in DC-41), Roest and Hannekes Boom (CE), Happy Corner, Poffertjeskraam De Carrousel, Holland-België, Eik en Lansen (DE), Lowietje, 't Smalle, Chris, Haringkar Van Dok (DW), Café Sonneveld (BW), Kletskop (G), Koffiehuis van den Volksbond (BE, already history in a draft), Proeflokaal A. van Wees, Herengracht 319 (already drafted).",
]:
    A(f"- {s}")
A("")

md = "\n".join(L)
assert "—" not in md and " – " not in md, "dash"
open(os.path.join(REPO, "research/centrum/SHORTLIST.md"), "w").write(md)

out = dict(built="2026-11-24", scout_items=len(items), already_in=len(in_ids), enrich=len(en_ids),
           new_items=new_items, new_entries=len(new), defaults=dict(c_def), categories=dict(c_cat),
           entries=[{k: e[k] for k in ["sid", "title", "members", "pin", "pin_approx", "member_pins", "wijk", "zone",
                                       "rank", "category", "default", "reason", "hook", "lead_sources"]} for e in new],
           enrich_items={k: {"draft": dec[k][2], "add": dec[k][3]} for k in sorted(en_ids, key=num)},
           already_in_items={k: {"draft": dec[k][2], "note": dec[k][3]} for k in sorted(in_ids, key=num)},
           merged_into={k: dec[k][2] for k in sorted(mem_ids, key=num)})
js = json.dumps(out, ensure_ascii=False, indent=1)
assert "—" not in js and " – " not in js
open(os.path.join(REPO, "research/centrum/notes/shortlist-merge.json"), "w").write(js)
print(len(items), len(in_ids), len(en_ids), new_items, len(new), dict(c_def), dict(c_zone))
print(c_cat.most_common())
