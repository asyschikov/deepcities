# new-noord-1: notes

Slice keys: noord-4, noord-7, noord-13, noord-15, noord-16, noord-18. All six are drafted in
`research/contemporary/places/new-noord-1.yaml` (validate.py: 0 errors). None of them is already on
Deep Amsterdam: I searched `dc places sights --all` for Benthem, Metro Noord, Noord, metro, station,
Alliander, Westpoort, August, Overhoeks, Pontkade, NDSM, Europa, Siza, Eye, Breehorn, IJdoorn,
Waterland and Leeuwarder. Related places that already exist (not duplicates): Flyways (Harmen
Liemburg), metro station Noord `cqnn6fjin80y41zevrrqqefr` (the artwork in the platform floor;
the station text points to it); Noorderpark station `esb6r8k6aqfusx73n675vkou`; De Jakoba
`xyxfglfgflta5ag71viy8m8d` and A'DAM Toren `jw0u3fn0stggkq9mumx9uyfz` (Overhoeks neighbours).

The nlcheck.py copy checker named in the brief does not exist at that path. I ran my own check
instead: an 8-word shingle comparison of the EN and NL text against every source page I fetched.
I rewrote the four runs it found (a five-word "middenberm" phrase, the "like a barcode" phrase,
"one of five social housing projects", and a list of names). It now finds 0 runs.

## Metro station Noord (noord-4)
- Benthem Crouwel designed 7 stations (2 above ground, 5 below), design work from 1996, opened July 2018: Dezeen; Benthem Crouwel project page; Arcam noord-zuidlijn.
- Brief "stay underground, do not demolish, do not change the city above": Jan Benthem's story on benthemcrouwel.com.
- Shared concept (shortest route from platform to street, daylight as the guide): Benthem Crouwel project page, Archello (BC text).
- Viaduct in the central reservation of the Nieuwe Leeuwarderweg; northern terminus; opened 22 July 2018: nl and en Wikipedia; the median position also in Dezeen/search summaries and gateways.amsterdam.
- Roof of bent steel trusses and cold-bent glass: gateways.amsterdam (station Noord page); the Benthem Crouwel "Grote kapconstructie" design document (Nationale Staalprijs PDF, 2011) confirms the big roof and the cold-bent glass.
- Bus station at the north end, city and regional buses: gateways.amsterdam, nl/en Wikipedia.
- AAP 2019 jury prize, unanimous ("nieuwe ruggengraat"): ANP via Hart van Nederland. BNA Beste Gebouw van het Jaar 2019: Benthem Crouwel news (plaque page). Both awards were for the whole line, which the recognition field says.
- Flyways in the platform tiles: nl Wikipedia, Archello (Mosa); existing place.
- Cut as single-source (Wikipedia only): first truss 7 April 2014 as the highest point of the line; 1,300 bike spaces; platform dimensions (en and nl Wikipedia disagree: 130 x 13.1 m against 132 x 22 m); hall at bus-station level; the regional bus destinations. The scout's "bike park under one long roof" is not confirmed by an authoritative source, so it is left out.
- Pin 52.401667, 4.932222 (Wikipedia coordinates; OSM puts the bus platforms "Station Noord" at 52.4017 to 52.4027, 4.9316 to 4.9336).
- Access "Public parts only": the hall is public and the platform is behind the gates.
- Photos: three from Commons Category:Metrostation Noord (2018 exterior shots and a 2025 platform shot).

## Alliander Westpoort (noord-7)
- **Scout corrections:** "built around reused halls" is wrong. All the buildings are new; what was reused was materials ("zo veel mogelijk materiaal hergebruikt", Arcam; "reuse of materials", De Zwarte Hond). I set the type to New building. "Westpoort's only AAP winner" is not verified and is left out.
- Moved from the Spaklerweg (more than 100 years), site freed for housing; plot in Sloterdijk III; offices, training, workshops, storage, test areas; barcode layout; office as height accent visible from the A5; equal care for every part; timber structure; demountable car park; Corten steel; atrium with a "zwerftrap"; 1,195 t CO2 stored; gas-free and energy-neutral; in use from end of May 2023 by Liander, Qirion and Kenter: De Zwarte Hond project page and the BNA project PDF (De Zwarte Hond text).
- Corten ribs as sun and noise shading with climbing plants and nest boxes; three buildings; not open to the public; Basisweg 75: Arcam.
- AAP 2024 jury and public prize: De Zwarte Hond news ("third time in AAP history", architect's claim, not used). Independently confirmed by Team V (runner-up with Crossover), who name Alliander Westpoort the winner. Arcam's guide page still shows "Genomineerd, 2024", which is its standard label for the selection. I found no Arcam winner page by curl.
- Architectenweb Awards 2023, Office Building of the Year: De Zwarte Hond news, which quotes the jury and names the jury members.
- Address: official address Noordzeeweg 4, 1043 BM (BNA project PDF; Alliander visitor PDF via search summary, since the PDF did not parse); visitors' entrance Basisweg 75 (Arcam). Pin 52.394358, 4.808125 = OSM "Liander, Noordzeeweg 4". Nominatim puts Basisweg 75 at 52.3916, 4.8137 (close to the scout's pin, near the entrance). Nominatim also lists a "Liander" office at Basisweg 10 (52.3923, 4.8411), which I take to be another site; not used.
- Westpoort is in the Amsterdam municipality, so `municipality` is not set.
- Photos: "Alliander Westpoort.jpg" (2025) and "2024 Noordzeeweg 4, Amsterdam-Alliander (A).jpg".

## De August (noord-13)
- Team V for Ymere; social rent and urgentiewoningen; U-shape, seven floors, mirrored with two identical entrances, identical balconies and rainpipes to save money for the plinth; Royal Tichelaar green glazed brick; cream-white render; triangular balconies turning per floor; 175 two- and three-room flats; nearly all with a balcony or roof terrace; tall ground floor with shared rooms; semi-open courtyard on the Docklandsweg by Kiki van Eijk and Sant en Co, terracotta boulders and ceramic lights; named after Georg August Tindal; realised 2024; Docklandsweg 197: Arcam.
- One of five social housing projects in Overhoeks; the brief to compete with the luxury blocks around it; opened Thursday 16 January (2025): Team V opening news.
- AAP 2025 honourable mention (Arcam Programme Council quote): Team V news. Arcam's guide shows "Genomineerd, 2025". BLT Built Design Awards 2025, winner Architectural Design, Social Housing: Team V news. Both prize claims come from the architect's site only; the nomination is confirmed by Arcam.
- Pin = Nominatim for Docklandsweg 197 (52.388185, 4.904703).
- No usable photo: the only Commons file (De August, Overhoeks.jpg) shows it under construction in October 2024.

## Pontkade (noord-15)
- curl got only an empty JS shell from cie.nl. I read the project page in BrowserOS (my own tab, closed) and downloaded its project sheet PDF with curl.
- Project team led by partner architect Pi de Bruijn; client Pontkade ontwikkeling BV (BMB Ontwikkeling, part of VolkerWessels, and Reggeborgh); dates 2018 to 2019 on the page; 38,129 m²; AAP 2021 listed: cie.nl project page.
- Project sheet: 252 apartments (144 rent, 108 sale), 187 parking and 756 bike spaces; the masterplan keeps the east of the yard for events, art and culture with dense building in the west (FAR 4.5); each part has its own architecture and facade material sharing the shipyard's raw character; "built on an Amsterdam ferry landing (Pont)".
- Arcam: prototype for the NDSM masterplan; blocks of different heights around an inner court; two towers in white and red-brown brick, mostly free-sector rent of 50 to 75 m²; penthouses at the top; family houses on the north; Self-Made-Living flexible owner-occupied units on the south; plinth for horeca, supermarkets, shops and workshops; realised 2020; nominated 2021.
- **Scout correction:** I found no source for "courtyard on top of the plinth"; the sources say inner court (the sheet calls it a semi-public centre court). The text says inner court.
- Current tenants in the plinth are not verified, so the text only says what the plinth was built for. Access is "Outside only" because I could not confirm public access to the courtyard.
- Completion year: Arcam says 2020 and a search summary of a project sheet says November 2020; cie.nl shows "2018 - 2019" and Schüco gives 2021. I used 2020 (Arcam).
- Pin: Nominatim for MS. van Riemsdijkweg 236 (52.401578, 4.892160), next to the ferry landing and matching the scout's pin.
- Photo left out: Commons "Pontkade III Amsterdam.jpg" (2024, from the ferry) probably shows this block, but I could not confirm whether "Pontkade III" is the same complex.

## De Europa (noord-16)
- Siza design, three blocks named after ocean liners with De Europa first (2011); free-standing at the edge of the district beside Shell's offices of 2005 to 2009; white marble cladding; terraced from the fifth floor; roof gardens; balconies and loggias cut out; modelled on 1930s residential hotels with shared facilities; 79 homes, gym and sauna; half-sunken parking so every flat looks out; Overhoeks plan by Geurst & Schulze 2003 to 2015, turned to the IJ; Shell's eastern site freed in 2009; credits Álvaro Siza Vieira, Avelino Silva, Marc à Campo, Frank de Ruigh; client Ontwikkelcombinatie Overhoeks (Ymere, ING Real Estate Development); AAP nominated 2012; Overhoeksparklaan 130: all from Arcam (text by Fieke de Groot).
- Independent support for a Siza block in Overhoeks: e-architect on Tony Fretton's De Prinsendam ("forms a courtyard with the adjacent Alvaro Siza block that faces the river").
- Vesteda listing: 79 apartments, rentals (Arcam said rent and sale, so the text only says Vesteda rents out flats here).
- **Uncertain:** one web-search summary attributed De Europa to Claus en Kaan (2011/2012), but no page I could open says that. Arcam's detailed credits and the e-architect line support Siza. Worth a check by the coordinator if a second source turns up.
- **Scout correction:** "the only Siza in Amsterdam" is not sourced and is left out. Arcam says Siza drew three blocks; I did not establish whether the other two were built, so the text says only that De Europa was the first finished.
- Pin = Nominatim for Overhoeksparklaan 130 (52.386850, 4.900055).
- No Commons photo found.

## Breehorn, IJdoornlaan (noord-18)
- Three buildings (De Dammer, De Schaker, De Noordkop) after the demolition of the old Waterlandpleinbuurt courts; MUST urban plan; two clients (Rochdale; Stadgenoot) and two contractors; 290 homes, 80% social and 20% mid-rent (Arcam; LEVS project page says "more than 80%", and its data block says 280 homes, 82/18, so "some 290" is used); EPC 0.15 and 0.04; solar panels, triple glazing; no back side, with balconies on both sides and stairs/galleries inside; staggered and stepped brickwork; two-storey entrances with a void; small outdoor spaces on the street side for plinth homes; green strip on the IJdoornlaan: Arcam and LEVS project page.
- Same architectural language, two-colour masonry, articulation from vertical to horizontal, light brick plinth; solar power goes straight to tenants; De Dammer EPC 0.15 against a norm of 0.4 (project page says 2016, news says 2017); De Dammer finished three years before the other two (news, 2020): LEVS news and project page. Completion: De Dammer 2017, De Schaker and De Noordkop 2020; `completed` set to 2020.
- Pin = Nominatim for Krabbendamstraat 12 (Arcam's address), 52.394083, 4.956582.
- No Commons photo found.

## Places without photos
De August, Pontkade, De Europa, Breehorn.

## Verification

Fact-check pass (CHECK-BRIEF, slice new-noord-1). Re-read Arcam (all six guide pages), Benthem
Crouwel (project, Jan Benthem story, BNA plaque), gateways.amsterdam, the Nationale Staalprijs PDF,
Hart van Nederland (ANP), Dezeen, De Zwarte Hond (project, AAP 2024, Architectenweb 2023), the BNA
Alliander PDF, Team V (opening, AAP 2025, BLT, Crossover/AAP 2024), the cie.nl Pontkade sheet,
LEVS (project and news), Vesteda, ArchDaily (De Prinsendam), and the Commons file pages.

**De Europa architect settled: Álvaro Siza.** Arcam credits Álvaro Siza Arquitecto (Álvaro Siza
Vieira, Avelino Silva, Marc à Campo, Frank de Ruigh), and Tony Fretton Architects' own text on
ArchDaily says their De Prinsendam "forms a courtyard with the adjacent Alvaro Siza block that faces
the river" (the block on the IJ beside De Prinsendam is De Europa). Searches for a Claus en Kaan
De Europa found no page at all; the only Claus en Kaan link to Overhoeks in results was a thin page
about the Toren Overhoeks renovation, a different building. The Claus en Kaan summary was a search
error. ArchDaily added to the sources.

Claims narrowed:
- Metro Noord: "opened on 22 July 2018" narrowed to "July 2018" (exact day only from Wikipedia;
  Benthem Crouwel says July 2018). "In the central reservation / midden in / tussen de twee rijbanen"
  narrowed to "on a viaduct along the Nieuwe Leeuwarderweg" (the viaduct is confirmed by Benthem
  Crouwel's Staalprijs design document; the median only by Wikipedia and a Structurae search summary).
  Summary: "bus station for Noord and the villages beyond" and NL "bussen naar de stad en naar
  Waterland" narrowed to city and regional buses (gateways.amsterdam).
- De Europa: "as a nod to the port" corrected to "as a nod to seafaring" (Arcam: "zeevaarthistorie").

Trims to about 220 words (cuts only, nothing added; EN and NL cut alike):
- Alliander: the Liander parenthetical, the three company names, "reads as one industrial ensemble",
  the demountable car park, no natural gas.
- De August: "on the old Shell site", priority housing, the balcony/ground-floor sentence, the
  Georg August Tindal name line.
- Pontkade: the penthouse layer.
- De Europa: the Eye / A'DAM Toren row, the roof gardens, Vesteda as landlord.
- Breehorn: the range of flat sizes.

Checked and kept: all awards (AAP jury prize 2019 unanimous via ANP; BNA 2019 via Benthem Crouwel;
AAP 2024 double via De Zwarte Hond, confirmed by Team V; Architectenweb 2023 via De Zwarte Hond; AAP
2025 honourable mention and BLT 2025 via Team V, nomination confirmed by Arcam; the 2012 and 2021
nominations via Arcam). Pins re-checked with Nominatim (all match the addresses at 6 decimals).
Access: Arcam lists all five buildings as not open to the public; Metro Noord public hall.
Photos: the five in use were read on their Commons file pages and show the right buildings (Metro
Noord category, May 2018 and March 2025; Alliander, category Noordzeeweg 4). "Pontkade III
Amsterdam.jpg" stays out: taken from 52.400125, 4.889667 heading 333°, i.e. away from Pontkade
(north-east of that point). Commons searches for Overhoeksparklaan, Pontkade and IJdoornlaan found no
file that shows De Europa, Pontkade or Breehorn. No em dashes or spaced en dashes; validate.py 0
errors.
