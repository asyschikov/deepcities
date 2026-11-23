# Research brief: Deep Amsterdam, Westpoort (one slice per agent)

Same rules as `research/west/BRIEF.md` (draft format, bilingual rule, photo rules, tone),
with the Nieuw-West changes in `research/nieuw-west/BRIEF.md` (rank, status, exact pins,
no em dashes). Read both fully. This file only lists what is different for Westpoort.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/documents-b8db62f6`.
Other agents work in this checkout at the same time: create and edit **only your own
files** (`research/westpoort/places/$SLICE.yaml` and `research/westpoort/notes/$SLICE.md`).
Never write to the live site, never touch app code, never commit.

## Westpoort specifics

- Paths: `research/westpoort/` (map.yaml, places, notes, scripts). Validate with
  `python3 -B research/westpoort/scripts/validate.py research/westpoort/places/$SLICE.yaml`.
- Style models: `research/nieuw-west/places/*.yaml` (the latest bilingual drafts).
- Your items are numbered as in `research/westpoort/SCOUT.md`, which has each item's hook,
  lead source, coordinates and caveats. Verify everything; the scout list is a lead, not a
  source. It is wrong sometimes.
- Westpoort is mostly fenced port. **Visiting** matters more than usual: say exactly where
  and how you can see the thing (from which road, the ferry, a dike, a viewpoint), and
  whether it is open to the public. Pin the object itself if it is visible, otherwise the
  best public viewing spot, and say so in the body.
- **Gone things** (a demolished bridge, a vanished squat, a closed factory): pin the site,
  `(gone)` in the title, `attributes.status: Gone`, and say plainly what (if anything) is
  left to see. Rank them Okay unless the story is exceptional.
- **Sensitive history** (the 1944 Lancaster crash, the Marbon explosion, evictions): factual,
  neither sensational nor evasive.
- Food and drink: none in this round (the map's bar for food is very high).
- Never use em dashes (the long dash) anywhere. En dashes in year ranges are fine.
- Raw downloads go to
  `/private/tmp/claude-501/-Users-andrey--paradev-worktrees-deepcities-5f7b6710-everything-from-here-current-b8db62f6/7a116976-676c-45d3-a727-63149166d721/scratchpad/wp-$SLICE/`.
- Web: BrowserOS neo browser (load `mcp__browseros-neo__*` via ToolSearch, open your own tab)
  for pages, and **close every tab you opened before you report back**; `curl -H "User-Agent: deep-cities-research/0.1"` for APIs. Commons: at most
  1 request per second, back off on 429.

## Slices

- `ruigoord` (west end): 1 Houtveemloods (municipal monument 230001, city register id
  69612699-f2c9-4976-aa85-7e8c6efcb61c, designated 8 July 2025, register point
  52.396338, 4.864850; it sits at the east end, but it goes in this slice), 2 Ruigoord and
  its church, 3 Eendenkooi Ruigoord, 4 Gemaal Houtrakpolder, 6 Petroleumhaven,
  7 Lancaster memorial, 8 Vrijstaat Groenoord and the Afrikahaven fight.
- `hemweg` (Hempont area): 5 Hembrug site, 15 Hempont ferry, 22 Kissing Couple XXXL,
  16 coal and bulk mountains (OBA), 11 Hemweg power station, 23 Berm Bunnies,
  27 bank swallow wall. Items 5, 15 and 22 are all at the Hempontplein: decide whether the
  ferry belongs inside the Hembrug place or stands alone; give each place its own exact pin.
- `port`: 9 ADM terrain, 10 Ford assembly plant, 12 Ceres Paragon terminal,
  13 Marbon explosion site, 18 Amsterdam Heliport, 24 All Aboard (check which side of the
  Westpoort / Nieuw-West boundary it is on; include it either way).

Already on the map, don't add: REM-eiland, De Bonte Zwaan, anything in Sloterdijk village
or Nieuw-West.

Finish with a short report: places written, ranks, gone items, and anything that needs a
decision.
