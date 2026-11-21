# De Baarsjes — research notes

Slice: Chassébuurt, Geuzenbuurt, Hoofdweg e.o., Van Galenbuurt, Westindische Buurt
(input `research/west/slices/baarsjes.json`, 34 register records in 30 groups).

## Output

`research/west/places/baarsjes.yaml`: 41 places, all passing `validate.py`.

- 29 monument places covering all 34 slice records, plus 16 national monuments found via
  the RCE linked-data SPARQL endpoint that are missing from the city export.
- 12 non-monument places: 2 bridges, 2 religious buildings, 4 memorials and history
  sites, 1 street-art piece, 1 curiosity and 2 gardens.

Dutch texts are spliced from the Dutch sources (city register text, RCE omschrijving,
nl.wikipedia, the Stadscuratorium, Public Art Amsterdam, natuurtuinslatuinen.nl, NH
Nieuws), and every source used is in `links`. For exceptions, see "Dutch written by me" below.

## Merges (monument numbers → place)

| Place | Monument numbers |
|---|---|
| Westerwijk | 200676 |
| Geuzenhof | 200722 (Dunnebier, north), 200723 (Berghoef, south) |
| Oranjehof | 200728 |
| Drukkerij Senefelder | 200675 |
| Former police post and fire station, Baarsjesweg | 200678 |
| Bethelkerk and Magalhaensplein | 200679 (church), 200680 (block ensemble), 200686 (school Willem Schoutenstraat 6) |
| Cabralschool | 200681 |
| Columbusplein housing (Noorlander) | city record 932cedff… ("In procedure", no number) |
| Visserschool (Columbusplein) | 200682 |
| Corantijnschool | 527154 |
| Telefooncentrale West | 200721 |
| Surinameplein housing by Roodenburgh | 200724 |
| Mercatorplein | 527135, 527136, 527137 |
| Hoofdweg housing by Wijdeveld | 200053 |
| Hoofdweg housing by Piet Kramer | 200725 |
| Hoofdweg housing by G.J. Rutgers | 200726 |
| Jan Evertsenstraat housing by J.F. Staal | 527144–527149, 200067, 200068 |
| Jan Evertsenstraat housing by Van der Mey | 527151, 527152, 200727 |
| Vespuccistraat housing by Roodenburgh | 527130–527133, 200064 |
| Jan Maijenschool | 527156 |
| Jeruzalemkerk | 527155 |
| Gijsbert Bakker hofje (Reinier Claeszenplein) | 200685 |
| Pieter Oosterleeschool (Orteliusstraat) | 200683 |
| Paramaribostraat housing by Piet Kramer | 200063 |
| Arminiuskerk | 200684 |
| Het Sieraad | 527153 |
| Former Apostolic church, Witte de Withstraat (now a mosque) | 200687 |
| De Klimop (Admiralengracht 301) | 200677 |
| Cabotstraat school island | 527139–527142 (RCE only, not in the city slice) |

Left out:
- **Jan van Galenbrug (526747)**: this rijksmonument came up in the RCE query, but it is
  already on the map with the Bos en Lommer monuments. The northern half of Wijdeveld's
  Hoofdweg "city gate" (531143) is also already on the map. The Baarsjes place mentions it
  but does not repeat it.
- **527107 (Chassékerk)** and **506136**: RCE linked data marks both "geen rijksmonument".
  Chassékerk is included as a non-monument place (its 2003 municipal listing was withdrawn).
  506136 is the Oud-West lucifergesticht and belongs to another slice.

## Source conflicts and uncertainties

- **Police post, Baarsjesweg 136 (200678)**: the register text says "rond 1910", but the
  register metadata says 1928. I used c. 1910.
- **Oranjehof (200728)**: the text says 1941–1942, the metadata 1943–1945, and "1942" is
  carved in the cornice. I used 1941–1942.
- **Gijsbert Bakker hofje (200685)**: the text names architect "H. Peters", the metadata
  "L. Peters". I used H. Peters.
- **Former Apostolic church (200687)**: the text gives a permit in April 1920 and use from
  May 1921, the metadata 1923–1925. I used 1920–1921. The record is named "Nieuw Apostolische
  Kerk", but the text speaks of an "Apostolische kerk". nl.wikipedia (Witte de Withstraat)
  says the NAK left in 1985 and the an-Nour mosque has been there since 1989; the register
  says Stichting Moskee Nour applied in 1996 for the conversion. The place says it has been
  a mosque since 1997, following the register.
- **De Wending 666/999**: Public Art Amsterdam places the former church "op nummer 69", but
  the register address is Witte de Withstraat 96 (Van Kinsbergenstraat 55). The texts only
  say "a number taken from that building's address".
- **Surinameplein (200724)**: the register says J. (Jordanus) Roodenburgh, nl.wikipedia
  "Daan Roodenburgh". I used the register.
- **Het Sieraad (527153)**: I used the RCE dates (1921–1923). Other sources give 1924–1926.
- **Cabralschool (200681)**: the register says the whole building is now basisschool
  De Wissel. nl.wikipedia (Cabralstraat 1) and ams-school say it has been the MidWest
  business centre since the 2013 renovation. I used MidWest, the more recent source. The
  architect is unknown; the register suspects P.L. Marnette (Publieke Werken).
- **Bethelkerk (200679/200680)**: the users are named "volle evangelische gemeente
  Maranatha" in one record and "Pinkstergemeente … Maranathakerk" in the other.
- **De Klimop (200677)**: the slice calls it "R.K. Basisschool", the register text a
  "school voor Voorbereidend Onderwijs" (nursery school), now day care. I followed the text.
- **Columbusplein housing**: status "In procedure Gemeentelijk Monument", with no text or
  number. The date (1923–1925) and architect come from the city register text for
  Noorlander's Oud-West complex (224012), which mentions it. It has no `heritage_status`.
  The coordinator should decide whether to keep it until the listing is final.
- **200053 and 200063 (both listed 1992)**: no register text. The Wijdeveld facts come from
  architectuur.org and ams-school. Paramaribostraat (Kramer) has very little to go on (see
  below).
- **Westermoskee**: nl.wikipedia gives the agreed minaret height as 43 m; other sources say
  42 m. I used 43.
- **Witte de Withstraat war memorial**: nl.wikipedia writes "Bons" and once "Brons". I used
  Bons, as on the stone.
- **Levensboom**: OSM gives start_date 2013 and "Renfurn". Wikipedia and Wikidata say
  Henry Renfurm, unveiled 30 June 2003. I used 2003.
- **Molenslootbrug**: the Hund-bank (2011 social sofa) is still in OSM, but nl.wikipedia
  says it disappeared during the 2022 works. The text says it is gone.
- **Tuin van Jan**: nl.wikipedia gives 1,600 m², FoAM 1,000 m², so the text gives no size.
  I could not confirm opening hours or public access; please check on site.
- **Damsko Strijder**: the Wikidata point (52.369428, 4.851367) is used. nl.wikipedia puts
  the lift shaft at the "zuidoostpunt" of the square, so the point may need checking on site.

## Dutch written by me (no Dutch source wording available)

- **Paramaribostraat housing by Piet Kramer (200063)**: there is no register text. Only the
  first sentence (Westindische buurt) is nl.wikipedia wording; the rest is mine.
- **Hoofdweg housing by Wijdeveld (200053)**: there is no register text. The Dutch is built
  from architectuur.org wording plus one sentence of mine on the 1992 listing.
- **Columbusplein housing**: a quoted passage from register 224012 plus a short framing
  sentence of mine.
- Short "Let op" items here and there that paraphrase the register's descriptive wording.

## Places missing photos

Monuments: Surinameplein housing by Roodenburgh, Vespuccistraat housing by Roodenburgh,
Pieter Oosterleeschool, De Klimop, Cabotstraat school island (no `Category:Rijksmonument`
files for 527130–527133 or 527139–527142), Columbusplein housing, Visserschool.
Other places: Tuin van Jan. The Gijsbert Bakker hofje photo ("R. Claeszenplein 1-61")
matches the address but has not been checked visually.

## Walking routes

**1. Plan West: Berlage's square and the Amsterdam School avenue (~3.5 km)**
Het Sieraad → Machineslootbrug → Hoofdweg housing by Piet Kramer → Hoofdweg housing by
G.J. Rutgers → Cabralschool → Mercatorplein → Damsko Strijder → Jeruzalemkerk →
Jan Maijenschool → Tuin van Jan → Vespuccistraat housing by Roodenburgh → Hoofdweg
housing by Wijdeveld

**2. Old Baarsjes and the Chassébuurt: from polder hamlet to mosque (~2.5 km)**
Former police post and fire station, Baarsjesweg → Slatuinenweg → Natuurtuin Slatuinen →
Chassékerk → War memorial, Witte de Withstraat → Former Apostolic church, Witte de
Withstraat → De Wending 666/999 → Westermoskee → Telefooncentrale West → Molenslootbrug →
Jan Evertsenstraat housing by Van der Mey → Jan Evertsenstraat housing by J.F. Staal

**3. Geuzenbuurt: Van Saane's housing experiments (~1.5 km)**
Oranjehof → Geuzenhof → Drukkerij Senefelder → Gijsbert Bakker hofje → Westerwijk →
De Klimop

**4. Schools and churches of the pillarised neighbourhood (~2.5 km)**
Corantijnschool → Pieter Oosterleeschool → Columbusplein housing → Visserschool →
4 May memorial, Columbusplein → Bethelkerk and Magalhaensplein → Cabotstraat school
island → Cabralschool → Jan Maijenschool → Jeruzalemkerk

**5. Remembering: Surinameplein to Columbusplein (~2 km)**
Levensboom, Monument van Besef → Surinameplein housing by Roodenburgh → Paramaribostraat
housing by Piet Kramer → Arminiuskerk → 4 May memorial, Columbusplein → War memorial,
Witte de Withstraat
