# Research brief: Deep Amsterdam, Oost round 2 (one slice per agent)

Same rules as `research/oost/BRIEF.md` (read it fully, and the briefs it points to:
`research/west/BRIEF.md`, `research/nieuw-west/BRIEF.md`, `research/weesp/BRIEF.md`).
This file only lists what is different for round 2.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/documents-b8db62f6`.
Other agents work in this checkout at the same time. Create and edit **only**:
- your own new files `research/oost/places/r2-$SLICE.yaml` and `research/oost/notes/r2-$SLICE.md`;
- the round 1 places named under "Merges" for your slice (in the round 1 file given there),
  and nothing else in those files. Keep their titles unchanged (titles are the import key).
Never write to the live site, never touch app code, never commit.

## Round 2 specifics

- Items are numbered 101–157. `research/oost/SCOUT-2.md` has the hook, lead source and
  caveats for each. Verify everything; the scout list is a lead, not a source. Kunstwacht
  links (`buitenkunstamsterdam.nl/kunstwerken/bekijk/<id>`) were not opened by the scout;
  if one fails, search the site by title.
- **No monuments in this round**: all listed monuments in Oost are already placed. Don't
  set `monument_number` unless the object itself is listed and not yet on the map (check
  `grep -rn <number> research/oost/places/`).
- **Don't duplicate round 1.** Before writing, grep `research/oost/places/*.yaml` for the
  item and its address. If a round 1 place already covers it, extend that place (only if
  it is one of your listed merges) or say so in your notes.
- **Merges**: add the item to the named round 1 place: a sentence or short paragraph in
  `body` and in `nl.body`, a "Look for" line, a link if useful (max 6), sources. Don't
  rewrite the rest of the place. If the item turns out to deserve its own place after all,
  write it as its own place and explain in notes.
- **Small items** marked Okay may become a "Look for" line in a nearby place of your own
  slice instead of their own place, if they are too slight to stand alone. Say which in notes.
- **Status**: many Kunstwacht texts are undated. For every artwork, look for recent
  evidence (news, Street View date, recent photos on Commons or Street Art Cities, Mapillary).
  If removed, say so plainly (gone things only under the high bar). If you can't settle it,
  leave the item out and note it.
- **Exact pins**: the artwork or object itself, 6 decimals. Use OSM (Overpass:
  `https://overpass-api.de/api/interpreter`, `tourism=artwork`), Kunstwacht coordinates,
  Commons geotags. Say in notes which pins are approximate.
- Categories: check `research/oost/map.yaml`. Public art usually `street-art`; bridges and
  buildings `architecture`; WWII memorials as round 1 did (grep the round 1 files).
- Never use em dashes (the long dash) anywhere. En dashes in year ranges are fine.
- Raw downloads go to
  `/private/tmp/claude-501/-Users-andrey--paradev-worktrees-deepcities-5f7b6710-everything-from-here-current-b8db62f6/7a116976-676c-45d3-a727-63149166d721/scratchpad/oost2-$SLICE/`.
- Web: BrowserOS neo browser (load `mcp__browseros-neo__*` via ToolSearch, open your own tab,
  keep to one tab at a time) for pages, and **close every tab you opened before you report
  back**; curl with `-H "User-Agent: deep-cities-research/0.1"` for APIs and plain pages.
  Commons: at most 1 request per second, back off on 429.
- Validate: `python3 -B research/oost/scripts/validate.py research/oost/places/r2-$SLICE.yaml`,
  and also every round 1 file you edited, until 0 errors.

## Slices

- `oosterpark`: 101 Banpaal 1624, 102 police dog Albert, 103 Hommage aan Nescio,
  105 Justus van Maurik bench, 106 Surinamemonument, 107 Muziek en Vreugde, 108 Geloof, Hoop
  en Liefde, 120 Oute Waal wall, 122 "Domweg gelukkig, in de Dapperstraat", 123 Karel Appel
  Was Hier, 137 Oosterbegraafplaats under the park.
  Merges (in `oosterpark.yaml`): 104 Tachtigers monument into "Witsenhuis"; 137 the
  Oosterbegraafplaats under the park into "Oosterpark and its music dome" (a paragraph and
  a Look for line for the marker). Slight park art (e.g. 105) may also become Look for lines
  in "Oosterpark and its music dome".
- `transvaal`: 109 De Vrijheid van de Gedachte, 114 Kantoorgangers, 129 "Daarom moet ik
  wenen", 131 Het Buikschot, 152 If Walls Could Speak, 156 "Morgen komt alles goed".
  Merges (in `indische.yaml`): 130 Tugelaweg text monument and 133 Eli van Tijn memorial into
  "Jewish memorials of the Transvaalbuurt" (130 may stand alone if it is big enough; decide);
  154 Airhead into "Monument against apartheid and racism, Krugerplein".
- `indische`: 110 Rotsvast, 111 Fata Morgana, 127 Aart Roos mural and Studio/K,
  128 Aart Roos brick relief, 153 The London Police wall, 155 Gaudí mosaic wall,
  157 Harck. No merges (don't edit round 1 files).
- `havens`: 113 Wokkel, 117 Vrouwe Fortuna, 118 Katsenarie, 119 Java-eiland transformer
  houses, 124 Stenen gedicht, 132 Keesje Brijde's cross, 148 The Whale, 149 Borneo
  self-build houses, 150 Java-eiland canals and bridges, 151 Barcelonaplein ring.
  Merges (in `havens.yaml`): 140 Gyroscoop and the Veemarkt paving into "Museum Perron Oost".
- `ijburg`: 141 Enneüs Heerma bridge, 142 Nesciobrug, 143 Waterbuurt West floating homes,
  144 Vrijburcht and its fish wall, 145 Nautilus, 146 skatepark Zeeburgereiland,
  147 RI-Oost silos (check whether Rialto Silo opened in November 2026). No merges.
- `south`: 112 Les Grandes Formes, 115 Wibaut statue and the lost Wibauthuis, 116
  Beursmannetje, 121 Krop's 43 gable stones, 134 firefighters' memorial, 136 Rembrandt's
  Omval and the Rembrandttoren, 138 Amstelglorie.
  Merges: 125 Wibautstraat metro station as a newspaper into "Wibautstraat, the newspaper
  street" (`weesperzijde.yaml`); 139 Volten's cubes and Bella Vistapark into the Spaklerweg
  water tower place (`weesperzijde.yaml`; find it by monument 526948, or if 526948 is in another
  file, write 139 as its own place); 126 Alma murals into "Amstelstation" (`frankendael.yaml`);
  135 Brink memorials into "Betondorp and the Brink" (`betondorp.yaml`).
  115 could also merge into the newspaper street place if too slight; decide.

Finish with a short report: new places written, merges done, ranks, gone items, items left
out and why, approximate pins, places without photos, and anything that needs a decision.
