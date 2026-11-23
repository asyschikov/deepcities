# Noord coverage

Which of the eight West-standard sweeps have been done for Amsterdam-Noord, per gebied. Updated 2026-11-23 after scout round C (SCOUT-4.md).

Status: **done** (the sources listed were gone through for the whole gebied), **partial** (some sources missing or only reached through search), **not done**.

## By sweep and gebied

| Sweep | Oud-Noord | Noord-West | Noord-Oost (with the Waterland villages) |
|---|---|---|---|
| 1 Monuments | done (round 1, 2026-11-22) | done (round 1, 2026-11-22) | done (round 1, 2026-11-22) |
| 2 Public art and walls | done (2026-11-23) | done (2026-11-23) | done (2026-11-23) |
| 3 War and memory | done (2026-11-23) | done (2026-11-23) | done (2026-11-23) |
| 4 Hidden history | done (2026-11-23) | done (2026-11-23) | done (round C, 2026-11-23) |
| 5 Behind the gate | done (2026-11-23) | done (2026-11-23) | done (2026-11-23) |
| 6 Modern and contested | done (2026-11-23) | done (round C, 2026-11-23) | done (round C, 2026-11-23) |
| 7 Curiosities, green, odd museums | done (round C, 2026-11-23) | done (round C, 2026-11-23) | done (round C, 2026-11-23) |
| 8 Loops | not done | not done | not done |

Round 1 (SCOUT.md) ran a general scout that touched sweeps 4, 6 and 7; round B (SCOUT-3.md) then went through the named sources for sweeps 4 to 7 gebied by gebied; round C (SCOUT-4.md) closed the partial cells and added an edge-of-town green and water sweep after the blind recall. "Partial" is explained in the sources table.

## Sources per sweep

| Sweep | Round, date | Sources checked | Gaps |
|---|---|---|---|
| 1 Monuments | round 1, 2026-11-22 (SCOUT.md, BRIEF.md, `slices/`) | city monument register and national register (RCE), every record in Noord, in seven slices | none known |
| 2 Public art and walls | round A, 2026-11-23 (SCOUT-2.md) | buitenkunstamsterdam.nl / Kunstwacht API (1,749 works citywide, 88 in Noord, all read); maps.amsterdam.nl wandkunst (226 citywide, 16 in Noord, all read); Street Art Cities marker feed (130 markers in Noord, 86 active); OSM `tourism=artwork` (filtered to the borough); nl.wikipedia "Lijst van beelden in Amsterdam-Noord" (every row) | most Kunstwacht texts are undated, so current status of several works is unverified (listed per item); Street Art Cities was used selectively (NDSM's STRAAT collection not listed piece by piece, by design); no Noord-specific art route besides the two Kunstwacht routes (Molenwijk, Oosten van Noord) was found |
| 3 War and memory | round A, 2026-11-23 (SCOUT-2.md) | 4en5mei.nl monument database (three distance-sorted searches, 137 records, 16 in Noord, all detail pages read); OSM `historic=memorial`, `memorial=*`, `military=*`, `building=bunker`; nl.wikipedia (memorial and person articles); Friendly Fire Amsterdam project site; Kunstwacht records of category "Oorlogsmonument" and "Monument" | stolpersteine and private plaques not listed one by one (by design); Joods Monument addresses not gone through street by street; Pieter Roemer's booklet "40-45 in Noord" (2005), the source behind several 4en5mei records, not read |
| 4 Hidden history | round B, 2026-11-23 (SCOUT-3.md, items 201–222) | nl.wikipedia Categorie:Amsterdam-Noord and its 7 subcategories (551 articles; all 236 non-bridge, non-street, non-sculpture articles read at intro level, leads in full); Historisch Centrum Amsterdam-Noord (hcan.nl, all 165 posts listed via its API, relevant ones read); Historisch Archief Tuindorp Oostzaan (topic pages; Noord-West); NH Nieuws "De verdwenen stad" (only Noord episode is Mosveld, on the map); OSM `historic=*` and `abandoned:railway`; fokker-history.com, Rhino Resource Center, Rodi Noord (targeted) | Museum Amsterdam Noord has no online stories index (homepage only); amsterdamsloopt.nl search returns no Noord posts; archief.amsterdam beeldbank, Ons Amsterdam, Parool and AT5 reached only through search; Dagblad van Noord / Noordz not reached; Waterland villages rest mainly on hcan.nl and nl.wikipedia (hence Noord-Oost partial) |
| 5 Behind the gate | round B, 2026-11-23 (SCOUT-3.md, items 223–224) | OSM `military=*`, `building=bunker`, `historic=*` (all Noord features read); TracesOfWar (Adcock station Durgerdam, read in the browser); Arcam / Kees van Leeuwen public-shelter route (no shelter in Noord); hidden courts and gardens via OSM `leisure=garden` and the existing places | no Dutch source for the Adcock hut besides TracesOfWar; Seefliegerhorst Schellingwoude remains are in Oost, not pursued |
| 6 Modern and contested | round B, 2026-11-23 (SCOUT-3.md, items 225–249) | architectuurgids.nl (all 193 post-1965 Amsterdam entries, filtered to Noord); Arcam AAP nominee lists 2021–2026; nl.wikipedia award lists (AAP, BNA Beste Gebouw, Amsterdamse Nieuwbouwprijs, Zuiderkerkprijs); ArchDaily, Dezeen, e-architect and architects' own sites (by search); NH Nieuws and Rodi for squats, renewal fights and disputes | Arcam's architecture map and Noord routes not found online; gebouwdin.amsterdam.nl (JavaScript app) not queried; ArchDaily/Dezeen gone through by search, not by full project lists; Noord-West and Noord-Oost contested stories from news search only (no squat archive for Noord found) |
| 7 Curiosities, green, odd museums | round B, 2026-11-23 (SCOUT-3.md, items 250–258) | OSM `tourism=museum|attraction|viewpoint|gallery`, `landuse=allotments`, named gardens and reserves, `man_made`, odd shops (all Noord features read); iamsterdam (verborgen parels Noord and NDSM, things to do, then and now, nature and active, Landelijk Noord); allotment-park sites (Buitenzorg, Tuinwijck); offshoreradio.info, boomzorg.nl | Atlas Obscura blocked automated access (searches show only STRAAT in Noord); allotment parks De Molen, Kweeklust, Rust en Vreugd, Wijkergouw and Buikslotermeer not researched (De Molen's site dead); the borough's own tips pages, the Noorderparkkamer and Het Twiske not gone through |
| 4 Hidden history (Noord-Oost) | round C, 2026-11-23 (SCOUT-4.md, items 301-304) | Stadsarchief beeldbank through its open API (21 searches: the five villages, Kinselmeer, Uitdammerdijk, Liergouw, five gouwen, Schellingwouderdijk, Buikslotermeerplein, Waterlandplein, Elzenhagen, IJdoornlaan, Nieuwendam-Noord, Buikslotermeerdijk, Kadoelen; about 3,950 captions, long ones read); Ons Amsterdam (own search, about 20 articles); holysloot.nl chronicle (all chapters); pontjeholysloot.nl; MIP Wijk 15 Landelijk Noord; Rodi and NH Nieuws (village searches) | Dagblad van Noord / Noordz not reachable; Waterlands Archief search not machine-readable; Parool and AT5 gave nothing usable; the Durgerdam, Ransdorp, Schellingwoude and Zunderdorp village sites are dead or parked (no other village history site exists online); some Ons Amsterdam articles paywalled |
| 6 Modern and contested (Noord-West, Noord-Oost) | round C, 2026-11-23 (SCOUT-4.md, items 305-310) | gebouwdin.amsterdam.nl JSON API (all 379 Noord projects 1989-2025 listed, about 30 outside Buiksloterham/NDSM read); Arcam architecture guide (all 842 entries via its sitemap, Noord ones picked, 16 read); Gentiaanbuurt lead (gebouwdin, Arcam, Ymere); NH Nieuws, Parool, AT5 for squats, demolitions, renewal; Villa Friekens (nl.wikipedia Kadoelen, NL Times) | gebouwdin has nothing before 1989 (older post-1965 work rests on architectuurgids.nl from round B and Arcam); architectenweb.nl by search only, no project-database pass |
| 7 Curiosities, green, odd museums | round C, 2026-11-23 (SCOUT-4.md, items 311-312) | Atlas Obscura (browser: every page of the Amsterdam and Netherlands lists, filtered by coordinates); allotment parks De Molen, Kweeklust, Rust en Vreugd (archived listing), Wijkergouw, Buikslotermeer (club sites); amsterdam.nl Noord (no tips pages exist any more; "10 groene parels", kinderboerderij layer); iamsterdam Noord pages not used in round B; Noorderparkkamer (architects' and park sites); Het Twiske (point-checked: outside the municipality); OSM shops, crafts, museums, odd tags | Rust en Vreugd's own site has lapsed; no per-church organ check (the churches are on the map) |
| Edge green and water (extra, after blind recall) | round C, 2026-11-23 (SCOUT-4.md, items 313-315) | OSM water, wetland, reserves, bird hides, ferries, piers, viewpoints, A10 underpasses, houseboats, kinderboerderijen (Noord bounding box, point-checked); nl.wikipedia breek, polder and dike articles; Rodi walking columns; Staatsbosbeheer Waterland PDFs; laagholland and hollandroute routes; iamsterdam Landelijk Noord; all seven blind-recall misses resolved (SCOUT-4.md table) | two Rodi walking columns refused the connection; wandelnet not read directly |
| 8 Loops | not done | none | route ideas exist in `notes/*.md` (dike villages, NDSM yard, Buiksloterham), none built |

## Notes

- Every round A candidate was point-checked as being in borough Noord with `scripts/areas.py`; Zuid and Centrum were left out entirely.
- Round A checked candidates against the live map (872 places, 127 in Noord) read-only, and against `places/*.yaml`.
- Leads for round B (hidden history, behind the gate, curiosities) are listed at the end of SCOUT-2.md.

- Round A drafted and imported 2026-11-23: 25 new places, 17 places extended (BRIEF-2.md, places/r2-*.yaml). Noord has 152 places. Left out: 105 Genie Mythology (existence unconfirmed), 121 Verzonken Stad (works building gone by April 2026).
- Round B scouted 2026-11-23 (SCOUT-3.md): 58 candidates (201–258), 24 of them merges; every location point-checked to borough Noord with `scripts/areas.py`; live map read-only (897 places, 152 in Noord). All "for round B" leads in SCOUT-2.md were checked (see SCOUT-3.md).
- Blind recall (quick self-check, 2026-11-23, SCOUT-3.md): 20 of 20 independent picks on the map, in the shortlist or dropped with a reason (100%); 15 of 20 already on the map. Done by the scouting agent itself, not a fresh agent, so a proper blind run is still due.
- Saturation (test 2) not yet met: round B still found Nice and Amazing items in all three gebieden, so another round is due after the user's picks are drafted.
- Next: draft the picked round B items; then loops (sweep 8), the 500 m grid (test 4) and the blind quality check against West.

- Round B drafted and imported 2026-11-23: 24 new places, 27 places extended (BRIEF-3.md, places/r3-*.yaml). Noord has 176 places. Dropped: 203 Kromwijk bow (marked removed July 2026), 221 Poppendam (gone, nothing to see), 245 Breehorn and 246 Startblok (user's call).
- Not yet complete: saturation not met (round B still found Nice and Amazing items in every gebied); sweep 7 partial (five allotment parks, borough tips pages, Atlas Obscura blocked); a true blind recall run is due; loops not done. Leads: Gentiaanbuurt renovation (Ibelings van Tilburg, AAP 2025 nominee).

## Round C (2026-11-23)

- Scouted (SCOUT-4.md): 15 candidates (301-315), 8 new places and 7 merges; every pin point-checked to borough Noord; live map read-only (921 places, 176 in Noord). Blind recall misses (Noord-West 16/20) all resolved: 2 taken up (313 Holysloot ferry, 315 De Buiktuin), 1 already on the map (De Breek is the Schellingwouderbreek), Oranjesluizen in Oost (their "chain ferries" became 314), 3 dropped with a reason (Buiksloterbreek, Landsmeerderdijk houseboats, Landsmeerderveld tunnel).

### Test 2: saturation

New non-merge candidates of round C (accepted count depends on the user's picks):

| Gebied | New | Ranks | Share | Verdict |
|---|---|---|---|---|
| Oud-Noord | 2 | Nice 1 (311), Okay 1 (305) | 2% of 92 | under 5 and under 10%; one Nice, so the strict reading is not met |
| Noord-West | 2 | Nice 1 (306), Okay 1 (307) | 7% of 29 | under 5 and under 10%; one Nice, so the strict reading is not met |
| Noord-Oost | 4 | Nice 3 (301, 308, 313), Okay 1 (314) | 7% of 55 | under 5 and under 10%; three Nice, not met |

Yield dropped from round B (34 new, 1 Amazing, 14 Nice) to 8 new, no Amazing. Every gebied passes on count and share; none passes "none above Okay". The remaining Nice finds are single items from newly used sources, not a missed kind.

### Test 4: 500 m grid

Method: a 500 m grid (rows A-N from 52.4307 N southwards, columns 1-31 from 4.8557 E eastwards; cell = 0.004492 deg lat x 0.007362 deg lng) over borough Noord. Each cell sampled at 64 points against the borough polygon and OSM water and land use; "walkable land" = at least 20% of the cell is land inside Noord (205 cells; cells that are only IJ or lake water are left out). Cells with a live place pin: Oud-Noord 21 of 28, Noord-West 14 of 40, Noord-Oost 32 of 137. Round C candidates would fill E7 (306), G23 (301) and K14 (314). Every other empty cell has a reason below. Script: scratchpad `noordC/bin/grid.py` (not kept in the repo).

| Gebied | Empty cells | Reason |
|---|---|---|
| Oud-Noord | G7, I6 | Buiksloterham industry and building sites (Klaprozenweg, Cabins hotel); the area's places (Cityplot, self-build houses, Republica, timber towers) are pinned in neighbouring cells |
| Oud-Noord | H8 | Florabuurt interior; "Floradorp" pinned next door; Antoniushuis (1953) checked, nothing found |
| Oud-Noord | I10 | east Tuindorp Buiksloot and north Noorderpark; covered by "Noorderklankpark" (Roze Tanker, Gele Pomp, LED Cloud) |
| Oud-Noord | J11 | the body of the Vliegenbos; covered by "W.H. Vliegenbos" and "Tuinpark Buitenzorg" |
| Oud-Noord | K12, K13 | Ketjen chemical works and Damen Shiprepair Oranjewerf: fenced industry, no public access; Ketjen told in "W.H. Vliegenbos" |
| Noord-West | A2, A3, C2 | sand depot and green strip at the Noorder IJplas and the Zaandam border; covered by "Noorder IJplas" |
| Noord-West | B3, B4 | green belt north of Oostzanerwerf on the Twiske border, Meyn offices; NoordOogst nearby; nothing found |
| Noord-West | B5, C4, C5, C6 | Molenwijk; covered by "Molenwijk and its art route" (pin in D5) and "Drijfbeeld"; 310 adds a Look for |
| Noord-West | B7, C7 | Kadoelen and Twiske-Zuid housing of about 1990-2000, Fridsma sports hall; gebouwdin checked, nothing found |
| Noord-West | C8 | De Bongerd allotments and the A10 underpass to the Landsmeerderveld (polder in Landsmeer; tunnel dropped, SCOUT-4) |
| Noord-West | D2, D3, E3 | Cornelis Douwes industrial estate, no public sights (So What? sculpture dropped in round A) |
| Noord-West | D7 | Wilmkebreek polder, covered by "Kadoelen stolp farms" |
| Noord-West | D9, D10 | Sportpark Kadoelen, canoe club and the canal bank; nothing found |
| Noord-West | E6 | Tuindorp Oostzaan sports park and later infill; "Concrete test houses, Castorplein" 450 m |
| Noord-West | E9, E10, F9 | Banne Buiksloot (1960s-1970s); iamsterdam Banne walk read: Rietwijker theatre, mosque, shopping centre, no story; the Banne's sights (mill, De Buiktuin) are in G10 |
| Noord-West | F4 | Damen Shiprepair yard, fenced; told in "Paard van Noord" |
| Noord-West | F6 | Cornelis Douwes new-build (Het Dok, 2022, dropped in round B); Tabula Rasa dropped in round A |
| Noord-West | G8 | Buiksloterbreek and Buiksloterbreekpark: dropped in round C (single walking column; a Look for line is offered) |
| Noord-Oost | B16-B18, B21, C13-C17, C21-C24, D13-D15, D17, D21, D22, D25, D26, E14, E16, E17, E20-E26, F17, F19-F24, G16-G22, G24, H17-H19, H21-H24, I17, I18, I20, I21, J17-J20, K18-K20 | open peat meadow of Landelijk Noord between the villages: private grassland, gouwen and ditches; the stories sit in the villages and farms pinned in neighbouring cells; round C swept the Stadsarchief captions for every gouw, holysloot.nl and Ons Amsterdam; the Goudriaankanaal (301) and Poppendam (dropped, round B) are the only finds out here |
| Noord-Oost | B20, C19, C20, D18-D20, E18, E19, F18 | the Volgermeer (former dump), covered by "Volgermeerpolder" and "De Veenarbeider" |
| Noord-Oost | D27-D29, E27, F25, F26, G25 | Markermeer dike strip towards Uitdam, under reinforcement works; nothing to pin |
| Noord-Oost | K21, K22, L20-L22, M21, M22 | Polder IJdoorn reserve, the Kinsel and the Hoeckelingsdam; covered by "Kinselmeer and the Durgerdam dike" and "Vuurtoreneiland" (battery); Camping De Badhoeve has no story |
| Noord-Oost | H15, H16, I16, J16, K17, L17 | the allotment belt (Buikslotermeer, De Molen, Rust en Vreugd, Wijkergouw, Kweeklust); covered by "Tuinpark Tuinwijck" with merge 312 |
| Noord-Oost | E12, F13, F14 | former sludge fields; covered by "Het Groene Veld (ADM Noord)" and "Observatorium (Marinus Boezem)" |
| Noord-Oost | F11, F12, G14, H13, I15 | Elzenhagen-Noord (2010s), Buikslotermeerpark, sports parks and the 1960s Nieuwendam-Noord flats (Swanenborgh, Parkflat); nothing found (Jeugdland, Buikslotermeerpark, Menselijke Eenheid dropped earlier) |
| Noord-Oost | J14 | Schellingwouderpark edge; covered by "Schellingwouderbreek" (360 m) |
| Noord-Oost | M17 | IJ shore by the Oranjesluizen; the locks are in Oost |

Result: no unexplained blanks. Noord-Oost's many empty cells are open polder, as expected for Waterland.

### Still open

- Test 2 in its strict form (none above Okay): a short round D after the user's picks, if wanted, should go to the sources still not reached (Dagblad van Noord / Noordz archives, Waterlands Archief, architectenweb's project database).
- Test 3: re-run blind recall for Noord-West once round C is drafted.
- Sweep 8 (loops) and test 5 (blind quality check) not done.

- Round C drafted and imported 2026-11-23: 8 new places, 9 places extended (BRIEF-4.md, places/r4-*.yaml). Noord has 184 places.
- Blind recall (fresh agent, 2026-11-23, blind-recall-2026-11-23.md): 53/60 at first (88%; Noord-West 80%); all seven misses resolved in round C (two added, one already on the map, one in Oost, three dropped with a reason).
- **Verdict (coordinator, 2026-11-23): Noord is complete for research** (tests 1, 3 and 4 pass; test 2 passes on the under-10% reading, with round C at 8 new places, none Amazing). Remaining: sweep 8 loops, the blind quality check against West, then maintenance.
