# Zuid round 2, slice r2-museum: notes

Ten new places in `research/zuid/places/r2-museum.yaml`. No existing file was edited.
All pins point-checked: borough Zuid.

## Item ledger

| Item | Outcome | Rank |
|---|---|---|
| 101 | New place: "D.D.T.666: Dr. Rat's graffiti, kept like a fresco" | Amazing |
| 102 | New place: "In den bescherfden Schuyt: the mosaic transformer house" | Nice |
| 103 | New place: "Groep A'dam on the Emmaplein: sculptures back from the depot" (pinned on Couzijn's work, 28 m from the round 1 place "Queen Emma monument", which it names in its Look for list) | Nice |
| 104 | New place: "Descartes by a silversmith (Johannes Vermeerplein)" | Okay |
| 147 | New place: "Two memorials on the Museumplein: Ravensbrück and Hel van vuur" (pinned on the Ravensbrück monument) | Nice |
| 148 | New place: "The mirror at the Vondelpark gate (Van Eeghenstraat)" | Okay |
| 201 | Folded into the place of 148, as its closing paragraph and a Look for line. Not merged into the round 1 ensemble "Van Eeghenstraat, park side: the villas at 74–92 and 114" (`museum-a.yaml`): that body is already 334 words and has six links, and it tells only the architect's story of nos. 76–78, so nothing is told twice | (part of 148) |
| 149 | New place: "The stone with a name chiselled off (Amstelveenseweg, May 1945)" | Nice |
| 150 | New place: "The doorposts of the Gerard Terborgstraat" | Nice |
| 202 | Merge not needed: "Nieuwer-Amstel's fire station, Van Baerlestraat" (`museum-b.yaml`) already tells all of it (built about 1890 by Nieuwer-Amstel, annexation of 1896, the BRANDWEER and POLITIE stone, the arms, the police staying on). `museum-c.yaml` ("Fire station Dirk") covers the Amsterdam successor of 1897. Nothing added, no file touched | n/a |
| 203 | New place: "The pooping cat of the Pieter Baststraat" (with the 1987 explosion) | Okay |
| 252 | New place: "Vondelbunker: fallout shelter, beat cellar, free space" | Nice |

Nothing was dropped. Descartes (104) and the cat (203) are the two closest to the bar; both have a story of their own and went in at Okay.

## Conflicts and uncertainties

- **101, rank.** Amazing follows the scout. What you see is a faded tag behind two thin trunks; the story carries it. Nice is defensible.
- **101, facts.** Het Parool (2013) gives the year of death as 1980 and "heroin"; nl.wikipedia and the Dutch Graffiti Library give 29 June 1981. Used 1981 and "an overdose". The Kunstwacht record puts the parents' house in the Frans van Mierisstraat, Het Parool (quoting the mother) in the Nicolaas Maesstraat: used the latter. The wall is the side wall of Nicolaas Maesstraat 109 (reverse geocoding), in the Hondecoeterstraat. Latest evidence it is there: the conservation of 2022 and photos of July 2022; nothing newer found, but a conserved heritage wall is unlikely to have gone, so no check flag.
- **102.** The explanation of the title (a play on the street name and on scherven) is my reading; no source spells it out. Latest evidence: NH Nieuws showed it as a standing example on 3 June 2024.
- **103.** Founding year of Groep A'dam: 1958 (Kunstwacht), 1959 (Het Parool), 1959–1960 (nl.wikipedia). Written as "the end of the 1950s". When Couzijn's "Afrika ontwaakt" came to the square: 1998 with Perlmuter's (Het Parool) or 2016 (nl.wikipedia). Left out. The resident who started it is named in Het Parool; left unnamed as a private person.
- **104.** The gift: 1948 (Kunstwacht, and it fits fifteen years after the Maison Descartes opened in 1933) against 1949 (nl.wikipedia list). Used 1948. Descartes "worked in Amsterdam from 1628 to 1649" (Kunstwacht) is loose: written as living in the Republic in those years, part of the time in Amsterdam. The pin is 25 m from the round 1 place "Hillehuis": `assemble.py` may flag it; it is not a duplicate.
- **147.** Whether the light and sound of the Ravensbrück column still run could not be confirmed from sources: body describes what it was built to do, and the place has `check: Facts` with a note. The base of Hel van vuur speaks of "millions" of murdered; 4en5mei.nl gives a quarter to one and a half million and says the number cannot be known. "First monument in the world for Roma and Sinti" (4en5mei.nl) against "second after the boulder at Vledder" (nl.wikipedia): written as "one of the first". Kunstwacht says one child, the other sources two: written as "children". The date of the 1 August commemoration is given without the count for the night at Auschwitz, which sources date differently.
- **148.** The entrepreneur is named because 4en5mei.nl and the city's art register name him as the initiator. The year the sign was put up is not in the sources read (nl.wikipedia captions the archive photo "1943"); the text gives no year.
- **201.** One source only (stelling-amsterdam.nl, René Ros, page last changed 26 October 2026). It states that the staff of Operaties sat in the villa "later", with no dates, and hedges the end of the army's use (possibly 1958 in fact, formally after 1991, garrison staff probably moved in 1987). The text says only: army from October 1945, later Operaties under cover of a study society, wound up in 1992. `check: Facts` is set with a note. A web search on the cover name (Stichting Hendrik van Borselen) found no second source. If this is too thin, cut the third paragraph and the last Look for line; the place stands without them.
- **149.** Why the fifth name went: the plaque of 2013 on site and the Kunstwacht record say a suspicion of collaboration that was never proven; the story on 4en5meiamsterdam.nl says he had worked for the German army early in the occupation, and its opening lines say NSB member. The text gives the army story as what went round and the plaque's "never proven". The stone says all fell on 7 May; in fact one died on 6 May and two later of their wounds. 4en5mei.nl speaks of four victims because it reads the stone.
- **150.** Unveiling: 1 July 2017 (4en5mei.nl; the AT5 report is dated that evening) against 30 June 2017 (nl.wikipedia). Used 1 July. Pin from the nl.wikipedia coordinates; the organisers give the address as Gerard Terborgstraat 44-46, which matches.
- **203.** Het Parool's article is behind a paywall; the facts come through nl.wikipedia, which cites it and the Amsterdamkalender 2024. The 1940 garage owner is named on Wikipedia; left unnamed.
- **252, borough.** The pin (OpenStreetMap node of the venue) point-checks as Zuid, Museumkwartier. The BAG address point of Vondelpark 8A (52.360928, 4.876725), 10 m away, falls in West. The bunker sits in the northern abutment, on the boundary. Coordinator's call whether it is filed under Zuid or West.
- **252, dates.** Sources disagree on when the shelter was made: nl.wikipedia has the bridge of 1947 adapted for a shelter for 2,600; Arcam's route calls it "project 67" and dates it 1967–1970 (and wrongly gives the bridge the same years); indebuurt says the bunker was converted to a fallout shelter in 1967–1970. Written as: space built in by 1947, fitted out as a fallout shelter 1967–1970. Lijn 3 lasted "barely a year" (nl.wikipedia) or two years (Ons Amsterdam, indebuurt): used two. The Pink Floyd concert named on nl.wikipedia has no second source and is left out.
- **Browser.** Used BrowserOS for 4en5meiamsterdam.nl (its English pages return a server error; the Dutch stories were read), tracesofwar.com and vondelbunker.nl (bot wall). One tab, closed.

## Leads

- **Legacy Art Court on the Museumplein** (ground painting by Munir de Vries, July 2026, Kunstwacht 7483): not looked into; could be a Look for line in the Museumplein place if it is still there next season.
- **Café Scheltema** (Nieuwezijds Voorburgwal, Centrum): the only other surviving Dr. Rat is a carving in the door of the telephone booth (Het Parool 2011 and 2013). For a Centrum round.
- **Fabrice Hünd's other works in Zuid**: "Het kompas" on the Marie Heinekenplein (2006), the Coster Diamonds "nijntje" on the Paulus Potterstraat (2017), "Oscar Carré" on the Eerste Jan van der Heijdenstraat (2021). "Het kompas" belongs to the De Pijp slices.
- **Roelof Hartstraat 4**, the former photo shop Lux of the story in the Terborgstraat place: no marker found on the building itself.
- **Zocherstraat corner and the former blanket factory shed** opposite the Vondelpark entrance (Amstelveenseweg): the shed's address and whether it stands were not established. NIOD holds photos by Charles Breijer and film of 7 May 1945.
- **Vondelbrug**: Krop's reliefs of 1942, Kramer's own sculpture at the east stairs and the glass panels between the tram rails that lit the underpass are named on nl.wikipedia; only the reliefs made it into the bunker place.
- **Koninginneweg 184**: the stay-behind office sat on one floor here from 1979 to 1984 (same single source as 201). Not written.
- **Existing place "Vondelpark" (West round)**: could get a Look for line pointing to the mirror at the Van Eeghenstraat gate.

## Missing photos

None missing: every place has one to three Commons photos, all looked at.

- 203: the second photo is the Anefo press photo of the 1987 explosion, not the house.
- 252: both photos are of 2010s date; the first shows the room set up as a cinema.
- 103: the three chosen show Couzijn, Kneulman and Tajiri. Commons also has photos of Guntenaar's and Perlmuter's works (used in the nl.wikipedia article), not viewed and not used; none found of Verhulst's.

## Route ideas

- **Museumkwartier memory walk** (about 2 km): the mirror at the Van Eeghenstraat gate, across the Museumplein past Hel van vuur and the Ravensbrück monument, Descartes on the Johannes Vermeerplein, the doorposts of the Gerard Terborgstraat, ending at the pooping cat. Round 1's Etty Hillesum house and Abraham Asscher's house are on the way.
- **Art that was nearly thrown away** (about 2.5 km): Vondelbunker, D.D.T.666, the mosaic transformer house, then through the Vondelpark to the Emmaplein sculptures. The Amstelveenseweg stone is 500 m further on.
