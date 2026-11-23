# Oost coverage

Which of the eight West-standard sweeps have been done for Amsterdam-Oost, per gebied. Updated 2026-11-23 after scout round 4 (SCOUT-4.md).

Status: **done** (the sources listed were gone through for the whole gebied), **partial** (some sources missing or only reached through search), **not done**.

## By sweep and gebied

| Sweep | Oud-Oost | Indische Buurt, Oostelijk Havengebied | Watergraafsmeer | IJburg, Zeeburgereiland |
|---|---|---|---|---|
| 1 Monuments | done (rounds 1 and 2) | done (rounds 1 and 2) | done (rounds 1 and 2) | done (rounds 1 and 2) |
| 2 Public art | done (round 2) | done (round 2) | done (round 2) | done (round 2) |
| 3 War and memory | done (2026-11-23) | done (2026-11-23) | done (2026-11-23) | done (2026-11-23) |
| 4 Hidden history | done (round 4, 2026-11-23) | done (round 4, 2026-11-23) | done (round 4, 2026-11-23) | done (rounds 3 and 4, 2026-11-23) |
| 5 Behind the gate | done (2026-11-23) | done (2026-11-23) | done (2026-11-23) | done (2026-11-23) |
| 6 Modern and contested | done (2026-11-23) | done (2026-11-23) | done (2026-11-23) | done (2026-11-23) |
| 7 Curiosities, green, odd museums | done (2026-11-23) | done (2026-11-23) | done (round 4, 2026-11-23; gap named below) | done (2026-11-23) |
| 8 Loops | not done | not done | not done | not done |

## Sources per sweep

| Sweep | Round, date | Sources checked | Gaps |
|---|---|---|---|
| 1 Monuments | rounds 1 and 2 (SCOUT.md, SCOUT-2.md) | as listed in SCOUT.md, SCOUT-2.md and the slice files in `slices/` (monument registers and nl.wikipedia) | not re-checked in round 3 |
| 2 Public art | round 2 (SCOUT-2.md) | buitenkunstamsterdam.nl (249 works in Oost), maps.amsterdam.nl wandkunst (34 works), nl.wikipedia sculpture articles | Leeuwen van Zeeburg not covered (now item 240) |
| 3 War and memory | round 3, 2026-11-23 | 4en5mei.nl monument database (all 33 records in Oost, detail pages read), OSM `historic=memorial` and `memorial=*`, nl.wikipedia war and monument articles, tracesofwar, NH Nieuws | stolpersteine and private plaques not listed one by one (by design) |
| 4 Hidden history | round 3, 2026-11-23 | nl.wikipedia Categorie:Amsterdam-Oost and subcategories (821 articles), OSM `historic=*`, Museum Perron Oost 2014 booklet, web search in Dutch and English | closed in round 4: see the row below |
| 4 Hidden history | round 4, 2026-11-23 | Geheugen van Oost, the whole archive through its open Zotonic JSON API (`/api/model/search/get/query?cat=article`, `/api/model/rsc/get/<id>`): all 7,527 articles (6,053 stories, 859 clippings, 615 other pages) downloaded, every title and opening read, about 330 read in full; Ons Amsterdam "Langs de gulden Middenweg" (2004); frankwandelt.nl and lexandthecity.nl walks (blind-recall leads) | the archive is memory, not fact-checked: single-source claims carry check: Facts in SCOUT-4.md (Ringdijk 5, the 1672 wiel, the synagogue name); one 2026 story ("De knik van Nescio") is AI fiction by its author's note and was not used |
| 5 Behind the gate | round 3, 2026-11-23 | Arcam Cold War shelter route (Kees van Leeuwen PDF), OSM `military=*` and `building=bunker`, 4en5mei (courtyard memorials), planning documents for Zeeburgereiland, web search for hofjes and open inner gardens | no hofjes found in Oost; WUR "Oases in de Stad" report on green initiatives not read |
| 6 Modern and contested | round 3, 2026-11-23 | nl.wikipedia architecture and building articles in the category crawl, Arcam, Museum Perron Oost (squats in the docklands), web search on squats, renewal and renamings | Arcam architecture map not gone through building by building. Round 4: gebouwdin.amsterdam.nl's full list of 899 Oost projects (1988–2025) read by name and architect, about 15 read in full (gave 311 and 319). Still open: how much post-1965 architecture the map wants (a user decision, not a source gap) |
| 7 Curiosities, green, odd museums | round 3, 2026-11-23 | OSM `tourism=museum`, `attraction`, `viewpoint` and `landuse=allotments`, iamsterdam "hidden gems" pages for Oost, Atlas Obscura (no Oost entries beyond places already on the map), nl.wikipedia, web search | round 4: Atlas Obscura's full Amsterdam list gone through in the browser (only Mark Bischof's studio new, dropped). Watergraafsmeer allotments: Hof van Eden now has a source (GvO /page/94574: 42 gardens laid out in 2001 for elderly gardeners moved off the Ringdijk, on the old AV '23 cinder track); too slight for a place. Named gap: Amstelhof has no source in GvO or elsewhere; the WUR "Oases in de Stad" report was not read |
| 8 Loops | not done | none | no walking or cycling loops for Oost yet |

## Notes

- Zuid and Centrum were left out entirely; every round 3 candidate was point-checked as being in borough Oost with `scripts/areas.py`.
- IJburg and Zeeburgereiland are new land, so sweeps 3 to 5 yield little there; "done" means the sources were checked, not that much was found.
- Round 3 checked candidates against the live map (853 places, 166 in Oost) read-only, and against `places/*.yaml`.
- Round 3 drafted and imported 2026-11-23: 19 new places, 16 places extended (BRIEF-3.md, places/r3-*.yaml). Oost has 185 places.
- Sweep 7, Watergraafsmeer: the allotment parks Klein Dantzig and Nieuwe Levenskracht are now told in "Ringdijk and the Watergraafsmeer polder"; Hof van Eden and Amstelhof have no sources yet.
- Still open for Oost after round 3: a manual pass through Geheugen van Oost (sweep 4), the loops (sweep 8) and the blind quality check against West. Round 4 closed the first (below).

## Round 4 (2026-11-23)

- Scouted (SCOUT-4.md): 34 candidates (301–334), 21 new places and 13 merges. Every pin was point-checked to borough Oost with `scripts/areas.py`. Checked against the live map (921 places, 185 in Oost) read-only, `places/*.yaml` and the dropped lists of SCOUT.md to SCOUT-3.md.
- Sweep 4 hidden history is now done in all four gebieden, through the whole Geheugen van Oost archive.
- The blind recall's 15 misses are all resolved: 6 new (301, 304, 311, 319, 320, 321), 6 merges (322–326, 328), 1 already on the map (Het Witte Dijkhuis), 2 dropped with a reason (Mark Bischof's studio, the Amsterdam 750 flag). The table is in SCOUT-4.md.
- Thin kinds swept: writers' houses (301 Rubinstein, 302 Minco), art spaces (304, 320), one-off curiosities (303, 305, 308–310, 313, 314, 317), recent IJburg and Zeeburgereiland landmarks (319–321).

### Test 2: saturation

New non-merge candidates of round 4. The accepted count depends on the user's picks.

| Gebied | New | Ranks | Share | Verdict |
|---|---|---|---|---|
| Oud-Oost | 6 (301–306) | Nice 3 (301, 302, 303), Okay 3 | 8% of 75 | passes on share (under 10%); three Nice, so the strict reading is not met |
| Indische Buurt, Oostelijk Havengebied | 4 (307–310) | Nice 1 (307), Okay 3 | 8% of 52 | passes on count and share; one Nice |
| Watergraafsmeer | 7 (311–317) | Nice 3 (311, 312, 316), Okay 4 | 17% of 42 | **not saturated**: over 5 and over 10% |
| IJburg, Zeeburgereiland | 4 (318–321) | Nice 1 (318), Okay 3 | 25% of 16 | passes on count only; the base is small and much of the land is still being built |

No Amazing in any gebied. Most of the Nice finds came from one newly used source, Geheugen van Oost, not from a kind of place that had been missed. The Watergraafsmeer is the exception. Its south (Overamstel, Amstel Business Park, the sports parks) and the Science Park edge are thin on the map, and the GvO pass found 7 there. A short targeted round on the Watergraafsmeer would settle it.

### Test 4: 500 m grid

**Method:**
- A 500 m grid over borough Oost: rows A–O from 52.3827 N southwards, columns from 4.8952 E eastwards. Each cell is 0.004492 deg lat by 0.007362 deg lng.
- Each cell was sampled at 64 points against the borough polygon and OSM water and land use. "Walkable land" means at least 20% of the cell is land inside Oost: 114 cells.
- The new islands without OSM land use (Centrumeiland, Strandeiland, Buiteneiland) were checked by hand and count as land.
- Script: scratchpad `oost4/bin/grid.py` (not kept in the repo).

**Cells with a live place pin:**

| Gebied | Cells with a pin | Walkable cells |
|---|---|---|
| Oud-Oost | 11 | 11 |
| Indische Buurt, Oostelijk Havengebied | 15 | 17 |
| Watergraafsmeer | 22 | 43 |
| IJburg, Zeeburgereiland | 10 | 43 |

**Round 4 candidates would fill 9 empty cells:**

| Cell | Candidate |
|---|---|
| A9 | 318 Oranjesluizen |
| B10 | 321 Vondice |
| C9 | 320 Baggerbeest |
| F7 | 307 Fré Cohen plaques |
| F9 | 312 the wiel and the pull ferry |
| H8 | 314 the urinals |
| H16 | 319 De Witte Kaap |
| I5 | 315 Park Darwin |
| K6 | 316 Cinetone |

Every other empty cell has a reason below.

| Gebied | Empty cells | Reason |
|---|---|---|
| Indische Buurt, Oostelijk Havengebied | B3 | mostly IJ water; the land is the Piet Heinkade by the Muziekgebouw and Bimhuis (A-list, parked) |
| Indische Buurt, Oostelijk Havengebied | E9 | Westelijke Merwedekanaaldijk strip with the campsite and a picnic lawn; nothing found; Gemeenlandshuis and the Flevopark places are pinned next door |
| Watergraafsmeer | G9 | Science Park campus and Spark Village; Anna's Tuin & Ruigte and Anna Hoeve are pinned just over the line in G8 |
| Watergraafsmeer | G10 | A10 embankment and De Omloop allotments; nothing found |
| Watergraafsmeer | H5 | south Park Frankendael and the Prins Bernhardpark; told in the Frankendael places pinned in G5 and G6 |
| Watergraafsmeer | H9 | Nieuwe Levenskracht and Hof van Eden allotments and the Ajaxpad pumping station; Nieuwe Levenskracht is told in "Ringdijk and the Watergraafsmeer polder", Hof van Eden is too slight (sweep 7 row above) |
| Watergraafsmeer | I9 | Sportpark Voorland; the BPC memorial there is part of "Football clubs' war memorials, Middenmeer" (I8) |
| Watergraafsmeer | J5 | Sportpark Drieburg and the Wenckebachweg; Bajeskwartier (K5) and the Heilige Familiekerk (J6) are next door |
| Watergraafsmeer | K3, K4 | Amstel Business Park offices and new Amstelkwartier housing; HAUT (J4) and Bajeskwartier (K5) cover the new building; the Kauwgomballenfabriek events venue is a lead not checked (venue) |
| Watergraafsmeer | L1, M1 | the east bank of the Amstel at Over-Amstel; the Amstelpark across the river is in Zuid |
| Watergraafsmeer | L2, L3 | Amstelglorie allotments; told in "Tuinpark Amstelglorie and the Wolkerstuin" (K2) |
| Watergraafsmeer | M2, M3 | Sportpark Overamstel and the mounted police stables (not public); nothing found |
| Watergraafsmeer | N2, N3 | Ouderkerkerdijk meadows at the borough's southern tip; open polder, nothing found |
| IJburg, Zeeburgereiland | B9 | Sluisbuurt building site, towers going up; Baggerbeest (320, C9) is its cultural pin; revisit when built |
| IJburg, Zeeburgereiland | D11 | IJburglaan and A10 junction, police station, petrol station, Heat Source Zeeburg building site; De Wokkel is pinned in E11 |
| IJburg, Zeeburgereiland | D16, D17, D18 | Vogeleiland, the breakwater and the IJmeer edge of Centrumeiland; shoreline with no public sight found |
| IJburg, Zeeburgereiland | E13 | Steigereiland-Noord housing and the Proefeilandpark; Waterbuurt West, Vrijburcht and Sluishuis (E12) and Space to Take Place (E14) are next door |
| IJburg, Zeeburgereiland | E16–E19, F17–F20, G16–G19 | Strandeiland and Buiteneiland, still being built (OSM streets mostly "proposed"); there is little yet beyond the De Basket and IJtopia community centres, Zonnepark Strandeiland and the new Tagorepark; revisit when the islands are finished |
| IJburg, Zeeburgereiland | F10 | Ringvaart, A10 and the Nesciobrug ramp; the Nesciobrug is pinned in F11 |
| IJburg, Zeeburgereiland | F14 | Haveneiland housing and the Ed Pelsterpark; the Nijlpaard and the Floating Poetry Room are pinned in F13 |
| IJburg, Zeeburgereiland | G12, G13, G14, H13, H14, I14, I15 | Diemerpark and the Rieteiland; covered by "Diemerpark and De Ontmoeting" (F12) |
| IJburg, Zeeburgereiland | H15, I16 | Haveneiland-Oost and Rieteiland-Oost housing; De Warren (H17) and Nautilus (G15) are close by; the Diemerdammersluis and a boundary stone in I16 are small leads, not checked |

If all of round 4 is taken, the pinned cells become: Oud-Oost 11 of 11, Indische Buurt 15 of 17, Watergraafsmeer 27 of 43, IJburg and Zeeburgereiland 14 of 43. The unpinned cells are sports parks, allotments, motorway edges, open polder, the Diemerpark (one place covers it) and islands still being built.

### Still open

- **Watergraafsmeer:** test 2 is not met. A short targeted round on Overamstel, the Amstel Business Park and the Science Park edge, with a re-read of the GvO stories geotagged there, would settle it.
- **IJburg, Zeeburgereiland:** revisit Strandeiland, Buiteneiland and the Sluisbuurt when built (about 2028–2030).
- **Sweep 8:** the loops are not done.
- **Quality and recall checks:** the blind quality check against West, and a re-run of the blind recall after the user's picks are drafted.
- **Site checks named in SCOUT-4.md:** 303, 307, 310, 312, 314, 316, 320, 326.

## Round 5: Watergraafsmeer saturation (2026-11-23)

A short targeted round on the Watergraafsmeer only (SCOUT-5.md, items 401–408): OSM for the whole gebied (429 features), nl.wikipedia for every article they point to plus the gebied's street, bridge, sports-park and neighbourhood articles, Delpher, Commons, Geheugen van Oost (to confirm only) and local news by search. Checked against the live map (929 places, 42 in the Watergraafsmeer) read-only, `places/*.yaml` including the round 4 drafts, and SCOUT.md to SCOUT-4.md. Every pin is in borough Oost.

- **Yield:** 5 new candidates (401 Kruislaan flood doors, Nice; 402 Science Park observatory, 403 Leeuwenburg, 404 the thermometer streets of De Wetbuurt, 405 Kijker, all Okay) and 3 merges (406–408). That is 5 of about 48 places once round 4 is in (10%), or 4 (8%) if 405 or 402 becomes a line in an existing place, as the scout suggests.
- **Test 2 verdict: saturated, with one caveat.** The count and the share are at or under the thresholds and four of five finds are Okay. One Nice find (401) means the strict reading ("none above Okay") is not met, as for Oud-Oost in round 4. It came from a kind of place (Cold War waterworks), not from an unread source, and a search for more of that kind in the gebied found only the parts named in the same 1961 reports (the Molenwetering culvert shutter and a small dike by the Molukkenstraat). Another round here would not pay off.
- **WUR "Oases in de Stad":** the original PDF is gone (HTTP 410); its summary in WUR report 344 "Groei versus groen" (2018, edepot.wur.nl/443008) shows it studied only the Indische Buurt and the Oosterparkbuurt. Nothing for the Watergraafsmeer; the gap is closed.
- **Amstelhof:** still no source anywhere (web, GvO API search, OSM). The blank stays, with that reason.
- **Grid (test 4):** 402 would fill G9 and 405 would fill H5. Cells K3/K4: the Kauwgomballenfabriek lead was checked (offices and an event venue since 2008, no story) and dropped. J5: Sportpark Drieburg checked, nothing (404 is pinned next door in J4). The other empty cells keep their reasons above.
- **Still open for the Watergraafsmeer:** the site checks named in SCOUT-5.md (401, 403, 404, 405, 406), the loops (sweep 8), and the blind quality check.

- Rounds 4 and 5 drafted and imported 2026-11-23: 20 new places, 21 places extended (BRIEF-4.md, BRIEF-5.md, places/r4-*.yaml, r5-meer.yaml). Oost has 205 places.
- Blind recall (fresh agent, blind-recall-2026-11-23.md): 66/80 at first (83%); all misses resolved in round 4 (added, merged, or dropped with a reason).
- **Verdict (coordinator, 2026-11-23): Oost is complete for research** (tests 1, 3 and 4 pass; test 2 passes on the under-10% reading, the last rounds with no Amazing). Remaining: sweep 8 loops, the blind quality check against West, then maintenance.
