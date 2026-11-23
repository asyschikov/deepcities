# Noord coverage

Which of the eight West-standard sweeps have been done for Amsterdam-Noord, per gebied. Updated 2026-11-23 after scout round B (SCOUT-3.md).

Status: **done** (the sources listed were gone through for the whole gebied), **partial** (some sources missing or only reached through search), **not done**.

## By sweep and gebied

| Sweep | Oud-Noord | Noord-West | Noord-Oost (with the Waterland villages) |
|---|---|---|---|
| 1 Monuments | done (round 1, 2026-11-22) | done (round 1, 2026-11-22) | done (round 1, 2026-11-22) |
| 2 Public art and walls | done (2026-11-23) | done (2026-11-23) | done (2026-11-23) |
| 3 War and memory | done (2026-11-23) | done (2026-11-23) | done (2026-11-23) |
| 4 Hidden history | done (2026-11-23) | done (2026-11-23) | partial (2026-11-23) |
| 5 Behind the gate | done (2026-11-23) | done (2026-11-23) | done (2026-11-23) |
| 6 Modern and contested | done (2026-11-23) | partial (2026-11-23) | partial (2026-11-23) |
| 7 Curiosities, green, odd museums | partial (2026-11-23) | partial (2026-11-23) | partial (2026-11-23) |
| 8 Loops | not done | not done | not done |

Round 1 (SCOUT.md) ran a general scout that touched sweeps 4, 6 and 7; round B (SCOUT-3.md) then went through the named sources for sweeps 4 to 7 gebied by gebied. "Partial" is explained in the sources table.

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
