# j2-centrum-community: notes

Slice items from `scouts/SCOUT-C.md`: C-03, C-05, C-12, C-18, C-19, C-20, C-22, C-23, C-24, C-25, C-26, C-27, C-29, C-30.
Drafts: `places/j2-centrum-community.yaml` (10 places). Enrichment: `notes/j2-centrum-community-enrich.json` (De Bijenkorf).
Validator: 0 errors apart from `override` (expected) and `a_list` on the Waag (the centrum validator's map.yaml predates that field; the live map has it).

## What happened to each item

| item | outcome | rank | era / theme |
|---|---|---|---|
| C-03 Rapenburgersjoel + Seminarium | drafted | Nice | 1796 to 1940 / Synagogues and religion |
| C-05 Weesperplein 15 | **not drafted** (see below) | | |
| C-12 Waterlooplein market | drafted (own pin, see below) | Nice | 1796 to 1940 / Work and trade |
| C-18 Aby Jetomim | drafted | Okay | 1796 to 1940 / Community and care |
| C-19 Beth Am | drafted | Okay | 1796 to 1940 / Community and care |
| C-20 De Bijenkorf | **in pool** (qac2sgak): enrichment patch | (untouched) | suggest 1796 to 1940 / Work and trade |
| C-22 Waag | drafted (not in pool), `a_list: A-list` | Nice | 1796 to 1940 / Culture and sport |
| C-23 Tip Top (gone) | drafted, `status: Gone` | **Nice** (scout: Okay) | 1796 to 1940 / Culture and sport |
| C-24 matzo factory stone | drafted | Okay | 1796 to 1940 / Work and trade |
| C-25 Joachimsthal | **not drafted** | | |
| C-26 De Vries van Buuren | drafted, pitched on the gable stone | Okay | 1796 to 1940 / Work and trade |
| C-27 Nieuwe Herengracht 33 | drafted | Okay | Before 1796 / Community and care |
| C-29 Lindenbaum stone | drafted | Okay | 1796 to 1940 / Work and trade |
| C-30 Montefiorepark | **not drafted** | | |

Curation calls I made (per the delegated-calls rule):
- **Tip Top up to Nice**: since 17 March 2026 there is a visible memorial (six stained-glass windows at the Academy of Theatre and Dance, on the spot of the old entrance), so it is no longer a gone thing with only a story.
- **Waag drafted as a full place**: it is not in the pool. `research/centrum/A-LIST.md` parks it as an A-list sight; the coordinator should decide whether it goes in (it would be the Jewish Heritage map's natural home for the museum's first years). If the A-list session adds its own Waag, turn my draft into an enrichment of theirs (the second paragraph is the Jewish part) and drop mine.
- **Waterlooplein market as its own place**: the pool's pfex36qg ("Waterlooplein's poor relief") is about the Arsenaal, the Huiszittenhuis and the Mozes en Aäronkerk at the south end of the square (pin Waterlooplein 207), with the market only as "behind the market". The market is a different subject and spot (north side and Zwanenburgwal; pin on OSM's Waterloopleinmarkt). No overlap in text.
- **C-26 re-pitched**: the firm's story is mostly single-source; the place hangs on what is confirmed and visible: De Swarte Mvele back in the side wall since 2007.

## Date conflict settled: Jewish Historical Museum in the Waag

**24 February 1932**, opened by alderman Emanuel Boekman. Sources: Algemeen Handelsblad 22-03-1932 (Delpher OCR, ddd:010662488:mpeg21:a0259: "toen de heer E. Boekman ... op 24 Februari j.l. het Joodsch Historisch Museum opende ... in het Waaggebouw"); Ons Amsterdam 2007 "Joods Historisch Museum viert dubbel feest" (75 years on 24 Feb 2007). The foundation was set up in May 1930 (nl.wikipedia: 23 May 1930; Ons Amsterdam). joodsamsterdam.nl/nieuwmarkt's "24 januari 1931" is wrong. The pool's Jewish Museum text (py728msk, "in 1932") is **correct**: no fix needed. (research/a-list/places/centrum-east.yaml also says 1932; not touched.)

## Sources per place

- **C-03**: joodsamsterdam.nl/synagoge-rapenburgerstraat-173 and /nederlands-israelitisch-seminarium; dutchjewry.org Overveen cemetery page (Adath Jeshurun, dates 1797, 23 June 1797, 1 May 1799, 1808); geheugenvanoost.amsterdam page 84100 (De Vrijdagavond caption); rijksmonument 4793; search-result caption "Nederlands Israëlietisch Seminarium (1839-1943)" at 175-179; hetseminarium.nl (still exists).
- **C-12**: nl.wikipedia Waterlooplein (Amsterdam); en.wikipedia Waterlooplein; joodsamsterdam.nl/waterlooplein and /waterlooplein-geschiedenis; annefrank.org timeline 155; oorlogsbronnen.nl theme "Instelling Joodse markten in Amsterdam"; evenementen.nl and iamsterdam listing (hours, used for opening times only).
- **C-18**: joodsamsterdam.nl/aby-jetomim-plantage-middenlaan-80; oorlogsbronnen.nl theme Portugees-Israëlitisch Jongensweeshuis; amsterdamopdekaart.nl Plantage Middenlaan 80; joodsmonument.nl (Sara Drukker-Duque), kampwesterbork.nl (Isaäc Drukker).
- **C-19**: joodsamsterdam.nl/beth-am-joodsch-volkshuis; Delpher: NIW 11-05-1923, NIW 22-06-1923 (JNF office from the Hirsch building), Algemeen Handelsblad 24-10-1923 (Jewish sports club meets there).
- **C-20** (enrichment): nl.wikipedia De Bijenkorf (warenhuis); joodsamsterdam.nl/de-bijenkorf; nl.wikipedia Johnny & Jones; 4en5mei record 2941 (plaque).
- **C-22**: nl/en.wikipedia Waag; rijksmonument 3848; nl.wikipedia Joods Museum (Nederland); Algemeen Handelsblad 22-03-1932; Ons Amsterdam 2007 (robots-refusing site: read one page via BrowserOS, facts only); waag.org (guided tours).
- **C-23**: atd.ahk.nl news 1 April 2026 (memorial windows); joodsamsterdam.nl/tip-top-theater; theaterencyclopedie.nl and nl.wikipedia Tip Top Theater (search results); Commons PD photo of 22 Feb 1941.
- **C-24**: onh.nl/verhaal/matzes-van-de-haan; joodsamsterdam.nl/matzefabriek-a-i-de-haan-co; VVAG Flickr 3106251427 (snippet).
- **C-26**: gevelstenenvanamsterdam.nl/zwanenburgwal-zn-amsterdam-swarte-mvele; joodsamsterdam.nl/de-vries-van-buuren and /jodenbreestraat; gerardschippers.nl document (snippet: Jewish textile wholesaler on the Jodenbreestraat and Waterlooplein).
- **C-27**: 4en5mei record 2224; hebreeuws.org (snippet, stones in Weesperstraat until 1932); Amsterdam municipal register text for Amstel 53 (monnr 200631: move to Nieuwe Herengracht 33 in 1794, shared Weesperstraat home before); rijksmonument 1923 (two ornamental gable stones); joodsamsterdam.nl/nieuwe-herengracht (residents and death dates).
- **C-29**: Amsterdam municipal register 215001; joodsamsterdam.nl/gebbedrijfstoomdrukkerijlindenbaum; nl.wikipedia Arrest Lindenbaum/Cohen; joodsmonument.nl (Max, Erwin); oorlogsgravenstichting (Bertha).

## Claims dropped for want of a second source

- C-03: no benches for the parnassim; Star of David in the floor; 21 founding members; mikveh of 1885; text chiselled off the seminary's gable stone; most seminary staff and students murdered; seminary founded by royal decree 26 Feb 1814; current use of 175-177 (a bookbindery, per one caption).
- C-05 (whole item): the chewre Ahawas Achiem's prayer room at Weesperplein 15 (architect E.M. Rood) rests on joodsamsterdam alone. The snack bar is there (Cantarell, Weesperplein 13-15, confirmed by its own site), but the prayer-room story has no second source. If one turns up, it is a Look-for line in nuktl5uy (Monument van Joodse Erkentelijkheid, same address) rather than a place.
- C-12: the "Hollywood" nickname for the square (only joodsamsterdam); the square's playground as gathering point in the February 1941 raids; market closed on Jewish holidays; traders' dislike of the move; 1977 move to the VaRa strip and 1988 return (nl.wikipedia only).
- C-18: Luftwaffe requisitioned the building in 1943; refugee boys from the Frankfurt orphanage after November 1938; room for sixteen boys; the Drukkers' two daughters; Daniël Goedkoop of 't Kromhout living in the house 1910-1929 (amsterdamopdekaart only).
- C-19: stonemason S.L. de Beer and the building's history (Gosschalk 1881, Tholen 1923, via nai.nl on joodsamsterdam); a synagogue on the top floor from 1923; last advert 1942.
- C-20: see the note in the enrichment JSON.
- C-22: "80% of the collection" lost (joodsamsterdam); the An-Ski memorial (now in depot).
- C-23: Wednesday children's films; peanuts ("kesause mangelen"); Kroonenberg's death in Westerbork (sources also disagree on who directed it after 1934: nl.wikipedia says son Barend); closure date 4 June 1942; "only Jews allowed in during the war" (ATD only); the projectionist's name (spelled Westendorp and Wessendorp).
- C-24: workers hidden behind matzo tins in a raid; "cracker factory"; liquidation 1942 and its Verwalter.
- C-26: supplier to the market traders; Sabbath closing; pension fund; much of the staff murdered; the Hebrew year 5649 on the Zwanenburgwal front; architects (Jacot and Oldewelt per joodsamsterdam vs Cerlijn en De Haan per gevelstenen).
- C-27: Mishenet Zekenim Portuguese or Ashkenazi: settled as Portuguese (register + joodsamsterdam). Kept on one source: the stones being hacked and cemented over after February 1943 (4en5mei, citing the VVAG). The 1995 recutting and unveiling make the story visible on the stones themselves; flag for the reviewer if stricter.
- C-29: firm founded 1896; Jules Schelvis trained there; bankruptcy 1935.

## Not drafted

- **C-25 Joachimsthal**: sources conflict. joodsamsterdam calls the shop on the Kerkstraat (since 2019) the firm's successor and dates the firm 1867/1875; Het Parool (2023) and Ons Amsterdam date the bookshop from 1823 and say it ended under the occupation ("1823-1943"). No street number for the Kerkstraat shop was found and its current trading could not be confirmed. No pin, no settled story.
- **C-30 Montefiorepark**: one source only (joodsamsterdam, quoting Polak 1936); the houses were demolished 1947-1986 and the passage is unremarkable. A Look-for line in the Hollandsche Schouwburg place (slice C-06) fits better once a second source exists.

## Uncertainties and checks set

- Tip Top (`check: Location`): pin is the scout's point for the old theatre site; the windows hang in the academy's front "where the main entrance was". Move the pin onto them.
- Matzo stone (`check: Location`): ONH says the hall of the flats, joodsamsterdam the parking-garage entrance; whether it is visible from outside is unknown.
- De Swarte Mvele (`check: Location`): pin by the corner of Waterlooplein 3; the stone is in the side wall on the Zwanenburgwal.
- Lindenbaum (`check: Facts`): register 26 September 1912, joodsamsterdam 25 September (Erwin's 11th birthday). Body says "September 1912".
- Bijenkorf plaque (enrichment): location from a 2005 book via 4en5mei; check it still hangs on the stairs to the first floor.

## Photo gaps

- Aby Jetomim, Beth Am, matzo stone, De Swarte Mvele, Lindenbaum: no Commons photo found (Commons search was rate-limited part of the time). Tip Top has only the 1941 raid photo (public domain); a photo of the 2026 windows would be the better cover (ATD's photos are by Hannah Rekveldt, licence unknown: not used).
- Rapenburgerstraat 173: the Commons photo is small (480x640).

## Existing pool places these drafts touch (read only)

- C-03: db72j885 girls' orphanage (Rapenburgerstraat 171, next door) and o4b3n6uw (same address); kgy73v0h Beth Hamidrasj Ets Haim (the seminary's forerunner).
- C-12: pfex36qg (poor relief, south end of the square), czuj7qwn Arsenaal, jhi3z7f4 Stopera, lnkbct6h Monument Joods Verzet, fh0mc9q8 Jonas Daniël Meijerplein.
- C-20: qac2sgak De Bijenkorf on the Dam (enriched, not drafted); avb1dqu2 Blaauwlakenblok.
- C-22: d52gm2h5 / p1ws8n2q (Nieuwmarkt square: plane trees, bird, scaffold), rmithfc3 (sluice); py728msk Jewish Museum (its 1932 date is right).
- C-23: heaems4d Goslerhuisje (already has a Tip Top Look-for line: it says Tip Top stood until 1953, consistent); kex5iaoj "Where the Maupoleum stood" (the academy building that now carries the windows: consider a Look-for line there pointing to the Tip Top place); y853cvdf Rembrandthuis.
- C-24: wxeueb8f Valkenburgerstraat 202-210.
- C-26: y853cvdf Rembrandthuis, uqnp0v4u Uylenburgh's corner. The stone was shown in the Waag (1926-1955) according to gevelstenenvanamsterdam: a possible cross-link.
- C-27: jsqzy99k almshouses of the Amstelhof corner (Amstel 53 was the Portuguese old women's home: check whether that text mentions it).
- C-18: nz2r3ydh Sint Jacob and y9xhpu5v (neighbours on the Middenlaan).
- C-19: ti17h50u Carré.
