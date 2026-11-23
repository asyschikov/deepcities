# Noord round B, slice west (notes)

4 new places in `places/r3-west.yaml`; 8 scout items merged into 7 existing places (5 in `places/tuindorpen.yaml`, 2 in `places/r2-west.yaml`). Titles of merged places unchanged; nothing else in those files touched. No monuments, no food and drink. New pins point-checked with `areas.py` (all borough Noord, Noord-West). No new pin within 25 m of an existing place (nearest: Drijfbeeld, 155 m from the drum houses; Paard van Noord and the Gemaal, 185 m apart).

## Items

| Item | Result | Rank | Category | Check |
|---|---|---|---|---|
| 214 Paard van Noord | "Paard van Noord" | Nice | industrial | |
| 240 Damen Shiprepair vs Haven-Stad | paragraph in "Paard van Noord" | | | |
| 215 Gemaal Kadoelen and the Concertgemaal | "Gemaal Kadoelen and the Concertgemaal" | Nice | industrial | |
| 239 Twiske-West's turning drums | "Drum houses, Twiske-West" | Nice | housing | |
| 256 NoordOogst | "NoordOogst" | Okay | green | |
| 208 Tramstation Amsterdam-Noord | paragraph in "Sixhaven and the ghost metro station" | | | |
| 237 IJ tunnel ventilation and Sixhavenpark | paragraph and Look for line in "Sixhaven and the ghost metro station" | | | |
| 216 Wilmkebreek and Clara | paragraph and Look for line in "Kadoelen stolp farms" | | | Facts (new flag) |
| 217 Vliegveld Buiksloot and Tuttifruttidorp | paragraph, Look for line, photo in "Concrete test houses, Castorplein" | | | |
| 218 the 1960 breach board | Look for line in "Flood monument, Zonneplein (1960)" | | | |
| 219 Molenwijk vote | two sentences in "Molenwijk and its art route" (outcome found) | | | |
| 235 IJplein, the rest of OMA's plan | Look for line (the school) in "IJplein" | | | |
| 241 Noorder IJplas wind fight | paragraph replacing the old one-liner in "Noorder IJplas" | | | |

Ranks are not yet added to `scripts/data/amsterdam-c-list-ranks.json` (outside this slice's files).

## Decisions and why

- **208 into Sixhaven, not Willem I-sluis.** The station stood on the Valkenweg, east of the Noordhollandsch Kanaal, which is the Sixhaven side; nl.wikipedia says its site now lies in the IJ, so no exact pin and no claim that it is "now the IJplein ferry pier" (the scout's wording, unconfirmed). No pointer added to Willem I-sluis: the Sixhaven text already sits beside it.
- **217 merged, not a place.** No source names the school that housed the 1940 command post: Stelling van Amsterdam says the school at the north-west corner is "probably" it and "probably rebuilt after a fire"; nl.wikipedia just says it still stands. So no school is named; the airfield and Tuttifruttidorp became a paragraph in the Castorplein concrete-houses place (concrete prefab, same village), with the fact that Terrasdorp stayed dry in 1960 as a link to the flood place.
- **240 as a paragraph** in Paard van Noord, as the brief says. Damen's yard is about 1.6 km west, fenced and not open (apart from Open Monumentendag tours). The scout's "Tweede Kamer backed it in October 2026 for defence reasons" was **not found**; the text says only what is sourced: the IPB designation of September 2024 at the national government's request (NH Nieuws), the navy's use and the dispute still running on 1 October 2026 (Marineschepen.nl).
- **219**: outcome found (de Alliantie and HBVA, June 2026: 76% yes, five flats, 400 homes). The scout's "Molenwijk was the TU Delft test estate for the Bijlmermeer" was not added: the existing text already gives the nl.wikipedia nuance (plans drawn up almost simultaneously), and no source for the TU Delft claim was opened.
- **235**: the existing IJplein text already had Van der Meer's city villas, De Kat and Peek's block and "Koolhaas designed the school". Added only a Look for line for OBS IJplein (address confirmed by Schoolwijzer and the school), with the school's own history page: the city wanted to demolish homes and school more than once, residents resisted. Kingma & Roorda as co-architects and "1986" were not confirmed (architectuurgids blocked further requests), so left out.
- **241**: the scout's "claim of at least 4 million" was not found; sources say houseboat residents threatened claims of "tens of millions" (Parool and Noordhollands Dagblad, 17 March 2021, search snippets) and the developer threatened a multi-million claim against the province (NH Nieuws, 1 September 2026). The 2021 flotilla (AT5) was about all the city's wind search areas, ending at the Noorder IJplas; the text says so.

## Status checks

- Paard van Noord: Parool "Zoek de verschillen" February 2025; Bas Kok column in Hey Amsterdam Noord newsletter (autumn 2026) about a café-boat tender next to the crane. Commons photos May 2019. paardvannoord.nl is spam now: not linked; the 2019 archived page is used in sources only.
- Concertgemaal: website lists concerts, desks and hire (checked November 2026); Stadsherstel: right of superficies to 2038.
- Twiske-West drums: OSM buildings tagged 1993; homes, so not flagged.
- NoordOogst: events on its site for December 2026; board vacancy May 2026. No Château: new board from November 2026. Mot in Mokum: site says overnight "expeditions" are temporarily stopped, so the scout's "sleep among the butterflies" is left out. Its address is Meteorenweg 280 (Mot in Mokum's own page), not 28.
- Sixhavenpark: Rodi, 13 October 2026. IJ tunnel closure 1 July 2027 to 1 November 2028 (mobiliteit.nl January 2026, amsterdam.nl; snippets, amsterdam.nl blocked curl).
- Breach board (218): unveiled 16 March 2018 (HATO). No recent photo and no exact pin, hence a Look for line only (as the scout suggested), not a pin.

## Source conflicts and uncertainties

- Paard van Noord funding: 80,000 euros from the city (nl.wikipedia) vs 260,000 from the borough plus 18,000 from funds (D. van Baarsen archive, citing NRC). No amount in the text. First owner: Van Baarsen in Velsen (2019 association page), Van Gelder Papier in Velsen (Van Baarsen archive) or "Van Velsen in Koog aan de Zaan" (nl.wikipedia); text says it "first shifted coal near Velsen".
- Gemaal Kadoelen: 1875 is "omstreeks" (nl.wikipedia) and a hard date at Stadsherstel; text says "around 1875". OSM tags both buildings start_date 1984; Wikipedia and Stadsherstel say 1987.
- Wilmkebreek: the existing place says "drained 1633–1638"; nl.wikipedia gives the 1633 octrooi, HCAN 1632. The new paragraph says "drained from 1633", consistent with the existing text. Clara's polder is HCAN's claim only (Wikipedia en/nl on Clara and the scout's Rhino Resource Center do not mention it): `check: Facts` set on "Kadoelen stolp farms" with a note in both languages.
- Twiske-West: twelve drums is from Arcam (the scout had it from one source; now two: Arcam and the OSM building count around Nesserhoek). Flying Holland captions an aerial "trommelwoningen Schelvisch Hoofd"; Arcam and OSM put them on the southern island at Nesserhoek/Coehornerhoek, where the pin is.
- IJ tunnel shafts: the Hartsuyker attribution is now confirmed by the city's Bureau Monumenten en Archeologie (openresearch.amsterdam, 2024), not just a photo caption. Height: 35 m shafts, 30 m chimneys in the same article; text says "about 35 metres".

## Places without photos

- Drum houses, Twiske-West (nothing on Commons; DOK and Arcam photos are not free).
- NoordOogst (nothing on Commons).

## Route ideas

- **Noord-West industry and water:** Paard van Noord, Gemaal Kadoelen and the Concertgemaal, Kadoelen stolp farms (the Wilmkebreek), Flood monument, Zonneplein (1960), Concrete test houses, Castorplein (Tuttifruttidorp), Noorder IJplas.
- **Odd housing of Noord-West:** Concrete test houses, Castorplein, Molenwijk and its art route, Drum houses, Twiske-West, Drijfbeeld (Atelier Van Lieshout), NoordOogst.
