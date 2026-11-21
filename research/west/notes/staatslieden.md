# Notes: staatslieden slice (Staatsliedenbuurt, Frederik Hendrikbuurt, Centrale Markt)

39 places: 32 monument places (from 41 register records) + 7 non-monument C-list places.

The Westerpark park and the Westergasfabriek lie outside these wijken (spaarndammer slice).
The lock-keeper's house/pumping station of the Haarlemmervaart lock (part of rijks complex
526735) is in the Spaarndammer wijk and is not in this slice. Its lock (526737) is here.

## Merges

| Place | Monument numbers |
|---|---|
| De Otter | 1198 (mill), 408758 (west timber shed), 408759 (south timber shed); complex 408840 |
| AWV housing, Schaepmanstraat (Berlage and Van Epen) | 526726 (block A), 526727 (B), 526728 (C); complex 526725 |
| Former waterworks (Watertorenplein) | 526713 (pump building), 526714 (windketel), 526715 (storage), 200967 (municipal: steel water tower 1966) |
| Nassaukade 112-115 (palace front) | 200604 (no. 112) + 223008 (nos. 113-115): one design, one façade |
| Nassaukade 17-18 (De Distel tiles) | 223004 (no. 17) + 200603 (no. 18) |
| Keith Haring mural (Koelhuis) | 200954 (cold store and mural are one listing) |

Splits and choices:
- Cluster with 223015 (Nassaukade 123, Kuipers 1910) and 223038 (Tweede Hugo de Grootstraat 2-18, widows' homes 1880s) was split: different builders, dates and functions.
- Nassaukade 116-119 (223009, Leguyt) kept separate from 112-115 (different architect and client; the register puts it in the Frederik Hendrikbuurt). **Coordinator:** these could be merged into one "Nassaukade townhouses" place if you want fewer pins; the two places are about 25 m apart.
- Zaagmolenschool (200769) kept separate from the De Bazel complex (200763) around it: different designer (Public Works), and it hosts Filmhuis Cavia.
- Koelhuis + Haring: one place, category `street-art`, because the mural is why people go. The building's history is in the body.
- No monuments were left out.

## Source conflicts and uncertainties

- **Nassaukerk (223028):** the register fields say 1926–1930, but nl.wikipedia and the register text (competition of 1924) point to first stone July 1925 and opening 18 June 1926. I used 1925–1926.
- **De Wittenstraat 27-45 (200767):** the register text has year plaques "Anno 1892" and gives 1892. The city wandkunst dataset (Lucebert entry) says built 1889 as school no. 57. I used 1892. The Lucebert wall painting (1947) is inside a private flat and cannot be seen.
- **AWV complex:** the slice `architect` field says only "Epen, J.C. van". The RCE register says H.P. Berlage and J.C. van Epen. I credited both.
- **De Otter:** the slice has no listing year. The RCE register gives inscription on 16 Sept 1980, so I used `listed: 1980`. The timber sheds are dated 1932 in the slice, so I wrote "c. 1932".
- **Waterworks:** heritage_status is "National + municipal monument" because the merged place has three rijksmonuments and one municipal monument (water tower). `listed` is 2003, from the rijksmonuments; the tower was listed in 2022.
- **Rochdale (526742):** nl.wikipedia says "the first Woningwet homes of the Netherlands". The RCE register says only "first in Amsterdam", and I followed the register.
- **Domela Nieuwenhuis statue:** nl.wikipedia says Spaarndammerbuurt, but the OSM point (Nassauplein quay wall) falls inside Staatsliedenbuurt per `areas.locate`. **Coordinator:** check that the spaarndammer slice does not also include it.
- **Keith Haring:** the slice/register has listed 2021, which matches nl.wikipedia.
- **Boekel house (200394):** the register has no text, only fields. The story comes from amsterdamopdekaart.nl (which cites Geheugen van West / theobakker.nl), so the Dutch text leans on that site and quotes facts only.
- **Filmhuis Cavia "opened 1983":** from earlier research. The current Cavia homepage confirms only the address (Van Hallstraat 52-1).
- **Krop relief in the Markthal:** the wandkunst dataset lists it as in storage during renovation, so it is not in "Look for".

## Bilingual sourcing

All `nl` texts were spliced from Dutch sources: city register texts (redengevende omschrijvingen), RCE omschrijvingen, nl.wikipedia (De Otter, Centrale Markthallen, Muurschildering Keith Haring, Waterwijk, Begraafplaats Vredenhof, Staatsliedenbuurt, Hans Kok, Standbeeld Domela Nieuwenhuis, Abri en peperbus, Blauwe poort, Frederik Hendrikplantsoen, Brug 165, Gedenkteken Gerard Reve) and amsterdamopdekaart.nl (Boekel house, Schoolkinderbad, including the Algemeen Handelsblad quote).

The short Filmhuis Cavia sentence in the Zaagmolenschool text and the Kraakliedenbuurt organisations (Blauwe Duim, Staatsradio) are my own Dutch, from an English-language source (amsterdamalternative.nl).

## Places missing photos

No usable Commons photo was found for these places:
- De Wittenkade 31-35
- Boekel's boatyard house (De Wittenstraat 174)
- De Wittenstraat 27-45
- Eerste Nassaustraat 5-7
- Wodan paint factory
- Frederik Hendrikstraat 2-6
- Nassaukade 112-115
- Nassaukade 123
- Rombout Hogerbeetsstraat 109
- Huis Wartburg
- Van Bossestraat 8-54
- Remonstrant almshouse
- Zaagmolenschool
- Kraakliedenbuurt / Hans Kok

For the Wodan factory, `File:Building-Donker-Curtiusstraat-Amsterdam-October-2024.jpg` (CC BY 4.0) may show it, but its GPS (52.377772,4.871238) is about 90 m off, so I did not use it.

## Pins to check

- **Kraakliedenbuurt / Hans Kok** is pinned at Schaepmanstraat 59 (PDOK), which is inside block B of the AWV complex. The pins are about 30 m apart. An alternative is Zaal 100 (De Wittenstraat 100, 52.383141,4.878332), a surviving former squat.
- **Gerard Reve memorial** (Waterspiegelplein) is about 100 m from the waterworks pin, which is fine.

## Skipped Part 2 candidates

- **Marcanti / market canteen (Jan van Galenstraat):** nl.wikipedia says the building was demolished in 2023. The Stauthamer relief is gone or its status is unknown, so I dropped it.
- **Pfaeltzer mural "Tijdgenoten van Hugo de Groot"** (2020, Hugo de Grootkade): exact wall not located.
- **Knakenpilaar:** the OSM point looks wrong; the work stands at Frederiksplein.
- **Small street-art pieces** (Kingfisher by Joost5b, "Kids of Amsterdam", "De Vis", a London Police piece at Tweede Nassaustraat 18): not well documented or not permanent.
- **Bevrijdingslinde, Volksvrouw, bolwerk plaques, Man met vioolkist:** in the Jordaan, outside this slice.

## Walking routes

1. **Woningwet pioneers** (housing reform 1899–1918, about 2 km): Maatschappij voor Volkswoningen complex → Rochdale's first block → Blauwe Poort → Huis Wartburg → De Arbeiderswoning (De Bazel) → Zaagmolenschool and Filmhuis Cavia → Van Bossestraat 8-54 → AWV housing (Berlage and Van Epen) → Remonstrant almshouse.
2. **Kraakliedenbuurt** (1980s squatters): AWV housing / Kraakliedenbuurt and Hans Kok → Zaagmolenschool and Filmhuis Cavia → Blauwe Poort → Abri en peperbus → Domela Nieuwenhuis statue.
3. **Zaagmolenbuurt and the Singelgracht** (mills, charity and the 1880s): De Otter → Schoolkinderbad → Frederik Hendrikplantsoen → Frederik Hendrikstraat 2-6 → School Amaliastraat 5 → Hugo de Groothof → Nassaukade 112-115 → Nassaukade 116-119 → Nassaukade 123 → Widows' homes → Raampoort bridge.
4. **Food, water and work** (industry along the Haarlemmervaart and Kostverlorenvaart): Centrale Markthal → Keith Haring mural → Vredenhof → ANEM factory → Haarlemmervaart lock → Former waterworks → Gerard Reve memorial → Graficolor → Wodan.
5. **Kostverlorenvaart north and Nassaukade** (schools, church and canal trades): Eerste Nassaustraat 5-7 → De Wittenstraat 27-45 → Nassaukerk → Boekel's boatyard house → De Wittenkade 31-35 → Nassaukade 17-18.
