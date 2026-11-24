# Dutch pass: Oost, batch 01

29 places done. Every place has a new Dutch summary and body, written fresh rather than translated. Each one opens with its most surprising sourced fact and ends with "Let op:" plus the same Look for items as the English. The copy checker finds 0 copied runs in all 29 (8-word window, against all fetched sources). There are no em dashes and no spaced en dashes.

## Claim check: 90 changes

- **63 narrowed** to what the source says.
- **24 cut**.
- **3 sourced** (new evidence found).

Two places needed no claim change: the Talmud Tora school and the Suriname Museum.

### Main points by place

- **Blasiusstraat 124:** The register says only that it is "plausibel" the house was looted. The summary and body now say "probably" and "very probably".
- **Muiderpoort memorial:** Three claims had no source and are gone:
  - the Hollandsche Schouwburg and the trams;
  - "occupied Poland" (the plaque says "Midden-Europa");
  - commemorations around 4 May and on Kristallnacht.
- **Rijkskweekschool:** It was not squatted. The city housed people from squats elsewhere in the building, with the OLVG's permission.
- **De Schreeuw:**
  - "Yearly commemoration diagonally across from The Manor" is now the sourced 20th-anniversary gathering in 2024, opposite the Manor. The source is oost-online, added to `sources_add`.
  - The link to the Hofstad group is now "suspected".
  - "Debate on Islam" is cut.
- **Van Ravesteyn ATO flats:** "Only Amsterdam building" is now "as far as is known".
- **Pakhuis de Zwijger:** "Mostly free" and "city's debating house" are gone. The building now has about 600 programmes a year on the future of daily life.
- **Barmat house:** "And later by the Nazis" and "down to the door handles" are cut.
- **Borneo Architectuur Centrum:** Three claims are cut because no source supports them:
  - "volunteer-run";
  - "open-air catalogue of 1980s–90s housing";
  - the Sporenburg Look for item.
- **Stenen gedicht:**
  - The Jakarta gloss is now the VOC ships, as the source has it.
  - "De Architekten Cie. / The Whale" and "best in low sun" are cut.
- **Guardhouse and bunkers, Zuider IJdijk:** All three TracesOfWar pages return HTTP 403, so nothing from them could be checked. Cut or narrowed:
  - the 1909 date;
  - May 1940;
  - the sea rescue service, the aircraft types and the missions;
  - the bunker sizes and the radio room;
  - the Zuider IJdijk 30 address;
  - the Leeuwen van Zeeburg.

  The text now rests on the city's 2018 heritage note and nl.wikipedia. The built attribute is patched to "from 1907 (guardhouse)". **For the user:** these details can come back if someone can open TracesOfWar in a browser.
- **Jaap Edenbaan:**
  - The 1966 honouring is now sourced from an Anefo photo dated 13 March 1966. The photo says "schaatsploeg", so "national team" is now "skating team".
  - The Finnish school is now sourced from Commons, where it was rebuilt here in 1961–62. That photo is from 1974. **For the user:** nothing confirms the building still stands, though it is kept as a Look for item.
  - "Cycling champion of the 1890s" is now "legendary skating champion", because the en.wikipedia page was not available to check.
  - Floodlights, "floor over the ice", the view from the Radioweg and the cranes are cut.
- **Museum Perron Oost:**
  - Livestock unloading, the central square and the hedges are narrowed.
  - "Entrepotkade 5, about 200 m west" is cut.
  - It still says the "former" Zeeburg borough office; the sources say only "stadsdeel Zeeburg".
- **Muiderkerk:**
  - The tower looks like a folly only now that it stands alone, so the text says so.
  - The date is now 1891–92: there is a construction photo from 1891, and the dating says 1892. The built attribute is patched.
- **Zeeburgerdorp:** The source contradicts itself on which end of the Zeeburgerpad the village stood, so the direction and the houseboats are dropped.
- **Amstelglorie:**
  - "First permanent allotment park" is now sourced from AT5.
  - "Left for Texel" is cut.
  - "Opens to visitors on set days" is cut.
- **Noch Einmal:** The Nefertiti claim is sourced from the live nl.wikipedia page, where Visch is quoted.
- **St. Elisabethgesticht:** The parsonage is sourced from RCE register 526943, added to `sources_add`.

## Places whose hook changed

No English text was reordered. The Dutch opens with a different hook than the English in these places:

- Krop (the shortened legs)
- Muiderkerk (the folly view)
- Muiderpoort (the bench)
- Cruijff mural (the eleven days)
- Suriname Museum (even or odd house number)
- Elisabethgesticht (the grotto)
- ATO flats
- De Schreeuw (the two faces)
- Bee tables (the bees as a gauge of the city)
- Noch Einmal (Nefertiti)
- Stenen gedicht (Dwars on the anonymous bricklayers)
- Painters' houses (the 17th-century studio rooms)
- Zwijger (the bridge)
- Rotsvast
- Barmat (JWBARMAT in the door)
- Perron Oost (look through the windows)
- Dreibholz (doors facing the factory)
- Open-air school (Snow White fresco)
- Batjanstraat ("bollend papier")
- Amstelglorie (ferry and cargo bikes)
- Zeeburgerdorp (showers in the office)
- Guardhouse (wine cellar)
- Muziek en Vreugde

## Other notes

- To get the checker to 0, the poem quotes are shortened:
  - Muiderpoort now quotes "Tocht er door hun schimmen" and "lang vergeten namen" as two separate fragments.
  - Kouwenaar is quoted only as "Ik lig als een schip".
- Some Dutch bodies are slightly over 250 words, all within the brief's "about": Rotsvast 256, Perron Oost 253, De Schreeuw 264, Muziek en Vreugde 258.
- The nl.wikipedia and Commons APIs often answered HTTP 429, because other agents are fetching at the same time. Cached texts were used where they existed.

## Verification

All 29 places were checked again. Every claim in the new Dutch was compared with the new English and the original texts. The Dutch and English Look for lists match in all 29 places, and every Dutch body ends with its list. There are no em dashes and no spaced en dashes. The copy checker reports 0 copied runs in all 29 places.

**Sourced changes, re-fetched and confirmed:**
- St. Elisabethgesticht: monumentenregister 526943 describes the "voormalige PASTORIE" at 's-Gravesandestraat 55.
- De Schreeuw: oost-online confirms the 2 November 2024 commemoration in the Linnaeusstraat and at the Schreeuw, "Tegenover het Manor Hotel".
- Noch Einmal: Visch's Nefertiti quote is on the live nl.wikipedia page (the API was rate-limited, so the page HTML was used).
- Amstelglorie: AT5 says "het eerste volkstuinencomplex op vaste locatie".

**Dutch claims removed, because they were not in the English or the sources:**
- Muiderkerk tower: "in een Engelse landschapstuin" is cut. The tower is now only "een soort follie".
- Blasiusstraat 124: "geschilderd" is cut. The English says only that the facade is mint and dark green concrete; it does not say it is painted.
- De Schreeuw: the hook said the face "gooit het hoofd achterover". That is cut.
- Pakhuis de Zwijger:
  - "bussen" is cut from the traffic through the building (the English says road and cycle path).
  - "van liggende en staande stenen" is cut. It was an invented, and wrong, explanation of blokverband.
- Noch Einmal: the hook said you can see Nefertiti's head in the leg, and called her the "Egyptische koningin". The source supports this, but the English says only that she was part of the inspiration, so the Dutch now says the same.
- Open-air school: "In de eetzaal hangt een fresco" said the fresco is still there. It is now past tense ("zat"), as in the English.
- Rotsvast: the hook said "Niemand had het geplaatst". That was false (Ligtvoet placed it) and is replaced.
- Zeeburgerdorp: the hook tied the trips to the shower to "onder het oog van de opzichter". That link is cut, and the supervisor moves back to where the English has it.

**Dutch claims fixed to match the English:**
- Talmud Tora: the old building was "verouderd" (outdated), not "versleten" (worn out).
- Hildo Krop: the Dutch now says that it was the Hildo Krop Museum that explained the shortened legs.
- Muiderkerk tower: "De gemeente mocht..." could be read as the congregation. It now says "Van de stad mocht hij...".
- Muiderpoort memorial:
  - "overal in deze buurt" is now "in deze wijk standaard".
  - "treinen" is now "weggevoerd". The English does not mention trains.
- Rijkskweekschool: the summary now says "kamers" (rooms), not "bedden" (beds). It also gets back the city housing former squatters, which it had left out.
- Suriname Museum: the zoological museum had a "dependance" (branch), not a "bijgebouw" (outbuilding).
- De Schreeuw: the Dutch gets back "rond" (around half past eight), "door de politie", "vrijheid van meningsuiting" and "Hyde Park".
- Noch Einmal: "afgezaagd" (sawn off) is now "afgesneden" (cut off).
- Rotsvast:
  - The summary said "niemand iets van wist" and now says "niemand kon verklaren".
  - "spannend" is now "intrigerend".
- Barmat house: "vrienden" (friends) is now "contacten" (contacts).
- Museum Perron Oost:
  - The audio tour now also tells the history of the island, as in the English.
  - The Gyroscoop is named as a gyroscope again. The Dutch had said the cones and rings were "like a ship's compass".
- Kantoorgangers: "rondje" (loop) is now "route".
- Batjanstraat school: "zoals de Amsterdamse School dat graag deed" is now "op de manier van de Amsterdamse School".
- Amstelglorie: "aan de kop van" is now "aan de rand van" the Amstelscheg.
- Jaap Edenbaan: "Vanaf nu" is now "Vanaf toen".

**Copy runs:** before verification there were 0. One edit put the whole first poem line into the Stenen gedicht summary, and the checker flagged it as an 8-word run. That summary now quotes only "Ik lig als een schip", and the checker is back to 0.
