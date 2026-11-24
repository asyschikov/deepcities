# Dutch pass: nieuw-west batch 03

Places done: 26 of 26. Every place has a fresh Dutch summary (at most 280 characters) and body, with "Let op:" matching the English Look for list.

## Claims

Every claim in the EN and NL summary, body, Look for and attributes was checked against the place's links and draft sources. Where those ran out, I used nl.wikipedia, the monuments API and the Commons pages added under `sources_add`.

| Kind | Count |
|---|---|
| Sourced (proof added) | 5 |
| Narrowed to the source | 51 |
| Cut | 10 |
| Reordered (English only) | 2 |

- No changes needed: Sloterweg 1210-1212, Hangbrugmaisonettes, Heemtuin Sloterpark.
- The changes are listed per place in `batch-03.json` under `changes`, each with its source URL and the supporting evidence.

## Copy checker

The checker reports 0 copied runs for all 26 places. The Vrijheidscarillon plaque text was a quoted inscription, which the brief allows, but it was still paraphrased so the checker shows 0 everywhere.

## Places whose hook changed

- In the English, only two places were reordered:
  - **Former Caltex garage:** "Petrol stations usually last about twenty years" now leads the body.
  - **Vrijheidscarillon:** the young carillonneurs paragraph now leads the body.
- The Dutch body now opens with a different hook from the English in these places, all with facts already in the English:
  - Gerhardhuis
  - Groot Landschap ("Groot vliegtuigongeluk")
  - Heemtuin (no money, so no park)
  - Lau Peters towers (the 1968 prison verdict and the Bruut top 100)
  - Lelylaan viaduct ("largest urban viaduct in Europe")
  - Sint-Lucaskerk (turned north-south for the light)
  - Slotervaart canal (named after water that is gone)
  - Lumion school (the gym hanging from its trusses)
  - Nieuw en Meer (squatted on the Van Basten day)
  - Oeverlanden (nature thanks to people who dug in their heels)

## For the user

- **Adriaan van Oordthof (real error):** the live text placed the court in phase 1 of the Couperusbuurt renewal. The June 2024 vernieuwingskrant shows it in **phase 3** (Veld 10a), and Stadgenoot gives phase 3 a peildatum from 2029. The body and attributes were corrected:
  - `outlook_when`: "phase 3, rehousing from about 2029".
  - `outlook_note`: updated to match.
  - Please check this before it goes live.
- **Former Caltex garage:** "The pumps are long gone" was cut. Amsterdam op de kaart (2022) says an unmanned Tango station still sells fuel there, and the garage is now a gym and futsal hall. The Heemschut date was also corrected from 2011 to 2012.
- **Vrijheidscarillon:** "from Bach to ABBA" misread the source, which says the Beatles to ABBA. Only 14 of the 23 original bells were named after provinces.
- **Sint-Lucaskerk:** the summary said the light, not the decoration, "makes the church", and that it was ahead of Vatican II. The register says the shift was from decoration to the faithful, and that the plan came from the 1950s debate, not from the Council. The summary was narrowed.
- **Stibbe coat factory:** "architect of De Nederlandsche Bank" is not in any fetched source, so it was cut. If you know a source for it, add it and restore the phrase.
- **Nieuw en Meer:** "Van Basten's volley" and "won the European Championship" became "the day Marco van Basten sent the country into ecstasy", which is what the source says. There were also two cartridge stores, not one.
- **Slotervaart canal:** the Piet Römerbrug's "two red lanterns" has no source and was cut. The Bloeddonorbrug's railings are black, not blue.
- **Lelylaan viaduct:** Van Santen's lamp posts only look bent, through the mirrors in their cubes, so they are no longer called "slanted". Source added: Buitenkunst 707.
- **Groot Landschap:** "de puist" comes from one local columnist, so it was narrowed from "locals call".
- No new facts were added anywhere. Nothing was written to the live site, and nothing was committed.

## Verification

All 26 places were checked against the new English and the original texts. Every factual claim in the new Dutch was traced, and the Dutch carries the same facts as the English. Mechanical checks:
- The copy checker reports 0 copied runs for every place, both before and after the fixes.
- No em dashes or spaced en dashes.
- The "Let op" lists match the "Look for" lists item for item.
- Every NL and EN summary is 280 characters or fewer.

**Sourced changes re-fetched and confirmed:**
- Commons/Anefo 27 April 1970 photos (plaque unveiled, parents present).
- Commons Frits Sieger relief.
- nl.wikipedia pages for Hannie Schaft, Arondéus, Belinfante, Jan Postma (CPN) and Reina Prinsen Geerligs.
- Monuments API 200565 ("Voormalig Christelijke MTS").
- The Sloten-Oud Osdorp linde article.

**Other new sources checked:**
- Geheugen van West (Heemschut, 14 July 2012).
- Amsterdam op de kaart (Tango pump in 2022).
- Wikipedia's Trouw quote from Lebbing.
- The Stadgenoot site and vernieuwingskrant. Veld 10a (phase 3) is Louis Couperusstraat 70-84, Arthur van Schendelstraat 20-27 and A.M. de Jongstraat 2-14. These match the footprint of monument 200789. Veld 10b, marked for demolition (Burgemeester Rendorpstraat 45-61), lies outside it.

**Claims removed or fixed:**
- **A.H. Gerhardhuis (NL summary):** "Wie in de jaren vijftig oud werd en niet naar de kerk ging, kon in Amsterdam nergens terecht" overstated the English, which only says the home was the city's first for non-church elderly and that the denominational system left them out. It now reads "Een bejaardenhuis voor wie niet naar de kerk ging: dat had Amsterdam nog niet, tot dit rode blok ...".
- **Pauluskerk (NL body):** "Van buiten een tent, van binnen ook" claimed the interior reads as a tent, which no source says. It now reads "Een kerk in de vorm van een tent".
- **Sint-Pancratiuskerk (EN and NL body):** "the local history society jokes" / "De plaatselijke historici grappen" was wrong. The joke is the framing of Theo Durenkamp's article on the website of the Dorpsraad Sloten-Oud Osdorp (23 Feb 2024), and no history society is involved. It now reads "an article on the village council's website jokes" / "Een stuk op de website van de dorpsraad stelt met een knipoog". The change entry was updated to match.
- **De Oeverlanden (NL body):** "Dat hier natuur is, danken we aan dwarsliggers" credited the activists with the nature itself, which grew on its own. It now reads "Dat hier nog natuur is".
- **Sint-Lucaskerk (NL body):** Removed the invented causal claim "Dat kostte wel een bijna dichte gevel langs de Osdorper Ban", which is in no source. "zoveel mogelijk zon" was narrowed to "om het licht uit het oosten en het westen te vangen", matching the English.
- **Former Christian MTS (NL body):** "het meest opvallende stuk van deze school" was a ranking not in any source. It now reads "een van de bijzonderheden" (the register lists the trusses among three special features). "dakspanten" became "betonnen spanten".
- **Nieuw en Meer (NL body):** Removed "stilletjes" (squatters moved in "quietly"), a detail not in any source.
- **Former Stibbe coat factory (NL body):** Removed "Ernaast", which claimed OKU House stands next to Berghaus. The English does not say this.

Totals:
- Places verified: 26.
- Claims removed or fixed: 8.
- Copied runs fixed: 0.
