# Research brief: Deep Amsterdam, Noord (one slice per agent)

Same rules as `research/west/BRIEF.md` (draft format, bilingual rule, photo rules, tone),
with the changes in `research/nieuw-west/BRIEF.md` (rank, status, exact pins, no em dashes).
Read both fully, and `research/weesp/BRIEF.md` for the dense-ensemble rule. This file only
lists what is different for Noord.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/documents-b8db62f6`.
Other agents work in this checkout at the same time: create and edit **only your own
files** (`research/noord/places/$SLICE.yaml` and `research/noord/notes/$SLICE.md`).
Never write to the live site, never touch app code, never commit.

## Noord specifics

- Paths: `research/noord/` (map.yaml, places, notes, slices, scripts). Validate with
  `python3 -B research/noord/scripts/validate.py research/noord/places/$SLICE.yaml`.
- Style models: `research/weesp/places/*.yaml` (ensembles) and `research/zuidoost/places/*.yaml`.
- **Monuments**: `slices/$SLICE.json` lists every listed monument in your slice (city register
  `text` for municipal ones; `rce_text` and `rce_function` from the national register for
  national ones; `complex` links parts of one complex). **Every record must end up in exactly
  one place.** Standouts (churches, schools, the NDSM halls, mills, sluices, villages with a
  story, anything with a real story) get their own place. Merge complexes (church + parsonage,
  a garden village's blocks) into one place. **Plain listed houses go into street ensembles**
  exactly as in the Weesp brief: rank `Okay`, all monument numbers in `monument_number`
  (max 200 characters; split by stretch of street if needed), pinned on the most
  characteristic house (say which in the body), body tells the street's story and ends with
  a "Look for:" list of the 5–10 best fronts by house number. Records with no monument
  number (in procedure): mention them in the place, `heritage_status` as fits.
- **Scouted items**: numbers below are from the user's shortlist; `SCOUT.md` numbers in
  brackets have the hook, lead source and caveats. Verify everything; the scout list is a
  lead, not a source. Some scout items are also monuments (Asterdorp gatehouse, Disteldorp,
  A-Lab, Krijtmolen d'Admiraal, Ransdorp tower): one place, using both.
- **Food and drink: the Noord exception.** The items listed below were approved by the user
  as iconic local places that are part of Noord's fabric, almost cultural establishments.
  Write them as such: the place's story and role in the neighbourhood first, the menu barely.
  Never add other food or drink places.
- **Gone things: high bar** (the user's rule): a gone thing gets a place only if something related is there today, the current state gives context, or it had a lasting impact. Otherwise leave it out or give it one sentence in a nearby place.
- Status: check the latest news for every item. Gone: `(gone)` in the title and
  `attributes.status: Gone`. Planned demolitions, moves and closures: say plainly.
- Sensitive history (Asterdorp and the "problem families", the Jewish ghetto and deportations,
  the 1943 bombing, executions on the Volewijck): factual, neither sensational nor evasive.
- Never use em dashes (the long dash) anywhere. En dashes in year ranges are fine.
- Raw downloads go to
  `/private/tmp/claude-501/-Users-andrey--paradev-worktrees-deepcities-5f7b6710-everything-from-here-current-b8db62f6/7a116976-676c-45d3-a727-63149166d721/scratchpad/noord-$SLICE/`.
- Web: BrowserOS neo browser (load `mcp__browseros-neo__*` via ToolSearch, open your own tab)
  for pages, and **close every tab you opened before you report back**; curl with
  `-H "User-Agent: deep-cities-research/0.1"` for APIs and plain pages. Commons: at most
  1 request per second, back off on 429.

## Slices

- `volewijck` (20 monuments: Volewijck and Overhoeks, incl. Shell lab, Shell canteen, ferry
  house, Tolhuis café 1859, sluice house, Sint Rita complex, Disteldorp, Asterdorp gatehouse)
  plus 1 Asterdorp gatehouse (scout 1), 2 Volewijck gallows field (2), 3 Mosveld floodlights
  (3), 4 Fokker bombing 1943 with the plaques (4, 5), 5 Tolhuistuin (6), 7 Floradorp (9),
  20 parakeet monument (25), 25 Players and Supporters (35), 36 Café Modern (45).
- `ndsm` (7 monuments: NDSM halls, slipways, crane, afbramerij, Papaverschool) plus
  11 submarine B-80, gone (14), 13 Schoonschip (16), 14 Kraanspoor (17), 15 Faralda Crane
  Hotel (18), 21 Kobra's Anne Frank (26), 22 NDSM Giants (28), 23 "Niets / iets" neon (29),
  26 container arch (31), 32 De Ceuvel (42), 34 Pllek (47), 35 Hotel de Goudfazant (46),
  38 Noorderlicht (thin list), 40 Skatecafé (thin list; user: "quite unique").
- `tuindorpen` (43 monuments: Vogelbuurt / Vogeldorp, Tuindorp Oostzaan, Oostzanerwerf,
  Kadoelen, Buikslotermeer, Banne Buiksloot incl. d'Admiraal and the Buiksloterkerk) plus
  6 Sixhaven and the ghost metro station (7), 8 Keien monument (10), 9 Museumwoning (11),
  10 Museum Amsterdam Noord (12), 12 IJplein (15), 29 Noorderparkbad (39), 30 Noorder IJplas (40).
- `dijk` (60 monuments: Nieuwendammerdijk and Buiksloterdijk; churches, Café Noord-Holland
  1907, then ensembles) plus 33 Café 't Sluisje (43), 24 Ketjen silos (33), 28 Vliegenbos (38).
- `nieuwendam` (54 monuments: Tuindorp Nieuwendam and the Nieuwendammerkerk; mostly
  ensembles of the garden village).
- `waterland-south` (41 monuments: Durgerdam, Schellingwoude, Ransdorp) plus 18
  Schellingwouderbrug (24), 19 Finse school Durgerdam (21), 31 Kinselmeer and the Durgerdam
  dike (41), 37 De Durgerdam inn since 1664 (thin list), 39 Vuurtoreneiland (44).
- `waterland-north` (17 monuments: Zunderdorp, Holysloot, 't Nopeind, the gouwen) plus
  16 Zunderdorp milk tap (22), 17 Holysloot and the 1916 flood (23), 27 Volgermeerpolder (37).

Already on the map, don't add: anything outside Noord.

Finish with a short report: places written (monuments vs other), ranks, gone items, and
anything that needs a decision.
