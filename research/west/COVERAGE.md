# West coverage

Which of the eight West-standard sweeps have been done for stadsdeel West, per gebied, written retrospectively on 2026-11-24 to calibrate the completeness tests. West was built on 2026-11-20 and 2026-11-21, before the sweeps were written down (2026-11-23, `.claude/skills/c-list-sights/SKILL.md`), so this file records what was actually gone through, not what the standard asks for.

Status: **done** (the sources listed were gone through for the whole gebied), **partial** (some sources missing, only some wijken, or only reached through search), **not done**.

Gebieden (official GGW-gebieden of stadsdeel West, `scripts/areas.py`):

- **Westerpark**: Sloterdijk-West, Spaarndammerbuurt/Zeeheldenbuurt, Houthavens, Centrale Markt, Staatsliedenbuurt, Frederik Hendrikbuurt. 109 live places.
- **Bos en Lommer**: De Kolenkit, Landlust, Erasmuspark. 48 live places.
- **Oud-West, De Baarsjes**: Van Galenbuurt, Geuzenbuurt, Hoofdweg e.o., Chassébuurt, Westindische Buurt (De Baarsjes); Bellamybuurt, Da Costabuurt, Van Lennepbuurt, Overtoomse Sluis, Helmersbuurt, Vondelparkbuurt (Oud-West). 167 live places.

Live map read-only on 2026-11-24: 1,014 places, 324 in West.

## Where the record is

Only round 1 and the Houthavens additions are in git. Rounds 2 and 3 went live but their working files (`BRIEF-extra.md`, `BRIEF-round3.md`, `ROUTES-BRIEF.md`, `notes/scout-*.md`, `places/extra-*.yaml`, `places/r3-*.yaml`) were never committed and are no longer in any checkout. This retrospective is rebuilt from:

- git: `d84591d` (2026-11-21 02:39, round 1, 241 places), `1ef7b09` (2026-11-21 16:05, `research/c-list-loops/`), `a8b2975` (2026-11-22 23:39, Houthavens), later fixes `724a866`, `009efe1`, `898a99a`, `eca0d63` (2026-11-23);
- the creation note in each live place's history (`dc place <id>`), which names the round;
- the coordinator session's transcript and scratchpad of 2026-11-21 (the round 2 and 3 briefs and the three scout shortlists survive there).

So: **84 live West places have no YAML in `research/west/places/`**: the 22 Bos en Lommer monuments (in `scripts/data/bos-en-lommer-monuments.json`), 61 places from rounds 2 and 3, and LAB111 (renamed from "Wilhelmina Gasthuis pathology laboratory"). For those 61 the live site is the only copy of the text and sources.

## Rounds, from git and the live history

| Round | Date (live import) | Places now live | Gebieden | What it was |
|---|---|---|---|---|
| 0 | 2026-11-20 | 22 | Bos en Lommer | every listed monument of Bos en Lommer (city register, Wikidata, RCE); Dutch added in round 1 |
| 1 | 2026-11-21 01:08 (commit `d84591d`) | 240 | all | five monument slices (spaarndammer, staatslieden, vondelpark, oud-west, baarsjes) with 5 to 15 non-monument "Part 2" places each, plus a Bos en Lommer slice of murals and other sights (22 places) |
| 2 | 2026-11-21 02:25 | 17 | all | the coordinator's own scout (two shortlists of about 10, user-picked) on "unusual, debatable, standing out"; `BRIEF-extra.md`, slices extra-a and extra-b; LAB111 and De Hallen reworked |
| 2c | 2026-11-21 14:43 | 2 | Bos en Lommer | user's request: Morgenster (the bronze rubbish heap) and Kesbeke |
| 3 | scouted 2026-11-21 14:40 to 15:53, imported 21:40 | 42 | Westerpark, Oud-West, De Baarsjes | three scouts asked for "the kind of extra variety Bos en Lommer has"; the user took **all** items ("people will vote, we remove trash later"); `BRIEF-round3.md`, slices r3-a to r3-e. Bos en Lommer was not scouted |
| H | 2026-11-22 22:39 (commit `a8b2975`) | 1 | Westerpark | user's request: the Waterplein swimming deck (PVH Campus went to Westpoort) |

Between rounds: ranks set by editorial judgement on 2026-11-21 22:24 and then spread geographically at the user's request; food-and-drink bar raised 2026-11-22 (`f56cece`, places removed); blind-review fixes to West places 2026-11-23 (`009efe1`, De Baarsjes).

## By sweep and gebied

| Sweep | Westerpark | Bos en Lommer | Oud-West, De Baarsjes |
|---|---|---|---|
| 1 Monuments | done (round 1, 2026-11-21) | done (round 0, 2026-11-20) | done (round 1, 2026-11-21) |
| 2 Public art and walls | partial (round 3: Kunstwacht routes only) | partial (round 1: Kunstwacht and Street Art Cities, murals focus) | partial (Oud-West done in round 3 from the Kunstwacht API; De Baarsjes not through Kunstwacht) |
| 3 War and memory | partial (incidental) | partial (incidental) | partial (incidental) |
| 4 Hidden history | partial | partial | partial |
| 5 Behind the gate | partial (shelters only) | partial (shelters only) | partial (shelters and listed hofjes) |
| 6 Modern and contested | partial | partial | partial |
| 7 Curiosities, green, odd museums | partial | partial | partial |
| 8 Loops | done (2026-11-21) | done (2026-11-21) | done (2026-11-21) |

West is the only district with loops, and the only one where sweep 1 was the user's own baseline. Every other sweep was touched by general scouting ("find something unusual") rather than by going through its named sources gebied by gebied.

## Sources per sweep

| Sweep | Round, date | Sources checked | Gaps |
|---|---|---|---|
| 1 Monuments | rounds 0 and 1, 2026-11-20 and 2026-11-21 (`BRIEF.md`, `slices/`, `scripts/prepare.py`) | city monument register (290 records in West on 2026-11-21: Westerpark 110, Bos en Lommer 25, Oud-West/De Baarsjes 155), RCE register pages, Wikidata (gaps checked); merged into places | none: every numbered record is referenced by a live place; one "in procedure" municipal monument (Hoofdweg e.o., no number yet) is not, and should be checked when listed |
| 2 Public art and walls | round 1 (Bos en Lommer slice and slice Part 2s), round 2 (extra-a, extra-b), round 3 (r3-a, r3-c, r3-e), 2026-11-21 | **Bos en Lommer**: Kunstwacht API (`api-v3.kunstwacht.nl`), Street Art Cities zone feed, Commons, De Westkrant, NH Nieuws, Stadscuratorium, all 8 Muren van West walls. **Westerpark**: the three stadsdeel West Kunstwacht route PDFs (routes 1 to 3), OSM `tourism=artwork`, Art@Site marker XML, Stadscuratorium, sculpture-network; city wandkunst dataset (Staatsliedenbuurt slice only). **Oud-West**: Kunstwacht API (100 objects in the bbox), OSM artwork, Culture Trip. **De Baarsjes**: OSM artwork, Art@Site, Stadscuratorium, iamsterdam's Baarsjes walk, nl.wikipedia; r3-a read nl.wikipedia "Lijst van beelden in Amsterdam-West" | The full Kunstwacht dump (1,773 records, fetched 2026-11-21) was used as a lookup, never gone through as a list for Westerpark or De Baarsjes. Matching its 204 West records against the live map now (pin within 60 m, or title named in a place text): Westerpark 52 of 93, Bos en Lommer 21 of 41, Oud-West/De Baarsjes 58 of 70. Of the rest some are folded in (Brettenzone suites in "Brettensuite", Under Heaven 02 gone), but about 50 have no visible decision (e.g. Westerpark: Islanded, Meteorenregen, Polaris, Lief beton, Tegenbeeld, Helpende hand, Noordzeevissen, Danspaar; Bos en Lommer: Waterbuffel, Hordeloopster, Mimicry, Harlekijnsmuts, Bronsplaquette Israel Querido; Oud-West/De Baarsjes: Vriendschapsbanden, Körper in Körper, Stoere Bloemen). The wandkunst register and Street Art Cities were not gone through outside one gebied each |
| 3 War and memory | rounds 1 to 3, 2026-11-21 | incidental only: 4en5mei.nl used for single records (B-17 memorial, Westzaanstraat), joodsamsterdam.nl after Stigter's *Atlas van een bezette stad* (Vondelparkbuurt slice), register texts; about 9 memory places on the map (Monument 1940-1945 Zittende vrouw, Liberty Tree, B-17 crash memorial, War memorial Witte de Withstraat, 4 May memorial Columbusplein, Levensboom, Maria Austria's hiding place, Wester sugar refinery memorial) | the 4en5mei.nl database was never searched for West as a whole; OSM `historic=memorial` not pulled; no Joods Monument address pass; plaques and gedenkstenen not listed (one, Jan Verleun and Gerard Steen in De Boom, left as a "Look for" in round 1) |
| 4 Hidden history | rounds 1 to 3, 2026-11-21 | register texts (the *cultuurhistorische context*), nl.wikipedia street and neighbourhood articles (per slice), NH Nieuws "De verdwenen stad" (Jan Hanzenstraat, Pesthuis), AT5, De Westkrant, Eigen Haard's Kolenkit booklet (2023), amsterdamsloopt (via NH Nieuws, Jan Hanzenstraat), Raad van State rulings, westerparkhistorie and Bellamy sites named in the brief | no pass through archief.amsterdam (beeldbank), amsterdamsloopt.nl itself, Geheugen van West (it covers Bos en Lommer and De Baarsjes too), Ons Amsterdam or the Westkrant archive; nl.wikipedia read per item, not by category; Bos en Lommer's hidden history got only round 1 and round 2 items (Kolenkit renewal, liberty tree, sea-battle map) |
| 5 Behind the gate | rounds 1 to 3, 2026-11-21 | Arcam's route of public Cold War shelters (all three scouts; the Postjeskade shelter is on the map), forten.nl; listed hofjes from the register (Gijsbert Bakker hofje, Lutherhof, P.W. Janssenhofje, Oranjehof, Geuzenhof); OSM `leisure=garden` in Westerpark (Schooltuin Roos area) | no OSM `military`/`bunker`/`man_made` pull; courtyard gardens and block interiors of the 1920s housing not looked for; no search for nursery or allotment villages (see sweep 7) |
| 6 Modern and contested | round 2 (extra-a, extra-b), round 3 (r3-b), 2026-11-21 | named items only: MVRDV (Silodam, Westerpark West), nl.wikipedia (Pontsteiger), Arcam (Han Schuil), Stadscuratorium, NH Nieuws and AT5 (sinking houses, Kolenkit renewal, Jan Hanzenstraat), Raad van State; De Baarsjes scout searched Arcam and news and found no debated new build | no gebouwdin.amsterdam.nl or architectuurgids.nl pass, no AAP / Amsterdamse Nieuwbouwprijs nominee lists, no squat archive (the Staatsliedenbuurt squats sit in round 1 texts and the Kraakliedenbuurt walk) |
| 7 Curiosities, green, odd museums | round 1 Part 2s, rounds 2 and 3, 2026-11-21 | Atlas Obscura (all three scouts: only the Westergasfabriek, already on), iamsterdam (Westerpark and Baarsjes walks, Kas Keerweer, Brediusbad), OSM `craft`, odd museums (Bellamy Buurtmuseum, Banksy Museum, Highlights of Holland), makers with a shop (Kesbeke; Koeckebackers dropped, moved to Westpoort) | no allotment park on the map in all of West (Tuinpark Nut & Genoegen, Tuingroep Sloterdijkermeer and the Stintsetuin unexamined, see grid C3); no pass of the stadsdeel's own tips pages, city farms or champion trees; Bos en Lommer had no round 3 |
| 8 Loops | 2026-11-21 (routes created 03:29, loops through the day; `research/c-list-loops/`, commit `1ef7b09`) | 21 routes on the map, 6 of them loops: Every wall in West, Modern and contested West, Behind the gate, Odd art of West, Schools of the Public Works department, Family loop; plus Muren van West, Remembering West, Kraakliedenbuurt and 12 more | no record that a loop needed a stop and got a new place: the loops were built from round 1 and 2 places. Round 3 came from the user's "more variety" request, not from loop gaps |

## Test 1: sources exhausted

**Not met in any gebied.** Sweep 1 and 8 are done everywhere; sweeps 2 to 7 are partial everywhere. The largest single gap is sweep 2's Kunstwacht list (about 50 West records without a visible decision); then sweep 3 (no 4en5mei pass), sweep 4 (no beeldbank, Geheugen van West or amsterdamsloopt pass), sweep 6 (no gebouwdin or architectuurgids pass) and sweep 7 (allotment parks). Bos en Lommer is thinnest: no round 3, its non-monument places are mostly murals.

## Test 2: saturation

New places per round, by gebied (places live today; places removed later, e.g. by the food-and-drink cleanup, are not counted; ranks are today's, set after the fact and spread across neighbourhoods on purpose):

| Gebied | Round 0/1 | Round 2 (+2c) | Round 3 | Houthavens (2026-11-22) | Live |
|---|---|---|---|---|---|
| Westerpark | 79 (6 Amazing, 35 Nice, 38 Okay) | 10 (1 Amazing, 5 Nice, 4 Okay) | 19 (1 Amazing, 13 Nice, 5 Okay) | 1 Nice | 109 |
| Bos en Lommer | 44 (4 Amazing, 17 Nice, 23 Okay) | 4 (4 Nice) | not scouted | | 48 |
| Oud-West, De Baarsjes | 139 (7 Amazing, 57 Nice, 75 Okay) | 5 (2 Amazing, 3 Nice) | 23 (2 Amazing, 15 Nice, 6 Okay) | | 167 |

Verdict on the last full scout round per gebied:

| Gebied | Last round | New | Ranks | Share | Verdict |
|---|---|---|---|---|---|
| Westerpark | 3 | 19 | Amazing 1 (What will the neighbours say?), Nice 13, Okay 5 | 17% of 109 | **not met** (over 5, over 10%, an Amazing) |
| Bos en Lommer | 2 and 2c (not a full scout: the coordinator's leads and the user's picks) | 4 | Nice 4 | 8% of 48 | under 5 and under 10%, but all Nice; and no full round was ever run, so the test has nothing to measure |
| Oud-West, De Baarsjes | 3 | 23 | Amazing 2 (Windwijzen, Elevating Witte de With), Nice 15, Okay 6 | 14% of 167 | **not met** |

Yield did fall from round 1 (262 places with monuments) to round 2 (19) and then rose in round 3 (42), because round 3 was a deliberately broad "take everything" round. No round was run after it, so West has never shown saturation. Round 3's yield is partly the lowered bar of that round, but its Amazing finds (three of them) came from sources not used before (the Kunstwacht routes and register), which is exactly what test 2 is meant to catch.

## Test 4: 500 m grid

Method: a 500 m grid over stadsdeel West (rows A to J from 52.3994 N southwards, columns 1 to 9 from 4.8353 E eastwards; cell = 0.004492 deg lat x 0.007362 deg lng, the same size as Noord and Nieuw-West). Each cell sampled at 64 points against the West polygon (`scripts/areas.py`) and OSM water and land use (Overpass, 2026-11-24). "Walkable land" = at least 20% of the cell is land inside West: **46 cells** (60 cells touch West). Places: the live map (324 West pins) plus `research/west/places/*.yaml` (no extra pins). Cells counted under the gebied holding most of their sample points. Script: scratchpad `wc/bin/grid.py` (not kept in the repo).

Cells with a West place pin: Westerpark 17 of 20, Bos en Lommer 9 of 10, Oud-West/De Baarsjes 16 of 16; **42 of 46**.

Left out as under 20% West land: A2, A3, A4, A6, A7, A8, B8, C9 (IJ, Houthaven water and the Westpoort edge), D7 (Westerpark's east edge on the Singelgracht, 8 places anyway), H2, H7, I2, I7, J2 (slivers on the Rembrandtpark, Singelgracht and Vondelpark edges).

| Gebied | Empty cell | Reason |
|---|---|---|
| Westerpark | B2 | Teleport and APG offices east of Station Sloterdijk (Sloterdijk-West); covered by "Station Sloterdijk and the Teleport offices", "Kapkar/GTO-B10" and "Train Lodge" just across the borough line (Nieuw-West, 510 to 720 m) and the Oud-Sloterdijk dike houses (615 m) |
| Westerpark | B3 | Sloterdijk I business park (Transformatorweg, Isolatorweg), 90% industrial land use; the area's story (the vanished village of Sloterdijk, the dike) is told at "Petruskerk (Sloterdijk)", "Dike houses of Oud-Sloterdijk" and "Spaarndammerdijk (dike remnant)"; "Kijkende figuur" on the Transformatorweg is in B4 |
| Westerpark | C3 | **no reason found (lead)**: the allotment parks Tuingroep Sloterdijkermeer and Tuinpark Nut & Genoegen, the Stintsetuin and the railway yard. No sweep looked at them, and West has no allotment place at all (Noord, Oost and Nieuw-West each have one or more). Nearest: "Westerpark West" 290 m, "Nemoland (De Groene Hemel)" in C4 |
| Bos en Lommer | F1 | **no reason found (lead)**: Gerbrandypark, Willem Augustinpark and sports pitches between the railway and the A10 at the south end of the Kolenkit. Nothing was swept here beyond the Kunstwacht records for Bos en Lommer; nearest are "Former ULO school, Erik de Roodestraat 18" (418 m), "GAK-gebouw" (423 m) and "Garage West" (Nieuw-West, 401 m). It may well be "post-war park strip, nothing", but that has not been decided |

Result: **2 of 4 empty cells explained, 2 leads** (C3, F1). West passes test 4 on coverage (42 of 46 walkable cells have a place; Oud-West/De Baarsjes every cell) but not on the letter of the test, which asks that every blank be decided.

## Calibration: what this says about the tests

- **Test 4 is calibrated.** West fills 91% of its walkable cells, more than Noord or Nieuw-West, and the only blanks are business parks, an office district and two green strips. The two leads it raises are real gaps, not noise: West has no allotment park on the map, and the Kolenkit's park edge was never looked at. Keep the test as it is.
- **Tests 1 and 2 are not met by West, and that is West's gap, not over-strict thresholds.** West was built by monuments plus three broad scouting rounds in one day, not by going through named sources. The record shows real unread sources (about 50 Kunstwacht records undecided, no 4en5mei, beeldbank, Geheugen van West, gebouwdin or architectuurgids pass) and the last round still found three Amazing places. Calling West "complete" would need one more round in the standard.
- **One threshold looks too strict everywhere:** "none above Okay" in test 2. Only a few gebieden met it in full (Geuzenveld-Slotermeer, Sloterdijk Nieuw-West, De Aker/Sloten/Nieuw-Sloten after round D); Noord, Oost, Osdorp and Slotervaart were judged complete on the "under 5 and under 10%" reading. Consider making that reading the rule, with "no Amazing" in place of "none above Okay".
- **West's quality is not in doubt** (the user lives there and vouches for it, and the blind review fixed only details in its sample). The tests measure completeness, and on completeness West is ahead in density but behind the newer districts in documented source coverage.

## Still open (for a West round in the standard, if wanted)

- Sweep 2: go through every Kunstwacht record in West and decide it (place, merge, "Look for" line or dropped with a reason); the wandkunst register and Street Art Cities for Westerpark and Oud-West/De Baarsjes.
- Sweep 3: 4en5mei.nl and OSM `historic=memorial` for all of West; plaques and gedenkstenen.
- Sweep 4: archief.amsterdam beeldbank, amsterdamsloopt.nl, Geheugen van West (Bos en Lommer, De Baarsjes), nl.wikipedia categories per gebied.
- Sweep 5 and 7: OSM bunker, military and garden features; the allotment parks of Sloterdijk (grid C3); city farms; Bos en Lommer's curiosities (no round 3 there).
- Sweep 6: gebouwdin.amsterdam.nl and architectuurgids.nl for West.
- Grid leads: C3 and F1.
- Then test 2 on that round's yield. The blind recall (test 3) is run separately.
- Housekeeping: the 61 live places from rounds 2 and 3 have no YAML in `research/west/places/`; export them from the live site if they are ever to be re-imported or bulk-edited from files.
