# Marineterrein: five new places and a patch for the existing place

Brief: `research/a-list/BRIEF-MARINETERREIN.md`. Scout: `research/a-list/SCOUT-MARINETERREIN.md`.
Outputs: `research/a-list/places/marineterrein.yaml` (5 places, validator 0 errors) and
`research/a-list/marineterrein-existing-patch.json` (a `dc update` patch for mqhz13s7x8994o1wovg0en78,
checked with `--dry-run` only; nothing written to the live site). No `a_list` and no `rank` on any place.
Dutch was written from the Dutch sources; an 8-word-run check against every fetched source text found no
shared runs (except the memorial line that was already on the live place). No em dashes.

Fetched with curl (UA deep-cities-research/0.1). The marineterrein.nl timeline (/verhalen/) and the
Omba Pikul page (403 to curl) were read in a BrowserOS tab, closed afterwards. No iamsterdam.

## New places

All five should become children of the ensemble "Marineterrein and the Dijksgracht" (kxtuc6i8msgw5cycla8tfkit).

1. **Binnenhaven, the Marineterrein's swimming harbour and water lab** (green), pin on the OSM swimming area
   (way 872690587). Sources: marineterrein.nl news (official swimming spot, April 2025); /experimenten/
   dobbernatuur, de-oloide-beweging (2 April 2026), een-schuilplek-voor-onderwaterleven (MOSES, 30 modules),
   the-great-bubble-barrier.
2. **De Weger's navy campus** (civic), pin on building 006 (city register point, RD to WGS84). Sources: the 2018
   Cultuurhistorische verkenning (Aardse/MenA) for 006, 027, 028 and De Weger; city register 230002 to 230004
   (listed 8 July 2025, F.C. de Weger, 1962 to 1966); AT5 233547; Arcam on 027E (pilotis, SLA's EU-flag slats);
   marineterrein.nl 10-jaar (027E facade 2016, EU presidency 2016); nl.wikipedia.
3. **Beta berlayar jauh, the Moluccan marines' monument** (hidden-history). Sources: marineterrein.nl
   onthulling-moluks-monument; NH Nieuws 359370 (fourteen marines, 3,500 soldiers, temporary stay);
   Stadscuratorium advice SCA.26.40 (title, corten-steel slats showing a marine or a Moluccan warrior, steel as
   a reference to the ships, Voorwerf); Omba Pikul (translation "Ik vaar ver heen", the words on the monument).
4. **The marechaussee's black box** (civic), pin on the OSM node "Marechaussee-kantoor". Sources: Arcam
   (1,750 windows, same dimensions as the Scheepvaartmuseum, look out but not in, Realisatie 2008, client
   Dienst Vastgoed Defensie); Archined Feb 2010 (moved in "last year", riot shield image, inner court);
   2018 survey (014, "opgeleverd 2005").
5. **The ship carpenters' workshop and the Scheepskameel** (industrial), pin on the OSM restaurant node (40 m
   from the register point). Sources: city register 230005 (1878, listed 2025); 2018 survey (024, around
   1860, parallel to the old quay, one of the few buildings left from 's Lands Werf, later TOKM);
   marineterrein.nl 10-jaar (restaurant opened May 2016, named after Bakker's 1690 invention);
   marineterrein.nl timeline (de-scheepskameel); nl.wikipedia Scheepskameel (April 1690, Princes Maria, annual
   pension, "voor Pampus liggen"); scheepskameel.nl (open Tue to Sat from 18:00).

## Changes to the existing place (mqhz13s7x8994o1wovg0en78)

The patch changes `body`, `translations.nl.body`, and adds `attributes.outlook`, `outlook_when`,
`outlook_note` and their Dutch text in `translations.nl.attributes`. The summary, links, other attributes and
photos stay the same. All sourced content of the old text is kept. Every change:

1. **Bijltjesdag added** (scout item 16): the Orangist shipwrights (Bijltjes) sealed off Kattenburg on 30 May
   1787 until the Patriots took the bridge. Sources: marineterrein.nl timeline; nl.wikipedia Bijltjesoproer.
2. **Van Gogh line changed** (item 15). The old text said he lived with his uncle "in a house that is gone".
   I found a second, independent source: the bronze plaque on the Poortgebouw (Commons photos
   File:Poortgebouw plaque Van Gogh.jpg, read from the image; File:Poortgebouw plaque Van Gogh (2024).jpg says
   it was unveiled in 1991 by Ed van Thijn), which reads "Vincent van Gogh woonde hier van mei 1877 tot juli
   1878 bij zijn oom Johannes van Gogh, commandant van de marine". Together with the marineterrein.nl letting
   ad of 17 July 2026 (the office in gebouw 003 is in the part of the building where he stayed), that
   contradicts "a house that is gone". I removed "in a house that is gone", added the exact months and the
   uncle's first name from the plaque, and added the plaque as a Look for line. I did **not** write that he
   lived in building 003 itself. nl.wikipedia still says he lived in the commander's house, at "the corner next
   to the Scheepvaartmuseum where the commander's house used to be". **Uncertain; worth a check against the
   Van Gogh letters (letters 117 to 143, Amsterdam 1877 to 1878) before publishing.**
3. **Cold War shelter added** (item 7): the 350-man nuclear shelter under barracks 029; Heemschut asked for it to
   be listed and the city postponed the decision. Sources: AT5 233547, marineterrein.nl meer-monumenten,
   marineterrein.nl timeline (bunkers after the Cuba crisis). The outcome of the 2025 decision was not found.
4. **Het Paleis added** (item 16): towered brick block on the dock's south dike, demolished 1968. Sources:
   marineterrein.nl timeline (name, towers, south dike); nl.wikipedia gallery caption ("in 1968 gesloopt huis
   voor marine-officieren"). The timeline says it housed the directie, the wiki says navy officers: left out.
5. **"Geheim" added** (item 12): crown witnesses and threatened politicians sheltered, site blurred on satellite
   photos (marineterrein.nl timeline); Ayaan Hirsi Ali early 2005 (nl.wikipedia). No claim about present use.
6. **Building numbers added** (item 11): no street names, number boards 001 to 039 since 2019. Sources:
   marineterrein.nl navigeren-op-nummer, 10-jaar (April 2019).
7. **Salute added** (item 6): 21 blank shots, five seconds apart, heard across much of the city, for Finland's
   president on 11 December 2025. Sources: marineterrein.nl (Finland, Japan), AT5 235932 (independent: Defence
   fires the salute from the Marineterrein). Parool also reported the June salute for the Japanese emperor
   (headline only, paywalled).
8. **Test-ground line added** (item 22): harbour and helicopter field used to test robots and drones
   (marineterrein.nl letting ad, July 2026). The Innovatie Paviljoen tours (page from 2024) and Smart Roof 2.0
   were left out as possibly stale.
9. **Pointer line to the five new places** added, one clause each.
10. **Look for, gate expanded** (item 4): the pediment carries the Admiralty's arms and shipbuilding tools
    (marineterrein.nl timeline "poort-open"; register 2206: pilasters, carved frieze and pediment).
11. **Look for, 1982 gate added** (item 4): the 12 m opening sawn through the wall for Benthem Crouwel's main
    gate (2018 survey, quoting the architects). The masts are gone (survey), so they are not mentioned.
12. **Look for, Van Gogh plaque added** (see 2).
13. **Look for, fountain added** (item 18): Arthur Spronken, 1995, on the Voorwerf. Sources: 2018 survey
    ("fontein uit de jaren '90 van de kunstenaar A. Spronken"); Commons File:Fontein met boegbeelden.JPG
    ("van Arthur Spronken 1995 op de Voorwerf"). OSM describes four female figures spraying water over a globe;
    left out as OSM-only.
14. **Look for, Muurbos added** (item 9). **Scout corrected:** the Muurbos is not on the Kattenburgerstraat
    wall but on building 27 (500 m², more than a hundred native climbers; Weerproof Geveltuin Award 2026).
    Source: marineterrein.nl muurbos news. The wall line itself is unchanged.
15. **Look for, De Heg added** (item 19): hedge by Naomi Jansen on former parking spaces opposite building 003,
    with a small, almost hidden entrance. Sources: marineterrein.nl parkxpark, kunst-in-de-heg-april (2026).
    The monthly art programme (March to August 2026) is over, so it is not mentioned.
16. **NL Look for: the commander's house and boardwalk line** was missing in the Dutch version and is now added,
    so both languages have the same list.
17. **Outlook** (item 13): `Major change ahead`; `outlook_when` "Sale undecided; new barracks planned for 2032";
    `outlook_note` (173 characters EN, 191 NL): the city plans about 800 homes and a park once it buys most of
    the site, the sale is very uncertain in 2026, Defence plans a compact new barracks on its part. Sources:
    marineterrein.nl /over-het-terrein/straks/ (projectnota 9 Nov 2023, about 800 homes, park, compact
    barracks); Buurtorganisatie 1018 26 Feb 2026 ("zeer onzeker door de huidige geopolitieke ontwikkelingen"),
    27 Aug 2026 (two strips, heliveld, "Als alles volgens plan verloopt wordt de nieuwe kazerne in 2032
    opgeleverd"), 30 Jun 2025 (voorkeursrecht). The 2032 date is now verified from the residents' site (the
    scout had it only from a search snippet).
18. **Gone places (item 14):** the existing place never mentioned Kanteen 025 or the Buurtboerderij, so nothing
    was removed. `dc places sights --q Kanteen` and `--q Buurtboerderij` find nothing on the map. Both closed in
    autumn 2026 (Buurtorganisatie 1018, 1 Nov 2026; single local source, no second found). Note: OSM still
    has a node "Buurtboerderij Centraal".
19. **Van Gogh "1877–1878" en dash replaced** by "from May 1877 to July 1878".

Unchanged: the Kweekschool memorial line (item 17: 4en5mei confirms 186 names).

## Left out and why

- Item 10, provost's house with two cells: single source (2018 survey), and the cells are not visible.
- Item 16, De Olifant (1868), fire of 1883, last ships Artemis/Canopus/Bellatrix, 1,200 Germans leaving in
  1945: timeline only, no second source found. Aardappeloproer 1917: nl.wikipedia ties the fighting to the
  Kattenburgerplein and the Oostelijke Eilanden, not to this site, so it was left out.
- Item 18, sea cadets' "follie": single source, minor.
- Item 20, trees: the 2015 Buurtorganisatie post says the ash and two elms stand on the closed Defence part;
  the 1945 poplar has no source I could fetch.
- Item 21, Nasi Goreng artwork: Defence part, single source.
- Item 22, Roboat, Smart Roof 2.0, Innovatie Paviljoen tours: possibly stale (only the robots/drones line used).
- Item 23, Vallend licht (Titia Ex, 2022, on 003): status unknown. Abri Maximaal: a temporary Amsterdam Light
  Festival piece, built here 13 to 19 Nov 2025 and then shipped to the Herengracht.
- Item 24, BurgerReserve: notes only, as the scout said.
- Item 4: the 2015 motto projection (an event) and the Oasepoort rolling planters (an experiment, page undated).
- Moluccan monument: the Stadscuratorium suggested a tile or QR code explaining the history; whether it was
  added is unknown, so not mentioned. Beware: a different monument also called "Beta berlayar jauh" (by Barbara
  Houwers) stands at a cemetery in Hilversum.
- Binnenhaven: the Buurtorganisatie post of 14 Oct 2026 (stadsdeel wants more such spots) was not used.

## Uncertain

- **Van Gogh** (see change 2).
- **Marechaussee date**: Arcam "Realisatie 2008", Archined (Feb 2010) "moved in last year", 2018 survey "opgeleverd
  2005". I used 2008. Arcam says "zwarte steentjes", Archined "natuursteen": written as "small dark stones".
- **Workshop date**: register 1878 vs survey around 1860; both given in `built`.
- **Moluccan monument pin**: estimated on the Voorwerf (`check: Location`); no photo or exact spot found.
- **Experiments in the harbour**: oloids (April 2026) and Dobbernatuur (one-year report) are recent; the MOSES
  reef page and the bubble barrier page are undated. Recheck before publishing.
- **Pension Homeland** open: 2018 survey, Commons 2022, OSM; not reconfirmed for late 2026.
- **028 signal-flag classroom**: used by Defence (Werving & Selectie in 2018). The text says it is at the head of
  the harbour, not that it is reachable; whether it is clearly visible from public ground was not checked on site.
- **Hirsi Ali** line rests on nl.wikipedia alone.
- **Plaque unveiled in 1991**: from a Commons file description only.
- The new campus place lists 230002 (commander's house) in `monument_number`, which the existing place also lists.

## Photos

- Binnenhaven: commons:File:Marineterrein.jpg (CC BY-SA 4.0, SjoerdMTA, 2019; shows the harbour and boardwalk).
- Campus: 2022 Pension Homeland-Officiersgebouw, Asd (1).jpg (CC BY-SA 4.0); SeinvlagGebouwtje.png and
  Facade027E.png (CC BY-SA 4.0, Marineterrein); concrete pillars photo by Fons Heijnsbroek (CC0).
- Black box: Amsterdam (20275202231).jpg and Kattenburg @ Amsterdam (20081279690).jpg (CC BY 2.0, Guilhem Vellut).
- Scheepskameel: 2023 Scheepskameel, Marineterrein.jpg (CC BY-SA 4.0, Ceescamel); ScheepskameelMarineterrein.png.
- **Moluccan monument: no photo** (none on Commons yet).
- Existing place: no photo changes; candidates if wanted: TimpaanOudePoort.png, Poortgebouw plaque Van Gogh.jpg
  (CC BY 4.0), Fontein met boegbeelden.JPG.

## Fact check

| Claim (EN / NL) | Source |
|---|---|
| Binnenhaven first official swimming spot of stadsdeel Centrum, from April 2025, by the province / eerste officiële zwemlocatie van Centrum | marineterrein.nl zwemlocatie news |
| Years of good water readings, bottom surveyed, gaps under quay walls sealed / metingen, bodem, holtes dicht | same |
| No lifeguards, own risk, all year / geen toezicht, eigen risico, hele jaar | same |
| Live water quality on screens; jetty closed 72 h after bad readings / schermen; steiger 72 uur dicht | same |
| Floating boardwalk closes basin to boats / boardwalk houdt boten buiten | marineterrein.nl dobbernatuur |
| Dobbernatuur since 2024: cork, willow, reed, bamboo; DobberWeelde, Willoasis, Vogelwoonboot (sand martins); after a year more life, no measurable water change | marineterrein.nl dobbernatuur |
| Oloids Kriek and Maria launched 2 April 2026; Paul Schatz; swimmers around Maria Blaisse; circulate and oxygenate | marineterrein.nl de-oloide-beweging |
| MOSES reef of 30 modules in the Binnenhaven | marineterrein.nl een-schuilplek-voor-onderwaterleven |
| Test bubble barrier in the eastern corner, outside the swimming area | marineterrein.nl the-great-bubble-barrier |
| IJ tunnel works 1962 cleared west part, part of dock filled / westen gesloopt, dok deels gedempt | nl.wikipedia; Arcam 027E; AT5 233547 |
| Commission 1961 to Rotterdam bureau of ir. F.C. (Frans) de Weger; campus 1962 to 1966 | 2018 survey; city register 230002 to 230004 |
| Shot-blasted gravel-concrete panels and steel frames / gestraalde grindbetonplaten, stalen ramen | 2018 survey |
| 006: low base, longroom, set-back tower clad in glass panels, remarkably intact inside and out, now Pension Homeland | 2018 survey; Commons (Ceescamel 2022) |
| 028: signals school, off-centre rooftop signal-flag classroom shaped like a ship's bridge, at the head of the harbour | 2018 survey |
| 027: two three-storey blocks on concrete columns, Le Corbusier's pilotis, renovated separately | 2018 survey; Arcam |
| 027E slats as EU flags, SLA, 2016, Dutch EU presidency on the site | Arcam; marineterrein.nl 10-jaar |
| Listed July 2025 at Heemschut's request: officers', command building, commander's house; west edge where a park is planned | AT5 233547; city register (8 July 2025) |
| "Beetje brutalistische architectuur" (AT5 headline) | AT5 233547 |
| 3,500 Moluccan soldiers in 1951, expected a temporary stay / ruim 3.500, tijdelijk | NH Nieuws 359370 |
| First ship at the Javakade 29 April 1951; four ships, more than a thousand people | marineterrein.nl onthulling; NH Nieuws |
| Fourteen marines at the Kattenburg barracks / veertien mariniers, kazerne Kattenburg | NH Nieuws; marineterrein.nl; Stadscuratorium |
| Unveiled 29 April 2026 by descendants with Defence; names read one by one; a rose each, several generations | marineterrein.nl onthulling |
| Yopi Abraham; corten-steel slats show marine or Moluccan warrior; steel refers to the 1951 ships; Voorwerf | Stadscuratorium SCA.26.40 |
| "Beta berlayar jauh" = "Ik vaar ver heen", opening line of a Moluccan song important in navy circles; words on the monument | Omba Pikul |
| KMar office; Norbert Wansleben, Cologne; completed 2008; client Dienst Vastgoed Defensie | Arcam; Archined |
| Same dimensions as the Scheepvaartmuseum, a five-storey square block round a courtyard like a fort | Arcam; Archined |
| 1,750 identical recessed windows; floors unreadable; corridor on street side; staff see out, not seen | Arcam; Archined (1750 windows) |
| Riot shield with eye slits / oproerschild met kijkgaten | Archined |
| Courtyard with glass and coloured wooden shutters; over a third of facade glass, visible at night; lit bottom row | Arcam |
| Visible from the train and the Jan Schaeferbrug | Arcam |
| Workshop: two storeys, brick, hipped roof, parallel to old quay, one of the few 's Lands Werf buildings, later TOKM | 2018 survey |
| Workshop date 1878 / around 1860; municipal monument 2025 | city register 230005; 2018 survey; AT5 |
| Restaurant opened May 2016, named after 1690 invention of city carpenter Meeuwis Meindertsz. Bakker | marineterrein.nl 10-jaar; timeline |
| Scheepskameel: floats either side of hull, pumped empty, lift ship; April 1690, Princes Maria; Admiralty pension; "voor Pampus liggen" | nl.wikipedia Scheepskameel; marineterrein.nl timeline |
| Restaurant open Tue to Sat from 18:00 | scheepskameel.nl |
| Bijltjes, Orangists, 30 May 1787, Patriots took the bridge, bloodily suppressed | marineterrein.nl timeline; nl.wikipedia Bijltjesoproer |
| Van Gogh lived here May 1877 to July 1878 with uncle Johannes, the commandant; plaque on the gate building, unveiled 1991 | plaque (Commons photo, read); Commons description (1991) |
| 350-man nuclear shelter under 029, listing requested by Heemschut, decision postponed | AT5 233547; marineterrein.nl meer-monumenten |
| Big bunkers after the Cuba crisis | marineterrein.nl timeline (koude-oorlog) |
| Het Paleis, towered brick complex on the dock's south dike, demolished 1968 | marineterrein.nl timeline; nl.wikipedia caption |
| Crown witnesses and threatened politicians sheltered; site blurred on satellite photos | marineterrein.nl timeline (geheim) |
| Ayaan Hirsi Ali housed here early 2005 / begin 2005 | nl.wikipedia Marineterrein |
| No street names; number boards 001 to 039 since 2019 | marineterrein.nl navigeren-op-nummer; 10-jaar |
| Salute on state visits from here: 21 blanks, 5 s apart, heard across much of the city; Finland December 2025 | marineterrein.nl saluutschoten; AT5 235932 |
| Harbour and heliveld used to test robots and drones | marineterrein.nl letting ad (17 Jul 2026) |
| Gate pediment with Admiralty arms and shipbuilding tools | marineterrein.nl timeline (poort-open); register 2206 |
| 1982 12 m opening sawn for Benthem Crouwel's main gate | 2018 survey |
| Spronken fountain 1995 on the Voorwerf | 2018 survey; Commons (Golsteijn 2012) |
| Muurbos on building 27: 500 m², more than a hundred native climbers | marineterrein.nl muurbos news |
| De Heg on former parking spaces opposite 003, small almost hidden entrance | marineterrein.nl parkxpark; kunst-in-de-heg |
| Outlook: about 800 homes and a park, projectnota 9 Nov 2023; compact new barracks | marineterrein.nl straks |
| Sale very uncertain (2026) | Buurtorganisatie 1018, 26 Feb 2026 |
| New barracks in two strips, heliveld, ready 2032 if on plan | Buurtorganisatie 1018, 27 Aug 2026 |

## Verification

Fact check of 24 Nov 2026. Every new claim in the patch and every claim in the five places (EN and NL) was compared with its listed source,
fetched with curl (UA deep-cities-research/0.1). The marineterrein.nl timeline stories load with `?source=history` (for example
/verhalen/geheim/?source=history), so they were read with curl too. Omba Pikul returns 403 to curl, so it was read once in a BrowserOS tab
(closed afterwards). The Van Gogh plaque text was read from the Commons photo. The live place was read with `dc place` (read only). Nothing
was written to the live site.

Confirmed as written: Bijltjesdag (timeline + nl.wikipedia), Van Gogh months and uncle Johannes (plaque), Het Paleis, Geheim, Hirsi Ali
(nl.wikipedia), building numbers, salute (marineterrein.nl + AT5 235932, 11 Dec 2025), gate pediment (timeline poort-open), 1982 opening
(2018 survey), fountain, Muurbos, De Heg, outlook (straks, Buurtorganisatie 26 Feb and 27 Aug 2026); the scheepskameel story, register dates
(230002 to 230005, listed 8 July 2025), 2018 survey details, Arcam/Archined details, restaurant hours (scheepskameel.nl, fetched today),
the Omba Pikul translation and the words on the monument.

Cut or narrowed:
1. Patch, Bijltjes: "after their axes" became "(little axes) after their tools" (sources say "naar hun gereedschap").
2. Patch, shelter under 029: no source says it was one of the post-Cuba bunkers. Split into two facts: decision put off in 2025 (AT5), and
   after the Cuba crisis the site got huge bunkers (timeline). The postponement is now dated.
3. Patch, test ground: the letting ad says the harbour and heliveld "give room for" testing robots and drones, not that they are used; and
   the heliveld is on the Defence part (Buurtorganisatie Aug 2026), so "the open part" became "the site".
4. Binnenhaven: "swam here without permission" became "an unofficial swimming spot" (source: "wildzwemplek").
5. Binnenhaven: the 72-hour jetty closure applies when water quality threatens to fall short; the heavy-rain warning is separate. Rewritten to
   match the source.
6. Binnenhaven: "the designer Maria Blaisse": "designer" not in the source; cut.
7. Binnenhaven: MOSES "uses ... on the bottom": the page is from 2020 and does not say "on the bottom"; now "made the harbour one of the
   test sites and placed 30 modules here".
8. Campus: "modernist" not in any source; now "new campus".
9. Campus, 006: the survey does not say the rooms and longroom are in the base; now "pension-like, own rooms and a longroom" plus the form.
10. Campus, visiting: "only Pension Homeland is open to visitors" not sourced; now "Pension Homeland is a hotel and restaurant; see the
    others from outside". Pension Homeland confirmed for 2026 by the bubble-barrier page (May 2026), added to the campus sources.
11. Moluccan monument: the figure is a "Marineman" (Stadscuratorium), not a marine; EN "navy man", NL "marineman" (summary, body, Look for).
12. Moluccan monument: "3,500 soldiers and their families" became "3,500 soldiers" (NH Nieuws); "a few months" became "temporary".
13. Moluccan monument: "four ships brought more than a thousand people" became "more than a thousand KNIL soldiers and their families".
14. Moluccan monument: unveiled by the navy's commander with family representatives, at a ceremony organised by the descendants with
    Defence (marineterrein.nl, Omba Pikul), not "by the descendants with Defence".
15. Moluccan monument: names read out and roses: both sources are programmes published before the event; now "the programme had".
16. Black box: "best from the Jan Schaeferbrug" became "as seen from"; visiting "or the water" became "or the train" (Arcam names the train
    and the bridge).
17. Scheepskameel: "northern tip" became "north-west tip" (survey: "noordwestkop"); NL "lichtbord" became "bord" (the Commons photo shows
    a sign, not that it is lit).

Removed text checked: the patch drops "in a house that is gone" from the Van Gogh line. nl.wikipedia still places him in a commander's house
that has gone, while the plaque on the Poortgebouw says "woonde hier" and the marineterrein.nl letting ad (17 Jul 2026) says he stayed in
part of building 003. Sources disagree, so the clause is not restored; the patch makes no claim about which building. The NL body had no
commander's house line live; the patch adds it so both languages match. Nothing else sourced was removed.

Other checks: EN and NL state the same facts; no NL run of 8+ words matches a fetched source (the only hit is the Kweekschool memorial line,
already live); summaries 244 to 277 characters (NL Moluccan summary shortened from 281); outlook_note 173 EN / 191 NL; no em dashes or
spaced en dashes; closures (Kanteen 025, Buurtboerderij, autumn 2026) not on the place; outlook dated (2026, barracks 2032). Validator: 0
errors. Patch: valid JSON.
