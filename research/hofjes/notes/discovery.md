# Hofjes of Amsterdam: discovery (all sources, one merged list)

Slice `discovery`, 2026-11-24. Merged from the sources in the first table. Wikipedia (nl) and
our INVENTORY.json are cross-checks only. Access per hofje is not researched here (slices
`jordaan` and `city`); citywide access material is in `discovery-access.md`.

Slice column: **J** = `jordaan` (Jordaan + Haarlemmerbuurt), **C** = `city` (everything else).
Pool column: pool id if the place is in our pool; **INV** = listed in INVENTORY.json `in_pool`;
**pool, not INV** = in the pool but missing from INVENTORY.json; **NOT IN POOL** = new for us.

## Sources

| Key | Source | What it covers | Date | Reliability |
|---|---|---|---|---|
| HIA | hofjesinamsterdam.nl (WordPress, 57 posts; `wp-json/wp/v2/posts`) | The best single list of surviving hofjes: 57 entries, Jordaan and "buiten de Jordaan", each with address, founding year, original and current residents, notes | posts 2018 | Good; a resident-historian site; current use is as of 2018 |
| AH | amsterdamhistorie.nl/hofjes (map app; data at `POST /hofjes/script_hofjes?nu=`) | 92 hofjes incl. ~50 **gone** ones, with years of existence, address, lat/lng, aliases. Built from Kannegieter, W. Blok's list of gangen, address books 1927/1934-35, HIA, mokums.nl, Margry's book on Hofje van Brienen | undated (c. 2018 to 2020) | Good for history and gone hofjes; some "gone" are gang courts of private rental houses, not foundations (see AMS caveat) |
| JW | jordaanweb.nl: `HTML/jordaankaarthofjes.htm` (24 Jordaan hofjes map), `startamsterdam/HTML/hofjes.htm` (33 Amsterdam), `HTML/hofjes.htm` | Jordaan map with numbered hofjes; citywide list; counts (51 founded, 47 left, from BMA) | undated, mentions corona | Good list; no dates per item |
| AMS | amsterdam-monumentenstad.nl, `database/grachtenboek_tekst.php?id=61` (Hofje) | Essay with 13 linked object pages; key caveat: many "hofjes" in gangen were private rental courts, not foundation hofjes | undated | Good (BMA text) |
| AOK | amsterdamopdekaart.nl theme "Hofjes" (`/t/18/Hofjes`) | 32 items, mostly 1850-1940 buildings, incl. Hodshon-stichting NK 9-13, Lauriergracht 97, Tuinstraat 217 | last change July 2017 | Good for addresses and buildings |
| AOS | amsterdamoudestad.nl `bezienswaardigheden/hofjes-jordaan` and `/hofjes-grachtengordel` (buurtproject) | 16 hofjes with an "Open:" line each | undated (c. 2019) | Lead: hours undated |
| HVN | hofjesvannederland.nl (data: `hetphoenixproject.nl/hofjes/get_hofjes.php`, 202 NL hofjes) | 33 Amsterdam entries with address, lat/lng, long texts incl. "Bezoekersinformatie" | 2025-2026 app | **Lead only**: texts read machine-written; access lines are generic and contradict official ones (Begijnhof "09:00-17:00" vs the Begijnhof's own 10:00-18:00) |
| GEM | amsterdam.nl "Hofjes. Voor oude vrijsters of millennials?" | 56 hofjes in Amsterdam, 34 still in use as hofje; half private foundations, 10 church, rest corporations; oldest Sint Andries 1614, last 1922 Vossiusstraat | 24 Dec 2019 | Good (municipality) |
| ASI | amsterdamsights.com `attractions/hofjes.html`, `excursions/courtyards.html` | 8 hofjes with address and year | 2026 page | Tourist site, lead |
| XO | XO Hotels walk PDF "12 hofjes" (EN, DE) | 12-hofje Jordaan walk with opening hours | file Feb 2023 | Hotel blog: **lead only**, but the only dated list with hours |
| SOLO, CT, VAN, SOP | solosophie.com, theculturetrip.com, vanupied.com (FR), secretsofphiladelphia.com (Apr 2026) | Blog picks (Begijnhof, Karthuizer, Zon's, Brienen, Claes Claesz, Zwaardvegers, Sint Andries) | 2023 to 2026 | Leads only |
| SH | Stadsherstel: `monumenten/hodshon-dedelhofje`, Vriendenwandeling 2025 and 2026 PDFs, Kerkstraat 184-196 (old Deutzenhofje houses), event "Amsterdamse regentenkamers binnen de Singelgracht" (2023: 47 hofjes, ~25 with a furnished regents' room) | Owner of Hodshon-Dedelhofje (since 1980) and of houses that once belonged to the Deutzenhofje | 2023 to 2026 | Good |
| HdK | Vereniging Hendrick de Keyser (via the 1997 plaque, quoted by HIA) | Owner of the Bossche Hofje, Palmgracht 20-26, since 15 May 1997 | 1997 | Good (plaque); HdK's own site search returned nothing |
| CON | Hofjesconcerten (Stichting Kunst & Cultuur Jordaan & Gouden Reael): hofjesconcertenadam.nl, programme 2026 via stadsdorpgrachtenstraatjes.nl (20 Apr 2026), wijkkrant 2019 to 2026 | Concert locations in hofjes: Concordiahof Westerstraat 221-289, Platanenhof Lauriergracht 99, Looiershof (modern, Passeerdersstraat 16-18) | 2019 to 2026 | Good, dated |
| WK | Wijkkrant Jordaan & Gouden Reael, `jordaangoudenreael.nl/documenten/000000NN.pdf` | 221 PDFs read (2005 to 2026), 107 mention a hofje; screened by keyword (hofje + toerist/open/dicht/gesloten); mostly concerts, resident stories, open garden days | 2005 to 2026 | Good local voice; few access items (in discovery-access.md) |
| OA | Ons Amsterdam (robots-refusing: browser, targeted): "Wonen bij arme weduwen" (Felix Rottenberg, Mar 2011, Occo), "Vijfhonderd jaar ouderenzorg in Amsterdam", leads: "Een hofje in de Jordaan", "Een Gebouw van Barmhertigheijt" (Occo), "Naar recept van Petronella Calkoen" (Fontaine), "Wonen in een historisch jasje" | First hofje 1615 (Sint Andries), last 1922/23 (Molenpage); Karthuizer emptied 1970s | 2011 onward | Good; only 2 articles read |
| VOA | Vereniging Ons Amsterdam lecture "Hofjes in Amsterdam" by Henk Looijesteijn (16 Oct 2023) | **69 different hofjes** in Amsterdam c. 1500-1950, half founded in the 17th-18th c.; many newer ones gone | 2023 | Good (historian); his database (IISG "Giving in the Golden Age", ~600 NL hofjes) is not online |
| PAR | Het Parool "8x verborgen hofjes in Amsterdam om stilletjes te genieten" (Bente Strijbosch) | Paywalled; Raepenhofje pictured; the 8 not readable | 12 Mar 2025 | Lead |
| AT5 | at5.nl articles: Rijpenhofje (Nov 2022), Lutherhof (2015), Occo (gas evacuation), De Key's Tiers Bakker hofje (2021) | Single hofjes | 2014 to 2022 | Good, dated |
| COM | Wikimedia Commons `Category:Courtyards (hofjes) in Amsterdam` | 25 subcategories (photos), incl. Hamers Hofje, Henriëttehofje, Moenshofje (gone) | live | Photos; cross-check |
| AA | Stadsarchief beeldbank (e.g. 5293FO000256 "Lindengracht 171-187, Roetershofje") | Photos per address; the inventory search could not be queried by keyword from here | live | Good, per item |
| BOOKS | Lopes Cardozo & Van der Zwan, *Hofjes in Amsterdam* (Stadsdrukkerij 1979, 123 pp); *De hofjes van Amsterdam: 'door menschlievendheid gedreeven'* (Stichting Brienens Gesticht De Star / Het Oosten, 2005, 216 pp); H.W. Alings, *Amsterdamse hofjes*; A. Vels Heijn, *400 jaar Sint-Andrieshofje* (2015); Margry, *Hofje van Brienen. Twee eeuwen Amsterdams hofjesleven*; *Amsterdamse regentenkamers binnen de Singelgracht* (2023); Looijesteijn, *Hofjes als paleizen* (2014) | No table of contents online for any of them; catalogue records only (bibliotheek.nl, RCE catalogue) | | Not read |
| WP | nl.wikipedia (via INVENTORY.json) | Cross-check | | |

Also checked, nothing for this list: Open Monumentendag Amsterdam 2025/2026 site (no hofje in the
visible listing; programme loads dynamically, not exhausted), Open Tuinen Dagen (addresses not
published in advance), Fundatie Van den Santheuvel Sobbe (grant fund, no hofjes), Stadsherstel's
"wederopbouwhofje" (Burgemeester P.Ph. Paulplantsoen, **Broek in Waterland**, outside the
municipality), destadweesp.nl monuments (no hofje in Weesp besides the gasthuis), Landelijk
Hofjesberaad (book series only, no member list), iamsterdam (excluded by brief).

## Counts in the sources

GEM (2019): 56 hofjes, 34 still a hofje. JW/AMS (BMA): 51 founded, 47 left. Stadsherstel 2023:
47 hofjes, ~25 with a regents' room. VOA (Looijesteijn 2023): 69 hofjes c. 1500-1950. AH: 92
named sites incl. gone gang-courts. HIA: 57 surviving. This merge: **62 surviving (or with a
building; a few of them borderline, marked) + 41 gone = 103 distinct**, plus the borderline
items in section C.

## A. Surviving hofjes (or the building survives)

### Jordaan and Haarlemmerbuurt (slice J)

| # | Hofje | Address | Pool | Sources |
|---|---|---|---|---|
| 1 | Sint Andrieshofje (1614/1617) | Egelantiersgracht 105-141 | INV inre216aswcgsiueto25za5o | HIA AH HVN JW AOS AOK XO SOLO CT VAN GEM SH WK COM BOOKS WP |
| 2 | Claes Claesz. Hofje (complex of 1965 joining Anslo's Hofje 1616, Zwaardvegershofje 1738, Claes Claesz hofje) | Eerste Egelantiersdwarsstraat 1-5, Egelantiersstraat 18-54, Tuinstraat 35-49 | INV ju9b1flv3xggsmzq3728y1nl | HIA AH(3 entries) HVN JW AOS AMS XO SOLO WK WP |
| 3 | Hofje De Zeven Keurvorsten (c. 1645) | Tuinstraat 197-233 (AOK also lists "Tuinstraat 217") | INV q3csqmbep6m551bag3q42zrf | HIA AH HVN JW AOS AOK XO ASI COM WK WP |
| 4 | Regenboogs Liefdehofje (1806) | Tuinstraat 100-102 | INV mm0ajp1ubrzilto1l74y4h7x | HIA AH JW AOK XO WP |
| 5 | Raepenhofje (1648) | Palmgracht 28-38 | INV gudu912zn7rlnwv1i5ex5rwl | HIA AH HVN JW AOS AMS XO PAR COM WK(Feb 2026) WP |
| 6 | Bossche Hofje (1648) | Palmgracht 20-26 | INV gudu912zn7rlnwv1i5ex5rwl (same place) | HIA AH HVN JW XO ASI HdK COM |
| 7 | Lindenhofje (1616; rebuilt 1939) | Lindengracht 94-112 | INV y214ajrmw7hwfhpyktchlpmy | HIA AH HVN JW AOK WK |
| 8 | Suyckerhoff-hofje (1667/1670) | Lindengracht 149-163 | INV sfm0u42utmgcozlwa5jmtabq | HIA AH HVN JW AOS AMS XO ASI |
| 9 | **Roetershofje** (1673) | Lindengracht 171-185 | **NOT IN POOL** | AH (exists), AA photo "Lindengracht 171-187, Roetershofje". Only one list; verify that it survives as a court |
| 10 | Constantiahofje (1863/64, P.J. Hamer) | Willemsstraat 143-165 (JW lists "Willemsstraat 143-147" separately) | INV csqyprfyswstq5ykpx1wxbdd | HIA AH HVN JW AOK XO COM WK |
| 11 | **Broenshofje** (1851) | Boomstraat 52-56 | **NOT IN POOL** | HIA AH JW(map 7) AOS WP |
| 12 | Karthuizerhof / Huyszitten-Weduwenhof (1650) | Karthuizersstraat 61-191 | INV fia5m9yguy1c0xc03if3emwk | all lists |
| 13 | Concordia Noord (1864, P.J. Hamer) | Westerstraat 327-405 (pool, AH) **or** Westerstraat 221-289 (HIA, XO, CON "Concordiahof"); JW has two entries ("Anjeliersstr." and "Westerstraat") | INV da5cxlxl8mu9tw3n3gyzuac1 | HIA AH JW XO CON COM WK. **Check**: possibly two Concordia blocks; our place may sit at the wrong number range |
| 14 | **Huizen De Lely** (1872, Mennonite couples; linked to Rijpenhofje since 1965) | Bloemstraat 129-141 (AOK 129-149) | **NOT IN POOL** | HIA AH HVN JW(map 15) AOK |
| 15 | Rijpenhofje (1736; buildings 1913) | Rozengracht 116-138 | INV r3isw976npymofhussaew9yo | HIA AH JW AOK WK AT5 |
| 16 | Rozenhofje (1740) | Rozengracht 147-181 | INV k5btdtobpr1rpiq6anus18jw | HIA AH HVN JW AOK WK |
| 17 | Hofje Venetiae / Maarloopshofje (1650) | Elandsstraat 104-142 (old back door Lauriergracht 97, listed separately by AOK) | INV bt6m9smuolq464mgt4vombnu | HIA AH HVN JW AOK GEM COM |
| 18 | Hof van Parijs (1858) | Elandsstraat 158-182 | INV gqhvrldm2saiwl67elziy41u | HIA AH JW |
| 19 | Concordia Zuid (1858-59, P.J. Hamer) | Elandsstraat 183-197, back gate Lijnbaansstraat | INV whv0ndekjzu9ak6cv8wv3on8 | HIA AH JW WK WP. INVENTORY lists "Concordia Zuid (1859)" under `wikipedia_missing`: it is this pool place |
| 20 | Hofjen van de Weduwe Roosen (1820) | Eerste Passeerdersdwarsstraat 124-130 | INV btbep06clmme9cn98784x1fz | HIA AH HVN JW |
| 21 | Hamer- en Bouwershofje (1877) | Marnixstraat 281 | INV u165z6308tvfwa384bn4j6r5 | HIA AH JW AOK |
| 22 | Platanenhof (orphanage, later elderly homes; JW counts it as a hofje) | Lauriergracht 99-105, Elandsstraat 152-156 | INV ef8j0vovtsq9212cqzxoxn5r | AH JW CON. Borderline (orphanage) but on every Jordaan hofjes map |

### Rest of the municipality (slice C)

| # | Hofje | Address | Area | Pool | Sources |
|---|---|---|---|---|---|
| 23 | **Begijnhof** (before 1346) | Begijnhof 1-38, gate Gedempte Begijnensloot / Spui | Centrum, Burgwallen-Nieuwe Zijde | **NOT IN POOL** (A-list; `detail: theme` per LIST-VIEWS-SPEC) | HIA AH HVN JW AMS ASI SOLO CT GEM COM WP |
| 24 | Claes Reiniersz. Hofje / Liefde is 't Fondament (1618; rebuilt 1912-14) | Keizersgracht 332-346 | Grachtengordel-West | INV mrw332h6gn0yxjwn5m2wyft1 | HIA AH HVN JW AOS AOK GEM SH WP. INVENTORY lists "Claes Reinierszhofje" under `wikipedia_missing`: it is this pool place |
| 25 | Zon's Hofje (1765) | Prinsengracht 159-171 | Grachtengordel-West | INV osr8dtizi1j33szoc4ncyq9f | HIA AH HVN JW AOS AOK XO ASI SOLO CT COM |
| 26 | Hofje van Brienen / De Star (1804) | Prinsengracht 85-133 | Grachtengordel-West | INV ijifjk0orsdk04prdmraf645 | HIA AH HVN JW AOS AMS XO ASI SOLO COM BOOKS |
| 27 | Nieuwe Suykerhofje (1755) | Prinsengracht 383-395 | Grachtengordel-West | INV eu76f4laqwjnnsjhb5cafa87 | HIA AH JW AMS |
| 28 | **Hofje De Kalverengang** (late 19th c.; ended as hofje 1982) | Prinsengracht 511-523 | Grachtengordel-Zuid | **NOT IN POOL** | HIA AH. Now homes and offices; candidate `Gone` or borderline |
| 29 | **Huizen De Vogel** (1794/96, Mennonite couples) | Kerkstraat 316-320 | Grachtengordel-Zuid | **NOT IN POOL** | HIA AH. Now ordinary rentals |
| 30 | Deutzenhofje (1694/95) | Prinsengracht 855-899, Kerkstraat 190 | Grachtengordel-Zuid | INV xfz0k6e2arg3jzbeofmpn91j | HIA AH HVN JW AOS AMS ASI GEM SH COM |
| 31 | Swigtershofje (1744) | Amstel 86-98 | Grachtengordel-Zuid | INV x4qocbeumoafggfhzcvfdzq5 | HIA AH HVN JW COM |
| 32 | Looyershofje (1828/29) | Nieuwe Looiersstraat 20-40 | De Weteringschans | INV e09fcw1wybt00344q8v89zvd | HIA AH HVN AOS AMS ASI COM |
| 33 | Hilmanhofje (1875) | Nieuwe Looiersstraat 146-152 | De Weteringschans | INV w1d4xchf59cnd2169ibqqaao | HIA AH AOK |
| 34 | De Nooteboome Uytkijk (1774) | Lijnbaansgracht 287 | De Weteringschans | INV pz8393nv4gzc5a403sdtiah1 | HIA AH |
| 35 | Grill's Hofje (1724/27) | Eerste Weteringdwarsstraat 19-35 | De Weteringschans | INV mmoem3yv4t3phejyy43jdnvh (in "Three almshouses") | HIA AH HVN AOS AMS COM |
| 36 | Hodshon-Dedelhofje (1842) | Eerste Weteringdwarsstraat 83-105 | De Weteringschans | INV mmoem3yv4t3phejyy43jdnvh | HIA AH HVN AOS AOK SH COM |
| 37 | Stichting Vrouwe van Heemskerk (1890) | Derde Weteringdwarsstraat 25 | De Weteringschans | INV mmoem3yv4t3phejyy43jdnvh | HIA AOK |
| 38 | Corvershof (1721-23) | Nieuwe Herengracht 6-18 | Weesperbuurt/Plantage | pool, not INV: uxgxywibm91l8g6i1jguv8yv (child of jsqzy99kv0mxkc3kj7npw3s7) | HIA AH HVN AMS GEM COM. INVENTORY lists it under `wikipedia_missing`: it is in the pool |
| 39 | Bestedelingenhuis Amstelrank (1789, Johanna Bontekoning) | Nieuwe Herengracht 20 | Weesperbuurt/Plantage | pool, not INV: inside uxgxywibm91l8g6i1jguv8yv | HIA |
| 40 | Magdalena Hodshonhof (1876/78) and Hodshon-stichting | Nieuwe Keizersgracht 1b (back) and 9-13 | Weesperbuurt/Plantage | pool, not INV: h51lytdhxggyij7guv94j8yw | HIA AOK |
| 41 | Van Limmikstichting (1895) | Nieuwe Keizersgracht 1a (back) | Weesperbuurt/Plantage | pool, not INV: h51lytdhxggyij7guv94j8yw | HIA AOK |
| 42 | Van Brants Rus Hofje (1732/33) | Nieuwe Keizersgracht 28-44 | Weesperbuurt/Plantage | INV qe1b2e08dtg739m19t7q4jfy | HIA AH HVN AMS GEM COM WP |
| 43 | Occo Hofje (1774) | Nieuwe Keizersgracht 94 | Weesperbuurt/Plantage | INV nsn2xyns8eu2jwm7a11uviz4 | HIA AH HVN AMS GEM OA AT5 |
| 44 | Sophia Adriana Stichting (1890) | Nieuwe Herengracht 43 | Nieuwmarkt/Lastage | INV ervxg90314k2nzi75uwpv0pc | HIA AOK |
| 45 | **Fernandes Nuneshuis** (1786, Portuguese-Jewish women) | Nieuwe Kerkstraat 16 | Weesperbuurt/Plantage | **NOT IN POOL** | HIA AH (gone as hofje 1945). One house, no court: borderline |
| 46 | Vredenburgh (1836-1976) | Vredenburgersteeg 1-35 | Burgwallen-Oude Zijde | pool, not INV: ecdubrrj9f6v7d2on5h6sh7v | HIA AH AOK |
| 47 | Het Falckshuis (1905, widows' home) | Keizersgracht 713-715 | Grachtengordel-Zuid | pool, not INV: elhkkzxrcsp7tkt024884c5m | Ours only; on no hofjes list. Borderline (one building) |
| 48 | **Molenpage Stichting** (1922, the last foundation hofje) | Vossiusstraat 13 | Zuid, Museumkwartier/Willemspark | **NOT IN POOL** | HIA GEM OA |
| 49 | Fontainehofje (1753; here 1913) | Valeriusstraat 198 | Zuid, Willemspark | INV rkrxrav283appy9y1s81jz3x | HIA AH HVN AOK OA |
| 50 | **Holthuysenhofje** (1897) | Oosterpark 6 | Oost, Oosterparkbuurt | **NOT IN POOL** | HIA AH(gone as hofje c. 1980) HVN AOK |
| 51 | **Elisabeth Otter-Knoll Stichting** (1886; building 1912; moved to Buitenveldert 1982) | Eikenplein 2 | Oost, Oosterparkbuurt | **NOT IN POOL** | HIA AH. Building status unknown: verify |
| 52 | **Catharinahofje** (1889; here 1906) | Overtoom 224 | West, Helmersbuurt | **NOT IN POOL** | HIA AH HVN AOK |
| 53 | **Eendracht Anslo** (1789; building 1970) | Overtoom 295 | West, Overtoomse Sluis | **NOT IN POOL** | HIA AH HVN. 1970 building: borderline |
| 54 | Lutherhof / Staringhof (1909; heir of the Konijnenhofje of 1670) | Staringplein 9 | West, Overtoomse Sluis | pool, not INV: xf7as10xcgg1sm2mrmza3qtp | HIA AH HVN AOK AT5 |
| 55 | Hugo de Groothof / Weduwenhof (1882) | Eerste Hugo de Grootstraat 13 | West, Hugo de Grootbuurt | pool, not INV: d716qm824fx1khhiduv03uij | HIA AH HVN AOK |
| 56 | **Anna Maria Stichting** (1894) | De Wittenstraat 73 | West, Staatsliedenbuurt | **NOT IN POOL** | HIA AH(sold 1984, squatted, now women's shelter) AOK |
| 57 | Everdina de Lanoyhof / Van Hallhofje (1882; building 1910) | Van Hallstraat 51 | West, Staatsliedenbuurt | INV h9bk063jmavwrtwvabkhw2wc ("Remonstrant almshouse") | HIA AH AOK |
| 58 | P.W. Janssenhof (1894, P.J. Hamer) | Da Costastraat 38-58 | West, Da Costabuurt | INV xh9c374cb2fk2degk6z1coyp | HIA HVN AOK COM |
| 59 | Gijsbert Bakker hofje (1933) | Reinier Claeszenplein 1-59 | West, Geuzenbuurt | INV k6irx6ilchydtiwy4qrgb2yz | HIA. HIA also names the foundation's 1905 house at **Fokke Simonszstraat 1** (not in pool; verify) |
| 60 | Augustanahof (church turned hofje) | Erasmusgracht 24-28 | West, Erasmuspark | INV gxemo5tow9g7d4xgkvq3c7kf | WP (category) |
| 61 | Widows' homes, Tweede Hugo de Grootstraat (1880s, Protestant widows' fund) | Tweede Hugo de Grootstraat 2-18 | West | pool, not INV: joijzov0dkzt6r2yzlcwc0na | Ours only. Borderline (two rows, no court) |
| 62 | St. Bartholomeus Gasthuis | Nieuwstraat 41-43, Weesp | Weesp | INV igy1tvh3ics1npsd1nc5y25k | Ours. A gasthuis, not a hofje (borderline); no other Weesp hofje found in any source |

## B. Gone hofjes (AH unless noted; "trace" = something still visible)

Many of these were gang courts of small houses rented out privately (AMS caveat), not
charitable foundations; AH treats them all as hofjes. Candidates for `status: Gone` only if a
trace or a good story exists.

| Hofje | Address | Existed | Slice | Note |
|---|---|---|---|---|
| Oude Doelenhofje | Prinsenhofssteeg 4-5 | 1560-before 1875 | C | **trace: the gate survives** |
| Schippershofje | Oudekerksplein 24-26 | to after 1935 | C | **trace: the entrance survives** |
| Bussenschuthofje | Rapenburgerstraat 123-155 | ? | C | **trace: gable stone with cannon and gunner over the gate**; possibly not a charity |
| Klein Schippershofje | Oudekerksplein 20 | to 1935 | C | |
| Klokkenhofje | Uilenburgerstraat 71-79 | to 1906 | C | |
| Zonnehofje | Valkenburgerstraat 11-37 | to 1935 | C | |
| Hamerhofje (old site; COM "Hamers Hofje") | Herengracht 373-387 | 1626-1877 | C | moved to Marnixstraat 281 |
| Fonteinenhofje (old site) | Keizersgracht 47-63 | 1754-1913 | C | moved to Valeriusstraat 198 |
| Henriëttehofje (COM) | Stadhouderskade 85, then Marnixstraat 237-241 | 1867-1969 | C | demolished 1969 |
| Appelenhofje | Lange Leidsedwarsstraat 192-196 | 1805-1927 | C | |
| Spiegelhofje / Pleinshofje | Lijnbaansgracht 276 | to 1935 | C | |
| Klaverbladshofje | Lijnbaansgracht 349-353 | to 1935 | C | |
| Hofje De Witte Os | Lijnbaansgracht 390 | to 1876 | C | |
| Groenehofje | Nieuwe Looiersstraat 33 | to 1927 | C | |
| Gruttershofje | Nieuwe Looiersstraat 6-10 | 1855-1935 | C | |
| Houtkopershofje | Nieuwe Looiersstraat 52-56 | 1819-1935 | C | |
| Turfdragershofje | Nieuwe Looiersstraat 108 | to 1875 | C | |
| Turfdragershofje | Prinsengracht 933-941 | to 1875 | C | |
| Catharinahofje (old site) | Egelantiersgracht 201-215 (Vierhuizengang) | 1889-1906 | J | moved to Overtoom 224 |
| Lutherse Diaconiehofje / Konijnenhofje | Konijnenstraat 16-48 | 1670-1909 | J | gable stones reused at the Lutherhof |
| Anjeliershofje | Anjeliersstraat 138-140 | 1651-1945 | J | |
| Bijbelhofje | Anjeliersstraat 45-53 (Bijbelsgang) | 1703-1927 | J | |
| Trompettenhofje | Anjeliersstraat 93-95 | 1621-1946 | J | |
| Beeks Hofje | Anjeliersstraat 104-112 (Schuiermakersgang) | 1655-1944 | J | |
| Brillenhofje | Willemsstraat 196 | 1716-1869 | J | |
| Kloosterhofje | Willemsstraat 94-108 | to 1906 | J | |
| Lombardshofje | Lindengracht 15 | 1805-1935 | J | |
| Herdershofje | Tuinstraat 233-245 | to 1906 | J | |
| Karsebomenhofje | Tuinstraat 22-28 | to 1935 | J | |
| Hoedenmakershofje | Laurierstraat 8-14 | to 1911 | J | |
| Salamanderhofje | Elandsstraat 34-36 | to 1935 | J | |
| Mosterdpothofje | Elandsstraat 155-169 | 1873-1935 | J | |
| Emmenessehofje | Lijnbaansgracht 212-214 | to 1927 | J | |
| Keizershofje | Rozenstraat 246-248 | to 1937 | J | |
| Stuurmanshofje | Rozenstraat 24-44 (Stijfselgang) | to 1935 | J | |
| Vossenhofje | Rozengracht 39-47 (Vossengang) | to 1952 | J | **trace: the gangen still exist** |
| Tamboershofje | Bloemstraat 171-173 | to 1935 | J | |
| Wassende Maanshofje | Westerstraat 41-45 | to 1958 | J | |
| Ockershofje | Kromme Palmstraat (earlier Heiligeweg) | 1650-1854 | J | |
| Moenshofje / Ottershofje (COM) | Vinkenstraat 105-113 | 1636-1938 | J (Haarlemmerbuurt) | |
| Hofje Hij is mijn Borg / Medemblikker Hofje | Vinkenstraat 133-139 | 1755-1935 | J (Haarlemmerbuurt) | |

## C. Borderline (list only, do not draft)

| Item | Address | Pool | Why borderline |
|---|---|---|---|
| Amundsenhofje | Amundsenweg 1 / Robert Scottplein 1-7 (Nieuw-West) | not in pool | 2010s private co-housing (CPO) round a garden; only HVN calls it a hofje |
| Landscronerhof | Weesp (AM project) | not in pool | modern courtyard housing for elderly, marketed as "hofje" |
| Anjeliershof (nieuwbouwhofje) | Anjeliersstraat 39-59 | not in pool | modern infill named after the gone hofje (AH) |
| Looiershof | Passeerdersstraat 16-18 / Prinsengracht 338 | not in pool | modern housing court; hosts hofjesconcerten and the Open Tuinendag Jordaan start |
| Klokkenhof | Surinameplein 53-59 | c6j6j0uxtpxxgtd4dm9edrwx | 1961 tower for single working women |
| Old people's houses, Kometensingel | Kometensingel 439-485 (Noord) | w8ckwk50pz251fg61q936eme | 1937 municipal U-court of old people's homes |
| Old people's houses, Monnikendammerplantsoen | Noord | at4e6fljswsat7v395m6mrec | 1931-33 municipal cottages round a green |
| Van Eyck and Rietveld old people's homes | Slotermeer | l8g5czkdf0wjgskt5qusu62y | post-war municipal elderly housing |
| Wittenberg (Luther Museum) | Nieuwe Keizersgracht 570 | xviz39kgh0jkgcfaslwa78e3 | oudeliedenhuis (300 people), not a hofje |
| Sint Jacob | Plantage Middenlaan 52 | nz2r3ydhsg8ntqofh3e5wsqo | Catholic old people's home, only chapel wing left |
| Oudemanhuispoort | Oudemanhuispoort | mzjh6zzxjwwhrwf8pnynjuka | old men's house (COM files it under hofjes) |
| Burgerweeshuis courtyards | Kalverstraat 92 | (Amsterdam Museum) | orphanage (COM files it under hofjes) |
| Sint Aloysius Gesticht | (COM category) | | orphanage/gesticht |
| Zaanhof, Krugerhof, Geuzenhof, Oranjehof, Harmoniehof, Linnaeushof, Muzenhof etc. | | in pool | 20th-century housing blocks called "-hof" |
| Huiszittenhuis, Binnengasthuis, Pesthuis, Wilhelmina Gasthuis | | in pool | gasthuizen / poor relief, not hofjes |
| Broek in Waterland wederopbouwhofje (Stadsherstel) | Burgemeester P.Ph. Paulplantsoen 1-12 | | outside the municipality |

## Missing from INVENTORY.json (summary)

New, not in the pool at all (with area):
- Jordaan (J): **Broenshofje** (Boomstraat 52-56), **Huizen De Lely** (Bloemstraat 129-141), **Roetershofje** (Lindengracht 171-185, verify).
- Centrum (C): **Begijnhof** (needs `detail: theme`), **Huizen De Vogel** (Kerkstraat 316-320), **Hofje De Kalverengang** (Prinsengracht 511-523, ended 1982), **Fernandes Nuneshuis** (Nieuwe Kerkstraat 16, borderline).
- Zuid (C): **Molenpage Stichting** (Vossiusstraat 13).
- Oost (C): **Holthuysenhofje** (Oosterpark 6), **Elisabeth Otter-Knoll Stichting** (Eikenplein 2, verify building).
- West (C): **Catharinahofje** (Overtoom 224), **Eendracht Anslo** (Overtoom 295, 1970 building), **Anna Maria Stichting** (De Wittenstraat 73).
- Gone with a trace (C): Oude Doelenhofje gate (Prinsenhofssteeg 4-5), Schippershofje entrance (Oudekerksplein 24-26), Bussenschuthofje gable stone (Rapenburgerstraat 123-155); (J) Vossengang (Rozengracht 39-47).

In the pool but missing from INVENTORY.json `in_pool`: Corvershof + Amstelrank
(uxgxywibm91l8g6i1jguv8yv), Hodshon and Van Limmik (h51lytdhxggyij7guv94j8yw), Lutherhof
(xf7as10xcgg1sm2mrmza3qtp), Hugo de Groothof (d716qm824fx1khhiduv03uij), Vredenburgh
(ecdubrrj9f6v7d2on5h6sh7v), Het Falckshuis (elhkkzxrcsp7tkt024884c5m), Widows' homes Tweede
Hugo de Grootstraat (joijzov0dkzt6r2yzlcwc0na).

INVENTORY `wikipedia_missing` corrections: "Claes Reinierszhofje" = pool mrw332h6gn0yxjwn5m2wyft1
(Liefde is 't Fondament); "Concordia Zuid (1859)" = pool whv0ndekjzu9ak6cv8wv3on8; "Corvershof"
= pool uxgxywibm91l8g6i1jguv8yv. Only Begijnhof and Broenshofje are truly missing from that list.

## Open questions for the area slices

- Concordia Noord: Westerstraat 327-405 (our place, AH) vs 221-289 (HIA, XO, hofjesconcerten
  "Concordiahof"). Check whether there are two blocks and which one has the court (J).
- Roetershofje, Lindengracht 171-185: one source only (J).
- Otter-Knoll building at Eikenplein 2: still standing? (C)
- Fokke Simonszstraat 1, Gijsbert Bakker house of 1905: still standing? (C)

## Not read

- Het Parool, 12 Mar 2025 (paywall): which 8 hofjes.
- Ons Amsterdam: "Een hofje in de Jordaan", "Een Gebouw van Barmhertigheijt", "Naar recept van
  Petronella Calkoen", "Wonen in een historisch jasje" (targeted reads left to the area slices).
- Books (no tables of contents online): Lopes Cardozo & Van der Zwan 1979; *De hofjes van
  Amsterdam* 2005; Alings; *Amsterdamse regentenkamers binnen de Singelgracht* 2023.
- Stadsarchief inventory search for "hofje" archives (site search did not run in the browser).
- Open Monumentendag Amsterdam 2026 full programme (dynamic list).
- mokums.nl/hofjes.html (empty response), amsterdamsehofjes.nl (did not resolve).
