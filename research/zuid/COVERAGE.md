# Zuid coverage

Which of the West-standard sweeps have been done for Amsterdam-Zuid. Zuid has only three
official gebieden, too coarse for a district this dense, so coverage is tracked in six
**areas**:

1. Museumkwartier and Willemspark
2. Apollobuurt, Stadionbuurt, Schinkelbuurt, Hoofddorppleinbuurt
3. De Pijp (Oude Pijp, Nieuwe Pijp, Zuid Pijp)
4. Rivierenbuurt (Scheldebuurt, IJselbuurt, Rijnbuurt)
5. Buitenveldert (West and Oost)
6. Zuidas and Prinses Irenebuurt

Status: **done** (the sources listed were gone through for the whole area), **partial**
(names what is missing), **not done**.

## How Zuid differs from the other districts

- **Monuments**: 596 records (314 national, 281 municipal, 1 in procedure), against about
  190 monument places in West. Every record goes into exactly one of: its own place (only
  with a hook), an ensemble (street, scheme or architect's group, usually Okay), or a ledger
  line (A-list parked, or part of an existing place). Each slice's notes carry the ledger.
- **A-list**: written down in `A-LIST.md`; parked, not drafted.
- **Saturation** (test 2): the absolute "fewer than 5 new places" was calibrated on thinner
  districts. For Zuid's large areas the test is the share (under 10% of the area's places)
  and no Amazing.
- **Blind recall** (test 3): 20 candidates per area (six areas, so 120), not per gebied.

## By sweep and area

Status on 2026-11-24, after four rounds. **Zuid is complete for research** (loops parked).

| Sweep | 1 Museumkwartier, Willemspark | 2 Apollo, Stadion, Schinkel, Hoofddorpplein | 3 De Pijp | 4 Rivierenbuurt | 5 Buitenveldert | 6 Zuidas, Irenebuurt |
|---|---|---|---|---|---|---|
| 1 Monuments | done | done | done | done | done | done |
| 2 Public art | done | done | done | done | done | done |
| 3 War and memory | done | done | done | done | done | done |
| 4 Hidden history | done, except Ons Amsterdam | done, except Ons Amsterdam | done, except Ons Amsterdam | done, except Ons Amsterdam | done | done |
| 5 Behind the gate | done | done | done | done | done | done |
| 6 Modern and contested | done | done | done | done | done | done |
| 7 Curiosities, green, odd museums | done | done | done | done | done | partial: indoor corporate collections other than AkzoNobel have no confirmed access |
| 8 Loops | parked | parked | parked | parked | parked | parked |

Not gone through anywhere: **Ons Amsterdam** (its robots.txt refuses automated readers, so
no article was fetched; titles seen are in `notes/r3-gaps.md`), the Stadsarchief's stories
and the two wijkkranten (no index to go through). A person with a browser can close these.

## Result

331 places in stadsdeel Zuid (Oud-Zuid 186, De Pijp and Rivierenbuurt 100, Buitenveldert and
Zuidas 45). 241 carry monument numbers, 90 are scouted places. Ranks: 9 Amazing, 181 Nice,
141 Okay. 54 carry a `check` flag and 9 an `outlook` flag.

## Completeness tests

1. **Monument ledger**: all 596 register records are accounted for. 575 numbers sit on
   round 1 places, 12 on the existing place "Vondelpark", 7 are parked A-list
   (`A-LIST.md`), and one record in procedure has no number (Hemonylaan 22).
2. **Saturation by share** (new places as a share of candidates looked at, last pass per
   area): area 1: 3 of 11 in round 3, all three from the blind recall list; areas 3, 4 and
   5: 0 of 12, 0 of 16, 0 of 27; area 6: 1 of 21; area 2: 5 of 24 in round 3, so it got a
   fourth round: 5 of about 150, about 6% of the area's 77 places, none above Nice. All six
   pass (under 10%, no Amazing).
3. **Blind recall** (`blind-recall-2026-11-24.md`, 120 items made without sight of the map,
   one of them in Oost): after round 2, about 108 of 119 were on the map or in drafting
   (91%). The misses became round 3: Mama Baranka, Picasso's bird, Lotty's bench, De
   onbekende verliezer as places; the Lomanstraat trees, Krop on bridge 415, De doos as Look
   for lines. Left out on purpose: the Cheider (guarded, not visitable), the AFC memorial (on
   a club's ground), the Schenkkan house (private, no story found).
4. **500 m grid**: 11 empty cells after round 2; two got a place (Nieuwe Meersluis, the
   station RAI clock), three were covered by drafts, and the rest are housing estates,
   scout huts, a marina and a business estate with nothing that passes.
5. **Blind quality check** (`research/quality/blind-check-2026-11-24-zuid.md`): 30 Zuid
   places and 4 anchors, two reviewers: Zuid 27.8 of 30 (round 1: 27.5, round 2: 28.2),
   lowest place 24, reviewer correlation 0.94. Anchors 21.5, as before.

## Rounds

### Round 1 (2026-11-24): monuments

- Monument register downloaded whole (9,817 records), filtered to borough Zuid by
  point-in-polygon: 596 records. National register texts fetched for all national
  monuments. 14 slices in `slices/` (`scripts/prepare.py`), brief `BRIEF.md`.
- 241 places: own places only with a hook, ensembles for the rest (see "How Zuid differs").
- Scouts A (sweeps 2 and 3, 66 items), B (4 and 5, 57 items) and C (6 and 7, 23 items):
  `SCOUT-A.md`, `SCOUT-B.md`, `SCOUT-C.md`. Scout C stalled once and was rerun.

### Round 2 (2026-11-24): the scouts' picks

- Brief `BRIEF-2.md`, nine slices (`r2-*`). 76 new places, about 30 scout items merged into
  round 1 places as a paragraph or Look for line.
- Dropped in drafting or by the coordinator, with reasons in the slice notes: Bulgar Time
  (gone since about 2018, only a pole stub), Marte Röling's lips (gone), Billardfabriek
  Wilhelmina (closed 2025, front unconfirmed), Frans Halstuinen (not visible, no way in),
  the Poggenbeekstraat W's and the Lekstraat stencil (one source each), the Hemonystraat
  play street (street not confirmed), Vossiusstraat 16 (private house, story ended), Het
  Glazen Huis and the Albert Cuypgarage (folded into other places), the Viñoly stair (one
  source), the stay-behind office at Van Eeghenstraat 78 (one undated source).

### Round 3 (2026-11-24): gaps

- Blind recall misses, the empty grid cells, Arcam's guide (842 entries, 110 in Zuid) and
  Amsterdam Sloopt (134 posts). 9 new places, 12 Look for lines (`notes/r3-gaps.md`).

### Round 4 (2026-11-24): area 2 again, and every open lead

- Wikipedia categories for the four buurten, the Schinkel bank, the Stadionbuurt gateways,
  4en5mei, Stolpersteine with a public story, OSM; then about 85 open leads from all notes.
  5 new places (four named bridges that fell between the monument slices and the art
  scouts, and the Durrer memorial), 6 Look for lines (`notes/r4-area2.md`).

## What the skill lacked for a district this dense

- A rule for monuments that are listed but have no story: ensembles and a ledger (above).
- A written A-list (`A-LIST.md`).
- Areas finer than the official gebieden for tracking and recall.
- Saturation by share instead of an absolute count.
- A "verify first" class of scout items, and permission for drafters to drop or fold items.
- Bridges with names and sculpture but no register number: no sweep owns them. Add them to
  sweep 2 (public art) in the next district.
