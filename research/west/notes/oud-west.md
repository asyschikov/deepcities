# Notes: oud-west slice (Helmersbuurt, Overtoomse Sluis, Bellamybuurt, Da Costabuurt, Van Lennepbuurt)

There are 56 places in `places/oud-west.yaml`:

- 45 places cover all 63 monument records in `slices/oud-west.json`, plus 2 rijksmonuments missing from that input (526940, 527012). None was left out.
- 11 places are not monuments.

The validator reports 0 errors. I ran `areas.locate` on every point, and each one falls in Oud-West, De Baarsjes, in one of the five buurten of this slice.

## Merges (monument numbers per place)

| Place | Monuments |
|---|---|
| Wilhelmina Gasthuis pavilions I and II | 224043, 224044 |
| Wilhelmina Gasthuis surgical clinic | 524815, plus 526940 and 527012. Per RCE these two are only address supplements to 524815 (WG-plein 409-477 and 805-873), added because the RDMZ database could not hold all addresses under one number. They were not in the slice input; added on the coordinator's note. |
| Wilhelmina Gasthuis women's clinic and X-ray building | 524817 (rijks), 224032 (municipal X-ray building, 1925) |
| Helmersstraat crossroads | 224011 (2e C. Huygensstraat 43-53), 224010 (1e Helmersstraat 69-83), 224003 (2e C. Huygensstraat 32-42) |
| Catholic boys' schools, Kanaalstraat | 224050 (no. 102), 224053 (nos. 147-149) |
| Horse-tram depot, Overtoom | 511179, 513944 |
| Rochdale housing, Bellamybuurt | 224012, 224006 |
| De Hallen (Westelijke Tramremise) | 524819–524826 (eight rijks parts) |
| Tetterode type foundry | 524828, 524829, 524830, 524831 |
| Kinkerstraat corners at the Da Costakade | 200608 (Vinkzicht), 224037 (Kinkerstraat 49-53) |

Each remaining monument has a place of its own. The gatehouse and surgical clinic texts also cite neighbouring records (224041, 224040) for context, but those buildings have their own places too.

## Added beyond the register (11)

1. **How to Meet an Angel**, Ilya and Emilia Kabakov, 1e Constantijn Huygensstraat. The text also mentions *Crystal Growth* (buitenkunst 2667).
2. **Roosje** (Rombout Oomen), the giant hare mural on the Jacob van Lennepstraat.
3. **Mozes Cohen's sanitation murals** with their plaque, in the Hannie Dankbaarpassage.
4. **Megamozaïek Aqua Costa** by Fabrice Hünd, at the Da Costa bathhouse.
5. **De Liefde**, the vanished Cuypers church on the Bilderdijkstraat, with Buren's marker (buitenkunst 2622).
6. **Kwakerspoel**: the lost lake under the Kwakersplein, with the Ratelaar artwork.
7. **Overtoomse Sluis**: the old lock and the origin of the Overtoom.
8. **Edelstenen**, Vinkhoek.
9. **A Happy Dog from Baghdad**, with the Solleveld tableaus.
10. **Muur van de dichters** (Danilo Joanovic), Nicolaas Beetsstraat 82.
11. **Bellamy Buurtmuseum** (odd-museums). The only source is nl.wikipedia's Bellamybuurt article. Please verify that it is still open.

## Dutch texts

Every `nl` body is spliced from Dutch source wording:

- city register texts (redengevende omschrijving, cultuurhistorische context, conclusie);
- national register omschrijvingen;
- nl.wikipedia articles: Staringplein 9, De Hallen, Lijkenhuisje, Kwakerspoel, Overtoomse Sluis, De Liefde, How to meet an angel, Roosje;
- Dutch descriptions from Buitenkunst Amsterdam.

The parts 2–5 nl texts were rewritten after the coordinator's instruction, because the earlier versions were paraphrases. Every source used is in `links`.

I wrote only minor connective phrases in Dutch myself. Two examples:

- the closing sentence of Bellamy Buurtmuseum;
- the link between Overtoom 343 and its Kloveniersburgwal context.

No nl text was translated from the English.

## Source conflicts and uncertainties

- **Lijkenhuisje (200554)**: the register dates it c. 1880–1885, possibly mid-19th century. nl.wikipedia gives 1845 and J.D. Zocher jr. The register says Zocher designed the cemetery in 1844. The attribute reads "1845 or c. 1880–1885 (disputed)".
- **224010**: the architect field says "onbekend", but the 224013 text names J.W.F. van Schaik for these houses. I used Van Schaik.
- **Beirer block, 2e Constantijn Huygensstraat 43-53 (224011)**: the record says 1892, but the 224013 text says 1897. I used 1892.
- **Pathology lab (524816)**: designed in 1927 and built from 1928. Some secondary sources say c. 1930.
- **Nurses' home (224041)**: council decision 1903, drawings 1904, built c. 1904–1905. It is not 1893 as some lists claim. The attribution to Leguyt is uncertain.
- **Diamond works (224035)**: the architect field (Van Dijk & Nagelvoort) probably refers to the 1924 rebuild, not the original works.
- **224003**: the register date range of 1875–1899 is vague. I used "c. 1880–1899" for the merged crossroads place.

## Boundaries

- **OT301** (Overtoom 301) is already a place in the vondelpark slice, so it is not repeated here.
- **Overtoomse Sluis** (the lock and bridge 199 over the Kostverlorenvaart) sits on the border with De Baarsjes. Its point falls in Overtoomse Sluis buurt, but the baarsjes slice may also cover it. The coordinator should check for duplicates.
- **Ten Katemarkt** was left out: I found no historical source beyond commercial listings.
- **Not used**: the buitenkunst records *Vrouw kijkt uit raam*, *Zes anamorphosen*, *Vindhek* and *Microbe*. Their descriptions were too thin for a place.

## Places missing photos (19)

Commons has no clear, verified exterior photo for these:

- Wilhelmina Gasthuis pavilions I and II
- Wilhelmina Gasthuis nurses' home
- Wilhelmina Gasthuis women's clinic and X-ray building
- Pieter Langendijkstraat 39-45
- Overtoom 343
- Vondelpark manure sheds
- Van der Palmschool and Allebéschool
- Observatiehuis
- Rochdale housing
- Diamond works / Flick
- Bellamystraat 80
- Lijkenhuisje
- Da Costakade 83-91
- Da Costastraat 63-89
- Reiminger printing works
- Kinkerschool
- Mozes Cohen's sanitation murals
- Edelstenen
- Bellamy Buurtmuseum

A few candidates were rejected after checking:

- "Bilderdijkpark 1, Bilderdijkstraat 36.jpg" shows a corner house, not the Lijkenhuisje.
- "2022 Derde Kostverlorenkade 34, Asd-muurschildering.jpg" shows a mural in the backyard, not the school.
- "2021 WG plein, dubbele kliniek.jpg" could not be tied to a specific record.

"Zwaardvegershofje.JPG" (Lutherhof's Wikidata image) no longer exists on Commons.

## Walking routes

1. **Hospital to hofje (Helmersbuurt → Overtoomse Sluis)**: Wilhelmina Gasthuis gatehouse → pavilions I and II → women's clinic and X-ray building → surgical clinic → eye clinic → pathology laboratory → nurses' home → How to Meet an Angel → GEB substation → Helmersstraat crossroads → Eerste Helmersstraat 115-119 → Derde Helmersstraat block → Pieter Langendijkstraat 39-45 → Lutherhof.
2. **Schools of the schoolstrijd**: De Savornin Lohmanschool → Prinses Julianaschool → Catholic boys' schools, Kanaalstraat → Van der Palmschool and Allebéschool → Zocherstraat HBS → Observatiehuis → Tweede Werk- en Leerschool → Busken Huetschool → Kinkerschool.
3. **The Overtoom, from lock to garage**: Overtoom 343 → Horse-tram depot → Overtoom 411-421 (1727) → Overtoom 429-439 → Overtoom 447 → Johannapark → Vondelpark manure sheds → Autopon → Overtoomse Sluis.
4. **Work and trams (Bellamy / Da Costa)**: De Hallen → Mozes Cohen's sanitation murals → Bellamy Buurtmuseum → Bellamystraat 80 → Diamond works and Flick → Rochdale housing → Reiminger printing works → Cooperative bakery Vooruit → Zuid-Hollandsche Bierbrouwerij depot → De Nieuwe Liefde → Tetterode type foundry → Megamozaïek Aqua Costa.
5. **Lost Oud-West (hidden history)**: Kwakerspoel → De Liefde (vanished church) → Lijkenhuisje → Kinkerstraat corners → Edelstenen → Da Costaplein → P.W. Janssenhofje → Roosje → A Happy Dog from Baghdad → Muur van de dichters.
