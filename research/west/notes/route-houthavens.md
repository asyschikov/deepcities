# Route: Houthavens, an architecture walk

File: `scripts/data/amsterdam-sights-route-walk-houthavens.json` (map `sights`), walk, A to B,
not a loop. Drafted 2026-11-27. Not created on the site.

Scope (user, via coordinator): only the Houthavens new-build area (islands, Blok 0 on the
Haparandaweg, Houthavenpark, Pontsteiger, quays). Stenen Hoofd, Silodam and Stenen Silo
dropped as stops (not mentioned either). Building stops are ad-hoc (user: too many for the main
map). Lariks (i7lizcladsb9qhur9y4ed5iw) is a pool place but NOT on sights
(`dc places sights --q Lariks` returns nothing), so it is an ad-hoc stop with its pool pin.

Start: Pontsteiger ferry landing (F7 from NDSM; bus 48 at Houtmankade). End: Archangelweg,
bus 48 stop Haparandaweg (stop names from findit/Moovit listings and OSM stop nodes; check
on 9292 before publishing). Bus 22 at Spaarndammerstraat (nl.wikipedia, existing routes).

## Stops, pins, sources

| # | Stop | Type | Pin | Sources |
|---|------|------|-----|---------|
| 1 | Pontsteiger | place hovzau2tsb28z8w98v918cau | place pin | Arcam Pontsteiger; amsterdam.nl afgerond (ferry back 2018, 2019) |
| 2 | The Houthavens islands (Gevlebrug) | place dl4uqetyg0wglcn7eqaaku6s | place pin | amsterdam.nl deelproject Bruggen |
| 3 | Karlskrona: Meranti and its mirror | ad-hoc | 52.392000, 4.883900 (square W of Gevlebrug, between the two blocks; PDOK aerial + BAG Karlskrona-eiland 2/125) | architectenweb 27 Nov 2023 + 24 Sep 2026 (Meranti) + Sep 2026 (Hoogeveen block); amsterdam.nl Karlskrona (dates, theme) |
| 4 | Libau-eiland | ad-hoc | 52.392325, 4.883099 (main street between Lübeckbrug and Stralsundbrug) | nieuwbouw-houthaven.nl (BPD) 29 Apr 2022 interview Attika; denijs.nl Libau (builder); amsterdam.nl Libau |
| 5 | Head of Memeleiland | ad-hoc | 52.393720, 4.884030 (end of green strip at the head; PDOK aerial; Mahonie BAG 184-314) | architectenweb 4 May 2021 (Mahonie); amsterdamwoont.nl De Mahonie; amsterdam.nl Memeleiland + Waterkavels |
| 6 | Waterplein (BOAT&CO hotel) | place b7b1k9r5nsngy3ao6tori847 | place pin | architectenweb 2 Sep 2016 (Kollhoff & Pols competition); amsterdam.nl afgerond |
| 7 | Zen Mast | place kl3gs2q247usf6h3jlnidnko | place pin | amsterdam.nl afgerond (aanvaarbescherming) |
| 8 | Lariks | ad-hoc | 52.393430, 4.880481 (pool pin) | Arcam Lariks; pool place text (four sides differ) |
| 9 | Brede school and LIFE | ad-hoc | 52.392760, 4.878850 (Revaleiland 1 / 6A, BAG) | rohmer.nl project page; architectenweb project Houthaven LIFE (Sweco); architectenweb 5 Feb 2018 |
| 10 | Air cells | place ck1sxc2rr0pvkvf3uue1e6ac | place pin | amsterdam.nl afgerond (Houthavenpark); architectenweb 5 Feb 2018 + 28 Jan 2020 |
| 11 | The Future and the Stoere Jongens | ad-hoc | 52.394708, 4.879565 (BAG Wiborgeiland 183-191) | amsterdam.nl afgerond; bouwbedrijftuin.nl kavel 1c; AT5 17 May 2019; stedenbouw.nl 17 May 2021 |
| 12 | Afzelia | ad-hoc | 52.394960, 4.879990 (BAG Wiborgeiland 201-281, head) | amsterdamwoont.nl Afzelia; amsterdam.nl afgerond |
| 13 | Superlofts | ad-hoc | 52.395017, 4.878570 (BAG Houthavenkade 65) | Arcam Superlofts Houthaven |
| 14 | PUUUR Blok and Blok 0 | ad-hoc | 52.394789, 4.877300 (BAG Haparandaweg 748) | Arcam PUUUR Blok; architectenweb 20 Dec 2013; architectenweb 11 Jan 2016 (IJ4you) |
| 15 | Parkblok | ad-hoc | 52.394278, 4.875639 (BAG Haparandaweg 582) | Arcam Parkblok Houthaven |
| 16 | Het 4e Gymnasium and Domūs | ad-hoc | 52.394324, 4.872864 (BAG Archangelweg 4) | Arcam Het 4e Gymnasium; architectenweb 10 Oct 2016; architectenweb 7 Dec 2020 (Domūs) |

Pins: BAG address points via PDOK Locatieserver, checked against PDOK aerial (Actueel_orthoHR)
and OSM. Square and street pins (3, 4, 5) read off the aerial and OSM at z19; worth a glance on
the city's panoramas before publishing.

## Distances (haversine, straight line)

194, 51, 63, 161, 156, 52, 250, 163, 26, 267, 40, 97, 90, 126, 188 m.
Total 1.92 km straight line; on foot about 2.7 km, because the walk goes out to the heads of
the Memeleiland and Revaleiland and back (islands are not linked at their heads). Longest leg
267 m (Air cells to The Future). Under the brief's 3 km, as the user allowed for this area.

## Claims dropped or softened

- Counts that disagree between sources left out: Mahonie 195 (architectenweb) vs 65
  (amsterdamwoont); Lariks 263 (city) vs 102 (architectenweb); Libau 7 buildings (builder) vs
  19 (listings); Wiborg 86 (city) vs 87 (stedenbouw.nl).
- Pontsteiger height (82, 92, "about 90") not given; "about the height of the other towers".
- The Future: EPC -1.4 "never achieved in Europe" and "most sustainable in the Benelux" are
  developer/AT5 intro claims: not used. Used the city's "more energy than they use".
- Wiborg as "the only project on its own island" (stedenbouw.nl): contradicts the city. Dropped.
- Wiborg architect Neelu Boparai: only broker brochures. Not named.
- Hoogeveen block = Ymere's De Sfinx: likely (only two blocks on Karlskrona per the city) but no
  source says so; text says "the Hoogeveen Architecten block" only.
- De Spreeuwen (69 social rent, water steps): only the city's one line, no design story. No stop.
- Narva-eiland (Vrijbuiters) and Stettineiland (130 family houses): no design story found;
  named in leg directions only.
- Entreegebouw: Neutelings Riedijk timber design exists, but city says no date and the exact
  plot is unclear. Left out.
- AZC (COA, due 2027) between Haparandaweg and Houthavenweg: not an architecture story yet.
- Domūs "Interieur van het Jaar 2023": headline only, not read. Not used.
- Parool "Langs Deftige Dames en Stoere Jongens" (2022) paywalled; not used. de Architect,
  Archined: nothing readable found. Arcam DIY Houthaven tour page is gone (redirects home).
- Kollhoff's own site timed out; hotel facts come from architectenweb 2016 (competition text,
  quotes from Alexander Pols). The built hotel may differ in detail from the 2016 design.

## Source log (raw, as read)

- amsterdam.nl/projecten/houthaven/deelproject/afgerond/ (BrowserOS, 2026-11-27): Houthavenpark
  on the Spaarndammertunnel (800 m, Uitgeeststraat to Bontekoestraat), path along the whole park
  from Archangelweg to Pontsteiger, a bench of 4 parts, 170 m long, on the south edge.
  Narva 'Vrijbuiters', 254 homes 2018-2021. Pontsteiger: ferry back since 2018, 318 flats, 2019.
  Revaleiland: waterplein; LIFE (39 Habion social rent, home for 48 Cordaan clients, 2020);
  Lariks 263 semi-independent social rent, 2023; Hotel BOAT&CO "in de stijl van de Amsterdamse
  School", 82 hotel apartments, 2019. Stettineiland: 130 family houses of 4 or 5 storeys,
  done early 2021. Wiborgeiland 'Stoere Jongens' = canal warehouses; De Spreeuwen 69 social
  rent, public square with waterstoep (steps to water) and jetty, 2018; Stoere Jongens 86
  owner-occupied 2020; The Future 17 flats smallest plot, energy-positive, 2018; Afzelia 41
  social rent for families on the head of Wiborg, 2021. Houthaven West: Domus Living 235 small
  flats (Synchroon); Blok 0 lived in since 2016, 9 plots, about 250 homes; Parkblok 130 homes
  in 9 buildings round a shared garden; Kopblok 102 homes in 4 buildings plus quay houses;
  4e Gymnasium moved in 2016, colourful, central hall, double sports hall on top floor open to
  the neighbourhood after school, film room.
- amsterdam.nl deelproject pages: Bruggen (15 bridges, 10 for all traffic, 5 pedestrian; new
  bridges inspired by Amsterdam School: uneven lines, high and low piers, steps to the water,
  steps not level so water slides off; last bridge Wisbybrug 2024; Gevlebrug placed 2019, open
  early 2020; at Centraal until 2000). Karlskrona: Rode Rondingen, De Sfinx (Ymere, 63) done
  Sept 2025, Meranti (Lieven de Key, 80) done March 2026. Libau: BPD 116 homes, 'Timmerlieden',
  89 in 2023, 27 in April 2026. Memel: 'Deftige dames', Mahonie (De Key, 195), De Zusjes
  (Ymere, 83), last spring 2024; 4 water villas at the head, built elsewhere and floated in;
  2 there, no. 4 end July 2026, no. 3 Feb 2027. Waterkavels: self-build, max 3 layers, owners
  must live there 5 years. Entreegebouw: "welkomstpoort", mixed use, date unknown. AZC: COA,
  500 people, 64 flats, between Haparandaweg and Houthavenweg, built within the
  beeldkwaliteitplan, convertible to flats later; due early 2027.
- Arcam PUUUR Blok: Atelier PUUUR with Vink Bouw; Blok 0 built by six building groups;
  residents shaped homes with architect, "als Tetrisblokken"; climate neutral, studios, flats,
  two town houses, shared roof terrace; Zuiderkerkprijs 2015; Haparandaweg 748.
- Arcam Superlofts Houthaven: de Architekten Cie. + Marc Koehler Architects, 2016; lofts 6 m
  high, residents decide layout within fixed spatial and financial frame; Houthavenkade lots in
  three parts: low on the kade, middle parking + roof gardens, tall behind; Houthavenkade 65.
- Arcam Pontsteiger: 2007 city competition for an "iconic" building at the ferry pier in use
  since the 1950s; in the water, not on it; max allowed 145 m, they chose about 90 to match IJ
  high-rise; chair shape: many homes low and high, few in the slim middle (middle floors least
  popular); lifted 7 m, square under it by Hanneke Kijne (Hosper); steel bridge part from 60 m
  with 8 floors, owner-occupied only; Tichelaar Makkum glaze, six tints; design 2007-09, crisis,
  redesigned 2014.
- Arcam Lariks (M3H 2023), see place text; Friends: 3 starters share, rent 253.
- Arcam Het 4e Gymnasium: Paul de Ruiter Architects (Paul de Ruiter, Noud Paes) 2016; temporary
  school by hvdn (now Studioninedots) built in 2008 within a year; 800 pupils, "entree" of the
  district; facade of yellow, orange, red granules (korrels); three zones, top floor aluminium
  with two sports halls and roof terrace; atrium usable as theatre; Archangelweg 4.
- Arcam Parkblok Houthaven: Studioninedots 2018, Synchroon; 130 homes, 38 types in nine
  volumes; tall volume on Haparandaweg as sound buffer, stepping down to the park; pentagonal;
  'Z-woning'; Haparandaweg 582-648.
- architectenweb 20 Dec 2013: PUUUR Blok first project in Houthaven; Blok 0 nine self-build
  plots on Haparandaweg, taller than the islands as sound barrier; tunnel awarded to Max Bögl.
- architectenweb (24 Sept 2026) Meranti by FARO, 82 social rent, mirrors the block opposite by
  Hoogeveen Architecten across a square in the water: three wavy bands drawn by horizontal
  lines; balconies (FARO) vs bay windows (Hoogeveen); red round lines with white dot pattern;
  Eiland 7 = closing piece and future entrance.
- architectenweb 4 May 2021 Mahonie (FARO, Memel): big block split into "panden" like stately
  early-20th-century houses, each different window, plinth, roof edge; white frames, stripes,
  dots; two historic Amsterdam festoons reset in the brick facade; three rooms share a kitchen.
- architectenweb project Houthaven LIFE (Sweco, 2020): Amsterdam School "een voetje en een
  hoedje"; Zuiderkerkprijs nominee 2020; jury: "Het thema van dit eiland, Amsterdamse School".
- architectenweb 10 Oct 2016 Het 4e Gymnasium: first energy-neutral gymnasium in Amsterdam (per
  architect); coloured enamelled glass in timber frame, red/orange/yellow bands a nod to the
  temporary building; temporary building dismantled, Studioninedots disappointed (modular,
  meant for reuse); handed over June 2016, opened 6 Oct 2016.
- architectenweb 28 Jan 2020 Air Cells (Studio Tjep.): four 6 m towers over vent boxes, with
  supervisor Sjoerd Soeters and landscape designer Ruwan Aluvihare; patterns from microscope
  images of leaf structures; polished stainless steel over a bright orange technical core.
- architectenweb 5 Feb 2018: tunnel opened; about 80 % of traffic on Tasmanstraat and
  Spaarndammerdijk goes underground (alderman Litjens); Brede School Houthaven by Marlies
  Rohmer named.
- architectenweb 11 Jan 2016 IJ4you (ML_A, Marcel Lok), Blok 0: won two adjacent 16 m plots by
  lottery and designed them as one building with two parts: industrial extruded brick vs
  Muschelkalk stone; two 9-storey parts on Haparandaweg, 4-5 storey houses on Houthavenkade.
- architectenweb 27 Nov 2023 Meranti (FARO): U-shape open to the water, view of IJ and
  Pontsteiger; red brick with curves inspired by Amsterdam School of the Spaarndammerbuurt;
  light facade on the square with big entrance gate; last of four De Key buildings.
- architectenweb 2026 (Sept, paywalled beyond the end) Hoogeveen block on island 7: acoustic
  lamellae added late on the noisiest fronts; with island 7 done the district is "zo goed als
  klaar" after ten years, celebrated in the Houthavenpark early September.
- rohmer.nl Energieneutrale brede school Houthaven (architect's own page): "stoer blok" with an
  "embroidered skin" of brick patterns: prefab brick elements with a rosette relief, deep
  reveals; loggia for outdoor teaching and school gardens on the park side; central stacked
  'sporttoren' (playrooms, hall, gym, roof playground); 2 primary schools + childcare;
  Revaleiland 1; design 2011-12, done 2015; nominated Gouden A.A.P. 2015.
- bouwbedrijftuin.nl (builder/developer of The Future, kavel 1c): pilot for "energie-nota-nul";
  17 flats; EPC could reach -1.4 "not achieved before in Europe" (developer claim, not used);
  536 PV panels on the facades; 8 boreholes for heat-cold storage.
- AT5 17 May 2019: resident: the solar panels in the facade; passer-by thinks they are plates.
- stedenbouw.nl 17 May 2021 Wiborg (trade press): 87 homes for sale, theme 'Tough Guys',
  stepped warehouse gables, nine subprojects each with own facade, seven brick types and four
  mortars; car lift instead of a ramp. (Its "only project on its own island" conflicts with the
  city's list of four buildings on Wiborgeiland: dropped.)
- amsterdamwoont.nl Afzelia: Lords 5 Architects (Jeroen Atteveld), Lieven de Key, 41 social
  rent for families, Wiborgeiland 201-281; inspired by warehouses of the Oude Houthaven;
  Brazilian bond brickwork and nesting boxes for swallows and bats; top flats up to 6 m high.
- nl.wikipedia Houthavens (lead + transit, not sole support): bus 48 terminus Koivistokade,
  bus 22 at Spaarndammerstraat. Canals filled July 2023 by removing dam between Parkblok and
  De Spreeuw(en).
- Ferry: F7 Pontsteiger to NDSM (used in existing routes); F6 Pontsteiger to Distelweg.
