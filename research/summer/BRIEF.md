# Writing brief: Magic of Summer (one slice per agent)

The map **Magic of Summer** (slug `summer`) is a *list view* over the Deep Amsterdam pool
(`sights`): Amsterdam's summer places (swim spots, beaches, waterside terraces, parks and shade,
hangout and sunset spots, boats, open-air culture, splash spots). Your slice and its picks are in
`research/summer/PICKS.json` (each pick: scout slice and number, e.g. `swim-3` is item 3 of
`research/summer/scouts/SCOUT-swim.md`, or an existing place id). Scout lines are leads only:
verify and correct.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/everything-from-here-current-b8db62f6`.
CLI: read-only only (`pnpm -s dc place <id>`, `dc places sights --all --q <word>`, `dc map sights`).
Never write to the live site, never commit.

## The map's own fields (go in the override)

- `kind` (select): `Swim spot`, `Beach`, `Waterside terrace`, `Park and shade`,
  `Hangout and sunset`, `On the water`, `Open-air culture`, `Play and splash`. The one that best
  says what you come for in summer.
- `swimming` (select, only for places with water you might get into): `Official bathing water`
  (on the province's list, zwemwater.nl), `Pool`, `Allowed, not official`, `No swimming`.
- `when` (text, only if not all summer): "May to September", "July and August", "weekends".
- `good_to_know` (longtext, 20 to 70 words): crowds and the best time, algae or swimmer's itch
  that recurs, what to bring, shade, toilets, wheelchair access, how to get there by bike/transit.
- `extra_description` (longtext, existing places only): 60 to 140 words on what the place is
  like in summer, when its shared Deep Amsterdam text doesn't say. Plain prose, no heading.
- Dutch: `translations.nl.attributes` with `when` (if words), `good_to_know`,
  `extra_description`, written fresh and natural.

## Kind A: existing places (ids in your slice)

Their shared text stays untouched. Read each (`dc place <id>`), set the fields, and write
`extra_description` in almost every case (the shared texts are about history, not summer).
Output `research/summer/overrides/$SLICE.json`:
`[{"id","note","attributes":{...},"translations":{"nl":{"attributes":{...}}},"sources":[...]}]`.

## Kind B: new places

They become `detail: "theme"` places (only on this map). Output
`research/summer/places/$SLICE.json`, an array of drafts for `dc import summer`:
- `title`: the name people use, plus a short hook after a comma if it helps ("Sloterplas beach,
  Nieuw-West's evening swim"). `summary` ≤280: the summer hook. `body` 90 to 180 words: what it
  is, what you do there on a summer day, what makes it special, one or two facts (since when,
  who runs it); end with "Look for:" and two or three things.
- `category`: a Deep Amsterdam key (`green` for parks, lakes, beaches and swim spots;
  `food-drink` for terraces and beach bars; `culture` for open-air stages and cinemas;
  `infrastructure` for piers and quays; `curiosities` otherwise).
- `lat`/`lng`: the spot itself (the beach, the jetty, the terrace), 6 decimals. Addresses via
  PDOK (`https://api.pdok.nl/bzk/locatieserver/search/v3_1/free?q=<address>&fq=type:adres&rows=1&fl=weergavenaam,centroide_ll`).
  Inside Amsterdam: `municipality` "Amsterdam" plus `borough`, `neighbourhood`,
  `subNeighbourhood` by point-in-polygon (`curl -sg -H "Accept-Crs: EPSG:4326"
  "https://api.data.amsterdam.nl/v1/gebieden/{stadsdelen|ggwgebieden|wijken}/?_format=json&_fields=naam&geometrie[contains]=LNG,LAT"`).
  Outside: just `municipality` (e.g. "Amstelveen", "Landsmeer", "Ouder-Amstel").
- `links` ≤6 (labels ≤60, distinct): official first (the place's own site, the municipality,
  zwemwater.nl), then newspaper and blog pieces. `photos`: only Wikimedia Commons files with a
  CC or PD licence that you checked show the place in summer light if possible (none is fine).
- `detail: "theme"`. No `rank`, no `a_list`.
- `override`: `{"attributes": {"kind", "swimming"?, "when"?, "good_to_know"}, "translations":
  {"nl": {"attributes": {"when"?, "good_to_know"}}}}`. No `extra_description` (the body is the
  summer text).
- `translations.nl`: `title`, `summary`, `body`, written fresh in Dutch.
- `sources`: every URL you used (stripped before import).
Before drafting, check it isn't already on the map (`dc places sights --all --q <word>`); if it
is, write it as Kind A instead.

## Rules (the user's)

- Never make anything up. Facts from newspapers (Parool, AT5, NH Nieuws), official sources
  (amsterdam.nl, zwemwater.nl, Waternet), the place's own site for its own dates. No
  superlatives unless a serious source says so, then attribute it.
- **Safety:** never suggest swimming where it's banned or unsafe; say so plainly where people
  are tempted (the IJ, the Stenen Hoofd).
- No opening hours, no prices. Current status checked (2025/2026).
- Style: plain, warm, concrete, a little wry. Summer, not history. No hype ("hidden gem",
  "iconic", "vibrant", "nestled", "oasis"). **No em dashes** (colon, comma or parentheses).
- BrowserOS neo in one tab of your own when curl fails (ToolSearch
  "select:mcp__browseros-neo__run,mcp__browseros-neo__tabs,mcp__browseros-neo__navigate,mcp__browseros-neo__read,mcp__browseros-neo__grep"),
  close it when done. Never iamsterdam.com. Social media only from official pages.
- Validate: JSON parses; summaries ≤280 both languages; `grep -c "—"` is 0; select values
  exactly as listed; categories exist.

Reply with: output paths, a table (title or id | kind | swimming | sources count), and what you
dropped or couldn't verify.
