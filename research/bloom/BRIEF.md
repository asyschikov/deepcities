# Writing brief: Amsterdam in Bloom, register spots (one slice per agent)

**Amsterdam in Bloom** (slug `bloom`, deepcities.org/amsterdam/bloom) is a list view over the
Deep Amsterdam pool (`sights`): every place to enjoy flowers in season, flowering trees above
all. Many are ordinary streets that are nothing special most of the year and spectacular for a
week or two in bloom. Your slice (in `SLICES.json`) lists spot ids from `register-spots.json`:
clusters of municipal flowering trees from the city's tree register (api.data.amsterdam.nl
bomen/stamgegevens), with species and counts, planting years, nearest streets (PDOK), the
neighbourhood, and flowering months per variety quoted from Van den Berk nursery pages (with
URLs). Folder: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/documents-b8db62f6/research/bloom/`.

CLI (read-only only): `pnpm -s dc places bloom`, `pnpm -s dc places sights --all --q <word>`,
`pnpm -s dc place <id>`, run from the documents worktree with `env -u DC_URL -u DC_TOKEN`.
Never write to the live site; never commit.

## For each spot, decide

1. **In an existing park or green place of the pool?** (`pool-green.json`: ids, titles, points;
   e.g. Westerpark, Vondelpark, Frankendael, Erasmuspark, Nelson Mandelapark, Amstelpark,
   De Nieuwe Ooster, Sarphatipark, Rembrandtpark, Beatrixpark, Oosterpark, Zorgvlied.) Then
   don't make a new place: add an entry to `parks` (below) with what blooms there.
2. **Too weak to visit?** A dozen young trees scattered round a car park, a motorway verge
   (`A9`), a sports field edge: skip it, and list it under `skipped` with a reason.
3. Otherwise **a new place**: the street, square, embankment or plantsoen where the trees
   stand. Two spots on the same street or square in your slice: one place.

Pin: the middle of the row or group (use the group lat/lng, 6 decimals), not a house.

## New place draft (output `places`)

```json
{"spot": ["r012"], "title": "Cherry blossom on the Teylerplein", "summary": "...", "body": "...",
 "category": "green", "lat": 52.365006, "lng": 4.829670, "address": "Teylerplein",
 "detail": "theme",
 "translations": {"nl": {"title": "Kersenbloesem op het Teylerplein", "summary": "...", "body": "..."}},
 "override": {"attributes": {"bloom": "Cherry blossom", "peak": "Late April",
    "when": "...", "what": "...", "trees": 147},
   "translations": {"nl": {"attributes": {"when": "...", "what": "..."}}}},
 "sources": ["https://api.data.amsterdam.nl/v1/bomen/stamgegevens/?...", "https://www.vdberk.nl/..."]}
```

- **title**: what flowers + where: "Cherry blossom on the Teylerplein", "Magnolias of the
  Weidestraat", "Pink hawthorn along the Pieter de Hoochstraat", "Horse chestnuts on the
  Rooseveltlaan". NL natural: "Kersenbloesem op het Teylerplein", "Magnolia's in de Weidestraat".
- **summary** (≤200 chars): the hook in plain words: how many, what colour, when. No hype.
- **body**: 2 short paragraphs. What the trees are (variety, colour, single or double flowers,
  shape: columnar 'Amanogawa', spreading 'Kanzan'), how many and since when (planting years
  from the register: "planted in 1978"), when they flower and what follows (a street with
  early cherries and late hawthorn: say so). A line on the place itself only if you know it for
  certain (the square, the neighbourhood). End with a short "Look for:" list (2 to 3 items:
  the double flowers, the petal carpet, the purple leaves of the cherry plums...). NL body
  written fresh, natural Dutch ("Let op:"), same facts.
- **bloom** (select): Cherry blossom (Japanese, wild, double, winter cherries, cherry plum,
  bird cherry), Magnolia, Apple and pear blossom (crab apple, apple, ornamental pear),
  Hawthorn, Horse chestnut, Other flowering trees (serviceberry, laburnum, Judas tree,
  Paulownia, handkerchief tree, dogwood, cornelian cherry), Summer-flowering trees (Robinia,
  Catalpa, tulip tree, Koelreuteria, Japanese pagoda tree). The main one.
- **peak** (select): Winter (winter cherry Nov to Mar, cornelian cherry Feb), March (magnolia
  kobus, cherry plum), Early April (yedoensis, sargentii, 'Umineko', 'Pandora', wild cherry,
  ornamental pear, serviceberry, Magnolia soulangeana), Late April ('Kanzan', 'Amanogawa',
  'Ichiyo', double wild cherry 'Plena', crab apple early kinds), May (hawthorn, horse chestnut,
  most crab apples, laburnum, Paulownia, Judas tree), June (Robinia, tulip tree), July and
  August (Catalpa, Koelreuteria, Japanese pagoda tree). Follow the Van den Berk months.
- **when** (text): "Early to mid April; the double 'Kanzan' follows late April." Approximate.
- **what** (text): "93 Prunus serrulata 'Amanogawa', 28 Prunus sargentii 'Rancho'"; English
  names first where helpful: "Japanese cherries: 93 'Amanogawa' (column cherry), 28
  'Rancho'". NL: same in Dutch ("Japanse sierkersen: ...").
- **trees**: total flowering trees named (a number).
- Never invent: no facts beyond the data, the Van den Berk pages and sources you actually read.
  Don't claim a street is "famous" or "Instagram-loved" unless a source says so. No em dashes,
  no spaced en dashes. Plain, concrete, a little wry. Don't mention the register, clusters, the
  brief or research in the text (say "the city's trees" at most). Bloom times "in an ordinary
  year".

## Park entries (output `parks`)

```json
{"id": "<pool place id>", "title": "Westerpark", "spots": ["r015"],
 "what": "66 tulip trees (June), 34 Japanese cherries (April), 32 magnolias (March to April), ...",
 "notes": "where in the park, varieties, planting years"}
```

## Output

One file: `research/bloom/places/<slice>.json` = `{"places": [...], "parks": [...],
"skipped": [{"spot": "r0xx", "reason": "..."}]}`. Final message: counts and doubts, 5 lines.

---

# Curated slices (cur-*): from the scouts

Inputs: `scouts/SCOUT-trees.md`, `scouts/SCOUT-gardens.md` (leads with sources: verify, correct
where wrong, drop what you can't confirm), `park-entries.json` (what the city's trees add to each
pool park, from the register slices), `register-spots.json`. Use the BrowserOS neo browser for
web pages (name your session, close your tabs); amsterdam.nl and amsterdamsebos.nl block curl,
so read them in BrowserOS. Not iamsterdam. Facebook: official pages only.

**Kind O (cur-pool-*): places already in the pool.** Their shared text stays untouched. Output
`places/<slice>.json` = `{"overrides": [{"id", "note": "<title>", "attributes": {"bloom", "peak",
"when", "what", "trees"?, "access"?, "extra_description"}, "translations": {"nl": {"attributes":
{"when", "what", "access"?, "extra_description"}}}, "sources": [...]}], "skipped": [...]}`.
`extra_description` (60 to 160 words, plain prose, no heading, no "Look for"): what flowers where
in the place and when, through the year (a park: the March magnolias by the X, the April
cherries along Y, the May chestnuts, the June tulip trees), with numbers where known. `trees`
only when the count is solid. Dutch written fresh.

**Kind N (cur-new-*): places not yet in the pool.** Check first (`dc places sights --all --q
<word>`); if the place exists, make it Kind O instead. Otherwise a new place draft as in
the register brief (`places` array, `detail: "theme"`, category `green`, or `food-drink`
for a market, `curiosities`, etc. if clearly better), pinned on the thing itself, with `access`
filled for gardens with opening hours or a season. Gone or closed spots: leave out. A place
under threat or changing (the Bloesempark's replanting): say so plainly with dates. Events
(Tulp Festival, Hanami) belong in the text of their place, not as places.

Bloom words: same `bloom` and `peak` options as the register brief; for ground flowers use
Gardens, Roses, Bulbs and tulips, Wild flowers, Flower market, Wisteria and climbers.

---

# Ground slices (grd-*): the city's own green register

Source: `api.data.amsterdam.nl/v1/objectenopenbareruimte/groenobjecten/` (Objecten Openbare Ruimte),
where each lawn or verge carries a management class (`beheerafspraak`) and the flags `bollen`
(bulbs planted) and `ecologischBeheer` (ecological mowing). Clustered by `scripts/ground_cluster.py`
(objects within 25 m joined):

- `ground-bulbs.json`: "GAZON MET BOLLEN" (lawn planted with bulbs), clusters of 3,000 m2 and up.
- `ground-meadows.json`: "BLOEMRIJK GRAS" (flower-rich grass under ecological management), clusters of 2 ha and up.

Each cluster: area_m2, objects, pin, top streets, buurt, wijk, stadsdeel, sample object ids (look one
up at `.../groenobjecten/<id>/?_format=json` for details).

What the register does NOT say: which bulbs, which wild flowers. Find that per spot (local press,
friends' groups, the stadsdeel, ecologists' reports, iNaturalist/waarneming.nl counts only as a
hint, never as the sole fact), and in general terms from the city's own pages on its mowing policy
(amsterdam.nl: read in BrowserOS). Where no spot source names the flowers, say only what the
register and the city's general policy support ("the city manages these 6 ha as flower-rich grass,
mown late so the flowers can seed"), give the season of that kind of grassland per the city's or a
mainstream source, and keep the text short. Never invent species for a spot.

Decide per cluster:
- Inside or touching a park/green place already in the pool: merge into that place as Kind O. If it
  is already on bloom (`dc places bloom`), give the full improved override (merge with what's there,
  see places/cur-pool.json and cur-ground-*.json) in "overrides". If the pool place is not on bloom
  yet, a fresh override.
- Otherwise a Kind N place, titled by what and where ("Crocus lawns of the Funenpark",
  "Flower-rich dike of the Diemerzeedijk"), pinned on the largest patch, with `bloom` "Bulbs and
  tulips" or "Wild flowers".
- Skip: road verges along motorways or rail, sports fields, business parks, private or fenced land,
  anything you can't reach on foot or by bike; and small bits of a big cluster that is mostly that.
- Several clusters along one dike, park or polder: one place.
