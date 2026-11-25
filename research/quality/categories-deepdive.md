# Categories deep dive: what Deep Amsterdam's places are actually for

Content analysis for the category redesign on Deep Amsterdam (map `sights`), 2026-11-25. Companion to `categories-research.md` (what the field does) and `category-resort.json` (the pending targeted re-sort). Analysis only: nothing was written to the live site.

Principle tested: **a category is the main reason a curious person goes there** (main function and main exploration value).

Data: `dc places sights --all`, 2,532 places (1,630 at city detail, 709 district, 193 theme). Sample: 398 places, coded by hand from title and summary, saved in `categories-sample.json` with the reason to go, primary and secondary under both schemes, and confidence.

## Headline

- **Both schemes agree on half the map.** Street & public art, Curiosities, Hidden history (Stories), Green escapes and Food & drink come out the same under both. They differ only in how to cut the other half: the buildings people go to *look at* (homes, schools, civic, churches, factories, bridges: about 55% of all places).
- **Recommendation: Design C (Scheme 1), with three data-driven adjustments** (move industrial heritage into the water/infrastructure group, a written rule book for the five recurring pairs, era and building type as filter fields). Scheme 2 (why-go, buildings split by era) reads well on paper but fails locally: era is a proxy for district, so Zuid and West would be 40 to 44% one colour and Weesp 54% another, and it throws away the type colour on 43% of places.
- **Multi-category is real but mostly one step:** 57% of places have an honest secondary under Scheme 1 (52% under Scheme 2), only 7% (5%) need two. Primary confidence: 59% clear, 34% two-way, 7% three-way under Scheme 1.
- **Hidden history is the universal second category.** It is the secondary on 38% of all places when counted with primaries. The top three confusions under Scheme 1 are all "building type vs Hidden history".
- **Clusters are the hard core.** All 22 sampled cluster parents (walk-like groups such as "Rokin's west bank") are two- or three-way; outside clusters only 4% are three-way.

## 1. Current picture

### Counts, rank and status per category

| Category | Places | % | Amazing | Nice | Okay | no rank | Gone | at city detail | after re-sort |
|---|---|---|---|---|---|---|---|---|---|
| housing | 549 | 21.7% | 3% | 28% | 60% | 9% | 1 | 364 | 549 |
| hidden-history | 436 | 17.2% | 8% | 53% | 37% | 3% | 65 | 266 | 437 |
| curiosities | 269 | 10.6% | 6% | 42% | 52% | 0% | 0 | 183 | 274 |
| civic | 243 | 9.6% | 4% | 34% | 47% | 15% | 0 | 105 | 253 |
| industrial | 171 | 6.8% | 6% | 38% | 54% | 2% | 0 | 108 | 171 |
| street-art | 165 | 6.5% | 3% | 48% | 48% | 0% | 0 | 126 | 165 |
| religious | 155 | 6.1% | 8% | 55% | 35% | 1% | 3 | 119 | 157 |
| schools | 145 | 5.7% | 1% | 26% | 65% | 9% | 0 | 107 | 145 |
| infrastructure | 122 | 4.8% | 2% | 43% | 48% | 6% | 0 | 79 | 123 |
| green | 106 | 4.2% | 13% | 53% | 31% | 3% | 0 | 82 | 106 |
| food-drink | 75 | 3.0% | 4% | 45% | 39% | 12% | 1 | 23 | 74 |
| culture | 68 | 2.7% | 15% | 49% | 16% | 21% | 0 | 46 | 41 |
| odd-museums | 28 | 1.1% | 4% | 71% | 25% | 0% | 0 | 22 | 37 |

"no rank" is mostly theme-detail places (153 of 154). "after re-sort" applies the 38 moves in `category-resort.json`.

### Per borough

| Category | Centrum | West | Zuid | Oost | Noord | Nieuw-West | Weesp | Zuidoost | Westpoort |
|---|---|---|---|---|---|---|---|---|---|
| housing | 164 | 96 | 97 | 43 | 53 | 49 | 36 | 10 | 0 |
| hidden-history | 222 | 35 | 60 | 45 | 23 | 22 | 17 | 6 | 6 |
| curiosities | 106 | 60 | 35 | 6 | 15 | 30 | 7 | 6 | 4 |
| civic | 147 | 20 | 26 | 13 | 11 | 11 | 5 | 5 | 0 |
| industrial | 76 | 32 | 11 | 20 | 10 | 11 | 8 | 0 | 3 |
| street-art | 43 | 28 | 24 | 40 | 17 | 11 | 0 | 2 | 0 |
| religious | 47 | 20 | 28 | 16 | 17 | 15 | 6 | 3 | 0 |
| schools | 28 | 35 | 34 | 18 | 17 | 13 | 0 | 0 | 0 |
| infrastructure | 51 | 14 | 20 | 11 | 6 | 7 | 7 | 2 | 4 |
| green | 30 | 18 | 12 | 11 | 10 | 17 | 3 | 2 | 2 |
| food-drink | 57 | 3 | 4 | 1 | 10 | 0 | 0 | 0 | 0 |
| culture | 26 | 10 | 15 | 2 | 5 | 4 | 1 | 4 | 1 |
| odd-museums | 13 | 4 | 1 | 4 | 4 | 1 | 0 | 1 | 0 |
| **all** | 1010 | 375 | 367 | 230 | 198 | 191 | 90 | 41 | 20 |

(10 places in Diemen/Muiderberg have no borough.) Largest category per borough: Centrum hidden history 22%; West, Zuid, Noord, Nieuw-West housing 26 to 27%; Weesp housing 40%.

### Too big, too small

- **Too big to filter usefully: housing and hidden history.** Neither breaks the "one third of pins" limit on its own, but together they are 39% of all pins. Housing is also the long tail: 60% Okay, 3% Amazing. Hidden history holds 65 of the 70 Gone places, plus memorials, plaques, homes of famous people and most walk clusters; it is the catch-all for "the story is the point".
- **Too vague: curiosities.** Only 20% of sampled curiosities were clear-cut; 30% are commissioned public artworks (sculptures in Westerpark, the poem doorbell, the anamorphoses) that belong with street art, the rest are ornament, gable stones and oddities that genuinely pair with a building or a story.
- **Too small to carry a colour: odd-museums (28), culture (68, 41 after the re-sort) and food-drink (75).** Food & drink is also 76% Centrum and only 23 places are at city detail, so on the city map it is a colour for about two dozen pins.
- **Type categories that are mostly fine:** religious (65% clear), street-art (76% clear), green (75% clear), housing (74% clear).
- **Misfiles found in passing** (old category is wrong on any scheme): Sexyland (industrial, is a club), De School (schools, a gone club), 't Tolhuis (civic, a café), Herman Elte School plaque and the Anne Frank Montessori school (schools, both war memory sites). Schools generally: 5 of 22 sampled are primarily memory sites.

## 2. The two schemes

### Scheme 1: Design C from the research (10 groups)

| Code | Group | Holds |
|---|---|---|
| W | Places of worship | churches, synagogues, mosques, temples, chapels, parish halls, cemeteries |
| H | Homes & neighbourhoods | housing, villas, canal houses, hofjes, garden villages, farms and village streets |
| P | Public & working buildings | civic, offices, banks, schools, hospitals, industrial heritage, shops as buildings, sports halls |
| B | Bridges, water & infrastructure | bridges, locks, mills, pumping stations, stations, harbours |
| M | Museums & stages | museums, theatres, cinemas, concert halls, clubs |
| X | Hidden history | memorials, plaques, vanished places, sites of events, homes of the famous |
| C | Curiosities | odd details, gable stones, oddities, records, quirky small things |
| A | Street & public art | murals, sculptures, artworks in public space |
| F | Food & drink | cafés, tasting rooms, restaurants, shops for food |
| G | Green escapes | parks, gardens, trees, nature |

### Scheme 2: "why go" (9 groups), defined after reading the sample

The idea: every colour is a reason to go, never a building type. The large "go and look at the building" mass is split by what kind of looking it is.

| Code | Group | Why you go | Holds |
|---|---|---|---|
| S | Stories & memory | for what happened there; the thing itself is modest or gone | memorials, plaques, vanished places, event sites, homes of the famous |
| C | Curiosities | for an odd thing you can find and show someone | gable stones, ornament jokes, records, oddities |
| A | Street & public art | to see a made artwork | murals, sculptures, art in public space |
| O | Old Amsterdam | to see historic buildings and streetscapes | anything built before about 1900, plus traditional village and farm buildings |
| N | Modern architecture | to see 20th- and 21st-century design | Amsterdam School, Nieuwe Bouwen, post-war, contemporary, any type (incl. churches and schools) |
| I | Working city | to see how the city worked | industrial heritage, harbour, cranes, warehouses, bridges, locks, mills, transport |
| M | Museums & collections | to go in and see a collection | museums, house museums, galleries |
| F | Going out | to eat, drink or catch a show | cafés, tasting rooms, restaurants, venues, cinemas, clubs |
| G | Green & rural escapes | to get out into green | parks, gardens, trees, nature, allotments |

Scheme 2 drops a worship colour on purpose: in this content almost every church is visited as architecture, so churches go to O or N by era.

## 3. Findings

### Projected distribution (sample scaled to 2,532)

Weights are places per current category divided by places sampled from it. The sampling error is about plus or minus 3 points for the big groups; the two small groups (museums and stages) are the least reliable because they draw on heavily weighted culture places.

**Scheme 1 (Design C)**

| Group | Primary (est.) | % | Primary or secondary | % |
|---|---|---|---|---|
| Homes & neighbourhoods | 549 | 21.7% | 708 | 28.0% |
| Public & working buildings | 495 | 19.6% | 690 | 27.2% |
| Hidden history | 485 | 19.2% | 971 | 38.4% |
| Street & public art | 253 | 10.0% | 383 | 15.1% |
| Curiosities | 197 | 7.8% | 509 | 20.1% |
| Places of worship | 153 | 6.0% | 168 | 6.6% |
| Bridges, water & infrastructure | 142 | 5.6% | 188 | 7.4% |
| Green escapes | 99 | 3.9% | 185 | 7.3% |
| Museums & stages | 83 | 3.3% | 223 | 8.8% |
| Food & drink | 77 | 3.0% | 124 | 4.9% |

**Scheme 2 (why go)**

| Group | Primary (est.) | % | Primary or secondary | % |
|---|---|---|---|---|
| Modern architecture | 623 | 24.6% | 773 | 30.5% |
| Stories & memory | 479 | 18.9% | 898 | 35.5% |
| Old Amsterdam | 429 | 16.9% | 637 | 25.2% |
| Working city | 253 | 10.0% | 313 | 12.4% |
| Street & public art | 253 | 10.0% | 362 | 14.3% |
| Curiosities | 212 | 8.4% | 476 | 18.8% |
| Going out | 133 | 5.3% | 244 | 9.7% |
| Green & rural escapes | 99 | 3.9% | 186 | 7.4% |
| Museums & collections | 51 | 2.0% | 85 | 3.3% |

Neither scheme has a group over a third of pins city-wide. Locally they differ sharply (largest group per borough, sample-weighted):

| Borough | Scheme 1 largest | Scheme 2 largest |
|---|---|---|
| Centrum | Hidden history 26% | Stories 26%, Old Amsterdam 26% |
| West | Homes 26% (art 26%) | Modern architecture 40% |
| Zuid | Homes 30% | Modern architecture 44% |
| Noord | Homes 27% | Modern architecture 27% |
| Weesp | Homes 38% | Old Amsterdam 54% |

Era follows the city's growth rings, so in Scheme 2 a district view turns into one colour. That is the decisive weakness.

### Multi-category places

| | Scheme 1 | Scheme 2 |
|---|---|---|
| Has an honest secondary | 57.0% | 52.1% |
| Needs two secondaries | 6.9% | 4.8% |
| Primary clear | 59.1% | 59.2% |
| Primary two-way | 34.3% | 35.7% |
| Primary three-way | 6.6% | 5.1% |

"Honest secondary" was coded generously: a visitor filtering for that group would be glad to find the place. A strict rule ("only if the secondary would be worth the trip on its own") would cut the share to roughly a third. A cap of 2 secondaries is enough; a cap of 1 would cover 93%.

Two-way rate by current category (Scheme 1): curiosities 80%, industrial 54%, hidden history 48%, food-drink 47%, civic 42%, infrastructure 39%, schools 36%, religious 35%, odd-museums 33%, housing 26%, green 25%, street-art 24%, culture 20%.

**Clusters** (116 parents, 4.6% of places): all 22 in the sample are two- or three-way (13 three-way). They are walks, not places; any single colour is a compromise. Outside clusters only 4% of places are three-way.

**Gone places**: all 12 sampled are Hidden history / Stories under both schemes. The rule "Gone means Hidden history" holds (65 of 70 already are).

### Hardest recurring pairs (sample counts, primary plus secondary)

| Scheme 1 pair | n | Scheme 2 pair | n |
|---|---|---|---|
| Hidden history / Public & working | 31 | Old Amsterdam / Stories | 29 |
| Hidden history / Homes | 25 | Curiosities / Old Amsterdam | 21 |
| Hidden history / Street & public art | 20 | Stories / Street & public art | 20 |
| Curiosities / Hidden history | 19 | Curiosities / Stories | 19 |
| Curiosities / Homes | 17 | Modern architecture / Stories | 19 |
| Curiosities / Public & working | 15 | Curiosities / Modern architecture | 13 |
| Hidden history / Museums & stages | 13 | Going out / Stories | 13 |
| Museums & stages / Public & working | 13 | Curiosities / Working city | 10 |
| Food & drink / Hidden history | 11 | Old Amsterdam / Working city | 7 |
| Bridges / Curiosities | 10 | Going out / Modern architecture | 7 |

Pattern: the house style gives nearly every building a story hook, so "the building or the story?" is the decision editors will make most often. The second is "art or memorial?" (statues and monuments), the third "curiosity or building?" (a building whose whole interest is one ornament).

### Places that fit nothing

Small: about 2% under either scheme.

- Scheme 1: shops as such (the doll doctor, Perlee's organ workshop: parked in Curiosities), an Aldo van Eyck playground (forced into Homes), living squats and communities (Joe's Garage, Het Groene Veld: forced into Hidden history), sports venues (Olympic Stadium, Apollohal: Public & working per the re-sort, though they behave like stages), hotels.
- Scheme 2: living sacred places that are not about architecture (He Hua temple, the Lady of All Nations pilgrimage chapel), the Muiderberg Jewish cemetery, sports venues, shops.

### Building type: colour or field?

- Under Scheme 1, 86% of places stay in the group their current category maps to; the visible loss is that schools, civic and industrial (559 places, 22%) share one colour. The moves are mostly curiosities that are public art and schools that are memory sites.
- Under Scheme 2 only 45% stay put; housing, civic, schools and religious (43% of places) lose their type from the colour and are split by era.
- The type already half-exists as data: `original_use` is filled for 67% of places (83% of housing, 91 to 94% of schools, churches and industrial, but only 13% of street art) as free text with 1,373 distinct values. `built` has a parseable year for 79%. A coded era split matched my hand coding for 92% of sampled buildings (the misses are year ranges and 1920s/30s farms in traditional style).
- So: keep the broad type in the colour (Scheme 1), and add a normalised `building_type` select (about 12 values, derived from `original_use`, with current use where it differs) plus an era filter from `built`. Visitors who want "all schools" or "everything pre-1900" get it as a filter, without a colour per type.

## 4. Fifteen hard places

| Place | Why go | Scheme 1 | Scheme 2 |
|---|---|---|---|
| Living by Numbers, HIV/AIDS monument | glass-bead abacus memorial | Street & public art + Hidden history (two-way) | Street & public art + Stories |
| Almstraat sculpture garden | ceramic figures in a pillarised block's garden | Street & public art + Homes, Hidden history (three-way) | Street & public art + Modern architecture, Stories (three-way) |
| Huis Galesloot's eight stone heads | heads possibly of Surinamese people shown in 1883 | Curiosities + Hidden history, Homes (three-way) | Curiosities + Stories, Old Amsterdam (three-way) |
| Wandelparkje with the Heilige Stede columns | medieval chapel columns in a pocket park | Curiosities + Green, Hidden history (three-way) | Curiosities + Green, Stories (three-way) |
| Van Eyck playground, Witte Klok | last intact Van Eyck playground | Homes + art, green (three-way, fits nothing) | Modern architecture + Green (two-way) |
| Poentunnel | bankers' tunnel under a canal, rarely open | Curiosities + Bridges, Hidden history (three-way) | Curiosities + Stories, Working city (three-way) |
| Anne Frank House | the hiding place, as a museum | Hidden history + Museums (two-way) | Stories + Museums (two-way) |
| Joe's Garage | squatted social centre, people's kitchen | Hidden history + Food (three-way, fits nothing) | Going out + Stories (two-way) |
| Odeon | brewery, Vingboons house, concert hall, gay disco | Hidden history + Public & working, Museums & stages (three-way) | Stories + Old Amsterdam, Going out (three-way) |
| Dikker & Thijs | a 1915 office that was a famed oyster salon | Hidden history + Public & working (three-way) | Stories + Modern architecture (three-way) |
| Metis Montessori Lyceum | 1902 HBS with plates for 43 Jewish pupils and a glass screen | Hidden history + Public & working, art (three-way) | Stories + Modern architecture, art (three-way) |
| Parkkerk (Orgelpark) | church now an organ concert centre | Worship + Museums & stages (two-way) | Going out + Modern architecture (two-way) |
| He Hua temple | Chinese palace temple on the Zeedijk | Worship (clear) | Modern architecture + Curiosities (two-way, uneasy) |
| Theosophical temple, Tolstraat (de Appel) | concrete temple with many lives, now art centre | Worship + Museums, Curiosities (three-way) | Modern architecture + Stories (two-way) |
| Olympic Stadium | 1928 stadium, Wils's tower | Public & working + Museums & stages (two-way) | Modern architecture + Going out (two-way) |

Read across: Scheme 1 is cleaner for single-purpose places (temples, schools, homes) and struggles with places whose interest moved on (stadium, squat, playground). Scheme 2 handles changed-use places better (organ church as a venue, squat as going out) and struggles with living sacred places and any building whose era says nothing about why you go.

## 5. Recommendation

**Adopt Design C (Scheme 1), adjusted:**

1. **Move industrial heritage out of "Public & working buildings" into the water group, renamed "Working city: industry, harbour & bridges".** Scheme 2 showed this is a coherent why-go group. Projected: Homes 21.7%, Hidden history 19.2%, Public buildings (civic, schools, offices) 14.6%, Working city 10.5%, Street & public art 10.0%, Curiosities 7.8%, Worship 6.0%, Green 3.9%, Museums & stages 3.3%, Food & drink 3.0%. It also makes the vague "Public & working" a plainer "Public buildings".
2. **Ten colours with an icon each**, or, if nine is a hard line, merge the two smallest (Museums & stages with Food & drink, 6.3% together: "doors you go through"). Do not fold Green into water: its places are the most clearly "why go" on the map and have the highest Amazing share (13%).
3. **Write the rule book for the five pairs**, since they decide about 60% of the two-way calls:
   - Building or story: the story is primary only when the building is gone, ordinary, or unrecognisable without the story (Chet Baker's window, Lippmann Rosenthal, writers' homes). A notable building keeps its type; the story becomes the secondary.
   - Art or memorial: a monument made to commemorate people or events is Hidden history with Art secondary; a sculpture made as art (even if honouring someone) is Street & public art.
   - Art or curiosity: anything commissioned as an artwork is Street & public art. Curiosities are found things: ornament jokes, gable stones, records, oddities. This moves about 30% of current curiosities.
   - Museum or building: if you go in for a collection, Museums & stages, whatever the house (the re-sort already does this). Memory-site museums (Anne Frank House, Hollandsche Schouwburg) stay Hidden history.
   - Changed use: categorise by what a visitor does now (Orgelpark is a venue, a church turned dentist is still a church to look at), with the original use in the field.
4. **Secondary: at most 2, only when the secondary group would be worth a trip on its own.** Expect about a third to a half of places to carry one; Hidden history will be the most common secondary by far.
5. **Type and era as fields, not colours:** normalise `original_use` into a `building_type` select (about 12 values) and expose an era filter from `built`. This gives Scheme 2's useful cut (Old Amsterdam vs modern architecture) without its one-colour districts.
6. **Clusters:** give a cluster the category of its dominant theme, but treat it as the walk it is; consider a distinct pin shape so its colour is not read as a claim.

**Trade-offs.** Scheme 1 keeps 86% of pins where they are (cheap remap, editors keep their intuitions) and stays balanced per district, but two colours (Homes, Public buildings) still describe what a building *is* rather than why to go, and Hidden history remains a large and porous group. Scheme 2 is truer to the principle and gives a sharper legend, but turns districts into one colour, drops the type colour on 43% of places, needs an era call on every building, and has no good home for living sacred places. The field approach in point 5 recovers most of Scheme 2's value inside Scheme 1.

Before committing: a closed card sort with about 15 people on 40 places from section 4 and the pair list would settle the art/memorial and building/story rules (NN/g, as in `categories-research.md`).
