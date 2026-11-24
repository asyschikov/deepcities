# West scout round 4: the West-standard sweeps (2026-11-24)

The first round for stadsdeel West that goes through the sources each sweep names, gebied by gebied, instead of general "find something unusual" scouting. `COVERAGE.md` (written the same day) recorded which sources rounds 0 to 3 never went through; this round covers them. Sweeps 2 to 7 for Westerpark, Bos en Lommer and Oud-West/De Baarsjes, with extra weight on Bos en Lommer, which never had a round 3.

Checked against the live map (read-only, 324 West places), `research/west/places/*.yaml` and `scripts/data/amsterdam-west-live-only-2026-11-24.json`. Every pin was point-checked to borough West with `research/west/scripts/areas.py` (all pins come from PDOK address lookups, OSM, Kunstwacht or the city's wandkunst layer). Distances to the nearest map place are given where they matter. Ranks: **Amazing** (rare), **Nice**, **Okay**. "Merge into" names the exact live title. `check:` flags follow the skill (Still there?, Facts, Location).

The coordinator did sweeps 2 and 3, sweep 6's gebouwdin and architectuurgids pass and all point checks. Three helpers did the rest: gvw (Geheugen van West, amsterdamsloopt, beeldbank), bel (Bos en Lommer sweeps 4 to 7) and wpow (Westerpark and Oud-West/De Baarsjes sweeps 5 to 7, Atlas Obscura, the blind-recall misses). Nothing was written to the live site and nothing was committed.

Items are numbered from 401. New places get a number; merges are listed per sweep.

## Sources gone through

| Sweep | Source | What was done |
|---|---|---|
| 2 | Kunstwacht API (`api-v3.kunstwacht.nl`, all 1,746 objects fetched by id) | the 204 records in borough West (Westerpark 91, Oud-West/De Baarsjes 66, Bos en Lommer 36, 11 without coordinates) matched against the map; the 121 not visibly decided were read one by one and decided (new, merge or dropped) |
| 2 | city wandkunst layer (`maps.amsterdam.nl` WANDKUNST) | all 27 West records read (Bos en Lommer 19, Oud-West 4, Westerpark 4) |
| 2 | Street Art Cities, zone 1330 | all 32 West markers |
| 2, 3, 5, 7 | OSM via Overpass | 592 West features: artwork, historic, memorial, military, bunker, man_made, allotments, gardens, museums, city farms, natural-monument trees; helpers pulled gardens, toilets and nurseries again per gebied |
| 3 | 4en5mei.nl monument database | West searches (Spaarndammer, Vondelpark, Baarsjes, Westerpark, Kinkerbuurt) and the Amsterdam list; detail pages fetched slowly (the site rate-limits) and point-checked; see sweep 3 for the count |
| 3 | liberation trees | 4en5mei, OSM, TracesOfWar: only the Bos en Lommerweg tree (on the map) |
| 4 | Geheugen van West | the whole archive through its JSON API: 3,500 records, every West-pinned and West-by-text story opened, about 120 read in full, a keyword pass for traces that survive |
| 4 | amsterdamsloopt.nl | all 134 posts (WordPress API): West entries are demolitions with no trace left |
| 4 | archief.amsterdam beeldbank | Memorix API: gedenksteen, gedenkteken, schuilkelder, bunker, noodwoningen, plaquette, tegeltableau, eerste steen, gevelsteen (2,720 records), streets geocoded, 41 West streets reviewed |
| 5 | Arcam Cold War shelter route, OSM bunker/military | no shelter in West beyond the Postjeskade one already on the map |
| 6 | gebouwdin.amsterdam.nl | all 433 stadsdeel West projects listed (stadsdeel 4, every year), 121 details read |
| 6 | architectuurgids.nl | the Amsterdam list (328, 193 after 1965); the 14 West entries read |
| 6, 7 | De Westkrant | Bos en Lommer: 1,730 titles for 22 search terms, 281 filtered, about 30 read; Westerpark and Oud-West: category archives (about 150 headlines, 2025 to 2026), 11 read |
| 7 | Atlas Obscura | the whole Amsterdam list (about 90): Aletta Jacobs is the only West entry not on the map |
| 7 | iamsterdam neighbourhood pages, Open Tuinen West 2026 (26 gardens), allotment park sites | read |

Not covered: the stadsdeel's own tips pages on amsterdam.nl (not reached), Parool (paywall), Ons Amsterdam, the Bomenstichting tree register (no query), Westkrant before mid-2025 for Westerpark and Oud-West, photos and reader comments in Geheugen van West.

## Sweep 2: public art and walls

### Westerpark

**401. De boom valt op mij (Timon Hagen, 2024)**; Zoutkeetsplein, 52.388594, 4.886129 (Westerpark, Spaarndammerbuurt/Zeeheldenbuurt), on the square of "Zoutkeetsplein block".
- Hook: a concrete band round a tree carries three lines by the neighbourhood poet Ilse Starkenburg, with a small figure standing in "a corner of a room where you never go".
- Why: in a summer storm in 2015 a tree on this square fell on her. She barely survived, wrote the poem "De boom valt op mij" two years later and died suddenly four years after that, at 56. The lettering nods to the Van Randwijk monument on the Weteringcircuit. A memorial with a story nobody would guess from the street.
- Lead: Kunstwacht 3021 (buitenkunstamsterdam.nl).
- Check: Location (which tree; move the pin onto it).
- **Nice**. New place.

**402. Van Oldenbarneveldtplein: the last words in mosaic, and a girl looking at "Why Not"**; 52.377347, 4.876686 (Westerpark, Frederik Hendrikbuurt).
- Hook: a mosaic portrait of Johan van Oldenbarnevelt in the square, ringed with what he said before his beheading in 1619, by Wijnanda Deroo.
- Why: nearby Else Rignalda's slight bronze girl looks at Norman Dilworth's abstract "Why Not", the runner-up of a 1985 competition whose winners (Tolman and Pallesen) went to the Westerpark. Three works answering each other on one square.
- Lead: Kunstwacht 2589, 2590, 2603; OSM.
- **Okay**. New place.

**403. Gat van Rob (Harry van Renswou, 1987)**; Frederik Hendrikstraat 39-45, 52.376660, 4.874331 (Westerpark, Frederik Hendrikbuurt), 87 m from "Hugo de Groothof (former widows' foundation)".
- Hook: a "square on a square" of ferrocement platforms and cast-iron rails after Malevich.
- Why: named after Garage Rob, which stood here, and the gap the garage left in the street wall for years. Meant as a podium; it works as a hangout.
- Lead: Kunstwacht 2594; OSM.
- **Okay**. New place.

**404. Marcanti's dancing couple (Cephas Stauthamer, 1956)**; Jan van Galenstraat 6, former Marktkantine, 52.376055, 4.867062 (Westerpark, Centrale Markt).
- Hook: a big gilded cement relief of a man, a woman, a mask and a bird on the market canteen and theatre built for the wholesale market.
- Why: it vanished for years behind a dancing's name board; the city's wall-art register rates it "Waardevol".
- Lead: Kunstwacht 2628; maps.amsterdam.nl/wandkunst (Jan van Galenstraat 6).
- Check: Still there? (visible again?).
- **Okay**. New place, or a Look for line in "Centrale Markthal" (154 m).

**405. Poems on the railings of the Jacob Catskade**; Jacob Catskade and De Wittenkade, 52.381101, 4.875140 (Westerpark, Staatsliedenbuurt).
- Hook: when new homes went up here in 1997 the residents had glass plates engraved with lines by Nijhoff ("Awater"), Ida Gerhardt, Jan Campert, Guus Luijters and others, set in the quay railings.
- Why: a residents' anthology on a canal; the borough took it over and restored it in 2006. One plate, Hannis Schilperoort's "Langs de Kostverlorenvaart zag ik het schip Ambitie varen", is filed separately in Kunstwacht.
- Lead: Kunstwacht 2619, 2620.
- Check: Still there?
- **Okay**. New place.

**406. Doek in licht (Annemoon Geurts)**; Westersluis car park, Haarlemmerweg, 52.385095, 4.865720 (Westerpark, Centrale Markt), 51 m from "Haarlemmervaart lock (Schutsluis)".
- Hook: 182 screen-printed glass panels make the car park facing the Westergasfabriek look like a stage curtain that opens and closes at night.
- Lead: Kunstwacht 2625.
- Check: Still there? (does the light show still run).
- **Okay**. New place.

**407. Aan Tafel (Pris Roos, 2025)**; Van Hogendorpstraat, 52.382060, 4.868160 (Westerpark, Staatsliedenbuurt), 56 m from "Van Bossestraat 8-54".
- Hook: women of different backgrounds share soup at a table with places still free; a second panel with an empty chair is on the Koperen Knoop in the Van Limburg Stirumstraat.
- Why: a work of the "Kunstroute Vrouwen van West", the borough's art route by and about women (started by district chair Fenna Ulichki, ended with "(Zoals) ze is", which is on the map). Could carry the route's story.
- Lead: Kunstwacht 3690, 5691; rodi.nl/amsterdam-nieuw-west/uit/386000.
- **Okay**. New place.

**408. Islanded (Anneke de Witte)**; Van Diemenstraat, Kop van Diemen, 52.390038, 4.890769 (Westerpark, Spaarndammerbuurt/Zeeheldenbuurt), 89 m from "Pakhuis Koningin Emma".
- Hook: an island on legs that you can walk under, on the quay looking out over the IJ.
- Why: the artist ties it to the colonial goods once landed and stored in these warehouses.
- Lead: Kunstwacht 2560; OSM.
- **Okay**. New place, or a Look for line in "Pakhuis Koningin Emma".

### Bos en Lommer

**409. Bible stories on the Kolenkit doorways (Willem Reijers 1950; Arie Teeuwisse and Jan Meefout 1955)**; Leeuwendalersweg 29-31, Akbarstraat 4-34, Bos en Lommerweg 248 (Reijers) and Jan van Schaffelaarplantsoen 1-33 (Teeuwisse, Meefout); pin on Akbarstraat 4, 52.378852, 4.841607 (Bos en Lommer, De Kolenkit), 92 m from the Nannoplein place.
- Hook: forty carved capitals beside the porches of the 1950s blocks tell the Old Testament from door to door, starting with the Creation and Eve at Leeuwendalersweg 31.
- Why: the city's wall-art register rates both series "Top"; Reijers's was one of his first big commissions. The blocks (De Nieuwe Akbar) were renovated in 2005 with the capitals kept, a survivor of the Kolenkit's demolition years.
- Lead: maps.amsterdam.nl/wandkunst (five records); gebouwdin.amsterdam.nl/api/projectdetail/95.
- **Nice**. New place.

**410. N.L.I. (Joop Vaissier): Cornelis Troost's drunks**; Cornelis Troostplein / Leeuwendalersweg, 52.376796, 4.837841 (Bos en Lommer, De Kolenkit; grid cell F1).
- Hook: three (originally four) sculptures after Troost's 18th-century pastel series N.E.L.R.I., five scenes of a drinking party from "Nemo loquebatur" (nobody spoke) to "Ibant qui poterant" (those who could, went home).
- Why: the square named after the painter got his most famous joke.
- Lead: Kunstwacht 2143.
- Check: Still there? (one figure already lost).
- **Okay**. New place.

**411. Oude en jonge arbeider (Han Wezelaar)**; small square on the Hoofdweg, 52.376716, 4.846992 (Bos en Lommer, Erasmuspark), 39 m from "Samen bij De Boeg (Richard Kofi)".
- Hook: a bronze old worker with a riveting hammer and a young one with his coat over his shoulder.
- Why: commissioned for the 50th anniversary of the union federation NVV (now FNV), by the maker of the Wibaut statue.
- Lead: Kunstwacht 2138; OSM.
- **Okay**. New place.

**412. Wederopbouw art of the Sara Burgerhartstraat**; Sara Burgerhartstraat 2 and 34-76, Gulden Winckelstraat 1; pin 52.382850, 4.849166 (Bos en Lommer, Landlust), 75 m from "Mural for Lisa, Admiraal de Ruijterweg".
- Hook: André Schaller's six figures over the shared stairwells (1947 to 1956), Hans Reicher's relief (1950) and Willem Reijers and Leo Braat's tree with birds at Gulden Winckelstraat 1 (1949), half plastered over in a 1992 renovation.
- Why: the early post-war "percentage for art" in one street.
- Lead: maps.amsterdam.nl/wandkunst (four records).
- **Okay**. New place, or Look for lines in "Collectivism vs Individualism (Munir de Vries)" (end of the same street).

### Oud-West, De Baarsjes

**413. Het ABC langs de Hoofdweg (René Knip)**; on 23 tram masts along the Hoofdweg from the Surinameplein to the Bos en Lommerplantsoen; pin on the first pair, 52.359353, 4.853103 (Oud-West/De Baarsjes, Westindische Buurt; the line runs into Bos en Lommer), 50 m from "Surinameplein housing by Roodenburgh".
- Hook: steel letters designed with children, older people and neighbours, one or two per mast: an alphabet you read by walking or riding the tram.
- Lead: Kunstwacht 2555 (with the list of masts).
- Check: Still there?
- **Okay**. New place.

### Sweep 2 merges

Westerpark:
- Into **"Westerpark"** (Look for): Ronald Tolman's "Man op kruk" and Liesbeth Pallesen's form (1985 competition winners), Mirjam Janse's girl in a yoga bridge "Gold in your mind, Gold in your feet", Asnate Bočkis's "I am at home" (a Latvian under-the-blanket shelter bought after a 2008 exhibition), Harry Karssen's steel abstract (from his estate, 2004), Godelieve Smulders's "Bruidssuite" of beeches, Annetje van Verseveld's "Lief beton", Helena van Zandbergen's "Gevallen Engel". Kunstwacht 2563, 2570, 2571, 2587, 2599, 2604, 2606.
- Into **"Abri en peperbus (tram-stop living room)"**: Peter Erftemeijer's "Drie figuren op straat", three bronze walkers heading from the square to the old borough office, which residents dress up (the blind-recall "walking figures"). Kunstwacht 2573; Rochdale walk.
- Into **"Domela Nieuwenhuis statue"**: the Wilhelmina lime on the Nassauplein, planted in 1898 for the queen's inauguration by "the children of the Christian nursery schools", with its text stone, next to the anarchist. Kunstwacht 2613; OSM. Check: Still there?
- Into **"Domela Nieuwenhuisplantsoen (lost Maria Magdalenakerk)"**: Godelieve Smulders's "Vaarwel" in the Westzaanstraat marks the church's cemetery (1860 to 1894), where Potgieter had a marble bust on his grave; the last graves were cleared in 1956. Kunstwacht 2576.
- Into **"Centrale Markthal"**: Titia Ex's "Juicy Lights" (2025), the five glittering grape bunches that once hung over the Ten Katemarkt, now lit by visitors' movement in the hall. Kunstwacht 5668.
- Into **"Spaarndammerdijk (dike remnant)"**: "Voortdurend" (Studio Wessels Boer), a 170 m wave bench in the Houthavenpark along the step that is all that is left of the dug-away dike. Kunstwacht 2684.
- Into **"Zoutkeetsgracht warehouses"**: Klaartje Kamermans's twelve North Sea fish in tiles on the Bokkinghangen and Barentszstraat block (2010 to 2013, chosen in a contest among 100 tenant committees). Kunstwacht 2644.
- Into **"Polanenstraat block and Polanentheater"**: Bouke IJlstra's silver cones (1984, moved 1997) and Arnaud Beerends's black line. Kunstwacht 2610, 2632.
- Into **"De zwaaiende fietser (F. Starik)"** (13 m): Bas Peeperkorn's 65,000-tile mosaic of neighbourhood children with their own "Girl with a Pearl Earring" copies. Kunstwacht 2561.
- Into **"De Klerk's first blocks, Spaarndammerplantsoen"**: Peer Veneman's bronze "Haan". Kunstwacht 2601.
- Into **"Wester sugar refinery memorial"**: "Recycled '92" (Kunstwacht record of the same site).

Bos en Lommer:
- Into **"Opstandingskerk (Kolenkit)"**: Fioen Blaisse's bronze "Waterbuffel" on the Ernest Staesplein. Kunstwacht 1874.
- Into **"Erasmuspark"**: Renze Hettema's bronze on two boulders and Linda van Boven's bronze dog, both moved from the Gulden Winckelplantsoen market square in the early 2000s. Kunstwacht 2135, 2137.
- Into **"Former ULO school, Erik de Roodestraat 18"** (29 m): Marieke Bolhuis's "Stoere Bloemen" (2023), three children with flower-bud heads. Kunstwacht 2696.
- Into **"Keesmanblokken and Gibraltarbadje"**: "Zeeleeuw en monster". Kunstwacht record in the same court.
- Into **"Pniëlkerk ('het Theelichtje')"**: Joop van den Broek's glass window "De Opstanding" (Kunstwacht).

Oud-West, De Baarsjes:
- Into **"Vondelpark Pavilion"**: Leo Braat's ceramic women with bowls on their heads and the two iron Greek women with jugs. Kunstwacht 1966, 1930.
- Into **"Vondelpark"**: Hildo Krop's Gijsbrecht van Aemstel relief (1942) on the Vondelbrug (OSM, Wikidata Q124512980); the bridge is inside West's part of the park.
- Into **"Leidsebosje"**: Henk Zweerus's "Horizontale compositie", whose design sketch in De Telegraaf caused a row (readers saw an ape rock and swastikas in it). Kunstwacht 2152.
- Into **"Moederste"** (13 m): Leo Braat's water carrier and two fish round the Bellamyplein pond. Kunstwacht 2147.
- Into **"Wilhelmina Gasthuis gatehouse"**: Pauline Wiertz's "Microbe", twelve stone circles engraved with magnified viruses on the old hospital square. Kunstwacht 2170.
- Into **"4 May memorial, Columbusplein (Nina Rave)"**: Agelink and Huijbers's square, with street lamps shaped as standard lamps with fantasy figures in the shades. Kunstwacht 2545.
- Into **"1914 shops and workshop (Overtoom 21-25 and 45)"** (37 m): PINK's "Standing Stone", a huge stone on a plinth signed in gold at the start of the Overtoom. Kunstwacht 2155.
- Into **"Jan Evertsenstraat housing by J.F. Staal"**: the mosaic bench for jeweller Fred Hund, shot dead in a robbery in his shop on 7 October 2010 after fifty years in the street (factual Look for). Kunstwacht 2646; OSM.

## Sweep 3: war and memory

4en5mei.nl: 232 detail pages were fetched for the Amsterdam monuments and the West searches (the site returns HTTP 429 under load, so pages were fetched one at a time with pauses); 20 point to borough West, and every one is on the map or decided below. The OSM memorial pull (15 West features, Stolpersteine excluded) gave nothing new except the two natural-monument plane trees (already in "Leidsebosje") and "Tranen voor het verzet" (in Centrum).

### Bos en Lommer

**414. Joop Westerweel's plaque at the Blauw-Wit sports hall**; entrance of the Blauw Wit Sporthal, J. Banckersweg, 52.375846, 4.857227 (Bos en Lommer, Landlust).
- Hook: a plain white marble plaque: "TER HERINNERING AAN JO WESTERWEEL GEFUS. 11 AUG. 1944 IN LEVEN ERE-VOORZITTER IDEALISME EN STRIJDLUST."
- Why: the teacher Joop Westerweel became chairman of the korfball club Blauw-Wit in 1927, at 28, and in the 1930s kept poor and unemployed members in the club. In the war his group got Jewish children out of a house in Loosdrecht before a raid and took young Jewish pioneers across Belgium and France to the Pyrenees; he was executed in Vught. One of the best-known Dutch resistance men, remembered at his korfball club.
- Lead: 4en5mei.nl/oorlogsmonumenten/zoeken/3286 (sources: Het Parool, 14 February 2009; AKC Blauw-Wit).
- Check: Still there? (hall and plaque); Location (which door).
- **Nice**. New place.

### Oud-West, De Baarsjes

**415. Dirk van Nimwegen, who called the February Strike**; Dirk van Nimwegencentrum, Borgerstraat, 52.365455, 4.867864 (Oud-West/De Baarsjes, Van Lennepbuurt), 8 m from "Drie heertjes in gesprek".
- Hook: a plaque for the communist street sweeper who worked at the Stadsreiniging depot on the Bilderdijkkade and on 24 February 1941 made the call to strike on the Noordermarkt: the start of the February Strike against the persecution of the Jews.
- Why: the first mass protest against the occupier began with a man from this depot (the same Stadsreiniging whose Mozes Cohen murals and war-dead plaque now hang in De Hallen). Neighbours put the plaque up; schoolchildren unveiled it on 25 February 2005.
- Lead: 4en5mei.nl/oorlogsmonumenten/zoeken/2770; februaristaking.nl.
- Check: Still there? (the centre's name and the plaque).
- **Nice**. New place. Could be paired in a text with "Mozes Cohen's sanitation murals".

**416. Respectmonument "No War", Bilbaoplein**; 52.368718, 4.855461 (Oud-West/De Baarsjes, Hoofdweg e.o.), 92 m from "Bethelkerk and Magalhaensplein".
- Hook: graffiti letters shouting "NO WAR" across the square from a distance; close up, a wall of tiled flowers on patterns from the neighbourhood's cultures (Moroccan zellij among them).
- Why: a schoolboy's collage (Marvin Linger, Montessori College Oost, 2003/2004) turned into a war memorial by Remco Swart for the city and stadsdeel De Baarsjes, unveiled June 2005: a memorial made from a debate on "what does respect mean to you?".
- Lead: 4en5mei.nl/oorlogsmonumenten/zoeken/2740.
- Check: Still there?
- **Okay**. New place.

**417. The sexton who hid the resistance HQ (Stadhouderskade plaque)**; Marriott hotel, Stadhouderskade, 52.362453, 4.880272 (Oud-West/De Baarsjes, Vondelparkbuurt), 87 m from "Start of the Vondelstraat (nos. 9–14)".
- Hook: a bronze plaque: "DE KOSTER H.F. WESTERVELD HUISVESTTE HIER MET VOORTDUREND LEVENSGEVAAR VOOR ZICH EN ZIJN GEZIN VAN 25-3-1943 TOT 5-5-1945 HET ALGEMEEN HOOFDKWARTIER VAN DEN O.D."
- Why: the national headquarters of the Ordedienst, the largest resistance organisation, was hidden for two years in the Koepelkerk by its sexton. Prince Bernhard unveiled the plaque in the church on 7 May 1947. The church was demolished in April 1972 for the Marriott, and the plaque was put back on the hotel front when it opened in 1975: a gone building with its trace on a chain hotel.
- Lead: 4en5mei.nl/oorlogsmonumenten/zoeken/1464 (sources: Bouhuys and Klatser, *Om nooit te vergeten*, 1995); hmdb 231049.
- Check: Location (which wall of the hotel; the borough line runs along the Stadhouderskade, the pin is in West); Facts (which church: the Koepelkerk, Gereformeerd).
- **Nice**. New place.

### Sweep 3 merges

- Into **"Van Bossestraat 8-54"** (Westerpark): the "stray bomb" that took the roof turret was a British bomber with a New Zealand crew that came down here on 3 May 1943, destroying nos. 32 and 34. Three of the four airmen and seven neighbours died, among them the Stein family at no. 34 (only six-year-old Maria Gesina survived). It fits the 487 (RNZAF) Squadron Ventura raid on the Hemweg power station that day. The New Zealand ambassador unveiled a plaque at no. 32 in 2006. Leads: geheugenvanwest.amsterdam/page/13794 and /4024; hmdb 301961; en.wikipedia "Operation Ramrod 16". Check: Facts (that the register's turret loss is this crash); Still there? (plaque). Raise to **Nice** with this story. (Found by gvw.)
- Into **"4 May memorial, Columbusplein (Nina Rave)"**: the stone on the Postjesweg for Jan Frederik Dalemans and Johannes Geerbertus Gerritze, executed by the occupier, a gift of the tenants of housing association "Amsterdam-Zuid", afdeling West, unveiled 12 October 1946 (4en5mei 1498). Also name the white cross "Aan hen die vielen" (4en5mei 1491, the neighbourhood's own memorial) if the text does not yet.
- Into **"Het Sieraad"**: inside, a bronze Star of David made in the early 1990s by pupils of the Ambachtsschool for four Jewish pupils "removed from school" and deported (Wolf Heinz Fischer, Hans Rosenstein, Jonas Swaab, Johan Cornelis Syes), unveiled 4 May 2008 (4en5mei 3285).
- Into **"Zaanhof"**: the flag memorial's text: "under the singing of national songs by the joint schoolchildren of the Spaarndammerbuurt the Dutch flag was raised again, 10 May 1940, 5 May 1945", unveiled 31 August 1945 (4en5mei 4281; Kunstwacht 2586). Replaces the line under sweep 2.

Already on the map (no action): Gedenkteken 1940-1945 Egidiusstraat (1490, in "Monument 1940–1945 (Zittende vrouw)"), Vrijheidsboom (1496), Jan Verleun and Gerard Steen (1108, Look for in "De Boom (Boomkerk)"), Joodse grossiers (1449, in "Centrale Markthal"), Miedema and Bons (1492, "War memorial, Witte de Withstraat"), the B-17 crash memorial (2844), the Columbusplein memorial (4262), Jacoba van Tongeren (4460), the Stadsreiniging plaque and the Oud-West Jewish memorial on the Mozes Cohen murals (3937, 4483, in "Mozes Cohen's sanitation murals"), Levensboom. Dropped as interiors: the Augustinuskerk's list of fourteen parish war dead (3707; the church is not on the map) and the plaque for teacher Jan Nauta inside the Admiraal de Ruyterschool (3916).

## Sweep 4: hidden history

### Westerpark

**418. A church behind a doorway: Onze Lieve Vrouwe van Lourdes, Jacob Catskade 13**; 52.381262, 4.878237 (Westerpark, Frederik Hendrikbuurt; pin on the street door).
- Hook: a Catholic church of 1919 built inside a closed block, reached only through a wide oval-arched door at Jacob Catskade 11/13.
- Why: one of very few Amsterdam churches built in an inner garden (once part of the garden behind Nassaukade 57A, "the largest private garden in Amsterdam"). Since 1989 it has served the Portuguese-speaking community as Nossa Senhora de Fátima.
- Lead: geheugenvanwest.amsterdam/page/15802 (2012); beeldbank c. 1927 (archief.amsterdam/beeldbank/detail/c6431f6e-2558-811a-ae95-492c608bc7e2).
- Check: Still there? (in use?); Location (pin the church once seen).
- **Okay**. New place.

### Bos en Lommer

**419. Anna van Saksenbrug: abutments for a tram that never came**; Willem de Zwijgerlaan over the De Rijpgracht, 52.377600, 4.862610 (Bos en Lommer, Landlust).
- Hook: Piet Kramer's 1936 bridge has a spare set of bridge heads, built for a parallel tram bridge that was never laid; the wide green strip down the Willem de Zwijgerlaan was kept free for the same line.
- Why: a visible fossil of a 1930s plan to move the Haarlem tram (NZH) off the Admiraal de Ruijterweg; the NZH, with a concession to 1954, refused.
- Lead: nl.wikipedia "Anna van Saksenbrug" and "Willem de Zwijgerlaan (Amsterdam)" (Het Vaderland 29 Dec 1935).
- Check: Still there? (abutments visible).
- **Okay**. New place.

**420. Farm-life gable stones on the Willem de Zwijgerlaan**; Charlotte de Bourbonstraat 2, 52.381072, 4.859291, and Louise de Colignystraat 1 (Bos en Lommer, Landlust).
- Hook: a carter with his horse and a farmer with two oxen on the side walls of the 1930s strokenbouw, built on what was polder farmland of Sloten until 1921.
- Lead: beeldbank (archief.amsterdam/beeldbank/detail/708dcc66-8527-11e4-a756-37cd406bdbff and 708dca04-8527-11e4-a755-1bc7a6befaf2).
- Check: Still there?; Facts (maker, year).
- **Okay**. New place, or merge into "Koningsvrouwen van Landlust" (179 m).

**421. Station De Vlugtlaan ghost platforms**; Burgemeester De Vlugtlaan, 52.379440, 4.838060 (Bos en Lommer, De Kolenkit).
- Hook: an NS station from 1986 to 2000, demolished for the Hemboog except two short platform stubs on the railway dike beside the metro.
- Lead: nl.wikipedia "Station Amsterdam De Vlugtlaan".
- Check: Still there? (nothing since 2001 confirms the stubs); Location (on the borough line).
- **Okay** if confirmed, otherwise drop. New place.

### Oud-West, De Baarsjes

**422. Aletta Jacobs' house, Tesselschadestraat 15**; 52.361937, 4.878671 (Oud-West/De Baarsjes, Vondelparkbuurt).
- Hook: a plaque with her portrait on the house where the first Dutch woman to study at university and become a doctor lived with Carel Victor Gerritsen.
- Why: national suffrage and medicine history on a quiet street, the only West Atlas Obscura entry not on the map; neither name appears anywhere on the map.
- Lead: atlasobscura.com/places/aletta-henriette-jacobs; beeldbank 1971 and 1985; nl.wikipedia. (Found by both gvw and wpow.)
- Check: Facts (plaque by the Vereniging van Staatsburgeressen: 1923, in her lifetime, or 1959).
- **Nice**. New place.

**423. W.F. Hermans' boyhood home, Eerste Helmersstraat 208**; 52.360322, 4.862167 (Oud-West/De Baarsjes, Overtoomse Sluis).
- Hook: Willem Frederik Hermans lived here from 1929 to 1945, age 8 to 24: the war years that fed *De donkere kamer van Damokles* and *Het behouden huis*. A plaque says so.
- Lead: beeldbank 2008 (archief.amsterdam/beeldbank/detail/5025061c-e6f5-aec0-919f-59284a9eb5ac); plaque photographed 2014.
- Check: Still there?
- **Nice**. New place.

**424. Reyer Anslo with plague rats, Reyer Anslostraat 3A-5D**; 52.358670, 4.860351 (Oud-West/De Baarsjes, Overtoomse Sluis), 32 m from "Overtoom 429-439".
- Hook: a 1983 relief by Arie Teeuwisse of the forgotten poet Reyer Anslo as a traveller to Italy, with three rats in the corners: Anslo wrote an epic on the plague of Naples and reportedly died of plague in Perugia.
- Lead: geheugenvanwest.amsterdam/page/13073; beeldbank 1994.
- Check: Still there?; Facts (cause of death).
- **Okay**. New place.

**425. "Nooit gedacht en toch verkregen", Admiraal de Ruijterweg 149**; 52.374044, 4.858546 (Oud-West/De Baarsjes, Geuzenbuurt), 29 m from "Westerwijk" (a different building).
- Hook: a builder's stone of 31 March 1912 boasting "never expected, and yet obtained", on some of the first houses of the road, then still in Sloten.
- Lead: beeldbank 1987 (archief.amsterdam/beeldbank/detail/6a2c211d-2438-7916-899d-939b0d64b3b8).
- Check: Still there?
- **Okay**. New place.

**426. Claudius Civilis gable stone, Kinkerstraat 31**; 52.367828, 4.874735 (Oud-West/De Baarsjes, Van Lennepbuurt).
- Hook: a stone of the Batavian rebel above the first floor, a relic of "De Tuin der Nederlanden", where the schuttersgilde Claudius Civilis met.
- Lead: beeldbank 1975.
- Check: Still there?; Facts. The weakest item of the round.
- **Okay**. New place, only if the stone survives.

### Sweep 4 merges

- Into **"Busken Huetschool"** (27 m, opposite corner): the Potgieter medallion on Potgieterstraat 49, with a cryptic verse about the city outgrowing its walls. geheugenvanwest.amsterdam/page/13150; beeldbank 2008. Check: Still there?
- Into **"Begraafplaats Sint Barbara"**: the Degenkamplaantje, named after a gravedigger who worked there 56 years; in 2008 his son still lived on the grounds, three generations at the cemetery. geheugenvanwest.amsterdam/page/6296.
- Into **"AWV housing, Schaepmanstraat (Berlage and Van Epen)"**: the gate of the club house Ons Huis (Van Beuningenplein 103), the *Turks Fruit* location (1973) where Monique van de Ven runs into the rain; and the first tenants of woonblok A (1918: a corn porter, a bricklayer, a tinker, a bookbinder). geheugenvanwest 13735, 27705. Check: Location (the gate may belong to "De Arbeiderswoning, Van Beuningenplein (De Bazel)", 163 m).
- Into **"Hugo de Groothof (former widows' foundation)"**: widows on the ground floor let lovers in through the sash windows after the 11 pm curfew, so bars were fixed in front. geheugenvanwest 10740. Check: Facts.
- Into **"Robert Scottstraat 28 (De Springplank)"** (40 m): the stone "Vrede zij dezen huize, 1949" on Robert Scottstraat 36. Beeldbank 1992. Check: Still there?

## Sweep 5: behind the gate

### Westerpark

**427. De Tuinen van Westerpark (Nut en Genoegen and Sloterdijkermeer)**; Sloterdijkerweg 22, 52.388435, 4.855987 (Westerpark, Sloterdijk-West; grid cell C3).
- Hook: two allotment parks on the old Overbraker polder, joined since 2021 by two bridges into one walking circuit: stinzentuin, lupin bank, a kingfisher "castle", a toad pool, "de Stenenboer"'s stacked-stone garden, an organic nursery at the gate, and a 1930 sundial on a sandstone base for Nut en Genoegen's tenth anniversary.
- Why: a hidden walking world behind a hedge that most Westerpark visitors never enter, with the top natural-gardening label. Contested: in 2020 the city proposed rent rises of up to 800% and a lit bike path through the parks ("een Berlijnse Muur door het park"); the 2021 accord capped the rent, but the Haven-Stad bike link "may still come".
- Lead: detuinenvanwesterpark.nl (walk, keurmerk, Open Monumentendag pages); nhnieuws.nl/nieuws/277352, /285764.
- Status: gates open 1 March to 1 November, dawn to dusk. Check: Facts (founding dates: 1909 or 1920; 1936 or 1950); Location (sundial).
- Outlook: Under threat (Haven-Stad bike link, undated).
- **Nice**. New place. West's first allotment park on the map.

**428. Tuinpark Zonnehoek**; Archangelweg 3, 52.393486, 4.872102 (Westerpark, Houthavens).
- Hook: 70 plots squeezed between the Spaarndammerbuurt and the new Houthaven by the Spaarndammertunnel, keeping a flower-rich stretch of the old dike with spring crocuses, a butterfly garden and beehives.
- Lead: zonnehoekamsterdam.nl (over Zonnehoek, de dijk).
- Status: open 1 April to 1 October. Check: Facts (history; whether its dike is the Spaarndammerdijk).
- **Okay**. New place, or a second park in 427.

**429. Jan Wolkerstuin**; block interior by the Polanenstraat, entered from the Zaandijkstraat, 52.388166, 4.878391 (Westerpark, Spaarndammerbuurt/Zeeheldenbuurt), 28 m from "Volksbadhuis Polanenstraat".
- Hook: a 3,000 m² closed block interior turned into a pocket park after a residents' design contest, opened 1 March 2010 by Karina Wolkers for the writer and nature lover. Two replicas of his sculptures made from old Texel mooring posts, a hand pump feeding a stream, a frog pool, an "insect camping".
- Lead: Kunstwacht 2559; Boomzorg (Sept 2010); OSM.
- Check: Still there? (access; block interiors are often gated).
- **Okay**. New place, or a Look for line in "Volksbadhuis Polanenstraat".

### Bos en Lommer

**430. "I can change the world with my two hands"**; Jasper Leijnsenstraat 21, 52.376498, 4.861696 (Bos en Lommer, Landlust), 170 m from "Het Toverbos (Peim van der Sloot)".
- Hook: an abandoned playground with a dry paddling pool inside a housing block became in 2011 what is often called Amsterdam's first neighbourhood garden: 1,200 m² of beds, a picking garden, a tea bar.
- Why: its "Afval naar Oogst" scheme (about 125 households hand in kitchen scraps for compost) has been copied at about ten other sites. Founded by artist Natascha Hagenbeek.
- Lead: opentuinenwest.nl/startpunten (2026); amsterdamalternative.nl/articles/11474.
- Status: open on activity days, Tuinkafe Saturdays 12 to 17 (2026). Check: Facts (hours).
- **Nice**. New place.

### Sweep 5 merges

- Into **"Former waterworks (Watertorenplein)"**: the GWL horse and dog trough (about 1850 to 1900), the oldest relic of the waterworks, switched off in July 2023 and now run only on special days; residents fill its rim for the birds. gwl-terrein.nl/nieuws/de-fontein-is-uit.
- Into **"Cabralschool"**: MidWest's secret garden in the old schoolyard, with a compost greenhouse, bees, honey and a canteen; start of Open Tuinen West (blind-recall miss "MidWest").
- Into **"De Kamperfoelie"**: Cordaan Centrum Kijkduin now uses the school and opens its courtyard garden to neighbours (Open Tuinen West 2026). Check: hours.
- Into **"Kraakliedenbuurt and Hans Kok (Schaepmanstraat)"**: Zaal 100's current programme (vegetarian dinners, the Oktopedians); and the 1984 episode when mayor Ed van Thijn was chased out of the Staatsliedenbuurt (Westkrant, 20 Nov 2026), if not yet told.

Shelters and utility sites: none new. OSM has no bunker or military object in West, the Arcam route's only West shelter is Postjeskade (on the map), and the WWII shelters in Geheugen van West and the beeldbank are all gone.

## Sweep 6: modern and contested

### Bos en Lommer

**431. Bos en Lommerplein, the evacuated square**; 52.378535, 4.845793 (Bos en Lommer, Landlust), 62 m from "Les dames et la licorne (tiled entrance)".
- Hook: in July 2006 the mayor evacuated a brand-new town square (homes, shops and the district office) because the deck over its car park had been built with faulty reinforcement; a truck had already sunk into the paving.
- Why: the borough's defining planning fiasco, invisible today. Residents returned in December 2006; about 400 repair points cost about €25 million; evacuees later got tax demands on their allowance. Before that: a 1939 Berlage-style plan cut by the A10 viaduct, VPRO's fifth ugliest place in the Netherlands (2012), the market gone in 2021. The tiled entrance of "Les dames et la licorne" leads into the very garage.
- Lead: nl.wikipedia "Bos en Lommerplein"; binnenlandsbestuur.nl ("veiligste bouwwerk van Nederland"); dewestkrant.nl 2021-11-28, 2026-03-03.
- Check: Facts (96 or 196 households).
- **Nice**. New place.

**432. WOW Amsterdam: technical school, asylum centre, art house**; Wiltzanghlaan 60, 52.382231, 4.843372 (Bos en Lommer, De Kolenkit), 72 m from "Tiger Mothers of the Kolenkit (Sidney Waerts)".
- Hook: a 1967 technical school (HTS) became an asylum seekers' centre in 2000, stood empty from 2006 and was turned on a shoestring (2013 to 2014) into studios for young artists and a hostel, with an urban farm in the old courtyard.
- Why: on its hill stand Nicolas Chuard's "Ikearchaïc" (2020), outsized living-room furniture in rock by a former resident, and André Volten's "DIN 20", H-beams sawn into cubes; murals on the De Roos van Dekamaweg side.
- Lead: gebouwdin.amsterdam.nl/api/projectdetail/1081; Kunstwacht 2685, 2139; Street Art Cities.
- **Nice**. New place.

**433. Laan van Spartaan: a neighbourhood built round a football club**; pin on the pitches, 52.373813, 4.838830 (Bos en Lommer, De Kolenkit; grid cell F1).
- Hook: on the former Sportpark Jan van Galenstraat the city laid out a district (2007 to 2021) as a square of housing round the pitches of VVA/Spartaan, so the blocks stand round the fields like stands; one 250 m block by Claus en Kaan is called De Tribune.
- Why: streets and bridges are named after sporting heroes (Fanny Blankers-Koen, Rinus Michels, Ben Bril, Gerrie Knetemann, Puck van Duyne-Brouwer); the corner tower (Studioninedots, 2016) is the tallest modular building in the Netherlands, 361 units stacked off the lorries in four months, with no opening windows on the A10 side; the little Willem Augustinpark honours the communist Elfstedentocht skater; Hans Ittmann's naked bronze "Hordeloopster" still clears her hurdle at the sports ground (Kunstwacht 2142).
- Lead: gebouwdin.amsterdam.nl/api/projectdetail/1418, /1014; architectuurgids (De Tribune); nl.wikipedia "Laan van Spartaan". DeLaMar West there has closed; do not mention it.
- **Okay**. New place. (Found by the coordinator and bel independently.)

**434. Augustanakerk, a Lutheran church turned hofje**; Erasmusgracht 24-28, 52.376848, 4.853327 (Bos en Lommer, Erasmuspark), 183 m from "Erasmuspark".
- Hook: Ferdinand Jantzen's 1956 church, partly paid for by American Lutherans, became in 2017 a "new-style hofje" where young and old tenants share a kitchen and a chapel; its walled stiltetuin stays open.
- Why: six stained-glass windows by the artist and minister Piet Kok, rescued from a demolished Lutheran old people's home, hang in the stairwell; the conversion was the Lutherans' own.
- Lead: gebouwdin.amsterdam.nl/api/projectdetail/1417; nl.wikipedia "Augustanakerk (Amsterdam)"; dewestkrant.nl 2017-07-08.
- Check: Still there? (garden opening, last seen 2018).
- **Okay**. New place.

### Oud-West, De Baarsjes

**435. Sportplaza Mercator, the overgrown fortress**; Jan van Galenstraat 315, 52.371745, 4.846099 (Oud-West/De Baarsjes, Van Galenbuurt), 64 m from "De potkachel (Home Is Where the Heart Is)".
- Hook: VenhoevenCS's 2006 pool and sports complex at the head of the Rembrandtpark is wrapped in 2,000 m² of black rubbery skin slit every 20 cm for planters: some 50,000 plants of about 60 kinds on computer-controlled drip lines, with grass roofs.
- Why: it reads as an overgrown bastion at the gate of the 19th-century city; inside, Giny Vos's light work turns the ceiling into a starry sky over the pools.
- Lead: gebouwdin.amsterdam.nl/api/projectdetail/25; architectuurgids.nl/project/item/prj_id/2072.
- **Nice**. New place.

**436. The Tire Station: Michelin's drive-through, then a clinic and a shooting school**; Amstelveenseweg 1-7 at the Overtoom, 52.357280, 4.855370 (Oud-West/De Baarsjes, Overtoomse Sluis), 84 m from "Autopon".
- Hook: J.M. van Hardeveld's 1951 tyre-change station for Michelin, which cars drove through by separate ways in and out.
- Why: later a psychiatric institution and a shooting school, then empty, and since 2016 a hotel whose car park still uses the Michelin entrances; the gable stone was put back, and a bathhouse front on the Zocherstraat was rebuilt. Pairs with "Autopon" and "R.I.V.A. garage (Overtoom 197-205)" for a car loop.
- Lead: gebouwdin.amsterdam.nl/api/projectdetail/1501.
- **Nice**. New place.

**437. Broederhuis, the monastery that was a mosque**; Orteliuskade 2-4 / Postjesweg 124, 52.364514, 4.850677 (Oud-West/De Baarsjes, Hoofdweg e.o.), 125 m from "Postjeskade bunker (Cold War shelter)".
- Hook: a brothers' house of small cells, refectory and chapel round a cloister became a mosque in 2003: the courtyard was built over and the cross on the spire became a crescent.
- Why: in 2016 the mosque rooms came out, the cloister was restored and studios for starters and refugees open off stacked verandas.
- Lead: gebouwdin.amsterdam.nl/api/projectdetail/1416.
- Check: Facts (order and date; what the spire carries now).
- **Okay**. New place.

**438. De Roze Hallen**; Bilderdijkkade 50E, 52.367878, 4.869618 (Oud-West/De Baarsjes, Bellamybuurt), 123 m from "De Hallen (Westelijke Tramremise)".
- Hook: billed as the first housing in the world of its kind for LGBT people over 55 who need care (2017), built by the residents' own group on top of the district car park; Elspeth Pikaar designed the balcony railings with them.
- Lead: gebouwdin.amsterdam.nl/api/projectdetail/1644. A cancelled earlier project for gay elderly housing on the Van Hogendorpstraat (gebouwdin 1240) gives context.
- Check: Facts ("first in the world" is the project's claim).
- **Okay**. New place.

### Sweep 6 merges

- Into **"Telefooncentrale West"** (fact update): the switching hall inside the block (Alfred Boeken, 1926; municipal monument since 2009; "the only building in the city built inside an existing block") was converted by Rijnboutt into twenty homes ("De Centrale", 2024), and the car park round it became a shared garden. The live text says it is "still full of cables today". gebouwdin.amsterdam.nl/api/projectdetail/4076. Check which part KPN still uses.
- Into **"Kolenkit, “worst neighbourhood in the Netherlands” (Nannoplein)"**: Cascoland (blind-recall miss): the 2010 art tender's mobile henhouses, coop, fruit trees and glasshouse under the A10, the king's visit to the BuurtMoesBinnenTuin in July 2018, since moved to Slotermeer; the KolenkitKas glasshouse in the Vrouwengelukhof (check: Still there?); and De Houten Leeuw (2024), Amsterdam's first social housing block in cross-laminated timber, by the Kolenkitkerk (gebouwdin 4077). Leads: theguardian.com/cities/2014/may/19; dewestkrant.nl 2018, 2021.
- Into **"Hendrick de Keyserschool"** (Outlook: Under threat): the "Entree Gulden Winckel" plan for about 450 homes includes demolishing the school's gym (agreed 2022); the 2020 "Beton en Lommer" protest; halted November 2023, restarted September 2025. dewestkrant.nl 2022-05-30, 2023-11-29, 2025-09-24. The same perimeter may take in "Former post office, Admiraal De Ruijterweg" (not confirmed).
- Into **"Erasmuspark"**: Leonard van Munster's "Ile Flottante", a floating mini-villa in the ring canal (2014), squatted in 2017 and removed in 2018 (one gone-trace sentence); and the Wachterliedplantsoen across the Wil de Graaffbrug (see sweep 7).
- Into **"Westermoskee"**: the Piri Reïs apartments (2011) on the former RIVA site borrow the look of the unbuilt first Westermoskee design by Breitman and Breitman. gebouwdin 865.

## Sweep 7: curiosities, green, odd museums

### Westerpark

**439. Amsterdam in Motion (the city model)**; Pazzanistraat 19, Zuiveringshal Oost, 52.386139, 4.873289 (Westerpark, Spaarndammerbuurt/Zeeheldenbuurt).
- Hook: billed as the world's largest multimedia city model, about 30,500 hand-placed buildings at 1:1300 over 200 m², with a show from 1275 into the future; new buildings are added as they go up.
- Why: opened on Amsterdam's 750th birthday (27 October 2025) in the old DWDD/Op1 TV studio; aimed at Amsterdammers, not tourists.
- Lead: Amsterdam Museum press release; nhnieuws.nl/nieuws/353560; dewestkrant.nl.
- Status: open, ticketed (free with Museumkaart).
- **Nice**. New place. It sits on the A-list Westergas site; if that is read as part of "Westergasfabriek", make it a Look for line there instead (decision below).

**440. Boerderij Westerpark (city farm)**; Overbrakerpad 10, 52.387380, 4.865328 (Westerpark, Spaarndammerbuurt/Zeeheldenbuurt), 125 m from "Nemoland (De Groene Hemel)".
- Hook: a city farm founded by residents in 1998 in a green-roofed barn, with old Dutch breeds, working with the care organisation Cordaan; it reopened on 4 October 2026 after a long renovation.
- Lead: boerderijwesterpark.nl/meer-weten/geschiedenis; dewestkrant.nl.
- **Okay**. New place, or a Look for line in "Nemoland (De Groene Hemel)". West has no city farm on the map.

### Oud-West, De Baarsjes

**441. The last free-standing krul urinal in West**; Derde Kostverlorenkade / Vosmaerstraat, 52.359363, 4.856356 (Oud-West/De Baarsjes, Overtoomse Sluis), 49 m from "Observatiehuis, Vosmaerstraat".
- Hook: of about 175 cast-iron "Amsterdamse krul" urinals, 37 survive, two in West, and this is the only one on the street (the other is in Museum Het Schip's courtyard).
- Why: in the 1970s the Dolle Mina chained themselves to krullen to demand "plasrecht" for women; the city is replacing them. In 2026 artist Leendert Vooijce cleaned all 37, one a day, on film.
- Lead: dewestkrant.nl (9 June 2026); city open data OPENBARE_TOILETTEN.
- Outlook: Under threat (replacement programme). Check: Facts (model and date).
- **Okay**. New place.

### Sweep 7 merges

- Into **"Erasmuspark"** (Look for): the Wachterliedplantsoen, named in 1939 after medieval watchmen's dawn songs and rebuilt in 2010 as a "volcano landscape" with a pavilion, the Kinderboerderij Nieuw Bos en Lommer (52.377297, 4.853969) and a scent garden (2023); the Wil de Graaffbrug, named in 2002 after a communist house painter and tenants' campaigner.
- Into **"Westergasfabriek"** (optional Look for): "Fragments of the Sun" (Children of the Light, November 2026), eight round windows glowing amber like gaslight from dusk to dawn.

## Blind-recall misses and grid leads

| Miss or lead | Resolution |
|---|---|
| Gerda Rueter's memorial and her Gedenkteken 40/45 | on the map: "Monument 1940–1945 (Zittende vrouw)"; the stone is in "Liberty Tree, Bos en Lommerweg" |
| Walking figures, Van Limburg Stirumplein | merge into "Abri en peperbus (tram-stop living room)" (sweep 2) |
| Ten Katemarkt | dropped as a market (food bar); its grape bunches live on in "Centrale Markthal" (merge, sweep 2) |
| Zaal 100 | on the map in "Kraakliedenbuurt and Hans Kok (Schaepmanstraat)"; detail added (sweep 5) |
| Krop, "Overvloed en Verkeer" | on the map in "Spaarndammerspoorbrug (Hildo Krop sculptures)" |
| Tuinen van Westerpark, Nut en Genoegen | 427 |
| Tuinpark Zonnehoek | 428 |
| MidWest | merge into "Cabralschool" |
| Cascoland | merge into the Nannoplein place |
| Grid C3 (Sloterdijk allotments) | 427 fills it; the rest of the cell is railway yard |
| Grid F1 (Gerbrandypark, Willem Augustinpark) | 410 and 433 fill it; the Gerbrandypark itself is across the ring railway in Nieuw-West |

## Checked and dropped

Out of borough:
- REM eiland, Haparandadam (Westpoort); Gerbrandypark, Frieda Belinfante-brug, Hannie Schaftbrug, Camera Obscurabrug, Louis Couperusbuurt, the Haarlemmerweg monument for Elias and the Verkuijls (all Nieuw-West; the last is a good item for the Nieuw-West round); "Tranen voor het verzet" (Centrum); Van Eeghenstraat demolition fight, Willibrordusstraat fire station (Zuid); the Nits studio (Westpoort).

Already on the map (no new trace to add): Kunstwacht 2133 Zittende vrouw, Krop's Joodse grossiers relief, the Stadsreiniging plaque (Mozes Cohen's murals), Orso, Hettema and Leda (Erasmuspark), Woezel (Zaanhof), Van Hove's P.W. Janssen bust, the Van Schendel bust, Lex Horn's relief, the Lucebert mural, the Van der Heide railings, Krop's bridge sculptures, GWL's car-free plan, Sint-Josephkerk (Vluchtkerk), Tiger Mothers, the liberty tree, Geuzenhof gardens, New Kit, the two 1865 plane trees (Leidsebosje), Atlas Obscura's Keith Haring mural, LAB111, Zevenlandenhuizen, Boomzagertje.

Gone without a lasting trace: Under Heaven 02 / Fata Morgana (removed by mistake, October 2025); Volten's "Vijf elementen" arches on the Surinameplein (removed July 2026); Volten 2015 and Auke de Vries works (temporary); Leonard van Munster's "IK HOU VAN JE" on the GAK roof; the Mahez building, Jan van Galenhal, Kinine factory, Circus Boltini, the speeltuinen, the Jan van Galenstraat heliport, the WWII shelters of Van Hogendorppleintje, Rijpgracht, Nassaukade, the Ringspoordijk and Zaanstraat; Theater West-End (now housing); every West entry on amsterdamsloopt.nl; Qubic (temporary student village); the 2022 renaming boards; the 2026 squats on De Wittenkade and the Kinkerstraat.

Stored or inside: Breed "II", Eggen windows (stored); Sjollema GGD, Forrer, Mammen, Caveto, Kurpershoek and other school interiors; Körper in Körper (inside the pool, in 435); the Querido plaque (inside the Narcis Queridoschool); Aernout Mik's stagings in the police station, Tweede Constantijn Huygensstraat (interior, status unknown).

Too thin or below the bar: play objects, mosaic benches, the play fence, Solleveld panels, KROON, the Het Schip info column, Bolwerkenroute, "Pluk de Dag" and "Forest" (no description), "Ogen" (probably replaced by the Reinaert mural), Meteorenregen (gateway decoration, no story), Art for (W)all kingfisher, Mimicry (A10 underpass cladding, no story), Vlaggenproject (likely temporary), Spring into Action; the Gemeentegiro letterbox (already in the Domela Nieuwenhuisplantsoen text); the Pelikanen stone, Gibraltarstraat (thin, unseen since 1992); the "vroedvrouw" statue at the birth centre on the Bosboom Toussaintstraat (Beatrijs Smulders link unconfirmed, small); Karel Doormanstraat renaming, Mansveltschool, Dansschool Reijers; Kapperszaak Zaanstraat 36 and Kapsalon Schnür (unconfirmed; worth a look on a walk); No Man's Art Gallery, De Bouwput, Museum Villa, Fabrique des Lumières (commercial); Ten Katemarkt and Westkrant food items (food bar); Zadenbibliotheek; Het Eetbare Plantsoen; Speeltuin Plan West (no history source); Hembrughofje (no story); Pompstation Haarlemmerweg; Groene Oase, Schooltuin Ridderbos and other neighbourhood green; Mevlana Moskee (no history found); Nieuw Landlust binnentuin (private); Circus Elleboog, DeLaMar West (closed).

Architecture read and not taken (gebouwdin, architectuurgids): Startblok Wormerveerstraat and Stek West (refugee and starter housing; plain), LommerRijk, Foyer Bos en Lommer, Woningbouw Domela Nieuwenhuisstraat (Kempe Thill), Houtmankade housing with police station (Theo Bosch), HAT-eenheden Jacob Catskade, Kinderdagverblijf Borgheem, Gebouw voor Stadsdeelwerken (Claus en Kaan), Kantoorgebouw Nissan, Klein Vondelpark (Zocherstraat school, in "Zocherstraat HBS"), Wereldpand (Mercatorplein, on the map), Fridtjof Nansenhof, De Kleine Johannes, Oldskool; De Liefde (Vandenhove) and Nova Zemblastraat housing are already told in "De Liefde (vanished church)" and "Het Behouden Huys (Nova Zemblastraat)".

Parked, location unresolved: the Klokkenhof (1962), flats for single working women, companion to the Oranjehof (geheugenvanwest 38616).

## Parked (A-list)

None taken. Westergasfabriek, Het Schip and De Hallen material was left alone; Amsterdam in Motion (439) and "Fragments of the Sun" sit on the Westergas site and need the user's call.

## Summary

41 new-place candidates (401 to 441), about 47 merges or Look for lines.

| Sweep | Westerpark | Bos en Lommer | Oud-West, De Baarsjes | Total |
|---|---|---|---|---|
| 2 Public art | 8 (1 Nice, 7 Okay) | 4 (1 Nice, 3 Okay) | 1 (Okay) | 13 |
| 3 War and memory | 0 | 1 (Nice) | 3 (2 Nice, 1 Okay) | 4 |
| 4 Hidden history | 1 (Okay) | 3 (Okay) | 5 (2 Nice, 3 Okay) | 9 |
| 5 Behind the gate | 3 (1 Nice, 2 Okay) | 1 (Nice) | 0 | 4 |
| 6 Modern and contested | 0 | 4 (2 Nice, 2 Okay) | 4 (2 Nice, 2 Okay) | 8 |
| 7 Curiosities and green | 2 (1 Nice, 1 Okay) | 0 | 1 (Okay) | 3 |
| Total | 14 (3 Nice, 11 Okay) | 13 (5 Nice, 8 Okay) | 14 (6 Nice, 8 Okay) | 41 (14 Nice, 27 Okay) |

No Amazing. Strongest: 401 De boom valt op mij, 409 the Kolenkit Bible capitals, 414 Joop Westerweel, 415 Dirk van Nimwegen, 417 the sexton's plaque, 422 Aletta Jacobs, 423 W.F. Hermans, 427 the allotment parks, 430 the neighbourhood garden, 431 the evacuated square, 432 WOW, 435 Sportplaza Mercator, 436 the Tire Station, 439 Amsterdam in Motion. The most useful merge is the Van Bossestraat bomber, which corrects a live text.

Decisions for the user:
- Shortlist picks from 401 to 441 (Okay items 421 and 426 only if they turn out to survive).
- 439 Amsterdam in Motion: own place, or a line in the A-list "Westergasfabriek"?
- 427 and 428: one allotment place or two?
- 429 and 440: own places or Look for lines (in "Volksbadhuis Polanenstraat" and "Nemoland")?
