# Fixes to live Deep Amsterdam texts

Patches in `dc update` format, one per place (`<placeId>.json`), built against the live export of 2026-11-25 and checked with `dc update <id> <file> --dry-run` (all "would-update", only the intended fields). Nothing has been written to the live site. Apply with `dc update <id> research/contemporary/fixes/<id>.json --note "..."`.

## Patches

- edil67xueaar1irciltvq49k De Nederlandsche Bank: the courtyard tower is "a round tower added in 1991", not "Duintjer's" (EN, NL). Source: Mecanoo project page (round tower added in the courtyard in 1991, later dismantled).
- tqidorof611ngiey24td478b Valley: tower heights 100/76/66 m changed to 67, 81 and 100 m (EN, NL). Sources: MVRDV project page (67, 81, 100 m); Arcam (103/80/70) and Zuidas ("tot 100 meter") are close; nothing supports 76/66.
- jw0u3fn0stggkq9mumx9uyfz A'DAM Toren: `architect` (EN, NL) now "Claus Van Wageningen Architecten (Felix Claus) with OeverZaaijer". Sources: Arcam guide (Claus Van Wageningen Architecten, Felix Claus), Gebouwd in Amsterdam 1390 (per notes/ex-noord-1.md).
- e4pg5vcam69f2zcyxqjtzgzv Schoonschip: "officially finished in 2021" replaced by "the last arks arrived in January 2020"; "eleven years" to "ten years" (summary and body, EN, NL); `built` 2010–2020. Sources: schoonschipamsterdam.org ("De laatste lichting arken arriveert januari 2020. We zijn compleet!", "per 2020 allemaal gerealiseerd"); Arcam (2019, "tien jaar lang").
- sden16s0vztjz80tfafdpz56 Republica: completed 2024 changed to 2023 (body, `built`, EN, NL). Sources: Arcam (realisatie 2023, AAP 2024 nominee); Vink Bouw project page (delivered Q1 2023).
- z6xh4nj8s4it2fhgckawrjxz Nesciobrug: "won the National Steel Prize that year" removed; "780-metre" and "about 780 metres one of the longest" replaced by "long bridge" and "according to its architects, the longest cycle and pedestrian bridge in the country when it was built"; main span length (180 m) removed, 510 tonnes kept (EN, NL). Sources: Wilkinson Eyre project page (longest cycle and pedestrian bridge in NL when built; clear span 170 m); Arcam (middle part 160 m, ramps 255 and 270 m). No 2006 Staalprijs listing names it.
- dccz2puust6ktiq2zrh42sw7 Vrijburcht: 52 homes changed to 56 (summary and body, EN, NL). Source: Gebouwd in Amsterdam 122 (city register, "Aantal woningen 56", read in BrowserOS). No source found for 52.
- r71hlbvs6zeveot5vw9d32o2 De Warren: built 2021–2023 changed to 2021–2022; "opened in April 2023" now "officially opened in April 2023" (EN, NL); `built` 2021–2022. Sources: Arcam (realisatie 2022, AAP 2023); NH Nieuws 21 April 2023 (festive opening that afternoon); Natrufied (realisatie 2021).
- n38rv2y627vrt24y1d101pae Westermoskee: minaret 43 m changed to 42 m (summary EN, NL). Sources: Arcam ("42 meter lange minaret"); NL Times and other references give 42 m.
- gxemo5tow9g7d4xgkvq3c7kf Augustanakerk: "sixteen social-rent homes" now "sixteen rented homes, fourteen of them social rent" (EN, NL). Sources: Arcam (14 social, 2 free-sector rent); Ponec de Winter's own presentation (14 social, 2 mid-rent).
- qmf435ep77ddd034uqcscc6r WOW Amsterdam: "from 2006 it stood empty" narrowed to "from the mid-2000s"; conversion "In 2013" now "In 2013 and 2014" (EN, NL); `built` "1967, converted 2013–2014". Sources: Gebouwd in Amsterdam 1081 (complex from 1967, empty since 2006, 2013/2014); Arcam (designed 1965, empty after 2005, finished June 2014). 1967 kept (city register; Arcam gives the design year).
- glg9a1k1viqkeeu5kqebbav6 De Voortuinen: "about a hundred" trees changed to "about 120" (EN, NL). Source: Arcam ("ongeveer 120 bomen", MOSS). No source found for 100.
- x9jffzoxm1lvuu3ud06mgq3n Sportplaza Mercator: "some 60 kinds" changed to "more than 50 kinds" (summary and body, EN, NL). Sources: Arcam (50,000 plants of fifty species); VenhoevenCS ("over 50 different kinds of plants").
- kly1rwhgt7wpcyrl78hjpgxs De Meander: "built 1998–2005" narrowed to "completed around 2000"; "about 275 homes" narrowed to "more than 200 homes" (summary and body, EN, NL); `built` "about 2000". Sources: Arcam (204 homes, realisatie 2000); architectureguide.nl (1995–2000); Archis 2004 (Meander project 1995–2004). No source for 275 or 1998–2005.
- yx7lrrl0q75vv0gvv24niz8v Het Funen: the 2011 vote is real but was for best housing project of the year (Amsterdamse Nieuwbouwprijs), not "best new building of the city"; "against the experts' taste" removed (no source); Verdana dated 2009 (EN, NL); `built` 2000–2009. Sources: organiser's press release (nieuwbouwprijs.nl, 28 Oct 2011, archived: public vote, 19.7%, Parool and AT5 among organisers); Arcam (Verdana 2009, last of the 16 blocks, all done in ten years).
- n7b7gkg45j6b60nspyiqaike Verdana (Funen Blok K): EN "two and a half storeys" changed to "three storeys", matching the NL "drie bouwlagen". Same edit made in places/new-centrum-ij-2.yaml. Source: Arcam ("drie bouwlagen, waarvan de derde verdieping voor de helft uit een daktuin").
- nb4oy7n16s3bioywucr63bf6 Een zeegezicht aan het IJ (Cuyperspassage): "walls and ceiling ... about 70,000 tiles" changed to "the wall ... 46,000 tiles" (summary and body, EN, NL). Source: Benthem Crouwel project page ("the entire wall ... 46,000 wall tiles"); press coverage gives about 80,000 in all, 46,000 wall plus 33,000 floor tiles (the floor tiles are already in Look for).
- tlp9ba6wgk9zvadb07yuunha Arriving at Centraal Station: same tile figure, 70,000 changed to 46,000 wall tiles (EN, NL). Source as above.
- qv0a05zf47i06yulvlmtq4dd Lloyd Hotel: year of the competition removed ("a 1996 competition" to "a competition", EN, NL). Arcam says the city's competition was in 1999 (plans from 1997); MVRDV gives 1999–2004; Stylepark says MVRDV was approached in 1996. Not settled, so narrowed.
- fvxpqry52soxpns7o35laz3j Kraanspoor: yard closed 1978 changed to 1984, matching NDSM Loods and NDSM slipways (EN, NL). Sources: ndsm.nl history (NDSM ended 1979, successor NSM bankrupt in 1984); municipal zoning plan for NDSM east (bankruptcy 1984). Arcam's 1978 is not supported.
- gvkfr92ehq4zx3e4lo2tmggv EMA building: "Pendullum" changed to "Pendulum" (body and Look for, EN, NL). Same edit made in places/new-zuid-zuidas-2.yaml (body, Look for, link label; the Zuidas URL and the source note keep Zuidas' spelling). Source: Stadscuratorium Amsterdam collection page "Pendulum" (Gijs Assmann, 2020); Commons category "Pendulum (Gijs Assmann)". Only the Zuidas blog spells it "Pendullum".

## No change needed

- hovzau2tsb28z8w98v918cau Pontsteiger: live "Hanneke Kijne of MORE" is right. The architects' own page (Arons en Gelauff) says "Het binnenplein, ontworpen door Hanneke Kijne van MORE", and MORE landscape lists the project; Arcam's "Hosper" is her former firm.
- f7vjybzqezxdn3wnm9jumub9 Silodam: live ten storeys and 157 homes match the architects' own page (MVRDV: "157 houses", "ten-story-high urban envelope"). Arcam's nine storeys and 160 homes differ.
- rv8ru6n0a5t6ld6h3qluqw40 Noorderlicht: the live text does not mention the 2006 greenhouse building; it already speaks of a temporary pavilion and a planned new building. (The place is off the theme list anyway.)
- pkma8bvlbd7gfxkzaebx9y1s Timber towers (Patch22 address): Johan van Hasseltkade 202 and 252 are both BAG addresses in the same pand (0363100012244388, bouwjaar 2016, 34 units; 202 is the commercial unit, 252 a dwelling). 202 is valid.
- bufcczstxwp0954iao2zrskx HAUT: live "finished in 2022" matches the architects' own page (Team V: completion 2022) and Designboom; Arcam and a supplier fact sheet say 2021. Kept, as the architect's date. (Side note: Team V says 52 apartments, Arcam 55, live 55; not changed.)
- lpsm8fwgspv3ngvliyomfo9y White Noise: already "Pendulum", the right spelling.
- seladrj25mmhtixn8g69n02c NDSM Loods and hg9i3fh18swl7pja9upzkol2 NDSM slipways: 1984 (bankruptcy) and last launch 1979 are right.

## Left open

- Nesciobrug total length: Dezeen and Structurae give 780 m, Arcam's parts add up to 685 m; the number is removed rather than settled. Main span: architect 170 m, Arcam 160 m; removed.
- Vrijburcht 56 rests on the city register alone (no second source found; none found for 52 either).
- Lloyd Hotel competition year (1996 or 1999) not settled; year removed.
- Lloyd Hotel "open 2004–2021": one search summary says the Lloyd Hotel ran until 2022; not checked, not changed.
- Sportplaza Mercator: VenhoevenCS writes that the green walls are no longer lush in the 2020s and a new system is being explored; the live text describes them as planted. Not checked on site, not changed.
