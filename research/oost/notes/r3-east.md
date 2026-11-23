# Oost round 3, slice east (notes)

5 new places in `places/r3-east.yaml`. Merges: 3 items into 3 places in `places/indische.yaml`, 1 item into 1 place in `places/r2-ijburg.yaml`. No monument numbers set: none of the items is listed (the guardhouse has "geen monumentenstatus" per the 2021 planning sketch). Duplicates checked by grepping `places/*.yaml` for each item, address and artist. All five pins point-checked with `scripts/areas.py`: borough Oost.

## Items

| Item | Result | Rank | Category |
|---|---|---|---|
| 210 Ceramplein and the freedom tree | own place, "Ceramplein, "Hun leven, onze vrijheid" and the freedom tree" | Okay | hidden-history |
| 240 Leeuwen van Zeeburg | own place | Okay | street-art |
| 224 Zuider IJdijk guardhouse | own place, widened to "Guardhouse and Fliegerhorst bunkers, Zuider IJdijk" (see below) | Okay | hidden-history |
| 227 Sluishuis | own place | Nice | housing |
| 230 De Warren | own place, "De Warren, Amsterdam's first housing co-op" | Okay | housing |
| 206 Van der Pek courtyard stone | merged into "Van der Pek's garden blocks, Balistraat": paragraph EN and NL, Look for line, 2 links (4en5mei, oost-online), sources | | |
| 211 pupils' plaques, Laing's Nekstraat | merged into "Jewish memorials of the Transvaalbuurt": paragraph EN and NL, Look for line, sources. No link added: the place already had 6 | | |
| 217 Outersdorp and the Oetewalermolen | merged into "Flevopark pumping station and the polder cottages": paragraph EN and NL, Look for line, 2 links (now 6), sources | | |
| 220 1997 IJburg referendum | merged into "Enneüs Heermabrug" (r2-ijburg.yaml): paragraph EN and NL, Look for line, link (now 5), sources | | |

Nothing gone written; no item left out.

## 224: site check and the bunkers

The scout flagged the guardhouse's state. Findings: the house was renovated before 2018 and is a family home (the 2018 heritage note of Monumenten en Archeologie says it kept its mass, symmetrical front, cornice and hipped roof; a 2018/2021 architect's sketch for a rear extension names the family who live there). The 2021 "restore the three military buildings" idea in the scout is not borne out: the planning documents show a house extension, not a restoration. So it is told as a private house seen from the dike.

The same heritage note says the three German bunkers of Fliegerhorst Schellingwoude nearby are "the largest still in Amsterdam" and forms an ensemble with the house. TracesOfWar has pages for all three (shelter, double crew bunker, Kleines Gefechtsstand at Zuider IJdijk 30, "still exists", on private property). The scout's "no German bunker in Oost beyond the Middenweg one" missed them (they are not in OSM). I folded them into the guardhouse place. Their current state after the Baaibuurt-West building works could not be confirmed with a dated source, so the place carries `check: Still there?` with a note. Rank Okay (private ground, little to see); Nice if someone confirms the bunkers are visible.

## Status checks

- Ceramplein: Commons photos 9 October 2021; 4 May silent march and wreath-laying at the square listed by 4en5meiamsterdam (2023 programme and an undated listing). Pin is the OSM artwork node.
- Leeuwen: Commons photos August 2019 and July 2020 (east pair); OSM has four nodes, two per bank. Pin on the west pair (Westelijke Merwedekanaaldijk side).
- Sluishuis: Commons photo of the stairs 6 March 2025 and a Komoot tip of 16 March 2025 (climbed to the roof). The 80-days-a-year rule is from nl/en.wikipedia; no official 2026 opening schedule found, so the text says "not every day" and "rationed", without dates.
- De Warren: still active (NH Nieuws 22 February 2026, a resident of three years speaking for the new platform). Its old site dewarren.nl is now a parked domain, so not linked.
- Van der Pek stone: 4en5mei lists a 4 May 2026 commemoration in the garden; oost-online 2 May 2025.
- Laing's Nekstraat plaques: Commons photos 21 August 2024 show them on an interior wall; 4en5mei says they are in IKC Frankendael.

## Source conflicts and uncertainties

- Guardhouse date: 1907 (heritage note: range built from 1907, opened 1910) vs 1909 (TracesOfWar). Given as 1907–1909.
- Leeuwen: nl.wikipedia says the lions went to Emmeloord and the Noordoostpolder kept "its" lions; a Commons file says copies were placed at the Poldertoren in 2010. The text says the lions "now sit at the foot of its Poldertoren" and that a 2010 cast was offered, which fits both readings; it does not say whether the Emmeloord lions are originals.
- Ceramplein: nl.wikipedia itself says the stone may not be the 1957 tile and that the 1945 lime may not be the freedom tree; the text keeps both doubts. Date of the phoenix unknown (archive photo c. 1988).
- Van der Pek: only Friederich's execution is documented in detail (TracesOfWar person page via search snippet: 8 March 1945, Amsteldijk near Rozenoord, Rauter reprisal). For the Engelen brothers the text says only "executed in March 1945" (4en5mei, oost-online). oost-online calls them Jan, Gerard and Anton; 4en5mei gives the full names.
- Oetewalermolen: the existing Flevopark text says a scoop-wheel mill worked here for two and a half centuries; nl.wikipedia says it got a screw in 1866. The merge paragraph gives the screw, without rewriting the existing sentence. Where the spared date stones are now is not known; the text only says they were spared.
- Sluishuis height: nl.wikipedia says the design was 52 m; not used.
- De Warren: "about fifty young Amsterdammers" is from Ammodo (via search) and NH Nieuws ("ruim vijftig" residents); consistent.

## Pins

- Exact: Ceramplein (OSM node 5973397932), Leeuwen (OSM node 5965126782, west pair), Sluishuis (centre of OSM relation 21145516), De Warren (centre of OSM way 912648355).
- Approximate: guardhouse (address point of Zuider IJdijk 24 from OSM/Nominatim, matches TracesOfWar within 3 m; the bunkers themselves are around no. 30 and not pinned).
- Merges keep their existing pins.

## Places without photos

- Guardhouse and Fliegerhorst bunkers (no Commons photo of the house or the bunkers; the Alf van Beem "Zuider IJdijk" photos show the workshop yards, not the house).
- De Warren (Commons has only a prize banner, used by nl.wikipedia; no photo of the building).
- No photos added to the merged places (the Laing's Nekstraat plaques exist on Commons, CC0, if wanted for "Jewish memorials of the Transvaalbuurt": `2024 Laings Nekstraat, Asd-plaquette (A).jpg` and `(B)`).

## Dutch text

Spliced from nl.wikipedia (Monument leven en vrijheid, Ceramplein, Leeuwen van Zeeburg, Zeeburgereiland, Sluishuis, Wooncoöperatie De Warren, IJburg, Outersdorp, Oetewalermolen), the Monumenten en Archeologie note of 2018 (guardhouse, almost verbatim), 4en5mei (Van der Pek stone, Laing's Nekstraat plaques), oost-online (Van der Pek, short phrases) and NH Nieuws (De Warren opening). Linking sentences and "Let op" lists written in Dutch.

## Route idea

East of the dike, by bike: Ceramplein, Van der Pek's garden (on 4 May), Flevopark pumping station (Outersdorp), Gemaal Zeeburg, Leeuwen van Zeeburg, the guardhouse and bunkers on the Zuider IJdijk, Enneüs Heermabrug, Sluishuis (roof on open days), then out to Centrumeiland and De Warren.

## Needs a decision

- Whether the guardhouse place should stay Okay with a "Still there?" flag for the bunkers, or wait for a site visit.
- Whether to add the Laing's Nekstraat plaque photo to "Jewish memorials of the Transvaalbuurt" (it would be the 7th photo, of an indoor plaque).
