# Fixes for the blind review of 2026-11-23

Patches: `fixes/<n>.json` (for `dc update`). Noord replacement blocks: `fixes/noord-<n>.yaml` (1, 4, 11, 12, 29; the Noord YAML files were not edited). West/Oost YAML edited in place: 24 (west/places/baarsjes.yaml), 15, 20, 26 (oost/places/indische.yaml), 16 (oost/places/havens.yaml); all validate with 0 errors. The Noord blocks validate with 0 errors too. 14 has no research YAML, so it only has a patch.

All bodies were rewritten in both languages from the sources (no pasted register sentences, no register jargon), with the same facts in EN and NL and a "Look for" / "Let op" list at the end. Bodies are 176 to 254 words. No em dashes, no spaced en dashes.

## 1 Former kindergarten, Mariëndaal
- Hook first (five identical kindergartens, three to be demolished). Corrected "may become the only one left" to "possibly together with the altered Spelderholt 167" (register 200926, section "Gaafheid en zeldzaamheid").
- Cut "better known for traditional churches" (not in any source).
- Added: client Stichting Rooms Katholiek Onderwijs in Amsterdam-Noord (register field opdrachtgeverBouw); now a day-care centre, look from the street (kiddie.nl, Kinderdagverblijf Fesa); Look for list.
- Link added: Kiddie listing. No free photo found (Commons search and 120 m geosearch: only an unrelated flat).

## 4 Kitchen houses south of the Purmerweg
- Cut the unsourced rents, insulation and residents' jobs. EN now carries the bathroom and Ymere facts from the NL (nl.wikipedia Tuindorp Nieuwendam), and the NL carries the toilet window and roof facts (RCE 508405).
- Leads with what makes a keukenwoning odd; Look for cut to three items.
- Not done: merging with "Kitchen houses north of the Purmerweg" (wfy6p3fxr5it97emfn60jgyb), as the review suggests. The title is an import key and the Noord YAML is off limits. I recommend merging the two later.

## 11 Players and Supporters
- Pin moved from 52.382942, 4.904542 to 52.382694, 4.903944. The old pin was the camera position of the 2009 Commons photo, which reverse geocodes to the Tolhuis restaurant. The new point is Wikidata Q124958233 (P625). It is confirmed by the 2023 Commons photo "2023 Players and Supporters, Asd (4).jpg", which shows the statues on the lawn right beside the Pont Neuf coffee kiosk. Nominatim puts that kiosk (Buiksloterweg 5A, OSM node 3473280904) at 52.382737, 4.904113, about 13 m away. The review's two OSM artwork nodes are inside the Tolhuistuin park, 75 to 100 m north, so they are not this group. check and check_note are cleared (null).
- Story now leads with Ajax (Buiksloterham pitches 1900, moved to the Middenweg 1907: Geheugen van Oost). The artist's statement ("icon of mass culture", "dreams of the supporters") is cut. NL rewritten (it was near-verbatim buitenbeeldinbeeld). Look for added. Address changed to "Buiksloterweg, by the Pont Neuf kiosk at the ferry". Wikidata link added.

## 12 Former bathhouse, Meteorenweg
- Interior details (tiles, steel door) removed. The text now says it is private: both halves are homes, the old children's bath is partly business space, and the former park is a private garden behind a fence (register 200896, "Gebruiks- en wijzigingsgeschiedenis"). "Split into two business premises" now stays in 1995 context only (not stated in the text).
- New hook from the register's cultuurhistorische context: the commandobaden (boys 20 min, girls 30). Also the visible features from "Architectonische uitwerking": the farmhouse look, the big gable windows, the oversized ridge caps over the ventilation outlets, and the Wright-like boiler chimney.

## 14 Former post office, Admiraal De Ruijterweg
- "Wavy glazing bars" became "lozenge-shaped (*wieber*) glazing bars". The Look for list is moved to the end. NL rewritten (it was register copy, e.g. "laatste reminiscenties").
- Added from register 226001: the register can't tell whether it is an early Amsterdam School design or a village variant; the 1951 Ronette laboratory wing; lived in since the 1980s, so look from the street.
- Link changed from the raw API JSON to data.amsterdam.nl, with label "(226001)". Photos added: commons:File:Admiraal de Ruijterweg 537-539 (1).jpg and (3).jpg. Both exist in Category:Admiraal de Ruijterweg 537-539, Amsterdam (CC BY-SA 4.0, 2018).
- Uncertain: the register says the owner was "N.V. Ronette Piézo Electrisch Industrie" at the 1922 renumbering. It is ambiguous whether that means in 1922 or when the register text was written, so the text only mentions the 1951 wing.

## 15 Monument against apartheid and racism, Krugerplein
- Date settled to June 1987. The primary source is the Nationaal Archief Anefo photo 934-0158: "burgemeester Van Thijn onthult op het Krugerplein het eerste officiële monument tegen apartheid en racisme", dated 21 juni 1987. nl.wikipedia Albert Luthulistraat agrees: unveiled "amper een paar dagen" after the renaming on 10 June 1987. An Amsab-ISG record also dates an AABN image of the monument to June 1987. Stadscuratorium's "onthuld in 1988" is wrong. The exact day differs: the old text said 20 June and Anefo says 21 June, so the text says "a few days later" / "in June 1987".
- Trimmed: the Airhead nr. 2 mural, the Mandela portrait and the ANC office details are cut. The Airhead link is removed, and so is the Airhead photo in the YAML (the live place never had it). check / check_note are cleared, since they were about the mural. Suggest Airhead nr. 2 (Nouch, 2020, Majubastraat 36) as a place of its own.
- Added from nl.wikipedia Albert Luthulistraat: residents objected that the new name erased the street's wartime Jewish history, which led to the "voorheen" sign in 1988-1989. Links: Anefo photo, Wikipedia Albert Luthulistraat.
- Not used: nl.wikipedia Krugerplein says the square was where Jewish residents were gathered for deportation by tram (1942-1944). It is a strong fact, but it belongs in its own place or a separate memory entry, not this already full one.

## 16 Vettewinkel paint factory
- Production end: kept 2008. IAA Architecten ("located here from 1934 to 2008") and Zelferro ("Van 1934 tot 2008 was hier de verf- en vernisfabriek") agree. The register line "nog altijd dezelfde functie ... Sigma Coatings" must come from research done before the 2012 designation; it is the odd one out.
- New current state: around 2020 (Zelferro: execution 2020) the monument went from 4 to 6 storeys, with two floors of homes on a steel frame (IAA, Koopmans "met twee verdiepingen verhoogd"). The floors below are creative workspaces (Koopmans; archetype.gr: Heinzel De Vries studio). The old Look for items "columns sticking up above the roof" and "lift tower on the roof" are dropped, because the new storeys sit on top.
- Links added: Zelferro. "Since then the eastern Cruquius has been rebuilt" was reworded.
- Not settled: an unattributed search snippet says production moved to Westpoort; it is left out.

## 20 Austrian wooden emergency school, Kraaipanstraat
- Current use: three mid-rent homes, Kraaipanstraat 54A-C. Sources: BAG via api.data.amsterdam.nl (three residential units on the listed building, registered 2016) and the conversion architect's post (harveyotten.nl, July 2016). monumenten.nl lists the current function as "wonen".
- New hook from the same architect's post: Marshall Plan, paid for with a few tonnes of Dutch fresh fish (attributed in the text: "according to the architect who later converted it"). Kept from the post: panelling hidden behind plasterboard, big classroom windows on the schoolyard side kept.
- NL rewritten (it had register copy and "notabene").
- Visibility could not be settled. The architect calls it "verborgen" (hidden) and it stands on inner grounds, so I set check: Facts with the note "How much of the school can be seen from the Kraaipanstraat or the schoolyard." No free photo exists on Commons. The rank stays Nice for the story, but Okay would also be defensible since there is little to see.

## 24 Visserschool (Columbusplein)
- The hook is now in the EN too: J.Th. de Visser and the Schoolstrijd, and the bronze plaque dated 2 May 1930 (register 200682). The register says De Visser was "Minister van Onderwijs toen in 1917 de Schoolstrijd werd beëindigd". nl.wikipedia (Johannes Theodoor de Visser) is more precise: he became the first minister of education in 1918, and his Lager-Onderwijswet completed the pacification. The text follows Wikipedia.
- The memorial adoption is verified ("De Visserschool adopteerde het werk", stadscuratorium.nl/?p=3504) and is now in both languages. The ecumenical school comes from its 2019-2020 school guide (AMOS).
- The text now says it is a working school, interior not open, look from the square. Spaced en dash removed from the summary. Rank Okay added to the YAML (it was live only). Links added: Wikipedia De Visser, Stadscuratorium. No free photo exists on Commons (category Columbusplein has none of the school).

## 26 Berlage's gateway blocks, Pretoriusstraat
- New hook from the register's cultuurhistorische context: Berlage's 1893 lecture "Bouwkunst en Impressionisme" ("gescharrel met de vroegere vormen"), with the blocks as the gate that steers you into the district.
- Doors corrected to "most entrances" keep their original doors (register: "het merendeel van de woningingangen"). Added that the shops are still there, along the neighbourhood's shopping street. Look for is now concrete: the quarter-round stairwells with zinc tent roofs and some leaded glass, and the corner bays with a gable and hoisting hook. NL rewritten (it was register copy).

## 29 Bethlehemkerk, Zwanenplein
- Studio 150 is confirmed current and added. Sources: nl.wikipedia (bought in 2017, renovated, recording studio, regular live concerts streamed on YouTube) and studio150.nl (studio since 1979, at Lauriergracht 150 until 2015, livestream concerts with Amarte and Keep an Eye Foundation, events listed for 26 and 27 November 2026). Visiting cue: go to a concert.
- Added "too ordinary" for the Zwanenkerk name and the queen's less than an hour (nl.wikipedia). Attribute listed: 1997 added (city API designation 21 Oct 1997; RCE inscription 28 Jan 1998). Studio 150 link added.
- Window designer: RCE says J.W. Winkelman, nl.wikipedia says H.J. Winkelman. The text now gives only "Winkelman".

## Not settled / for the user
- 4: merge with the northern kitchen houses.
- 15: Airhead nr. 2 could become a place of its own. The Krugerplein wartime round-ups could go into a war-and-memory entry.
- 20: visibility from the street (flagged).
- No free photos for 1, 20 and 24.
