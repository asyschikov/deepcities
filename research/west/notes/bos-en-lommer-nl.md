# Bos en Lommer monuments: Dutch (nl) versions

The Dutch versions are in `scripts/data/bos-en-lommer-monuments.json` under
`translations.nl` on each of the 22 places. Each summary and body is taken from the
original Dutch wording of the sources below. Sentences were kept as written, then
trimmed and spliced into a readable text, so this is not a translation of the English.
Inventory-style lists of building parts and the bibliographies were cut. The
"Let op:" list at the end of each body is built from the details in those sources.
Only light edits were made: connectives, tense, and joining sentences from two sources.

`attributes` holds only the text fields whose Dutch wording differs from the English:
`original_use`, plus `architect` where "and" becomes "en", and `built` where the text
is not a bare year.

The licences allow this reuse. The city and national registers are open data, and
nl.wikipedia is CC BY-SA, the same licence as the map. Every source used is in the
place's `links`. The only link added was for Koningsvrouwen van Landlust: the city
register entry for the Keesmanblokken (226002), whose context paragraph supplies the
"befaamde strokenbouwensemble" passage.

Sources:

- **Gemeente**: the City of Amsterdam register, `redengevendeOmschrijvingPubliek` at
  `https://api.data.amsterdam.nl/v1/monumenten/monumenten/?monumentnummer=<nr>&_format=json`.
- **RCE**: the national register, `https://monumentenregister.cultureelerfgoed.nl/monumenten/<nr>`.
  These are the inleiding, omschrijving and waardering texts.
- **nl.wiki**: the nl.wikipedia article linked from the place.

For rijksmonuments the city register has no description, only metadata.

## Which source each nl text is pulled from

| # | Place | Pulled from |
|---|-------|-------------|
| 0 | Opstandingskerk (Kolenkit) | RCE 530877 (inleiding, omschrijving, waardering) and 531186 (pastorie); nl.wiki Opstandingskerk (Amsterdam) (nickname spreading to the buurt, lost visibility, 2021 fountain) |
| 1 | Sint-Josephkerk | RCE 530737 (inleiding, omschrijving); Gemeente 200911 (Robert Scottstraat 7); nl.wiki Sint-Josephkerk (Amsterdam) (bouw, herbestemming) and Robert Scottstraat 7 (plint) |
| 2 | De Boom (Boomkerk) | nl.wiki De Boom (Amsterdam) (history, organ, restoration, 2010); RCE 529085 (style, reused treasures, Let op); Gemeente 226000 (pastorie, rooilijn) |
| 3 | Koningsvrouwen van Landlust | nl.wiki Landlust (plan, strokenbouw, street names); Gemeente 226002/226008 context paragraph ("befaamde strokenbouwensemble"); Gemeente 200002/200003 metadata (architects, years) |
| 4 | Keesmanblokken and Gibraltarbadje | Gemeente 226002 (history, layout, Let op details, conclusion); nl.wiki Keesmanblokken (years); nl.wiki Gibraltarbadje (Ko Mulder, opening, statues) |
| 5 | Jan van Galenbrug (Brug 382) | RCE 526747 (inleiding, omschrijving: design, structure, all Let op items); nl.wiki Brug 382 (Centrale Markt, fixed-bridge first design, Krop attribution, name) |
| 6 | Vierwindstrekenbrug | nl.wiki Vierwindstrekenbrug (whole text) |
| 7 | De Bloem (De Blom) | nl.wiki De Bloem (whole text); RCE 1442 (register description) |
| 8 | Wijdeveld's stadspoort (north block) | RCE 531143 (omschrijving and waardering, almost whole text) |
| 9 | GAK-gebouw | Gemeente 200987 (whole text) |
| 10 | Zaanstad (Elseviergebouw) | nl.wiki Zaanstad (gebouw) (history, height, conversion, Let op); Gemeente 200907 (architectural value) |
| 11 | Prinses Beatrixschool (Multatulischool) | Gemeente 226014 (type, tuberculosis, Kurpershoek, Let op); nl.wiki Sara Burgerhartstraat 5 (study trip, opening date, Van Eyck sandpit) |
| 12 | Prinses Margrietschool | Gemeente 226010 (type, materials, Forum, interior, Let op); nl.wiki Krelis Louwenstraat 4 (Van der Wilk, Van Eyck climbing frame) |
| 13 | Daniël Goedkoopschool | Gemeente 200908 (whole text); nl.wiki Sara Burgerhartstraat 1-3 (first post-war ulo, opening date, floor layout, Witboek) |
| 14 | Hendrick de Keyserschool | Gemeente 226009 (whole text) |
| 15 | De Kamperfoelie | Gemeente 226008 (whole text) |
| 16 | Sint Hubertusschool | Gemeente 226011 (whole text); nl.wiki Reinaert de Vosstraat 27 (1959-1960 date, use until 2015, school since 2019) |
| 17 | Robert Scottstraat 28 (De Springplank) | nl.wiki Robert Scottstraat 28-34 (history, construction, current use); Gemeente 200909 (type, 2013 renovation, ensemble) |
| 18 | Former ULO school, Erik de Roodestraat 18 | Gemeente 200910 (whole text) |
| 19 | Pniëlkerk ('het Theelichtje') | Gemeente 226015 (whole text); nl.wiki Pniëlkerk (Amsterdam) (nicknames, 1954/55, theatre since 2005) |
| 20 | Former Wereldbibliotheek | Gemeente 226017 (whole text) |
| 21 | Former post office, Admiraal De Ruijterweg | Gemeente 226001 (whole text) |

Two facts have no Dutch source. The nickname "Aquarium" for the GAK-gebouw comes from
the English. For the Vierwindstrekenbrug, "Inuit" replaces nl.wiki's "Eskimo".

## Discrepancies

### English text that may need a fix

- **De Boom** (now fixed in the English by the user): the English used to put the
  dwarf gallery on the corner tower. The RCE places the dwerggalerij on the apse at the
  back of the church, and both versions now say so.
- **Koningsvrouwen van Landlust**: the city's context paragraphs in 226002 and 226008
  name a third architect for the Koningsvrouwen ensemble: "Merkelbach & Karsten,
  Versteeg en Vorkink". The two protected complexes, 200002 and 200003, list only
  Versteeg and Merkelbach & Karsten. So the English is right for the listed parts, but
  Vorkink may deserve a mention. The dates also differ: the city gives 1933-1936 for
  Merkelbach & Karsten and 1937 for Versteeg, while nl.wiki gives 1937-1938. The English
  attribute is `1933–1937`.
- **Vierwindstrekenbrug**: nl.wiki says the bridge is a gemeentelijk monument. I could
  not find it in the city register API by name or number, and the English has no
  `heritage_status`. This is unverified and worth checking. The sibling map gives a
  build year of 1932, which could replace the vague `1930s`.
- **Prinses Margrietschool**: the city text says a mural by Frieda Hunziker probably
  survives under later limewash in the corridor to the school hall. The English
  doesn't mention it; it could be added. The same text first calls the girl-with-ponytail
  bronze the work of an unknown artist, then credits a playground bronze to Hildo Krop
  in its conclusion. Both the English and the Dutch avoid naming a maker.

### Sources that disagree with each other (English is fine)

- **Opstandingskerk**: nl.wiki says it has been a rijksmonument since 2007. The RCE has
  it registered on 31 May 2010, designated 18 March 2010. The English (`listed: 2010`)
  is correct.
- **Brug 382**: nl.wiki says it was built in 1936. The RCE and the inscription on the
  bridge say 1935, and the sibling map gives the opening as mid-1937. The English
  follows the RCE.
- **Sint-Josephkerk**: the RCE says it was built 1951-1952. nl.wiki and the city
  metadata say construction started in January 1950. The English (1950-1952) follows
  the latter.
- **De Bloem**: the city metadata gives `jaarBeginVan` as 1939, which is a data error.
  The RCE says 1878 (rebuilt).
- **Zaanstad**: the city metadata gives 1962-1964 and calls it "het kantoorgebouw uit
  1964". nl.wiki says it was built 1964-1967. The English follows nl.wiki.
- **Prinses Beatrixschool**: the city says built 1952 (metadata 1951); nl.wiki gives the
  opening as 14 April 1953. The renaming to Multatulischool is "rond 1990" in nl.wiki
  and "midden jaren negentig" in the city text, so the Dutch gives no date.
- **Daniël Goedkoopschool**: nl.wiki describes a U-shaped building; the city describes
  four wings around a courtyard. The English and Dutch follow the city. nl.wiki also has
  a typo: "Sinds 2103" for 2013.
- **Sint Hubertusschool**: the city gives 1957 and nl.wiki 1959-1960. The English and
  Dutch both mention the difference. nl.wiki wrongly places the building in "Oud-West".
  The city notes that the loggia on the right-hand side was later closed in.
- **Keesmanblokken**: the Bolhuis fountain figure stands by the eastern entrance on the
  Solebaystraat according to the city, and on the south side, off-centre, according to
  nl.wiki. The English and Dutch say only "at the edge".
- **Pniëlkerk**: the city spells the glass artist "Johan van de Broek"; the English
  spells it "Van den Broek". The Dutch keeps "Van den Broek".
- **Former post office**: the city metadata gives 1915-1920. The English uses "c. 1915",
  and the Dutch says the same. The city's context paragraph also has a garbled claim
  that the Amsterdam-Haarlem railway was built in 1939; that is not used anywhere.
- **GAK-gebouw**: the city metadata lists only P.J. Elling as architect, while its text
  credits Merkelbach. The English credits both.

## Notes

- The JSON was written with the file's existing 2-space indent and `ensure_ascii=False`.
  Two things changed: `translations` was added to every place, and one link was added to
  Koningsvrouwen van Landlust. All other fields are unchanged, including the user's
  edits to the English and to the link labels.
- The texts are mostly source wording. The splicing and joining is Claude's, so a native
  speaker should give them a quick read before they go live.
