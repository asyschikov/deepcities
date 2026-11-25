# Notes: f2-tasting-food (shortlist A 14 to 21, plus coffeeshops)

Drafted 25 Nov 2026. Output: `places/f2-tasting-food.yaml` (8 places, validator 0 errors),
`fixes/f2-tasting-food.json` (2 date fixes). All pins are BAG address points (PDOK) at the door,
except Stubbe's (OSM node of the stall on the lock bridge).

## Places and ranks

| Place | Rank | Pin | Photos |
|---|---|---|---|
| Wynand Fockink tasting room, Pijlsteeg 31 | Amazing | 52.372320, 4.895300 | 2 (CC0, 2014) |
| Van Wees distillery De Ooievaar, Driehoekstraat 10 | Nice | 52.382650, 4.883244 | 3 (CC0, 2014) |
| Eetsalon Van Dobben, Korte Reguliersdwarsstraat 5-9 | Nice | 52.365973, 4.895076 (no. 7) | none |
| D'Vijff Vlieghen and Nicolaas Kroese, Spuistraat 294-302 | Nice | 52.369650, 4.888736 (no. 294) | 1 (Kroese relief, CC BY-SA 3.0) |
| Stubbe's Haring, Haarlemmersluis | Okay | 52.379064, 4.894237 | 1 (CC0, 2015) |
| Toko Dun Yong, Stormsteeg 9 | Nice | 52.374338, 4.900931 | 2 (CC0 2011, CC BY-SA 2018) |
| Wegewijs, Rozengracht 32 | Okay | 52.373781, 4.881582 | none |
| The Bulldog The First, Oudezijds Voorburgwal 90 | Nice | 52.373678, 4.897678 | 2 (CC BY-SA 2015, CC BY 2018) |

Ranks to add to `scripts/data/amsterdam-c-list-ranks.json` at import. Parent cluster: the
Wynand Fockink place belongs under Behind the Dam `na99ycibssybp0qaq3hzafl9` like the Pijlsteeg
place; its pin is the same door as the Pijlsteeg place (no. 31), so the importer may want to
nudge one of them.

## Dropped

- **Brouwerij De Prael** (shortlist 16): the brewery on the Wallen has closed. Het Parool,
  29 Oct 2024: "De Prael sluit brouwerij op de Wallen, alleen proeflokaal blijft open";
  nl.wikipedia: the Oudezijds brewery shut in 2025, beers brewed by other breweries since 2026,
  owner Social Capital since Jan 2023. The scout's hook ("a working brewery you can see in a
  medieval lane") no longer holds; what is left is a 2002 social firm's tasting room with bingo
  and comedy nights (deprael.nl, Nov 2026). Fails "worth walking in without ordering". Could be
  one line in Het Veilinghuisje `ykinnyg8tbrbdhh8o3hhjkdc` if wanted.
- **Coffeeshop Rusland** (Rusland 16): the 1975 shop that held vignette "Nummer 001" (Ons
  Amsterdam 2008) no longer exists under that name: The Plug XXX 2022 to 2024, The Hit (a Hague
  chain) since 1 Oct 2024 (puffit.net, thehit.nl, directories). Nothing left to see. Mentioned
  in the Bulldog text only.

## Coffeeshops: choices and why

- **The first** is Mellow Yellow (squatted bakery, Weesperzijde 53, 1972; tea house and name on
  the window 1973; moved to the Vijzelgracht after a fire in 1978; closed 1 Jan 2017 under the
  250-metre school rule). Sources agree: Ons Amsterdam 2008 ("De eerste coffeeshop ter wereld"),
  Andere Tijden 2017/2004, nl.wikipedia, and in 2025 Henk de Vries himself credited Bruining with
  the concept (Soft Secrets). Rusland (30 April 1975, own site) and The Bulldog (Dec 1975) both
  claim "first"; they are the first in Centrum. **Mellow Yellow is already in the pool** as a Gone
  place, `eklfiwky8xgz7kj5a1oarvmy`, at detail **theme** (Alternative map only, off the home map),
  and it is in Oost, not Centrum. Its text is good and matches these sources. **Coordinator call:**
  lift it to detail `district` so the first coffeeshop shows on Deep Amsterdam (it has something
  to see: the house at no. 53). Its Vijzelgracht home (1978-2016) has nothing to see.
- **The Bulldog The First** (drafted): oldest coffeeshop still trading (AT5, Dec 2025), in the
  basement of the sex shop De Vries took over from his father, the seed of the best-known brand;
  50th jubilee Dec 2025 with the city's Andreaspenning; archive pledged to the Stadsarchief's new
  cannabis-culture collection (collection 31698). The painted front is the thing to see.
- **The Bulldog's ex-police station** on the Leidseplein is already in the pool
  (`n62kgli3jrtrz1thoeji9jec`, Nice): no change.
- Not taken: the Hash Marihuana & Hemp Museum (Oudezijds Achterburgwal, since 1985, per Ons
  Amsterdam 2008) is not a coffeeshop but would fit odd-museums if the user wants a cannabis
  history stop; not in the pool. The Lowland Weed Company (Hoekert and Grootveld, 1969, plants
  sold from the houseboat De Witte Raaf) is a story without a site.

## Dates settled

- **Wynand Fockink**: the house is of **1689** (national register 4746: "pand met klokgevel
  (1689)"; Stadsherstel: in 1689 the tavern of Bierman). The firm's **1679** is its own founding
  claim (wynand-fockink.nl, Lucas Bols; nl.wikipedia: founded 1679 by Jan Bierman). Fockink's
  takeover: 1724 (firm), 1729 (nl.wikipedia, "under the present name"), 1730 (Stadsherstel);
  he bought the house in 1731 (nl.wikipedia, Monumentenstad per scout). Text: house 1689,
  takeover "around 1730 (the firm says 1724; he bought the house in 1731)", firm counts from 1679.
  The Pijlsteeg place and the Behind the Dam cluster both said the tasting room "dates from 1679":
  fixed in `fixes/f2-tasting-food.json`, with a pointer line in the Pijlsteeg place.
- **Van Wees**: 1782 is De Ooievaar (The Hague); 1883 is Henri Matveld's firm, which Adriaan van
  Wees took over in **1922** (not "A. van Wees 1883" as the scout had it); house 1725 (register 913).
  When Van Wees and De Ooievaar merged is not stated anywhere; left out.
- **Toko Dun Yong**: 1957 unofficially, 1959 registered (Geheugen van Centrum, Ons Amsterdam);
  both given. Founder's arrival: 1912 (Ons Amsterdam review), during WWI (Geheugen van Centrum),
  "before WWII" (Amsterdam op de kaart): left out. Building: register field 1882 with "1982" in
  its text, Amsterdam op de kaart 1892: written as "late 19th century". "First Chinese shop in
  Amsterdam" (Geheugen) vs "not the first, but the oldest" (Ons Amsterdam): used Ons Amsterdam;
  plus NH Nieuws 2026, first Chinese business on the Zeedijk (1959).
- **Stubbe's**: grandfather began in 1967 in the Jordaan (Sylvia Stubbe, Hart van Nederland 2024);
  at the Haarlemmersluis since 1976 (Het Parool 2024). The "since 1903" of tourist sites is dropped.
- **Van Dobben**: opened 28 June 1945; the present interior is of about 1990 (eetsalonvandobben.nl:
  nos. 7 and 9 joined 1986, no. 5 in 1990 with the current interior). The scout's "interior hardly
  changed since 1945" is wrong; Het Parool's "al die tijd niets veranderd" is about the menu.
- **The Bulldog**: opened December 1975 (nl.wikipedia "eind 1975"; jubilee night 16-17 Dec 2025;
  "17-12-1975" painted on the front in a 2008 Commons photo). One blog says 17 Dec 1977: ignored.
  The father's business is a "seksshop" (Ons Amsterdam, nl.wikipedia) or "seksbioscoop" (AT5):
  wrote sex shop.

## Claims dropped

- Wynand Fockink: "oldest tasting room in Amsterdam" (Lucas Bols): contested, left out.
  "Nothing has changed since the 17th century" (firm): left out.
- Van Wees: "national inventory of intangible heritage" for fijndistillatie (firm): not checked,
  left out. Scout's "three-way crossing" and "most picturesque spot" quote: not read by me, left out.
- Van Dobben: footballers named, chain plans of new owners, supermarket exit: not needed.
- D'Vijff Vlieghen: "original Rembrandt etchings" (Time Out) and the celebrity guest list
  (Walt Disney, Danny Kaye etc., house): etchings dropped, the rooms given "according to the house".
- Toko Dun Yong: "first Chinese supermarket in the country" (tour blog) and "first Chinese shop in
  Amsterdam" (Geheugen) dropped. The heroin-era detail (some eighty addicts) is from Geheugen van
  Centrum (Els van Wageningen, 2011), a local-memory site.
- The Bulldog: the dog's name (Joris, from tourist sites), the façade painting taking six years
  (Flickr caption) dropped.
- Wegewijs: Piet Buis "for three decades" (scout) not confirmed; left out. Parool body unread
  (paywall): only headline and teaser facts used.

## Status checks (25 Nov 2026)

- Wynand Fockink: open daily, afternoon to about 21.00 (business listings); contact page live.
- De Ooievaar: shop Mon-Fri 13-17; tours sporadic on Fridays 15.00 by sign-up (site, 2026).
- Van Dobben: Mon-Sat 10-21, Sun 10.30-20 (own site); 80th jubilee June 2025 (Parool).
- D'Vijff Vlieghen: open daily from 17.30 (own site); email domain shows the UMH group runs it.
- Stubbe's: trading in 2026 (listings); the fixed-term permit outcome for its pitch is not known.
- Toko Dun Yong: family-run, owner Kin-Ping Dun (NH Nieuws, 17 Jan 2026).
- Wegewijs: own site live; Parool profile Jan 2024.
- The Bulldog The First: 50th jubilee 16-17 Dec 2025 (AT5); still trading.

## Sources (per place, beyond the YAML `sources`)

- Ons Amsterdam, "De eerste coffeeshop ter wereld" (Karin Lakeman, 23 Nov 2008), read via
  BrowserOS (robots-refusing site, one page, facts only).
- Ons Amsterdam, "Wind mee in de Stormsteeg" (Emma Los, June 2020), review of Karina Meeuwse,
  *Lang leven*.
- Andere Tijden, "Oudste coffeeshop Mellow Yellow sluit deuren" (2 Jan 2017).
- National register entries 4746, 913, 5653, 5654, 5655; city register 212047 (data.amsterdam API).

## Photo gaps

- Van Dobben: nothing on Commons (no exterior of nos. 5-9 found).
- Wegewijs: nothing on Commons ("Rozengracht 32.jpg" is in Harlingen, GPS 53.17, 5.42).
- D'Vijff Vlieghen: only the relief; "Advertising bicycle front of the restaurant.jpg" shows a door
  numbered 359, so not used.
- Wynand Fockink: the 2014 CC0 set is fine; no photo of the signboard indoors.

## Overlaps with pool places

- Pijlsteeg `j4j5jv0g6p0kad8pojtqd7bp` and Behind the Dam `na99ycibssybp0qaq3hzafl9`: date fixes.
- Proeflokaal A. van Wees `ii2mr8hcrgobefbv3gqt3d6f`: the Van Wees text points to it.
- Haringpakkersbrug / Canvas van Amsterdam `esde0b83ua681iohkzcvkglh`: Stubbe's Look-for.
- Politiebureau No. 14 (The Bulldog) `n62kgli3jrtrz1thoeji9jec`, Mellow Yellow
  `eklfiwky8xgz7kj5a1oarvmy`: referred to in the Bulldog text.
- Chinatown places `q1ogooimbt808nocosyfc1nu`, `j5ynez7kwp0ww2j5z9gw3wo7`: Toko Dun Yong could be a
  member of a Chinatown cluster.
