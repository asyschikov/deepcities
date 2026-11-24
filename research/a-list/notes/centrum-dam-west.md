# A-list slice centrum-dam-west: notes

Places file: `research/a-list/places/centrum-dam-west.yaml` (11 places, validate.py 0 errors).
Fetched 2026-11-24 with curl (UA deep-cities-research/0.1); no BrowserOS used. Monument numbers via
api.data.amsterdam.nl/v1/monumenten (the RCE register text loads dynamically and was not readable by curl).
Dutch text written from nl sources and checked with a scratchpad 8-gram checker against all fetched
wiki and web texts: no 8-word runs except quoted inscriptions ("Beidt uw tyd", "Duur uw uur").

## Corrections to SCOUT.md hooks

- Amsterdam Museum: no longer at H'ART/Amstelhof (that ran until end of 2025, nl wiki). Now at
  Amsterdam in Motion (Pazzanistraat 19, Westergas) and Huis Willet-Holthuysen.
- Beurs: "De cost gaet voor de baet uyt" is on the cornice of the 18th-century Bureau voor
  Handelsinlichtingen on the Damrak, not on the Beurs (nl/en wiki). Not used.
- National Monument: 14 niches, 12 filled (11 provinces + Indies); Suriname and Antilles niches empty.
- Bloemenmarkt: the stalls stand on concrete basins now, not boats; title avoids "floating".

## Per place: sources, left out

### 3 Royal Palace
Sources: nl/en wiki Paleis op de Dam; paleisamsterdam.nl/bezoek, /over-het-paleis; city monument API (5941).
Left out: closing/opening dates of the current season (change often; "check the calendar" instead);
the lanterns and 7 May 1945 (neighbour "The Dam's corners", one-line pointer only); Perenburg behind the palace (neighbour).
Pin: estimated at the Dam front (arches), not surveyed.

### 4 National Monument
Sources: nl/en wiki; NOS artikel 2379052; monument API (530906).
Left out: whether one or two Rädecker sons finished the figures (nl wiki: Jan Willem; en wiki: Han and Jan Willem), so only Jan Willem named, as nl wiki; listing date conflict (4 vs 14 Aug 2009), only year given; 2022 maintenance; marines' clearing details.

### 5 Nieuwe Kerk
Sources: nl/en wiki; nieuwekerk.nl (nl/en) for price, hours, closing days.
Left out: current exhibition (Queer Amsterdam, to 4 Apr 2027) as it dates fast; Van Speijk and Van Galen burials.

### 6 Anne Frank House
Sources: annefrank.org/nl/over-ons/hoe-het-begon; annefrank.org tickets page; nl/en wiki; en wiki Westerkerk (statue).
Left out: €17 price from 2027; €1 Museumkaart surcharge detail; Het Vrije Volk 1955 campaign (en wiki only, not needed).
Uncertain: "the city and the university planned a student house on the corner" is from annefrank.org; it was built 1958 per my earlier notes but year omitted.

### 7 Westerkerk
Sources: westerkerk.nl bezoek + tourist information; nl/en wiki; oudekerk.nl Saskia object page.
Left out: year of the Rembrandt plaque (nl 1906, en 1909); royal wedding 1966; Westermarkt neighbours (Homomonument, Descartes etc. have own places). Carillon "usually" Tuesdays 12 to 13 per site.

### 8 Begijnhof
Sources: nl/en wiki; begijnhofkapelamsterdam.nl (toegang, geschiedenis); amsterdammuseum.nl story 102809; monument API (342 to 384, 35824; no. 34 = 371).
Left out: date of Het Houten Huys (nl c.1528, en c.1420) and the "oldest/one of two wooden houses" claim (Zeedijk 1 neighbour, and nl wiki says an older house was found in 2012); Mondrian panels in the chapel (not verified); date of the hidden church (1665 vs 1671) so "later"; Cornelia Arens exact death date (14 Oct vs 2 May 1654 marker), only year.
Note: begijnhofamsterdam.nl is now a domain-for-sale page; do not link it.

### 9 Oude Kerk
Sources: nl/en wiki; oudekerk.nl object page (Saskia grave), Saskia breakfast event, admission page, /en/visit.
Left out: sunbeam minute conflict (oudekerk.nl 8:39, nl wiki 8:38); used the church's own 8:39. Tower prices (€22, €7.50 with Museumkaart) simplified to "combined ticket". Belle, red window, breast relief: neighbour place, pointer only. Pin at the main entrance side.

### 10 Our Lord in the Attic
Sources: nl/en wiki; Getty conservation case study (church page); opsolder.nl opening hours + tickets.
Left out: closing days (25 Dec, 27 Apr); the 1725 schuilkerk purchase (neighbour "Old houses of the Oudezijds Voorburgwal"); exact organ date.

### 22 Amsterdam Museum
Sources: amsterdammuseum.nl (home, het-nieuwe-amsterdam-museum, building start news 294512, VVAB appeal 39832, Amsterdam in Motion page); NH Nieuws 341768, 342465; Raad van State 202305083/1/R1; nl/en wiki.
Left out: Bart van Kasteel as 1975 designer of the Schuttersgalerij (not found again in saved texts); VVAB chair quote; city model 30,500 buildings figure. Gable stones in Sint Luciënsteeg: neighbour Kalverstraat place, pointer only. Burgerweeshuis Aldo van Eyck: pointer only.
outlook: Temporarily closed, until 2030.

### 26 Bloemenmarkt
Sources: nl wiki (read via WebFetch; curl extract failed), en wiki; DutchNews 16 Apr 2019; NH Nieuws 357177 (15 Feb 2026).
Left out: 2019 survey on bulbs not flowering (en wiki only; uncited detail); "only floating flower market" (it no longer floats); number of stalls (16 in 2019); hours (no official source). Category food-drink (closest fit; market).

### 34 Beurs van Berlage
Sources: nl/en wiki; beursvanberlage.com/visit (+ /nl/); monument API (437).
Left out: council dates (24 Jun 1885, 24 Feb 1897); the 2002 royal civil wedding; cornice proverb (other building). Pin estimated at the Beursplein end.

## Places without photos

None. All 11 have 1 to 2 Commons files. Oude Kerk has one only.

## Fact check

| Claim (EN / NL) | Source |
|---|---|
| Palace: Van Campen design, city hall, inaugurated 29 Jul 1655 / ontwerp Van Campen, ingewijd 29 juli 1655 | nl/en wiki Paleis op de Dam |
| Palace from 1808, Louis Napoleon / paleis sinds 1808, Lodewijk Napoleon | nl wiki |
| State bought city's rights 1936, 10 million guilders / Rijk kocht af 1936, 10 miljoen | nl wiki |
| No grand entrance, seven arches, barred ground-floor windows / zeven bogen, tralies | nl wiki; paleisamsterdam.nl/over-het-paleis |
| Musket openings in Vierschaar windows / schietgaten Vierschaar | nl wiki |
| "Gebouw zonder ingang" vs Zocher's beurs "ingang zonder gebouw" / idem | nl wiki |
| 13,659 piles; more after 1945 subsidence, 13,681 / 13.659 palen, 13.681 | nl wiki |
| Cog ship weathervane; Atlas on rear / koggeschip; Atlas achtergevel | nl/en wiki |
| €13.50, free Museumkaart and under 18, from 10:00, 230+ days 2026 / idem | paleisamsterdam.nl/bezoek |
| Nat. Monument: Oud with Rädecker; Rädecker died months before 4 May 1956 unveiling by Juliana; Jan Willem finished / idem | nl wiki |
| 22 m pylon, concrete, travertine; 1996 to 1998 dismantled, acrylic resin in Germany / idem | nl/en wiki |
| Urns: soil from 11 provinces and 22 Indies war cemeteries, behind coat-of-arms stones / idem | nl wiki; NOS 2379052 |
| 14 niches, Suriname and Antilles empty / idem | NOS 2379052; nl wiki |
| 1952 Auschwitz-Birkenau urn could not be placed / idem | nl wiki |
| Roland Holst poem on inner wall / gedicht Roland Holst | en/nl wiki |
| Hundreds of dam sleepers; ban 24 Aug 1970, riots / honderden damslapers, verbod, rellen | nl/en wiki |
| Weeping dogs by side figures / huilende honden | nl wiki |
| Nieuwe Kerk consecrated 1409; fire Jan 1645 by plumbers / gewijd 1409; brand 1645 loodgieters | nl wiki |
| Inaugurations since 1814; last service 1955; foundation since 1980 / idem | nl wiki |
| Tower foundation 1565; 1646 design higher than Dom; 6,363 piles by 1647; stopped 1653; city hall >8 million; stump demolished 1783; base of west front remains / idem | nl wiki |
| De Ruyter tomb at high altar site; Vondel buried / idem | nl/en wiki |
| Hermans stone: sleeping cat, "Zlaap Zacht", cats can't say S / idem | nl wiki |
| Organ case Van Campen 1655 / orgelkast 1655 | nl wiki |
| €20, free Museumkaart, daily 10 to 17, closed 3 to 5 May, 25 Dec / idem | nieuwekerk.nl |
| Anne Frank: hiding Jul 1942 to 4 Aug 1944, eight people / idem | annefrank.org; nl wiki |
| House 1635, front 1740 / idem | nl wiki |
| Berghaus wanted to demolish; Otto sold 1954 reluctantly; Stichting 1957; Berghaus donated; developer bought neighbours; student house on corner; opened 3 May 1960 / idem | annefrank.org hoe-het-begon |
| Otto wanted annexe left empty / achterhuis kaal | annefrank.org hoe-het-begon (Vrije Volk 1962 quote) |
| Online tickets only, time slot, €16.50, Tuesdays 10:00 for six weeks; entrance Westermarkt 20 / idem | annefrank.org tickets |
| Anne Frank statue at Westermarkt / beeld Westermarkt | en wiki Westerkerk |
| Westerkerk: De Keyser died 1621, Pieter finished, opened Whit Sunday 1631 / idem | nl wiki; westerkerk.nl |
| 87 m with weathercock, tallest church tower in city; crown Maximilian I, 1638 / idem | nl/en wiki |
| Rembrandt lived on Rozengracht, buried 8 Oct 1669, place unknown / idem | westerkerk.nl bezoek |
| Church grave cleared after 20 years as for the poor / kerkgraf geruimd na 20 jaar | en wiki |
| Plaque on north wall; Titus and Hendrickje buried / idem | nl/en wiki; westerkerk.nl |
| Rembrandt sold Saskia's grave for Hendrickje's burial / idem | oudekerk.nl object page |
| No organ (popish); ordered 1681; Lairesse shutters / idem | nl/en wiki; westerkerk.nl |
| Free, Mon to Fri 11 to 15, Saturdays Jul/Aug; tower closed for restoration; carillon Tue 12 to 13 / idem | westerkerk.nl bezoek, tourist information |
| Begijnhof: beguines vowed chastity, could leave / idem | en wiki; amsterdammuseum.nl story |
| Only court founded in medieval Amsterdam; almost 1 m below / idem | en wiki; nl wiki |
| Ringed by water, bridge at Begijnensteeg only access / idem | nl/en wiki |
| 47 houses, 18 Gothic timber frames; addresses bear court's name / idem | nl/en wiki |
| Houten Huys no. 34, wooden front, overhanging top floor / uitkragende zolder | nl wiki |
| Only Catholic institution after 1578, houses private property / idem | en wiki |
| Chapel to English Presbyterians, English Church / idem | nl/en wiki |
| Vingboons hidden church, not to look like a church / idem | nl wiki; begijnhofkapel geschiedenis |
| Cornelia Arens d. 1654, gutter legend, coffin three times / idem | nl/en wiki; amsterdammuseum.nl story |
| Last beguine died 1971; 105 residents / idem | nl wiki |
| Free, 9:30 to 18:00, gate Gedempte Begijnensloot / idem | begijnhofkapelamsterdam.nl toegang |
| Gate 1574 with St Ursula / poortje 1574, Ursula | nl wiki |
| Oude Kerk: wooden chapel 13th c; consecrated 1306 to St Nicholas; about 3,300 m2 / idem | nl/en wiki |
| Merchants traded in church until 1611 exchange / idem | nl wiki |
| Choir screen 1681 with text on misuse ended in '78 / idem | nl wiki |
| ~2,500 gravestones, ~60,000 dead, burials until 1865; Sweelinck / idem | nl/en wiki |
| Saskia grave 29 Weitkoperskapel, 1642; sold 1662 for Hendrickje / idem | oudekerk.nl object page |
| Sunbeam 9 Mar 8:39; breakfast / idem | oudekerk.nl event page |
| Contemporary art since 2012 / idem | en wiki |
| €14.50, free Museumkaart, Mon to Sat 10 to 18, Sun 13 to 17:30; tower combi / idem | oudekerk.nl admission |
| OLHOS: house c.1630; Jan Hartman 1661; church 1661 to 1663 across attics / idem | nl/en wiki; Getty |
| ~150 people, two galleries / idem | Getty; nl wiki |
| Het Hert / Het Haantje; name 19th c; museum 1888 / idem | nl wiki |
| Pulpit in left altar column, marbled, two steps; shown twice daily until 1999, now Christmas mass / idem | Getty church page |
| No hoisting beam; windkast in Heintje Hoekssteeg / idem | nl wiki |
| €18, free Museumkaart, daily 10 to 18; first Sundays Sep to Jun from 11:00 / idem | opsolder.nl |
| Amsterdam Museum: Sint-Luciënklooster from 1414; Burgerweeshuis after 1578 to 1960; museum founded 1926 Waag, moved 1975 / idem | nl wiki; nl wiki Burgerweeshuis |
| Neutelings Riedijk: central hall, large gallery, central entrance / idem | amsterdammuseum.nl het-nieuwe |
| VVAB and Heemschut appeal; Schuttersgalerij free museum street would go / idem | NH Nieuws 341768, 342465; amsterdammuseum.nl 39832; nl wiki |
| Court Jul 2023, Raad van State 16 Oct 2024 / idem | NH Nieuws 342465; raadvanstate.nl |
| Building began 3 Sep 2026, Van Speijk plaque 1831 protected; Van Speijk grew up as orphan here; reopening 2030 / idem | amsterdammuseum.nl 294512 |
| Amsterdam in Motion at Pazzanistraat 19; Huis Willet-Holthuysen / idem | amsterdammuseum.nl; Amsterdam in Motion page |
| Bloemenmarkt: 1620 Sint-Luciënwal; Singel 1862; trees and plants; boats, stock by water; cut flowers hardly before 1960s; concrete basins late 20th c / idem | nl wiki |
| Saarloos left 2019, family since 1943, 25% rule not enforced / idem | DutchNews 2019 |
| 2022 advice: tourist trap, change or abolish / toeristenfuik | nl wiki |
| Plan shelved Feb 2026, no money to buy out stalls / idem | NH Nieuws 357177 |
| Beurs: 1885 competition won by Cordonnier, copied La Rochelle town hall, De Opmerker reader, Kalverstraat shop window, council rejected jury report / idem | nl wiki |
| Berlage only Dutch winner of final round; commission 1896 / idem | nl wiki |
| Sank during construction, cracks refilled / idem | nl wiki |
| Verwey programme: society where money plays no role / klasseloze samenleving | nl wiki |
| Stock exchange left 1912; last market left 1998 / idem | nl/en wiki |
| Tower texts "Beidt uw tyd", "Duur uw uur" / idem | nl/en wiki |
| Statues Gijsbrecht, Coen, De Groot; keystones fishing, industry, hunting by Lambertus Zijl / idem | nl wiki |
| Events venue, restaurants, escape rooms / idem | beursvanberlage.com/visit |

## Verification

Fact check of every place, 2026-11-24. All listed sources re-fetched with curl (UA deep-cities-research/0.1;
nl/en Wikipedia via the API; monuments via api.data.amsterdam.nl). Pins tested against the monument footprints
(RD polygons) and BAG panden (PDOK). Dutch re-checked with an 8-word-run checker against all fetched texts.
validate.py: 0 errors after the fixes.

Fixes, per place:

- Royal Palace: "seven low arches" narrowed to "seven arches" (EN/NL; no source says low). Summary cut "and it was
  meant that way" / "en dat was zo bedoeld" (no source says the missing entrance was intended; summary now says
  "seven arches and no grand portal"). "While Zocher's exchange stood across the Damrak" / "aan het Damrak" narrowed
  to "In the days of Zocher's exchange" / "Zolang de beurs van Zocher bestond" (nl wiki gives no location).
  Piles: "Underneath are 13,659" made "It was built on 13,659 ... now stands on 13,681" (nl wiki: 13,659 originally).
  Kept: "on days the king does not need the building" (paleisamsterdam.nl/over-het-paleis FAQ: opening days vary
  because of state visits and royal receptions). Pin is inside the monument footprint (5941).
- National Monument: "slept on its steps" narrowed to "at times hundreds ... slept around it" / "soms honderden
  ... rond het monument" (nl wiki: "soms ... enkele honderden", en wiki: "around the monument"). Look for: "the
  weeping dogs beside the two side figures" narrowed to "the two weeping dogs by the left-hand side figure" (nl wiki:
  left figure has two weeping dogs, right figure one growling dog). "Falls silent every 4 May" confirmed by NOS
  (two minutes' silence).
- Nieuwe Kerk: Look for "De Ruyter's tomb at the east end" / "aan de oostkant" changed to "where the high altar
  once stood" / "waar ooit het hoogaltaar stond" (the source gives the altar site, not a compass side).
- Anne Frank House: no change. All claims confirmed (annefrank.org hoe-het-begon and tickets; nl/en wiki; en wiki
  Westerkerk for the statue and the carillon in the diary). Pin = PDOK point for Westermarkt 20 (the entrance).
- Westerkerk: "crowned since 1638 with the imperial crown" changed to "completed in 1638 and crowned with"
  (westerkerk.nl: tower completed 1638; nl wiki dates the crowned top to 1637, so no year on the crown). Summary
  "thought organ music popish" narrowed to "instrumental music in church" (westerkerk.nl tourist information);
  NL summary rewritten to the same fact and shortened to 280 characters or less. EN now names the carillonneur
  Boudewijn Zwart, as the NL already did (westerkerk.nl), so both say the same.
- Oude Kerk: "After the Alteration of 1578 merchants were allowed to trade in the nave" narrowed to "From 1584 ... in
  the church" (nl wiki: 1584 to 1611; no source says nave); NL likewise. NL "tot ongeveer de huidige omvang" made
  "tot zo'n 3300 vierkante meter" to match the EN (en wiki). Tower: added "from late April to late October" / "van
  eind april tot eind oktober" (oudekerk.nl admission page; tower tours are seasonal, none now).
- Our Lord in the Attic: cut "but tolerated out of sight" / "maar uit het zicht werden ze gedoogd" (not in the
  listed sources); now "Catholics could no longer hold mass in public" (nl wiki). "two steep galleries" narrowed to
  "the two galleries" (Getty mentions a steep staircase, not steep galleries). Pin moved from 52.375173 (on
  Oudezijds Voorburgwal 36, the neighbour) to 52.375069, 4.899366 (PDOK point of no. 40, inside monument 6107).
  The one remaining 8-word overlap is the opening-hours line plus the "Let op:" heading ("10.00 tot 18.00 uur.
  Let op"), not prose; left as is.
- Begijnhof: NL rewritten where an 8-word run matched nl wiki ("in de 'ontheiligde' kapel; volgens de legende
  werd ..."); same facts.
- Amsterdam Museum: cut "Aldo van Eyck's building" / "het gebouw van Aldo van Eyck" (no listed source names the
  architect); now "a new children's home on the IJsbaanpad" (amsterdammuseum.nl het-nieuwe-amsterdam-museum).
  Added the two Commons file pages (RCE "Burgerweeshuis: poort aan de Kalverstraat"; the gable stone over the
  Kalverstraat entrance) as sources for the Look for line. 1414 confirmed (amsterdammuseum.nl: "De eerste
  vermelding dateert van 1414"). Raad van State page is behind a bot check; 16 October 2024 confirmed from NH
  Nieuws 341768 (published 17 Oct 2024, "een dag na de uitspraak"). Free "museum street" Schuttersgalerij from the
  Begijnensteeg confirmed in nl wiki.
- Bloemenmarkt: "open-air stalls" / "in de open lucht" changed to "stalls along the Singel" / "langs het Singel"
  (nl wiki: greenhouse-like structures). Look for "from the Muntplein side" narrowed to "from across the Singel,
  the closed backs of the stalls on their concrete basins" (nl wiki: a closed front seen from the water). Pin sits
  2.7 m from the Singel 610 address point, on the stalls.
- Beurs van Berlage: "a French design that turned out to be copied" / "dat een kopie bleek" narrowed to "that a
  magazine reader found copied" / "dat volgens een tijdschriftlezer ... nadeed" (nl wiki: a reader of De Opmerker
  said so; the jury did not change its verdict). NL summary trimmed to 280 characters or less.

Checked, no change needed: a_list: A-list on all 11, no rank; no em dashes or spaced en dashes; all summaries 280
characters or less; prices and hours match the official pages as fetched today (palace, Nieuwe Kerk, Anne Frank
House, Westerkerk, Begijnhof, Oude Kerk, Our Lord in the Attic); pins of the palace, Nieuwe Kerk, Westerkerk,
Oude Kerk, Begijnhof (no. 34), Amsterdam Museum and the Beurs lie on their buildings (monument footprint or BAG
pand); the National Monument pin matches the monument point.
