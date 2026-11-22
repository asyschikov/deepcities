# Research brief: Deep Amsterdam, Nieuw-West (one slice per agent)

Same rules as `research/west/BRIEF.md` (read it fully: draft format, bilingual rule,
photo rules, tone). This file only lists what is different for Nieuw-West.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/documents-b8db62f6`.
Other agents work in this checkout at the same time: create and edit **only your own
files** (`research/nieuw-west/places/$SLICE.yaml` and `research/nieuw-west/notes/$SLICE.md`).
Never write to the live site, never touch app code, never commit.

## What is different from the West brief

- Paths: `research/nieuw-west/` instead of `research/west/` (map.yaml, places, notes,
  slices, scripts). Validate with
  `python3 -B research/nieuw-west/scripts/validate.py research/nieuw-west/places/$SLICE.yaml`.
- Style models: `scripts/data/amsterdam-west-places.json` (live West places) and
  `research/west/places/*.yaml` (bilingual drafts). Match their depth and tone.
- **Monument slices** (`slices/$SLICE.json`): a list of groups, each with a `group` id,
  a `hint` (suggested title and merge) and the register `records`. Every record must end up
  in a place. Follow the hint unless the sources show it's wrong (then explain in notes).
  Don't do "Part 2" (extra non-monument places): the extras were scouted separately. Only
  where `research/nieuw-west/SCOUT.md` has an item that belongs inside one of your monuments
  (the carillon, De Verfdoos, Poort van Constant, De 1800 Roeden, the Staalman sculpture,
  Sloten village square), use its facts in that place.
- **Scouted slices**: your items are listed below with their number in
  `research/nieuw-west/SCOUT.md`, which has the hook, lead source and caveats.
- **Rank** (`attributes.rank`, required): `Amazing` (worth going out of your way; rare,
  about 1 in 20 across the map), `Nice` (worth a stop if you're near), `Okay` (a footnote:
  plain listed fronts, small plaques, gone things without a strong story). Most plain
  post-war monuments are Okay or Nice.
- **Status**: check the latest news for every item. If it's gone, say so plainly, add
  `(gone)` to the title and set `attributes.status: Gone`. Never leave the reader guessing,
  never invite readers to report. If you can't settle a claim, leave it out and note it.
- **Exact pins**: the object itself (the sculpture, the gate, the wall), 6 decimals.
  Never a street centroid. For artworks, find the exact spot (artatsite, stadscuratorium,
  buitenkunstamsterdam, Commons coordinates, aerial/street imagery descriptions).
- **Never use em dashes** (the long dash) anywhere, in English or Dutch. Use a colon, comma
  or parentheses. En dashes in year ranges (1954–1956) are fine.
- Never mention research process ("our notes", "the coordinator", "this brief").
- Raw downloads go to
  `/private/tmp/claude-501/-Users-andrey--paradev-worktrees-deepcities-5f7b6710-everything-from-here-current-b8db62f6/7a116976-676c-45d3-a727-63149166d721/scratchpad/nw-$SLICE/`.
- Web: BrowserOS neo browser (load `mcp__browseros-neo__*` via ToolSearch, open your own tab)
  for pages; `curl -H "User-Agent: deep-cities-research/0.1"` for APIs. Commons: at most
  1 request per second, back off on 429.

## Slices

Monuments: `sloten`, `geuzenveld`, `slotermeer`, `osdorp`, `sloterhof`, `slotervaart`
(input in `slices/<name>.json`).

Scouted items (numbers refer to SCOUT.md):

- `art`: 10 Animaris Rhinoceros Transport, 11 Groot Landschap, 13 Erotica,
  14 the "Satéprikkers", 15 Wegwerphuisje, 16 Vlindermolen ("de haas"),
  18 Schaap met vijf poten, 4 "If you know, you know...".
- `history`: 1 Street Art Museum Amsterdam (one place for the museum, pinned at its base;
  mention a few key walls), 2 Graphic Surgery lines on the ACTA building (Radion),
  26 Van Eesteren Museum (one place) and the Witte Klok / Van Eyck playground (its own
  place if it can be pinned), 27 the hand-dug Sloterplas, 28 Allende monument and
  President Allendelaan, 30 Verzetsstrijdersbuurt portraits, 31 Sierplein bird monument.
- `green`: 33 Tenerife national monument, 37 Lutkemeerpolder fight, 39 Molen van Sloten and
  Kuiperijmuseum, 41 De Vrije Geer, 42 Het Ruige Riet, 43 De Oeverlanden,
  44 Lange Bretten, 45 Brouwerij De 7 Deugden.

Already on the map, don't add: Colour Connection, Under Heaven 02.

Finish with a short report: places written (monuments vs other), ranks given, gone items,
and anything that needs a decision.
