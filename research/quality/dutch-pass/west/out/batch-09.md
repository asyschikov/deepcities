# Dutch pass: West, batch 09

I finished all 27 places. Each place has a new Dutch summary and body, written fresh rather than translated from the English. Each Dutch text opens with the most surprising fact that a source supports, so the hook differs from the old Dutch in all 27 places. The English order was left as it was, so there are no "reordered" changes. Each Dutch text ends with "Let op:" and the same items as the English "Look for" list.

All Dutch summaries are 280 characters or less (198 to 257). Most Dutch bodies are 145 to 260 words. Two run long: LAB111 has 311 words and De potkachel has 300, because their English is long and I kept every fact.

The copy checker (nlcheck.py) finds 0 copied runs in all 27 places. No new text has an em dash or a spaced en dash.

## Claim check: 80 changes

- 60 narrowed to what the source says
- 14 cut
- 6 sourced

Three places needed no claim change: Cuypers' own villas, the Rochdale housing in the Bellamybuurt and Overtoom 447.

### Main points by place

- **Sint Hubertusschool:**
  - The Bossche School grew out of a 1947 course in 's-Hertogenbosch that Van der Laan dominated. It did not grow out of courses that were his own.
  - "Italian palazzo" is now "almost Italianate classical".
  - Cut: the Trajan's Column comparison. The reliefs now show "Hubert themes".
- **Dike houses of Oud-Sloterdijk:**
  - "The last village houses" is now "three surviving".
  - Cut: "just north of the Petruskerk".
  - The Look-for item is now the dike itself, which is a protected monument.
- **Hembrugstraat (Rutgers):**
  - "A long block" is now two blocks.
  - Sourced: Wendingen gives 1926. `built` is now 1920–1926.
  - The sources disagree on whether Eigen Haard was the client, so the text no longer states it as fact.
- **Mozes Cohen murals:**
  - "Murdered" is now "died", as the source has it.
  - Cut: the advice from the national heritage institute, and the plaque Look-for item. The plaque item is replaced by a sourced mural subject.
- **Wodan:**
  - "Director's flat" is now "staff flat".
  - Cut: "dark red" (now "dark red-brown") and the occupation-year line.
- **Nassaukerk:** The church stands on the De Wittenkade, not "on the Kostverlorenvaart". The view Look-for item is now the forecourt.
- **Robert Scottstraat 28:**
  - Cut: the convent.
  - "Today" is now "since at least 2022".
- **LAB111:**
  - "Post-mortem lab" is now "pathology lab".
  - Cut: the claim that this was where the dead were examined. The ornament marked the old funeral hall.
  - The 2001 room is dropped. Only the Strangelove bar is sourced.
- **De potkachel:** The Kolenkit link is narrowed. The shoe at Sinterklaas is now a one-off that someone did once, not a custom.
- **Piet Hein Eek doors:**
  - Cut: his birth year.
  - The land registry date of 1996 could not be found. The 2017 trade article gives 1998, so `built` is now "1990s".
  - Sourced: the Herman corner block, from the city monument record.
- **Zes anamorphosen:**
  - Cut: "1980s" and the urban-renewal framing.
  - Sourced: Holbein's *The Ambassadors*.
  - The painted panels are ceiling panels of the gallery, not panels above the shops.
- **Graficolor:** "Big industry", "leading architects" and "largely intact" are each narrowed to the register's wording.
- **Kesbeke:**
  - "Last" is now "biggest". The shop is "near" the factory, not across the street.
  - The TV series and the tours now use the sourced figures: 700,000 viewers, and tours fully booked for 2026.
  - Cut: turmeric.
- **Corantijnschool:**
  - Cut twice: "one of the very first buildings of Plan West".
  - The name is now basisschool Corantijn.
- **De Boom:** The memorial stone is for parishioners who died in the war and is in a church wall, not described as being for "resistance fighters on the tower". The organ was restored in 2015.
- **Drie heertjes:**
  - "Promised never to reveal" is now "agreed to keep secret".
  - "The last in the series" is narrowed to Wikipedia's list of works.
  - The materials are now iron and bronze.
- **Traffic police station:** The build dates are now 1923–1924. The conversion date is now mid-1994.
- **WG pavilions:**
  - The ventilation wording is narrowed.
  - Cut: "red" from the granite stone.
  - The hospital left in 1981–1983.
- **De Greef blocks:**
  - "Among the first" is now "fairly early".
  - The cramped courtyards are now hedged with "probably".
- **Hoofdweg Rutgers:**
  - Cut: the Kramer comparison.
  - The curved shopfronts are now built-in corner shops.
- **Kijkende figuur:**
  - Sourced: CJIB recorded 2,730 offences in 2024 and 6,200 in 2025, replacing "thousands".
  - Cut: "and the traffic".
- **Roemer Visscherstraat villas:** No source says that Van Eeghen and Huizinga built number 44, which Cuypers designed for Wertheim. The summary now credits only Kuipers' villas to them.
- **Columbusplein (Noorlander):**
  - Cut:
    - "named after explorers";
    - "typical of early Plan West";
    - the Look-for items on brick entrances and corner shops, because no source describes the housing.
  - Narrowed:
    - the squares come from Sloten's plans of 1909 and 1916 (city monument 200682);
    - "Meeuwenlaan in Noord" is now just "Meeuwenlaan";
    - the summary now says "in De Baarsjes", not "for Plan West".
  - Sourced:
    - the Visserschool by Commer de Geus, from city monument 200682;
    - the 4 May memorial, from Stadscuratorium.
  - Both sources are in `sources_add`.
- **Gemeentetram headquarters:**
  - The porter's lodge is to the north-west, not "round the back".
  - The money-tram siding is now worded as Wikipedia has it: the money tram brought the conductors' takings, in the early years.

## For the user

- **Hembrugstraat:** The sources disagree on whether Eigen Haard was the client. The text now hedges this.
- **Piet Hein Eek doors:** The 1996 date from the old text could not be verified, so it is replaced by the trade article's 1998.
- **Cuypers' villas:** Wikipedia and amsterdamopdekaart disagree on which villa carries the tile panel. The English follows amsterdamopdekaart (77-79), and I left it as it is.
- **Columbusplein:** The site has no official description yet, because the monument status is still "in procedure". The place is thin, with a single Look-for item. It could be refreshed once the city publishes the description.

## Verification

I checked all 27 places. For each one I compared every claim in the new Dutch with the new English and the original texts. I fetched the sources for all 6 "sourced" changes and confirmed them:
- Wendingen object 1292: "Datum 1926", the two blocks between blocks by De Bazel, the small square, and Casciato's Eigen Haard attribution called wrong.
- deHOUTjournalist: "een eerdere samenwerking in 1998 voor de Cremerbuurt".
- City monument for Pieter Langendijkstraat 39-45: J. Herman, 1909, corner houses.
- en.wikipedia, The Ambassadors: the skull is in anamorphic perspective.
- CJIB lists: 2,730 offences in 2024 and 6,200 in 2025 at "Transformatorweg thv kunstwerk 'Kijkende figuur'".
- City monument 200682: Sloten's plans of 1909 and 1916, Commer de Geus, the Visserschool on the north side. Stadscuratorium: the 4 May memorial on the Columbusplein, there since 2018.

I also checked the narrowed memorial-stone claim for De Boom on nl.wikipedia: the stone is in a wall of the church, and both men were parishioners who died in the war.

After the fixes, nlcheck finds 0 copied runs in all 27 places, so no copied runs needed fixing. No patch text has an em dash or a spaced en dash. Every NL and EN summary is 280 characters or less. Every Dutch "Let op:" list matches the English "Look for" items.

### Claims removed (not in the English or the originals, or added to them)

1. **Overtoom 447:** cut "Kijk goed en je ziet de naad, verstopt in een lisene tussen de twee huizen". The register does mention the seam, but the English does not, so it counted as an added fact.
2. **Traffic police station:** cut "Leidseplein, Spui, Koningsplein" (not in the English).
3. **Mozes Cohen murals:** cut "bronzen" for De Ratelaar (not in the English).
4. **De potkachel:** cut that Gomes "bestookte de gemeente" until the fire was relit. The English says only that he got it relit.
5. **Piet Hein Eek doors:** cut "in één klap" (fame came at once).
6. **Zes anamorphosen:** cut "Het bekendste voorbeeld" (an unsourced superlative). It is now "Denk aan de schedel...".
7. **Graficolor:** cut "dakterras" (not in the English).
8. **Corantijnschool:** cut "sliepen hier Duitse soldaten" and "altijd een school geweest" (summary), and "Daarvoor en daarna was en is het ... school" (body). The text now says the occupiers used it as barracks and that it is a school again.
9. **De Boom:** cut "zonder het te willen" (the department store paying unwillingly) and "ver buiten de stad". The church is now "toen nog in de gemeente Sloten".
10. **Drie heertjes:** cut "mag ze niet" (that the city is not allowed to say more). It is now "Meer zegt ze niet".
11. **Wilhelmina Gasthuis pavilions:** cut "jonge" (Wilhelmina) and "artsen en bouwers". It is now "zo hoopte men".
12. **Roemer Visscherstraat villas:** cut "van de verdieping" and "in de trapgevel" from where the sun motif sits. It is now "boven de deur en boven de ramen", as in the English.
13. **Columbusplein:** cut "voordat Amsterdam hier iets te zeggen had" (an inference). It is now "toen dit nog de gemeente Sloten was".
14. **Sint Hubertusschool:** cut "de bovenste" (that the upper hall has the gallery). The English says only "two stacked halls with a gallery".
15. **Robert Scottstraat 28:** cut "de wanden" (that the walls got their colours back). The English says only that the original colours were restored.

### Claims fixed (wrong or skewed against the English)

- **Traffic police station:** the traffic-lights claim is hedged again in the NL summary and body ("zouden ... zijn bediend"), as the English has it ("reportedly", "are said to").
- **Cuypers' villas:** the NL said the rental right half "got windows on the street side". The English says only that the street side held secondary rooms, except in the rental half. It is now "behalve in de verhuurde rechterhelft". Also, "rekent af met" is now "steekt de draak met" (the English says "mocks"). "heeft overal kritiek op" is now "kraakt het af".
- **De potkachel:** "nog geen kras" (not even a scratch) is now "hooguit een kras" (the English says "no more than a scratch"). The Robert Scottbuurt is back with Gomes as a resident, not attached to the meeting.
- **Wodan:** "gestapeld in staand verband" is now "staand klezorenverband", the register's term. Standing bond and stack bond are different bonds.
- **LAB111:** "harde lijnen" is now "sterke horizontale en verticale lijnen", as in the English.
- **Kesbeke:** "Zeeuws-Vlaanderen" is now "Zeeland", as in the English.
- **Kijkende figuur:** the offence counts are tied to their years again (2,730 in 2024, 6,200 in 2025).
- **De Greef blocks:** "Meestal" is restored (the homes were mostly one room).
- **Robert Scottstraat 28:** the NL had a "Let op:" list, but the English has no Look-for list, so I removed the NL list to keep them matched. The user may want to add a Look-for list in both languages.
- **Roemer Visscherstraat 47:** the "original iron fence" is restored from the English.
- **Sint Hubertusschool:** "dikke voegen" is now "grove voegen" (coarse joints).
- **Mozes Cohen:** "vrachtschip" is now "beurtschip", as in the NL body and the source.

### English text fixes (no change of facts)

- **Mozes Cohen murals:** the spaced en dash in "(Tiel 1901 – Auschwitz 1942)" is now "(born in Tiel in 1901, died in Auschwitz in 1942)".
- **Hoofdweg housing:** the spaced en dashes around the Rutgers aside are now commas.
- **Drie heertjes:** the doubled "high above ... high up" is fixed. The body now reads "sit high above the market stalls on red stools".

Totals: 27 places verified, 18 claims removed (15 entries above; Corantijnschool, De Boom and the WG pavilions each had two), 0 copied runs fixed.
