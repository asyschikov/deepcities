# Notes: pijp-rivierenbuurt

The slice covers the eastern half of Berlage's Plan Zuid:
- the Plan Zuid part of De Pijp (P.L. Takbuurt / De Dageraad, Diamantbuurt, Van der Helstplein)
- the Amstelkanaal and its Kramer bridges
- the Rivierenbuurt (IJselbuurt, Scheldebuurt, Rooseveltlaan)
- the Amsteldijk south to Zorgvlied

Buitenveldert and the Zuidas had no Amsterdam School candidates; they are post-war.

There are 41 places in `places/pijp-rivierenbuurt.yaml`, and all of them are bilingual. The `nl` blocks were written from the RCE and city register texts (the full city texts come from `api.data.amsterdam.nl/v1/monumenten`) and from nl.wikipedia. They were not translated from the English. The English draws on en.wikipedia (Plan Zuid, Rivierenbuurt, De Pijp, Piet Kramer, Michel de Klerk, Margaret Staal-Kropholler, Jan Frederik Staal, Hendrik Wijdeveld, Hildo Krop) wherever it covers the subject. Otherwise it draws on the register texts.

## Merges

- **De Dageraad:** rce:1508 and rce:37649. The P.L. Tak memorial (wd:Q133280087) and the Wibaut bust are part of rce:1508, so they are not separate places.
- **Coöperatiehof:** the complex rce:527803 with its parts 527804–527807 (the housing, the reading room with the Tellegen memorial, and the Van Buuren memorial).
- **Tweede Openbare Handelsschool / Berlage Lyceum:** rce:527797 and rce:527798 (complex 527796).
- **Diamantbuurt (Van Epen):** city:200006, 200013, 200015 and 200016.
- **Holendrechtstraat:** city:222246 and city:200441 (Holendrechtstraat 23-35, listed separately in 1999).
- **Lansdorp, Borssenburgstraat:** city:222203 and 222204, two mirrored blocks.
- **Rijnstraat gateway (Rutgers):** city:222202 and city:200024 (Amstelkade 28-31).
- **Rijnstraat 24-58:** city:200093, 200877, 200876 and 200009.
- **Vrijheidslaan north (De Klerk):** rce:3731 and rce:6164–6170. The place also mentions Zietsma's city:200022 and Zietsma & Lammers's city:222243, but neither has a register text.
- **Vrijheidslaan south:** city:200018 (Kramer), city:200438 (Kramer corner; metadata only) and city:222242 (Marnette).
- **12-verdiepingenhuis:** rce:532002 and city:222240 (the Hilwis complex, including the Merwedeplein blocks).
- **Rutgers villas:** city:222208, city:222209 and rce:530054 (Churchill-laan 223).
- **Gemaal Stadwijck:** city:200882, 200883 and 200884. Zorgvliedbrug (city:200887) is kept as its own place.

## Added beyond the candidates

Each of these has a register entry or a Wikidata item, and coordinates taken from it:

- Coöperatiehof: rce:527803–527807
- Van der Helstplein (Kramer): rce:527852
- Onderstation Borssenburgplein: rce:526709
- Ernst Cahn en Alfred Kohnbrug: wd:Q28849727, not listed
- Van Lennepschool, Reggestraat 18: wd:Q141150720, not listed. No English source was found, so the English is based on the nl.wikipedia article.

## Excluded candidates

- city:200502: 1877, 19th century
- city:222135: 1882, 19th century
- city:222124: 1890, 19th century
- city:222121: 1882, 19th century
- city:222119: 1882–83, 19th century
- city:222211: 1898, 19th century
- city:222145 Afrikahuis: 1968, post-war
- city:222217 Nereus: 1953, post-war
- city:222213: 1956, post-war
- city:200551 Spinoza Lyceum: 1957, post-war
- city:222233 Maranathakerk: 1955, post-war
- rce:532195: 1963, post-war
- city:222231 Kiekenren: 1948, a Finnish emergency school, post-war
- city:222136: 1912, English country-house style
- city:222201: 1912–15, workers' housing from before Plan Zuid, not the style
- city:200461 Vredeskerk: Bekkers, traditionalist. Only the furnishings show Amsterdam School influence.
- city:222023: Van Baalen, German-influenced, not Amsterdam School
- city:222002 Lippits: sober rationalist
- city:222003 Stuyt: Catholic traditionalist
- city:222219 St Gabriël: De Stijl and traditional elements
- city:222225 Zuiderschool: Roobol, 1933, flat and not very sculptural. Borderline.
- city:222227 Anne Frankschool: 1933–35. The register text does not mention the Amsterdam School. See the decisions below.
- rce:527853 / wd:Q17292476 Ceintuurtheater: Noorlander, 1921–22, art deco in concrete. See the decisions below.
- rce:335836: Zanstra, Giesen & Sijmons, 1933, Nieuwe Bouwen
- rce:526707 Synagoge Lekstraat: Elzas, 1937, Nieuwe Bouwen
- rce:530055 Berlagebrug: Berlage, 1932, Berlage's own late style, not Amsterdam School
- Tolstraat (Brinkman & Van der Vlugt): functionalist
- city:200032 Loogman: no register text and no other source, so it could not be verified
- Han van Zomerenbrug: a 2009 wooden replica
- Gerard Revebrug: 1936 and undecorated
- Etty Hillesumbrug: Slebos, 1961, outside the period
- rce:527785 Kinderbrug: in the Apollobuurt and already covered by the oud-zuid slice

## Source conflicts

- **De Dageraad:** the RCE gives 1918–1923. nl.wikipedia gives the commission as 1920 and en.wikipedia (De Klerk) gives 1920–1923. Used 1918–1923 from the register.
- **Smaragdplein school:** the city metadata gives 1920. nl.wikipedia gives the tender as 20 June 1921, with the Krop sculptures from 1921–22. Used 1920 and noted the sculpture dates.
- **Rioolgemaal F:** the city register says the architect is unknown (Public Works). nl.wikipedia names A.R. Hulshoff. The attribute says Public Works, and the nl body mentions Hulshoff.
- **Holendrechtstraat:** the city register gives 1921–1922. en.wikipedia (Staal-Kropholler) gives 1923. Used the register.
- **Onderstation Borssenburgplein:** the RCE gives 1924 and Public Works. Another city dataset record gives 1930 and Rutgers. Used the RCE.
- **Rijnstraat 24-58:** the city metadata gives Amstels Bouwvereniging as client. nl.wikipedia names private clients (Van Poelwijck, Prins, Visser). The client is left out of the attributes, and the nl body mentions the private clients.
- **Scheldestraat gateway (222207):** the metadata gives 1926–1928 and the text gives 1928–29. The attribute uses 1926–1929.
- **Victorieplein (222245):** the metadata gives 1923–1924 and the text gives 1924–1929. Used the text.
- **Remise Lekstraat:** the RCE gives 1927–1930. nl.wikipedia gives 1927–29 in the lead but says the second half was in use in 1930. Wikidata gives 1929. Used 1927–1930.
- **Wijdeveld, Amstelkade:** the metadata gives 1921–1923 and the text says it was designed in 1922.
- **Berlage Lyceum architect:** only Wikidata names A.J. Westerman. The RCE says Public Works. Both are given in the attribute.
- **Badhuis Diamantstraat:** attributed to Westerman (RCE), though he had already left Public Works when it was built.

## Places missing photos

No suitable Commons file was found for these:
- Pastelstraat blocks (Gulden & Geldmaker), city:222012
- Amstelkade blocks (Wijdeveld), city:222247
- Korte Meerhuizenstraat (Kruyswijk), city:222205
- Deurloostraat block (Franswa), city:222210
- Jekerstraat school, city:222228

All the other photos were checked as existing Commons files on 2026-11-20.

## For the coordinator

- **Anne Frankschool (city:222227) and the Anne Frank story.** The school she attended (Niersstraat, 1933–35) is not Amsterdam School by its register text, so it is excluded. Her home at Merwedeplein 37 is covered in the 12-verdiepingenhuis place, through Staal's Hilwis blocks. Worth a short map-level story; see below.
- **Ceintuurtheater (rce:527853).** Noorlander's 1921–22 cinema on the Ferdinand Bolstraat is often listed alongside the Amsterdam School, but the register calls it art deco in concrete. It is excluded. Add it if the map wants contemporaries.
- **Dick Schmüllbrug** is on the Parnassusweg (lng 4.868), geographically closer to the oud-zuid slice. I kept it here as a Kramer bridge on the Zuider Amstelkanaal. Check that oud-zuid did not also add it (as of writing, oud-zuid does not include it).
- **Zorgvlied cemetery gates** are filed as `public-works`, although the client was Nieuwer-Amstel, not Amsterdam. Change the category if there is a better fit, such as ensembles.
- **Style phases.** The Vrijheidslaan north side by De Klerk is filed as Sober. The RCE calls it a transition to the third phase. The Wolkenkrabber, the Heineke & Kuipers gateway, the Dongeschool, the Dick Schmüllbrug, Baanders and the Maarten Lutherkerk are filed as Late.
- **Van Lennepschool** is not listed and has only a single nl.wikipedia source. Keep it or drop it.

## Material for map-level documents

### Stories

- **De Dageraad and the socialist housing associations.** The housing association commissioned De Klerk and Kramer in 1920. Wibaut unveiled the Tak memorial on 29 March 1924. Museum De Dageraad runs tours.
  - https://nl.wikipedia.org/wiki/De_Dageraad_(Amsterdam)
  - https://monumentenregister.cultureelerfgoed.nl/monumenten/1508
  - https://www.hetschip.nl
- **Amstels Bouwvereniging.** A cooperative of contractors that built much of the Rivierenbuurt (71 firms, 1,739 flats according to en.wikipedia), with Staal-Kropholler, Kramer, Marnette and Rutgers as its architects.
  - https://en.wikipedia.org/wiki/Rivierenbuurt
- **Margaret Staal-Kropholler, the first woman architect in the Netherlands.** Holendrechtstraat contains the first housing in Amsterdam designed by a woman. She won a silver medal in Paris in 1925.
  - https://en.wikipedia.org/wiki/Margaret_Staal-Kropholler
- **The Jewish Rivierenbuurt.** German-Jewish refugees settled around the Merwedeplein, among them the Frank family. After the war, Reijn's widow offered housing to Jews who returned. IJssalon Koco and the 1941 resistance group are linked to it.
  - city:222240 text
  - https://nl.wikipedia.org/wiki/Ernst_Cahn_en_Alfred_Kohnbrug
- **Berlage's towers.** The Wolkenkrabber is one of the few towers Berlage planned for Plan Zuid that was actually built. The building code had to be changed to allow it.
  - https://nl.wikipedia.org/wiki/12-verdiepingenhuis
  - https://en.wikipedia.org/wiki/Plan_Zuid

### Architects

- **Piet Kramer** (bridges, De Dageraad, Coöperatiehof, Van der Helstplein, Vrijheidslaan): https://en.wikipedia.org/wiki/Piet_Kramer
- **Michel de Klerk** (De Dageraad, Vrijheidslaan; died 1923): https://en.wikipedia.org/wiki/Michel_de_Klerk
- **Jan Frederik Staal** (Wolkenkrabber): https://en.wikipedia.org/wiki/Jan_Frederik_Staal
- **Hendrik Wijdeveld** (Amstelkade, *Wendingen*): https://en.wikipedia.org/wiki/Hendrik_Wijdeveld
- **Nicolaas Lansdorp** (Public Works schools: Smaragdplein, Dongeschool; also Borssenburgstraat housing): city register texts 222134, 222203 and rce:526710
- **G.J. Rutgers** (Rijnstraat, Scheldestraat, villas): city register texts 222202, 222207 and 222208
- **Hildo Krop** (sculptor on the bridges, schools and Remise; Berlage statue on the Victorieplein): https://en.wikipedia.org/wiki/Hildo_Krop

### Themes

- **Kramer's bridges.** The Amstelkanaal bridges 400–404, with the engineering by Biemond and the Public Works bridge department, and the architecture and Krop sculpture by Kramer. Compare the full showpieces (400, 404) with the plain ones (176, 401) and the late Dick Schmüllbrug (1940–42).
  - https://nl.wikipedia.org/wiki/P.L._Kramerbrug
  - https://nl.wikipedia.org/wiki/Barbiersbrug
- **Public Works schools as civic art.** The SDAP held that handsome schools would raise working-class taste. Double schools with a shared gym, and corridor schools: Smaragdplein, Meerhuizenplein, Jekerstraat, Dongeschool, Handelsschool.
  - city:222134, 222226 and 222228 texts
- **Utilities in the style.** Badhuis Diamantstraat, Onderstation Borssenburgplein, Rioolgemaal F, Gemaal Stadwijck and Remise Lekstraat.
- **From expressive to late.** On a walk down the Vrijheidslaan the style changes block by block:
  1. De Dageraad (1920–23)
  2. Vrijheidslaan, De Klerk and Kramer (1921–23)
  3. Heineke & Kuipers, after Wright (1923–29)
  4. The Wolkenkrabber (1930–32)
  5. Baanders and the Maarten Lutherkerk (1932–38)
