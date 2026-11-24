# Notes: slice r4-area2 (one more pass over area 2, then the open leads)

Area 2 = Apollobuurt, Stadionbuurt, Schinkelbuurt, Hoofddorppleinbuurt. Output:
`research/zuid/places/r4-area2.yaml` (5 places, validates with 0 errors, no dashes). No existing
file was edited: everything that belongs in a live place is under "Look for lines to apply".

## Item ledger, Part 1 (area 2, source by source)

### New places (5)

| Place | Rank | Category | Found through |
|---|---|---|---|
| Kabouterbrug, the cycle bridge with a hotel room on a pole | Nice | infrastructure | nl.wikipedia, Schinkel bank |
| Stadionbrug (Aldo van Eyckbrug): Krop's two figures on eight-metre posts | Okay | infrastructure | nl.wikipedia, list of sculptures, Olympic approach |
| Joep Langebrug: Krop's Hands of the Creator and a name for MH17 | Okay | infrastructure | nl.wikipedia (Beethovenstraat), list of sculptures |
| Timo Smeehuijzenbrug, the bridge a soldier crossed to school | Okay | infrastructure | nl.wikipedia (Beethovenstraat) |
| Primum movens, the heart professor's memorial that is not a bust | Okay | street-art | nl.wikipedia, list of sculptures, OSM |

Four of the five are bridges. That is what the earlier rounds left: the monument slices took
buildings, the scouts took art and memory, and bridges without a register number fell between
them. None is an Amazing; only the Kabouterbrug is more than a footnote.

### nl.wikipedia

There are no per-neighbourhood categories on nl.wikipedia for these four buurten. Instead every
article with coordinates inside them was pulled with the geosearch API (a grid of 500 m circles
over the area, 626 articles, point-checked): **164 articles** (Apollobuurt 70, Stadionbuurt 43,
Hoofddorppleinbuurt 33, Schinkelbuurt 18). Each title was matched against the drafts; the 66
without a clear match were read, plus 14 street and bridge articles without coordinates or
reached by a link (Beethovenstraat, Joep Langebrug, Brug 414, Olympiaweg, IJsbaanpad, Hoofddorpweg,
Aalsmeerweg, Westlandgracht, Woestduinkerk, Sloterkade, Schinkel, Rijnsburgstraat, Hoofddorpplein,
Jeroen Oerlemansbrug).

"Lijst van beelden in Amsterdam-Zuid": all 265 rows read again; 21 rows in area 2 had no clear
match in the drafts and were looked at.

Read and not used, with the reason:

| Article or row | Verdict |
|---|---|
| Brug 307 (Kramer, 1949–1950, orange and blue, Jaagpad) and Uiverbrug (aluminium, 2003) | Architecture with a date; no story. Not passed |
| Zeilbrug (bridge 348) and Krop's "Vissen" under it | The 1927 bascule bridge was replaced in 1999; Krop's fish survive. A Look for line at most, for "Sloterkade 142–144, the dike cottages, and the 1941 corner block" (76 m); not written, the fish could not be confirmed after the rebuilding from a second source |
| Brug 421 (footbridge at the Jasonstraat, said to be the test girder of the Utrechtsebrug) | Good line, one source (nl.wikipedia, citing a book). Left out |
| Brug 414, Annetje Fels-Kupferschmidtbrug (418), Isaac Israëlsbrug (408), Etty Hillesumbrug (409), Jeroen Oerlemansbrug (422), Brug 411, Jan Wilsbrug, Brug 695, Naaldwijkbrug | Concrete or late bridges whose only hook is the name. The Hillesumbrug (she cycled over it to her lover, sign of January 2023) is in area 1 and would be a Look for line for the Hillesum place; Oerlemansbrug is at the Beatrixpark (area 6) |
| Na-Druk-Geluksbrug (René van Zuuk, 2004–2010) | Look for line for "Olympic Stadium", below |
| Atleet en vrouwenfiguur (Altorf, marathon gate) | Altorf is already in the stadium draft |
| Hekwerk Olympiaplein (Ruud-Jan Kokke, 2008) | Kokke is already in "Schaduwen" |
| Het Nederlandsch Sportpark (the first "Stadion", 1914–1929), Olympisch Zwemstadion, Schinkelbad, IJsclubterrein Schinkel, Museum Het Broekerhuis (Amstelveenseweg 122, 1882–1887, with a maze after Hampton Court), Remise Karperweg (demolished 2024), Woestduinkerk (demolished September 2014), Victoria cinema (Sloterkade, 1934–1976) | Gone, nothing to see at the spot. Not passed. The old Stadion names the Stadionweg and the Stadionbuurt: one sentence for the stadium place if wanted |
| Frans Otten Stadion, Sporthallen Zuid, AVV Swift, Park Schinkeleilanden, Olympic Experience (closed 2014) | No story, or closed |
| Havenstraatterrein ("Vrijhaven") | A building site since March 2024. The museum tram story is in "Haarlemmermeerstation"; that draft should say the start moved to the Jollenpad in July 2024 (Scout C already flagged it) |
| Aalsmeerplein, Legmeerplein, Sassenheimstraat, Hoofddorpweg, Aalsmeerweg, Westlandgracht, Spijtellaantje | Street articles. Small things only: a transformer house with woven brickwork on the Legmeerplein, a Marnette cable cabinet under the corner of the Sassenheimstraat, the boat builder Spijdel's lane (already a lead for "Huis te Vraag") |
| Hoofddorpplein's clock tower (taken down in the 1970s, base still visible in the west wall) | One source, and the draft "Surinameplein to Hoofddorpplein: the gateway blocks" is the place for it: Look for line below, flagged as single-source |
| Breitnerstraat (Klaas Bruinsma shot beside the Hilton, June 1991) | Look for line for the Hilton, below |
| Canadezenplantsoen, Apollo Hotel, Apollolaan 171, Breughelstraat, Veronesestraat, Dijsselhofkliniek, Vanderveen (restaurant, closed) | Covered, thin or private. Apollolaan 171 gives a Look for line, below |
| De beschermer / De beschermster (Krop and Wezelaar, Apollo House) | Wezelaar and Van Hall are in the Apollo House draft |
| De rustende atleet (Havermans, ordered May 1940, placed 1951) | In the Look for list of the new Durrer place; also offered below |
| Gedenkteken Adama van Scheltema, Gedenkteken Maria Montessori, Monument Henri Viotta, Willem van Oranje (Polet), Zomer en winter (Kaas), Veroneseplantsoen | Round 1 leads; see Part 2 |
| "Mannelijk en vrouwelijk naakt" (Stadionkade), "Boog en wig" and "Klaverblad en stenen" (Apollo Schools), "Het huis aan het water", "Wave" (Zoro Feigl, Arsenal), "Enea" (Chia), Dobberproject, Guntenaar (Fred. Roeskestraat), "Man met ketting" | No story found. Not passed |

### The Schinkel bank, Overtoomse Sluis to Nieuwe Meer

22 candidates looked at: the three Schinkel bridges, bridge 307 and the Uiverbrug, the Kabouterbrug's
cabin and cube, the Schinkelhaven, the Havenstraat site and the tram sheds, Park Schinkeleilanden
and its bridges (Jan Wilsbrug, Stammenbrug), the IJsbaanpad (ice club ground, Schinkelbad, tennis
island, Sporthallen), the stadium approach (Stadionbrug, Na-Druk-Geluksbrug, marathon gate
figures, swimming stadium, the first Stadion), the Spijtellaantje yard and the clubs on the
Jachthavenweg.

- Passed: Kabouterbrug and Stadionbrug (new places), Na-Druk-Geluksbrug (Look for line).
- Boat yards, rowing and sailing clubs: nothing with a story turned up. The clubs on the
  Jachthavenweg (WSV De Schinkel at no. 140, De Hoop at no. 42) have no history online that a
  visitor could check, and the Jachthavenweg lies south of the A10, outside area 2. Spijdel's
  boat yard of 1885 survives only as the name Spijtellaantje.
- 1928 traces outside the stadium: none beyond what is live (Olympiahuisje, the Van Tuyll
  monument, the Olympiaplein training ground under "Schaduwen", the Marathonweg reliefs).
  The swimming stadium, fencing hall and power-sports hall were temporary and are gone without a
  marker.

### Stadionbuurt gateways and reliefs

The second artist of the 2006 repair project was **not found**. nl.wikipedia's article on Katzir's
work says only "one of two artists asked"; its source is Het Parool, 7 August 2017 (Blikvangers),
not online in full. A web search gave nothing. Iris Le Rütte's "Hazentafel" (about 2006) was
checked as a candidate: it stands in the Dufaystraat (area 1), is a neighbourhood table and no
source ties it to the project. The eleven gateway reliefs in the city's art list (Kaas,
IJzerdraat, Trapman, Hassoldt, Werner, Vreugde, Sieger, Smout) were looked at again: building
ornament, no stories. 4 candidates, 0 passed.

### Hoofddorppleinbuurt

13 candidates (squares, the Sloterkade, Rijnsburgstraat, the Westlandgracht edge, Woestduinkerk
and the Pro Rege chapel, the Victoria cinema, "De Tweeling" by Nel van Lith, a glass work at
Theophile de Bockstraat 8, schools). 0 passed. The Woestduinkerk (the Vrije Universiteit's hall
for doctoral ceremonies from 1956 to 1973) was demolished in 2014; the Pro Rege chapel is homes;
"De Tweeling" was moved off the pavement into a schoolyard according to the art list; the
neighbourhood's own stories (Sloten's tram, the tollgate, the ferry house) are told in the live
Sloterkade and Jacob Marisplein places.

### Apollobuurt

20 candidates. 3 passed as places (Joep Langebrug, Timo Smeehuijzenbrug, the Durrer memorial),
4 as Look for lines (Hilton, Minervalaan crossing, Minervalaan and Minervaplein, Apollolaan west end).

- **The Parkkerk is not in Zuid.** The lead put it on the Gerrit van der Veenstraat. The church
  Geelkerken's followers kept is the Parkkerk at Gerard Brandtstraat 26–28, on the West side of the
  Vondelpark, today the Orgelpark, and it is already live as "Parkkerk (Orgelpark)" (West round,
  `research/west/places/vondelpark.yaml`). The pair exists; it only needs a cross-reference. See
  the line for the Schinkelkerk below and "Conflicts".
- Beethovenstraat: the two bridges at its ends are the finds. Fien de la Mar's jump of 18 April
  1965 has no house number in any source read. Shops with history, the tram and the wartime street
  are the subject of Frank van Kolfschooten's two books (1997, 2015), not online; the raid stone at
  Corellistraat 27 and the Regenerator are live.
- Private houses: nothing with a marker beyond what is live. Left out on purpose: the Durrer
  family's address, a television presenter's childhood home, the small clinic on the
  Dijsselhofplantsoen.

### 4en5mei.nl and Stolpersteine

- 4en5mei: Scout A's download was reused. **14 records** lie in area 2; all are in a draft as a
  place or a Look for line, or are indoors (Willem de Zwijgerkerk). The plaque for Gerrit van der
  Veen at Gerrit van der Veenstraat 134 (record 3645) was not found in any draft by house number;
  it is a small white plate with his dates and would be one Look for line for "Botticellistraat,
  Leonardostraat and the Aeneas Mackay school" (105 m). Not written: location on the building not
  confirmed.
- Stolpersteine: nl.wikipedia's list for Zuid has **123 stones** in area 2 (Apollobuurt 74,
  Stadionbuurt 46, Hoofddorppleinbuurt 3). Four belong to people with a public story:
  Frits Boverhuis (Rubensstraat 26: Look for line below), the Concertgebouw violinist Simon Fürth
  (Argonautenstraat 12), the resistance man Jacques Zillesen (Amazonenstraat 56, one of the 29
  shot on the Apollolaan) and the singer Luisa Treves (Rubensstraat 8, survived). The last three
  are single stones far from any live pin: not passed as places.

### OSM Overpass

One query over the box (historic, artwork, museum, attraction, man_made, place_of_worship, named
parks and gardens, memorial, club), point-checked: 282 features in area 2 after dropping cameras,
manholes and flagpoles. About 20 named features without a match were looked at (the bridges
above, "Fanny Blankers-Koen" memorial, "Kruidentuin", "cows, Theophile de Bock", "Verladers" by
Krop at the Overtoomse Sluis, Parkeiland). 0 new beyond the finds above: the Blankers-Koen stone
is already named in `r2-apollo.yaml`, the Kruidentuin is a planted corner
of the Van Tuyll van Serooskerkenplein without a story, "Verladers" stands on the West side of
the lock.

## Look for lines to apply

Each line is verified from the sources named. Exact title and file given.

**1. "Schinkelkerk, the church that changed hands over a talking snake"** (`r3-gaps.yaml`)
- EN: `- the other half of the story is across the Vondelpark: Geelkerken's followers kept the Parkkerk on the Gerard Brandtstraat, now the Orgelpark`
- NL: `- de andere helft van het verhaal ligt aan de overkant van het Vondelpark: de volgelingen van Geelkerken hielden de Parkkerk aan de Gerard Brandtstraat, nu het Orgelpark`
- Source: https://nl.wikipedia.org/wiki/Orgelpark (Parkkerk, built 1916–1918, the congregation went over with him to the Hersteld Verband). See "Conflicts" before applying.

**2. "Hilton Amsterdam, on the plot Berlage kept for a palace"** (`apollo-b.yaml`)
- EN: `- the Breitnerstraat beside the hotel, where the drug baron Klaas Bruinsma was shot dead in June 1991`
- NL: `- de Breitnerstraat naast het hotel, waar drugsbaron Klaas Bruinsma in juni 1991 werd doodgeschoten`
- Sources: https://nl.wikipedia.org/wiki/Hilton_Amsterdam_Hotel and https://nl.wikipedia.org/wiki/Breitnerstraat (two articles, one source family; no marker on site).

**3. "Minervalaan and Minervaplein, the avenue to a station that came late"** (`apollo-a.yaml`)
- EN: `- where the avenue meets the square: Jan Havermans's bronze "De rustende atleet" (the resting athlete), ordered in May 1940 and placed in 1951, and on the south-east corner the steel loop for the cardiologist Dirk Durrer`
- NL: `- waar de laan op het plein uitkomt: het brons 'De rustende atleet' van Jan Havermans, in mei 1940 besteld en in 1951 geplaatst, en op de zuidoosthoek de stalen lus voor cardioloog Dirk Durrer`
- Sources: https://nl.wikipedia.org/wiki/De_rustende_atleet , https://buitenkunstamsterdam.nl/kunstwerken/bekijk/1906

**4. "Minervalaan crossing: the committee in stone"** (`apollo-a.yaml`)
- EN: `- the Veroneseplantsoen, the mirror image of the Adama van Scheltemaplein west of the avenue: an Amsterdam School electricity cabinet by P.L. Marnette on its north side and an igloo climbing frame by Aldo van Eyck on the east`
- NL: `- het Veroneseplantsoen, het spiegelbeeld van het Adama van Scheltemaplein aan de westkant van de laan: aan de noordzijde een elektriciteitskast in Amsterdamse Schoolstijl van P.L. Marnette en aan de oostkant een iglo-klimrek van Aldo van Eyck`
- Source: https://nl.wikipedia.org/wiki/Veroneseplantsoen (photos of November 2019; named in 2017). One source: check on site that the igloo still stands.

**5. "Apollolaan, west end: Rafael's animals and a kennel by Rutgers"** (`apollo-b.yaml`)
- EN: `- at the door of no. 171, the new office by OMA: a bronze Berlage at his drawing board by Xavier Veilhan (unveiled 12 December 2023), made by scanning an actor dressed as the architect; inside, visible from the street, Tracey Emin's pink neon "The more of you the more I love you" (2017), kept from the building that stood here`
- NL: `- bij de deur van nr. 171, het nieuwe kantoor van OMA: een bronzen Berlage aan de tekentafel van Xavier Veilhan (onthuld op 12 december 2023), gemaakt door een acteur in te scannen die als de architect was gekleed; binnen, vanaf de straat te zien, het roze neon 'The more of you the more I love you' van Tracey Emin (2017), meegenomen uit het gebouw dat hier stond`
- Sources: https://www.apollolaan171.com/art/ (owner, on the Berlage sculpture and the scanned actor), https://nl.wikipedia.org/wiki/Hendrik_Petrus_Berlage_(beeld) , https://nl.wikipedia.org/wiki/The_more_of_you_the_more_I_love_you

**6. "Gerhard Badrian's stone, Rubensstraat 26"** (`r2-apollo.yaml`)
- EN: `- in the pavement at no. 26: the Stolperstein for Frits Boverhuis, who led the forgery centre with Badrian, was arrested here with him and was shot in the dunes at Overveen on 16 July 1944`
- NL: `- in de stoep voor nr. 26: de struikelsteen voor Frits Boverhuis, die met Badrian de Persoonsbewijzencentrale leidde, hier tegelijk met hem werd gearresteerd en op 16 juli 1944 in de duinen bij Overveen werd gefusilleerd`
- Sources: https://nl.wikipedia.org/wiki/Frits_Boverhuis , https://nl.wikipedia.org/wiki/Lijst_van_Stolpersteine_in_Amsterdam-Zuid (inscription and photo), https://www.erelijst.nl/frits-reinder--boverhuis (cited there)

**7. "Olympic Stadium"** (`stadion.yaml`)
- EN: `- the white bridge behind the stadium (René van Zuuk): it is named Na-Druk-Geluk after the farm that was pulled down for the stadium`
- NL: `- de witte brug achter het stadion (René van Zuuk): ze heet Na-Druk-Geluk, naar de boerderij die voor het stadion werd afgebroken`
- Sources: https://www.bruggenvanamsterdam.nl/stadionkade.htm , https://nl.wikipedia.org/wiki/Na-Druk-Geluksbrug

**8. "Merwedeplein, the Frank family's square"** (`rivieren-noord.yaml`)
- EN: `- four Stolpersteine in the pavement at no. 37, for Otto, Edith, Margot and Anne Frank; Otto's ends with the word "overleefd", survived`
- NL: `- vier struikelstenen in de stoep voor nr. 37, voor Otto, Edith, Margot en Anne Frank; die van Otto eindigt met het woord 'overleefd'`
- Sources: https://nl.wikipedia.org/wiki/Lijst_van_Stolpersteine_in_Amsterdam-Zuid (four rows with inscriptions and Commons photos), OpenStreetMap (52.345348, 4.900865)

**9. "VU main building: the concrete cliff a wallcreeper took for a mountain"** (`r2-c-south.yaml`)
- EN: `- four hundred metres west, where the hospital is built over the De Boelelaan: "De hechtsteek" (the suture, Jan Jacobs Mulder, 1984–1985), three blue steel ribbons that stitch the hospital to its outpatient clinic across the road`
- NL: `- vierhonderd meter naar het westen, waar het ziekenhuis over de De Boelelaan is gebouwd: 'De hechtsteek' (Jan Jacobs Mulder, 1984–1985), drie blauwe stalen linten die het ziekenhuis over de weg heen aan de polikliniek hechten`
- Sources: https://nl.wikipedia.org/wiki/De_hechtsteek (repainted 2018), https://buitenkunstamsterdam.nl/kunstwerken/bekijk/840 . Distance and direction are from the article's coordinates (52.335056, 4.860428) against the place's pin.

**10. "Surinameplein to Hoofddorpplein: the gateway blocks"** (`schinkel.yaml`), only if a second source is found
- EN: `- the stump of the Hoofddorpplein's clock tower in the west wall of the square: the slender tower was taken down in the 1970s`
- NL: `- de aanzet van de klokkentoren in de westwand van het Hoofddorpplein: de slanke toren werd in de jaren zeventig afgebroken`
- Source: https://nl.wikipedia.org/wiki/Hoofddorpplein (with a photo of 1933). Single source.

## Item ledger, Part 2 (open leads, all of Zuid)

Read: the "Leads" section of all 25 notes files and "Leads for other scouts" in the three scout
files. About 190 separate leads. Each was grepped against the drafts; roughly half are on the map
by now (a place or a Look for line). The rest are below. "Researched now" means sources were
opened in this pass; the others are decided on the evidence the lead itself carries.

### The named leads (researched now)

| Lead | Verdict |
|---|---|
| The Parkkerk (r3-gaps) | Wrong address in the lead: it is in West and live. Look for line 1 |
| Stadionbuurt gateways, the second artist (r3-gaps) | Not found; see Part 1 |
| "De hechtsteek" on the hospital bridge (r3-gaps) | Look for line 9. Not its own place: one idea, one sentence |
| Victor Ash's bull on De Boel, De Boelelaan (r3-gaps) | Does not pass. It is there: painted 2015, eight storeys, after Wall Street's Charging Bull; the block was renovated 2014–2016 for Vesteda and the bull kept (Commons photo of November 2018). But it is a landlord's emblem with no story, the newest evidence is 2018, and no live place is near enough to carry a line |
| The Pipsqueak painting on De Boel (r3-gaps) | Does not pass: one sentence on nl.wikipedia (summer 2022), no photo found |
| Amstelveenseweg 852 and 1086–1088 (r3-gaps) | Does not pass yet. No. 852 is still in the national address register; no demolition notice, photo or description of the houses was found. Needs someone to look. If they stand: one Okay place with `outlook: Demolition planned` |
| War graffiti, Pieter Aertszstraat 94 (r2-rivieren-b) | Does not pass: TracesOfWar only (it refuses automated readers), "presumed 1945", "much worn". Nothing else found |
| Frank family Stolpersteine, Merwedeplein 37 (r2-rivieren-a) | Look for line 8: second source found |
| Marte Röling's lips, Sporthallen Zuid (r2-apollo) | Does not pass: nl.wikipedia speaks of them in the past tense ("waren voorzien van"); no evidence that any survive |
| Poggenbeekstraat crowned W's (r2-pijp-b) | Does not pass: one source (De Pijp Krant, 2020), no house number, no photo, search found nothing |

### Leads in area 2 (researched now where marked)

| Lead | Verdict |
|---|---|
| Gedenkteken Prof. Durrer (apollo-a) | New place (researched now) |
| Veroneseplantsoen: Marnette cabinet and Van Eyck igloo (apollo-a, r2-apollo) | Look for line 4 |
| Tracey Emin's neon and Veilhan's Berlage, Apollolaan 171 (r2-apollo) | Look for line 5 (researched now) |
| Minervapaviljoen / Muzieklyceum (apollo-a, Scout C) | Does not pass: gone since 1974, nothing on site. The nine fires are one sentence for "Albert Hahnplantsoen 21–27" if wanted |
| Albert Hahnplantsoen 14 (apollo-a) | Does not pass: private house, one source, a family that is not public |
| Dijsselhofplantsoen gable stones (apollo-a) | Thin. One Look for line for "Rutgers at home" at most: "at no. 6 Jaap Kaas's sleeping cat by the door and an 18th-century herring-boat stone from the Westerstraat above it" (https://nl.wikipedia.org/wiki/Zomer_en_winter). Offered, not required |
| Albrecht Dürerstraat 20, Theo Vos (apollo-a); Theo Vos gable stones, Beethovenstraat 11–27 (apollo-b) | Building ornament, no story. Not passed |
| Gedenkteken Maria Montessori and the two "Vrede" tiles, Corellistraat 1 (apollo-b) | Does not pass as a place: a girl with a bird (Gerarda Rueter, ordered 1953, placed 1955), one fact. A Look for line for "The old conservatory, the Bachzaal and the Montessori school" (35 m): `- by the school at Corellistraat 1: Gerarda Rueter's bronze girl with a bird (1955), the city's memorial to Maria Montessori, who died in 1952` / `- bij de school aan de Corellistraat 1: het bronzen meisje met vogel van Gerarda Rueter (1955), het gedenkteken van de stad voor Maria Montessori, die in 1952 overleed` (https://nl.wikipedia.org/wiki/Gedenkteken_Maria_Montessori ; https://buitenkunstamsterdam.nl/kunstwerken/bekijk/1992) |
| Art & Project, Richard Wagnerstraat 8 (apollo-b) | Does not pass: a former gallery, no trace |
| Former trade union building, Herman Heijermansweg 18–20; Schouwenhoek, Apollolaan 193–197 (apollo-b) | Unlisted buildings without a story. Not passed |
| Fien de la Mar (apollo-b) | Does not pass: no address in any source |
| Expositur of the Jewish Council, information office Michelangelostraat 35-H (r2-apollo) | "Expositur" is named in two drafts. No trace at either address: not passed |
| Alex van Halen's birth street (r2-apollo) | Not passed: no house number |
| The second Duiventil at the Van Nijenrodeweg (r2-apollo) | Named in the Buitenveldert drafts; no change |
| South Citroën building, Stadionplein 24–28 (stadion) | Stays a lead, and the strongest one left in area 2: Wils's second garage (1929–1931), not found by name in the drafts. It needs the register text to settle whether it is listed and its use in 2026. Not written here: no fresh evidence was gathered |
| Slinky, Tripolis 300 (stadion) | Not passed: state after the rebuilding unknown |
| Geert Groote School, Febo booths, passage under the Lyceumbrug (stadion) | Thin, gone, or not visible. Not passed |
| Airstrip Amsterdam 1945; the stadium tram loop (Scout B) | Gone. nl.wikipedia now says the loop's points were locked after derailments: nothing to add |
| Kruidentuin, Stadionbuurt (Scout B) | Looked at through OSM: no story |
| Cocaine factory beside the smithy, Eerste Schinkelstraat (schinkel) | Not passed: one source (De Binnenpret's page), gone |
| Rimon Guimarães's mural, Havenstraat 12–14 (schinkel, Scout A) | Not passed: 2012, on the edge of the cleared Havenstraat site; state unknown |
| Albert J. Kramer, "the tallest man", café at the Theophile de Bockstraat (schinkel) | Not passed: no address, no year, no trace |
| Chapel Pro Rege (schinkel) | Not passed: homes behind a gate since 2020 |
| Huis te Vraag extras: Van Teylingen's stone and urn (schinkel) | A Look for line for "Huis te Vraag" if not there yet; from nl.wikipedia only, not re-read in this pass |
| Old people's home at the Klokkenhof (schinkel) | Not passed: state unchecked, no story |

### Leads elsewhere in Zuid (decided on the evidence in the lead)

| Lead (notes file) | Verdict |
|---|---|
| Willem Spark, the composer who never existed (museum-a) | Still the best unwritten line in area 1: a sentence for a Willemsparkweg place. One source; not passed here |
| Villa Parkwijck "De Theepot", Max Möller, Zuidwyck, Banstraat garages, Cornelis Schuytstraat 74 (museum-a) | Gone, thin or private. Not passed |
| Vossiusstraat 16, the Yandex founder's squatted house (museum-b) | Not passed as a place: the squat ended in 2024 and the house was sold in parts; a sentence for a Vossiusstraat draft |
| Haitink's birthplace, Zuidermarkt, CIZ at Jacob Obrechtstraat 92 (museum-b) | No marker, a weekly market, and a building that may be in another draft under another name. Not passed |
| "Rode Wachter" (museum-c) | Not identified. Not passed |
| Jan Luijkenstraat tile panels at 37, 47, 60 (museum-c) | Would make one Okay place ("tile pictures of the Jan Luijkenstraat") if someone confirms all three on site; from nl.wikipedia only. Not passed now |
| Gas explosion of 21 December 1987, Veiligheidsinstituut, Radio Stad (museum-d) | Nothing to see, or told elsewhere. Not passed |
| Former bathhouse Eerste Sweelinckstraat 10, Ferdinand Bolstraat 168 (Jugendstil front with two tile panels), "Vlaamse Jet", Liefdesbruggetje (oudepijp) | Bolstraat 168 is the only one with something to see; one source, thin. Not passed |
| Govert Heikoop's sculpture, Tolstraat (pijp-zuid) | No story. Not passed |
| Hemonystraat play street (r2-c-north) | Unsettled as before: needs Delpher or the image bank. Not passed |
| De Goede Herder, closure for worship (r2-c-south) | A status note for the Pinksterkerk draft once sourced. Not a place |
| Bulgar Time cube (r2-pijp-a) | Question for the city's art collection. Not passed |
| Koninginneweg 184, stay-behind office (r2-museum) | One source. Not passed |
| Legacy Art Court, Museumplein (r2-museum) | Temporary ground painting of July 2026. Not passed |
| Armando's birthplace, Jan Lievensstraat 52 (r2-pijp-b) | No plaque. Not passed |
| Dirk Müller's stone sculpture, Schultsz's date stones, Havermans's "Waternimf" (r2-rivieren-a) | No stories. Not passed |
| Gerrit van der Veen's house, Zomerdijkstraat 22 (r2-rivieren-a) | Already there: the draft's Look for list has "the plaque for Gerrit van der Veen by Fred Carasso at no. 22" (`rijnbuurt.yaml`) |
| Pjotr Müller's "Cabane", Josje Smit's dog and dromedary (r2-south) | Amstelpark and Gijsbrecht van Aemstelpark small works: lines in those places at most. Not passed |
| Zorgvlied extras: Gebroken Kolom, Gordel van Smaragd, 't Lalibellum (rijnbuurt) | Look for lines for the Zorgvlied place; nl.wikipedia only, not re-read |
| "De Hulk" (Levensboom), school at Victorieplein 11 with Rädecker's animals, King Kong by Frankey (rivieren-noord) | The first two are Look for material for the Victorieplein draft; King Kong needs a 2026 sighting. Not passed as places |
| Dairy shop interior, Borssenburgstraat 33; Borssenburgschool; Amsterdamse Grafische School (rivieren-noord) | Unconfirmed today, or without a story. Not passed |
| Sotheby's, the San Luchesio stone, "De kleine Nicolaas" (willemspark-a) | Thin. Not passed |
| "Verticale compositie" (Zweerus, Valeriusplein) (willemspark-b) | A Look for line for "Valeriusplein toilet buildings" or the Lyceum draft: his first work in poured concrete (https://nl.wikipedia.org/wiki/Verticale_compositie). Not a place |
| Koningslaan 58–60 (Gerzon's villa, German intelligence and Gestapo offices in the war) (willemspark-b) | The one unlisted house among these leads with a real story, but one source and no marker. Not passed; worth a second source in a later round |
| Koningslaan 42–44, 66–70, Jan van Goyenkade 1–2, Valeriuskliniek, De Steenhoek, Lutherse Diakonessen Inrichting (willemspark-b) | Private, gone, or one source. Not passed |
| Han van Zomerenbrug plaques, Corellistraat 6 (CS-6), Stolpersteine at Van Woustraat 174 and Boterdiepstraat 35 (Scout B) | Zomerenbrug: three plaques for a printer shot in 1941 would pass if confirmed on the rebuilt bridge; not found in the drafts and not researched in this pass. Stays a lead. The others: no marker, or single stones |
| Rijnbar, Tuinpark Amstelglorie (Oost), Pelgrimskerk (demolished 2024) (Scout C) | Not Zuid, or gone |

**Result of Part 2:** 0 new places; 4 Look for lines verified and written out (Parkkerk, Frank
Stolpersteine, De hechtsteek, Apollolaan 171) plus 3 offered inside the tables (Dijsselhofplantsoen 6,
Montessori memorial, Verticale compositie); two leads kept open because they could pass with one
more look (South Citroën building, Han van Zomerenbrug).

## Conflicts and uncertainties

- **Where and when Geelkerken preached.** nl.wikipedia "Orgelpark" says the sermon was preached in
  the Parkkerk in 1923; nl.wikipedia "Johannes Geelkerken" dates it 23 March 1924 and names no
  church; Arcam says the Schinkelkerk. The live West place "Parkkerk (Orgelpark)" follows the first
  ("suspended in 1923"), the Schinkelkerk draft the second date. The two live places now disagree
  on the year. The Schinkelkerk draft already leaves the place of the sermon out; the West place
  should be checked against a church history before the cross-reference goes in.
- **Kabouterbrug, when the keepers left.** SWEETS hotel says the cabin housed keepers "from 1974 to
  2017"; Bruggen van Amsterdam has it in use as a meditation room in 2015 and nl.wikipedia says the
  keeper went "soon" because the bridge was worked from the neighbouring bridges. Left out. The
  suite date is 2017 in two sources and 2018 on nl.wikipedia: 2017 used.
- **Kabouterbrug, the Kabouters' role.** That the movement pressed for this bridge rests on the
  name giver (NH Nieuws, Bruggen van Amsterdam); the city's notice gives the name without the
  reason. The text says the neighbour proposed it "because" of that, which is what the sources bear.
- **Stadionbrug.** nl.wikipedia calls the man both a sluice worker and a bridge keeper, the art
  register "a man with apples and a tool": the text gives what is seen and says how he is read.
  The article sits in the category of national monuments but its infobox says "orde 2" and the
  bridge is not in the city register download: no heritage fields set. The art register's point for
  this work lies 500 m too far north.
- **Timo Smeehuijzen.** The date and place of his death (15 June 2007, suicide attack on patrol in
  Tarin Kowt) come from Bruggen van Amsterdam and from search summaries of TracesOfWar and a
  government letter; TracesOfWar itself returns 403 to scripts. The ferry that is said to have run
  here before the bridge is on nl.wikipedia only and was left out.
- **Durrer memorial.** The nickname "bypass" is on nl.wikipedia only: left out. The art register's
  reading (aorta) and the sculptor's (cardiogram lines) are both given.
- **Pins.** Joep Langebrug is pinned on Krop's "Handen van de schepper" (OSM node), the Timo
  Smeehuijzenbrug between the two OSM ornament nodes, the Durrer memorial on its OSM node. The
  Stadionbrug pin falls in sub-neighbourhood Zuidas by the boundary file (the south bank), borough
  Zuid.

## Leads

- **South Citroën building** (Stadionplein 24–28, Jan Wils, 1929–1931): see Part 2. The one
  building in area 2 that may still deserve a place.
- **Han van Zomerenbrug** (bridge 402): three plaques for the printer shot in 1941.
- **Het Parool, 7 August 2017** (Blikvangers, Jan Pieter Ekker): names the second artist of the
  Stadionbuurt project.
- **Frank van Kolfschooten, "De Beethovenstraat: verborgen geschiedenissen" (2015)**: the source for
  shops, the tram and the wartime street; a reader with the book could add two or three places.
- **The "Korrelbrug"**: Bruggen van Amsterdam calls a bridge near the Joep Langebrug "a symbol for
  the vanished shopkeepers". Which bridge, and whether there is a story, was not looked up.
- **Etty Hillesumbrug** (bridge 409, Emmastraat to Willem Witsenstraat): named 2022, sign and
  information board of 23 January 2023; her diary describes cycling over it. A Look for line for
  the Hillesum place in `museum-c.yaml`.
- **Amstelveenseweg 852, 1086–1088**: a site look.

## Missing photos

None missing: all five places have Commons photos, checked on their pages and by eye (thumbnails).
Newest photo dates: Kabouterbrug May 2020 (and a news photo of September 2026, not free);
Stadionbrug June 2016; Joep Langebrug May 2018 (no photo with the nameplate of 2022); Timo
Smeehuijzenbrug January 2019; Durrer memorial November 2018. No Commons category exists yet for
the Veroneseplantsoen or the works at Apollolaan 171.

## Route ideas

- **The Beethovenstraat between two names** (1.1 km): Timo Smeehuijzenbrug, the execution site
  "Verzetsgroep", the Regenerator, the raid stone at Corellistraat 27, Muzenhof, Joep Langebrug,
  and on into the Beatrixpark.
- **Krop on Kramer's bridges, south side** (by bike): Timo Smeehuijzenbrug (seals and snakes),
  Lyceumbrug, Parnassusweg bridge ("Ode aan Berlage"), Joep Langebrug, Kinderbrug and Hildo
  Kropbrug at the Muzenplein, Stadionbrug.
- **Down the Schinkel**: Aalsmeerder Veerhuis, Kabouterbrug, Schinkelkerk and OCCII, Zeilbrug,
  Huis te Vraag, the Schinkel islands, Nieuwe Meersluis.

## Saturation

| Source | Candidates looked at | Passed as new place | Passed as Look for line |
|---|---|---|---|
| **Part 1** | | | |
| nl.wikipedia, articles located in the four buurten (164 matched against drafts; 80 read) | 80 | 5 | 5 |
| nl.wikipedia, "Lijst van beelden in Amsterdam-Zuid" (265 rows; 21 unmatched rows in area 2) | 21 | 0 new (3 of the 5 above are in the list) | 0 new |
| Schinkel bank, Overtoomse Sluis to Nieuwe Meer, and the Olympic leftovers | 22 | 2 (Kabouterbrug, Stadionbrug; counted above) | 1 (Na-Druk-Geluk; counted above) |
| Stadionbuurt gateways and reliefs | 4 | 0 | 0 |
| Hoofddorppleinbuurt | 13 | 0 | 0 (1 single-source line held back) |
| Apollobuurt (Parkkerk, Beethovenstraat, Stadionweg, canal banks, houses) | 20 | 3 (Joep Langebrug, Timo Smeehuijzenbrug, Durrer; counted above) | 4 (counted above) |
| 4en5mei.nl (14 records in area 2) | 14 | 0 | 0 |
| Stolpersteine (123 stones in area 2, 4 with a public story) | 4 | 0 | 1 |
| OSM Overpass (282 features in area 2, about 20 unmatched named ones) | 20 | 0 new | 0 new |
| City art list, re-checked from Scout A's download (104 records in area 2) | 104 | 0 new | 0 new |
| **Part 1 total, without double counting** | about 150 distinct candidates | **5** (1 Nice, 4 Okay, 0 Amazing) | **6** |
| **Part 2** | | | |
| Named leads | 10 | 0 | 3 |
| Other open leads not yet on the map (about 85 of some 190 leads read) | 85 | 0 (the Durrer lead became a Part 1 place) | 2 written out, 3 offered |
| **Part 2 total** | about 95 | **0** | **4 written out, 3 offered** |

Reading: area 2 gave 5 new places out of about 150 candidates (about 3%), none above Nice, four of
them bridges that fell between the monument slices and the art scouts. On the 77 drafted places
that lie in the four buurten that is about 6%, under the 10% line in COVERAGE.md. The open leads gave no
place at all. Two leads could still pass with evidence that was not gathered here (South Citroën
building, Han van Zomerenbrug).
