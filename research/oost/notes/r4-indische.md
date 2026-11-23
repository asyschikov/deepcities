# Oost round 4, slice `indische`: notes

## New places (`places/r4-indische.yaml`)

| # | Title | Category | Rank | Flags |
|---|---|---|---|---|
| 307 | Fré Cohen's level-crossing plaques | hidden-history | Nice | check: Location |
| 308 | Man & Schaap, Zeeburgerdijk | street-art | Nice | none |
| 309 | De Kus, Azartplein | street-art | Okay | none |
| 318 | Oranjesluizen, the Zeeburgereiland side | infrastructure | Nice | none |

- **307** (site check): the Molukkenstraat plaque is confirmed by the Amsterdamse School Platform ("locatie ongewijzigd", undated) and Geheugen van Oost (February 2022, "nog te zien"); no photo found online. The underpass opened on **7 March 1936** (GvO 2020, Vrienden van Watergraafsmeer, AS Platform; the plaque is dated 1936), not 1937 as GvO 2022 and the scout say. The pin is on the Molukkenstraat carriageways under the railway (OSM), which point-checks to Watergraafsmeer/Middenmeer, not the Indische Buurt; the wall is unconfirmed ("Carolina MacGillavrylaan side", "east side", "Molukkenstraat side" in three sources), hence `check: Location`. The 1939 plaques: AS Platform and GvO say Javastraat and Maritzstraat survive; Oost-Online 2021 calls the second one "Beukenweg" (the Maritzstraat continues as the Beukenweg under the tracks). Theft date given as "around 2011" from "about ten years ago" in sources of 2021 and 2022. Attribution of the 1939 plaques to Cohen is "probably" (AS Platform); Oost-Online says all are hers. Who commissioned the 1936 plaque differs (AS Platform: the city; Amsterdam op de kaart blog: a grateful neighbourhood association), so it is left out. Rank Nice rather than the usual Okay for plaques because the place is the whole series with a strong story; the user may prefer Okay. Her Betondorp honours (Fré Cohenbrug board March 2025, tile tableau May 2026) are left to the Betondorp places, not told here.
- **308**: the scout pin (52.361383, 4.947662, from GvO) is in the park; the pond is at the junction, OSM node and Wikidata 52.365756, 4.948608, used. Friend's full name (on nl.wikipedia) left out as a private person. Latest evidence: GvO October 2024. Ranked Nice (scout said Okay): odd, funny, prize-winning.
- **309**: Maarten Loonen's dates (1957–2021) come from Commons uploads by his family (June and August 2026) showing the sculpture in place; GvO September 2026 for the story. The register's "unknown artist" is stated as current (GvO says the Stadscuratorium was informed, no change seen).
- **318**: scout's `check: Facts` on monument status resolved: listed as a national monument in 1979 with the 1895 pumping station, struck off in 1984 after Rijkswaterstaat went to the Raad van State (Amsterdam op de kaart, citing Parool 18 February 1984). Opening date: the stone on the lock says "geopend 18 maart 1872" (Commons photo 2018) and Amsterdam op de kaart agrees; nl.wikipedia's "first ship 25 September 1872" is not used. Pin on the Zuidkolk (OSM, borough Oost); per the Noord scout all locks point-check to Oost. One sentence on the Noord side's pull ferries and lock-keepers' row, cross-referring "Schellingwouderpark's pull ferries and the Noorder IJdijk" (research/noord/places/r4-east.yaml). Exact spots of the 1872 stone and the 1997–2000 memorial column on the complex are not known (Look for lines only).

## Merges

- **307 pointer** → "101 Namen, railway viaduct": a paragraph and a Look for line on the 1939 "Doorgang vrij, Oost is blij" plaque in the same viaduct (HUA photo caption, GvO 2019/2022); link to GvO added.
- **310 Fröger column** → "Hekkepoort, Flevopark" (user's decision): paragraph, Look for line, GvO link. Site check settled: Commons has seven CC0 photos of 17 June 2025 showing the column standing, with a woodchip path to it. It is **not** 112 m from the gate as the scout said: OSM node 8569748068 and a 2016 Commons geotag put it in the woods on the park's south side, about 550 m from the Hekkepoort; the text says "about half a kilometre". Dates: nl.wikipedia says initiative 1952; GvO says set up in 1953; text uses 1953.
- **324 elephants and the Van Eyck playground** → "Jewish memorials of the Transvaalbuurt": two sentences and a Look for line (nl.wikipedia Transvaalplein and Olifant met kalf; Commons August 2024). Maker and date of the elephants are unknown, so not given. No link added (place already has 6).
- **325 Frankey's Tram 14 / Saint Johan** → "Badhuis Javaplein and the colonial street names": paragraph, Look for line, iamsterdam link. Status: I amsterdam lists it among Frankey's works (April 2025), Amsterdam Experiences has it on its live map; no report of removal. Not flagged; a site look would confirm the glass is still dressed.
- **330 Pretoriusstraat 37** → "Berlage's gateway blocks, Pretoriusstraat": paragraph, Look for line, links to GvO and Joods Monument. Victims named as the Stolpersteine and Joods Monument do (Elkan Roe and Sara Roe-Blok, Sobibor 16 July 1943); the children and the girl in hiding unnamed. The poet neighbour quoted by GvO is not named.
- **333 bubble screen** → "Leeuwen van Zeeburg" (r3-east.yaml): paragraph, Look for line, links to GvO and nl.wikipedia Bellenscherm. The scout's "a board nearby marks the vanished lock island" was not found in any source and is left out (GvO 2020 says there is no information board).
- **334 Heiman Barnstein's stone** → "Nieuw Uilenburg, Handwerkers Vriendenkring blocks": sentence, Look for line, GvO link. Status: Amsterdam op de kaart (page updated December 2025) captions its photo "Boven de poort een gedenksteen voor Hijman Barnstein"; not flagged. Address: GvO says between Tugelaweg 57 and 58, joodsamsterdam says 56-57; GvO used (it is the photographer's caption). Spelling Heiman/Hijman varies; Heiman used as in GvO and joodsamsterdam.

No titles changed. Only the seven named places were edited (checked by comparing parsed files before and after).

## Items left out

- Nothing from the slice left out entirely. Dropped details: the scout's 1937 opening date for the Molukkenstraat underpass, the "board by the lock island" (333), the plan for a new Linnaeusstraat plaque by Serge Verheugen (Oost-Online 2021, no outcome found).

## Places without photos

- None of the four new places lacks a photo. Fré Cohen's plaques has only archive photos (the 1939 plaque in 1983 and the new Molukkenstraat viaduct around 1936); a current photo of the 1936 plaque would help clear the flag.

## Validation

- `validate.py`: 0 errors for r4-indische.yaml, indische.yaml and r3-east.yaml. Source lines I added that contain ": " are quoted. Some older source lines in indische.yaml and r3-east.yaml (not mine) parse as one-key dicts because of an unquoted ": "; sources are stripped on import, so harmless, but worth a quote pass sometime.

## Route idea

"Barriers, locks and dikes": 101 Namen and its 1939 plaque → Badhuis Javaplein (Saint Johan) → Fré Cohen's plaques at the Molukkenstraat → Hekkepoort and the Fröger column → Man & Schaap → Leeuwen van Zeeburg (bubble screen) → Oranjesluizen.
