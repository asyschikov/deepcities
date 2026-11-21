# Brief: routes for the Amsterdamse School map

The map has 282 places and 11 essays. Routes add a way to experience them: a walk or a bike
ride through a handful of places, with narration at each stop. These are the map's first
routes, so they set the standard.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/documents-b8db62f6`.
Write only your own files in `research/ams-school/routes/`. Don't touch app code, other
research files or the live site.

## Read first

- `research/ams-school/places/*.yaml`: every place, with its English and Dutch (`nl:`) text,
  attributes (architect, built, artists, style), address, coordinates and sources. **This is
  your fact base.** Stops must use the exact English `title`.
- `research/ams-school/documents/*.md` (and `.nl.md`): the essays. Use them for context and
  for the threads that tie a route together.
- `research/ams-school/notes/*.md`: research notes, with more stories and source URLs.

## File format

One YAML file per route, `research/ams-school/routes/<slug>.yaml`:

```yaml
title: Het Schip and the Spaarndammerbuurt
summary: One or two sentences, ≤280 characters. What the route is about and why do it.
body: |
  Markdown intro. Where it starts (nearest tram/bus/ferry stop), where it ends, distance
  and rough time, best moment (e.g. museum opening hours, morning light), what you can go
  inside, accessibility notes. Then a short paragraph on the theme.
mode: walk                     # or bike: the default for every leg
nl:
  title: Het Schip en de Spaarndammerbuurt
  summary: …
  body: |
    …
stops:
  - place: Het Schip            # exact English place title
    narration: |
      What to look at from here, and how it fits the route's story.
    nl: |
      Nederlandse tekst bij deze stop.
    next:                        # optional: the leg to the next stop
      directions: Cross the Spaarndammerplantsoen diagonally to the corner tower.
      nl: Steek het Spaarndammerplantsoen schuin over naar de hoektoren.
  - name: Centraal Station, ferry pier   # ad-hoc point, only for starts/viewpoints
    lat: 52.38095
    lng: 4.89968
    narration: …
    nl: …
    next:
      mode: ferry
      directions: Free ferry F3 to Buiksloterweg, a five-minute crossing.
      nl: Neem de gratis pont F3 naar Buiksloterweg, vijf minuten varen.
```

- Walk and bike legs follow streets automatically. Only give `directions` where the way
  isn't obvious from the map, and keep them short. **Name a street only if you're sure of
  it** (it appears in a place's address or text, or you've checked it). A wrong street
  name is worse than none. If a leg needs to take a particular street, add `via:
  [[lng, lat], …]` waypoints.
- Validate with `python3 -B research/ams-school/scripts/routes.py check` (from the repo
  root). It checks titles, both languages, and lengths. Fix everything it reports.

## Writing

- **Narration is route-specific.** Say what to look at *from this spot*, and connect it to the
  route's theme and to the previous and next stops: comparisons, contrasts, the thread of the
  story. Don't paste the place description; readers can open it. Aim for 60–150 words per
  stop, more at the key stops.
- **Facts must come from the place files, essays or notes** (and their sources). Don't add
  facts from memory. If you aren't sure, leave it out.
- **Two languages, both native.** Write the Dutch from the Dutch place texts (`nl:`) and
  Dutch sources, the English from the English ones. Don't translate sentence by sentence;
  emphasis may differ, and facts must not. Dutch: natural, for a local reader, no English
  glosses. English: gloss Dutch terms on first use.
- Plain, concrete and warm, for someone on foot or on a bike. Short paragraphs.
- Distances and times: estimate from the coordinates (straight-line × 1.3 for streets;
  walking about 4 km/h plus stops, cycling about 12 km/h). Say "about".
- Order stops so the route doesn't double back. A route should be 6–16 stops.
- Treat sensitive history (persecution of Amsterdam's Jews; stereotypes in some sculpture)
  factually and with care.

## The routes

Each plan below lists candidate stops in a sensible order. Adjust the order or the
selection where it makes a better route, and say why in your report.

1. **`spaarndammerbuurt`: Het Schip and the Spaarndammerbuurt** (walk, about 2.5 km).
   Michel de Klerk's three blocks, from first to wildest. Start at the Haarlemmerplein. Stops:
   Café on the Haarlemmerplein (Haarlemmerplein 31) → Willemsbrug (Brug 151) →
   Spaarndammerspoorbrug → Spaarndammerplantsoen, De Klerk's first block →
   Spaarndammerplantsoen, De Klerk's second block → Spaarndammercarré (Gulden & Geldmaker) →
   Het Schip → Polanenstraat block and Polanentheater → Spitsbergenschool, Zaandammerplein.

2. **`plan-zuid-housing`: De Dageraad and the workers' palaces of Plan Zuid** (walk, about
   3.5 km). Socialist housing associations and Berlage's plan. Pastelstraat blocks (Gulden &
   Geldmaker) → Van der Helstplein (Kramer) → Coöperatiehof → De Dageraad → Tweede Openbare
   Handelsschool (Berlage Lyceum) → Rijnstraat gateway (Rutgers) → Korte Meerhuizenstraat
   block (Kruyswijk) → Holendrechtstraat (Margaret Staal-Kropholler) → Eigen Hulp block
   (Lammers) → Amstelkade blocks (Wijdeveld) → P.L. Kramerbrug → Vrijheidslaan north side
   (De Klerk) → Vrijheidslaan south side (Kramer, Marnette) → Victorieplein shop galleries
   (Kruyswijk) → 12-verdiepingenhuis (De Wolkenkrabber).

3. **`kramer-bridges-canal-ring`: Piet Kramer's bridges in the canal ring** (walk, about 5 km).
   How a city department turned bridges into sculpture, with Hildo Krop's beasts. Hilletjesbrug
   (Brug 125) → Nieuwe-Wercksbrug (Brug 63) → Niek Engelschmanbrug (Brug 106) → Warmoesbrug
   (Brug 22) → Brug 8 (Raadhuisstraat, Singel) → Brug 117 (Rozengracht, Lijnbaansgracht) →
   Kramer bridges at the Passeerdersstraat (Brug 98, 99, 100) → Leidsebrug (Brug 174) →
   Aalmoezeniersbrug (Brug 68) → Brug 43 (Leidsestraat, Keizersgracht) → Koningssluis (Brug 29)
   → Johanna Borskibrug (Brug 41) → Walenweeshuissluis (Brug 70). Consider whether Brug 117 fits
   better near the start.

4. **`public-works-ride`: The city builds: bathhouses, schools and pumping stations**
   (bike, about 8 km). The Dienst der Publieke Werken, from the Uilenburg yard to the
   southern edge. Werf Uilenburg (Public Works yard) → Former bathhouse Uilenburg (Splendor) →
   Double school Nieuwe Uilenburgerstraat → Talmud Tora school (Tweede Boerhaavestraat) →
   Badhuis Boerhaaveplein (Badhuistheater) → Rioolgemaal F → Smaragdplein school → Badhuis
   Diamantstraat → Onderstation Borssenburgplein → Meerhuizenplein school → Remise Lekstraat →
   Gemaal Stadwijck → Zorgvliedbrug. Reorder freely for a sensible ride.

5. **`plan-west`: Plan West: Mercatorplein and the Baarsjes** (walk, about 3.5 km). The
   committee-made extension, the sober (pared-down) Amsterdam School at neighbourhood scale.
   Hoofdweg housing by Piet Kramer → Columbusplein school (Commer de Geus) → Bethelkerk and
   Magalhaensplein → Hoofdweg housing by G.J. Rutgers → Cabotstraat school island →
   Cabralschool → Mercatorplein → Gemaal Mercatorstraat → Wijdeveld's stadspoort (north
   block) → Hoofdweg housing by Wijdeveld → Jeruzalemkerk → Jan Maijenschool → Vespuccistraat
   housing by Roodenburgh → Jan Evertsenstraat housing by J.F. Staal → Jan Evertsenstraat
   housing by Van der Mey → Molenslootbrug → Westerwijk → Vierwindstrekenbrug.
   Trim to the strongest ~12–14 stops.

6. **`oud-zuid-villas`: Villas and town houses of Oud-Zuid** (walk, about 4 km). The
   Amsterdam School for the well-to-do, around the Vondelpark's south side and Valeriusplein.
   Koninginneweg 50–60 → Villa Insinger → Villa Sophialaan 1–3 → Emmaplein villas → Garden
   house Oranje Nassaulaan 10 → Valeriusplein toilet buildings → Huize de Windroos (Het Zwarte
   Huis) → H.L. de Jong houses De Lairessestraat → La Croix houses Cornelis Schuytstraat →
   Villa Klatte → Warners villas J.J. Viottastraat → Amsterdams Lyceum → Villa Lebbink →
   Apollolaan villas → Villa den Tex (Apollolaan 1).

7. **`noord-garden-villages`: Across the IJ to the garden villages** (ferry + bike, about
   10 km). Ad-hoc start at Centraal Station's ferry pier (free ferry F3 to Buiksloterweg).
   Former police post, Buiksloterweg → Badhuis Kromme Distelstraat → Former Astoria cinema,
   Mosplein → Clematisstraat 25 (Apostolisch Genootschap) → Concrete test houses, Castorplein
   → Badhuis Meteorenweg → Zonnehuis → Tuindorp Oostzaan civic buildings → then back south
   and east: Wingerdweg schools → Gratama's blocks, Kievitstraat and Spechtstraat →
   Bethlehemkerk → Christian school, Wognumerplantsoen → Purmerplein, Tuindorp Nieuwendam →
   Keukenwoningen, Tuindorp Nieuwendam. Find the most sensible loop.

8. **`watergraafsmeer-betondorp`: Watergraafsmeer bridges and Betondorp** (bike, about 6 km).
   Kramer's late bridges, Kruyswijk's church and school, and the concrete garden village.
   Hartmanbrug (Brug 190) → Caroline Herschelbrug (Brug 115) → Newtonschool (Cornelis
   Kruyswijk) → Apostolisch Genootschap Watergraafsmeer → Kramer bridges on the Galileïplantsoen
   (Brug 235, 335, 336, 337, 338) → Vijfde Montessorischool Watergraafsmeer → Voltaplein →
   Brug 304 (Linnaeushof) → Frankendaelbrug (Brug 217) → Brug 441 and Brug 436
   (Fahrenheitsingel) → Kramer's post-war bridges at Sportpark Drieburg (Brug 254, 267, 273) →
   Fré Cohenbrug and Rinus Michelsbrug (Brug 341, 245) → Heinz Stuybrug (Brug 334) → Brink
   (Betondorp).

9. **`old-centre-offices-shops`: Shipping offices, shops and cinemas in the old centre**
   (walk, about 3 km). The style goes commercial. Scheepvaarthuis → Brug 283
   (Waalseilandbrug) → Gebouw Batavia → Rubber Centraal Station (Warmoesstraat) → Gebouw De
   Kolk → Van den Brul clothing store (Nieuwendijk) → Candida office building → Telegraaf
   building → Citroen jeweller's shop (Kalverstraat 1) → Modemagazijn Gerzon (Nieuwezijds
   Voorburgwal) → City hall extension (Prinsenhof) → Urinal on the Oudezijds Voorburgwal →
   Lommertbrug (Brug 203) → De Schaats (University building) → De Friesche (Rokin 115) →
   Tuschinski Theatre → Rembrandtplein 44 → Amsterdamsche Bank (The Bank).

## Report

Finish with a short report: for each route, the file, stop count, distance and time
estimate, any changes to the planned stops and why, and anything uncertain (facts,
directions, opening hours).
