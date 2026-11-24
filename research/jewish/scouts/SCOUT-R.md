# Scout R: rest of the city (Jewish Heritage map)

Slice R of the Jewish Heritage scouting round (24 Nov 2026). It covers:

- Oost: Transvaalbuurt, Indische Buurt, Watergraafsmeer, Zeeburg.
- Zuid: Rivierenbuurt, Apollobuurt, De Pijp, Oud-Zuid, Buitenveldert.
- West, Noord, Nieuw-West, Zuidoost and Weesp.
- Candidates just outside the municipality, listed separately.

Slice C has Centrum and the Plantage. Slice D has the documents, the routes and the datasets.
Nothing was written live. Ids are pool ids from `research/jewish/INVENTORY.json` or the
full pool export.

How it was done:

- The pool export (2,262 places) and the texts of the slice's INVENTORY entries were read.
- About 120 joodsamsterdam.nl pages were read, plus both of its Google My Maps as KML:
  1,139 and 62 placemarks, filtered to the city outside Centrum.
- The 4en5mei.nl database was searched for the "Vervolgden" group: 97 Amsterdam and Weesp
  records, plus about 130 other Amsterdam records. Detail pages were fetched slowly.
- Ons Amsterdam was read in the browser for one article only.
- Pins come from 4en5mei detail pages or from PDOK address points (BAG). Where a pin comes
  from the joodsamsterdam map or tracesofwar, it is flagged "check".
- joodsamsterdam.nl is CC BY-NC: its facts are cited here and none of its text is copied.

---

## 1. New places (not in INVENTORY)

Sixteen candidates in the city:

| Area | Count | Candidates |
|---|---|---|
| Oost | 5 | R-01 to R-04, R-10 |
| Zuid | 9 | R-05 to R-07, R-09, R-11 to R-15 |
| West | 1 | R-08 |
| Noord | 1 | R-16 |
| Weesp, Nieuw-West, Zuidoost | 0 | (Weesp gets enrichment, section 3) |

By theme:

| Theme | Count |
|---|---|
| Synagogues and shuls | 8 |
| Schools | 2 |
| Care | 1 |
| Memorials | 5 |

Four more candidates lie outside the municipality (O-01 to O-04).

### A. Synagogues and shuls

**R-01 Synagoge Oost: the Amsterdam School synagogue that left a gap (and its postwar successor)**

- **Hook:** the only Amsterdam School synagogue anywhere stood here, turned 45 degrees to
  face Jerusalem. It was demolished in 1962. Its windows went to Israel.
- **Why it belongs:**
  - Jacob S. Baars designed it for the NIHS, sited between the religious Watergraafsmeer and
    the "red", largely secular Transvaalbuurt. It was consecrated on 6 Sept 1928.
  - The building had a 25 m tower, Hebrew letters on the façade and stained glass by Leo
    Pinkhof, considered his most monumental work. Pinkhof was murdered in 1943.
  - Rabbi Meijer de Hond preached here on Saturday 19 June 1943. The next day came the great
    raid on Zuid and Oost, and he was gassed in Sobibor on 23 July.
  - The building was empty and looted after June 1943, and demolished in 1962.
  - The postwar community moved round the corner to Linnaeusstraat 107 / Oetewalerpad
    (consecrated 1956, closed 1995 for lack of a minyan). That building stands and is now a
    copy shop.
- **Pin:**
  - 52.357071, 4.927469: Linnaeusstraat 119, the corner of the Polderweg where the synagogue
    stood (PDOK).
  - Alternative 52.358308, 4.926737: Linnaeusstraat 107, the surviving successor.
- **Sources:**
  - Ons Amsterdam, Hansje Galesloot, "Het gat dat Synagoge Oost naliet" (2007; read in the
    browser).
  - joodsamsterdam.nl /synagoge-linneausstraat/ and /synagoge-oetewalerpad/.
  - Geheugen van Oost (geheugenvanoost.nl) stories 10669 and 10935.
  - EN: none found beyond reliwiki's NL entry. Use JCK's general history for context.
- **Status:**
  - The 1928 synagogue is gone: `status: Gone`. It passes the high bar as a unique building
    with a documented gap that residents still mourn.
  - The 1956 shul building stands.
- **Caveats:**
  - Pin the site and tell both buildings in one text.
  - Do not name the current shop, beyond "now a copy shop".
- **Rank:** Nice.

**R-02 The Blasiussjoel, Swammerdamstraat 70**

- **Hook:** a corner shop bricked up in 1907 to become the prayer house of Jews who had fled
  the Russian pogroms.
- **Why it belongs:**
  - It was the Kehilas Ja'akow society's East-European rite shul (society founded
    5 Jan 1890), with a study room ("lernen") beside it. It had 51 paid seats in 1908.
  - It was used 1908-1942 and again 1945-1967, when the Russensjoel's members joined.
  - The Verbond van Midden- en Oost-Europese Joden was founded here.
  - It is the clearest trace of East-European Jews in Amsterdam outside Centrum.
- **Pin:** 52.356519, 4.908334: Swammerdamstraat 70, the corner of the Blasiusstraat (PDOK).
- **Sources:**
  - Amsterdam Cultuur-Historische Vereniging, amsterdamhv.nl/wiki/swammerdamstraat-70.html.
  - joodsamsterdam.nl (synagogue index, Swammerdamstraat).
  - Geheugen van Oost.
  - EN: none found.
- **Status:** unclear whether the 1907 building survives. The ACHV page says "stond" (stood).
  Check on Street View or in the BAG year of construction.
- **Caveats:** a garden synagogue of Ahabad Chesed stood nearby, behind Blasiusstraat 46
  (Querido's house). It could be a line in the same text.
  - Alternative: fold all of this into pool place `akgr0t9mptjy36uevb9azrn2` (Swammerdambuurt)
    as enrichment.
- **Rank:** Nice if the building stands, otherwise enrichment only.

**R-03 Be'er Majjim Chajjim, Linnaeusparkweg 18: the Watergraafsmeer's stopgap shul**

- **Hook:** before Synagoge Oost was built, the Meer prayed in a bought house with a sukkah
  in the back garden.
- **Why it belongs:**
  - A shul at Linnaeusparkweg 1 was consecrated on 27 Jan 1910 and soon proved too small.
  - The association moved to no. 18 in 1915 and bought the house in 1920.
  - Rabbi Coppenhagen put up a sukkah behind it in Oct 1922.
  - It was succeeded by R-01 in 1928 and the house was sold in 1929.
  - The same street had a kosher bakery (no. 2, from about 1918) and the NZB secretariat (1912).
- **Pin:** 52.355531, 4.931463: Linnaeusparkweg 18 (PDOK).
- **Sources:**
  - joodsamsterdam.nl /linneausparkweg/.
  - Synagogue map placemark "Be'er Majjim Chajjim".
  - Second source needed: Delpher, Centraal Blad 1923.
- **Status:** the house stands. It is a private home today, so no residents are to be named.
- **Caveats:** this is a small story. It could be a "Look for" line in R-01 instead.
- **Rank:** Okay.

**R-04 Rechouwous, the Indische Buurt's synagogue society**

- **Hook:** about 600 Jewish families lived in the Indische Buurt in 1928. Their shul moved
  three times in eleven years, then was shut on 10 May 1940.
- **Why it belongs:**
  - It is the only organised Jewish life in the Indische Buurt.
  - The society was founded on 8 Nov 1925. Its prayer room moved from Molukkenstraat 89
    (1925) to Insulindeweg 169 (1931) and to Javastraat 196 (1936).
  - A neighbourhood history sign was unveiled at the site.
- **Pin:** 52.362637, 4.939771: Molukkenstraat 89 (PDOK).
  - Check which of the three addresses the sign stands at. A YouTube video of the unveiling
    shows it by a supermarket.
- **Sources:**
  - joodsamsterdam.nl (Rechouwous; two placemarks).
  - Geheugen van Oost 63016 and 105844.
  - joodsmonument.nl 416317 and 416318.
  - Selma Leydesdorff, *Wij hebben als mens geleefd* (1987), for the neighbourhood.
- **Status:** the buildings are probably gone or rebuilt. The sign is the object.
- **Caveats:** facts are thin, and two sources agree only on the dates. Confirm where the sign
  stands before pinning.
- **Rank:** Okay.

**R-05 Waalstraat 1: Harry Elte's lilac shul for the Rivierenbuurt**

- **Hook:** a ground-floor chewre-sjoel with red benches, green runners and a De Stijl
  skylight. It served the new quarter until the Lekstraat synagogue opened.
- **Why it belongs:**
  - It was the first synagogue of the Rivierenbuurt, where 17,000 Jews would live.
  - Benei Teimon consecrated it on 14 Feb 1926, in a building by Harry Elte (also architect of
    the Obrechtsjoel). It closed in 1937.
  - When it overflowed, services moved temporarily to the Coöperatiehof hall (1931-1939),
    where German refugees also held services in 1936. See the enrichment of
    `bo7jjgf2y6oruzkqmo216lsa`.
- **Pin:** 52.348082, 4.899731: the corner of the Waalstraat and the Amstelkade
  (joodsamsterdam map; PDOK gives Waalstraat 2 at 52.348080, 4.899722).
- **Sources:**
  - joodsamsterdam.nl /synagoge-waalstraat/ (via the synagogue index).
  - Synagogue map placemark "Waalstraat 1".
  - Second source needed: NIW Feb 1926 on Delpher.
- **Status:** the corner building stands. Its current use was not checked.
- **Rank:** Nice. It pairs well with `baktmd71by5dx5i3uikjobb9` (Lekstraat) in a Rivierenbuurt
  route.

**R-06 De Lairessestraat 145: the Liberal community's upstairs synagogue**

- **Hook:** for almost ten years the Liberal Jews of Amsterdam prayed one floor up, above an
  ordinary Oud-Zuid street.
- **Why it belongs:**
  - It is the link between the prewar Liberal shul (Tolstraat, see the Cinétol enrichment)
    and the Soetendorpstraat synagogue of 1966, pool place `nrgi6zgog3xjlyaryea20c1r`.
  - It was consecrated in 1957 under rabbi Jacob Soetendorp, during whose time membership grew
    from 50 to 612 families.
  - Later the building housed Joods Maatschappelijk Werk, which has since moved to the Van
    Boshuizenstraat.
- **Pin:** 52.352147, 4.867020: De Lairessestraat 145 (PDOK, 145D).
- **Sources:**
  - joodsamsterdam.nl /synagoge-de-lairessestraat-145/.
  - LJG Amsterdam history page (ljg.nl), to check.
- **Status:** the building stands. Its use after JMW was not checked.
- **Rank:** Okay.

**R-07 Kastelenstraat, Buitenveldert's Jewish high street**

- **Hook:** the postwar centre of Jewish Amsterdam in one street: a care home with its own
  synagogue, a second shul, and a kosher bakery.
- **Why it belongs:**
  - After the war Jewish life regrouped in Buitenveldert and Amstelveen. Today's community is
    on this map's brief.
  - Beth Shalom is at no. 80: a Jewish care home with a synagogue, first pile 1989, open
    from 1991.
  - The Beth Simcha shul is at no. 84.
  - Bakery Laromme is at no. 69. It is one of the few kosher bread bakers left since Theeboom
    closed in 2008.
  - Mouwes, the kosher deli, was at no. 261 and announced a move to no. 64 as "David & Mouwes".
  - Slagerij Marcus (111a) went bankrupt in March 2024 (AD, 19 Mar 2024).
- **Pin:** 52.326206, 4.881009: Kastelenstraat 80, Beth Shalom (PDOK).
- **Sources:**
  - joodsamsterdam.nl /kastelenstraat/, /laromme/, /mouwes/, /slagerij-marcus/.
  - mouwes.nl.
  - AD, 19 Mar 2024 (Marcus).
  - Pool place `ujj06bjj5opk42ye8zh7rc4r` already mentions the kosher shops.
- **Status:** active, but shops change fast. Check Mouwes's current address and whether Laromme
  still trades: joodsamsterdam notes its website disappeared in 2021.
- **Caveats:** the Kastelenstraat is a working street. Write about the institutions, not
  customers or residents.
- **Rank:** Nice.

**R-08 Sjoel West, Willem Schoutenstraat 8**

- **Hook:** a small orthodox shul run by rota, which in 2004 started a Jewish-Moroccan football
  tournament to calm the neighbourhood.
- **Why it belongs:**
  - It is the only living synagogue in West and Nieuw-West.
  - A GP, Sander Israëls, founded it in 1957 in the Vasco da Gamastraat. In 1997 it moved
    round the corner to Willem Schoutenstraat 8. Its visitors painted and furnished it
    themselves, and architect Piet Cohen designed the interior colours.
  - It holds a service every fortnight and has a large sukkah.
  - Background: the first service in West was held at Bilderdijkstraat 130 on 12 Dec 1922,
    and a prewar shul stood at Da Costakade 132 (1937-1942).
- **Pin:** 52.367641, 4.854651: Willem Schoutenstraat 8 (PDOK).
- **Sources:**
  - NIHS, nihs.nl/synagoges/sjoel-west/.
  - joodsamsterdam.nl /bilderdijkstraat/.
  - Second source needed for the tournament: Parool or AT5, 2004.
- **Status:** active.
- **Caveats:**
  - Ask whether the community wants a public pin. Many shuls keep their address low-key for
    security, although NIHS publishes it.
  - Do not name living members. The Evers family are named by NIHS with "z"l" (deceased).
- **Rank:** Nice.

### B. Schools

**R-09 Herman Elteschool, Van Ostadestraat 203**

- **Hook:** a Jewish primary school in De Pijp that prepared children for the HBS and the
  gymnasium. A black plaque now names it.
- **Why it belongs:**
  - The school belonged to the "Kennis en Godsvrucht" association (which also ran the
    Palacheschool). It moved here from the Nieuwe Achtergracht in 1935.
  - It kept the Jewish holidays and the sabbath, and could carry on as a Jewish school in the
    war.
  - The plaque was unveiled on 13 Mar 2012. It is black stone with a Star of David, reads
    "WIJ WILLEN HEN NIET VERGETEN" and has a line in Hebrew.
  - The building is now the 3e Daltonschool.
- **Pin:** 52.353167, 4.898003: Van Ostadestraat 203 (4en5mei 3711; PDOK agrees).
- **Sources:**
  - 4en5mei.nl monument 3711 ("plaquette Van Ostadestraat").
  - joodsamsterdam.nl /herman-elteschool-van-ostadestraat-203-1935-1943/.
- **Status:** the building stands and is a working school. The plaque is on its wall.
- **Rank:** Nice.

**R-10 Oranje Vrijstaatschool and the President Brandstraat schools (Transvaalbuurt)**

- **Hook:** about 300 Jewish children went to these schools in the war years; 153 of them did
  not come back.
- **Why it belongs:**
  - The occupier designated these schools as Joodse scholen.
  - The President Brandschool (no. 9) and a Joodse school at no. 8 shared one building.
  - The Oranje Vrijstaatschool's successor, De Kraal on the Smitstraat, reportedly keeps owl
    stained-glass windows.
- **Pins (joodsamsterdam map, check):**
  - 52.354563, 4.922293: Oranje Vrijstaatschool.
  - 52.354451, 4.918356: President Brandstraat 8-9.
- **Sources:**
  - joodsamsterdam.nl (scholen-index; map placemarks "Oranje Vrijstaatschool" and "Joodse
    School").
  - The pupil figures come from a joodsamsterdam page and need a second source: the school's
    own 4 May page, or the Joods Monument by address.
- **Status:** the buildings were not checked.
- **Caveats:** this is a lead. Pool place `j6q04lfctc5m6szlch3sw00k` already covers the
  Sparrenweg and Kraaipanstraat schools, so this might be a line there.
- **Rank:** Okay.

### C. Care

**R-11 Centraal Israëlietisch Ziekenhuis (CIZ), Jacob Obrechtstraat 92 (gone)**

- **Hook:** the third Jewish hospital of the city was paid for by about 800 private donors and
  opened in 1916. The occupier emptied it in 1943, and it was demolished in 1980.
- **Why it belongs:**
  - Harry Elte and E.M. Rood designed it, with pavilions and a solarium (1919).
  - The other two Jewish hospitals were the PIZ (Plantage, slice C) and the NIZ (Nieuwe
    Keizersgracht, slice C). This one is the Zuid counterpart.
  - It reopened in 1945 and ran until 1979. The Jellinek clinic bought it and found it could
    not be converted.
- **Pin:** 52.353036, 4.877166: Jacob Obrechtstraat 92, the corner of the Heinzestraat
  (PDOK; the site is now newer housing).
- **Sources:**
  - joodsamsterdam.nl /centraal-israelietische-ziekenverpleging/.
  - Stadsarchief beeldbank BMAB00001000011_019 (1972 photo).
  - NIW, 7 July 1916 (Delpher).
- **Status:** gone: `status: Gone`.
- **Caveats:** borderline for the high bar. Nothing on site recalls it. Better as a "Look for"
  line in the Obrechtsjoel text (`p1jm25uxf3wz02i10z7qe0ai`, 45 m away).
- **Rank:** Okay.

### D. Memorials

**R-12 The Concertgebouw's plaque for its Jewish musicians**

- **Hook:** in April 1941 the Concertgebouw was ordered to dismiss its Jewish orchestra
  members. A year later it signed up the rest for the Kultuurkamer so that they could keep
  playing.
- **Why it belongs:**
  - The plaque, unveiled on 16 Oct 2020, honours 17 dismissed Jewish members of the
    Concertgebouworkest.
  - It names the three who were murdered: Simon Fürth, Samuel Gompertz and Jacques Muller.
  - The pool has no place for the Concertgebouw itself, only `uq27jcks3qokybkiacbq0ivy`
    (Concertgebouwplein houses). This plaque gives the A-list hall its place on this map.
- **Pin:** 52.356343, 4.879249: Concertgebouwplein 10 (4en5mei 4341).
- **Sources:**
  - 4en5mei.nl monument 4341.
  - Concertgebouworkest news, Oct 2020 (EN and NL), to fetch.
- **Status:** in place.
- **Rank:** Nice. The story is strong, but the object is a single plaque.

**R-13 The memory window, Maasstraat 148**

- **Hook:** a window in a Lutheran deaconry building names its 77 Jewish residents, with a bowl
  of memorial pebbles behind the glass.
- **Why it belongs:**
  - The "huizen Kemper" (Uiterwaardenstraat 288-316, Maasstraat 148-154 and Rooseveltlaan
    191-209) were built in 1932 for the Evangelical Lutheran deaconry.
  - 77 of their Jewish residents were deported and murdered.
  - Victor Levie, who also made the Gerard Terborgstraat doorposts (`ehn6sihenec6qn6zeiixc5cf`),
    designed the window. It was unveiled on 29 Sept 2021 and has a QR code.
- **Pin:** 52.342576, 4.896700: Maasstraat 148 (4en5mei 4616; PDOK agrees).
- **Sources:**
  - 4en5mei.nl 4616.
  - wijkkrantzuid.nl "Herinneringsvenster Rivierenbuurt".
  - diaconie.com (Diaconie Amsterdam) herinneringsvenster page.
  - EN: tracesofwar.com 155683.
- **Status:** in place.
- **Rank:** Nice.

**R-14 The Beethovenstraat: refugees' street and raid stone**

- **Hook:** the German Jewish refugees' high street of the 1930s, remembered by an iron stone
  with a children's rhyme about the trucks.
- **Why it belongs:**
  - From 1933 many Jews who had fled Germany settled around the Beethovenstraat.
  - Hergo, the butcher's in the street today, was founded in 1935 by Siegfried Hergershausen,
    a refugee from Duisburg. It had a kosher restaurant room, and two of his sons were murdered.
  - Lunchroom Delicia at no. 55 was a Jewish venue. Its owner, Leopold Pollack, fed the people
    held in the Hollandsche Schouwburg.
  - Café de Paris at no. 9 was a meeting place for German Jews.
  - The stone "Razzia in de Beethovenstraat" was unveiled on 24 May 2011. It is iron and
    carries a rhyme beginning "Met geweld kwamen er vrachtauto's aan".
- **Pin:** 52.349618, 4.878229: the stone at Corellistraat 27 by the Beethovenstraat
  (4en5mei 4570).
- **Sources:**
  - 4en5mei.nl 4570.
  - joodsamsterdam.nl /beethovenstraat/ and /hergo/.
  - Second source for Delicia and Pollack needed (Parool archive or the Joods Monument).
- **Status:** the stone is in place, and Hergo trades.
- **Caveats:**
  - Name only the dead or the historical owners.
  - "Hergo has a Jewish origin" is a nice hook, but confirm that the current firm's own
    history agrees.
- **Rank:** Nice. The threshold in R-15 is 150 m away: one text could cover both, with
  R-15b as a "Look for" line.

**R-15 Stumbling thresholds at the Victorieplein and Beethovenstraat tram stops (2025)**

- **Hook:** long brass thresholds at two tram stops say that tens of thousands were deported
  from here, by the city's own trams.
- **Why it belongs:**
  - The GVB and the city laid three Stolperschwellen in January 2025: Artis (pool place
    `ktqm7g4r7suxs6vqvmoho41p`, slice C), Victorieplein (27 Jan) and Beethovenstraat (29 Jan).
  - The Victorieplein text says that on 20 June 1943 thousands were deported "from this
    square" by municipal tram.
  - They are the emblematic Stolpersteine places SCOUT-D asked for.
- **Pins (tracesofwar, check on site):**
  - R-15a, Victorieplein stop on the Rijnstraat: 52.346949, 4.905058.
  - R-15b, Beethovenstraat stop by the Gerrit van der Veenstraat: 52.348779, 4.877200.
- **Sources:**
  - over.gvb.nl news item on the Artis Stolperschwelle (names all three).
  - tracesofwar.nl 163489 and 158078.
  - De Vrijdagavond, 30 Jan 2025.
  - Nederlands Auschwitz Comité (auschwitz.nl/nl/actueel/stolperschwelle).
- **Status:** in place.
- **Caveats:** follow SCOUT-D's choice between two options:
  - one place "Three stumbling thresholds" pinned at Artis, with these as "Look for" lines;
  - separate pins. R-15a then joins the Rivierenbuurt route at its end.
- **Rank:** Nice.

**R-16 Zuideinde 443: refugees in the polder village (Noord)**

- **Hook:** on a dike in Noord's countryside, about 75 Jews who had fled Germany, Poland and
  Eastern Europe in the 1930s found shelter. Thirty of them lived in this one house.
- **Why it belongs:**
  - It is a rural and refugee story far from the usual Jewish quarters.
  - 46 of the 75 survived.
  - Fajga Rozenszajn and her son Leo (born 1935) hid here. They were caught, and Leo was
    murdered in Auschwitz on 7 July 1944.
  - The plaque was unveiled on 28 April 2005. It was made by the Werkgroep joodse
    geschiedenis Zaanregio.
- **Pin:** 52.419395, 4.893731: Zuideinde 443 (4en5mei 2673).
  - Check: pool place `pbvwv8giret73zc4vza53q4y` "Zuideinde, Oostzanerwerf" is in INVENTORY
    with hits 1. Its text may touch this, in which case this becomes enrichment.
- **Sources:**
  - 4en5mei.nl 2673.
  - Werkgroep joodse geschiedenis Zaanregio (to find).
  - The Oostzaan local history society.
- **Status:** the plaque is on a private house.
- **Caveats:** the text should speak only of the plaque and the past, not the present
  occupants.
- **Rank:** Nice.

### Outside the municipality (list separately)

**O-01 Beth Haim, Ouderkerk aan de Amstel**

- **Hook:** the Portuguese Jews' cemetery since 1614, about 30,000 graves. Its carved
  tombstones (skeletons, Abraham's sacrifice) are unique in Europe.
- **Pin:** 52.295423, 4.904451 (joodsamsterdam map; check against the gate on the Kerkstraat).
- **Sources:**
  - bethhaim.nl (NL and EN).
  - joodsamsterdam.nl (begraafplaats Ouderkerk).
  - Rijksmonument register.
- **Status:** active, with tours.
- **Rank:** Amazing. It is a must for the map if out-of-city pins are allowed.

**O-02 Jewish cemetery Diemen, Oud Diemerlaan**

- **Hook:** the NIHS cemetery since 1914, with a 1925 railway viaduct running straight across
  it.
- **Why it belongs:**
  - About 28,000 remains were moved here from Zeeburg (`o0mpgfjnaymw9nhjzjwfpbcm`) in 1956.
  - Urns from Westerbork lie in field U.
  - It has a Holocaust monument.
- **Pin:** 52.344306, 4.972773 (joodsamsterdam map; check).
- **Sources:**
  - joodsamsterdam.nl (begraafplaats Diemen).
  - NIHS.
  - 4en5mei "Diemen, holocaustmonument" (id not retrieved).
- **Status:** active, with limited opening hours.
- **Rank:** Nice. It fits the "Greater Amsterdam" plan to add Diemen.

**O-03 Jewish cemetery Muiderberg**

- **Hook:** the largest Jewish cemetery in the Netherlands still in use, from 1642, with more
  than 45,000 graves.
- **Pin:** not set. Take it from 4en5mei 1535 or the BAG at the entrance on the Googweg.
- **Sources:**
  - joodsamsterdam.nl (begraafplaats Muiderberg).
  - NIHS.
  - 4en5mei 1535.
- **Status:** active.
- **Rank:** Nice.

**O-04 Maple Leaf chewing-gum factory, Duivendrecht**

- **Hook:** two Jewish brothers survived the war in hiding and in 1945 started the
  "Maple Leaf" gum factory (Paul van Vlissingenstraat 6). They had grown up in the Jewish
  boys' orphanage.
- **Why it belongs:** it is a postwar revival story in a Greater Amsterdam village.
- **Pin:** not set. The joodsamsterdam map gives 52.334119, 4.921842; check it.
- **Sources:**
  - joodsamsterdam.nl /maple-leaf/ and /ijzerhandel-hollandia/.
  - A second source is needed.
- **Status:** the factory is gone. The building's status was not checked.
- **Rank:** Okay. It is a lead, mainly for a future Duivendrecht round.

Note only: the Liberal cemetery Gan Hasjalom (Hoofddorp) and the Amstelveen synagogues are
real but out of scope for now. The joodsamsterdam pin for Gan Hasjalom (52.317322, 4.88623)
looks wrong.

---

## 2. In the pool, should be on this map

**Include: strong, the Jewish story is the point (hits 5 or more, or the core of the text).**

Oost:

- `j6q04lfctc5m6szlch3sw00k`: Transvaalbuurt memorials, the cluster of the quarter.
- `r2qup2299zn0rnftoerzd2ke`: the Kweekschool, Mauritskade.
- `hsjnps01kl9piv15s4rltgmc`: the former synagogue at Commelinstraat 16.
- `qz4j62540mo4lk7cocz62m2b`: the football clubs' memorials. HEDW, TOG and BPC (BPC Jewish).
- `o0mpgfjnaymw9nhjzjwfpbcm`: Zeeburg cemetery.
- `wk4p0qmppqauucbq8xfuzan5`: Leendert Pop and Pension Verdooner.
- `ydx4jqnflm7eudu2k01edx9b`: Talmud Tora school.
- `q8ws6czm8bi5g5ea9ors4m3a`: Nieuw Uilenburg, built by the Handwerkers Vriendenkring.
- `xb2sedosxh73qbwribypf8l0`: Blasiusstraat 124, the gap left by looting.
- `wzhkdtx50l9ejt8knas2f6ju`: the Tugelaweg text monument.
- `aix9c4sdhsr34gpvyzztvjye`: the Watergraafsmeer memorial trees. They include the Pythagorasstraat tree of 1995 (4en5mei 4527).
- `gc9ntyzcxak22in6xobpfef2`: the Muiderpoort deportation memorial.
- `az70tfshn2sculd3t521tiwc`: Herberg Zeeburg, refugee camp.
- `qv0a05zf47i06yulvlmtq4dd`: Lloyd Hotel, for the 1930s refugees.
- `o8gxdhp39qu7xn1z65x5ov9k`: Wild & Hardebeck curtain factory.

Zuid:

- `p1jm25uxf3wz02i10z7qe0ai`: Obrechtsjoel.
- `fyrq26dywb731m8epd245ien`: Gerard Dou synagogue.
- `baktmd71by5dx5i3uikjobb9`: Lekstraat synagogue.
- `nrgi6zgog3xjlyaryea20c1r`: the Liberal synagogue on the Soetendorpstraat.
- `bbe5wwz0b5h814wov3bygz8d`: Abraham Asscher's house.
- `kdu9k6ekluu7e0rg0bg8320e`: Asscher diamond works.
- `hbumzw6dt2izq8yc3mth5gtf`: Van Moppes diamond works.
- `bgssf6itnvghiactiu6msbul`: the Kindermonument / "market for Jews".
- `x8u6od6w0senquj43mdprgb2`: St Ignatius, site of the Zentralstelle.
- `sskg5ju39ypw3bnodz7yub9v`: Jekerschool, Joodsche scholen 10 and 11 (4en5mei 4085).
- `w5sl1gga2nx52wztqhr6n5o7`: Harry Elte's own house.
- `gy73jsn1kntbnvgiwh1djw2o`: Merwedeplein.
- `ig4qpdxlj1ygfxo7zbg8z5xv`: 6e Montessorischool Anne Frank.
- `y3pj6jkfrss0q5tkpfyaki4u`: the diary bookshop.
- `tppsxewme1azq9zi0zkuqa63`: the Wiener Library's first address.
- `ujj06bjj5opk42ye8zh7rc4r`: the hidden child monument, Buitenveldert.
- `wo9fy8g8d4t37shwuw6mkj4v`: Jewish forced labour at the Zuid edge.
- `lxy93kmbty5tt2nfg7insrt8`: De Kom and Anne Frank's ferry.
- `egatu1m4gzff5z1dhwthzfmv`: IJssalon Koco.
- `klvfehuqt5mj0h0ni3abjhak`: Museumplein 19, the Reich's envoy.
- `ehn6sihenec6qn6zeiixc5cf`: the Gerard Terborgstraat doorposts.
- `jq0s8ifeymh606zfbssnfrdh`: Lotty's bench.
- `c0l0ko0pn1um38r9zrmkeijw`: Michelangelostraat 36, the Hidden Camera.
- `u525cg8gjea0hqc8czovrml4`: Schaduwen, the Olympiaplein raid.
- `c1uq2m4uz459d2orxqi3riiv`: the Jewish children's home climbing sculpture.
- `yl9p4kc5ap3jlsdrpdv52y9m`: Paviljoen Buitenveldert. Check how central the Jewish story is.

West and Nieuw-West:

- `tz8nsaab1ju8t1a9oo56hans`: Centrale Markthal.
- `bxuq5cpmu81qvrd5qe11k478`: Bellamystraat diamond works.
- `vriesk046txvi1nh75d52rbc`: the Dirk van Nimwegen plaque (February Strike).
- `kt9kmqx2x5tzir0bfhk4udu0`: Westerweel's plaque.
- `sxqpoo2v1pcc5jk17c4l2g46`: Horn's strike mural.
- `ri0kga89s3io6jgwwjy9n6i3`: De Antifascist.
- `ksclf0641f6zomw59s0kui96`: the Verzetsheldenbuurt memorial.

Noord:

- `huz5fcy5ooyl9lc1xaxr1iaw`: the Asterdorp gatehouse, the ghetto.
- `tl4hwfe9zu7o3y7dupqhqj7g`: Hollandia-Kattenburg.
- `tvwq28wxsoys2id7mk55m0hf`: Kobra's Anne Frank.

Weesp:

- `pidq899ir2djko9s5glpmh6u`: the former synagogue.
- `c4xruaeu78hpbgc0v72qjeo9`: the cantor's house, an emblematic Stolpersteine place.
- `q9mkgc2azksrz3lirp4fxl1y`: Binnenveer 11.
- `b06lfs8lzyqrbxo3w6frpfc0`: Hoogstraat south, with the Van Bergen family stones.

**Include: medium, a strong Jewish layer in a wider text.**

- `gjmvybkmm6bvqa9jf1zs7izc`: Etty Hillesum's house.
- `iyf1z9pputagozscx82g9iwm`: Marga Minco's house.
- `c713iaaetg58mpsy5i5t1l4z`: Truus Wijsmuller's bust (Kindertransport).
- `cemiwv2z5qoml4p8tkr9rmz0`: Gerhard Badrian.
- `m7pix3x4k327ynqy7gmth898`: the SD school. It also has the 2007 "Monument voor Gedeporteerde Joden" (4en5mei 3595) 9 m away; see the enrichment section.
- `p3mdn6b7ibk2rdoeih7asilw`: De Mirandabad, named after the SDAP alderman Monne de Miranda, murdered in Amersfoort.
- `pjz6wbejfbc7mb01wbtrucmo`: Sarphatipark. Samuel Sarphati was Portuguese-Jewish.
- `gco8i1aim9liznjoexwzmhu8`: Metis Montessori Lyceum, the 43 kinderen (4en5mei 802).
- `crz0d2j6tm1nftgtktcteijp`: Barmat house. Check that the Jewish angle is fair and not a slur echo of the 1920s Barmat scandal.
- `xdzc5ucol31cebcmwwb0byib`: Fré Cohen's plaques.
- `hvnrz1lhs3iadlbq1ixjnd5w`: Dapperbuurt survivors.
- `et5mhsi325mjcwg06moivdvx`: Weduwe met Kind, Weesp.
- `g744ia4ontuvfjralt5ae1bt`: Slijkstraat, Weesp. Add Bakker Gans (section 3).
- `snbv9efmrrjqky7m4jhyi4nu`: Stibbe coat factory.
- `k390de7oegv7qub1h2q6g86g`: De Wolkenkrabber, home of refugees.
- `uvzz9hup48kf6sr5al7qei5f`: Utrechtsebrug, the sabbath chain. This is a gem: "the Jewish community of Amsterdam gave it a sabbath" boundary. Rank it high.
- `kdoeh0jc8e6tzbbcc2htbhl9`: Maria Austria's hiding place.
- `zu2f08b4250wqn0tp4n5cscu`: the Olympia complex. It was the Liberal "Stadionsjoel" from 2007 to 2010, and Kadimah used the grounds.
- `nin5wqx8nkfg5eubvbfa3cqs`: Spinoza Lyceum (the 2026 skip-find of war papers).
- `aiz40qtf5sif1fiqe66sa9sz`: Amsterdams Lyceum, with 4en5mei 3471 at 19 m.
- `yrkgz7axenkcgyn6fliyc086`: the Dintelstraat schools, including the refugee children's classes of 1935-1939.
- `qrztsoso1e5ox1zik2gbxv0g`: De IJsbreker, the Jewish billiards café closed in 1941.
- `ixnb2giip3y4qys3mkb7cj3w`: the cattle market plaque for four Jewish municipal workers.
- `k3x1zgzkcxta2o1bqtlm1m53`: Betondorp. It has the 2015 Joodse Betondorpers boulder (4en5mei 4469), but see the fix in section 3.
- `x6mjorka33jn8ejegtfev0hr`: Friendly Fire manhole covers. The Mosveld cover tells Noord's synagogue; see the fix in section 3.
- `a2m70n2wtjqvcxb3t7d83aip`: Het Sieraad, the star for four Jewish trade-school pupils (4en5mei 3285).
- `f0e9sn9xj7yak1x2xyez1p30`: the Vondelpark mirror, "Sobibór begon in het Vondelpark" (4en5mei 4521).
- `rk8ya1mt07e0zaxfigura4cc`: Villa Protsky (Mannheimer). Okay only.

**Leave out (passing mention only):**

- Oost and Westpoort:
  - `xw3xw3jpz6xesiywua2e1xrc` Anxiety Rabbit
  - `kbxjw0smoo2l5sdx0244lh5i` Berm Bunnies
  - `p12pbafe53o9izc2functznt` Hekkepoort: only as access to Zeeburg
  - `cfpl1jwwcnurv2cxrr0z0ptb` Ringdijk
  - `ga7h57mad0p940verx974tpc` Les Grandes Formes
  - `um99x385qxlqy0n4sz2gbmyf` Catholic island
  - `nojaeehfbxwgyzpva7rjw9r7` KNSM canteen
  - `xbmj1f8gqqbbgz00g98oc14i` Nooit Gedacht
  - `p5ti5g2b3q38p3mzrvghj5qe` Zeeburgerdorp
  - `dccz2puust6ktiq2zrh42sw7` Vrijburcht
  - `ixuqjloszzkvll4kjpkpac27` Glerum's stained glass
  - `u8b2sh40vayfvssc6vaayvp2` Pretoriusstraat gateways
  - `d1sha98ol2go2h3o63yt4sxn` the apartheid monument
  - `nsy1oj9i8cbap5ugoht4c7cp` Het buikschot
- Noord:
  - `q88v3sxeisnxer2n6wqn04id` Durgerdam bandstand
  - `kapjb7pi6elzt22y1hxuc5uk` Durgerdammerdijk
  - `ji2it71qh4wx3dnuzvdrwa27` Noorder IJplas
  - `ckmp6dewtuf9ncdqatzsywwg` Anemoi
  - `pv3xw48tztv6q4ow9l6lvasn` De Wegwijzer
  - `xn6hd2k80skaxcozyj0vzb6t` Lasloods
  - `g1q7aft4qj7tt5me6hyox9d1` Gerben Wagenaar
  - `gto0yxobqmp2gqkwrsetvadz` Bezinningsmonument
  - `d2zbxeyfpjleb1thyaf3x4bo` De Nieuwe Noorder memorials: include only if the Draka monument (4en5mei 4189, group "Vervolgden") proves to name Jewish staff.
  - `pbvwv8giret73zc4vza53q4y` Zuideinde: see R-16.
- Nieuw-West:
  - `en3yd5t9bfp4psn77qx74h6c` Aviodome
  - `p5e3zkomtpk8ca3nr8w75530` 't Landje
  - `c18xu67zkj5nuzc29njideyn` O, Kora
  - `acem2ygga318gs8ds549zscq` Haci Bayram
  - `sz3m0e427jb31k9e9uxwl8yg` Kampschooltje
  - `d1272hlfpdle1t8jjfsy3vml` Kars and Bierman
  - `fmu7d4zq3ktackomktr0jex4` Ru Paré: a resistance figure who hid Jewish children. Possibly include in a "rescuers" route; otherwise leave out.
  - `ywe2j6cb4ilb0gyc47yjsmzr` Sloterweg shop
- West:
  - `fc3vbp423filbhd5vli2jvpz` Freemasons
  - `nhh97s0ywe2a8exnpaxs3cir` Vondelstraat start
  - `te9pzbwga9s9rve9610zkqm1` Triple house
  - `t6fzhbl7zode8aw8b04lutfc` Van Oldenbarnevelt
  - `erpjnnroj30vtdh06hpjegno` Jacoba van Tongeren: a resistance leader. Include only for a resistance route.
  - `azq8kwwdfiouh2qum05uzanp` Kesbeke: kept unless its pickle trade story is Jewish (check)
  - `pnlfmac4n2dezeozwl735h81` Zandpad
  - `wdp2ubzg8ueifabkxmpp2f6j` Gemeentetram HQ: but see R-15, the trams were used for deportation; a line maybe
  - `gzcsnafpitkb1dkulz85w9j4` Geuzenhof
  - `fklj6d2nxigeftxxs1bn022d` Rochdale
  - `r4jmwk82cf1jvy3p93jbutv8` Surinameplein
  - `x45ld1h87beyh23xa66a1wm3` Reinaert mural
  - `zedpvi5346iua7hv47xitlgv` Zimmerhoeve
  - `bes37j9a3538mxwfu13xq5sh` Bellamy Buurtmuseum
  - `qkqstiwd9vbnh5e29bmmhsps` No War
  - `wz0qb8mfimsa1tnguhqs2n3x` Domela Nieuwenhuisplantsoen
- Zuid, most hits-1 to hits-3 villa and street texts:
  - `gtps875cggtigiz5nhtozem1`, `awllm7njt9xr8r48ourtnvi4`, `d4cdn8o24fym38065nuylyax`, `saa1iauvzr8xtuzkvhqc5fro`, `vf4xheqr00r4wwss1iwnxznv`, `unkm524u3n6gxuf67o3qcs0s`, `r6ehkwab8z0v739s97h85a5n`, `u16250xqotu2xbcb72c5lr7m`, `vyp4isq93b5oygbu560l9zl1`, `p5bhc1xr5fk17ukbm3u3buk6`, `lm5r2733oi40wi97n13zruev`, `d609kf5tmfjzbgvjn691jtrt`, `f3vu98u3v1dbpas6qfxjcaxc`, `dtjo0wand7ktma9l12lzy2k1`, `vqweav55rbneax04ojfbgqf7`, `xai7i11s0kxadd6fu5g4jz7x`, `yw4m202pvcw809m5oo6tvvjy`, `evv21bwy96hv1tq8r0ujpchb`, `ceto9wrjhtsi0oqjqxnk6dju`, `ah5lmw1xl9roe8ruvgjmmdrs`, `argb6lhfakxdw60f02zgb9av`, `gc19qs0erbq99irfv0qzdkgu`, `s6tnk8cjh198uexo1hk8du36`, `x5dvv5jo91oupzo9obasptyx`, `f4rj9cwcl1qrcu3pjf67wh59`, `iswopdb0s19g68g6q2kuv71f`, `vaxbujhacrcwivh5so5cjm8c`, `r7gg40p42zkj6xd67clc3mjm`, `mmr4v5oeq80rbifyku3fwk0m`, `sk4dk7lpg4jbymnnac93ryy0`, `kqmjj1si5yz9a80d1eaz4wbv`, `zk338lasaw94pjznsrb06kis`, `gouf6z5rh6i3ujnjodjswpj0` (a resistance execution site, not Jewish), `t3ytw3twczvp63o9z5f2zzwm` (Miep Gies: include instead if an Anne Frank route uses it), `uv1gjfnp94ea3z8sk86hvqz1` (Dufayschool: the pool text has no Jewish mention; check joodsamsterdam /dufayschool/ first)
  - `pvtrdsxg2tp31bdg47xh0bhj` Berlage in the Pijp: see the Tolstraat enrichment.
- Weesp:
  - `ncch75lqmhx7tmzjp1g4g54t` Landlust
  - `y96dw9pnleeqkps4lpb3hu53` Lange Muiderweg farms
  - `u40u8blohb2eqnupdyxx2h9b` Middenstraat: maybe a line on the community-owned houses at nos. 93-97, otherwise out
- Zuidoost: nothing in INVENTORY, and nothing found. Postwar Jewish life did not go there.

---

## 3. Enrichment (pool texts that miss or misstate the Jewish story)

| Id | Place | What to add or fix | Source |
|---|---|---|---|
| `v7j8193dfwx0l45gdhesooqa` | Theosophical temple, Tolstraat (Cinétol) | No Jewish mention. From 1937 to 1942 it was the Liberal Jewish synagogue where the Frank family belonged, before it became cinema Thalia. | joodsamsterdam (synagogue index, Tolstraat); JCK / Anne Frank House pages on the LJG |
| `m7hdd2fg42j3um33fmm4m8am` | 't Tolhuis, Noord | Its upstairs hall was Noord's synagogue from 1923 to 1929. | joodsamsterdam /noord-geschiedenis/; synagogue map placemark "Tolhuis" |
| `x6mjorka33jn8ejegtfev0hr` | Friendly Fire manhole covers | Dates conflict. The pool says the Latherusstraat 2 shul dated from 1936. joodsamsterdam says Sjoloum Wereingoes consecrated its synagogue there on 24 Mar 1929, with the last service on 21 Sep 1941. Check and fix. | joodsamsterdam /synagoge-latherusstraat/; hcan.nl "Putdeksel Latherusstraat" |
| `lluu4vazfdsn8i6ib6i0rvl4` | Mosveld floodlights | Optional: one line pointing to the synagogue across the square. | as above |
| `bo7jjgf2y6oruzkqmo216lsa` | Coöperatiehof | No Jewish mention. See the details below the table. | joodsamsterdam /cooperatiehof/ |
| `pvtrdsxg2tp31bdg47xh0bhj` | Berlage in the Pijp / Tolstraat | Two rooms here served as synagogues: Tolstraat 62 (Samenwerking) in 1926, and De Dageraad's meeting hall at Tolstraat 71 in 1929. | joodsamsterdam /tolstraat/ |
| `akgr0t9mptjy36uevb9azrn2` | Swammerdambuurt | Add the Blasiussjoel at Swammerdamstraat 70 if R-02 is not taken. | amsterdamhv.nl |
| `qyx7t1c30mbr2gkmjsphkdip` | Meerhuizenplein and Borssenburgplein | The Borssenburgschool became Joodsche School 12 in Sept 1941. The Wehrmacht requisitioned it in summer 1942. | joodsamsterdam /borssenburgschool/ |
| `tppsxewme1azq9zi0zkuqa63` | Jan van Eijckstraat 16 | Across the street, the Daltonschool at no. 21 was designated a Joodse school. | joodsamsterdam /scholen-daltonschool-jan-van-eijckstraat-21/ |
| `gy73jsn1kntbnvgiwh1djw2o` | Merwedeplein | Check that it names Hannah Goslar (Anne's friend, a survivor, died 2022) and Ben Ali Libi (the magician Michel Velleman, no. 59, murdered in Sobibor). | joodsamsterdam /hannah-goslar/, /ben-ali-libi-michel-velleman/ |
| `oe2dy0dum0xz8bjylz7sf8w8` | Stadion De Meer | No Jewish mention. See the details below the table. | joodsamsterdam /voetbal-ajax/ and /eddy-hamel/; Anne Frank House EN pages on Eddy Hamel |
| `zigsxso8bog8udba9bw7dddp` | Olympic Stadium | No Jewish mention. See the details below the table. | stolpersteine-amsterdam.com; joodsmonument.nl (gymnasts' team page); 4en5mei 1435 to check |
| `k3x1zgzkcxta2o1bqtlm1m53` | Betondorp | Check the claim that "not many Jews" lived there. joodsamsterdam says there were many Jewish residents, but few were religious. Also fix the address of the 2015 boulder: the Brink (4en5mei 4469), not the Tuinbouwstraat. | joodsamsterdam /betondorp/; 4en5mei 4469 |
| `g744ia4ontuvfjralt5ae1bt` | Slijkstraat, Weesp | Add Bakker Gans. See the details below the table. | joodsamsterdam (Weesp page) |
| `jxvqgeiqwjh9h8gn7ky431wz` and `zl76l8gfrvzvzwvuycrpllf3` (De Hallen) | Mozes Cohen's murals / De Hallen | The 4 Mei Comité Oud-West adopted the murals as the "monument voor Joodse inwoners van Oud-West", for 165 murdered Jewish residents, with a plaque at Hannie Dankbaar Passage 33. The painter Moos Cohen was Jewish, born in Tiel in 1901. | 4en5mei 4483; dehallen-amsterdam.nl/4-mei; joodsamsterdam /mozes-cohen/ |
| `tz8nsaab1ju8t1a9oo56hans` | Centrale Markthal | Add Hildo Krop's relief "Joodse grossiers" at Jan van Galenstraat 14 (1959, restored and unveiled again on 4 May 2024). It is for the Jewish wholesalers who were banned from the market and deported. | 4en5mei 1449 |
| `m7pix3x4k327ynqy7gmth898` | Gerrit van der Veen College | The text does not mention the "Monument voor Gedeporteerde Joden" (Hilde Meeus and Celine Wouters, 11 Sept 2007) at Gerrit van der Veenstraat 99, 9 m away. | 4en5mei 3595 |
| `qz4j62540mo4lk7cocz62m2b` | Football clubs' memorials | Good. Optionally add that BPC (Be Quick Pollux Combinatie) was itself a Jewish club, and that the TOG stone names the Jewish brothers Kroonenberg. | 4en5mei 2952, 2953 |
| `uq27jcks3qokybkiacbq0ivy` | Concertgebouwplein | If R-12 is not taken as its own place, add the 2020 plaque here. | 4en5mei 4341 |

Details for the longer rows:

- **Coöperatiehof (`bo7jjgf2y6oruzkqmo216lsa`):**
  - Its hall, the reading room of 1928, was the Zionist youth's "Beth Am" (volkshuis) on
    Saturday evenings.
  - It was the meeting place of the Mizrachie in 1929.
  - From 1931 to 1939 it was a makeshift synagogue for the overflowing Waalstraat shul,
    including services for German Jews in 1936.
- **Stadion De Meer (`oe2dy0dum0xz8bjylz7sf8w8`):**
  - Ajax's "Jewish" image comes from its Jewish supporters around De Meer and the
    Transvaalbuurt. The club was not founded as a Jewish club.
  - Eddy Hamel was Ajax's first Jewish player, 125 matches between 1922 and 1930. He was
    murdered in Auschwitz on 30 Apr 1943.
  - Keep this factual and avoid the "Superjoden" chant except as a quoted, explained fact.
- **Olympic Stadium (`zigsxso8bog8udba9bw7dddp`):**
  - The Dutch women's gymnastics team won gold at the 1928 Games here.
  - Four of its five Jewish members and their coach, Gerrit Kleerekoper, were murdered.
  - Amsterdam's first Stolpersteine (2010) were for them.
  - Verify the names and figures from two sources before writing.
- **Slijkstraat, Weesp (`g744ia4ontuvfjralt5ae1bt`):**
  - Bakker Gans (1861-1917) had a party hall in his back garden, reached by an alley off the
    Oudegracht.
  - Many Amsterdam Jews married here under the chuppah, because marrying was cheaper in Weesp.
  - Also: the Jewish religious school stood in this street.

---

## 4. Stolpersteine recommendation (slice R view; agrees with SCOUT-D)

1. Do not pin individual stones. Zuid and Oost hold most of Amsterdam's stones. Pinning them
   would bury the Rivierenbuurt under hundreds of identical pins, and the person behind a
   stone is better served by the Joods Monument and stolpersteine.app.
2. Pin a few places where the stones are the story:
   - the two 2025 thresholds, R-15a Victorieplein and R-15b Beethovenstraat, possibly folded
     into one place with the Artis threshold;
   - the Weesp cantor's house `c4xruaeu78hpbgc0v72qjeo9` (stones plus building);
   - the Hoogstraat Weesp row `b06lfs8lzyqrbxo3w6frpfc0`, as a line only;
   - the Olympic Stadium, as the gymnasts' story (first stones, 2010) through enrichment
     rather than a new pin.
3. Where a pool place has stones at its door, add a line in its text: Slijkstraat 20 and 28a
   in Weesp are already done.
   - Optionally add a `stolpersteine: <count>` field if the map gets custom fields.
4. Thresholds and stones name the dead. Never say anything about the people who live at those
   addresses now.

---

## 5. Strongest ten (slice R, new and enrichment together)

1. **O-01 Beth Haim, Ouderkerk**: Amazing, but outside the city.
2. **`uvzz9hup48kf6sr5al7qei5f` Utrechtsebrug**, the sabbath chain: in the pool, rank it high.
3. **R-01 Synagoge Oost** (Gone): the Amsterdam School synagogue, Pinkhof's windows and
   De Hond's last sermon.
4. **R-15 Stumbling thresholds**, Victorieplein and Beethovenstraat.
5. **R-13 Maasstraat memory window.**
6. **R-14 Beethovenstraat**: refugees' street, the raid stone and Hergo.
7. **R-16 Zuideinde 443**: refugees in the Noord polder.
8. **R-12 Concertgebouw's Jewish musicians.**
9. **R-05 Waalstraat 1**, Elte's first Rivierenbuurt shul, with the Coöperatiehof
   enrichment.
10. **R-09 Herman Elteschool** plaque. R-08 Sjoel West is a close tie.

Enrichments that matter most:

- Cinétol: the Frank family's Liberal shul.
- Olympic Stadium: the 1928 gymnasts.
- De Meer: Eddy Hamel.
- Mozes Cohen murals: the Oud-West memorial.
- Weesp Slijkstraat: Bakker Gans.

---

## 6. Checked and dropped

| Lead | Why dropped |
|---|---|
| Sal Meijer, Scheldestraat 45 | The shop moved in 1982 and closed there. The business continues in Amstelveen, and the family foundation distances itself from it. Gone under the high bar. Kept as a line for the doc or route. |
| Mouwes, Slagerij Marcus, Delphi lunchroom (Victorieplein), Maison Blom, Kruidenhoekje, Koko | Shops: folded into R-07, R-14 and existing places, or too thin. |
| Pension Zonligt (Pythagorasstraat 19), Pension Tesselschade (Stadionweg 61), Pension Con (Ceintuurbaan 175), café Oost-Indië (Middenweg 14-16) | Single-source leads; nothing to see. |
| Joodsche School 15 / Campanulaschool and Laanweg "kippenhok" (Noord) | The Laanweg site is not the current street, and Blauwe Distelweg 94 geocodes badly. Too vague. Asterdorp (`huz5fcy5ooyl9lc1xaxr1iaw`) carries Noord's war story. |
| Jewish labour camps (werkkampen) at the Ooster- and Noorderbegraafplaats, Zwembad Oost and West, Oeverlanden, Betlem, Westhaven | Real (joodsamsterdam map) but sourced from one page, and nothing on site. `wo9fy8g8d4t37shwuw6mkj4v` already covers forced labour. Candidate for a doc paragraph. |
| Villa Rosa, Koningslaan 12 (1912, for Joseph Cohen and Rosa Wittgenstein of Maison de Bonneterie) | Okay at most. A private villa, not open. A line for `vyp4isq93b5oygbu560l9zl1` if wanted. |
| Hergo as its own place | Folded into R-14. |
| Eddy Hamel's homes (Amstelkade 69, Rijnstraat 145) | Private houses. Folded into the De Meer enrichment. |
| Van Moppes, Duits Consulaat, Kriterion, Goldschmidt, Mendes de Leon | Already in the pool or in slice C. |
| GVB monument (4en5mei 1511) | 65 staff killed by war actions, of whom several, but not all, were Jewish. A line in the R-15 text, not a place. |
| Zigeunermonument and the Ravensbrück monument (Museumplein) | Not Jewish history. They belong on a broader persecution map. |
| Buchenwald monument (4en5mei 1454) | Not specifically Jewish. |
| Pythagorasstraat memorial tree (4en5mei 4527) | Already within `aix9c4sdhsr34gpvyzztvjye`. |
| Saxen Weimarschool (Bennebroekstraat) | Closed in 1933, before the war; no Jewish angle found. |
| Jacques Maurits de Vries first stone (J.J. Viottastraat 32) | A child's first stone of 1919. Charming, but family-history detail only. |
| Overtoom "achteraan" chewre-sjoel Agoedas Re'iem (before 1875) | Location vague. |
| First Weesp synagogue, Korte Middenstraat (1774) | Exact spot unknown. A line in `pidq899ir2djko9s5glpmh6u`. |
| CIZ hospital | Kept as R-11 Okay, but better as a line in the Obrechtsjoel text. |

---

## 7. Coverage log and caveats

Read:

- joodsamsterdam.nl: about 120 pages, plus the main map KML (1,139 placemarks; about 470 fall
  in the city outside Centrum) and the synagogue map KML (62 placemarks; 30 outside Centrum).
- 4en5mei.nl:
  - all 97 "Vervolgden" records titled Amsterdam or Weesp, fetched and matched to the pool by
    distance;
  - about 60 of the other Amsterdam records fetched before rate limiting.
- Ons Amsterdam: one article ("Het gat dat Synagoge Oost naliet"), read in the browser.
- NIHS (Sjoel West page).
- amsterdamhv.nl (Swammerdamstraat 70).
- tracesofwar.nl (the two thresholds).
- GVB, De Vrijdagavond and the Nederlands Auschwitz Comité, via search snippets.
- PDOK Locatieserver for pins.

Not read:

- NIW and Parool archives (paywalled).
- Geheugen van Oost: story ids are noted from search results, but the stories were not read
  in full.
- joodsmonument.nl: per-address checks still to do.
- LJG and Beit Ha'Chidush history pages.
- Delpher.
- No Zuidoost-specific Jewish history was found.

Caveats:

- **Single sources.** Several facts rest on joodsamsterdam.nl alone. They are marked "second
  source needed" and must be confirmed before drafting:
  - R-03, R-05 and R-10;
  - the Delicia and Pollack story in R-14;
  - the 1928 gymnasts.
- **Pins.**
  - Pins marked "joodsamsterdam map" or "tracesofwar" are hand-placed. Check them in the BAG
    or on Street View.
  - O-03 Muiderberg has no pin yet.
- **Unchecked status.** Building survival is unconfirmed for:
  - R-02, Swammerdamstraat 70;
  - R-04, the Rechouwous addresses;
  - R-05, the current use of Waalstraat 1.
- **Security.** Active institutions (R-07, R-08) may prefer not to be pinned. Ask the
  community or follow what it publishes itself.
- **Living people.**
  - None is named here, apart from public figures in published sources (the GVB director and
    the mayor, in the R-15 sources).
  - Hannah Goslar has died (2022).
- **Overlap.** Slice C may claim the Weesperplein-area 4en5mei records (1502, 1503, 1505,
  2969, 4513), the Wilhelmina Catharinaschool (3385) and Barlaeus (1494, 2971). Those are
  left to C.
- **Browser.** BrowserOS tab 4988 was closed at the end. On closing, BrowserOS labelled it as
  a user tab, probably because ownership was lost on a reconnect; it was the tab this scout
  had been using.
