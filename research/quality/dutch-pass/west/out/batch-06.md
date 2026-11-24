# Dutch pass, West batch 06

27 places done. Each place had every claim in the English and Dutch summary, body and Look for checked against its `links`, its draft `sources` and its monument records: the Amsterdam monuments API and data.amsterdam.nl texts, the RCE register, nl.wikipedia through its API, and the Kunstwacht/Buitenkunst API. The Dutch summary and body were rewritten fresh. The copy checker (`nlcheck.py`) reports **0 copied runs for all 27 places**. Every Dutch summary is 280 characters or fewer. No em dashes and no spaced en dashes.

Claim changes: **59** (2 sourced, 45 narrowed, 12 cut). The full old and new text and the evidence are in `batch-06.json`. Each change is made in English and the fresh Dutch follows the corrected English.

## Claim changes by place

- **Walenkamp blocks**: "from east to west" narrowed to "starting from the east". "Zaanhof a few streets away" narrowed to "also in the Spaarndammerbuurt" (the register gives no distance).
- **Het Molecularium** (no draft): the Krommert ditch is cut twice (body and Look for). No source mentions it, and nl.wikipedia says the street follows the former Slatuinenpad. "The artist's sign" narrowed to "the artist's own text". The location narrowed to "level with numbers 66 and 150" (Kunstwacht API; that API also gives the materials: brick, wood, planting).
- **Huis Wartburg**: "A 1912 parish hall" narrowed to "designed in 1911". "Far from" the Singel churches narrowed. "Where Luther translated the New Testament" narrowed to "where Luther hid after he was outlawed in 1521" (the register's wording).
- **Leonardo da Vinci mural**: "on its corner" cut. Morgenster year corrected from 1994 to **1995** (nl.wikipedia list and the Morgenster article).
- **Levensboom**: "the leaves and the countries they stand for" narrowed to "the foliage" as a whole.
- **Petruskerk**: "Saved from demolition" narrowed to "saved by a foundation after it closed". The parsonage is "18th century or older". The consistory room has chamfered corners, not octagonal ones.
- **Brettensuite** (no draft): "asked him to stay" narrowed to "approached him". The Bretten "between the railway and the Haarlemmerweg" narrowed to the park as one of the green "fingers". The Woeste Westen tunnel pair is cut. The shape of No. 1 is cut. "Rust colour changes with the weather" narrowed to the source line about season, weather and time of day.
- **Prinses Beatrixschool** (no draft): "three more listed schools next door" narrowed to "a triangle of school buildings".
- **Bethelkerk**: the school's windows are iron-framed, not steel.
- **Vondelpark 4**: "pumped the park dry" and "low ground" narrowed to drainage near the Overtoom. The caveat "(not always present on recent photos)" is cut.
- **Hoofdweg housing**: De Dageraad **sourced** (nl.wikipedia Piet Kramer, added to `sources_add`).
- **Jan Evertsenstraat housing**: "around 140 flats" cut. "Arcade under the corner block on the canal side" cut (both were probably from the RCE texts, which now return 404, see below).
- **Pieter Oosterleeschool**: "teacher" narrowed to "educationalist" (pedagoog). "Built 21 schools" narrowed to "received 21 school commissions" (five of the buildings are demolished).
- **Vierwindstrekenbrug** (no draft): "on the boundary between Bos en Lommer and De Baarsjes" cut. "Inuit hunter" narrowed to "Inuit man with a weapon".
- **Weefpatronen**: "best known for large textile works" narrowed. "The information tile" cut.
- **Air cells**: the tunnel runs "along", not "under", the Spaarndammerdijk and Tasmanstraat. "Light through the towers at dusk" cut.
- **Da Costaplein**: "designed and built by Eldering" narrowed to "designed by" (the register says J. Molenaar probably built the north-west block).
- **Diamond works / Flick**: "one of the oldest industrial buildings in the Bellamybuurt" narrowed to "possibly one of the oldest surviving steam-powered diamond works". "Nieuwer-Amstel had few building rules" cut. "Caspar Flickhof opposite, named after the chocolate maker" narrowed to "the factory's west side seen from the Caspar Flickhof".
- **Getekend** (no draft): "sandblasted" narrowed to "had cleaned". "Darker band wrapping around" narrowed to "the upper block that seems to hang off the wall".
- **Jan Maijenschool**: "as in many Public Works schools" cut. "Public garden" narrowed to "quiet garden" (stiltetuin).
- **Mercatorplein**: the tower stands beside the Van Spilbergenstraat gateway, not over it.
- **Oranjehof**: "named defiantly after the House of Orange" and "a quiet statement under occupation" narrowed to the register's "referred to the war years". "Just finished the Geuzenhof next door" narrowed to "earlier built the nearby Geuzenhof (1933)". "Single working women" narrowed to "single women". "Traditional brick" narrowed to "a historical building type". "Stack bond" corrected to staand verband.
- **Westerwijk**: "Jantzen's first building" narrowed to "one of his first" (the register lists Houtmankade housing of 1922–1924). "Thousands of newcomers" narrowed to the membership growth. "Neighbourhood groups" narrowed to "others, such as the food bank".
- **Huishoudschool**: "where two reforming women taught" narrowed to "a school founded by two women". "Pioneer of the women's movement" narrowed to "champion of women's rights" (nl.wikipedia Jeltje de Bosch Kemper, added to `sources_add`). "Swiss" chalet narrowed to chalet.
- **How to Meet an Angel**: "(now Arkin)" cut. "Number 36" for Crystal Growth **sourced** (Kunstwacht API).
- **ZHB depot, Remonstrant almshouse**: all claims checked and supported. No changes. The 1900 date comes from the monuments API.

## Hooks

The Dutch leads with a different, sourced fact than the English in most places, for example:
- Wartburg leads with the Luther relief.
- Levensboom leads with the dispute over the Oosterpark site.
- Petruskerk leads with the vanished village.
- Brettensuite leads with the evicted sculptor.
- Beatrixschool leads with tuberculosis.
- The ZHB depot leads with the "cellar" that was not one.
- The diamond works leads with diamonds and chocolate under one roof.
- Mercatorplein leads with the rebuilt north side.
- Oranjehof leads with the motto.
- Westerwijk leads with the hidden hall.
- Huishoudschool leads with the founder living next door.
- Vierwindstrekenbrug leads with the West figure.
- Weefpatronen leads with the hidden cow.
- Air cells leads with the plain grilles that were planned.

The English was **not** reordered. It was touched only to fix claims.

## For the user

1. **Jan Evertsenstraat (Van der Mey)**: RCE pages 527151 and 527152 return 404 on both the RCE site and rijksmonumenten.nl. Those numbers are also not in the Amsterdam monuments API, which does have 200727 as a municipal monument. So the attributes `heritage_status: National + municipal`, the monument numbers and the two RCE links cannot be verified. Please check them; I did not change attributes or links.
2. **Huis Wartburg**: `built: 1911–1912` is not in the register, which gives only the 1911 design. The Timothy plaque in Look for is inside the hall, so you cannot see it from the street.
3. **Huishoudschool**: `listed: 1996` does not match the RCE register entry, which says "Inschrijving register 29 augustus 2005".
4. **Da Costaplein**: the register text says "uit 1903", while the API metadata and the 1905 drawing support 1905–1906. The English keeps 1905–1906.
5. **Oranjehof**: the register text says built 1941–1942, while its context paragraph says 1942–1945 and the API metadata says 1943–1945. The English keeps 1941–1942 (the stone panel says 1942).
6. **Vondelpark 4**: the clock caveat was cut as unsourced. If the clock is really gone, someone should look and add a dated source.
7. **Molecularium**: the Wikidata link Q97397864 is the artist (Sander Rood, photographer), not the artwork.
8. **Prinses Beatrixschool**: the English has no "Look for:" list (its look-for is in prose), so the Dutch has no "Let op:" either.
9. nl.wikipedia rate-limited the API mid-run. The articles needed were fetched after retries.

## Verification

All 27 places re-checked: every claim in the new Dutch was compared with the new English and the original texts, the Dutch was compared with the English for dropped or added facts, the two "sourced" changes were re-fetched, and the copy checker, dash rule, Look for lists and summary lengths were re-run.

Sourced changes confirmed:
- **Hoofdweg housing**: nl.wikipedia Piet Kramer (API) has "1919-1922: Woningcomplex De Dageraad ... (samen met Michel de Klerk)" and the Scheepvaarthuis with Van der Mey and De Klerk.
- **How to Meet an Angel**: Kunstwacht API (art object 2667, Crystal Growth) gives streetName "1e Constantijn Huygensstraat", houseNumber "36". nl.wikipedia also confirms the Wim Brands line ("En ik denk dat ben ik").

Claims removed or fixed in the Dutch (not in the English, or more than the sources say):
- **Walenkamp blocks**: the gables on the long streets were "recht en simpel"; "recht" (straight) is not in the sources, now "eenvoudig".
- **Het Molecularium**: the neighbour was "hij" (male); no source gives the gender, now neutral.
- **Brettensuite**: "sinds 2004 werkt hij in" Slochteren claimed he still works there; now "in 2004 verhuisde hij naar". "Speciaal" (brought back specially) cut. The music comparison of the suite, dropped from the Dutch, restored from the English.
- **Prinses Beatrixschool**: "in 1945 the death rate was back at the 1928 level" cut (it is in the old Dutch text, but not in the English); now only that tuberculosis deaths rose again in 1945.
- **Vondelpark 4**: Hamer "later" designed the pavilion; "later" cut.
- **Hoofdweg housing**: Kramer's "wilde" (wild) Spaarndammerbuurt façades cut; now "het werk".
- **Pieter Oosterleeschool**: "vurig" (ardent) champion cut.
- **Zuid-Hollandsche Bierbrouwerij depot**: the airlock "to keep the cold in" cut (no source gives the purpose). "On the building drawings it is called a cellar" cut from the Dutch, because the English does not have it (the register does say it).
- **Air cells**: the panel found plain grilles "te kaal" (too bare); cut, now only that it wanted something friendlier.
- **Oranjehof**: the Dutch put each motto on a specific façade; no source says which is on which, now "op voor- en achtergevel".
- **Remonstrant almshouse**: "among four-storey blocks" cut (no source).

Copy runs fixed: 1 (Oranjehof: a new rewording of the mottos briefly made an 8-word run with the register; reworded). The checker now reports 0 copied for all 27 places.

Spaced en dashes in the English (punctuation only, no claim change) replaced with a colon, comma or parentheses in: Leonardo da Vinci mural, Levensboom, Bethelkerk, Hoofdweg housing, Jan Evertsenstraat housing, Jan Maijenschool, Mercatorplein, Oranjehof (summary and body). These English summaries are now in `patch`.

Look for / Let op lists match in count for every place. Every NL and EN summary is 280 characters or fewer.

For the user: Petruskerk has `listed: 1970` in its attributes but the body says it was listed in 1979 (not changed). How to Meet an Angel: nl.wikipedia calls Wim Brands "schrijver"; the English says "poet" (kept).
