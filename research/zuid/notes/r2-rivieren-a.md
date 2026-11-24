# Zuid round 2, slice r2-rivieren-a: notes

6 new places in `places/r2-rivieren-a.yaml`, 4 existing places edited (merges), nothing dropped
outright. All three files validate with 0 errors and pass the dash grep. All six pins
point-check to borough Zuid.

## Item ledger

| Item | Outcome |
|---|---|
| 125 Wilhelmina Drucker monument | New place: "Wilhelmina Drucker monument, the free woman on the Churchilllaan" (Nice) |
| 126 Ode to the horse dropping | New place: "Ode aan de paardenvijg, a bronze heap of horse dung" (Nice) |
| 127 Ittmann's climbing figure | New place: "The climbing sculpture of the Jewish children's home" (Nice) |
| 128 Martin Luther King | New place: "Martin Luther King, the statue that came without a permit" (Nice, `check: Location`). Reijers's "Engel" is a Look for line, as the scout proposed |
| 129 Kennedy and the pumping station | New place: "Kennedy's bust and the pumping station that quotes him" (Okay). The cockatoo tunnel (scout Look for line, bridge 446) is a Look for line here |
| 130 Berlage by Krop | Merged into "De Wolkenkrabber (Twaalfverdiepingenhuis)" (`rivieren-noord.yaml`): the existing Look for line was extended, one link added |
| 131 Gandhi on the Churchill-laan | Folded as a Look for line in 125. The yearly gathering on 2 October is confirmed by the city's art register |
| 132 Europaplein art | Merged into "RAI: the Europahal and Het Signaal" (`buitenveldert.yaml`): the Bijl line was extended, a line for Virtual Fountains and one link added. Tobin's turning ball left out (see below). The metro station's artwork is not repeated |
| 158 Kindermonument, Gaaspstraat | New place: "Kindermonument, the playground that became a market for Jews" (Nice). W.C. Brouwer's two reliefs (scout Look for line) are a Look for line here |
| 159 Jewish schools 10 and 11 | Merged into "Jekerschool, Margot Frank's school" (`rivieren-noord.yaml`): one sentence (about a thousand children), a Look for line for the 2018 plaque, one link |
| 160 Anne Frank on the Merwedeplein | Merged into "Merwedeplein, the Frank family's square" (`rivieren-noord.yaml`): the existing Look for line was extended (1994 design, bookseller's petition, 9 July 2005), one link added. Harry Visser's diary mural is already told in "6e Montessorischool Anne Frank" |

Edited existing places: "De Wolkenkrabber (Twaalfverdiepingenhuis)", "Merwedeplein, the Frank family's
square", "Jekerschool, Margot Frank's school" (all `rivieren-noord.yaml`), "RAI: the Europahal and Het
Signaal" (`buitenveldert.yaml`). Titles unchanged.

## Conflicts and uncertainties

- **Merged bodies are over the 280-word target.** The four round 1 places were already 296 to 318
  words before the merge; they are now 345 to 360 (English). The additions were kept to Look for
  lines and one sentence. If the cap matters, the round 1 text needs trimming, which was outside
  this slice.
- **128, pin.** OpenStreetMap (52.339951, 4.909258, linked to Wikidata Q92135154) and nl.wikipedia
  (52.339986, 4.909403) agree within 10 m, but they may share a source, and nothing found says in
  words where in the park the statue stands. Flagged `check: Location`. Latest dated evidence that
  it is there: the artist's photo of 15 January 2022 and a mention in de Volkskrant of 8 March 2023
  (cited by nl.wikipedia). Nothing newer found, and nothing about removal.
- **128, the artist.** nl.wikipedia gives two civil names for Airco Caravan. Only the artist's name is
  used.
- **158, closing date of the market.** 4en5mei.nl, kindermonument.org and Joods Amsterdam say the
  sign stood until 14 August 1943; nl.wikipedia says 9 August; the art register says "mid-August".
  14 August is used. The playground's founding year also differs (1921 on 4en5mei and
  kindermonument.org, about 1927 on nl.wikipedia) and is left out.
- **158, unveiling year.** 3 November 1986 on every source read (4en5mei, kindermonument.org,
  nl.wikipedia, the art register). The "1984" the scout saw in the wiki list is a list error.
- **158, the initiator** is named on 4en5mei and the art register; the text says "a former
  resistance man" without the name, since he is not on the monument.
- **127, when the maker was traced.** nl.wikipedia links an HVO-Querido page titled "beeldhouwer
  onthuld 2012", which now redirects to the home page; the art register gives no year. The text
  gives no year for the search, only April 2019 for the return. The staff member is named in the
  register and by 24 Oranges; the text does not name him.
- **127, address.** De Mirandalaan 50 was the home's address in 1965; PDOK has no such address
  today. The place is addressed "De Mirandalaan, in front of the complex De Miranda" and pinned on
  the OSM artwork node (10 m from the register's point).
- **129, dates.** The pumping station is "December 2020" in the nl.wikipedia infobox and "2020" in
  the art register; the Kennedy article says he got its company "in 2021". December 2020 is used.
  The "succes" with one s on the column is transcribed that way by both nl.wikipedia and the art
  register; not seen on a photo.
- **125.** Het Parool's piece of 15 August 2025 is behind a consent wall and was not read; the
  facts come from nl.wikipedia (which cites it) and the art register. "Tens of thousands" of
  forged identity cards rests on nl.wikipedia's "about 80,000" for the centre Van der Veen set up.
- **132, Tobin's turning granite ball.** Left out: the art register has one line and the year
  1983, nl.wikipedia says it was "probably placed in 1993" and that it is unknown whether the
  mechanism still works. Too thin and too unsure for a line.
- **132, Virtual Fountains.** Realised in 2022 (OSM start date 17 November 2022). No later evidence
  was looked for that the projections still run nightly.
- **Rank of 158.** Left at Nice. Amazing is defensible, as the scout said: a decision for the user.

## Leads

- Stolpersteine for Otto, Edith, Margot and Anne Frank in the pavement at Merwedeplein 37 (OSM,
  52.345348, 4.900865). Not in the round 1 place; would be a Look for line there once confirmed
  from a second source.
- Dirk Müller's two-part stone sculpture (1976) in the Martin Luther Kingpark (art register 2341,
  52.33992, 4.909699), about 30 m from the King statue by coordinates. No story found.
- Jan Schultsz's date stones "ZUID 1933", "ANNO 1933" and "ZUID 1930" along the President
  Kennedylaan (art register 2439 to 2441) and Frans Werner's "Vrouw en man bij vuur" at the
  President Kennedyplantsoen: possible Look for lines for a Kennedylaan housing place.
- Jan Havermans's "Waternimf" on the De Mirandalaan (art register 2480, 52.33901, 4.903507), by
  the De Mirandabad.
- Gerrit van der Veen's own house and studio, Zomerdijkstraat 22, with Fred Carasso's memorial
  stone of 1948: check that the round 1 place "Zomerdijkstraat studio flats" tells it; it links
  well to 125.
- The 1970 corset burning at the Drucker statue and the fashion students who dressed the statue
  in 1972 are both in the Nationaal Archief photo set on Commons (CC0), should a second photo be
  wanted.

## Missing photos

None missing. All six places have Commons photos, taken from the infobox or category of the
work's own nl.wikipedia article; file existence was checked through the Commons API, the images
themselves were not opened.

- 128: the only Commons photos are of 18 January 2020, three days after the placing.
- Merges: no photos added. Commons has "Berlage door Krop, oostkant (1).jpg", "Anne Frank,
  Merwedeplein Amsterdam.JPG" and "Europaplein, RAI, Amsterdam pic7.jpg" (Bijl) if wanted.

## Route ideas

- **Rivierenbuurt memory, on foot (about 2.5 km):** Jekerschool (plaque) → Merwedeplein (no. 37,
  Anne Frank, the horse dropping) → Drucker monument → Victorieplein (Berlage, Wolkenkrabber) →
  Lekstraat synagogue → Kindermonument, Gaaspstraat.
- **Kennedylaan strip, by bike:** Kindermonument → cockatoo tunnel (bridge 446) → Martin Luther
  King and the Engel → Ittmann's climbing sculpture, De Mirandalaan → Kennedy and the pumping
  station → Europaplein (Virtual Fountains after dark, Bijl, Het Signaal).
- **Statues with an argument:** Gandhi on Churchill's avenue, Drucker by Van der Veen, Berlage too
  big for Berlage, King without a permit, Kennedy who does not look like Kennedy.
