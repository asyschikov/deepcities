# Dutch pass, west-r4 batch 01

This batch has 19 places. I checked every factual claim in the EN and NL summary, body and Look for lists against the links and the draft sources. I used these sources:

- the nl and en Wikipedia articles (API, plus direct page fetches when the API rate-limited)
- the RCE register: complex 504733 and its 14 component records
- the city monuments API (api.data.amsterdam.nl)
- the Kunstwacht API (Buitenkunst)
- the city wall-art register (WANDKUNST geojson)
- Gebouwd in Amsterdam, Stadscuratorium, Westkrant and GWL-terrein
- Wikimedia Commons photos, for things you can see on site

## Claim changes

| Kind | Count |
|---|---|
| Narrowed | 22 |
| Cut | 5 |
| Sourced | 3 |

Each change is listed, with its source and evidence, in `changes` in batch-01.json. Every place has a fresh NL summary (280 characters or fewer) and a fresh NL body. Each NL body ends with "Let op:" only where the EN has a Look for list. Keesmanblokken and Pniëlkerk have no Look for list, so they have no "Let op:" either.

There are no em dashes and no spaced en dashes.

Copy checker: 0 copied runs in 18 of 19 places. The one flagged run is in the 4 May memorial. It is the quoted inscription "Wij gedenken hen die leden, hen die stierven, hen die streden", which is marked as a quote and exempt under the brief.

## Changes by place

- **Keesmanblokken**: summary narrowed. Only two of the three blocks curve.
- **Opstandingskerk**: no changes. The Waterbuffel was confirmed via Kunstwacht 1874.
- **Cabralschool**:
  - "square" towers became "slender".
  - The renovation and creative-firms claim was narrowed and partly cut.
  - "left to wild plants" became "home to".
  - "mostly native" became "many of them native".
- **Spaarndammerdijk**: Boerderij Ons Genoegen is sourced to the municipal monument list (Spaarndammerdijk 319).
- **Leidsebosje**: the Boomzagertje is a tiny statue on a plane-tree branch. No source says it is an iron man sawing.
- **Moederste**:
  - "crouches in the planting" became "stands on the grass" (Commons photo).
  - "works openly" was cut.
  - The dark spots are sourced from a photo.
  - The "information stones" are information plates in the ground.
- **Westermoskee**:
  - "Twenty years of fighting" became "22 years and many fights from site purchase to opening".
  - Piri Reis is now a "Turkish explorer". The sources do not call him a cartographer.
  - "industrial" was cut.
  - The style claim was narrowed to what Gebouwd in Amsterdam says.
  - The Turkish name "Ayasofya Camii" was cut.
- **Vondelpark Pavilion**: the grilles are in the arched window openings, not specifically in basement windows.
- **Zaanhof**:
  - The Patrimonium attribution was cut.
  - "rebuilt in 1934" was narrowed to "differs from the rest, recorded as a 1934 design by M. Oesterman".
  - The Woezel is "in the court", not "in the middle".
- **De Arbeiderswoning**: "the giant bank building on the Vijzelstraat" became "the head office of the Nederlandsche Handel-Maatschappij".
- **Hugo de Groothof**: "the state did not look after widows" was narrowed to what the source says about the diaconate.
- **Polanenstraat**: "garden villages of the 1920s" became "1920-1940", which is the register wording.
- **4 May memorial**: no changes.
- **Former waterworks**: no changes. Publieke Werken and 't Hoen were checked against the city API.
- **Kraakliedenbuurt**:
  - "riots and arson" became "arson attacks and unrest".
  - I dropped the house numbers of Zaal 100 and Filmhuis Cavia, because no source I could read gives them. Only Cavia is placed in the Van Hallstraat, and Zaal 100 is listed after it so it does not read as being there too.
- **Wester sugar refinery memorial**: no changes. Boddé's *Recycled '92* was confirmed via Kunstwacht 2600.
- **Abri en peperbus**: no changes. Erftemeijer was confirmed via Kunstwacht 2573.
- **Vondelpark**:
  - "Constant pumping" became "constant drainage".
  - The Vondelstraat back gardens were cut, because no source has them.
  - The Wispelwey name plate is sourced (nl.wikipedia gallery: "Naamplaat").
  - The W bridge was narrowed. It dates from 1882 and linked the park to the Willemspark, but no source says the Willemspark developers built it.
  - Picasso's bird is "the flat fish" in popular usage, not an official name used by the city.
- **Pniëlkerk**: no changes. Every Van den Broek claim matches WANDKUNST record "De Opstanding": possibly his first commission, one of the most important glaziers of the reconstruction period, one window broke, colourless in the porch.

## Places whose NL hook differs from the EN lead

These NL texts open on a different fact from the same set: Spaarndammerdijk, Leidsebosje, Moederste, Westermoskee, Zaanhof, De Arbeiderswoning, Hugo de Groothof (the 11 pm rule and the window bars), Polanenstraat, 4 May memorial, Former waterworks (the horse trough), Kraakliedenbuurt (the mayor chased out in 1984), Wester sugar refinery (workers walking across the bridge), Abri en peperbus (waiting begins at home), Vondelpark (it sinks every year) and Pniëlkerk (the tealight glow).

## For the user

- **Long NL bodies**: Vondelpark (about 420 words) and Moederste (about 350 words) run over the 250-word aim. Their EN texts are long and have long Look for lists, and the NL keeps every item.
- **Gebouwd in Amsterdam**: it calls Sinan 15th century (he was 16th). I did not use that detail.
- **Nina Rave inscription**: the inscription quote is flagged by the checker. It is a quoted inscription, so I left it.
- **Vondelpark summary**: it still says the quietest corners sit "behind the villas of the Vondelstraat". That is an opinion, and it no longer has the back-gardens item to back it up. You may want a place check.
- **Wester kiosk date**: the source gives 2007/2008 for the kiosk. The text keeps 2008.

## Verification

I checked all 19 places. For each one I checked every claim in the new NL summary and body against the new EN and the original texts. I checked that the Look for and Let op lists match item for item, and that every NL and EN summary is 280 characters or fewer. There are no em dashes and no spaced en dashes. I re-fetched the sources for the three "sourced" changes:

- **Spaarndammerdijk**: the farm is confirmed. The nl.wikipedia list gives Buurtboerderij Ons Genoegen, 1880, at Spaarndammerdijk 319. The evidence quoted the wrong monument number. I corrected it to 200518. Number 223026 is the cemetery service houses at 313-315.
- **Moederste**: the dark spots are confirmed. The Commons photo (A) shows round dark spots all over the blue-green figure. It also shows the figure standing on grass.
- **Vondelpark**: the name plate is confirmed. The Pater van Kilsdonkbrug article has a gallery image captioned "Naamplaat (januari 2020)", and it names G.J. Wispelwey & Co. of Zwolle as the maker.

### Claims removed or fixed in the NL

- **Opstandingskerk**: "schuin afgeplatte klokkentoren" became "schuine klokkentoren". "Afgeplat" is in no source. The EN says only "slanted".
- **Leidsebosje**: "dikker dan een gemiddelde jonge boom" became "dikker dan menige jonge boom". This follows the EN ("many young trees") and the source.
- **Moederste**: I cut "Volgens de kunstenaar". The EN gives no speaker, and neither Stadscuratorium nor nl.wikipedia says who made this remark.
- **Vondelpark Pavilion**: the hook "Weinig gebouwen in het park hebben zoveel levens gehad" became "Dit gebouw heeft veel levens gehad". The comparison is unsourced. I checked "ruw bewerkte baksteen" for the basement against the RCE text ("in rustica uitgevoerde bakstenen benedenverdieping") and kept it.
- **Polanenstraat**: I cut "in de Spaarndammerbuurt". It is not in the EN, though nl.wikipedia supports it. "Voordeur" became "ingang", which matches the EN "doorway".
- **4 May memorial**: "zwaar donker blok" became "groot donker blok", which matches the EN "large".
- **Vondelpark**:
  - "kon de politie er niemand bekeuren" became "konden fietsers er niet worden bekeurd, zelfs niet voor rijden zonder licht". The EN is about cyclists only.
  - I cut "op de hoeken" for the Vondel monument's angels. It is not in the EN.
  - "uitgespaard in de steen" became "uitgehakt in de steen", which matches "cut into the stone".
- **Pniëlkerk**:
  - I cut "in de buurt" from "de bijnaam in de buurt". The EN does not say who uses it.
  - In the summary, "'s avonds" became "van binnenuit verlicht", which matches the EN "lit from inside".
- **Wester sugar refinery**: "in het kiosk" became "in de kiosk". This is a grammar fix only.

### Copy checker

After the fixes the checker reports 0 copied runs in 18 of 19 places. The remaining run is in the 4 May memorial: the marked inscription "Wij gedenken hen die leden, hen die stierven, hen die streden", which is allowed to stay.
