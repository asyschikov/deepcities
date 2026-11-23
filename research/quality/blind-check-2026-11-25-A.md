# Blind quality review, reviewer A (46 entries)

## How I checked

- Read every entry (EN summary and body, NL summary and body, attributes) from 01.json to 46.json and no other file in the scratchpad.
- Fetched all 121 linked sources with curl (User-Agent deep-cities-research/0.1). Amsterdam monument records came from the api.data.amsterdam.nl monumenten API (full `redengevendeOmschrijvingPubliek` text plus the register point). nl/en.wikipedia came through the MediaWiki extracts API, with retries after rate limiting. Rijksmonumenten pages, other HTML and PDFs were stripped to text. Unreachable or script-only sources (tracesofwar 403, gebouwdin.amsterdam.nl x3, buitenkunstamsterdam.nl x2, artstalkmagazine, parool, skatecafe.nl) were counted as unverified, not wrong.
- **Accuracy:** I checked every number and year in EN and NL against the source texts by script, then grepped the flagged claims and the main hook of each entry by hand. I scored 4 when a claim was unsupported by any linked source and 3 when a source contradicted a claim or EN and NL disagreed.
- **Pin:** Nominatim reverse geocoding at 1 request per second for all 46 pins. I computed the distance from each pin to the register point (RD converted to WGS84) wherever a monument record was linked: 29 entries are 0 m from it. I ran Overpass for the bridges (13, 24, 41), the pool (44) and others. A pin on a sensible point of an area or ensemble scores 4.
- **Dutch (measured):** I split the NL body into sentences and counted those that share a run of 8 or more consecutive words (lowercased, punctuation stripped) with any fetched source of that entry. Then I reviewed every hit by hand and dropped hits that were only names or titles (02: "Ru Paré Lezing"; 40: the society name; 43: the window subjects). Mapping: 0 = 5, 1 = 4, 2 or 3 = 3, otherwise by share of NL sentences: under 30% = 3, 30-59% = 2, 60% or more = 1. No entry read clearly as a translation of the English, so no -1 was applied. The column shows copied / total NL sentences.
- **Story, Use and Writing:** scored against the rubric anchors. For Writing I counted EN body words: 250-320 = 4, 320-350 = 3, over 350 = 2. Meta lines like "pinned on..." and padded paragraphs count as weaknesses.

Means per criterion: Story 4.11, Accuracy 4.41, Pin 4.72, Use 4.26, Dutch 2.37, Writing 3.98. **Mean total 23.85 / 30.**

| n | title | Story | Acc | Pin | Use | Dutch | copied sentences | Writing | Total | main weakness |
|---|---|---|---|---|---|---|---|---|---|---|
| 01 | Villa Abspoel (Shell porter's house) | 2 | 4 | 5 | 2 | 2 | 4/8 | 4 | 19 | Register description with no hook; NL half copied from the register; De 8 membership unsourced; no Look for |
| 02 | Ru Paré memorial stone (Ru Paré Community) | 5 | 4 | 5 | 4 | 5 | 0/12 | 4 | 27 | No opening hours for the community centre; 2016 reopening unsourced |
| 03 | Rochdale's first block (Van Beuningenstraat) | 4 | 4 | 5 | 4 | 1 | 6/10 | 5 | 23 | NL is the register and Wikipedia stitched together; Rochdale's 1903 founding unsourced |
| 04 | Vogeldorp | 5 | 5 | 4 | 5 | 2 | 9/21 | 4 | 25 | NL copies the register and Wikipedia in long runs; 286 words |
| 05 | Lelylaan viaduct (Brug 705) | 5 | 5 | 5 | 4 | 2 | 7/15 | 3 | 24 | 322 words; NL copies the register for about half |
| 06 | Nieuw Sloten, the Olympic village that wasn't | 5 | 4 | 4 | 4 | 3 | 2/16 | 2 | 22 | 370 words; Vrije Geer referendum and artworks unsourced |
| 07 | Horse-tram depot, Linnaeusstraat | 4 | 5 | 5 | 4 | 1 | 11/17 | 4 | 23 | NL is largely nl.wikipedia verbatim |
| 08 | Hekkepoort, Flevopark | 5 | 4 | 5 | 5 | 2 | 11/21 | 2 | 23 | 399 words, Froger column digression; NL half copied from the register |
| 09 | Van Eyck playground, Witte Klok | 5 | 4 | 4 | 5 | 2 | 9/18 | 2 | 22 | 373 words; Patrimonium reliefs and paddling pool unsourced; NL copies Wikipedia |
| 10 | Loods 6 and the Kompaszaal | 5 | 4 | 5 | 5 | 2 | 14/26 | 2 | 23 | 542 words with a long internment-camp digression; NL half copied |
| 11 | Gerardus Majellakerk and its Catholic enclave (NedPhO-Koepel) | 3 | 5 | 4 | 5 | 1 | 13/20 | 2 | 20 | Hook (tower murder) buried; 367 words; NL mostly Wikipedia verbatim |
| 12 | Van Bossestraat 8-54 | 4 | 5 | 5 | 4 | 1 | 9/12 | 4 | 23 | NL is the register text reordered; reads like a listing |
| 13 | Overtoomse Sluis | 4 | 4 | 4 | 4 | 1 | 11/15 | 5 | 22 | NL mostly Wikipedia verbatim; register link points to Overtoom 343, a different building |
| 14 | Albert Lust's milk shop | 5 | 5 | 5 | 4 | 1 | 8/12 | 5 | 25 | NL mostly copied from the register and HCAN; no Look for list |
| 15 | Vogelbuurt blocks on the Fazantenweg, Kievitstraat and Meeuwenlaan | 2 | 4 | 4 | 4 | 3 | 6/21 | 3 | 20 | Catalogue of three estates, no hook; 1943 bomb stone unsourced; meta line about the pin |
| 16 | Bellamy Buurtmuseum | 3 | 4 | 4 | 4 | 1 | 8/13 | 5 | 21 | NL is the nl.wikipedia Bellamybuurt text almost entire; museum itself barely described |
| 17 | Wildemanbuurt, waiting for the wrecking ball | 5 | 4 | 4 | 4 | 5 | 0/13 | 4 | 26 | Station Wildeman access not explained; one source unreachable |
| 18 | Adriaan van Oordthof | 4 | 5 | 5 | 4 | 2 | 10/19 | 4 | 24 | NL half copied from the register; 285 words |
| 19 | Kesbeke pickle factory and shop | 4 | 5 | 5 | 5 | 2 | 7/17 | 4 | 25 | NL copies Wikipedia's company history; 260 words |
| 20 | Former kindergarten, Mariëndaal | 4 | 5 | 5 | 5 | 5 | 0/14 | 4 | 28 | Third paragraph is soft praise; Look for items are generic |
| 21 | Eigen Haard's "Indië I" and the Zeeburgerdijk row | 2 | 4 | 4 | 3 | 2 | 9/18 | 4 | 19 | Register-style opening with meta pin note; no current use or access |
| 22 | Former school on the Newtonstraat ("Arbeid overwint") | 4 | 3 | 5 | 4 | 2 | 7/13 | 5 | 23 | Apostolic church placed on the Galileiplantsoen; register says Archimedesweg; NL half copied |
| 23 | Tuinpark Tuinwijck, the allotments that kept moving | 5 | 4 | 5 | 5 | 5 | 0/20 | 2 | 26 | 427 words; the other allotment parks are unsourced |
| 24 | W.H. Vliegenbos | 4 | 5 | 5 | 5 | 2 | 15/31 | 2 | 23 | 520 words covering Ketjen, Hamerkwartier and a murder; NL half copied from Wikipedia |
| 25 | De Savornin Lohmanschool | 3 | 5 | 5 | 4 | 1 | 8/13 | 5 | 23 | NL mostly the register verbatim; weak hook |
| 26 | Kantoorgangers, Schalk Burgerstraat | 5 | 5 | 4 | 4 | 2 | 5/13 | 5 | 25 | NL opening lifted from Wikipedia and De Brug |
| 27 | CWI and the Science Park internet hub | 5 | 4 | 5 | 5 | 3 | 5/30 | 2 | 24 | 553 words; IKO and gasworks section unsourced |
| 28 | Westbeat and the dancers' Super Space (Lelylaan) | 4 | 4 | 5 | 5 | 5 | 0/13 | 5 | 28 | Two of four sources unreachable, much unverified |
| 29 | Ringdijk and the Watergraafsmeer polder | 4 | 4 | 5 | 5 | 2 | 15/36 | 2 | 22 | 610 words; 1832 cholera hospital not in any linked source; NL copies the register |
| 30 | Holysloot village school and schoolmaster's house | 4 | 5 | 5 | 5 | 1 | 9/15 | 5 | 25 | NL is the register description with little rewriting |
| 31 | Vliegbasis De Huygens (former Dominicus Savio technical school) | 3 | 4 | 5 | 4 | 1 | 10/14 | 5 | 22 | NL mostly register verbatim; 19-storey tower unsourced; weak hook |
| 32 | Johannapark | 5 | 5 | 5 | 3 | 2 | 7/12 | 5 | 25 | Does not say whether the passage is public or who lives there; NL copies the register |
| 33 | Spaarndammerspoorbrug (Hildo Krop sculptures) | 3 | 4 | 5 | 4 | 1 | 9/14 | 5 | 22 | Generic hook; NL mostly Wikipedia verbatim; 1990s extension unsourced |
| 34 | Haci Bayram Mosque, the former School met de Bijbel | 5 | 4 | 5 | 3 | 2 | 4/11 | 5 | 24 | Look for is one line; no visiting info for a working mosque |
| 35 | Skatecafé Karin & Yvonne | 5 | 5 | 5 | 4 | 3 | 2/12 | 5 | 27 | No opening hours; NL lifts a 3voor12 sentence |
| 36 | Schip van Slebos | 5 | 3 | 5 | 5 | 1 | 12/17 | 5 | 24 | EN dates the cafe to the late 1970s, source and NL say the 1960s; NL mostly copied |
| 37 | Former double school, De Wittenstraat 27-45 | 4 | 3 | 5 | 4 | 3 | 4/14 | 5 | 24 | Register says Lucebert's mural was moved out in 1999; entry says it is still inside |
| 38 | Schoonschip floating neighbourhood | 4 | 5 | 4 | 5 | 2 | 7/13 | 5 | 25 | NL copies the residents' site for half its sentences |
| 39 | Ontmoeting (Aart Lamberts) | 5 | 3 | 4 | 5 | 5 | 0/11 | 5 | 27 | Wikipedia gives the miniatures as 27 x 23 x 17 cm, entry says 10 cm; main source unreachable |
| 40 | Johanna Margaretha nursery | 4 | 5 | 5 | 4 | 3 | 3/14 | 5 | 26 | Access not stated; NL lifts three register sentences |
| 41 | IJdoornlaanbrug, the 'Bridge of Sighs' | 5 | 5 | 5 | 5 | 5 | 0/17 | 3 | 28 | 322 words |
| 42 | Steve Bikoplein and the Smitstraat | 3 | 5 | 5 | 4 | 2 | 10/20 | 2 | 21 | 354 words, opens with meta ensemble note; NL half copied |
| 43 | Bethlehemkerk, Zwanenplein | 5 | 5 | 5 | 5 | 5 | 0/13 | 5 | 30 | None of note |
| 44 | Brediusbad and the Bredius sign-sculpture | 4 | 5 | 4 | 4 | 2 | 8/16 | 4 | 23 | Look for omits the sculpture group itself; NL half copied from the art route PDF |
| 45 | Wild & Hardebeck curtain factory | 4 | 5 | 5 | 4 | 1 | 10/15 | 5 | 24 | NL mostly register verbatim, NL summary reads as a register stub |
| 46 | Zoutkeetsgracht warehouses | 2 | 5 | 5 | 3 | 2 | 6/11 | 5 | 22 | Catalogue entry with no hook; NL half Wikipedia verbatim; no current use |
