# Oost round 2, slice "transvaal": notes

6 new places in `places/r2-transvaal.yaml`, 2 round 1 places extended in `places/indische.yaml`. Validator: 0 errors on both files. No em dashes. No monument numbers (none of these objects is listed).

## New places

| # | Place | Category | Rank | Pin |
|---|---|---|---|---|
| 109 | De vrijheid van de gedachte (Hildo Krop) | street-art | Nice | exact, OSM node 11977637445 |
| 114 | Kantoorgangers, Schalk Burgerstraat | street-art | Nice | approximate: middle of the Schalk Burgerstraat (OSM way 10074427); twelve small figures along the even-side ledge, no single point |
| 131 | Het buikschot, Tugelaweg | hidden-history | Nice | exact, 4en5mei pin (Kunstwacht within 5 m) |
| 130 | Doe je ogen even dicht, Tugelaweg text monument | hidden-history | Nice | Kunstwacht point on the 300 m wall; the wall runs Maritzstraat to Cilliersstraat, so treat as approximate along its length |
| 152 | If Walls Could Speak, Platanenweg | street-art | Nice | on Dan Kitchener's geisha wall (Street Art Cities 21810); ten walls on five blocks |
| 156 | Morgen komt alles goed, Kraaipanplein | street-art | Okay | middle of the square (OSM pedestrian way 242650118); Kunstwacht point is 6 m away |

Decisions:
- **130 stands alone**: a 300 m designed text with its own green strip, path and benches, used as a stop on the 4 May walks. Too big for a line in "Jewish memorials of the Transvaalbuurt". Title takes the Kunstwacht name plus a descriptor.
- **156 stands alone (Okay)**: no place of my own slice nearby to hold it as a Look for line; it carries the Kraaipanschool renovation story, which links to Eli van Tijn.
- **129 "Daarom moet ik wenen" is not a new place**: round 1 already had it in "Jewish memorials of the Transvaalbuurt" (one sentence, Look for line, Commons photo). Since that is one of my merge places, I extended the sentence there into a short paragraph (the gutted block rebuilt in 1950, Guntenaar's quote) and added the nl.wikipedia link. Address: Kunstwacht says President Brandtstraat 330; nl.wikipedia says the relief is over 334-338 after renumbering. Kept round 1's 334-338.

## Merges into round 1 (`indische.yaml`)

- **"Jewish memorials of the Transvaalbuurt"**: added 133 Eli van Tijn (paragraph in body and nl.body, Look for line, 4en5mei link, Kunstwacht and 4en5mei sources, Commons photo `Gedenkteken Eli van Tijn, Amsterdam.JPG`, Steffen Maas added to `artist`, Kraaipanstraat 58-60 added to `address`), and extended 129 (see above). Summary, title, pin and the rest unchanged.
- **"Monument against apartheid and racism, Krugerplein"**: added 154 Airhead #2 (sentence in body and nl.body, Look for line, nl.wikipedia link, sources, Commons photo `2021 Airhead nr. 2, Krugerplein, Asd.jpg`).
- Bug fix in the Jewish memorials place: three round 1 link labels with a comma were unquoted, so YAML cut them short ("4 en 5 mei", "Joods Monument", "oost-online") and added stray null keys. Quoted them. Same pattern elsewhere, not my files, not touched: `ijburg.yaml:106`, `frankendael.yaml:337`, `oosterpark.yaml:164`.

## Status checks

- 109 Krop: placed February 2019; Commons photo of 25 November 2024 shows it in place.
- 114 Kantoorgangers: de Brug, 17 November 2026, describes all twelve on the facade.
- 131 Buikschot: visited on the walks of 4 May 2024 and 9 February 2025; yearly 4 May ceremony.
- 130 Tugelaweg text: opened early 2017 (Dwars door de Buurt, 10 February 2017: "onlangs officieel geopend"); walks of 2024 and 2025 sat by it; a March 2026 blog mentions it.
- 152 If Walls Could Speak: eight of the ten walls checked on Street Art Cities, all "seen" between September and 1 November 2026; a January 2026 note says street renovation may block access at times. The two walls I did not find on SAC (Dopie, HERA or Studio Giftig among the listed ones) are on the same blocks; the body does not claim all ten were checked.
- 154 Airhead #2: weakest evidence. Latest dated photo is Commons 2021; still in the city's Kunstwacht database and on the artist's site; nl.wikipedia sources consulted July 2025. Painted on a stucco panel, no news of removal. Kept as a Look for line; worth a glance on site.
- 156 Morgen komt alles goed: paving, artist posted it again in February 2025; no sign of change.
- 133 Eli van Tijn: walk of 4 May 2024 photographed it.

## Source conflicts

- Buikschot date: unveiled 6 June 1962 (nl.wikipedia, Algemeen Handelsblad 7 June 1962, Kunstwacht, 4en5mei); oost-online 2021 says "in 1965". Used 1962. 4en5mei Amsterdam says 14 December 1944; the column, 4en5mei and Wikipedia say 15 December. Used 15.
- Buikschot names: identified in 1996 (4en5mei, oost-online), cut into the column "a year later" (oost-online) / 1997 (nl.wikipedia).
- Eli van Tijn: 4en5mei says he died "early 1945 in Auschwitz" in one sentence and "30 April 1945 in the Vaihingen outstation" in the next. Wrote only that he went through Amersfoort, Westerbork and Auschwitz and died on 30 April 1945. Inscription: 4en5mei reads "vermoord als Jood", Kunstwacht "gestorven als Jood"; used 4en5mei. Unveiling 14 December 2007 (4en5mei, walk report); Steffen Maas's site lists it under 2009.
- Tugelaweg text length: 300 m (Langeveld, path length) vs 350 m (walk reports, jtravelblog). Used "300-metre"/"about 300 m".
- Kunstwacht links: the scout's `buitenkunstamsterdam.nl/kunstwerken/bekijk/<id>` pattern works (checked 1824 in the browser); ids taken from the site's API. Old `amsterdam.kunstwacht.nl` ids in Wikipedia refs differ.

## Dutch text

Dutch spliced from Kunstwacht texts, nl.wikipedia (Kantoorgangers, De vrijheid van de gedachte, Het buikschot, If walls could speak, Airhead nr. 2, Daarom moet ik wenen), 4en5mei, oost-online, Méland Langeveld (Dwars), de Brug and Arcam. Short quotes only from the non-open sites. The If Walls paragraph listing the walls and the one status line on the street works were written by me.

## Photos

- Missing: "Doe je ogen even dicht" (no Commons files found under Tugelaweg or the title) and "Morgen komt alles goed" (none on Commons; artist's photos are all rights reserved).
- If Walls Could Speak photos picked by wall from the Commons category file names (26-36 zo = Kitchener, 26-36 nw = Appel homage, 38-48 zo = Leon Keer, 2-12 zo = Dopie) following the nl.wikipedia table; not opened one by one.

## Other notes

- Wikipedia and Commons APIs returned 429 from curl; used the browser instead.
- The Danie Theronstraat "500 white handkerchiefs" seen on the 2024 walk looked like a temporary installation; not researched.
- Walk idea: Krop on the Oranje-Vrijstaatplein, Steve Bikoplein, Tugelaweg text, Couzijn relief, Buikschot, Wayang tunnel, If Walls Could Speak, Krugerplein (monument, Airhead), Kantoorgangers, Eli van Tijn cube and Morgen komt alles goed.
