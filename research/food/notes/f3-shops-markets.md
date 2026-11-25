# f3-shops-markets: notes

Items 22-29 of section A (SHORTLIST-CENTRUM.md). Status checks on 2026-11-25 unless dated.
Places: `research/food/places/f3-shops-markets.yaml` (5, validates 0 errors).
Patches: `research/food/fixes/f3-shops-markets.json` (4).

## Category

The map has no shop or market category. Shops follow pool precedent (Concerto, Rush Hour,
Fort van Sjakoo): `curiosities`. Markets follow Albert Cuyp, Dappermarkt, Bloemenmarkt:
`food-drink`. If the user wants a "Shops & markets" category, these five plus Concerto move.

## Per item

**22. Posthumus** (new place, Nice). Sources: posthumus.nl/informatie (firm founded 1865 by
Jan Daniël Posthumus, royal warrant, works at Oderweg 2, shop Sint Luciënsteeg 23-25: firm and
shop are still one); posthumuswinkel.nl (hours Tue-Fri 10-17.30, Sat 11-17.30; wall of wax);
NH Nieuws 3 June 2020 (shop since 1903, one of the ten oldest shops; Breurkens 32 years);
postfabriek.nl 2020; RCE 5466 (no. 25 listed, no. 23 not). Date conflict: shop says "in the
centre since 1865", NH Nieuws says the shop since 1903: text gives both. Pointer patch on the
Sint Luciënsteeg place (zgmpb3yrn31hzncv1v3elcha) fixes its "traded since 1865".

**23. Kramer & Pontifex** (new place, Nice). Sources: NRC 3 Jan 2014 (lede only: Ed Kramer, 83,
over 45 years, "the last doll doctor of Amsterdam"); de9straatjes.nl (owner Klaas Kramer,
wigs, 1970s candlesticks, oil cabinet); pontifex-kaarsen.com (doll doctor at no. 20 "for more
than 80 years", told as the shop's claim). Hours conflict: own site Tue-Sun 11-18 (Thu to 20),
de9straatjes Tue-Sat, Sun closed: text says "according to the shop, check before Sunday".
KvK 98273388 on the site is a recent registration (new legal form?); shop and site live.

**24. Concerto**: already in the pool as cv17ppx8ztia9ihtjmg2y14f (detail theme, no rank, a
good text). Not redrafted: patch adds opening date 25 Nov 1955 at no. 60 (concerto.nl/ons-verhaal),
coffee corner, Visiting line (Mon and Sun 12-18, Tue-Sat 10-18, concerto.nl/contact).
**Coordinator: lift it to detail district and set rank Nice** (the patch format can't).
"Largest record shop in NL" is a self-claim: left out.

**25. Chagall Gallery Wuyt** (new place, Okay). Address settled: **Spiegelgracht 32**. Every
current page of chagall.nl (home, gallery, contact, all footers) gives Spiegelgracht 32, 1017 JS,
gallery owner Erik de Wolf. Nieuwe Spiegelstraat 5b-9a is **Galerie Amsterdam** (Astrid
Cornelisse), a separate gallery that opened there in 2016 with Silkwood Antiques and also sold
Chagall prints; the old chagall.nl page about it is an archived 2016 notice. Not checked
whether Galerie Amsterdam is still there; left out of the text. How to visit: by appointment
only (e-mail or phone via chagall.nl); nothing to see without one but the house front, so rank
Okay; the text points to the Spiegelkwartier. The research centre has its own address
(Lange Leidsedwarsstraat 143) on the contact page although the home page says "in this
building": text does not place it. Origin of the name Wuyt not found. All facts from the
gallery's own site (no press found): told as the house's own claims.

**26. Spiegelkwartier** (new place, Nice). Sources: nl.wikipedia Spiegelkwartier (name by
Frides Laméris), spiegelkwartier.nl/over (from 1900 dealers, 70+ dealers), Amsterdam op de
kaart no. 39 (Van Messel 1910, Aronson 1969-2014), nl.wikipedia Frides Laméris, frideslameris.nl
(no. 55, at PAN Nov 2026). Conflict: association says the canal is named after burgomaster
Hendrick Dircksz Spiegel; Wikipedia says which Spiegel is unknown: text says "the Spiegel
family, which one is not certain". Overlap: "Around the Spiegelgracht" (on5431qmdounxj2cvg1u0tkj)
covers buildings not trade; Bieseling gable stone and Lippmann Rosenthal have own places.

**27. Noordermarkt markets** (new place, Nice, food-drink). Own pin, because neither pool
place pitches the market (both name it in a Look-for line: ug76c3fail8cl23ygpumw6xc,
o6t15j96yfw3mt3t6b8hjcds). Sources: nl.wikipedia Noordermarkt (Dapper 1663: clothes and
earthenware; boerenmarkt since 1987); noordermarkt-amsterdam.nl (pottery market, Westerstraat
overflow after 1861, hours Mon 9-14, Sat 9-16, book Dec 2025); biologischenoordermarkt.nl
("first organic farmers' market in NL", told as its claim); Parool 11 and 15 Dec 2025
(headlines and captions only, paywalled). Pin on the square north of the church, between
the two existing pins.

**28. Spui book market**: **patch**, not a pin. Reason: it is the Spui's Friday life on the
same square as the Spui place (l1awc3rqmfpgktsp5zqwnl18); no founding date or story beyond
"thirty years a fixture"; a second pin would sit on top of the first. Sources:
deboekenmarktophetspui.nl (Fridays 10-18 all year, ~25 sellers, vetting committee), nl.wikipedia
Spui (Sunday art market March-December; Weiner's work in the book-market paving),
artamsterdam-spui.com, NH Nieuws 11 Sep 2026 (Kalverstraat works early 2027 to ~2028, Spui
possibly a depot, city discussing another site). Suggest outlook on the Spui place: Major change
ahead, 2027, "book market may move during the Kalverstraat works" (patch format can't set it).

**29. Amstelveld plant market**: **patch** on Amstelkerk (crl2f78zbjifgn1wqnyqnjkf). Reason:
the place already tells the 1876 market and Kokadorus; the market has no separate site to pin.
Added: many Jewish traders before the war, the September 1941 ban on Jews at all city
markets, today ~30 stalls of plants, herbs and bulbs, Visiting Mondays ~9-18. Sources:
nl.wikipedia Amstelveld (citing joodsamsterdam.nl), joodsamsterdam.nl/amstelveld,
marktenmarkten.nl (Monday 23 Nov 2026, 27 stalls). The Reguliersgracht/Amstelveld cluster
(jypicc5pdsxydgqkxd2i4u14) not touched.

## Claims dropped

- Posthumus: "one of the oldest shops" beyond NH Nieuws' "ten oldest"; any interior age.
- Kramer: the "Operatiezaal" door and sick-bay ritual (Platform21 user tip only); sons
  Klaas and Daan taking over from E. Kramer (same single source; text names only Klaas, per
  de9straatjes); founding year (unknown; "80 years" kept as the shop's claim).
- Chagall: the "Marc Chagall houseboat" opposite (own site only); Nieuwe Spiegelstraat
  address (a different gallery, 2016); research centre in the same building (conflict).
- Spiegelkwartier: craftsmen as first residents and burgomaster Spiegel (association only,
  conflicts with Wikipedia); "80 years heart of the national art trade"; 1979 Beatrix visit
  with a Mr Laméris (Anefo caption doesn't give his first name).
- Noordermarkt: 1845 start of the Monday market and the 1929 pigeon market (market's own
  site only); "lapjesdag" of 1750 (noordermarkt.info, hobby site); Parool's snippet putting
  the first boerenmarkt "after the war" (contradicts 1987, article paywalled).
- Amstelveld: WA attack on Jewish traders on 12 Feb 1941 (joodsamsterdam.nl only); 'Had-je-me-maar'.
- Spui: founding year of the book market (not found).

## Photos

- Posthumus: RM5466 Sint Luciensteeg 25.jpg (CC BY 3.0, shopfront with name), Zegels-posthumus01.jpg
  (CC BY-SA 4.0, seals in the window, 2018).
- Spiegelkwartier: Sarah Stierch street view (CC BY 4.0, 2011), MK49553 (CC BY-SA 3.0, 2015).
- Noordermarkt: Noordermarkt foto 2 and 5 (PD, Saturday 11 May 2019), Farmer's Market -.jpg (CC BY-SA 4.0, 2018).
- **Gaps**: Kramer & Pontifex (Commons has Reestraat 18 but no clear view of no. 20's shop),
  Chagall Gallery Wuyt (only Jacob Olie's 19th-century Spiegelgracht views).
- For the patched places (format has no photos): Concerto Recordstore.jpg (CC BY-SA 4.0, 2018)
  for Concerto, which has none; Spui Book Market.jpg (CC BY-SA 3.0, 2010) for the Spui place;
  Amstelveld flower market by Fons Heijnsbroek (2022) for Amstelkerk.

## Route idea

Shops off the A-list: Posthumus, Athenaeum and the Spui book market (Friday), Kramer &
Pontifex in the Reestraat, the Spiegelkwartier and Chagall window, Concerto, the Amstelveld
(Monday). Monday version: Noordermarkt, Westerstraat, Amstelveld.
