# Centrum scout AW: theme A (public art and walls, war and memory), zone West

Scouted 2026-11-24. Zone West of stadsdeel Centrum: Jordaan, Haarlemmerbuurt (with the Western Islands and the Planciusbuurt), Grachtengordel-West. Sweeps 2 (public art and walls) and 3 (war and memory). Nothing is written to the map: the user picks. Items of SCOUT-DW and SCOUT-BW (done for this zone) are not repeated; where a find belongs to one of theirs it says "group with DW-nn" or goes under Leads.

Every pin below was point-checked with `areas.locate` (borough Centrum, wijk as named). Pins from a geocoded address (PDOK) are marked "address pin"; others come from the source named.

Short forms: **KW n** = Kunstwacht record n, the city-backed outdoor-art register on https://www.buitenkunstamsterdam.nl/ (read through the site's own API); **4en5mei n** = https://www.4en5mei.nl/oorlogsmonumenten/zoeken/n/ ; **Wandkunst** = the city's register of post-war wall art (226 works citywide), searched by address; **VVAG** = the gable-stone pages of the Vereniging Vrienden van Amsterdamse Gevelstenen, https://www.gevelstenenvanamsterdam.nl/<slug>/ ; **GS.net** = the gable-stone inventory on https://www.gevelstenen.net/ (Amsterdam pages, updated 16-02-2024); **SAC** = Street Art Cities, https://streetartcities.com/cities/amsterdam/markers/<id> ; **WJGR** = Wijkkrant Jordaan & Gouden Reael, PDF `https://jordaangoudenreael.nl/documenten/<id>.pdf`.

**26 candidates** (AW-01 to AW-26): Jordaan 12 (1 Amazing, 7 Nice, 4 Okay), Haarlemmerbuurt with the Western Islands 7 (3 Nice, 4 Okay), Grachtengordel-West 7 (1 Amazing, 3 Nice, 3 Okay). Gable stones are proposed as six street groups (AW-21 to AW-26), not one by one. Fewer than the 30 the brief expects: DW and BW already took most of the zone's art and memorials from the neighbourhood papers, so a good part of this sweep's yield is second sources for their items (Leads) and the dropped table (49 rows).

## Sources

**Gone through completely**

- **Kunstwacht / buitenkunstamsterdam.nl**: the full register (1,770 records) pulled in one call; 41 works with coordinates in zone (Jordaan 22, Haarlemmerbuurt 15, Grachtengordel-West 4) and every one of their texts read; the 50 records without coordinates screened by title (two belong to the zone: Kees de jongen, DW-03; De boom valt op mij, which proved to be in borough West).
- **4en5mei.nl war-memorial database**: the 300 records nearest the zone fetched with their detail pages; 13 lie in zone (Jordaan 6, Grachtengordel-West 7, Haarlemmerbuurt none); all 13 texts read.
- **Wandkunst register**: all 226 works filtered to the zone; 7 in zone, all read.
- **OpenStreetMap** (Overpass): artwork, memorial, plaque, stolperstein and statue objects in the zone box, 118 elements, about 50 in zone, all rows checked.
- **Street Art Cities**: the full marker feed (8,620 markers) filtered to the zone: 42 markers (Jordaan 29, Haarlemmerbuurt 6, Grachtengordel-West 7; 30 active, 12 removed). Titled markers opened in the browser.
- **Mapping Slavery** (Amsterdam map, 24 markers): one in zone (Anton de Kom).
- **VVAG** site: all 868 pages pulled; every zone street page and every zone stone story read (about 60 stories).
- **GS.net** inventory: all Amsterdam letter pages, filtered to postcodes 1013, 1015 and 1016: 606 stones in or near the zone, used to count stones per street and to find groups.
- **nl.wikipedia, Lijst van beelden in Amsterdam-Centrum**: every row in zone.

**Sampled only**

- Search engines (WebSearch and Google in the browser): about 25 targeted searches for second sources and status (Baadster, De Kom, Vaste klant, Aardige Amsterdammer, Wubboboom, Mandela mural, Herengracht 395 cat, Lindengracht 206 to 220, Verhulst, Zoutkeetsplein).
- Articles read: Hildo Krop Museum newsletter March 2019 (the Baadster's return); Stadsherstel, Reestraat 6; Parool 18 October 2015 (Aardige Amsterdammer, read in the browser at human pace); NRC 1 May 2020 (snippet only); WJGR 2012, 00000044 (murals initiative); iBecomingDutch blog (Mandela mural); nl.wikipedia articles named per item.
- SAC marker pages: only the titled ones (The London Police, a few others); most zone markers are "Untitled" paste-ups and stickers.

**Not read, and what that leaves open**

- HMDB (Cloudflare wall; not tried in the browser), onsamsterdam.nl (robots; not needed), parool.nl beyond the one article, the Wijkkrant (already mined by DW), Stolpersteine Amsterdam (stolpersteine-amsterdam.nl) per address: the Stolpersteine in Grachtengordel-West are known only from OSM, so their addresses and stories are open.
- No site visits: the indoor memorials (police headquarters, PTT, Coymans, Goedkoop hall) and the current state of the Mandela mural and the Herengracht cat are unverified.

## Coverage

| wijk | sweep 2 (public art, walls) | sweep 3 (war, memory) |
|---|---|---|
| Jordaan | done: Kunstwacht, Wandkunst, OSM, SAC, statue list, VVAG/GS.net (Bloemgracht, Palmgracht, Lindengracht, Tichelstraat, Elandsstraat) | done: 4en5mei (6), OSM; Stolpersteine not looked up per address |
| Haarlemmerbuurt + Western Islands | done: same sources; VVAG Haarlemmerdijk, Vinkenstraat, Brouwersgracht east, Zandhoek, Bickersgracht | done: 4en5mei (none in wijk), OSM (one plaque, DW's) |
| Grachtengordel-West | done: same sources; VVAG Brouwersgracht west, Keizersgracht, Herengracht, Nine Streets | done: 4en5mei (7), OSM Stolpersteine (5 points, addresses open), Mapping Slavery |

## Shortlist

### Sweep 3: war and memory

#### Grachtengordel-West

**AW-01 The frog stone, Prinsengracht 535: hiders who gossiped like Ovid's frogs.** Pin 52.368743, 4.883000 (4en5mei; address pin 52.368753, 4.882961), Prinsengracht 535, stone beside the front door. A blue stone with a frog in relief and a line from Ovid's Metamorphoses, "QUAMQUAM SUNT SUB AQUA ...": the rest of the line, as the joke went, says that even under water they keep on slandering. From 1941 more than eight people hid in this house, among them the archaeologist and art historian Annie Zadoks-Josephus Jitta, and they gossiped so much that they compared themselves with the Lycian peasants whom Latona turned into frogs and who went on cursing under water. She escaped when the hiding place was cleared in 1942/1943, bought the house after the war, and her son gave the stone. Local voice: the hiders' own joke, as she told it to NRC ("Een huis vol kikkers", 30 November 1990, cited by 4en5mei). Lead: 4en5mei 4785. Second: https://nl.wikipedia.org/wiki/Prinsengracht_535 ; Jona Lendering, "Ovidius in Amsterdam", Mainzer Beobachter blog, 23 June 2012 (cited by 4en5mei). Status: in the 4en5mei register, read 2026-11-24 ("bevindt zich naast de voordeur"). Caveats: private house, stone only; a short walk from the A-list Anne Frank House, which makes a good contrast but must not be the pitch. Rank **Amazing**. New place.

**AW-02 Homomonument: three triangles that point somewhere.** Pin 52.374466, 4.884725 (OSM), Westermarkt, on the Keizersgracht. Karin Daan's pink granite triangles (unveiled 5 September 1987), the first free-standing monument in the world to persecuted gay men and lesbians. Pitch on what most people stand on without seeing: the three corners form one big triangle; the step into the water ("present") points at the National Monument on the Dam, the one in the pavement ("past") with Jacob Israël de Haan's line "Naar vriendschap zulk een mateloos verlangen" points at the Anne Frank House, and the raised one ("future") pointed at the COC's office then in the Rozenstraat. The idea began on 4 May 1970, when two young activists were arrested for laying a wreath on the Dam for gay victims; a day later thirty wore pink triangles in protest. Local voice: flowers on the water step all year, for war victims and for AIDS victims (nl.wikipedia); the tram stop was renamed "Homomonument" in 2017. Lead: KW 529 (gemeentelijk monument). Second: 4en5mei 1499; https://nl.wikipedia.org/wiki/Homomonument_(Amsterdam) (after Karin Daan's own explanation). Status: in KW and 4en5mei 2026; OSM inscription. Caveats: second tier per A-LIST.md, allowed; directly beside the A-list Westerkerk, so pitch on the pointing. Rank **Nice**. New place (possibly a monument merge: KW calls it a gemeentelijk monument).

**AW-03 Reestraat 6: Anton de Kom's Amsterdam house.** Pin 52.372411, 4.884141 (Mapping Slavery marker), Reestraat 6. The anti-colonial writer of "Wij slaven van Suriname" (1934) lived here in 1935, after the colonial government arrested him in 1933 for "communist propaganda" and sent him away; he died in a concentration camp in 1945 for his part in the resistance. His house in Paramaribo collapsed a few years ago; this one survives because Stadsherstel bought the near-ruined shop-house in 1968 (only the ground floor stood) and rebuilt it, timber frame and all, by 1970; it was a milk shop for half a century. Local voice: Stadsherstel, "Zijn huis in Paramaribo is helaas enkele jaren geleden ingestort, maar gelukkig bestaat dit pand in Amsterdam nog". Lead: https://mappingslavery.nl/kaarten-2/kaarten-nederland/amsterdam/ . Second: https://stadsherstel.nl/monumenten/reestraat-6/ ; https://www.hekjesenslootjes.nl/node/771 . Status: Stadsherstel page current 2026 (now part of the Pulitzer hotel). Caveats: whether a plaque marks the house is not stated anywhere I read (check on site); nl.wikipedia (Reestraat) dates his stay to the 1920s, Mapping Slavery and Stadsherstel to 1935: use 1935. De Kom's 4en5mei stone (4544) is in the Nieuwe Kerk (Core zone, A-list). Rank **Nice**. New place.

#### Jordaan

**AW-04 The old gym, Nieuwe Passeerdersstraat 1: "Aan onze gevallen makkers".** Pin 52.366563, 4.879384 (4en5mei; address pin 52.366431, 4.879105). A white stone figure raising his arms to the sky, by Hendrik Dannenburg, on the front of a late-19th-century gymnasium, for the Jewish sportsmen killed in the war. From 1 November 1941 Jews were barred from sports clubs; in January 1945 the occupier turned this same turnhal into the registration office of the Arbeitseinsatz, and on 8 January 1945 the resistance tried to blow it up and failed. Unveiled on Saturday afternoon 3 May 1952 by alderman F. van Wijck. Lead: 4en5mei 1601. Second: to find (nl.wikipedia list of war memorials in Amsterdam-Centrum not yet checked). Status: register 2026. Caveat: the building's present use is not in the source. Rank **Nice**. New place.

**AW-05 Jordaanoproer, Noordermarkt: the woman on the table.** Pin 52.379398, 4.886411 (KW), Noordermarkt by the Noorderkerk. Sofie Hupkens's 1987 group of two women and a man bound by one broad hand, for the riot in the week of 4 July 1934 against cuts in the dole: five dead and dozens wounded. The front woman is modelled on the woman who that evening climbed on a table and said "Ik krijg nu zeven gulden minder". Text on the base: "Eenheid sterkste keten Jordaanoproer 1934". Beside it the 1950 relief by E.J. Hoek for the Jordaan residents killed in the war (unveiled 3 May 1950, 4en5mei 1604). Local voice: the quoted woman. Lead: KW 494. Second: https://nl.wikipedia.org/wiki/Lijst_van_beelden_in_Amsterdam-Centrum (row 1987); for the Hoek relief 4en5mei 1604 and KW 503. Status: KW 2026; OSM. Caveats: DW-05 covers what locals point at on the square (and names the oproer row only as a source); keep separate or fold in. The Berta de Vries bridge (DW Look for) belongs to the same story. Rank **Nice**. Group with DW-05, or new place.

### Sweep 2: public art and walls

#### Jordaan

**AW-06 The London Police corner, Prinsengracht at the Tuinstraat.** Pin 52.377833, 4.885574 (SAC 896), Prinsengracht 64, side wall on the Tuinstraat. The Amsterdam-based duo's round-eyed "lads" cover a wall that was a dumping spot for bulky rubbish, whose owner spent time and money every year on removing graffiti; the mural stopped it. Around the corner the Tuinstraat and Egelantiersstraat carry the zone's densest patch of small street art (SAC lists 12 active pieces within 100 m, among them "Wednesday Addams"). Local voice: the Jordaan murals initiative, "Bewoners van de Jordaan kunnen zich vast nog wel herinneren dat dit vroeger een plek was waar mensen hun grofvuil deponeerden" (WJGR 2012, 00000044). Lead: WJGR 2012, 00000044. Second: SAC 896 (marked "seen" 15 times; last seen 19 October 2026); OSM mural. Status: October 2026. Caveat: street art changes; the small pieces around it come and go. Rank **Nice**. New place.

**AW-07 Vaste klant, Looiersgracht 40B: a statue paid for a bar tab.** Pin 52.368656, 4.881400 (OSM; address pin 52.368675, 4.881391), on the bench of café Festina Lente. Albert Zweep, a regular here as a young artist, drank on credit until the bill could not be paid, and settled it with a statue: a sad old regular stroking the café cat, modelled on the characters of Carmiggelt's "Kronkels" (1997). Vandals kept knocking the head off; he repaired it again and again until Heineken paid for a bronze version; since 2020 he has worn a face mask. Local voice: the artist (2021), the work he is proudest of. Lead: https://nl.wikipedia.org/wiki/Vaste_klant . Second: NRC, "De Vaste Klant", 1 May 2020 (https://www.nrc.nl/nieuws/2020/05/01/de-vaste-klant-a3998202); OSM. Status: May 2020; mask photos (Wikipedia). Caveats: on a café terrace (borderline food and drink, but the statue is the point); the café was called Café Looiers when it was placed. Rank **Nice**. New place.

**AW-08 Volksvrouw, Marnixplein: a communist sculptor's wife in bronze.** Pin 52.377843, 4.879064 (OSM, Marnixplein). Half-length woman with folded arms, for the women of the crisis years who kept their heads above water; Henk Henriët (1903 to 1945), a communist artist who knew poverty himself, used his wife Tonia as model. The plaster stood in the Stedelijk after his memorial exhibition of 1946 and was cast in bronze only in 1967. Lead: KW 490. Second: https://nl.wikipedia.org/wiki/Lijst_van_beelden_in_Amsterdam-Centrum (Marnixplein row). Status: KW 2026. Caveat: KW's pin (52.374473, 4.876642) is on the Tweede Marnixplantsoen while its text says Marnixplein; OSM has it on the Marnixplein: check. Rank **Okay**. New place (or group with AW-09).

**AW-09 De Baadster: Krop's bather who got lost and came back.** Pin 52.378178, 4.878224 (KW), Marnixbad, Marnixplein 1. Hildo Krop's limestone nude whose long hair turns into a wave (1954 to 1956) decorated the 1955 public baths. When the pool was demolished in 2004 the city promised to put her back on the new building; the drawings showed her, nobody prepared it, the then director was said to be against it, and the stone went missing "door een miscommunicatie". Krop's grandson fought for years with Heemschut's monumental-art group; at seven in the morning of 13 February 2019 a crane put her back. Beside the pool, René Nyssen's little bronze "Diploma A" of two children treading water, with "Alle eendjes zwemmen in het water" and a slow film of water running over them (KW 493). Local voice: the grandson in De Volkskrant (18 February 2016), "Maar van die terugplaatsing kwam tot dusver niets terecht". Lead: Hildo Krop Museum, Nieuwsbrief 20, March 2019 (https://hildokropmuseum.nl/wp-content/uploads/pdfs/20-nieuwsbrief-mrt-2019.pdf). Second: KW 589; Wandkunst (Marnixbad entry, written before the return). Status: replaced February 2019. Rank **Nice**. New place.

**AW-10 Tweede Marnixplantsoen: Naatje who came home and a poem down a stair.** Pin 52.374417, 4.876083 (KW 590, De trap). A small statue strip on the Singelgracht side: Hanna Mobach's "Nieuwe Naatje" (model Marja Meijer; base "Op 15 mei 1975 ter ere van Amsterdam 700 weer thuisgebracht"), which stood on the Rokin until the metro works of 2003, then on the Bullebaksluis (2005), and here "temporarily" since 2008; Steffen Maas's stone stair "De trap" with a poem by K. Schippers about the plantsoen running down its treads ("Heb je de treden net vluchtig bekeken ..."). The anonymous sculptor's running man with a violin case (KW 548) stands at the corner: he went missing and came back painted blue (group with DW-02). Lead: KW 509, 590, 548. Second: OSM (Naatje, Man met vioolkist); https://nl.wikipedia.org/wiki/Lijst_van_beelden_in_Amsterdam-Centrum . Status: KW 2026. Caveat: Pjotr Müller's "Steen in drieën gespleten" in the same plantsoen is to be removed (damaged, KW 489). Rank **Okay**. New place (the running man to DW-02).

**AW-11 Energie en tijd: Verhulst on the substation.** Pin 52.370340, 4.875734 (Wandkunst), Marnixstraat 212 at the Lauriergracht. A concrete and steel wall sculpture of 1962 by Hans Verhulst on the city's biggest electricity substation of its day (11.5 million guilders, opened June 1962), on the site where the English gasworks "de Engelsman" stood: energy on the same spot for over a century. The register rates it "Top"; best seen from the Lauriergracht and the Nassaukade. Lead: Wandkunst register. Second: https://nl.wikipedia.org/wiki/Energie_en_tijd ; OSM. Status: Wikipedia photo 2022. Rank **Nice**. New place.

**AW-12 Spelen in de Stad: a pupil's line on the school wall.** Pin 52.376883, 4.881215 (KW), Tuinstraat 172G, Theo Thijssenschool. Piet Parra's giant lettering of one pupil's one-line poem, chosen from the class's entries on "playing in the city": "Ik speel in de stad, met alles wat er bestaat" (Lisa van de Schouw). Commissioned by Ymere. Local voice: the murals initiative cites it as the newest good example (WJGR 2012, 00000044). Lead: KW 567. Second: WJGR 2012, 00000044. Status: KW 2026. Rank **Okay**. Group with DW-03 (Kees de jongen, same street and school), or new place.

#### Haarlemmerbuurt with the Western Islands

**AW-13 Mono no aware II: graffiti's grandmother under a bridge that will go.** Pin 52.381855, 4.890108 (KW), underpass of the car bridge at the Korte Prinsengracht. Mick La Rock, one of the first women graffiti writers in Europe, covered the bridge walls (2023) with black geometric lines that abstract the outlines of her old graffiti pieces and the sunlight on the canal; the Japanese title means the awareness that everything passes, and the bridge will probably be demolished. Commissioned by the city with Mokumse Muurtjes; residents had a say in the choice of artist. The same tunnel is "Filmset aan het IJ" (KW 579), a light-art frame for changing temporary installations. Local voice: La Rock, "Als iemand mij 25 jaar geleden had gezegd dat ik in 2023 de opdracht zou krijgen van de gemeente om een gigantische brugmuur te bekleden, dan had ik keihard gelachen van ongeloof." Lead: KW 2771. Second: SAC "Mono No Aware II" (active). Status: active 2026. Rank **Nice**. New place.

**AW-14 De Aardige Amsterdammer, Droogbak: a hand for the volunteers.** Pin 52.380316, 4.894451 (OSM), Droogbak 1A. An outstretched hand for the volunteers who help homeless and lonely people, by Klaas Hartzema, who works with the homeless, with the Regenboog Groep; each year the volunteer of the year is announced here. The first one (2012, unveiled with mayor Van der Laan) was made of a kind of foam and was stolen on King's Day 2015; he and Laszlo Gèleng made a new one that October; it was badly damaged again in 2024. Local voice: Hartzema, "Het beeld was niet hufterproof, het was van een soort schuim gemaakt." Lead: Het Parool, 18 October 2015 (https://www.parool.nl/kunst-media/nieuw-beeld-voor-aardige-amsterdammer-na-diefstal~b127fc7a/). Second: KW 554; Wikimedia Commons "De Aardige Amsterdammer 2.jpg". Status: damaged May 2024 (artist's LinkedIn post title); repaired state unknown. Rank **Nice**. New place.

**AW-15 Vinkenstraat: a wall that makes you see suns.** Pin 52.382613, 4.886316 (KW 566), Vinkenstraat 83. Roland Schimmel's "1000 zonnen" (2009, for De Key): stare at the black circles and coloured after-images appear, the halo effect he works with. A few steps on, Cyril Lixenberg's folded-steel "Getrapt vierkant" and the little square he designed (1981; he worked from folded and cut paper). At Vinkenstraat 164, the gable stone 't Nachtglas, a ship's four-hour sandglass for the night watch, found in 1987 when the house was demolished and named in no deed (VVAG). Lead: KW 566, 526. Second: OSM (Getrapt vierkant, 1981); VVAG vinkenstraat-164-amsterdam-nachtglas. Status: KW 2026. Rank **Okay**. New place.

**AW-16 Nelson Mandela's vegetable garden, Prinseneiland.** Pin 52.385643, 4.887646 (address pin Prinseneiland 1, corner of the Galgenstraat; approximate). A mural on the corner house, "Nelson Mandela's moestuin te Pollsmoor": the garden he fought to grow on the prison roof in oil drums between 1982 and 1988. Lead: https://ibecomingdutch.wordpress.com/2022/07/18/mandelas-vegetable-garden-mural/ . Second: Wikimedia Commons "2021 Nelson Mandelas moestuintje op Pollsmoor.jpg" (1 September 2021); bertiebo blog 25 July 2016. Status: 2021 photo, 2022 blog. Caveats: maker and date not found; status after 2022 unknown. Rank **Okay**. New place (DW listed it as a lead).

**AW-17 Wubboboom, Haarlemmerplein: an elm for an astronaut.** Pin 52.384217, 4.884151 (address pin Haarlemmerplein 1; approximate, the tree stands "in een hoek" of the square). A living memorial for Wubbo Ockels (died 18 May 2014), announced at his memorial service in the Westerkerk and unveiled in November 2014 before some 200 people with his widow: an elm of a variety said to live 500 years, chosen for its odd leaf colour, with benches carrying his lines "Optimisme is een verantwoordelijkheid" and "We zijn allemaal astronaut van Ruimteschip Aarde". Lead: https://nl.wikipedia.org/wiki/Wubboboom . Second: AT5, https://www.at5.nl/artikelen/136914/wubbo-boom-op-haarlemmerplein-onthuld ; NOS 8 November 2014. Status: Wikipedia photo 2015. Rank **Okay**. Group with BW-30 (Haarlemmerplein), or new place.

**AW-18 Haventaferelen: a harbour in stone in the Goedkoop hall.** Pin 52.387695, 4.892646 (Wandkunst), Westerdoksdijk 40. Gerrit van 't Net's natural-stone mosaic of harbour scenes (1960) in the hall of the shipping firm Gebr. Goedkoop's building; the register rates it "Top" and calls it possibly one of the largest in the city. Lead: Wandkunst register. Second: none found. Status: register entry (date not given). Caveats: indoor, in a private hall; visibility from outside unknown. Rank **Okay**. Group with DW-52 (Het Groene Hoofd, the platform in front of the same building).

#### Grachtengordel-West

**AW-19 Hildo Krop's comic strip on the telephone exchange, Herengracht 295.** Pin 52.370695, 4.887227 (Wandkunst; address pin 52.370587, 4.887272). A relief by the city sculptor on the former PTD telephone exchange (1957), which the register says "looks like a comic strip". Lead: Wandkunst register. Second: to find. Status: register. Caveat: subject of the panels not in my sources; check on site. Rank **Okay**. New place.

**AW-20 The cat on Herengracht 395.** Pin 52.368232, 4.887093 (address pin Herengracht 395). A metal cat crawls along the front above the round window; amsterdamopdekaart's caption for the 1882 building is simply "Let op de kat!". One source says resident Fred Fraay put up a cat and a mouse on either side, years ago. Lead: https://nl.wikipedia.org/wiki/Lijst_van_beelden_in_Amsterdam-Centrum (row "Kat tegen gevel boven het ronde raam", maker unknown, 1980 to 2000). Second: https://amsterdamopdekaart.nl/1850-1940/Herengracht/395 . Status: unknown date. Caveats: the Fraay and mouse claim comes from an app's fun-facts page only; find the mouse on site or drop the claim. Rank **Okay**. New place (DW listed it as a lead).

### Sweep 2: gable stones by street

**AW-21 Bloemgracht: the townsman, the farmer and the sailor.** Pin 52.374285, 4.879668 (address pin Bloemgracht 89), Jordaan. The street with the Jordaan's best stones. At 87, 89 and 91, three identical step gables of the 1640s carry DE STEEMAN, DE LANDMAN and DE SEEMAN, owned by Hendrick de Keyser since 1927 and 1929 ("De Drie Hendricken", "de parels van de Jordaan"). They do not show the residents' trades: they show three ways of living in the Golden Age, the townsman, the farmer and the sailor; a resident linked them to a 1642 poem by Cornelis Biens. At 77 and 81 DE SAAYER and DE JONGE SAAYER, a sower on a ploughed field, marked two neighbouring sugar refineries working sugar from Suriname and Brazil. Also on the street: De Son and De Maen (1648), Jakobs droom (168) and De Doos (10), the last two already DW Look for lines. Local voice: VVAG quoting the resident-author, "tot lering en vermaak". Lead: VVAG bloemgracht-87-89-91-amsterdam-steeman-landman-seeman and bloemgracht-77-81-amsterdam-saayer. Second: GS.net (Bloemgracht rows); Maandblad Amstelodamum 95 pp. 3 to 15 (cited by VVAG). Status: VVAG 2026. Caveat: 87 to 91 are listed buildings: likely merge with their monument records. Rank **Amazing**. New place or monument merge.

**AW-22 Palmgracht: the cauliflower next to the cabbage.** Pin 52.381821, 4.882871 (address pin Palmgracht 63), Jordaan. GS.net counts 17 stones on this short canal-that-is-a-street. DE BLOMKOOL (63, named in 1679) was a pun: the neighbour on both sides was Willem Harmensz Cool, and number 61 had "de Kool". IN DE BATAVIER (64) copies a musketeer from De Gheyn's 1607 drill manual. DE RAKSASA VAN MALANG (68, 2009) is a new stone: the VVAG chairman Jos Otten, born in Malang, had Hans 't Mannetje carve a Javanese temple guardian from Singosari, on the spot where the old stone De Doos had sat. Also the Suyker Ried fronton, moved here in 2008. Lead: VVAG palmgracht-63-amsterdam-blomkool, palmgracht-64-amsterdam-batavier, palmgracht-68-amsterdam-raksasa. Second: GS.net. Status: VVAG 2026. Rank **Nice**. Group with BW-02 (Raepenhofje, on the same street) or BW-26, or new place.

**AW-23 Lindengracht 206 to 220: the builders' row.** Pin 52.380141, 4.883096 (address pin Lindengracht 212), Jordaan. A philanthropic housing block whose eight stones honour the building trades in turn: in den metselaer, timmerman, schilder, smid, stucadoor, loodgieter, grondwerker, steenhouwer. Lead: https://www.amsterdam-monumentenstad.nl/database/grachtenboek_objecten.php?id=6789 . Second: https://amsterdamopdekaart.nl/1850-1940/Lindengracht/206-220 (rijksmonument 518316). Status: listed. Caveat: date and builder not read. Rank **Okay**. Monument merge (518316).

**AW-24 Brouwersgracht: a bag of coins and a cowherd who stayed home.** Pin 52.380093, 4.888648 (address pin Brouwersgracht 97), Grachtengordel-West (the row runs into the Haarlemmerbuurt at 94). EEN SAK SESTHALVE (97): a tied money bag with "VRIENDEN SIET / EEN SAK SESTHALVE / GEEF IK NIET", dated 18 September 1772, brought from the back wall of Reestraat 19 by Stadsherstel; what it meant is unknown. 't SMACK ZEYL (101), on the corner café, bought by Stadsherstel at an auction in 1955. DE KOE W8CHTER BLIJFT THUIS (94), a modern stone: the arms of the owner's Zeeland birth village Koewacht with the Amsterdam arms hidden in the middle tree, for the Amsterdam-born wife; "W8" reads "wacht". Lead: VVAG brouwersgracht-97-amsterdam-sak-sesthalve, brouwersgracht-94-amsterdam-koewachter. Second: GS.net. Status: VVAG 2026. Rank **Nice**. New place.

**AW-25 Haarlemmerdijk: the widow called Sluys and the shepherd behind the cash machine.** Pin 52.383177, 4.886093 (address pin Haarlemmerdijk 109), Haarlemmerbuurt. SLUYS (109) shows a little town by the water that everyone took for Sluis in Zeeland; house research found it was the name of Vrouwtje Sluijs, widow of Eymert van Veen, who bought the house on 16 March 1730. The early-18th-century shepherd with his flock went from number 101 into the post office hall around 1910, vanished behind a cash machine in 1989, and was saved in 1995 when the VVAG chairman told his story loudly in the builders' cabin; it now sits over the gateway of 98 to 100 (already a DW Look for line). Also IN LANGEN DYCK and LANACDICK at 79 and 81, two spellings of the same place. Lead: VVAG haarlemmerdijk-109-amsterdam-sluys, haarlemmerdijk-98-100-amsterdam-herder. Second: WJGR 2018 (shepherd, per DW). Status: VVAG 2026. Rank **Nice**. New place.

**AW-26 Nine Streets: stones saved from demolitions.** Pin 52.370409, 4.885108 (address pin Wolvenstraat 32), Grachtengordel-West. Wolvenstraat 32 carries DIE OUWE WILDEWOLF and DE VERLOOREN ARBEYD, saved when their houses were pulled down in 1950; Berenstraat 7 has a stone for the street itself; Huidenstraat 2 the Oranjeappel orphanage gate. Lead: VVAG Wolvenstraat 32, Berenstraat 7 and Huidenstraat 2 pages. Second: GS.net. Status: VVAG 2026. Caveat: weaker stories; may serve better as a Look for line in a Nine Streets text. Rank **Okay**. New place or Look for.

## Look for lines

- **Westermarkt, Anne Frank statue** (Mari Andriessen, 1977, KW 524; 4en5mei 1500): Andriessen hid Jews in his house and his studio was a resistance arms store (KW). For AW-02 or DW-20, not a place of its own (beside two A-list sights).
- **Singel 250, PTT monument**: two reliefs by Dannenburg (13 July 1947) with the names of staff killed and missing, "ONS LEVEN ZIJ HUN STERVEN WAARDIG"; moved in 1999 from the Nieuwezijds Voorburgwal; indoor (4en5mei 1507).
- **Elandsgracht 117, police headquarters**: stone by Onkenhout with two dying figures holding up a sword, for 25 officers, "DOOR STRIJD EN RUW GEWELD BEZWEKEN ZY"; among them Abraham Luteyn, arrested by his own subordinates who served the occupier, shot 5 September 1944 (4en5mei 1614). Indoor.
- **Keizersgracht 177, Coymans houses**: marble plaque for former pupils of the school once housed here, among them Krijn Breur and Karel Doorman (4en5mei 2445). Indoor; for DW-39.
- **Grachtengordel-West Stolpersteine** (OSM): Jacobson-Heijmans, Jacobwitz family, Lichtl-Zohren and Lichtl, Engelander-Fortuyn, Salomon and Rachel Vleesdraager, all in the Herengracht and Keizersgracht strip by the Raadhuisstraat (52.3711 to 52.3727, 4.8867 to 4.8874). Addresses and stories open; for DW-21.
- **Korte Prinsengracht 14**: Pachhuys van de Gouwe Wagen, 1656, for a herring buyer (VVAG); for AW-13.
- **Noordermarkt 39 to 40**: the fox-and-crab stone restored by the VVAG in 2009; for AW-05 or DW-05.
- **Keizersgracht 149**: "De Koning van Zweden", Gustav Adolf, 1621 (VVAG).
- **Herengracht 105**: a paper-mill stone found in the Rijksakademie garden in 1991 (VVAG).
- **Langestraat**: eight stones (GS.net); for BW-37.
- **Tichelkerk, Lijnbaansgracht 47**: windows by Jaap Min and Lando van den Berg (Wandkunst); the church is now Russian Orthodox and the Min windows are screened.
- **De Makroon, Nieuwe Passeerdersstraat 2**: Jaap Min windows, eight re-placed (Wandkunst); across from AW-04.
- **Marnixstraat and Lijnbaansgracht, bastion plaques**: "Bolwerk Karthuizen, Molen de Kat", "Bolwerk Reijkeroord, Molen de Bloem", "Bolwerk Slotermeer, Molen de Hooiberg", "Bolwerk Haarlem" (OSM, bolwerken.amsterdam.nl); for DW-24 and BW-23.
- **Eerste Marnixplantsoen**: Sigurdur Gudmundsson's untitled two pointed blocks with a quarter bronze cartwheel and glass (KW 536); for DW-24.

## Food and drink, borderline

None (theme A). AW-07 sits on a café bench but is pitched on the statue.

## A-list candidates

- None new. The Anne Frank statue on the Westermarkt stays a Look for line (beside two A-list sights). The Homomonument (AW-02) is second tier per A-LIST.md.

## Checked and dropped

| what | why |
|---|---|
| De boom valt op mij, Ilse Starkenburg memorial (Timon Hagen, 2024) | Zoutkeetsplein is in borough West (Spaarndammerbuurt), not in zone; lead for West |
| Apentafel (Merijn Bolink, 2005) | on the Zoutkeetsplein, borough West (OSM pin in Haarlemmerbuurt looks misplaced) |
| Nail House (Leonard van Munster) | temporary installation (2015, 2019) |
| Steen in drieën gespleten (Pjotr Müller), Tweede Marnixplantsoen | damaged, to be removed (KW 489) |
| Stokanker, De Ruijterkade (KW 519) and cast-iron anchor monument, Droogbak (OSM) | no story beyond "an anchor on cobbles" |
| Fotokijkers (Robin van 't Haar), Westerdoksplein (KW 561) | no text, no second source |
| Guido Geelen, untitled, Westerdoksdijk (KW 593) | only a link to a project agency; no story found |
| Jasmijn Visser mural, Haarlemmer Houttuinen (KW 574) | no text, no second source |
| Jacob Ples mosaic, Haarlemmer Houttuinen (KW 555) | already in DW-13 (named Henk Ples there: check) |
| Jonker's nacht (Arjen Veldt), Hendrik Jonkerplein (KW 475) | enamel night photos on a cable box; slight |
| Filmset aan het IJ (KW 579) | a frame for temporary shows; folded into AW-13 |
| Chess Knight, OSM 52.378995, 4.892929 | no maker, no source |
| Anker II, OSM 52.382442, 4.887548 | no maker, no source |
| "Amsterdamse Scheepvaartbuurt" artwork, OSM | no source |
| "Jacob Frederik Muller" artwork, OSM 52.369242, 4.879983 | no source; unclear what it is |
| Unnamed OSM artwork, statue and mural points (5) | no name, no source |
| Kandelaars and ceilings, Herengracht 386 area (OSM kroonluchters, Jacob de Wit, Johannes Voorhout plafondschildering) | indoor museum or private interiors, not public art |
| SAC zone markers, 24 "Untitled" paste-ups and stickers, Derde Marnixdwarsstraat, Goudsbloemstraat, Willemsstraat, Egelantiersstraat, Elandsgracht | small and changing; mentioned in AW-06 only as a cluster |
| SAC "Bloodymer putin", "Ajax", "Lady with the red hair", "GO Gallery" | small pieces or a gallery front; slight |
| SAC removed markers (12), among them "Maria & Jesus", Binnen Brouwersstraat, and "Le Gaulois", Lijnbaansgracht | removed |
| Multatuli statue, Torensluis (KW 454) | Torensluis belongs with DW-44 (his birthplace) and the Core zone's bridge text; a Look for there |
| Johnny Jordaanplein busts (KW 464, 465, 466, 541, 551) | DW-07 |
| Woutertje Pieterse and Femke (KW 499) | in DW-05 |
| Theo Thijssen statue, Lindengracht (KW 481) | a Look for for DW-03 |
| Omgevallen boom, Walk on water (KW 482, 539) | DW-10 |
| Door Wind Bewogen Beweging (KW 578) | DW-15 |
| Jacob van Lennep (KW 583) | DW-14 |
| Waterspook Bullebak (KW 2785) | DW Look for |
| Bevrijdingslinde stone (KW 599) | DW-04 |
| Noorderkerk February-strike plaque, Hoek relief (KW 501, 503) | DW-05 and AW-05 |
| Willy Alberti plaque (KW 513) | DW Look for |
| Bloemgracht 82 stone (4en5mei 1619) | DW-08 |
| Blauwburgwal plaque (4en5mei 4595) | DW-17 |
| Anne Frank House record (4en5mei 834) | A-list |
| Anton de Kom stone (4en5mei 4544) | in the Nieuwe Kerk: Core zone and A-list |
| Plaque for the 10th Liberation Day, Schiemanstraat 2 (OSM) | DW Look for |
| De Gekroonde Haeringh, Lelyveld, De Jonge Visser, De Min, Yder zijn zin, Die Blickmant, D'Jonge Goudsblom gable stones | DW Look for lines |
| Bickersgracht 14, 22 and 44 stones; Zandhoek 14 Gouden Reael | DW-34 and DW Look for |
| Westerstraat 202 soap boiler's stone | BW-25 |
| Langestraat 80 Tsar stone | BW-37 |
| Keizersgracht 44 Walvis-traan stone | DW-40 (second source under Leads) |
| Tuinstraat 99 pin-maker stone of 1902, Elandsstraat 101 D'Vergulde Dolfyn, Tweede Rozendwarsstraat 21, Binnen Wieringerstraat 28, Singel 421, Prinsengracht 312 stones | single stones without a story strong enough; Elandsstraat 101 is a DW Look for |
| Noah's Ark stone, Eerste Leliedwarsstraat 20 | moved from the Bloemgracht; single stone, a line for AW-21 at most |
| Rosa King artwork (KW 3696) | "in voorbereiding", no place or date |
| Buitenstebinnen series (Dewy Elsinga, KW 2772 to 2777) | no coordinates; location unclear |
| Stolpersteine city record (KW 1850) | no coordinates; see Look for lines |
| Drijvende tuinen (Grootveld, KW 1853) | DW dropped (status unknown since 2017) |
| Wandkunst: Jaap Min windows at the Bleijs chapel, Lauriergracht 39 | BW-11 (second source under Leads) |
| "Freedom", Wijde Heisteeg (SAC 6240) | small piece; status only from SAC |

## Leads for other scouts

- **DW-04 Bevrijdingslinde**: second source 4en5mei 1610 (planted 4 May 1946, Marnixplein) and KW 599 (stone at Marnixstraat 125A).
- **DW-05 Noordermarkt**: 4en5mei 101 (Noorderkerk plaque by E.J. Hoek, unveiled 25 February 1976); 4en5mei 1604 (Hoek relief for the Jordaan residents, 3 May 1950); KW 501 and 503. These answer DW's question whether the plaque is back: the registers list it at Noordermarkt 48, but they do not say when they were last checked.
- **DW-08 Bloemgracht 82**: second source 4en5mei 1619 (stone of 1945; photos by NIOD and Dick Simonis). The 4en5mei text notes that the names on the stone contain errors ("Stevesen" for Stevese; "Dick" for Durk Wolters), and that all three were shot on the spot on 25 April 1945.
- **DW-13 Kunstroute Nieuwe Houttuinen**: KW 555 calls the mosaic maker Jacob Ples, the Wijkkrant Henk Ples: settle the name.
- **DW-14 Jacob van Lennep**: KW 583 (Lia van Vugt), OSM (2016).
- **DW-15 Door wind bewogen beweging**: KW 578 says it was Meursing's last moving object for public space and that his ancestors built big sailing ships a stone's throw away.
- **DW-17 Blauwburgwal**: 4en5mei 4595 (plaque at Blauwburgwal 19, unveiled 11 May 2020).
- **DW-39 Keizersgracht 177**: 4en5mei 2445, marble plaque inside for former pupils killed in the war, among them Krijn Breur and Karel Doorman.
- **DW-40 Groenlandse Pakhuizen**: VVAG page for the Walvis-traan stone at Keizersgracht 44.
- **DW-02 anonymous sculptor**: KW 548, the running man with a violin case on the Tweede Marnixplantsoen returned blue after going missing.
- **DW Look for, Waterspook Bullebak**: KW 2785 adds that the face is meant to be friendly and frightening at once, and that the maker chose the spot so it can watch people on the bridge.
- **DW Look for, Haarlemmerdijk shepherd**: VVAG adds that archive research now places the stone first at a house on the site of Haarlemmerdijk 72 ("De Trouwe Herder") and that the carver copied etchings by Nicolaes Berchem.
- **BW-11 Bleijskapel**: Wandkunst lists Jaap Min windows there.
- **BW-30 Haarlemmerplein**: the Wubboboom (AW-17).
- **Out of zone, West**: De boom valt op mij (Zoutkeetsplein, 2024; Parool 19 August 2024; nl.wikipedia) and Merijn Bolink's Apentafel (Zoutkeetsplein, 2005), both in the Spaarndammerbuurt.
- **Core (DC)**: Anton de Kom's war-memorial stone in the Nieuwe Kerk (4en5mei 4544), for an A-list-adjacent line.
