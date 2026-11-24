# new-zuid-zuidas-1: notes

Seven picks, all drafted in `places/new-zuid-zuidas-1.yaml` (validator: 0 errors). None was on
the map already: checked with `dc places sights --all --q` (nhow, RAI, Edge, Deloitte, Rechtbank,
Parnassus, Foster, Ernst, Ito, Mahler, Rock, Egeraat, Stepstone, Lieven) and by listing every
place in the Zuidas bounding box. Related places already live, referred to in the texts:
Love or Generosity (ya228xixcy1ix41lum9sj8en), Parnassusweg 220 old cantonal court
(yib94qxhqz96lekq45334qhg), RAI Europahal and Het Signaal (t0b7sx35skavbvwqt4vj83ny),
Brittenpassage (swg0rz8ku7w8q9xy5ac0hv3c).

Dutch texts written from the Dutch sources (Zuidas NL pages, nl.wikipedia, Rechtspraak,
Accountant.nl, Advocatie, LEVS NL, NOS). The scratchpad nlcheck.py named in the brief does not
exist in this session; I ran my own 8-word overlap check of EN and NL against every fetched
source text and fixed all hits (only proper-name lists remained, then reworded too).

## Corrections to the scout lines

- **nhow (zuid-zuidas-5):** "won in competition against ten others" not found in anything I
  could read (only a search-engine summary); left out. "Largest hotel in the Benelux" is
  attributed (OMA, Zuidas, the RAI per nl.wikipedia). Height 91 m, opened January 2020.
- **The Edge (-7):** BREEAM's own case study shows 98.3%, not 98.36%; "world's most sustainable /
  smartest" left out, only PLP's attributed claim of the highest BREEAM office score at the time.
  Completed: delivered end 2014 (Accountant.nl), official opening May 2015; ArchDaily/PLP give
  2015. I used 2014. The atrium faces north to the A10 and railway (BREEAM, nl.wikipedia).
- **Rechtbank (-8):** AAP 2021 nomination appears only in KAAN news posts, which I could not open
  (404 in curl and browser, no archive copy); left out. Used instead the BNA Beste Gebouw van het
  Jaar 2022 category win (Identity and Iconic Value), confirmed by NOS. EU Mies 2022 nomination
  likewise only via search summary; left out. Floor area differs by source (KAAN almost 50,000,
  Zuidas 47,250 excl. parking, Rechtspraak 60,200 incl. parking); not used. "Calm stone block"
  not used: the sources stress transparency and large windows.
- **Cross Towers (-9):** AAP 2009 nomination not confirmed anywhere (a Bright list of 2009
  nominees does not include it); left out. 87 m and the Foster/Dezeen facts confirmed. Storeys
  differ (24 Foster/Dezeen, 23 Edge/Accountant); not used. "Cross Towers" as an official name
  is in nl.wikipedia and used by owner Edge and EY; the nickname story is Wikipedia-only, so not
  told.
- **Ito Tower (-10):** "a Japanese master's only Dutch building" not sourced; left out. Height
  about 100 m (architectuur.org, nl.wikipedia). Storeys differ (Toyo Ito office: 24 + 2
  basements; Wikipedia 25; architectuur.org 23); not used. **ZZDP Architecten** as co-architect
  is only in Wikipedia (citing CTBUH, which I did not read), so `designer` is Toyo Ito &
  Associates alone. The Wikipedia sale price (over 133.5 million euros, via Vastgoedmarkt PDF)
  left out; only "a German fund bought it in 2002, Union Investment since 2014".
- **The Rock (-11):** the "NRC Next 2010 ugliest building in the Netherlands" nomination could
  not be found. What is sourced is a September 2010 Advocatie.nl reader poll: 186 of 439 votes as
  ugliest of four Zuidas law-firm offices; used, attributed. Renovation is **not** finished:
  JLL (3 March 2026) says completion end 2026. Stair prize (EeStairs Mooiste Trap van het Jaar)
  per Advocatie March 2011; Wikipedia says 2012, I followed Advocatie.
- **Stepstone (-17):** confirmed 80 m, 216 homes (Zuidas EN blog says 206, LEVS and Zuidas NL
  say 216), Zuiderkerkprijs 2024, AAP 2025 nominee (LEVS). "First social-housing tower on the
  Zuidas" is LEVS's claim, attributed; Zuidas says "largest social housing project so far".
  Completed March 2024.

## Uncertain

- **Stepstone address:** Zuidas says it lies on the Gustav Mahlerlaan; OSM and PDOK put the
  building (named Stepstone in OSM) on the Florence Pricehof, 1081 LA. No house number found.
  Address written as "Gustav Mahlerlaan, at the Florence Pricehof"; pin is the OSM building.
- **Ito Tower address:** no source gives a house number; "Gustav Mahlerplein (west side)" per
  architectuur.org; pin from Wikipedia coordinates, which match Gustav Mahlerplein 50 in OSM.
- **nhow access:** Selva restaurant takes table bookings online and the bars are listed for
  everyone, but the hotel does not state outright that non-guests are welcome.
- **The Edge "visible from trains":** my reading of the site (atrium faces the A10 and the
  railway in its median); no source says it in those words.
- **Photos** chosen by Commons file and category names (the Commons API was rate-limiting); not
  viewed. Stepstone has no Commons photo.

## Sources read in the BrowserOS browser (curl blocked or wrong URL)

OMA project list (found /projects/rai-nhow-hotel, then curl), KAAN work page, Foster + Partners
news page, ArchDaily The Rock, Rechtspraak (building, attend a hearing, visitor information),
nhow eat and drink, Edge.tech Cross Towers lease, Commons category pages. Tabs closed.

## Verification

Fact-check per CHECK-BRIEF.md. All cited sources re-fetched with curl; Foster + Partners
(groundbreaking news) and nhow eat-drink read in BrowserOS (curl 403), tab closed. Commons file
pages checked through the API (title, description, categories, coordinates); all 16 existing
photos show their building. Pins checked against PDOK addresses: all within about 30 m.
Validator 0 errors; 8-word overlap check of all NL text against every fetched source: no hits.

Cut or narrowed:
- **The Edge:** "and from passing trains" (EN) and "ook vanuit de trein" (NL) cut: no source
  says it. "towards the A10 and the railway" narrowed to "towards the A10" (BREEAM mentions
  only the motorway). NL "aan die kant loopt het gebouw schuin af" cut (Wikipedia only, and not
  in the EN). "several Amsterdam buildings" narrowed to "several offices" (PLP says only
  "multiple offices").
- **Ito Tower:** "built between September 2002 and June 2005" (Wikipedia only) replaced by the
  architect's own project period, September 2000 to June 2005. Developers ING Real Estate and
  Fortis (Wikipedia only) cut; client G&S Vastgoed kept (architectuur.org and Wikipedia).
  "Angular block with openings cut into it" and "four voids" (Wikipedia only) narrowed to
  "several voids" (architectuur.org); the "cut-outs" Look-for line and summary phrase cut.
  Ownership sentence (German fund 2002, Union Investment 2014; Wikipedia only) cut.
  "Blocks named after composers" cut (unsourced). Note: architectuur.org lists ZZDP as the
  architects' firm, so ZZDP is not Wikipedia-only as the writer thought; `designer` left
  unchanged (no new fact added).
- **Rechtbank:** "about 1,000 court staff and 200 judges" corrected to "more than 1,000 staff,
  200 of them judges" (ArchDaily); NL likewise.
- **Cross Towers:** "recognised from the motorway" narrowed to "picked out on the drive into
  the city" (Foster's wording), EN and NL.
- **The Rock:** "heavier at the top" narrowed to "looks heavier at the top" (Zuidas), EN and NL.
- **nhow:** "leftover triangle" / "restkavel" narrowed to "triangle of land" (Zuidas says only
  "the triangle between"). NL "volgens de RAI en Zuidas" changed to "volgens OMA en Zuidas" to
  match the EN and the sources read.

Other fixes:
- nhow: turned middle block now also supported by Dezeen 2015 ("arranged at different
  angles"); January 2020 opening by the Zuidas article of 12 January 2020; both added to
  sources. Access (Selva and Sonora on the 24th floor, Moana bar on the first floor) and Zuidas
  ("accessible to hotel guests and visitors") confirmed.
- EN/NL parity: nhow NL monument sentence replaced by the De Graaf column fact the EN gives;
  Rechtbank NL "since 1999 / renovation no option" replaced by the EN's "outgrown its buildings
  of 1975 and the late 1980s" (live place yib94qxhqz96lekq45334qhg).
- Stepstone: address set to Gustav Mahlerlaan 1528 (PDOK, 10 m from the pin; the Commons file
  gives 1528-1960). Added photo commons:File:Stepstone Amsterdam.jpg (viewed: the tower, LEVS
  named in the description).
- The Rock completion: ArchDaily and architectuur.org say 2009, Zuidas says 2010; 2009 kept.
