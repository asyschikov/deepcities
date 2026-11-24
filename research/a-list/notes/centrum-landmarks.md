# Slice centrum-landmarks: notes

Places file: `research/a-list/places/centrum-landmarks.yaml` (4 places, validate.py 0 errors).
Famous but not A-list: no `a_list`, no `rank` (coordinator sets rank). Fetched 2026-11-24. Wikipedia,
seapalace.nl, the city monument API and the KB resolver (Delpher OCR) were read with curl; oba.nl,
babel.amsterdam, carre.nl, the RCE register and Delpher search needed the BrowserOS browser (tabs closed).
Dutch was written from the Dutch sources and checked with an 8-word-run script against every fetched text:
three runs found and rewritten; the only remaining run is Wong's marked quote from Het Parool.

Neighbours checked with `pnpm dc places sights --all` (keyword and a 250 m radius around each pin):
- OBA: "The old central library that pretended to be canal houses" (Prinsengracht 587): one-line pointer.
  Ruijtergaard, Oud Nico and the De Ruijterkade offices are nearby but unrelated. Arcam/Museumhaven
  not repeated.
- Carré: "Amstelsluizen, Hudde's locks of 1673" and "Achtergracht and Hudde's locks": one-line pointer only.
  "Tower on the Beulingsloot" and "Koningslaan" mention the Carré architects; not repeated.
- Sea Palace: nothing on the map about it; Schreierstoren corner and Scheepvaarthuis are across the water
  (Scheepvaarthuis named only as a viewpoint).
- Bijenkorf: "Blaauwlakenblok" tells the 1960s buying-up; one-line pointer. "Damrak, the boulevard that
  never was", "Beursplein 5", "The Dam's corners" untouched.

## Per place

### OBA Oosterdok
Sources: nl/en wiki Openbare Bibliotheek Amsterdam; nl wiki Oosterdokseiland; oba.nl/nl/locaties/oba-oosterdok
(hours, "grootste bibliotheek van Nederland", Babel, theatre on 7th floor); oba.nl/nl/over-oba/oba-eet-drinkt
(Babel on 7th floor, terrace closed Nov to Mar); oba.nl/nl/english (no membership needed to visit);
babel.amsterdam (7th floor, roof terrace, "vrij toegankelijk voor iedereen", underground guarded free bike park).
Scout lead CC-08 used as a lead only.
Left out: Post CS tower, Stedelijk's temporary home and the 2009 demolition (nl wiki puts Post CS on the
east tip of the island and the tower "tot 2011"; I could not confirm it stood on the library's own plot,
and the scout's 2009 date conflicts with the wiki); the 2007 armed robbery; visitor numbers; Gerard Reve
Museum (in nl wiki list, current status unchecked); "largest in Europe 2007-2013" (wiki quotes it as a label).
The view line (Oosterdok, NEMO, Scheepvaartmuseum, old centre) rests on en wiki (south-facing terrace) and
the Commons panorama titles taken from the restaurant floor.
Pin: OBA's own map link (52.375675, 4.907893), the entrance side on the Oosterdokskade.

### Koninklijk Theater Carré
Sources: RCE register 185 (description, inschrijving 9 July 1974); city API (architects, 1887, "kunst en cultuur");
carre.nl/pagina/geschiedenis-carre (1968 alternatives, jubilee date); nl wiki Koninklijk Theater Carré
(Porgy and Bess, Heintje Davids song, city bought 1977, 2004 rebuild, Eiffel myth); nl wiki Oscar Carré
(wooden building demolished 1880, permit 1886, bonds, piling April 1887, 8 months); en wiki Royal Theater Carré.
Left out: owner Reinder Zwolsman (nl wiki only); Ringtheater fire as the reason for the quick permit (nl Carré
article says the permit came fast after the Vienna fire of 1881, the Oscar Carré article says years of
wrangling until 1886: conflict, both left out except "after years of wrangling", from the Oscar article);
fire curtain "largest painting in one piece" (superlative, wiki only); lying in state; Sisi riding lessons
("het verhaal gaat"); clown heads and Bart van Hove on the front (only an expat site found); en wiki's
"replacing the Rooseboom windmill" and "permission in 1866" (unsupported elsewhere); seat count.
Conflict: opening day 2 Dec (nl Oscar Carré) vs 3 Dec 1887 (nl Carré, en wiki, carre.nl jubilee date, NRC
quote dated 3 Dec 1887). Used 3 Dec.
Pin: OSM node for the theatre (52.362335, 4.903926), on the Amstel front; not surveyed to the door.

### Sea Palace
Sources (Delpher OCR via resolver.kb.nl): Het Parool 15-09-1984 "Drijvend eetpaleis op 't Amsterdamse water"
(Cheung Sing Wong, Hong Kong model, architect from Hong Kong, 14 containers, 900 seats, three floors,
12,000 bulbs, green glazed roof, red pillars, revolving lounge, Wong's quote, opening planned 2 Oct);
Het Vrije Volk 11-08-1984 "Wong wil ook pagode in Rotterdam" (age 31, built in Alphen after Tai Pak,
concrete float as for houseboats, roof tiles from China, VIP interiors from Taiwan, storeys getting smaller,
post office "met afgrijzen", PTT rumours, "Dat Chinese superrestaurant komt er", tourist attraction);
Algemeen Dagblad 06-09-1984 (opening early October, "enorme betonnen bak", Chinees-Indisch, three floors);
Nieuwsblad van het Noorden 19-10-1984 (open "sinds kort", 900 seats, 14 containers, China and Taiwan);
seapalace.nl home, /over-ons/, /en/ (since 1984, 600 seats over three floors, Bib Gourmand, started
Chinese-Indonesian then Cantonese). Viewpoints from OSM positions: Odebrug ~200 m west, Scheepvaarthuis
~165 m south-south-west across the water; the Vrije Volk piece says the lounge looked out on the
Scheepvaarthuis and the gables opposite. Commons category "Sea Palace (Amsterdam)" holds panoramas taken
from the NEMO roof terrace that show it (basis for the NEMO line).
Per the user's note it is pitched as a thing to see from outside; eating is secondary.
Left out: "largest floating restaurant in Europe" and "first floating restaurant in Europe / outside Hong
Kong" (owner claims, not checked); Atlas Obscura's sinking myth and buoyancy story (not a real source);
the 1986 city plan to give it a new mooring in the Oosterdok (Parool 19-02-1986; outcome unknown); the
junkie-boat row and cars broken into on opening night (Parool 05-10-1984, off topic); dragon boats consecrated
at its quay (Parool 28-07-1990, 04-08-1993: good but no room); the giant botel row of 1993 (Parool
07-07-1993); the 12,000 bulbs today (not checked, so only as the 1984 plan); the red gateway on the quay
(seen only in a 2006 photo).
Pin: OSM node (52.375758, 4.906286).

### De Bijenkorf
Sources: RCE register 518426 (full omschrijving read via the "Lees meer" button: 1911-1914, Van Straaten jr.
dismissed after a dispute, Lubbers finished mainly the interior, 1937-38 extension, plaque MAGAZIJN DE BYENKORF
with S.P.G. on the middle pillars of the Damrak entrance, staircase of brown Napoleon marble and travertine,
leaded glass, "eerst gebouwde warenhuis in Nederland", inschrijving 11 Dec 2001); RCE kennisbank 518426;
city API; nl wiki De Bijenkorf (Amsterdam) and De Bijenkorf (warenhuis); en wiki De Bijenkorf; Algemeen
Handelsblad 14-03-1970 "Chaos bij eeuwfeest Bijenkorf" (Delpher).
Left out: the 1977-1981 car park and "Bijenkorffile"; the war years (737 Jewish staff murdered: en wiki only,
about the company not the building, belongs on a war map); HEMA; Drie Dwaze Dagen; fifth-floor restaurant
view (no current source checked); crowd figures 10,000 inside / 20,000 outside (nl wiki only).
Conflicts: built 1911-1914 (register) vs 1912-1915, opened 1915 (nl wiki); attribute follows the register.
Temporary building 1912 (nl wikis) vs 1909 (en wiki); used 1912.
Pin: OSM address node Dam 1 (52.373349, 4.893942); the plaque is on the Damrak side, said in the text.

## Photos
All Wikimedia Commons, checked by eye on thumbnails.
- OBA: Openbare Bibliotheek Amsterdam.jpg (CC BY), restaurant floor panorama 01, Top Floor Balcony.jpg
  (CC BY-SA 4.0), Oosterdokskade with Conservatorium 01.
- Carré: Amsterdam Carré Amstelsluizen.jpg, Carre amsterdam facade.jpg (PD), Fronton carre.jpg (CC BY-SA 3.0).
- Sea Palace: Amsterdam - Restaurant Sea Palace (30002977910).jpg (from across the water), AMSTERDAM "Sea
  Palace" 2006 - panoramio.jpg.
- Bijenkorf: De Bijenkorf in Amsterdam vanaf de Dam (2020).jpg, Amsterdam, De Bijenkorf (2) RM-518426-WLM.jpg,
  RCE photo 20408975 (Damrak front).
No place is without photos.

## Fact check

Each claim checked against the fetched texts; unsupported ones were cut (listed under "Left out").

### OBA Oosterdok (EN and NL)
- Designed by Jo Coenen, opened 7 July 2007 (7/7/7), Oosterdokskade 143: nl wiki OBA. OK.
- Oosterdokseiland made in 1832 by the Oosterdoksdam; mainly a railway yard before: nl wiki Oosterdokseiland. OK.
- "Largest library in the Netherlands", attributed to the library: oba.nl location page. OK.
- Central library on the Prinsengracht until 2007: nl wiki OBA (1977 to 2007 at Prinsengracht 587). OK.
- No membership needed to come in / "vrij toegankelijk voor iedereen": oba.nl/english, babel.amsterdam. OK.
- Babel on the 7th floor with a roof terrace: babel.amsterdam, oba eet-drinkt. OK.
- Terrace faces south: en wiki ("south-facing terrace"). OK.
- View over Oosterdok, NEMO, Scheepvaartmuseum, old centre: Commons panorama titles from the restaurant floor. OK (photo evidence).
- Terrace closed November to March: oba eet-drinkt. OK.
- Restaurant keeps its view over the city: oba.nl/english, oba location page. OK.
- IHLIA, library and archive on homosexuality and sexual diversity, in the building: nl wiki OBA; ihlia.nl linked from the OBA page. OK.
- Guarded underground bike park beside it, free: babel.amsterdam. OK.
- Hours (weekdays from 8:00, weekends from 10:00; Babel from 10:00): oba location page, babel.amsterdam. OK.
- Sea Palace about 100 m west on the same quay: OSM positions (Sea Palace 4.906286, OBA 4.907893, same latitude). OK.
- Cut: "take the escalators", "nobody asks you to order" (no source read).

### Koninklijk Theater Carré (EN and NL)
- Oscar Carré, German circus director/family: en wiki, nl wiki Oscar Carré. OK.
- Wooden building demolished 1880 by order of the city for fire risk: nl wiki Oscar Carré. OK.
- Years of wrangling, permit 1886: nl wiki Oscar Carré. OK.
- Paid with bonds: nl wiki Oscar Carré. OK.
- Piling began April 1887, ready eight months later: nl wiki Oscar Carré. OK.
- Opened 3 December 1887: nl wiki Carré, en wiki, carre.nl. OK (conflict noted).
- Variety and revue soon after: nl wiki, carre.nl. OK.
- 1956 Dutch premiere of the musical with Porgy and Bess: nl wiki, en wiki. OK.
- 1968 demolition threat: hotel, bathhouse, car showroom, remand prison: carre.nl. OK.
- Artists protested; Heintje Davids "Er is maar één Carré": nl wiki. OK.
- City refused demolition, bought it 1977: nl wiki, en wiki. OK.
- Steel roof arches visible since the 2004 rebuild; often credited to Eiffel; made by Koninklijke Fabriek voor Stoom- en andere Werktuigen, Amsterdam bridge builder: nl wiki. OK.
- Curved roof: RCE register ("sterk sprekend gebogen dak"). OK.
- "A° 1887" in the pediment, CARRE below: Commons photo Fronton carre.jpg. OK.
- Inside only with a ticket: it is a theatre; carre.nl sells tickets through its agenda. OK.
- Attributes: monument 185, listed 1974, architects, circus: RCE register, city API. OK.
- Cut: busts in the foyer (true per nl wiki, dropped for length), family flat (dropped for length), 300,000 guilders (dropped for length).

### Sea Palace (EN and NL)
- Initiator Cheung Sing Wong, Amsterdam Chinese: Parool 1984. Age 31, son of a restaurateur: Vrije Volk 1984. OK.
- Model: Hong Kong floating restaurants (Parool), Tai Pak (Vrije Volk). OK.
- Built in Alphen on a concrete float as for houseboats: Vrije Volk; "enorme betonnen bak": AD. OK.
- Architect from Hong Kong: Parool. OK.
- Fourteen containers of materials and decoration from China and Taiwan: Parool, NvhN. OK.
- Opened October 1984: AD (begin oktober), Parool (2 Oct planned), NvhN 19 Oct ("sinds kort"). OK.
- 900 seats: Parool, AD, NvhN, Vrije Volk. OK.
- 12,000 white bulbs and Wong's quote about the lit canals: Parool. OK (quote marked).
- Post office on the quay looked on with horror; rumours the PTT would sue; city said it was coming: Vrije Volk. OK.
- Wong meant a tourist attraction: Parool ("toeristische trekpleister"), Vrije Volk. OK.
- Today 600 seats on three floors, Bib Gourmand: seapalace.nl. OK.
- Green-glazed roofs, red pillars: Parool. Each storey a little smaller: Vrije Volk. OK.
- Best seen from Prins Hendrikkade by the Scheepvaarthuis across the water: OSM positions; Vrije Volk (view from it onto the Scheepvaarthuis). OK.
- Odebrug about 200 m west: OSM. OK.
- Visible from NEMO's roof terrace: Commons category panoramas. OK.
- Cut: revolving lounge (dropped for length), tax-law studies (dropped for length), red gateway (photo only from 2006).

### De Bijenkorf (EN and NL)
- Simon Philip Goudsmit, haberdashery, Nieuwendijk 132, 1870; at first only yarn and ribbon: nl/en wiki, register. OK.
- 1912 temporary wooden building on the empty site of Zocher's exchange on the Damrak, meant to return; stayed because trade went well: nl wiki (warenhuis). OK.
- Um 1800 style, J.A. van Straaten jr., dismissed after a dispute with the management, finished by B.A. Lubbers: RCE register. OK.
- Register: "eerst gebouwde warenhuis in Nederland": RCE register waardering. OK (quoted).
- Blaauwlakenblok pointer: nl wiki and the live place. OK.
- 13 March 1970 open house for the centenary; tens of thousands on the Dam; paving stones from roadworks thrown at the doors on the Dam side; shop windows smashed; canopy set alight; barricades on the Rokin; water cannon: Algemeen Handelsblad 14-03-1970 ("gisteravond"); nl wiki. OK.
- Plaque MAGAZIJN DE BYENKORF with beehive and S.P.G. on the Damrak front: RCE register. OK.
- Central staircase, brown Napoleon marble walls, travertine steps: RCE register. OK.
- Attributes: 518426, listed 2001, built 1911-1914: RCE register. OK.
- Cut: leaded glass line (dropped for length), "purpose-built" wording (replaced by the register's own words).

## Verification

Second pass, 2026-11-24. Every claim in the EN and NL summary, body, Look for / Let op lines and attributes
was re-read against the listed sources, fetched again: nl/en Wikipedia (extract API), the city monument API
(185, 518426), the RCE register pages and kennisbank (curl), the five Delpher articles (OCR via the KB
resolver), seapalace.nl, babel.amsterdam, and oba.nl and carre.nl (BrowserOS, both block curl; tab used
for these only). Dutch re-checked with an 8-word-run script against all fetched Dutch texts: the only runs
are Wong's marked quote from Het Parool. Summaries 228 to 278 characters; no em dashes or spaced en dashes.
validate.py: 0 errors.

Confirmed as written (no change): OBA hours (oba.nl: Mon to Fri 8:00, Sat and Sun 10:00), Babel from 10:00,
"grootste bibliotheek van Nederland" (oba.nl), terrace closed Nov to Mar (oba.nl eet-drinkt), 7th floor and
free bike park (babel.amsterdam), 1832 Oosterdoksdam and railway yard (nl wiki), IHLIA and 7/7/7 (nl wiki),
Sea Palace ~110 m west on the same quay (OSM). Carré: 1880 demolition, 1886 permit, bonds, April 1887 piling,
3 Dec opening, Porgy and Bess 1956, 1968 alternatives (carre.nl), 1977 purchase, Eiffel myth, register 185
(9 July 1974, curved roof), API architects. Sea Palace: every 1984 detail against the OCR texts (Wong 31,
Tai Pak, Alphen, concrete float, Hong Kong architect, 14 containers, 900 seats, 12,000 bulbs, post office,
PTT rumour, city's reply, tourist attraction, green roofs, red pillars, smaller storeys); 600 seats and Bib
Gourmand (seapalace.nl). Bijenkorf: register text (Um 1800, dismissal, Lubbers, plaque on the middle pillars
of the Damrak entrance, staircase, "eerst gebouwde warenhuis", 11 Dec 2001), nl wiki (1870, Nieuwendijk 132,
1912 wooden building, plan to return), Algemeen Handelsblad 14-03-1970 (all riot details).

Fixes:
1. OBA summary (EN/NL): "the windows are not" / "het raam niet" replaced by "the restaurant is not" /
   "het restaurant niet" (Babel is open daily; nothing sourced about windows).
2. OBA body NL: "door het glas zie je hetzelfde" (same view through the glass: unsourced) narrowed to "ook
   vanuit het restaurant kijk je uit over de stad" (oba.nl: view over Amsterdam from the restaurant).
3. OBA body: "The deep angle is the top" (brief jargon) and NL "Het mooiste zit bovenin" (superlative)
   rephrased neutrally.
4. OBA sources: the Commons restaurant-floor panorama added as the source for the view line (Oosterdok, NEMO,
   Maritime Museum, old centre); it was already in photos and in the notes, not in sources.
5. Carré: Heintje Davids "sang" / "zong" narrowed to "released the song" / "bracht het lied uit" (nl wiki:
   "uitbracht").
6. Carré NL: "een gevangenis" corrected to "een huis van bewaring" (carre.nl; EN already said remand prison).
7. Carré Look for (EN/NL): "A° 1887" is on the frieze just below the pediment, not in it (checked on the
   photo Fronton carre.jpg); "best seen" / "het best" dropped (unsourced superlative).
8. Carré body: "It soon became a home for variety and revue" / "Al snel kwamen er variété en revue" cut for
   length (true, nl wiki and carre.nl, but generic); body 234 to about 220 words.
9. Sea Palace summary (EN/NL): "the best of it is the view" / "het mooiste is het zicht" (superlative) made
   plain: a sight to see from across the water.
10. Sea Palace NL body: the post office looking on "met afgrijzen" now attributed ("volgens Het Vrije Volk"),
    as in EN and the NL summary; the source says "blijkbaar".
11. Sea Palace Look for (EN/NL): cut the Odebrug line (OSM puts the bridge about 200 m WNW, north of the dock
    near the station; a view "along the dock" to the pagoda is not plain from the coordinates) and the NEMO
    roof line (about 450 m ESE, with the OBA building near the sight line; not plain from coordinates, Commons
    photos not a listed source). Kept the Prins Hendrikkade line, rephrased as a direction (about 200 m SW,
    across the water, as the 1984 papers describe the view from the restaurant onto the Prins Hendrikkade and
    Scheepvaarthuis), and split the roofs/pillars into its own line. "best seen" dropped. Nominatim source note
    updated.
12. Bijenkorf summary (EN/NL): "moved to the Dam" / "naar de Dam" corrected to the Damrak (nl wiki: the site of
    Zocher's exchange on the Damrak).
13. Bijenkorf NL: "eerst alleen met garen en band" cut (true, nl wiki, but not in EN; EN and NL now match).
14. Bijenkorf address: "also Damrak" was not a registered address; now "Dam 1 (also Beursplein 2 and
    Warmoesstraat 178)" per the register and city API.
15. Two summaries quoted in YAML (colon inside).

Noted, not changed: the city API lists only Van Straaten as architect and "1911-1914"; register and kennisbank
(1912-1914 vervaardiging) add Lubbers, attribute kept from the register. The draft has no `a_list` attribute,
as the notes header says this slice was briefed; BRIEF.md asks for it on every place: coordinator to decide.
