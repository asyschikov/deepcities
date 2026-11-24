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
