# Oost coverage

Which of the eight West-standard sweeps have been done for Amsterdam-Oost, per gebied. Updated 2026-11-23 after scout round 3 (SCOUT-3.md).

Status: **done** (the sources listed were gone through for the whole gebied), **partial** (some sources missing or only reached through search), **not done**.

## By sweep and gebied

| Sweep | Oud-Oost | Indische Buurt, Oostelijk Havengebied | Watergraafsmeer | IJburg, Zeeburgereiland |
|---|---|---|---|---|
| 1 Monuments | done (rounds 1 and 2) | done (rounds 1 and 2) | done (rounds 1 and 2) | done (rounds 1 and 2) |
| 2 Public art | done (round 2) | done (round 2) | done (round 2) | done (round 2) |
| 3 War and memory | done (2026-11-23) | done (2026-11-23) | done (2026-11-23) | done (2026-11-23) |
| 4 Hidden history | partial (2026-11-23) | partial (2026-11-23) | partial (2026-11-23) | done (2026-11-23) |
| 5 Behind the gate | done (2026-11-23) | done (2026-11-23) | done (2026-11-23) | done (2026-11-23) |
| 6 Modern and contested | done (2026-11-23) | done (2026-11-23) | done (2026-11-23) | done (2026-11-23) |
| 7 Curiosities, green, odd museums | done (2026-11-23) | done (2026-11-23) | partial (2026-11-23) | done (2026-11-23) |
| 8 Loops | not done | not done | not done | not done |

## Sources per sweep

| Sweep | Round, date | Sources checked | Gaps |
|---|---|---|---|
| 1 Monuments | rounds 1 and 2 (SCOUT.md, SCOUT-2.md) | as listed in SCOUT.md, SCOUT-2.md and the slice files in `slices/` (monument registers and nl.wikipedia) | not re-checked in round 3 |
| 2 Public art | round 2 (SCOUT-2.md) | buitenkunstamsterdam.nl (249 works in Oost), maps.amsterdam.nl wandkunst (34 works), nl.wikipedia sculpture articles | Leeuwen van Zeeburg not covered (now item 240) |
| 3 War and memory | round 3, 2026-11-23 | 4en5mei.nl monument database (all 33 records in Oost, detail pages read), OSM `historic=memorial` and `memorial=*`, nl.wikipedia war and monument articles, tracesofwar, NH Nieuws | stolpersteine and private plaques not listed one by one (by design) |
| 4 Hidden history | round 3, 2026-11-23 | nl.wikipedia Categorie:Amsterdam-Oost and subcategories (821 articles), OSM `historic=*`, Museum Perron Oost 2014 booklet, web search in Dutch and English | Geheugen van Oost (geheugenvanoost.nl): its site search returns nothing to a script or browser, so only reached through web search hits; worth a manual pass for Oud-Oost, the Indische Buurt and the Watergraafsmeer |
| 5 Behind the gate | round 3, 2026-11-23 | Arcam Cold War shelter route (Kees van Leeuwen PDF), OSM `military=*` and `building=bunker`, 4en5mei (courtyard memorials), planning documents for Zeeburgereiland, web search for hofjes and open inner gardens | no hofjes found in Oost; WUR "Oases in de Stad" report on green initiatives not read |
| 6 Modern and contested | round 3, 2026-11-23 | nl.wikipedia architecture and building articles in the category crawl, Arcam, Museum Perron Oost (squats in the docklands), web search on squats, renewal and renamings | Arcam architecture map not gone through building by building; no full list of post-1965 buildings attempted (needs a decision on how much modern architecture the map wants) |
| 7 Curiosities, green, odd museums | round 3, 2026-11-23 | OSM `tourism=museum`, `attraction`, `viewpoint` and `landuse=allotments`, iamsterdam "hidden gems" pages for Oost, Atlas Obscura (no Oost entries beyond places already on the map), nl.wikipedia, web search | allotment parks and school gardens of the Watergraafsmeer listed but their histories not researched |
| 8 Loops | not done | none | no walking or cycling loops for Oost yet |

## Notes

- Zuid and Centrum were left out entirely; every round 3 candidate was point-checked as being in borough Oost with `scripts/areas.py`.
- IJburg and Zeeburgereiland are new land, so sweeps 3 to 5 yield little there; "done" means the sources were checked, not that much was found.
- Round 3 checked candidates against the live map (853 places, 166 in Oost) read-only, and against `places/*.yaml`.
