# Dutch pass, Nieuw-West batch 02

26 places. Every place: claims in EN and NL checked against `links` and `sources` (curl, nl.wikipedia API, monuments API), Dutch summary and body written fresh, copy checker 0 copied for all 26.

Claim changes: 85 in total: 65 narrowed, 16 cut, 2 sourced, 2 reordered. All are applied to the English in `patch` and mirrored in the new Dutch. No attributes changed.

## For the user

- **Van Eyck playground, Witte Klok**: amsterdam.nl returns 403 to every client, so the pool hours and park-works lines rest on the snippets recorded in the draft. The Osdorp renewal sentence had no recorded text and is cut, as are 'fenced' and 'young'.
- **Graphic Surgery**: the 45 m quote comes from an Instagram post recorded in the draft; it could not be fetched.
- **Akermolen**: no source places the Sisyfusgemaal, so its location is cut and its function narrowed.
- **Nursery schools**: the place lists 2011, but De Meerkoet was listed in March 2022 (monuments API). `attributes.listed` left as is; worth a look.
- **Dudok's farmhouse homes**: the leaf pattern, renovation link, squares and residents' garden of Pielage's *Het Lover voor Dudok* are in no source and are cut; Birza's wall is not zigzag and has viewing niches, not seats. Lamberts's 'one figure looked too weak' is now sourced (archived 4en5mei.nl page).
- **Allende monument**: the *Chile vencerá* mural (1981) is in no source and is cut. nl.wikipedia has a *Muurschildering Osdorpplein* (1983, Jorge Kata Nuñez of the Brigada Ramona Parra, 'no al fascismo'); it may or may not be the same work, so it was not swapped in. That the fist was repaired after the 2013 vandalism is unsourced and cut. The Parool article is paywalled.
- **Van Eesteren Museum**: the terrace view to the Burgemeester Hogguerstraat gallery flats is unsourced and cut; the Slotermeer walk runs Thursday to Sunday, not daily.
- **Sloterkerk**: Jan Kars's death date (20 October) is not in the 4en5mei page (only 'October 1944'); the bell is no longer said to come from the old church.
- Several English bodies are long, so the matching Dutch runs past 250 words (De Hoeksteen 447, Witte Klok 356, Sloterkerk 341, Dudok 326, Akermolen 314, Knijtijzer 302, Westereindflat 303); consider trimming both.

## Hooks

Dutch leads with the most surprising sourced fact; the English was reordered only for Bluebanddorp (the fuss moved to the top). Dutch hooks that differ from the English opening: Akermolen (the mill came from elsewhere), Westereindflat (the flag), Bij Goedvinding (the 1913 shooting), Graphic Surgery (the Koolhaas link), Kampschooltje, Tijd is Geld, De Hoeksteen (the 1971/72 New Year's riot), Schip van Slebos (the tower never built), Wegwerphuisje (the mortar), De Verfdoos (headstrong Warners), Sint Catharinakerk (the slit windows), Dudok's homes (traditional on purpose while the modernists went flat), Verrijzeniskerk (hiding, seen head on only from one street), Shop row (the communist councillor), Sloterkerk (the JERON bell), Van Eesteren Museum (the plot empty since 1939), All Aboard (the boat nobody owned), Allende monument (the plaque's wrong 'murdered'), Knijtijzer blocks (gallery flats stacked on walk-ups).

## Claim changes per place

### Van Eyck playground, Witte Klok
3 cut, 2 narrowed
- cut (body): "children played in fenced *speeltuinen* run by associations" → "children played in *speeltuinen* run by associations". 'Spelen deed je in een speeltuin waar je lid van was.' No source says the speeltuinen were fenced.
- cut (body): "gave the job to the young architect Aldo van Eyck" → "gave the job to the architect Aldo van Eyck". 'gaf architect Van Eyck de opdracht om voor elke buurt in Amsterdam een kleine openbare speelplaats te maken'; 'young' is not in any source.
- narrowed (body): "Almost all were cleared from the 1980s on, as safety rules changed." → "Most were cleared from the 1980s on, as the rules for play equipment changed.". 'Door vernieuwingen vanaf de jaren tachtig is het merendeel van deze speelplaatsen verdwenen'; Rodi: 'omdat ze niet voldeden aan de nieuwe speelplek-regels'. 'Merendeel' is most, not almost all.
- narrowed (body): "and the city's heritage map calls it probably the only one" → "and the website Amsterdam op de kaart calls it probably the only one". 'Dit is vermoedelijk de enige die nog in de oorspronkelijke staat is'; the site is a private project (contentecontent.com), not the city's.
- cut (body): " When the city renewed the playgrounds of this part of Osdorp, the original equipment stayed." → "(removed)". The page is gone and the draft records no wording from the snippet, so the claim cannot be checked.

### Akermolen (De Oude Molen)
3 narrowed
- narrowed (body): "In 1944, a neighbour remembered, Croatian soldiers" → "In 1944, Wim Luimee (born 1933) remembered, Croatian soldiers". 'Kroaten die in 1944 geschutstellingen rond de molen bedienden ... Wim Luimee (1933) herinnert zich dat het om zeventien Kroaten en drie Duitse officieren ging. Ze sliepen een tijd op de molenzolder.' Nothing says Luimee was a neighbour.
- narrowed (body): "- the outfall in the dike behind the mill" → "- behind the mill, the fenced-off channel of the old screw". 'Beide goten zijn nog aanwezig, onder en deels achter de molen'; 'buiten een hekje rondom de vijzelgang'. The register says the old outfall channel is filled with clay and part of the dike, so there is no visible outfall.
- narrowed (body): "- a few steps along the Zwarte Pad, Erick de Lyon's *Sisyfusgemaal*: a pumping station made as an artwork, whi…" → "- Erick de Lyon's *Sisyfusgemaal*: a pumping station made as an artwork, which drains the Akerpolder towards t…". 'Het Sisyfusgemaal voert het water af naar de zee'; 'Doordat de bovenkant van het gemaal zich op dezelfde hoogte bevindt als de Haarlemmerringvaart en de onderkant in de Akerpolder staat, ervaart de bezoeker het niveauverschil'. Its spot 'a few steps along the Zwarte Pad' is in no source.

### Villa Maupertuus and Riecker State
3 narrowed, 1 cut
- narrowed (body): "In the 1930s the farm ribbon of the Sloterweg began to attract villas." → "The Sloterweg was once a ribbon of farms; its 1930s villas mark the turn from farmland to housing.". 'vormt een uitdrukking van de overgang van agrarisch gebied naar woongebied'; 'dit, oorspronkelijk door boerderijen gedomineerde deel van Amsterdam'. No source says when villas began to come.
- cut (body): "A few doors east, no. 745 (1936)" → "No. 745 (1936)". No source gives the position of no. 745 relative to no. 782.
- narrowed (body): "Its garden flows into the Siegerpark, laid out at the same time, which is why the city calls its position prom…" → "It stands on the edge of the Siegerpark, laid out at the same time; the city register calls its position promi…". 'De voornaamste kwaliteit van Sloterweg 745 is de prominente positionering van de villa aan de rand van het Siegerpark, waardoor het bouwwerk van alle kanten goed zichtbaar is. Optisch vormen het groen van de villatuin en het in dezelfde tijd gestichte Siegerpark een eenheid.' The prominence comes from the park-edge position, not from the garden merging.
- narrowed (body): "- the Siegerpark gate next door (see Siegerpark and its Stedelijk sculptures)" → "- the Siegerpark behind no. 745 (see Siegerpark and its Stedelijk sculptures)". 'Het staat op een perceel dat aan de achterzijde grenst aan het Siegerpark'; no source mentions a gate next door.
- sources added: https://api.data.amsterdam.nl/v1/monumenten/monumenten/?monumentnummer=200938 (jaarBegin 1932-1933; naam Villa Sloten (voorheen Maupertuus))

### Westereindflat
3 narrowed
- narrowed (summary): "lifted on columns beside the railway" → "partly lifted on concrete piers beside the railway". 'ten noorden van de entreepartij op een souterrain ... ten zuiden van de entreepartij is het gebouw anderhalve verdieping "opgetild" ... hier rust het op betonnen pijlers'. Only the southern part is lifted.
- narrowed (body): "So many single people moved in that, as one of the first buyers remembers, the block soon got the nickname "de…" → "Many single people lived there, and one of the first buyers thinks that is when the block got the nickname "de…". Hans van Mourik: 'Er woonden veel vrijgezellen. Ik denk dat toen al de bijnaam ‘de hunkerbunker’ voor het gebouw is ontstaan.' He supposes it, he does not remember it, and he does not link it causally.
- narrowed (body): "stand just west of it on the Henk Hienschstraat" → "stand in the same enclave, on the Henk Hienschstraat". The register places the studio houses in 'het meest noordoostelijke deel van Tuinstad Slotermeer' among the private housing including 'het flatgebouw met één- en tweekamerwoningen': 'Zo is een bijzondere enclave ontstaan'. 'Just west' is in no source.

### Van Eyck and Rietveld old people's homes
2 cut, 3 narrowed
- cut (body): "nicknamed *Piggelmee* homes after a children's-book gnome." → "nicknamed *Piggelmee* homes.". 'traditioneel ogende miniatuurhuisjes onder een zadeldak met pannen, vandaar de naam Piggelmeewoningen'. Neither register text explains the name by a children's-book gnome.
- cut (body): "In 1953 two young architects, Aldo van Eyck" → "In 1953 the architects Aldo van Eyck". The register gives only their dates (1918-1999, 1919-1986); 'young' is not stated.
- narrowed (body): "each home only 39 m² but with an almost square, generous plan." → "each home only 39 m² but with a handsome, almost square plan.". 'deze kleine huisjes, 39 vierkante meter groot, te transformeren tot een toonbeeld van moderne architectuur met een mooie bijna vierkante plattegrond'. 'Mooi', not generous.
- narrowed (body): "The type was copied throughout the western garden suburbs." → "The type was copied throughout the AUP, the city's general expansion plan.". Register 200792: 'Aldo van Eyck en Jan Rietveld introduceerden in Tuinstad Slotermeer ... een fris modern type dat overal in het Algemeen Uitbreidingsplan navolging zou vinden'.
- narrowed (body): "The layout was a fight. The city planners had drawn something else," → "The layout took persuading. The city planners had drawn something else,". 'De Afdeling Stadsontwikkeling had een andere verkaveling getekend, maar het lukte Van Eyck met enige moeite om Van Eesteren te overtuigen.' 'Some effort', not a fight.
- sources added: https://api.data.amsterdam.nl/v1/monumenten/monumenten/?monumentnummer=200792 (register text: the Van Eyck and Rietveld type found followers throughout the AUP)

### Bij Goedvinding farm
4 narrowed
- narrowed (body): "South of the IJ it is rare." → "South of the IJ it is relatively rare.". 'Stolpboerderijen zijn ten zuiden van het IJ relatief zeldzaam.'
- narrowed (body): "on a block-shaped plot north of the dike road" → "on a block-shaped plot north-east of the dike road". 'op een blok-vormig kavel ten noordoosten van de weg'
- narrowed (body): "A local paper reported in 1913 that a caught burglar" → "Newspapers reported in 1913 that a caught burglar". 'In 1913 meldden de kranten dat een betrapte inbreker met de naam Traksel schoten had gelost op de veehouder J. Graman te Osdorp'; the cited paper is the Nieuwsblad van het Noorden, not a local one.
- narrowed (body): "so it may well have happened here." → "so it may have happened here.". 'dus wellicht heeft de schietpartij zich op deze boerderij afgespeeld' (perhaps).

### Graphic Surgery lines on the ACTA building
4 narrowed, 1 cut
- narrowed (summary): "a mural so at home on the concrete that another muralist first took it for part of the architecture." → "a mural so at home on the concrete that another muralist first wondered whether it was part of the architectur…". Jeroen Koolhaas: 'Ik twijfelde eerst of het onderdeel was van de architectuur.' He doubted; he did not take it for architecture.
- narrowed (body): "Louwesweg 1 opened in 1968 as a dental clinic" → "Louwesweg 1 was completed between 1966 and the early 1970s as a dental clinic". 'Het complex is tussen 1966 en begin jaren zeventig opgeleverd als tandheelkundige kliniek.' No source gives 1968.
- cut (body): "painted a set of white diagonal lines across the dark end tower, 45 m from top to bottom." → "painted a set of white diagonal lines down the tower, 45 m from top to bottom.". The 45 m and 2016 are in the artists' post; no source calls the wall dark or an end tower.
- narrowed (body): "- the way the lines meet at slightly irregular points, a system with small deliberate breaks;" → "- the way the lines meet: a clear system, with an almost unnoticeable arbitrariness in how they join;". 'Er zit een duidelijk systeem in maar een ook bijna onopvallende willekeur in hoe de lijnen op elkaar aansluiten.' Nothing says the breaks are deliberate in this work.
- narrowed (body): "Wim Tap's 1977 sculpture from the dental-school years:" → "Wim Tap's 1977 sculpture, a nod to the dentistry inside:". Gallery caption: 'De Kies, een kunstwerk van Wim Tap uit 1977 dat verwijst naar de tandheelkunde'. The dental school (ACTA) only came in 1985.

### Kampschooltje, Osdorperweg 665
1 narrowed
- narrowed (summary): "Probably unique in the Netherlands;" → "Rare in Amsterdam and probably in the whole country;". 'kent het kampschooltje een grote zeldzaamheidswaarde, niet alleen in Amsterdam, maar vermoedelijk ook landelijk'. Rare, not unique.

### Tijd is Geld and De Melkweg, Lutkemeerweg
2 narrowed
- narrowed (body): "Its heavy clay made it arable land," → "Its clay soil made it arable land,". 'Vanwege de kleiïge bodem werd hier vooral akkerbouw bedreven, hetgeen voor de gebieden rond Amsterdam ongebruikelijk was.' 'Heavy' is not stated.
- narrowed (body): "After a fire in 1930 it was rebuilt with an unusual frame:" → "After a fire in 1930 it was rebuilt, probably with the unusual frame it has now:". 'Een brand in 1930 heeft de boerderij gedeeltelijk verwoest, waarna deze weer is opgebouwd. Bij deze herbouw zal de afwijkende gebintconstructie tot stand zijn gekomen.' 'Zal' marks it as an assumption.

### Bluebanddorp (sawtooth houses)
5 narrowed, 2 reordered
- narrowed (summary): "Blue fascias and blue garage doors earned the estate its nickname after a margarine brand." → "Blue fascias earned the estate its nickname after a margarine brand; the garage doors are blue to match.". 'Het dak is plat en afgewerkt met een blauw boeiboord, hier komt de naam ‘Blue Band dorp’ vandaan'; the garage doors are 'in dezelfde kleur als de blauwe band', not named as a reason.
- narrowed (body): "drew these single-family houses for the city's housing department in 1959." → "drew these single-family houses for the city's housing department; they were built in 1959.". 'De woningen zijn gebouwd in 1959.' The design year is not given.
- narrowed (body): "Hence the official nickname, *zaagtandwoningen* (sawtooth houses)." → "Hence their other name, *zaagtandwoningen* (sawtooth houses).". 'Het complex met de zogenoemde "zaagtandwoningen"'; nothing makes it official.
- narrowed (body): "Every flat roof ends in a blue fascia board, and the garages at the corners have blue doors to match, which re…" → "Every flat roof ends in a blue fascia board, and people named the estate after the margarine brand Blue Band; …". 'De naam van de buurt is in de volksmond ontleend aan margarinemerk Blue Band, geïnspireerd op de blauwe daklijsten van de huizen.' The packaging band and the garage doors as a trigger are not in any source.
- narrowed (body): "with a small horizontal window just above each porch;" → "with a narrow horizontal window above and to the right of each porch;". 'een smal liggend venster rechtsboven het portiek'
- reordered (body): " What caused the most fuss was the turned entrance, because it let you see exactly who was visiting the neighb…" → "(removed)". Moved to the top of the body (same wording), where the Dutch now opens.
- reordered (body): "Frans van Gool, who had worked" → "The turned entrance caused the most fuss, because it let you see exactly who was visiting the neighbours.  Fra…". 'De gedraaide entreepartij zorgde voor de meeste ophef, omdat je hierdoor precies in de gaten kon houden wie er bij de buren op bezoek kwam.'

### De Hoeksteen and ULO school (Zanstra)
3 narrowed
- narrowed (body): "The ULO school (a lower secondary school) opened in 1960;" → "The ULO school (a lower secondary school) dates from 1960;". Register: 'Voormalige U.L.O.-school', jaarBeginVan 1960. No source gives an opening date.
- narrowed (body): "and in December 1971 the church council shut it down from 31 December: the centre was not bringing young peopl…" → "and in December 1971 the board of its foundation, appointed by the church council, decided to wind it up on 31…". NRC 21 Dec 1971: 'wordt per 31 december 1971 geliquideerd ... Dit heeft het bestuur van de stichting ... besloten. Het bestuur wordt benoemd door de kerkeraad'; reason: 'Het brengen en bewaren van jongeren bij het evangelie'. NRC 10 Jan 1972 (council communiqué): 'toevluchtsoord voor jeugdige gebruikers van verdovende middelen'; 'de staf allerlei manifestaties organiseerde "op het links politieke vlak"'.
- narrowed (body): "A week later the council announced it would reopen the centre without the old staff." → "On 10 January 1972 the papers reported that the council planned to reopen the centre without the old staff.". 'De kerkeraad ... is van plan het jongerencentrum De Hoeksteen binnenkort weer open te stellen. De staf en een deel van de bezoekers ... zal niet meer worden toegelaten.' Dated 10 Jan, not a week after.
- sources added: https://api.data.amsterdam.nl/v1/monumenten/monumenten/?monumentnummer=200941 (U.L.O.-school, jaarBeginVan 1960)

### Former Van der Zweep ULO
1 cut, 1 narrowed
- cut (body): "Ben Ingwersen designed a series of schools in post-war Amsterdam with the raw, sculptural forms of Le Corbusie…" → "This school, built in 1965 as the L. van der Zweepschool, a Christian ULO (lower secondary school), is called …". 'De voormalige Van der Zweep-ulo aan de Herman Poortstraat 17 is een kenmerkend voorbeeld van de Corbusiaanse schoolarchitectuur van Ben Ingwersen.' 'A series of schools' with 'raw, sculptural forms' is in no source; the register gives 1965 as the build year, not an opening.
- narrowed (body): "Its best side was meant to be seen across the green strip along the Herman de Manstraat." → "It was mainly seen from across the green strip along the Herman de Manstraat.". 'Terwijl het aanzicht op de school voor een belangrijk deel werd bepaald door het zicht vanaf de zuidwestelijke groenstrook aan de Herman de Manstraat'; nothing about a 'best side' or intent.
- sources added: https://api.data.amsterdam.nl/v1/monumenten/monumenten/?monumentnummer=200921 (jaarBeginVan 1965, architect Ingwersen, J.B.)

### Nursery schools Het Waterhoentje and De Meerkoet
1 narrowed
- narrowed (body): "Like the H-schools for older children, they have no corridors:" → "As the post-war ideal wanted for older children too, they have no corridors:". Register 225008: 'Eén van de idealen van de na-oorlogse scholenbouw was, om een gangloze school te maken zowel voor de leerlingen van de lagere school als voor de kleuters'. Amsterdam op de kaart notes Het Waterhoentje has no H-plan; no source compares it to the H-schools.

### Schip van Slebos
3 narrowed
- narrowed (body): "a break with the brick romance of his predecessor Piet Kramer." → "a break with the Amsterdam School style of his predecessor Piet Kramer.". 'in de stijl van het nieuwe bouwen, waarmee Slebos afstand nam van zijn voorganger Piet Kramer, die vooral in de Amsterdamse Schoolstijl ontwierp'. 'Brick romance' is a gloss.
- narrowed (body): "- the full ship profile, best seen from the far side of the lake or the Oostoever path" → "- the full ship profile, best seen from across the Sloterplas". 'Het gebouw uit 1961 ziet er vanaf de Sloterplas namelijk uit als een afgemeerd binnenvaartschip.' The Oostoever path as a viewpoint is not in any source.
- narrowed (body): "- the stair inside the stern leading down to a landing stage on the water" → "- the stair up to the top terrace, with a second stair beneath it leading down to landing stages on the water". 'de witte betonnen kaderand ... vormt tevens de balustrade van een trap naar een boventerras; onder die trap bevindt zich een trap naar aanlegsteigers aan het water'. 'Inside the stern' is not stated.

### Wegwerphuisje
1 cut, 1 narrowed
- cut (body): "("throwaway house", 1989) is about 2.5 metres high and sits in the embankment" → "("throwaway house", 1989) sits in the embankment". No source (Wikipedia, Buitenkunst, Stadscuratorium, Public Art Amsterdam) gives a height.
- narrowed (body): "- the Torenwijck flats behind it, which show up in many photos" → "- the buildings across the way, which the house pulls into another context". 'Met die blik kijk ik omhoog, naar de gebouwen aan de overkant. Makkinks huisje ... trekt de plek open naar een andere context.' No source names the Torenwijck flats or says they show up in photos.

### De Verfdoos
1 narrowed, 1 cut
- narrowed (summary): "Locals call them the Big and Small Paint Box." → "They are known as the Big and Small Paint Box.". 'tegenwoordig aangeduid als de Grote en Kleine Verfdoos'; Amsterdam op de kaart: 'Deze flat heet nu officieel ‘De grote verfdoos’'. Not presented as a local nickname.
- cut (body): "an early version of the doorzonwoning, the through-lit flat that became the Dutch norm." → "an early version of the doorzonwoning, the through-lit flat.". 'Hiermee kwam een voorloper van de doorzonwoning, de doorkijkwoning, tot stand.' That it became the Dutch norm is not in any listed source.

### Sint Catharinakerk and the Catharina schools
3 narrowed
- narrowed (body): "In the 1950s each faith built its own world in the new garden suburbs. This one is Catholic:" → "The city register calls the complex representative of the last heyday of pillarisation, when each faith had it…". 'Cultuurhistorisch is het complex representatief voor de laatste gloriejaren van de verzuiling in Nederland.' The broader claim about each faith building its own world in the garden suburbs is not stated.
- narrowed (body): "grouped around a courtyard between the Burgemeester Vening Meineszlaan and the Haarlemmerweg." → "grouped around a courtyard between the Burgemeester Vening Meineszlaan and the Coronelstraat.". 'Het eiland wordt omsloten door de Burgemeester Eliasstraat (westzijde), de Coronelstraat (noordzijde), de Louis Naarstigstraat (oostzijde) en de Burgemeester Vening Meineszlaan (zuidzijde).' The Haarlemmerweg runs beyond a canal to the north.
- narrowed (body): "Evers and Sarlemijn were leading figures of the Bossche School, the post-war Catholic movement around the monk…" → "Evers and Sarlemijn took part in the 1947 course in Den Bosch from which the Bossche School grew, the post-war…". 'In 1947 namen ze deel aan de cursus Kerkelijke Architectuur in het Bossche Kruithuis, waar de door de benedictijner monnik Dom Hans van der Laan gedomineerde lessen leidden tot het ontstaan van de Bossche School'; Wikipedia: 'sterk beïnvloed door de Romeinse en vroegchristelijke bouwkunst'. 'Leading figures' and 'Romanesque' are not in the sources.

### Dudok's farmhouse homes (Boerderijwoningen)
2 cut, 2 narrowed, 1 sourced
- cut (body): "Willem Marinus Dudok, the Hilversum town architect, designed" → "Willem Marinus Dudok designed". None of the listed sources mentions his post in Hilversum.
- narrowed (body): "A few streets away in Slotermeer, Aldo van Eyck" → "In Slotermeer, Aldo van Eyck". 'Aldo van Eyck en Jan Rietveld introduceerden in Tuinstad Slotermeer, omgeving Jan Bottemastraat, een fris modern type'. Slotermeer is a different garden suburb; 'a few streets away' is not stated.
- narrowed (body): "- Rob Birza's *Stadsmuur West* (2010) on the Sam van Houtenstraat: a zigzag brick "city wall" with seat niches…" → "- Rob Birza's *Stadsmuur West* (2010) on the Sam van Houtenstraat: a brick "city wall" with niches to look out…". 'een gemetselde stadsmuur tussen een woongebied en de Onze-Lieve-Vrouw van Zeven Smartenkerk ... In de muur zijn nissen aangebracht van waaruit passanten de omgeving ... kunnen bekijken.' Not described as zigzag or with seats.
- cut (body): "- André Pielage's *Het Lover voor Dudok*, steel fences with a leaf pattern made for the renovation of Dudok's …" → "- André Pielage's *Het Lover voor Dudok* (2010), in stainless steel, on the Strackéstraat;". The list gives only: 2010, 'Het Lover voor Dudok', André Pielage, Strackéstraat, Geuzenveld, roestvast staal. The leaf pattern, the renovation link and the squares and garden are in no listed source.
- sourced (body): "- about 450 m north, on the Aalbersestraat by the Eendracht sports park, Aart Lamberts's bronze *Eendracht* (u…" → "- on the Aalbersestraat at the Ruys de Beerenbrouckstraat, by the Eendracht sports park, Aart Lamberts's bronz…". Lamberts: 'Oorspronkelijk had ik er één figuur van gemaakt maar dat vond ik te weinig krachtig ... Vandaar dat het drie geworden zijn ... Toevallig heet het sportpark erachter ook de Eendracht'. Location from the Wikipedia list ('Aalbersestraat bij Ruys de Beerenbrouckstraat'); the 450 m distance is not in a source and is dropped.
- sources added: https://web.archive.org/web/20110818002228/http://www.4en5mei.nl/oorlogsmonumenten/zoeken/monument-detail/_rp_main_elementId/1_10488 (Eendracht: Lamberts on one figure being too weak; sports park behind it); https://nl.wikipedia.org/wiki/Stadsmuur_West

### Verrijzeniskerk
1 narrowed
- narrowed (summary): "often compared to Le Corbusier," → "sometimes compared to Le Corbusier,". 'Architectonisch wordt dit kerkgebouw soms vergeleken met werken van de wereldberoemde architect Le Corbusier.' Sometimes, not often.

### De 1100 Roe
2 narrowed
- narrowed (body): "Polder mills along the Haarlemmerweg were named for their distance from the city gate, the Haarlemmerpoort, me…" → "This mill and its sister, the 1200 Roe, are named for their distance from the city gate, the Haarlemmerpoort, …". 'De naam van de molen is gebaseerd op de afstand in roede tot de Haarlemmerpoort, dat is bijna vier kilometer.' No source states a general naming rule for all Haarlemmerweg mills.
- narrowed (body): "It was built in 1674, shortly after the Haarlemmertrekvaart was dug," → "It was built in 1674, some forty years after the Haarlemmertrekvaart was dug,". Timeline: '1632: Haarlemmertrekvaart ... is klaar'; '1674: Molen 1100 Roe wordt gebouwd'. Not shortly after.

### Shop row, Lodewijk van Deysselstraat (J. Bot)
1 narrowed
- narrowed (body): "the flats behind the row are due to be demolished and replaced." → "the flats set at right angles to the row are due to be demolished and replaced by more homes, and some went in…". 'Bot ontwierp ook de vijf rijtjes met portieketagewoningen die haaks op de westelijke punten van de lage blokjes staan ... Al die bebouwing zal gesloopt worden ... Het is de bedoeling dat er een groter aantal woningen terugkomt. De huizen aan Jacques Perkstraat en Maurits Sabbehof zijn in 2026 afgebroken.' They stand at right angles, not behind.

### Sloterkerk
3 narrowed
- narrowed (body): "the 1851 Knipscheer organ and a bell cast in 1516 by Willem and Jaspar Moer. The bell is called" → "the 1851 Knipscheer organ. The tower holds a bell cast in 1516 by Willem and Jaspar Moer. The bell is called". The register lists the bell under the tower ('Klokkenstoel met gelui bestaande uit een klok van W. en J. Moer, 1516'); only the organ is said to come from the earlier church ('afkomstig uit de vroegere kerk'), and no source says where the bell hung before.
- narrowed (body): "and Jan Kars, killed in Zeeland on 20 October 1944" → "and Jan Kars, killed in Zeeland in October 1944". 'Zijn besluit om in oktober 1944 ... door de vuurlinie bij Waterlandkerkje te gaan betekent het einde van zijn leven.' No day is given.
- narrowed (body): "- the eclectic parsonage villa to the east" → "- the eclectic parsonage villa next door". The parsonage is Osdorperweg 24, the church Osdorperweg 28; no source gives a compass direction.

### Van Eesteren Museum
4 narrowed, 1 cut
- narrowed (summary): "with a furnished 1950s show flat round the corner and an Aldo van Eyck climbing frame that residents crowdfund…" → "with a furnished 1950s show flat in Slotermeer and an Aldo van Eyck climbing frame the museum crowdfunded back…". 'In samenwerking met allerlei instanties als ook crowdfunding wist het Van Eesteren Museum 6000 euro bijeen te brengen'. The museum raised it, not residents; the flat is at Freek Oxstraat 27 in Slotermeer, 'round the corner' is not stated.
- narrowed (body): "Cornelis van Eesteren drew Amsterdam's General Extension Plan (*Algemeen Uitbreidingsplan*, 1934–1935), the bl…" → "Cornelis van Eesteren stood at the cradle of Amsterdam's General Extension Plan (*Algemeen Uitbreidingsplan*, …". 'Cornelis van Eesteren die als architect en stedenbouwkundige aan de wieg stond van het Algemeen Uitbreidingsplan (AUP) van Amsterdam uit 1934'; 'zijn Plan Tuinstad Slotermeer (1939)'. Mulder's street-by-street role is not in a listed source.
- narrowed (body): "the "Van Eesteren Buitenmuseum" (outdoor museum), at a time when housing corporations were planning large-scal…" → "the "Van Eesteren Buitenmuseum" (outdoor museum). In 2009 housing corporations unveiled plans to renovate heav…". 'Half april 2009 presenteerden enkele woningcorporaties ... hun plannen om bij vele honderden woningen in en vooral rond dit gebied zware ingrepen te gaan toepassen. Dit is: renovatie of sloop/nieuwbouw'.
- cut (body): "- the view from the terrace over the lake to the three gallery flats on the Burgemeester Hogguerstraat; " → "(removed)". No listed source mentions a terrace view or gallery flats on the Burgemeester Hogguerstraat.
- narrowed (body): "- the daily guided walk through Slotermeer, which starts here." → "- the museum's guided walk through Slotermeer, Thursday to Sunday.". 'Wandel donderdag tot en met zondag mee door de buurt Slotermeer' ('Elke donderdag tot en met zondag, 13:00 uur'). Not daily, and the start point is not given.
- sources added: https://vaneesterenmuseum.nl/wandelingen (Slotermeer walk Thursday to Sunday 13:00)

### All Aboard
2 narrowed, 1 cut
- narrowed (summary): "that lay ownerless in the port for years," → "that lay in the port for years with no known owner,". 'Deze vissersboot lag al jaren in de haven, De eigenaar was niet bekend.' The owner was unknown, not absent.
- cut (body): "Port of Amsterdam and the superyacht builder Royal Van Lent/Feadship" → "Port of Amsterdam and Royal Van Lent/Feadship". The sources name 'Royal van Lent/Feadship' without describing the firm.
- narrowed (body): "where Nieuw-West's offices meet the port." → "at the edge of Nieuw-West where city and port meet.". 'aan de rand van Nieuw-West waar stad en haven elkaar raken'. Offices are not mentioned.

### Allende monument and President Allendelaan
4 narrowed, 2 cut, 1 sourced
- narrowed (body): "the Chilean army overthrew the elected socialist president Salvador Allende, who died in the presidential pala…" → "a coup in Chile toppled President Salvador Allende, who died that day.". 'de Chileense president Salvador Allende, die op 11 september 1973 bij de staatsgreep in 1973 zelf zijn leven beëindigde'. The army, 'elected socialist' and the palace are not in a listed source.
- narrowed (body): "inspired by pre-colonial Inca architecture," → "inspired by the Incas,". 'liet zich inspireren door de Inca's, hij stapelde de betonnen delen zonder voegmiddel'.
- narrowed (body): "For decades that was the common belief, but in 2011 an official Chilean investigation concluded that he took h…" → "For a long time that was what people thought, but in 2011, after extensive research, it was officially announc…". 'Lang werd gedacht dat hij vermoord zou zijn ... In 2011 werd na uitgebreid onderzoek officieel meegedeeld dat hij zelfmoord pleegde.' Who ran the inquiry is not stated.
- cut (body): "In 2013 vandals pulled stones out of the fist and scattered them over the grass; it has since been restored." → "In 2013 vandals pulled stones out of the fist and scattered them over the grass.". The blog post (dated 2013-05-20) describes the stones torn out and spread over the field; no listed source reports the repair.
- narrowed (body): "- Wessel Couzijn's huge corten-steel *Groot Landschap* on its hill nearby, placed in the same years;" → "- Wessel Couzijn's corten-steel *Groot Landschap* (1974) on a hill in the same part of the park;". 'In dit deel van het Sloterpark bevindt zich op een heuvel het Groot landschap, een kunstwerk in cortenstaal uit 1974 van de beeldhouwer Wessel Couzijn'. Its size is not given.
- sourced (body): "- the steel joggers on bridge 678, just north-west over the same avenue;" → "- the steel joggers (*Trimmers*, Martie van der Loo) on the railings of bridge 678 over the same avenue, one o…". 'De massiviteit van de brugleuningen is bij brug 678 versierd door het kunstwerk Trimmers van Martie van der Loo. Tussen beide bruggen in aan de oostkant staat het Allendemonument'; Trimmers: 'vijfentwintig stalen trimmers'. 'North-west' is not stated.
- cut (body): "- for Chile's own voice, the *Chile vencerá* mural that Chilean refugees of the Brigada Ramona Parra painted i…" → "(removed)". No listed source. The only sourced Chilean mural at the Osdorpplein is by Jorge Kata Nuñez (Brigada Ramona Parra), dated 1983, with 'no al fascismo', not 'Chile vencerá' or 1981; it may be a different work, so the item is cut rather than rewritten.
- sources added: https://nl.wikipedia.org/wiki/Brug_678; https://nl.wikipedia.org/wiki/Trimmers

### Knijtijzer blocks
3 narrowed
- narrowed (body): "three storeys of small gallery flats for single people" → "three storeys of small one- and two-room gallery flats". 'opgetopt met drie lagen galerij-ontsloten kleine één- en tweekamerwoningen van ca. 37 en 47m2'. Who they were meant for is not stated.
- narrowed (body): "He later spent decades on the city's monument inventory, the Commissie Dooijes, that laid the groundwork for l…" → "He later spent decades on the Commissie Dooijes, which inventoried every monument in Amsterdam.". 'Vanaf 1968 was hij lid van de Commissie-Dooijes, die alle monumenten in Amsterdam inventariseerde. Voor deze enorme klus, die tot 1993 duurde'. A link to listings like this one is not stated.
- narrowed (body): "and Rochdale started repairs in 2025 while working out a larger renovation." → "and Rochdale started repairs in 2025 while engineers studied what a lasting fix would take.". NH Nieuws: works start in January, leaks from May; residents call it maintenance, not renovation. Rochdale newsletter Sept 2025: Royal Haskoning analyses complaints and research, scenarios follow, a 'plan van aanpak' in January 2026. A larger renovation is not promised.

## Verification

All 26 places were checked: each claim in the new Dutch was compared with the new English and the original texts, the Dutch was checked against the English for facts dropped or added, the two "sourced" changes were checked against their sources, the copy checker was run (0 copied for all 26), and the summaries were checked for length (280 characters at most), dashes and matching Look for lists. No problems were found with dashes, summary lengths or Look for counts.

Sourced changes confirmed:
- Dudok's farmhouse homes: the archived 4en5mei.nl page has Lamberts's quote ('één figuur ... te weinig krachtig', 'Toevallig heet het sportpark erachter ook de Eendracht') and the location 'hoek Aalbersestraat/ Ruys de Beerenbrouckstraat'.
- Allende monument: nl.wikipedia Brug 678 has 'versierd door het kunstwerk Trimmers van Martie van der Loo' and 'Tussen beide bruggen in aan de oostkant staat het Allendemonument'; nl.wikipedia Trimmers has 'vijfentwintig stalen trimmers'.

Claims removed or fixed in the Dutch (none of these is in the English or the sources):
- Akermolen: 'een enorme schroef'. 'Enorme' (huge) removed; it is now 'een schroef van Archimedes', as in the English.
- Villa Maupertuus: 'vier ontvang- en woonvertrekken' became 'vier ontvangkamers' (the English says reception rooms only).
- Westereindflat: 'in 1955 kopte een krant al' (a headline in one paper) became 'noemde de pers', as in the English.
- Van Eyck and Rietveld old people's homes: 'Na vele onderhoudsrondes' (many rounds of maintenance) became 'Door onderhoud'.
- Kampschooltje: 'daarom' removed. It made the school's rarity follow from it reflecting the official ideas, a link the English does not make.
- Bluebanddorp: 'werd gezien door de hele rij' (the whole row saw you) and 'het opvallendste' (the most striking feature) removed. The opening now gives only the register's point: the turned door caused the most fuss, because you could see who visited the neighbours.
- De Hoeksteen: the NL summary said police 'ontruimt' (cleared) the centre on New Year's Eve. The clearance was on 30 December; on New Year's Eve the police came into the party. The summary now says the police broke into a party with batons.
- Nursery schools: 'Je loopt van lokaal naar lokaal' (you walk from classroom to classroom) removed as unsourced. 'Beroemd maakten' (made famous) became 'uitdroegen' (championed), as in the English.
- De Verfdoos: 'en dat zie je' (and it shows) removed.
- Sint Catharinakerk: 'dikke bakstenen muren' (thick walls) and 'lijkt eerder een burcht dan een parochiekerk' removed. The opening now repeats the English image of slit windows like loopholes.
- Sloterkerk: the attribution of the 'second-oldest bell' claim to local historian Bert Stilma removed. The source supports it, but the English does not have it.
- Knijtijzer blocks: 'je ziet hem vanaf de Jan Evertsenstraat meteen' (you see it at once from the street) removed.

English fixes (wording only, no claims changed):
- Van Eyck and Rietveld old people's homes: stray comma in 'Jan Rietveld (1919–1986), built', left over from the 'young architects' cut, removed.
- Allende monument: the Look for list ended in ';' and a newline after the Chile vencerá item was cut. It now ends in a full stop.

Copy runs fixed: none. The checker reported 0 copied for all places both before and after the fixes.

Left as is, for the user: the English summary of Graphic Surgery calls the building 'a 45 m brutalist tower', but the source gives 45 m only as the length of the lines from top to bottom.
