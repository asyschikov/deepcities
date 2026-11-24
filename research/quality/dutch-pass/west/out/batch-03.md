# Dutch pass: West, batch 03

27 places done. Every place has a new Dutch summary and body, written fresh rather than translated. Each one opens with a sourced hook and ends with "Let op:" plus the same Look for items as the English. All NL summaries are 280 characters or shorter. There are no em dashes or spaced en dashes in the Dutch.

The copy checker finds 0 copied runs in all 27 places. Some sources are not in its cache, so I also checked these by hand with the same 8-word test, and found 0 runs:

- the Villa Betty object registers 491951, 491961 and 491971 (fetched live; the cache had empty text);
- nl.wikipedia *Batman en Robin*, newly added for Gebroken Cirkel.

The MVRDV page renders with JavaScript, so I read its text through `api.mvrdv.com/api/projects/163`. That source is English, so it does not count for the Dutch copy check.

## Claim check: 73 changes

- **57 narrowed** to what the source says.
- **12 cut**.
- **2 sourced**:
  - Blauwe Poort, built 1988: Wikidata P571;
  - Apen aan tafel, bronze and 2005: the Wikipedia infobox.
- **2 reordered**: two English bodies got a Look for list so the Dutch "Let op:" has matching items:
  - De Bloem: the existing "from the Haarlemmerweg you can see..." sentence became the list;
  - De Kamperfoelie: the list repeats façade facts already in the body.

Only Lutherhof needed no claim change at all. Blauwe Poort only had its year sourced, and Gebroken Cirkel only had one Look for item narrowed.

### Main points by place

- **Silodam:**
  - "Textbook example of 1990s datascape architecture" is now "a well-known example of modern architecture along the IJ" (nl.wikipedia).
  - The block paid for "part of", not "that whole operation", the cost (MVRDV).
  - The façade groups differ in material and window pattern; no source gives each its own colour.
- **De Krommert:**
  - The overtoom no longer carries "between the two water levels".
  - "Sunrise to sunset" is now "by day only".
  - The tram is the Amsterdam–Haarlem–Zandvoort line.
- **Deli warehouses:** The sources conflict on Deli, Langkat and Serdang.
  - nl.wikipedia says 1898–1900.
  - The national register (526745) says 1903–1904, designed by **P.J. Hamer**.
  - Both are now given, and the summary no longer says "all by Willem Hamer". The architect attribute is now "Willem Hamer; P.J. Hamer (Deli, Langkat, Serdang, per national register)".
  - Only Medan, Bindjeij and Laboean are sourced as places in the sultanate. "Grew tobacco" is now "had estates ... stored tobacco".
- **Gebroken Cirkel:** The Batman and Robin cows stand "in and around" the hotel. "On the roof" is not sourced. Added nl.wikipedia *Batman en Robin* to `sources_add`.
- **Gemaal Overbraker Binnenpolder:**
  - Cut "at the same time, and it shows" about Gosschalk and the Westergasfabriek.
  - The lock's position "just east" is not sourced.
- **Megamozaïek Aqua Costa:** Cut the opening sentence about baths in the 19th-century ring (unsourced).
- **Mural for Lisa:**
  - Cut "The newest wall in Bos en Lommer, and one not commissioned by anyone".
  - Cut "through the night" and "in her arms".
  - "14 metres up" is now the scaffold height.
  - "Kolenkit tigers" is now "the tigers on the Wiltzanghlaan".
  - "Permits would take years" is now "three years" (NH Nieuws).
- **Mural of the amazon:** Cut "a nod to the riding school" and "familiar sight in spring". The underpass "could do with some colour" rather than being "dull, grey".
- **Overtoom 343:**
  - Cut "a jumble of tall 1880–1930 blocks".
  - The 17th-century element is the pediment and the 18th-century one the glazing bars.
  - The "client asked for it" idea comes from the Atlas of the 19th-century Ring, quoted by the register.
- **Roosje:**
  - The request was "probably" from the owner.
  - Graffiti was already there; stopping it is not given as a motive.
  - "In 2021 ... the city's route": 2021 is the year of a study, and the route's owner is not stated.
- **Spaarndammerspoorbrug:**
  - Cut "the city sculptor".
  - Janno Hahn designed the lettering; the sources do not say he painted it. The year is now 2010–2011.
  - "On the brick abutments" is not in the place's sources. The Kunstwacht route 2 PDF, a source of Groeistam, puts them "boven op de vier hoeken" if you want to restore a position.
- **Stamboom van de buurt:**
  - Cut the Opstandingskerk tower as the origin of the name Kolenkit (unsourced).
  - "The third of the four" is now "one of the four".
- **Triple house:**
  - "Some of the richest interiors on the street" is now "richly finished, well-preserved".
  - Public Works set its villa-only condition with the 1873 approval, not the 1867 one.
- **Volkskoffiehuis block:**
  - Cut "a type of alcohol-free café for workers".
  - Note: nl.wikipedia (Spaarndammerstraat) attributes nos. 792-872 to Walenkamp, while the city register says Lesmeister. The text follows the register, as the draft did.
- **De Boekenkast:**
  - Cut the Look for item "strip below the shelves with title and author" (in no source).
  - "Every writer on the shelf is a man" is now "the street names it draws on are all men's".
  - Johannes is now Johan Enschedé, and "poem" is now "text" for De Batavier.
  - Dropped "in 2024" and "the district's" for the route.
- **Groeistam:** Cut "Some sources place it on the Barentszstraat, which is wrong" (no source).
- **Oude familienamen:**
  - "About 38 homes, 2004–2005" is now "37 homes, 2005" (M3H: 10 rental and 27 for sale; realised 2005).
  - Cut "people nobody remembers".
- **Stenen Silo:**
  - The Look for item called the central building the "elevator building". The register says the centre is the six-storey cleaning building and the elevator is a separate octagonal tower on the east corner.
  - Cut the gloss on the Stelling.
  - "Would not starve" is now "secure the grain supply".
  - Note that the listing date conflicts: the register says 13 May 1992 and nl.wikipedia says 1996. The attribute keeps 1992 (register).
- **Villa Betty:** "Lived here until her death in 1980" is now "died in 1980".
- **Apen aan tafel:** "The smallest needs a stool" is now "one needs a stool". Dropped "a few hundred metres away". "Two artworks" is now "at least two".
- **De Liefde:**
  - Cut De Nieuwe Liefde as the former parish hall and wine warehouse, from the body and from Look for. Neither source mentions it.
  - Cut "now the Bilderdijkpark" and "architect of the Rijksmuseum".
  - The decline led to a parish merger.
- **Hollandsche Manege:** "Later architect of the Concertgebouw" is now "known as".
- **Zoutkeetsplein:** Kramer "designed" the block; the register says he was possibly also the contractor.
- **Kamperfoelie, De Bloem, Lutherhof, Blauwe Poort:** No claim problems apart from those listed above.

## Hooks

All 27 Dutch texts lead with their most striking sourced fact. The English was not reordered (step 3 is optional). These Dutch openings differ most from the English:

- Lutherhof: one front door per resident, giving the first gallery flat.
- Gebroken Cirkel: the Duisenberg nickname.
- Megamozaïek: graffiti finds no grip.
- Mural for Lisa: "this takes three years".
- Overtoom 343: smallness.
- Spaarndammerspoorbrug: the surviving wall remains.
- Triple house: the "tasteless houses" condition.
- Volkskoffiehuis: the painted KOFFIEHUIS.
- Zoutkeetsplein: the continuous cornice.
- De Bloem: the mill moved.
- De Boekenkast: 25 kg per book.
- De Kamperfoelie: light building among brick.
- Groeistam: impossible to climb.
- Stenen Silo: built for a siege.
- Villa Betty: the queen of the Overtoom.
- Apen aan tafel: the empty fourth plate.
- De Liefde: only a street name left.
- Hollandsche Manege: Mozart at the predecessor.

## For the user

- **Deli warehouses:** The architect and dates of Deli, Langkat and Serdang conflict between Wikipedia and the national register. Both are shown now; you may want to pick one.
- **Stenen Silo:** The listing year conflicts (1992 in the register, 1996 on Wikipedia).
- **Volkskoffiehuis block:** Wikipedia credits Walenkamp, the register Lesmeister.
- **Stamboom van de buurt:** The English summary still has a spaced en dash ("– the object..."). I left it because only claims were in scope; I removed the other spaced dashes in the English bodies I edited.
- **Short bodies:** Some Dutch bodies run under 150 words because their sources are thin: Mural of the amazon about 130, Stamboom about 140, Megamozaïek about 155. I did not pad them.

## Verification

I checked all 27 places. For each one I listed the claims in the new Dutch and matched them against the new English and the original texts. I re-fetched the sources where the Dutch rests on them: nl.wikipedia *Silodam*, *Gebroken Cirkel (Amsterdam)*, *Pakhuizen Medan, Bindjeij en Laboean* and *Roosje (Rombout Oomen)*, the RCE register entry 526740, NH Nieuws 362527 and De Westkrant (Lisa mural).

The Dutch details I re-checked against these sources held up:
- "ontsnapten aan de sloop": nl.wikipedia *Silodam*, "zouden beide silo's worden gesloopt".
- The percentage-for-art rule as one percent, and the Hogeschool campus: nl.wikipedia *Gebroken Cirkel*, "eenprocentregeling", "Hogeschool van Amsterdam (Amstelcampus)".
- The names of Medan, Bindjeij and Laboean carved in stone: RCE 526740, "hardstenen gevelelementen met daarin ... de Indonesische pakhuisnamen".
- "welstandscommissie": nl.wikipedia *Roosje*.

The new English contains nothing unsourced in this batch.

### Claims removed or narrowed in the Dutch (8)

- **De Krommert:** "in de buurt kent iedereen de naam" is now "in de buurt is de naam bekend". The English says "lives on unofficially" and the source says "lokaal wel bekend"; "iedereen" was an overclaim.
- **Mural for Lisa, summary:** "Twee scholieren van achttien" is now "Twee achttienjarigen". The two had already finished school when they painted it (De Westkrant: "Nadat ze hun diploma hadden gehaald").
- **Mural for Lisa, Let op:** the quote "'zoals het zou moeten zijn'" did not match the source. It is now "die de maan zelfverzekerd meedraagt: 'Zo zou het moeten zijn', aldus Lucy" (NH Nieuws: "Zo zou het moeten zijn").
- **Overtoom 343:** "buren die stukken groter zijn" is now "buren die groter zijn". The claim change had already narrowed "much taller" to "bigger", and "stukken" brought the "much" back.
- **Triple house:** "huizen die wel opvielen maar niemand aantrokken" (attracted nobody) is now "maar niet aantrekkelijk waren". This matches the English ("without being attractive") and the register ("wel aandacht trekken, maar niet aantrekken").
- **De Liefde:** the opening "Van de kerk zelf is weinig meer over dan een straatnaam" overstated what is left. The Stations of the Cross and the organ survive elsewhere, and the replacement complex had a church space until 2013. It is now "Op de plek zelf herinnert een straatnaam nog aan de kerk".
- **Lutherhof:** "Een woonpalazzo, zo werd het genoemd" claimed a contemporary name. It is now "Zo werd het een soort woonpalazzo" (the source: the architect gave the dwellings "de vorm van een woonpalazzo").
- **Gemaal Overbraker Binnenpolder, summary:** "met boven de pompen de woning" placed the flat over the pumps, which no source does. It is now "met op de bovenverdieping de woning", as in the English and the original.

### Other fixes

- **Stamboom van de buurt:** the English summary had a spaced en dash ("coal scuttle – the object"), which is now a comma. This is punctuation only, and it is logged in that place's `changes`.

### Checks

- **Copy runs:** the copy checker reports 0 copied runs in all 27 places, before and after these edits, so none needed fixing.
- **Dashes:** there are no em dashes or spaced en dashes in any NL or EN summary or body.
- **Let op lists:** each one has the same number of items as its English Look for list.
- **Summaries:** every NL and EN summary is 280 characters or shorter.
- **Sourced changes:** I confirmed the two "sourced" changes (Blauwe Poort 1988 via Wikidata P571; Apen aan tafel 2005 and its materials via the Wikipedia infobox) as recorded. Neither adds text to the Dutch beyond what the English already had.
