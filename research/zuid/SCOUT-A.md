# Zuid scout A (items 101-166): public art and walls, war and memory

Scouted 2026-11-24. Sweeps 2 (public art and walls) and 3 (war and memory) of the West standard, for all of stadsdeel Zuid. Nothing is written yet: the user picks.

66 candidates, numbered 101 to 166: **46 in sweep 2, 20 in sweep 3**. 49 are possible new places (a few with a merge as the alternative), 17 are merges into a listed monument (the monument number is given). Two are suggested as Amazing (101 Dr. Rat's graffiti, 163 Rozenoord), 31 as Nice, 33 as Okay. Every pin was point-checked with `research/zuid/scripts/areas.py` and is in borough Zuid. Nothing in Zuid is on the live map yet (checked read-only; the only neighbour is the place "Vondelpark", filed under West).

Each item: title; pin and address; hook; why it fits; lead source; status with the date of the latest evidence; caveats; rank; new place or merge.

Short forms for sources: **KW n** = buitenkunstamsterdam.nl/kunstwerken/bekijk/n (the id from the site's own API; the site is a JavaScript app, so if a link opens the wrong work, search by title). **4en5mei n** = https://www.4en5mei.nl/oorlogsmonumenten/zoeken/n/slug (slugs given where they are plain ASCII). **Wandkunst** = the city register at maps.amsterdam.nl/wandkunst (no per-work URL; search by address).

## Sources

**Gone through completely:**
- **Kunstwacht / buitenkunstamsterdam.nl:** the full list through the site's API (1,746 works citywide), point-checked to the borough: **388 works with coordinates in Zuid** (Oud-Zuid 171, De Pijp and Rivierenbuurt 116, Buitenveldert and Zuidas 101) plus 7 without coordinates whose address is in Zuid. All 395 read at title and summary level, 75 read in full.
- **City wall-art register (maps.amsterdam.nl, "Wandkunst"):** 226 works citywide, **35 in Zuid** (Buitenveldert and Zuidas 17, Oud-Zuid 13, De Pijp and Rivierenbuurt 5), all read; the long texts read for 14.
- **Stadscuratorium:** the whole online collection through its WordPress API (147 collection entries) and all 235 advices, filtered on Zuid place names: 42 hits, all read.
- **Street Art Cities:** the marker feed for the Amsterdam zone (8,621 markers in the feed, 58 in a box over Zuid, **16 in the borough**: 11 active, 5 removed). Zuid is not a street-art district; two walls made the list.
- **OpenStreetMap:** `tourism=artwork`, `historic=*`, `memorial=*` in a box over Zuid, point-checked: **315 features** (249 artworks, 66 historic or memorial, of which 11 stolpersteine and 25 railway relics). Every artwork more than 35 m from a Kunstwacht record was looked at.
- **nl.wikipedia "Lijst van beelden in Amsterdam-Zuid":** all 265 rows read; about 15 single-work articles read for status and hooks.
- **4en5mei.nl monument database:** the title search "Amsterdam" (229 records) plus the 220 records nearest to the middle of Zuid (out to 5.6 km, so past every edge of the borough); 243 detail pages downloaded and point-checked. **45 records lie in Zuid** (43 by coordinates, 2 by address), all read.

**Only sampled:**
- **tracesofwar:** blocks scripts (HTTP 403); used through search hits only.
- **Joods Monument:** not gone through address by address (it lists tens of thousands of Zuid addresses by design). Used for the places that tell the story: the Zentralstelle, the Olympiaplein, the Gaaspstraat market, the Jewish schools, the Beethovenstraat. Stolpersteine are not listed one by one.
- **Artists' own sites and local papers:** only where a status needed checking.

**What that leaves open:**
- Most Kunstwacht texts are undated. Where nothing newer than the Kunstwacht record exists, the item says so, and the place should get `check: Still there?`.
- Kunst in the lobby of the WTC, the ABN AMRO head office and the VU (several records) was not checked for access.
- Plaques inside schools, churches and offices are listed under "Checked and dropped", not visited.
- Items 128 and 150 have approximate pins.

## Coverage

| Sweep | 1 Museumkwartier, Willemspark | 2 Apollo, Stadion, Schinkel, Hoofddorpplein | 3 De Pijp | 4 Rivierenbuurt | 5 Buitenveldert | 6 Zuidas, Prinses Irenebuurt |
|---|---|---|---|---|---|---|
| 2 Public art and walls | done | done | done | done | done | partial: indoor works at the VU, WTC and ABN AMRO not checked for access |
| 3 War and memory | done | done | done | partial: Joods Monument not gone through street by street | done | done |

Not covered by design in any area: the Vondelpark's own sculptures (the park is one place on the map already, see "Leads"), the Rijksmuseum garden and the Stedelijk façade statues (A-list), the yearly ArtZuid show (temporary).

---

## Sweep 2: Public art and walls

### Area 1: Museumkwartier and Willemspark

101. **D.D.T.666, Dr. Rat's graffiti**; 52.354097, 4.878633, wall on the Hondecoeterstraat near the Frans van Mierisstraat; one of the oldest pieces of graffiti in Amsterdam still in place: in 1978 the 18-year-old Ivar Vičs (Dr. Rat) wrote the initials of his punk club Dirty Dutch Trix 666 near his parents' house, an expelled member added "MOET DOOD", Vičs died of drugs in 1981 and other writers tagged around it in respect; it then sat for decades behind a holly said to have been planted by his father, and in 2022 the borough had it conserved by a family of art restorers (Antonio Rava) as heritage. Punk on the smartest streets of Zuid, and graffiti treated like a fresco. KW 2541; second source: the Dutch Graffiti Library special on Dr. Rat. Status: conserved 2022 (Kunstwacht), nothing newer found. Caveat: the holly story is called a myth by the source itself; say so. **Amazing**. New place.

102. **The mosaic transformer house, "In den bescherfden schuyt"**; 52.356093, 4.870577, Willemsparkweg 166 at the Cornelis Schuytstraat; a hexagonal transformer house (possibly the only one in the city) that neighbours wanted gone, until Fabrice Hünd started covering it in mosaic in 2012 at his own cost; four months later the street had adopted it; in it are shards from Amsterdam building pits, marble from a rebuilt bathroom, antique beads from a neighbour and a boy's shell collection. A guerrilla artwork that turned into the square's mascot, on the poshest shopping street of Zuid. KW 2510. Status: in the Kunstwacht list (undated); wiki list dates it 2012. Hünd's other Zuid works: "Het kompas" on the Marie Heinekenplein (2006, there), "Oscar Carré" on the Eerste Jan van der Heijdenstraat (2021), "Hoofdzaak Liefde" on the Hoofddorpplein (demolished 2020, see 115). Nice. New place.

103. **Groep A'dam on the Emmaplein**; 52.354335, 4.862744, Emmaplein; five bronzes by the five sculptors who walked out of the Dutch sculptors' circle in 1958 (Tajiri, Couzijn, Guntenaar, Kneulman, Verhulst: "Adam, but without Eve") plus one by Pearl Perlmuter; the works once stood on the city's best spots such as the Museumplein and vanished into depots at redesigns, until residents got them out and made the square a stage for them. Post-war modern sculpture that most people walk past on the way to the Vondelpark. KW 2526 (group), 2527-2530, 1919, 2523. Status: in the Kunstwacht list; the year of the regrouping is not in the text (Perlmuter's work has stood here since 1998 per the wiki list), find it. Nice. Merge into monument 505852 (Emmaplein, the Queen Emma monument by Lambertus Zijl, 1938), as one place for the square.

104. **Descartes by a silversmith**; 52.355463, 4.883361, Johannes Vermeerplein; a stylised limestone Descartes made by the Paris Art Deco silversmith Jean Puiforcat for the Pavillon de la Pensée at the 1937 World Fair, given to the city by the French ambassador in 1948 for 15 years of the Maison Descartes; Descartes worked in Amsterdam between 1628 and 1649. Odd maker, odd journey, on a square nobody visits. KW 1913. Status: in the Kunstwacht list and OSM. Caveat: Kunstwacht says 1948, the wiki list 1949. Okay. New place (the houses on the square are monument 222088, but the statue stands alone).

### Area 2: Apollobuurt, Stadionbuurt, Schinkelbuurt, Hoofddorppleinbuurt

105. **Aldo van Eyck's first playground, Bertelmanplein**; 52.349114, 4.858919, Bertelmanplein; in 1947 the young city architect Aldo van Eyck laid out his first playground here: a sandpit, tumbling bars and climbing arches sized to a child's body; more than 700 followed across the city, most now gone. A memorial on the square marks the spot. World-famous in architecture schools, unmarked in guidebooks. https://stadscuratorium.nl/collectie/de-klimrekken-van-aldo-van-eyck/ ; KW 2513 (record without text). Status: Stadscuratorium entry is current (2025-2026). Caveat: how much of the 1947 layout is original and what the memorial looks like must be checked; Scout B or C may have it too. Nice. New place (the blocks around are monuments 504924, 505031, 504969, 504988).

106. **Monument Indië-Nederland, the Van Heutsz monument that lost its name**; 52.350126, 4.865570, Olympiaplein at the Apollolaan; built 1935 for the general who subdued Aceh, contested from before day one: a six-week strike on the building site in 1933 in solidarity with the mutineers of De Zeven Provinciën, Provo paint in 1965, a bomb in 1967, the portrait plaque stolen in 1984 and dynamite the same year that injured a 12-year-old boy, the letters of the name removed by unknown hands in 1991 (never found); renamed in 2004. Locals call the woman with the two lions "Mien met de hondjes". The sculptor Frits van Hall died in a camp in 1945. https://nl.wikipedia.org/wiki/Monument_Indië-Nederland ; https://stadscuratorium.nl/collectie/monument-indie-nederland/ ; KW 1988. Status: there. Sensitive: write factually, both readings. Nice (Amazing is defensible). Merge into monument 527837.

107. **Olympic Stadium: the salute that went indoors, and Prometheus**; 52.343744, 4.855381, Olympisch Stadion; Gra Rueb's bronze athlete giving the "Olympic salute" (1928, for the NOC's founder Van Tuyll van Serooskerken) greeted visitors for 94 years; a 2019-2020 study for the stadium found the "Roman origin" defence unsound, and in March 2022 the statue was moved into a stairwell inside; the Cuypersgenootschap went to court to get it back outside and lost. Outside remain Carasso's Prometheus (1947, the memorial for athletes killed in the war, made in two months because other sculptors refused the deadline) and Ek van Zanten's footballers Cruijff and Vogts (1979). https://nl.wikipedia.org/wiki/Van_Tuyll-monument ; 4en5mei 1435/amsterdam-monument-bij-het-olympisch-stadion ; KW 1890, 1888. Status: indoors since March 2022 (wiki); say how it can be seen (stadium tours). Nice. Merge into monument 451749 (Olympisch Stadion).

108. **11 Rue Simon Crubellier**; 52.343937, 4.858231, Stadionplein; Matthew Darbyshire's "dream apartment" without walls in bronze and concrete, furnished from the wishes of residents, on the square that was a car park for decades; the title is the address of the building in Perec's novel "Life: A User's Manual". https://stadscuratorium.nl/collectie/11-rue-simon-crubellier-2/ ; KW 2522. Status: Stadscuratorium (2019), wiki list (2018). Caveat: the two sources differ on the year. Okay. New place.

109. **De wildplasser and Terreinwinst, ASV Arsenal**; 52.341086, 4.851572, IJsbaanpad; when the amateur club ASV Arsenal got a new ground in 2011 it asked eleven artists (one team) to replace the advertising boards with art about sport; Erik Kessels answered with a bronze club member urinating at the edge of the pitch; Zoro Feigl's "Wave" belongs to the same set. https://nl.wikipedia.org/wiki/De_wildplasser . Status: wiki list and OSM; how many of the eleven survive is unverified. Okay. New place.

110. **Spiegel van de hemel**; 52.340156, 4.857042, Amstelveenseweg at the IJsbaanpad, beside the former Burgerweeshuis; a 20 m stainless steel pair of columns by André Volten that stood from 1986 to 2018 at an office in Hoevelaken (the design was first turned down by the company's board) and came here in 2019. https://nl.wikipedia.org/wiki/Spiegel_van_de_hemel . Status: 2019, in OSM. Okay. Merge into monument 532189 (Burgerweeshuis).

111. **Marte Röling's lips, Sporthallen Zuid**; 52.340303, 4.853335, Burgerweeshuispad 54; in 1975 the pop artist painted the three halls with huge coloured planes that turn out to be blown-up lips, and made the colour plan that guides visitors through the building. Wandkunst (Burgerweeshuispad 54, rated "Waardevol"). Status: in the register (inventory about 2019-2021); indoors, seen when the halls are open. Caveat: check that the paintings survived later refits. Okay. New place.

112. **Apollo on Minerva's plinth**; 52.348174, 4.872356, Minervalaan; Jan Havermans's Minerva (1929), the patron of the avenue, was stolen from her plinth in 1993; a year later the French artist Arman gave the city his Apollo, which was put on the empty base. A theft, a gift, and the wrong god on the right street. KW 1915. Status: in the Kunstwacht list. Nice. New place.

113. **The Regenerator (Marina Abramović)**; 52.349058, 4.877526, crossing of the Beethovenstraat and the Gerrit van der Veenstraat; a copper-clad seat with seven minerals (2001): "sit on one of the minerals, regenerate, time: unlimited". A Marina Abramović on a shopping street, used as a bench. https://stadscuratorium.nl/collectie/the-regenerator/ ; KW 2232. Status: in the Stadscuratorium collection and OSM. Caveat: Kunstwacht's pin is 170 m south; the pin here follows OSM and the Stadscuratorium address. Nice. New place.

114. **The ArtZuid leftovers on the Apollolaan**; 52.350451, 4.871680, Apollolaan opposite the Hilton; what stays behind from the two-yearly sculpture route: Auke de Vries's "Bosgod" (made for a bank in Utrecht, moved to the Mahlerplein in 2011 and here in 2017), Tajiri's "Wachter 1", a cast of Rodin's "Le Penseur", Sandro Chia's "Enea" and a Volten on the Minervalaan. KW 2494, 2496, 2497, 2495; https://stadscuratorium.nl/advice/bosgod-apollolaan/ (2023). Status: Bosgod confirmed 2023; **the Rodin and the Chia are unverified** (Kunstwacht's text dates from ArtZuid 2009). Okay. New place.

115. **Hoofddorpplein: Pontus and the transformer house that lost its art twice**; 52.351124, 4.849829, Hoofddorpplein; Martijn Sandberg's "Power To The People" (2000), yellow letters on the transformer house lit by passing headlights, was taken down because the tram ran too close; Hünd's mosaic "Hoofdzaak Liefde" (2011) went with the house itself in 2020; what stands now is Tom Claassen's "Pontus" (2016) and Johan Moorman's "Empower yourself" (2021). KW 2231 ("niet meer aanwezig"), 2517; wiki list. Status: Pontus and Empower yourself per the wiki list (2021). Okay. New place.

116. **Modern girl with a pearl**; 52.354153, 4.855517, Eerste Schinkelstraat 111 at the Amstelveenseweg; a full-wall mural of 2023 by Roelof Schierbeek ("Beyond") after Vermeer. Street Art Cities marker "Girl with the pearl, J.Vermeer" (active); OSM. Status: active on Street Art Cities, 2026 feed. The one big mural in Oud-Zuid. Okay. New place.

117. **Hildo Krop's bridges of Plan Zuid**; 52.350638, 4.865314, the Lyceumbrug (bridge 410) at the Olympiaplein as pin; the city sculptor's best run: father and son, mother and daughter on the Lyceumbrug; seals and snakes on the Timo Smeehuijzenbrug; sea monsters with guitar and harmonica on the Mozartbrug; "the hands of the creator" and "new life" on the Beethovenbrug (1940); men and women on the Stadionbrug (1938); a man and a woman lying on boats on the Hildo Kropbrug. KW 1891, 2194, 2193, 2195, 1985, 2196, 2191. Status: all in the Kunstwacht list. Caveat: the bridges are not in the monument slices; check whether they are listed and whether the monument round covers them (the Kinderbrug is monument 527786). Nice. New place, or one Look for line per bridge if the bridges get places of their own.

### Area 3: De Pijp

118. **Bulgar Time, the rooftop clock that runs both ways**; 52.350497, 4.891861, roof of the housing block at the Ferdinand Bolstraat and the Lutmastraat; a cube that turns six times a minute with four clock faces, two running forward and two backward, each showing only the figure 4; by Viktor IV (Walter Glück, 1929-1986), the American who lived on a barge in the Amstel and invented his own time. KW 1969; https://nl.wikipedia.org/wiki/Viktor_IV . Status: in the Kunstwacht list (undated); **whether it still turns is unverified**: `check: Still there?`. Nice. New place.

119. **The dip-pen fences for Jacob Israël de Haan**; 52.354025, 4.904289, Jacob Israël de Haanstraat; two painted fences with ornaments shaped like dip pens (Anneke van Breest Smallenburg, unveiled August 1992) for the writer whose novel "Pijpelijntjes" (1904), set in De Pijp and openly about love between men, cost him his jobs at the socialist daily Het Volk and as a teacher. KW 1947. Status: in the Kunstwacht list (undated). The street itself is the bigger memorial; this is the thing to look at. Nice. New place.

120. **André Hazes on the Albert Cuyp**; 52.356429, 4.897480, Albert Cuypstraat at the Eerste Sweelinckstraat; the bronze of the singer from De Pijp (2005) was made, according to the wiki list, by three anonymous Chinese sculptors working from video images. https://nl.wikipedia.org/wiki/Lijst_van_beelden_in_Amsterdam-Zuid . Status: in OSM. Caveat: it stands in the A-list market; the hook is the making, which needs a second source before it is written. Okay. New place.

121. **The milk bottles**; 52.353965, 4.888406, Hercules Seghersstraat; two tiled concrete milk bottles in red, white and blue (Tom Postma, 1982), made for a courtyard on the Eerste Jan Steenstraat where a dairy had stood; originally one stood and one had fallen, spilling milk over a plateau; moved here in 1996 without the plateau. KW 1910. Status: in the Kunstwacht list (undated). Okay. New place.

122. **Revisiting the Cullinans**; 52.353221, 4.906627, Cullinanplein 1 and the streets around; nine small crystal sculptures high on the new façades of the Asscherkwartier (Sanja Medic, 2023), each about one of the three monuments here: the Asscher diamond works, the theosophical temple and the old town hall of Nieuwer-Amstel; the nine stand for the nine stones Joseph Asscher cut from the Cullinan. KW 2537. Status: 2023. Okay. Merge into monument 527800 (Diamantslijperij Asscher, Tolstraat 127).

123. **Paleisbeeld**; 52.355030, 4.897481, Sarphatipark; a see-through steel outline of the Paleis voor Volksvlijt, Sarphati's crystal palace that burned down in 1929 (Marjet Wessels Boer, 2022), paid for by 300 "people's shareholders" in a nod to how the palace itself was funded. KW 2531. Status: 2022. Okay. Merge into monument 527847 (Sarphati memorial).

124. **Metro art under De Pijp and the Europaplein**; 52.353253, 4.891019, metro station De Pijp (and station Europaplein, 52.342396, 4.891273); Amalia Pica's "Slipping Colors" in De Pijp, and Gerald van der Kaap's "I want a permanent wave" at Europaplein: life-size photos of a man from the North and a woman from the South meeting on the platform, the abduction of Europa restaged, with a Greek 2 euro coin set in the platform floor. KW 1163, 1164. Status: stations in use since 2018. Okay. New place (pin De Pijp; Europaplein could instead be a Look for line in 132).

### Area 4: Rivierenbuurt

125. **Wilhelmina Drucker monument**; 52.346666, 4.900353, Churchill-laan; a young woman with spread arms (1939) for the feminist after whom the Dolle Mina's named themselves, made by Gerrit van der Veen, who five years later was shot as the leader of the artists' resistance; the street where the SD sat was renamed after him in 1945. KW 2347. Status: in the Kunstwacht list and OSM. Nice. New place.

126. **Ode to the horse dropping**; 52.345702, 4.900439, Merwedeplein; three bronze lumps: a fallen-open heap of horse dung (Aart Rietbroek, 1972), made because the artist noticed that the horses of the rag-and-bone man and the milkman no longer came into the centre but still did here. It lies across the lawn from the statue of Anne Frank. KW 2334. Status: in the Kunstwacht list. Nice. New place.

127. **The climbing figure of the Jewish children's home**; 52.338833, 4.901385, De Mirandalaan 50; Hans Ittmann's bronze (1965), half person and half abstraction, was meant as a climbing pole for the children of Le-Ezrath Ha-Jeled, the home for Jewish war orphans that Queen Juliana opened here in 1965 (the psychiatrist and writer Hans Keilson was a founder); the home closed in 1975, the building was replaced, the sculpture ended up nameless in an inner garden, and in 2019 a care manager traced the artist and had it put back. KW 2521. Status: back since 2019. Belongs to sweep 3 as much as 2. Nice. New place.

128. **The Martin Luther King that came uninvited**; about 52.3412, 4.9115, Martin Luther Kingpark; on 15 January 2020, King's birthday, the artist Airco Caravan put a bronze of him in the park named after him, without a permit; the city let it stay. https://boeddhistischdagblad.nl/nieuws/148687-onthulling-van-illegaal-beeld-van-martin-luther-king-in-amsterdam ; wiki list. Status: reported as officially tolerated; no dated evidence after 2020 found. **Pin approximate**: `check: Location`. Willem Reijers's "Engel" (1949, KW 2314) in the same park is a Look for line. Nice. New place.

129. **Kennedy and the pumping station that quotes him**; 52.340844, 4.897756, President Kennedylaan at the Maasstraat; the avenue was renamed within weeks of the murder and got its bust in 1964 (Renze Hettema); in 2020 the entrance to a large underground sewage pumping station went up right behind it, and Bureau Van Eig lettered it with Kennedy's line that whoever solves the problems of water deserves two Nobel prizes, one for peace and one for science. KW 2539, 2345. Status: 2020. Okay. New place.

130. **Berlage by Krop**; 52.346014, 4.903388, Victorieplein; the architect of Plan Zuid looks out over his own plan; it took the city sculptor ten years because of illness, and he was 80 when it was unveiled in 1966. KW 2299. Status: there. Okay. New place, or a paragraph in monument 532002 (the Wolkenkrabber, on the same square).

131. **Gandhi on the Churchill-laan**; 52.347035, 4.893249, Churchill-laan; a walking Gandhi with staff and sandals (Karel Gomes, unveiled 2 October 1990). KW 2317. Status: in OSM. Hook is thin unless the yearly 2 October gathering is confirmed. Okay. New place, or a Look for line in 125.

132. **Europaplein: the festive parade and the fountains that waited 14 years**; 52.341334, 4.891625, Europaplein, in front of the RAI (officially in wijk Zuidas, listed here because it closes the Rivierenbuurt); Guillaume Bijl's six painted aluminium figures of 4.5 to 7.5 m (2014), meant to be "frivolous" against the RAI; Femke Schaap's "Virtual Fountains" (2022), three marble groups that become fountains of light after dark and took 14 years to find a place; and the turning granite ball of Christian Tobin (1983). KW 2507, 2534; https://stadscuratorium.nl/collectie/virtual-fountains/ . Status: 2022. Okay. New place (the RAI is monument 532206, but the art stands on the square).

### Area 5: Buitenveldert

133. **Lady Solid, "the Waternet girl"**; 52.335511, 4.857035, Amstelveenseweg, in front of the water pumping station; a life-size, brightly painted woman who laughs with her arms up while water runs down her thighs; designed about 1994 by Caro Bensca for a fountain on the Krugerplein in Oost, where residents voted it down as indecent; the water company took it for its own gate (1997), behind a fence, facing the road. https://nl.wikipedia.org/wiki/Lady_Solid ; KW 2491. Status: in both lists. Nice. New place.

134. **The city maiden at the city limit**; 52.330408, 4.856028, Koenenkade; the sandstone Stedenmaagd that crowned the Vondelpark gate from the colonial exhibition of 1883 until 2009 was too weathered to stay; a copy took her place and the restored, painted original has stood since 2014-2015 exactly on the border of Amsterdam and Amstelveen, facing south to greet arrivals. KW 1149. Status: there. Caveat: at the entrance of the Amsterdamse Bos, but the pin is in borough Zuid. Okay. New place.

135. **The sculptures of the Gijsbrecht van Aemstelpark**; 52.328927, 4.870269 (the rider) as pin; a 1960s park hung with its period's art: Volten's "Buizenkolom" (1968), Floyd DeWitt's rider (a Montana "cowboy artist" at the Rijksakademie), Niermeijer's Buddhist disc "The Long Hum" (1969), Jan Snoeck's four lying ceramic figures along the cycle path (three shown at the Amstelpark in 1974, one from the Stedelijk's garden), and the war memorial of 2014: a fallen steel diamond on the octagonal foundation of a vanished kiosk. KW 2342, 2344, 2340, 2325, 2298, 2331, 2506, 2514; 4en5mei 4190. In 2025 the Stadscuratorium approved moving Josje Smit's concrete dog and dromedary into the park. Status: all in the Kunstwacht list. Okay. Merge into monument 532136 (Gijsbrecht van Aemstelpark).

136. **Five artists' gates to the Amstelpark**; 52.333739, 4.893036 ("Big Talk") as pin; in 2006 the borough had five artists design the entrances: Wim Poppinga's metres-high letters PARK above the dullest one, Joost Conijn's steel gate at De Borcht, Stefan Strauss's red bridge, Carel Lanters's blue and yellow turnstile arbour at the Rozenoord bridge, and Krijn de Koning's at the Amsteldijk (placed 2011). Inside: Pjotr Müller's "Cabane" (1980, the first of his huts), Karin van Dam's black spiky "PIT Portaal" (2021), and the audio work "Floriade fluisteringen" (2018), in which four plants tell their life. KW 2479, 2477, 2478, 2476, 2490, 2320, 2540; https://stadscuratorium.nl/collectie/big-talk/ . Status: in the Kunstwacht list. Okay. Merge into monument 200968 (Amstelpark); Scout C has the park itself.

### Area 6: Zuidas and Prinses Irenebuurt

137. **Escher's only work in Amsterdam**; 52.341957, 4.865568, Dirk Schäferstraat 59; on the front of a villa sits "Vogels en Vissen" (1960), a ceramic relief by M.C. Escher made at De Porceleyne Fles in Delft; the city's register calls it, as far as known, his only work in Amsterdam, and one of very few monumental works he made at all. Wandkunst (Dirk Schäferstraat 59, rated "Top"). Status: in the register (inventory about 2019-2021) and OSM (mural at 52.341944, 4.865575). Private house: seen from the street only; **confirm from the street how visible it is**. Nice (Amazing if it reads well from the pavement). New place.

138. **De Stijl colours on four blocks of flats**; 52.341560, 4.867158, Dirk Schäferstraat and Johannes Worpstraat; in 1955-1956 Joseph Ongenae gave the fronts and backs of four apartment blocks compositions in red, yellow, blue and grey glass panels: one of the first built projects of the Liga Nieuw Beelden, which wanted artists and architects to shape the city together. Wandkunst (Dirk Schäferstraat 1 and Johannes Worpstraat 1, both "Top"). Status: in the register. Nice. Merge into monuments 530915, 530916, 530917, 530918 (the four blocks; make them one place). 80 m from 137.

139. **Saura's Crucifixion in the Thomaskerk**; 52.342060, 4.874621, Prinses Irenestraat 34; the Spanish painter Antonio Saura, agnostic and fiercely anti-clerical all his life, made exactly one glass appliqué window, and it hangs in a Protestant church in Zuid (1966); the register calls it one of the top works of art in Amsterdam. Wandkunst (Prinses Irenestraat 34, "Top"). Status: in the register. Indoors: seen at services and events. Nice. Merge into monument 222222 (Thomaskerk).

140. **Spinoza Lyceum: Krop's Spinoza and the school's walls**; 52.342696, 4.865839, Peter van Anrooystraat 8; Krop's Spinoza (commissioned 1953) outside; Wijnberg's two mosaics "the ancient and the modern world" at the entrance (1957); inside, a hall-high wall painting by Albert Muis that may be one of the largest post-war frescoes in the country. KW 2357, 2392; Wandkunst (two records, "Top"). Status: in both lists. Working school: outside works only. Okay. Merge into monument 200551.

141. **Your life is calling: the twelve fists**; 52.340301, 4.883691, south-east corner of the Beatrixpark, against the A10; in 1990, Van Gogh's centenary year, the artists Paul Pieck and Benno Réwinkel hoisted five tonnes of concrete fists onto the Museumplein with a crane, illegally, as a protest against the "chip-stand funfair" of museum merchandise; nobody stopped them because everybody thought it belonged to the event. It went into storage when the square was redone about 1998, the artists protested again, and the Friends of the Beatrixpark adopted it as their own protest against a motorway exit that would eat part of the park. Damaged in 2007 and restored. https://nl.wikipedia.org/wiki/Your_life_is_calling ; KW 2313. Status: in the Kunstwacht list. Caveats: the Zuidasdok works run along this corner and nl.wikipedia gives a different coordinate, so `check: Location`. Nice. New place (the park is monument 200535).

142. **Lions of the Centraal Station**; 52.341062, 4.885150, Beatrixpark, at the Artsenijhof and the path to the RAI; two pairs of sandstone lions, one holding the arms of Amsterdam and one the arms of the state, from the 22 that A.L. van Gendt put on the railway bridges beside the Centraal Station in 1876; here since 1972. KW 2332, 2333 (with a link to the Genootschap Leeuwen van het Centraal Station, leeuwencs.nl). Status: in the Kunstwacht list and OSM. Oost already has "Leeuwen van Zeeburg" from the same pride on the map. Nice. Merge into monument 200535 (Beatrixpark), or a place of its own.

143. **The dog that was a bribe**; 52.344392, 4.882146, Beatrixpark; about 1975 the city wanted dogs on the lead in the parks; the park's dog owners formed a committee, collected 5,000 guilders from some fifty people (the revue star Willy Walden helped) and offered the city a stone dog "in gratitude", hoping to soften it; because they could not agree on a breed, the Norwegian sculptor Elena Engelsen made it a mongrel (1979). KW 2321 (source: newsletter of the Friends of the Beatrixpark, 2005). Status: in the Kunstwacht list and OSM. Caveat: OSM puts it 160 m south-west (52.343567, 4.880122): `check: Location`. Nice. Merge into monument 200535, or a place of its own.

144. **Hildo, the most petted dog of the Zuidas**; 52.337293, 4.872533, Gustav Mahlerplein; Tom Claassen's black dog sits on the pavement in front of the bank, not on a plinth; it has no official title and is named as a joke after Hildo Krop, because its angular shape reminded the artist of the city sculptor's work. KW 2492. Status: in the Kunstwacht list. Caveat: Kunstwacht dates it 1997 through the wiki list; the square was built later, so check. Okay. New place.

145. **Love or Generosity**; 52.339706, 4.867886, Parnassusweg, in front of the court; Nicole Eisenman's five-metre bronze giant (placed 27 November 2020) bends down kindly at the door of the Amsterdam court, with both male and female traits, stainless steel trousers, and an owl, an arrow and an acorn in its hand. https://nl.wikipedia.org/wiki/Love_or_generosity ; https://stadscuratorium.nl/collectie/love-or-generosity/ . Status: 2020. Nice. New place.

146. **White Noise and the Zuidas art walk**; 52.336273, 4.886635, the telecom tower; after dark Giny Vos's light work (2009) shows planets and stars on the highest point of the Zuidas. Around it the stops of the "Ommetje Zuidas" route: Boris Tellegen's robot "De Wachter" (moved off the school wall in 2016), Gijs Assmann's 9 m "Pendulum" at the European Medicines Agency (2020), Jeroen Henneman's "De doos", moved from the ground to a rooftop, and Martijn Sandberg's footbridge "Opgelet! Kunstwerk! Opgelet!" over the Boelegracht (2024). KW 2782, 2511, 2536; https://stadscuratorium.nl/collectie/white-noise/ ; https://stadscuratorium.nl/collectie/opgelet-kunstwerk-opgelet/ . Status: 2024 for the bridge. Okay. New place; also a ready route idea.

---

## Sweep 3: War and memory

### Area 1: Museumkwartier and Willemspark

147. **The two memorials on the Museumplein**; 52.356931, 4.882222, Museumplein, on the side of the Van Baerlestraat; "Vrouwen van Ravensbrück" (unveiled 25 April 1975) for the women of the camp, and 60 m on "Hel van vuur" (Heleen Levano, 25 November 1978) for the murdered Sinti and Roma. Thousands cross the square without seeing either. 4en5mei 1439 and 1440/amsterdam-zigeunermonument ; KW 1894, 1977. Status: there. The square is A-list; these are the off-list detail. Sensitive: factual. Nice. New place.

148. **"Sobibor began in the Vondelpark"**; 52.357507, 4.871893, Van Eeghenstraat 78, at a park entrance; a mirror and a text panel (4 May 2021) on the spot the King named in his 2020 remembrance speech: it began with a sign "Forbidden for Jews"; the mirror asks the question in the present tense, "And what do you do?". A private initiative (Niels van Deuren). 4en5mei 4521; KW 2532. Status: 2021. Okay. New place, or a Look for line in the existing place "Vondelpark".

149. **The men shot on 7 May 1945, Amstelveenseweg**; 52.355449, 4.855474, Amstelveenseweg at the Vondelpark; a memorial of 1946 (Ferd Jantzen) for members of the Binnenlandse Strijdkrachten killed here on 7 May 1945, two days after the capitulation, the same day as the shooting on the Dam. 4en5mei 1443/amsterdam-monument-bij-het-vondelpark ; KW 1928. Status: there. Caveat: 4en5mei names four victims, Kunstwacht speaks of five and gives 25 May 1946 as the unveiling: settle it. Okay. New place.

150. **The doorposts of the Gerard Terborgstraat**; about 52.351786, 4.883765, Gerard Terborgstraat; four wooden doorposts with the names and addresses of 169 murdered Jewish neighbours and some resistance members, for the doors they lived behind; an initiative of a residents' collective, designed by Victor Levie, unveiled 1 July 2017; two names were added in April 2020. 4en5mei 4013/amsterdam-monument-aan-de-gerard-terborgstraat ; https://www.tracesofwar.com/sights/146245/Monument-Gerard-Terborgstraat.htm . Status: 2020. **Pin is the street centroid**: `check: Location`. Okay. New place.

### Area 2: Apollobuurt, Stadionbuurt, Schinkelbuurt, Hoofddorppleinbuurt

151. **Euterpestraat: the SD headquarters and the Zentralstelle**; 52.349203, 4.874063, Adama van Scheltemaplein and Gerrit van der Veenstraat 99; two schools facing each other ran the persecution: the girls' HBS (now the Gerrit van der Veen College) housed the Sicherheitsdienst, the Christian HBS across the square the Zentralstelle für jüdische Auswanderung under Aus der Fünten, where arrested Jews were gathered and put on the tram to the station. On Sunday 26 November 1944 Allied planes attacked both; the Zentralstelle building was wrecked and later replaced by the St. Ignatius Gymnasium. Four things to see: the plaque "Tijdloos is de stilte" (1994, on no. 99), Rietbroek's relief of four entangled figures (1957, on the gymnasium), the paving of text tiles on the square (Hilde Meeus and Céline Wouters) and the street's name itself. Within 150 m: the stone for Gerhard Badrian, the German-Jewish resistance man shot in the Rubensstraat on 30 June 1944 after a betrayal (no. 26), and the plaque for Freek Ox and Ferdinand Ploeger, hit in a gunfight on 15 July 1944 (Gerrit van der Veenstraat 79). 4en5mei 3648/amsterdam-tijdloos-is-de-stilte , 104/amsterdam-monument-bij-het-st-ignatiusgymnasium , 3595/amsterdam-monument-voor-gedeporteerde-joden , 2509, 1432; KW 2293, 2213, 2214, 1904. Status: all there. Caveats: the tile monument is dated 11 September 2007 by 4en5mei and "11 December" by Kunstwacht; Kunstwacht says 18,000 people were deported from here, the plaque says the deportation of more than 70,000 was organised from here (two different things; keep them apart). Sensitive. Nice (the core war place of Zuid). Merge into monuments 527773 (de "Gerrit van der Veen") and 222130 (St Ignatiusgymnasium) as one place.

152. **"Verzetsgroep", Apollolaan**; 52.350711, 4.877736, Apollolaan 91-99; the day after the resistance shot the SD officer Oehlschlägel, 29 men who had nothing to do with it were taken from the prison on the Weteringschans and shot here; Jan Havermans's three stone figures (unveiled 25 October 1952) stand on the spot, and the yearly 4 May gathering of the neighbourhood is here. 4en5mei 1445/amsterdam-verzetsgroep ; KW 2176. Status: there. Caveat: the wiki list dates it 1954. Sensitive. Nice. New place.

153. **Truus Wijsmuller on the Bachplein**; 52.348018, 4.879759, Bachplein; the bust (Herman Janzen) of the woman who got thousands of Jewish children out of the Reich stood from 1965 in the Beatrixoord in the Oosterpark; when that closed she took her own statue home and kept it until she died; in 1978 it was put on the square where, in the war, she met the people who needed her help. 4en5mei 1438/amsterdam-monument-op-het-bachplein ; KW 1901; https://stadscuratorium.nl/collectie/gedenkteken-truus-wijsmuller/ . Status: there. Around the corner (Corellistraat 27, 52.349618, 4.878229) a stone of 2011 with a poem by Hannie Ostendorf Voyles for the raids in the Beethovenstraat, home of a large German-Jewish community: Look for line (4en5mei 4570). Nice. New place.

154. **Schaduwen, Olympiaplein**; 52.346591, 4.866617, Olympiaplein; on 20 June 1943, during the great raid (about 5,500 people), Jews had to gather on this sports field; the NSB photographer Herman Heukels took a picture here; since 20 June 2022 the shadows of the people in that photo lie in asphalt where they walked (Ram Katzir, with three pupils of Het Amsterdams Lyceum). Their names are unknown. 4en5mei 4502/amsterdam-gedenkteken-schaduwen ; KW 2533. Status: 2022. Sensitive. Nice. New place.

155. **Amsterdam thanks its Canadians**; 52.348169, 4.883386, Apollolaan (Canadezenplantsoen); a steel pennant (Jan de Baat) unveiled on 5 May 1980, when the Canadians drove their entry route of 8 May 1945 again: Berlagebrug, Apollolaan, Van Baerlestraat, Leidseplein, Dam. 4en5mei 1444/amsterdam-monument-voor-canadese-militairen ; KW 1896. Status: there. Okay. New place, or one place with 162.

### Area 3: De Pijp

156. **IJssalon Koco**; 52.352796, 4.902778, Van Woustraat 149; the ice-cream parlour of the German-Jewish refugees Ernst Cahn and Alfred Kohn; on 19 February 1941 its owners and regulars, a defence group, fought off a German police patrol; Cahn was arrested and became the first person executed by firing squad in the occupied Netherlands; the raids of 22 and 23 February followed, and then the February Strike. The plaque (unveiled 25 February 1992) is on the front. 4en5mei 1471/amsterdam-plaquette-op-de-gevel-van-de-voormalige-ijssalon-koco ; KW 1895. Status: there. Sensitive. Nice (Amazing is defensible: the strike starts here). New place.

157. **6,716,341 litres: the Heineken kitchen stone**; 52.357981, 4.891327, Stadhouderskade 78; a stone on the brewery records with book-keeper's precision how many litres of food the central works kitchen "south of the IJ" cooked here for the staff of Amsterdam's industries during the occupation. KW 2190. Status: in the Kunstwacht list (undated). Caveat: the brewery is A-list; this is the detail beside it. Find a second source for the kitchen. Okay. Merge into monument 527809 only if the brewery's monument records are used at all (A-LIST.md parks them); otherwise a small place of its own.

### Area 4: Rivierenbuurt

158. **The children's monument and the market for Jews, Gaaspstraat**; 52.344936, 4.907906, Gaaspstraat 8; first Jewish children were banned from this playground, then in November 1941 the occupier turned it into a market "only for Jewish sellers, buyers and visitors"; it closed in mid-August 1943, after the last raid had emptied the neighbourhood. The bronze of four children, two playing and two shut out, is by Truus Menger-Oversteegen, herself a resistance fighter. It is a playground again. 4en5mei 1459/amsterdam-kindermonument ; KW 2318; https://nl.wikipedia.org/wiki/Gaaspstraat . Status: there. Caveat: 4en5mei gives 3 November 1986 as the unveiling, the wiki list 1984. Sensitive. Nice (Amazing is defensible). New place.

159. **Jewish schools 10 and 11, Jekerstraat**; 52.346198, 4.896719, Jekerstraat 84-86; from 1941 Jewish children were only allowed in separate schools; about a thousand went to the two set up in this building, and most were deported; memorial unveiled 18 February 2018. 4en5mei 4085/amsterdam-monument-joodse-scholen-10-en-11 . Status: 2018. Okay. Merge into monument 222228 (Vondelschool, Jekerstraat 84-86).

160. **Anne Frank on the Merwedeplein**; 52.345387, 4.900842, Merwedeplein; Jet Schepp's bronze (unveiled 9 July 2005) shows her with a bag in each hand, looking back at the home at no. 37 she left for the hiding place; her school in the Niersstraat (monument 222227) has Harry Visser's diary mural. 4en5mei 2680/amsterdam-anne-frank-2 ; KW 2471, 2379. Status: there. Well known, but not on the A-list for Zuid. Nice. Merge into monument 222240 (the Hilwis complex, Merwedeplein 1-52).

161. **The memorial window, Maasstraat**; 52.342576, 4.896700, Maasstraat 148; a window (29 September 2021) with the names of the Jewish residents of one housing block, the "Huizen Kemper" (Uiterwaardenstraat 288-316, Maasstraat 148-154, Rooseveltlaan 191-209), a bowl of remembrance stones and a QR code. 4en5mei 4616/amsterdam-herinneringsvenster-aan-de-maasstraat . Status: 2021. Okay. New place.

162. **The liberation plates on the Berlagebrug**; 52.347222, 4.912500, Berlagebrug, west side; two plates of 1945: over this bridge the first Allied soldiers, of the British 49th (West Riding) Reconnaissance Regiment, entered the city on 7 May 1945, followed by the Canadian main force on 8 May. On the bridge tower sits Krop's "Genius van Amsterdam" (1932). 4en5mei 1463/amsterdam-monument-bij-de-berlagebrug ; KW 2450. Status: in the Kunstwacht list. Caveat: the bridge's east end is in Oost; pin the plates. Okay. New place, or merge with 155.

### Area 5: Buitenveldert

163. **Rozenoord: the execution ground and its monument**; 52.328362, 4.895561 (the 2015 monument in the Amstelpark); the execution site itself is at 52.333936, 4.898400 on the Amsteldijk; on nine days between 18 September 1944 and 14 April 1945 the occupier shot about 140 men at the tea house Rozenoord on the Amstel, most of them from the resistance, in reprisals; 100 are known by name. A stone without names was placed in 1946, the present memorial circle in 1973. Since 1 May 2015 every victim has "a place of his own" in a larger monument by Ram Katzir just inside the Amstelpark; the 4 May gathering is held there. https://nl.wikipedia.org/wiki/Fusilladeplaats_Rozenoord ; 4en5mei 4543/amsterdam-monument-rozenoord and 1466/amsterdam-fusilladeplaats-rozenoord ; KW 2512, 2346. Status: 2015 monument there. Caveat: the form of the 2015 monument (I believe a field of chairs, one per victim) is not in the texts I read: confirm before writing. Sensitive. **Amazing**. New place (the Amstelpark is monument 200968; this deserves its own place).

164. **Monument for the hidden child and the protector**; 52.325137, 4.887515, Van Boshuizenstraat at Herlaer; a bronze man with a suitcase takes a small girl under his arm (unveiled 11 May 2000); the sculptor Naomi Elburg (1943-2007) was a hidden child herself. 4en5mei 74/amsterdam-monument-voor-het-ondergedoken-kind-en-beschermer ; KW 2364. Status: there. Okay. New place.

165. **Seats for memory: Jewish forced labour at the Bos**; 52.330761, 4.842752, Koenenkade 24, north of the Bosbaan lock; concrete forms that are seats and not quite seats (Tim Mathijsen, summer 2021), shaped after the bridges that Jewish men were made to work on around the marina De Koenen; made for the exhibition "Tewerkgesteld in het Amsterdamse Bos". KW 1157. Status: 2021; made for an exhibition, so `check: Still there?`. Caveat: at the edge of the Bos, pin in borough Zuid. Okay. New place.

### Area 6: Zuidas and Prinses Irenebuurt

166. **Kwibuka monument**; 52.344917, 4.880703, Beatrixpark, near the entrance at the Diepenbrockstraat; the first memorial in the Netherlands for the 1994 genocide against the Tutsi in Rwanda, asked for by the survivors' organisation Ibuka-Nederland and the embassy in 2021 and unveiled on 19 April 2023. https://nl.wikipedia.org/wiki/Kwibukamonument . Status: 2023. Memory beyond the Second World War, in a park where nobody expects it. Nice. New place (the park is monument 200535).

---

## Look for lines

Sculptures and plaques with no story of their own, with the place they belong to.

| What | Where | Belongs to |
|---|---|---|
| Rijksverzekeringsbank guardians: Krop's "protector of social legislation" and Wezelaar's "protectress" (commissioned 1940, placed 1954) (KW 1989, 1990) | Apollolaan 15 | monument 527828 (Apollohuis) |
| Arcade capitals with the portraits of aldermen Wibaut and Keppler and three architects, and the four seasons (Kaas, Rädecker, Vos) (KW 2187, 2188, 2212, 2483) | Minervalaan at the Gerrit van der Veenstraat | monuments 527779 to 527782 |
| Krop's two bronze tower figures and Paul Koning's "De Denker"; Wezelaar's mother and child (1939) in the front garden (KW 2215, 2216, 2484) | Gerrit van der Veenstraat 99 | item 151 / monument 527773 |
| Obelisk for the poet Adama van Scheltema (Tjipke Visser, 1933) (KW 1903) | Adama van Scheltemaplein | item 151 |
| Jaap Kaas's corner stones "Centaur" and "Rubens" (the sculptor led the Jewish applied-arts school the occupier set up, and went into hiding in 1943) (KW 2183, 2184) | Rubensstraat | item 151 |
| Memorial for Maria Montessori (Gerarda Rueter, 1954) (KW 1992) | Corellistraat 1 | monument 222129 (Montessori school) |
| Erasmus (Krop), the fox fountain (Richters) and the kneeling man for the school's war dead (Hans Reicher, 1951) (KW 2225, 2226, 2227; 4en5mei 1460) | Messchaertstraat 1 | monument 527830 (Vossius Gymnasium) |
| Monument Henri Viotta (Krop, 1948); memorial for the cardiologist Dirk Durrer (Lucien den Arend, 1986); "De rustende atleet" (Havermans, 1941, placed 1951); "Maja" (Werner, 1930) | Richard Wagnerstraat; Minervaplein; Minervalaan; Apollolaan | item 112 or 117 |
| Kinderbrug children with squirrels and rabbits (Krop, 1929-1931) (KW 2197) | Muzenplein | monument 527786 |
| Polo player and rider (Anton Rädecker, 1930) (KW 1986) | Van Tuyll van Serooskerkenplein | item 107 |
| Ruud-Jan Kokke's one-kilometre fence (2008); memorial for Fanny Blankers-Koen (OSM) | Olympiaplein | item 154 or 106 |
| Ram Katzir's "De onbekende verliezer" (2006), two reliefs of worn-out runners added beside Kees Smout's fresh marathon men | Marathonweg at the Herculesstraat | a Stadionbuurt housing monument, or item 107 |
| Jan Meefout's "Land, water, licht" (1957-1958) | IJsbaanpad 50, the lock | item 109 |
| Citroën building relief (Bram Roth, 1962) | Stadionplein 22 | monument 532200 |
| Freedom tree kerb of 1947 and Beijerman's animal fountain (KW 1899, 1898; 4en5mei 1436) | Harmoniehof | monument 527822 |
| Emil van den Bossche's figures along the full height of a drainpipe (KW 2263) | Jan Luijkenstraat 49 | the monument at that address, if listed |
| Bust of P.C. Hooft (Sieger, 1947) | Stadhouderskade at the Jan Luijkenstraat | a Museumkwartier place nearby |
| Harry op de Laak's stone mosaic (1967) | Banstraat 29 (school) | a Banstraat or Banplein place |
| "Het kompas", Hünd's mosaic round the little house (2006) (KW 2505) | Marie Heinekenplein | item 102 (other works by Hünd) or a De Pijp place |
| Bust of Carel Willink by his widow Sylvia (2000) (KW 1967) | Carel Willinkplantsoen | a place on the Ruysdaelkade side |
| Thom Puckey's square of book stacks that squeeze out water (2004), after Paradjanov (KW 2233) | Vredeskerkplein | the Vredeskerk monument, if listed |
| Govert Heikoop's untitled work (about 1985) | Tolstraat, by Cinetol | item 122 |
| Rädecker's "Mensfiguur en Roofvogel", the Tellegen and Van Buuren monuments (Kramer), Sieger's Wibaut (1951) | Dageraad blocks, Coöperatiehof, Henriëtte Ronnerplein | the Dageraad monuments (527804 and others) |
| Krop's wooden door panels, relief tiles and "Menselijke energie" and "De geboorte van de daad" (replicas 2005); Peter Alma's and Joop Sjollema's wall paintings inside | Berlage Lyceum, P.L. Takstraat 33-34 | the school's monument |
| "Huis met de kabouters" gnomes (KW 1946) | Ceintuurbaan 251-255 | monument 851 |
| Plaque for the Jewish pupils and teachers of the Herman Elteschool (13 March 2012) (4en5mei 3711) | Van Ostadestraat 203 | item 156, or a nearby De Pijp place |
| Herbert Fiedler's only sgraffiti (1952) and Hans van Norden's "Folklore"; Berlage portrait stone | Meerhuizenplein 4 (indoors) | monument 222226 |
| Georg Ruijter's fresco (1956) and "Dansende meisjes" | Lekstraat 35-37 (indoors) | monument 222229 |
| "De Fakkeldrager" and Krop's reading boy (4en5mei 1462; KW 2385) | Dintelstraat 15 | monument 526710 |
| Plaque for Gerrit van der Veen at his studio; the liberation linden planted by the street on 5 May 1945 (4en5mei 1455, 479; KW 2421, 2448) | Zomerdijkstraat 22; Kinderdijkstraat 48 | monument 335836 (the Zomerdijkstraat studio flats) |
| W.C. Brouwer's ceramic "harvesting farmer" and "gull" (1927); 24 façade stones of the housing association | Lekstraat; Waalstraat | item 158 or a Rijnbuurt housing monument |
| Jeroen Werner's "Vlucht van een kaketoe" (2004), a cockatoo in flight after Muybridge, on bridge 446 | President Kennedylaan | item 129 |
| Volten's "4 columns stainless steel under 45 degrees" (1972) | Amsteldijk 166 (Rivierstaete) | a Rivierstaete place, if Scout C proposes one |
| Nic Jonk's "Nereus" at the rowing club | Amsteldijk 130 | monument 222217 |
| "De eeuwige vrouw" on Hildo Krop's own grave (made for the Dutch pavilion in Paris, 1925); the statue on the grave of Manfred Langer; the "Vadermonument" (KW 2482; OSM) | Zorgvlied, Amsteldijk 273 | monument 530057 (Zorgvlied) |
| Rembrandt drawing (Wezelaar, 1969) | Amsteldijk, by the mill | monument 685 (Riekermolen) |
| Charles Karsten's "Kletsmuurtjes" (1963), walls and benches to chat at | De Cuserstraat 3 | monument 532195 |
| Kees Smout's Augustine with an eagle (after the mystic Hadewijch) and Andriessen's two stones (KW 2397, 2396) | Amstelveenseweg 965 | monument 200988 (Augustinuskerk) |
| Volten's steel sculpture (1964) | Van Boshuizenstraat 652 | monument 222221 (Pinksterkerk) |
| Flora (Carasso, 1942, from the Zuiderpark), the penguins (Trapman), the mermaid fountain (Braat), "Future Past Glory" for the park's designer Ko Mulder (2018-2019) | Beatrixpark | monument 200535 |
| "Kennisoverdracht" (Van der Burgt, 1965), moved for the Zuidas works after an advice of 2021 | Beatrixpark, by the St. Nicolaaslyceum | monument 200535 |
| Krop's "Muze" and "Ode aan Berlage" (1942, 1957) | bridge 415, Parnassusweg | item 117 |
| Leo de Vries's "Staande figuren" (1956) | Prinses Irenestraat | item 139 |
| The VU's "wokkel" (Barbara Nanning, 1992), the kinetic object and the stitch at VUmc; moves approved in 2024 | De Boelelaan | Scout C's VU campus place |
| Memorial for the Jewish members of the Concertgebouw orchestra dismissed in 1941 (16 October 2020) (4en5mei 4341) | Concertgebouwplein 10 | A-list building: a line in a nearby place at most |

## Food and drink, borderline

None from these sweeps. IJssalon Koco (156) is a memorial at a former ice-cream parlour, not a place to eat.

## A-list candidates

- **Museumplein's Legacy Art Court** (ground painting "They Tried to Bury Us, but They Didn't Know We Were Seeds", Munir de Vries, July 2026; KW 7483): on the A-list square and brand new; left out. A Look for line if 147 is picked.
- **Rijksmuseum garden** (Carel Visser's "Signaal 1 en 2", there since 2024; the Noguchi and other loans; Mercurius): part of the A-list museum. A-LIST.md already allows the garden of building fragments as a possible place; that is Scout B or C's call.
- **Stedelijk Museum** (the eight architects and painters on the façade, Karel Appel's wall paintings, Serra's "Sight Point"): A-list.
- **Anne Frank's Merwedeplein** (160): not on the list today. It is on many visitors' routes, so the user may want to rule on it.

## Checked and dropped

| What | Why |
|---|---|
| Vondelpark sculptures in the Zuid part of the park (Vondel, Picasso's "Figure découpée", Mama Baranka, Teun de Jager, Kosmos, Cascade, the music dome, the fountain, the gates; 18 Kunstwacht records) | The park is one place on the map already. See "Leads". |
| About 95 Kunstwacht records of façade stones, keystones and reliefs on Amsterdam School housing (Vos, Rädecker, Kaas, Werner, IJzerdraat, Hassoldt, Schultsz, Brouwer and unnamed) | Building ornament: belongs to the monument texts, no story of their own. |
| Kastelenstraat bronzes: "Gewichtheffer" (De Monchy), "Waterbuffels" (Blaisse), "Rustende vrouw" (Meefout), all about 1970-1975 | Shopping-street sculpture without a story. Would be a Look for line if a Kastelenstraat place appears. |
| Buitenveldert abstract works: "3-delig rotonde beeld", "Staalplastiek" (Van Lamsweerde), "Golvende plaat", "Metalen kolom Rooswijck", "Golf", "Vleugelvorm", "Mens in beweging", "Boom" (Warffemius), "Fauteuil" (Dora Dolz) | No story found. |
| Private villa art in Buitenveldert: glass sculptures at Pekkendam 9 and 11, the door window at Cannenburg 45, Van Soest's concrete relief at Limburghof 4, mosaics at Bongart 11 and Aldengoor 4 | On private homes; nothing beyond the register's art-historical note. |
| Indoor works: De Goede Herder windows (Jaap and Annet Min), Andrieskerk wall painting (Ogilvie), Vreugdehof courtyard fountain and hippos, "Accolade", Sjollema's hall painting at the Gerrit van der Veen College, Groenestein's "five continents" at the St. Ignatius Gymnasium | Not open to passers-by. |
| VU works: Haanstra's and Hendriks's mosaics, Snoeck's "Luisteren", "Hovaardij" (Veneman), "Grieks tempeltje", "Goede verzorging van een zwerfsteen", "Opgelichte stoeptegels" (removed 2016) | Campus art; some being moved (advice 2024). Left to Scout C's campus place. |
| Amstelpark small works: "Stilte 2", "Madame Anna", "Familie", "Vrouwenkop", "Watervang", the Doric columns, the water disc, N.A.P. pole, bollards, "Pacific" (Nic Jonk, from the Marie Heinekenplein in 2016) | Park furniture and Floriade leftovers: Scout C's park place. |
| "Zitplastiek" aside, the Amsterdamse Bos works ("Birth of change", "Verwantschappen") | In Amstelveen. |
| "Baubles parade", Beatrixpark | Removed in 2022 (Kunstwacht). |
| "Dakterras met bubbelbad" (Lily van der Stokker), Valeriusstraat | Temporary, 2021-2022. |
| "Houten Negerin", Emmaplein | Gone (wiki list); nothing left to see. |
| "Drijvend plastiek" (Strobos, 1976), Zuider Amstelkanaal | Status unknown, no story. |
| Hans van de Bovenkamp's three steel works on the Mahlerplein (ArtZuid 2017, advice 2019); the three ABN AMRO collection works (advice 2025); "Faraday's Throne" in the WTC toilets (advice 2024) | Could not confirm they are in place. See "Leads". |
| Street Art Cities markers: 5 removed ("Wake me up when I'm famous", Frans Halsstraat, among them), 9 small or untitled pieces | Removed or slight. |
| "Nachtwacht" (Lisa Couwenbergh, 2008), the Albert Cuyp market gate (2016-2018), Adele Renault's blue heron (2018), "Zuilen" on the Gerard Douplein, "In 't blauw", "Passer", "Timpanen", the sports centre works | De Pijp square art without a story; the gate and the heron are on the A-list market. |
| Piet Keizer mural (Kamp Seedorf, 2019, Van Baerlestraat 96), "Campert op de gevel" (2017, Van Miereveldstraat 1), "Kat in kattenbak" (2023, Pieter Baststraat 19), Rimon Guimaraes's mural (2012, Havenstraat) | Only in the wiki list; current state not confirmed. See "Leads". |
| Plaque and memorial cobble for Alfred Wiener (wiki list: 29 December 2023) | Could not locate or confirm; stolpersteine for the family were laid at Jan van Eijckstraat 14-16 on 29 January 2024 (tracesofwar). See "Leads". |
| War memorials indoors: Het Amsterdams Lyceum (3471), Montessori Lyceum (3600), Willem de Zwijgerkerk (4195), the PTT window on the Pieter de Hoochstraat (1437), the VU (1493), five in the ABN AMRO head office (1508, 3084, 3085, 3086 and one double) | Not visible to visitors. The ABN AMRO set (three banks' memorials brought to one lobby) could be one line in a Zuidas place. |
| AFC memorial, De Boelelaan 50 (1489) | On a football club's ground; names six members and one killed in the Indies in 1947. Okay at most; say if wanted. |
| Anne Frankschool as a memorial (1461) | Folded into 160. |
| "Hongerwinter" (1603) | In Centrum; the search returned it without coordinates. |
| Gedenkteken 1940-1945 on the Amsteldijk (KW 2346) | Same thing as the execution site in 163. |

## Leads for other scouts

- **Scout B (hidden history):** the tablet "66 van Egters" by Peter Muller (OSM, 52.349775, 4.906995, Jozef Israëlskade side of the Diamantbuurt): Gerard Reve's "De Avonden" at the address of his parents' flat. The Lekstraat synagogue (monument 526707). The horse-and-milkman Rivierenbuurt of item 126. The dairy on the Eerste Jan Steenstraat (item 121). The Maison Descartes (item 104).
- **Scout B or C:** Zorgvlied's graves (Krop, Manfred Langer of the iT club); the Alfred Wiener plaque and the Jewish Central Information Office he ran in Amsterdam from 1933 (Jan van Eijckstraat area); the Expositur of the Jewish Council, which sat on the same square as the Zentralstelle.
- **Scout C (modern and contested):** the Zuidasdok works against the Beatrixpark (items 141, 143 and "Kennisoverdracht" have all been or may be moved); Studio Job's entrance to Q Residences (2022, Buitenveldertselaan); the Liander gas station on the A.J. Ernststraat (2016); Steven Aalders's painted car park roof at Stibbe (2015); "Faraday's Throne", the WTC toilets as an art installation (advice 2024); the seven molensteen stones and the rest of the Martin Luther Kingpark; the Floriade leftovers named in item 136 and in the dropped table.
- **Existing place "Vondelpark" (West round):** Picasso's "Figure découpée" (1965, his gift for the park's centenary), "Mama Baranka" (Nelson Carrilho, 1984, for Kerwin Duinmeijer; Carrilho died in 2026 according to a Stadscuratorium notice) and item 148 would be worth Look for lines there, if they are not in the text yet.
- **Route ideas (parked):** Euterpestraat to the Apollolaan (151, 153, 152, 155, 112, 113); Rivierenbuurt memory (158, 127, 163 by bike, 160, 126, 125, 159); the "Ommetje Zuidas" (146, 144, 145, 141, 142, 143, 166).

## Counts

By area and rank (A = Amazing, N = Nice, O = Okay):

| Area | Sweep 2 | Sweep 3 | Total | A | N | O |
|---|---|---|---|---|---|---|
| 1 Museumkwartier, Willemspark | 4 | 4 | 8 | 1 | 3 | 4 |
| 2 Apollo, Stadion, Schinkel, Hoofddorpplein | 13 | 5 | 18 | 0 | 10 | 8 |
| 3 De Pijp | 7 | 2 | 9 | 0 | 3 | 6 |
| 4 Rivierenbuurt (with the Europaplein, item 132) | 8 | 5 | 13 | 0 | 6 | 7 |
| 5 Buitenveldert | 4 | 3 | 7 | 1 | 1 | 5 |
| 6 Zuidas, Prinses Irenebuurt | 10 | 1 | 11 | 0 | 8 | 3 |
| **Total** | **46** | **20** | **66** | **2** | **31** | **33** |
