# Research brief: Deep Amsterdam, Oost (one slice per agent)

Same rules as `research/west/BRIEF.md` (draft format, bilingual rule, photo rules, tone),
with the changes in `research/nieuw-west/BRIEF.md` (rank, status, exact pins, no em dashes).
Read both fully, and `research/weesp/BRIEF.md` for the dense-ensemble rule. This file only
lists what is different for Oost.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/documents-b8db62f6`.
Other agents work in this checkout at the same time: create and edit **only your own
files** (`research/oost/places/$SLICE.yaml` and `research/oost/notes/$SLICE.md`).
Never write to the live site, never touch app code, never commit.

## Oost specifics

- Paths: `research/oost/` (map.yaml, places, notes, slices, scripts). Validate with
  `python3 -B research/oost/scripts/validate.py research/oost/places/$SLICE.yaml`.
- Style models: `research/noord/places/*.yaml` (latest), `research/weesp/places/*.yaml` (ensembles).
- **Monuments**: `slices/$SLICE.json` lists every listed monument in your slice (city register
  `text` for municipal ones; `rce_text` and `rce_function` from the national register for
  national ones; `complex` links parts of one complex). **Every record must end up in exactly
  one place.** Standouts get their own place. Merge complexes (a cemetery with its gate, aula
  and graves; a country house with its garden statues; a convent with its grotto and chimney;
  a garden village's blocks) into one place, listing the notable parts in the body. Plain
  listed houses and housing blocks go into **ensembles** as in the Weesp brief: rank `Okay`,
  all monument numbers in `monument_number` (max 200 characters; split if needed), pinned on
  the most characteristic building (say which), body tells the street's or estate's story,
  ending with a "Look for:" list. Records with no monument number (in procedure, e.g. the
  Kraaipanbuurt): mention them in the place, heritage_status as fits.
- **Scouted items**: numbers below are from the user's shortlist; `SCOUT.md` numbers in
  brackets have the hook, lead source and caveats. Verify everything; the scout list is a
  lead, not a source. Where a scout item is also a monument in your slice, make one place.
- **Gone things: high bar.** A gone thing gets a place only if something related is there
  today, the current state gives context, or it had a lasting impact. Gone: `(gone)` in the
  title and `attributes.status: Gone`.
- **Food and drink: very high bar.** Only the Dappermarkt (item 37). No restaurants or bars as
  places; a building's past as a bathhouse etc. can be told in another place.
- Sensitive history (deportations and the Jewish east, the Van Gogh murder, slavery and
  colonialism, apartheid and the Boer street names, the Zeeburgerdorp "antisocial" families):
  factual, neither sensational nor evasive.
- Status: check the latest news for every item; say plainly if removed, closed or changed.
- Never use em dashes (the long dash) anywhere. En dashes in year ranges are fine.
- Raw downloads go to
  `/private/tmp/claude-501/-Users-andrey--paradev-worktrees-deepcities-5f7b6710-everything-from-here-current-b8db62f6/7a116976-676c-45d3-a727-63149166d721/scratchpad/oost-$SLICE/`.
- Web: BrowserOS neo browser (load `mcp__browseros-neo__*` via ToolSearch, open your own tab)
  for pages, and **close every tab you opened before you report back**; curl with
  `-H "User-Agent: deep-cities-research/0.1"` for APIs and plain pages. Commons: at most
  1 request per second, back off on 429.

## Slices (user's shortlist numbers; SCOUT.md numbers in brackets)

- `havens` (32 monuments: KNSM, Lloyd, KHL buildings, Pakhuis de Zwijger, cattle market site,
  crane 2868) plus 7 the Lloyd's emigrant past (9, with monument 523289), 13 Drijvende Tuinen
  (16), 18 Mark Manders' living-room fragment (21), 19 Python Bridge (22), 22 Het Licht van Jan
  (27; check which borough it is in, include it either way), 23 Graft 1–5 (28, one place),
  27 Voor de Bijen (32), 29 Museum Perron Oost (34, with the cattle market story).
- `ijburg` (1 monument: Gemeenlandshuis, Diemerzeedijk 27) plus 24 Space to Take Place (29),
  25 Nijlpaard (30), 26 Floating Poetry Room (31), 35 Diemerpark and De Ontmoeting (40).
- `indische` (50 monuments: Indische Buurt, Transvaalbuurt, Flevopark, Zeeburgerdijk, incl.
  Herberg Zeeburg 6499 and the Zeeburg Jewish cemetery) plus 1 Zeeburg quarantine station and
  refugee camp (1, with 6499 if it is the same site), 2 Transvaalbuurt Jewish memorials incl.
  the Sparrenweg plaque (2, 5), 6 Zeeburgerdorp plaque (8), 9 Monument against Apartheid and
  the Steve Bikoplein (11), 10 Wayang / Into the Shadow (12), 11 Indische Buurt street names
  (13; may carry the Badhuis Javaplein story), 17 101 Namen (20), 28 Anxiety Rabbit (33).
- `oosterpark` (45 monuments: Oosterpark, Dapperbuurt, Mauritskade, St. Elisabeth convent,
  Muiderpoortstation, the Colonial Institute 526987) plus 3 Muiderpoortstation deportation
  monument with Hünd's mosaic (3, 26), 4 "43 kinderen" with Here Comes The Sun (4, 25),
  5 Theo van Gogh murder site and De Schreeuw (6, 7), 8 National Slavery Monument and Keti
  Koti, with one line on the future slavery museum (10, 15), 12 "read the facade" of the
  Colonial Institute (14, with 526987), 14 Noch Einmal (17), 15 U Bevindt Zich Hier and the
  gasworks facades (18), 16 Karel Appel's Flowers (19), 21 Het begon met een dubbeltje (24),
  37 Dappermarkt (44).
- `weesperzijde` (44 monuments: Weesperzijde villas, Spaklerweg waterworks and water tower,
  Klarenbeek farm, Omval) plus 20 De Buurtoptimist (23), 32 Wibautstraat newspaper street (37),
  34 Bajeskwartier and Bajesdorp (39).
- `betondorp` (37 monuments: Betondorp, De Nieuwe Ooster cemetery with its graves) plus
  30 Museum Tot Zover (35, inside the De Nieuwe Ooster place or its own; decide),
  33 Park De Meer and Cruijff's childhood home (38).
- `frankendael` (55 monuments: Frankendael house and garden, Linnaeushof, 1949 Watergraafsmeer
  estates, churches, Amstelstation, Ringdijk) plus 31 CWI and Science Park (36), 36 the
  Ringdijk and Watergraafsmeer polder (43, with the Ringdijk monuments where sensible).

Already on the map, don't add: anything outside Oost.

Finish with a short report: places written (monuments vs other), ranks, gone items, and
anything that needs a decision.
