# Dutch pass, west-r4 batch 02

19 places. I checked every claim in the EN and NL summary, body and Look for lists against the links and draft sources. Sources used: nl.wikipedia API, the RCE register, the city monuments API, Kunstwacht, gebouwdin, geheugenvanwest, Westkrant, AT5, nul20, the Eigen Haard booklet and centralemarkthal.nl.

Claim changes:

| Kind | Count |
|---|---|
| Narrowed | 48 |
| Cut | 11 |
| Sourced | 6 |
| Reordered | 3 (no fact changes) |

Every place has a fresh NL summary (280 characters or fewer) and body. Each NL body ends with "Let op:" where the EN has a Look for list. Copy checker result: 0 copied in all 19 places.

## Places with the most changes

- **De Klerk's blocks**: I cut "where the Amsterdam School began" and "first blocks". The block locations now follow the register: the Oostzaanstraat/Krommeniestraat side and the Zaanstraat/Wormerveerstraat side, instead of north and south. "Klaas Hille, contractor" became "K. Hille". "Designed 1915-1916" became "1914 in the register, 1918 on Wikipedia".
- **Westerpark**: I removed "first station for Haarlem". The sources name only station Willemspoort, 1842-1878. I also removed "crowing" and "near the gasworks side".
- **Centrale Markthal**: I rewrote the "Seeing it" paragraph.
  - Markt Centraal ran from 2020 to 2024 (marktcentraal.nl), so "since 2026" was wrong.
  - "Quarterly", "trade pass" and "riveted" had no source, so I dropped them.
  - The people who hid in the cellars are "many Jews" in the source, not "market traders".
- **Kolenkit**:
  - I cut the quote "not everyone benefited". The Parool article would not load, and no other source has the quote.
  - "222 homes / 2025" became 220 homes, which is the figure AT5 gives.
  - "Built for Dutch families / by 1985 Moroccan and Turkish" became the Wikipedia figure: 80% had a parent born abroad, mostly Moroccan.
  - The Rottenberg "documentary *De Akbarstraat*" became his "2002 series". The title had no source.
  - For New Kit, the start date 2008 and the street were dropped. The tower is now "completed 2011".
- **Koningsvrouwen**:
  - Addresses are narrowed to the city monuments 200003 (Merkelbach & Karsten) and 200002 (Versteeg).
  - "Every home the same sun and air", "flat-roofed" and "one of the first in the country" were cut or narrowed. The new wording is "first Amsterdam neighbourhood with strokenbouw".
- **Zwaaiende fietser**: I cut the "Starik Fabriek van Kleine Werken" line from the body and from Look for. I could not verify it: the sources do not mention it, and Commons was rate-limited. I also cut the mounting height.
- **Domela statue**:
  - "Founded Dutch socialism" became "one of the founders of the socialist movement".
  - "Paid for by workers" became "helped pay".
  - "Sixty metres" became "nearby".

## Hooks changed

All 19 NL texts lead with a hook. The EN was reordered in three places so it leads with the same hook as the NL:

- **AWV Schaepmanstraat**: the first tenants.
- **Van Bossestraat**: the 1943 Ventura crash.
- **Centrale Markthal**: Jews hidden in the cellars.

## For the user

- **Telefooncentrale West**: the listing year is 2014 in the draft but 2009 in gebouwdin. Neither year is in the text.
- **Sint Barbara**: the consecration date is 27 September 1893 on Wikipedia and 28 September in the register. I kept 27.
- **Westerpark**: Kunstwacht 2580 says *Haan op zuil* was made in 1955 and put back about 1990, but Wikipedia says it was placed in 1958. I kept 1958.
- **Van Bossestraat**: the register blames a "verdwaalde bom" for the lost turret. The crash sources say a Ventura bomber came down on the block. The NL text mentions both.
- **Koningsvrouwen**: the relief house numbers rest on the draft's Stadsarchief IDs. The beeldbank only loads with JavaScript, so I could not open those pages. Commons photos confirm what the reliefs show.
- **Zwaaiende fietser**: "photographed in 2021" refers to the map photo. I kept it unverified.
- **Hendrick de Keyserschool**: no claim changes were needed.

## Verification

I checked all 19 places. For each one I compared every factual claim in the new Dutch with the new English and the original EN/NL texts, and checked that the Dutch carries the same facts as the English. I re-fetched the evidence for the "sourced" changes: city monuments 200910, 224041 and 200758, the Landlust area record (the "Koningsvrouwen" name), and nl.wikipedia for Domela Nieuwenhuis ("een van de oprichters van de socialistische beweging"), Pierre Cuypers (Rijksmuseum, Centraal Station), Charlotte van Bourbon, Louise de Coligny and Juliana van Stolberg. I also checked RCE 5499/5500 (De Klerk), centralemarkthal.nl (CABINET and the Pure Markt in autumn 2026), Geheugen van West 13150 (the Potgieter verse) and the draft source for the Wilhelmina lime text stone. All of them hold.

Claims removed or fixed:

- **Wilhelmina Gasthuis**: the NL said "met een troffel" (with a trowel). No source has this, so I removed it.
- **Van Bossestraat**:
  - The NL opened with "Het torentje ... is er niet altijd geweest", which implies the turret was added later. The register says it was the original turret, lost in the war. It now reads "heeft een tijd ontbroken".
  - The NL said De Heer Kloots "liet het bouwen en bouwde het zelf". It now reads "was zelf ook ontwikkelaar en aannemer", as in the register.
  - The NL attributed "verdwaalde bom" to the register, which the EN does not do. The NL now mirrors the EN: "Geen verdwaalde bom dus".
- **Domela statue**: the NL hook "dan wilden de arbeiders er ook een" gave a motive that is not in the sources. It now states only the sequence of events.
- **Former ULO school**:
  - The NL hook "sta je bijna in een Romeins huis" is now "heeft van binnen iets Romeins".
  - "rechtstreekse verwantschap" (NL) and "links directly" (EN) were cut to plain "verwantschap" / "links", because the register has no "directly". This EN fix is also added to `changes`.
  - "voorbeeld bij uitstek" is now "nog meer een schoolvoorbeeld", which matches the register's "versterkt de exemplarische betekenis".
- **Hendrick de Keyserschool**: the NL put Lex Horn's mural "in de aula". The register and the EN say the hall ("de hal"), so I corrected it.
- **Centrale Markthal**:
  - The NL Van Vriesland line was reworded as "Gedenk het leed, doch niet om stil te staan". I restored the sourced wording, "Gedenkt het leed, maar niet om stil te staan". This is a marked inscription quote, so the copy checker's 9-word hit on it is allowed.
  - "'Jodenmarkt'" is now "de 'Joodse Markt'", the source's name.
  - "marktkaart" is now "marktpas".
- **Zwaaiende fietser**:
  - The NL said "zijn vrouw" and "zijn zoon". The sources only say mother and son on a self-portrait, so it now reads "moeder" and "de zoon".
  - The goedhumeurmachine paraphrase ("een groet die je je maar hoeft in te beelden") is now "een denkbeeldige groet die de wereld wat opgewekter moet maken".
- **Sint Barbara**: the NL "groepeerde hij losjes" added "loosely". It now reads "In zijn asymmetrische plattegrond liggen ... rond de middenruimte".
- **Erasmuspark**: the NL "Berend Peters *Monument*" could be read as an artist called Peters. It is now "van Berend Peter het *Monument voor een verzonken stad*", which also clears an 8-word copy-checker hit.

Copy checker after these fixes: 0 copied runs in 18 places. The one remaining hit is the marked Van Vriesland inscription at the Centrale Markthal. There are no em dashes or spaced en dashes. Every Look for list matches its Let op list (Hendrick de Keyserschool and Koningsvrouwen have neither). Every EN and NL summary is 280 characters or fewer.

For the user: the De Klerk place is still titled "De Klerk's first blocks" in EN and "Eerste blokken van De Klerk" in NL. The body no longer claims "first", because the sources only say these blocks were designed before Het Schip. You may want a title change.
