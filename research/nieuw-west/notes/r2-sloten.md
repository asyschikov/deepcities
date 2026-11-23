# Nieuw-West round A, slice "sloten": notes

5 new places in `places/r2-sloten.yaml`, 3 merges and 2 pointers in `places/sloten.yaml` (titles unchanged).

## New places

| Scout | Title | Category | Rank | Flags |
|---|---|---|---|---|
| 121 | Siegerpark and its Stedelijk sculptures | green | Nice | none |
| 122 | Apes under the Oude Haagsebrug (Pipsqueak was here) | street-art | Nice | check: Location |
| 127 | Ontmoeting (Aart Lamberts) | curiosities | Okay | none |
| 140 | Banpaal Spaarnwouderdijk | curiosities | Nice | none |
| 152 | Verzetsheldenbuurt memorial, Joop Woortmanplein | hidden-history | Okay | none |

No outlooks set (nothing known to be changing).

## Merges and pointers (sloten.yaml)

- 124 De wiedster and the 1880 fire pump: Look for line in "Dorpsplein Sloten and the police post" (EN + NL), link and sources added.
- 126 Sisyfusgemaal: Look for line in "Akermolen (De Oude Molen)", Kunstwacht link added.
- 153 Sloterkerk plaque: the vague "war memorial in the tower" line replaced by the plaque with both names (Oudshoorn, Kars) and a pointer to "Kars and Bierman memorial, Osdorperweg" (title from r2-osdorp.yaml); 4en5mei link added.
- "Villa Maupertuus and Riecker State": Look for now points to "Siegerpark and its Stedelijk sculptures" (EN, and the line added to NL).
- "Banpaal of Sloten": one sentence (EN + NL) pointing to "Banpaal Spaarnwouderdijk" as the surviving fourth post.

## Status evidence

- Siegerpark sculptures: Commons photos 12 Sep 2022 for Etienne-Martin, Krop, Bronner, Volten, Haber; Hunt's First Falls II photographed 21 Jul 2025 (the scout's "last 2011" was out of date). All six present.
- Apes: new version photographed 2 Sep 2024 (slotenoudosdorp.nl, Erik Swierstra); mapped in OSM recently. Commons has a 10 Sep 2025 series of the new bridge, but none of those frames shows the apes.
- Ontmoeting: Commons 2 Sep 2020, nothing newer found. A bronze on a plinth by a residential flat; no flag set. Change to `check: Still there?` if a newer trace is required.
- Banpaal Spaarnwouderdijk: Commons 7 Jul 2020; Stadscuratorium walk (undated, recent site).
- Joop Woortmanplein: 4 May 2026 ceremony there (4en5meiamsterdam.nl, Rodi 27 Apr 2026).
- Wiedster and fire pump: unveiled in the shelter 28 Aug 2022; Commons 12 Sep 2022.
- Sisyfusgemaal: Commons 27 Jun 2019, a working Waternet pumping station.
- Sloterkerk plaque: 4en5mei record with photos (Rick Hoogervorst); inside the tower, so seen only when the church is open.

## Conflicts and uncertainties

- **Apes, the father with dementia.** The scout found no source; it is in the city's Kunstwacht record 952 (painted on Father's Day 2008 with the artist's children as a landmark for his father). Written in the body as the city database's account. Kunstwacht speaks of one artist ("Ape"), nl.wikipedia of a duo.
- **Apes, 2011 street-art prize**: only a photo caption on slotenoudosdorp.nl ("Amsterdamse Straatkunstprijs; 13 mei 2011"); left out.
- **Apes pin**: OSM node 13081530988 (52.331406, 4.806096) falls outside the municipal boundary per areas.py, so the pin is set just inside it, about 30 m north-east, flagged `check: Location`.
- **Riecker State (Sloterweg 745)**: Ons Amsterdam (2004) says Sieger built the villa "Rieckerstaete" himself; the city register (in "Villa Maupertuus and Riecker State") says it was designed in 1935–1936 for the doctor L.A. Faber. Not settled; the Siegerpark place doesn't mention the villa, and the Villa place is unchanged apart from the pointer. Worth a look in the register text.
- **Siegerpark dates and size**: nl.wikipedia says laid out from Nov 1936, opened Ascension Day 1937, 6.5 ha, 3.5 ha left; slotenoudosdorp says opened 1936; Ons Amsterdam says 5.5 ha. Used 1936–1937 and "the southern half"; no area figures.
- **Banpaal in the Oosterpark**: Kunstwacht 1211 describes a 1624 "top of a banpaal" from the Spaarndammerdijk in the Oosterpark. nl.wikipedia says the post itself stood in the Oosterpark until 1999 next to the "limietpalen"; the Kunstwacht text probably predates the move. Left out.
- **Rembrandt's etching title**: the scout's "Landscape with an Obelisk" is the title of a Gardner Museum painting now given to Govert Flinck. Used the Rijksmuseum print ("Boerenhuis en banpaal aan de Spaarndammerdijk", c. 1650) without an English title.
- **Woortmanplein figures**: 4en5mei says three resistance men, Kunstwacht says market gardeners, the neighbourhood says "de drie boertjes". All three in the text. Woortman's death year: 4en5mei says 1944, nl.wikipedia 13 March 1945; used 1945. Kunstwacht 1033 says Ed van Thijn was among the children Woortman saved; not confirmed elsewhere, left out.
- **Wiedster visiting**: it stands inside the VAT allotment park; gate hours not found, so the text gives none.

## Left out

- Nothing from the slice's item list. The 2011 prize, the Ed van Thijn claim and the Oosterpark top are left out (see above).

## Places without photos

- Apes under the Oude Haagsebrug (no free photo of either version on Commons).
- Verzetsheldenbuurt memorial, Joop Woortmanplein (4en5mei photos are not free-licensed; none on Commons).

## For the coordinator

- New ranks (Siegerpark Nice, apes Nice, Banpaal Spaarnwouderdijk Nice, Ontmoeting Okay, Woortmanplein Okay) are not yet in `scripts/data/amsterdam-c-list-ranks.json` (outside this slice's files).
- The Siegerpark is pinned at Demeure 4 by the Sloterweg entrance, about 115 m from the Villa Maupertuus pin: no duplicate warning expected.

## Route idea

Sloten edge walk: Siegerpark and its Stedelijk sculptures, Villa Maupertuus and Riecker State, Sloterweg village houses, Banpaal of Sloten, Dorpsplein Sloten and the police post (with the Wiedster), Sloterkerk, then along the Ringvaart to the Apes under the Oude Haagsebrug.
