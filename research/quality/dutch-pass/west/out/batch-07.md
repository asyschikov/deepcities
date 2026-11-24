# Dutch pass: west, batch 07

27 places done. Every claim in the EN and NL summary, body, Look for and attributes was checked against the place's links/sources (RCE register, municipal monument descriptions at data.amsterdam.nl, the monuments API, nl.wikipedia, kunstwacht routes, architectuurgids, BAG street names and the other linked pages). That is roughly 400 checkable claims; 62 needed a change.

- Sourced: 6 (evidence added, text kept)
- Narrowed: 47
- Cut: 9
- Reordered: 0
- Copy checker: 0 copied runs in all 27 places (nlcheck, 8-gram).
- No em dashes and no spaced en dashes in any Dutch text. Every NL body ends with "Let op:" and the same items as the EN Look for.

## Places whose EN summary (hook) changed
- Henri Pronker: green thong cut.
- Bolbewoners: "Rocking Machine" narrowed to "whose work Kubrick used".
- De Klimop: "child-sized" cut.
- De Meander: towers and gated-community wording narrowed.
- Het Behouden Huys: "red Amsterdam School brick" changed to "red brick".
- Nassaukade 116-119: "city architect" changed to "assistant city architect".
- Parkkerk: "concert hall for organs" changed to "an arts centre built around the organ".
- Postjeskade bunker: "nuclear shelter" changed to "Cold War shelter".
- Tuin van Jan: "one of the few green spots" changed to "a quarter particularly short of green space"; this also removes the spaced en dash.

No hook was reordered.

## Notable cuts and narrowings
- De Otter: "Zaagmolenbuurt" cut; built attribute "1631 (sheds c. 1932)" changed to "1631".
- Het Behouden Huys: "Spaarndammerbuurt was the city's renewal pilot / one of its first new blocks" cut; dates narrowed to 1975-1977; "walls painted almost white" cut; Deli warehouses / Walenkamp comparison narrowed; built attribute changed to "1975–1977; renovated 2003–2007".
- Keith Haring: "seen in full from the quay" contradicts nl.wiki ("slechts gedeeltelijk te zien vanaf een parkeerplaats"), so narrowed; "twin stair towers" Look-for narrowed.
- Nassaukade 116-119: the Schoolkinderbad mention cut. The Art Deco porch is sourced.
- Overtoom 247: "one of the last" narrowed to "increasingly rare"; "leads the eye towards the park" replaced.
- Postjeskade bunker: the tender closing date (6 November 2026) is not in any source and was cut; the Postjeswetering Look-for item was cut.

## For the user
- Postjeskade bunker: propertynoord.com shows "Verkocht" and "In 2026 is hij verkocht aan een nieuwe eigenaar", but the page also says "DEMO-MODUS: geen backend gekoppeld". The sale status is unclear. I did not add "sold"; the text now just says it came back on sale by tender. Worth a manual check.
- Pesthuis: the demolition date conflicts between sources (BAG 1925, nl.wiki 1937, another source 1930). The text keeps "1930s".
- De Meander: architectuurgids gives 204 apartments for 1995-2000; opdekaart says about 275 homes.
- Terhorst relief (Behouden Huys): kunstwacht says 1989 (with a heading of 1988), kunstbijdekey says 1998. The text keeps 1989.
- Spaced en dashes remain in two EN fields I did not otherwise touch: the Geuzenhof EN summary ("estate – with") and the Tuin van Jan EN body ("experts – the urban ecologist").
- Helmersstraat 32-42: "above the usual standard" is an interpretation of the register wording and was kept.
- Length: the De Hallen NL body runs to 364 words, mirroring a long EN body; all other NL bodies are 173-284 words.

## Verification

All 27 places checked: every claim in the new NL summary and body was compared with the new EN and the original EN/NL; NL and EN carry the same facts; Look for and Let op lists match item for item; all summaries are 280 characters or less. Sourced changes re-fetched and confirmed: De Otter (nl.wiki Paltrokmolen "De hele molen draait over de kruirollen"; molenterreindeotter.nl "de oudste nog bestaande molen van dit type ter wereld"), Henri Pronker (nl.wiki How to meet an angel: Eerste Constantijn Huygensstraat, Mentrum building), Pesthuis (BAG Pesthuislaan "Genoemd naar het oude pesthuis, gebouwd in 1635"), De Hallen (BAG Hannie Dankbaarpassage "Eerste GroenLinks-stadsdeelvoorzitter ... Oud-West"), NO (kunstwacht route 2 places Gedenkteken Gerard Reve on the Waterspiegelplein, next to NO). Copy checker: 0 copied runs before and after the fixes.

Claims removed or fixed (NL unless noted):
- Pesthuis: "daarom" cut (the NL presented the death toll as the city's motive for building the pesthuis; the EN gives no motive). Summary "Wie in de zeventiende eeuw de pest kreeg, ging per schuit naar het pesthuis" narrowed to "Zeventiende-eeuwse pestlijders gingen per schuit naar het pesthuis" (the old wording said every plague victim of the century went there, though the house dates from 1635).
- Former substation Westerpark: "3000 volt voor grote fabrieken" changed to "industriële grootverbruikers" (EN: large industrial users, not factories).
- Het Behouden Huys: "onder meer tegen de hoge huren" changed to "tegen de hoge huren" ("onder meer" implied other grievances that no text mentions).
- Parkkerk: "flinke ophef" changed to "ophef" (the EN was narrowed from "national row" to "a stir"). Summary "Nu draait alles er om het orgel" changed to "Nu is het een kunstcentrum dat om het orgel draait" ("alles" overstated it).
- Pieter Langendijkstraat 39-45: "herhaalt hij gewoon een paar gelijke eenheden" changed to "herhaalt hij simpelweg gelijke eenheden" ("een paar" implied a number of units no text gives).
- Postjeskade bunker: the researcher's quote had become "hijzelf zou er geen dag volhouden"; now "dat je het er volgens hem nog geen dag zou uithouden", matching the EN "I don't think you'd last a day".
- Dashes: spaced en dashes removed from the EN Bolbewoners body ("born in Winschoten in 1937, died in Suffolk in 2013"; the NL spaced hyphen was changed the same way), the EN Geuzenhof summary (comma) and the EN Tuin van Jan body (colon). The only dash left is in a `changes[].old` record of the Tuin van Jan, which is history, not text.

Copy runs fixed: 0 (none found).
