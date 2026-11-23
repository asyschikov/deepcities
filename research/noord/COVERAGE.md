# Noord coverage

Which of the eight West-standard sweeps have been done for Amsterdam-Noord, per gebied. Updated 2026-11-23 after scout round A (SCOUT-2.md).

Status: **done** (the sources listed were gone through for the whole gebied), **partial** (some sources missing or only reached through search), **not done**.

## By sweep and gebied

| Sweep | Oud-Noord | Noord-West | Noord-Oost (with the Waterland villages) |
|---|---|---|---|
| 1 Monuments | done (round 1, 2026-11-22) | done (round 1, 2026-11-22) | done (round 1, 2026-11-22) |
| 2 Public art and walls | done (2026-11-23) | done (2026-11-23) | done (2026-11-23) |
| 3 War and memory | done (2026-11-23) | done (2026-11-23) | done (2026-11-23) |
| 4 Hidden history | not done | not done | not done |
| 5 Behind the gate | not done | not done | not done |
| 6 Modern and contested | not done | not done | not done |
| 7 Curiosities, green, odd museums | not done | not done | not done |
| 8 Loops | not done | not done | not done |

Round 1 (SCOUT.md) also ran a general scout that touched sweeps 4, 6 and 7 (Asterdorp, the gallows field, Volgermeerpolder, NDSM, Schoonschip and others), but not against named sources gebied by gebied, so those sweeps count as not done.

## Sources per sweep

| Sweep | Round, date | Sources checked | Gaps |
|---|---|---|---|
| 1 Monuments | round 1, 2026-11-22 (SCOUT.md, BRIEF.md, `slices/`) | city monument register and national register (RCE), every record in Noord, in seven slices | none known |
| 2 Public art and walls | round A, 2026-11-23 (SCOUT-2.md) | buitenkunstamsterdam.nl / Kunstwacht API (1,749 works citywide, 88 in Noord, all read); maps.amsterdam.nl wandkunst (226 citywide, 16 in Noord, all read); Street Art Cities marker feed (130 markers in Noord, 86 active); OSM `tourism=artwork` (filtered to the borough); nl.wikipedia "Lijst van beelden in Amsterdam-Noord" (every row) | most Kunstwacht texts are undated, so current status of several works is unverified (listed per item); Street Art Cities was used selectively (NDSM's STRAAT collection not listed piece by piece, by design); no Noord-specific art route besides the two Kunstwacht routes (Molenwijk, Oosten van Noord) was found |
| 3 War and memory | round A, 2026-11-23 (SCOUT-2.md) | 4en5mei.nl monument database (three distance-sorted searches, 137 records, 16 in Noord, all detail pages read); OSM `historic=memorial`, `memorial=*`, `military=*`, `building=bunker`; nl.wikipedia (memorial and person articles); Friendly Fire Amsterdam project site; Kunstwacht records of category "Oorlogsmonument" and "Monument" | stolpersteine and private plaques not listed one by one (by design); Joods Monument addresses not gone through street by street; Pieter Roemer's booklet "40-45 in Noord" (2005), the source behind several 4en5mei records, not read |
| 4 Hidden history | not done | none (round 1 general scout only) | history societies (Historisch Archief Tuindorp Oostzaan, Museum Amsterdam Noord, Historisch Centrum Amsterdam-Noord hcan.nl), archief.amsterdam beeldbank, amsterdamsloopt, nl.wikipedia category crawl, Rodi and NH Nieuws |
| 5 Behind the gate | not done | none | OSM `military=*` found a German Adcock station near Ransdorp and the Durgerdam battery casemates (leads only) |
| 6 Modern and contested | not done | none (round 1 general scout only) | Arcam, squats and free zones (NDSM, De Ceuvel, ADM history), renewal fights, renamings |
| 7 Curiosities, green, odd museums | not done | none (round 1 general scout only) | Atlas Obscura, OSM `tourism=museum|attraction|viewpoint`, allotment parks, iamsterdam Noord pages |
| 8 Loops | not done | none | route ideas exist in `notes/*.md` (dike villages, NDSM yard, Buiksloterham), none built |

## Notes

- Every round A candidate was point-checked as being in borough Noord with `scripts/areas.py`; Zuid and Centrum were left out entirely.
- Round A checked candidates against the live map (872 places, 127 in Noord) read-only, and against `places/*.yaml`.
- Leads for round B (hidden history, behind the gate, curiosities) are listed at the end of SCOUT-2.md.

- Round A drafted and imported 2026-11-23: 25 new places, 17 places extended (BRIEF-2.md, places/r2-*.yaml). Noord has 152 places. Left out: 105 Genie Mythology (existence unconfirmed), 121 Verzonken Stad (works building gone by April 2026).
- Next: round B (hidden history, behind the gate, modern and contested, curiosities), with the "for round B" leads in SCOUT-2.md; then loops and the completeness tests.
