# Nieuw-West coverage

Which of the eight West-standard sweeps have been done for Amsterdam Nieuw-West, per gebied. Created 2026-11-23 after scout round A (SCOUT-2.md).

Status: **done** (the sources listed were gone through for the whole gebied), **partial** (some sources missing or only reached through search), **not done**.

## By sweep and gebied

| Sweep | Geuzenveld-Slotermeer | Osdorp | De Aker/Sloten/Nieuw-Sloten | Slotervaart | Sloterdijk Nieuw-West |
|---|---|---|---|---|---|
| 1 Monuments | done (round 1, 2026-11-21) | done (round 1, 2026-11-21) | done (round 1, 2026-11-21) | done (round 1, 2026-11-21) | done (round 1, 2026-11-21), see notes |
| 2 Public art and walls | done (2026-11-23) | done (2026-11-23) | done (2026-11-23) | done (2026-11-23) | done (2026-11-23) |
| 3 War and memory | done (2026-11-23) | done (2026-11-23) | done (2026-11-23) | done (2026-11-23) | done (2026-11-23) |
| 4 Hidden history | not done | not done | not done | not done | not done |
| 5 Behind the gate | not done | not done | not done | not done | not done |
| 6 Modern and contested | not done | not done | not done | not done | not done |
| 7 Curiosities, green, odd museums | not done | not done | not done | not done | not done |
| 8 Loops | not done | not done | not done | not done | not done |

Round 1 (SCOUT.md, 45 items, 2026-11-21) was a general scout that touched sweeps 2, 3, 4, 6 and 7 without going through their named sources; those cells stay "not done" for sweeps 4 to 7 until a round goes through the sources gebied by gebied.

## Sources per sweep

| Sweep | Round, date | Sources checked | Gaps |
|---|---|---|---|
| 1 Monuments | round 1, 2026-11-21 (SCOUT.md, BRIEF.md, `slices/`) | city monument register and national register (RCE), every record in Nieuw-West, in six slices (geuzenveld, slotermeer, sloterhof, slotervaart, osdorp, sloten: 133 records in 59 groups) | Sloterdijk Nieuw-West has no slice of its own; its few register records were not re-checked this round |
| 2 Public art and walls | round A, 2026-11-23 (SCOUT-2.md, items 101–143) | buitenkunstamsterdam.nl / Kunstwacht API (1,749 works citywide, 331 with coordinates in Nieuw-West plus 76 without, all read; includes the 15 "Kunstroute Osdorp" texts); maps.amsterdam.nl wandkunst (66 in Nieuw-West, all read); Street Art Cities marker feed (28 markers, 23 active); OSM `tourism=artwork` (filtered to the borough); nl.wikipedia "Lijst van beelden in Amsterdam Nieuw-West" (every row) and about 40 single-work articles; Stadscuratorium collection via its API (147 entries, 21 in Nieuw-West, all read) and its Rembo advice and "Stad als canvas" report | most Kunstwacht texts are undated, so many works rest on Commons photos from 2018 to 2022 (listed per item); buitenbeeldinbeeld.nl blocked automated access; SAMA murals not listed piece by piece (SAMA is a place); Van Munster's pond and the Appel glass wall need site checks |
| 3 War and memory | round A, 2026-11-23 (SCOUT-2.md, items 144–154, plus 132 and 139) | 4en5mei.nl monument database (six distance-sorted searches, 121 records, 14 in Nieuw-West, all detail pages read); OSM `historic=memorial`, `memorial=*`, `military=*`, `building=bunker`; nl.wikipedia (memorial and person articles); Kunstwacht records of category "Oorlogsmonument" and "Monument"; Rodi Nieuw-West (4 May 2026 ceremony sites, Open Monumentendag 2026); searches for migrant, colonial, Cold War, disaster and recent-war memorials | Joods Monument not gone through address by address (few pre-war addresses: Sloten village, the Osdorperweg); stolpersteine and private plaques not listed one by one (by design); hmdb and tracesofwar blocked automated access; "Gedenkteken Ohm" and the OSM "Van Heeckeren" plaque unexplained |
| 4 Hidden history | not done | none | leads at the end of SCOUT-2.md |
| 5 Behind the gate | not done | none | lead: Bornhout 8 shelter and archaeology depot (SCOUT-2.md item 139) |
| 6 Modern and contested | not done | none | leads: Plein '40-'45 and Osdorpplein redesigns, Noorderhof, Jacob Geelstraat renewal |
| 7 Curiosities, green, odd museums | not done | none | leads: Tuinen van West bird hides |
| 8 Loops | not done | none | route ideas: Kunstroute Osdorp; Latin America in Nieuw-West (Allende, Chile vencerá, Dwaze Moedersplein) |

## Notes

- Every round A candidate was point-checked as being in borough Nieuw-West with `scripts/areas.py`; Zuid and Centrum were left out entirely.
- Round A checked candidates against the live map (949 places, 101 in Nieuw-West) read-only, against `places/*.yaml` and against round 1 (SCOUT.md).
- Round A scouted 2026-11-23 (SCOUT-2.md): 54 candidates (101–154), 34 possible new places, 16 merges, 3 either way, 1 update to a round 1 item. Nothing drafted yet: the user picks.
- Status updates to round 1 items are in SCOUT-2.md ("Updates to round 1 items"): Senza Parole is leaving for Venray (drop); the Plein '40-'45 redesign that threatens Surround Sound has slipped to 2028.
- Next: draft the picked round A items; then round B for sweeps 4 to 7 per gebied, using the leads in SCOUT-2.md.

- Round A drafted and imported 2026-11-23: 31 new places, 18 places extended (BRIEF-2.md, places/r2-*.yaml). Nieuw-West has 131 places. Dropped: 103 Lex Horn tableaux (no dated evidence), 107 "270 degrees" (story too thin), 110 Eendrachtspark as a place, 119 De Maaltijd (indoors in a supermarket, no recent evidence), 142 Voetbal, Kaagman's "Mini Wereld", Krop's Plesman plaque, Oosterloo's Mondriaan panel (no recent evidence); 125, RISE, The Swarm and Senza Parole (user's call).
- Next: round B (sweeps 4 to 7), then the completeness tests (blind recall, grid).
