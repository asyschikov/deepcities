# new-zuid-zuidas-2: notes

Seven picks, seven drafts in `places/new-zuid-zuidas-2.yaml` (validator: 0 errors). None was on
the map already: `dc places sights --all --q` for Valk, Arets, Crossover, Medicines, EMA, Symphony,
Gershwin, Viñoly/Vinoly, Mahler, Zuideramstel, Stadsdeel, Crystal, Weldam gave no match (Weldam
hit is the Weldam patio houses, d2mm2eskc8gad99ntmvknob1, a different place nearby).

Dutch written from the Dutch sources (Zuidas NL pages, Arcam NL guide and prize pages,
Architectuur.nl, Archined, Architectuur.org, Het Parool, NRC, Tangram, nl.wikipedia). I ran an
8-word overlap check of EN and NL title, summary and body against every fetched source text; three
hits in the Dutch (Crossover location phrase, the Mahler 4 architects list, a Crystal Court phrase)
were rewritten; now 0 hits. Parool, NRC, the hotel site and Gebouwd in Amsterdam were read in the
BrowserOS browser (curl blocked or JS-only).

## Corrections to the scout lines

- **Van der Valk (zuid-zuidas-18):** AAP 2021 nominee confirmed (Arcam 2021 list, WAA news). Arcam's
  2020 page also lists it, apparently appended after the ten 2020 nominees; I used 2021. "BNA Gebouw
  van het Jaar 2021 entry" not checked, left out. "White" and "the toucan chain gone minimal" not
  supported: Arcam says the facade is all glass; no source on the toucan, so neither is used. Room
  count differs (WAA and Arcam 240, Zuidas 238 and 245): "about 240". Lobby floor: WAA text says
  both fifth and sixth, Arcam fifth, the hotel's restaurant ZUID5 is "on the fifth floor": fifth.
  The hotel now trades as Hotel Amsterdam Zuidas (hotelamsterdam-zuidas.nl). Arcam says BREEAM
  Outstanding, Zuidas (older) says aiming for Excellent: not used in the text.
- **Crossover (-19):** 120 social flats are for 60 starting students and 60 status holders (Zuidas),
  not just "young people". AAP 2024: nominee; Team V calls it "runner-up"/"finalist", Arcam only
  lists nominees, so "nominated". Arie Keppler Prijs 2024 not confirmed (MOOI Noord-Holland page
  does not mention Crossover): left out. Amsterdamse Nieuwbouwprijs 2024 nomination is from Team V's
  own news only; kept in recognition as a nomination (drop if a second source is wanted). Team V's
  "first mixed-use building in NL with BREEAM Outstanding" not used. Arcam says all functions share
  one lobby, the AAP jury says nearly every function has its own entrance; I quoted the jury.
  Restaurant on the ground floor per Arcam and Team V; I could not confirm what it is called today.
  Exact house number not found: pin on the building between Gelrestraat and Hogelandplein, address
  "Gelrestraat, corner of the Europaboulevard" (Arcam gives Gelrestraat 1079 MZ).
- **EMA (-21):** "record time" kept as the facts: start May 2018, delivered 15 November 2019, 18
  months (MVSA, Zuidas). Height differs (MVSA 81 m, Zuidas 80 m): not used. "Nationale Staalprijs
  entry" and the RIBA Journal Q&A not found or read: no recognition. Name "Vivaldigebouw" is in
  Wikipedia and Commons only, not used. The "as quickly as Lego" quote is the Rijksvastgoedbedrijf's,
  as reported by MVSA.
- **Amsterdam Symphony (-22):** no architect page could be read (cie.nl returns an empty shell).
  Designer from Zuidas; "of de Architekten Cie." from Architectuur.org. Hotel is by AGS architecten
  with INBO and awg (Zuidas), not "AWG" alone; the text just says "designed by others". Fraud facts
  from Het Parool 2009 and NRC 2015 (both read); NRC 2013 only by headline. "The biggest fraud case"
  not used. Start September 2006 and the December 2013 office-tower sale are from nl.wikipedia (sale
  supported by the NRC 2013 headline); the 215.1 million price is Wikipedia-only, left out.
- **Viñoly (-23):** height is 91 m (Zuidas, Architectuur.org), not 91/95 (Wikipedia 95). "Viñoly's
  only building in the city" not sourced; used instead Architectuur.org's "first realised design in
  Europe", attributed. Address Claude Debussylaan 12 (Gebouwd in Amsterdam). Oever Zaaijer as
  co-architect is in Wikipedia and a Commons caption only: left out of `designer`. Current tenant not
  checked. Whether the stairs are still closed today is not confirmed (Architectuur.org: "nu
  afgesloten", undated): the text says only that they were shut before opening.
- **Stadsdeelwerf / stadsdeelkantoor Zuideramstel (-39): the scout line mixes two buildings.**
  Both are Claus en Kaan, 2008. The AAP 2009 winner (Arcam, Archined, Architectuur.nl) is the
  **Stadsdeelwerf** (works yard), Van Heenvlietlaan 50 in the Gijsbrecht van Aemstelpark: drafted.
  The hook ("two L-blocks round a court, offices shielding housing") and the ArchDaily link are the
  **Stadsdeelkantoor** (borough office plus 56 homes, Betuwestraat 26-28 / Graafschapstraat 2-108,
  Kop Zuidas; Gebouwd in Amsterdam project 306, ArchDaily 36148, Architectuur.nl). Not drafted: no
  prize, and I could not confirm its use today (the borough merged into Zuid in 2010). Say if you
  want it as an eighth place. Werf still in use: Arcam describes it in the present tense and Commons
  photos of 2019 call it Stadsdeelwerf Buitenveldert; no newer source.
- **Crystal Court (-40):** completed 2008 (Arcam), not 2009. Address De Kamp (Arcam), at the end of
  the Willem van Weldammelaan (Wikipedia). Nieuwbouwprijs 2010 from Tangram and Wikipedia; AAP 2009
  nominee confirmed on Arcam's 2009 page. Houtprijs 2010 and the developer's bankruptcy are
  Wikipedia-only: left out. Hillen & Roosen counts 37 villas, Arcam and Tangram 36: 36. Spelling of
  the developer: Arcam "Hillen & Roossen", the firm's own site "Hillen & Roosen": used the latter.

## Uncertain

- Crossover restaurant: open, name unknown.
- Pins: Symphony between the two towers (OSM building points); Crystal Court on the OSM building
  point; Crossover estimated on the building; the rest on PDOK address points.

## Photos

All seven have Wikimedia Commons photos (checked descriptions and licences: CC BY-SA 4.0 or CC0).

## Verification

Every source in the drafts re-read with curl (Het Parool 2009 in the BrowserOS browser, tab closed).
Validator 0 errors; 8-word overlap check of EN and NL against all fetched source texts (now
including Amsterdam Woont, AT5, NRC 2013 and 2015, Parool): 0 hits. No em dashes.

Claims cut or narrowed:
- Crossover: "public uses" in the brief (EN) and "maatschappelijke ... ruimte" (NL) narrowed to
  "cultural and commercial space" / "culturele en commerciële ruimte" (Zuidas: culturele en
  commerciële voorzieningen).
- Crossover: summary "the brick grid is the same on every side; what fills it is not" and body "filled
  differently on each side" narrowed: Team V and Amsterdam Woont say the grid's density and infill
  both vary with function and setting. "Look for: the brick grid, denser on the motorway side" was
  unsourced: now "filled differently on each side" (EN and NL).
- Crossover: EN "young people and refugees" made to match the NL and Zuidas/Amsterdam Woont: 60
  students starting out and 60 refugees with residence permits.
- EMA: "Dura Vermeer and Heijmans, who also maintain it for 20 years" narrowed to "a contract that
  also covers 20 years of maintenance" (MVSA names a Heijmans and Van Dorp vehicle as maintainer,
  Zuidas names Dura Vermeer with Heijmans; both agree on the 20-year DBM contract). "Fitting out
  could start early" corrected to the building services (MVSA: installation phase). NL "pitch tussen
  lidstaten" corrected to "tussen Europese landen" (the source's words; the member states decided).
- Amsterdam Symphony: "Building began in September 2006 and the complex was in use in 2009" cut
  (Wikipedia only); replaced by "the first homes were ready in September 2009" (Het Parool, 4 Dec
  2009, broker quoted). "In December 2013 the pension fund sold the office tower too" (Wikipedia) narrowed
  to what NRC 21 Dec 2013 says: the fund sold the Symphony building to the German fund Deka.
- Stadsdeelwerf: summary "the jury said it looks like anything but a depot" narrowed to the jury's
  point, that newcomers wonder what it is (EN and NL).

Recognition confirmed with a second source:
- Crossover, Amsterdamse Nieuwbouwprijs 2024 (nominated): confirmed by the organiser's own page
  (amsterdamwoont.nl/nieuwbouwprijs/2024/crossover) and AT5's Nieuwbouwprijs 2024 page listing
  Crossover among the nominees. Kept, sources added.
- Crystal Court, Amsterdamse Nieuwbouwprijs 2010 (winner): confirmed by the organiser's 2010 page
  (amsterdamwoont.nl/nieuwbouwprijs/2010/), which also quotes Het Parool. Source added.
- Crossover AAP 2024 and the jury quote: Arcam lists it as nominee; the jury text is Team V's
  quotation of the report (kept, attributed to the jury).

Other fixes:
- Crossover pin moved: the old point (52.337600, 4.893700) fell on the neighbouring 2023 block
  (BAG pand 0363100012254332, Gaasterlandstraat 251 etc.). Crossover is BAG pand 0363100012253656
  (built 2023): 120 homes, offices and meeting rooms at Gelrestraat 28-314 plus 10 homes at
  Rozenoordpad 7-25, the same range Amsterdam Woont gives. Pin now 52.337150, 4.893313 (inside the
  pand); address "Gelrestraat 28-314 and Rozenoordpad 7-25".
- Other pins checked point-in-pand against BAG: Van der Valk (2020 pand), EMA (2020), Viñoly (2005),
  Symphony (2010 pand), Crystal Court (2007), Stadsdeelwerf (pand at Van Heenvlietlaan 50; BAG gives
  bouwjaar 1962 for it, likely carried over from the old site; the address point matches Arcam).
- Photo removed: File:2020 European Medicines Agency.jpg shows only the agency's name sign, not the
  building. EMA keeps File:Vivaldigebouw 2020.04.23 (1).jpg (Commons category Vivaldi building =
  EMA building, facade detail). All other photos checked on their file pages and thumbnails: they
  show the buildings (Crystal Court (3) is the name on the glass hall, kept). No new photo search
  (separate photo pass).
- EMA "the Valley" changed to "Valley" (Van Dijk's words, the building's name).
- Still open: the Crossover restaurant's current name and opening; the Stadsdeelwerf's current use
  (no source newer than Commons 2019). Stadsdeelkantoor not drafted (coordinator's call).
