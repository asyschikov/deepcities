# Westergas venues (Fabrique des Lumières, Het Ketelhuis, Thuishaven)

Drafts: `research/west/places/westergas-venues.yaml` (4 places: the three venues plus Breugem Meeting Point)
and `research/food/places/prael.yaml` (1 Centrum place, De Prael tasting room). Both validated, 0 errors.
No live writes.

## Pool check

- Westergasfabriek `k63k760wpsjf7b8y2ah9ajm5` (Amazing): carries both monuments (337504 purifier
  building, 337627 boiler house) in its monument list and names Het Ketelhuis in one line. Not edited.
- Amsterdam in Motion `jrhdu4qjvjp4md5nx9e3pfcr` sits in Zuiveringshal **Oost**, the eastern twin of the
  same purifier building. The Fabrique is in Zuiveringshal **West**. The new text points across to it.
- Gashouder `jsds7c6k9b08ytpixfmvm8kx`: no overlap.
- No Thuishaven, Fabrique or Ketelhuis place existed.
- Heritage fields left off both Westergas venues on purpose (as Amsterdam in Motion does): the
  monument numbers already sit on the Westergasfabriek place, and repeating them would trigger
  assemble's duplicate-monument warning. The registers are linked instead.

## 1. Fabrique des Lumières

Sources: national register 337504 (full omschrijving), city register API, nl.wikipedia Gasfabriek
(purification chemistry), fabrique-lumieres.com (history page, opening hours, prices, route),
Westergas press release (2021), D/DOCK via Frame and Dezeen, Modulo Pi project page.

- **Projectors: "104" not confirmed.** Modulo Pi (the AV supplier) gives 102 Epson projectors;
  D/DOCK, Dezeen and I amsterdam say "over 100". Text says "about a hundred".
- **3,800 m2 is projection surface (walls and floor)**, confirmed by D/DOCK and Modulo Pi. Floor
  area is something else: 2,800 m2 for the whole Zuiveringshal West (Westergas press release),
  1,350 m2 of visitor space (own venue-hire page, Modulo Pi). Only the 3,800 m2 projection figure used.
- Walls up to 17 m: Westergas, D/DOCK, Modulo Pi agree.
- Purification: the register names the parts (zuiveringsruimten, regeneratielokalen, oxydebergplaats,
  kalkblusserij) and says the roof boarding was left out "met het oog op een eventuele explosie".
  What purification did (iron ore binding hydrogen sulphide and cyanide) is from nl.wikipedia
  Gasfabriek. I kept the explosion line to what the register says (no claim about how the roof
  would behave).
- Dropped: Culturespaces' own history page says the gasworks lit Amsterdam's streets "since the
  middle of the 17th century" and dates the boiler house 1903 and gasholder 1902; the 17th-century
  line is plainly wrong, so their page is used only for their own facts (opening date, shows, address).
- Dropped: the projections running over the bare brick. D/DOCK describes a new interior skin with
  "the look and feel of a historic nineteenth-century factory", so it is not clear how much of the
  old wall is visible inside.
- Rank **Okay**: a franchise show (sixth Culturespaces centre) in a hall whose inside you mostly
  don't see under the projections; the building itself is free to see and already the heart of the
  Westergasfabriek place (Amazing). Nice would also be defensible for the 17 m hall.
- Pin: north façade on the Pazzanistraat, at the address point of no. 37 (PDOK) moved to the wall.
  Exact door not confirmed (no OSM entrance node fetched: Overpass timed out).
- Photos: RCE canal front (CC BY-SA 4.0, 2005) shows the whole mirrored building (both halls);
  RCE interior roof (1982) shows the Polonceau trusses. Neither can be pinned to the west half
  specifically; both are of monument 337504. Commons has no photo of the Fabrique itself.

## 2. Het Ketelhuis

Sources: ketelhuis.nl (history article Nov 2026, about page, route), national register 337627,
Gemeente Amsterdam Bureau Monumenten & Archeologie "Cultuurhistorische verkenning
Westergasfabriekterrein" (2012 concept, via ruimtelijkeplannen.nl), nl.wikipedia Het Ketelhuis,
Cinema Treasures, Amsterdam Now.

- **Which boiler house: Pazzanistraat 4 (rijksmonument 337627)**, the one beside Gosschalk's
  engine house, not the 1901 ammonia boiler house at Polonceaukade 27 (512960), which the existing
  Westergasfabriek text mentions. The cinema's address and the register agree.
- **Building date conflict.** The city monument API gives 337627 as Gosschalk, 1885 (it looks like
  the complex default). The city's own heritage bureau (2012) lists it as 1903, architect unknown,
  and the cinema's history page says 1903. The register describes it as built "in vergelijkbare
  trant met het machinegebouw". Text says 1903 and "built to match Gosschalk's engine house"; it
  does not name an architect. The cinema's page calls it a Gosschalk design: not used.
- **1999 vs 2006 settled.** Opened 29 March 1999 (own site, Amsterdam Now, Wikipedia). Closed in
  2005 for enlargement, reopened in 2006 with three screens (Wikipedia); Cinema Treasures' "opened
  2006" is that reopening (it lists the three screens, 143 + 50 + 50 seats). No move to another building.
- Ton Schippers and Marc van Warmerdam as founders, the three-year temporary permit and the
  near-bankruptcies rest on nl.wikipedia (repeated by listings). Kept as well established; the
  exact reopening date (13 Sept 2006, with the premiere of Zwartboek) is in Wikipedia only and left out.
- Dropped: the exterior as the set of the GTST clubs Scala, Teluma and Dansatoria (1999 to 2013):
  Wikipedia trivia only, no second source found.
- Dropped: the temporary home with benches in the Openbare Verlichting building during the
  rebuild (Wikipedia only).
- Rank **Nice**: a real local institution in a listed gasworks building, open daily, with a
  restobar; worth a stop on a Westerpark walk.
- Pin: middle of the south long façade on the Pazzanistraat (entrance in the middle of seven bays,
  per the register), from the building outline in the city API.
- Photos: `Westerpark Amsterdam Ketelhuis.jpg` (PD, 2010, GPS at Pazzanistraat 4; seven bays,
  door in the middle: matches the register) and `Amsterdam Ketelhuis 337627.JPG` (PD, WLM 2011,
  end wall with three round-arched windows). Both checked visually.

## 3. Thuishaven

Sources: 3voor12 (2014 and 2015), AT5 (June 2020), Gemeenteblad notices via officielebekendmakingen
(structure permits extended to 2029, event permit 2026, earlier permits 2021 to 2026), thuishaven.nl
(Nov 2026), Amsterdam Now (2026), I amsterdam.

- **Where it is now: still Contactweg 68, open.** No move or closure found. Every Gemeenteblad
  notice from 2021 to Nov 2026 is for Contactweg 68; the 2026 event permit (1 Jan 2026 to
  1 Jan 2027, 3,000 visitors) was granted 14 Nov 2025; another permit decision for Contactweg 68
  was published 12 Nov 2026; the agenda on its site runs into March 2027.
- **Opening year: 2013** (3voor12 2014: "Toen Thuishaven in 2013 begon"), in Sloterdijk, on a
  vacant industrial lot (3voor12 2015). Whether the 2013 lot was exactly Contactweg 68 is not
  stated; the oldest structure permit is from 12 May 2015, so the text says "since 2015" only for
  the permits.
- **Temporary use:** the structure permits (2015, 2015, 2017, 2018, 2020) were extended in Feb 2025
  until 15 May 2029, no objections filed. Not set as Outlook: nothing says it will close then.
  Worth watching in 2028.
- **Not found, so not in the text:** containers and greenhouses (the permits list tents, a Romney
  shed, a toilet block with office, an outdoor bar; the site lists Temple, Loods, Circus); any
  move, closure or fight with residents over permits (no houses nearby in the sources; Parool
  archive not reachable). Two 2021 event permits were withdrawn (ingetrokken), which fits the
  Covid year; no story attached.
- **Left out:** 2020 Kamervragen by SP member Van Kent about Thuishaven taking state Covid support
  while not paying all staff (answered Aug 2020). Labour dispute, not about the place; available if wanted.
- Category **culture** (Museums & stages) rather than curiosities: it is a stage. Rank **Okay**:
  no building to see, only open with a ticket, but a fixture of Amsterdam's dance scene for 13 years.
- Pin: Contactweg 68 address point (PDOK). The gate is on the Contactweg; exact gate not checked.
- **No photo**: nothing on Commons.

## 4. De Prael: which venues exist today (extra request)

Sources: deprael.nl (story, Amsterdam page, contact and hours, Nov 2026), Stadsherstel pages for
Oudezijds Armsteeg 26A and Oudezijds Voorburgwal 28, nl.wikipedia Brouwerij De Prael (rev. 10 Nov
2026) and Brouwerij Breugem, Het Parool 29 Oct 2024 (headline and caption only, paywall), De
Prael's own LinkedIn post (Oct 2024, "proeflokaal op de Wallen blijft open ... wij stoppen met het
brouwen", seen as a search snippet only), breugembier.nl press release 19 Sep 2022,
breugemmeetingpoint.nl (about, brewery, hours), KettingHuls project page, BAG.

**Two Amsterdam venues exist today:**
1. **De Prael tasting room, Oudezijds Armsteeg 26 (Centrum).** Open Tue to Sun 12.00 to 00.00.
   Owned by Social Capital since Jan 2023; brewing on the Wallen stopped (announced Oct 2024,
   closed 2025); beer brewed elsewhere since 2026. Drafted in `research/food/places/prael.yaml`,
   detail **district** (Deep Centrum only): the building story (KLM houses, Project 1012) is good
   but not strong enough to lift. Rank **Okay**.
2. **Breugem Meeting Point, Nieuwe Hemweg 2 (West).** The former De Prael Houthavens (opened
   2017; bartsboekje: soft opening Feb, official opening April 2017). Drafted in
   `westergas-venues.yaml`, rank **Okay**.
- Gone: De Prael in De Pijp (opened 4 March 2023, closed 2023/2024), Groningen (closed
  1 Nov 2024); The Hague (Esperantoplein) still open but outside the map.

**The "earlier OZ Voorburgwal 30 brewery building"** is the same Stadsherstel complex as the
tasting room: De Prael occupied three Armsteeg houses, the Veilinghuisje (where it brewed) with its
zinc new build (packing room) and OZ Voorburgwal 30. The brewing building is the Veilinghuisje,
already in the pool as `ykinnyg8tbrbdhh8o3hhjkdc`, whose Look-for line already points to the
tasting room. No separate place: the new place points back to the Veilinghuisje. **Coordinator
call:** the Veilinghuisje text says nothing about the brewery inside it 2008 to 2025; one sentence
could be added there ("From 2008 to 2025 De Prael brewed its beer in the hall").

**Conflicts and corrections:**
- nl.wikipedia says "In februari 2023 werd de locatie aan de Oudezijds Voorburgwal overgenomen door
  Breugem". That is a slip: Breugem's press release, Breugem's own site and the Breugem article all
  say it was the **Houthavens** location. Used the Breugem sources.
- Breugem takeover date: own site "since March 2022"; press release of 19 Sep 2022 announces the
  cooperation with the new name from Feb 2023. Text: taken over in 2022, called Breugem Meeting
  Point since February 2023.
- Founding year: own site "since 2001", Stadsherstel "operational from spring 2002", Wikipedia
  2002. Text: spring 2002.
- Building at Nieuwe Hemweg 2: **not a harbour shed** as far as any source says. BAG: built 1959,
  two storeys, not listed; KettingHuls converted the "industrial building" into a maakplaats in
  2014 (Hempoint estate). Original use not found: left out.
- **Stenen Hoofd** is not next to it: the Stenen Hoofd is on the IJ by the Westerdok, about 1.7 km
  east. Nieuwe Hemweg 2 is by the Westerpark and the Minervahaven/Houthavens edge. Nothing to merge.
- Pool check: no De Prael or Breugem place exists (`--all --q Prael`, `Breugem`, `Hemweg`). The
  Houtveemloods (`psbge69iuyq0xhx7f4apr7ok`, Nieuwe Hemweg 10) is a different building, 300 m north.

**Dropped (single source, Wikipedia only):** founders Arno Kooy and Fer Kok; first called De Parel
until the Budel brewery objected, hence the anagram; start on the Schinkel estate; "first Dutch
brewery to work this way"; founders forced out around 2020; beer names after Amsterdam folk singers
(and unclear whether still true with beer now brewed elsewhere).

**Photos:** Prael: `Oudezijds Armsteeg - Amsterdam (NL32) - 2024-11-25 - 2.jpg` (CC BY-SA 4.0;
shows the alley with the "De Prael proeflokaal" sign and the pale new fronts on the left; checked).
Breugem: `Brouwerij De Prael.jpg` (CC BY-SA 4.0, May 2018, "Brouwerij De Prael, Nieuwe Hemweg";
shows the building with the green HEM and the Prael logo, so it shows the right building under its
old name).

**Pins:** both at the PDOK address points (Oudezijds Armsteeg 26: 52.375572, 4.899390; Nieuwe
Hemweg 2: 52.394044, 4.868188). Doors not checked on site.

## Route ideas

- Westergas loop: Westergasfabriek office (Haarlemmerweg), Het Ketelhuis, Fabrique des Lumières and
  Amsterdam in Motion (the twin purifier halls), Gashouder. Thuishaven is 1.5 km further west, a
  bike stop on a port ride from Sloterdijk.
