# Zuid round 3, slice r3-gaps: notes

9 new places in `places/r3-gaps.yaml`, 13 Look for lines to apply to existing places (none applied: this slice wrote no other file), 111 candidates looked at.
All pins point-checked with `scripts/areas.py`: borough Zuid. The file validates with 0 errors and has no dashes.

## Item ledger

### Part 1: blind recall misses

| Item | Outcome |
|---|---|
| Mama Baranka (Nelson Carrilho, 1984) | New place: **Mama Baranka, Mother Rock for Kerwin Duinmeijer** (Nice). Point check: Zuid, Museumkwartier (52.359441, 4.873995). Not in the live Vondelpark text |
| Picasso, "Figure découpée (L'oiseau)" (1965) | New place: **Picasso's bird that everybody calls the fish (Vondelpark)** (Nice). Point check: Zuid, Museumkwartier (52.357469, 4.868016). Not in the live Vondelpark text |
| Lotty's bankje, Apollolaan (2017) | New place: **Lotty's bench, Apollolaan** (Nice, `check: Location`). It exists: a plate on a bench, unveiled 6 September 2017; photo on TracesOfWar uploaded 2022. Only TracesOfWar gives the spot (near no. 183) |
| De onbekende verliezer (Ram Katzir, 2006) | New place: **De onbekende verliezer, the marathon runner who gave up** (Nice). No existing place mentions the Marathonweg, so it is not a Look for line |
| Lomanstraat tree tunnel | Look for line (below) for **Carriage depot of the Amsterdamsche Rijtuig Maatschappij** (`willemspark-a.yaml`), which names the Lomanstraat only as an address. No source explains why the planes lean, so the line only says what you see |
| Krop's "Ode aan Berlage" and "Muze", bridge 415 | Look for line (below) for **Parnassusweg gate blocks** (`apollo-a.yaml`), which stands at the bridge and does not mention the sculptures |
| De doos (Jeroen Henneman, 2017) | Look for line (below). Not in any draft. Too thin for a place: a steel outline on a roof, no story beyond the move |
| Brug 809 (Martijn Sandberg, 2024) | Already told: a Look for line in **White Noise, a night sky on the telecom tower** (`r2-south.yaml`, "the footbridge over the Boelegracht ... whose golden bars spell its title"). Nothing to add. See Conflicts for where that line sits |
| Hotel Okura's weather light | Skipped as instructed |

### Part 2: sources not exhausted

| Source | What was done | Yield |
|---|---|---|
| Arcam architectuurgids (arcam.nl) | All 842 guide entries downloaded and sorted by the guide's own district field: 110 are tagged Zuid (about 75 of them after 1965). Every title checked against the drafts; the texts read for the ones not on the map | 1 new place: **Schinkelkerk, the church that changed hands over a talking snake** (Okay). The rest: on the map, being drafted, dropped by Scout C, or architecture with a name and a date (table below). "Byzantium" and "Stayokay Vondelpark" are tagged Zuid by Arcam but lie in West |
| Ons Amsterdam | **Not gone through.** The site's robots.txt refuses automated readers of my kind by name, so no article was fetched. Two searches of a search engine's index gave titles only | 1 new place from a title, researched in other sources: **The Comenius stone: first stone of a monument that never came** (Nice). Other titles: see Leads |
| Geheugen van Plan Zuid, De Pijp Krant | Scout B read both in full; not repeated | none |
| Amsterdam Sloopt (amsterdamsloopt.nl) | All 134 posts read through the site's API and filtered on Zuid street and neighbourhood names | 4 Zuid addresses, all demolished or waiting for demolition: see Leads |
| Stadsarchief stories; Wijkkrant Rivierenbuurt and Buitenveldert | Not searched: no index found that could be gone through in this round | none |
| Joods Monument, Joods Amsterdam, the wiki list of war memorials | The memorial list (all Zuid rows) and targeted look-ups for places that still carry a marker | 1 new place: **Jan van Eijckstraat 16: where the Wiener Library began** (Nice, `check: Location`), which also tells the Expositur at no. 15. Scout A could not place the Wiener plaque; nl.wikipedia now gives the address and date |
| Indoor art that can be visited | Station RAI, metro station Europaplein, VU, WTC looked at | 1 new place outdoors at station RAI: **De tijd in drie dimensies, the station clock nobody could read** (Okay, `check: Still there?`); 1 Look for line (the coin in the Europaplein platform). VU and WTC: nothing confirmed as open to visitors beyond what the VU drafts hold; see Leads |

### Part 3: empty map cells

| Cell (centre) | Where | Verdict |
|---|---|---|
| 52.3248, 4.8637 | Buitenveldert-West, Van Nijenrodeweg | **Nothing passes.** Within 450 m: the Egelenburg flats (1960s, a Wikipedia stub about lifts), community centre Goudestein, numbered park bridges 801, 802, 811, 812, 848 to 850, the CSB with the Kletsmuurtjes (on the map), Q Residences with "Hers" (Scout C's line, 400 m, belongs to the Gelderlandplein draft). A housing estate without a story |
| 52.3293, 4.8784 | Buitenveldert, Gelderlandplein | **Covered.** Gelderlandplein is being drafted; "The Long Hum", the Buizenkolom, the Meeting Island and the war memorial with the Wiesel line are in **Gijsbrecht van Aemstelpark**. Looked at and dropped: Crystal Court (stacked villas in a glass box, 2008, builder went bankrupt: no more than that), restaurant Halvemaan (closed), the Otter-Knoll home, the Cheider school (guarded). One Look for line: the Levensboom canopy |
| 52.3248, 4.8784 | Buitenveldert, Kastelenstraat south | **Nothing passes.** De Goede Herder (closed for worship in 2026, Scout C's watch note), the Kastelenstraat bronzes (Scout A: no story), Reimersbeek (a street of 1959 to 1973 by Dudok's office, Zanstra and others: names only), Hartelstein 8 (a villa by Jan Rietveld with two sculptures on the street side: private, one sentence on Wikipedia), 't Kleine Loopveld (belongs to the Kalfjeslaan draft). The 2019 murder of the lawyer Derk Wiersum in the Imstenrade has no marker and is not a sight |
| 52.3338, 4.8490 | Jachthavenweg, Nieuwe Meer side | **Nothing passes.** Scout huts (Erskine, Elfregi, Dunnewold), water sports club De Schinkel, the Jollenpad marina island (a street-name article), the museum tram line (on the map). ING House is being drafted |
| 52.3383, 4.8490 | Schinkel mouth, IJsbaanpad | **New place:** **Nieuwe Meersluis: bridges that are lock gates, and a relief carved on the spot** (Okay), 260 m from the centre point. Also here: Frans Otten Stadion (a 2004 tennis hall), the ice club ground of 1937 to 1989 (gone, the name IJsbaanpad is its trace: one Look for line could be added to the new place later), the Schinkelbad (gone), the A10 and rail bridges, De wildplasser (on the map) |
| 52.3338, 4.8931 | north edge of the Amstelpark | **Covered.** The pin falls on "Big Talk" (told in **Amstelpark**); "Your Life is Calling", the maze and bridge 482, the train: all drafted. The "Ik-ook-van-jou-Vindhek" (a fence for found things, 2015) is in OpenStreetMap only: no source, not proposed |
| 52.3338, 4.9005 | Rijnbuurt south, Zorgvlied north side | **Covered.** Rozenoord (drafted), Zorgvlied (on the map; the Paradiso field drafted). One Look for line: 't Lalibellum |
| 52.3383, 4.8931 | south of the RAI, station side | **New place:** the station clock (above), 190 m from the centre point. Also here: "Kissing monkeys" (a Look for line in the new place), "Mise-en-scène" on the station walls (2015; partly behind works, and behind the ticket gates), the Weteringkerk (1969, a glass-block wall: thin), nhow and the Liberal synagogue (drafted), an unnamed allotment and the flower-picking garden "Olivia's Ode" (OpenStreetMap only, no source) |
| 52.3428, 4.8417 | Schinkel business estate | **Nothing passes.** The NLR is on the map. Arcam lists the A-Factorij (a bicycle factory turned offices, Neutelings Riedijk, 2002) and the TBWA building: no story. One Look for line for the NLR place: the Uiverbrug |

## Look for lines to apply

Ready to paste, English then Dutch. None is applied. "Cross-reference" lines only point to a new place of this slice.

1. **Carriage depot of the Amsterdamsche Rijtuig Maatschappij** (`willemspark-a.yaml`)
   - `- in the Lomanstraat itself: the plane trees on both sides lean in towards each other and close over the roadway like a tunnel, at its best in leaf`
   - `- in de Lomanstraat zelf: de platanen aan weerszijden hellen naar elkaar toe en sluiten zich boven de rijweg als een tunnel, op zijn mooist als ze in blad staan`
   - Source: https://commons.wikimedia.org/wiki/File:Lomanstraat_-_panoramio.jpg (photo of 2008, looked at); the city tree register lists Platanus hispanica along the street (https://maps.amsterdam.nl/bomen/). No source for the cause: do not add one.

2. **Parnassusweg gate blocks** (`apollo-a.yaml`)
   - `- on the bridge itself (no. 415, by Piet Kramer, built 1940–1942): two stone sculptures by Hildo Krop, "Ode aan Berlage" and "Muze", and on the Stadionkade side two little bridge houses in the same style that now sell snacks`
   - `- op de brug zelf (nr. 415, van Piet Kramer, gebouwd 1940–1942): twee stenen beelden van Hildo Krop, 'Ode aan Berlage' en 'Muze', en aan de kant van de Stadionkade twee brughuisjes in dezelfde stijl waar nu een snackbar en een broodjeszaak in zitten`
   - Source: https://nl.wikipedia.org/wiki/Dick_Schm%C3%BCllbrug (the bridge was named after the volleyball and basketball promoter Dick Schmüll in 2022; add that if there is room).

3. **White Noise, a night sky on the telecom tower** (`r2-south.yaml`; it already holds the bridge 809 line), or the VU main building draft, which is nearer
   - `- "De doos" (Jeroen Henneman, 2017), a box drawn in steel lines, open lid and all: made for the lawn at the tram loop and moved in 2018–2019 to the roof of the flats at the corner of the Parnassusweg and De Boelelaan`
   - `- 'De doos' (Jeroen Henneman, 2017), een doos van stalen lijnen, compleet met open deksel: gemaakt voor het grasveld bij de keerlus van de tram en in 2018–2019 verhuisd naar het dak van het flatgebouw op de hoek van de Parnassusweg en De Boelelaan`
   - Source: https://nl.wikipedia.org/wiki/De_doos (coordinates 52.335611, 4.869328; latest photo May 2019). Henneman calls it "a standing drawing".

4. **RAI: the Europahal and Het Signaal** (`buitenveldert.yaml`)
   - `- in metro station Europaplein, under the forecourt: Gerald van der Kaap's photo collage "I want a permanent wave" along both platform walls, and a Greek two-euro coin glued into the platform floor, his nod to the debt crisis (you need to check in to see it)`
   - `- in metrostation Europaplein, onder het voorplein: de fotocollage 'I want a permanent wave' van Gerald van der Kaap langs beide perronwanden, en een Griekse munt van twee euro die in het perron is vastgelijmd, zijn knipoog naar de schuldencrisis (alleen te zien als je incheckt)`
   - Source: https://nl.wikipedia.org/wiki/Europaplein_(metrostation) (with photos of the coin). Check first that the coin is still there: no evidence after the station opened in 2018.

5. **Zorgvlied cemetery** (`rijnbuurt.yaml`)
   - `- 't Lalibellum (2012, landscape architect Ada Wille): a half-sunken vault for some 2,200 graves under twelve terraces, named after the rock-cut churches of Lalibela in Ethiopia and built because the cemetery was full; nobody goes in, the names are on the risers of the steps`
   - `- 't Lalibellum (2012, landschapsarchitect Ada Wille): een half verzonken grafkelder voor ruim 2200 graven onder twaalf terrassen, genoemd naar de rotskerken van Lalibela in Ethiopië en gebouwd omdat de begraafplaats vol lag; je kunt er niet in, de namen staan op de treden`
   - Source: https://nl.wikipedia.org/wiki/%27t_Lalibellum (opened 20 June 2012; coordinates 52.336769, 4.897639).

6. **Gijsbrecht van Aemstelpark** (`buitenveldert.yaml`)
   - `- the steel and glass canopy over the round stage on the Meeting Island: "Levensboom" (Angie Abbink, 2015), a roof shaped like a tree, asked for by neighbours who wanted the square used for more than cycling across`
   - `- de overkapping van staal en glas boven het ronde podium op het Ontmoetingseiland: 'Levensboom' (Angie Abbink, 2015), een dak in de vorm van een boom, gevraagd door buurtbewoners die wilden dat het plein meer werd dan een doorfietsroute`
   - Source: https://nl.wikipedia.org/wiki/Levensboom_(Angie_Abbink)

7. **National Aerospace Laboratory (NLR) by Maaskant and Van Tijen** (`schinkel.yaml`)
   - `- a short walk away, over the Riekerhaven: the Uiverbrug (2003), a lift bridge of aluminium, named by competition after the KLM airliner of 1934, itself mostly aluminium; the streets around are called after pilots, helicopters and Fokker`
   - `- een klein stukje verderop, over de Riekerhaven: de Uiverbrug (2003), een klapbrug van aluminium, na een prijsvraag genoemd naar het KLM-toestel uit 1934, dat zelf ook grotendeels van aluminium was; de straten eromheen heten naar piloten, helikopters en Fokker`
   - Source: https://nl.wikipedia.org/wiki/Uiverbrug (Aluminium Award 2003; year of building in the railing).

8. **Vondelpark** (live place from the West round; no draft in `research/zuid/places/`)
   - `- on the Zuid side of the park: Picasso's concrete bird of 1965, which the city calls the fish, and Mama Baranka (1984), the memorial for Kerwin Duinmeijer (each has its own place)`
   - `- aan de Zuid-kant van het park: de betonnen vogel van Picasso uit 1965, die de stad de vis noemt, en Mama Baranka (1984), het gedenkteken voor Kerwin Duinmeijer (elk met een eigen plek)`
   - Source: https://buitenkunstamsterdam.nl/kunstwerken/bekijk/1937 and https://buitenkunstamsterdam.nl/kunstwerken/bekijk/1933

9. **Amsterdams Lyceum** (`willemspark-b.yaml`), cross-reference
   - `- in the pavement in front of the school: the red Comenius stone of 1920, first stone of a monument that was never built (its own place)`
   - `- in de stoep voor de school: de rode Comeniussteen uit 1920, eerste steen van een monument dat er nooit is gekomen (een eigen plek)`
   - Source: https://nl.wikipedia.org/wiki/Gedenksteen_Comenius

10. **St Ignatius Gymnasium, on the site of the Zentralstelle** (`apollo-a.yaml`), cross-reference
    - `- further east in the same street, at Jan van Eijckstraat 16: the plaque of 2023 for Alfred Wiener's archive on the Nazis, which began there; the Jewish Council's liaison office to the Zentralstelle, the Expositur, sat at no. 15 (its own place)`
    - `- verder naar het oosten in dezelfde straat, bij Jan van Eijckstraat 16: de plaquette uit 2023 voor het archief over de nazi's dat Alfred Wiener daar begon; het verbindingskantoor van de Joodse Raad met de Zentralstelle, de Expositur, zat op nr. 15 (een eigen plek)`
    - Source: https://nl.wikipedia.org/wiki/Alfred_Wiener and https://www.joodsmonument.nl/nl/page/700/expositur

11. **Apollolaan, west end: Rafael's animals and a kennel by Rutgers** (`apollo-b.yaml`), cross-reference
    - `- near no. 183: the bench with the plate for Lotty Huffener-Veffer, who spent her first night back from the camps on a bench here in August 1945 (its own place)`
    - `- bij nr. 183: het bankje met het plaatje voor Lotty Huffener-Veffer, die in augustus 1945 haar eerste nacht terug uit de kampen hier op een bankje doorbracht (een eigen plek)`
    - Source: https://www.lotty.nl/het-bankje/

12. **Schinkelhaven horse tram depot (OCCII and De Binnenpret)** (`schinkel.yaml`), cross-reference
    - `- next door at no. 136: the former Schinkelkerk of 1890, now a gym, which changed hands in 1926 in the church quarrel over the talking snake (its own place)`
    - `- hiernaast op nr. 136: de voormalige Schinkelkerk uit 1890, nu sportschool, die in 1926 van eigenaar wisselde in de kerkstrijd om de sprekende slang (een eigen plek)`
    - Source: https://arcam.nl/architectuur-gids/voormalige-schinkelkerk/

13. **Olympic Stadium** or **Hygiëaplein schools** (`stadion.yaml`), cross-reference
    - `- on the Marathonweg, under nos. 37–39 and 65–67: Kees Smout's fresh marathon runners of the 1930s and the exhausted one Ram Katzir added in 2006 (its own place)`
    - `- aan de Marathonweg, onder nr. 37–39 en 65–67: de frisse marathonlopers van Kees Smout uit de jaren dertig en de uitgeputte die Ram Katzir er in 2006 bij maakte (een eigen plek)`
    - Source: https://www.ramkatzir.com/works/the-unknown-loser/

## Checked, nothing passes

Counts are things looked at in this slice, on top of the scouts' own tables. "Passed" means a new place; lines are counted apart.

| Area | Looked at | New places | Look for lines | Verdict |
|---|---|---|---|---|
| 1 Museumkwartier, Willemspark | 11 | 3 (Mama Baranka, Picasso, Comenius stone) | 3 (Lomanstraat, Vondelpark, Lyceum) | The three finds were all known gaps of one kind: sculpture inside the Vondelpark, left out by design in round 2, and a stone only a magazine had written up. Nothing else turned up. **Saturated**, with one reservation: Ons Amsterdam was not read |
| 2 Apollo, Stadion, Schinkel, Hoofddorpplein | 24 | 5 (Lotty's bench, De onbekende verliezer, Wiener, Schinkelkerk, Nieuwe Meersluis) | 6 | The largest yield, from five different kinds of source. Schinkelbuurt and the Schinkel bank rest on Wikipedia and Arcam only. **Not yet saturated**: a walk along the Schinkel and through the Stadionbuurt gateways would likely find a few more of the Marathonweg kind |
| 3 De Pijp | 12 | 0 | 0 | Everything was on the map, drafted, gone or without a trace. **Saturated** |
| 4 Rivierenbuurt | 16 | 0 | 2 (Lalibellum, Europaplein coin) | **Saturated** for what can be seen. Joods Monument was again used by place, not street by street |
| 5 Buitenveldert | 27 | 0 | 1 (Levensboom) | Five empty cells looked at, none with a story. **Saturated**: the empty cells are housing estates, sports grounds and a marina |
| 6 Zuidas, Prinses Irenebuurt | 21 | 1 (the station clock) | 1 (De doos) | Arcam adds some twenty towers and campus buildings, all names and dates. **Saturated**, apart from indoor collections whose access could not be confirmed |
| **Total** | **111** | **9** | **13** | |

What was looked at and did not pass, by area (things already in the scouts' dropped tables are not repeated unless looked at again):

| Area | What | Why not |
|---|---|---|
| 1 | Byzantium (OMA, 1991); Stayokay Vondelpark; Vondelparkpaviljoen; Vondelkerk | Borough West by the point check (Arcam tags them Zuid) |
| 1 | Nicolaas Maesschool (1999); Rijksmuseum studio building (2007); Van Gogh Museum entrance (2015) | Arcam entries: no story, or part of an A-list sight |
| 1 | The J.J.L. ten Kate memorial stone of 1923 (an Ons Amsterdam title) | Not in Zuid as far as the title shows; not read |
| 2 | Frans Otten Stadion; Sporthallen Zuid; the A10, metro and rail bridges over the Schinkel and the tram line | A 2004 tennis hall, a sports hall, viaducts: no story |
| 2 | IJsclubterrein Schinkel (1937–1989); Schinkelbad | Gone; the street name IJsbaanpad is the only trace. One sentence for the lock place at most |
| 2 | A-Factorij (2002); TBWA building (2010); Lightfactory, Sloterkade (1999); Olympisch Kwartier, Laan der Hesperiden (2005); Geert Grote College; office Forum | Arcam entries with an architect and a date |
| 2 | Overschiestraat tunnel: Aam Solleveld's wall painting (2020) and Frankey's jumping horse on the height barrier | The tunnel is the borough line and Wikipedia files the viaduct under Nieuw-West; Frankey's piece has no dated evidence |
| 2 | Kehilas Ja'akov (the East European shul, Gerrit van der Veenstraat) | No source found in this round; a working synagogue, not visitable |
| 2 | The Parkkerk that Geelkerken's followers built after 1926 | Not researched: a lead, see below |
| 3 | Quellijnstraat 64, the explosions of 16 June 1980 (an Ons Amsterdam title) | An event; no trace known, article not read |
| 3 | The Pijp's beach on the Amstel (Ons Amsterdam title) | Gone under the rowing centre and the Berlagebrug ramp |
| 3 | Viktor IV's clock with the dial read from the 4 (Ferdinand Bolstraat at the Lutmastraat, 1986) | Known from one Anefo photo; no evidence it survives |
| 3 | Bridge keeper's house, Nieuwe Amstelbrug (Van der Mey, 1912); Jacob van Campenschool; Ostadetheater; Afrikahuis | Already told in round 1 or 2 |
| 3 | Flats Govert Flinckstraat 55–69 (2011) and 266 (2003); Albert Cuypgarage | Arcam entries without a story; the garage is Scout C's item 306 |
| 4 | Weteringkerk, Veluwelaan (1969) | A glass-block wall and a bell frame; the congregation's story is in the Weteringbuurt |
| 4 | "Mise-en-scène" (Polly's Picture Show, 2015), station RAI | West side behind works since 2018, the rest behind the gates |
| 4 | IJssalon Oase, Geleenstraat (Anne Frank's diary) | No marker found; the shop's present state not established |
| 4 | Bloemenpluktuin "Olivia's Ode"; the allotment north of it | OpenStreetMap only; Scout C could not identify them either |
| 4 | Woonzorgcomplex De Miranda (Bruno Albert, 1998); houses Meerhuizenplein (2002); De Wereldboom (2019); SUD, Zuidoever, Crossover, Terrace Tower; Van der Valk hotel | Arcam and Wikipedia entries: architecture with a name and a date |
| 4 | The "Kolonialisme-Onafhankelijkheid" rally in the RAI, 20 March 1971 | An event in a hall; nothing to see |
| 4 | Condolence room Zorgvlied (Claus en Kaan, 1998) | Could be one more line in the Zorgvlied place; not proposed, the place is full |
| 5 | Egelenburg and the three other "castle" flats; Reimersbeek; Hartelstein 8 (Jan Rietveld); Henkenshage (2001) | Housing with one fact each |
| 5 | Crystal Court (Tangram, 2008); Binnenhof en Gelderhof (Van Egeraat, 2005); Stadsdeelwerf (Claus en Kaan, 2008) | Arcam entries; the Stadsdeelwerf is already named in two drafts |
| 5 | De Goede Herder; Kastelenstraat bronzes; Halvemaan; Cheider | In the scouts' dropped tables; nothing new found |
| 5 | The murder of Derk Wiersum (Imstenrade, 2019) | No marker; a private street; not a sight |
| 5 | Scout huts and water sports club on the Jachthavenweg; Jollenpad | No story |
| 5 | "Ik-ook-van-jou-Vindhek", Granieten Blok, Kompaal (Amstelpark, north side) | OpenStreetMap or Scout A's park furniture; no source for the first |
| 5 | Amstelveenseweg 852 (1911) and 1086–1088 (late 19th century) | Listed by Amsterdam Sloopt as waiting for demolition, without a word of text: see Leads |
| 6 | ACTA, Cancer Center (MVRDV), OZW, De Boel | Campus buildings: for the VU drafts if anywhere |
| 6 | ABN AMRO head office (Pei Cobb Freed), WTC, Toyo Ito, UNStudio tower, Ernst & Young (Foster), NoMa House, Miles Building, Ravel Residence, Stepstone, Kindercampus | Arcam entries; Scout C dropped the same towers |
| 6 | Victor Ash's eight-storey bull on "De Boel" (2015); the Pipsqueak wall painting (2022) | Only in the Wikipedia article on De Boelelaan; current state not established. A line for the VU draft once checked |
| 6 | VU Art Science Gallery; WTC lobby art | Access and hours not confirmed |

## Conflicts and uncertainties

- **Lotty's bench.** The AD (taking Het Parool's report) says a new bench was placed "on that spot"; the family's site says a plate was put on the bench where she slept. The text follows the plate. Only TracesOfWar gives a house number and coordinates. The Wikipedia list of war memorials has the bench without coordinates. A site visit should fix the pin and clear the check.
- **Kerwin Duinmeijer.** The body gives both the general reading (a racist murder) and the juvenile court's finding that racism was not proven as the main motive. The perpetrator is not named. Stadscuratorium calls him a neo-Nazi; the text says skinhead, as the Wikipedia article and the reports of 1983 do.
- **Picasso's condition.** Buitenkunst says the one condition was that the work be shown on this spot; Wikipedia says that it stay on public show (and marks its own cost figures as unsourced: left out). Height: 7 m (Wikipedia) or 8 m (Buitenkunst); the text says seven. Buitenkunst places it "by the Emmastraat entrance", which does not exist under that name; the text gives no entrance.
- **Kees Smout's runners.** 1931 on Katzir's site, 1932 on Wikipedia. The text says early 1930s.
- **Comenius stone.** Wikipedia says President Masaryk attended the unveiling; the 2018 speech, written from the Prague archive, says he sent telegrams and his deputy minister Drtina came. The text follows the speech. The speech announces a plaque; the photos of August 2025 show none beside the stone, so it is not in the Look for list. Štursa's design as a "monstrosity" and the 1935 and 1958 dates rest on Wikipedia, which cites Ons Amsterdam (November 2020) and Het Parool (5 August 2025); neither could be read.
- **Wiener.** No photo or transcription of the plaque was found, and the national address register has no point for no. 16, so the pin is interpolated between nos. 14 and 20. The Expositur's address rests on Joods Monument (a 1943 letter addressed to "J.v. Eickstraat 15") and a list of the Jewish Council's offices. Whether nos. 15 and 16 face each other was not checked: the text says only that the office "sat at number 15".
- **Station clock.** Latest evidence is its entry in OpenStreetMap of 31 August 2024; the photos are of 2018. artatsite.com dates it 1967 and confuses it with a pole by Carel Visser (Scout B's lead repeats that); De Volkskrant of 19 May 1981 settles artist and year. Opening day of the station differs between sources (1 June or 1 July 1981): left out.
- **Schinkelkerk.** Arcam alone says Geelkerken's sermon was preached in this church. The text says only that he was a minister of this congregation and that the building passed to the synod's side in 1926 (Het Vaderland, 27 July 1926, quoted on Reliwiki, which calls the transfer an inference). A church history of Amsterdam-Zuid would settle both.
- **Nieuwe Meersluis.** The relief has two names: "Water, aarde, lucht" (Wikipedia, the monograph) and "Land, water, licht" (the sign, Buitenkunst). Both are given. The lock facts rest on Wikipedia alone; Waternet's page was not opened.
- **Bridge 809.** The existing Look for line sits in the White Noise place, which is on the other side of the Zuidas from the bridge. Whoever applies line 3 may want to move both to the VU main building draft.
- **The browser.** One tab was opened for TracesOfWar and HMDB (both refuse curl) and closed again.

## Leads

- **Ons Amsterdam** needs a person, or the user's say-so, to read it: the site refuses automated readers. Titles seen that touch Zuid: "Hier gebeurde het: Quellijnstraat 64, 16 juni 1980"; "Het Amsterdamse Quartier Latin" (De Pijp); "Leeszaal met spitse klokkentoren in de Coöperatiehof"; "Huizen als paleizen"; "De vaste route van Frans Weisz"; the two Buitenveldert pieces Scout B read.
- **The Parkkerk** (Gerrit van der Veenstraat), built by Geelkerken's breakaway church after it lost the Schinkelkerk: not researched. If it stands and has a story, the two churches make a pair.
- **Amstelveenseweg 852 and 1086–1088**, old ribbon houses on the Buitenveldert stretch that Amsterdam Sloopt lists as waiting for demolition. If they still stand they are the last of the pre-1958 roadside and belong in the Kalfjeslaan or first-stone drafts with an `outlook`. Amsteldijk 275–276 (farm Starburg, 1880) went in 2020 and Amstelveenseweg 868 in 2019.
- **Stadionbuurt gateways.** The city's repair project of 2006 asked two artists to fill empty sculpture spots; Katzir was one. Who the other was, and where, was not found.
- **Station RAI.** Scout B's lead of a pole by Carel Visser (1967) with Ingendahl's clock is one object, not two: the clock, of 1981.
- **VU drafts.** The bull by Victor Ash and the Pipsqueak painting on De Boel, and "De hechtsteek" (Jan Jacobs Mulder, 1984–85) on the hospital bridge over De Boelelaan, once their state is checked.

## Missing photos

- Lotty's bench: none on Commons; TracesOfWar's photos are all rights reserved.
- Jan van Eijckstraat 16: no photo of the plaque, the cobble or the house on Commons.
- Schinkelkerk: only one usable exterior (2014); the Anefo set of 1962 shows the interior before the floors went in and was not used.
- Photos looked at as images: the Comenius stone (2025), the Achillesstraat gateway (2017), the station clock (2018), the Lomanstraat (2008). The others were checked on title, description, date and author.

## Route ideas

- **Stadionbuurt on foot:** De onbekende verliezer, Hygiëaplein schools, Olympic Stadium, Van Tuyll monument, then along the IJsbaanpad to the Nieuwe Meersluis and back by De wildplasser.
- **Jan van Eijckstraat to the Apollolaan:** Wiener's house, the St Ignatius Gymnasium on the Zentralstelle site, Gerhard Badrian's stone, Verzetsgroep, Lotty's bench.
- **Vondelpark, Zuid side:** the mirror at the Van Eeghenstraat gate, Mama Baranka, the Blauwe Theehuis, Picasso's bird, out by the Emmaplein to the Comenius stone on the Valeriusplein.
