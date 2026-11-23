# Nieuw-West round B, slice `slotervaart` (notes)

Items from `SCOUT-3.md` 217, 227, 228, 229, 230, 232, 233 (with 234 and 246), 242, 243, 244, 247, 248. New places in `places/r3-slotervaart.yaml`; merge 232 in `places/slotervaart.yaml` (title unchanged). Both files validate with 0 errors.

## New places (11)

| Title | Item | Category | Rank | Flags |
|---|---|---|---|---|
| RWZI West, Hertzberger's sewage works | 217 | industrial | Nice | check: Still there? (water curtain) |
| Blauwe Moskee, Henri Dunantstraat | 227 | religious | Nice | none |
| What is left of De Drie Hoven (Hertzberger) | 228 | housing | Nice | none |
| Leo Braat's tile panels, Jacob Geelbuurt | 229 | street-art | Okay | check: Location |
| Self-build row, Overtoomse Veld | 230 | housing | Okay | none |
| Station Sloterdijk and the Teleport offices | 233 + 234 + 246 | infrastructure | Nice | none |
| Rembrandtpark (western half) | 242 | green | Nice | outlook: Major change ahead (from 2026, about two years) |
| De KasKantine, Handbalstraat | 243 | green | Okay | outlook: Under threat (lease to 1 Jan 2031) |
| Origin, the light windows of the Derkinderen viaduct | 244 | curiosities | Okay | check: Location |
| Train Lodge, Sloterdijk | 247 | curiosities | Okay | none |
| Kapkar/GTO-B10 (Frank Havermans) | 248 | curiosities | Okay | none |

No Amazing. All pins point-checked with `scripts/areas.py`: borough Nieuw-West (Sloterdijk Nieuw-West 4, Slotervaart-Zuid 2, Slotervaart-Noord 1, Overtoomse Veld 2, Westlandgracht 2). The Rembrandtpark pin is in the Nieuw-West part (points east of about 4.850 fall in West). New ranks are not yet in `scripts/data/amsterdam-c-list-ranks.json` (outside this slice's files).

## Site checks (results, all from sources; no visit)

- **228 De Drie Hoven**: the 2013 wijzigingsplan (toelichting 14 Nov 2013) is clear: east part demolished end 2010/early 2011; demolition permit for all but the renovated wing at Louis Bouwmeesterstraat 25-311; plan name "De Bouwmeester". BAG (PDOK, Nov 2026): the 1975 building is "in gebruik", Louis Bouwmeesterstraat homes in use, new buildings 2016–2019 around it. So no `check` set. Who runs the wing now (care organisation or ordinary rent) was not found; the text only says it is lived in.
- **229 Braat's panels**: confirmed back. Rodi, 10 Nov 2026 ("gerestaureerd en teruggeplaatst"); Commons photos 2 Sep 2025 show the family-life panel in the Jacoba Mosselhof and the ploughed-fields panel in the Maria Beshof (nl.wikipedia says the same). The third panel (the harvest) was not located; phase 2 may hold it. `check: Location`, pin on the Jacoba Mosselhof (west end).
- **244 Origin**: Commons photos of 2 Sep 2025 (brug 689) and the artists' own page with an interview video of Oct 2026 show it in place. Pin under the Lelylaan viaduct over the Derkinderenstraat (OSM bridge at 52.35805, 4.8406); the scout pin (52.357900, 4.840600) is under the deck. `check: Location` kept because the windows line the pillars and the side was not fixed.
- **246 Orlyplein garden**: newest dated evidence is Commons photos of Aug 2019 and Nov 2020; no news of removal. Kept as a Look for line in the Sloterdijk place, without a flag (the place itself is not in doubt).

## Merges

- **232 into "Former Stibbe coat factory (Koningin Wilhelminaplein)"** (`slotervaart.yaml`): one Look for line in both languages on Berghaus (nos. 2-6) and OKU House on The Fashion House (nos. 8-10); two gebouwdin links (now 6 links) and sources added. The live place pins Stibbe at nos. 12-14 (52.355317, 4.836626); Berghaus and OKU are its eastern neighbours, so they went in as neighbours, not as part of the building.
- **234 VERTICAL and 246 Orlyplein**: Look for lines in "Station Sloterdijk and the Teleport offices", as decided. Ven (ex-KPN) also as a Look for.

## Items left out or trimmed

- Nothing in the slice left out.
- **233**: the scout's "three wings at 120 degrees" for Ven is not in any source found (press calls it oval); left out. "70,000 passengers (2025)" replaced by nl.wikipedia's 57,576 a day (2024).
- **228**: "once called the largest old people's home in Europe" not found in a source; left out. The new build's architect (scout: Mecanoo) not confirmed; not named.
- **227**: architect of the mosque not found. Mosqpedia says 2009 for completion, Wikipedia 2008; text says built in 2008. The Friday call is reported for Nov 2019; whether it still sounds weekly was not confirmed, so the text stops at the second attempt.
- **217**: gebouwdin says the water facade is "zestig meter hoge"; that height is implausible and unconfirmed, so no number is given.
- **242**: De Uylenburg is called "the oldest" by nl.wikipedia and "second oldest after Artis" by go-kids and iamsterdam: text says "one of the oldest". Opening date 27 Oct 1973 from the Anefo photo caption (alderman Lammers). The Rembrandtpark article mentions a "Boostergemaal Gerrit Hoekstra"; a link to the four booster stations built for RWZI West is plausible but not sourced, so it is not made.
- **243**: the scout called it pay-what-you-want vegan meals; the current site lists vegan brunches, pizza nights and workshops, so the text says plant-based cooking. Riekerhaven Startblok is next door (out per decision 231); the KasKantine pin is OSM's.
- **248**: nl.wikipedia calls the artist "Havenaar" throughout (a slip); designboom and the Commons 2019 caption give Frank Havermans.
- **247**: opening date from the hostel's LinkedIn (Dec 2015, official opening Mar 2016): "the turn of 2015 and 2016".

## Places without photos

- Self-build row, Overtoomse Veld (no free photo of KKL03, Go West or New West found on Commons).
- De KasKantine, Handbalstraat (none on Commons).
- Merge target "Former Stibbe coat factory" still has none (unchanged; Commons has 2019 photos of Berghaus Plaza's back, not of the Stibbe building).

## Merge for another slice

- None.

## Route idea

"Sloterdijk after the offices": Station Sloterdijk and the Teleport offices, Train Lodge, Kapkar/GTO-B10 (Frank Havermans), Lokroep (Giny Vos), Westpoortbeheer, Choreografie in staal and the Bornhout shelter, then by bike to RWZI West.
"Renewal in Slotervaart": Self-build row, Overtoomse Veld; Iconic Facades (Studio Job), Jan Tooropstraat; Leo Braat's tile panels, Rembrandtpark, Origin, De KasKantine.
