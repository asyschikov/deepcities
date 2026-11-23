# Noord round B, slice "waterland" (Landelijk Noord): notes

## New places (research/noord/places/r3-waterland.yaml)

| Scout | Title | Category | Rank | Check | Photos |
|---|---|---|---|---|---|
| 220 | Termieterweg, the old tram bed | hidden-history | Okay | none | 2 (Commons) |
| 221 | Poppendam, a village older than Amsterdam (gone) | hidden-history | Okay, status Gone | none | none |
| 223 | Adcock station, Durgerdammergouw | hidden-history | Okay | Still there? | none |

New ranks are not yet in `scripts/data/amsterdam-c-list-ranks.json` (outside this slice's files).

### 220 Termieterweg
- The scout thought only OSM tied the path to the tram. nl.wikipedia "Termietergouw" says it outright: the Termieterweg was named in 1992 and runs on the former track of the Waterland tram. The "Oude Tramwegbrug" article adds bridge 1733 (about 1985, named 9 November 2018 on a proposal of the Centrale Dorpenraad) and puts the Zunderdorp stop at Termietergouw 12.
- Pin: the Oude Tramwegbrug (52.409908, 4.946631, Wikipedia coordinates and OSM nodes), where the path begins, not the scout's point in the middle of the path.
- The two Wikipedia articles disagree on which polder the Termieterweg is in (Grote vs Kleine Blauwe Polder). The text names neither.

### 221 Poppendam
- **Pin moved.** The scout's point (52.419994, 5.023900) is by the Aandammerbrug near Holysloot, about 3.5 km from the dig. The 1985 dig was by the crossing of the Poppendammergouw and the Nieuwe Gouw, between Ransdorp and Zunderdorp (Wikipedia; Archeologische kroniek 1985 says the dig came before a cycle path along the Nieuwe Gouw between Zunderdorp and Ransdorp). The pin is the road junction (OSM node 46505705). The exact dig spot is not published, so the pin is approximate. It is not flagged, because the skill says not to flag gone things.
- Dating conflict: Wikipedia gives 1006–1028 (tree rings and C14); the 1985 kroniek gives two C14 dates calibrated to the second half of the 10th century. The text says "around the year 1000".
- Left out: the farm called Poppendam on the Poppendammergouw (Wikipedia only; no address or other source found), and whether house mounds can be seen from the road (no source).
- Gone bar: passed through the road name (1957), the cycle path that led to the dig, and the Ransdorper Die (formerly Poppendammer Die, per Bos 1986). Rank Okay.
- No photo: nothing on Commons shows the site. A wrong photo is worse than none.

### 223 Adcock station
- Sources: stelling-amsterdam.nl (Dutch, the source TracesOfWar cites) and TracesOfWar (English and Dutch, read in the browser). No archive or newspaper source. TracesOfWar is about 0.7 km from Ransdorp church, so the hut is nearer Ransdorp than Durgerdam; it stands along the Durgerdammergouw.
- Survival: OSM way 57863724 (building=bunker, type=Adcock, "survey 23-03-17"); no BAG building record; no Commons photo; TracesOfWar photos are undated and all rights reserved. Hence `check: Still there?`.
- Rank: the scout suggested Nice. I gave it **Okay**: the sources are two short paragraphs, the hut is on private land about 140 m from the nearest road, and nothing confirms it after 2017. Worth raising to Nice if a site visit shows it plainly from the road.
- Left out: OSM's `historic:period=1942 - 1956` (the 1956 end is unexplained), the scout's "100 m from the cycle path to Holysloot" (not verified), and any claim about the roof or shape.
- The "four antennas" (stelling-amsterdam.nl) and the resistance's "five radio masts" are both in the text, attributed.

## Merges

- **222 into "Schellingwouderkerk and bandstand"** (waterland-south.yaml): a paragraph in both languages, the weathercock Look for line extended, the HCAN link added (6 links now), sources. Source: HCAN post of 6 May 2025 and the full text of Wim Schindler's talk (a .docx on hcan.nl), including the quoted police report and the *De Waarheid* item of 17 May 1944. Wil Schindler was 22, a former aircraft spotter with the Flak, hiding at De Wijde Blick, Wijkergouw 42, with the Van der Moor family. The house number and family name are left out of the text (a private home).
- **224 into "Kinselmeer and the Durgerdam dike"** (waterland-south.yaml): a paragraph, a Look for line, two links (Wikipedia Hoeckelingsdam; Rijkswaterstaat, 22 July 2025) and sources. Rijkswaterstaat confirms the repair from late 2024 and that the dam was an island again before the 2025 breeding season. The scout's two bird screens are not named in the text: no source names them and Overpass did not answer. Wikipedia's "a footpath in the IJdoornpolder" is used instead.
- **249 into "Durgerdam"** (durgerdam.yaml): one sentence in both languages, after the 2022 plan: the sandbags of January 2024 (AT5, 4 January 2024: 300 m, about 40 cm, after storm Henk) and the permit application of June 2026 for seismic research on and around the dike (Waterschapsblad 2026 nr. 14935). An AT5 link was added (6 links now). Rodi of 5 January 2024 confirms the 2022 course still held. No news was found of a decision after 2022. hhnk.nl/durgerdam returns 404.

## Needs a decision

- 223: Okay or Nice (see above).
- 221: whether a gone place with nothing to see is wanted at all. It passes the gone bar only through the name.


## Coordinator decision

- 221 Poppendam (gone) dropped (2026-11-23): it passes the gone bar only through a road name and there is nothing to see on site.
