# Nieuw-West round C, slice "south": notes

5 new places in `places/r4-south.yaml`; 7 merges into `places/sloten.yaml`, `places/osdorp.yaml`, `places/r3-osdorp.yaml`, `places/art.yaml` and `places/r3-sloten.yaml` (titles unchanged); 324 went into the new Rooie Reus place as the scout asked; 315 was not merged (see below). All six files validate with 0 errors. Every new pin point-checked with `scripts/areas.py`: all in borough Nieuw-West.

## New places

| Scout | Title | Category | Rank | Flags / outlook | Pin |
|---|---|---|---|---|---|
| 301 | Nieuw Sloten, the Olympic village that wasn't | housing | Nice | none | the Baldakijn, OSM way 143975265 (Sloten/Nieuw-Sloten) |
| 302 | The Rooie Reus, Sloten's champion copper beech | green | Nice | none | the tree itself, city special-trees data (tree 386978), 70 m from the Sloterkerk pin |
| 303 | Noorderakerweg and Zuiderakerweg, the polder roads De Aker kept | hidden-history | Okay | none | Zuiderakerweg 41 (PDOK; De Aker) |
| 304 | Wereldgroente greenhouses, Osdorperweg 937 | green | Okay | none | Osdorperweg 937 (PDOK; Lutkemeer/Ookmeer) |
| 305 | Haci Bayram Mosque, the former School met de Bijbel | religious | Nice | none | building centroid, OSM way 275094459 (Osdorp-Midden) |

No `check` flags were needed: the Rooie Reus pin came from the city's open data on special trees (BOMEN_BIJZONDER), which gives its exact point, so the scout's `check: Location` is settled. No outlooks set.

Ranks are not yet added to `scripts/data/amsterdam-c-list-ranks.json` (outside this slice's files): 301 Nice, 302 Nice, 303 Okay, 304 Okay, 305 Nice.

## Merges

- 312 "Kampschooltje, Osdorperweg 665" (osdorp.yaml): paragraph in EN and NL on the wartime camp school of four rooms at about Osdorperweg 705, used "sometimes" (the memoir's word) by Jozefschool pupils when the Germans requisitioned their school; camp empty from June 1943; 16 May 1944 raid. Written generally (Sinti and Roma, and some caravan dwellers with them, deported to Westerbork) because the source does not say that De Rolleman's own residents were deported; it names one woman, an aunt of the interviewee, from Nijmegen. Source: Geheugen van West 15889.
- 313 "Sloterweg village houses" (sloten.yaml): paragraph in EN and NL on Julius Meijer's butcher's shop at no. 1233 and the fate of his sons, checked against the Digitaal Joods Monument (see below); the old Look for line shortened.
- 314 "Akermolen (De Oude Molen)" (sloten.yaml): one sentence each language, attributed to a neighbour's memory (Geheugen van West 15877, Wim Luimee).
- 316 "De Meervaart and the theatre in the Sloterplas" (r3-osdorp.yaml): Amsterdam Blues Festival 1983 to 2001 (bluesmagazine.nl, plus GvW 12560) and the Sunday jazz concerts, attributed to a regular's memory. Mandela left out, as the scout advised.
- 318 "Groot Landschap" (art.yaml): "de puist" and the korfball sprints added to the hill's Look for line (GvW 2218).
- 322 "Raesberg and the lost village of Raesdorp" (r3-sloten.yaml): Look for line on the 1920 Eendrachtpolder pumping station at Osdorperweg 981 and the uncovered lock walls with their 2011 information panel, said to be just over the line in Haarlemmerliede. "Still working" was dropped: the newest source is from 2011.
- 323 "Oud-Osdorp cemetery and the Deckers tomb" (osdorp.yaml): the weeping ash is now named as a champion tree. Planting year conflict: the earlier text said about 1850, the city's tree list and slotenoudosdorp say 1860; the text now says "mid-19th century" in both languages.
- 324 the Oriental plane opposite the Sint-Pancratiuskerk (1910, trunk 4.27 m, a champion tree): a Look for line in the new Rooie Reus place, as the scout said to do if 302 became its own place. Nothing added to "Sint-Pancratiuskerk (Sloten)".

## Left out

- 315 "Blauwe Boog (Lixenberg)": **not merged, the scout's lead is a different object.** Geheugen van West 11723 (2010) is about a blue-tiled stone gate on the bridges of the Forintplantsoen in De Aker, which lost its tiles and was redone as a community mosaic (flowers, butterflies, words) led by Willemijn Harmsen and Manja Tijssens, with pupils of De Horizon. nl.wikipedia "Forintplantsoen" confirms it (gate on bridge 2268). Lixenberg's arch is painted steel with no tiles, about 750 m away. The Forintplantsoen gate is a playground mosaic without a story beyond the repair; dropped. Could be a Look for line somewhere in De Aker if a place there ever needs one.

## The Meijer family (313): Joods Monument check

Checked on joodsmonument.nl on 23 Nov 2026:
- Maurits Moses Meijer (page 175869): Sloten, 20 November 1892 to Sobibor, 30 April 1943; cattle dealer. Geheugen van West spells "Mozes"; the Joods Monument spelling "Moses" is used.
- Dina Meijer-Smalhout (page 175868): 1893 to 1943, murdered in Sobibor on 30 April 1943 with her husband (born Doetinchem, 11 July 1893).
- Liepman Gerardus Meijer (page 134465): Sloten, 13 March 1900 to Auschwitz, 30 December 1942; taxi driver.
- Story "Veehandel aan de rand van de stad" (page 416164): Julius Meijer died 16 January 1927; Jacob Koning took over the shop in 1932.

Conflicts: the scout (from GvW 15894) has the Koning family running the shop "until about 1980"; slotenoudosdorp (Sept 2024, with a dated 1977 family photo) says it closed in 1977, which the existing text already had. Kept 1977. The shop's sister Elisabeth married Maarten Kars; no link to the Kars of the Kars and Bierman memorial was looked for or claimed.

## Other conflicts and choices

- 305 address: GvW 15886 gives Osdorperweg 384 and "a mosque since the 1970s"; the 4en5mei text (via slotenoudosdorp, 2014) gives 386 and the sequence 1982 / 1993 / 1997. Used 386 (also the mosque's own address) and the 4en5mei dates. Year built: "more than 80 years ago" in 2014 and OSM start_date 1931; written "c. 1931". The headmaster's house beside the school is not confirmed to survive, so it is not a Look for line. Still active: current listings with recent reviews; no 2025 to 2026 news found. Visitor access not confirmed, so the text only says it is a working mosque seen from the cycle path.
- 301: the Rodi article gives 50 to 60 homes a hectare (the scout had 50 to 80): used Rodi. The chestnut's planting date is 23 October 1990 (Rodi, Parool front page). "Fourteen sectors" and the architecture guide's "art and kitsch" quote were not verifiable (architectureguide.nl and gebouwdin not read); the text only says several architects each designed a part, naming Soeters (Commons file names confirm his Blankenbergestraat houses). The shopping centre renovation (10 months from Sept 2024) was not checked and is not mentioned. The chestnut tree was not located.
- 301 growers: the LEI study (Feb 1990) has 32 bought out around 1986, 18 to the Aalsmeer region, 14 elsewhere of whom nine pioneered Buitenvaart in Almere; GvW 794 adds the Flevopolder and Noordoostpolder.
- 302: Parool vote of 2011 now rests on two sources (GvW 18124 and slotenoudosdorp Aug 2020, which names the entrant and the runner-up). Trunk 565 cm from the city list (the scout's "over 5 m").
- 303: which stretches survive: slotenoudosdorp (2009) says the Noorderakerweg was halved in the 1960s and the rest plus the Zuiderakerweg kept their character into the 1980s and 1990s, with old houses still among De Aker, the Zuiderakerweg the most rural. Not walked. The Akerbad got one sentence (gone, no trace).
- 304: plot size 25 m² (2024 post, website) vs 35 m² (NH Nieuws 2025): text says "about 25 to 35". Long beans were not in any source and were dropped from the Look for line; the website names okra, postelein, sopropo, klimspinazie.

## Photos

- With Commons photos: 301 (Soeters houses 2009, Baldakijn Apr 2025, Lamellenhek Nov 2014, Plateau met lijst Jun 2018), 302 (parsonage, churchyard and the beech, 2014), 303 (Noorderakerweg at the Hoogheemraadweg, 2023, CC0).
- **Without photos: 304 Wereldgroente greenhouses, 305 Haci Bayram Mosque.** Commons searches found nothing for either.

## Dutch

All Dutch texts are written from Dutch sources (nl.wikipedia, Rodi, LEI, slotenoudosdorp.nl, Geheugen van West, NH Nieuws, wereldgroentetuintjes.nl, the city tree list, Joods Monument). None written from English only.

## Route idea

"From village to compact city" (walk or bike, about 6 km): Rooie Reus (behind the Sloterkerk) > Sloterweg village houses (no. 1233) > Sint-Pancratiuskerk and its plane > Natuurpark Vrije Geer > Vlindermolen > Nieuw Sloten (Belgiëplein, Kasterleepark) > back west along the Osdorperweg to the Haci Bayram mosque > Zuiderakerweg and Noorderakerweg > Akermolen.
