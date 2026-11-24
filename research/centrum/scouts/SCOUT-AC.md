# Centrum scout AC: theme A (public art and walls, war and memory), zone Core

Scouted 2026-11-24. Zone Core: Burgwallen-Nieuwe Zijde (NZ), Burgwallen-Oude Zijde (OZ),
Nieuwmarkt/Lastage (NL). Sweeps 2 (public art and walls) and 3 (war and memory). Nothing is
written to the map. SCOUT-DC.md and SCOUT-BC.md and the drafts in `places/nieuwezijde-*`,
`oudezijde-*`, `nieuwmarkt-*` (including the new `nieuwmarkt-3.yaml`) were read first; their
items are not repeated (where I add a detail to one of them it is a Look for line). Every pin
was point-checked with `areas.locate` (borough Centrum, wijk as given).

Work in progress (saved after each source).

## Sources

**Gone through completely**

- buitenkunstamsterdam.nl (Kunstwacht API `api-v3.kunstwacht.nl`, all 1,770 objects, 24 Nov
  2026): 64 in the three wijken (NZ 25, OZ 10, NL 29), every description read.
- nl.wikipedia "Lijst van beelden in Amsterdam-Centrum": every row for Oudezijde, Nieuwezijde,
  Nieuwe zijde, Lastage, Nieuwmarktbuurt, Uilenburg, Stationseiland, Stoperaterrein,
  Waterloopleinbuurt and "centrum" screened (about 120 rows).
- OSM Overpass (24 Nov 2026): `tourism=artwork`, `historic=*`, `memorial=*` in the zone bbox,
  point-checked: 82 objects in the three wijken. No `memorial=stolperstein` in the zone.
- gevelstenen.net "Kerninventarisatie" for Amsterdam (all 31 street pages, 2,125 rows): the 651
  stones with postcode 1011/1012 listed and screened by street.
- 4en5mei.nl: all 379 records found by the site's own search for "Amsterdam" (via its
  admin-ajax endpoint); 378 detail pages fetched and screened by postcode (1011/1012), every
  Core record read in full.

- Street Art Cities (markers file for Amsterdam, 24 Nov 2026): 70 entries in the zone (45 active,
  25 removed), all screened.
- nl.wikipedia "Lijst van Stolpersteine in Amsterdam-Centrum": all 177 rows screened for the zone.

**Sampled**

- Mapping Slavery (Amsterdam page only, not the 138-page gids).
- Web search (Google, through BrowserOS) per object for status and second sources: Het Parool,
  AT5, AD, NRC, NS news, Jonet, feitjes.amsterdam, vanderkrogt.net, mforamsterdam.com,
  Stadscuratorium, VVAB (amsterdamsebinnenstad.nl), straatpoezie.nl.

**Left open**

- 4en5mei: in the end all 378 fetched detail pages were screened by postcode; nothing open.
- The wandkunst map's geojson (maps.amsterdam.nl) was not fetched.
- Stadscuratorium collection for Core, and the VVAG site (being rebuilt), only through search.
- On-site checks: exact pins of AC-03, AC-20, AC-21; Rokin 72 shop status; AC-29's link to
  Bartholomeus de Moor; who made the 1971 Lastage stone (AC-13).

## Coverage

| Sweep | Nieuwe Zijde | Oude Zijde | Nieuwmarkt/Lastage |
|---|---|---|---|
| 2 public art and walls | Kunstwacht, OSM, wiki list, SAC, gevelstenen: done | same: done | same: done |
| 3 war and memory | 4en5mei (priority), Stolpersteine list: done | same: done | same: done |

Count: 31 items. NZ 13 (AC-01 to 09, 19 to 21, 29), OZ 5 (AC-10 to 12, 22, 30), NL 13 (AC-13 to 18, 23 to 28, 31). Ranks: Amazing 1, Nice 17, Okay 13.

---

## Shortlist

### Sweep 2: public art and walls

**Burgwallen-Nieuwe Zijde**

**AC-01. Rokin 72, De Gouden Bril and its Zacharias Jansen.** Pin 52.370420, 4.892281; Rokin 72
corner Wijde Kapelsteeg (the statue is on the steeg side). An optician's building of 1918 for
"De Gouden Bril" (Schmidt Optiek, founded 1866, here since the 1870s per WinkelStories), with a
standing figure by Dirk Polet of Zacharias Jansen, the Middelburg spectacle maker some credit with
the first microscope and telescope, on the side wall; the gable stones show a pince-nez and
monocle and the arms of Prince Bernhard. A shop front that advertises a claim to an invention.
Local voice: vanderkrogt.net calls it the oldest optician's shop in the city (check). Lead:
https://nl.wikipedia.org/wiki/Rokin_72 ; second https://www.vanderkrogt.net/standbeelden/object.php?record=NH03ad
(record URL to confirm) and https://www.winkelstories.nl (Schmidt). Status: building and statue
standing; shop still Schmidt per vanderkrogt (date not seen; check). Caveat: "inventor" is
disputed (Lipperhey); say "claimed". Listed? check. Rank **Nice**. New place. The Mirakelkolom
(dropped by DC) stands on the same address.

**AC-02. Nieuwendijk 89, the photographer's front with Daguerre and Niépce.** Pin 52.376774,
4.896645. A shop front designed by Gerrit van Arkel for the portrait photographer Albert Greiner
(already twenty years at this address), with a frieze of putti taking photographs and medallions
of the two inventors of photography, Daguerre and Niépce, between cheese and sweet shops. Local
voice: Parool, "Niet lachen naar het vogeltje: chique fotograaf A. Greiner" (20 May 2023); VVAB
Binnenstad piece "De oudste fotoateliers van Amsterdam" (Wilfred van Leeuwen). Lead:
https://amsterdamopdekaart.nl (Nieuwendijk 89); gevelstenen.net (portraits, putti); Parool 2023.
Status: front intact (Parool 2023). Caveat: date of the front to confirm (Van Arkel, c. 1890s?).
Rank **Nice**. New place.

**AC-03. Sint Luciënsteeg, the gable stone wall.** Pin approx 52.369800, 4.890700 (north wall of
the Amsterdam Museum in the Sint Luciënsteeg, by the little square after no. 25; fix on site).
About 47 gable stones rescued from demolished houses are set in the outer wall and around the
square: a milkmaid of 1603, "De Corendrager" 1626, three black moles, the town of Ulm (1672), a
monk, an emperor and a peasant who say "I teach, I protect, I work for these two", a skater in a
landscape. Most belong to the Koninklijk Oudheidkundig Genootschap's collection, lent to the
museum. Local voice: nickname "Gevelsteenmuseum" (M for Amsterdam). Lead:
https://kog.nu (Collectie gevelstenen); gevelstenen.net (47 stones listed, postcode 1012PM);
https://mforamsterdam.com/sint-luciensteeg . Status: wall in place; the museum is being rebuilt
(ONH, Nov 2026), so check access to the alley. Caveat: beside A-list Amsterdam Museum, pitched on
the free street wall. Rank **Nice**. New place.

**AC-04. The neon HELP in the Voetboogstraat (Joes Kloppenburg).** Pin 52.368269, 4.890682. On
17 August 1996 Joes Kloppenburg (26) was beaten to death here by four drunk young men while
trying to stop them; his death made "zinloos geweld" a national cause. A plaque in the paving
(text with Martin Reints) tells the night minute by minute, and the word HELP in neon hangs between
two fronts above it, "om nooit te wennen aan geweld" (Volkskrant 1997, the first commemoration,
300 people). Makers: Vendel & De Wolf (vendelendewolf.nl) for the Amsterdams Fonds voor de Kunst;
Kunstwacht credits Sandra de Wolf. Lead: https://nl.wikipedia.org/wiki/Monument_voor_Joes_Kloppenburg ;
second https://feitjes.amsterdam (2022). Status: present 2022 (feitjes). Rank **Nice**. New place.

**AC-05. Een zeegezicht aan het IJ, the tiled cycle tunnel.** Pin 52.379235, 4.898193
(Cuyperspassage under Centraal Station). Irma Boom covered the floor-to-ceiling walls of the
2015 cyclists' and walkers' tunnel with about 70,000 hand-painted Tichelaar tiles after an
18th-century tableau by the Rotterdam painter Cornelis Boumeester of the herring fleet; the
picture grows sketchier toward the IJ side, and Boom swapped the Rotterdam arms on the ship for
three Amsterdam crosses. Lead: Kunstwacht (object 576); nl.wikipedia list of statues (2015).
Status: in use. Caveat: BC dropped the Cuyperspassage as "part of Centraal Station"; I propose it
on the artwork (and the Rotterdam joke), not the station. Rank **Nice**. New place.

**AC-06. Art under Centraal Station: tomorrow's weather and a mosaic seen through peepholes.**
Pin 52.378257, 4.900489 (metro hall under CS). David Claerbout's "Weather Engine" (2018) is a
computer-made landscape whose weather is tomorrow's forecast, fed live from the internet, with a
figure going about his seasons; in the Kamperbrug metro entrance Joost van Roojen's granite mosaic
(a gift from Dutch Railways when the east line opened in 1980) survives behind air vents put up
for tunnel safety in 2013, with peepholes cut so it can still be seen (52.378077, 4.900375);
Jennifer Tee's "Tulip Palepai" (2017) is made from scans of 100,000 tulip petals. Lead: Kunstwacht
objects 1162, 1169, 1186. Status: in place (Kunstwacht). Rank **Okay**. New place (group of three).

**AC-07. Canvas van Amsterdam on the Haringpakkersbrug.** Pin 52.379409, 4.895415. Since April
2026 a big steel panel on the side of the bridge by Centraal Station gets a new work by an
Amsterdam artist twice a year; the first, FreelingWaters' "Vreemdeling welkom" in herring-cart
style (Dutch flag, Gothic letters, gulls instead of crosses), faced a row of rough sleepers and
the rolling suitcases. Lead: Kunstwacht object 7481. Status: first work up to end of August 2026;
the current one not checked. Caveat: changing work, describe the frame. Rank **Okay**. New place
or Look for in a Haringpakkerstoren/Singel-head place (BC-03).

**AC-08. The UvA's word works on the Spui: Weiner's books in the paving.** Pin 52.368852,
4.890407. Lawrence Weiner's "Een vertaling van de ene taal naar de andere" (1996): three book
shapes lying face down in the square, in Dutch with English, Arabic and Sranan; first cut in
hard stone, too fragile, recast in iron. It belongs to the university's "Gevelproject" with
Joseph Kosuth's "Located Text" (quotations on the fronts of the Oudemanhuispoort and other UvA
buildings, see the Paul Scholten project PDF) and a Karel Appel painting. Lead: Kunstwacht object
520; https://straatpoezie.nl/gedicht/een-vertaling . Status: in place (OSM). Caveat: Kosuth's
texts mostly sit on OZ buildings; DC-37 (Lieverdje) is on the same square. Rank **Okay**. New place
or Look for in DC-37.

**AC-09. The White Cube in the Nieuwezijds Armsteeg.** Pin 52.377084, 4.895910. Residents tired of
public urinating, vandalism and graffiti in this alley asked for art; housing association De Key
commissioned Giny Vos, who clad a whole front in ribbed aluminium with an LED line drawing of a
museum room in perspective, lit at night. Lead: Kunstwacht object 569. Status: not checked
(check: Still there?). Caveat: BC-35 covers the Armsteeg's dike history; group there if preferred.
Rank **Okay**. Group with BC-35.

**Burgwallen-Oude Zijde**

**AC-10. The red window of the Oude Kerk ("Het Rode Raam").** Pin 52.374394, 4.897928 (seen from
the alley off the Oudekerksplein). Giorgio Andreotta Calò's "Anastasis" (2018) turned one window
of the Holy Sepulchre chapel permanently red, throwing red light into the church from the Red
Light District; the VVAB and another heritage society went to court to keep the white glass, the
judge let it go ahead in August 2018 and the court called it "een gepaste kunstuiting" in March
2020. Lead: Kunstwacht object 2764; https://www.parool.nl (11 Mar 2020) and
https://www.nrc.nl/nieuws/2018/09/27/ . Status: in place (court 2020; Kunstwacht). Caveat: beside
A-list Oude Kerk, pitched on the fight; visible from outside. Rank **Nice**. New place.

**AC-11. Rokin station: the archaeologists' wall and Manders' fountain.** Pin 52.369703, 4.892149
(Rokin station; the fountain is at 52.372188, 4.893052 on the Rokin). Between the escalators of
Noord/Zuidlijn station Rokin a long vitrine shows thousands of finds from the metro dig, laid out
by shape and colour rather than date by the artists Dewar & Gicquel with city archaeologist Jerzy
Gawronski, facing their own mosaics of everyday things (a crocodile, a melodica, a high-heeled
pump). Up on the street Mark Manders' Rokinfontein (2017) has two rough joined heads looking away
from each other, made to look as if it had always been there (water off in winter). Lead:
Kunstwacht objects 1167, 585; https://belowthesurface.amsterdam . Status: in place. Caveat: DC
listed the fountain as a lead for theme A; the station itself is in NZ, the fountain in OZ. Rank
**Nice**. New place.

**AC-12. Queen Wilhelmina on horseback, paid for by Amsterdam women.** Pin 52.369168, 4.892252;
Rokin corner Langebrugsteeg. Theresia van der Pant's young Wilhelmina in a hat (1972) came about
on the initiative of the city's women's organisations and was paid for by Amsterdammers; Queen
Juliana advised the sculptor, who mostly made animals. Lead: Kunstwacht object 515. Rank **Okay**.
New place, or Look for in AC-11.

**Nieuwmarkt/Lastage**

**AC-13. "De Lastage 1971", the gable stone of a boarded-up neighbourhood.** Pin 52.372226,
4.903083; Recht Boomssloot 42. A gable stone of 1971 shows houses with their windows nailed shut:
the Lastage as it looked when the city was buying and closing houses for the metro and the planned
motorway, the years of the Nieuwmarkt fight. Local voice: Parool/AD "Zoekplaatje" (November, year
to fix) used it as a city quiz. Lead: gevelstenen.net (Recht Boomssloot 42, "dichtgespijkerde
woonwijk, DE LASTAGE 1971"); https://www.ad.nl (Zoekplaatje). Second source for who made it
needed. Rank **Nice**. New place (or Look for in DC-31, Auke Bijlsmabrug, which is a few steps away).

**AC-14. The Grenspaal: a turtle carrying the debris of Amsterdam.** Pin 52.369391, 4.901639;
Sint Antoniesluis, head of the Jodenbreestraat. Hans 't Mannetje (1986) put together leftovers from
the city's monument yard at the Uilenburg synagogue: his own green stone turtle carries a thick
column from Berlage's insurance building "De Algemene" on the Damrak (where C&A now stands) and a
block with a text by Jacob Israël de Haan showing it was meant to carry a bust of Rembrandt. Also
called "Monument van Jacob Israël de Haan". Lead: https://nl.wikipedia.org/wiki/Grenspaal_(Hans_'t_Mannetje) ;
https://stadscuratorium.nl (De zuildragende schildpad); VVAB "Gedenkteken de Grenspaal". Rank
**Nice**. New place.

**AC-15. The Violist in the Stopera, by the Unknown Sculptor.** Pin 52.367222, 4.901667 (inside the
Stopera's public passage). A bronze head with hat, a hand and a violin coming up out of (or sinking
into) the floor appeared in 1991, placed at night; the city acquired the works on condition the
maker stays unknown, and rumours named Queen Beatrix or Gene Holt. Same anonymous hand as the
Borstplaat on the Oudekerksplein (DC-03) and the Boomzagertje elsewhere. Lead: Kunstwacht object
538; https://nl.wikipedia.org/wiki/De_Onbekende_Beeldhouwer . Visiting: in the passage, open by day.
Rank **Nice**. New place. Look for: André Volten's pink granite ring outside (48 segments, half
sunk), Marjolein Rothman's open silhouette of King Willem-Alexander on the plinth where Beatrix's
bust stood (chosen by 2,500 voters), and the NAP display (theme C).

**AC-16. Living by Numbers, the HIV/AIDS monument on the IJ.** Pin 52.378323, 4.906184; De
Ruijterkade by the IJplein ferry landing. Jean-Michel Othoniel's red glass abacus in a steel frame,
unveiled 1 December 2016 (World AIDS Day) by mayor Van der Laan from a cherry picker, called the
first HIV/AIDS monument in Europe; its beads first showed 2030, the target year for no new
infections. Removed for the new ferry quay, restored at a yard and put back at the end of 2021.
Lead: https://nl.wikipedia.org/wiki/HIV/AIDSmonument ; Kunstwacht object 584; Parool 2019. Status:
back since end 2021 (Kunstwacht, Flickr). Caveat: "first in Europe" is the makers' claim (quote
it). Rank **Nice**. New place.

**AC-17. Kalkmarkt 8, the seamen's doctor's pun stones.** Pin 52.372690, 4.906691. Three stones of
1990-91 on the house of the medical centre for seamen: a steamship over "I.C.CK.C.MEN" (I see sick
seamen), and two emblems after Roemer Visscher's "Sinnepoppen" (1614), a turnstile "Principiis
obsta" (prevention is better) and a sluice "Exonerat et arcet" (the doctor's name was Voorsluis).
Local voice: Stadsherstel's friends' walk (2015) stops for it; NTvG interview (2022) with the
port doctors of the Radio Medische Dienst. Lead: gevelstenen.net (Kalkmarkt 8);
https://mforamsterdam.com/waalseiland . Status: in place (2023). Rank **Okay**. New place.

**AC-18. "Time to re-tire", the Fisk tyre boy on the De Ruijterkade.** Pin 52.377483, 4.907986; De
Ruijterkade 140-142. A 1933 stone on a former tyre company office shows the yawning boy in pyjamas
with a candle and a tyre over his shoulder, the American Fisk mascot, with the slogan "Time to
re-tire, get a Fisk". Lead: https://www.gevelstenenvanamsterdam.nl (De Ruijterkade 140-142, GET A
FISK); gevelstenen.net. Status: in place (VVAG page 2026). Caveat: description of the figure to
check against a photo. Rank **Okay**. New place or Look for in "De Ruijterkade's last shipping
offices" (draft nieuwmarkt-1).

**AC-28. The smoking skipper the city said no to.** Pin 52.371308, 4.911199; corner Prins
Hendrikkade and Nieuwe Foeliestraat (Nieuwmarkt/Lastage side). A twenty-metre portrait of an old
skipper with a pipe, painted on a blind wall in summer 2025 by the American-born Amsterdam muralist
Nils Westergard, who asked permission, was refused (the city's welstand advice was negative) and
carried on; look closely and the Oudezijds Kolk shows through the man's jumper. The model is a
friend of the painter. Neighbours were pleased (AT5, 10 Jul 2025) and on 24 December 2025 the city
let it stay "voorlopig". Lead: https://nl.wikipedia.org/wiki/Rokende_schipper ; AT5 24 Dec 2025;
Parool 4 Jul 2025. Status: allowed to stay for now (Dec 2025). Rank **Nice**. New place.

**Burgwallen-Nieuwe Zijde (continued)**

**AC-29. Rokin 64, the Moor on the cornice.** Pin 52.370618, 4.892352; corner of the Mooresteegje.
A black figure sits in the richly carved Louis XIV cornice (about 1725) of a house called "De
Moriaan"; Mapping Slavery and a Parool walk on the colonial past (13 Jun 2023) use it to talk about
how "moor" was used for Black people, and tie the sign to the merchant Bartholomeus de Moor, who
put a Moor on every house he lived in. Lead: https://mappingslavery.nl/portfolio/amsterdam-2/ ;
VVAG photo on Flickr ("Daklijst met moriaan, Rokin 64"). Caveat: De Moor died in 1633 and the
cornice is a century later; the link of this house to him needs checking before writing it. Rank
**Okay**. New place, or group with AC-01 (Rokin 72, a few doors on).

### Sweep 3: war and memory

**Burgwallen-Nieuwe Zijde**

**AC-19. Annick van Hardeveld, the last courier.** Pin 52.377635, 4.895138; Hekelveld corner
Nieuwezijds Voorburgwal. On the evening of 4 May 1945, with the radio already announcing the German
surrender, the 21-year-old courier of the Binnenlandse Strijdkrachten cycled out for a last errand
and was shot here at a German post; a bronze plaque on a stone base by Hans Bayens was unveiled on
4 May 1985 by Ed van Thijn, at the initiative of her brother Yann and her friends. Lead:
https://www.4en5mei.nl/oorlogsmonumenten/zoeken/1617/amsterdam-monument-voor-annick-van-hardeveld ;
Kunstwacht object 476. Rank **Nice**. New place.

**AC-20. Centraal Station's two plaques: the cold welcome and the sergeant.** Pin approx 52.378800,
4.900200 (fix on the plaque in the station; check: Location). In the station's "catacombs" the
Dutch state received the few survivors of the camps in 1945, coldly; a plaque unveiled on 30
August 2019 says so in plain words ("De overheid ... faalde in de uitvoering van haar taak"),
based on the memories of architect Moshé Zwarts, who arrived here at almost eight after
Bergen-Belsen. A second plaque (22 September 1984, broken tulip and dove) marks where BS sergeant
W.H. Zeeman (22) was shot on 7 May 1945 when German Grüne Polizei tried to retake the station.
Lead: https://www.4en5mei.nl/oorlogsmonumenten/zoeken/4962/amsterdam-herinnering ; NS news 30 Aug
2019 (https://nieuws.ns.nl); Parool 26 Aug 2019; 4en5mei record 1620 (Zeeman). Caveat: Centraal
Station is A-list; pitched on the plaques. Rank **Amazing** (a state admitting its own failure,
in a place millions pass). New place.

**AC-21. Walk of Pride, the queer names from the Dam to the Homomonument.** Pin 52.373180,
4.891050 (first tiles at the Dam end of the Raadhuisstraat; fix the first tile on site). Since 8
July 2026 a line of bronze-inlaid tiles (52 or 53: sources differ) runs from the Dam through the
Raadhuisstraat to the Homomonument, each with the name of a queer person, from unknown 19th-century
Amsterdammers to international heroes, chosen by a committee from the community; an initiative of
IHLIA LGBTI Heritage, the Homomonument foundation and Stichting GALA, laid for WorldPride 2026.
Lead: https://walkofpride.amsterdam ; Volkskrant 9 Jul 2026; Gay Krant 20 Jun 2026. Caveat: the
route runs on into Grachtengordel-West, so a single pin in NZ with the route in the text. Rank
**Nice**. New place (DC-12/BC lead: Homomonument is West's).

**Burgwallen-Oude Zijde (continued; numbers kept as found)**

**AC-30. The Prostitution Information Centre, a sex worker's own door.** Pin 52.374747, 4.897754;
Enge Kerksteeg 3, by the Oude Kerk. Mariska Majoor, who had worked behind the window herself,
opened the PIC in 1994 so that the talk about her trade would no longer happen without the people
in it: a small information shop where anyone can ask anything, still there after thirty years (NH
Nieuws, 31 Oct 2024). It belongs with the Belle statue (DC-03) that Majoor also initiated. Lead:
https://nl.wikipedia.org/wiki/Prostitutie_Informatie_Centrum ; https://sekswerkerfgoed.nl (2014,
"20 en 25 jaar PIC"). Status: open (NH Nieuws 2024; pic-amsterdam.com). Caveat: a shop with a
souvenir side; pitch on the history. Rank **Okay**. Group with DC-03 or new place.

**Nieuwmarkt/Lastage (continued)**

**AC-31. The Tak family's six stones, Sint Antoniesbreestraat 98.** Pin 52.370849, 4.900411. Six
Stolpersteine in a row for Barend, Dora, Dora, Izak, Saartje (Tak-Bluhm) and Simon Tak, one
household of the old Jewish quarter; the zone has others in clusters (Nieuwe Uilenburgerstraat 44,
70, 72, 74, 86; Zandstraat 11 with seven; Zwanenburgwal 92 with seven; Zeedijk 56 for Hartog Lek and
Saartje Lek-Duveen). Lead: https://nl.wikipedia.org/wiki/Lijst_van_Stolpersteine_in_Amsterdam-Centrum ;
https://www.joodsmonument.nl (per name). Caveat: stones are not places on their own; this is the
one family group the user could take as a pin for the theme; the biographies are to be read on
Joods Monument before writing. Rank **Okay**. New place, or Look for lines per street.

### Hunger Winter stone and PTT relief (Nieuwezijds Voorburgwal 178-182)

Look for lines rather than a place: see the table.

**Burgwallen-Oude Zijde**

**AC-22. Beursplein 5: the banker of the resistance and the clock the Germans shot.** Pin 52.374389,
4.895967 (Effectenbeurs, inside). In the exchange hangs a plaque (17 February 1949) for Walraven
"Wally" van Hall, the banker who financed much of the Dutch resistance through the Nationaal Steun
Fonds with loans against worthless marked shares, shot in Haarlem in February 1945; near it Cephas
Stauthamer's kneeling woman with a dove (1947, "Ex tenebris lux") for exchange members who died,
and a clock face hit by a German bullet on 7 May 1945 with a 1949 text, "Op 7 mei 1945 hebben de
moffen hun laatste kruit verschoten". Lead: 4en5mei records 2946 and 1622. Caveat: inside an
office building (Euronext): access to check; the draft "Beursplein 5, the stock exchange that left
Berlage" (oudezijde-1) covers the building, so this may be a merge of the war layer into it.
Rank **Nice**. Merge into "Beursplein 5" or new place if access is real.

**Nieuwmarkt/Lastage**

**AC-23. Megadlé Jethomim, the orphanage drawn in the paving.** Pin 52.367189, 4.901640; Amstel 1
(beside the Stopera, Amstel side). A band of light granite setts outlines part of the boys'
orphanage that stood here from 1865; the words in the paving say that in March 1943 the occupier
took the almost hundred boys away, that three carers chose to go with them to Sobibor and that none
came back. Design Otto Treumann, text Cor Jongens, unveiled 7 December 1989. Lead:
https://www.4en5mei.nl/oorlogsmonumenten/zoeken/1625/amsterdam-gedenkteken-aan-de-amstel ;
Kunstwacht object 453. Rank **Nice**. New place (DC-10, Vlooienburg plaque, is inside the Stopera:
a user may want one "Jewish memorials around the Stopera" pin with AC-24).

**AC-24. Monument Joods Verzet, against a prejudice.** Pin 52.368184, 4.898687; Amstel 9 by the
Zwanenburgwal. A black stone column with the tablets of the law (J.J. Glatt and Emmanuel Glatt,
1988) honours Jews who died fighting the occupier; Ed van Thijn argued at the time that the old
idea that Jews did not resist was simply wrong. It is the place of the yearly Kristallnacht
commemoration. Lead: 4en5mei record 1631; Kunstwacht object 455. Rank **Okay**. New place or group
with AC-23.

**AC-25. De Dokwerker and the February Strike.** Pin 52.366835, 4.904720; Jonas Daniël Meijerplein.
Mari Andriessen's docker (1952) stands for the strike of 25 and 26 February 1941 against the
deportation of Jews; the model was his friend Willem Termetz, from the resistance, and Andriessen
himself hid Jews and refused the Kultuurkamer. He first faced the Waterlooplein and was turned
toward the synagogue in 1970 for the metro works; the Rosj Pina school has adopted him; the yearly
February Strike commemoration is held here. Look for: the ABVA/KABO plaque of 2006 on the
Waterlooplein for the civil servants who struck, some executed for it (4en5mei 3611). Lead: 4en5mei
record 1434; Kunstwacht object 498. Caveat: on the square of the Jewish Cultural Quarter (A-list
buildings); the statue itself is not on the A-list. Rank **Nice**. New place.

**AC-26. Valkenburgerstraat, shot after the surrender (5 May 1945).** Pin 52.369783, 4.908957;
corner Anne Frankstraat and Valkenburgerstraat. On the evening of 5 May 1945, after the capitulation,
fifty German Grüne Polizei forced their way into building De Leeuw, where about 150 mostly
unarmed men of the BS medical troops were gathered; four men who came to free them were killed:
Flip Jernberg, Herman de Kok, Renée Pyck and Johannes van Reede. Cephas Stauthamer's relief of 1947
was lost from view in demolition and rebuilding and put back in the new building on the corner in
1998. Lead: 4en5mei record 1504; Kunstwacht object 523. Rank **Okay**. New place.

**AC-27. The 8 December monument on the Mozes en Aäronkerk.** Pin 52.368346, 4.903503 (wall of the
church, Waterlooplein side). A plaque with the names of the fifteen opponents of the military
regime murdered in Fort Zeelandia, Paramaribo, on 8 and 9 December 1982, unveiled 8 December 1992
by Liesbeth Venetiaan-Vanenburg; Surinamese Amsterdam commemorates here every year (AT5 2014,
Historiek 2012). Lead: https://nl.wikipedia.org/wiki/8_Decembermonument ; https://www.at5.nl
(herdenking Decembermoorden, 10 Dec 2014). Caveat: the church is a draft (nieuwmarkt-3) and BC-26;
the plaque could be a Look for line there instead. Rank **Okay**. New place or Look for.

## Look for lines

| Detail | Nearest place |
|---|---|
| Plaque for Jan de Jongh, BS, shot 7 May 1945 at Damrak 1-5 (1946; 4en5mei 1512) | BC-01 / draft Victoria Hotel |
| Bronze plaque of 1947 "ter herinnering van de burgers die 7 mei 1945 op de Dam gevallen zijn" (4en5mei 1618) | DC-15 |
| Stone: the Centrale Bedrijfskeukens cooked 5,247,889 litres of food here for factory workers in the Hunger Winter (NZ Voorburgwal 178-180; 4en5mei 1606) | draft Die Port van Cleve |
| Paul Grégoire's PTT relief for postal staff killed 1940-45 (NZ Voorburgwal 182, old main post office; 4en5mei 1605) | draft Die Port van Cleve |
| Zuiderkerk plaque, "gemeentelijke doodenbewaarplaats" Feb to Aug 1945, up to 135 bodies a day (4en5mei 2972) | draft Zuiderkerk (nieuwmarkt-3) |
| City staff plaque (Paul Koning, 1948), moved from the old city hall to the Stopera in 1991 (4en5mei 1623) | AC-15 |
| Bronze list of 68 Jewish staff of Maison de Bonneterie (Rokin 140-142; 4en5mei 2942) | BC-11 |
| Simon Stevin's perpetual motion "EEUWIG ROERSEL", gable stone 1997, Lange Niezel 29 | DC-03 or a Lange Niezel place |
| Wall of about ten reset gable stones on the blind side of Sint Olofssteeg 8 (Noah's ark 1676, a pelican 1791) | BC-12 |
| "Gedachtenis ter Heilige Stede 1345", niche at Kalverstraat 81 corner Wijde Kapelsteeg | draft Nieuwezijds Kapel |
| Swaddled baby "SPQA" (1913), Binnengasthuisstraat 7, the former maternity clinic | draft Binnengasthuis |
| "Het mannetje van den Bergh Ao 1.7.34", a birthday stone of 1999, Staalstraat 3 | draft Saaihal |
| Zeedijk 65 stone "Bet van Beeren 't Mandje 1927" | DC-16 |
| Carmiggelt's line "Amsterdam is een heerlijke stad om te verlaten en ààn te komen", plaque by the Schreierstoren (OSM 52.376812, 4.903859) | draft Schreierstoren |
| Prins Hendrik "de Zeevaarder" bust (Stracké), moved here 1979, opposite the Scheepvaarthuis | draft Scheepvaarthuis |
| Vrouwe Fortuna (Hildo Krop, 1946-48), on the Muntplein quay wall since 1972 | draft guardhouse at the Munttoren |
| Namenwand of the Sint Antoniusschool, Lastageweg: every second-grader paints his or her name on it on a yearly "naamdag" (Peter Zegveld) | DC-09 |
| Su Tomesen's gate of Speeltuin De Waag (2009) | DC-29 |
| Harald Schole's "Voor water" (1987), its frame taken from the skylight of the "nieuwe sjoel" | BC-40 |
| Hans 't Mannetje's 1974 stone for the restoration workshop, Nieuwe Uilenburgerstraat 91 | draft Uilenburgersjoel |
| Red copper NS plaque (1948) with the names of 49 railway staff killed 1940-45, one of 110 identical station plaques (4en5mei 2288) | AC-20 |
| Stolpersteine nos. 999 and 1000 of Amsterdam (17 Dec 2021, mayor Halsema) for the Berlin antiquarian bookseller Louis Lamm and his daughter Ruth Fanny, Amstel 3 (Parool, Ons Amsterdam) | AC-23 |
| Stolpersteine for Hartog Lek and Saartje Lek-Duveen, Zeedijk 56 | DC-16 or a Zeedijk place |
| ABVA/KABO plaque for striking civil servants (2006), Waterlooplein | AC-25 |
| Jan H. Grégoire's memorial window (1946) for Sociale Dienst staff killed 1940-45, now at Amstel 1 (4en5mei 1607) | AC-15 |
| Gable stones of the Jewish girls' orphanage, reset 9 Feb 2003, Rapenburgerstraat 171 (4en5mei 6) | draft Jewish girls' orphanage (nieuwmarkt-3) |

## Food and drink, borderline

None (theme A).

## A-list candidates

None new.

## Checked and dropped

| What | Why |
|---|---|
| Nationaal Monument, Begijnhof statues, Berlage's Beursplein fountains | A-list or beside A-list without a story of their own |
| Bijenkorf plaque "Herdenken en vernieuwen" (4en5mei 2941) | inside a department store parked as A-list candidate |
| Anton de Kom writer's stone (2022, 4en5mei 4544) | inside the Nieuwe Kerk (A-list) |
| Levensboom (Wim Tap), Sirene (Nic Jonk), Staande (Siepman van den Berg), Vrouw met stola (d'Hont), Pagaai (Fink), 3 bomen 6 lenzen (Puckey) | sculptures without a story of their own |
| Jonas en de walvis (Nic Jonk) | Kunstwacht still pins it on the Damrak, but it moved to the Nieuwe Houttuinen in 2016 (West) |
| Waakhond van het Stationseiland (Tom Claassen) | moved to the Hoofddorpplein in 2016 |
| Hang in there (Illuminate), CS east underpass | Kunstwacht: temporarily removed |
| Naatje van de Dam | gone 1914, Dam is A-list |
| Warmoesstraat 112-120, three stones "Damrak / Warmoesstraat / Papenbrugsteeg A.D. 1911" showing demolished house rows | no source found for why; lead |
| The Secret Garden, street art courtyard at Sint Nicolaasstraat 19 | closed (Parool, 18 Aug 2024) |
| Sint Nicolaasstraat and Gravenstraat (Café Belgique) paste-ups and panels, about 20 Street Art Cities entries | changing small works, no single story; mention as Look for at most |
| Street Art Cities "removed" entries in the zone (Wijdesteeg x8, Herman Brood and Rembrandt mural at Binnengasthuisstraat 19, Chucky and Moving Tongues at the Sint Antoniesluis, Big King in the Bloedstraat, others: 25 in all) | gone |
| Bicycloud (Tjep), Rokin | bike rack design, no story |
| Waiting for Busses & Birds, bus station roof | hard to see, no story |
| Tom & Jerry (Street Art Frankey), comic explosion graffiti near the Spuistraat | small changing street art |
| Gaudí-style mosaic seats | no source |
| Mirakelkolom (Rokin) | dropped by DC; restated |
| Mishenet Zequenim stones, Nieuwe Herengracht 33; Singelkerk plaque, Singel 454 | 1011/1012 postcodes but outside Core (other zones' scouts) |
| Sandberg's "Waterloo" lettering and Dirk Müller's footprints, Waterlooplein metro | weak; Look for at most in AC-25 |
| Joodsche school nr. 1 plaque | already a draft (nieuwmarkt-3) |
| Flesseman children's plaque, Nieuwmarkt 77 (4en5mei 2657) | DC |
| Vlooienburg plaque, Stopera | DC-10 |
| "Ex tenebris lux" separately | folded into AC-22 |
| Black Amsterdammers of the 17th century in the Jodenbreestraat (Mark Ponte) | no physical marker; lead for history scouts |
| Beelden of Hildo Krop on bridges in the zone | theme C / bridges scouts |

## Leads for other scouts

- **History (theme B/C), Jodenbreestraat:** Mark Ponte's research on a 17th-century Black
  community around the Jodenbreestraat and the Huis De Pinto talk "zwarte mensen in 17e-eeuws
  Amsterdam" (huisdepinto.nl; Trouw 7 Mar 2020; Volkskrant 5 Mar 2020; voetnoot.org 2018).
- **Mapping Slavery gids** (138 pages, more than 100 Amsterdam sites) is worth a full pass for
  Core by a history scout; only its web page for Amsterdam was read here.
- **Warmoesstraat 112-120 stones of 1911:** why were the Damrak house rows pictured? Ask the VVAG
  (gevelstenenvanamsterdam.nl, site being rebuilt).
- **gemeente "Achter de gevels" audio route** on the colonial past (amsterdam.nl): source list for
  Core.
- **Sint Luciënsteeg wall (AC-03):** the full KOG list of the 47 stones for a gable stone scout.
- **Westergard (AC-28)** has more walls in the city (Parool 2025): mural scouts for other districts.
