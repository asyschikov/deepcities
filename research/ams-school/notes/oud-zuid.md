# Notes: oud-zuid

The slice covers Plan Zuid west of the Amstel canal zone:
- Willemspark and the Vondelpark edge
- Museumkwartier/Concertgebouwbuurt and the Valeriusplein
- Harmoniehof and Roelof Hartplein
- Apollobuurt
- Stadionbuurt and the Olympic Stadium
- Schinkelbuurt and Hoofddorppleinbuurt

There are 64 places in `places/oud-zuid.yaml`. All of them are bilingual. The `nl` blocks were written from the Dutch register texts (RCE and the city) and from nl.wikipedia, not translated from the English.

## Excluded candidates

- **Pre-1910 buildings, or matches only on small Amsterdam School additions or the bibliography:** city:222049, city:222138, city:200505, city:222051, city:222053, city:222098.
- **city:222137 Dufaystraat school:** a bibliography false positive ("Inventarisatie van Amsterdamse schoolgebouwen"). Its client field also looks misassigned.
- **city:222106:** Um-1800 style, not the Amsterdam School.
- **Post-war, or not the style:**
  - city:222140, city:222113, city:222130, city:222112, city:200632
  - city:200602 Muzenhof
- **Traditionalist blocks whose register text mentions the Amsterdam School only as boilerplate:**
  - city:222001 Minervaplein
  - city:222021, city:222018 and city:222019, city:222024
  - city:222004 Parnassusweg
- **Borderline, left out** (the coordinator can add any of these):
  - city:222020 Westerman, Botticellistraat
  - city:200506 Crouwel, 1912 (before the style)
  - city:222026 Warners, Prins Hendriklaan 3–5
  - city:222054 Baanders, Sophialaan 18
  - city:200990 Albrecht Dürerstraat 10: only the interior is in the style.
  - city:200396 Hervormd Lyceum (Petri): not checked in depth.
- **Wikidata-only items:**
  - Villa Reens (rce:505727): rationalist, 1912.
  - Minervapaviljoen: demolished in 1974.
  - Het Nederlandsch Sportpark: demolished.
  - The Olympic / Citroën building (1931): Nieuwe Bouwen.
  - Anthonie van Dijckstraat 1: Nieuwe Zakelijkheid.
  - Emmaplein 1 and the Emmaplein transformer house: the only evidence is images.

## Merges and splits

- The Emmaplein villas (Staal 1911 and Juffer 1919) are merged into one place.
- The Rutgers town houses on the Hacquartstraat/Cornelis Schuytstraat corner are merged.
- The Warners double villas on the J.J. Viottastraat are merged.
- Harmoniehof covers the whole De Samenwerking complex, rce:527813–527823.
- Kinderbrug and Hildo Kropbrug, with their transformer house (rce:527784, 527785, 527787), form one place.
- The four villas on the Apollolaan, Albert Hahnplantsoen and Dijsselhofplantsoen form one "Apollolaan villas" place. Villa Lebbink stays separate because it has its own Wikipedia article.
- The four Minervalaan II blocks (rce:527779–527782) form one place.
- The three municipal Haarlemmermeerstraat blocks (222006, 222007, 222008) form one place: the register treats them as one symmetrical composition.
- The four Olympic Stadium monuments (rce:451749, 451750, 451753, 451754) form one place.
- The Olympiaschool (rce:527792–527794) is one place.

## Added beyond the candidates

**The raw RCE extract for this slice is incomplete.** It holds only 135 records. A bbox SPARQL query on the RCE linked data returned 91 monuments related to the Amsterdam School, 39 of which were not in the candidate file. **Please re-run the RCE extraction for the other slices too.**

Additions from that query:
- Harmoniehof (527813–527823)
- Muzenplein bridges (527784, 527785, 527787)
- Koninginneweg 8 (505243)
- Westhove (505891)
- Huize de Windroos (505372)
- Hacquartstraat houses (506018, 505917)
- Villa Klatte (505599)
- La Croix houses (505575)
- Heinzestraat houses (505408, 505417, 505427, 505443)
- Concierge's house Heinzestraat 13 (505402), included with the Meisjeslyceum
- Boterenbrood block (527833)
- Van Anrooy (527850)
- Minervalaan II (527779–527782)
- La Pergola (527838) and the Baanders double villa (527836)
- Zonnehof (527841)
- Olympiaschool play buildings (527793, 527794)
- Stadium service house (451753)

Additions from nl.wikipedia, not listed as monuments:
- Joep Langebrug (bridge 417, Kramer and Krop, 1939–41)
- Overtoomse Sluis (bridge 199, Kramer and Krop, 1948)

## Source conflicts and uncertainties

- **Willem de Zwijgerkerk:** nl.wikipedia gives 1931 as the building year; the city register gives 1932–1934. I used 1931.
- **Gemeentelijk Meisjeslyceum (city:222128):** the client field says "Christelijke School Vereeniging Aeneas Mackay", which contradicts the text (a municipal girls' lyceum). I used City of Amsterdam. The architect is probably Lansdorp, with B.A. Lubbers: the register says "probably", and Krop's archive names only Lansdorp.
- **Gerrit van der Veen College (rce:527773):** the register does not name the architect. Urbipedia suggests Lansdorp; that is unconfirmed, so I left the field out.
- **Olympic Stadium:** RCE calls it "zakelijk-expressionistisch". Wils is not strictly Amsterdam School (De Stijl, Wright, Dudok). I kept it because the brief expects it, with style_phase Sober.
- **Hillehuis:** number 30 is excluded from the listing.
- **Kuipers & Ingwersen block (city:222005):** probably the same block as wd:Q125679143 "Woongebouw Stadionweg". This is not confirmed.
- **Slice borders:**
  - The Overtoomse Sluis sits on the Oud-West/Zuid border and may duplicate an item in the oud-west-baarsjes slice.
  - The Joep Langebrug and the Muzenplein bridges lie on the Zuider Amstelkanaal, which may border the Rivierenbuurt or Zuid slice.
  - The Surinameplein blocks may also appear in oud-west-baarsjes.
- The Olympic Stadium's 1998–2000 restoration: the dates come from nl.wikipedia. Some sources say 1996–2000.

## Places missing photos

Wikimedia Commons API calls returned HTTP 429 for this whole session, so photos come only from P18 values in the Wikidata dumps. These 35 places have no photo:
- Garden house Oranje Nassaulaan 10
- Villa Insinger
- Vondelpark gate Amstelveenseweg
- Koninginneweg 50–60
- Koninginneweg 8
- Amsterdams Lyceum
- Valeriusplein toilet buildings
- Huize de Windroos
- ULO school Cornelis Krusemanstraat
- Fysiologisch Laboratorium
- VU laboratory De Lairessestraat
- Westhove
- Scheepvaartkundig Museum
- La Croix houses
- Villa Klatte
- Warners villas J.J. Viottastraat
- Rutgers town houses Hacquartstraat
- Dobbelsteen houses
- De Lairessestraat 89–107
- Jacob Obrechtstraat 66–70
- Kramer houses Heinzestraat
- Harmoniehof
- Kinderbrug/Hildo Kropbrug
- Joep Langebrug
- Apollolaan 191
- Rutgers block Apollolaan 175–185
- Warners block Olympiaplein
- Gerrit van der Veen College
- Boterenbrood block
- Rutgers houses Stadionweg
- Zonnehof
- Kuipers & Ingwersen block
- Surinameplein
- Haarlemmermeerstraat blocks
- Calvijnschool

Most rijksmonuments have a `Category:Rijksmonument_<nr>` on Commons, so a later run should fill these easily.

## Material for map-level documents

- **Kramer's bridges.** Piet Kramer designed about 500 bridges for Public Works, and about 220 were built. In this slice:
  - Lyceumbrug (410, 1926–28), the largest flat bridge
  - Boerenweteringbrug (406, 1926–27)
  - Ceintuurbrug (116, 1927)
  - Muzenplein bridges 419/420 (1930–31)
  - Joep Langebrug (417, 1939–41)
  - Overtoomse Sluis (199, 1948)

  Hildo Krop, the city sculptor, did the sculpture on almost all of them. The Lyceumbrug's boat jetties and changing rooms were built at the rector's request.
- **Building sculpture.**
  - Krop at Villa den Tex, Vossius, the Meisjeslyceum and the Europaschool.
  - Theo Vos and Jacob Kaas with Rutgers. Kaas's Minervalaan capitals include portraits of members of the Schoonheidscommissie/Commissie Zuid.
  - Mari Andriessen at Apollolaan 178; Louise Beijerman at Vrijburg; Hassoldt, Trapman and Kaas on Gratama's Olympia gateways.
- **De Samenwerking.** This co-operative housing association built for the middle class: Harmoniehof (Van Epen), Staal's Bronckhorststraat block, and Het Nieuwe Huis.
- **Housing for single people.** Het Nieuwe Huis (1928, 188 flats with communal dining and reading rooms) and Huize Lydia (1927, Catholic home for women).
- **Public Works schools.** Lansdorp's schools are the Europaschool (1921), the Meisjeslyceum (1925) and the Vossius (1931–32); Roobol's open-air school is at Stadionkade 113. The Vossius register text ties school building to the social-democratic city council of the 1920s.
- **Gratama's conflict of interest.** Gratama supervised the Stadionbuurt for the city while he was a partner in H.A.G.A., which built Olympia. This caused controversy in the professional press.
- **Willemspark.** It was the only villa park ever realised in Amsterdam. The Emmaplein villas show the move from Staal's rationalism (1911) to Juffer's Amsterdam School (1919).
- **The style's late phase.** Several works in this slice extend the style into the 1930s and beyond, often mixed with Nieuwe Zakelijkheid, Wright or traditionalism:
  - Van Anrooy, Apollolaan 191
  - Zonnehof (1938–40)
  - Calvijnschool (1932)
  - Joep Langebrug (1940)
  - Overtoomse Sluis (1948)
- **Wright and Dudok influence.** These works show cubic volumes and flat roofs:
  - the Warners villas and dobbelsteen houses
  - Rutgers's Valeriusplein double house
  - De Zonne-Wijzer
  - Elte's synagogue
