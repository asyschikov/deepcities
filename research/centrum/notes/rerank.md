# Centrum re-rank: a pyramid instead of a plateau

Ranks were compared place against place, wijk by wijk (wijk = the `subNeighbourhood` of each pin from `scripts/areas.py`, so the extra-* and r2-* files sit where their pins are). Within each wijk all places were ordered strongest to weakest on story strength, something to see, uniqueness in the city and whether a visitor can get to it, then cut at the target shares. Nothing in the YAML was changed; the machine-readable result is `notes/rerank.json`.

- Deep Centrum: 716 places, 58 Amazing (8.1%), 217 Nice (30.3%), 441 Okay (61.6%). Every wijk has Amazing places.
- Deep Amsterdam, Centrum part: 174 places (112 clusters + 62 standouts, with Eerste Marnixplantsoen added as a standout), 18 Amazing (10.3%), 72 Nice (41.4%), 84 Okay (48.3%).
- No place moved two steps (Amazing to Okay or back) in either set.

## Deep Centrum (716)

| Wijk | Places | Before A / N / O | After A / N / O | After shares |
|---|---:|---|---|---|
| Haarlemmerbuurt | 49 | 5 / 29 / 15 | 4 / 16 / 29 | 8% / 33% / 59% |
| Jordaan | 105 | 7 / 61 / 37 | 8 / 33 / 64 | 8% / 31% / 61% |
| Grachtengordel-West | 84 | 9 / 41 / 34 | 7 / 25 / 52 | 8% / 30% / 62% |
| Burgwallen-Nieuwe Zijde | 77 | 9 / 48 / 20 | 6 / 23 / 48 | 8% / 30% / 62% |
| Burgwallen-Oude Zijde | 73 | 7 / 39 / 27 | 6 / 22 / 45 | 8% / 30% / 62% |
| Nieuwmarkt/Lastage | 73 | 8 / 45 / 20 | 6 / 22 / 45 | 8% / 30% / 62% |
| Oostelijke Eilanden/Kadijken | 37 | 5 / 27 / 5 | 3 / 11 / 23 | 8% / 30% / 62% |
| Weesperbuurt/Plantage | 71 | 8 / 41 / 22 | 6 / 21 / 44 | 8% / 30% / 62% |
| Grachtengordel-Zuid | 79 | 10 / 39 / 30 | 7 / 24 / 48 | 9% / 30% / 61% |
| De Weteringschans | 68 | 4 / 41 / 23 | 5 / 20 / 43 | 7% / 29% / 63% |
| **Total** | 716 | 72 / 411 / 233 | 58 / 217 / 441 | 8% / 30% / 62% |

### Amazing on Deep Centrum (58)

- **Haarlemmerbuurt**: Eenhoornsluis and Hudde's sea-dike stone; West-Indisch Huis (West India House); De Reus van Bickerseiland, the wooden giant that came home; The oldest wild fig of Amsterdam, Drieharingenbrug
- **Jordaan**: Sint Andrieshofje; Claes Claesz. Hofje (Anslo's Hofje); Karthuizerhof, the city's widows' court on a monastery site; Noorderkerk, where the February strike was called; Fatih mosque, the new De Zaaier church the beauty committee lost to; Pianola Museum in police station no. 21; Bloemgracht: the townsman, the farmer and the sailor; Electric Ladyland, a fluorescent cave where visitors push the buttons
- **Grachtengordel-West**: Bombs on the Blauwburgwal, May 1940; Huis Bartolotti and the White House next door; Rode Hoed, the biggest hidden church in the country; Huis met de Hoofden (House with the Heads); Felix Meritis, from Enlightenment club to Communist HQ; Homomonument, three pink triangles; De Groote Keijser, the squat that armed itself
- **Burgwallen-Nieuwe Zijde**: De Drie Fleschjes, the oldest tasting room in Amsterdam; Victoria Hotel and the two houses that would not sell; De Papegaai, the hidden church on the Kalverstraat; Rasphuispoort, the gate of the house of correction; Nieuwezijds Voorburgwal 282, where Tina Strobos hid more than a hundred people; Sint Luciënsteeg, the gable stone wall
- **Burgwallen-Oude Zijde**: Stadsbank van Lening (the city pawnshop); Oudemanhuispoort and its book stalls; Spinhuis, the women's prison and its whipping gate; Hildo Krop's shouting urinal (Oudezijds Voorburgwal); Max Beckmann's exile studio in a tobacco attic (Rokin 85); The tallest tree in Amsterdam, Oudemanhuispoort courtyard
- **Nieuwmarkt/Lastage**: Scheepvaarthuis (the Shipping House); Staalmeestersbrug and Monet's view of the Zuiderkerk; Armenian church in a warehouse (Surp Hoki); Huis De Pinto, the house that stopped a motorway; The Stopera, the NAP under it and the Violist; Nieuwmarkt metro station, the riot remembered underground
- **Oostelijke Eilanden/Kadijken**: De Engel, the angel on the factory chimney; Werf 't Kromhout and the yard bosses' houses; Marineterrein, the navy yard behind the wall
- **Weesperbuurt/Plantage**: De Burcht (diamond workers' union building); Aldo van Eyck's Mothers' House (Hubertushuis); The Jewish schools of the Stadstimmertuin (Joods Lyceum); The population register attack and the artists' resistance monument; Schaduwkade, the quay that remembers; Telefoon van de Wind, the phone for the dead in the Hoftuin
- **Grachtengordel-Zuid**: Huis met de Bloedvlekken (the house with the bloodstains); KattenKabinet, the cat museum; Herengracht 458, Goudstikker's art dealership; Museum Van Loon and its coach house with false windows; De Bazel, the trading company's striped fortress, now the city archives; Saint George and the dragon, Reguliersgracht 34; The krullen, Amsterdam's open-air urinals
- **De Weteringschans**: The wall in the middle of the school, Weteringschans 263; Amsterdam Pipe Museum, the world's smoking in a canal house of 1670; De Nederlandsche Bank, the gold vault anyone can walk into; The calendar warehouses of the Achtergracht; De Duif, the first Catholic church back on the street

## Deep Amsterdam, Centrum part (174)

| Wijk | Places | Before A / N / O | After A / N / O | After shares |
|---|---:|---|---|---|
| Haarlemmerbuurt | 12 | 0 / 12 / 0 | 1 / 6 / 5 | 8% / 50% / 42% |
| Jordaan | 24 | 1 / 22 / 1 | 2 / 9 / 13 | 8% / 38% / 54% |
| Grachtengordel-West | 20 | 1 / 18 / 1 | 1 / 11 / 8 | 5% / 55% / 40% |
| Burgwallen-Nieuwe Zijde | 20 | 4 / 16 / 0 | 3 / 7 / 10 | 15% / 35% / 50% |
| Burgwallen-Oude Zijde | 16 | 3 / 13 / 0 | 2 / 6 / 8 | 12% / 38% / 50% |
| Nieuwmarkt/Lastage | 17 | 2 / 15 / 0 | 2 / 8 / 7 | 12% / 47% / 41% |
| Oostelijke Eilanden/Kadijken | 12 | 2 / 10 / 0 | 2 / 6 / 4 | 17% / 50% / 33% |
| Weesperbuurt/Plantage | 16 | 3 / 11 / 2 | 2 / 6 / 8 | 12% / 38% / 50% |
| Grachtengordel-Zuid | 20 | 2 / 18 / 0 | 2 / 8 / 10 | 10% / 40% / 50% |
| De Weteringschans | 17 | 1 / 16 / 0 | 1 / 5 / 11 | 6% / 29% / 65% |
| **Total** | 174 | 19 / 151 / 4 | 18 / 72 / 84 | 10% / 41% / 48% |

Before = proposed Deep Amsterdam rank in plan.json / da-*.yaml (De Drie Fleschjes counted Amazing; Eerste Marnixplantsoen, new standout, counted at its old cluster's Nice). Wijk = the cluster's wijk in plan.json, or the standout's pin.

### Amazing on Deep Amsterdam (18)

- Werf 't Kromhout and the yard bosses' houses (standout, Oostelijke Eilanden/Kadijken)
- Armenian church in a warehouse (Surp Hoki) (standout, Nieuwmarkt/Lastage)
- Victoria Hotel and the two houses that would not sell (standout, Burgwallen-Nieuwe Zijde)
- De Papegaai, the hidden church on the Kalverstraat (standout, Burgwallen-Nieuwe Zijde)
- West-Indisch Huis (West India House) (standout, Haarlemmerbuurt)
- Electric Ladyland, a fluorescent cave where visitors push the buttons (standout, Jordaan)
- Rode Hoed, the biggest hidden church in the country (standout, Grachtengordel-West)
- The krullen, Amsterdam's open-air urinals (standout, Grachtengordel-Zuid)
- The calendar warehouses of the Achtergracht (standout, De Weteringschans)
- De Drie Fleschjes, the oldest tasting room in Amsterdam (standout, Burgwallen-Nieuwe Zijde)
- Hofjes of the central Jordaan (cluster, Jordaan)
- Oudemanhuispoort: book stalls, the tallest tree and the university's first corner (cluster, Burgwallen-Oude Zijde)
- Spinhuis and its neighbours: penance, refuge and a warning against drink (cluster, Burgwallen-Oude Zijde)
- The squatters' Nieuwmarkt: the house that stopped a motorway and the riot underground (cluster, Nieuwmarkt/Lastage)
- The bankers' Vijzelstraat: De Bazel's striped fortress and the tunnel under the Keizersgracht (cluster, Grachtengordel-Zuid)
- The war in the Plantage, around the Hollandsche Schouwburg (cluster, Weesperbuurt/Plantage)
- Nieuwe Keizersgracht and Nieuwe Kerkstraat, the quay that remembers (cluster, Weesperbuurt/Plantage)
- Marineterrein and the Dijksgracht, the navy yard you can walk into (cluster, Oostelijke Eilanden/Kadijken)

### Nice clusters (25)

- Lindengracht, the eel riot and the northern hofjes
- Noordermarkt and the Brouwersgracht corner
- Theo Thijssen's Jordaan
- Prinseneiland, tar and painters
- Haarlemmerplein, gate and dune water
- Keizersgracht at the Leliegracht
- Torensluis and the Singel's north bend
- Keizersgracht's orphan gateways and the forger's house
- Nieuwezijds Kolk, where the city began
- Look up in the Kalverstraat: shop signs, a hidden chapel and the gable stone wall
- Spui, where Provo was born, and its corners
- The red-light district's own monuments: Belle, the red window and the Majoor
- The old city hall quarter: the Prinsenhof, Krop's shouting urinal and the meat hall
- The head of the Zeedijk: a wooden house, a sailors' chapel, Chet Baker and 't Mandje
- Uilenburg, the Jewish island: the hidden synagogue, the Sabbath bathhouse and two schools
- Jonas Daniël Meijerplein and Vlooienburg: the Dokwerker, the orphanage in words and Spinoza
- The Oudeschans harbour front: the leaning tower, New Amsterdam's office and the heavy bridges
- The Golden Bend at war: Goudstikker's lost paintings, a stolen bank name and a secret fund
- Hidden churches of the Singel: the Krijtberg and the Mennonite church you cannot see
- Reguliersgracht and the Amstelveld, seven bridges and a wooden church
- Frederiksplein, where the glass palace stood
- Wertheimpark, the park that lost its name
- Behind the Hortus, a phone for the dead and elms planted lying down
- Kattenburg and Wittenburg, what the clearances left
- Oostenburg, from VOC ropewalks to Werkspoor

### Standouts set to Okay (5)

- Het Veilinghuisje, the auction house everyone thought was demolished
- Centraal Station's two plaques: the cold welcome and the sergeant
- Dominicuskerk, the church that broadcast the first mass on Dutch radio
- O Johnny, the gaper that replaced a gaper
- The Carlton crash and the gap it left

## Calls on Deep Centrum, by wijk

Only places that went up, or Amazing places that went down, or ones I hesitated over. Everything else that went from Nice to Okay is the plain cut: a good story with less to see, or one more of a kind (hofjes, gable-top transplants, stumbling stones, plaque-only war sites) that a stronger neighbour already carries.

**Haarlemmerbuurt** (4 A, slightly over on Nice: 16 for 49, the islands have many small but visitable things)
- Planciusblok: A to N. Big historical first, but a plain block in a park; the wild fig and the Reus win on something to see. Hesitated.
- De Kruiwagen and Sloterdijkerbrug: O to N. One of the oldest and widest stepped gables, and the last genuine double drawbridge; both are things to look at.
- Willem Drees's birthplace, Droogbak, Havengebouw: N to O. Hesitated over Droogbak (a striking building, but thin as a stop).

**Jordaan** (8 A, the richest wijk, at its share)
- Electric Ladyland: N to A. A one-of-a-kind visit.
- Fatih mosque: kept A, but it was the last one in; Lindengracht eel riot (26 dead) and Blaeu's printing house are the strongest Nice places and could swap in.
- Hofjes: Andries, Claes Claesz and Karthuizerhof A; Venetiae, Zeven Keurvorsten, Raepenhofje, Rozenhofje, Constantiahofje N; the other seven Okay. One of a kind matters here: the Jordaan cannot carry fifteen Nice hofjes.
- Eerste Marnixplantsoen: kept Nice (now a citywide standout); fits the top third of the Jordaan, not the top eight.

**Grachtengordel-West** (7 A)
- Huis met de Hoofden: N to A. Legend, the six heads and a museum inside.
- Huis Nienhuys, Van Bottenburg's bookshop, O Johnny: A to N. Strong stories, but a front with a plaque (Van Bottenburg, Nienhuys) or a small curiosity (O Johnny).
- Moeder Godskerk, De Transvaalsche Boer, Coymanshuis, the celestial globe: N to O. Hesitated over Coymanshuis (Van Campen's first design).

**Grachtengordel-Zuid** (7 A, one over 8%: the Golden Bend and the Reguliersgracht are dense with first-rate places)
- KattenKabinet: N to A. An odd museum people do go out of their way for.
- Odeon, Lippmann Rosenthal, Carlton crash: A to N. Lippmann Rosenthal and the Carlton gap are strong stories with little to see.
- Poentunnel: A to N. The best story in the wijk, but it has been open two days in fifty years.
- Thorbecke, Swigtershofje, Museum Fodor: N to O. Hesitated over Swigtershofje (the bed under the altar).

**Burgwallen-Nieuwe Zijde** (6 A)
- Sint Luciënsteeg gable stone wall: N to A. 47 stones in one place, unique in the city.
- Telegraaf building, Dominicuskerk, De Gouden Bril, Centraal Station's plaques: A to N. Hesitated most over De Gouden Bril and Het Lieverdje (Provo), the next two in line.
- Nieuwezijds Kapel, Lloyd building, Annick van Hardeveld, Walk of Pride: N to O.

**Burgwallen-Oude Zijde** (6 A)
- Hildo Krop's shouting urinal: N to A.
- Het Veilinghuisje and Blaauwlakenblok: A to N. The Veilinghuisje cannot be seen from the street. Blaauwlakenblok was the hardest cut; I kept the tallest tree as Amazing even though it shares a courtyard with the book stalls.
- Jacob Hooy herb shop: O to N. A 1743 shop you can walk into.
- Allard Pierson, Sint-Nicolaasbasiliek, Majoor Bosshardt, De Gecroonde Raep: N to O. The first two are well-known sights already; the Raep was a close call.

**Nieuwmarkt/Lastage** (6 A)
- Boas diamond factory and Kweekschool voor de Zeevaart: A to N. Boas is a commercial diamond tour now; the Kweekschool is a story behind a building. Staalmeestersbrug (Monet's view) kept A instead. Hesitated.
- Christ Church, Saaihal, NACO-huisje, Arcam, Cotton Club: N to O.

**Oostelijke Eilanden/Kadijken** (3 A)
- Marineterrein: N to A. A whole navy yard you can walk into and swim at.
- Oranje-Nassau Kazerne, "Er ligt een roofstaat", Grootveld's floating gardens: A to N. The gardens' permit runs out in February 2027.
- Eighteen places from Nice to Okay, the biggest drop of any wijk: it was 73% Nice before, rich in neighbourhood gardens and renewal stories that are good but small.

**Weesperbuurt/Plantage** (6 A)
- Telefoon van de Wind: N to A.
- Weesperplein Cold War shelter: A to N. Open only on rare tour days. Hesitated.
- Hidden synagogue of the Nieuwe Keizersgracht and the Nieuwe Achtergracht diamond factories: A to N.
- The many Jewish-history sites were ranked against each other: Schaduwkade, the Joods Lyceum and the population register attack A; the threshold at the tram stop, the Glass Palace, the Erkentelijkheid monument and Nooit meer Auschwitz N; single stumbling stones, the Brilleslijper house and several fronts-only buildings O. This is the call most worth a second look.

**De Weteringschans** (5 A)
- Amsterdam Pipe Museum and De Nederlandsche Bank's open gold vault: N to A.
- De Balie: A to N.
- Huidekoperstraat, Jacob Olie's house, Walenweeshuis, Peper en Zout: N to O.

## Calls on Deep Amsterdam

- Amazing is held to one or two per wijk (three in the Nieuwe Zijde, where De Drie Fleschjes is fixed). De Engel, Max Beckmann's studio, the Weesperplein shelter and "The Golden Bend at war" move from Amazing to Nice; on the citywide standard they are "worth a stop" rather than "go out of your way". De Engel was the hardest of these.
- Electric Ladyland, the krullen, West-Indisch Huis, the calendar warehouses and the Marineterrein cluster move up to Amazing so that the Jordaan, Grachtengordel-Zuid, Haarlemmerbuurt, De Weteringschans and the islands each have one.
- Clusters: 8 Amazing, 25 Nice, 79 Okay. A cluster is Nice when it is one story with a strong member, or when it holds a Deep Centrum Amazing place that is not a standout. That second rule is an exception to the bundle-equals-Okay rule for four clusters: "Keizersgracht at the Leliegracht" (Huis met de Hoofden), "Look up in the Kalverstraat" (Sint Luciënsteeg), "The old city hall quarter" (Krop's urinal) and "Behind the Hortus" (Telefoon van de Wind). The cleaner fix would be to make those four places standouts.
- Bundles with good members kept at Okay (hesitated): "Westermarkt beyond the tower" (Descartes, Anton de Kom), "The Amstel up to the Blauwbrug" (Six Collection, Willet-Holthuysen), "Leidseplein east" (Max Euweplein), "The Trippenhuis and the house as wide as its door", "Zuiderkerk and the head of the Jodenbreestraat", "The Dam's corners" (the 7 May 1945 shooting).
- Five standouts to Okay: Het Veilinghuisje (cannot be seen), Centraal Station's two plaques (plaques), Dominicuskerk, O Johnny, the Carlton crash (a gap filled by later buildings). Everything else stays Nice or Amazing.
- Eerste Marnixplantsoen, the new standout: Nice. Its cluster "Marnixplein and the northern Lijnbaansgracht" drops to Okay without it.
- Clusters that were Okay already (4) stay Okay.
