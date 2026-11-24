# Zuid round 2, slice r2-south: notes

13 new places in `places/r2-south.yaml`, 4 existing places edited (Look for lines only), 3 merge
items found already told, 2 items folded as Look for lines, nothing dropped outright. Both files
validate with 0 errors and pass the dash grep. All 13 pins point-check to borough Zuid.

## Item ledger

| Item | Outcome |
|---|---|
| 133 Lady Solid | New place: "Lady Solid, the fountain a neighbourhood voted down" (Nice) |
| 134 The city maiden | New place: "The Vondelpark's city maiden, retired to the city limit" (Okay) |
| 135 Sculptures of the Gijsbrecht van Aemstelpark | Merged into "Gijsbrecht van Aemstelpark" (`buitenveldert.yaml`): two Look for lines (the war memorial on the kiosk footing; DeWitt's rider and Niermeijer's disc), one link. Volten's column and Snoeck's figures were already in the body |
| 136 Artists' gates to the Amstelpark | Merged into "Amstelpark" (`buitenveldert.yaml`): one Look for line (Big Talk, De Borcht, the red bridge), one link. Cabane, PIT Portaal and Floriade fluisteringen left out: the body is past 300 words |
| 137 Escher | New place: "Vogels en vissen: an Escher on a villa wall" (Nice) |
| 138 Ongenae's colours | Already told: it is the whole subject of "Warnersblokken" (`buitenveldert.yaml`). Not edited. The one fact not in it (one of the first built projects of the Liga Nieuw Beelden, founded 1955) is not something to look for, and the body is at 290 words |
| 139 Saura's Crucifixion | Already told in "Thomaskerk (De Thomas)". Added to the existing "inside" Look for line that it is the only glass appliqué window Saura made (city wall art register) |
| 140 Spinoza Lyceum art | Already told in "Spinoza Lyceum" (Krop's Spinoza, Wijnberg's two mosaics). Not edited. The register says the Albert Muis wall painting in the hall has been covered up by the school, so it is left out |
| 141 Your life is calling | New place: "Your Life is Calling, the twelve fists" (Nice) |
| 142 Lions of the Centraal Station | Merged into "Beatrixpark" (`buitenveldert.yaml`): the existing lion line was rewritten (two pairs, where they stand, what they carry, 22 from the railway bridges of 1876, here since 1972), one link |
| 143 The dog that was a bribe | Already told in "Beatrixpark" (a full paragraph and a Look for line). Not edited |
| 144 Hildo | Folded as a Look for line in 146. Thin: a dog with a naming joke, and the date is unsure (see below) |
| 145 Love or Generosity | New place: "Love or Generosity, the giant at the court door" (Nice) |
| 146 White Noise and the Zuidas art walk | New place: "White Noise, a night sky on the telecom tower" (Okay), with De Wachter, Pendulum, the Boelegracht bridge and Hildo as Look for lines |
| 163 Rozenoord | New place: "Monument Rozenoord: 106 empty chairs" (Amazing) |
| 164 Hidden child and protector | New place: "Monument for the hidden child and the protector" (Okay) |
| 165 Seats for memory (verify first) | Holds up. New place: "Zitplastiek voor herinnering: Jewish forced labour at the edge of the Bos" (Okay, `check: Location`) |
| 166 Kwibuka monument | New place: "Kwibuka monument, Rwanda remembered in the Beatrixpark" (Okay; the scout had Nice) |
| 244 First stone of Buitenveldert | New place: "The first stone of Buitenveldert" (Okay, `check: Location`). The Kastelenstraat gate buildings are a Look for line |
| 245 The motorway that was a sand dike | New place: "Rotterdamsepad: the motorway that got no further than a sand dike" (Okay), pinned on bridge 1801 instead of Beth Shalom, because the ditch, the sign and the street names are there |
| 246 Kalfjeslaan | New place: "Kalfjeslaan: the lane where Amsterdam stops" (Okay) |
| 257 Aemstel Schooltuin | Folded as a Look for line in 246 |

Edited existing places, all in `buitenveldert.yaml`, titles unchanged: "Amstelpark", "Gijsbrecht van
Aemstelpark", "Beatrixpark", "Thomaskerk (De Thomas)".

## Conflicts and uncertainties

- **Existing bodies are over 300 words.** The four edited round 1 places were at about 300 to 330 words
  (English, Look for list included) before the merge and are at 322 to 373 now. Only Look for lines
  were added or extended. Trimming the round 1 text was outside this slice.
- **141, where the fists are.** nl.wikipedia's coordinate (52.3334, 4.8935) is at the north gate of
  the Amstelpark and is wrong. OpenStreetMap and the city's art register agree on the south-east
  corner of the Beatrixpark (within 10 m). The Vrienden's sculpture guide of December 2024 says they
  stand "on the small hill behind the RAI park hall". Nothing found about a move for the Zuidasdok
  works, which run along this corner until about 2034; no check flag set. The date of the illegal
  placing is 30 March 1990 in the 2024 guide and "the last day of March" at Public Art Amsterdam;
  the text says "at the end of March".
- **146, is it lit.** White Noise failed in 2018 and was repaired by December 2020. The latest dated
  evidence that it works is a Commons photo of 31 January 2023. Nothing newer found, and nothing
  about a new failure. Not flagged, because the tower and the installation are there; worth a look
  after dark.
- **146, height of the tower.** 150 m (nl.wikipedia on the tower), 148 m (nl.wikipedia on the
  artwork) and 146 m (zuidas.nl). The text says "about 150 metres".
- **144, date of Hildo.** The art register and nl.wikipedia's list say 1997, before the bank's
  head office on the Gustav Mahlerplein was finished. No year is given in the text.
- **134, date.** nl.wikipedia and the Commons photo description give 18 June 2014 for the placing on
  the Koenenkade; the art register says "since 2015". 18 June 2014 is used.
- **137, who commissioned it.** Escher in Het Paleis names the owner and his wife. They are private
  people, so the text says "the owner of this new villa and his wife". The quotes exist in the
  museum's English only (the Dutch page was not found), so the Dutch text paraphrases them.
- **137, visibility.** The 2019 Commons photo was taken from the public road and the museum wrote
  in October 2024 that the tableau "can still be seen on the villa". How far back from the pavement
  it hangs is not stated anywhere. Rank kept at Nice.
- **139, who paid.** The round 1 text says the architect paid for Saura's window out of his own
  pocket (city monument register). The wall art register says he took on "part of the financing".
  Left as it was.
- **143, date of the dog.** The round 1 text says "about 1978" for the dog-lead plan; the art
  register says "about 1975" and adds the sum (5,000 guilders from about fifty people) and the
  help of revue star Willy Walden. Not edited: the story is told and the body is long.
- **163, numbers.** "Presumably 140" shot (De Jong, via nl.wikipedia and the art register), 100
  known by name in 2015, 106 chairs since 2018. 4en5mei's page on the old stone says there are
  metal plaques with names in the ground beside it; when those were laid is not stated. The stone
  is "1946" in the art register and 1973 on 4en5mei (flagpole 1948, stone 1973, moved 1981);
  4en5mei is followed. Two men are named in the text only by role (the Parool man, the doctor the
  path is named after); the chairs themselves carry all the names.
- **163 and "Amstelpark".** The round 1 Look for line says "one for each man shot nearby"; it is one
  for each man known by name. Not changed.
- **165, verify first.** The work is on the Amsterdamse Bos's own current list of artworks (read
  November 2026) and in the city's art register. No photo, no OpenStreetMap node, and the only
  coordinate is the register's: `check: Location`. The forced labour itself is documented
  (nl.wikipedia, citing the City Archives; the Bos's exhibition of 2 September 2021 to 10 July
  2022). The Bos's exhibition page and its two PDFs now return 404.
- **166.** The stone was "installed" on 18 April according to the Vrienden and unveiled on 19 April
  2023 (nl.wikipedia, Het Parool, the Vrienden's "on the Wednesday"). The city's own news page
  refuses automated requests (403) and was not read. No maker is known. What "Kwibuka" means is not
  explained in any source read, so the text does not explain it.
- **244, the year.** nl.wikipedia's article on the Wamberg transcribes the stone as "2 juni 1956".
  The stone itself (Commons photo of 6 April 2024), Ons Amsterdam and the city's survey of 2025 all
  say 1958.
- **244, the first pile.** The scout's "first pile of December 1957 on show at Bouvigne and
  Kastelenstraat" rests on one source of 2008. Only the date of the pile is used (city survey).
- **244, who designed Buitenveldert.** Ons Amsterdam calls Van Eesteren the architect of the suburb;
  the city's survey says Jakoba Mulder was responsible for the overall design. The text calls him
  the planner behind the city's expansion plan.
- **245, dates.** The plan was "called off in the 1970s" (nl.wikipedia on Rijksweg 3), the strip
  "reserved into the 1980s" (nl.wikipedia on Buitenveldert), the sand "dug away at the end of the
  1980s" (city survey). The scout's "scrapped in 1980, dug away from 1984" was not found in a
  source and is not used.
- **246.** The scout's two claims about restaurant Klein Kalfje (the border runs through it; it was
  the toll house) are left out: the first is in nl.wikipedia only and PDOK puts the address wholly
  in Amsterdam, the second was not found at all. The inn's fire of 1967 is from nl.wikipedia, which
  cites Ons Amsterdam (1991).
- **Dutch texts** are written fresh from Dutch sources. Exception: Escher (see 137).

## Leads

- **Pjotr Müller's "Cabane"** (1980, the first of his huts: stone blocks stacked against a timber
  frame, with no way in), **Karin van Dam's "PIT Portaal"** (2021) and the audio work **"Floriade
  fluisteringen"** (four plants tell their life) are in the Amstelpark and did not fit the
  Amstelpark text. Enough for a small place "Art in the Amstelpark" if the park gets a second one.
- **Jan Snoeck's four lying ceramic figures** (art register 2325) lie along the cycle path at
  Twikkel, at the far west end of the Gijsbrecht van Aemstelpark strip, about a kilometre from the park's pin.
- **Josje Smit's concrete dog and dromedary**: the scout says the Stadscuratorium approved their
  move into the Gijsbrecht van Aemstelpark in 2025. Not checked; a Look for line once they stand.
- **The Vlissingen lions.** Two of the 22 station lions have stood at the Leeuwentrap in Vlissingen
  since 1910; a society (leeuwencs.nl) wants the Beatrixpark pair from the Artsenijhof back at the
  Oostertoegang. If that happens the Beatrixpark line needs changing.
- **A new sculpture for the Beatrixpark**: Femke Herregraven's "Onvoorzien" (bronzes in the water
  by the new housing at the south side) is planned for 2028 (zuidas.nl, July 2026).
- **Jewish Buitenveldert**: the Kastelenstraat (Beth Shalom, the schools, the first synagogue of
  1965 opened by chief rabbi Aron Schuster) has no place of its own. The city's survey of 2025,
  pp. 62-63, is a ready source.
- **The Kastelenstraat gate buildings** (four square shop-and-housing blocks over the street, by
  Kromhout, Groet and Bijvoet; the scout mentions sculptures in three of the courts) could carry a
  housing place if a round looks at post-war Buitenveldert.
- **Forced labour in the Bos**: the other three work sites and the camp for political prisoners by
  the Ringvaart lie in Amstelveen, outside this map.

## Missing photos

- **Zitplastiek voor herinnering** (165): nothing on Commons.
- **Hildo** (144, a Look for line): nothing on Commons.
- **De Wachter** and the **Boelegracht bridge** (Look for lines in 146): not searched to the end,
  the Commons API was refusing requests.
- **Lady Solid**: the close-up used as cover is marked "slightly out of focus" by its uploader; the
  sharp one shows her small, in front of the building. Both are in.
- **Escher**: the one Commons photo is a close-up of the tableau; none shows the whole front.
- **Kalfjeslaan**: the lane photo is from 2007.

## Route ideas

- **Ommetje Zuidas on foot**: Love or Generosity (145), Gustav Mahlerplein with Hildo,
  De Wachter, Pendulum, White Noise (146, best at dusk), the Boelegracht bridge, then into the
  Beatrixpark by the fists (141), the lions and the Artsenijhof, and out past the Kwibuka stone
  (166) at the Diepenbrockstraat. The Escher (137) and the Warnersblokken are a few minutes' walk from
  the court.
- **The southern edge by bike**: the city maiden (134) and Lady Solid (133) on the
  Amstelveenseweg side, east through the Gijsbrecht van Aemstelpark, the Rotterdamsepad and bridge
  1801 (245), the first stone (244), the hidden child (164), then the Kalfjeslaan (246) to the
  Amstel, the Riekermolen, and back north through the Amstelpark past the chairs of Rozenoord (163)
  to the old execution site on the Amsteldijk.
- **War and memory in the south**: Rozenoord (163), the hidden child (164), the war memorial on the
  Meeting Island, and the seats at the Bos (165, a ride west).
