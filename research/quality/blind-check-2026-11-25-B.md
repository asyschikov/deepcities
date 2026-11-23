# Blind quality review, reviewer B (46 entries)

## How I checked

- Read only 01.json to 46.json and the rubric; no other scratchpad or repo files.
- Sources: fetched every linked URL with curl (User-Agent deep-cities-research/0.1). Amsterdam monument texts came from api.data.amsterdam.nl/v1/monumenten/monumenten/?monumentnummer=N for each number in the entry's attributes (for 13, which has no number, I looked up the linked record by its id: it turned out to be Overtoom 343, a different building). nl.wikipedia came through the MediaWiki extracts API (it was rate-limited at first, so I fetched it again slowly; every Wikipedia page loaded in the end). Rijksmonumenten register pages were fetched as HTML. These were unreachable or empty (JavaScript or bot walls), so I treated their claims as unverified, not wrong: tracesofwar, gebouwdin.amsterdam.nl, buitenkunstamsterdam, artstalkmagazine, skatecafe.nl, parool, maps.amsterdam.nl/wandkunst, and the two PDFs (edepot.wur.nl, ruimtelijkeplannen).
- Accuracy: checked each entry's specific dates, numbers, names and other checkable claims against the source text with targeted searches, and read the key passages. 5 = everything I checked was supported. 4 = one or more details missing from every reachable source, or one minor slip. 3 = a claim contradicted by a source (22, 37).
- Pin: compared each pin with the monument API's point coordinate (RD converted to WGS84; most pins fall within 0 m of it), ran Nominatim reverse at zoom 18 (1 request per second), and used Overpass for the Overtoomse Sluis bridge (pin about 20 m from the bridge way).
- Dutch: a script split the NL body (Look for lines included) into sentences. It counted the sentences that share a run of 8 or more consecutive words with any fetched source text, and the share of NL words inside such runs. I read the hits by hand. Score: 0 sentences = 5; 1 sentence or a close paraphrase = 4; 2-3 sentences, or more but under 25% coverage = 3; 25-55% coverage = 2; over 55% = 1. Two zero-copy NL texts read as translations of the EN (28, 39) and got -1. The "copied sentences" column is the raw count of sentences with a copied run.
- Use: counted four things: what you can see from public ground, current use, access (or that it's private), and a Look for list.
- Writing: EN body word count against the anchors (250-320 = 4, over 350 = 2), plus padding and meta sentences ("pinned on ...").

## Scores

| n | title | Story | Acc | Pin | Use | Dutch | copied sentences | Writing | Total | main weakness |
|---|---|---|---|---|---|---|---|---|---|---|
| 01 | Villa Abspoel (Shell porter's house) | 2 | 4 | 5 | 2 | 2 | 4 | 4 | 19 | Register paraphrase with no hook, no Look for, no access note; NL lifts register sentences; "now the Poortgebouw" unsupported |
| 02 | Ru Paré memorial stone (Ru Paré Community) | 5 | 4 | 5 | 4 | 4 | 1 | 4 | 26 | 257 words; NL closely paraphrases the Wikipedia passage; 2016 reopening and memorial source unreachable |
| 03 | Rochdale's first block (Van Beuningenstraat) | 4 | 5 | 5 | 3 | 1 | 6 | 5 | 23 | NL is mostly the register text verbatim; no current use or access line |
| 04 | Vogeldorp | 5 | 4 | 5 | 5 | 2 | 9 | 4 | 25 | NL largely lifted from Wikipedia and register; housing inspector "until the 1970s" unsupported |
| 05 | Lelylaan viaduct (Brug 705) | 4 | 5 | 5 | 4 | 2 | 7 | 4 | 24 | 322 words; NL copies register and Wikipedia sentences, including a quoted block |
| 06 | Nieuw Sloten, the Olympic village that wasn't | 5 | 4 | 4 | 4 | 3 | 2 | 2 | 22 | 370 words; Aalsmeer/Noordoostpolder split, Soeters, 1995 referendum and artworks not in sources |
| 07 | Horse-tram depot, Linnaeusstraat | 4 | 4 | 5 | 4 | 1 | 11 | 4 | 22 | NL is the Wikipedia article almost verbatim; Salm's Amstel stables unsupported |
| 08 | Hekkepoort, Flevopark | 4 | 4 | 5 | 4 | 2 | 11 | 2 | 21 | 399 words with a long Froger digression; NL first half is register text |
| 09 | Van Eyck playground, Witte Klok | 5 | 4 | 4 | 5 | 2 | 9 | 2 | 22 | 373 words, Look for list runs to reliefs and a pool 1.2 km away (unsourced); NL copies Wikipedia |
| 10 | Loods 6 and the Kompaszaal | 4 | 4 | 5 | 5 | 2 | 14 | 2 | 22 | 542 words, two separate war passages; NL copies Wikipedia and 4en5mei; 120 tenants and crane 2868 unsupported |
| 11 | Gerardus Majellakerk and its Catholic enclave (NedPhO-Koepel) | 3 | 5 | 5 | 5 | 1 | 13 | 2 | 21 | 367 words; hook (roof murder) buried mid-body; NL is Wikipedia and register verbatim |
| 12 | Van Bossestraat 8-54 | 4 | 5 | 5 | 3 | 1 | 9 | 5 | 23 | NL is the register almost word for word; no current use or access line |
| 13 | Overtoomse Sluis | 4 | 5 | 4 | 4 | 1 | 11 | 5 | 23 | NL is Wikipedia verbatim; linked monument record is Overtoom 343, not the bridge |
| 14 | Albert Lust's milk shop | 5 | 5 | 5 | 3 | 1 | 8 | 5 | 24 | NL copies Wikipedia; no Look for list |
| 15 | Vogelbuurt blocks on the Fazantenweg, Kievitstraat and Meeuwenlaan | 2 | 4 | 5 | 3 | 3 | 6 | 4 | 21 | Catalogue of three estates, no hook; 1943 bombing stone unsupported |
| 16 | Bellamy Buurtmuseum | 3 | 4 | 4 | 4 | 1 | 8 | 4 | 20 | Neighbourhood history, generic hook; NL is the Wikipedia article; Bellamystraat 80 and 89-93 unsourced |
| 17 | Wildemanbuurt, waiting for the wrecking ball | 5 | 4 | 4 | 4 | 5 | 0 | 4 | 26 | 273 words; Building of the Year mention and 18-month rehousing not found in sources |
| 18 | Adriaan van Oordthof | 3 | 4 | 5 | 4 | 1 | 10 | 4 | 21 | NL is register text; hook ("nothing happened to it") is soft; Het Paleis unsupported |
| 19 | Kesbeke pickle factory and shop | 5 | 4 | 5 | 5 | 2 | 7 | 4 | 25 | 260 words; NL copies Wikipedia history; turmeric onion and tour waiting list unsupported |
| 20 | Former kindergarten, Mariëndaal | 4 | 5 | 5 | 5 | 5 | 0 | 5 | 29 | Hook (siblings demolished) is good but quiet; little to see |
| 21 | Eigen Haard's "Indië I" and the Zeeburgerdijk row | 2 | 4 | 5 | 3 | 2 | 9 | 4 | 20 | Opens with "Ensemble of three municipal monuments... pinned on"; catalogue; NL is register text |
| 22 | Former school on the Newtonstraat ("Arbeid overwint") | 4 | 3 | 5 | 4 | 1 | 7 | 5 | 22 | Says Kruyswijk's Apostolic church is on the Galileiplantsoen, register says Archimedesweg; NL is register text |
| 23 | Tuinpark Tuinwijck, the allotments that kept moving | 5 | 4 | 5 | 5 | 5 | 0 | 2 | 26 | 427 words; De Molen, Schaefer, Arbeid Adelt and route length not in the linked sources |
| 24 | W.H. Vliegenbos | 4 | 5 | 4 | 5 | 2 | 15 | 2 | 22 | 520 words, five stories in one; NL stitched from Wikipedia sentences |
| 25 | De Savornin Lohmanschool | 3 | 4 | 5 | 4 | 1 | 8 | 5 | 22 | Weak hook (architect's signature); NL is register text; schoolstrijd framing unsupported |
| 26 | Kantoorgangers, Schalk Burgerstraat | 5 | 5 | 4 | 5 | 2 | 5 | 5 | 26 | NL opening copies Wikipedia; pin on the odd side of the street |
| 27 | CWI and the Science Park internet hub | 5 | 4 | 5 | 5 | 3 | 5 | 2 | 24 | 553 words; IKO/gasworks paragraph and dome size not in linked sources |
| 28 | Westbeat and the dancers' Super Space (Lelylaan) | 4 | 4 | 5 | 5 | 4 | 0 | 5 | 27 | NL reads as a translation of the EN; courtyard garden unsupported |
| 29 | Ringdijk and the Watergraafsmeer polder | 4 | 4 | 5 | 5 | 2 | 15 | 2 | 22 | 610 words; cholera hospital, Quatfass smithy, Klein Dantzig history unsourced; 149 gardens vs source 151 huts |
| 30 | Holysloot village school and schoolmaster's house | 4 | 5 | 5 | 5 | 2 | 9 | 5 | 26 | NL copies register description sentences |
| 31 | Vliegbasis De Huygens (former Dominicus Savio technical school) | 3 | 4 | 5 | 4 | 1 | 10 | 5 | 22 | Soft hook; NL is register text almost throughout |
| 32 | Johannapark | 4 | 5 | 5 | 4 | 1 | 7 | 5 | 24 | NL is register text |
| 33 | Spaarndammerspoorbrug (Hildo Krop sculptures) | 3 | 4 | 5 | 4 | 1 | 9 | 5 | 22 | Hook generic; NL is Wikipedia; 1990s concrete extension unsupported |
| 34 | Haci Bayram Mosque, the former School met de Bijbel | 5 | 4 | 5 | 3 | 3 | 4 | 5 | 25 | Look for list is one line; c. 1931 date not in sources |
| 35 | Skatecafé Karin & Yvonne | 5 | 4 | 5 | 4 | 3 | 2 | 5 | 26 | NL lifts a quote passage from 3voor12; Goudfazant, surf camps, 10 m ramp, March 2028 unverified |
| 36 | Schip van Slebos | 5 | 5 | 5 | 5 | 1 | 12 | 5 | 26 | NL is Wikipedia and amsterdamopdekaart verbatim |
| 37 | Former double school, De Wittenstraat 27-45 | 4 | 3 | 5 | 4 | 2 | 4 | 5 | 23 | Register says the Lucebert work was moved in 1999; entry says it survives inside a private flat |
| 38 | Schoonschip floating neighbourhood | 4 | 5 | 4 | 5 | 2 | 7 | 5 | 25 | NL lifts sentences from the Schoonschip site |
| 39 | Ontmoeting (Aart Lamberts) | 5 | 4 | 4 | 5 | 4 | 0 | 5 | 27 | NL reads as a translation of the EN; key gloss and 1997/2009 facts from an unreachable source |
| 40 | Johanna Margaretha nursery | 3 | 4 | 5 | 4 | 3 | 4 | 5 | 24 | Soft hook; drying washing and letter remnants unsupported |
| 41 | IJdoornlaanbrug, the 'Bridge of Sighs' | 5 | 4 | 5 | 5 | 5 | 0 | 4 | 28 | 322 words; Het Parool attribution and d'Admiraal view not in sources |
| 42 | Steve Bikoplein and the Smitstraat | 3 | 5 | 5 | 3 | 2 | 10 | 2 | 20 | 354 words; opens with "Ensemble of eight... records"; NL copies Wikipedia and amsterdamopdekaart |
| 43 | Bethlehemkerk, Zwanenplein | 5 | 5 | 5 | 5 | 4 | 1 | 5 | 29 | Minor: one NL sentence copies the register window titles |
| 44 | Brediusbad and the Bredius sign-sculpture | 5 | 4 | 4 | 5 | 2 | 7 | 4 | 24 | 266 words; 1967 photo and 2004 fire not verifiable in linked sources; NL copies amsterdam.nl and artatsite |
| 45 | Wild & Hardebeck curtain factory | 4 | 4 | 5 | 4 | 1 | 10 | 5 | 23 | Story placed after the ornaments; NL is register text; Dibbets "works here" unsupported |
| 46 | Zoutkeetsgracht warehouses | 2 | 4 | 5 | 3 | 2 | 6 | 5 | 21 | Catalogue of three warehouses; "only tram terminus on a canal" unsupported; NL copies Wikipedia |

Mean total: 23.6 out of 30 (1085 / 46).
