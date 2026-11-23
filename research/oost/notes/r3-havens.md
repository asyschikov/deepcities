# Oost round 3, slice havens (notes)

5 new places in `places/r3-havens.yaml`. Merges: 3 items into 2 places in `places/havens.yaml`, 1 item into 1 place in `places/r2-havens.yaml`. No monument numbers set (none of the items is a listed monument; checked `slices/havens.json`). No duplicates: grepped all `places/*.yaml` for each item, address and artist.

## Items

| Item | Result | Rank | Category |
|---|---|---|---|
| 201 Zeeman op Uitkijk + 229 Hotel Jakarta | one place, "Zeeman op de uitkijk and the head of the Java-eiland" (the hotel is too slight as a place of its own, and the two share the SMN story and the spot) | Nice | hidden-history |
| 225 Pakhuis Wilhelmina | own place | Nice | industrial |
| 232 Entrepotbrug + Entrepot-West tower | one place, "Entrepotbrug and the Entrepot-West tower" | Nice (scout: Okay; raised because a housing block on bridge piers over a harbour basin plus the "water tower" with its light strip is a real stop) | housing |
| 236 IISG + 207 Het Gezin | one place, "International Institute of Social History (IISG)", Het Gezin as a paragraph and Look for line | Amazing (see below) | hidden-history |
| 239 Borneo Architectuur Centrum | own place, "Borneo Architectuur Centrum (Pacman)" | Okay | odd-museums |
| 204 internment camp Levantkade | merged into "Loods 6 and the Kompaszaal" (havens.yaml): paragraph EN and NL, link, sources | | |
| 205 KNSM memorial | merged into "Loods 6 and the Kompaszaal": the place already named the memorial in one sentence; added its form, journey, Zuidhoek poem, 49 ships, a Look for line, the 4en5mei link | | |
| 208 municipal workmen's stone | merged into "Former cattle market and abattoir, Cruquiusweg" (havens.yaml): paragraph, Look for line, 2 links, 1 photo (Commons, 2021), sources | | |
| 231 Emerald Empire and Skydome | merged into "Barcelona and its gate (Barcelonaplein)" (r2-havens.yaml): paragraph, 2 Look for lines, 2 links (now 6) | | |
| 209 railway staff memorial | **left out** (see below) | | |
| 228 Muziekgebouw / Bimhuis | not written (user: parked as A-list) | | |
| 234 Mellow Yellow | not written (user: out) | | |

## Status checks

- Zeeman op de uitkijk: Commons photos 7 July 2019; OSM node present. 4en5mei text current.
- Hotel Jakarta: hotel site and 2026 banqueting brochure (café open to outside visitors).
- National Slavery Museum: head of the Java-eiland chosen (NOS, Feb 2024); opening put back to 2033 (NL Times, 28 Oct 2026), matching the line already in "National Slavery Monument and Keti Koti".
- Pakhuis Wilhelmina: own site live (2026), tenant list current, biennale announced.
- Entrepotbrug, Watertoren: Commons photo 25 August 2023.
- IISG: site checked November 2026 (reading room Mon-Thu 9-17, building Mon-Fri 8-18). Het Gezin: 4en5mei says it is in the building; not seen in a recent photo, so no claim on exactly where.
- BAC: site live with a programme to December 2026; opening hours page current.
- Kompaszaal: operating as KZ Kompaszaal (2024 licence renewal, venue listings); the KNSM plaque in its vestibule per 4en5mei (re-unveiled 10 Sept 2005). No recent photo of the plaque found.
- J.M. van der Meylaan stone: Commons photo 18 August 2021 shows it in place.
- Gone items: none written. The internment camp is told as history inside Loods 6, without its own pin.

## 209: railway staff memorial, Panamakade, left out

The only source is the 4en5mei record (from the 1995 book "Om nooit te vergeten"), with no photo, no exact address ("Panamakade") and a pin in the middle of Sporenburg. Nothing on OSM, Commons, TracesOfWar (searched "Panamakade" and NS memorials in Amsterdam) or the web. Couldn't confirm that it still exists, so per the brief it is not merged into "Keesje Brijde's cross". The NS plaque at Amsterdam Centraal (49 Amsterdam staff) is a different memorial.

## IISG rank

Amazing on the strength of the sources: the only handwritten page of the Communist Manifesto and Marx's annotated Kapital (UNESCO Memory of the World, 2013), the 1938 rescue of the SPD's Marx-Engels papers, the 1940 Nazi seizure and decades-long recovery (IISG's own history, NH Nieuws). Caveat for the coordinator: a passer-by sees only a plain 1960s warehouse; the treasures stay in the vault; the reading room is open to all on weekdays. If the bar is "worth a visit in person", Nice would be defensible.

## Source conflicts and uncertainties

- Zeeman: height 9 m (4en5mei) vs 12 m including base (nl.wikipedia); text gives no figure. Dead: nl.wikipedia says made for 321 SMN seamen and 2020 research found at least 600; 4en5mei says 611 plus about 250 foreign seamen and gunners. Text says the column names the Dutch dead and Maussen counted at least 600. Return: 4en5mei says moved back early April 2003, nl.wikipedia re-unveiled 4 May 2003; both used. Move-away: 4en5mei "after the move to the Westhaven", nl.wikipedia 1969 to the Vlothaven; text says "western harbours".
- IISG building: nl.wikipedia calls it a 1962/63 customs warehouse (Pakhuis Koning Willem I); IISG says former cocoa warehouse. Both given.
- Entrepotbrug completion: nl.wikipedia 1992, atelier PRO 1991; text says 1991–1992. Tower 1991–1997 (atelier PRO), delivered 1997 (nl.wikipedia).
- Municipal workmen: the stone does not say where they worked. TracesOfWar (with Rick Hoogervorst) traced the four as Jewish and says De Vries was an abattoir butcher; Joods Monument confirms Jacob de Vries (Leeuwarden 1895, Sobibor 1943) was a butcher. The other three not checked on Joods Monument. Text says "most likely abattoir staff". That the stone was reset in the new houses is TracesOfWar's inference, given as "probably".
- Pakhuis Wilhelmina address: nl.wikipedia Veemkade, scout 576, own site 580; given as 576–580. The Vrieshuis Amerika (scout's side story) is left out: its later fate could not be found.
- Internment camp: Loods 6 is not named as part of the camp; text only says it is the last KNSM shed that stood there then.

## Pins

- Exact: Zeeman (OSM node 5553461624, matches nl.wikipedia and 4en5mei within 2 m), IISG (OSM node), BAC (OSM node at the entrance square), Pakhuis Wilhelmina (centre of the OSM building outline), Entrepotbrug (centre of the OSM building relation, over the water).
- Merges keep their existing pins.

## Places without photos

None. Het Gezin (inside the IISG) and the KNSM plaque have no Commons photo.

## Dutch text

Spliced from nl.wikipedia (Zeeman op de uitkijk, Hotel Jakarta, Pakhuis Wilhelmina, Entrepotbrug, Watertoren Entrepot-West, IISG, BAC, Interneringskamp Levantkade, Skydome, Emerald Empire), 4en5mei (inscriptions and facts), atelier PRO's Dutch page (facts and the Broeksma quote), NH Nieuws (short quotes), TracesOfWar (facts and short phrases), the IISG and BAC sites (opening hours). Pakhuis Wilhelmina's own site is English only; its Dutch comes from nl.wikipedia. Linking sentences and "Let op" lists written in Dutch where sources gave only facts.

## Route idea

Docklands memory walk: Zeeman op de uitkijk, Vrouwe Fortuna, Pakhuis Wilhelmina, Loods 6 (KNSM memorial, internment camp), Barcelona with Skydome and Emerald Empire, Borneo Architectuur Centrum, Keesje Brijde's cross, Entrepotbrug, IISG, then the cattle market and the J.M. van der Meylaan stone.
