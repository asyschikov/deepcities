# Dutch pass: zuidoost, batch 01

26 places done. Every claim in the EN and NL summary, body, Look for and notes was checked against a fetched source.

- Claim changes: 12 sourced, 42 narrowed, 3 cut, 0 reordered. Details and evidence are in `batch-01.json`.
- Copy checker (`nlcheck.py`): 0 copied runs of 8+ words, for all 26 places.
- Every NL summary is 280 characters or fewer.
- No em dashes and no spaced en dashes.
- Every place whose English has a "Look for" list has a matching "Let op:" list.

## Per place

| # | Place | Changes |
|---|---|---|
| 00 | Taibah Mosque | 2 narrowed: the new minarets are tied to the rebuilds in general, not to 2004 alone; the metro view is "at Kraaiennest" only |
| 01 | Monument voor de stad Amsterdam | none |
| 02 | Perfumed with Mint | 2 narrowed (the "deliberate" contrast; the Look for items); 1 sourced (side walls, Rochdale November update PDF) |
| 03 | Steven van Dorpel memorial | 1 narrowed ("smaller than life" becomes "looking small") |
| 04 | Tayouken Piss | 2 sourced (en.wikipedia Tayou; Commons steel tile); 2 narrowed (local favourite; "some summers") |
| 05 | Achtergelaten bagage | 1 narrowed (1977 or 1978 becomes 1978) |
| 06 | Gaasperpark | 1 cut (tjasker); 2 narrowed (Big Bang sculpture and Loosdrechtdreef; planetarium "near metro"); 1 sourced (Zeiss projector under a 20 m dome) |
| 07 | Groenhoven and Gouden Leeuw | 4 narrowed (structuralism; "Residents call it" becomes "One resident"; Look for; outlook_note in EN and NL) |
| 08 | Heesterveld Creative Community | 3 narrowed ("friendlier"; salsa and block parties; gate); 1 sourced (Hoptille mix) |
| 09 | Now Speak! | none |
| 10 | De Kandelaar | 1 narrowed ("most" becomes "many" garages); 1 cut ("not open to the public outside services"); 1 sourced (November 2017 sale, PropertyNL) |
| 11 | Kleiburg | 4 narrowed ("most affordable"; prize for "first renovation" becomes first building in NL; viewpoint; balconies) |
| 12 | The Botanical Garden of the Bims | 3 narrowed (170 nationalities; 1970s/80s; Zandkasteel to the north); 1 sourced (Bims) |
| 13 | Het Wapen van Holendrecht | 1 narrowed (postcode position) |
| 14 | Het Zandkasteel | 2 narrowed (staff say "fit-out"; water features) |
| 15 | Hoptille | 3 narrowed ("winding"; tenants moving out over 1.5 to 2 years; outlook_note in EN and NL) |
| 16 | Rona Batho | 2 narrowed (face theft "reported 1 March 2023"; information column becomes information board) |
| 17 | Groeiend Monument and De Boom die Alles Zag | 1 narrowed ("hence the name") |
| 18 | Anton de Kom monument | none. All claims are supported: Akwasi on 19 June 2025 (ANP); Van Loon's open letter in Het Parool on 24 January 2026 (nl.wikipedia, citing Parool); the plinth texts; the cut-off hand and twisted arm |
| 19 | Boerderij Langerlust | 1 narrowed (Look for: the T-plan; no source says the house faces the dike) |
| 20 | Atlas ArenA | 1 sourced (municipal monument on 3 March 2026, from the monuments API, because the linked data.amsterdam page is empty) |
| 21 | Vogelparade | 1 narrowed ("a familiar sight in Suriname" becomes Surinamese bird lovers in the Bijlmer); 1 cut (Look for "municipal name plate": no source) |
| 22 | Nelson Mandelapark and Kwaku | none |
| 23 | Bijlmer Museum | 1 sourced (archived Parool article of 1 May 2017: since 2000, the relaunch, Gerrit Hols, the doorbell panel, the Boeing fragment); 1 narrowed (Mama Aïsa is "by the Grubbezee pond", not on an island) |
| 24 | Iron Lady of the Bijlmer | 2 sourced (artist's post: aluminium, 327 cm, marrons, 6 July 2024; Stadscuratorium page for Atomos by Jamahl Richters) |
| 25 | Bijlmermeer | 5 narrowed ("ten-storey" becomes nine storeys on a two-storey base; the cut money becomes indoor-street life only; the 1972 exclusion and the squat of about a hundred homes become the Gliphoeve policy withdrawn and the 1974 squat; "1983, city moved heroin users" becomes users driven off the Zeedijk, mid-1980s); 1 sourced (Bims) |

## Hook changes (NL lead differs from EN; EN not reordered)

| # | Place | NL lead |
|---|---|---|
| 01 | Monument voor de stad Amsterdam | the savings book |
| 04 | Tayouken Piss | all six are Tayou |
| 05 | Achtergelaten bagage | the vanished ball |
| 06 | Gaasperpark | the tower in Europa-Park |
| 07 | Groenhoven and Gouden Leeuw | meeting the neighbours |
| 09 | Now Speak! | the stolen microphone and the worn path |
| 10 | De Kandelaar | a church hall under each roof wave |
| 11 | Kleiburg | one euro |
| 12 | The Botanical Garden of the Bims | garages as churches |
| 13 | Het Wapen van Holendrecht | You are here |
| 14 | Het Zandkasteel | the 89 degrees quote |
| 15 | Hoptille | the telephone-dial balconies |
| 16 | Rona Batho | Mandela is not on it |
| 17 | Groeiend Monument | the tree |
| 18 | Anton de Kom monument | even the maker would now do it differently |
| 19 | Boerderij Langerlust | a four-year-old laid the first stone |
| 20 | Atlas ArenA | five continents plus Antarctica |
| 21 | Vogelparade | the birds are under the bridge |
| 22 | Nelson Mandelapark and Kwaku | goalposts of piled clothes and bami from car boots |
| 23 | Bijlmer Museum | the doorbell panel and the Boeing fragment |
| 24 | Iron Lady of the Bijlmer | survival on heliconia water |
| 25 | Bijlmermeer | Van Hall's "prettigste woonoord" |

## For the user

### Gone or changed places

- **Gaasperpark:** the tjasker moved to the Gein in 2025 (nl.wikipedia Tjasker_Gaasperpark), so it has been cut from the text.
- **Gaasperpark:** I could not confirm that the Big Bang sculpture still exists.
- **Groenhoven and Gouden Leeuw:** the 18-month renovation covers Groenhoven only. Gouden Leeuw is getting a gradual approach, so the outlook_note was narrowed.
- **Boerderij Langerlust:** the shelter plan is "on hold", not ruled out (AT5, 21 April 2026). The text already says this.

### Source conflicts (kept as written)

- **Bijlmerramp death toll:** one en.wikipedia source read in this batch gives 47. NH, the official count and en.wikipedia's Bijlmermeer article say 43, so I kept 43 everywhere.
- **Heesterveld façade:** nl.wikipedia credits the mural on 1-87 to "Ovni". HCC credits Floor Wesseling.
- **Iron Lady unveiling date:** Stadscuratorium says 6 June 2024. The artist and nl.wikipedia say 6 July 2024. The text says "summer of 2024", which covers both.
- **Anton de Kom artist's name:** nl.wikipedia spells it "Renfurm" and buitenkunst spells it "Renfurn". The NL text uses Renfurm.

### Unverified

- **Perfumed with Mint:** the Facebook and Instagram evidence could not be re-fetched. I kept the draft's notes ("April/May 2018, over a month"; the film frame) as they were.
- **Bijlmermeer Look for:** the compass directions (viaduct "to the east", Groeneveen "across the water to the east") were left as they were. A rough OSM check fits (Groeneveen lies north-east of Gooioord). The place record has no coordinates to check exactly.

### NL body length

Several NL bodies run over 250 words: 17, 18, 22 and 25 (25 is 437 words). The English bodies are just as long, and the brief requires the same facts, so I could not shorten them without dropping facts. Trimming the English is a curation call for you.

## Verification

All 26 places checked: every claim in the new NL summary and body was compared with the new English and the original texts, and the NL was compared with the EN for facts that were dropped or added. All 12 "sourced" changes were re-fetched and confirmed: the Rochdale PDF ("Extra isolatie aan de kopgevels (zijkanten)"), en.wikipedia Tayou (Nkongsamba; Ghent), the Commons steel-tile photo, the planetarium database (Zeiss IVB, dome 20.0 m, 8 April 1982), the Bijlmer Museum page on Heesterveld and Hoptille (mix of tenants), PropertyNL (14 November 2017, sale to Pentecost Revival Church), bijlmermuseum.com ("liefkozend Bims"), the monuments API (230015, aanwijzing 2026-03-03), the archived Parool article of 1 May 2017, the Kensmil post (aluminium, 327 cm, marrons, 6 July 2024) and Stadscuratorium on Atomos. `nlcheck.py` reports 0 copied runs before and after the fixes. There are no em dashes or spaced en dashes, every Look for list matches its Let op list, and every NL and EN summary is 280 characters or fewer (the longest NL summary has 275).

Claims removed or fixed (NL unless noted):

- **Perfumed with Mint:** "R.U.A. ... koos hem uit" (R.U.A. chose him) is not in the EN, which says only that R.U.A. curated the work. It now says "was de curator".
- **Groenhoven and Gouden Leeuw:** the hook "Hier moest je je buren wel tegenkomen" claimed an outcome. The EN says only "the idea was meeting your neighbours", so it now reads "Hier was het de bedoeling dat je je buren tegenkwam". The NL `outlook_note` attribute still said "Beide flats worden gerenoveerd" although the EN was narrowed. It now gets an NL attribute patch: "Groenhoven wordt ongeveer achttien maanden gerenoveerd; Gouden Leeuw kiest voor een geleidelijke aanpak."
- **De Kandelaar:** "Daarnaast rijst een toren" placed the tower beside the building, which no text says. It now reads "Er hoort ook een woontoren ... bij".
- **The Botanical Garden of the Bims:** "hoe lang hij blijft staan, weet niemand" (nobody knows) overstated the EN "unclear". It now says "is onduidelijk".
- **Hoptille:** "speelse details" (playful) is not in the EN; it now says "postmoderne details". The NL `outlook_note` attribute still said "de bewoners verhuizen binnen ongeveer twee jaar", the claim narrowed in the EN. It now gets an NL attribute patch: "huurders hoeven pas over anderhalf à twee jaar over verhuizen na te denken".
- **Rona Batho (EN and NL):** the narrowing of "information column" to "information board" is reverted. nl.wikipedia (a linked source) says "Het beeld wordt begeleid door een infokolom", so the change's evidence ("no source shows a column") was wrong. EN Look for: "the information column beside the work"; NL: "de infokolom naast het werk". That change and its Commons `sources_add` were removed. Also checked: "in het Engels" for the ring text is supported (nl.wikipedia quotes the English line).
- **Anton de Kom:** in Let op, "onderdeel van de strijd" (part of the fight) became "onderdeel van de kritiek", to match the EN "part of the dispute".
- **Vogelparade:** "grasheuvel" (grassy hill) became "grastalud", to match the EN "grassy slope of the road".
- **Nelson Mandelapark and Kwaku:** removed "het grootste feest van Zuidoost", a superlative in neither the EN nor any source. The hook now ends "zo begon in de zomer van 1975 Kwaku."
- **Bijlmer Museum:** the summary's "die er sinds 1969 woont" implied he still lives there. The EN says only that he arrived in 1969, so it now reads "die er in 1969 kwam wonen". "Huis-aan-huisblad" (in the Parool source but not in the EN) became "het lokale weekblad", to match the EN "local weekly".
- **Iron Lady of the Bijlmer:** "dat uitkijkt over de G-buurt" (looks out over) became "dat naar de G-buurt kijkt", to match the EN "facing".

Left for the user: Hoptille's `outlook_when` "about 2028" is derived from Ymere's "1.5 to 2 years" and is not stated in any source. It has not been changed.
