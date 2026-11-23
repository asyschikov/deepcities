# Nieuw-West, slice `green` (scouted items 33, 37, 39, 41–45)

8 places, all non-monuments. Validator: 0 errors.

| SCOUT # | Title | Category | Rank |
| --- | --- | --- | --- |
| 33 | Tenerife monument (Westgaarde) | hidden-history | Nice |
| 37 | Lutkemeerpolder | green | Nice |
| 39 | Molen van Sloten | industrial | Nice |
| 41 | Natuurpark Vrije Geer | green | Nice |
| 42 | Heemtuin Sloterpark and Het Ruige Riet | green | Nice |
| 43 | De Oeverlanden | green | Nice |
| 44 | Lange Bretten | green | Nice |
| 45 | Brouwerij De 7 Deugden | food-drink | Okay |

## Merges and changes from the scout list

- **39 Molen van Sloten and Kuiperijmuseum**: the Kuiperijmuseum **closed in 2020** (nl.wikipedia; its collection went to Brabants Museum Oud-Oosterhout). Written as one place, "Molen van Sloten", and the museum's closure is stated in the body. No separate gone place, since the museum was a room in the mill complex with no story of its own. The mill is open daily in 2026 (official site). It has been a provincial monument since 2021; there is no `heritage_status` option for that, so it is left out of the attributes and mentioned in the body. The scout said "1990 rebuild"; the official site and Wikipedia say 1991.
- **42 Het Ruige Riet** is merged with Heemtuin Sloterpark next to it (same foundation, same history, and the Ruige Riet itself has almost no sourced material). The scout's "once known as Vogeleiland" could not be sourced. The heemtuin's protected bird island (0.5 ha) is a separate small island, so the claim is left out. The "2026 demolition drawing for works on the bird islands" was not found either.
- **Category for the mill**: `industrial`, since it is a working drainage mill. Use `curiosities` instead if the attic Rembrandts should lead.

## Gone items

None of the eight are gone. The Kuiperijmuseum (part of #39) is gone and the mill body says so.

## Pins

- **Tenerife monument: the pin needs a field check.** The monument is in grave section 5 (vak 5) of Westgaarde, but no source gives its position. The pin is the Ookmeerweg 275 address point at the central buildings. OSM has an untagged `historic=memorial` node at 52.360853, 4.771930 (node 11013160774, 2023) that might be it. It is not confirmed, so it isn't used.
- Lutkemeerpolder: De Boterbloem farm shop (OSM), since the polder is an area and the farm is the place people can visit.
- Molen van Sloten: OSM building centroid. Brewery: OSM node.
- Vrije Geer: OSM park centroid (a small, 4 ha park).
- Heemtuin and Ruige Riet: the heemtuin (OSM garden), next to the Drijfsijs building at President Allendelaan 4. The Ruige Riet centroid is 52.370137, 4.808590.
- Oeverlanden: the Wikidata/Wikipedia point on the Anton Schleperspad. The Henk Gerritsenbrug (bridge 1859) is at 52.332722, 4.836194 (Wikidata Q97482753). It is mentioned in the body but is not the pin.
- Lange Bretten: the "De Bretten" letters artwork (OSM node 10863321983) on the Daveren cycle path, which serves as the entrance landmark. Other entrances are Tijnmuiden (west), the Australiëhavenweg car park (middle) and the Seineweg (east).

## Source conflicts and uncertainties

- **Vrije Geer referendum numbers**: Wikipedia gives "204.5000" (sic) votes, of which 184,068 were against building; Sloten-Oud Osdorp gives 208,538 voters and 88.3%; Ons Amsterdam gives "ruim 87 procent". The text says "more than 200,000" and "close to nine in ten". Sloten-Oud Osdorp mentions a park opening in 2008, but Wikipedia and the village site's own park page give the official naming as 21 May 2003. The text uses 2003.
- **Anton Schlepers**: Wikipedia gives 1945–1991, while Rodi (2026) says he died in 1993. No year is given in the text.
- **Huis te Bretten**: Wikipedia calls it a country house. ONH and Nederland Onder Je Voeten say it was an inn, and the text follows them. It was demolished in 1837 (NOJV), and the railway opened in 1839.
- **Lange Bretten size**: 130 ha (Wikipedia) against 140 ha (ONH). The text uses "about 130 hectares".
- **Tenerife**: the scout called it a "national monument". Sources call it the "Tenerife Monument" (PC Uitvaart, Westgaarde), so the title avoids "national". The monument's date is not in any source, so `built` is omitted.
- **Lutkemeerpolder status (checked Nov 2026)**: on 2 Sept 2026 the council approved the partial zoning revision, which allows a laundry company's hall behind De Boterbloem. The Raad van State heard the Stichting Behoud Lutkemeer appeal on 13 Nov 2026, and no ruling had been found yet. The scout's "Voedselpark starts 2027" was not confirmed, so it is left out. **This text will need updating once the ruling is out.**
- De Oeverlanden: the scout mentioned "more violent incidents reported in 2026"; this was not used. The text only says the area has long been a gay meeting place, as Wikipedia does.
- Brewery: an older listing at Osdorperweg 578 is the 2010–2018 address; it is now at Akersluis 8D (since April 2018).

## Dutch text

All Dutch is spliced from Dutch sources: nl.wikipedia, PC Uitvaart, Dodenakkers, Rodi, Sloten-Oud Osdorp, molenvansloten.nl, SNTP, oeverlanden.nl, ONH, Landschap Noord-Holland, de7deugden.nl, MaLive. No Dutch was written from scratch, apart from short connecting phrases and the "Let op" lists.

## Photos

- All photos come from Commons (CC BY-SA or CC0). Viewed to confirm: Tenerife memorial Westgaarde.jpg, Behoud Lutkemeer.jpg, 2020 Brug 1859, overzicht (1).jpg. The others were chosen from their Commons descriptions.
- **Missing**: Brouwerij De 7 Deugden (nothing on Commons).
- Commons and Wikipedia were rate-limited (HTTP 429) for curl from this IP, so API calls went through the browser.

## Route ideas

1. **Sloten edge** (walk, about 3 km): Natuurpark Vrije Geer → (Sloten village square, from the `sloten` slice) → Molen van Sloten → Brouwerij De 7 Deugden.
2. **Fights for the last green** (bike, about 15 km): De Oeverlanden → Natuurpark Vrije Geer → Tenerife monument (Westgaarde) → Lutkemeerpolder. Theme: places residents saved, or are still trying to save, from building.
3. **Wild edges of Nieuw-West** (bike): Lange Bretten → Heemtuin Sloterpark and Het Ruige Riet → De Oeverlanden.

## Archived after import

- Brouwerij De 7 Deugden: archived 2026-11-22. Below the food-and-drink bar (needs high historic or cultural significance).
