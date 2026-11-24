# Centrum scout GR: green escapes and trees, all of Centrum

Scouted 2026-11-24. All ten wijken of stadsdeel Centrum. Theme: trees with a story, public gardens, parks, pocket parks, courtyard gardens one can walk into (hofjes themselves are covered by BW), city farms and community gardens. Nothing is written to the map: the user picks. Every pin below was point-checked with `areas.locate` and returns borough Centrum unless the item says otherwise.

## Sources

**Gone through completely:**
- **City tree register** (api.data.amsterdam.nl `bomen/stamgegevens`, all 69 Centrum buurten): 11,233 trees; 1,081 "Monumentale boom", 26 "Bijzondere boom" (all "Amsterdam 750 jaar boom", planted 2026). 272 special or old trees reverse-geocoded (PDOK).
- **City map of protected and champion trees** (maps.amsterdam.nl/bomen_bijzonder, GeoJSON layer BOMEN_BIJZONDER): 5,829 trees city-wide, 1,423 in Centrum, of which 39 marked "Kampioenboom". Every Centrum tree with a history note or extra information read (about 190).
- **Commissie Beschermwaardige Houtopstanden, "Actualiseringsadvies Centrum", 24 April 2024** (94 pages): the whole "Speciale vermeldingen" and "Ander waardevol groen" chapters and the champion list. The richest single source of this sweep. https://maps.amsterdam.nl/bomen_bijzonder/Downloads/Actualiseringadvies_Centrum_24_april_2024_def.pdf
- **Bomenstichting, Landelijk Register van Monumentale Bomen** (ArcGIS feature service LRMB_v2024_openbaar, layers 1 to 3, bbox over Centrum): 88 features in Centrum, all history and remark fields read.
- **Bomenstichting walk "Langs monumentale bomen in het centrum van Amsterdam"** (Hans Kaljee, 5th edition 2021, 30 trees): read in full. https://www.bomenstichting.nl/images/Mon_bomen_Amsterdam_2021_WEB.pdf
- **OSM** (Overpass): parks, gardens, playgrounds, named landuse, named or denoted `natural=tree`, `garden:type`, `roof:garden`: 981 objects in Centrum after point-checking.
- **Buurtorganisatie 1018, category Groen**: all 94 posts (2014 to Oct 2026) listed and the relevant ones read.
- **Shaffy's Tuin walk "BuitenGewone Buurttuinen"** (Sept 2025, 11 gardens in 1018, with founding, history, upkeep and opening for each): read in full. https://shaffystuin.nl/buitengewone-buurttuinen/

**Only sampled:** oudestadt.nl Binnenkrant (issues 99 and 106 for green); DuckDuckGo html for second sources (about 12 searches); oost-online.nl, stadsplanten.nl, plukbos.nl, buurtgroen020.nl, zwartekat.nl and AT5 snippets for single facts. Parool is paywalled (200 kampioenbomen article, Anne Frank seedling article): snippets only.

**Left open:** Open Tuinen Dagen (which canal gardens are open on ordinary days: Van Loon, Willet-Holthuysen, Geelvinck, Cromhout, Kattenkabinet) not read; NH Nieuws 346012 (oldest and thickest trees) not read; Wijkkrant Jordaan not re-mined (DW did it); the Amsterdam 750 jaar trees have no source beyond the register; second sources still missing for GR-13, GR-14, GR-15, GR-17.

## Coverage

| Wijk | Trees (registers, LRMB, CBH advice, walk) | Public and community gardens (OSM, 1018, Shaffy walk) | Local voice |
|---|---|---|---|
| Burgwallen-Oude Zijde | done | done | partial: oudestadt.nl Binnenkrant only sampled |
| Burgwallen-Nieuwe Zijde | done | done (Postzegelpark unsourced) | partial: no local paper read |
| Grachtengordel-West | done | partial: canal gardens on Open Tuinen Dagen not read | partial |
| Grachtengordel-Zuid | done | partial: museum gardens (Van Loon, Willet-Holthuysen, Geelvinck) not checked for free access | partial |
| Jordaan | done (nothing with a story beyond DW's items) | done (DW covered the Jordaan gardens) | partial: Wijkkrant Jordaan left to DW |
| Haarlemmerbuurt | done | done | partial |
| De Weteringschans | done | done | partial |
| Nieuwmarkt/Lastage | done | done | done (1018, Shaffy walk) |
| Weesperbuurt/Plantage | done | done | done (1018) |
| Oostelijke Eilanden/Kadijken | done | done | done (1018, Shaffy walk) |

## Shortlist

### Sweep 1: trees with a story

#### Burgwallen-Oude Zijde

**GR-01. The tallest tree in Amsterdam, in the Oudemanhuispoort courtyard.** Pin 52.369373, 4.895953 (courtyard of the Oudemanhuispoort, between Oudezijds Achterburgwal and Kloveniersburgwal). A Dutch elm planted in 1890 in the old convent garden is, at 36 m, the tallest tree of Centrum and probably of the whole city, and at 4.72 m round also the thickest elm in Amsterdam. Thousands of students walk past it every year without looking up; its base is hollow (tested 2015) but it was in good condition in August 2025. Local voice: the Bomenstichting walk calls it "de hoogste boom van Amsterdam"; artist and lawyer Jet Nijkamp drew it when the law faculty left the building. Lead: CBH advice 2024, "Hoogste boom en dikste iep van Amsterdam-Centrum" (link above); second: LRMB 1692908 and Bomenstichting walk 2021 (35 m). Status: standing, register "Kampioenboom" (download 24 Nov 2026). Caveats: courtyard open only when the UvA building is open (Mon to Fri); heights differ, 35 m (2021 walk) or 36 m (2024 advice). Rank **Amazing**. Group with the draft "Oudemanhuispoort and its book stalls" (oudezijde-1) or new place; DC-21 is the same arcade.

#### Burgwallen-Nieuwe Zijde

**GR-02. The last elm of the Stationsplein.** Pin 52.378304, 4.899057 (Stationsplein, in front of Centraal Station, east of the main entrance). The sole survivor of the more than 30 elms planted just after the station was built in 1889; it outlived Dutch elm disease and all the rebuilding of the square, and young elms were planted around it again in 2022. Girth over 3 m. Local voice: Bomenstichting walk: "het laatste exemplaar van de meer dan 30 iepen die geplant zijn vlak na de bouw van het Centraal Station". Lead: Bomenstichting walk 2021; second: LRMB 1694179 and city champion list (ID 339649, CBH advice 2024). OSM tags it as natural monument (node 3911893539). Status: standing, champion tree (24 Nov 2026). Rank **Nice**. New place.

#### Grachtengordel-West

**GR-03. The Westermarkt elm, Amsterdam's own knobbly elm.** Pin 52.374260, 4.884137 (Keizersgracht by the Westermarkt, city tree ID 341941). An elm planted around 1900, probably from the city's own nursery at Frankendael, turned out to be an undescribed cultivar with a lumpy, burred trunk; the tree committee has provisionally named it Ulmus x hollandica 'Westermarkt', the "Amsterdamse Knobbeliep". Only five are known for sure: this veteran, the elms opposite Keizersgracht 208, 224 and 234, and the old elm at Nieuwe Herengracht 5-7 (GR-07). Local voice: CBH: "een nog niet beschreven zeldzame afwijkende cultivar". Lead: CBH advice 2024, "Veteraanbomen"; second: city register notes ("Zeldzame varieteit met veel maserknollen, voorheen altijd als Belgica benoemd") and LRMB 1697438 (warreliep). Status: standing (register 24 Nov 2026). Caveat: the name is provisional. Rank **Nice**. New place (or merge with GR-07 as one item with two pins).

**GR-04. The thickest tree in Centrum, a plane at Molenpad 2.** Pin 52.367241, 4.883638 (Molenpad 2, corner Prinsengracht). An oriental plane 5.75 m round, registered as 1850 but probably planted about 1860 at the new bank building of Becker & Fuld; Carl Becker was also one of the founders of the Vondelpark. Lead: CBH advice 2024, "Dikste boom"; second: LRMB 1686161 and OSM node 2722025013 (girth 5.40 m). Status: standing, champion tree (24 Nov 2026). Caveats: privately owned (register "Particulier"); check it is fully visible from the Molenpad; the two planes on the Leidsebosje in West are thicker. Rank **Nice**. Group with the draft "Molenpad, from carriages to cars, and a copied corner" (gg-west-3) or new place.

#### De Weteringschans

**GR-05. The leaning poplar of the Weteringplantsoen.** Pin 52.359040, 4.890053 (Eerste Weteringplantsoen, corner Weteringschans and Weteringcircuit). A Canada poplar 'Serotina' of about 1910, 5.55 m round, leaning hard over the plantsoen: the biggest and thickest leaning tree of Amsterdam. A leaning tree is not less stable: it grows extra heavy roots on the far side. Local voice: known locally as "de scheve populier"; CBH: "Een echte kampioen". Lead: CBH advice 2024, "Scheve en liggende bomen"; second: Bomenstichting walk 2021 and LRMB 1686110. Status: standing, champion (24 Nov 2026). Rank **Nice**. Group with DE-36 (Kruidenpluktuin in the same plantsoen) or new place.

**GR-06. The pagoda trees of the Falckstraat.** Pin 52.360268, 4.896524 (Reguliersgracht corner Falckstraat). The tallest and oldest Japanese pagoda tree in Amsterdam (1900), as far as known the only one in the city with a polypody fern growing on it, with a younger partner of 1930; they flower late, in August, when insects have little else. They stand on the line of the Achtergracht, filled in about 1869. Lead: CBH advice 2024, "Japanse honingboom Falckstraat"; second: Bomenstichting walk 2021 and LRMB 1686062. Status: both champions (24 Nov 2026). Rank **Okay**. New place.

#### Nieuwmarkt/Lastage

**GR-07. Nieuwe Herengracht 5-7: one of the oldest elms of Amsterdam, and the hanging elm.** Pin 52.366093, 4.902225 (quay opposite Nieuwe Herengracht 5-7). An elm of 1891, nearly 3.8 m round, the only survivor of the 19th-century planting on this quay and one of the five known 'Westermarkt' elms with their burred trunks (GR-03); often cited as the oldest elm of the city, though the one in the Oudemanhuispoort is as old. Further along hangs a century-old elm far out over the water, its trunk showing the ribbed tension roots that keep it up. Lead: CBH advice 2024 ("Oudste iep", "Scheve en liggende bomen", IDs 340635 and 341861); second: LRMB 1697438 (one of the "200 kampioenbomen van Amsterdam", 2025) and the register. Status: standing (24 Nov 2026). Caveat: pin of the hanging elm not taken (ID 341861, same quay). Rank **Nice**. Group with GR-03 or new place.

#### Haarlemmerbuurt

**GR-08. The oldest wild fig of Amsterdam, in the quay wall at the Drieharingenbrug.** Pin 52.386686, 4.887231 (Prinseneiland, corner at the Drieharingenbrug, in the quay wall). Nobody planted it: a fig seeded itself into the sunny, sheltered quay wall around 1990, among the very first spontaneous figs in the Netherlands, and is now a small tree that bears fruit. City botanist Ton Denters, who found Amsterdam's first wild fig in 1990 and has since counted about 150, gives its GPS in his blog; an older one nearby was rooted out by residents. The tree committee put it on the city's protected list in 2024 because it "tells the story of the changing climate". Lead: CBH advice 2024, "De vijgenboom op het Prinseneiland vertelt een verhaal"; second: stadsplanten.nl, "Ode aan de Vijgenboom" (Ton Denters, 3 Jan 2021), https://www.stadsplanten.nl/2021/01/ode-aan-de-vijgenboom/ ; the register (ID N5664: "De oudste wilde vijgenboom van Amsterdam"). Status: photographed Oct 2022, in the register 24 Nov 2026. Caveat: small; best in summer with leaves and figs. Rank **Amazing**. New place (near DW-55 Palmentuin, pitched on itself).

#### Weesperbuurt/Plantage

**GR-09. The elm museum round the Hortus: lying elms and an Anne Frank seedling.** Pin 52.366166, 4.907593 (Hortusplantsoen, the horizontal elms at the water behind the Hortus). Since 2015-16 the streets round the Hortus have been planted as a small "Ulmuseum" of rare elms. Behind the Hortus two elms lay over the water from the late 1970s until elm disease killed them in 2014; early 2015 two 'Rebona' elms were deliberately planted lying down to replace them, and their trunks are now bending upwards in an arc. A few metres on, a seedling of the Anne Frank chestnut, raised on a roof terrace, was planted in the heart of the old Jewish quarter in spring 2022. Lead: CBH advice 2024 ("Liggende iepen achter de Hortus", "Ulmuseum", "Anne Frank-paardenkastanje Hortusplantsoen"); second: oost-online.nl, "Zaailing Anne Frankboom geplant op het Hortusplantsoen", https://oost-online.nl/zaailing-anne-frankboom-geplant-op-het-hortusplantsoen/ ; register IDs 348335, 348336 ("Liggende bomen"), N5663 ("Zaailing Anne Frankboom"). Status: in the register 24 Nov 2026. Caveats: the chestnut is a sapling; the Hortus itself is A-list, this is the public street side. Rank **Nice**. New place (AE-04 memorials and the Theo Thijssen draft are on the same plantsoen).

**GR-10. One of the oldest dawn redwoods in the Netherlands, Wertheimpark.** Pin 52.367516, 4.908730 (Wertheimpark). The dawn redwood was known only as a fossil until living trees were found in China in 1941; in 1947 the Hortus was the first in the country to receive seeds, ten of them. Eight came up; one of the survivors stands free to see in the Wertheimpark, across the road from the Hortus. Lead: CBH advice 2024, "Oudste watercipres van Nederland"; second: register ID 341851 (1947, "Vermoedelijk een van de oudste watercipressen van Nederland"). Status: champion (24 Nov 2026). Caveat: both sources are the city's; the advice cites Dendroflora 15/16 for the seed history. Rank **Nice**. Group with DE-25 (the wingnut in the same park) and the Wertheim draft (plantage-1).

**GR-11. The 120-year-old wisteria of Amstel 169-171.** Pin 52.360918, 4.904579 (Amstel 169-171). A wisteria about 120 years old, its thickest stem 60 cm round, covers the front in blue every May; it was voted the Fraaiste Groene Gevel of Amsterdam in 2018 and in 2024 was put on the city's list of protected trees, because a woody climber that thick counts as a tree. Lead: CBH advice 2024, "Gevelbomen, de blauwe regen aan de Amstel"; second: register ID N5625 ("Prijswinnaar 2018 mooiste gevelgroen"). Status: photographed July 2023, register 24 Nov 2026. Caveat: on a private house, seen from the street; a May place. Rank **Okay**. New place.

#### Oostelijke Eilanden/Kadijken

**GR-12. The Shaffyboom, a tree that grew through a railway fence.** Pin 52.375813, 4.919539 (Dijksgracht, opposite the former mooring of Ramses Shaffy's houseboat). For Shaffy's 75th birthday in August 2008 residents named this maple, which has grown through the railway fence, the Ramses Shaffyboom: "a strong tree that speaks of pain and the force of life; that fits Shaffy well". The fence has gone along the whole line except where the tree swallowed it, and after his death in 2009 the neighbourhood held a memorial service at the tree. Local voice: the neighbourhood calls it a "Monument voor de Levenskracht". Lead: CBH advice 2024, "De Shaffyboom, monument voor levenskracht"; second: zwartekat.nl 27 Aug 2008 and AT5 "Sfeervolle herdenking bij de Shaffy-boom" (https://www.at5.nl/artikelen/28191/sfeervolle-herdenking-bij-de-shaffy-boom). Status: standing per the 2024 advice, in the register 24 Nov 2026. Caveat: on ProRail ground. Rank **Nice**. New place (DE dropped the OSM node for lack of a source: sources now found; group with DE-03 Shaffy's Tuin also possible).

### Sweep 2: public and community gardens

#### Nieuwmarkt/Lastage

**GR-13. Ruijtergaard, an orchard that had to grow in crates.** Pin 52.377808, 4.906990 (De Ruijterkade, the long strip along the quay east of the station). Residents dreamed of an orchard on a stony strip by the IJ; cables and pipes in the ground made planting trees impossible, so they built raised beds from city elm wood and planted them like a food forest, which also holds rainwater. Volunteers on Wednesday and Sunday afternoons, with school classes and company groups. Lead: Shaffy's Tuin walk 2025, item 2; second: OSM way 936942270 (name only). Status: active Sept 2025. Caveats: freely open only during the work afternoons; second textual source needed. Rank **Okay**. New place.

**GR-14. Buurtpark 's Gravenhekje.** Pin 52.372200, 4.907600 (approximate; 's-Gravenhekje, by the WIC house). A small residents' park since 2005 on the site of a former school and the ramp to the rubbish barges, with a view of the Montelbaanstoren. Lead: Shaffy's Tuin walk 2025, item 3. Status: Sept 2025. Caveats: pin approximate; second source needed; borderline "plain green". Rank **Okay**. Group with the WIC draft (nieuwmarkt-1) or Look for.

**GR-15. Coentje Gans Plantsoen, a hidden garden for all child victims of war.** Pin 52.370200, 4.910000 (approximate; Foeliestraat, 20 to 30 m from the end of the Rapenburg, garden gate on the right). Ground that drained badly in the 1960s and that residents kept from being built on became a play garden in 2007. On 3 July 2021 poet and resident Adriaan Deurlo named it after Coenraad Gans (born 3 July 1941, murdered in Sobibór 21 May 1943), the youngest of the 14 Jews taken from the building, and for all children who are victims of war and violence. The gate looks shut but is never locked. Lead: Shaffy's Tuin walk 2025, item 4 (https://shaffystuin.nl/buitengewone-buurttuinen/). Status: kept by residents at their own cost, Sept 2025. Caveats: second source needed (Joods Monument for Coenraad Gans; joodsmonument.nl search did not answer to curl); pin approximate. Rank **Nice** (Amazing if confirmed). New place.

#### Oostelijke Eilanden/Kadijken

**GR-16. Plukbos, the pick-your-own wood on Wittenburg.** Pin 52.372500, 4.920000 (approximate; the block between Kattenburgervaart, Grote Wittenburgerstraat, Jacob Burggraafstraat and Tweede Wittenburgerdwarsstraat). After three shootings in the neighbourhood a resident turned an abandoned dog field into an edible garden; Mayor Halsema opened it in 2018 on the hottest day of the year. A first cherry tree grew into a food forest of about 130 crops, open day and night: "Nergens verser, noch goedkoper." Garden day with lunch every second Sunday. Lead: Shaffy's Tuin walk 2025, item 9; second: plukbos.nl ("dag en nacht geopend voor stille buurtgenoten & voorbijgangers") and buurtorganisatie1018.nl agenda 9 Feb 2025. Status: active 2025. Caveat: pin approximate. Rank **Nice**. New place (DE mentions it only in passing).

**GR-17. The roof garden of the Laagte Kadijk.** Pin 52.370300, 4.912600 (approximate; up the steps right after the passage under the building by Café Bloem, Laagte Kadijk). A public garden on the roof of a 1987 garage, replanted by residents from 2005, open 24 hours; you cross it and come down the other stair onto the Laagte Kadijk, then go on to the Sibbelpark. Lead: Shaffy's Tuin walk 2025, item 6. Status: Sept 2025. Caveats: pin approximate; second source needed. Rank **Okay**. Group with the Sibbelwoningen draft (extra-east) or new place.

**GR-18. Waaigat 2, a garden with viewing windows.** Pin 52.370300, 4.922200 (approximate; Waaigat, end of the Parelstraat). A former dog-walking lawn turned into a residents' garden around 2005, reachable from the street and by boat, with framed viewing windows that each give a new view; visitors are asked to go their own way in silence. Next to it, Waaigat 1 (about 1988) has a weeping willow planted at a child's birth (not public). Lead: Shaffy's Tuin walk 2025, item 8. Status: open 24 hours, Sept 2025. Caveats: pin approximate; second source needed. Rank **Okay**. Group with DE-18 Touwbaanpark (across the Touwbrug).

**GR-19. Buurttuin Windroosplein, the garden instead of a basketball court.** Pin 52.373185, 4.924472 (Windroosplein, OSM way 282484810). Around 1992-93 the city planned a low-maintenance basketball court here; residents proposed a garden, about twenty of them built it, and it now holds more than 150 kinds of plants. A worm hotel for kitchen waste came in 2019. The gate is always open (close it behind you). Lead: Shaffy's Tuin walk 2025, item 10; second: buurtorganisatie1018.nl, "Wormenhotel op het Windroosplein" (14 June 2019). Status: Sept 2025. Rank **Okay**. Group with the lifeboat shed draft on the Windroosplein (eilanden-1) or new place.

## Look for lines

- **Amsterdam Museum (Wilhelminalinde):** the lime in the boys' courtyard is the original planting of 1898 for Queen Wilhelmina's inauguration, "de royaalste linde van de stad" (CBH advice 2024); city champion 342147. CC raised the date conflict; the 2024 advice settles 1898.
- **Huis Marseille (gg-west-3):** a weeping beech of about 1950 in the garden, "goed te zien vanuit Museum Huis Marseille, ook van boven" (register N5571).
- **Kattenkabinet, Herengracht 497:** walnut of about 1925 leaning at 45 degrees on props, champion (register N1685, LRMB 1686157); the plane scorched by the Halifax crash of 1943 blew down in 2019 (Bomenstichting walk 2021). Garden private, ask the museum.
- **Wertheimpark (plantage-1, DE-25):** an Anna Paulowna tree planted in 2008 as a memorial for Artsen zonder Grenzen (register 347257); the wingnut's old steel pins and cables are "outdated tree surgery" with heritage value; the bench under it was removed in 2022 (CBH 2024).
- **Plantage Westermanplantsoen (AE-02):** veteran robinia of 1930, 3.25 m round, with a secondary crown (CBH 2024, register 346124).
- **Marineterrein (eilanden-1):** a big female Canada poplar (1945, 5.37 m, register N5569) makes it "de plek in het Centrum om in juni populierensneeuw te beleven"; the 1960s planting is by landscape architect Hans Warnau (CBH 2024). Residents stopped the felling of three trees in 2015 (1018).
- **Mr. Visserplein:** the olive trees in tubs, imported in 2010, are probably half a century older than the Heimanseik, the "oldest tree of Amsterdam" (CBH 2024, footnote 17). Check they are still there.
- **Prins Hendrikkade 171:** a black mulberry of 1795 lying on its side, the oldest private tree in Amsterdam outside Artis; a merchant sold black mulberries in the 18th century as silkworm trees, which only feed on white (CBH 2024, register N1779). Private garden.
- **Haarlemmerbuurt:** elm 343798 (1900) carries an elm bracket fungus at its foot and is registered as "Mycologisch monument".
- **Plantage Lepellaan 6:** copper beeches of about 1910 in a landscape garden by Leonard Springer with a 1907 garden house by Kropholler (register). Private.
- **Gouden Gieter geveltuinen (plantage drafts):** yearly prize for the best facade garden in Plantage, Weesperbuurt and Kadijken: 2022 Plantage Muidergracht corner Badlaan, 2023 Valckenierstraat 39-41, 2024 Louise Wentstraat 213-221, 2025 Plantage Muidergracht 135A, 2026 Sint Jacob, Plantage Middenlaan 50A (1018 posts).
- **Oosterkerk (AE-22):** 2015-16 fight over the big elm in front of the church, 57 objections, crowdfunded counter-report, appeal rejected 6 June 2016 (1018). Gone.

## Food and drink, borderline

None. (Plukbos's garden-day lunch and home-made liqueur are for members.)

## A-list candidates

None proposed. The Hortus's 1795 tree hazel (oldest in NL, visible over the fence), its veteran catalpa and parrotia, and Artis's Heimanseik, ginkgos with chi-chi, oldest elm (pluimiep, about 1880) and torreyas are inside A-list places.

## Checked and dropped

| What | Why |
|---|---|
| Nicolaas Witsenkade planes (1895, parakeets) | the trees stand in borough Zuid (point-check: Museumkwartier, Oude Pijp) |
| Leidsebosje planes, the thickest in Amsterdam | West, out of zone (CE dropped too) |
| Heimanseik, Artis trees, Hortus trees | inside A-list places |
| Kattenkabinet Halifax plane | blew down in 2019 |
| Keizersgracht 736 copper beech (1976 court case) | private garden, not visible |
| Mulberries Prinsengracht 1091 and Rozengracht/Bloemgracht, chestnut Looiersgracht 17D (about 1820) | private, inside blocks |
| White chestnut on the canal belt, register N1709 | emergency felling ordered 20 Sept 2024 |
| Henri Polaklaan chestnut | felled Jan 2024 (DE Look for) |
| Original lying elms behind the Hortus | died of elm disease 2014 (replacements in GR-09) |
| Amsterdam 750 jaar trees (26, planted 2026) | young, no source beyond the register |
| Postzegelpark, Nieuwezijds Voorburgwal 277 | OSM only, no source; lead for DC |
| De Stadstuin, Nieuwe Achtergracht 36 (open 08:00-20:00) | OSM only, no source |
| Oostenburgerpark | plain park; only story is the 2015 fitness-equipment fight |
| Sibbelpark | covered by DE-04 and the Sibbelwoningen draft |
| Keizersgracht 397 "botanical" inner garden | private |
| Frederiksplein hazel (champion, 1960) | no story; AE-38 and DE-44 already there |
| Christine Buisman elm, Weteringbuurt | no source found that ties it to a place story |
| Marineterrein Voorwerf garden | belongs in the Marineterrein draft (Look for) |

## Leads for other scouts

- **DC:** Postzegelpark beside the stamp market (DC-07), source needed.
- **DE:** the Shaffyboom now has sources (GR-12); Plukbos (GR-16).
- **Zuid (future scouts):** Nicolaas Witsenkade plane row, CBH 2024 "Platanen Nicolaas Witsenkade".
- **West:** Leidsebosje planes and the Boomzagertje; Nassauplein Wilhelmina lime (replanted 1960s).
- **All:** the CBH 2024 advice (link above) lists 39 Centrum champions with IDs and is a ready second source for any tree claim; the city layer maps.amsterdam.nl/bomen_bijzonder carries a "paspoort" PDF per tree.
