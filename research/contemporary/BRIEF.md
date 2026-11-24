# Research brief: Contemporary Architecture (one slice per agent)

The map **Contemporary Architecture** (slug `contemporary`, deepcities.org/amsterdam/contemporary)
is a list view over the Deep Amsterdam pool (`sights`): notable buildings completed in 2000
or later across Greater Amsterdam, plus older buildings remodelled or converted since in a
way that is itself recognised architecture. The user picked the buildings; each slice is in
`research/contemporary/SLICES.json` (keys into `research/contemporary/PICKS.json`, which holds
the scout's line for each: name, year and architect, hook, evidence, lead link, type). The
scout lines are leads only: verify everything, and correct them where they are wrong.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/documents-b8db62f6`. Run the
CLI from there as `env -u DC_URL -u DC_TOKEN pnpm -s dc ...` (read-only commands only).

**When curl fails** (403, a JavaScript-only page, an empty or cookie-wall response), open the page in the BrowserOS neo browser before giving up: never drop a fact, a source or a building just because curl couldn't read it. Own tab, targeted reading, close the tab when done. Also use it as a primary source for wider reach: read Het Parool, AT5, NH Nieuws and other paywalled or cookie-walled press through the signed-in browser, and search Google from it.

Keep downloads and helper scripts in your own subfolder of the scratchpad (named after your slice), never in a shared folder: other agents run at the same time.

## Rules that matter most (the user's)

- **Never make anything up.** Every claim needs a source you read. No superlatives, "first /
  only / largest / most sustainable" or quoted phrases unless an authoritative source says so,
  and then attribute it ("BREEAM rated it 98.36%").
- **Authoritative sources.** The architects' own project pages, Arcam (arcam.nl), Architectuur.nl,
  Architectenweb, de Architect, ArchDaily, Dezeen, prize juries' reports (Amsterdamse
  Architectuur Prijs, BNA, Mies van der Rohe Award), the municipality and the owners, serious
  press (Het Parool, NRC, Volkskrant, AT5, NH Nieuws, Trouw). A blog or Wikipedia can lead but
  never be the only support for a fact that matters. When in doubt, leave it out.
- **Current status.** Only completed buildings. Check it still stands and what it is used for
  now (offices change hands, shops leave). Say plainly whether you can go in.
- **Plain, factual, a little wry.** Lead with the most interesting true thing about the
  building: what the architects did, the problem they solved, the fight about it. No hype, no
  estate-agent language ("iconic", "stunning", "world-class"). Never mention the research.
- **No em dashes** anywhere (use a colon, comma or parentheses); no spaced en dashes.
- Fetch with curl and `User-Agent: deep-cities-research/0.1`, a pause between pages. Use the
  BrowserOS neo browser only when curl can't read a page, in your own tab, closed when done.
  Social media only from official pages. Never use iamsterdam.com.
- Write only your own files. Never write to the live site, never commit.

## Kind A: slices named `new-*` (buildings not yet on any map)

Write `research/contemporary/places/$SLICE.yaml` and `research/contemporary/notes/$SLICE.md`.
The draft format is `research/a-list/places/centrum-landmarks.yaml` (look at it first), with:

- `title` (the name people use; add the architect's nickname for it only if sourced),
  `summary` (at most 280 characters), `body` (about 120 to 220 words: what it is, who designed
  it and when, the idea and what came of it, any debate; say whether you can go in; end with
  "Look for:" and two to four things visible from the street), `category` (a key from
  `research/contemporary/map.yaml`; offices and hotels usually `civic`, homes `housing`, schools
  `schools`, stations and bridges `infrastructure`), `lat`/`lng` (the entrance or the building's
  own point, 6 decimals; check it against the address), `address`, `links` (up to 6, the
  architect's page first, distinct labels), `photos` (Wikimedia Commons only, up to 4; none is
  fine), `sources` (every source used).
- Outside the Amsterdam municipality (Amstelveen, Diemen, Zaanstad, Ouder-Amstel,
  Haarlemmermeer): set `municipality:` to the town's name; leave out borough and the rest.
- Source `attributes` only where they truly apply (`heritage_status`, `monument_number`,
  `original_use` for a conversion). No `rank`, no `a_list`.
- `arch:` this map's own fields (see `scripts/data/amsterdam-contemporary-fields.json`):
  `designer` (the architects of this work), `completed` (year, or "2012 (remodel)"), `decade`
  (2000s, 2010s, 2020s), `work` (New building, Remodel or extension, Conversion, Bridge or
  infrastructure, Landscape or public space), `access` (Open to the public, Public parts only,
  At set times, Outside only), `recognition` (prizes and nominations, when there are any).
- `nl:` with `title`, `summary`, `body` and `arch: {recognition}` when there is one.
  **Dutch written fresh** from Dutch sources, never a translation of the English, and no run
  of 8+ consecutive words from any source. The facts agree between the two languages.

Validate with `python3 -B research/contemporary/scripts/validate.py
research/contemporary/places/$SLICE.yaml` until 0 errors. Check the Dutch for copied runs yourself: compare it against the text of every Dutch source you fetched and make sure no run of 8+ consecutive words matches (quotes marked as quotes are fine).

Before writing, check the building is not already on the map under another name:
`env -u DC_URL -u DC_TOKEN pnpm -s dc places sights --all --q <word>`. If it is, don't draft
it: note the id for the coordinator. If a building turns out not to qualify (not completed,
demolished, before 2000 with no recognised remodel, can't be located), drop it and say why.

## Kind B: slices named `ex-*` (places already on Deep Amsterdam)

The places exist and are on the map's list. Their shared text belongs to Deep Amsterdam and
stays untouched. This map adds its own fields to each, as an override. For each key in the
slice, read the place (`dc place <id>`, the id is `existing` in PICKS.json), then write one
entry in `research/contemporary/overrides/$SLICE.json` (a JSON array):

```json
{"id": "<placeId>", "title": "<live title, for the reader>",
 "attributes": {"designer": "...", "completed": "...", "decade": "2010s", "work": "...",
                "access": "...", "recognition": "...", "extra_description": "..."},
 "translations": {"nl": {"attributes": {"recognition": "...", "extra_description": "..."}}}}
```

- `extra_description` ("The architecture"): **only where the live text does not already tell
  the architecture story** of the 2000+ work (who designed it, the idea, what is new). It is
  shown straight after the place's own text as part of the description, so it must not repeat
  that text, must read on from it, and has no heading. About 50 to 150 words, plain markdown,
  may end with one "Look for:" line if it adds things the place text doesn't list. Dutch
  written fresh, same facts. Leave it out where the live text already covers the
  architecture well; say so in the notes.
- `recognition` and `extra_description` are text: give both in English and Dutch.
- **Wrong match:** if the live place is not really the building (e.g. it is an artwork at
  the door, or an older building next to it), don't write an override: list it in the notes
  under "Wrong match" with what the place actually is, and draft the building instead as a
  Kind A place in `research/contemporary/places/$SLICE.yaml`.

Notes in `research/contemporary/notes/$SLICE.md`: per place, the sources for every fact in the
override, whether an extra description was written and why or why not, and anything uncertain.

## Report

Briefly: places drafted or overrides written, extra descriptions written, wrong matches,
dropped items and why, places without photos, and anything uncertain.
