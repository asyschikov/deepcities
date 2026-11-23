# Blind quality review: 32 Deep Amsterdam entries

## How I checked

- Read every entry in full (EN title, summary, body; NL title, summary, body; attributes; address; links) from `bq/01.json` to `bq/32.json`. I opened no other file in the scratchpad or repo.
- Fetched all 112 linked sources with curl (`User-Agent: deep-cities-research/0.1`) and read the relevant text. Where a link was a JavaScript shell I went to the data behind it: the Amsterdam monument API (`api.data.amsterdam.nl/v1/monumenten`) for 08, 16, 20 and 31, and the Buitenkunst Amsterdam / Kunstwacht API for the 11 artwork records (03, 09, 13, 14, 17, 22, 26, 27 plus neighbours). Three sites blocked automated fetches (ommetjemettom.nl, tracesofwar.nl, parool.nl) and gebouwdin.amsterdam.nl only serves a JS shell, so claims resting only on those count as unverified, not wrong.
- Pins: one Nominatim reverse lookup per entry (1.1 s apart), compared with Wikipedia coordinates and Buitenkunst register coordinates where they exist.
- Dutch: compared the NL text sentence by sentence with the Dutch sources fetched (RCE register, municipal register, nl.wikipedia, Buitenkunst, club and news pages).
- Writing: word counts per body, plus a scan for em dashes, spaced en dashes and research-process wording. No em dashes anywhere; spaced en dashes in 13, 14 and 17.
- Scores are 1 to 5 per criterion, total out of 30. No browser was used.

## Scores

| n | Title | Story | Acc. | Pin | Use | Dutch | Writing | Total | Main weakness |
|---|---|---|---|---|---|---|---|---|---|
| 01 | Air-raid shelter under Middenweg 325 | 4 | 4 | 5 | 4 | 4 | 4 | 25 | Solid; "public" shelter and the gate's circle-and-cross are not in the sources, and the open "check: Facts" flag is left in |
| 02 | Gemaal Kadoelen and the Concertgemaal | 4 | 5 | 4 | 4 | 4 | 4 | 25 | Opens on windmills; the real hook (demolition permit, reprieve only to 2038) sits in paragraph three |
| 03 | The Valutabuurt | 5 | 4 | 4 | 4 | 4 | 3 | 24 | Great hook, but 348 words, and Zorro stands on the north side of the Ecuplein (Wikipedia), not the west |
| 04 | The child's gravestone in the Tropentuin | 5 | 4 | 4 | 4 | 4 | 3 | 24 | 332 words; source puts the grave "aan de oostkant", not "near the entrance"; EN says father served "during" the takeover, NL "kort na" (NL is right) |
| 05 | Wijdeveld's stadspoort (north block) | 1 | 5 | 5 | 2 | 1 | 2 | 16 | Pure register description in both languages; NL is the RCE text nearly word for word |
| 06 | Republica, Papaverhof | 2 | 4 | 4 | 3 | 3 | 3 | 19 | Reads as the architect's press release (80 x 80 m, "Spanish steps", Superlofts); no oddity or tension |
| 07 | Drum houses, Twiske-West | 4 | 5 | 5 | 4 | 3 | 4 | 25 | Accurate and visual; NL keeps several source phrasings ("uitzicht wordt een panorama", "drietal even grote ruimten") |
| 08 | Autopon | 2 | 4 | 5 | 3 | 1 | 3 | 18 | NL is the nl.wikipedia Zocherstraat paragraph pasted; NL listing date 15 June 2016 vs register 17 May 2016 |
| 09 | Grote man, kleine man (Balkenhol) | 4 | 4 | 5 | 4 | 4 | 3 | 24 | 361 words; third paragraph drifts to Noorderhof Zuid's "architecture points"; "carving" fits his wood work, this is painted bronze |
| 10 | Oranjesluizen, Zeeburgereiland side | 4 | 5 | 4 | 5 | 4 | 3 | 25 | Very good facts and use, but 368 words; delisting hook is buried in paragraph three |
| 11 | Leeuwenburg (Bruut) | 5 | 4 | 5 | 4 | 4 | 4 | 26 | Current to November 2026 and well told; a couple of numbers (2,500 panels) not confirmed in the fetched pages |
| 12 | Timber towers of Buiksloterham | 4 | 4 | 4 | 4 | 4 | 3 | 23 | Three buildings in 313 words; pin is on Patch22 only |
| 13 | Mozes Cohen's sanitation murals | 3 | 4 | 5 | 3 | 1 | 2 | 18 | NL is the Buitenkunst text verbatim; spaced en dashes; "on the advice of" the heritage institute overreads the source |
| 14 | Collectivism vs Individualism | 4 | 4 | 4 | 3 | 1 | 2 | 18 | NL pasted from nl.wikipedia; NL dates the Westkrant piece "begin 2022" (it is 11 Nov 2022); spaced en dashes; flat opening line |
| 15 | Tuinpark Buitenzorg | 3 | 4 | 4 | 5 | 2 | 3 | 21 | Follows the club's history page in order and wording; Ketjen fox and goose (2025) unsourced |
| 16 | Johannapark | 3 | 5 | 5 | 3 | 1 | 3 | 20 | NL is the municipal register text; EN never says whether the passage under Overtoom 353 is open to walk through |
| 17 | Colour Connection | 3 | 4 | 4 | 3 | 1 | 2 | 17 | NL quotes and paraphrases Buitenkunst; 148 words; misses the lit glass "vlechtpatronen" on the columns that the register describes |
| 18 | Powder-magazine guardhouse and Villa Friekens | 4 | 4 | 5 | 4 | 4 | 4 | 25 | Good; casemate parts and the 1631 inn rest on blocked or no sources |
| 19 | De Kus, Azartplein | 5 | 3 | 4 | 3 | 4 | 4 | 23 | Its own source's update says the work is going to the Kunstwacht for restoration and will be re-placed near the SHB building; entry still says "can be seen at any time" |
| 20 | Het Veem | 2 | 4 | 5 | 3 | 1 | 3 | 18 | NL is the RCE introduction pasted; no. 412 is 1899 in the municipal register, entry says 1897; misses its first name "Koelit" |
| 21 | Wildemanbuurt, waiting for the wrecking ball | 5 | 5 | 4 | 3 | 4 | 4 | 25 | Strong story, every number checks out; little to actually look at |
| 22 | De Bouwvakarbeider (Havermans) | 4 | 5 | 5 | 3 | 4 | 4 | 25 | Accurate; last paragraph and look-for drift to Juliana's 1952 opening 600 m away |
| 23 | Thermometer streets of De Wetbuurt | 5 | 4 | 4 | 3 | 2 | 4 | 22 | Great hook, but EN and NL track nl.wikipedia sentence by sentence ("liep zo de landerijen in"); cross street is Von Guerickelaan in the source |
| 24 | Botel and its letter rooms | 4 | 4 | 5 | 4 | 4 | 4 | 25 | Good; most room details rest on ArchDaily, which did not render, so unverified |
| 25 | Stefan Glerum's stained-glass fronts | 4 | 4 | 4 | 4 | 3 | 3 | 22 | 323 words; reads as an inventory in the same order as the Geheugen van Oost text; NL close to it |
| 26 | Choreografie in staal and the Bornhout shelter | 4 | 5 | 5 | 3 | 4 | 4 | 25 | One-line look-for; the open "Still there?" flag is unresolved |
| 27 | De sleutel ligt onder de deurmat (Sandberg) | 5 | 4 | 5 | 5 | 4 | 4 | 27 | Best of the set; Buitenkunst names Far West Amsterdam as the client, not Stadgenoot |
| 28 | Villa Mattern, Renate Rubinstein's bungalow | 5 | 5 | 5 | 4 | 3 | 4 | 26 | Accurate and human; EN and NL follow villamattern.eu's page in the same order |
| 29 | IJdoornlaanbrug, the 'Bridge of Sighs' | 5 | 4 | 5 | 5 | 4 | 3 | 26 | 322 words; Wikipedia gives construction 1976 to 1983, not from 1975; never mentions its OSM/common name Bannebrug |
| 30 | Nieuw Sloten, the Olympic village that wasn't | 5 | 4 | 4 | 3 | 2 | 2 | 20 | 370 words; NL lifts Rodi phrases ("lag er leeg bij", "herpakte zich"); look-for wanders across the Plesmanlaan |
| 31 | Volksbadhuis Polanenstraat | 2 | 3 | 5 | 2 | 1 | 2 | 15 | NL is the register text; children's bath was added 1918/1919 (and later demolished), not built in 1916; misses that it is now a hammam and the "Gemeentebadhuis 1916" ironwork |
| 32 | Bakemabuurt | 4 | 3 | 4 | 4 | 4 | 3 | 22 | "The rest rebuilt as copies" overstates it (NH Nieuws: 140 renovated, 200+ replaced); EN "two porch flats of 32 homes" vs NL "elk 32" |

**Mean: 22.3 / 30** (total 714). Range 15 to 27. Per criterion: Story 3.8, Accuracy 4.2, Pin 4.5, Use 3.6, Dutch 2.9, Writing 3.2.

## Five most common weaknesses

1. **Dutch pasted or lifted from the source (12 of 32).** Verbatim or near-verbatim: 05 and 20 (RCE register), 16 and 31 (municipal register), 08 and 14 (nl.wikipedia), 13 and 17 (Buitenkunst). Close paraphrase that keeps the source's order and phrasing: 15 (club history page), 23 (nl.wikipedia), 30 (Rodi: "lag er leeg bij", "herpakte zich"), 25 (Geheugen van Oost). In the register cases the EN is a translation of that same text, so neither language is really written.

2. **Register prose instead of a hook, while the hook sits in the source (05, 06, 08, 16, 20, 31).** These open on building type and date and close with a list of facade features. The material was there: 31's register says it is now a hammam, has "Gemeentebadhuis 1916" in wrought iron and separate "ingang mannen" inscriptions; 20 was first called "Koelit" and is the only mime stage in the country; 16 is a street you cannot see from the Overtoom. Some good entries also bury their best fact (02's 2038 demolition deal, 10's delisting).

3. **Too long and wandering (9 entries over 300 words, 8 more between 260 and 300).** Worst: 30 (370), 10 (368), 09 (361), 03 (348), 04 (332). The extra length usually comes from a side topic, not the object: 09's Noorderhof Zuid point system, 22's 1952 royal opening, 30's look-for that crosses the Plesmanlaan into another neighbourhood, 27's Love Sphinx. At the other end, 17 (148) and 16 (171) are thin.

4. **Small factual slips, stale facts and EN/NL mismatches.** Contradicted by sources: 03 (Zorro is on the north side), 04 (grave on the east side, not by the entrance), 20 (no. 412 built 1899), 29 (built from 1976), 31 (children's bath 1918/1919), 32 (most blocks renovated, not rebuilt). Stale: 19 ignores its own source's update that the sculpture is being taken away for restoration and moved. EN/NL disagree: 04 ("during" vs "kort na" the takeover), 31 (built 1916 vs designed 1914, extended 1918), 32 (32 homes vs 32 each), 14 (NL misdates the Westkrant article). Open check flags are left in 01, 03, 04 and 26.

5. **Thin "Use" for visitors.** Look-for lists exist everywhere but often repeat the register's facade terms (05, 20, 31) or have one item (26). Several skip the basics a visitor needs: whether 16's passage is public, what 31 is now and whether you can go in, De Hallen's opening hours for 13, that 19 may not be there next month. Spaced en dashes in 13, 14 and 17 are a smaller recurring style slip.

Pins are the strongest criterion (mean 4.5): every Nominatim lookup landed on the named address, artwork or bridge. The only soft spots are area entries pinned on one house or artwork (06, 12, 23, 30, 32) and 04, which resolves to the KIT building rather than the garden.


## Key (added by the coordinator after scoring)

Sample: 8 random places per group, seed 20261124. West: any live West place. Noord, Oost, Nieuw-West: places created in the 2026-11-23/24 rounds.

| Group | Story | Acc | Pin | Use | Dutch | Writing | Total |
|---|---|---|---|---|---|---|---|
| Oost | 4.6 | 4.1 | 4.4 | 3.9 | 3.5 | 3.6 | 24.1 |
| Nieuw-West | 4.5 | 4.2 | 4.5 | 3.6 | 3.8 | 3.4 | 24.0 |
| Noord | 3.8 | 4.2 | 4.5 | 4.1 | 3.5 | 3.5 | 23.6 |
| West | 2.5 | 4.1 | 4.8 | 2.8 | 1.0 | 2.4 | 17.5 |

| n | group | id | title |
|---|---|---|---|
| 1 | Oost | qknyuvj5d9xzlx4njba2f081 | Air-raid shelter under Middenweg 325 |
| 2 | Noord | hv01g9ryqm79eg9oxon77giy | Gemaal Kadoelen and the Concertgemaal |
| 3 | Nieuw-West | rzsjs88g03p7ijsnxgjbuime | The Valutabuurt: streets named after money that vanished |
| 4 | Oost | i4kieqnkllodxx195sf6tps2 | The child's gravestone in the Tropentuin |
| 5 | West | o42aoif0zrl3czkc4y08a6oq | Wijdeveld's stadspoort (north block) |
| 6 | Noord | sden16s0vztjz80tfafdpz56 | Republica, Papaverhof |
| 7 | Noord | y7mae76u6sy9txr7rz41fcey | Drum houses, Twiske-West |
| 8 | West | v94hph8l0wbdjhbo9jngndjb | Autopon |
| 9 | Nieuw-West | femjlku3oho82os3l1l3ka4l | Grote man, kleine man (Stephan Balkenhol) |
| 10 | Oost | zoxw553zpl0z54eabgg9gdto | Oranjesluizen, the Zeeburgereiland side |
| 11 | Oost | c5h6lbhnx9cthv71wk9qx99n | Leeuwenburg (Bruut), Weesperzijde 190 |
| 12 | Noord | pkma8bvlbd7gfxkzaebx9y1s | Timber towers of Buiksloterham (Patch22, Top-Up, Stories) |
| 13 | West | jxvqgeiqwjh9h8gn7ky431wz | Mozes Cohen's sanitation murals |
| 14 | West | mhdzo6xw83pxpmqjc3x7o51j | Collectivism vs Individualism (Munir de Vries) |
| 15 | Noord | cpzde8dsqrmbevzuw6rdg63j | Tuinpark Buitenzorg |
| 16 | West | osxno9agzwyjlzk09m7olupf | Johannapark |
| 17 | West | kghiwoczs1xl5a590qv5mfax | Colour Connection (Lidewijdepad tunnel) |
| 18 | Noord | e5v2ottdwy5twbmpsb2fyonn | Powder-magazine guardhouse and Villa Friekens, Kadoelen |
| 19 | Oost | vq4wa8gple8shr5uwpv282an | De Kus, Azartplein |
| 20 | West | lea47k92palxrneohl9e7iud | Het Veem |
| 21 | Nieuw-West | sa5xqua54m3jd0gzdhz4yvh2 | Wildemanbuurt, waiting for the wrecking ball |
| 22 | Nieuw-West | zz53wzbgqkhpgq9046lycsop | De Bouwvakarbeider (Jan Havermans) |
| 23 | Oost | dmhd8it9cwjciv9mg7wqavuh | Thermometer streets of De Wetbuurt |
| 24 | Noord | d1d4qd4s9fkru1lj8d2ntozb | Botel and its letter rooms |
| 25 | Oost | ixuqjloszzkvll4kjpkpac27 | Stefan Glerum's stained-glass fronts, Polderweg |
| 26 | Nieuw-West | spvgeznviue09u6atc6yj8zt | Choreografie in staal and the Bornhout shelter |
| 27 | Nieuw-West | lathfy1gzc483mbgw2he0hhz | De sleutel ligt onder de deurmat (Martijn Sandberg) |
| 28 | Oost | kunh7t9wwgjtzrh6g8ix0lg3 | Villa Mattern, Renate Rubinstein's bungalow |
| 29 | Noord | hfinjvcwynhe8p8d2oc5ldjf | IJdoornlaanbrug, the 'Bridge of Sighs' |
| 30 | Nieuw-West | u5wd4on62zq5xe3elbom8d5y | Nieuw Sloten, the Olympic village that wasn't |
| 31 | West | kahcbvmikyavzxdboj421vn2 | Volksbadhuis Polanenstraat |
| 32 | Nieuw-West | z9tf836m3kyl186pjsfywkpz | Bakemabuurt |
