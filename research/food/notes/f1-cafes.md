# f1-cafes: notes

Slice: shortlist A items 1 to 13 (brown cafés). Drafted 2026-11-25.
Output: `research/food/places/f1-cafes.yaml` (12 new places, validator 0 errors),
`research/food/fixes/f1-cafes.json` (2 patches: Eijlders, Westerstraat pointer to Café Nol).

## Places and ranks

| Place | Rank | Pin (door, PDOK) | Register |
|---|---|---|---|
| Café Hoppe | Nice | Spui 18, 52.368775, 4.888615 | rijksmonument 5556 + 5557 |
| 't Smalle | Nice | Egelantiersgracht 12, 52.376731, 4.884133 | rijksmonument 990 |
| De Pilsener Club (Engelse Reet) | Nice | Begijnensteeg 4, 52.369542, 4.890852 | rijksmonument 335 |
| Café Karpershoek | Nice | Martelaarsgracht 2, 52.378123, 4.896763 | rijksmonument 3684 |
| Café Scheltema | Okay | NZ Voorburgwal 242, 52.372083, 4.890368 | rijksmonument 5993 |
| Lokaal 't Loosje | Nice | Nieuwmarkt 32, 52.372391, 4.899498 | rijksmonument 3860 (no. 34 only) |
| Café Reynders | Okay | Leidseplein 6, 52.364619, 4.882891 | not listed |
| Café Krom | Okay | Utrechtsestraat 76, 52.362923, 4.898516 | municipal 201040 |
| Café Slijterij Oosterling | Nice | Utrechtsestraat 140, 52.361074, 4.899256 | rijksmonument 5858 |
| Café Chris | Okay | Bloemstraat 42, 52.374266, 4.881577 | rijksmonument 605 |
| Café Nol | Nice | Westerstraat 109, 52.378274, 4.883484 | municipal 211047 |
| Café Hegeraad | Okay | Noordermarkt 34, 52.379390, 4.886101 | rijksmonument 3920 |
| Café Eijlders | (patch, no rank change) | already lr1tns1jzabsn07z55ulw2pw | |

No Amazing. Karpershoek is the closest candidate (documented 1641, 16th-century timber-frame house).

## Overlaps with the pool

- **Café Eijlders is already a pool place**: `lr1tns1jzabsn07z55ulw2pw`, made for the Alternative map
  (detail `theme`, no rank, no photo). Not drafted again. Patch adds Braak (1950) and a Visiting
  line. For the coordinator: set detail `district` so it shows on Deep Centrum, rank Nice, and add
  `commons:File:Eijlders-amsterdam.jpg` (CC BY-SA 4.0, Paul2, 2017); the patch format can't carry these.
- **Café Nol** was a line in `ui99513tg73p0s7b963pjnhq` (Westerstraat's 1930s rebuild); now its own
  place, with a pointer line in that place. That place carries `check: Still there?` about Café Nol:
  it can be cleared (open, own site and Mokum Magazine Aug 2024).
- 't Smalle sits two doors from `x8gqs47530f2hdx8zylghgpu` (Hoppe's wine house): the Smalle text
  points to no. 16 in its Look-for list; Hoppe's wine house could get a reciprocal line.
- Scheltema leans on `wwk17qjojkuw89oq1riokm1b` (newspaper street) for the 1967-1976 date.
- Hegeraad and Papeneiland (`jordaan-1.yaml`): same family, by the family's own account only.

## Dates settled

- **Karpershoek**: café says 1606. Ons Amsterdam (Maarten Hell, July 2023): 1606 comes from a lottery
  rhyme of a couple living in the cellar; first sure record of a drinking house is a deed of Sept 1641
  (inn De Oldenburger Kelder). Text gives both, says what each rests on. House: register says mid or
  late 16th century (rebuilt above the main floor mid-19th). en.wikipedia's "1629" for the building
  is not used.
- **Café Chris**: 1624 (Westertoren builders paid here, Rembrandt) told as legend; Hell found a
  butcher here in 1731 and spirits first served in 1882 (barber B.J.J. Baars). The register dates the
  house "plm 1650 ?"; given as "about 1650 (date uncertain)".
- **Hoppe**: 1670 is the café's own date (repeated by nl.wikipedia Spui); told as the house's count.
- **'t Smalle**: Pieter Hoppe "around 1780" is the house's account; the house itself is early 19th
  century (register XIXa), consistent with Hoppe buying up the canal after 1804. Café opened
  30 Nov 1978 (house, citing Heineken staff magazine 1979). The 1786 date in tourist guides dropped.
- **Reynders**: front 1873 (Schmitz, for Hilman); Reijnders from about 1897 (Amsterdam op de kaart,
  population register); café's own 1896 mentioned; "since 1880" (pubsleidseplein.nl) dropped.
- **Krom**: Monopole Bar 1913 (Amsterdam op de kaart), house 1912 (register); Parool's "1923" not used.
- **Oosterling**: house 1877 vs Parool 1897: both given ("late 19th century"); bruinekroeg.com 1820 dropped.
- **Nol**: 1 July 1966 (own site; Parool and AT5 give 1966; a family member's site says 30 June 1966).
- **Eijlders "Voor Joden verboden" sign**: Ons Amsterdam 1942, café site and nl.wikipedia 1943. The
  live text already gives no year; left so. Jail in 1943 (three months) is Ons Amsterdam's, kept.
- **Pilsener Club**: rename 1940 confirmed by Ons Amsterdam 2018 (grandfather scratched "Zum" off).

## Claims dropped

- Oosterling: "VOC spice warehouse of 1735" (own site only); "the only double licence left in
  Amsterdam" kept only as "the house says it is no longer granted".
- Hoppe: Beatrix selling De Strijdkreet with Majoor Bosshardt, Freddy Heineken, "best café 2013"
  (own site only); D'66 founding told as the house's claim.
- 't Smalle: the house's colourful Jordaan history; the jetty's physical removal date (AT5 planned
  14 Nov 2022, court refused suspension 9 Dec 2022; written as "lost in 2022").
- Chris: "oldest café of Amsterdam (1624)" (local paper) told as legend; the name date 1957
  ("Ome Chris en Tante Annie", Mokum Magazine only) dropped. Note: cafechris.nl is now a casino spam
  domain, not the café's site. bruinekroeg.com's "Café Chris" entry is a different café (Scholten, 1977).
- Loosje: horse-tram waiting room and the "lootsje" etymology kept only as the house's account,
  flagged `check: Facts`. "Same family for 35 years" (FC Centrum blog) dropped.
- Nol: "red velvet and chandeliers, looks like the founder's front room" (no source read);
  street-festival stop in 1986 (Parool teaser only); "opened 2024" (mapstr) ignored.
- Hegeraad: "more than 100 years" (tourist sites), the 2025 brown-café book cover (Parool headline
  not read), "Ome Jan" (private person). Formerly "café Huijsman" and the Papeneiland link rest on
  FC Centrum (an interview with the family): told as the family's account.
- Krom: the 101,000th Indisch meatball (Parool PS teaser), "1920s interior" (shopping-street site).
- Reynders: "today mostly tourists" (Parool, not read).
- Komrij "regular at Oosterling" (LinkedIn quote only); kept only the poem and the crossing.

## Status checks (2026-11-25)

All open. Evidence: own sites with current hours (Hoppe, 't Smalle, Loosje, Scheltema, Reynders,
Oosterling, Hegeraad, Eijlders, Nol), RB Horeca venue page and Dec 2025 alcohol licence
(Karpershoek), Mokum Magazine Oct 2024 (Chris), Ons Amsterdam 2018 and listings (Pilsener Club),
Parool PS 2024 teaser and NRC 2019 (Krom). Hours not found for Pilsener Club, Karpershoek, Krom,
Chris and Nol (Nol: listing says evenings, used loosely); their Visiting lines say only how to go in.

## Photo gaps

- Café Krom: no usable Commons photo of the corner today (only a 1963 RCE street shot, not checked
  to show no. 76). Gap.
- 't Loosje, Hegeraad, Chris, Karpershoek, Pilsener Club: exterior photos only (2010-2015 WLM).
- Oosterling: the only photo is the 2023 zebra-crossing shot (Ceescamel), café front partly in view.
- Nol: 2020 front (Ceescamel) plus an Anefo CC0 photo of Willy Alberti in the café, 21 Dec 1966.
  Two more Anefo CC0 photos exist (Ajax party 1973, 926-4466; yearly party 1982, 932-2697).
- Eijlders: photo exists (see above), needs adding to the pool place by hand.

## Sources (main, per place)

- Registers: RCE 5556, 5557, 990, 335, 3684, 5993, 3860, 5858, 605, 3920; city register 201040 and
  211047 (api.data.amsterdam.nl).
- Ons Amsterdam (read in BrowserOS, one article at a time): "Dit is de oudste kroeg van Amsterdam"
  (Hell, 2023: Karpershoek, Chris), "125 jaar Pilsener Club annex Engelse Reet" (2018), "Beroemde
  stamkroegen" (2008: Scheltema, Reynders, Eijlders), "De bruine kroeg heeft alles overleefd" (2008:
  Heineken saved Korpershoek 1971), "Café Eijlders is al 80 jaar een artistieke huiskamer" (checked
  the live Eijlders text). Search-result snippet only: "Vaste route: Oek de Jong" (Loosje).
- Amsterdam op de kaart: Leidseplein 6, Utrechtsestraat 76.
- SHIE (ZHB tile tableau, Loosje); Andere Tijden episode 130 page (Chris, via search result);
  WJGR 00000042, 00000085, 00000088, 00000188 (PDFs).
- nl.wikipedia: De Pilsner Club, Spui, Resistentieorkest, Eijlders.
- News: AT5 2022 and rechtspraak ECLI:NL:RBAMS:2022:7418 ('t Smalle jetty); Parool and AT5 2016
  (Nol 50 years, teasers); Parool and NRC 2021 (Scheltema voucher campaign, teasers); NRC 2019
  (Krom book, teaser); Panorama and TPO (Komrij poem, snippets).
- Own sites: cafehoppe.com, t-smalle.nl, loosje.nl, caferestaurantscheltema.nl, cafereynders.nl,
  cafeoosterling.nl, cafenol.amsterdam, cafehegeraad.nl, cafeeijlders.com, eijldersdichters.com.
- Leads only: bruinekroeg.com, fccentrum.nl, Mokum Magazine, amsterdamsights, Facebook.
- Nationaal Archief / Anefo photo captions on Commons (Café Nol 1966, 1973, 1982).
