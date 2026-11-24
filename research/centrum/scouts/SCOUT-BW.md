# Centrum scout BW: theme B (hidden history and behind the gate), zone West

Scouted 2026-11-24. Zone West of stadsdeel Centrum: Jordaan, Haarlemmerbuurt (with the Western Islands), Grachtengordel-West. Sweeps 4 (hidden history) and 5 (behind the gate). Nothing is written to the map: the user picks. Items of SCOUT-DW (the local-papers scout of this zone, done) are not repeated; where a find belongs to a DW item it says "group with DW-nn".

Raw downloads and notes: `$S/centrum-scout-BW/` (jw/ = Jordaanweb pages, tb/ = Theo Bakker PDFs, sh/ = Stadsherstel pages, dl/ = other PDFs, wiki/ = raw nl.wikipedia articles). Every pin was point-checked with `areas.locate` (borough Centrum, wijk as named). Pins taken from the monument slices are the RCE point of the record; pins geocoded through PDOK are the address point.

**Monument slices.** Many hofjes and listed buildings below are also records in the monument slices (`research/centrum/slices/jordaan-*.json`, `gg-west-*.json`, `haarlemmer-*.json`). Where that is so the item says "merge with monument <nr> (<slice>)": the point is the hook, which the monument drafter should use. Sint Andrieshofje, Claes Claesz. Hofje (Anslo's Hofje), Hofje Venetiae and Hof van Parijs are already drafted in `places/jordaan-1.yaml`; Herengracht 14 (hidden church), the Cromhout houses, Huis Bartolotti and Proeflokaal A. van Wees in `places/gg-west-2.yaml`: not repeated here, but their opening facts are in the hofjes table.

## Sources

Gone through completely:

- **Jordaanweb** hofjes page (`jordaanweb.nl/startamsterdam/HTML/hofjes.htm`) plus 25 Jordaan street and corner pages that carry hofjes, gangen and gable stones (raw `jw/`, 25 pages).
- **amsterdamoudestad.nl**, "Courtyards of the Jordaan" (https://amsterdamoudestad.nl/en/places-of-interest/courtyards-jordaan): every hofje with its access rule (undated page, read 2026-11-24).
- **XO Hotels "12 hofjes" walk**, 2023 (https://xohotels.com/wp-content/uploads/2023/02/12-hofjes-EN.pdf): 12 hofjes with opening hours.
- **Geocache GC20DV1**, "Hofjes in de Jordaan" (https://www.geocaching.com/geocache/GC20DV1), 2009: access per hofje at the time.
- **amsterdamsights.com** hofjes and courtyards pages (2 pages).
- **Theo Bakker PDFs** (https://www.theobakker.net/pdf/...): 14 downloaded; jordaangangen, haarlemmerbuurt, bickerseiland, driehoekstraat, papeneiland, raadsels, donkeresluis and poorten read in full; jordaan, sintandries, kloostersadam and vierde_uitleg searched for surviving traces.
- **Stadsherstel**: the monument sitemap (773 URLs) filtered to the zone, and every zone page read (about 34 pages: monument and eventlocatie pages), plus the Vriendenwandeling 2025 PDF (https://stadsherstel.nl/wp-content/uploads/2025/09/Vriendenwandeling-2025.pdf).
- **nl.wikipedia**: category "Hofje in Amsterdam" (all zone entries) and 97 zone articles fetched raw (`wiki/`), of which about 50 read (all hofje, hidden church, building and bridge articles of the zone; see Checked and dropped for the ones that were out of zone or empty).
- **Catharijneconvent, Rapport Schuilkerken** (https://www.catharijneconvent.nl/documents/303/Rapport_Schuilkerken.pdf): the zone's hidden churches.
- **Arcam shelter route** (https://arcam.nl/wp-content/uploads/2022/10/Fietsroute-langs-de-Openbare-Schuilplaatsen-van-Amsterdam-1.2.pdf): no public shelter in zone West.
- **Urban Oases** (TU Delft, https://pure.tudelft.nl/ws/portalfiles/portal/170872561/Urban_Oases2.pdf): the hofjes chapter, for the count and ownership.
- **WebSearch** (Dutch first, then English): about 25 queries on hofjes access, the Van Brienen legend, the Bleijskapel, the Pottenbakkersgang, Blijvend Applaus, the hidden churches, gangen.

Only sampled:

- The remaining nl.wikipedia street articles (Westelijke Eilanden, Lindengracht, Bloemgracht, Lauriergracht, Looiersgracht, Bickersgracht, Zandhoek, Realengracht, Leliegracht, Blauwburgwal and others): fetched, not read to the end.
- Theo Bakker sluizen and straattypen: downloaded, not read.
- Hendrick de Keyser house pages: loaded by JavaScript, not readable with curl; the browser was not used for them.

What that leaves open: access of five hofjes (Venetiae, Rijpenhofje, Nieuwe Suykerhofje, Claes Reinierszhofje, Constantia-Zuid) is unknown; the Western Islands are thin on theme B beyond what DW already has; nothing from onsamsterdam.nl (robots); no Stadsarchief beeldbank work; no site visit, so every "open" is as of the source date.

## Coverage

| sweep | Jordaan | Haarlemmerbuurt | Grachtengordel-West |
|---|---|---|---|
| 4 hidden history | done (Jordaanweb, Theo Bakker, Stadsherstel, Wikipedia) | partial: Western Islands only through Stadsherstel and Theo Bakker; Wikipedia island articles unread | partial: Wikipedia building articles read, street articles not |
| 5 behind the gate | done: complete hofjes list below | done: no hofje in the wijk; courtyards checked | done for hofjes; hidden churches done; private gardens not searchable |

## The hofjes of the zone: complete list

Status is open or shut to visitors, with the source and its date. "Walk 2023" = XO Hotels walk PDF; "AOS" = amsterdamoudestad.nl (read 2026-11-24); "GC 2009" = geocache GC20DV1; "JW" = Jordaanweb; "TB" = Theo Bakker. Amsterdam had 51 hofjes founded and 47 remain, more than half in the Jordaan (JW after Bureau Monumenten en Archeologie); the Jordaanweb map counts 24 in the Jordaan, which includes the Concordia/Constantia courts and the Platanenhof.

| hofje | address | monument (slice) | open or shut, when | item |
|---|---|---|---|---|
| Karthuizerhof (Huiszittenweduwenhof) | Karthuizersstraat 89 to 171 | 2194 (jordaan-2) | open daily 10:00 to 20:00, no groups (AOS); "(nog) openbaar" (JW) | BW-01 |
| Sint Andrieshofje | Egelantiersgracht 105 to 141 | drafted, jordaan-1 | open by day; hours differ: Mon to Sat 9:00 to 18:00 (walk 2023), daily 10:00 to 17:00 (AOS), 10:00 to 17:00 closed Sunday (GC 2009) | drafted |
| Claes Claesz. Hofje (Anslo's) with the Zwaardvegershofje | Egelantiersstraat about 52 (open by day); Tuinstraat 35 to 37 door shut (white steel door) | drafted, jordaan-1 | open by day through the Egelantiersstraat | drafted |
| Raepenhofje | Palmgracht 28 to 38 | 4073 (jordaan-3) | open by day, gate locked at night (AOS, GC 2009) | BW-02 |
| Bossche Hofje | Palmgracht 20 to 26 | 4072 (jordaan-3) | same court as Raepenhofje, behind a low hedge | BW-02 |
| Suykerhofje | Lindengracht 149 to 163 | 3549 (jordaan-3) | open weekdays, shut Saturday and Sunday (walk 2023) | BW-03 |
| Lindenhofje | Lindengracht 94 to 112 | 204037 (jordaan-3) | shut: "niet meer te bezoeken" (TB) | BW-13 |
| Broenshofje | Boomstraat 52 | not listed | shut (JW, walk 2023) | BW-14 |
| Regenboogs Liefdehofje | Tuinstraat 100 to 102 | 215024 (jordaan-5) | shut: "unfortunately cannot enter" (walk 2023) | BW-15 |
| Hofje De Zeven Keurvorsten | Tuinstraat 197 to 225 | 5769 (jordaan-5) | usually open by day (AOS, walk 2023) | BW-04 |
| Concordiahof (Concordia Noord) | Westerstraat 221 to 289 and 327 to 405, Anjeliersstraat 308 to 394 | not listed | gates; courts used for summer concerts (JW); day access not confirmed | BW-06 |
| Constantiahofje, with the "Constantia woningen" | Willemsstraat 149 to 165 (and 143 to 147) | 518324 (jordaan-6) | gate open (walk 2023) | BW-05 |
| Hofje Venetiae | Elandsstraat 102 to 150, back gate Lauriergracht 97 | drafted, jordaan-1 | unknown | drafted |
| Hof van Parijs | Elandsstraat 160 to 182 | drafted, jordaan-1 | original demolished 1902; new-build | drafted |
| Constantia-Zuid / Concordia Zuid | inner garden of the Elandsstraat/Elandsgracht block | not listed | unknown | Look for |
| Platanenhof | Lauriergracht 99 to 105 / Elandsstraat 152 to 156 | 1038 (jordaan-2) | open for concerts (JW hofjesconcerten); day access not confirmed | BW-07 |
| Rozenhofje | Rozengracht 147 to 181 | 5070 (jordaan-5) | shut; open only on Open Monumentendag (JW) | BW-08 |
| Rijpenhofje | Rozengracht 116 to 138 | 215008 (jordaan-5) | unknown | BW-16 |
| Huizen De Lely | Bloemstraat 129 to 139 | 204002 (jordaan-1) | unknown; little known beyond the name | dropped |
| Hamers- en Bouwershofje ("Verdriethuisjes") | Marnixstraat 281 (back Westerkade 21) | 204043 (jordaan-3) | shut: no court, one central corridor; staff housing of Hotel Okura (Wikipedia) | BW-09 |
| Hofje van de Weduwe Roosen | Eerste Passeerdersdwarsstraat 124 to 130 | 4079 (jordaan-1) | no court; seen from the street | BW-10 |
| Looiershof | Passeerdersstraat 16 to 18 | not listed | concert venue (JW); history not found | dropped |
| Van Brienenhofje "De Star" | Prinsengracht 85 to 133 | 4268 (gg-west-4) | open Mon to Fri 6:00 to 18:00, Sat 6:00 to 14:00 (walk 2023) | BW-17 |
| Zon's Hofje | Prinsengracht 159 to 171 | | open Mon to Fri 10:00 to 17:00 | DW-36 |
| Nieuwe Suykerhofje | Prinsengracht 385 to 395 | 4328 (gg-west-4) | unknown | BW-18 |
| Claes Reinierszhofje | Keizersgracht 332 to 334 | 208007 (gg-west-3) | unknown; nothing beyond the register name found | dropped (Look for) |
| Haarlemmerbuurt | | | no hofje found in any source | |

## Shortlist

### Behind the gate (sweep 5)

**Jordaan**

**BW-01 Karthuizerhof: 104 widows' homes on a Carthusian monastery.** Pin 52.378526, 4.881514 (pin approximate, middle of the court), Karthuizersstraat 89 to 171. Built 1650 by city architect Daniël Stalpaert for the Huiszittenmeesters as the Huiszittenweduwenhof, 104 homes (76 for the Nieuwezijds, 28 for the Oudezijds), on the ground of the Carthusian monastery Sint Andries ter Zaliger Haven (1394, wrecked by the geuzen in 1566), whose prior Willebord is a character in Vondel's Gijsbrecht; the monastery court was a plague graveyard from 1602. Inside: two 17th-century pumps (fish-head and mascaron spouts), a cog ship over the gate on the inside and the city arms on the outside, the names of the first regents over the entrance. The elderly left in 1973, it was squatted the same year with the city's consent, renovated 1986 to 65 homes; Ymere owns it. Local voice: the street is the "Droogstokkenstraatje" after the white drying racks (JW). Lead: Jordaanweb hofjes page; second: nl.wikipedia "Huiszittenweduwenhof" and Theo Bakker jordaan.pdf. Status: open daily 10:00 to 20:00, no groups (AOS, read 2026-11-24). Caveats: residents' court, keep quiet; listed; the graveyard part is DW-25 (Noorderspeeltuin). Rank: **Amazing**. Merge with monument 2194 (jordaan-2); group with DW-25.

**BW-02 Raepenhofje and Bossche Hofje: one court, two hofjes, a hedge between.** Pin 52.382400, 4.883687, Palmgracht 28 to 38 (Raepenhofje) and 20 to 26 (Bossche Hofje, 52.382302, 4.883909). Both plots were bought on the same day in 1648 and today only a low hedge divides them (TB). The Raepenhofje has a turnip ("raap") keystone with "P.A." (Pieter Adriaensz. Raep), a Vondel verse and the text "Salig syn de vreedsamen"; female students live there now. The Bossche Hofje (1648) housed eight elderly Mennonite women. Lead: Theo Bakker driehoekstraat.pdf; second: Jordaanweb hofjes page and AOS. Status: open by day, the gate is locked at night (AOS read 2026-11-24; GC 2009). Caveats: listed; residents. Rank: Nice. Merge with monuments 4073 and 4072 (jordaan-3).

**BW-03 Suykerhofje: only for women of a peaceful temper.** Pin 52.379738, 4.883394, Lindengracht 149 to 163. Founded 1667, court from 1670; admission asked for a "vreedzaam humeur". Lead: Jordaanweb hofjes page; second: walk 2023. Status: open weekdays, shut Saturday and Sunday (walk 2023). Caveats: listed; hours unconfirmed after 2023. Rank: Nice. Merge with monument 3549 (jordaan-3).

**BW-04 Hofje De Zeven Keurvorsten: a gunpowder maker's Catholic hofje with its history in a chronogram.** Pin 52.376325, 4.879688, Tuinstraat 197 to 225. Founded about 1645 by gunpowder maker Cornelis Martensz. Pronck for poor Catholic women "van onbesproken gedrag"; seven houses added 1724, a prayer room over the gate 1778, the St Barbara chapel next door used from 1862 until after the war. The history is told in a chronogram in the court; a gable stone says "Alidaeshofje", a name that never caught on, and "Zeven Keurvorsten" may be a mocking name from Protestant neighbours. Renovated 2012, now 12 homes; monograph by Marijke Bruggeman (2009). Lead: nl.wikipedia "Hofje De Zeven Keurvorsten"; second: AOS. Status: usually open by day (AOS read 2026-11-24, walk 2023). Caveats: the mocking-name origin is "may be" in the source. Rank: Nice. Merge with monument 5769 (jordaan-5).

**BW-05 Constantiahofje: free homes for loyal old workmen.** Pin 52.380766, 4.881987, Willemsstraat 149 to 165. Built 1863 by P.J. Hamer for the Stichting voor den Ambachtsstand: rent-free homes for workmen over 60 who had served one employer at least 12 years; named after Constantia van Loon. The extra houses at 143 to 147 (1868/1873) carry the lettering "Constantia woningen"; Jordaanweb lists them as a "naamloos hofje". Lead: nl.wikipedia "Constantiahofje"; second: walk 2023. Status: gate open (walk 2023); Ymere owns it. Caveats: listed. Rank: Nice. Merge with monument 518324 (jordaan-6).

**BW-06 Concordiahof: bleaching courts behind the Westerstraat.** Pin 52.377255, 4.880632 (pin approximate, Anjeliersstraat side of the block), entrances Westerstraat 221 to 289 and 327 to 405, Anjeliersstraat 308 to 394. Late-19th-century back-to-back workers' blocks of Bouwmaatschappij Concordia around two inner bleaching courts, reached through gates; summer hofjes concerts. Lead: Jordaanweb hofjes and Westerstraat pages; second: Jordaanweb hofjesconcerten map. Status: concerts listed on Jordaanweb (undated); day access not confirmed. Caveats: may be shut; pin approximate. Rank: Okay. New place.

**BW-07 Platanenhof: the Catholic boys' orphanage and the passages under it.** Pin 52.370704, 4.878710 (gate on the Lauriergracht; the slice point is 52.370039, 4.878850), Lauriergracht 99 to 105 / Elandsstraat 152 to 156. Catholic boys' orphanage from 1686 by Steven Vennecool, an orphanage until 1954, then De Triangel 1971 to 1992; now 22 homes, a youth theatre and a nursery; named in 1971 after its ten plane trees. Under the complex runs a system of passages, said to link to the old monasteries; in the war weapons for the resistance were hidden there; others think they are water cellars. Lead: Jordaanweb platanenhof page; second: nl.wikipedia "Platanenhof". Status: concert venue (Jordaanweb, undated); day access not confirmed. Caveats: the passages are not open and their purpose is disputed: tell it as a story with both versions. Rank: Nice. Merge with monument 1038 (jordaan-2).

**BW-08 Rozenhofje: on the site of Lingelbach's maze.** Pin 52.372552, 4.878057, Rozengracht 147 to 181. Stands where Lingelbach's 17th-century doolhof (maze, a pleasure garden) was; five houses of 1743/1744 founded from Jan de Jager's estate for single Mennonite women; rebuilt 1884 by G.B. and A. Salm; a clock of 1790. Lead: nl.wikipedia "Rozengracht 147-181"; second: Jordaanweb hofjes page. Status: shut; open only on Open Monumentendag (JW). Caveats: the maze left no trace; listed. Rank: Nice. Merge with monument 5070 (jordaan-5).

**BW-09 Hamers- en Bouwershofje, the "Verdriethuisjes".** Pin 52.374677, 4.876888, Marnixstraat 281 (back on Westerkade 21, the two fronts are the same). Two old hofjes merged here in 1877: De Hamer's little houses at Herengracht 373 to 387, sunk half below the street when the quay was raised and so called the "verdriethuisjes", and Marretje Arend Bouwersdochter's four houses in the Wijde Steeg (1634). The old residents paid almost no rent and would not move until the city let the old houses decay; the last came in 1885 and brought the old gable stone, a shield with swans (Syvert P. Sem) and leaves (Maria Bouwers). By J.H. Coelewij: 24 one-room homes off one corridor for widows and single women over 50; Vrouwen van Bethanië from 1925; now staff housing of Hotel Okura. Local voice: "verdriethuisjes". Lead: nl.wikipedia "Hamer en Bouwershofje"; second: Jordaanweb hofjes page. Status: building in use (Wikipedia, 2017 photos); no access. Caveats: see it from the street, both fronts; listed. Rank: Nice. Merge with monument 204043 (jordaan-3).

**BW-10 Hofje van de Weduwe Roosen: a hofje without a court.** Pin 52.367282, 4.881392, Eerste Passeerdersdwarsstraat 124 to 130. Four houses from the second half of the 18th century for eight single women who lived free; named after the widow Roosen in 1820, on a plaque "Het Hofjen van de Weduwe Roosen"; no garden, so the women made front gardens; a fully blind wall to the canal; it survived the 1990 clearance of the street. Lead: nl.wikipedia "Eerste Passeerdersdwarsstraat 124-130"; second: Jordaanweb hofjes page. Status: standing, owned by the Diaconie (Wikipedia). Caveats: private homes; listed. Rank: Okay. Merge with monument 4079 (jordaan-1).

**BW-11 The Bleijskapel: a church nobody can see from the quay.** Pin 52.371307, 4.881111 (pin approximate: the front house; the chapel is behind it), Lauriergracht 39. An 1881/1882 neo-Gothic chapel by A.C. Bleijs for the RK Gesticht De Voorzienigheid, built entirely in an inner court with cast-iron columns, pointed arches and painted-over murals; the only chapel by Bleijs. Listed only in 1992, after neighbours objected to a developer's plan for 108 flats and a CDA council member took it up; the city had not seen the point. A host bakery was at number 37. Lead: nl.wikipedia "Lauriergracht achter 39"; second: RCE register 422548 (https://monumentenregister.cultureelerfgoed.nl/monumenten/pdf/422548). Status: offered on Funda as office space with "monumentale kapel" (search result, date not shown). Caveats: private, no access; nothing to see from the street but the church-like windows of number 39. Rank: Nice. Merge with monument 422548 (jordaan-2).

**BW-12 Lauriergracht 12: the last tile bakery, through a covered passage.** Pin 52.372020, 4.881896. Tile bakery De Twee Laurierbomen from 1808 to about 1854, the only one in Amsterdam after 1816; before it a steenkoperij (building-materials yard) for some two and a half centuries. A covered passage with a hardstone gutter for wheelbarrows leads to storage buildings and a mid-19th-century neo-Gothic wooden loggia (now a bike shed). Lead: https://stadsherstel.nl/monumenten/lauriergracht-12/; second: https://stadsherstel.nl/monumenten/achterhuis-lauriergracht-12/ and opslaghuisje-lauriergracht-12. Status: architects' office Rappange (Stadsherstel, read 2026-11-24). Caveats: not open: only the front and the passage door can be seen. Rank: Okay. Merge with monument 3221 (jordaan-2).

**BW-13 Lindenhofje.** Pin 52.380475, 4.885339, Lindengracht 94 to 112. One of the Lindengracht hofjes, listed. Lead: Jordaanweb hofjes page; second: Theo Bakker jordaangangen.pdf. Status: shut, "niet meer te bezoeken" (TB). Caveats: thin hook; keep as a line in a hofjes text unless more turns up. Rank: Okay. Merge with monument 204037 (jordaan-3).

**BW-14 Broenshofje: six rooms off a corridor.** Pin 52.379222, 4.884561, Boomstraat 52. Founded 1851 by Mrs A.C. Broen: six rooms off a corridor for Protestant single women, f1 a week, fuel, and a party parcel at Easter, Christmas and Sinterklaas. Lead: Jordaanweb Boomstraat page; second: walk 2023. Status: shut (walk 2023). Caveats: not listed; front only. Rank: Okay. New place.

**BW-15 Regenboogs Liefdehofje.** Pin 52.377220, 4.882894, Tuinstraat 100 to 102. Lead: Jordaanweb hofjes page; second: walk 2023. Status: shut, "unfortunately cannot enter" (walk 2023). Caveats: thin hook. Rank: Okay. Merge with monument 215024 (jordaan-5).

**BW-16 Rijpenhofje.** Pin 52.373168, 4.879108, Rozengracht 116 to 138. Lead: Jordaanweb Rozengracht page: a dull gatehouse replaced three houses in 1912. Second: Jordaanweb hofjes page. Status: unknown access. Caveats: thin. Rank: Okay. Merge with monument 215008 (jordaan-5).

**Grachtengordel-West**

**BW-17 Van Brienenhofje "De Star": the blind wall on the Prinsengracht.** Pin 52.378676, 4.887269, Prinsengracht 85 to 133. Built 1804 to 1806 by city architect Abraham van der Hart on the site of the De Star brewery, for poor Catholics, founded by Aernout (Arnoud) Jan van Brienen; the canal front is completely blind. Owned by housing association Het Oosten since 1995 (search result summary of the HMDB marker). Lead: walk 2023; second: https://www.hmdb.org/m.asp?m=253756. Status: open Mon to Fri 6:00 to 18:00, Sat 6:00 to 14:00 (walk 2023). Caveats: the often-told legend that Van Brienen founded it after being locked in his strongroom found no source in this scout's search: do not use it unless another scout sources it; the founder's first name varies. Rank: Nice. Merge with monument 4268 (gg-west-4).

**BW-18 Nieuwe Suykerhofje.** Pin 52.371524, 4.883444, Prinsengracht 385 to 395. Lead: Jordaanweb hofjes page; second: nl.wikipedia category Hofje in Amsterdam. Status: access unknown. Caveats: thin hook; check at the door. Rank: Okay. Merge with monument 4328 (gg-west-4).

**BW-19 De Rode Hoed: the hidden church in the middle of the block.** Pin 52.377355, 4.887269, Keizersgracht 102. A hat-maker's until 1629; in 1630 the Remonstrants built their schuilkerk Vrijburg here, in the middle of the block with houses on all four sides and no access from any street; galleries, arched windows and a small rose window; in use as a church until 1957. Its great hall is the largest and oldest surviving hidden church in the country. To keep it hidden the congregation bought or rented nearly all the houses around. Huub Oosterhuis found it empty in 1989 and opened a debate centre on 14 September 1990 (Sonja Barend, Het Lagerhuis, the 2022 Wie is de Mol? finale). Lead: nl.wikipedia "Rode Hoed"; second: Catharijneconvent Rapport Schuilkerken. Status: debate centre, events (Wikipedia mentions 2024). Caveats: open only for events; listed. Rank: **Amazing**. Merge with monument 2485 (gg-west-3).

**BW-20 The garden house that travelled: behind Keizersgracht 62 to 64.** Pin 52.378212, 4.888097 (pin approximate: the front house). Built 1699 behind Keizersgracht 587 to 589; dismantled in 1917 for De Bazel's building and the widening of the Vijzelstraat; the overgrown parts turned up in 1966 in the garden of Herengracht 466 and were rebuilt here 1971 to 1973 as the music room of the Amsterdams Muzieklyceum, where Johan Cruijff signed a lottery contract. Lead: https://stadsherstel.nl/monumenten/keizersgracht-62-64-tuinhuis/; second: https://stadsherstel.nl/monumenten/keizersgracht-62/ (the sugar plantation and ice factory of number 64). Status: Euro Business Center (Stadsherstel, read 2026-11-24). Caveats: not public, not visible from the street. Rank: Okay. New place.

**BW-21 Onze-Lieve-Vrouwekerk: a church built in on three sides.** Pin 52.373119, 4.884542, Keizersgracht 220. Built 1852 to 1854 by Theo Molkenboer for the Redemptorists next to their monastery at 218, inside the block, with only the canal front visible; the first neo-Gothic church north of Brabant and Limburg. The Redemptorists left in 1985 and the Syriac Orthodox bought it (Moeder Godskerk); Catholics also use it. Lead: nl.wikipedia "Onze-Lieve-Vrouwekerk (Amsterdam)"; second: RCE 2535 in slice. Status: in use (Wikipedia, read 2026-11-24). Caveats: open at services; check visiting. Rank: Okay. Merge with monument 2535 (gg-west-3).

**Haarlemmerbuurt**

**BW-22 West-Indisch Huis: the meat hall where the WIC met.** Pin 52.380161, 4.892040, Herenmarkt 99 / Haarlemmerstraat 75. Opened 1617 as a meat hall and guard room; WIC directors from 1623 to 1647; hotel from 1660, old people's home from 1825; the courtyard lies behind. In 1835 the wooden soup kitchen on the Herenmarkt burnt in the Soeploodsoproer. Lead: nl.wikipedia "Herenmarkt"; second: slice record 1372. Status: offices, congresses, weddings, John Adams Institute (Wikipedia). Caveats: the courtyard's public access and a statue in it were not confirmed: check before claiming; listed. Rank: Nice. Merge with monument 1372 (haarlemmer-1).

### Hidden history (sweep 4)

**Jordaan**

**BW-23 Marnixstraat 291 to 293: houses on the old bastion, below the street.** Pin 52.374353, 4.876715, Marnixstraat 291 to 293 / Westerkade 23 to 25. Three houses stand behind the street line and lower than it, probably older than the levelling of the rampart De Schans (dug away after 1877); a group of buildings already shows here on the 1625 Berckenrode map. Stone blocks of the old bastion survive along the sunken lane in front of 291 and 293. In 1917 the spot was already "Verdwijnend Amsterdam". Lead: https://stadsherstel.nl/monumenten/marnixstraat-291/; second: Stadsherstel Vriendenwandeling 2025 PDF. Status: Stadsherstel homes (page read 2026-11-24). Caveats: not in the monument slices; private homes, seen from the street. Rank: **Amazing**. New place (group with DW-24 for the bastion line).

**BW-24 Westerkade 1 to 9: the first homes on the levelled rampart.** Pin 52.376922, 4.878360 (Westerkade 5), Westerkade 1 to 9 / Marnixstraat 215 to 231. Block A of 1876 to 1877 by Bastiaan de Greef for the Amsterdamsche Vereeniging tot het bouwen van Arbeiderswoningen: back-to-back one-room homes to relieve the overcrowded Jordaan, on land between the Raam- and Zaagbarrière; the Westerkade got its name only after (16 November 1876). Lead: nl.wikipedia "Westerkade 1-9"; second: none. Status: apartments (Wikipedia). Caveats: modest to look at; story-led. Rank: Okay. New place.

**BW-25 Westerstraat 202: a 1770 soap boiler's stone in a 1980s wall.** Pin 52.378128, 4.881063. A double anachronism: a 20th-century building carrying a 1770 gable stone. Herman Lelijman's soap works stood here on the Anjeliersgracht and paid for a country house in Geuzenveld; later a school of Sint Aloysius, demolished; new-build 1986. Lead: nl.wikipedia "Westerstraat 202 (Amsterdam)"; second: Jordaanweb Westerstraat page. Status: standing (Wikipedia). Caveats: small. Rank: Okay. New place.

**BW-26 Palmgracht 74: a cake-slice school that stood on two canals.** Pin 52.382080, 4.882457, Palmgracht 74 / Lijnbaansgracht 15A to C. The 21st public paupers' school (early 1870s, Publieke Werken under Bastiaan de Greef) in the triangle of Lijnbaansgracht, Palmgracht and Brouwersgracht, built with a high bridge at the door; the Palmgracht was filled in 1895 for hygiene; the school closed in 1976; now a business centre, municipal monument 2007. Lead: nl.wikipedia "Palmgracht 74"; second: none. Status: business centre (Wikipedia). Rank: Okay. New place.

**BW-27 Blijvend Applaus: Wim Sonneveld's houses for old artists.** Pin 52.376318, 4.882244 (pin approximate), Egelantiersgracht 72 to 74. Houses of the Stichting Blijvend Applaus, founded by Wim Sonneveld to give (retired) artists cheap homes; over the entrance the gable stone Sonneveld had put up. Lead: Stadsherstel Vriendenwandeling 2025 PDF. Second: none found. Status: per the 2025 walk. Caveats: the house numbers need checking against the walk text (a search summary placed a stop at Egelantiersgracht 51); one source only. Rank: Okay. New place.

**BW-28 Bloemgracht 76: Blaeu's printing house.** Pin 52.374937, 4.881159. Joan Blaeu set up a printing house here about 1637 (Stadsherstel walk 2025). Lead: Stadsherstel Vriendenwandeling 2025 PDF. Second: none yet. Caveats: check against a Blaeu source before use. Rank: Okay. New place.

**Haarlemmerbuurt**

**BW-29 De Kruiwagen, Singel 2: a timber house in brick clothes.** Pin 52.379524, 4.894368, Singel 2 to 2a. Built 1606 by herring buyer Jan Loots as a medieval-style self-supporting timber frame clad in brick, 11 by 11.6 m; Hendrick Jansz. Cruywagen added the wheelbarrow gable stone about 1660; the Buiksloter ferry house until 1661, and half of it a café ever since (photographed by Olie and Breitner); a hoisting installation with a huge wheel survives inside. Lead: Theo Bakker haarlemmerbuurt.pdf; second: slice record 5249. Status: café (TB). Caveats: the wheel is inside; listed. Rank: Nice. Merge with monument 5249 (haarlemmer-2).

**BW-30 Haarlemmerplein: the last real wagon square, and Drees's stone.** Pin 52.384259, 4.883358 (Haarlemmerplein 23). Theo Bakker: the only wagenplein of the city that stayed a working wagon square into the 20th century. At number 23 a gable stone for Willem Drees, placed 1986 with a counter-demonstration. Haarlemmerplein 2 collapsed in 1919. Lead: Theo Bakker haarlemmerbuurt.pdf; second: slice record 1356. Caveats: the square is rebuilt; the stone is the object. Rank: Okay. Merge with monument 1356 (haarlemmer-1); DW-31 and DW-33 are on the same square.

**BW-31 Vinkenstraat 39: the crèche the queens visited.** Pin 52.381760, 4.887572. In 1872 the Vereeniging tot verbetering der kleine kinderbewaarplaatsen opened its first branch here, open 7:00 to 21:30; Queen Emma visited in 1873 (92 children), Wilhelmina came by coach in 1926. Rebuilt 1904 by Coenraad Wiegand from two houses, with yellow frames and a large tile panel recalling the crèche. Lead: nl.wikipedia "Vinkenstraat 39"; second: none. Status: standing (Wikipedia). Rank: Okay. New place.

**BW-32 De Keijser, Zandhoek 13: Stadsherstel's first restoration, Jacob Olie's grandfather's house.** Pin 52.388062, 4.889984. Built 1645 by Reinier Reael, after whom the island is named; later owned by Jacob Olie's grandfather, and Olie photographed his Orange-minded neighbours here when Queen Wilhelmina drove by. Stadsherstel's first restoration (owned 1957, restored 1959). Lead: https://stadsherstel.nl/monumenten/de-keijser-zandhoek-13/ (path from the sitemap); second: Stadsherstel page In Den Gouden Reael (Zandhoek 14). Status: homes (Stadsherstel). Caveats: private. Rank: Okay. New place.

**BW-33 De Oude Amsterdammer, Korte Prinsengracht 5.** Pin 52.381861, 4.890082. 1652, for the timber merchants Van Marcken, who stacked Norwegian wood on the quay; a tapperij from 1879 into the 1950s (Café Spoorzicht in 1932); the corner shopfront with two doors still shows the bar. Lead: Stadsherstel page "De oude Amsterdammer" (korte-prinsengracht-5-haarlemmer-houttuinen-65a); second: none. Status: home (Stadsherstel). Rank: Okay. New place.

**Grachtengordel-West**

**BW-34 De Posthoorn: a hidden church in a post-coach house.** Pin 52.379956, 4.888076, Prinsengracht 7. About 1687 the Augustinian hidden church moved into the former post-coach house "de Posthoorn"; a posthorn is still in the facade above the original entrance; the Posthoorngang gate was at Brouwersgracht 81 to 89. Its successor is Cuypers' Posthoornkerk, Haarlemmerstraat 124 (1860), his first of six Amsterdam churches, now a Stadsherstel event venue. Lead: Theo Bakker papeneiland.pdf; second: https://stadsherstel.nl/monumenten/de-posthoornkerk/. Status: Prinsengracht 7 a house; the church an event venue (Stadsherstel, read 2026-11-24). Caveats: private house; look for the horn. Rank: Nice. New place; group with monument 1289 (haarlemmer-1).

**BW-35 Pottenbakkersgang: a path older than the canal belt.** Pin 52.375177, 4.888718 (pin approximate), Herengracht between 151 and 155. A pre-1612 path (Pottenbakkerspad on the Pottenbakkersweer) that was absorbed into the canal belt and can still be traced (TB). Lead: Theo Bakker jordaangangen.pdf; second: none (a search found only the Westerstraat alley). Caveats: not the slum alley of the same name at Westerstraat 216 to 226, whose houses went to the Openluchtmuseum Arnhem in 2002; pin approximate; nothing marked. Rank: Okay. New place.

**BW-36 Lekkeresluis: the rattle watch's room in the arch.** Pin 52.380374, 4.888292. The first arch was bricked up as the guard room of the ratelwacht; until about 1916 a wooden walkway ran from the stone steps (still there) to a door in the arch. The bridge is of 1754 ("Anno 1754" stones). Lead: Theo Bakker papeneiland.pdf; second: nl.wikipedia "Lekkeresluis". Status: municipal monument 1995. Rank: Okay. Group with DW-23.

**BW-37 Langestraat 80: the Tsar in the gable and the Hollandsche Mediaeval.** Pin 52.377200, 4.890987. A very tall house of 1664; in 1713 "the house with the Tsaar van Moscovieen in the gable" (why is unclear); studio of S.H. de Roos, who designed the Hollandsche Mediaeval typeface (1912); Stadsherstel's second restoration (1957). Lead: https://stadsherstel.nl/monumenten/langestraat-80/; second: none. Rank: Okay. New place.

**BW-38 Blauwburgwal, 10 May 1940: the corner the bombs took.** Pin 52.376621, 4.890038 (Herengracht 107). The bombing of May 1940 destroyed Herengracht 105 to 107 and Blauwburgwal 17 to 25 with deaths; the corner was a parking lot for six years; in 1951 coffee firm Matagalpa (before the war Cohen Bendiks, renamed on the occupier's order) built the office by Theo Lammers and Karel Sijmons. Across the water Blauwburgwal 22 (bakery of Prior's Papbeschuit, 52.376900, 4.890300) was shored up, and Van Gendt's auction house at Blauwburgwal 15 survives cut down. Lead: nl.wikipedia "Herengracht 107"; second: nl.wikipedia "Blauwburgwal 22" and "Blauwburgwal 15". Status: standing (Wikipedia). Caveats: the Wikipedia articles give 10 and 11 May: check the date; look for a memorial plaque on site before claiming one. Rank: Nice. New place.

**BW-39 De Dolphijn, Singel 140 to 142: the Night Watch captain's house.** Pin 52.375641, 4.890079. Built 1599 to 1602 for the poet Hendrik Laurensz. Spiegel to a pared-down Hendrick de Keyser design; one of three early-17th-century houses with a side house (with Bartolotti and the Huis met de Hoofden); Frans Banninck Cocq lived here while Rembrandt painted his company, the Night Watch (1640 to 1642). Lead: nl.wikipedia "De Dolphijn"; second: none read. Status: private (Wikipedia). Rank: Nice. New place.

**BW-40 Huis Van Brienen, Herengracht 284: a top-100 interior.** Pin 52.370674, 4.886552. On the site of "In de Stadt Praegh" (about 1620); rebuilt 1728 to 1733 for the Mennonite merchant David Rutgers and his sisters with a garden house and back house; bought 1781 by Arnold Johan van Brienen as a wedding gift for his son Willem Joseph, mayor under Lodewijk Napoleon; one of the top 100 interiors in the Netherlands. Lead: nl.wikipedia "Huis Van Brienen"; second: slice record 1795. Status: owner and visiting not confirmed (Hendrick de Keyser pages not readable). Caveats: the interior is the point; private unless a tour is found. Rank: Okay. Merge with monument 1795 (gg-west-2).

## Look for lines

- **Gieterstraat and Tichelstraat**: the names recall the bronze foundry and the tile bakery put on the north part of the Carthusian ground in 1614 (TB jordaan.pdf). A line for BW-01.
- **Bloemgracht 34**: Schubert gable stone for Jan Huckriede; Bloemgracht 32 to 34 was the entrance of the Schavenmakersgang (now shut) (Jordaanweb).
- **Egelantiersgracht 35 to 39**: an alley built over in 1688; the Alberdingk Thijm family (Jordaanweb).
- **Egelantiersgracht 66 to 70**: home of writer Teun de Vries (Jordaanweb).
- **Prinsengracht 5**: gable stone "S.PAVWELS" (TB papeneiland.pdf).
- **Palmstraat 66**: gable stone with the old name of the Driehoekstraat canal (TB driehoekstraat.pdf).
- **Langestraat 78**: a tailor's house since 1610; a 1663 sale left the hanging sign and the cutting table to the tenant (Wikipedia; gable stone in Gevelstenen van Amsterdam, 2007).
- **Prinsengracht 70**: a cake-slice house where the Tuinstraat meets the canal at an angle; its triangular neighbour with a pothuis went in 1950 (Wikipedia).
- **Haarlemmerdijk 53**: the shop of table-tennis champion Frans Schoofs (158 caps) stood in the remaining ground floor (Stadsherstel).
- **Grote Bickersstraat 35**: the merchants' houses looked out over the IJ to the gallows field (Stadsherstel).
- **Bickersgracht 30**: a back house that survived the plan to make the island an office district (Stadsherstel).
- **Haarlemmerstraat 132 to 136**: St Antonia girls' school by F.M.J. Caron, 1894.
- **Constantia-Zuid / Concordia Zuid**: inner garden in the Elandsstraat/Elandsgracht block; check access.
- **Claes Reinierszhofje**, Keizersgracht 332 to 334 (monument 208007): only the register name was found.
- **Volksvrouw**, Westerstraat: Henk Henriët's 1930s plaster woman of the crisis years, cast in bronze in 1967 (Wikipedia): for the art scouts.

## Food and drink, borderline

- **De Kruiwagen**, Singel 2: a café half since the 17th century (BW-29).
- **Café Sonneveld**, Egelantiersgracht (near BW-27): name only.
- **Proeflokaal A. van Wees**, Herengracht 319: already drafted in gg-west-2.

## A-list candidates

- **De Rode Hoed** (BW-19) is the one well-known item; it still fits because its hiddenness is the point.
- **Karthuizerhof** (BW-01) is on many hofjes walks but not on the A-list.

## Checked and dropped

| what | why |
|---|---|
| Hof van Parijs, original | demolished 1902; the new-build is drafted in jordaan-1 |
| Pottenbakkersgang, Westerstraat 216 to 226 | houses taken down 2002 and rebuilt in the Openluchtmuseum Arnhem |
| Lingelbach's doolhof | no trace; folded into BW-08 |
| Huizen De Lely, Bloemstraat 129 to 139 | listed, but no hook or access found |
| Looiershof, Passeerdersstraat 16 to 18 | concert venue only; no history found |
| Van Brienen strongroom legend | no source found; not used in BW-17 |
| Arcam public shelters | none in zone West (Torensluis, Nes are in Core) |
| Pakhuis Sparreboom, Keizersgracht 487 | Grachtengordel-Zuid, out of zone |
| Huis De Vicq, Herengracht 476 | Gouden Bocht, out of zone |
| Keizersgrachtkerk, Keizersgracht 566 | out of zone |
| Raamplein 1 (Openbare Handelsschool on the Leidsch Kerkhof) | south edge, not checked for wijk; lead for scouts of Zuid |
| Coymanshuis, Keizersgracht 177 | DW-39 |
| Zon's Hofje | DW-36 |
| Vuile and Schoone Weespad | DW-26 |
| Noorderspeeltuin on the graveyard | DW-25 |
| Groote Keijser, Keizersgracht 242 to 252 | squat stronghold: sweep 6 (modern and contested), passed to leads |
| ATVA, Marnixstraat 266 to 340 | 1920s men's hostel; sweep 6/architecture lead |
| Anjeliersstraat 157 school (1920s slum clearance) | nothing left of the clearance to see |
| Bloemgracht 56, Palmgracht 41 to 43 | register descriptions only |
| Zeevrugt, Singel 36 | Mercury gable, no story |
| Blauwburgwal 15 alone | folded into BW-38 |
| Bijbelshofje, Anjeliersstraat | gone; only an old print in the Rijksmuseum (search result) |
| Hendrick de Keyser house pages | JavaScript only; only Bartolotti is open and it is drafted |
| amsterdamopdekaart | MIP 1850 to 1940 inventory, not a hidden-history source |
| onsamsterdam.nl | refused by robots.txt |
| Lijst van hofjes in Amsterdam (nl.wikipedia) | no such page; category used instead |

## Leads for other scouts

- **Sweep 6 (modern and contested)**: Groote Keijser, Keizersgracht 242 to 252, the squat stronghold of 1978 to the early 1980s (nl.wikipedia "Groote Keijser"); also 17th-century sugar bakeries at 244 to 248 ("Het Suijkervat", 1666).
- **Architecture scouts**: ATVA, Marnixstraat 266 to 340, a men's lodging house on the site of the Amstel sugar refinery; Coymanshuis is Van Campen's first known design (DW-39).
- **Zuid scouts**: Raamplein 1 on the Leidsch Kerkhof; Pakhuis Sparreboom (Keizersgracht 487); Huis De Vicq (Herengracht 476).
- **Core scouts**: Korenmetershuisje, Nieuwezijds Kolk 28 (Stadsherstel: one of the last guild houses).
- **Monument drafters**: use the hooks of BW-01 to BW-22 and BW-29, BW-30 and BW-40 on their slice records.
- **Jordaan text**: "fort van Sjako" at the Elandsgracht (TB jordaan.pdf) if DW has not used it.
