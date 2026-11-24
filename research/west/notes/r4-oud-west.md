# West round 4, slice oud-west: notes

Scope: SCOUT-4 items for Oud-West and De Baarsjes (413, 415, 416, 417, 422, 423, 424, 425, 435, 436, 437, 438, 441), plus the sweep-2 merges into places in baarsjes.yaml, oud-west.yaml and vondelpark.yaml. Item 426 is out by the user's call. All pins were point-checked with `scripts/areas.py` and fall in West (Oud-West or De Baarsjes).

## New places (research/west/places/r4-oud-west.yaml)

| # | Title | Category | Rank | Flag / outlook | Photo |
|---|---|---|---|---|---|
| 413 | Het ABC langs de Hoofdweg (René Knip) | curiosities | Okay | Still there? | none |
| 415 | Dirk van Nimwegen plaque (February Strike) | hidden-history | Nice | | portrait only |
| 416 | Respect monument No War, Balboaplein | hidden-history | Okay | Still there? | yes (2013) |
| 417 | Westerveld plaque: the resistance HQ in the Koepelkerk | hidden-history | Nice | | yes |
| 422 | Aletta Jacobs' house, Tesselschadestraat 15 | hidden-history | Nice | | yes |
| 423 | W.F. Hermans' boyhood home, Eerste Helmersstraat 208 | hidden-history | Nice | | yes |
| 424 | Reyer Anslo with plague rats (musicians' house, Reyer Anslostraat 3-5) | curiosities | Okay | Facts (cause of death) | yes |
| 425 | "Nooit gedacht" builder's stone, Admiraal de Ruijterweg 149 | curiosities | Okay | Still there? | none |
| 435 | Sportplaza Mercator | civic | Nice | | none |
| 436 | The Tire Station (Michelin's drive-through tyre station) | industrial | Nice | | yes |
| 437 | Broederhuis, Rembrandtpark (monastery, mosque, studios) | religious | Okay | Facts (order, date, mosque name) | none |
| 438 | De Roze Hallen | housing | Okay | Facts ("first in the world") | none |
| 441 | Krul urinal, Derde Kostverlorenkade | curiosities | Okay | outlook Under threat | none |

## Full entry for a draft-less merge target

- **Moederste** (live only, `scripts/data/amsterdam-west-live-only-2026-11-24.json`). Written in r4-oud-west.yaml with the exact live title. The English is the live text plus one sentence and a Look for line about Leo Braat's *Waterdraagster met vissen* (Kunstwacht 2147) on the paddling-pool rim. The Dutch keeps the live wording except the merge, which is written fresh. Note: the live Dutch body quotes the artist at length, in quotation marks. It is a marked quote, not a copy, but you may want to shorten it.

## Merges into existing drafts (titles unchanged, both languages)

- vondelpark.yaml
  - Vondelpark: Hildo Krop's 1942 reliefs on the Vondelbrug, including a Gijsbrecht van Aemstel scene (Wikidata Q124512980).
  - Vondelpark Pavilion: Leo Braat's ceramic women with bowls as planters (Kunstwacht 1966). Kunstwacht 1930 ("Griekse vrouwen met kruiken") is taken to be the two "river goddesses" already in the text, so they are not added twice.
  - 1914 shops and workshop: PINK's *Standing Stone*, Overtoom 16 (Kunstwacht 2155).
  - Leidsebosje: Henk Zweerus's *Horizontale compositie* (1958) and the Telegraaf row (Kunstwacht 2152).
- oud-west.yaml
  - Wilhelmina Gasthuis gatehouse: Pauline Wiertz's *Microbe* on the WG-plein (Kunstwacht 2170).
  - Busken Huetschool: the Potgieter medallion at Potgieterstraat 49 (Geheugen van West 13150), with check "Still there?" (latest photos 2008 and 2009).
- baarsjes.yaml
  - 4 May memorial, Columbusplein: the history of the white cross *Aan hen die vielen* (4en5mei 1491), the Dalemans and Gerritze stone at Postjesweg/Marco Polostraat (4en5mei 1498), and the Agelink/Huijbers square lamps (Kunstwacht 2545). The text said the cross stood here "for decades"; it stood here only from January 2006, so that is corrected. Check Location: the register puts the cross on the Baarsjesweg now, but OSM still maps it at the Visserschool. The en dashes in both summaries were replaced with colons.
  - Het Sieraad: the pupils' Star of David for four deported Jewish pupils (4en5mei 3285).
  - Cabralschool: MidWest's inner gardens and De Inheemse Plantenwinkel (Westkrant, April and June 2026). The scout's compost greenhouse, honey and canteen were not confirmed, so they are left out.
  - Westermoskee: the Piri Reïs apartments (2011) take their look from the unbuilt first, Sinan-based mosque design (gebouwdin 865).
- Jan Evertsenstraat housing by J.F. Staal: **no merge**. The Fred Hund mosaic bench is already in baarsjes.yaml under the Machineslootbrug entry (nicknamed Hundbrug), which says it vanished in 2022. Kunstwacht 2646 may simply be stale.

## Correction: Telefooncentrale West (baarsjes.yaml)

BRIEF-4 assigns this to the westerpark slice, but the place is in baarsjes.yaml, a file this slice owns, and r4-westerpark.yaml has no entry for it. It was therefore corrected here in both languages:
- **Removed:** "now belongs to KPN", "still full of cables", the fibre-hub claim, and "never stopped being used for telecoms".
- **Added:** the 2024 conversion by Rijnboutt into twenty homes, "De Centrale"; the car park turned into a shared garden; the 1960s alterations to the outside; and the fact that it is the only building in the city put up inside an existing block (gebouwdin 4076).

**Westerpark slice: please don't apply it twice.**

## Corrections to the scout

- 416 stands on the **Balboaplein**, not the Bilbaoplein (4en5mei address, Commons, and the Joop Westerweelschool).
- 417: the Koepelkerk was **Nederlandse Hervormd**, not Gereformeerd.
- 415: the sources say he worked for the Stadsreiniging, not that he was a "street sweeper", so the text calls him a sanitation worker.

## Conflicts left open

- **416, unveiling date:** 20 June 2005 (4en5mei text) or 22 June 2005 (plaque). The text says "June 2005".
- **413, number of letters:** 23 objects (Kunstwacht) or forty (Knip's studio). Both are given and flagged.
- **422, plaque date:** 1959, following Wikipedia and the Katinka van Rood work list. One web page says 1923.
- **435, opening year:** 2005 (gebouwdin), 2006 (Wikipedia, "two years late"), or 2001-2006 (architectuurgids). The text says it opened in 2006.
- **Telefooncentrale, listing year:** the draft says municipal monument 2014, gebouwdin says 2009. Left as it is.
- **Telefooncentrale, designer:** gebouwdin credits Alfred Boeken, the register credits Publieke Werken. Not used.
- **441, design:** the Westkrant calls the krul Amsterdam School, which clashes with urinals appearing from 1880. Not used. Model and date are unknown.

## Leads (not used in text)

- 437: the Aya Sofia mosque "aan de Postjesweg" was evicted by Stadgenoot on 1 December 2009 after its lease ended on 1 October 2007 (NH Nieuws, 30 November 2009; Binnenlands Bestuur). It is probably the mosque that was in this building, but this is not confirmed. Which order of brothers built the house, and when, is also unknown.
- 438: the cancelled earlier project for gay elderly housing at Van Hogendorpstraat 93-111 (Rochdale, gebouwdin 1240) is in Staatsliedenbuurt and could get its own mention there.

## Places without photos

413, 425, 435, 437, 438 and 441. For 415, Commons has only a 1955 portrait, not the plaque.

## Route ideas

- **Resistance and women's rights, Tesselschadestraat/Stadhouderskade:** Westerveld plaque (417), then Aletta Jacobs (422), in the same street where Westerveld lived.
- **Helmersbuurt writers:** Hermans (423), Reyer Anslo (424), Vondelpark and the Krop relief.
- **February Strike, Kinkerbuurt:** Van Nimwegen plaque (415), then De Hallen (Mozes Cohen murals), De Roze Hallen (438), and the krul urinal (441) on the way south.
- **War memorials, De Baarsjes:** Columbusplein (Rave, the cross history, the Dalemans/Gerritze stone), the No War monument (416), and Het Sieraad's Star of David.

## Decisions needed

1. Moederste: keep the long quoted artist statement in the live Dutch body, or shorten it?
2. Fred Hund bench: Kunstwacht 2646 lists it as standing, the Machineslootbrug draft says it was lost in 2022. Should someone check on the street?
3. 437: should the entry name the Aya Sofia mosque if a source confirms it?

## Fact check

Every factual claim in the new places (r4-oud-west.yaml) and in the round-4 changes to baarsjes.yaml, oud-west.yaml and vondelpark.yaml was checked against the sources the drafts list, fetched with curl (Kunstwacht via its frontend API, nl.wikipedia via its API, 4en5mei.nl, gebouwdin API, Geheugen van West, De Westkrant, Grafik, architectuurgids, NH Nieuws, Wikidata, OSM, Commons file descriptions and photos). No new facts were added. Changes are in both languages unless marked.

**r4-oud-west.yaml**

- ABC langs de Hoofdweg: "Most people on the tram never look up at the masts" cut (no source). "which is why no two letters look like the same typeface" cut (no source). "just over the line into Bos en Lommer" now "by the Bos en Lommerplantsoen" (Kunstwacht 2555). "Knip's own studio described the series as forty" now "A magazine profile of Knip described..." (the forty is a Grafik caption, not a studio statement); same in check_note. Look for "single letters by Hoofdweg 38, 62, 86 and 96" now "two more by Hoofdweg 38, then single letters by 62, 86 and 96" (Kunstwacht lists 2 at no. 38).
- Dirk van Nimwegen: summary "called on Amsterdam at the Noordermarkt" now "called on a crowd at the Noordermarkt" (4en5mei 2770: he addressed about 250 people). "He was a member of the communist party, then illegal" cut (sources say only that he was an initiator of the strike the illegal CPN organised). "That night the party printed its call" now "the illegal communist party (CPN) drew up its call" (4en5mei: "opgesteld"). "where the city holds its main commemoration" now "where the strike is commemorated every year" (plaque text). "Every 25 February the neighbourhood holds its own small one here first" now "On 25 February 2026 the neighbourhood held its own small commemoration here ... ahead of the main one in the city centre" (De Westkrant, 25 Feb 2026, covers one year only).
- No War: "The city answered with a school project" now "In 2004 pupils of several VMBO schools took part in a project" (4en5mei 2740 does not say who set it up or that it was an answer). "about a hundred pupils" now "more than a hundred" (4en5mei: "ruim honderd"). "Tiled" kept: the 2013 Commons photo shows a tiled panel.
- Westerveld plaque: summary "the largest resistance group" now "a nationwide resistance organisation" (4en5mei 1464: "een landelijke verzetsorganisatie"; nl.wikipedia Ordedienst calls it most likely the largest only until 1942). "Discovery would have cost Westerveld and his family their lives" now "Westerveld and his family lived in constant danger of their lives" (plaque: "met voortdurend levensgevaar voor zich en zijn gezin").
- Aletta Jacobs: summary "decades before it was respectable" cut. "wrote to the prime minister, Thorbecke" now "the minister Thorbecke" (nl.wikipedia, De Westkrant). "in this street, lived and practised with Carel Victor Gerritsen" now "lived and practised in this street. With Carel Victor Gerritsen ... she first entered a free marriage" (no source puts Gerritsen in this house). "courses on hygiene and childcare" now "courses" (nl.wikipedia: "cursussen gaf"). "a scandal at the time" cut. Look for "on International Women's Day, flowers left under it" cut (no source). Portrait relief confirmed by the Commons photo.
- W.F. Hermans: summary "a house his teacher parents rented from a teachers' building society" now "a block built by a teachers' building society; his parents were both teachers" (renting not in nl.wikipedia Eerste Helmersstraat 208). "The war years that fed ... began here with his sister's violent death" now "He lived here through the war years behind De donkere kamer van Damokles, and lost his sister in May 1940" (she was shot in a car elsewhere). "then eight" cut (birth month makes it seven or eight). "the day the Dutch army surrendered" cut (not in a listed source). NL only: "stonden allebei voor de klas" now "waren allebei onderwijzer" (his mother taught until her marriage in 1913). "Parents stayed until they died in 1967" kept: Commons file description.
- Reyer Anslo: "a poet who learned his trade from Vondel and Hooft" now "influenced by Vondel and Hooft" (nl.wikipedia: "beïnvloed door"); NL "met Vondel en Hooft als grote voorbeelden" likewise. "an epic on the plague of Naples of 1656" now "on the plague at Naples (1656)" (en.wikipedia gives 1656 as the date of the work); NL "schreef daar" now "schreef". Look for "a decorative grille with lemons" now "a decorative grille referring to jenever and lemon brandy, with a portrait of Anslo and a line of his verse above it" (nl.wikipedia Reyer Anslostraat). check_note "Only the gable-stone society says" now adds "(and the nl.wikipedia street article)", which also says so.
- "Nooit gedacht" stone: summary "one of the first houses" now "one of the early houses"; "where developers and the tram company were betting on commuters" now "where commuter houses went up from 1910, some built by the tram company itself" (nl.wikipedia Admiraal De Ruijterweg). "it reads as the cheerful relief of a small speculator who got there" cut (interpretation; the builder is a company); sentence now "What it was that they never expected to get is not recorded."
- Sportplaza Mercator: "The architects wanted it to look, from a distance, like" now "From a distance it looks like" (gebouwdin 25: "Op afstand lijkt het"). Look for "the grass roofs stepping down towards the Rembrandtpark" now "the grass roofs on the stepped building" (direction not in a source).
- The Tire Station: "where the old exit road met the way south" cut. "without ever reversing: a piece of post-war car culture on the edge of the 19th-century city" cut; "Drivers" now "Cars". "The car park below" now "The car park". "went back into the front" now "was given a place again" (gebouwdin 1501: "heeft opnieuw een plek gekregen"). "The ground floor is open to anyone as a café-restaurant" cut (no source).
- Broederhuis: "roofed in for prayer space" now "built over" (gebouwdin 1416: "dicht gebouwd"). "Stadgenoot later reclaimed the building for housing" now "later planned homes there" (De Westkrant 2014). "32 small rental units, studios for young starters and refugees" now "32 homes" in all with the two owner-occupied chapel homes, studios "for starters and asylum seekers", sleeping lofts for the upstairs units (gebouwdin 1416: 32 homes; Westkrant 2016: thirty rental studios and two owner flats). "wooden verandas" now "verandas"; "shared terrace" now "shared outdoor space".
- Krul urinal: "cast-iron" cut from summary, body and Look for; "open at the top and bottom, with a gutter inside" cut (neither De Westkrant nor NH Nieuws describes the build). "Dolle Mina chained women to them" now "members of Dolle Mina chained themselves to them" (De Westkrant). "In 2026 the artist Leendert Vooijce cleaned all 37 ... and showed the film" now "cleaned all 37 ... and in 2026 showed the film" (the cleaning date is not given).
- Moederste (Braat merge only): "three small bronzes" now "three bronzes"; NL "bronsjes" now "bronzen beelden". NL "een vrouwtje met een kruik in de vorm van een vaas" now "een vrouwtje in de vorm van een vaas, met een kruik" (Kunstwacht 2147: the woman is vase-shaped). NL "kunst uit Mexico en de Andes van vóór Columbus" now "Braat haalde inspiratie uit precolumbiaanse en Mexicaanse kunst" (Kunstwacht: no Andes).

**baarsjes.yaml**

- Cabralschool (MidWest): "open on Open Tuinen West in June" now "(June 2026)"; "a small pesticide-free shop for native garden plants" now "for garden plants, mostly native ones" (De Westkrant, 10 Apr 2026: "een groot deel is inheems").
- Telefooncentrale West: "and turned the car park around it into a shared garden for the block" now "they also advised turning the car park around it into a shared garden" (gebouwdin 4076: Rijnboutt "adviseerde"; it does not say the garden was made).
- 4 May memorial, Columbusplein: "The white cross has since gone back to the Baarsjesweg" now "has since moved to the Baarsjesweg"; NL "weer" cut (4en5mei 1491: it first stood in the Van Speijkstraat, not the Baarsjesweg). Look for "the square itself, laid out by the artists" now "the paving and street lamps of the square, designed by the artists" (Kunstwacht 2545).

**oud-west.yaml**

- Wilhelmina Gasthuis gatehouse (Microbe): "a wink at the hospital that stood here" cut (Kunstwacht 2170 makes no such link).
- Busken Huetschool (Potgieter medallion): "a cryptic four-line verse" now "a four-line verse"; NL "raadselachtig" cut.

**vondelpark.yaml:** all four merges (Krop reliefs, Braat women, Standing Stone, Horizontale compositie) match Kunstwacht, Wikidata and OSM; no change.

**Copying check (NL):** no Dutch run of 8+ words from a source in the new or changed text, except names, the congress name, and the Moederste live text (see below).

**Left for the user**

- Moederste, live Dutch body: besides the marked artist quote, long unmarked runs are copied from Stadscuratorium ("Het kleurrijke werk ... strekken pijn, verdriet en ontheemding zich voor je uit"; "In de jaren '70 liet actiegroep Blijf van m'n Lijf zien ..."), Kunstwacht ("Ter voorbereiding voerde de kunstenaar gesprekken ... opnieuw konden wortelen"; "de locaties waren geheim ...") and nl.wikipedia ("Het beeld is bewust niet op een sokkel geplaatst ..."; "De plek midden in het parkje is gekozen ..."). Not rewritten because it is live text; it needs a fresh Dutch rewrite.
- Moederste Look for "the dark spots on the mother's blue-green skin" and "the two information stones": not in any source I could read (Het Parool is behind a consent wall). Live text, left as is.
- 437 Broederhuis lead: De Westkrant (5 Jul 2016) says that after the brothers left, the building was first a mosque and then a temporary home for primary school De Springplank. That bears on the "2003 to 2009 mosque" question in the check_note. Not added to the text.
