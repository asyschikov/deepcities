# Blind quality review B: 10 Zuid entries

## How I checked

- Read only the 10 entry files and the rubric. Scored every entry on the six rubric criteria using the anchors as written.
- Sources, all fetched with curl (User-Agent deep-cities-research/0.1), no browser:
  - Amsterdam monument API for every monument number in the attributes (23 records). I used `beschrijvingPubliek` and `redengevendeOmschrijvingPubliek` plus the RD point coordinates.
  - Rijksmonumentenregister pages for 515154 to 515157, 527853, 505386, 527841, 504704, 504717, 504725, and also 505607, 505513 and 505526 (the other Viottastraat villas).
  - nl.wikipedia through the API (action=query extracts, then the REST page/html endpoint once the query API started rate limiting): Sloterkade, Bachplein, Amstelrust, Toegangshek Amstelrust, White noise (kunstwerk), Ceintuur Theater, Michelangelostraat (Amsterdam), De Ondergedoken Camera, Dick Greiner, Begraafplaats Huis te Vraag.
  - Every other linked page: Amsterdam op de kaart (11 pages), buitenplaatseninnederland.nl, Stadscuratorium (2), zuidas.nl, ceintuurtheater.nl, unesco.nl, geheugenvanplanzuid.nl, huistevraag.nl. Buitenkunst Amsterdam is a JavaScript app, so I read objects 2782 and 2492 from its public backend (api-v3.kunstwacht.nl, using the token the page itself serves).
- Pin: converted each monument's RD point to WGS84 and measured the distance to the pin. Where there is no monument (entries 4 and 7) I used Nominatim reverse and the Buitenkunst coordinates.
- Dutch: a script compared the NL summary and body, sentence by sentence, with the text of every source fetched for that entry, looking for shared runs of 8 or more consecutive words. I then checked each hit by hand and dropped runs that are only names, titles or addresses. I also read every NL text for translationese.
- Writing: EN body word counts (321, 264, 272, 317, 277, 317, 290, 242, 356, 321). No em dashes and no spaced en dashes in any entry, EN or NL.
- EN/NL: compared every fact pair (dates, numbers, names, opening hours). I found no EN/NL fact mismatch.

## Scores

| n | title | Story | Acc | Pin | Use | Dutch | copied sentences | Writing | Total | main weakness |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Sloterkade 142–144, dike cottages, 1941 corner block | 4 | 5 | 5 | 5 | 4 | 0 | 4 | 27 | Body opens with general quay history before the cottages; NL has calques ("kan haast niet meer verschillen"); 321 words |
| 2 | Rutgers' quarter: Stadionweg, Händelstraat, Bachplein | 4 | 4 | 5 | 4 | 3 | 1 | 4 | 24 | "Lutheran chapel" unsupported; NL copies one register phrase and has translationese ("een zeldzamere vraag") |
| 3 | Amstelrust | 5 | 5 | 5 | 5 | 4 | 1 | 4 | 28 | NL sentence on the 15,000 guilders follows the Wikipedia wording |
| 4 | White Noise, a night sky on the telecom tower | 5 | 3 | 4 | 5 | 5 | 0 | 3 | 25 | Neighbouring artworks (De Wachter, Pendulum, De doos) and "120 metres" have no linked source; the long satellite list is close to half the text |
| 5 | Ceintuur Theater, the concrete cinema | 4 | 4 | 5 | 5 | 5 | 0 | 4 | 27 | Nickname spelled "Stinkerdje"; every source has "Stinkertje" |
| 6 | Koningslaan, the park side (nos. 26–56) | 4 | 3 | 5 | 5 | 4 | 0 | 3 | 24 | Three unsupported claims (1902 company, quoted "villa for three families", VU faculty); crowded with names and numbers |
| 7 | Michelangelostraat 36, hideout of the Hidden Camera | 5 | 3 | 5 | 4 | 4 | 0 | 4 | 25 | Kahlenberg's Berlin flight and Van Renterghem's death sentence have no source; NL "is geregeld vanuit" reads translated |
| 8 | Zonnehof | 5 | 5 | 5 | 5 | 5 | 0 | 5 | 30 | None of note (the quote is used verbatim and shown as a quote) |
| 9 | Huis te Vraag, the cemetery the ivy took | 5 | 4 | 5 | 5 | 5 | 0 | 2 | 26 | 356 words, over the 350 limit; "reception building closed for renovation" unsupported |
| 10 | Wright on the canal: Warners's villas | 4 | 3 | 5 | 5 | 5 | 0 | 4 | 26 | "brought the block of flats to the Netherlands" and "a novelty" unsupported; 321 words |

Mean total: **26.2 / 30**. Pins are strong: 9 of 10 are within 7 m of the monument point or address. Accuracy is the weakest criterion: 4 entries score 3.

Pin details: 1: 7 m from the 142–144 monument point. 2: 0 m from Stadionweg 38 / Verdistraat 2-4. 3: on the gate on its bridge, 21 m from the house. 4: Nominatim gives Barbara Strozzilaan 251, the tower address, but the pin is 54 m from the Buitenkunst point. 5: 0 m. 6: 0 m from 50–52, where the text says it is pinned. 7: Nominatim gives Michelangelostraat 36-1. 8: 0 m. 9: 12 m. 10: 0 m from the corner villa.

Dutch copied sentences, explained: entry 2, "met de letters A tot en met K" (register 222010: "werden met de letters A tot en met K aanduid"). I discounted the other three hits there because they are street-name runs. Entry 3, "15.000 gulden aan de armen van Amsterdam" (nl.wikipedia Amstelrust). Entry 7 has a hit, "aan de Keizersgracht onder de titel De Ondergedoken Camera", which I did not count because it is a place name plus a title. The -1 for translationese applies to entries 1, 2, 6 ("een diamantair die in de bioscopen ging") and 7.

## Unsupported or wrong claims

Total: 16 (13 unsupported by any fetched source, 3 wrong or overreaching).

1. Entry 2: "He also designed the Lutheran chapel on the corner of the Bachstraat" (NL "Ook de Lutherkapel"). Register 222010 only says "een kerk" on the corner of the Gerrit van der Veenstraat and the Bachstraat, designed by Rutgers. No source calls it Lutheran or a chapel.
2. Entry 4: "more than a thousand computer-driven LEDs, 120 metres up". The 1000+ LEDs are supported (nl.wikipedia White noise). The 120 m height appears in no source: Wikipedia and zuidas.nl give only the tower height (148 m, "almost 150").
3. Entry 4: "De Wachter (Boris Tellegen) on the Antonio Vivaldistraat: a robot on long legs that leaned against the school wall until 2016". None of the linked sources supports it.
4. Entry 4: "Pendulum (Gijs Assmann, 2020) at the European Medicines Agency: 54 metres of mirrored steel tube in a knot nine metres high". There is no linked source. The entry's photo credit is the only trace.
5. Entry 4: "\"De doos\" (Jeroen Henneman, 2017) ... moved in 2018–2019 to the roof of the flats at the corner of the Parnassusweg and De Boelelaan". No linked source.
6. Entry 5 (wrong, minor): "Locals called it 't Stinkerdje". nl.wikipedia Ceintuur Theater spells it "'t Stinkertje" both times. The EN and NL both carry the variant spelling.
7. Entry 6: "in 1902 they set up a company to exploit it" (NL "in 1902 richtten ze een NV op"). Registers 200505 and 222033 and the Amsterdam op de kaart pages do not mention it. The only company in the sources is the N.V. Bouwonderneming Willemspark of 1881.
8. Entry 6: "Their trick was the \"villa for three families\"" (NL "'villa voor drie familiën'"), presented as a quoted period term. The sources say "driedubbel woonhuis" and "gebouwd voor meergezinsbewoning", never this phrase.
9. Entry 6: "nos. 31–33 (1913) housed the economics faculty of the Vrije Universiteit from 1949 to 1994". Register 222031 says only that the building "tegenwoordig een kantoorfunctie heeft". Nothing fetched mentions the VU.
10. Entry 7: Kahlenberg, "a Jewish photographer and film-maker who had fled Berlin in the 1930s" (summary: "a refugee photographer"). nl.wikipedia (De Ondergedoken Camera, Michelangelostraat), unesco.nl and Geheugen van Plan Zuid call him only "de fotograaf Fritz Kahlenberg".
11. Entry 7: Van Renterghem, "a young cavalry officer who had escaped a German death sentence". "Cavalry" is at best implied by his book title "De laatste huzaar". No fetched source mentions a death sentence.
12. Entry 9: "The reception building is closed for renovation." The linked huistevraag.nl/praktische-info page gives hours, holidays and the missing toilet but says nothing about a renovation.
13. Entry 9 (overreach, minor): "Rijnsburgstraat 75 ... listed with the cemetery" (NL "samen met de begraafplaats beschermd"). It is a separate municipal monument (200433, designated 1999). The cemetery (222151) was designated in 2009.
14. Entry 10: "F.A. Warners, the man who brought the block of flats to the Netherlands" (NL "de man die de flat naar Nederland haalde"). No source says this. The registers 504704, 505607, 505513 and 505526 and Amsterdam op de kaart describe him only as the architect.
15. Entry 10: "Each half had a garage inside the house, next to the kitchen, which was a novelty." The position next to the kitchen is supported (registers 505607 and 505513). "A novelty" is not.
16. Entry 10 (overreach): "The first residents were mostly bankers." Amsterdam op de kaart names two bankers (Van Hengel and Thole), both in the corner villa 31/72. Nothing fetched gives the first residents of nos. 33–39.

No EN/NL fact mismatches found.
