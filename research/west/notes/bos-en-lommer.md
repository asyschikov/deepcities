# Bos en Lommer — research notes (Part 2 only)

Gebied Bos en Lommer = wijken **De Kolenkit (ED), Landlust (EE), Erasmuspark (EF)**
(api.data.amsterdam.nl/v1/gebieden/wijken). There is no separate wijk "Bosleeuw" any
more: Bosleeuw is a buurt inside Landlust. Every point was checked against these three
polygons.

Part 1 was skipped. All monuments are already on the map
(scripts/data/bos-en-lommer-monuments.json, 22 places). Nothing here duplicates them.

## Output

22 places, none of them monuments: 15 murals/street art and 7 other C-list sights.

| # | Title | Category | Wijk |
|---|---|---|---|
| 1 | Reinaert de Vos mural (Stefan Glerum) | street-art | Erasmuspark |
| 2 | Tiger Mothers of the Kolenkit (Sidney Waerts) | street-art | De Kolenkit |
| 3 | Unity in Diversity (Saïd Kinos) | street-art | De Kolenkit |
| 4 | Stamboom van de buurt (Floor van het Nederend) | street-art | De Kolenkit |
| 5 | Four Peas in a Pod (Iriée Zamblé) | street-art | De Kolenkit |
| 6 | Samen bij De Boeg (Richard Kofi) | street-art | De Kolenkit |
| 7 | Het Toverbos (Peim van der Sloot) | street-art | Landlust |
| 8 | Collectivism vs Individualism (Munir de Vries) | street-art | Landlust |
| 9 | Mural for Lisa, Admiraal de Ruijterweg | street-art | Landlust |
| 10 | Leonardo da Vinci mural, Nieuwpoortkade | street-art | Landlust |
| 11 | De dames en de muze (A10 viaduct tiles) | street-art | De Kolenkit (on the A10 border) |
| 12 | Les dames et la licorne (tiled entrance) | street-art | Landlust |
| 13 | Weefpatronen (tiled utility huts) | street-art | Landlust |
| 14 | Zuiver (fish on a pumping hut) | street-art | Landlust/Erasmuspark border |
| 15 | Colour Connection (Lidewijdepad tunnel) | street-art | Landlust |
| 16 | Erasmuspark | green | Erasmuspark |
| 17 | The Miracle Garden | green | Erasmuspark |
| 18 | Monument 1940–1945 (Zittende vrouw) | hidden-history | Landlust |
| 19 | Liberty Tree, Bos en Lommerweg | hidden-history | Landlust |
| 20 | Zeeslagenkaart (Solebayplein) | curiosities | Landlust |
| 21 | Gemaal Mercatorstraat | curiosities | Erasmuspark |
| 22 | Kostwinner (Constance Wibaut) | curiosities | Landlust |

Murals 1–8 are the complete **Muren van West** project (2020–2022). It was run by
stadsdeel West with Kallenbach Gallery and has an audio tour on Buitenkunst Amsterdam.
Each Wiltzanghlaan mural is a separate place because each has its own artist and story.
The coordinator could merge 2–5 into one "Muren van West, Wiltzanghlaan" place instead.

## Main sources

- **Buitenkunst Amsterdam / Kunstwacht**, the city's public-art register. I used the
  JSON API behind buitenkunstamsterdam.nl (`api-v3.kunstwacht.nl/api/v1/art-objects-frontend`,
  with the page's public token) to pull all 1,773 objects and filter them to the three
  wijken. The Muren van West entries (ids 2688–2695) have no coordinates in the register.
- **nl.wikipedia**: articles exist for nearly every mural, by the same Commons
  photographer (Ceescamel). Its photos are the main photo source, all CC BY-SA 4.0 or CC0.
- **Wikidata**: a bounding-box query of items in the three wijken (coordinates for the murals).
- **Street Art Cities** markers (`streetartcities.com/data/zones/1330/markers-v2.json`).
  Only 7 markers fall in Bos en Lommer, all already covered.
- **OpenStreetMap** artworks (Overpass).
- **De Westkrant**, **NH Nieuws/AT5** and **Stadscuratorium** (English pages for Samen bij
  De Boeg and Colour Connection).

**Dutch texts** follow the updated bilingual rule. They are spliced from the original
Dutch wording of nl.wikipedia (CC BY-SA), with short quotes from Buitenkunst Amsterdam,
De Westkrant and NH Nieuws. Every such source is in `links`. Exceptions:
- **Liberty Tree**: the Dutch text is my own. No Dutch prose source exists, only the
  English inscription, Wikidata and a one-line register entry.
- **Mural for Lisa** and **Colour Connection**: the Dutch is built from news and register
  quotes, because there is no Wikipedia article.

## Source conflicts and uncertainties

- **Stamboom artist name**: Wikipedia has "Floor van het Nederland"; Buitenkunst and
  De Westkrant have "Floor van het **Nederend**". I used Nederend.
- **Four Peas in a Pod**: Wikidata/Commons call it "Zonder titel". Buitenkunst and Street
  Art Cities give *Four Peas in a Pod*.
- **Tijgermoeders**: the title varies between *Tijgers van de Kolenkit* (Buitenkunst),
  *Tijgervrouwen/Tijgermoeders* (Wikipedia) and *Tiger Moms* (Street Art Cities).
- **Samen bij De Boeg**: an early Westkrant piece calls the artist "Richard Ko" and the
  work "Samen voor de Boeg". Both are errors; the register says Richard Kofi.
- **Wiltzanghlaan positions**: Wikipedia/Wikidata coordinates (used here) put the four
  murals about 30 m north of the Street Art Cities pins. Wikipedia matches OSM for
  Four Peas, so I trust it. Wikipedia also labels them "Amsterdam Nieuw-West", but they
  are in De Kolenkit (West).
- **Leonardo da Vinci**: the year 2019 comes from OSM `start_date` and the Commons photos
  (February 2019). I found no press source. The Hellingproof collective is named in
  nl.wikipedia (Nieuwpoortkade).
- **Zuiver**: Wikipedia names no artist; Signpainters painted it. `artist` is set to
  "Signpainters & Co (idea by Sandrine Diodati)". The point sits on the
  Landlust/Erasmuspark wijk border; PDOK puts the address in Erasmuspark.
- **Mural for Lisa** (2026): it has no title in the press. The title is mine. The point is
  the address centroid of Admiraal De Ruijterweg 412; it should be checked on site
  against the actual wall.
- **Colour Connection**: Stadscuratorium lists the location as "Geuzenveld". The register
  coordinates put the tunnel in Landlust (Lidewijdepad, Jephtastraat side). The year 2020
  comes from Stadscuratorium.
- **Zeeslagenkaart**: no year was found; it is older than October 2018 (photo date).
  The names of the battles on the map come from Commons file names.
- **Gemaal Mercatorstraat**: it is not in any West monument slice, and nl.wikipedia gives
  no listing. I treated it as a non-monument. Please check it isn't one of the 3 listed
  numbers missing from the 22 merged places (the brief mentions 25 monuments).
- **Under Heaven 02** (Leonard van Munster's palm-tree oasis under the A10 at the
  Wiltzanghlaan, 2009) was **left out**. nl.wikipedia reports it was destroyed by
  vandalism in October 2023. It could become a hidden-history item if that is wanted.

## Not included: documented but no known artist, or too thin

- Mural at speeltuin De Gibraltar, Haarlemmerweg 645a: artist unknown (Commons).
- Mural on the café/horeca building in Erasmuspark: artist unknown (Commons 2022).
- WOW Amsterdam art hostel (Wiltzanghlaan 60): the furniture sculptures *Ikearchaïc*
  (Nicolas Chuard, 2020) and *Construction steel DIN 20* (Volten). A possible later addition.
- *Vlaggenproject* (Stefan Yordanov): community flags along the Bos en Lommerweg. Temporary.
- WWII spots on TracesOfWar: Garage "Lindbergh" (Bos en Lommerweg 1, Luftwaffe garage)
  and the NSVO office (Admiraal de Ruijterweg 277). Each has one line of text, too thin.
- Gedenksteen Jan Verleun en Gerard Steen (1945, Willem IJzerdraat) is set in the wall of
  De Boom, which is already on the map. **Suggest adding a "look for" line to De Boom**
  rather than a new place.
- *De potkachel* and *Meetstation Jan van Galenstraat* fall just outside the gebied (De Baarsjes).

## Places missing photos

- Mural for Lisa, Admiraal de Ruijterweg (new in August 2026, not yet on Commons)
- Colour Connection (Lidewijdepad tunnel)

All other places have 1–3 Commons photos with verified licences (CC BY-SA 4.0, CC BY-SA
3.0 NL or CC0).

## Suggested walking route: "Muren van West", the Bos en Lommer mural walk (~4.5 km, 1.5 h)

The route runs north-west to east and ends near tram/metro at the Haarlemmerweg.

1. **Four Peas in a Pod**, then along the Wiltzanghlaan heading east:
2. **Stamboom van de buurt**
3. **Unity in Diversity**
4. **Tiger Mothers of the Kolenkit**. All four walls face the Wiltzanghlaan; the
   Opstandingskerk ("Kolenkit") tower is visible to the south.
5. **Collectivism vs Individualism** (Sara Burgerhartstraat, at the Lidl). The
   Zaanstad flat (on this map) is opposite.
6. **Colour Connection**: walk south-west through the Lidewijdepad tunnel and back.
7. **De dames en de muze** (Leeuwendalersweg under the A10)
8. **Les dames et la licorne** and **Weefpatronen** (Gulden Winckelplantsoen)
9. **Samen bij De Boeg** (Hoofdweg 495, beside the Bos en Lommerplantsoen)
10. **Reinaert de Vos mural** (Bos en Lommerweg 211). Continue east along the Bos en Lommerweg.
11. **Het Toverbos**: detour south along the Willem de Zwijgerlaan to look up the
    Rijpgracht, the intended view.
12. **Zuiver** (Erasmusgracht, seen from the water side)
13. **Mural for Lisa** (Admiraal de Ruijterweg 412). De Boom church (on this map) is next door.
14. **Zeeslagenkaart** (Solebayplein)
15. **Leonardo da Vinci mural** (Nieuwpoortkade 1–2), ending at De Bloem windmill.

Shorter loop (45 min): stops 1–5 and 9–10, plus the Opstandingskerk.

## Other route ideas

- **"Down into the polder"**, a green and memorial loop of about 2 km: Erasmuspark →
  The Miracle Garden → Gemaal Mercatorstraat → Vierwindstrekenbrug (on the map) →
  Zuiver → Monument 1940–1945 → Liberty Tree → Keesmanblokken and Gibraltarbadje (on
  the map) → Zeeslagenkaart.
- **"Tiles under the ring road"**, about 1 km: De dames en de muze → Colour Connection →
  Les dames et la licorne → Weefpatronen → Kostwinner.
