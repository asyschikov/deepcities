# f4-bring-forward: businesses inside existing pool places (SHORTLIST-CENTRUM section B)

Output: `fixes/f4-bring-forward.json` (12 patches on 11 items), `places/f4-bring-forward.yaml`
(1 new place, validated: 0 errors). All patches are built from the live text read with
`pnpm -s dc place <id>` on 2026-11-25; only the named sentences change, ranks and attributes
untouched. Wynand Fockink not handled here (other slice).

## Per item (status checked 2026-11-25)

| item | pool place | outcome | status / sources |
|---|---|---|---|
| In 't Aepjen | 't Aepgen `o8ulepnxt9mh76pv3ihaqnqh` | patch: summary names the café; sitting there (monkeys, old jugs, window table), Visiting, Look-for | open. Hendrick de Keyser house page (2026: café since end of 1980s, upper floors hotel suites, photo caption "Aapjes in het interieur"); amsterdamoudestad.nl (jugs, prints, window); hours from Yelp listing updated Nov 2026 (daily 12-01, Fri-Sat to 03) |
| De Sluyswacht | Goslerhuisje `heaems4damq9eun4id3whgj4` | patch: terrace round the house, view to Montelbaanstoren, Visiting | open; sluyswacht.nl hours (Mon-Wed 12-00, Thu 12-01, Fri-Sat 12-02, Sun 13-20); nieuwmarktbuurt.amsterdam hotspot page |
| De Mof | SLUYS and De Mof `jj1evtt8chdeili2dgbrjyuh` | patch: official name 1922, two shopfronts 107/109, interior, handwritten receipts, Museumnacht 2022, Visiting | open; demofkleding.nl contact (hours); geheugenvancentrum.amsterdam page 1234 (2011, interior, 1922 name, Ruud van Doorn owner since 1990); Parool 1 Nov 2022 (Museumnacht, handwritten receipt, photo caption) |
| Café Schiller | Schiller `cunjo2jebngw6z8xk6lyuehc` | **new place** (food-drink, Nice) + pointer patch on the hotel | open; interior intact (art deco, Sjollema mosaic, Schiller portraits). Sources in the YAML |
| Krasnapolsky Winter Garden | `wanthsf989hpp4s401xp9iq9` | patch: answer is yes, by reservation (daily breakfast 7-11, weekends to 11:30; monthly themed brunch 13:30-16:30) | anantara.com breakfast page; wintergardenamsterdam.com (reservations by mail/phone) |
| café in De Kruiwagen | `wfib983r2q1fwii6pg8j7taj` | patch: named Café Kobalt, 2010 restoration, Visiting | open; cafekobalt.nl/about (history page citing Grachtenboek and register; restoration 2010) and hours |
| Scheepvaarthuis bar | `t3u23gn1mq2zjtwyrmdcz577` | patch: Portside Bar & Bistro (breakfast in Restaurant Seven Seas), booking counters in the hall, vault as wine cellar, tour details, Visiting | amrathamsterdam.com/restaurant and /informatie/historie/het-scheepvaarthuis; hetschip.nl Zondagsarrangement (Sun 11:30 coffee, 12:00 tour, 13:30 lunch) |
| The Duchess | Kas-Associatie `r8bx7cjqi7hayxhkyckbwe9d` | patch: bar and weekend afternoon tea as the way in, interior line, Visiting | open; the-duchess.com/contact hours; Michelin Guide (dark marble, chandeliers, antique clocks, stained glass; "voormalige lokettenzaal") |
| Café-Restaurant De Plantage | patched into Artisplein `hbiljbj4a04sg7rihtumeb3f` | patch: paragraph on the timber serre of the Ledenlokalen (1870), link to the population register place, Visiting, Look-for | open; caferestaurantdeplantage.nl hours (Mon 10-21, Tue-Sun 10-00); Gault&Millau (Ledenlokalen 1870, timber serre, terrace under the plane trees); artis.nl |
| De Gouden Reael | Zandhoek `tjc2u1sr8nq7x2pl7x69ol3a` + one sentence in cluster `jdfyx4qn1j0wqb374nvf0h99` | patch: café since 1824, Jan Mens 1939/1940, neighbourhood name, Stadsherstel purchase 1962, restoration 1978, stepped gable early 1990s, Caron since end 2019, Visiting | open; stadsherstel.nl monument page and news item "Familie Caron in restaurant De Gouden Reael" (since 1824 horeca; bought 1962; restoration 1978; gable early 90s); Wijkkrant Jordaan & Gouden Reael april 2005, "Jan Mens zette Gouden Reael op de kaart" (spring 1939 visit, landlord Hein de Boer, Griet Manshande, neighbourhood name); hours per Yelp Nov 2026 (daily from 12:00) |
| Café Pieper | In de Buis `g7blhkpokmrafj22p1wp7uqz` | patch (kept as a paragraph, not split): 1665 as the café's own claim, make-over, court next door (pool place `c9uelqpo96tmmusn277vwa4z`), Visiting | open; cafepieper.nl (hours, make-over, lawyers and actors) |

## Pool place found for the two "find it" items

- De Plantage: the Ledenlokalen (Plantage Kerklaan 36) is told only as the war site in
  `u6p2ol80uyz57kfkqse7uzdl` (Amazing, hidden-history). I left that memorial place untouched and
  put the café in the Artisplein place, which already names the Ledenlokalen and is about sitting
  there for free. The Plantage Middenlaan cluster `ddseyaok5nlku81axuvtrl4g` was not changed.
- De Gouden Reael: Zandhoek detail place `tjc2u1sr8nq7x2pl7x69ol3a` (main patch) and cluster
  `jdfyx4qn1j0wqb374nvf0h99` (one sentence).

## New place

- Café Schiller, the painter-hotelier's bar on the Rembrandtplein: food-drink, rank **Nice**,
  municipal monument 209037, pin at the door of Rembrandtplein 24A (52.365680, 4.896500).
  Photos: `Schiller-int-amsterdam.jpg` (CC BY-SA 4.0, café interior with the mosaic over the
  bar; Commons says "Rembrandtplein 26", the old number of the municipal monument record) and
  the 1961 Anefo photo of Frits Schiller with his portrait of Louis Davids (CC0). No good Commons
  exterior of 24A: `Amsterdam - Rembrandtplein 24.jpg` is rijksmonument 4982, the neighbour, so
  not used.

## Claims dropped

- Café Schiller: Maup Caransa buying the café in 1970 and betting with Jaap Kroonenberg on which
  tram reached the square first (house folder only, told as "het verhaal gaat"); iamsterdam's
  "almost unchanged since 1913" (wrong building date, tourism portal); herbergenvannederland's
  "1922, owned by Alex Rutten since 1991" (single source).
- In 't Aepjen: "a VOC sailors' inn" (amsterdamoudestad.nl states the legend as fact; Hendrick
  de Keyser and nl.wikipedia say unproven, as our text does); iamsterdam's "built 1519".
- De Sluyswacht: "leans more than the tower of Pisa" (old café site); 1692 (Nieuwmarktbuurt)
  vs 1695 left as our text has it (café's own sign says "anno 1695", register 18th century).
- Café Pieper: leaded windows and the low bar (iamsterdam only); Rob de Nijs song (findglocal
  only); shared ownership with Van Wees (not stated anywhere).
- De Plantage: "where De Wereld Draait Door was recorded" (amsterdamnow.com only).
- De Mof: "the oldest clothing shop in Amsterdam" (shop's own claim, left out).
- De Gouden Reael: Alain Caron's first job here 35 years ago (true per Stadsherstel interview but
  not needed).

## Caveats and open points

- De Mof interior (plank floor, counters, National cash register) is described from 2011; the
  handwritten receipt is from 2022. No sign of change, but nobody describes the interior in 2026.
- Hours for In 't Aepjen and De Gouden Reael come from listing sites (no own site with hours);
  conflicting Cylex hours for De Gouden Reael (16-18) ignored.
- Kas-Associatie: its existing check flag (elephant clock, Mercury, tile panel still in the hall)
  could not be settled online; left as is.
- Scheepvaarthuis: the rank in the pool is Nice (SCOUT-FI listed it as Amazing).
- Nothing written live; ranks file `scripts/data/amsterdam-c-list-ranks.json` not touched.
