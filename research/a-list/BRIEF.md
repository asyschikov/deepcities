# Research brief: Deep Amsterdam, the A-list (one slice per agent)

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/documents-b8db62f6`.

Read fully first: `research/west/BRIEF.md` (the draft format, the bilingual rule, photos, links,
sources) and `.claude/skills/c-list-sights/SKILL.md` (start with "Never make anything up" and the
A-list paragraph at the top). The user's first rule: **never make anything up.** Every claim needs a
source in `sources:`; no superlatives, "first / only / oldest" or quoted phrases unless a source
says so.

Create **only** `research/a-list/places/$SLICE.yaml` and `research/a-list/notes/$SLICE.md`. Never
write to the live site, never commit, never use em dashes (use a colon, comma or parentheses).
Fetch with curl and `User-Agent: deep-cities-research/0.1`; use the BrowserOS neo browser only if
curl can't read a page, in your own tab, and close it when done. Social media counts only from
official pages. Don't use iamsterdam.com.

## What is different for the A-list

The map is Amsterdam off the A-list; these famous sights are added **for completeness**. So:

- `attributes: {a_list: A-list}` on every place. **Rank** is set later by the coordinator; leave it out. Keep the other attributes
  (heritage_status, monument_number, built, architect, listed, original_use) as for any place.
- **Short**: a summary (at most 280 characters) and a body of about 120 to 200 words, in both
  languages. Don't retell the guidebook. One line on what it is, then **the deep angle**: the
  odd detail, the dispute, the thing most visitors walk past. The scout's hook in
  `research/a-list/SCOUT.md` is a lead only: verify it, or find a better sourced one.
- Plain and factual, not sensational: lead with the most interesting *true* fact in plain words.
- Visiting: say plainly whether it costs money, needs booking, or can be seen from outside.
- End with "Look for:" / "Let op:" (two to four items, things a visitor can actually see).
- **Dutch written fresh** from Dutch sources, never a translation of the English, and no run of
  8+ consecutive words from any source (quotes of inscriptions marked as quotes are fine).
  Check with `python3 -B /private/tmp/claude-501/-Users-andrey--paradev-worktrees-deepcities-5f7b6710-everything-from-here-current-b8db62f6/7a116976-676c-45d3-a727-63149166d721/scratchpad/copycheck/code/nlcheck.py`
  if it can read your file; otherwise compare by eye against the nl.wikipedia text and register.
- **Neighbours on the map**: the live map already has many places around these sights (e.g.
  "Rijksmuseum garden: city gates without a city", "The war in the Plantage", "The Dam's corners").
  Check with `env -u DC_URL -u DC_TOKEN pnpm -s dc places sights --q <word>` and don't repeat
  their stories: at most a one-line pointer ("the garden behind it has its own place").
- Pin the building's entrance or the object itself, 6 decimals. Category: one of the keys in
  `research/a-list/map.yaml`.
- Photos: Wikimedia Commons, up to 4.

## Slices

Items are numbered as in `research/a-list/SCOUT.md`.

- `centrum-dam-west`: 3 Royal Palace, 4 National Monument, 5 Nieuwe Kerk, 6 Anne Frank House,
  7 Westerkerk, 8 Begijnhof, 9 Oude Kerk, 10 Our Lord in the Attic, 22 Amsterdam Museum
  (say that the Kalverstraat building is closed for renovation and where the museum is now),
  26 Bloemenmarkt, 34 Beurs van Berlage.
- `centrum-east`: 13 Rembrandthuis, 15 Jewish Museum, 16 Portuguese Synagogue, 19 Artis,
  20 Hortus Botanicus, 21 H'ART Museum, 23 Scheepvaartmuseum (with the ship), 24 NEMO,
  25 Magere Brug, 30 Tuschinski.
- `zuid`: 40 Rijksmuseum, 41 Van Gogh Museum, 42 Stedelijk Museum, 43 Concertgebouw,
  44 Museumplein, Heineken Experience, Moco Museum, Albert Cuyp market (monument numbers in
  `research/zuid/A-LIST.md`).
- `oost-noord-zuidoost`: 47 Muziekgebouw aan 't IJ with the Bimhuis (one place), 48 A'DAM Toren
  and Lookout, 49 Eye Filmmuseum, and the Johan Cruijff ArenA.

Validate with `python3 -B research/a-list/scripts/validate.py research/a-list/places/$SLICE.yaml`
until 0 errors. In the notes: every place with the sources used, the claims you left out and why,
places without photos, and a "Fact check" list (each factual claim, EN and NL, with its source).
Report briefly: places written, photos, anything uncertain.
