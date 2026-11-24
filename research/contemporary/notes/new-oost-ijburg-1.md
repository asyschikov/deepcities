# new-oost-ijburg-1: notes

Seven buildings drafted in `places/new-oost-ijburg-1.yaml`; validator 0 errors. None is on the
map already (searched Jakarta, University College, AUC, Jonas, LAB42, Nieuwe Meent, Bakstayn,
AMST, Amstelstation, Science Park). nlcheck.py was not present at the scratchpad path, so the
Dutch was checked with a home-made 8-word overlap test against every fetched source text;
the few hits (institute names, a floor-area phrase, an opening sentence) were rewritten.

## Hotel Jakarta (oost-ijburg-2)
- Sources: SeARCH project page (tender with WestCord, timber structure, prefab rooms on lorries,
  BIPV in loggias and atrium roof, perforated panels with trading ships, Hortus garden);
  Arcam guide (SMN ships to Java left from this quay, AAP 2019 "Genomineerd, Winnaar
  publieksjury", address); hotel site (Café Jakarta, Skybar Malabar open, no reservations;
  indoor garden from Westers Bakery to the café; garden species).
- Scout hook "emigrants once left for the Indies": Arcam says the SMN ships left for Java from
  here; SeARCH says arrivals from Indonesia landed here. Text uses only the departure fact.
- Left out: SeARCH's own award list (Architectenweb public building of the year 2018, WAF 2018,
  "Gouden A.A.P. 2019") because only the architect's page supports it and Arcam calls the 2019
  result the public prize; "unique for the Netherlands" timber height claim; pool open to
  locals (Arcam only, not confirmed on the hotel site).
- Access: Public parts only (garden, café, skybar).

## Amsterdam University College (oost-ijburg-3)
- Scout line was wrong on two points: the building is a compact teaching block, not "a ring
  of student housing"; and it won the AAP 2013 (Mecanoo project page "Amsterdam Architecture
  Prize 2013 (Golden A.A.P.)", Archilovers report, Mecanoo news on handing the 2014 prize on as
  previous winner). Arcam's guide entry only says "Genomineerd, 2013": flagged, but the win is
  well supported.
- Sources for design: Arcam (Cor-ten, pointed roofs, no auditorium, stair as tribune, glass
  teachers' rooms, sedum and rainwater in roof folds) and Mecanoo (timber attic ceiling,
  library under the folds).
- Student numbers differ (Arcam about 700, Mecanoo 900): left out.
- Access: Arcam lists it as publicly accessible; set to Public parts only and the text says
  little beyond ground floor and stairs is worth seeing. Mild inference, could be checked.

## Jonas (oost-ijburg-5)
- Sources: Orange Architects page (programme 190 + 83, name, zinc, diamond plan, shipbuilding
  trusses, canyon, forest patio, roof beach, Douglas wood); Arcam (canyon publicly
  accessible, the Rots tribune, AAP 2023 nomination, address, community manager);
  NH Nieuws 12 May 2023 (BNA Beste Gebouw van het Jaar 2023, jury chair Ed Nijpels, quote
  on sustainable, affordable, collective living).
- Not used: Archello/Architizer awards, "only the second BREEAM Outstanding residential
  building" (architect's claim only).

## LAB42 (oost-ijburg-10)
- Sources: Benthem Crouwel project page and Dutch press release (opening 22 Sept 2022,
  completion July 2022, Joost Vos, shelving-like steel frame, 1,800 m2 PV, campus route
  through the building, labs in the glass plinth, address Science Park 900); UvA campus news
  on the Nationale Staalprijs 2024 (reuse category, jury quote) and European Steel Design Award
  2025 (sustainability, Istanbul); LAB42 news on the Architectenweb honourable mention;
  Benthem Crouwel news on the BLT Built Design Award (Educational).
- Uncertain: years for Architectenweb (2023, from the news page date) and BLT (2023,
  announced Jan 2024). Public access on ordinary days is unclear (a summer notice says the
  building is for employees at weekends); set to At set times, citing open days (Science Day,
  Weekend of Science).

## De Nieuwe Meent (oost-ijburg-14)
- Sources: Arcam (pilot co-op, café and business space on the ground floor, 15 self-contained
  social rentals + 5 group homes = 40 homes, CLT and prefab timber frame, nests in façade,
  AAP 2026 nomination, "Openbaar toegankelijk: Nee"); Time to Access (co-founders, 2018 start,
  seven storeys, homes cannot be sold, energy positive); NH Nieuws/AT5 1 and 17 Feb 2023
  (near-bankruptcy, causes, crowdlending 450,000 euros, Van Dantzig "De gemeente is immers geen
  bank"); UU news (2018 tender).
- Rents (450 to 750 euros) are only on the architect's site: left out.
- How the 2023 funding gap was closed: no source found; text just says it was completed in
  2025 (Arcam, Time to Access).
- Access set to Public parts only because of the ground-floor café (Arcam), though Arcam
  marks the building itself as not open.

## Bakstayn (oost-ijburg-15)
- Scout line corrected: a CPO (collective private commission) of owner-occupied homes, not a
  co-op "association".
- Sources: Arcam (Amsterdam School, 18 homes over five floors, residents aged 25 to 71, public
  gallery, three gates, garden with pond, address); de Architect 18 Mar 2026 (completed August
  2025, average below 5,250 euros/m2, plinth/middle/crown, green glazed tiles, wooden frames);
  Time to Access (five initiating households, 2022 to 2025, sauna).
- Access: Outside only.

## AMST (oost-ijburg-18)
- Sources: Arcam (two blocks, 252 homes, 80% mid-rent, prefab, wooden shutters, colour matched
  to the station, roof gardens, rainwater); VenhoevenCS (25 housing types, shutters for sun and
  noise, Middenhuur Award at PROVADA, AAP 2024 nomination); MRP (Middenhuur Award 2022, Hakka
  inspiration as the developer's claim, Jumbo and other shops, owner Union Investment).
- Pin: between the Jumbo (Julianaplein 48) and McDonald's (Julianaplein 41) in OpenStreetMap;
  no single street number found for the blocks, so the address is given as Julianaplein,
  east side of Amstelstation. Worth a check on the ground.
- Not used: the "Mercado" food hall (Arcam): no evidence it is open.
- Amstelstation itself is already on the map (psbvek78th8qubtac4a3quwy).

## Photos
- Commons photos added for Hotel Jakarta (3) and AUC (2), titles from Commons search (not
  viewed). Commons search was rate-limited for the rest; no photos for Jonas, LAB42, De Nieuwe
  Meent, Bakstayn, AMST.

## Verification

Every source in the file was re-fetched with curl (all 200 except the LAB42 open-day page, now
404) and each claim in EN, NL and `arch` checked against it. Pins checked against PDOK
addresses: all within about 25 m of the address point. Validator 0 errors after the changes;
Dutch re-checked for 8-word runs against all fetched Dutch sources (one hit fixed); no em
dashes or spaced en dashes.

Changes:
- AUC: cut "rather than a lecture factory" (no source); now "Mecanoo set out to make it a home
  for an international community of students and teachers" (Mecanoo page). Cut "little to see
  beyond the ground floor and the stairs" (inference); access now attributed: Arcam's guide
  lists it as open to the public. Look-for "through the glass entrance, the stepped staircase"
  narrowed to "the transparent glass entrance" (can't confirm the stair is visible from outside).
  NL changed to match, and the "helft van de studenten" sentence reworded (8-word run from Arcam).
- Jonas: summary "canyon lined with Douglas fir" narrowed to "timber-lined" (Orange says
  Douglas is used inside and out, not that the canyon is lined with it); NL likewise.
- LAB42: open-day source (lab42.uva.nl/visit/open-day-weekend-of-science) is dead; replaced
  with the Informatics Institute's 2024 Science Day page, which lists activities at LAB42 as part
  of the Weekend of Science. Access sentence narrowed to "has opened to visitors on the Science
  Park's Science Day" (EN and NL). Award years now sourced: Architectenweb Awards 2023 (UTwente
  news, ceremony 8 Nov 2023) and BLT Built Design Awards 2023 (bltawards.com winner page);
  both added to sources.
- De Nieuwe Meent: summary "nearly went bankrupt" narrowed to "faced bankruptcy" (NH Nieuws:
  "Faillissement dreigt"). Café confirmed by Arcam; access left as Public parts only.
- Bakstayn: "moved in after completion" narrowed to "the building was completed in August 2025"
  (de Architect); "public gallery" changed to "open gallery" to match the NL and avoid implying
  public access (Arcam: building not publicly accessible).
- AMST: cut "1939" for the station (not in any source used). Colour match attributed to the
  architects (VenhoevenCS says the concrete frame echoes the station; Arcam says the shutters),
  EN and NL. "Shutters residents slide" narrowed to "move by hand" / "zelf bedienen" (sources
  say only manually movable). Added 4 Commons photos: "2023 Amst, Asd (1)" to "(4)" (category
  Amst (Amsterdam), described as VenhoevenCS's AMST on Julianaplein, viewed).
- Photos checked: Hotel Jakarta's three files are in Javakade 766 / Java-eiland categories with
  matching descriptions and coordinates; AUC's two are in Category:Amsterdam University College.
  Kept all five. No usable Commons photos for Jonas (only a building-pit photo; the Krijn
  Taconiskade street photos don't clearly show it), LAB42 (only construction photos, 2021),
  De Nieuwe Meent or Bakstayn.
- Checked and kept: Hotel Jakarta AAP 2019 as public prize (Arcam: "Winnaar publieksjury");
  AUC Gouden AAP 2013; Jonas BNA 2023 and AAP 2023 nomination; LAB42 steel awards; Nieuwe Meent
  and Bakstayn AAP 2026 nominations; AMST Middenhuur Award 2022 and AAP 2024 nomination.
