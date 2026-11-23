# Research brief: Deep Amsterdam, Weesp (one slice per agent)

Same rules as `research/west/BRIEF.md` (draft format, bilingual rule, photo rules, tone),
with the changes in `research/nieuw-west/BRIEF.md` (rank, status, exact pins, no em dashes).
Read both fully. This file only lists what is different for Weesp.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/documents-b8db62f6`.
Other agents work in this checkout at the same time: create and edit **only your own
files** (`research/weesp/places/$SLICE.yaml` and `research/weesp/notes/$SLICE.md`).
Never write to the live site, never touch app code, never commit.

## Weesp specifics

- Paths: `research/weesp/` (map.yaml, places, notes, slices, scripts). Validate with
  `python3 -B research/weesp/scripts/validate.py research/weesp/places/$SLICE.yaml`.
- Style models: `research/nieuw-west/places/*.yaml`.
- Input: `slices/$SLICE.json`, a list of groups (`group`, `hint`, `records`). Each record has
  the city register data (`text` for municipal monuments) and, for national monuments, the
  national register description (`rce_text`, `rce_function`). Every record must end up in a
  place. Follow the hints unless the sources show they're wrong (explain in notes).
- **Dense old town rule** (the user's decision): Weesp has 314 monuments, mostly plain
  canal houses. Standouts get their own place. Plain listed houses go into **street
  ensemble** places: rank `Okay`, all their monument numbers in `monument_number`
  (max 200 characters, so split an ensemble in two, e.g. by stretch of street, if needed),
  `heritage_status` as fits the mix, pinned on the most characteristic house of the
  ensemble (say which in the body). The body tells the street's story (what the street was,
  who lived and worked there) and ends with a "Look for:" list naming the 5–10 best fronts by
  house number (dated gable stones, neck gables, carved doors, old shopfronts). If a house
  in an ensemble has a real story of its own (a distillery, a famous resident, a remarkable
  gable stone), pull it out as its own place.
- Scouted items: numbers refer to `research/weesp/SCOUT.md` (hook, lead source, caveats).
  Verify everything; the scout list is a lead, not a source.
- Status: check the latest news for every item. Gone: `(gone)` in the title and
  `attributes.status: Gone`.
- Sensitive history (the Van Houten monument and colonial cocoa, the deported Jewish
  community, the 1918 train disaster, De Hogeweyk residents): factual, neither sensational
  nor evasive. De Hogeweyk is people's home: say what a visitor can and can't do.
- Food and drink: the map's bar is very high. No restaurants or bars as places.
- Never use em dashes (the long dash) anywhere. En dashes in year ranges are fine.
- Raw downloads go to
  `/private/tmp/claude-501/-Users-andrey--paradev-worktrees-deepcities-5f7b6710-everything-from-here-current-b8db62f6/7a116976-676c-45d3-a727-63149166d721/scratchpad/weesp-$SLICE/`.
- Web: BrowserOS neo browser (load `mcp__browseros-neo__*` via ToolSearch, open your own tab)
  for pages, and **close every tab you opened before you report back**; curl with
  `-H "User-Agent: deep-cities-research/0.1"` for APIs and plain pages. Commons: at most
  1 request per second, back off on 429.

## Slices

- `civic`: town hall, churches, synagogue, cinema, Roskamstraat and other groups in the slice file.
- `fortress`: mills, Fort Uitermeer, concrete works, defence works, lock, bridges, porcelain
  factory, ice factory; plus scouted 8 (Weduwe met Kind) and 16 (wooden houses outside the
  walls).
- `vanhouten`: swimming baths, Van Houten monuments and legacy, Landscroon cemetery,
  slaughterhouse; plus scouted 2 (Het Duivenprieel), 3 (Weesper Moppenbakker),
  4 (WaterWeespers) and 23 (De Valk chimney, gone).
- `outskirts`: Gaaspermolen, Driemond waterworks house, Overaetwijs, the three farm groups;
  plus scouted 27 (1918 train disaster site), 30 (De Hogeweyk) and 32 (Driemond confluence
  and the Geinbrug).
- `streets-a`: ensembles E1 Hoogstraat, E2 Nieuwstad/Buitenveer/Binnenveer, E3 Slijkstraat/Middenstraat.
- `streets-b`: ensembles E4 Nieuwstraat/Kerkstraat, E5 Oudegracht/Achtergracht,
  E6 Herengracht/Achteromstraat, E7 the rest outside the core.

Already on the map, don't add: anything outside Weesp.

Finish with a short report: places written (monuments vs other), ranks, gone items, and
anything that needs a decision.
