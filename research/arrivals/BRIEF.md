# Writing brief: City of Arrivals (one slice per agent)

The map **City of Arrivals** (slug `arrivals`, deepcities.org/amsterdam/arrivals) is a *list
view* over the Deep Amsterdam pool (`sights`) about **immigration to Amsterdam through all
eras**: where newcomers arrived, settled, prayed, worked, traded, organised, were welcomed or
turned away, and are remembered. It already lists 120 places from Deep Amsterdam. Your slice
is in `research/arrivals/SLICES.json`; the scouts' lines for each pick (hook, community, era,
evidence links, caveats) are in `research/arrivals/PICKS.json` (`existing` by place id, with
lines from every scout that named it; `new` by scout slice and number, e.g.
`postwar-colonial-11` is item 11 of `new.postwar-colonial`). Full scout files:
`research/arrivals/scouts/SCOUT-*.md`. A key authoritative source for every era is the
Stadsarchief's "Amsterdam Migratiestad" theme site
(amsterdam.nl/stadsarchief/themasites/amsterdam-migratiestad/), and for Muslim places the
city's 2026 guide "Langs moslimerfgoed in Amsterdam". Scout lines are leads: verify.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/everything-from-here-current-b8db62f6`.
CLI: `pnpm -s dc ...`, **read-only commands only** (`dc place <id>`, `dc places sights --all --q
<word>`, `dc map arrivals`). Never write to the live site, never commit.

## The map's own fields (values go in the view's override)

- `community` (select, one of): `Sephardic Jews`, `Ashkenazi Jews`, `Huguenots and French`,
  `Germans and Scandinavians`, `Southern Europeans`, `Chinese`, `Indonesians and Moluccans`,
  `Surinamese`, `Antilleans and Arubans`, `Turks`, `Moroccans`, `Ghanaians and West Africans`,
  `Refugees`, `Expats and others`, `Many communities`. The main group the place is about
  (Walloons and Flemish refugees of 1585: `Huguenots and French` only if French-speaking
  Protestants, otherwise `Many communities`; German Jewish refugees of the 1930s:
  `Ashkenazi Jews`; English and Scots: `Expats and others`; enslaved Africans and their
  descendants: `Surinamese` for Suriname, else `Many communities`).
- `era` (select): `Golden Age (1580–1700)`, `1700–1900`, `1900–1945`, `Postwar (1945–1975)`,
  `1975–2000`, `Since 2000` (when the arrival this place is about happened). Copy the en
  dash exactly.
- `years` (text): when this place played its part: "1671", "1937–1942", "since 1974".
- `extra_description` (longtext): **shown first on the place page**, before the place's
  general description, under the map's own heading. So it must stand alone: 60 to 150 words
  of plain prose telling this place's arrival story (who came, from where, why, what the
  place was to them, what came of it). Write it for **every existing place** unless the
  shared text's opening already tells exactly that story; don't repeat the general text's
  architecture. No heading, no "Look for".
- Dutch: `translations.nl.attributes` with `extra_description` (and `years` only if it has
  words). Write the Dutch fresh from Dutch sources, natural, not word for word.

## Kind A: slices `ex-1` to `ex-4` (places already on the map)

Their shared text belongs to Deep Amsterdam and stays untouched. For each id: read it with
`pnpm -s dc place <id>` (body, attributes), decide the four fields, and write
`extra_description` (see above). Settle the scouts' flagged conflicts (dates, counts) from the best source, or leave the number out. Every added fact needs a source you
read (scout links are a start).

Output: `research/arrivals/overrides/$SLICE.json`, a JSON array for `dc override-many`:
```json
[{"id": "<placeId>", "note": "<title, for the reader>",
  "attributes": {"community": "...", "era": "...", "years": "...", "extra_description": "..."},
  "translations": {"nl": {"attributes": {"extra_description": "..."}}},
  "sources": ["https://..."]}]
```
(`sources` and `note` are for the coordinator; they will be stripped before import.)

## Kind B: slices `new-*` (places not yet on any map)

They become `detail: "theme"` places: they show only on this map. Output:
`research/arrivals/places/$SLICE.json`, a JSON array of import drafts for `dc import
arrivals`:
- `title` (the name people use, plus a short hook after a comma if it helps: "Al Kabir, the
  first Moroccan mosque"), `summary` (≤280 chars: the hook), `body` (100 to 200 words:
  what it is or was, who ran it, when, who came and why, what it was to them, what it is today; end
  with "Look for:" and two or three things you can still see, or for a gone place what stands
  there now), `category` (a Deep Amsterdam key from `pnpm -s dc map sights`: religious
  buildings `religious`, shops and restaurants `food-drink`, gone sites and plaques
  `hidden-history`, the building's own kind otherwise), `lat`/`lng` (the entrance or the building's own point; PDOK:
  `https://api.pdok.nl/bzk/locatieserver/search/v3_1/free?q=<address>%20Amsterdam&fq=type:adres&rows=1&fl=weergavenaam,centroide_ll`,
  6 decimals), `address`, `municipality` "Amsterdam" plus `borough`, `neighbourhood`,
  `subNeighbourhood` by point-in-polygon (`curl -sg -H "Accept-Crs: EPSG:4326"
  "https://api.data.amsterdam.nl/v1/gebieden/{stadsdelen|ggwgebieden|wijken}/?_format=json&_fields=naam&geometrie[contains]=LNG,LAT"`),
  `links` (≤6, distinct labels, authoritative first, the venue's own site is fine),
  `detail: "theme"`, `photos` only Wikimedia Commons files you checked exist (none is fine).
- Source `attributes` only where they truly apply (`status: "Gone"` for gone places,
  `heritage_status`, `monument_number`, `built`, `original_use`). **No `rank`, no `a_list`.**
- `override`: `{"attributes": {"community","era","years"}}`. No `extra_description` for
  new places (their body is the arrival story).
- `translations.nl`: `title`, `summary`, `body`, written fresh in Dutch.
- `sources`: every URL you used (stripped before import).
Before drafting, check the place isn't already on the map under another name
(`pnpm -s dc places sights --all --q <word>`); if it is, don't draft it: report its id.
Drop a pick that turns out not to qualify (can't be sourced, wrong, outside Amsterdam) and say why.

## Rules that matter most (the user's)

- **Never make anything up.** Mainstream, authoritative facts only: Het Parool, AT5, NH Nieuws,
  NRC, Volkskrant, Trouw, Vice NL, 3voor12/VPRO, OOR, Folia, the IISG/Staatsarchief, Archief
  Amsterdam, Amsterdam Museum, IHLIA, Atria, Wikipedia (as a lead, cross-checked), the venue's
  own history page (for its own dates). A fact only a hobby or listings site supports: leave it
  out or say plainly it is reported. No superlatives ("oldest", "first", "legendary") unless a
  serious source says so, then attribute it ("Parool called it...").
- **Current status matters**: check it is still open (its own site/socials, recent news); say
  what is there now for gone places. Opening hours change: don't give hours.
- **Plain, factual, a little wry; respectful** of the people. No hype, no filler
  ("iconic", "hidden gem", "nestled", "vibrant"). Treat every community with the same respect; no stereotypes, no politics; give
  hard history (slavery, deportation, the 1970 fire) plainly.
- **No em dashes** anywhere (use a colon, comma or parentheses); en dashes only in ranges.
- **Sources**: curl/WebFetch with `User-Agent: deep-cities-research/0.1`; use the BrowserOS neo
  browser (ToolSearch "select:mcp__browseros-neo__run,mcp__browseros-neo__tabs") as a primary
  tool for Dutch news, in **one tab of your own**, paced (other agents share it; Google may
  captcha: switch to DuckDuckGo or Bing), and close it when done. Het Parool is paywalled: use
  what you can read, attribute snippets carefully, prefer a second source. Never iamsterdam.com.
  Social media only from official pages.
- Validate: JSON parses; summaries ≤280 in both languages; `grep -c "—"` is 0; select values
  exactly as listed; every category exists.

Reply with: your output file path, a table (title or id | community | era | years | sources
count), and what you dropped or couldn't verify.
