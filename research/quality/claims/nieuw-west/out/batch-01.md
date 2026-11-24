# Claims check: nieuw-west batch 01

22 places checked, 21 changed (Monument aan de Haarlemmerweg: every claim sourced, no change).
About 330 factual claims checked (EN and NL text, Look for lines, attributes, notes).
Claim changes (counted once per EN/NL pair): sourced 8, narrowed 49, cut 14. Plus 23 Dutch rewrites for copied runs (kind "copy", no fact change).
Copy checker (nlcheck.py on out/batch-01.json): 0 copied sentences in all 21 changed places.

## For the user

- De Antifascist: sources disagree on who unveiled it in 1966 (an Anefo caption and the file name say Kraan's widow; the Wikipedia caption and a 1966 film description say his daughter). The text now gives only the date, 26 February 1966.
- Monument aan de Haarlemmerweg: the only remaining copied run is the inscription 'Zij brachten voor de vrijheid het grootste offer', a marked quote, left as is.
- Biber "Fenix": "close to the Siegerpark gate" cut because tracesofwar.nl (the only source for it) returns 403 to curl. Put it back if someone can read that page.
- Station Sloterdijk: the hotel name "Ven" and the casino were cut; nltimes.nl returned no readable text and ehotelier only gives "former KPN HQ, largest vacant office, conference hotel".
- Cold War shelter: the Volkskrant storeroom claim was cut (paywalled page, no text).
- Nieuw Sloten: Sjoerd Soeters and his Blankenbergestraat houses were cut; no listed source names him.
- Train Lodge: the Dec 2015 / Mar 2016 opening rests on the LinkedIn page (captcha for curl); a search snippet of that page confirms it, so it stays.
- Rembo: the check_note no longer says the right hand was off again (only an unreadable Instagram comment); the April 2023 repair is confirmed by the reel's own caption.

## Changes
## Geuzenbos
- narrowed body | nature groups campaigned against it -> several interest groups campaigned against it
- copy nl.body | natuur waar je niet op de paden hoeft te blijven -> natuur waar je gewoon van het pad af mag
- copy nl.body | In 2012 kwam er een veepassage over de drukke Wethouder van Essenweg,  -> De drukke Wethouder van Essenweg snijdt het bos in tweeën; sinds 2012 
## Totempaal (Rietbroek)
- narrowed body | After restoration it was set up in 2007 on the green strip between the -> After restoration it was set up in 2007 between the Osdorper Ban and i
- cut body | - the borough's name sign at the foot  -> 
- narrowed body | - the granite base, which barely hides how small it is -> - the base, which cannot hide how small it is
- copy nl.body | Begin deze eeuw ging de buurt op de schop: de school uit 1964 en de st -> Begin deze eeuw werd de hele buurt vernieuwd. School (1964) en straat 
## Wees- en Armenhuis and Speeltuin Sloten
- narrowed body | replacing an older one by the church that was falling down -> replacing an older home in the village that was falling down
- copy nl.body | Na de annexatie door Amsterdam in 1921 werd het huis -> Toen Amsterdam Sloten in 1921 had ingelijfd, werd het huis
## Kapkar/GTO-B10 (Frank Havermans)
- copy nl.body | in 1974 opgeleverd als een van de grootste kantoorgebouwen van Nederla -> dat bij de oplevering in 1974 tot de grootste kantoorpanden van het la
- cut body | the SFB (Sociaal Fonds Bouwnijverheid) -> the SFB
- narrowed body | a red steel machine on angled legs, with a cabin that one person can s -> a red metal machine with angled parts jutting out, and a cabin that ca
## Train Lodge, Sloterdijk
- narrowed body | a few old Swiss couchette and sleeping cars -> a few old Swiss sleeping cars
- narrowed body | A former Belgian buffet car serves as restaurant. -> A former Belgian buffet car stands with them, and there is a restauran
- cut body |  It is one of the hotels that came into Teleport when the offices empt -> 
- narrowed body | By 2022 the graffiti artist Kenor had painted several of the cars in b -> By 2022 the graffiti artist Kenor had painted several of the cars.
- narrowed body | - the short dead-end siding, cut off from the main line -> - the track laid just for these cars, off the main line
- copy nl.body | ten oosten van het station en ten zuiden van spoor 8 -> oostelijk van het station, aan de zuidkant van spoor 8
## Choreografie in staal and the Bornhout shelter
- sourced body | she was married to the architect Piet Zanstra -> she was married to the architect Piet Zanstra
- cut body | ; on other days only the sculpture can be seen, from the street. -> .
- copy nl.body | Het beeld stond eerst bij de Centrale Werkplaatsen bij het Noordzeekan -> Oorspronkelijk stond het bij de Centrale Werkplaatsen aan het Noordzee
## De Bouwvakarbeider (Jan Havermans)
- narrowed body | Most statues of workers show them at it, hammer raised. Jan Havermans  -> Instead of showing a builder hard at work, Jan Havermans showed one ta
- narrowed body | The city meant it as a tribute to the builders -> It is a tribute to the builders
- narrowed body | and the plaster model was on show -> and the original was on show
- narrowed body | when Queen Juliana walked through a "gate" of six boys and six girls -> when Queen Juliana symbolically opened a "gate" formed by six boys and
- narrowed body | the bronze plaque that records Juliana opening Tuinstad Slotermeer, "t -> the plaque that records Juliana opening Tuinstad Slotermeer as the fir
- copy nl.body | Op 26 januari 1962, de zeventigste verjaardag van Havermans, werd het  -> Havermans werd 70 op 26 januari 1962, en precies die dag werd het beel
## Biber submarine "Fenix", Sloterweg
- narrowed body | The family story is that the pilot was still inside. -> Reportedly the pilot was still inside.
- cut body | , close to the Siegerpark gate -> 
- copy nl.body | Het bootje werd het baken van de garage aan de weg, eerst op zijn buik -> Langs de weg werd het bootje het herkenningsteken van de garage. In he
## Karel Appel's glass wall (Het Slotervaart)
- narrowed body | The most valuable was a glass wall designed by Karel Appel -> Among them was a costly glass wall designed by Karel Appel
- narrowed body | his trademark from the Cobra years -> a trademark of his experimental period
- narrowed body | and in February 2020 the city reported them missing to the police -> and in February 2020 the city announced it would report them to the po
- narrowed body | , three curved, intersecting plates on legs in the pond outside -> , three curved, intersecting plates on legs
- copy nl.body | De Appel hangt op de begane grond, in het Douwe Egberts-café, en is ti -> Je vindt de Appel beneden in het café van Douwe Egberts; zolang het ge
## Station Sloterdijk and the Teleport offices
- narrowed summary | A three-storey railway crossing under one steel table -> A three-storey railway crossing under one space-frame "table"
- narrowed summary | It was built for Teleport, an office park of the information age named -> It was built for Teleport, an office park with streets named after air
- narrowed body | Around it the city planned Teleport, an office park for the coming age -> Around it came Teleport, a business park with streets named after airp
- narrowed body | - Ven, the former KPN head office, Amsterdam's largest empty office un -> - the former KPN head office, once Amsterdam's largest vacant office b
- copy nl.body | Sporen 1 en 2 bestaan niet voor de trein: die nummers hoorden bij het  -> Treinen stoppen nooit aan spoor 1 of 2: die nummers waren van het oude
## 't Landje, the hut-building island (Rembrandtpark)
- narrowed body | It started in the early 1970s, when the park was still half wasteland, -> It started around 1970; its founder Piet de Bake, still there forty ye
- narrowed body | while trying not to make it too tidy -> and it did not end up too tidy
- cut body |  It is a place for children; adults see it from the park paths around  -> 
- narrowed body | - the self-built huts, each one different and none of them finished; -> - the self-built huts;
- copy nl.body | timmeren hun eigen hut tussen de bomen op een eilandje in het Rembrand -> timmeren hun eigen hut op een beboomd eilandje midden in het Rembrandt
## Apes under the Oude Haagsebrug (Pipsqueak was here)
- narrowed body | carried the first motorway from Amsterdam to The Hague over the Ringva -> carried the old motorway between Amsterdam and The Hague, one of the f
- narrowed body | posed like an old state portrait, under the line "The circus has left  -> posed like an old state portrait, titled "The circus has left town... 
- narrowed body | five apes, one per panel, with the same line -> five apes, one per panel, under the same title
- narrowed body | - the five apes and the title on the east abutment -> - the five apes on the east abutment
- copy nl.body | het blauw, geel en grijs uit het wapen van Haarlemmermeer zie je vanaf -> wie aan de Amsterdamse oever staat, ziet blauw, geel en grijs (de kleu
## De Antifascist (Leo Braat)
- narrowed body | Kraan's widow unveiled it in February 1966, the month of the strike's  -> It was unveiled on 26 February 1966, 25 years after the strike.
- narrowed body | he saw the German police raid on the Jewish quarter around the Waterlo -> he was visiting his in-laws on the Nieuwmarkt, at the edge of the Jewi
- sourced body | and told his friend Piet Nak, a refuse collector, that "the lot has to -> and told his friend Piet Nak, a refuse collector, that "the lot has to
- copy nl.body | bij de rechterschouder staat 'aan de onbekende soldaat' -> op de rechterschouder lees je de opdracht 'aan de onbekende soldaat'
## O, Kora, dochter van Zeus (Johan Limpers)
- narrowed summary | in 1969 friends had his prize piece cast as his memorial -> in 1969 a committee in his memory had his prize piece cast
- narrowed body | In 1940 Johan Limpers, 24 and just out of the Rijksakademie, won the P -> In 1940 Johan Limpers, after six years at the Rijksakademie, won the p
- sourced body | With the sculptor Gerrit van der Veen he set up -> With the sculptor and resistance leader Gerrit van der Veen he set up
- narrowed body | but on a plain block -> but on a plain, column-shaped pedestal
- sourced body | The street is named after Willem Arondeus, another of the register att -> The street is named after Willem Arondeus, another of the register att
- copy nl.body | Met beeldhouwer Gerrit van der Veen richtte hij het illegale blad De V -> Samen met beeldhouwer en verzetsleider Gerrit van der Veen begon hij D
## Ru Paré memorial stone (Ru Paré Community)
- cut body | The streets of this neighbourhood are named after painters, so Lebeau  -> A primary school on the Chris Lebeaustraat was named after Paré.
- narrowed body | A black stone by the old entrance on the Chris Lebeaustraat tells her  -> A plaque by the old school entrance on the Chris Lebeaustraat remember
- copy nl.body | en sinds 2021 is er elk jaar een Ru Paré Lezing over kunst en verzet -> en sinds 2021 wordt er jaarlijks een lezing over kunst en verzet in ha
## The Rooie Reus, Sloten's champion copper beech
- copy nl.body | In 2011 hield Het Parool een prijsvraag voor de mooiste boom van Amste -> In 2011 liet Het Parool lezers kiezen welke boom in Amsterdam de moois
## Trimmers on bridge 678 (Martie van der Loo)
- narrowed summary | thieves like the artist's own dog best. -> a dog is the thieves' favourite.
- narrowed body | because it read best from below -> because it gave the best effect
- narrowed body | crosses the avenue at a slant on a single concrete beam about 40 m lon -> crosses the avenue at a slant, which called for a concrete beam about 
- narrowed body | - the Allende monument just south-east, between this bridge and bridge -> - the Allende monument on the east side, between this bridge and bridg
- copy nl.body | De twee honden zijn haar eigen Chet, genoemd naar Chet Baker, en Pacha -> Van de twee honden is Chet, vernoemd naar jazztrompettist Chet Baker, 
## Nieuw Sloten, the Olympic village that wasn't
- narrowed body | nine became pioneers in the new greenhouse area of Almere, others went -> nine became pioneers in the new greenhouse area of Almere, and the las
- narrowed body | and by the 1980s the city was emptying of exactly the people it wanted -> and by the 1980s the city was emptying, above all of its better-off re
- cut body | Several architects each designed a part, Sjoerd Soeters among them, an -> The plan won
- cut body | - Soeters's houses on the Blankenbergestraat  -> 
- sourced body | The last field towards the old village, De Vrije Geer, was saved by a  -> The last field towards the old village, De Vrije Geer, was saved by a 
- narrowed body | in the jazz quarter of the same years -> in the jazz quarter
- copy nl.body | in 1991 konden de eerste woningen in gebruik worden genomen -> in 1991 trokken de eerste bewoners erin
## Twee hondjes and Rembo (Postjesweg viaduct)
- narrowed summary | For years nobody touched it. -> For years it held up well.
- narrowed body | Then nothing happened; in 2018 a critic called it an unemployed doorma -> But it held up well, with only small damage; in 2018 a critic called i
- narrowed body | left a letter quoting the text on its sign -> left a letter referring to the text on its sign
- sourced body | In 2023 Kramer showed it being repaired. -> In 2023 Kramer showed it being repaired.
- cut attributes.check_note | Whether Rembo now has bronze repairs is not documented; it was being r -> Whether Rembo now has bronze repairs is not documented; it was being r
- sourced body | - Arno Coenen's mosaic gates -> - Arno Coenen's mosaic gates
- copy nl.body | Het stadsdeel vroeg haar rekening te houden met "extreme vormen van ve -> Het stadsdeel wilde dat ze zich voorbereidde op "extreme vormen van ve
## Cold War shelter, Louis Bouwmeesterschool
- cut summary |  Its meaning was mostly symbolic. Today the school keeps its storage d ->  Its meaning was mostly symbolic.
- cut body |  In early 2026 it served as the school's storeroom, the Volkskrant rep -> 
- cut body | It is a working primary school: the shelter can only be seen when it i -> It is a working primary school.
- narrowed body | - "Bevrijde vogel" on the Sierplein, 400 m east, the war memorial this -> - "Bevrijde vogel" on the Sierplein, 400 m east, the war memorial wher
- copy nl.body | Het is een vroeg type, met een bijzondere vorm en muren van 20 centime -> Het gaat om een vroeg type in een ongewone vorm, met wanden van 20 cen
## Velodrome Amsterdam, Sportpark Sloten
- narrowed body | so after a new surface in the 1980s the city roofed it over in 1998 to -> so after a new surface in the 1980s it was roofed over in 1998 so that
- narrowed body | so ambulances can reach the infield -> so emergency services can reach the infield
- cut body |  It is a training venue: the public gets in for races and events. -> 
- sourced body | opened on 27 May that year by alderman Harry Verhey -> opened on 27 May that year by alderman Harry Verhey
- copy nl.summary | Een van de drie overdekte wielerbanen van Nederland, -> Een van de maar drie overdekte banen in Nederland:
- copy nl.body | Zo werd het een van de drie overdekte wielerbanen van het land: -> Sindsdien hoort hij bij het drietal overdekte wielerbanen in Nederland

## Verification

All 21 changed places re-checked against the originals (EN and NL, summary, body, Look for lines, attributes); "sourced" changes re-read in their sources (nl.wikipedia Willem Kraan, Margot Zanstra, Gerrit van der Veen, Natuurpark Vrije Geer; Commons HannieSchaftbrug02a and Anefo 925-6224; rodi.nl 444116; buitenkunst 1022; the Instagram reel's og:description "REMBO being repaired", April 15, 2023). Cuts spot-checked against the listed sources (Ven/casino: nltimes still returns no article text; Biber Siegerpark gate: tracesofwar still 403; Soeters: no listed source names him; Volkskrant storeroom: paywalled; Teleport hotels, name sign, painters' street names, adults/paths, public access: no source). Fixes made:

- Karel Appel's glass wall: restored that the city did report the missing works to the police (EN "..., which it then did"; NL "..., en dat gebeurde ook"). The narrowing to "announced it would report" dropped what the listed source nhnieuws.nl/nieuws/283191 supports: "Cultuurwethouder Meliani besluit daarop aangifte te doen", "dat de gemeente aangifte heeft gedaan".
- Station Sloterdijk, nl.body: the copy rewrite "Treinen stoppen nooit aan spoor 1 of 2" changed the fact (source and EN: there are no tracks 1 and 2 for trains); now "Voor treinen zijn er hier geen sporen 1 en 2".
- De Antifascist, nl.body: the copy rewrite "op de rechterschouder lees je de opdracht" moved the words onto the shoulder and called them a dedication; source and EN say "bij de rechterschouder"; now "bij de rechterschouder lees je 'aan de onbekende soldaat'" (marked inscription quote).
- Trimmers, nl.body: removed "jazztrompettist", added in the copy rewrite (not in any source or in EN); now "vernoemd naar Chet Baker".
- Trimmers, nl.body: repaired the broken bridge sentence (no fact change): "ligt schuin over de laan; daarom was er een betonnen ligger van zo'n 40 meter en 60 ton nodig. Hij is met hout bekleed, zodat ..."

After the fixes: nlcheck.py 0 copied sentences in all 21 places; no em dash or spaced en dash; all summaries at most 280 characters; titles unchanged; the one attribute change (Rembo check_note) is mirrored under translations.nl.attributes.
