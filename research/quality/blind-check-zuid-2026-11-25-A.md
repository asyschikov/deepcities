# Blind quality review, Deep Amsterdam (Zuid), 10 entries: report A

## How I checked

- Read only bqz/01.json to 10.json and bq2-rubric.md. Scored each entry on the six rubric criteria using the rubric anchors.
- Sources: fetched every linked URL with curl or urllib (User-Agent deep-cities-research/0.1). Amsterdam monuments came from the API (api.data.amsterdam.nl/v1/monumenten/monumenten/, full `redengevendeOmschrijvingPubliek`). Rijksmonumenten came from the RCE register page plus the Amsterdam API by monumentnummer. nl.wikipedia came through the MediaWiki API (`prop=extracts`), retried after HTTP 429. Buitenkunst Amsterdam renders in JS, so its text came from the Kunstwacht frontend API that the page itself calls. Where an entry cites a monument number that it doesn't link, I also fetched that record (Amstelrust 515155 and 515156, Koningslaan 31-33 222031, Viottastraat 505607, 505513 and 505526) so that its Look for items could be checked. All sources were reachable.
- Pin: I converted the monument `puntCoordinaten` (RD) to WGS84 and measured the distance to the entry pin. For the two entries without a monument (04, 07) I used Nominatim search for the address and Overpass for the tower.
- Dutch: I ran a script that splits the NL summary and body into sentences and flags any sentence that shares a run of 8+ consecutive normalised words with the combined fetched source text. Then I checked each hit by hand, ignoring runs that are only names or addresses. I read each NL text for translation feel and EN/NL fact agreement.
- Writing: word count is the EN body (whitespace split, Look for list included). The texts have no em dashes and no spaced en dashes.

## Scores

| n | title | Story | Acc | Pin | Use | Dutch | copied sentences | Writing | Total | main weakness |
|---|---|---|---|---|---|---|---|---|---|---|
| 01 | Sloterkade 142-144, the dike cottages, and the 1941 corner block | 4 | 5 | 5 | 5 | 4 | 0 | 4 | 27 | First paragraph is area history; the hook (houses below pavement level) waits for paragraph 2. NL has calques ("kan haast niet meer verschillen"). 321 words |
| 02 | Rutgers' quarter: Stadionweg, Handelstraat and Bachplein | 4 | 4 | 5 | 5 | 3 | 1 ("op plattegronden met de letters A tot en met K"; two more hits are only street names) | 4 | 25 | Two names that the sources don't support ("Lutheran chapel", "Apollo House"). NL reads translated ("kreeg Rutgers een zeldzamere vraag") |
| 03 | Amstelrust | 5 | 5 | 4 | 5 | 4 | 1 ("15.000 gulden aan de armen van Amsterdam betalen", from nl.wikipedia) | 4 | 27 | Pin is on the gate, 21 m from the house. One near-verbatim Wikipedia sentence in NL |
| 04 | White Noise, a night sky on the telecom tower | 5 | 3 | 5 | 4 | 5 | 0 | 3 | 25 | No fetched source supports half the Look for list (De Wachter, Pendulum, De doos), nor "120 metres up". Long list of other artworks |
| 05 | Ceintuur Theater, the concrete cinema | 4 | 5 | 5 | 5 | 5 | 0 | 4 | 28 | The summary leads with the form ("cast in concrete"), not the best hook (the stolen nickname, the column-free balcony) |
| 06 | Koningslaan, the park side (nos. 26-56) | 4 | 4 | 5 | 5 | 5 | 0 | 3 | 26 | Crowded with names and dates. Two unsupported facts (1902 company, VU faculty 1949-1994) |
| 07 | Michelangelostraat 36, hideout of the Hidden Camera | 5 | 3 | 5 | 4 | 4 | 0 | 4 | 25 | Opening overclaim plus two unsupported biographical details. NL opener is a calque |
| 08 | Zonnehof | 5 | 5 | 5 | 5 | 5 | 0 | 5 | 30 | None of note. "Six round windows above the canopies at the corners" applies to two of the three corners |
| 09 | Huis te Vraag, the cemetery the ivy took | 5 | 4 | 5 | 5 | 5 | 0 | 2 | 26 | 356 words (over 350). "Reception building closed for renovation" is unsupported |
| 10 | Wright on the canal: Warners's villas, J.J. Viottastraat 31-39 | 4 | 4 | 5 | 5 | 5 | 0 | 4 | 27 | Three unsupported framing claims (Warners and the flat, "novelty", "mostly bankers"). 321 words |

**Mean total: 26.1 / 30.** Pins are excellent (0 to 21 m). All ten have a Look for list and say whether you can get in. Little Dutch is copied (2 sentences across 10 entries). Accuracy is the weak spot. The extra items and framing sentences cause most of the problems: entries that add satellite artworks or biography (04, 07, 10) collect unsupported claims. The core facts, which come from the monument registers, hold up well.

EN/NL fact mismatches: none found. The NL keeps every number, date and name that is in the EN.

## Unsupported or wrong claims

1. **02** "He also designed the **Lutheran** chapel on the corner of the Bachstraat" (NL "Lutherkapel"). The municipal register 222010 says only "een kerk ... Deze is tevens door Rutgers ontworpen". No fetched source gives the denomination.
2. **02** "three blocks behind the **Apollo House**". Register 222010 calls the building "het monumentale gebouw bij de kruising van de Apollolaan en de Stadionweg (dat de Sociale Verzekeringsbank zou worden)". No source uses the name Apollo House.
3. **04** "more than a thousand computer-driven LEDs, **120 metres up**". nl.wikipedia, Zuidas and Buitenkunst give the tower height (about 148 to 150 m) but no height for the lights.
4. **04** "the band of lights sits below the antennas". No source.
5. **04** "De Wachter (Boris Tellegen) ... a robot on long legs that leaned against the school wall until 2016". No linked source covers this work.
6. **04** "Pendulum (Gijs Assmann, 2020) at the European Medicines Agency: 54 metres of mirrored steel tube in a knot nine metres high". No linked source.
7. **04** "'De doos' (Jeroen Henneman, 2017) ... moved in 2018-2019 to the roof of the flats". No linked source.
8. **04** "the footbridge over the Boelegracht (Martijn Sandberg, **2024**)". Stadscuratorium gives the opening as "Op 18 september" with no year.
9. **06** "in 1902 they set up a company to exploit it". None of the three registers or the three Amsterdam op de kaart pages mention a company.
10. **06** "nos. 31-33 (1913) housed the economics faculty of the Vrije Universiteit from 1949 to 1994". Not in any fetched source, including the cited monument record 222031, which says only "tegenwoordig een kantoorfunctie".
11. **06** "Their trick was the **"villa for three families"**" (NL "'villa voor drie familien'"). The quoted phrase appears in no source. The registers say "driedubbele villa".
12. **07** "**Almost every picture you know** of the Hunger Winter in Amsterdam was organised from two flats in this house." nl.wikipedia (Michelangelostraat) says only that the group's photos "hebben het na-oorlogse beeld van de hongerwinter bepaald". The entry turns that into a quantity claim.
13. **07** "Fritz Kahlenberg, a **Jewish** photographer and film-maker who had **fled Berlin in the 1930s**". Neither nl.wikipedia page, UNESCO nor Geheugen van Plan Zuid states this.
14. **07** "Tonny van Renterghem, a young cavalry officer who had **escaped a German death sentence**". No fetched source mentions a death sentence.
15. **09** "The reception building is closed for renovation." Not on huistevraag.nl/praktische-info or anywhere else fetched.
16. **09** "a cemetery where **nobody has been buried since 1962**". nl.wikipedia (Begraafplaats Huis te Vraag) records that Hendrik van Teylingen's urn was later buried there, "moest dit illegaal geschieden". The claim is not true as worded.
17. **10** "F.A. Warners, **the man who brought the block of flats to the Netherlands**" (NL "de man die de flat naar Nederland haalde"). None of the five registers or Amsterdam op de kaart says this.
18. **10** "Each half had a garage inside the house, next to the kitchen, **which was a novelty**". Registers 505607 and 505513 confirm a garage next to the kitchen but say nothing about novelty. The corner villa's garage is "aangrenzend" (adjoining), not beside the kitchen.
19. **10** "**The first residents were mostly bankers.**" Amsterdam op de kaart names the first residents of the corner villa only (two bankers, Van Hengel and Thole). No source covers the other two villas.

Minor notes, not counted: in 02, "the city register records that the houses did not sell easily" is in register 222010, but as an account by the Wijker family. In 05, nl.wikipedia gives the opening as 2 April 1921 while the register (which the entry follows) says "1921-1922". In 03, the coach house and lime avenue are supported only by the cited but unlinked records 515156 and 515155.

Total: 19 unsupported or wrong claims (1 contradicted, 18 unsupported). No EN/NL fact mismatches.
