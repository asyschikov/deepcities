# Zuid round 2, slice r2-apollo: notes

14 new places in `places/r2-apollo.yaml`, 4 merges into round 1 places, 1 item dropped, 3 items folded.
All pins point-checked with `scripts/areas.py`: borough Zuid.

## Item ledger

| Item | Outcome |
|---|---|
| 108 | New place: **11 Rue Simon Crubellier, a living room on the Stadionplein** (Okay) |
| 109 | New place: **De wildplasser, ASV Arsenal** (Okay, `check: Still there?`) |
| 110 | Merged into **Burgerweeshuis (Aldo van Eyck's orphanage)** (`stadion.yaml`): the existing Look for line on "Spiegel van de hemel" now tells the Hoevelaken story (1986, designs first refused, unveiled here 18 June 2019); Wikipedia link added (6 links) |
| 111 (verify) | **Dropped.** Marte Röling's lips were painted on the outside end walls of the three halls (Anefo photo of 1975). A photo of April 2013 shows the front end wall reclad with coloured translucent panels and a sign "Gevelrenovatie Sporthallen Zuid"; nl.wikipedia speaks of the paintings in the past tense. The city's wall-art register still describes them, but it gives no date and no later photo exists. Nothing confirmed to see, so no place. See Leads |
| 112 | Folded into the new place **Minerva's return, the sculpture lawn opposite the Hilton** (with 114), and merged as a Look for line into **Minervalaan and Minervaplein, the avenue to a station that came late** (`apollo-a.yaml`). The scout's story was wrong on the place and the year, see Conflicts |
| 113 | New place: **The Regenerator, a Marina Abramović to sit on** (Nice) |
| 114 (verify) | New place, together with 112: **Minerva's return, the sculpture lawn opposite the Hilton** (Nice, `check: Still there?`). Chia's "Enea" and the Volten on the Minervalaan are left out (no evidence after ArtZuid 2009) |
| 115 | New place: **Pontus and the transformer house, Hoofddorpplein** (Okay) |
| 116 | New place: **Modern girl with a pearl, Eerste Schinkelstraat** (Okay) |
| 151 | Round 1 already tells the SD headquarters and the Zentralstelle in two places (`apollo-a.yaml`). What was not told became a new place: **Gerhard Badrian's stone, Rubensstraat 26** (Nice, `check: Location`), with the Ox and Ploeger tablet and the plaque "Tijdloos is de stilte" as Look for lines. No round 1 place was edited for this item |
| 152 | New place: **Verzetsgroep, the execution site on the Apollolaan** (Nice). Round 1's "Apollolaan, east end" has a paragraph on the same shooting; see Conflicts |
| 153 | New place: **Truus Wijsmuller's bust, Bachplein** (Nice), with the Corellistraat stone as a Look for line |
| 154 | New place: **Schaduwen, the shadows of the Olympiaplein raid** (Nice), with the Fanny Blankers-Koen letters and Kokke's fence as Look for lines |
| 155 | Folded: the Canadian pennant is a Look for line in 152 and in 153 |
| 204 | Merged into **St Ignatius Gymnasium, on the site of the Zentralstelle** (`apollo-a.yaml`): the one sentence on the bunker now gives the two building phases (1955, 1972), the showers and the staffing; stelling-amsterdam.nl added to `sources` (the place already has 6 links). No Look for line: the hatch is on a closed schoolyard and was last photographed in 2006 |
| 205 | New place: **Chapel of the Lady of All Nations** (Nice, category `religious`) |
| 206 | New place: **De Kom and the ferry Anne Frank took** (Nice, `check: Facts`). The nine children and Krop's bridge are left to round 1's Muzenplein place |
| 208 | New place: **Michelangelostraat 36, hideout of the Hidden Camera** (Okay) |
| 209 | Merged into **Jacob Marisplein, Sloten's commuter village** (`schinkel.yaml`): one sentence on Floris Versterstraat 11 and a Look for line on the inscription, in both languages; Wikipedia link added (6 links) |
| 211 (verify) | New place: **Duiventil, the tram control cabin on one leg** (Okay, `check: Location`) |

Edited round 1 places: `stadion.yaml` Burgerweeshuis; `apollo-a.yaml` St Ignatius Gymnasium and Minervalaan and Minervaplein; `schinkel.yaml` Jacob Marisplein. All four files validate with 0 errors and have no dashes.

## Conflicts and uncertainties

- **Minerva and Apollo (112).** The scout, following the city's art list (Buitenkunst record 1915), had Minerva stolen in 1993 from a plinth on the Minervalaan and Arman's Apollo put on the empty base in 1994. NOS (14 October 2017), ArtZuid and nl.wikipedia say: stolen in **1985**, from the lawn at the Apollolaan in front of the Hilton; bought by a dealer in 2007, given to Stichting ArtZuid, shown in Hoorn in 2017. A Commons photo of 19 May 2023 shows Minerva on a round stone plinth with the Hilton behind her; a Commons photo of 16 March 2011 shows Apollo on a square granite base marked "Arman 1994" in the same spot. So the two do not share a plinth, and the text says only that Apollo filled the gap. I used 1985. The city list pins Apollo on the Minervalaan south of the Gerrit van der Veenstraat; where it stands now that Minerva is back is not confirmed (hence the check).
- **The lawn at the Hilton (114).** Confirmed: Minerva (May 2023), Bosgod (Stadscuratorium advice 2023, photo July 2023), Rodin's "Denker" (OpenStreetMap, edited February 2025). Not confirmed since 2009: Tajiri's "Wachter 1". The May 2023 photo of Minerva has an ArtZuid audio-tour sign next to it; whether she stands there between editions should be checked on site.
- **Verzetsgroep (152).** Unveiled 25 October 1952 (4en5mei.nl, Anefo photos of that day, nl.wikipedia); the commemoration committee's site and the wiki list of sculptures say 1954. The scout called the figures stone; they are bronze. Round 1's "Apollolaan, east end: Boterenbrood, Staal and Gratama" (`apollo-b.yaml`) has a paragraph and a Look for line on the same shooting. I did not touch it; when both are imported that paragraph could shrink to a sentence pointing here.
- **Oelschlägel.** nl.wikipedia spells Oelschlägel and calls him a police employee without rank; 4en5mei and the city list write Oehlschlägel and "SD officer". The text avoids the rank.
- **Badrian's stone (151).** The national address register puts Rubensstraat 26 at 52.349164, 4.873365, beside the Adama van Scheltemaplein; the city art list pins the stone 200 m further south. The address fits the story (above a flat of SD men, next to their headquarters), so the pin follows the address, with `check: Location`. The woman who betrayed him is named on nl.wikipedia; the text does not name her.
- **Ox and Ploeger tablet.** 4en5mei transcribes the date on the stone as 15 June 1944 and gives 15 July in its history; the city list transcribes 15 July. The text uses 15 July and does not quote the stone.
- **Wijsmuller.** 4en5mei dates the bust "1965" (first unveiling); it was made in 1964 and placed here on 11 December 1978. The number of children she saved is given as "thousands"; sources range up to 10,000.
- **Schaduwen.** The three pupils are named in the city list; left unnamed here.
- **Chapel (205).** The scout's detail that the villa belonged to a named member of the Brenninkmeijer family could not be confirmed (en.wikipedia only says a member of the family supported the movement and that the foundation bought the property in December 1979, which sits oddly with a chapel consecrated in 1976). Left out. Opening hours differ between the scout (telephone hours) and the chapel's sites; the text follows the sites (Monday to Saturday 10.30 to 16.30, Sunday 9.00 to 16.30). The Geheugen van Plan Zuid text has the apparitions running to 1961; the bishop's statement and nl.wikipedia say 1945 to 1959.
- **De Kom (206).** The scout's "children's beach fenced in by a rowing club in 1953" was not found in any source I could open: left out. The ferryman's granddaughter says the ferry stopped when the bridge over the Boerenwetering was built, which cannot be right (that bridge dates from about 1930 and the ferry ran in 1942): left out, the text says only that nothing is left. Herman Brood's use of the bridge hut rests on one Parool walk of 2004: `check: Facts`. The pin is the middle of the basin.
- **Duiventil (211).** Only nl.wikipedia reports the move of August 2025 to the corner of Amstelveenseweg and Karperweg; the museum tram's site and Commons have nothing on it. The pin is the street corner (`check: Location`). The first photo shows the cabin at its former spot behind the station (2018).
- **Mural (116).** Street Art Cities logged it on 27 January 2024 and does not give the year it was painted (the scout said 2023). The address "no. 111" comes from that site; the national address register has no such number, and the pin (from OpenStreetMap) lies about 135 m west of the Amstelveenseweg, not at its corner.
- **11 Rue Simon Crubellier (108).** Stadscuratorium dates it 2019, the wiki list 2018; Commons shows it being installed on 5 October 2018. `built: 2018–2019`. The city list credits a second maker (Ramesh Darji) whom no other source mentions.
- **Wildplasser (109).** Last photo is from 2014. The material is not given by any source.
- **Bunker (204).** Round 1 says the bunker is now the bicycle cellar (amsterdamopdekaart.nl); stelling-amsterdam.nl found it intact with maps and telephones in 2006 and lists no current user. Both can be true (two bunkers); not settled.

## Leads

- **Sporthallen Zuid (111):** go and look whether any of Marte Röling's lips survive on the end walls or inside (the register also mentions her colour plan for the interior). If they do, it is a place; the 1975 Anefo photo "Nieuwe sporthallen Zuid exterieur sporthallen, Bestanddeelnr 928-1703" is on Commons.
- **Jan Meefout's "Land, water, licht"** at the lock on the IJsbaanpad (scout's Look for line for 109): not verified, not used.
- **Tracey Emin's light work "The More Of You The More I Love You" (2017)** in the Michelangelostraat front of the OMA office at Apollolaan 171, and Xavier Veilhan's bust of Berlage (2023) at its entrance (nl.wikipedia, Michelangelostraat): a possible place or Look for lines for the Apollolaan west end.
- **Veroneseplantsoen** on the Michelangelostraat: an Amsterdam School electricity cabinet by P.L. Marnette and an "Iglo" climbing frame by Aldo van Eyck (nl.wikipedia).
- **The second Duiventil** (Piet Kramer, 1949, from the Muntplein) at the museum tram's Van Nijenrodeweg end: nl.wikipedia "Duiventil (Amsterdamse Bos)". Belongs to a museum tram place if the south slice writes one.
- **The Expositur of the Jewish Council** on the Adama van Scheltemaplein and the Jewish Council information office at Michelangelostraat 35-H (1943): not researched.
- **Documentary "Voor de nabestaanden van de fusillade op de Apollolaan" (2022)** and Frank van Kolfschooten's book on the Beethovenstraat: further reading for 152 and 153.
- **Alex van Halen** was born in the Michelangelostraat (nl.wikipedia); no house number given.

## Missing photos

- Modern girl with a pearl: nothing on Commons.
- Gerhard Badrian's stone, the Ox and Ploeger tablet, the plaque "Tijdloos is de stilte": nothing on Commons.
- Michelangelostraat 36: no photo of the house on Commons.
- Duiventil at its new spot (the two photos show it in 2018 behind the station and in 1954 at Central Station).
- De wildplasser: one photo, 2014.
- The Corellistraat stone and the names plaque of 2020 at the Verzetsgroep.
- Photos were checked by file description and date; the Minerva, Apollo and Sporthallen photos were also looked at.

## Route ideas

- **Euterpestraat to the Apollolaan (about 2 km on foot):** Badrian's stone, the two schools of round 1, the Regenerator, the Corellistraat stone, Truus Wijsmuller on the Bachplein, the Canadian pennant, De Kom and the Muzenplein children, back along the Apollolaan to the Verzetsgroep and on to Minerva at the Hilton.
- **Minervalaan axis:** Hilton and Minerva, the committee in stone at the crossing, Michelangelostraat 36, Minervaplein, then west to the shadows on the Olympiaplein.
- **Stadion side:** Schaduwen, 11 Rue Simon Crubellier, the Olympic Stadium places of round 1, the Burgerweeshuis with Volten's columns, the wildplasser, and north along the Amstelveenseweg to the Duiventil and the Haarlemmermeerstation.
