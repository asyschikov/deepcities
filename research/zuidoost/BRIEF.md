# Research brief: Deep Amsterdam, Zuidoost (one slice per agent)

Same rules as `research/west/BRIEF.md` (draft format, bilingual rule, photo rules, tone),
with the changes in `research/nieuw-west/BRIEF.md` (rank, status, exact pins, no em dashes).
Read both fully. This file only lists what is different for Zuidoost.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/documents-b8db62f6`.
Other agents work in this checkout at the same time: create and edit **only your own
files** (`research/zuidoost/places/$SLICE.yaml` and `research/zuidoost/notes/$SLICE.md`).
Never write to the live site, never touch app code, never commit.

## Zuidoost specifics

- Paths: `research/zuidoost/` (map.yaml, places, notes, slices, scripts). Validate with
  `python3 -B research/zuidoost/scripts/validate.py research/zuidoost/places/$SLICE.yaml`.
- Style models: `research/nieuw-west/places/*.yaml` and `research/weesp/places/*.yaml`.
- Items are numbered as in the user's shortlist below; the matching scout entry in
  `research/zuidoost/SCOUT.md` has the hook, lead source (often a Kunstwacht id: the city's
  public-art database, buitenkunstamsterdam.nl) and caveats. Verify everything; the scout
  list is a lead, not a source.
- The 5 register monuments are in `slices/monuments.json` (city register text included).
- Status: check the latest news for every item. Gone: `(gone)` in the title and
  `attributes.status: Gone`. Stolen parts, demolition plans and closures: say plainly.
- Sensitive history (the 1992 El Al crash and its victims, colonial history and slavery in
  the art, migrant communities, the Bijlmer's stigma): factual, neither sensational nor
  evasive, and never patronising about the neighbourhood.
- Food and drink: none (the map's bar is very high).
- Never use em dashes (the long dash) anywhere. En dashes in year ranges are fine.
- Raw downloads go to
  `/private/tmp/claude-501/-Users-andrey--paradev-worktrees-deepcities-5f7b6710-everything-from-here-current-b8db62f6/7a116976-676c-45d3-a727-63149166d721/scratchpad/zo-$SLICE/`.
- Web: BrowserOS neo browser (load `mcp__browseros-neo__*` via ToolSearch, open your own tab)
  for pages, and **close every tab you opened before you report back**; curl with
  `-H "User-Agent: deep-cities-research/0.1"` for APIs and plain pages. Commons: at most
  1 request per second, back off on 429.

## Slices (numbers from the user's shortlist; SCOUT.md numbers in brackets)

- `housing`: 1 Groenhoven and Gouden Leeuw, one place (scout 1, 2; monuments 200955, 200956),
  2 Het Zandkasteel (scout 3; 200890), 3 Atlas Arena (scout 4; 230015), 4 Boerderij
  Langerlust (scout 5; 200982), 6 Kleiburg "De Flat" (scout 8), 7 Bijlmer Museum (scout 9),
  8 Hoptille (scout 39), 9 Heesterveld Creative Community (scout 41).
- `memory`: 5 Groeiend Monument and De Boom die Alles Zag, with the Pa Sem bridge in the
  same place (scout 6, 7), 10 Monument voor de stad Amsterdam (time capsule; scout 12),
  11 Achtergelaten bagage (scout 13), 12 Tayouken Piss (scout 14), 13 Vogelparade (scout 15),
  14 Anton de Kom monument (scout 16), 15 Nelson Mandela memorial "Rona Batho" (scout 17),
  16 Iron Lady of the Bijlmer (scout 18).
- `community`: 17 The Botanical Garden of the Bims, with the garage churches story in the same
  place (scout 19, 33), 18 Perfumed with Mint (scout 20), 19 Steven van Dorpel memorial
  (scout 26), 20 Now Speak! (scout 22), 21 Het Wapen van Holendrecht (scout 23), 22 De
  Kandelaar (scout 31), 23 Taibah Mosque (scout 32), 24 Gaasperpark (scout 35),
  25 Nelson Mandelapark and Kwaku (scout 37).

Already on the map, don't add: the Gaaspermolen and the Lange Stammerdijk farm (Weesp).

Finish with a short report: places written, ranks, gone items, and anything that needs a
decision.
