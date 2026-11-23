# Oost round 2, slice "indische": notes

6 new places in `places/r2-indische.yaml`. No merges (none assigned; no round 1 file touched). Validator: 0 errors. No em dashes. No monument numbers (none of these objects is listed; the Timorplein building and Zeeburgerdijk 112 are "Geen monument" in the wall-art register, and Zeeburgerdijk 112 is not among the 88-110 municipal monuments of round 1).

## New places

| # | Place | Category | Rank | Pin |
|---|---|---|---|---|
| 110 | Rotsvast (Rob Ligtvoet), Flevopark | street-art | Nice | exact, OSM node 12696761911 (= nl.wikipedia coordinates). Kunstwacht point (52.361174, 4.95095) is about 100 m off, in the wrong spot |
| 111 | Fata Morgana, dromedaries on the railway by the Wibautstraat | street-art | Nice | OSM node 5975848213 (Kunstwacht and Wikipedia within 10 m); three figures spread over 15 m |
| 127 | Old trade school on the Timorplein, Aart Roos's mural and Studio/K | schools | Okay | wall-art register point (Timorplein 21, hostel entrance); the mural is indoors, exact spot unknown |
| 128 | Aart Roos's brick relief, Zeeburgerdijk 112 | street-art | Okay | wall-art register point; relief is on the Djambistraat end wall of the 1969 wing, within about 20 m. Approximate |
| 153 | The London Police mural, Zeeburgerdijk 49 | street-art | Okay | nl.wikipedia coordinates; Street Art Cities point 18 m away. Approximate to the wall |
| 157 | Harck, Tom Claassen's bird, Semarangstraat | street-art | Okay | Kunstwacht point (Semarangstraat 38); bird is on the corner with the Tidorestraat, within about 20 m. Approximate |

Decisions:
- **110 ranked Nice, not Amazing** (scout suggested "Amazing rare"). The story is great, but the object is a small bench-like bronze; Amazing is meant for about 1 in 20. Coordinator may upgrade.
- **127 and 128 kept as two places**: about 150 m apart, different works (indoor mural vs street facade relief), each cross-refers to the other. 127 is pitched on the building (trade school, Rinus Michels, conversion, Studio/K) because the mural is only visible inside the hostel. Category `schools`; `street-art` would also fit.
- **155 Gaudí mosaic wall, Makassarplein: left out.** Kunstwacht has only a title, "Tegels" and photos, no text, artist or date. No web source, Commons file or Street Art Cities marker found; story and current state not settled. Too slight for a Look for line in any of my places (nearest, Harck, is 450 m away).
- **157 Harck stands alone (Okay)**: no place of my slice close enough to hold it.

## Status checks

- 110 Rotsvast: Commons photos 17 June 2025; oost-online April 2023.
- 111 Fata Morgana: Commons photo 10 May 2025.
- 127 mural: saved 2006 and restored (NH Nieuws 2009); wall-art register describes it in the Stayokay hostel. Stayokay Amsterdam Oost open (official site); Studio/K programme listed for October 2026. No post-2009 photo of the mural itself found; I did not confirm visitors can see it without staying, so the body only says it is inside the hostel.
- 128 relief: building converted to homes from 2017 (Pieters Bouwtechniek note; Funda sales 2024). Google Street View August 2024 shows the relief intact on the brick end wall facing the Djambistraat, with new balconies alongside.
- 153 mural: Commons photo 15 March 2025; partly hidden by a utility cabinet since 2022 (nl.wikipedia).
- 157 Harck: Google Street View March 2026 shows the bird in place.

## Source conflicts

- Roos mural date: 1962 (wall-art register, nl.wikipedia Aart Roos) vs 1961 (NH Nieuws 2009). Used 1962. Register titles it "Zeeburg College"; Wikipedia and NH Nieuws call it *Vogels en bloemen*. Used the latter.
- Harck spelling: "Harck" (Kunstwacht, Commons) vs "Hark" (nl.wikipedia list and Tom Claassen article). Used Harck.
- Fata Morgana: Kunstwacht says a city commission for the Wibautstraat redesign; nl.wikipedia (Le Rütte) says Stadsdeel Oost-Watergraafsmeer and the AFK. Used "the borough and the Amsterdams Fonds voor de Kunst".
- London Police mural: a Commons photo of September 2015 shows an earlier painting on the same wall (filename says "overschilderd in 2018"); not mentioned in the body, unclear who made it.
- Kunstwacht ids: the scout's links work; Kunstwacht's own ids for Rotsvast (1726) differ from the old kunstwacht ids in Wikipedia refs (1762, 966).

## Dutch text

Spliced from Kunstwacht texts (Rotsvast, Fata Morgana, Harck, The London Police), the city wall-art register (both Aart Roos items), nl.wikipedia (Rotsvast, Fata morgana, Timorplein 21-82, Studio/K, Muurschildering Zeeburgerdijk) and NH Nieuws (short facts only). Written by me: the sentence on the 2017 conversion of Zeeburgerdijk 112 and the Look for lines.

## Photos

- Missing: Aart Roos's brick relief (no Commons file found; `Zeeburgerdijk 110-112.JPG` shows the neighbouring 1914 houses, not the relief). No photo of the Timorplein mural itself either; that place uses exterior views of the building.
- Harck has one photo only (2013).

## Other notes

- Fata Morgana is by Amstel station, far from the Indische Buurt; it was assigned to this slice by the brief.
- Commons API and Overpass gave 429/502 from curl at first; used the browser for Commons, Overpass worked on retry.
- Walk idea (Indische Buurt): Old trade school on the Timorplein, Aart Roos's brick relief, The London Police mural, (round 1) Badhuis Javaplein, Harck, then the Flevopark with Rotsvast and the Anxiety Rabbit.
