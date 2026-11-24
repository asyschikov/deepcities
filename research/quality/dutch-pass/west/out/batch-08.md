# Dutch pass: West, batch 08

27 places done. All NL summaries are 280 characters or fewer, and every place has a fresh NL summary and body ending in "Let op:" with the same items as the EN Look for.

## Counts

- Claims checked: about 400 (roughly 15 per place, EN and NL: summary, body and Look for)
- Changes: 51 in total
  - sourced: 3 (Vredenhof: Johnny Meijer was an accordionist; Morgenster: De Bloem proximity; Haarlemmervaart lock: northern edge of the Staatsliedenbuurt)
  - narrowed: 40
  - cut: 8
- Copy checker (nlcheck.py): 0 copied for all 27 places

## Hooks

The EN hooks were not reordered. Every NL text leads with its own hook drawn from the sourced EN facts. Two EN summaries changed their hook wording because the claim behind it was narrowed:

- Windwijzen: "locals call it the Storingplein" became "locals nicknamed it Parkeergarage Storingplein". The nickname belongs to the garage, not the square.
- Zandpad garden buildings: "the last pre-urban buildings on ... an old towpath" became "one of only two pre-urban paths left in Amsterdam" (RCE complex 491931).

## Notes for the user

- **Vredenhof:** EN said "comic artist Johnny Meijer". The person linked from the Vredenhof wiki is the accordionist, so the text now says accordionist.
- **Zimmerhoeve:**
  - Chickens are no longer in the farm's animal list.
  - Adoption is offered for goats only.
  - No source mentions a mosaic fountain, so that Look-for item was cut. If a photo shows it, add a source and restore it.
- **Brediusbad:** The "hot summers of the 1960s, hardly room to stand" claim was narrowed to the Anefo photo of 11 July 1967. The "summer season only" claim was cut because no fetched page gives the season.
- **Zandpad:** The weathervane says 1853 and the city data says 1885. I dropped "the vane is the better witness", since no source judges between them.
- **Former Apostolic church:** The register records the basement prayer room as planned (1996), not as built. The text says "planned".
  - Open question: the metadata dates are 1923–1925, but the register text gives 1920–1921.
- **Europa:** "Until the 1950s ... ship lift" was replaced. The wiki says the lift (from 1916) was moved west before the bridge came in 1954.
- **Oud Leyerhoven:** The other "Oud Leyerhoven" is city monument 5905, which covers Vondelstraat 77 only, not 77-79.
- **Patrimonium:** "Protestant" and "socialist" were cut because no fetched source gives either label. They are probably true, but a source is needed to restore them.
- **Spaced en dashes:** These remain in unchanged EN text for Zocherstraat HBS, Colour Connection and the Apostolic church summary. Per the brief I did not touch EN beyond claim fixes, and the NL text has none.
- **Short NL bodies:** A few run under 150 words because their EN is short: De Wittenkade (125 words), Colour Connection (130) and the Zandpad (134).

## Verification

I checked all 27 places, claim by claim, against the new EN and the original EN and NL texts. I also confirmed the three "sourced" changes:

- Vredenhof: the nl.wikipedia Vredenhof page links "Johnny Meijer" to the article for the Amsterdam accordionist (1912–1992).
- Morgenster: nl.wikipedia gives De Bloem at 52.38444, 4.86, about 60 m from the pin.
- Haarlemmervaart lock: nl.wikipedia Staatsliedenbuurt says "de noordelijke begrenzing van de buurt".

I spot-checked these narrowings against their sources, and all hold:

- RCE complex 491931 (Schapenburgerpad, Scholten-Commelin, Tesselschadestraat 9)
- Arend Westermanbrug (lift moved before the 1954 bridge)
- Kunstwacht route1 (cable, "zeer forse extra kosten")
- Apostolic church register (cellar was planned)
- Zimmerhoeve site (40 volunteers, goat adoption)
- Zimmerterrein and Staringplein wiki (nicknames)

### Claims removed or fixed

- **Tweede Werk- en Leerschool (NL):**
  - "zwaar en gesloten" became "massief". "Gesloten" was not in any source.
  - "als het fronton van een tempel" became "als een klassiek fronton". The temple was not in any source.
- **Wilhelmina Gasthuis (NL):** cut "een paar jaar voordat het gebouw er zelf stond". This was an inference that the EN does not make.
- **Prinses Julianaschool (NL):**
  - Cut "in Amsterdam" for where the society was founded. No source gives the place.
  - "patriciërshuizen aan de grachten" became "Amsterdamse patriciërshuizen". The canals were not in the EN.
- **Kanaalstraat schools (NL):**
  - Cut "vlakbij". The schools' proximity is not in the EN.
  - "veel ruimere" became "ruimere".
- **Haarlemmervaart lock (NL):** "het lagere peil van Rijnland" became "het peil van Rijnland". The source does not say which level is lower.
- **Zocherstraat HBS:**
  - NL summary: "achter het Vondelpark" became "aan het Vondelpark".
  - NL body: cut "binnen" from the stair newels. The source does not say where they are.
  - EN summary: replaced a spaced en dash with a colon (punctuation only).
- **De Wittenkade 31-35 (NL):**
  - Summary: "aan de Kostverlorenvaart" became "aan de kade". The waterway is not named in the EN or the sources.
  - Body: cut "grotendeels" from Abraham Salm's Paris training.
- **Brediusbad (NL):** "Het mooiste plan" became "Het plan van de kunstenaar". This removes a superlative.
- **Colour Connection:**
  - NL: "donker en eng" became "donker en onveilig", to match the EN and the source.
  - EN body: replaced a spaced en dash with a colon (punctuation only).
- **Cuypers' first houses (NL):**
  - "Het zijn bijna de eerste gebouwen" became "Ze horen bij de allereerste gebouwen". The wording had changed the meaning.
  - The quoted word was 'eigenaardige karakter'. It is now the source's 'zonderlinge karakter'.
- **Patrimonium (NL):** "een paar treden af" became "gaat de ingang met een trap omlaag". The number of steps is not in any source.
- **Freemasons' lodge (NL):** "geslepen" became "gepolijste" diamant in both the summary and the body, as in the source.
- **Windwijzen (NL):**
  - Summary: "aanwijzen waar de wind vandaan komt" became "de kant van de wind op wijzen". The direction the wind comes from was not in any source.
  - Let op: "Lutherhofje" became "Lutherhof", as in the EN.
- **Europa (NL):** cut "Water is lastig in brons te gieten". This was an invented motive.
- **Former Apostolic church:**
  - NL: cut "de Amerikaan" and the invented "Dat had niemand verwacht van de ontwerpers."
  - EN summary: replaced a spaced en dash with a colon (punctuation only).
- **Zimmerhoeve (EN summary):** "Goats, pigs and chickens" became "Goats and pigs". The farm's own animal list has no chickens. The body had already been narrowed, but the summary still listed them. This is now added to `changes`.

### Final checks

- **Copy checker:** nlcheck.py reports 0 copied runs for all 27 places, before and after these edits.
- **Dashes:** no em dashes or spaced en dashes remain in the NL text or in the EN text that will be published.
- **Summary length:** every NL and EN summary is 280 characters or fewer.
- **Lists:** every "Let op:" list has the same number of items as its "Look for:" list.
