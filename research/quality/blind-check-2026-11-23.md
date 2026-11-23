# Blind review: 30 Deep Amsterdam entries

How I checked:
- **Register entries.** For all 18 entries with a data.amsterdam.nl link I pulled the record from the Amsterdam monuments API and converted its point from RD to WGS84.
- **Other sources.** I fetched the RCE register (422518, 492066, 6792, 508405, 508434), the nl.wikipedia API (16 articles), stadscuratorium.nl, arcam.nl, rohmer.nl, schoonschipamsterdam.org, cwi.nl, ateliervolten.nl and artatsite.com.
- **Pins.** I ran 13 Nominatim reverse lookups (1 per second), 3 Nominatim searches and 1 Overpass query.

Each score is out of 5, and the total is out of 30.

| n | title | Story | Acc | Pin | Use | Dutch | Writing | Total | Verdict (main weakness) |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Former kindergarten, Mariëndaal | 2 | 4 | 5 | 2 | 3 | 3 | **19** | A working day-care described in register prose; no "Look for", no photo, and the demolition hook comes last |
| 2 | Da Costaplein | 3 | 5 | 5 | 4 | 4 | 4 | **25** | Misses the register's own hook: the plot was meant for the vegetable market, which is why it is round and empty |
| 3 | Fire engine house, Kometensingel | 4 | 5 | 5 | 4 | 4 | 4 | **26** | Good: horse pit and "let out to the cleansing department by 1925" are nicely wry; only 1 photo |
| 4 | Kitchen houses south of the Purmerweg | 2 | 3 | 4 | 4 | 4 | 3 | **20** | "Southern half" of an ensemble with a list of house numbers; claims about rents and residents' jobs are not in the linked sources; EN and NL give different facts |
| 5 | Stenen Silo | 5 | 5 | 5 | 4 | 4 | 4 | **27** | Strong; the NL is close to a Wikipedia copy, and it doesn't say you can walk the Silodam |
| 6 | Waterbuurt West | 4 | 5 | 5 | 5 | 4 | 4 | **27** | Solid; misses the best detail in arcam: the houses are tied to the lake bed so that legally they are not houseboats |
| 7 | Drukkerij Senefelder | 3 | 5 | 5 | 4 | 4 | 3 | **24** | Fine but tame; the summary uses a spaced en dash in place of an em dash |
| 8 | Vredenhof cemetery and Westervilla | 4 | 5 | 4 | 3 | 4 | 4 | **24** | The "Look for" list covers only the lodge; it doesn't say where the famous graves are or when the cemetery or café is open |
| 9 | Oud Leyerhoven | 3 | 5 | 5 | 4 | 3 | 4 | **24** | NL opens with the RCE register's run-on telegram sentence verbatim; the EN "Note:" line is clumsy |
| 10 | Westermoskee | 4 | 5 | 5 | 3 | 4 | 4 | **25** | Leaves out the juiciest parts of its source (secret transfer to Cologne, objector paid off with 100,000 euro cash); no visitor info |
| 11 | Players and Supporters | 2 | 4 | 2 | 2 | 3 | 3 | **16** | Pin is on the Tolhuis restaurant, not the statues; no "Look for"; art-speak; NL is near-verbatim from buitenbeeldinbeeld |
| 12 | Former bathhouse, Meteorenweg | 3 | 4 | 5 | 3 | 3 | 3 | **21** | Describes interior tiles you can't see in what is now a private home and business; NL is register copy |
| 13 | Het Licht van Jan | 4 | 4 | 5 | 4 | 2 | 3 | **22** | NL body is almost a word-for-word copy of the Stadscuratorium page; the borough-line paragraph is internal noise; 0 photos |
| 14 | Former post office, Admiraal De Ruijterweg | 3 | 4 | 5 | 4 | 3 | 3 | **22** | "Wavy glazing bars" mistranslates *wiebervormig*; the "Look for" list sits in the middle of the body; 0 photos |
| 15 | Monument against apartheid and racism, Krugerplein | 5 | 3 | 4 | 4 | 4 | 3 | **23** | Great hook, but the 1987 unveiling contradicts its own linked source (1988); overloaded with the mural, a portrait and the ANC office |
| 16 | Vettewinkel paint factory | 3 | 3 | 5 | 4 | 4 | 4 | **23** | "Paint made here until 2008" clashes with the register (listed 2012), which says the building was still in use by Sigma Coatings |
| 17 | De Schreeuw and the murder of Theo van Gogh | 5 | 5 | 5 | 4 | 3 | 3 | **25** | Strong subject, but 359 words with padding (Spreeksteen hedging, IJburg park); NL is a copy of two Wikipedia articles |
| 18 | CWI and the Science Park internet hub | 4 | 5 | 5 | 2 | 3 | 3 | **22** | By its own admission there is nothing to see; reads like an institutional CV; the NL uses museum boilerplate |
| 19 | De Buurtoptimist | 5 | 5 | 4 | 3 | 3 | 4 | **24** | Moving story; thin "Look for" (which bench?), NL near-verbatim from Stadscuratorium, 0 photos |
| 20 | Austrian wooden emergency school | 3 | 5 | 5 | 2 | 3 | 3 | **21** | Doesn't say what the building is now or whether you can see it; generic "Look for"; 0 photos |
| 21 | Former Apostolic church (now a mosque) | 4 | 4 | 5 | 4 | 4 | 3 | **24** | Good Frank Lloyd Wright hook; architect-attribution detail is inside baseball; spaced en dash in summary |
| 22 | Wooden houses of Zunderdorp | 3 | 5 | 5 | 4 | 4 | 3 | **24** | The village is the story, the three houses are not; "Look for" lines are register telegrams; doesn't say they are private homes |
| 23 | Bethelkerk | 4 | 5 | 5 | 4 | 4 | 4 | **26** | Good: "Jacob's ladder", shipbuilders, Sunday service as a way in |
| 24 | Visserschool (Columbusplein) | 2 | 4 | 5 | 3 | 3 | 3 | **20** | No hook in the EN (the De Visser and school-funding-fight story is only in the NL); interior can't be seen; 0 photos; spaced en dash |
| 25 | Notary's houses (Overtoom 247–253) | 3 | 4 | 5 | 3 | 4 | 3 | **22** | Misses the register's best story (wartime secret meetings at no. 247 that led to the newspaper Trouw); EN drops the NL's garden-room concerts |
| 26 | Berlage's gateway blocks | 2 | 4 | 5 | 4 | 3 | 3 | **21** | Pure architecture description with no hook; EN understates the surviving original doors |
| 27 | Asterdorp gatehouse (Atelier Volten) | 5 | 5 | 5 | 5 | 4 | 4 | **28** | Best in the set: real story, verified, opening hours, concrete things to look for |
| 28 | Schoonschip | 4 | 5 | 4 | 4 | 3 | 4 | **24** | Good; the NL has a filler resident quote; 0 photos |
| 29 | Bethlehemkerk, Zwanenplein | 3 | 4 | 5 | 3 | 4 | 4 | **23** | Stops at "lost its church function in 2015" and leaves out that it has been Studio 150 (recording studio, live concerts) since 2017 |
| 30 | Hekkepoort, Flevopark | 4 | 5 | 5 | 5 | 4 | 4 | **27** | Strong; could open with the 40 years the gate spent in storage |

Mean total: 23.4 out of 30. Median: 24.

---

## The 5 weakest entries, with concrete fixes

### 11. Players and Supporters (16)
- **Pin.** The pin sits on the Tolhuis restaurant building itself (Nominatim reverse: amenity=restaurant "Tolhuis", Buiksloterweg 7). OSM has two unnamed `tourism=artwork` nodes about 60 to 75 m east, at 52.38350, 4.90403 and 52.38362, 4.90497. One of them is probably the group. Confirm from a photo with a recognisable background and move the pin, then clear the `check` flag.
- **Story.** Lead with the Ajax angle instead of the artist's statement: "Ajax's first pitch was a few hundred metres up this road; now four barefoot bronze men play on the Tolhuis lawn." Cut "icon of mass culture" and "weightlessness stands for the dreams of the supporters".
- **Look for.** Add one. For example: the single foot each figure balances on, the sweaters and bare feet, and the ferry in the background.
- **Dutch.** Rewrite the NL. It is lifted almost word for word from buitenbeeldinbeeld/artatsite ("Alleen de denkbeeldige beweging houdt de figuren overeind ...").

### 1. Former kindergarten, Mariëndaal (19)
- **Story.** Lead with the hook: "One of five identical 1968 kindergartens; three are set for demolition, so this may soon be the only one." Then correct it: the register says Mariëndaal 13 will survive "possibly together with the altered Spelderholt 167", not alone.
- **Usefulness.** Add a "Look for" list (straight versus L-shaped plan, the hall wing, the schoolyard setting) and a line saying it is a working day-care, so you look from the street.
- **Accuracy.** Source or cut "better known for traditional churches". It is not in the register text.
- **Dutch.** The NL opens with the register's jargon ("van hoge architectuurhistorische waarde vanwege de periodekarakteristieke vormgeving"). Rewrite it as prose. Add a photo.

### 4. Kitchen houses south of the Purmerweg (20)
- **Merge.** As the "southern half" of an ensemble it has no reason to exist on its own. Merge it with its northern counterpart, or lead with what makes kitchen houses odd: the kitchen at the street, the living room at the garden, and a roof down to head height.
- **Accuracy.** Source or cut "rents were somewhat higher", "better insulated" and "civil servants, teachers and nurses". None of the linked sources (RCE 508405, nl.wikipedia Tuindorp Nieuwendam) say this.
- **EN/NL match.** The NL instead says the houses had a bathroom, which was very modern then, and names Ymere. Make both languages carry the same facts; the bathroom is the better detail.
- **Look for.** Cut the list of six address ranges to three items a walker can spot.

### 24. Visserschool, Columbusplein (20)
- **Story.** The EN has no hook. The NL has one: the school is named after J.Th. de Visser, the education minister when the 1917 Schoolstrijd ended (the fight over state funding for religious schools), and a bronze plaque of him dated 2 May 1930 hangs in the entrance hall (register). Put that in the EN.
- **Usefulness.** Say it is a working primary school, so the tiled interior can't be visited. Point the eye at what is visible: the parabolic porches, the ladder-pattern doors and the five chimneys.
- **Accuracy.** Source or cut "ecumenical Visserschool, which also adopted the neighbourhood's 4 May memorial". It is not in the linked register record and it is missing from the NL.
- **Writing.** Replace the spaced en dash in the summary with a colon. Add a photo.

### 20. Austrian wooden emergency school, Kraaipanstraat (21)
- **Usefulness.** Say what the building is now and whether it can be seen from the street. The entry is silent on both.
- **Story.** Lead with the oddity: "A school that came flat-packed from Austria in 1949, possibly the last of forty."
- **Look for.** Replace the generic list ("the timber construction") with specifics: cladding, window rhythm, roof shape, and whatever tells it apart from the Finnish school and the H-school.
- **Dutch.** The NL is the register text verbatim, down to "notabene". Rewrite it. Add a photo.

Close behind: 12 (bathhouse), 26 (Berlage blocks) and 18 (CWI, which has nothing to see).

---

## Factual errors and conflicts found

1. **No. 15: unveiling date conflicts with the linked source.** The entry says Ed van Thijn unveiled the monument on 20 June 1987. Its own linked source, https://stadscuratorium.nl/collectie/monument-tegen-apartheid-en-racisme/, says "onthuld in 1988" (while giving 1987 as the work's date). Resolve it with a primary source (Stadsarchief, newspaper archive) and state one date.
2. **No. 14: mistranslation.** "Grouped vertical windows with wavy glazing bars" renders the register's "wiebervormige roeden". A *wieber* (wiebertje) is the lozenge or diamond motif typical of the Amsterdam School, not a wave (from general knowledge of the term; the register doesn't define it). Use "diamond-shaped glazing bars". Source: register 226001 via api.data.amsterdam.nl.
3. **No. 16: end date of production is doubtful.** The entry says "Paint was made here from 1934 until 2008", then housing. The register text for 200650 (designated 16 Oct 2012) says: "Het gebouw heeft nog altijd dezelfde functie en is nu eigendom van Sigma Coatings". Either the register text predates closure, or 2008 is wrong. Verify before keeping the date. (I couldn't load the IAA page, which renders with JavaScript.)
4. **No. 26: EN understates the surviving doors.** The EN says "several doors are original". The register (200691) says "Enkele vensters en het merendeel van de woningingangen behielden hun originele invulling", so most entrances are original. The NL gets it right.
5. **No. 1: "may become the only one left" overstates.** The register says Mariëndaal 13 will remain "mogelijk samen met het verbouwde Spelderholt 167". Also unsourced: "better known for traditional churches".
6. **No. 12: present tense is misleading.** "The building was split into two business premises" is true of 1995 (house-numbering decision of 10 May 1995). But the register says no. 160 (the former men's and women's bath) "heeft momenteel een woonbestemming" and no. 158 is partly a home. The interior details listed are inside private property.
7. **No. 29: present use is missing.** Since 2017 the building has been Studio 150, a recording studio with live concerts (nl.wikipedia "Bethlehemkerk (Amsterdam)"). The entry implies it is just a former church.
8. **No. 4: unsourced claims.** Rents, insulation and residents' occupations are in none of the four links.
9. **Smaller attribute mismatches.**
   - **No. 21:** "built 1920–1921" is right per the register text (permit 28 April 1920, in use 31 May 1921), but the register's data field says 1923–1925. Leave the attribute as is and note the discrepancy.
   - **No. 25:** the attribute says "before 1832", while register 224028's data field says 1870. The text (1832 cadastral map, records back to 1750) supports the entry.
   - **No. 5:** listed 1992 matches the RCE ("Inschrijving register 13 mei 1992"); nl.wikipedia says 1996. No change needed.

**Verified correctly, at least 2 facts each:**
- 2, 3, 7, 8, 9, 12, 14, 16, 20, 21, 23, 24, 25, 26, 27, 30 (register)
- 5 (RCE and Wikipedia: 105 m, 1902 grain suckers)
- 6 (Urk shipyard, towed across the IJsselmeer, Jordaan density about 100 homes per hectare)
- 10 (43 m minaret, construction started April 2013, opened 1 April 2016)
- 13 (Oostrik, 2021)
- 17 (19 March 2007, 4.5 m)
- 18 (.nl on 25 April 1986, 17 November 1988, Python at Christmas 1989, the 1982 UNIX network)
- 19 (10 October 2022, 2023)
- 22 (RCE 6792 text, 1811 to 1921)
- 27 (132 houses, 2.2 m wall, 307 and 227, opening hours)
- 28 (46 households, 30 arks, 15 semi-detached, European Solar Award)
- 29 (13 September 1924, Winkelman windows)

## Pins

- **Register entries:** all 18 match the register's point coordinate exactly (0 m; 8 m for the second record of no. 25). Those points sit on the building, so they are good pins.
- **Wikipedia coordinates:** 5, 10, 17, 18 and 29 are within 15 to 65 m of Wikipedia's coordinates, and on the object.
- **Nominatim:** 6 lands on Steiger B, 13 on the Kattenburgerstraat rail bridge, 15 on a `tourism=artwork` node, 22 on Kerklaan Zunderdorp 16, 28 on an ark at the Johan van Hasseltkade.
- **No. 19** is about 30 m off Weesperzijde 12 on the water side and reverse-geocodes to a houseboat, so it may be slightly over the water. Acceptable.
- **No. 11** is the only clearly wrong pin (see above).
- No street-centroid pins found.

---

## General patterns

1. **Dutch is often copied, not written.**
   - Copied from the register: 1, 3, 9, 12, 14, 20, 24, 26.
   - Copied from Wikipedia: 5, 10, 17, 18, 22.
   - Copied from Stadscuratorium: 13, 19.
   - Copied from buitenbeeldinbeeld: 11.

   It is native Dutch from Dutch sources, but much of it is verbatim. That brings copyright exposure and stiff register jargon ("van hoge architectuurhistorische waarde", "een van de laatste reminiscenties", "notabene"). Often the EN reads better than the NL. The rule should be: write from Dutch sources, don't paste them.
2. **EN and NL drift apart.** 4, 24, 25 and 26 each carry facts in one language that the other lacks or contradicts. 24 and 25 keep the better hook in the NL only.
3. **Hooks left in the sources.** Several entries skip the most interesting fact in their own linked source:
   - 2: the vegetable-market plot.
   - 6: tied to the lake bed to avoid houseboat status.
   - 10: secret share transfer and cash payoff.
   - 24: De Visser and the Schoolstrijd.
   - 25: Trouw founded in secret at no. 247.
   - 29: Studio 150.

   Researchers seem to paraphrase the register's description section and stop before the "cultuurhistorische context" section, where the stories are.
4. **Heritage listing used as the reason to include.** 1, 20, 24 and 26 are sound municipal monuments with no story for a curious visitor. They read like register summaries, and 4 of the 5 weakest entries are this type.
5. **Ensemble creep and padding.**
   - 15 bolts a mural, a Mandela portrait and an ANC office onto the monument.
   - 17 adds the Spreeksteen (with a hedge: "recent reports ... are hard to find") and an IJburg park.
   - 18 lists every CWI first and adds a museum.
   - 4 and 22 are address lists.

   The over-300-word entries (15, 17, 18) would all improve if cut to about 220 words.
6. **Interiors you can't see.** 1, 12, 20 and 24 spend sentences on tiles, wainscots and ventilation inside private or working buildings, without saying so. Either say "interior not open" or cut it.
7. **Visitor info is uneven.** 6, 27 and 30 are excellent. 8, 10, 20, 21 and 29 give no visiting cue where there plainly is one: cemetery hours, mosque visits, concerts.
8. **Missing "Look for" lists.** 1 and 11 have none. In 14 it is embedded mid-body with text after it. In 19 and 20 the list is thin or generic.
9. **Dash style.** No em dashes anywhere, but 7, 21 and 24 use a spaced en dash (" – ") as an em-dash substitute in the summary. Replace each with a colon or comma.
10. **Photos.** 7 of 30 have none: 1, 13, 14, 19, 20, 24 and 28. Three of those are also among the weakest.
11. **Stale-status risk.** 15 (mural, flagged by the entry itself), 16 (current use) and 29 (current use) need a present-day check.

Strongest entries to use as models: 27 Asterdorp, then 5, 6 and 30. Each has a real story up front, checked facts, a concrete "Look for" list and practical access notes.

## Key (added after scoring)

- 1: Noord (uguwa3i4104nymu9z9xhpdfx)
- 2: West (wjjrunt46lq04bdogj6jqwkj)
- 3: Noord (rrklus6ibk6an7rw1bbnnnk8)
- 4: Noord (xg05rnqs6f0ixcv250gbhkxr)
- 5: West (s4bpetws8fk1izxupvq7cz9z)
- 6: Oost (pe7esuhcoyw6bcpqega5q9p7)
- 7: West (wl7akm9uc4cdz810vdgbu2cf)
- 8: West (d7irt9aqltuehkhh849j2tb1)
- 9: West (shxf2ctj3e0laq4wtyaul1bf)
- 10: West (n38rv2y627vrt24y1d101pae)
- 11: Noord (hegdtp025c31e0ugvfkxom18)
- 12: Noord (fwlye3u26koo8n4cqod0w8oa)
- 13: Oost (wupf12457nd967cn2tjydwga)
- 14: West (p9vzl9mk0elpzmyod2tu4j43)
- 15: Oost (d1sha98ol2go2h3o63yt4sxn)
- 16: Oost (vrah1v7v74s7y9ec2104qh4b)
- 17: Oost (hkyccboyhopeuefqmuw04isf)
- 18: Oost (z2pkmjflnz68ahb9mpzjde6a)
- 19: Oost (f825rmr5gjh2z6dgry585vwt)
- 20: Oost (ukzpmvvn1liwz49a01sscxvp)
- 21: West (wb7nc43ioj44mvkl908j2ach)
- 22: Noord (bfh3dpq0d911m4l439b9w0hh)
- 23: Noord (g6agy7lw17ap2yty3is6edn0)
- 24: West (sox6uc6p27ptib56b4ualfmq)
- 25: West (idegwiy2pj2shk9dozxilumy)
- 26: Oost (u8b2sh40vayfvssc6vaayvp2)
- 27: Noord (huz5fcy5ooyl9lc1xaxr1iaw)
- 28: Noord (e4pg5vcam69f2zcyxqjtzgzv)
- 29: Noord (j0ifi7ic050lwgyiqodcu1oa)
- 30: Oost (p12pbafe53o9izc2functznt)

Means: West 23.7, Oost 23.5, Noord 22.7 (out of 30).
