# new-centrum-ij-1: notes

Slice keys: centrum-ij-9, -10, -12, -18, -19, -21, -24, -26, -27. All nine drafted in
`research/contemporary/places/new-centrum-ij-1.yaml` (validator: 0 errors). Dutch text written
fresh; an 8-word overlap check against every fetched source text (NL and EN) gives 0 hits.
The nlcheck.py script named in the brief was not present in the scratchpad, so I ran my own
overlap check instead.

Duplicate check (`dc places sights --all --q`): IJhal, Conservatorium, Booking, IJdock,
Mövenpick, Passenger/Passagiers, Rabozaal, Zoku, Metropool, olifant/elephant, plus Melkweg,
Artis, Centraal, Muziekgebouw, Piet Heinkade, Oosterdokskade, De Ruijterkade. None of the nine
buildings is on the map. Related live places (not the same building, no override needed):
- Melkweg `cc3fb71jiphd5owntcb99vhz`: its text mentions the Rabozaal "hanging between the two
  buildings" and lists it under Look for. The Rabozaal is a separate 2009 building, drafted
  here; the coordinator may want to keep both.
- Paleis van Justitie (Prinsengracht) `c9uelqpo96tmmusn277vwa4z`: the court's old home; my
  IJdock text refers to it ("it has its own place").
- Rijkspostspaarbank (Conservatorium hotel) `i0zr1fckm1jyhx7y8h6496wj`: the conservatory's
  old home; referred to.
- Artis `l6wvo37kw90xx0hzq5ir6pqk`, Arriving at Centraal Station `tlp9ba6wgk9zvadb07yuunha`,
  OBA Oosterdok `i49qa98lxns1x90vlsxrpmxf`, Muziek en Vreugde putti `wxber8zrzgrpjhhbuzph0e00`.

## Corrections to the scout lines
- Zoku (-26): the Metropool is from **1964** (Arcam; Wikidata P571 1960/1964), not the 1970s.
  Architect Arthur Staal.
- Conservatorium (-10): Arcam says "Amsterdam Blue Note"; the school and nl.wikipedia say
  **Amsterdam Blue Dock**. Used Blue Dock. "Five concert halls stacked in colour-coded floors"
  is not quite the sources: Arcam has five halls in the lowest five storeys and signal colours
  for the practice rooms; the CvA lists the halls by name. I named three and gave no count.
- Booking (-12): Club 11 was the restaurant and nightclub on top of the old Post CS (until
  2008, nl.wikipedia); Arcam says a space above the new flats is named after it. Could not
  confirm that space exists or is open, so the text only mentions the old club. Arcam gives
  63,500 m2, Dezeen and Booking.com 65,000 m2: used 65,000. Arcam dates completion 2022,
  Booking.com's official opening was 28 June 2023: `completed: 2022`, text says opened June 2023.
  Address: Arcam says Oosterdoksstraat 158; Booking.com's own address and OSM say
  Oosterdokskade 163, used that.
- IJdock / Paleis van Justitie (-18): no source for the "porthole windows", dropped. The hotel
  is by Bakers Architecten with Ben Loerakker (ArchDaily, nl.wikipedia), not the masterplan
  architects; the "15-metre-wide glass hotel" is not mentioned. I made the court the subject,
  with IJdock as context. Arcam's V-shaped "Keizersgrachtsnede" is in the "yellow" neighbouring
  block (likely Zeinstra van Gelderen's housing, not stated by Arcam, so not named).
- Mövenpick (-19): Arcam says the 400 rooms are on the "6th to 9th" floors, which cannot be
  right for a 65 m tower (Tourmag 2006: 408 rooms on 20 floors; Skyscraper Center: 19 floors).
  I gave 408 rooms (Tourmag) and left out floor numbers. Arcam says "about 65 metres".
- Rabozaal (-24): the scout's "foyer that hangs over the Lijnbaansgracht" is nl.wikipedia;
  Arcam says the foyer cantilevers over the
  **Melkweg**, with a glass corridor along the Lijnbaansgracht. Followed Arcam. Archello gives
  the stage at 14 m above the street, partly above the Melkweg concert hall.
- Elephant house (-27): it is an outdoor enclosure plus a sunken visitor bridge, not a house.

## Sources per place
- **IJhal**: Wiel Arets Architects project page and Archinect release (mirrors, terrazzo,
  shops south / restaurants north, ivy stairwells, 1889 framing); WAA news Feb 2014 (start of
  construction, from the release title and date); ArchDaily (2010 competition); Arcam (NS Stations,
  2017, black-and-white signage, AAP "Genomineerd, Winnaar publieksjury, 2018"); NH Nieuws
  12 April 2018 (public jury prize, "luxe en grandeur"). Pin: OSM way 451398579 "IJ-hal".
- **Conservatorium**: Arcam (engawa against rail noise, three layers, prismatic film on the
  sawtooth scales, AAP nom. 2009); CvA building page (21 April 2008, Frits van Dongen, hall names
  and 400 seats, Peutz, floors); CvA agenda (lunch concerts, Blue Dock concerts, Nov 2026);
  nl.wikipedia (Van Baerlestraat history, hotel). Pin from Nominatim (Oosterdokskade 151).
- **Booking.com City Campus**: Arcam (Post CS 1968, Merkelbach and Elling, 23 m cantilever due to
  the planning envelope, 14 locations, 41 flats, health principle, no gym/pool, BREEAM
  Excellent, no public access to offices); Dezeen 2023 (2015 invited competition, 65,000 m2,
  atrium, glazed emergency stairs, HofmanDujardin interiors); Booking.com press release
  28 June 2023 (opening, BREEAM, A Beautiful Mess / Refugee Company); A Beautiful Mess site
  (open, ground floor, Light Festival dinners Dec 2026 to Jan 2027); nl.wikipedia Post CS
  (Club 11 until 2008, Stedelijk branch, demolition). UNStudio's own project page could not be
  found or read (curl got an empty shell); no architect link, Arcam first instead.
- **Paleis van Justitie on IJdock**: Arcam (masterplan, two buildings, footbridge, green
  cut-outs, independence reading, marble and walnut, Keizersgracht cut, AAP nom. 2013);
  e-architect quoting Claus en Kaan's definitive design (five materials in bands, abstract and
  light yet strong and timeless); rechtspraak.nl (from 1836 on the Prinsengracht, moved April
  2013, IJdok 20, open weekdays 8:30 to 17:00, most hearings public, ID, bodebalie);
  nl.wikipedia IJDock (peninsula from 2008, sightlines). Pin: Nominatim "Gerechtshof
  Amsterdam, IJdok 20".
- **Mövenpick**: Arcam (Felix Claus and Jaap Graber, plinth contents, lobby as hinge, banded
  façade, floors unreadable, AAP nom. 2008); Tourmag 4 Sept 2006 (opening, 408 rooms); Accor
  site (still Mövenpick; restaurant DOCK 11 and lobby lounge bar, written as for friends and
  colleagues, hence "Public parts only").
- **Passenger Terminal Amsterdam**: Arcam (one of the first Oostelijke Handelskade projects,
  24 m, glass, wave roof, land-water hub, events, HOK / Larry Malcic, client port authority
  and NS Stations); nl.wikipedia (opened 2000, one berth since 2024, 100-call cap); NOS 2024
  (cap of 100 from 2026, was 190, one berth, shore power from 2027); NH Nieuws / AT5 21 Jan
  2026 (Van Buren: stop sea cruise from 2035, Veemkade terminal closes, Coenhaven 85 million
  too dear, ships don't fit under the planned Westbrug, decision left to next college).
  HOK's project page returns 404.
- **Rabozaal**: Arcam (brief, Melkweg partnership, glass base, 8 m corridor, 15 m foyer over
  the Melkweg, orange corrugated aluminium and perforated steel, exposed steel, wooden floor,
  glass wall to the old fly tower, rijksmonument, architects Jim Klinkhamer and Maaike Westinga,
  AAP nom. 2010); Archello (14 m stage height over the Melkweg concert hall, glass back wall);
  ITA (opening glass back wall, 2007 design wish, venue now ITA); nl.wikipedia Stadsschouwburg
  (2009, 40 million euros, Jim Klinkhamer). Jonkman Klinkhamer's own site did not load.
- **Zoku**: Arcam (Arthur Staal, 1964, wederopbouw, Gispen then city departments, name from the
  metro, saved from vacancy/demolition, laptop nomads, lofts 24 to 46 m2, exterior kept,
  overhanging glass bays on the sixth/top floor turned into hall and living room with
  reception, Concrete and Mulderblauw, AAP nom. 2017); Zoku site (rooftop restaurant, bar,
  coworking open to locals; tunnel through the building); Zoku press release 29 April 2025
  (rooftop renovated with Concrete).
- **Artis elephant enclosure**: Arcam (enclosure by Thijs de Zeeuw, pool linked to the
  Entrepotdok, bubbling water, random feeding hatches, rocks, mud pool, rubbing tree, IJbouw in
  18 months, 55 m bridge by Dingeman Deijs, clinkers, Corten rim, water over the edge, hidden
  barrier 3 m, AAP nom. 2018); NH Nieuws Sept 2017 (four times the old size, part of the car
  park, roofdierengalerij demolished); NH Nieuws 25 Dec 2025 and NOS (calf born Christmas Eve
  2025 to matriarch Thong Thai); Artis Nov 2025 (bull left, herd led by the oldest cow). Pin:
  OSM node "Aziatische olifant".

## Uncertain / for the coordinator
- **Heritage of the Metropool**: Arcam calls it "het monumentale gebouw", but I found no
  municipal or national monument listing (Wikidata has none either). No `heritage_status` set.
- **Arcam's metro claim** (Zoku): the name "inspired by the metro line laid under the
  Weesperstraat in the same period" is attributed to Arcam in the text; the Oostlijn opened
  in the 1970s, so "same period" is loose. Kept as Arcam's statement.
- **PTA future**: whether the college formed after the March 2026 elections has taken the final
  2035 decision: I found no report of it. The text says the decision was left to the next city
  government. Worth re-checking; a candidate for `outlook` on the live place later.
- **Rabozaal pin**: put on the Lijnbaansgracht between the Melkweg and the theatre (Nominatim
  "Lijnbaansgracht 238"); OSM has no Rabozaal object. Address field uses Leidseplein 26 (Arcam).
  The name is still Rabozaal on ITA's site (Nov 2026).
- **Mövenpick and PTA** lie in stadsdeel Oost per OSM (Oostelijk Havengebied), though Arcam
  lists them under Centrum.
- **Conservatorium access**: the agenda lists concerts at the CvA itself without prices and
  says outside venues usually charge; I did not claim the house concerts are free.
- Elephant herd numbers change (a second calf was due early 2026); text names only Thong Thai
  and her 2025 calf.

## Photos
- No photos: **IJhal** (the only Commons hit, "20180120 CS08.jpg", shows the metro hall under it)
  and **Artis elephant enclosure** (Commons has only 1960s-70s Nationaal Archief photos of the
  old enclosure).
- Rabozaal photos are interior views of the Nieuwe Foyer; no exterior photo found on Commons.
- All others: Commons, CC BY / CC BY-SA, descriptions checked to show the right building.

## Verification

Every claim in EN and NL re-checked against its source (curl; BrowserOS for the architect pages,
Commons file pages and a news search). Validator: 0 errors. Dutch: 8-word overlap check against
all fetched sources (now including TenBrasWestinga and de Architect): 0 hits. No em dashes, no
hype words.

Changes:
- **IJhal**: Arcam says only the *restaurants'* logos and signs are black and white; the text and
  Look for said "shops and restaurants". Narrowed (EN and NL). NL: "aan de andere kant van een
  muur" (not in any source) replaced by the sourced "afgesneden" (cut off) in 1889. Pin checked
  against OSM way 451398579 (inside the hall). Still no photo: Commons has none of the hall.
- **Booking.com City Campus**: UNStudio's own project page found and read in BrowserOS
  (unstudio.com/projects/booking-com-city-campus/: 2015-2023, client BPD, 6,500 staff, health,
  1,500 solar panels); added as first link and source. Floor area cut: UNStudio gives 72,500 m2
  total, Arcam 63,500, Dezeen/Booking.com 65,000. "Artists, a museum and Club 11 on the top
  floor" rested on Wikipedia alone; narrowed to Club 11 (Arcam). "Juts 23 metres out over the
  railway" narrowed to Arcam's "on the railway side" (summary, Look for, NL). Summary "square
  tower" corrected to "rectangular" (Arcam).
- **Paleis van Justitie**: "from 2008 on" (Wikipedia only) cut, EN and NL. `completed` 2013 ->
  2012 (Arcam: Realisatie 2012; the court moved in April 2013, as the text says).
- **Mövenpick**: "September 2006" narrowed to 2006 (Tourmag of 4 Sept 2006 only says it had
  just opened).
- **Passenger Terminal**: HOK's project page is a 404 in BrowserOS too, with no Wayback copy;
  HOK's Issuu brochure has no readable text. No architect link possible. "American firm" cut
  (not in any source read). NOS 2024 reports the 100-call cap and shore power as plans
  ("wil", "moeten vanaf 2027"), only the single berth as immediate: narrowed to "announced"
  (EN and NL). "The largest cruise ships" -> "large cruise ships" (NH: "de grote
  cruiseschepen"); "alderman for the port" -> "alderman responsible for shipping" (Lucht- en
  zeevaart). No report found (search Nov 2026) of a final 2035 decision by the new college; text
  stands.
- **Rabozaal**: Jonkman Klinkhamer's site is dead (parked domain); Wayback shows the firm was
  renamed TenBrasWestinga in June 2013. Its project page (tenbraswestinga.nl/project/
  stadsschouwburg-amsterdam-2/, architects Jim Klinkhamer, Roel ten Bras, Maaike Westinga) and
  de Architect's project article read and added as first and third links. Corrections:
  "40 million euros" and "studios" cut (Wikipedia only; de Architect gives a building cost of
  27 million excl. VAT for the hall); replaced with Arcam's Marnixstraat houses turned into
  offices. Stage height cut: Archello says 14 m, de Architect 13 m; now "high above the
  street". The architects say the volume cantilevers over the Lijnbaansgracht, de Architect
  "over the Melkweg and the Lijnbaansgracht", Arcam says the foyer cantilevers over the Melkweg:
  text now says the building cantilevers over both, with the corridor (8 m) and foyer (15 m)
  per Arcam. "Since 2018 ITA" had no source read; narrowed to "today". Summary "built" ->
  "designed". **Pin fixed**: the old pin (Lijnbaansgracht 238 address point) lay across the
  canal in a 1980 BAG building on the Korte Leidsedwarsstraat side. Moved to 52.364495,
  4.881708, inside the Stadsschouwburg BAG building (0363100012168738, Leidseplein 26, as Arcam
  gives) on the hall wing between the old theatre and the Melkweg, checked on the PDOK aerial
  photo with BAG outlines. Photos: two Commons exterior views added (category "Rabozaal
  (Stadsschouwburg-Melkweg)", CC BY-SA 4.0), before the two foyer interiors.
- **Artis elephant enclosure**: summary "a steel rim away from swimming elephants" was loose
  (the hidden barrier keeps them 3 m off); now "where a Corten rim holds back the pool". Photo
  added: "Artis 20180519 132610 - Elephas maximus.jpg" (May 2018, CC BY-SA 4.0), which shows
  the new yard with its rock outcrops; other Commons elephant photos are close-ups or the old
  enclosure.
- Conservatorium, Zoku: all claims confirmed, no change.
- Photos checked on their file pages (description, categories, coordinates): all existing ones
  show the right building. "Conservatorium van Amsterdam (2017).jpg" shows the conservatory
  together with the OBA (in both categories); kept.
