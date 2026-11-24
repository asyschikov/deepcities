# Centrum on Deep Amsterdam: standouts and story clusters

Plan for how Centrum appears on the citywide map **Deep Amsterdam** (slug `sights`). All 716 Centrum drafts
(`research/centrum/places/*.yaml`) go to **Deep Centrum** (slug `centrum`) in full. Deep Amsterdam gets one place
per story cluster plus the standouts alone. Nothing here is imported; machine-readable copy in `plan.json`.

## Counts

- Drafts read: 716 (Amazing 71, Nice 412, Okay 233)
- Standouts: 60 (56 Amazing drafts, 4 Nice drafts)
- Clusters: 112, with 593 members (3 to 9 each, median 5)
- Deep Centrum only: 63 (all Okay)
- **Resulting Deep Amsterdam places for Centrum: 172** (60 standouts + 112 clusters)
- Deep Amsterdam ranks: Amazing 18 (10%), Nice 150, Okay 4
- Check: 60 + 593 + 63 = 716 drafts, each in exactly one bucket

By wijk (clusters counted where their pin is; a few clusters take a member or two from a neighbouring wijk):

| Wijk | Drafts | Standouts | Clusters | Members | Centrum only | Deep Amsterdam places |
|---|---:|---:|---:|---:|---:|---:|
| Haarlemmerbuurt | 49 | 5 | 7 | 40 | 3 | 12 |
| Jordaan | 105 | 6 | 17 | 95 | 7 | 23 |
| Grachtengordel-West | 84 | 10 | 10 | 58 | 13 | 20 |
| Burgwallen-Nieuwe Zijde | 77 | 8 | 11 | 68 | 4 | 19 |
| Burgwallen-Oude Zijde | 73 | 4 | 12 | 55 | 11 | 16 |
| Nieuwmarkt/Lastage | 73 | 6 | 11 | 57 | 6 | 17 |
| Oostelijke Eilanden/Kadijken | 37 | 5 | 7 | 36 | 0 | 12 |
| Weesperbuurt/Plantage | 71 | 4 | 12 | 60 | 8 | 16 |
| Grachtengordel-Zuid | 79 | 7 | 13 | 70 | 2 | 20 |
| De Weteringschans | 68 | 5 | 12 | 54 | 9 | 17 |
| **Total** | 716 | 60 | 112 | 593 | 63 | 172 |

## Rules applied

- **Standouts** are copies of their Deep Centrum place. Every Amazing draft is a standout unless it shares one
  story with another Amazing draft; then both go into one cluster, which is ranked Amazing (8 clusters). One exception
  follows the brief's own example: the Spinhuis (Amazing) anchors "Spinhuis, penance and temperance".
  4 Nice drafts stand alone because they are destinations in their own right (odd museums, the cat boat).
- **Deep Amsterdam rank of standouts.** Keeping all Amazing standouts Amazing would make Centrum about a third Amazing
  on the citywide map. To hold the 1-in-10 rule, 46 Amazing standouts are proposed as **Nice on Deep Amsterdam**
  (they stay Amazing on Deep Centrum). The 10 kept Amazing show as A → A below; with the 8 Amazing clusters that makes 18.
- **Clusters** are walkable (pin to farthest member mostly under 350 m; the street-length ones are marked with their spread),
  have one story, 3 to 9 members, and a pin on the most visitable member or the natural centre. Cluster text is new
  writing to be drafted from the members' texts; nothing new is claimed here.
- **Deep Centrum only**: Okay drafts that add nothing to a story. No Nice draft is left out of Deep Amsterdam.
- **Edges with the existing map** (checked against `research/*/places/*.yaml` of the other districts, not live): no
  Centrum draft duplicates a place on `sights`, and no `sights` draft lies inside Centrum. Neighbours to mention, not copy:
  West's Raampoort bridge (brug 165) beside "Raampoort, police tower and drama school"; West's Leidsebosje and Boomzagertje
  across Kramer's Leidsebrug ("Leidseplein west"); West's Domela Nieuwenhuis statue at the Willemsbrug ("Haarlemmerplein");
  Oost's Het Licht van Jan by the Mariniersbrug ("Marineterrein"). The Amsterdamse School map (`ams-school`) shares many
  buildings but is a separate map.

Ranks in lists: A Amazing, N Nice, O Okay (Deep Centrum rank). Standouts show the proposed Deep Amsterdam rank after the arrow.

## Haarlemmerbuurt

### Standouts

- Planciusblok, the workers' homes built to be seen (A → N)
- The oldest wild fig of Amsterdam, Drieharingenbrug (A → N)
- De Reus van Bickerseiland, the wooden giant that came home (A → N)
- Eenhoornsluis and Hudde's sea-dike stone (A → N)
- West-Indisch Huis (West India House) (A → N)

### Clusters

**Prinseneiland, tar and painters** (Nice, industrial). `ha-prinseneiland`
The last tar winch and the Palmentuin, a tar shed of 1687, Breitner's studio, the excommunicated apostle's church, a wartime warehouse's secret, the steam mirror factory and the last old double drawbridge.
Pin: Prinseneiland: the last tar winch, the Palmentuin and Mandela's garden.
Members: Prinseneiland: the last tar winch, the Palmentuin and Mandela's garden (N); De Roogans, the low tar shed among tall warehouses (O); Breitner's studio on the Prinseneiland (N); The excommunicated apostle's church on Prinseneiland (N); 't Seepaert, a wartime warehouse with a modern secret (O); De Atlas, the steam-powered mirror factory (O); Sloterdijkerbrug, the last old double drawbridge (O).

**Bickerseiland, workshops and renewal** (Nice, housing). `ha-bickerseiland`
The last workshops and shipyard gate, the students' plot-by-plot renewal puzzle, the whale, the neighbours' garden and children's farm, and two gable stones that came home.
Pin: Bickerseiland renewal housing.
Members: Bickerseiland renewal housing (N); Bickerseiland's last workshops (N); "De walvis" and the poem on the quay, Hollandse Tuin (N); Tuin Bickersgracht Noordkop and children's farm De Dierencapel (N); Stones that came home, Bickersgracht 14 and 22 (O).

**Realeneiland and the Westerdoksdijk** (Nice, housing). `ha-realeneiland`
The Orange-minded Zandhoek where Stadsherstel began, the tug office on piles in the IJ, and Meursing's last wind sculpture.
Pin: Zandhoek, the Orange-minded quay and Stadsherstel's first house.
Members: Zandhoek, the Orange-minded quay and Stadsherstel's first house (N); Rederij Goedkoop, the tug company's office in the IJ (N); Door wind bewogen beweging, Wicher Meursing's last wind sculpture (N).

**Haarlemmerplein, gate and dune water** (Nice, civic). `ha-haarlemmerplein`
The king's gate turned fire station, the first dune water sold by the bucket, Drees's birthplace, the anarchists' red cinema, the tram that fell off the bridge, two first stones laid by boys and the little Tuschinski.
Pin: Haarlemmerpoort and its fire station.
Members: Haarlemmerpoort and its fire station (N); Jacob van Lennep and the first dune water (N); Willem Drees's birthplace (N); De Roode Bioscoop, the anarchists' cinema on the Haarlemmerplein (N); Willemsbrug, where a tram fell into the canal (O); Korte Marnixkade 4, the house a nine-year-old started (O); Korte Marnixstraat, a farrier's horseshoes and a boy's first stone (O); Kunstroute Nieuwe Houttuinen, art for "a road from nowhere to nowhere" (N); The Movies, Amsterdam's little Tuschinski (N).

**Haarlemmerdijk shopfronts** (Nice, curiosities, spread 387 m). `ha-dijk`
A fishmonger's octopus tiles, ghost signs of departed trades, a gable stone everyone misread and Femina Muller's clean crèche.
Pin: Roeraade's fish shop and the bakery next door.
Members: Roeraade's fish shop and the bakery next door (N); Ghost signs of the Haarlemmer shopping street (N); SLUYS and De Mof, Haarlemmerdijk 109 (N); Femina Muller's crèche in the Vinkenstraat (N).

**Korte Prinsengracht, not what it looks like** (Nice, housing). `ha-kortepg`
Komter's flats cut up to look like canal houses, rescued gable tops, a hidden Old Catholic church, the stockfish warehouses, the motorway that stopped at a bridge and the Posthoorn church's Catholic island.
Pin: Komter's flats that pretend to be canal houses.
Members: Komter's flats that pretend to be canal houses (N); Van Houten's rescued gables in the Haarlemmerbuurt (O); The hidden Old Catholic church behind Brouwersgracht 132 (N); Tromsø and Hammerfest, the stockfish warehouses (N); Haarlemmer Houttuinen, the motorway that stopped at a bridge (N); Posthoorn church and its Catholic island (N).

**Droogbak, where the Singel starts** (Nice, civic). `ha-droogbak`
The railway company's palace that shut off the harbour front, the skippers' children's school, Dudok's lonely tower, the insurance angel, the herring buyer's wheelbarrow house and a hand for volunteers.
Pin: Droogbak, the railway company's palace.
Members: Droogbak, the railway company's palace (N); Harm Smeenge school for skippers' children (N); Havengebouw, Dudok's tower that lost its partner (N); The insurance angel of Haarlemmerstraat 2 (N); De Kruiwagen, the herring buyer's double house where the Singel starts (O); De Aardige Amsterdammer, a hand for the volunteers (O).

## Jordaan

### Standouts

- Karthuizerhof, the city's widows' court on a monastery site (A → N)
- Pianola Museum in police station no. 21 (A → N)
- Noorderkerk, where the February strike was called (A → N)
- Bloemgracht: the townsman, the farmer and the sailor (A → N)
- Fatih mosque, the new De Zaaier church the beauty committee lost to (A → N)
- Electric Ladyland, a fluorescent cave where visitors push the buttons (N → N)

### Clusters

**Hofjes of the central Jordaan** (Amazing, housing). `jo-hofjes-central`
The oldest hofje after the Begijnhof, the almshouse one man's stubbornness saved, the seven 'prince-electors' palaces', a banker's back-yard hofje and Johanna ter Meulen's model flats.
Pin: Claes Claesz. Hofje (Anslo's Hofje).
Members: Claes Claesz. Hofje (Anslo's Hofje) (A); Sint Andrieshofje (A); Hofje De Zeven Keurvorsten, a joke that became a name (N); Regenboogs Liefdehofje, from Catholic elderly to music students (O); Johanna ter Meulen's model flats in the Tuinstraat (N).

**Lindengracht, the eel riot and the northern hofjes** (Nice, housing). `jo-lindengracht`
A banned eel-pulling game set off two days of street fighting; around the filled canal, two hofjes bought on one day, the Mennonite widows' Lindenhofje and the hofje behind a deep passage.
Pin: Lindengracht, the filled canal and the eel riot.
Members: Lindengracht, the filled canal and the eel riot (N); Raepenhofje and Bossche Hofje, two hofjes bought on one day (N); Lindenhofje, from Mennonite widows to young care workers (N); Suyckerhoff-hofje, behind a deep passage (O).

**Willemsstraat, the slum canal the philanthropists filled** (Nice, housing). `jo-willemsstraat`
57 slum alleys on a ditch, filled in 1857 and rebuilt house by house; the preacher's toddler school, free homes for loyal old workmen, the experiment that proved a point, and Joost Swarte's house of legends.
Pin: Willemsstraat, the slum canal the philanthropists filled.
Members: Willemsstraat, the slum canal the philanthropists filled (N); Bewaarschool of Tot Heil des Volks, where a preacher came with peat and a Bible (N); Constantiahofje, free homes for loyal old workmen (N); Bouwonderneming Jordaan, an experiment that proved a point (N); Joost Swarte's Willemsstraat house and the "Parels van de Jordaan" (N).

**Palmgracht puns and pictures** (Nice, curiosities). `jo-palmgracht`
Cauliflowers for a man called Cool, a colonial army advert repainted, rescued tops on a 1938 block, the street that taught renewal to mend, and the water spook of the Bullebak.
Pin: Palmgracht: the cauliflower pun and the cake-slice school.
Members: Palmgracht: the cauliflower pun and the cake-slice school (N); The colonial army advert on the Palmgracht (N); Palmgracht 12–16, three rescued tops on one block (O); Palmdwarsstraat, where urban renewal learned to mend the old streets (O); Bullebak (bridge 149) (N).

**Noordermarkt and the Brouwersgracht corner** (Nice, curiosities, spread 333 m). `jo-noordermarkt`
The second dune-water tap and the graveyard outline in the paving, Papeneiland's double front and the bakers' bridge, the paper mill bridge and gable-stone riddles, sea-fish gables on the Brouwersgracht.
Pin: Papeneiland and the Lekkeresluis.
Members: Papeneiland and the Lekkeresluis (N); Noordermarkt: the post, the plaque and the outline in the paving (N); Papiermolensluis, the paper mill bridge (O); Three gable stones on the Brouwersgracht (N); Gables that swim, Brouwersgracht 50 (O).

**Westerstraat's shops and walls** (Nice, curiosities). `jo-westerstraat`
Perlee's street organs, the drugstore of window puns, the phone-box library, the 1930s rebuild that kept old stones, a soap boiler's wandering stone, the flopped day school and the London Police mural the neighbours kept.
Pin: Perlee, the street-organ workshop on the Westerstraat.
Members: Perlee, the street-organ workshop on the Westerstraat (N); Hermanusje van Alles, the drugstore of window puns (N); The phone box library of the Boomstraat (O); Westerstraat's 1930s rebuild, crooked houses out, old stones kept (O); Westerstraat 202, a soap boiler's stone in a 1980s wall (O); Burgerschool of 1867, the day school that flopped (O); The London Police on Prinsengracht 70, the mural the neighbours kept (N).

**Marnixplein and the northern Lijnbaansgracht** (Nice, hidden-history, spread 407 m). `jo-marnixplein`
Krop's lost bather back on her plinth, the children's liberation lime, the last bastion where the builders' riot began, the Capuchins' self-built church, a foundry turned flour mill and power station, and a Moorish cinema front.
Pin: Marnixplein: Krop's lost bather and the Volksvrouw.
Members: Marnixplein: Krop's lost bather and the Volksvrouw (N); Bevrijdingslinde van Jordaankinderen, the children's liberation tree (N); Eerste Marnixplantsoen, the last bastion and the builders' riot (N); Marnixstraat, workers' homes on the old ramparts (O); Concordia on the Westerstraat, Peace be to this house (O); Tichelkerk, the Capuchins' church built without an architect (O); De Weichsel, from city foundry to flour mill to power station (N); Nassaubioscoop, a Moorish cinema front on the Lijnbaansgracht (O).

**Theo Thijssen's Jordaan** (Nice, odd-museums). `jo-thijssen`
The birth house the council meant to demolish, Kees de jongen on a side wall, the school in his name, and the unnamed sculptor's harmonica player next door.
Pin: Theo Thijssen Museum, in the house the council meant to demolish.
Members: Theo Thijssen Museum, in the house the council meant to demolish (N); Kees de jongen on the "Tuinpleintje" (N); Theo Thijssen school (O); The harmonica player of the Anjeliersstraat, by a sculptor nobody names (N).

**Bloemgracht, Blaeu and the resistance attic** (Nice, hidden-history). `jo-bloemgracht`
Where Blaeu printed the Atlas Maior, the attic raided ten days before liberation, the church that lost its tower, and the people's club hall that kept men out of the pub.
Pin: Bloemgracht 76: where Blaeu printed the world.
Members: Bloemgracht 76: where Blaeu printed the world (N); Bloemgracht 82, the resistance attic raided ten days before liberation (O); Bloemgrachtkerk (O); Koning Willemshuis, a club for the people of the Jordaan (O).

**Rozengracht by day and night** (Nice, hidden-history). `jo-rozengracht`
The Pierrots' picture palace, Theo Ruiter's resistance bar, the house club Mazzo, Bols's 1575 myth, two hofjes with a wrong date and a maze under them, Ons Huis and a banker's stone of black money.
Pin: Rozentheater, a picture palace with Pierrots on the door.
Members: Rozentheater, a picture palace with Pierrots on the door (N); Café Theo Ruiter, the resistance man's literary bar (N); Club Mazzo, behind an upholsterer's granite front (gone) (O); Bols on the Rozengracht, and the year 1575 (N); Rozenhofje, an almshouse on an old pleasure maze (N); Rijpenhofje, where the date over the door is wrong (N); Ons Huis, where the classes were meant to meet (N); Prinsengracht 206, the banker's stone and the black money (N).

**Van Houten's recycled gables in the Laurier streets** (Nice, housing). `jo-laurier`
A building inspector saved stone tops from condemned houses and put them on 1930s fronts; around them Breitner's view, a hidden convent chapel, the last tile bakery, the Lutheran orphanage and the unemployment blocks of 1915.
Pin: Eelke van Houten's second-hand gables.
Members: Eelke van Houten's second-hand gables (N); Rozenstraat's 1934 row under borrowed gable tops (N); Laurierstraat's "fight unemployment" blocks of 1915 (O); Tweede Laurierdwarsstraat, what the clearances left standing (O); Birthplace of the Jesuit general Jan Roothaan (O); Breitner's view on the Lauriergracht (N); De Voorzienigheid's hidden chapel and the ad agency inside (N); Lauriergracht 12, the last tile bakery behind a barrow passage (O); The Lutheran orphanage on the Lauriergracht (O).

**Elandsstraat's courts** (Nice, housing). `jo-elandsstraat`
Hofje Venetiae and its locked chest, the Catholic boys' orphanage, the Turkish emperor's gate, Hof van Parijs on the Boerengang slum and Concordia's workers' court.
Pin: Hofje Venetiae.
Members: Hofje Venetiae (N); Platanenhof, the Catholic boys' orphanage (N); De Turksche Keizerspoort, a Turkish flag in the Hazenstraat (O); Hof van Parijs (O); Concordia's hofje of workers' homes on the Lijnbaansgracht (O).

**Jordaan legends at the Elandsgracht** (Nice, street-art). `jo-elandsgracht`
Johnny Jordaan's statue garden a neighbour willed into being, the robber Jaco's fort, a statue that paid off a bar tab and the wooden bridge set on fire in 1934.
Pin: Johnny Jordaanplein, the statue garden a neighbour willed into being.
Members: Johnny Jordaanplein, the statue garden a neighbour willed into being (N); Fort van Sjako gable stones (N); Vaste klant, a statue that paid off a bar tab (N); Bridge 102, the wooden footbridge of the Looiersgracht (O).

**Walenhoek's social experiments** (Nice, civic). `jo-walenhoek`
The labour exchange that sorted you at the door, a refuge that asked no repentance, the oldest workers' homes still standing, a hofje without a courtyard, two schools on a cemetery, a hotel for single men and a gym hall that says rest is rust.
Pin: Arbeidsbeurs, the labour exchange that sorted you at the door.
Members: Arbeidsbeurs, the labour exchange that sorted you at the door (N); The refuge for the needy in the Walenhoek (N); Hana's model homes, the oldest workers' housing still standing (N); Hofje van de Weduwe Roosen (O); Two schools on the old Leidse cemetery (N); ATVA, the hotel for single working men (N); Turnzaal of 1887, the gym hall with Rust Roest on its front (N).

**Prinsengracht at the Leidsegracht** (Okay, curiosities). `jo-leidsegracht`
Eyes shut and eyes open on a school, Saturn eating his child, a silk trader's herring-buss pun and the city masons' house where the canal stops.
Pin: J.J. van Noortschool, eyes shut and eyes open.
Members: J.J. van Noortschool, eyes shut and eyes open (N); Saturn eating his child, a gable stone on the Prinsengracht (O); In de Buis, a silk trader's pun on the corner of the Leidsegracht (O); The city masons' house at the dead end of the Leidsegracht (N).

**Raampoort, police tower and drama school** (Nice, civic). `jo-raampoort`
Baantjer's police station with a castle tower, the first drama school's little stage, the statue parked 'temporarily' since 2008, houses below the street on the bastion, a hofje with no courtyard and the buildings for the poorest.
Pin: Bureau Raampoort, the police station with a castle tower.
Members: Bureau Raampoort, the police station with a castle tower (N); The first Tooneelschool building, Marnixstraat 150 (N); Nieuwe Naatje, the statue parked "temporarily" since 2008 (O); Marnixstraat 291–293, houses on the old bastion below the street (N); Hamer- en Bouwershofje, two old hofjes moved to the city's edge (N); Bloemstraat's buildings for the poorest (N).

**The Jordaan's service edge on the Singelgracht** (Nice, infrastructure). `jo-singelgracht`
A timber clinic for the poor, the Zandvoort tram's third rail, the lost fruit market's quays, Verhulst on the substation and Zanstra's buttocks, the garage built for a metro that never came.
Pin: Europarking, the garage nicknamed Zanstra's buttocks.
Members: Europarking, the garage nicknamed Zanstra's buttocks (N); A timber clinic for the poor and a fire station at the city's edge (N); Rozengracht bridges and the tram to Zandvoort (N); The lost fruit market's last blocks, Marnixstraat 200–220 (N); Energie en tijd, Verhulst on the substation (N).

## Grachtengordel-West

### Standouts

- Homomonument, three pink triangles (A → N)
- Huis Bartolotti and the White House next door (A → N)
- De Groote Keijser, the squat that armed itself (A → N)
- Bombs on the Blauwburgwal, May 1940 (A → N)
- O Johnny, the gaper that replaced a gaper (A → N)
- Rode Hoed, the biggest hidden church in the country (A → A)
- Van Bottenburg's bookshop, where Trouw was printed in secret (A → N)
- Felix Meritis, from Enlightenment club to Communist HQ (A → N)
- Huis Nienhuys, a tobacco château that keeps the war archives (A → N)
- De Poezenboot, the cat boat on the Singel (N → N)

### Clusters

**Westermarkt beyond the tower** (Nice, hidden-history). `gw-westermarkt`
Descartes's lodging, the knobbly elm, the meat hall on the old graveyard, the office whose demolition founded Hendrick de Keyser, Anton de Kom's house and the Syriac church.
Pin: Westermarkt 6, where Descartes fathered a daughter.
Members: Westermarkt 6, where Descartes fathered a daughter (N); The Knobbeliep, Amsterdam's own knobbly elm (N); The meat hall on the old Westerkerk graveyard (N); Huize Labor, the office that founded a heritage society (N); Reestraat 6, where Anton de Kom lived (N); Moeder Godskerk (Church of Our Lady), Syriac and Catholic (N).

**Keizersgracht at the Leliegracht** (Nice, hidden-history). `gw-leliegracht`
The House with the Heads, the South African library whose books were thrown in the canal, a salon that moved to The Hague, the first VU, the Astoria tower, Van Campen's first front and Potgieter on his books.
Pin: Huis met de Hoofden (House with the Heads).
Members: Huis met de Hoofden (House with the Heads) (N); Zuid-Afrikahuis, the library whose books were thrown in the canal (N); Keizersgracht 143, the room that moved to The Hague (O); The first home of the Vrije Universiteit (N); Astoria, a life insurer's tower on the Leliegracht (N); Coymanshuis, Jacob van Campen's first known design (N); Potgieter's house, with the poet on the front (O).

**Raadhuisstraat, a tram street cut through the canals** (Nice, infrastructure). `gw-raadhuisstraat`
Kramer's bridges with Krop's fauns, crows and frogs, the gallery of dragons, kangaroos for insurance, the Boer War cigar shop and the bank robbed by speedboat.
Pin: Raadhuisstraat, a tram street cut through the canals.
Members: Raadhuisstraat, a tram street cut through the canals (O); Raadhuisstraat bridges, with fauns, crows and frogs (N); The Raadhuisstraat gallery and 't Binnenhuis (N); The Assurantiehuis, with kangaroos for insurance (O); De Transvaalsche Boer, a cigar shop from the Boer War craze (N); Singel 250, the colonial bank robbed by speedboat (N).

**Torensluis and the Singel's north bend** (Nice, infrastructure). `gw-torensluis`
The bridge with prison cells inside, the Night Watch captain's house, the House with the Noses, the seamstress of the Bergstraat, a bank archive posing as five houses and an insurer around an old door.
Pin: Torensluis, the bridge that carried a tower.
Members: Torensluis, the bridge that carried a tower (N); De Dolphijn, home of the Night Watch captain (N); Huis met de Neuzen (the House with the Noses) (O); De Naaister and the corn measure, Bergstraat (N); Twentsche Bank archive, five fronts that are one building (O); Centraal Beheer's first office, an old house inside a new front (O).

**Multatuli's alley and the Langestraat** (Nice, odd-museums). `gw-langestraat`
The writer's birth house museum, Boldoot's coach house, a cable box like no other, the tailors' saint, the house that turned to face the canal and an office that swallowed a row.
Pin: Multatuli's birth house and museum.
Members: Multatuli's birth house and museum (N); Boldoot's coach house (Langestraat 47) (O); The one-of-a-kind cable box in the Langestraat (O); The tailors' saint (Langestraat 78) (O); De Drie Traancoopers, the house that turned to face the canal (N); Langestraat 3-19, one office that swallowed a row (O).

**Whale oil, hofjes and hidden churches of the northern canals** (Nice, religious). `gw-north`
The whalers' warehouses with oil pits under the floor, a hofje on a brewery, a hofje on a Mennonite church, the old De Zaaier turned wrestling gym, the sunflower house's secret Mass and a garden house that moved.
Pin: Groenlandse Pakhuizen (the whale-oil warehouses).
Members: Groenlandse Pakhuizen (the whale-oil warehouses) (N); Van Brienenhofje, an almshouse on a brewery (N); Zon's Hofje, on the site of a Mennonite church (N); The old De Zaaier on the Keizersgracht, the church that became a wrestling gym (N); Herengracht 14, the sunflower house and its hidden church (N); The garden house that moved behind Keizersgracht 62 (O).

**Prinsengracht by the Nine Streets** (Nice, hidden-history). `gw-ninestreets`
The frog stone for those who hid, a nursery school paid for by a captured ship, a hofje with a stucco organ, the burned theatre's bakery and the library that pretended to be canal houses.
Pin: The frog stone of Prinsengracht 535.
Members: The frog stone of Prinsengracht 535 (N); Amsterdams Welvaren, a nursery school paid for by a captured ship (N); Nieuwe Suykerhofje, a Catholic hofje with a fake organ (N); The poor-relief bakery on the burned theatre's site (O); The old central library that pretended to be canal houses (N).

**Keizersgracht's orphan gateways and the forger's house** (Nice, hidden-history). `gw-gates`
The Schouwburg's gate that survived the fire, the Heerenlogement gate carried off by an auctioneer, Van Meegeren's house bought with fake Vermeers, the stone map of Marseille and a banker's prefab palace.
Pin: Huis Marseille, a map of Marseille on a canal house.
Members: Huis Marseille, a map of Marseille on a canal house (N); Schouwburgpoort, the gate of the first city theatre (N); The Heerenlogement gate, carried off from the Grimburgwal (N); Roode Huys, where Han van Meegeren lived on his fake Vermeers (N); Huis Fuld, a banker's palace in prefab ornament (O).

**Herengracht at the Huidenstraat** (Nice, housing). `gw-huidenstraat`
Vingboons's four Cromhout gables and the neighbour who would not sell, the Grachtenmuseum, a stair tower rising from the water, the Heemskinderen on one horse, a globe too exuberant and an upside-down coach house.
Pin: Grachtenmuseum (Museum of the Canals).
Members: Grachtenmuseum (Museum of the Canals) (N); Cromhout houses and the neighbour who would not sell (N); Tower on the Beulingsloot (Herengracht 395) (O); De Vier Heemskinderen, Herengracht 394 (O); The celestial globe of Singel 390 (N); Proeflokaal A. van Wees in a coach house with a turret (N).

**Herengracht and Singel offices** (Okay, civic). `gw-offices`
Krop's telephone poles on the city exchange, a frog swallowing a drainpipe, a gas-mantle works with rooster tiles, the other Mart Stam and a prince's condition on a wedding-present house.
Pin: The city telephone exchange on the Singel.
Members: The city telephone exchange on the Singel (N); The two Van Brienen houses (N); Office of the American funds (Herengracht 255) (O); Gas mantle factory with rooster tiles (Herengracht 267) (O); The other Mart Stam's office (Herengracht 303) (O).

## Burgwallen-Nieuwe Zijde

### Standouts

- Centraal Station's two plaques: the cold welcome and the sergeant (A → N)
- Dominicuskerk, the church that broadcast the first mass on Dutch radio (A → N)
- Victoria Hotel and the two houses that would not sell (A → A)
- Nieuwezijds Voorburgwal 282, where Tina Strobos hid more than a hundred people (A → N)
- Telegraaf building, the newspaper fortress on the Nieuwezijds (A → N)
- De Papegaai, the hidden church on the Kalverstraat (A → A)
- De Gouden Bril, the optician with a monkey on the roof (A → A)
- Rasphuispoort, the gate of the house of correction (A → N)

### Clusters

**Arriving at Centraal Station** (Nice, infrastructure, spread 387 m). `nz-station`
The coffee house taken apart for the metro and put back, the herring-fleet tile tunnel, the last elm, the garage under the water, tomorrow's weather underground, the 'gilded coffin' and the arcade that blew shut.
Pin: Noord-Zuid-Hollands Koffiehuis, the tram station taken apart for the metro.
Members: Noord-Zuid-Hollands Koffiehuis, the tram station taken apart for the metro (N); Een zeegezicht aan het IJ, the tiled cycle tunnel (N); The last elm of the Stationsplein (N); The bicycle garage under the water at Stationsplein (N); Art under Centraal Station, tomorrow's weather and a mosaic seen through peepholes (O); Pakketpostgebouw, the parcel machine beside Centraal Station (O); The Lloyd building, the "gilded coffin" on the Prins Hendrikkade (N); Passage Central, the shopping arcade that blew shut (N); Canvas van Amsterdam on the Haringpakkersbrug, where the Haringpakkerstoren stood (O).

**Nieuwezijds Kolk, where the city began** (Nice, hidden-history). `nz-kolk`
The castle found under the street, the corn measurers' house that may have saved the city for the Catholics, the dike-arm lanes, the Lutheran dome that could not be a tower, the soup kitchen and the last courier's corner.
Pin: Korenmetershuisje (the corn measurers' house).
Members: Korenmetershuisje (the corn measurers' house) (N); Nieuwezijds Kolk, the castle under the street (N); Oude Braak and the Nieuwezijds Armsteeg, the dike-arm lanes (O); In de Wildeman, the liqueur distillery that became a beer café (N); Ronde Lutherse Kerk, the dome that was not allowed to be a tower (N); Keuken van 1870, the soup kitchen of the Spuistraat (N); Annick van Hardeveld, the last courier (N).

**Damrak, the boulevard that never was** (Nice, curiosities). `nz-damrak`
A jumble full of jokes: baboons on an insurer's roof, the newsreel cinema's neon arrow, the Oersoep passage, the photographer's putti and the excise house across the water.
Pin: Cineac Damrak, the newsreel cinema.
Members: Cineac Damrak, the newsreel cinema (N); Damrak, the boulevard that never was (N); De Utrecht, the insurance office with baboons on the roof (N); Beurspassage, the "Amsterdam Oersoep" (N); Nieuwendijk 89, the photographer's front with Daguerre and Niépce (N); Accijnshuis (the excise house) (N).

**Spuistraat south, seamstresses and squatters** (Nice, hidden-history). `nz-spuistraat`
Gerzon's thousand seamstresses, the model bakery, the cashiers' bank with its elephant clock, Vrankrijk's presses, the longest-running squat and the faculty the students occupied.
Pin: The Tabakspanden, Amsterdam's longest-running squat.
Members: The Tabakspanden, Amsterdam's longest-running squat (N); Vrankrijk (O); Bungehuis, from grain traders' office to occupied faculty to Soho House (N); Gerzon's fashion works, where a thousand seamstresses sewed (N); Stähle's model bakery on the Spuistraat corner (N); Kas-Associatie, two cashiers' banks and an elephant clock (N).

**Behind the palace** (Nice, civic). `nz-palace`
The post office nicknamed Perenburg, Amsterdam's Fleet Street, a police post that became a toilet and a café, the Walk of Pride, and the faculty built to look like a street.
Pin: Magna Plaza, the post office nicknamed Perenburg.
Members: Magna Plaza, the post office nicknamed Perenburg (N); The newspaper street, from Handelsblad to De Standaard (N); Politieposthuisje, the police post that became a public toilet and a café (N); Walk of Pride, queer names from the Dam to the Homomonument (N); P.C. Hoofthuis, the faculty built to look like a street of houses (N).

**The Dam's corners** (Nice, hidden-history). `nz-dam`
The shooting of 7 May 1945 and its 32 name stones, the bank that settled the Dam question, P&C's stones from the houses it replaced, Industria's medieval lock and the king's lanterns.
Pin: The Dam shooting of 7 May 1945 and its 32 name stones.
Members: The Dam shooting of 7 May 1945 and its 32 name stones (N); De Bisschop, the corner that settled the Dam question (O); Peek & Cloppenburg: from the Nieuwendijk to the Dam (N); Industria and the Beurspoortje (O); The six lanterns of the Royal Palace, lit for a king who never saw them (O).

**Look up in the Kalverstraat** (Nice, curiosities). `nz-kalverstraat`
Shops of 1890 still talking one floor up, the booksellers' palace, the Holy Place hidden in a shopping block, the Hotel Polen fire and 47 saved gable stones on the orphanage wall.
Pin: Look up in the Kalverstraat.
Members: Look up in the Kalverstraat (N); Kalverstraat 10, the booksellers' palace above the shops (O); Nieuwezijds Kapel, the Holy Place inside a shopping block (N); Hotel Polen, the fire of 1977 (gone) (O); Sint Luciënsteeg, the gable stone wall (N).

**Rokin's west bank to the Munt** (Nice, curiosities). `nz-rokin`
Hajenius's 1915 interior, the watchmaker's front of time, Wilhelmina on horseback, the reading club that barred Aletta Jacobs, the artists' club, the alley of the oil pressers and the mint guardhouse.
Pin: Hajenius, the cigar shop with its 1915 interior.
Members: Hajenius, the cigar shop with its 1915 interior (N); Henri Julien, the watchmaker's house on the Rokin (N); Rokin station: the archaeologists' wall and Wilhelmina on horseback (N); Het Leesmuseum, the reading club that would not have Aletta Jacobs (O); Arti et Amicitiae, the artists' club on the corner of the Spui (N); Olieslagerssteeg, the lepers' house, the oil pressers and Maison de Bonneterie (O); The guardhouse at the Munttoren, where the coins were struck (N).

**Spui, where Provo was born** (Nice, hidden-history). `nz-spui`
Het Lieverdje, the Maagdenhuis occupations, Athenaeum, the Lutheran church in a warehouse's name, the photographer's sun palace, Euwe's arsenal and the HELP neon and bridge for Joes Kloppenburg.
Pin: Het Lieverdje and the words on the Spui.
Members: Het Lieverdje and the words on the Spui (N); Maagdenhuis, the girls' orphanage the students occupied (N); Athenaeum, the bookshop in the iron-fronted corner of the Spui (N); Oude Lutherse Kerk, the church behind the warehouse name (N); Gebouw Helios, a photographer's sun palace on the Spui (N); Militiegebouw, the city arsenal where Euwe played for the world title (N); The neon HELP in the Voetboogstraat (Joes Kloppenburg) (N); Joes Kloppenburgbrug, a bridge against senseless violence (O).

**Drink and smoke behind the Nieuwe Kerk** (Nice, food-drink). `nz-drink`
The oldest tasting room, Heineken's first beer house with its numbered steaks, the cigar shop named after Java's princely lands and a boy's first stone in the Molsteeg.
Pin: De Drie Fleschjes, the liqueur distillery behind the Nieuwe Kerk.
Members: De Drie Fleschjes, the liqueur distillery behind the Nieuwe Kerk (N); Die Port van Cleve, Heineken's first beer house (N); De Vorstenlanden, Eduard Huf's cigar shop in the Zoutsteeg (O); Molsteeg 4, the first stone laid by an eleven-year-old (O).

**Nieuwezijds Voorburgwal north, brokers and the last straw** (Nice, civic). `nz-voorburgwal`
The brokers' guild house wrapped by a newspaper's castle, the office tower whose outcry dressed later buildings as canal houses, a tile sermon, a cigar factory and a calf that is a horse.
Pin: Makelaers Comptoir, the brokers' guild house.
Members: Makelaers Comptoir, the brokers' guild house (N); 't Kasteel van Aemstel, the newspaper's castle that became INK Hotel (N); Candida, the office tower that was the last straw (O); Think before you act: the tile sermon at Nieuwezijds Voorburgwal 112-114 (O); Justus van Maurik's cigar factory (N); Spuistraat 53, the Flying Calf that is a horse (O).

## Burgwallen-Oude Zijde

### Standouts

- Het Veilinghuisje, the auction house everyone thought was demolished (A → N)
- Blaauwlakenblok, the block the squatters held and the residents rebuilt (A → N)
- Max Beckmann's exile studio in a tobacco attic (Rokin 85) (A → A)
- Stadsbank van Lening (the city pawnshop) (A → N)

### Clusters

**Around the Nieuwmarkt, migrant Amsterdam** (Nice, hidden-history). `nm-chinatown`
The stokers' street that was the first Chinatown, the Zeedijk's palace temple, and the Nieuwmarkt café that was home to Surinamese musicians and Black GIs.
Pin: He Hua temple, a Chinese palace on the Zeedijk.
Members: He Hua temple, a Chinese palace on the Zeedijk (N); Binnen Bantammerstraat, Amsterdam's first Chinatown (N); Cotton Club, the Nieuwmarkt's Surinamese jazz café (N).

**Oudemanhuispoort, the book stalls and the tallest tree** (Amazing, hidden-history). `oz-university`
The covered passage of book stalls and, in its courtyard, the tallest tree in Amsterdam; around it the chapel where the university began, the dreaded hospital turned library and the house on three canals where banned poetry was printed.
Pin: Oudemanhuispoort and its book stalls.
Members: Oudemanhuispoort and its book stalls (A); The tallest tree in Amsterdam, Oudemanhuispoort courtyard (A); Agnietenkapel, where the university began, and the Purperhoedenveem (N); Binnengasthuis, from dreaded hospital to university library (N); Huis aan de Drie Grachten and its wartime bookshop (N).

**Spinhuis, penance and temperance** (Amazing, hidden-history). `oz-spinhuis`
The women's prison with its whipping gate, the penitents' convent for 'fallen' women, the Walloon church's gate of skulls with the smallest house on it, and a distiller's shop preaching against drink.
Pin: Spinhuis, the women's prison and its whipping gate.
Members: Spinhuis, the women's prison and its whipping gate (A); Barndesteeg, the penitents' convent and the mission hostel (N); Walloon Church and its gate of skulls (N); Kleinste huis (the smallest house), Oude Hoogstraat 22 (N); 't Schipblok, a liqueur distiller's shop with a warning against drink (N).

**The red-light district's own monuments** (Nice, street-art). `oz-redlight`
Belle and the groped breast for the sex workers, the red window of the Oude Kerk, the narrowest alley's 3D arms, Majoor Bosshardt on her bench and the notorious police station.
Pin: Belle and the groped breast, the sex workers' corner of the Oudekerksplein.
Members: Belle and the groped breast, the sex workers' corner of the Oudekerksplein (N); The red window of the Oude Kerk ("Het Rode Raam") (N); Trompettersteeg, the narrowest alley and its hidden coat of arms (N); Majoor Bosshardt on her bench (N); Bureau Warmoesstraat, the police station of the Wallen (gone) (O).

**The Nes, Amsterdam's tobacco street** (Nice, industrial). `oz-tobacco`
Brokers' offices with sample attics under saw-tooth roofs, offices dressed as gentlemen's houses, and the private footbridge to the tobacco auction.
Pin: The Nes, Amsterdam's tobacco street.
Members: The Nes, Amsterdam's tobacco street (N); Tobacco offices dressed as canal houses (O); Makelaarsbruggetje (the tobacco brokers' bridge) (N).

**Rokin's east bank to the Doelen** (Nice, civic). `oz-rokin`
The travertine canal-tour booth, the central bank turned antiquities museum, the postmodern mirror the critics hated, Krop's insured blessings, a mosaic ship, and the hall where the Night Watch hung.
Pin: Rederij Kooij ticket booth.
Members: Rederij Kooij ticket booth (N); Allard Pierson, in the old Nederlandsche Bank (N); Rokin 99, the postmodern front critics hated (N); Hildo Krop's insured blessings (Rokin 115) (O); The Marine Insurance building and its mosaic ship (Rokin 69) (O); Doelen Hotel, where the Night Watch used to hang (N).

**The old city hall quarter** (Nice, civic). `oz-prinsenhof`
The Prinsenhof, city hall for 180 years, Krop's shouting urinal opposite, and the meat hall where Vondel's actors played and Dr Tulp dissected upstairs.
Pin: Prinsenhof, convent, admiralty and city hall (now The Grand).
Members: Prinsenhof, convent, admiralty and city hall (now The Grand) (N); Hildo Krop's shouting urinal (Oudezijds Voorburgwal) (N); Vleeshal and the Brakke Grond gate, theatre and anatomy over the meat market (N).

**The head of the Zeedijk** (Nice, hidden-history). `oz-zeedijk`
One of two wooden houses, the sailors' chapel, Chet Baker's window, the neon 'Jesus loves you', the ghost alley and Bet van Beeren's café 't Mandje.
Pin: 't Aepgen, one of the city's two wooden houses.
Members: 't Aepgen, one of the city's two wooden houses (N); Sint-Olofskapel, the sailors' chapel that became a hotel's meeting hall (N); Chet Baker's window, Hotel Prins Hendrik (N); "GOD ROEPT U / JESUS LOVES YOU", the neon over the station square (N); Spooksteeg, the ghost alley of the Zeedijk (O); Bet van Beeren and Café 't Mandje (N).

**The Schreierstoren corner** (Nice, hidden-history). `oz-kolk`
The weepers' tower that probably wasn't, the arak office with monkeys and elephants, a paint factory's front standing in the water, the ship chandler's tobacco barrel and the Catholics' basilica.
Pin: Schreierstoren, the weepers' tower that probably wasn't.
Members: Schreierstoren, the weepers' tower that probably wasn't (N); Gebouw Batavia, an arak company's office with monkeys and elephants (N); Vettewinkel's paint factory, a façade that survived the fire (O); Ship Chandlers Warehouse (Het Tabaksvat) (O); Sint-Nicolaasbasiliek, the Catholics' answer opposite the station (N).

**Old houses of the Oudezijds Voorburgwal** (Nice, housing). `oz-voorburgwal`
De Keyser's crowned turnip, a house on bare sand with no piles, the timber house of Riga in a brick coat, the old women's home the squatters saved and a uniform maker's bridge that hid a casino.
Pin: De Gecroonde Raep (the crowned turnip).
Members: De Gecroonde Raep (the crowned turnip) (N); Oudezijds Voorburgwal 61, a 16th-century house standing on bare sand (O); Het Wapen van Riga, a timber house in a brick coat (O); Vredenburgh, from old women's home to squat (N); Mata Hari, the gambling palace behind a uniform maker's bridge (O).

**Behind the Dam** (Nice, curiosities). `oz-behinddam`
The medieval brothel alley that runs through a hotel, Krasnapolsky's winter garden and early power station, a monkey holding up a corner, De Roos's carved menagerie and a goldsmith's bank-like front.
Pin: Pijlsteeg, the medieval brothel alley that runs through a hotel.
Members: Pijlsteeg, the medieval brothel alley that runs through a hotel (N); Krasnapolsky's Winter Garden and the power station behind it (N); The monkey holding up the corner (Damstraat 20) (O); De Roos, an art auction house with a carved menagerie (Rokin 9-15) (O); Drijfhout's gold and silver works, on the site of café Victoria (N).

**The East India House and the Koestraat** (Nice, civic). `oz-voc`
The first VOC building, where the Heren XVII met, the wine merchants' guild house whose rescue founded a heritage society, the Latin school street and the restored Lutherans' church.
Pin: Oost-Indisch Huis (East India House).
Members: Oost-Indisch Huis (East India House) (N); Wijnkopersgildehuis (wine merchants' guild house) (N); Koestraat, the Latin school street and the inventor's stone (O); Compagnietheater (former Restored Lutheran Church) (O).

## Nieuwmarkt/Lastage

### Standouts

- Scheepvaarthuis (the Shipping House) (A → N)
- Armenian church in a warehouse (Surp Hoki) (A → A)
- Kweekschool voor de Zeevaart, the school for the sons of Dogger Bank (A → N)
- Staalmeestersbrug and Monet's view of the Zuiderkerk (A → N)
- Boas diamond factory, once the largest in Europe (A → N)
- The Stopera, the NAP under it and the Violist (A → N)

### Clusters

**The squatters' Nieuwmarkt** (Amazing, hidden-history, spread 384 m). `nm-squatters`
Where the motorway and the metro were meant to go: De Pinto's house that stopped the road, the riot remembered in the metro station, the Pentagon built with the residents, the nailed-up Lastage on a gable stone, the squatters' bookshop and the map of 200 squats.
Pin: Huis De Pinto, the house that stopped a motorway.
Members: Huis De Pinto, the house that stopped a motorway (A); Nieuwmarkt metro station, the riot remembered underground (A); Pentagon and the rebuilt Nieuwmarkt, building for the neighbourhood (N); Lastage: the 1971 stone of nailed-up windows and the bridges for the neighbourhood's fighters (N); Fort van Sjakoo, the squatters' bookshop that bought its own building (O); The Marionettentheater in the old Smederij (O); Schottenburch, the warehouse older than its date stone (N).

**Uilenburg, the Jewish island** (Nice, hidden-history). `nm-uilenburg`
The synagogue behind the wall, a bathhouse closed on the Sabbath, the first slum clearance and its kosher school, Jewish School No. 1, the last nursery-school house and the Valkenburgerstraat's one old block.
Pin: Uilenburgersjoel, the synagogue behind the wall.
Members: Uilenburgersjoel, the synagogue behind the wall (N); Splendor, the bathhouse of the Jewish island (N); Uilenburg rebuilt, the workers' block and the Witte Olifant school (N); Joodsche School nr. 1 (Van Alphenschool) and its restored neighbour (N); The bridge yard and the last of the Jewish nursery school (O); Valkenburgerstraat 202–210, the street's last old building (O).

**Jonas Daniël Meijerplein and Vlooienburg** (Nice, hidden-history). `nm-meijerplein`
The Dokwerker where the February raid began, the orphanage traced in words in the paving, the island under the Stopera with its late plaque and Spinoza, and the hofje residents wanted to call Februaristraat.
Pin: Megadlé Jethomim and the Monument Joods Verzet.
Members: Megadlé Jethomim and the Monument Joods Verzet (N); De Dokwerker and the February Strike (N); Vlooienburg under the Stopera, the plaque that took thirty years, and Spinoza (N); A.S. Onderwijzerhof, the square the neighbours wanted to call Februaristraat (O).

**Waterlooplein's poor relief** (Nice, civic). `nm-waterlooplein`
The peat, grain and butter stores of the poor relief, the back gate where the poor queued, and the temple-fronted church that grew out of two houses called Moses and Aaron.
Pin: Mozes en Aäronkerk, the church named after two houses.
Members: Mozes en Aäronkerk, the church named after two houses (N); Arsenaal, the poor relief's peat stores (N); Oudezijds Huiszittenhuis, where the poor queued for food and peat (N).

**Zuiderkerk and the head of the Jodenbreestraat** (Nice, hidden-history). `nm-zuiderkerk`
The first Protestant church, Rembrandt's first lodging at Uylenburgh's, the lepers' gate that moved, the last house of the Joden Houttuinen and the spot where the 'ugliest building' came down to cheers.
Pin: Zuiderkerk, the first church built for Protestants.
Members: Zuiderkerk, the first church built for Protestants (N); Uylenburgh's corner, where Rembrandt lived first (N); Leprozenpoort and the Grenspaal: the lepers' gate that moved, and a turtle carrying city debris (N); Goslerhuisje, the last house of the Joden Houttuinen (N); Where the Maupoleum stood, the "Colosseum", the green glass box and the tunnel (N).

**Groenburgwal and Raamgracht, cloth halls and hidden churches** (Nice, religious). `nm-clothhalls`
Cloth inspection halls turned into the English church, a café hall without a front door and the lab of the first chemistry Nobel; round the corner a hidden Jesuit church, a charity office and Blauw Jan's menagerie site.
Pin: Christ Church, the English church in a cloth hall.
Members: Christ Church, the English church in a cloth hall (N); Saaihal, the serge inspection hall with no front door (N); Van 't Hoff's laboratory, where the first chemistry Nobel was earned (N); Huis Serne, a century of stage costumes and a ceiling that ended a painter (O); Jesuit house church behind a canal front (Raamgracht 6–8) (N); Raamgracht 4, the charity office that became Vrij Nederland's (N); Workers' hall on the site of the Blauw Jan menagerie (N); Poppenhuis and De Kloof, from Catholic palace to shelter (N).

**The Trippenhuis and the house as wide as its door** (Nice, housing). `nm-trippenhuis`
The arms dealers' widest front with mortar chimneys, the servant's house opposite, the first literary café, a Jewish jewellers' stone and a herb shop of 1743.
Pin: Trippenhuis, the arms dealers' palace.
Members: Trippenhuis, the arms dealers' palace (N); Klein Trippenhuis (the little Trip house) (N); De Engelbewaarder, the first literary café (N); Premsela & Hamburger, the jewellers of the Nieuwe Hoogstraat (O); Jacob Hooy & Co., the herb shop of 1743 (O).

**The Oudeschans harbour front** (Nice, industrial). `nm-oudeschans`
The leaning Montelbaanstoren, the warehouse where New Amsterdam was run, the Company's Rapenburg stores, Kramer's lift bridge, Van der Mey's 'too heavy' harbour bridges and a seamen's doctor's pun stones.
Pin: Montelbaanstoren, the tower that had to be pulled straight.
Members: Montelbaanstoren, the tower that had to be pulled straight (N); West-Indisch Pakhuis (the West India Company warehouse) (N); D'Oude Werf, Company warehouses on Rapenburg (O); Kikkerbilssluis, Piet Kramer's lift bridge (O); Kalkmarkt 8, the seamen's doctor and his pun stones (O); Van der Mey's heavy bridges (Brug 283 and the Bantammerbrug) (N).

**Nieuwmarkt square beyond the Waag** (Nice, hidden-history). `nm-square`
The plane trees the residents fought over, a bird carved from a fallen paving slab, the plaque for four children shot there, and the 1454 sluice under the square.
Pin: Nieuwmarkt square: the plane-tree fight, the paving-slab bird and the scaffold.
Members: Nieuwmarkt square: the plane-tree fight, the paving-slab bird and the scaffold (N); The plaque for the Nieuwmarkt children, De Flesseman (N); The sluice under the Nieuwmarkt and the old fish hall (N).

**De Ruijterkade, the IJ front behind the station** (Nice, infrastructure). `nm-ruijterkade`
A wooden ticket office floated away and brought back, the castle fire station, the last shipping offices, the HIV/AIDS abacus and a food forest in crates.
Pin: NACO-huisje and the boat offices of the IJ jetties.
Members: NACO-huisje and the boat offices of the IJ jetties (N); Oud Nico, the castle fire station on the IJ (N); De Ruijterkade's last shipping offices (N); Living by Numbers, the HIV/AIDS monument on the IJ (N); Ruijtergaard, a food forest in crates on the IJ quay (O).

**Rapenburgerstraat after the deportations** (Nice, hidden-history). `nm-rapenburg`
The Jewish girls' orphanage whose Hebrew cornices the residents restored, the house of learning, artists' studios built in the gaps, a merchant's house with nine lives and the shooting of 5 May 1945.
Pin: Jewish girls' orphanage of the Rapenburgerstraat.
Members: Jewish girls' orphanage of the Rapenburgerstraat (N); Beth Hamidrasj Ets Haim, house of learning with a synagogue at the back (O); Artists' studio houses in the gaps of the Jewish quarter (O); Huize Avondrood, a merchant's house with nine lives (Nieuwe Herengracht 143) (N); Valkenburgerstraat, shot after the surrender (5 May 1945) (O).

## Oostelijke Eilanden/Kadijken

### Standouts

- De Engel, the angel on the factory chimney (A → A)
- Werf 't Kromhout and the yard bosses' houses (A → A)
- Oranje-Nassau Kazerne, Napoleon's barracks where the Artis lions slept (A → N)
- "Er ligt een roofstaat", the ship of the islands (A → N)
- The floating gardens of Robert Jasper Grootveld, Wittenburgervaart (A → N)

### Clusters

**Kattenburg and Wittenburg, what the clearances left** (Nice, hidden-history). `eil-kattenburg`
Every house on Kattenburg came down in the 1960s; one corner, a church the city meant to demolish, a gate to a vanished church, the 'new old' fronts and the islanders' own tiled arch are what is left.
Pin: Oosterkerk, the islands' church the city nearly demolished.
Members: Oosterkerk, the islands' church the city nearly demolished (N); Old Kattenburg's last corner (N); Kattenburgerplein, the old fronts that are new (N); Kattenburger Triomfboog, the islanders' own history in tiles (N); The gate to a church that is gone (Annakerk presbytery) (O).

**Windroosplein, the islanders' own corner** (Nice, green). `eil-windroos`
Residents' gardens instead of a basketball court and a dog field, the lifeboat shed whose name trains passengers read, and the school children fought over before Constant painted in it.
Pin: Windroosplein: the garden instead of a basketball court, and De Waarheid's stone.
Members: Windroosplein: the garden instead of a basketball court, and De Waarheid's stone (N); Plukbos, the food forest behind the Wittenburg blocks (N); Lifeboat shed on the Windroosplein (N); Tjerk Hiddesschool, the school children fought over and Constant's studio (N).

**Marineterrein, the navy yard you can walk into** (Nice, industrial, spread 551 m). `eil-marineterrein`
360 years behind a wall: the Admiralty yard, the firing range turned grandstand, the wooden lock-gate shed moved for the IJ tunnel, the Chicago bridge and Ramses Shaffy's maple.
Pin: Marineterrein, the navy yard behind the wall.
Members: Marineterrein, the navy yard behind the wall (N); The Schietbaan, a navy firing range turned into a grandstand (N); Sluisdeurenloods, the wooden shed that moved for the IJ tunnel (N); Mariniersbrug, Amsterdam's Chicago bridge (N); The Shaffyboom, a maple that swallowed the railway fence (N).

**Oostenburg, from VOC ropewalks to Werkspoor** (Nice, industrial). `eil-oostenburg`
The Company twisted its rope here, Werkspoor built diesel engines in the halls, and one row of workers' houses survived the island's zoning for industry.
Pin: The VOC and Admiralty ropewalks.
Members: The VOC and Admiralty ropewalks (N); Werkspoor's halls on Oostenburg (N); The Woning-Maatschappij houses, the islands' last old workers' street (O); The Kogelbron, a granite ball floating on water (O).

**Kadijksplein and the old sea dike** (Nice, hidden-history, spread 344 m). `eil-kadijk`
A bonded dock behind a wall, a sailors' home, a coffee house against gin, the cheap-beer bridge and a distillery café that outlived the IJ tunnel, along a street that is really a dike.
Pin: Zeemanshuis, the sailors' home on the Kadijksplein.
Members: Zeemanshuis, the sailors' home on the Kadijksplein (N); Entrepotdok, the bonded warehouses behind a wall (N); Volkskoffiehuis on the Kadijksplein (N); Hoogte Kadijk, the old sea dike and its last shipyard (N); Sibbelwoningen, the dyke houses saved by squatters (N); Scharrebiersluis, the cheap-beer bridge (N); Café De Druif and the corner that outlived the IJ tunnel (N); The smoking skipper the city said no to (N); Arcam's folded pavilion and the Museumhaven (N).

**Czaar Peterbuurt, the shipyard workers' quarter** (Nice, housing, spread 367 m). `eil-czaarpeter`
Model blocks built after the cellar-dwelling inquiry, the pawnshop that alone survived the 1986 demolitions, the horse-tram depot and a supermarket where you bring the groceries.
Pin: Horse-tram depot of the Tweede Leeghwaterstraat.
Members: Horse-tram depot of the Tweede Leeghwaterstraat (N); Hulpbank van Lening, the pawnshop branch in the Czaar Peterbuurt (N); Czaar Peterbuurt workers' blocks (O); Tkramrepus, the reverse supermarket in the Czaar Peterstraat (N).

**The eastern bastions, De Gooyer and the Funen** (Nice, industrial). `eil-bastions`
The windmill that lost its wind to Napoleon's barracks, a car-free quarter on the best-kept bastion point, the city's first power station, a Bakota guardian on an advertising column and the planner's playground disc.
Pin: De Gooyer, the windmill that lost its wind to Napoleon.
Members: De Gooyer, the windmill that lost its wind to Napoleon (N); Het Funen, a car-free quarter on top of the last bastion (N); Centrale Oost, the city's first power station (O); Mbulu Ngulu, an African guardian of the dead on an advertising column (N); Jakoba Mulder's memorial, a tilted disc where the children kept their playground (N).

## Weesperbuurt/Plantage

### Standouts

- De Burcht (diamond workers' union building) (A → N)
- Weesperplein station: the Cold War shelter, its art and the bridge with a bunker (A → A)
- The Jewish schools of the Stadstimmertuin (Joods Lyceum) (A → N)
- Diamond factories of the Nieuwe Achtergracht (A → N)

### Clusters

**The war in the Plantage** (Amazing, hidden-history). `pla-war`
Around the Hollandsche Schouwburg: the crèche from which children were smuggled out (now Van Eyck's Mothers' House), the artists who blew up the population register, the tram stop of the deportations, the Jews-only theatre and the choir house that became the Resistance Museum.
Pin: Aldo van Eyck's Mothers' House (Hubertushuis).
Members: Aldo van Eyck's Mothers' House (Hubertushuis) (A); The population register attack and the artists' resistance monument (A); The stumbling threshold at the Artis tram stop (Plantage Middenlaan) (N); Desmet, the theatre of many names (Plantage Middenlaan 4) (N); Plancius, the choir's clubhouse (Verzetsmuseum) (N); Café Eik en Linde (Plantage Middenlaan 22) (N); Portuguese Jewish hospital (Henri Polaklaan) (N).

**Nieuwe Keizersgracht, the quay that remembers** (Amazing, hidden-history, spread 338 m). `pla-nieuwekeizersgracht`
Two hundred name plates on the quay edge facing the houses of the murdered, a hidden synagogue in a sexton's flat in 1944, the hospital's washing house, the Russian sjoel and Harry Elte's first synagogue.
Pin: Schaduwkade, the quay that remembers.
Members: Schaduwkade, the quay that remembers (A); Hidden synagogue of the Nieuwe Keizersgracht (nos. 33 and 37) (A); Washing house and nurses' home of the Jewish hospital (N); The Russensjoel and the old "Jodenkerkstraat" (Nieuwe Kerkstraat 149) (O); Harry Elte's first synagogue (Nieuwe Kerkstraat 10–14) (N).

**Weesperstraat, the Jewish high street turned motorway** (Nice, hidden-history). `pla-weesperstraat`
The Wazepergas emptied, stripped and demolished for four lanes; the Glass Palace whose residents went to Sobibor, the thank-you monument nobody wanted, the Jewish school, the Brilleslijper house, and the neighbours now stitching and building the street back.
Pin: Weesperstraat, the Jewish quarter's high street turned city motorway.
Members: Weesperstraat, the Jewish quarter's high street turned city motorway (N); The Glass Palace of the Joodsche Invalide (N); Monument van Joodse Erkentelijkheid, the thank-you nobody wanted next door (N); Palacheschool (Lepelkruisstraat) (N); The Brilleslijper house (Nieuwe Achtergracht 14) (N); Twelve stumbling stones at one door (Nieuwe Prinsengracht 18) (O); The neighbourhood embroidery on the Weesperstraat (Weesperstraat 100) (N); Hertzberger's student house with a street in the air (Weesperflat) (N).

**Sarphati's Amstel end** (Nice, civic). `pla-sarphati`
Sarphati's grand hotel and the masseur who saved it, the Pont Neuf copy of the Hogesluis, the Diamond Exchange that got the trade out of the cafés, the diamond mansion with dolls at the window, and the square saved by swapped measurements.
Pin: Sarphati's Amstel Hotel and the masseur who saved it.
Members: Sarphati's Amstel Hotel and the masseur who saved it (N); Hogesluis (N); Professor Tulpplein, the professor who never was and the street saved by a mix-up (N); Diamond Exchange on the Weesperplein (Diamantbeurs) (N); Sarphatistraat 66, the diamond mansion where dolls watch the street (O).

**Henri Polaklaan, a street of odd houses** (Okay, housing). `pla-polaklaan`
A sculptor's deliberately rough figures, an architect's Frank Lloyd Wright house, a church squeezed into the street wall and the house where Amsterdam played chess every night.
Pin: The sculptor's house (Henri Polaklaan 25).
Members: The sculptor's house (Henri Polaklaan 25) (N); Jac. Baars's own house (Henri Polaklaan 11) (O); Apostolic church in the street wall (Henri Polaklaan 36–40) (O); Amsterdam chess house (Henri Polaklaan 14) (N).

**Wertheimpark, the park that lost its name** (Nice, hidden-history). `pla-wertheimpark`
Renamed in 1942 because Wertheim was a Jew; Wolkers's broken mirrors over Auschwitz ashes, Iron Hein pinned together, a dawn redwood, and Hugo de Vries's house at the gate.
Pin: "Nooit meer Auschwitz", the broken-mirror monument (Wertheimpark).
Members: "Nooit meer Auschwitz", the broken-mirror monument (Wertheimpark) (N); Wertheim fountain (Wertheimpark) (N); Wertheimpark's champion trees, IJzeren Hein and the dawn redwood (N); Hugo de Vries's house and laboratory (N).

**Behind the Hortus** (Nice, green). `pla-hortus`
Elms planted lying down, a telephone to the dead, a double school on the paupers' graveyard where Theo Thijssen taught, and the bridge that got Johan van Hulst's name by mistake.
Pin: Telefoon van de Wind, the phone for the dead in the Hoftuin.
Members: Telefoon van de Wind, the phone for the dead in the Hoftuin (N); The elms round the Hortus, planted lying down, and an Anne Frank seedling (N); Theo Thijssen's school on the paupers' graveyard (Hortusplantsoen) (N); Johan van Hulstbrug and its twin (O).

**Almshouses of the Amstelhof corner** (Nice, housing). `pla-hofjes`
A tsar's friend's hofje dressed as a canal house, a Catholic 'Building of Mercy', the couples' homes of a widower who died young, the Stedelijk founder's widows' house and the Lutheran home where orphans had their own door.
Pin: Occo Hofje.
Members: Occo Hofje (O); Wittenberg (Luther Museum) (N); Van Brants Rus Hofje (N); Hodshon and Van Limmik, two Reformed homes in the Amstelhof garden (O); Corvershof and the couples' homes behind H'ART (N); Sophia Adriana Stichting, the Stedelijk founder's almshouse (N).

**Plantage Muidergracht, the Nobel laboratories** (Nice, civic). `pla-science`
Van der Waals's physics lab, Zeeman's iron-free lab with a 250-tonne block under the floor, a boarding school for steam engineers and Krop's carvings on the geology institute.
Pin: Zeeman laboratory, built without iron.
Members: Zeeman laboratory, built without iron (N); Physisch Laboratorium, where Van der Waals worked (N); Boarding school for steam engineers (Plantage Muidergracht 14) (O); Hildo Krop's carvings on the old geology institute (Roeterseiland) (O).

**Roeterseiland, from workhouse to campus** (Nice, hidden-history). `pla-roeterseiland`
The city workhouse for a thousand poor, the cinema resistance students built, five bridges named for rescuers, the first model workers' block and a building with its legs cut off.
Pin: Kriterion, the cinema the resistance students built.
Members: Kriterion, the cinema the resistance students built (N); The city workhouse (Dr. Sarphatihuis) (N); Bridges with wartime names (Roetersstraat and Plantage Middenlaan) (N); Salerno, one of the first model blocks for workers (N); Roeterseiland: the building with its legs cut off, and the lawn that was saved and lost (O).

**Plantage Middenlaan's villas and the free corner of Artis** (Okay, green). `pla-artis`
Flamingos without a ticket, the chapel wing of the home where Artis began, the villa with zinc vases and the horse-tram director's house.
Pin: Artisplein, a corner of the zoo you can sit in for free.
Members: Artisplein, a corner of the zoo you can sit in for free (N); Sint Jacob, the old people's home where Artis began (O); Huis met de Vazen and its coach house (O); The horse-tram director's villa (Plantage Middenlaan 60) (O).

**The army's Sarphatistraat** (Nice, civic, spread 368 m). `pla-army`
Napoleon rode in through the Muiderpoort; behind it, the garrison hospital where the cancer hospital grew up, the cavalry barracks turned Rijksakademie and Steven Holl's copper pavilion.
Pin: Muiderpoort, the gate Napoleon rode through.
Members: Muiderpoort, the gate Napoleon rode through (N); Militair Hospitaal, the army hospital where the cancer hospital grew up (N); Cavalry barracks turned art academy (Rijksakademie) (N); Steven Holl's copper pavilion on the Singelgracht (Sarphatistraat 410) (N).

## Grachtengordel-Zuid

### Standouts

- Odeon, from brewery to concert hall to gay disco (A → N)
- The Carlton crash and the gap it left (A → N)
- The krullen, Amsterdam's open-air urinals (A → N)
- Huis met de Bloedvlekken (the house with the bloodstains) (A → N)
- Museum Van Loon and its coach house with false windows (A → N)
- Saint George and the dragon, Reguliersgracht 34 (A → N)
- KattenKabinet, the cat museum (N → N)

### Clusters

**The bankers' Vijzelstraat** (Amazing, civic). `gz-vijzel`
De Bazel's striped fortress of the trading company, the bankers' tunnel under the Keizersgracht, the street widened by knocking down one side, SPQA on the bridges, the Indies banks and the Incassobank's Mercury.
Pin: De Bazel, the trading company's striped fortress, now the city archives.
Members: De Bazel, the trading company's striped fortress, now the city archives (A); Poentunnel, the bankers' tunnel under the Keizersgracht (A); Vijzelstraat, the street they widened by tearing down one side (N); Vijzelstraat bridges, SPQA and two women (N); The Javasche Bank and the Indies banks of the Keizersgracht (N); The Incassobank's Mercury and its Paris corner (O).

**The Golden Bend at war** (Amazing, hidden-history). `gz-goldenbendwar`
Goudstikker's dealership whose 1,113 works went to Göring, the bank whose good name was stolen to rob the Jews, the house where the 1940-1945 fund was founded in secret, and the church whose sexton was shot in the street.
Pin: Herengracht 458, Goudstikker's art dealership.
Members: Herengracht 458, Goudstikker's art dealership (A); Lippmann, Rosenthal & Co., the bank whose name was stolen (A); Where Stichting 1940-1945 was founded, Keizersgracht 567 (O); Keizersgrachtkerk, Kuyper's breakaway church (N).

**The Golden Bend's double houses** (Nice, housing). `gz-goldenbend`
The mayors pushed buyers to take double plots: five houses and their owners, the mayor's own residence with its open garden and a house that kept its neck gable over a painted room.
Pin: Huis met de Kolommen, the mayor's residence.
Members: Huis met de Kolommen, the mayor's residence (N); Gouden Bocht, five double houses and their owners (N); Herengracht 524, the house that kept its neck gable (O).

**Hidden churches of the Singel** (Nice, religious). `gz-singelchurches`
A Mennonite church you reach through ordinary houses, the Jesuits' neo-Gothic Krijtberg squeezed onto a house plot, the modern house refused fourteen times and the nurses' house.
Pin: De Krijtberg, the Jesuits' church squeezed between canal houses.
Members: De Krijtberg, the Jesuits' church squeezed between canal houses (N); Singelkerk, the Mennonite church you cannot see (N); Singel 428, the modern canal house rejected fourteen times (N); Singel 458, the Mennonite nurses' house (O).

**Leidsestraat and its canal corners** (Nice, civic). `gz-leidsestraat`
Metz's New York building and Rietveld's glass room, Fahrenheit's corner, Uncle Cor's bookshop, Bodon's glass shop, the rag-trade square, De Gruyter's farm workers, Krop's fable beasts and an auction house since 1913.
Pin: Metz & Co, the New York building and Rietveld's glass room on the roof.
Members: Metz & Co, the New York building and Rietveld's glass room on the roof (N); Keizersgracht 461, the corner where Fahrenheit taught (O); Keizersgracht 453, Uncle Cor's bookshop (N); Keizersgracht 516, Bodon's glass bookshop (N); Koningsplein, the rag-trade square (N); Koningsplein 10, the chocolate shop front that came back (O); De Gruyter's shop and its three farm workers (O); Leidsestraat bridges and Krop's fable beasts (O); De Zwaan, an auction house since 1913 (N).

**Theatres between the Munt and the Amstel** (Nice, civic). `gz-theatres`
Duiker's newsreel cinema, the oldest working theatre, a vaudeville house turned painters' studio, a newspaper printers' front, the fishmonger's house, painted lobsters and a hofje with a bed under the altar.
Pin: Cineac, Duiker's newsreel cinema.
Members: Cineac, Duiker's newsreel cinema (N); De Kleine Komedie (N); Singel 512, from vaudeville theatre to painters' studio (N); Gebouw De Fakkel, the newspaper printers' front (O); The fishmonger's house on the Amstel (O); Café De Kroon and its painted lobsters (O); Swigtershofje (O).

**Rembrandtplein beyond the neon** (Nice, civic). `gz-rembrandtplein`
The painter-hotelier's Schiller, the bank's thrifty animals, Thorbecke whom The Hague refused, and an Amsterdam School front for a night out.
Pin: Schiller, the painter-hotelier's hotel.
Members: Schiller, the painter-hotelier's hotel (N); The Amsterdamsche Bank and its thrifty animals (N); Thorbecke, the statue The Hague would not have (N); Rembrandtplein 44, an Amsterdam School front for a night out (O).

**The Amstel between the Blauwbrug and the Herengracht** (Nice, housing). `gz-amstel`
Plantation money at Willet-Holthuysen, Rembrandt's Jan Six still at home, the canal builders' bridges, Saint Michael on a party wall, Bensdorp's chocolate office, a lead works, an early bank and the pompous Blauwbrug.
Pin: Huis Willet-Holthuysen and its plantation money.
Members: Huis Willet-Holthuysen and its plantation money (N); Six Collection, Amstel 218 (N); The Amstel-end bridges and the men who laid out the canals (O); Saint Michael on the party wall (O); Bensdorp's chocolate office on the Amstel (N); Hamburger's lead works and the triangular house (O); Wertheim & Gompertsz, a bank for American railway shares (O); Blauwbrug (N).

**In disguise on the eastern Keizersgracht** (Nice, curiosities). `gz-disguise`
A widows' home dressed as two houses, Van Houten's recycled gables, a dairy posing as an office, a church under flats, a bitters shop's little gable and Den Helder in four stones.
Pin: Het Falckshuis, a home for widows disguised as two houses.
Members: Het Falckshuis, a home for widows disguised as two houses (N); Van Houten's recycled gables (O); Plancius, the dairy that moved to the Keizersgracht (N); Kapel Immanuël, Amsterdam's first Pentecostal church (N); The bitters seller's little stepped gable (O); Four views of Den Helder, Kerkstraat 402-408 (N).

**Reguliersgracht and the Amstelveld** (Nice, infrastructure). `gz-reguliersgracht`
Seven bridges in a row on the canal they nearly filled in, the wooden church that was meant to be temporary, a medieval house of 1879 and the baker's house where Van Arkel changed style.
Pin: Amstelkerk, the temporary wooden church.
Members: Amstelkerk, the temporary wooden church (N); Reguliersgracht, the seven bridges and the canal they nearly filled in (N); Reguliersgracht 57-59, a medieval house of 1879 (O); Heinemann's bakery house, where Van Arkel changed style (O).

**Kerkstraat, the back street of coach houses** (Nice, industrial). `gz-kerkstraat`
The canal belt's one street without a canal: coach houses and smithies, a painted rococo coach house, the dairy's children's bacchanal, a gable top that played musical chairs and the hospital for the well-to-do.
Pin: Kerkstraat, the back street of coach houses.
Members: Kerkstraat, the back street of coach houses (N); Huis Geloof and the painted coach house (O); Prinsengracht 703-705, the smithy that signed its front (O); The milk factory with a children's bacchanal (N); Prinsengracht 755, the gable top that played musical chairs (N); Prinsengrachtziekenhuis, the hospital for the well-to-do (N).

**Prinsengracht at the Spiegelgracht** (Nice, curiosities). `gz-spiegelgracht`
Agneta Deutz's almshouse with a lesson for the rich, Bob Ross painting a castle stone, a carved insurance front, a school for paying girls and the hostel proud to be the worst.
Pin: Deutzenhofje, a widow's almshouse with a lesson for the rich.
Members: Deutzenhofje, a widow's almshouse with a lesson for the rich (N); 'T Huys te Bieseling, the gable stone that hid its caption (N); Knegt's insurance office and its carved front (O); Elizabeth Wolffschool, a public school for paying girls (O); Hans Brinker Budget Hotel, proudly the worst (O).

**Keizersgracht by Museum Van Loon** (Nice, odd-museums). `gz-fodor`
A coal trader's museum now Foam, the Huguenot church turned museum of illusions, the Mennonite orphans' houses and Eduard Cuypers's design workshop.
Pin: Museum Fodor, a coal trader's gift, now Foam.
Members: Museum Fodor, a coal trader's gift, now Foam (N); Nieuwe Waalse Kerk, now a museum of illusions (N); Prinsengracht 1011-1017, where the Mennonite orphans lived (O); Het Huis, Eduard Cuypers' design workshop (O).

## De Weteringschans

### Standouts

- De Balie, the courthouse beside the old remand prison (A → N)
- The calendar warehouses of the Achtergracht (A → A)
- De Duif, the first Catholic church back on the street (A → N)
- The wall in the middle of the school, Weteringschans 263 (A → N)
- Amsterdam Pipe Museum, the world's smoking in a canal house of 1670 (N → N)

### Clusters

**Leidseplein west** (Nice, civic). `ws-leidseplein-west`
Café Américain's reading table, the Melkweg in a milk factory, Krop's angry man for the Spieghelschool fire, a party hall inside DeLaMar's glass and Kramer's bridge with hippos and benches.
Pin: Hotel American and Café Américain.
Members: Hotel American and Café Américain (N); Melkweg, the milk factory that became a 'cosmic centre' (N); Krop's angry man for the Spieghelschool fire, Marnixstraat (N); Maison Stroucken, the party hall inside DeLaMar (N); Leidsebrug, Kramer's bridge with hippos and benches (N).

**Leidseplein east, the remand prison and the chess square** (Nice, hidden-history). `ws-leidseplein-east`
The prison yard where the Franks were held turned chess square, Hirsch's men-only opening, the police station that became The Bulldog, Peter R. de Vries's arms, Blauw Jan's lizards, a ballerina in a storm of forms and a cinema built in a year.
Pin: Max Euweplein, a chess square in the yard of a wartime prison.
Members: Max Euweplein, a chess square in the yard of a wartime prison (N); Hirschgebouw, the fashion palace opened for men only (N); Politiebureau No. 14, now The Bulldog (N); "Tegen alle stromen in", the Peter R. de Vries monument, Leidseplein (N); Blauw Jan's forty lizards, Kleine-Gartmanplantsoen (N); Diversity in Bureaucracy, the ballerina in a storm of forms (N); City Theater, a picture palace built in a year (N).

**Leidsestraat at the Prinsengracht** (Nice, civic). `ws-prinsengracht`
The paupers' orphanage that became the Palace of Justice, the oyster salon, a 1917 car garage still in use and a walled garden in the tourist strip.
Pin: Dikker & Thijs, the oyster salon on the Leidsestraat corner.
Members: Dikker & Thijs, the oyster salon on the Leidsestraat corner (N); Paleis van Justitie, the paupers' orphanage that became a court (N); Garage De Hoofdstad, a car park from 1917 (N); Leidse Dwarstuin, a walled garden in the tourist strip (O).

**Weteringschans by the Rijksmuseum** (Nice, civic). `ws-weteringschans`
Paradiso, built for a congregation without dogma, the palace of classics, the first industrial school for girls and the villas with lion gargoyles.
Pin: Paradiso, the free congregation's meeting hall.
Members: Paradiso, the free congregation's meeting hall (N); Barlaeus Gymnasium and its palace of classics (N); Industrieschool voor Vrouwelijke Jeugd, where girls learned a trade (N); The villas on the Weteringschans, facing the Rijksmuseum (O).

**Weteringcircuit, excise post and herb garden** (Nice, curiosities). `ws-weteringcircuit`
The excise post that is now the lid of a sewage pump, the pick-your-own herb garden and the champion leaning poplar, the hated offices now listed, the squat evicted with Sinterklaas and Ramses Shaffy over the escalator.
Pin: Commiezenhuisje, the excise post over a sewage pump.
Members: Commiezenhuisje, the excise post over a sewage pump (N); The pick-your-own herb garden and the champion leaning poplar, Weteringplantsoen (N); Peper en Zout, the hated offices that became monuments (N); Grote Wetering squat, evicted with Sinterklaas on the roof (gone) (O); Ramses Shaffy's face over the longest escalator, Vijzelgracht metro (N).

**Weteringbuurt almshouses** (Nice, housing). `ws-almshouses`
Weavers' houses of an unfinished 1670 scheme, a joiner's warehouse turned almshouse with house rules, three hofjes in two streets and the peat dealer whose dredgers dug the Amsterdamse Bos.
Pin: Three almshouses of the Weteringbuurt.
Members: Three almshouses of the Weteringbuurt (N); Noordse Bos, the weavers' houses of 1670 (N); De Nooteboome Uytkijk, a joiner's warehouse turned almshouse (N); H.F. van Breemen, the peat dealer whose dredgers dug the Amsterdamse Bos (O).

**Vijzelgracht corner** (Nice, food-drink). `ws-vijzelgracht`
Dortsman's Walloon orphanage with doors for boys and girls, Holtkamp's Amsterdam School bakery still baking, a corner rebuilt from nothing, an almshouse made of 17th-century houses and the Kaiser Wilhelm Schule.
Pin: Patisserie Holtkamp, an Amsterdam School bakery still baking.
Members: Patisserie Holtkamp, an Amsterdam School bakery still baking (N); Walenweeshuis, the Walloon orphanage waiting for a future (N); Vijzelgracht 1, a 17th-century corner rebuilt in 1971 (O); Looiershofje, an almshouse made of 17th-century houses (O); Kaiser Wilhelm Schule, the German school of 1908 (O).

**Around De Duif, the wallpaper palace and the school-meal kitchen** (Nice, industrial). `ws-utrechtsedwars`
Rath & Doodeheefver's wallpaper palace, the city's kosher-and-plain kitchen for poor schoolchildren, a cigar factory in a stable, Stadsherstel's thank-you stones, a grieving father's almshouse and an insurer's moral in tiles.
Pin: Rath & Doodeheefver, the wallpaper palace.
Members: Rath & Doodeheefver, the wallpaper palace (N); The city's central kitchen for poor schoolchildren (N); Havana, a cigar factory in a former stable (O); Stadsherstel's thank-you gable stones (O); Hilmanhofje, a grieving father's almshouse (N); Prinsengracht 808, the insurer's corner with a moral in tiles (N).

**Frederiksplein, where the glass palace stood** (Nice, civic). `ws-frederiksplein`
The central bank's gold vault anyone can walk into, the houses that faced the Palace of Industry, Van Hall's snapped bronze tree and the Navalny memorial, and the last of Sarphati's richly decorated row.
Pin: De Nederlandsche Bank, the gold vault anyone can walk into.
Members: De Nederlandsche Bank, the gold vault anyone can walk into (N); Frederiksplein, the houses that faced a glass palace (O); Walraven van Hall's snapped tree and the Navalny memorial, Frederiksplein (N); Sarphatistraat 7–13, survivors of a vanished row (O).

**Achtergracht and Hudde's locks** (Nice, infrastructure). `ws-achtergracht`
A wooden police post from the end of the night watch, Hudde's 1673 locks that flush the canals with the Amstel, and Harry Elte's signed little fronts, beside the calendar warehouses.
Pin: Amstelsluizen, Hudde's locks of 1673.
Members: Amstelsluizen, Hudde's locks of 1673 (N); Het witte huisje, a wooden police post (N); Harry Elte's two Edwardian fronts, Achtergracht 17-19 and 33 (O).

**Weteringplantsoen, playground and brewer's villa** (Nice, green). `ws-playground`
The first free public playground named after the wrong man, the flood thank-you bench from Schouwen-Duiveland, and the villa where Freddy Heineken was kidnapped.
Pin: Speeltuin U.J. Klaren, the first public playground, named after the wrong man.
Members: Speeltuin U.J. Klaren, the first public playground, named after the wrong man (N); Zeelandbank, a thank-you bench from Schouwen-Duiveland (N); Villa Heineken, the brewer's house where Freddy was kidnapped (N).

**Huidekoperstraat, the showpiece of the first housing association** (Nice, housing). `ws-huidekoper`
72 workers' homes as stately as merchants' houses, Jacob Olie's house with its garden studios, the Lutheran orphanage that lost its swan and the row where the builders moved in, next to the wall in the school.
Pin: Huidekoperstraat, the showpiece of the first housing association.
Members: Huidekoperstraat, the showpiece of the first housing association (N); Jacob Olie's house, Huidekoperstraat 19 (N); The Lutheran orphanage that lost its swan (O); Weteringschans 231–251, where the builders moved in (O).

## Deep Centrum only

- **Haarlemmerbuurt** (3): Francisca and Petrus, a widow's warehouses; Planciusschool, the school the parents occupied; Vinkenstraat, a wall that makes you see suns.
- **Jordaan** (7): Tetje de Jongbrug and its sister bridges; Koekjesbrug (bridge 170); Hoppe's wine house on the Egelantiersgracht; Berlage's narrow canal house; Gunters & Meuser, an ironmonger's name cut in stone; Three gable stones on the Rozengracht; An insurer's branch with its head office in tiles (Rozengracht 58).
- **Grachtengordel-West** (13): Keizersgracht 316, a bicycle-hub importer's office that kept a gable; Vita Brevis dormers (Herengracht 6–8); Gebouw De Koophandel, a coal office with the Exchange on its front; Offices that ate the Keizersgracht; Keizersgracht 318, the gutted rococo house; Liefde is 't Fondament, the 'papist' hofje; Molenpad, from carriages to cars, and a copied corner; Necofa, an Amsterdam School clothing factory on the Singel; Te Huis, a Christian lodging house for women travelling alone; De Nederlander, a biscuit factory with three step gables; Runstraat 14-18, Pegasus on a 1934 row; Stolpersteine for Meijer and Regina Turfkruier; Waterline, a red figure on the quay wall.
- **Burgwallen-Nieuwe Zijde** (4): Kettner's piano shop, with its wares in tiles; De Gouden en De Zilveren Spiegel, twin houses of 1614; Spuistraat 34, where Berlage got his first job; Spuistraat 289, the listed gable that came from the Rozengracht.
- **Burgwallen-Oude Zijde** (11): Feldmann's tobacco warehouse, later the Bhagwan disco; Aluminiumbrug (the aluminium bridge); De L'Europe and its answering corner; Café De Jaren, in the old securities bank; Beursplein 5, the stock exchange that left Berlage; The nuns of the Warmoesstraat; The infant school for Princess Juliana (Warmoesstraat 71); The shop window that follows the old dike (Warmoesstraat 101); The stone laid by a fifteen-year-old (Oudezijds Voorburgwal 131); Stoofbrug, the old bridge that came back after the 3D-printed one; Geldersekade 78, the office of the swindler Barmat.
- **Nieuwmarkt/Lastage** (6): Steam diamond works on the Recht Boomssloot; Jan de Liefde school, now De Boomsspijker; Huis Wilhelmina, a house in an alley; The first stone of a five-year-old (Korte Koningsstraat 14); Second-hand gables of the 1930s; Van Kollem's clothing factory dressed as canal houses.
- **Weesperbuurt/Plantage** (8): The city's teacher-training school (Nieuwe Prinsengracht 89); Bombach's wall on the old cattle market (Nieuwe Prinsengracht); Postwar flats on the Amstel (Amstel 135–141); Gateway to the city carpentry yards (Amstel 161–163); Weesperstaete, "the coffin" on the Weesperplein; Mahatma Gandhi Plantsoen, the garden Artis didn't get; Urban Jungle, the boy on the Sarphatistraat wall (Sarphatistraat 163); The 120-year-old wisteria of the Amstel (Amstel 169–171).
- **Grachtengordel-Zuid** (2): Senembah's office on the Leidsegracht; Pakhuis Sparreboom, a timber merchant's warehouse.
- **De Weteringschans** (9): Aalmoezeniersbrug, Kramer's bridge where traffic keeps left; The Concertgebouw architect's bakery, Leidsestraat 81; St. Antoniusschool, a Catholic school for poor boys; De Bont & Leyten's building, later the city's bathhouse department; Nicolaas Witsenkade, the houses on the old gasworks; The Ancient Order of Foresters' house, Sarphatistraat 8–10; Utrechtsestraat shop fronts, from a gilded pig to a cigar shop; De Posthoorn, the house of Jos Brink and Frank Sanders; Weteringschans 96, a children's clinic for the well-to-do.
