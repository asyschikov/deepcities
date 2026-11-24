# Scout C: Jewish Heritage, Centrum

Slice C: Jodenbuurt, Uilenburg, Marken, Valkenburg, Rapenburg, Weesperbuurt, Plantage, Nieuwmarkt,
the canal belt and the old centre. Scouted 2026-11-24. Shortlist only: nothing drafted, nothing written live.

## How this was scouted (coverage log)

- **Pool first.** Exported the whole pool (`dc export sights --all`, 2,262 places) and searched it for
  every candidate below (titles, addresses, bodies, Dutch text). The 150 Centrum places in
  `INVENTORY.json` were read at sentence level for their Jewish content. The pool is very strong on
  the Jodenbuurt, Uilenburg, Rapenburg, Weesperbuurt and Plantage (clusters plus district places).
  **Update (coordinator, same day):** the Centrum A-list is now in the pool (Portuguese Synagogue,
  Jewish Museum, Anne Frank House, Tuschinski, Rembrandthuis, Hortus, Artis); those are listed
  by id under "A-list now in the pool" and no longer proposed as new. Still missing: the
  Hollandsche Schouwburg, the National Holocaust Museum, the Names Monument, the Waag, De
  Bijenkorf, and real gaps such as the Jewish Council's headquarters, the 1797 breakaway
  synagogue and the Waterlooplein market.
- **joodsamsterdam.nl** (NL; the richest single source). Sitemap: 2,468 pages. Screened every slug,
  fetched 150 Centrum building, institution, synagogue, shop and event pages through the WordPress
  API (robots allow it), read the first part of each in full and the status sentences of all.
  Not read: the person pages (biographies, several hundred), the newsletters, Oost/Zuid/West
  street pages (slice R).
- **Joods Cultureel Kwartier (jck.nl)**: read the visit page (opening hours, four locations),
  the Hollandsche Schouwburg and Nationaal Holocaustmuseum location pages, Ets Haim, and the
  kosher-food page (only the museum café is in Centrum). Via BrowserOS (Nuxt site).
- **4en5mei.nl monument database**: first pass via the sitemap failed (stale URLs, 429). Second
  pass via the site's search endpoint (method from SCOUT-D): group 57 "Vervolgden Nederland",
  97 Amsterdam records; read 40 detail pages in full (paced, 3 s apart), every one in or near
  Centrum plus a few borderline ones. Each was checked against the pool (title, body, address).
  Result: most Centrum memorials to the persecuted are already in a pool place (list under
  "4en5mei check" below); five were not, and are new here (C-27, C-28) or Look-for lines.
- **joodsamsterdam.nl Google My Maps as KML** (CC BY-NC: used to find candidates only, no text
  copied): main map 1,139 placemarks, of which 642 fall in the Centrum box; synagogue map 62, of
  which 43 in Centrum. Each pin matched against the nearest pool place (35 m): 221 main-map pins
  and 20 synagogue pins sit on a pool place already. The rest were screened by name; most are
  person or street pages (not places) or gone buildings. New from this: C-29 (Lindenbaum
  first stone), C-30 (Montefiorepark), Look-for lines (Huize Stranders, Tirado's house synagogue,
  Raamgracht 55 house sjoel), and the Artis hiding story (now in Enrichment).
- **Not read**: Ons Amsterdam (robots-refusing; several joodsamsterdam pages are licensed reworks
  of Ons Amsterdam articles and cite them), Het Parool and NIW (paywall), AT5, Stolpersteine
  Amsterdam, Stadsarchief beeldbank (only via captions quoted on joodsamsterdam), Delpher.
- **Pins**: addresses geocoded with the PDOK locatieserver (BAG), monuments and large buildings
  with OSM/Nominatim. Six decimals; where a pin is an address centroid rather than the object
  itself, the item says so.

All facts below are leads for the drafting agents, who verify and correct (see c-list-sights:
"the scout list is a lead, not a source"). Where only one source was read, the item says
"second source needed".

## A-list now in the pool (include by id; what their texts should add)

These were C-01, C-02, C-04, C-10, C-11, C-13 and C-21 in the first version of this file; the
numbers are retired, not reused. Pool texts read 2026-11-24.

| id | place | include? | Jewish story in the text now | add or fix (source) |
|---|---|---|---|---|
| mgbfdpu4kchmnsvxlbpoc56l | Portuguese Synagogue | yes, Amazing | good (1675, Ets Haim, winter synagogue) | merger of three congregations as Talmud Tora (1639); about 3,000 piles; 1,200 men's and 440 women's seats; Ets Haim founded 1616, about 30,000 printed works and 550+ manuscripts, visits by appointment; JCK hours Sun-Thu 11-17 (text says Sunday to Friday: check) (joodsamsterdam.nl/portugese-synagoge; jck.nl/plan-je-bezoek, jck.nl/ets-haim) |
| py728mskln2x7j728twnd5pg | Jewish Museum | yes, Amazing | good | Obbene Sjoel built over the kosher meat hall, now the children's museum; Elias Bouman built both the Grote Sjoel and the Esnoga; Nieuwe Synagoge by G.F. Maybaum; the kosher museum café is open without a ticket (joodsamsterdam.nl/obbene-sjoel, /nieuwe-synagoge-neie-sjoel; jck.nl/koosjer-eten-amsterdam). Text gives 1932 for the Waag museum, joodsamsterdam 24 January 1931: settle (see C-22) |
| n0ntsglbwukufqsfzdygtwcu | Anne Frank House | yes, Amazing | good | nothing needed; the statue on the Westermarkt is already a Look-for line, so the separate statue place I proposed (old C-11) is dropped |
| hx7dwu71gosab9zsoiknjyt1 | Tuschinski | yes, Nice | good (murdered 1942, Tobis, Tivoli) | optional: in Rotterdam he first ran a boarding house for Jewish emigrants (Hotel Polski) (joodsamsterdam.nl/abraham-icek-tuschinski); the Duvelshoek block it replaced had its own Jewish history (joodsamsterdam.nl/duvelshoek) |
| y853cvdfiqbh4zi5qwky1nog | Rembrandthuis | yes, Nice | **missing**: only Rembrandt, Saskia and Jozef Israëls | the house synagogue of Jochem Spitz on the second floor, 1852-1906, Lurianic style, dancing with the Torah scrolls on Simchat Torah against the community's rules(joodsamsterdam.nl/synagoge-jodenbreestraat, citing J. Colthoff, *Ons Amsterdam* 3/2019; second source needed). Also: Jodenbreestraat, Rembrandt's Jewish neighbours (Menasseh ben Israel, see Leads) |
| l6wvo37kw90xx0hzq5ir6pqk | Artis | yes, Nice, **after enrichment** | **missing** entirely | barred to Jews from September 1941; before the war a Saturday meeting place for Jewish members from the Plantage; with director A.L.J. Sunier's knowledge staff hid an estimated 150 to 300 people on the grounds, some dozens of them Jews: named spots include the old hollow monkey rock, the space above the predators, the bird house kitchen, the wolf house and empty service sheds (joodsamsterdam.nl/artis-natura-artis-magistra; it cites S. van Walsum, "Nog steeds worden er onderduikplekken gevonden", *de Volkskrant*, 4 May 2017: read that before drafting). The pay-after-Sabbath story is a myth (Henriette Boas, 1991, quoted there): tell it as a legend or leave it out |
| fr9wy0i85i562ocyuxdxj819 | Hortus Botanicus | **no** | none | no Jewish story found (joodsamsterdam has none for the garden; KML pin is for the Hortusplantsoen street page). The Jewish elements nearby are their own places (q473mwcs elms and Anne Frank seedling, gmz5qw46 phone of the wind, ujwryx7q deaf school plaques). A story that Ets Haim's library was hidden in the Plantage library building on the Plantage Middenlaan is called a possible "broodje aap" by joodsamsterdam itself: leave out |

## New places (not in the pool)

Ranks are on the usual detour scale. A-list label proposed only for guidebook top tier.

### A. Synagogues and religious life

**C-03 Rapenburgersjoel and the Seminarium: the synagogue of the 1797 breakaway** · **Nice**
- Hook: patriot Jews who wanted equal rights and Dutch in the service split from the Ashkenazi
  community in 1797 and opened their own synagogue here in 1799 (Adath Jeschurun, "Neie Kille");
  Louis Napoleon's government forced the reunion in 1808. The building then housed the chief
  rabbinate; next door the Dutch-Israelite Seminary (founded by royal decree 1814, building 1839)
  trained rabbis and teachers.
- Why: the emancipation story (1796) in brick; not in the pool (o4b3n6uw stops at 109 and 171).
- Pin: 52.368266, 4.906107 · Rapenburgerstraat 173 (seminary at 175-177: 52.368185, 4.905820).
- Facts read: first service 8 April 1797 in a private house, then in the Lopes Suasso house on the
  Nieuwe Herengracht, Rapenburgerstraat from 1 May 1799; no seats for the board (parnassim); own
  cemetery at Overveen (1797); new mikveh behind (1885); in use until the war, plundered; the window
  shapes still show it, and a Star of David in the floor inside.
- Sources: joodsamsterdam.nl/synagoge-rapenburgerstraat-173 and
  /nederlands-israelitisch-seminarium (NL); van Agt, *Synagogen in Amsterdam* (1974), cited there.
  Second source (EN) needed: nl/en Wikipedia "Adath Jesurun (Amsterdam)" as cross-check.
- Status: standing, other use, private (current use not established).

**C-05 Weesperplein 15, the snack bar in a former synagogue** · **Okay**
- Hook: Harry Elte and E.M. Rood built prayer rooms on the Weesperplein for the society Ahawas
  Achiem; the house at no. 15 survives and is a snack bar.
- Pin: 52.361938, 4.908187 · Weesperplein 15.
- Source: joodsamsterdam.nl/synagoge-weesperplein (updated Feb 2025: "nu snackbar De Cantharel").
  Second source needed (register text or Stadsarchief).
- Status: check whether the snack bar is still there (`check: Still there?`).
- Caveat: could be a Look-for line in the Joodsche Invalide place (xpxowkpn) instead; it is
  next door.

### B. Persecution, deportation and memory (1940-1945)

**C-06 Hollandsche Schouwburg** · A-list · **Amazing**
- Hook: a theatre of 1892 ("Artis Schouwburg"), made the Joodsche Schouwburg for Jewish
  performers and audiences in 1941, then from July 1942 the assembly point where tens of thousands
  were held for hours, days or weeks before deportation; a memorial since the war.
- Why: the central deportation site; in the pool only as the anchor of a cluster
  (abc4cxzk, pinned on no. 33-35), never as its own place.
- Pin: 52.366439, 4.911154 · Plantage Middenlaan 24.
- Facts read: architect C.A. Bombach; reopened 1894 as Hollandsche Schouwburg; last performance
  19 July 1942; Aus der Fünten attended the Jewish theatre; on the second floor, behind a door
  marked "Artisten", the Jewish arts and crafts school W.A. van Leer held classes from November
  1941 before moving to Kloveniersburgwal 15.
- Sources: joodsamsterdam.nl/hollandsche-schouwburg and
  /joodse-middelbare-kunstnijverheidsschool-w-a-van-leer (NL); jck.nl/locatie/hollandsche-schouwburg
  (NL/EN).
- Status: open daily 10-17, free, no ticket needed (JCK).
- Caveat: the number held/deported here varies by source (joodsamsterdam quotes "ruim 45.000" in a
  guest article; JCK says "tienduizenden"): use JCK's wording or a cited figure.

**C-07 Nationaal Holocaustmuseum (the Kweekschool and the crèche)** · A-list · **Nice**
- Hook: opened in the Reformed teacher-training college beside the former crèche, where
  directrice Henriëtte Pimentel and others got hundreds of children out, partly through the college
  garden.
- Pin: 52.366883, 4.910953 · Plantage Middenlaan 27.
- Sources: jck.nl/locatie/nationaal-holocaustmuseum (NL/EN);
  joodsamsterdam.nl/directrice-henriette-henriquez-pimentel-... (Stolperstein for Pimentel on the
  Plantage Middenlaan, photo 6 August 2026).
- Status: open daily 10-17. Opening date: 2024 (confirm the exact day).
- Look for: the bronze plate on no. 27 (Boyd Buter, 10 December 1982) "to all who helped keep
  Jewish children from deportation" (4en5mei record 1515, read).
- Caveat: the crèche site is also covered by the pool's Mothers' House (ujned0pv) and Johan van
  Hulst bridge (lisy94en); write the museum, link the others.

**C-08 Nationaal Holocaust Namenmonument** · **Amazing**
- Hook: Daniel Libeskind's walls of bricks, one name each, forming the Hebrew letters of
  "Lezecher" (in memory of), with mirrors that pull the street in; unveiled 19 September 2021.
- Why: not in the pool (only mentioned by gmz5qw46, nuktl5uy, qi3tc6ss).
- Pin: 52.365706, 4.904975 · Weesperstraat (OSM object).
- Sources: joodsamsterdam.nl/nationaal-holocaust-namenmonument (NL, 21 Sept 2021, with QR-code
  search on site); 4en5mei "nationaal-holocaust-namenmonument" (not read); EN: holocaustnamenmonument.nl.
- Status: open air, always accessible.

**C-09 Nieuwe Keizersgracht 58, headquarters of the Jewish Council** · **Nice**
- Hook: a double-width canal house built for a Sephardic VOC financier, later home of the jeweller
  and councillor Sim Josephus Jitta; from 25 October 1941 the head office of the Joodsche Raad,
  where crowds queued for exemptions in July 1942. Neighbours had a plaque put up (2016).
- Why: the pool names no. 58 only in passing (Schaduwkade plate); the house itself is untold.
- Pin: 52.364782, 4.904765 · Nieuwe Keizersgracht 58.
- Facts read: plots bought 1723-1724 by Benjamin Nunes Henriques; rococo ceiling by Jacob de Wit;
  Jitta lived here from 1853, chaired the Noordzeekanaal company; 1920 diamond workers' health fund;
  Presser and Mirjam Levie-Bolle on the atmosphere.
- Sources: joodsamsterdam.nl/nieuwe-keizersgracht-58 (NL); Theo Toebosch, *Uitverkoren
  zondebokken* (2010); 4en5mei "monument-aan-de-nieuwe-keizersgracht" (not read). EN source needed.
- Status: standing, offices (psychotherapy practice); plaque visible from the street.
- Caveat: sensitive. Say plainly what the Council was (set up on German orders) without verdicts.

**C-12 Waterlooplein, the Jewish market** · **Nice**
- Hook: the market moved here from the Jodenbreestraat when the canals were filled in 1882; from
  1893 it was a daily market closed on Sabbath and Jewish holidays. In the war its playground was a
  gathering point in the February 1941 raids, then one of the Jews-only markets; with the yellow
  stars the square was nicknamed "Hollywood".
- Why: one of the city's best-known markets has no place; the pool's Waterlooplein places are
  about poor relief and the Stopera.
- Pin: 52.368622, 4.901193 (OSM "Waterloopleinmarkt").
- Sources: joodsamsterdam.nl/waterlooplein, /waterlooplein-geschiedenis, /nieuwmarkt (NL). EN
  source needed. Look for: the site of the Houtgracht synagogue (Waterlooplein 54, 1648-1928,
  demolished 1959; joodsamsterdam.nl/stroomarktsjoel).
- Status: market still runs Mon-Sat (check current hours and any works).

**C-14 Amstelstraat 23, the sandwich shop that became an informer's café** · **Okay**
- Hook: the De Haas brothers' Jewish sandwich shop was taken from them; as café De Vredesduif it
  belonged to an NSB black marketeer who informed the SD about the population-register attack, and
  the resistance shot him there in 1944. Both brothers died in the camps.
- Pin: 52.366259, 4.898876 · Amstelstraat 23 (joodsamsterdam's slug says 43, text says 23).
- Sources: joodsamsterdam.nl/broodjeszaak-de-haas-amstelstraat-43, citing Bianca Stigter, *De
  bezette stad* (2005). Second source needed; building's current state unknown.
- Caveat: number 23 vs 43 to settle; probably a Look-for in an Amstelstraat/Rembrandtplein place.

**C-15 Nes 118, the couple in the cellar and the liberation photo** · **Okay**
- Hook: a tobacco firm's owners hid a Jewish couple in the cellar; on 7 May 1945 the helpers posed
  here for a Cas Oorthuys photo that became famous. The people they hid did not want to be in it.
- Pin: 52.369723, 4.893243 · Nes 118.
- Source: joodsamsterdam.nl/de-nes-tabakshoek (NL). Second source needed (Oorthuys archive,
  Nederlands Fotomuseum). Could merge into the pool's Nes tobacco place (z2kzxkgh / arsuczx3).

**C-16 Geldersekade 105, a raid caught on camera (May 1943)** · **Okay**
- Hook: H.J. Wijnne's photo of a raid shows a man kicking in this door; the elderly couple inside
  died in Sobibor on 21 May 1943.
- Pin: 52.373540, 4.901439.
- Source: joodsamsterdam.nl/een-razzia-op-de-geldersekade (guest essay by a descendant). Second
  source needed (Stadsarchief/NIOD photo record).
- Caveat: the essayist is a living private person; don't name her. Better suited to a route or
  document than a stand-alone place.

**C-17 Jonas Daniël Meijerplein 13, the last old house on the square** · Look-for only (Stolpersteine rule)
- Hook: Stolpersteine (2012) for a pharmacist, his wife and their baby son, who were murdered at
  Sobibor; their daughter survived in hiding. The house is one of the few on the square that still
  stands.
- Pin: 52.367248, 4.905604.
- Source: joodsamsterdam.nl/apotheek-rembrandt-nieuwe-herengracht-1-hoek-amstel. Second source:
  joodsmonument.nl.
- Caveat: under the Stolpersteine rule this is a Look-for line in mpt5qdh3 (the Dokwerker, same
  square), not a place.
  The surviving daughter may be alive: don't name her.

### C. Care, schools and community buildings

**C-18 Aby Jetomim, the Portuguese boys' orphanage (Plantage Middenlaan 80)** · **Okay**
- Hook: a society founded in 1648 to place Portuguese Jewish orphan boys; its later building on
  the Plantage still carries the congregation's founding plaque.
- Pin: 52.364249, 4.917544.
- Source: joodsamsterdam.nl/aby-jetomim-plantage-middenlaan-80 (NL; founding date given as 1647 on
  another joodsamsterdam page: settle). Second source needed.
- Caveat: the plaque is "in het gebouw": check whether it can be seen from the street
  (`check: Location`).

**C-19 Beth Am, the Jewish People's House (Amstel 107-111)** · **Okay**
- Hook: from 1923 the top floor of a stonemason's building near Carré held the Jewish people's
  house and the Jewish National Fund office, which moved here from the Hirsch building.
- Pin: 52.362683, 4.903716.
- Source: joodsamsterdam.nl/beth-am-joodsch-volkshuis. Second source needed.

### D. Trades, shops and culture

**C-20 De Bijenkorf, a Jewish family store on the Dam** · **Nice**
- Hook: Simon Philip Goudsmit's haberdashery on the Nieuwendijk (around 1870) grew into the
  department store; it advertised for staff in Jewish papers and closed on Saturdays and Yom
  Kippur, and was still a Jewish family firm in 1940. Johnny & Jones, the Jewish jazz duo, started
  out as Bijenkorf staff (1934).
- Pin: 52.373293, 4.893718 · Dam 1.
- Sources: joodsamsterdam.nl/de-bijenkorf and /johnny-en-jones (NL); 4en5mei record 2941
  "plaquette in de Bijenkorf" (read): a round stone relief inside, "Herdenken en vernieuwen
  1940-1945", for staff who died; it confirms the Jewish board, the many Jewish staff, and that
  in 1940 the Jewish directors formally stepped aside for non-Jewish ones but stayed active
  behind the scenes. Building date of the Dam store to confirm.
- Look for: the round plaque inside the store (ask where it hangs now; `check: Location`).
- Status: open; joodsamsterdam (Nov 2026) quotes Parool on changes from January 2027.

**C-22 The Waag, first home of the Jewish Historical Museum** · A-list · **Nice**
- Hook: the museum opened in a single room at the top of the Waag, opened by alderman Boekman; the
  occupier closed it and about 80% of the collection disappeared; reopened by Drees in 1955 and
  stayed until 1987.
- Pin: 52.372693, 4.900385 · Nieuwmarkt 4.
- Sources: joodsamsterdam.nl/nieuwmarkt and /grote-synagoge (NL). Date conflict: joodsamsterdam
  gives 24 January 1931; the pool's Jewish Museum text (py728msk) says 1932: settle with a third
  source (JCK history page) and fix whichever is wrong. 4en5mei record 2945: Jannes Limpberg's
  bronze memorial for the members of the East European Jewish workers' cultural society An-Ski
  (1979) first stood in the Waag; it is now in the museum's depot, so not a Look-for. The Waag has
  no own place in the pool (only d52gm2h5 "beyond the Waag"); if the coordinator adds it as an
  A-list place, this becomes an enrichment line instead.

**C-23 Tip Top, the Jodenhoek's own theatre (Jodenbreestraat 27)** · **Okay** · status: Gone
- Hook: from 1914 the neighbourhood's cinema-theatre, with children's films on Wednesday afternoons,
  Louis and Heintje Davids on stage and peanuts ("kesause mangelen") all round; its director died in
  Westerbork. The theatre school on the site named its small hall Tip Top.
- Pin: 52.368824, 4.904293.
- Source: joodsamsterdam.nl/tip-top-theater (NL); the pool's Goslerhuisje (heaems4d) already has a
  Look-for line (and says Tip Top stood until 1953). My call: keep it a Look-for unless a Tip Top
  place is wanted for a theatre route.

**C-24 The matzo factory's gable stone in a garage entrance** · **Okay**
- Hook: A.I. de Haan's matzo bakery (5-6 million a year around 1920) hid its Jewish workers behind
  a wall of matzo tins during a raid, was renamed a "cracker factory", and was liquidated in 1942;
  its rescued gable stone ended up in the entrance of the parking garage on the site.
- Pin: 52.369324, 4.905611 · Valkenburgerstraat 186 (address; find the stone itself).
- Source: joodsamsterdam.nl/matzefabriek-a-i-de-haan-co (NL; Vrienden van de Amsterdamse
  Gevelstenen saved the stone). Second source needed (gevelstenen.amsterdam?).
- Caveat: `check: Location` until the stone is seen.

**C-25 Joachimsthal, the last name of Hebrew printing in Amsterdam** · **Okay**
- Hook: Amsterdam printed Hebrew books for all Europe from Menasseh ben Israel's first prayer book
  (1627); Joachimsthal (1867, steam press on the Jodenhouttuinen from 1895) is the only firm left,
  as a bookshop: Utrechtsestraat from 1954, Kerkstraat since 2019.
- Pin: needed (Kerkstraat number not found).
- Source: joodsamsterdam.nl/drukkerij-uitgeverij-joachimsthal and /boekdrukkunst (NL).
- Caveat: check the shop still trades; it passes the shop test only through its history.

**C-26 De Vries van Buuren, the market traders' wholesaler (Jodenbreestraat/Waterlooplein)** · **Okay**
- Hook: from 1829 a haberdashery wholesaler supplying the Jodenbuurt's market traders, closed on
  Sabbath and Jewish holidays, with a pension fund; much of its staff was murdered. A 17th-century
  gable stone, De Swarte Mvele, was set into Waterlooplein 3 in 2007.
- Pin: 52.369080, 4.900915 · Waterlooplein 3 (address; the stone).
- Source: joodsamsterdam.nl/de-vries-van-buuren (NL). Whether the Jacot and Oldewelt building
  survives is not clear from what I read: check.

### E. Found in the second pass (KML and 4en5mei)

**C-27 Nieuwe Herengracht 33, the Hebrew stone of the old men's home** · **Okay**
- Hook: two text stones, one in Hebrew letters, one a Dutch rhyme blessing those who keep "the
  aged" fed; they came from the Weesperstraat house where the brotherhood Mishenet Zekenim opened
  a home for poor old Jewish men in 1751, and were set into this larger house (the home from 1794)
  when the old one was demolished in 1932. Found under cement in 1995 and recut.
- Why: a visible, readable trace of Jewish poor relief; not in the pool.
- Pin: 52.366366, 4.903206 · Nieuwe Herengracht 33 (address centroid; the stones are on the
  front).
- Sources: 4en5mei record 2224 (read); joodsamsterdam.nl/nieuwe-herengracht (KML pin "Oude
  Mannenhuis", not read in full). EN source needed.
- Status: stones in place (4en5mei photos, Vrienden van Amsterdamse Gevelstenen, undated).
- Caveat: 4en5mei links the KML's "Portugees Israëlitisch Oude Mannenhuis" to this address;
  whether Mishenet Zekenim was Portuguese or Ashkenazi is not stated there: check.

**C-28 The UvA names monument (Oudemanhuispoort)** · **Nice**
- Hook: a steel ring with the names of 254 students and 28 staff of the University of Amsterdam
  who died in 1940-1945, most murdered because they were Jewish, active in the resistance, or
  both; pushed for by students and alumni from 2022, unveiled on 7 October 2026.
- Why: the newest Holocaust memorial in Centrum, beside the book market; not in the pool
  (aibmf6rb only mentions it).
- Pin: 52.369609, 4.896137 · Oudemanhuispoort 4 (address centroid; place the pin on the ring).
- Sources: 4en5mei record 4973 (read; design Thonik); UvA's own page (linked by QR, not read).
- Status: new, unveiled seven weeks ago.
- Caveat: could equally be a Look-for line in the Oudemanhuispoort place (mzjh6zzx). Do not name
  the student campaigners (living private people).

**C-29 The Lindenbaum printing works' first stone (Reguliersdwarsstraat 10)** · **Okay**
- Hook: on 25 September 1912, his eleventh birthday, Erwin Lindenbaum laid the first stone of his
  father's steam printing works; the stone is still in the front. Father Max, from Essen, and
  mother Bertha died in Theresienstadt in 1944, Erwin and his wife in Auschwitz.
- Why: a small, findable trace of a German-Jewish firm in a street now known for other things.
- Pin: 52.366691, 4.889483 · Reguliersdwarsstraat 10 (address centroid).
- Source: joodsamsterdam.nl/gebbedrijfstoomdrukkerijlindenbaum (NL, found via the KML). Second
  source needed (joodsmonument.nl person pages for the dates; a photo of the stone).
- Status: stone reported as still there; `check: Still there?`
- Caveat: Okay at best; better as a stop on a "first stones" or canal-belt walk.

**C-30 Montefiorepark, the slum alley called a park (Plantage Muidergracht)** · **Okay**
- Hook: a narrow alley off the Plantage Muidergracht by the Kerklaan, its houses numbered
  Plantage Muidergracht 35-51, nicknamed "park" with Jewish-Amsterdam irony; Henri Polak listed it
  in 1936 among the city's built-up "parks", and the slang verb "vermontefioleparken" meant petty
  dealing by the poor. It had a small synagogue, Bedek Habajith. Today the passage is used to
  leave the Hollandsche Schouwburg grounds after a commemoration.
- Pin: 52.366206, 4.910288 (joodsamsterdam KML, hand-placed: check on the ground).
- Source: joodsamsterdam.nl/montefiore-park-synagoge-bedek-habajith (NL), quoting H. Polak,
  *Amsterdam, die groote stad* (1936); etymologiebank.nl for the verb (not read). Second source
  needed.
- Caveat: probably a Look-for line in C-06 (Hollandsche Schouwburg) rather than a place.

## Merges and Look-for lines (not separate places)

- **Sint Antoniesbreestraat 36, the "Smaldeel"** (stock-exchange men's synagogue, 1857/1874-1943,
  demolished; the gap between two houses): Look-for in Huis De Pinto (iod6ugp3).
  joodsamsterdam.nl/synagoge-sint-anthoniesbreestraat-36.
- **First Talmud Tora synagogue site** beside the Mozes en Aäronkerk (in use until 1675, a wedding
  hall to 1875, demolished 1931): into the Mozes en Aäronkerk (u36dpf41), see Enrichment.
- **Vedderstichting, Weesperstraat 41-43** (a men's care home that had to keep ten residents for a
  minyan; tiny synagogue; stripped in the Hunger Winter, demolished): Look-for in the Weesperstraat
  place (qi3tc6ss). joodsamsterdam.nl/synagoge-weesperstraat-fedderstichting.
- **Valkenburgerstraat chewresjoel Tiferet Jisroeil at the Rode Leeuwengang** (1875-1925) and the
  Poort van Marken slum (1898 description: a 79 cm alley, rats, 50 cents a week): into a Marken or
  Valkenburgerstraat place (p61n57ch, wxeueb8f). joodsamsterdam.nl/poort-van-marken,
  /synagoge-valkenburgerstraat-tiferet-jisroeil.
- **Lange Houtstraat synagogue** (1894, under the Stopera now; cantor Salomon Poons): Look-for in
  qs04c1uh.
- **Coster's diamond works** (Amstel 11-13 / Zwanenburgerstraat 12, 1840, under the Stopera) and
  **Menasseh ben Israel's press** (first Hebrew press in the country, on the site of
  Zwanenburgerstraat 61): one line each in qs04c1uh.
- **Huize Stranders, Nieuwe Herengracht 103**: built by the Jewish printer Joseph Athias, rebuilt
  by Aaron Joseph de Pinto, a smart Jewish restaurant and party house 1902-1921: one line in a
  Nieuwe Herengracht place (joodsamsterdam.nl/huize-stranders, Telegraaf 1902 quoted there).
- **Jacob Tirado's house, Jonkerstraat**: where the first Jewish service in Amsterdam was
  probably held (about 1602, rabbi Uri haLevi); nothing to see, so a line in doc 02 (slice D) or
  a Jonkerstraat place (joodsamsterdam.nl/synagoge-jonkerstraat; "probably" is the source's word).
- **Raamgracht 55**: Marcus Sohlberg's house synagogue, late 19th century; Look-for at most
  (joodsamsterdam.nl/raamgracht, KML).
- **Nieuwe Keizersgracht 24**: two plaques (2009) for four members of one family deported from
  this house and for the daughter who survived in hiding: Look-for in the Schaduwkade place
  (jvqlmwep); don't name the survivor (4en5mei record 3642).
- **Nieuwe Kerkstraat 16, Fernandes Nunes huis**: the Genesis text stone, partly in Hebrew, freed
  from cement in 1995 (4en5mei record 2223): Look-for in xe9mgiby.
- **Jewish arts and crafts school** behind the "Artisten" door: in C-06.
- **Henriëtte Pimentel's Stolperstein**: in C-07.
- **The 9 February 1941 street fights** (WA attack on café-cabaret Alcazar, Thorbeckeplein;
  fights on to the Rembrandtplein and the Waterlooplein; dance hall Huize Bob, Amstel 27, wrecked)
  and **12 February** (WA attacked Jewish traders on the Amstelveld): Enrichment below, and a
  February 1941 route for slice D.

## In the pool, should be on this map (INVENTORY, Centrum)

**Rule for doubles.** Centrum is on two maps, so many stories exist twice: a `detail: city`
cluster written for Deep Amsterdam and a `detail: district` place for Deep Centrum, often on the
same pin. On this theme map take the **district** place (one object, one pin) and drop the city
cluster unless it is the only place for that story. Decisions for the pairs SCOUT-D flagged and
the others I found:

| keep | drop (or merge into the kept one) | note |
|---|---|---|
| qi3tc6ss0lled3di2i7okmj4 Weesperstraat | k36tgrxl35wzoa60fgl3shcr | same title, same text; merge candidates for curation |
| vor93h9ne4cp12j545ijwh64 "Nooit meer Auschwitz" | t2x3qk1pd08zzz0jizj17ttc Wertheimpark | same pin; move t2x3's line on the park losing A.C. Wertheim's name in the war into vor93 |
| jvqlmwepe7b2miz6q9ljfo9n Schaduwkade | gcgxah305ci3a06vsag6295o | same stretch; put the Jewish Council (C-09) and the hospital line in jvqlmwep |
| ujned0pvuv0x2c275827m2b6 Mothers' House (the crèche site) | abc4cxzkbb2up9bt5ofdd59b Plantage at war | same pin; the cluster's stories are now separate places (C-06, C-07, u6p2ol80, htj1y3ow) |
| lnkbct6h2uazz53ygc0mo3ty, mpt5qdh3cdwxdyc2sonfahin, qs04c1uh8vx5juadbuq9a6kf (Stopera trio: orphanage memorial, Dokwerker, Vlooienburg) | fh0mc9q8q9xkj6yovtkgia65 J.D. Meijerplein cluster | the three district places each have their own object |
| db72j8855773gzdf9kudxgb0 girls' orphanage | o4b3n6uwaj7lb5s4psyvbwk3 Rapenburgerstraat after the deportations | same address; move o4b3's "gaps" line into db72 or into C-03 |
| q473mwcsn3dsr9fge7ozqpz9 elms and Anne Frank seedling, gmz5qw46xd04e3tjr2ototjk phone of the wind | wpxfslkjgbys64uykm7d6e08 behind the Hortus | the cluster joins the same two stories |
| lx1egvkk5oxsr2cjcqtg39ci Max Euweplein prison yard | x4ceovn5pexfe46lyho1413h Leidseplein east | |
| xg8dx0w2nsaez0q6bu4p394e Jac. Baars's house | hiraeu6s6m3se6wmjhr9neyt Henri Polaklaan | |
| vrl6k54k00w2d9df3ik5mv7d Harry Elte's fronts | mzmjqbfo7vt954bvixqjp8jg Achtergracht | |
| g4a6vzzkz9syjf9ta0jq2fpl Gerzon's works | c8p509fdg084u55be2rak7dt Spuistraat south | |
| mzjh6zzxjwwhrwf8pnynjuka Oudemanhuispoort book stalls | fk2a088nw4rcfeqxsxybr6ia | add C-28 as its Look-for if C-28 is not made |
| he2cvfa3id32hzp0t1t8hi6e Metz & Co | fj4xhnnccon6yhjnji63fifs | |

**Include** (Jewish story is the point or a main thread; doubles already resolved):
- A-list (see the table above): mgbfdpu4kchmnsvxlbpoc56l, py728mskln2x7j728twnd5pg,
  n0ntsglbwukufqsfzdygtwcu, hx7dwu71gosab9zsoiknjyt1, y853cvdfiqbh4zi5qwky1nog (after
  enrichment), l6wvo37kw90xx0hzq5ir6pqk (after enrichment). Not fr9wy0i85i562ocyuxdxj819.
- Synagogues, learning, ritual: qgebug2xadhtttz8fvvzlgbl, kgy73v0hkvocrihxz0eauc5b,
  w70hy6m10yeqcvwumatsbyp5, e95bjuggykyeq3819ysm1y8o, lf9gf56u8f04rj6hm56mcxfk,
  bibe137paxggr43aao19zu22 (washing house for the dead), sg2h8z9bgq668o5dcvo0r86b (Splendor),
  od9q3mtayc9x8zqeh3divfmx (Kokshofje, the sjoel's origin), wdue5vjp5lnc2qtzy8g4x3x6 (Liberal
  synagogue 1954 in the Foresters' house).
- Neighbourhoods: ef47x04a03yndqqtiht5s5pl (Uilenburg), qi3tc6ss0lled3di2i7okmj4 (Weesperstraat),
  v2g7szo75t2que3ogpnbhbul, kex5iaojprlk7dzm54icdmjg (Mr. Visserplein, after enrichment),
  u57btdb6059ay01csuuxp75x (the metro fight through the old Jewish quarter).
- Care and schools: xpxowkpn6m07tapwy9bpuqmg, db72j8855773gzdf9kudxgb0, yegjgnlhl1xqx4df6l2hemmc,
  xe9mgiby86tai23y1osut4la, shpgfao20zpvcadstyvwcnju, ogawpo7766uu46kt4c5d0iar (Joodsche School
  nr. 1; 4en5mei records 4114 and 4115 are its plaques), xoqczycysgsh267c1m7b15kr,
  n9ygtf1t2fyub2dzhzu1rwob, q9jems4pbd40yij6bvxg2xx7, obpiftem5rrlwm6s9jc19s5h (the wall in the
  school), ujwryx7q64xbnmxx9n0lg0gh (Jewish deaf victims' monument and the Hortusplantsoen school
  plaques), khu7ge2kd4uy59b1hcemx3dj (kosher pots in the school kitchen),
  xkwompqwrry6n3m37ylhudgq (workhouse cared for the Jewish poor until 1911),
  ellul69b2nxcg6auzlaqo955, p61n57chl25ct8ik7g6tsnpx, tdxw48dd3ry0d2fufm3fpf7b.
- War and memory: mpt5qdh3cdwxdyc2sonfahin, lnkbct6h2uazz53ygc0mo3ty, qs04c1uh8vx5juadbuq9a6kf,
  jvqlmwepe7b2miz6q9ljfo9n, ktqm7g4r7suxs6vqvmoho41p, v4dfz50jf57ixhkh46pcjnp6,
  xa5qogswc15o84txcx33ly1h (Turfkruier stones; SCOUT-D suggests folding into the Stolpersteine
  document: fine by me), u14h17h0d9jqlybgo8px2jk9, nuktl5uy3xu0mvlfdo2uey91,
  vor93h9ne4cp12j545ijwh64, srkjp5wut5wjc128xhuhygf8, snzyujo9mjrbgc1vjcc0n70d (Süskind and
  Pimentel bridges, 4en5mei 2947 and 4565), lisy94enpr138l3ja80n3xjl, ujned0pvuv0x2c275827m2b6,
  awjvl1lzomqloecde27m7azt, m0jp8tjjf1mxg47digu3yfpb (Theater van de Lach),
  htj1y3owqgh84j7umrsgu5j4 (Plancius), u6p2ol80uyz57kfkqse7uzdl (register attack),
  acidtq3bomknl9gh40gu7bo8, lx1egvkk5oxsr2cjcqtg39ci (the prison yard where Jews caught in hiding
  were held), kinbh5lfu1cpwytfbija371t (Tina Strobos), r47y0fsxd41b6gc52078hect (Unica's hiding
  house), kjr9fwd40svkr46nodubxpy7, ftfgd6s5wxm7fd7fabmqprrh (Noorderkerk, strike called),
  negoeq5xe2uuuvdqy81q3695 (CS plaques, incl. 4en5mei 4962 on the cold welcome of returnees),
  tjy97ou86msvaon0g2z3azov, gmz5qw46xd04e3tjr2ototjk (phone of the wind beside the Names
  Monument), q473mwcsn3dsr9fge7ozqpz9 (Anne Frank seedling), a73o1cp2atxehg5agrjsp8fx (NIOD's
  archives), h717mexcm82kxcygf7pl8grb (Homomonument: Jacob Israël de Haan's line),
  x520ijoyo33yhwqj6xfw4jxp (Jewish youth clubhouse, community offices 1948-1976),
  **ujkx3r886epyz40ze669xj6e** (the frog stone: moved here from "leave out" after the 4en5mei
  check; more than eight people hid in the house, among them the archaeologist Annie
  Zadoks-Josephus Jitta, and the pool text tells it well; 4en5mei record 4785).
- Heritage houses and people: iod6ugp3yos61fyy3gy0sdjf, heaems4damq9eun4id3whgj4,
  uqnp0v4u84cpnr9uobf3p6cn, wxeueb8f6c9a6zd1gjahyho8, x8ttarav3ykvqr7tn28ecvd1 (studios in the
  gaps), xg8dx0w2nsaez0q6bu4p394e (Jac. Baars), vrl6k54k00w2d9df3ik5mv7d (Harry Elte),
  xgfaioszl8belodkbvvsccus, mi2cwxaxkvmbrcre5p16tgtq, slzqjk2hstt47rxi3dyqrxwm (Huis Fuld),
  evnq8655ewp48a8c0weddxe6.
- Trades: gyh3uhrd2xaddjiig05gxlrf (Boas), wx78pd7ntjks2jk1j84b02p8, xdzjybc6n2jy1740il5atbtd,
  sg5x5jc3sih4rbjqsfsd6iny (after enrichment), uet78dwntd2eiait1dr4qhew (De Burcht, ANDB),
  nyz7ajidaz2demp7iso4wero, sbhpzekdnypghuwnmnpv9ozf, c85ddsoh5ej344b2yvi86lji,
  g4a6vzzkz9syjf9ta0jq2fpl (Gerzon), he2cvfa3id32hzp0t1t8hi6e (Metz & Co),
  rwae30mkxpyvv5tefp4hv8bv (Bonneterie plaque, 68 staff, 4en5mei 2942), kvxx8yvqsg1wsmnw9h8wnvtx
  (Liro, 4en5mei 2969), npebwd7i49vqwgm3n6t4xmc7 (Goudstikker), mbmx4lfaapnwo3yaroempcl2,
  genspucmsx8ra9g234no85pg (Van Kollem), mzjh6zzxjwwhrwf8pnynjuka (Jewish booksellers of the
  Oudemanhuispoort), nxyjuptq05t53hswxf7mbvcm (Arti expelled its Jewish members),
  crl2f78zbjifgn1wqnyqnjkf (Kokadorus, the Jewish market crier), cd4t9q64wxrvn6dnfwrzo5a4
  (Barmat: only if the text handles the antisemitic use of the scandal carefully),
  u36dpf41xyomrrpcuh06gug5 and pfex36qgqzeua5sai5io0ffn (after enrichment),
  wiuoj22wga9vggny6injz4ws (Bloubrik).

**Leave out** (a passing mention only, or a double resolved above): pv8q8gngqhfyuff4vjb0odk1,
ov8irfxbpf51g140y6sdlehv, czuj7qwni9dshlm08mningma, bq43j5spxhbi3xskp3p66vvy,
u0tujugichahcjrwg0ip0qf3, rr8imd94qmav58wgwkj6plfe, igtbg643xabsqyk9q56ge4pv,
vodqyx7f9qvz2wlzl5lypupq, f2zidxlgji6h1mexf0qeovvz, gu7tyi7zbad3nv1ueay1sxkp,
rgb0qd6oba8s7sf2zfy2a5yc, tfsavgxsw54ekp67ug7nriiu, cnokb4oibtl07m0khd0kg6ng,
mkjh4okmvqs13jssw1furquc (its Effectenbeurs memorial, 4en5mei 1622, is general),
avb1dqu2ubtrhgalwlnhzhi1, fjjnmbucg7noi4prjusiic0y, jqgi05b6tgttv9jkc5mb43pz (enrich instead),
xt1qvhjm0c30868v1pk5llpq, a96bcygosr57ueqlcvvrxjfm, fhdms8earfskhtsgitxrrf3s,
xgrxkyjbm20dkhl26kp43qmp, v2afj88x7n1qyna20hab9rwv, iexda83idlscpnnazenvtm1i,
o6t15j96yfw3mt3t6b8hjcds, kyt3po0hvbmk7ayrb0gc99hw, v71xles59v4bovrll2z1kg0v,
nzuefat972zg7s6sq257m0p2, kupqb42nwenhqgpy3hefz37v, hg3xo96hfhmusbpegw2sui6c,
r0rok2g20ap891njalwxtnz0, mi4rjrsg88upigw72zlyhrpm, q6t5ey7se4i3f9mrz47lmy1c,
k8xtefn8yygqj0f1b8lfg1dl, ps47axwum9uk96gvgg6xqliv, augj1rb6l97yt225m6nf9xqp,
ai8ely8opedyocfo201e4oro, mptk85jyq5ak9qaistcjejqu, ynxtdiq81qoxn1o1d08nq9rz,
ymcc0h357tlj7kjq6opndkpt, gpfwuczovwew9d6b0r03exxw, q1ogooimbt808nocosyfc1nu,
odagt8y8vozaver3nb4kmzji (Kriterion covered by acidtq3b); and the dropped doubles:
k36tgrxl35wzoa60fgl3shcr, t2x3qk1pd08zzz0jizj17ttc, gcgxah305ci3a06vsag6295o,
abc4cxzkbb2up9bt5ofdd59b, fh0mc9q8q9xkj6yovtkgia65, o4b3n6uwaj7lb5s4psyvbwk3,
wpxfslkjgbys64uykm7d6e08, x4ceovn5pexfe46lyho1413h, hiraeu6s6m3se6wmjhr9neyt,
mzmjqbfo7vt954bvixqjp8jg, c8p509fdg084u55be2rak7dt, fk2a088nw4rcfeqxsxybr6ia,
fj4xhnnccon6yhjnji63fifs.

Not in INVENTORY but checked: oed6c4ajhfvx86m93xu8z1bb (Flesseman plaque for four Nieuwmarkt
children shot in 1944-1945; 4en5mei files it under persecuted and civilians, but neither source
gives a Jewish link): leave out unless one is confirmed.

## 4en5mei check (group 57, Centrum): where each memorial sits

| record | memorial | in the pool as |
|---|---|---|
| 1516 | Hollandsche Schouwburg | not yet: C-06 |
| 1515 | Plantage Middenlaan 27, plate for helpers of Jewish children (1982) | Look-for in C-07 |
| 4417 | Nationaal Holocaust Namenmonument | not yet: C-08 |
| 1625 | Amstel 1, outline of Megadlé Jethomim (Treumann, 1989) | lnkbct6h |
| 1631 | Monument Joods Verzet, Amstel 9 (1988) | lnkbct6h |
| 4633 | Vlooienburgmonument, Amstel 7 (2022) | qs04c1uh |
| 1434 | De Dokwerker | mpt5qdh3 |
| 1502 | Joodse Dankbaarheid, Weesperstraat (1950) | nuktl5uy |
| 1505 | Weesperplein 1, Joodsche Invalide relief (Stauthamer, 1950) | xpxowkpn |
| 1503 | former Diamantbeurs, Weesperplein 2 (1950) | sg5x5jc3 (text lacks it: Enrichment) |
| 1509 | Dr. Sarphatihuis plaque (1948) | xkwompqw |
| 2969 | former Liro bank, Sarphatistraat 47-55 (2003) | kvxx8yvq |
| 2947, 4565 | Süskind and Pimentel bridges | snzyujo9 |
| 3642 | Nieuwe Keizersgracht 24, family plaques (2009) | not yet: Look-for in jvqlmwep |
| 3781 | Schaduwkade | jvqlmwep |
| 2223 | Fernandes Nunes huis stones | xe9mgiby (add Look-for) |
| 2224 | Nieuwe Herengracht 33 stones | not yet: C-27 |
| 6 | girls' orphanage stones, Rapenburgerstraat 171 | db72j885 |
| 4114, 4115 | Joodsche School nr. 1 and 2 plaques (2018) | ogawpo77, tdxw48dd |
| 3545, 2943, 3597 | Jewish deaf victims; Hortusplantsoen school plaques | ujwryx7q |
| 1501, 1499 | Spiegelmonument (Wertheimpark); Homomonument | vor93h9n; h717mexc |
| 2942 | Maison de Bonneterie plaque | rwae30mk |
| 2941 | Bijenkorf plaque | not yet: C-20 |
| 2945 | An-Ski memorial (now in museum depot) | none; not visible |
| 4785 | Prinsengracht 535 frog stone | ujkx3r88 (moved to include) |
| 4973 | UvA names monument (2026) | not yet: C-28 |
| 4962 | "Herinnering", Centraal Station (2019) | negoeq5x |
| 834, 1500, 2680 | Anne Frank Huis; Anne Frank statues | n0ntsglb (Westermarkt statue as Look-for; the second statue record not checked) |
| 101 | Noorderkerk plaque | ftfgd6s5 |
| 1622, 2967, 2970, 1601, 1609, 2657 | Effectenbeurs, Paleis van Justitie, Singelkerk, Passeerdersstraat, Looiersdwarsstraat, Flesseman | general or civilian memorials; no own place on this map |

## Enrichment (pool places whose text misses or blurs the Jewish story)

| id | what | source |
|---|---|---|
| u36dpf41xyomrrpcuh06gug5 Mozes en Aäronkerk | Spinoza's family lived on the Houtgracht on this very site; the first Portuguese synagogue (Talmud Tora, to 1675) stood beside it until 1931; the police station next door (Jonas Daniël Meijerplein 1-3) was demolished in 1968 | joodsamsterdam.nl/baruch-de-spinoza, /synagoge-jodenbreestraat, /politiebureau-jonas-daniel-meijerplein-1-3; nl.wikipedia Mozes en Aäronkerk as cross-check |
| kex5iaojprlk7dzm54icdmjg Mr. Visserplein | the square (named 1968) honours Lodewijk Ernst Visser, the Jewish president of the Supreme Court dismissed by the occupier in 1940 | nl.wikipedia Mr. Visserplein / L.E. Visser (to read) |
| pfex36qgqzeua5sai5io0ffn Waterlooplein poor relief | no word on the Jewish market or the 1941 raids on the square (unless C-12 is made) | see C-12 |
| sg5x5jc3sih4rbjqsfsd6iny Diamantbeurs | no Jewish angle at all; the trade was largely Jewish (sbhpzekd: two-thirds of diamond workers and dealers did not survive); 4en5mei lists a monument "bij de voormalige Diamantbeurs" | joodsamsterdam.nl/diamantbeurs, /weesperplein-diamantindustrie; 4en5mei (not read) |
| owooq6lk1d1u4nf3ix7lguw6 Hirschgebouw | founders Sylvain Kahn and Sally Berg were Jewish; the Jewish National Fund had its office in the building until 1923; Joseph Cohen of the Bonneterie met his wife Rosa Wittgenstein, a Hirsch saleswoman | joodsamsterdam.nl/hirsch-cie-1889-1970, /beth-am-joodsch-volkshuis, /maison-de-bonneterie-1889-2014 |
| r1d5sba5vdybktxios05bz0r Wertheim & Gompertsz | A.C. Wertheim, the Jewish banker and philanthropist of the Wertheimpark, is not named | joodsamsterdam.nl/a-c-wertheimhuis (fetch failed, slug exists); second source needed |
| hf1nkgynmd95huptblw32mzj Thorbeckeplein | 9 February 1941: the WA attacked café-cabaret Alcazar, where Jews still worked; the street battle spread to the Rembrandtplein and on to the Jewish quarter, the start of the chain to the February strike | joodsamsterdam.nl/9-februari-1941; second source needed |
| jypicc5pdsxydgqkxd2i4u14 / crl2f78zbjifgn1wqnyqnjkf Amstelveld | 12 February 1941 the WA attacked Jewish market traders here | joodsamsterdam.nl/9-februari-1941 |
| jvqlmwepe7b2miz6q9ljfo9n Schaduwkade (kept over gcgxah30) | add no. 58 (Jewish Council) and the hospital at 104-114 (1882-1943, "ontruimd" 13 Aug 1943) | C-09; joodsamsterdam.nl/nederlands-israelitisch-ziekenhuis |
| xpxowkpn6m07tapwy9bpuqmg Joodsche Invalide | the prayer house at Weesperplein 15 (now a snack bar) next door, and Johnny & Jones played its Purim party (1937) | C-05; joodsamsterdam.nl/johnny-en-jones |
| wdue5vjp5lnc2qtzy8g4x3x6 Foresters' house | before the war "Gebouw A.O.F." was a hall for bar mitzvahs and weddings | joodsamsterdam.nl/gebouw-a-o-f |
| jqgi05b6tgttv9jkc5mb43pz Felix Meritis | not wrong, but readers may confuse it with Felix Libertate, the 1795 society (on the Nes) that pushed the 2 September 1796 emancipation decree; worth one clarifying line | joodsamsterdam.nl/felix-libertate, /de-nes-tabakshoek |
| heaems4damq9eun4id3whgj4 Goslerhuisje | Tip Top line fine; joodsamsterdam gives its address as Jodenbreestraat 27 (from 1928) and opening 17 March 1914 | joodsamsterdam.nl/tip-top-theater |

## Stolpersteine: recommendation

Same as SCOUT-D (doc 16), which the coordinator has adopted: individual stones are not pinned.
Thousands of stones lie across Amsterdam and Centrum alone has many hundreds; as places they
would bury everything else and turn the map into a list of victims, which the c-list rules rule
out ("no lists of victims as places").
1. **One document** (SCOUT-D doc 16): what the stones are, how to find a name, polishing on 4 May.
2. **Only the emblematic places SCOUT-D lists**; in Centrum: twelve at one door (v4dfz50j), the
   Brilleslijper house (u14h17h0), the threshold at the Artis stop (ktqm7g4r). The Turfkruier
   stones (xa5qogsw) fold into the document, as SCOUT-D suggests. I add no stone places: C-17
   (J.D. Meijerplein 13) and Pimentel's stone become Look-for lines (in mpt5qdh3 and C-07), not
   pins.
3. **Look-for lines** in neighbouring places when stones sit at a door the place already describes.

## Leads not worked (for the next round)

- 4en5mei: done for group 57 (see "4en5mei check"). Not checked: Centrum memorials filed under
  other groups only (resistance, civilians) that may still have a Jewish angle, e.g. the
  Stadsschouwburg and Zuiderkerk plaques, the Nieuwe Kerk window, the Nieuwe Looiersdwarsstraat
  and Nieuwe Passeerdersstraat stones (both group 57 too, but their texts read as general
  civilian memorials: worth one look each).
- Menasseh ben Israel: no visible trace found on Zwanenburgerstraat 61; check for a plaque.
- Huize Bob (Amstel 27) and café Alcazar: buildings and traces unknown.
- Hotel Hiegentlich (Nieuwe Hoogstraat 9-11; Jaap Kaas photo of the emptied street, 1943) and the
  Nieuwe Hoogstraat as a Jewish shopping street: route material.
- Bioscoop Hollandia (Nieuwe Herengracht 117) and the Nieuwe Herengracht 103 "Feestgebouw
  Stranders": Jewish connection not established in what I read; dropped for now.
- Ons Amsterdam articles cited by joodsamsterdam: "Hoofdpijn van het dansen" (Spitz sjoel, 3/2019),
  the 2017 police-station series, the 1981 Smaldeel piece.

## Checked and dropped

| item | reason |
|---|---|
| Maison Weinthal (Nieuwezijds Voorburgwal 227, 19th-c. brothel) | not a Jewish-history story; would play to a stereotype |
| Bijou Biograph (Damstraat 20) | joodsamsterdam says it had no Jewish owners; only the explicateur was Jewish |
| Rembrandt Theater (Rembrandtplein 19) | gone since 1937, no Jewish angle in what I read |
| Hotel Stad Elberfeld (Bethaniënstraat 4) | German travellers' inn, Jewish link thin |
| Eisendrath's bookshop (Rokin 117), Lorjé, Hotel Nes | family histories without a visible trace |
| Diamond works Metz & Citroen (Rapenburgerstraat 53-61) | demolished (Salvation Army and Anne Frankstraat on the site); a line in a Rapenburg place at most |
| Kosher food | only the Jewish Museum café in Centrum (enrichment for py728msk); the kosher shops are in Buitenveldert (slice R) |

## Ideas for routes and documents (for slice D)

- **February 1941 walk**: Thorbeckeplein (Alcazar) - Rembrandtplein - Amstelveld - Waterlooplein -
  Jonas Daniël Meijerplein (Dokwerker) - Noorderkerk (strike called).
- **Jodenhoek synagogue walk**: Esnoga - Grote/Nieuwe Synagoge - Rapenburgersjoel (C-03) -
  Ets Haim (Rapenburgerstraat 109) - Uilenburgersjoel - Nieuwe Kerkstraat (Russensjoel, Elte) -
  Weesperplein.
- **Plantage 1942-1943**: Hollandsche Schouwburg - crèche/museum - Artis - register attack -
  Plancius - Henri Polaklaan.
- **Department stores and fashion**: Bijenkorf - Gerzon - Bonneterie - Hirsch - Metz.
- **Document: emancipation 1796 and the Adath Jeschurun split** (Felix Libertate, C-03,
  Jonas Daniël Meijer).
