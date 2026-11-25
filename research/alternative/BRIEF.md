# Writing brief: Alternative Amsterdam (one slice per agent)

The map **Alternative Amsterdam** (slug `alternative`, deepcities.org/amsterdam/alternative) is a
*list view* over the Deep Amsterdam pool (`sights`): iconic alternative and underground places,
living and legendary (squats and free zones, clubs and venues, bars with a scene, LGBTQ+ and
women's movement places, counterculture history, record shops). It already lists 77 places from
Deep Amsterdam. Your slice is in `research/alternative/SLICES.json`; the scout's line for each
pick (name, address, hook, status, evidence links) is in `research/alternative/PICKS.json`
(`existing` by place id; `new` by scout slice and number, e.g. `music-clubs-3` is item 3 of
`new.music-clubs`). The full scout files are `research/alternative/scouts/SCOUT-*.md`. Scout
lines are leads only: verify, correct where wrong.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/everything-from-here-current-b8db62f6`.
CLI: `pnpm -s dc ...`, **read-only commands only** (`dc place <id>`, `dc places sights --all --q
<word>`, `dc map alternative`, `dc help`). Never write to the live site, never commit.

## The map's own fields (values go in the view's override)

- `kind` (select, one of): `Music venue or club`, `Squat or free zone`, `Bar with a scene`,
  `LGBTQ+`, `Counterculture history`, `Record shop or market`. Pick the one that best tells
  why the place is on this map.
- `today` (select): `Still going` (still does what made it alternative), `Changed` (stands, now
  something else or gone mainstream: Paradiso is "Changed"? No: Paradiso still runs as a venue,
  so "Still going"; use Changed for a squat that became flats, a club that became a shop),
  `Gone` (only the site or a trace is left).
- `years` (text): when it was active in this story: "1968–1980", "since 1993", "1971".
- `scene` (text, short): who it belonged to: "squatters", "punks", "Provos", "ravers",
  "jazz musicians", "lesbians and queer women", "rockabillies"...
- `extra_description` (longtext): shown after the place's own text as part of its
  description. **Only for existing places whose shared text does not tell the alternative
  story** (or tells it in one line). 60 to 150 words, plain prose, no heading, no "Look for".
  Leave it out when the shared text already covers it well.
- Dutch: `translations.nl.attributes` with `scene` and `extra_description` (and `years` only if
  it contains words). Write the Dutch fresh from Dutch sources, natural, not word for word.

## Kind A: slices `ex-1`, `ex-2` (places already on the map)

Their shared text belongs to Deep Amsterdam and stays untouched. For each id: read it with
`pnpm -s dc place <id>` (body, attributes), decide the four fields, and write
`extra_description` only where needed (see above; the scouts flagged some: Blauwbrug 1980
riots, Vondelpark 1971 sleeping park, IISG squatters' archive, NDSM's Kinetisch Noord, Van der
Palmschool = Kostgewonnen, KNSM canteen = Edelweiss, Pakhuis Koningin Emma = the punk squat De
Emma, Tetterode = De Trut, Wilhelmina Drucker monument = Dolle Mina's corset burning, Vrankrijk's
queer night, Garage Notweg's QueerHub, National Monument = the Damslapers, Ruigoord's 2025
lease, Wibautstraat newspaper street = Trouw and Doka). Every added fact needs a source you
read (scout links are a start).

Output: `research/alternative/overrides/$SLICE.json`, a JSON array for `dc override-many`:
```json
[{"id": "<placeId>", "note": "<title, for the reader>",
  "attributes": {"kind": "...", "today": "...", "years": "...", "scene": "...", "extra_description": "..."},
  "translations": {"nl": {"attributes": {"scene": "...", "extra_description": "..."}}},
  "sources": ["https://..."]}]
```
(`sources` and `note` are for the coordinator; they will be stripped before import.)

## Kind B: slices `new-*` (places not yet on any map)

They become `detail: "theme"` places: they show only on this map. Output:
`research/alternative/places/$SLICE.json`, a JSON array of import drafts for `dc import
alternative`:
- `title` (the name people use, plus a short hook after a comma if it helps: "Soundgarden, the
  rock dive on the Marnixstraat"), `summary` (≤280 chars: the hook), `body` (100 to 200 words:
  what it is or was, who ran it, when, why it mattered to its scene, what it is today; end
  with "Look for:" and two or three things you can still see, or for a gone place what stands
  there now), `category` (a Deep Amsterdam key from `pnpm -s dc map sights`: bars `food-drink`,
  venues `civic` or `industrial` by building, squats `hidden-history` or the building's kind,
  gone sites `hidden-history`), `lat`/`lng` (the entrance or the building's own point; PDOK:
  `https://api.pdok.nl/bzk/locatieserver/search/v3_1/free?q=<address>%20Amsterdam&fq=type:adres&rows=1&fl=weergavenaam,centroide_ll`,
  6 decimals), `address`, `municipality` "Amsterdam" plus `borough`, `neighbourhood`,
  `subNeighbourhood` by point-in-polygon (`curl -sg -H "Accept-Crs: EPSG:4326"
  "https://api.data.amsterdam.nl/v1/gebieden/{stadsdelen|ggwgebieden|wijken}/?_format=json&_fields=naam&geometrie[contains]=LNG,LAT"`),
  `links` (≤6, distinct labels, authoritative first, the venue's own site is fine),
  `detail: "theme"`, `photos` only Wikimedia Commons files you checked exist (none is fine).
- Source `attributes` only where they truly apply (`status: "Gone"` for gone places,
  `heritage_status`, `monument_number`, `built`, `original_use`). **No `rank`, no `a_list`.**
- `override`: `{"attributes": {"kind","today","years","scene"}, "translations": {"nl":
  {"attributes": {"scene"}}}}`. No `extra_description` for new places (their body is the
  theme text).
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
- **Plain, factual, a little wry; respectful** of the people and scenes. No hype, no filler
  ("iconic", "hidden gem", "nestled", "vibrant"). Treat sex work, drugs and queer history
  factually.
- **No em dashes** anywhere (use a colon, comma or parentheses); en dashes only in ranges.
- **Sources**: curl/WebFetch with `User-Agent: deep-cities-research/0.1`; use the BrowserOS neo
  browser (ToolSearch "select:mcp__browseros-neo__run,mcp__browseros-neo__tabs") as a primary
  tool for Dutch news, in **one tab of your own**, paced (other agents share it; Google may
  captcha: switch to DuckDuckGo or Bing), and close it when done. Het Parool is paywalled: use
  what you can read, attribute snippets carefully, prefer a second source. Never iamsterdam.com.
  Social media only from official pages.
- Validate: JSON parses; summaries ≤280 in both languages; `grep -c "—"` is 0; select values
  exactly as listed; every category exists.

Reply with: your output file path, a table (title or id | kind | today | years | sources
count), and what you dropped or couldn't verify.
