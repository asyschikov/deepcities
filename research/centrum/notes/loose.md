# Centrum loose ends (LOOSE-BRIEF), 25 Nov 2026

Patches: `research/centrum/fixes/loose.json` (6 places, all text-only, both languages; `dc update-many --dry-run` passes).
New place: `research/centrum/places/loose.yaml` (Coentje Gansplantsoen; validate.py passes).
Live texts read from `dc export sights --all` on 25 Nov 2026. Centrum is a view of the same pool with no overrides on these places, so one patch fixes both maps.

## A. Fact conflicts

### 1. Vijzelflat collapse: 23 March 1955 (settled)

- Delpher: several papers of 24 March 1955 ("Huis ingestort in Amsterdam", "Amsterdamse flat voor een deel ingestort") report that part of the Vijzelstraat building ("de zgn. arcade") collapsed on "Woensdagmiddag"/"gistermiddag" while two bricklayers were repairing a stone column under the front; three injured. 23 March 1955 was a Wednesday; 3 March was a Thursday.
- nl.wikipedia Amstelstein: 23 maart 1955, 15:22, citing contemporary papers; Ons Amsterdam "Hier gebeurde het: Vijzelstraat 23 maart 1955"; VVAB Binnenstad 178 (23 March).
- The "3 March" came from theobakker.net (Vijzelstraat pdf), a single slip.
- Only one live place gives a day: **Vijzelstraat, the street they widened** (ugehu5vx3e88b9catw4iz9n7). Patched 3 to 23 March (EN and NL). The Poentunnel place gives no collapse date, so nothing to change there.
- Same patch: the Vijzelstraat place said the 1974 tunnel ran "under the street" to De Bazel "opposite"; the Poentunnel and the cluster say under the Keizersgracht, 1974–1975, which is right (nl.wikipedia Poentunnel; De Bazel and the Vijzelbank are on the same side of the street, either side of the canal). Aligned.

### 2. Vijzelstraat widening: 1907 decision, demolition from 1917 (settled)

- nl.wikipedia Vijzelstraat (Amsterdam): council decision 1907, expropriation law 1914, work began 1917; theobakker.net: 15 May 1907 decision, demolition 1917/1918/1926 by section.
- nl.wikipedia Isa van Eeghenbrug and Johanna Borskibrug: Van der Mey drew the three bridges "rond 1911"; the bridge articles' "verbreding vanaf 1911" is loose wording for that.
- Cluster, Vijzelstraat place and garden-house place already say 1907/1917. **Vijzelstraat bridges** (ffm96qkk1hy0fb88gfrh8chm) said "widened from 1911": rewritten to "widening decided in 1907 ... bridges designed around 1911 ... rebuilt in phases from 1917". Its "Poentunnel of 1974" also made 1974–1975 like the other places.
- Six Collection place ("until 1915 ... house demolished when the street was widened") is consistent and untouched.

### 3. 1772 Schouwburg fire: eighteen dead (settled)

- Stadsarchief Amsterdam, "Omgekomen" (Rampen): the printed list names the eighteen spectators who died on 11 May 1772; leading Amsterdammers such as Jacob de Neufville van Lennep and his wife, but also a tailor and a servant.
- TheaterEncyclopedie, "Brand van de Amsterdamse Schouwburg in 1772": "Achttien mensen kwamen erbij om".
- nl.wikipedia Schouwburg van Vingboons: 18 dead (citing Worp 1920). The "sixteen ... among them regents and their wives" is from nl.wikipedia Schouwburgpoort, which contradicts the other three.
- (The Stadsarchief also holds a handwritten first list of 31 names, those first thought dead; not used.)
- Patched: **Keizersgracht's orphan gateways** cluster (h8hiyyx3flfoff0vjbfahaad), **Schouwburgpoort** (mu9y51mxnb76mql9yr2xwmk1, summary and body; "regents and their wives" replaced with what the Stadsarchief says), **The poor-relief bakery** (qath9qd8i357bgq5gcytzqu8, "more than fifteen" to eighteen). Kalverengang, Prinsengracht by the Nine Streets and Huis te Vraag mention the fire without a toll: untouched.

### 4. Westerkerk graveyard: in use until 1811 (settled)

- City monument register, Prinsengracht 277 (monument 200822): the hall stands "op de hoek van het voormalige Westerkerkhof, dat tot 1811 in gebruik was", and was built in 1814 "op de hoek van het zojuist opgeheven Westerkerkhof".
- The 1655 date belongs to the Noorderkerk graveyard on the Noordermarkt (nl.wikipedia Noordermarkt: "Tot 1655 werd het plein grotendeels ingenomen door het kerkhof"), which the live Noordermarkt places already give correctly. Burials on the Westerkerkhof well after 1655 are recorded (e.g. nl.wikipedia Jan Hendrik Troost van Groenendoelen).
- **The meat hall on the old Westerkerk graveyard** (oy6h22rulfpcieac38r0rag7): "which had just been closed" made exact: "which had been in use until 1811" (NL likewise).

### 5. Woning-Maatschappij on Oostenburg: 1874 (no change)

- City monument register (206017 ff.): first one-room homes handed over 1 May 1874; register build year 1874. Amsterdam op de kaart (Nieuwe Oostenburgerstraat 4-20): first homes delivered 1874. The company itself was founded only in 1872/1873 (nl.wikipedia N.V. Woning-Maatschappij; Amsterdam op de kaart: 1873), so 1871 is impossible for the complex.
- Live places (cezhullzoi2k53w7tdy43ywu and the Oostenburg cluster) already say 1874. No patch.
- Side note, not patched: Amsterdam op de kaart says the design was by P.J. and W. Hamer, "often" credited to A.L. van Gendt; the city register names Van Gendt. Two authoritative sources disagree; the live text follows the register. Worth a look if the architect matters.

### 6. Door wind bewogen beweging: 28 August 2015 (no change)

- The artist's own site (wichermeursing.nl, news "Windobject Westerdoksdijk in werking"): set in motion on Friday 28 August 2015 by Jeanine van Pinxteren, board member of stadsdeel Centrum, and handed over to the city.
- Wijkkrant Jordaan & Gouden Reael 2015 announced the launch for Friday 28 August, 16.00, Westerdoksdijk 705. nl.wikipedia: unveiled 28 August 2015.
- stadsdorpwesterdok.nl's "vrijdag 28 oktober 2015" is a slip (28 October 2015 was a Wednesday). The archived Kunstwacht page gives no day.
- Live text ("unveiled on 28 August 2015") is right. No patch. Its separate check (whether the vanes move now) stays open.

### 7. Coentje Gansplantsoen: second source found, drafted

- **Official**: Gemeenteblad 2021, 197592 (college of B&W, 15 June 2021, published 23 June 2021) fixes the public space name "Coentje Gansplantsoen" (BAG type Landschappelijk), after positive advice of the naming committee (27 Nov 2020) and the district board (1 March 2021). Explanation: Coentje Gans (3 July 1941 to 21 May 1943) was the youngest of the fourteen people taken from the Rapenburg near the playground to Auschwitz and Sobibor. BAG openbare ruimte 0363300011952162, valid from 23 June 2021, gives the polygon (pin 52.370800, 4.908700). Official spelling: Coentje Gansplantsoen; the street is Nieuwegrachtje.
- **Joods Monument**: person page 178914 (Amsterdam 3 July 1941, Sobibor 21 May 1943; parents Meijer Gans and Rachel Gans-van Loggem); family story of 3 July 2021 (Rapenburg 58-1; Westerbork 14 Jan 1943, barrack 65; Sobibor transport 18 May; all six dead 21 May; 14 deported from Rapenburg 58; sign unveiled on his 80th birthday).
- **NRC**, 5 Nov 2021, Casper van der Veen, "Op het bordje" no. 33: opened summer 2021 with the lines "Coentje was nog geen twee / toen hij ginds werd vergast"; the namer is a poet living in the Rapenburg house from which fourteen Jews were deported, none of whom survived.
- **AT5**, De Straten van Amsterdam, 22 Sept 2026 (seen via headliner.nl): the plantsoen named after the neighbourhood's youngest deported Jewish resident; a neighbour's hens roam it. Confirms it exists and is in use in 2026.
- Garden history (water once, residents' garden and playground from 2007, kept at their own cost, gate never locked) rests on Shaffy's Tuin (2025) with nl.wikipedia in support; written as what the residents say. The poet's name is spelt Deurlo (nl.wikipedia, Shaffy's Tuin) and Deurloo (NRC), so the text does not name him.
- Drafted as a new place in `places/loose.yaml`: category green, rank Nice (Amazing is defensible for the story; it is a small garden). Pin from the BAG polygon, which agrees with nl.wikipedia's coordinates to about 15 m; replaces the scout's approximate Foeliestraat pin. Nothing live mentions Rapenburg 58 or the garden, so there is no duplicate.

## B. Loose clusters

Membership read live on 25 Nov 2026 (children by parentId, distances from the cluster pin). Only changes a visitor would notice.

| Cluster (live id) | Verdict | Members concerned | Why |
|---|---|---|---|
| jo-laurier, Van Houten's recycled gables in the Laurier streets (pc2ev0nj091wiwc0gwkcxyrh) | move (trim) | Laurierstraat's 1915 unemployment blocks; Tweede Laurierdwarsstraat: to Deep Centrum only | 9 members, the maximum. The title promises recycled gables, but only 3 members are about them; the rest is a Lauriergracht walk (Breitner, chapel, tile bakery, orphanage), which works. The two plain Okay housing members are the far west end (up to 244 m) and add nothing a visitor would walk for. Optionally retitle to cover the canal too ("Round the Lauriergracht: ..."). |
| jo-marnixplein, Marnixplein and the northern Lijnbaansgracht (jaa41ej2rk2t3qtw3d9ykey3) | keep, fix text | Eerste Marnixplantsoen (cqc8iysi2oeidbztxqd77b97) | Members hang together as "the old city edge". But the summary and the body's last paragraph still present the Eerste Marnixplantsoen and the 1966 riot, which is now a standalone Nice place (407 m from the pin). A visitor gets the same story twice. Cut that paragraph and summary clause, or turn it into a one-line pointer. Splitting off the Lijnbaansgracht trio (De Weichsel, Tichelkerk, Nassau cinema) is possible but not needed. |
| nz-station, Arriving at Centraal Station (tlp9ba6wgk9zvadb07yuunha) | move | Canvas van Amsterdam on the Haringpakkersbrug: to "Droogbak, where the Singel starts" (n6htkv29sszft59dh8few57x, 6 members); Lloyd building: to "The Damrak walk ... office palaces" (adqipies5fphb49b9bd6601m, 6 members) | Canvas sits 386 m out at the head of the Singel, 72 m from a Droogbak member, and the Haringpakkerstoren is the Singel's start, which is Droogbak's story. The Lloyd "gilded coffin" office (246 m, Martelaarsgracht) is an office palace like the Damrak walk's, 113 m from its nearest member. Keep Passage Central (directly opposite the station) and the rest. Leaves 7. |
| nz-kolk, Nieuwezijds Kolk, where the city began (retua7ewolzrtxg2q1qqq69w) | keep | (Ronde Lutherse Kerk, Annick van Hardeveld at the edges) | All within about 200 m of the Kolk; the dome and the courier sit naturally on the way. No better home: Multatuli's alley and Droogbak are not closer in story. |
| ws-leidseplein-east, Leidseplein east (x4ceovn5pexfe46lyho1413h) | keep | none | Eight places on one square and the Kleine-Gartmanplantsoen, within 195 m; the Peter R. de Vries monument belongs on the Leidseplein. |
| ws-almshouses, Weteringbuurt, weavers' houses and almshouses (uf4qqf7h4jyisqulxln2j93u) | keep | H.F. van Breemen | Off-theme (a peat dealer's shopfront), but it is on the same quay 98 m away, the body handles it in one sentence, and the nearest alternative (Weteringcircuit) has no better fit. Removing it would leave 3. |
| gz-disguise, Buildings in disguise, eastern Keizersgracht and Kerkstraat (kd15mp0ddrz33u3inb3szidm) | keep, add photo | Four views of Den Helder; Van Houten's recycled gables (brqbfl333rbq3smayl3nf1th) | The Den Helder stones are not a disguise, but they are the most photogenic member (Nice, 3 photos) and the body places them well; use one of its photos (or the Falckshuis') for the cluster, which has none, the gap a visitor sees first. The child "Van Houten's recycled gables" has nearly the same title as the jo-laurier cluster; give it its address ("Keizersgracht 826, ...") so the two don't read as duplicates in search. |
| ws-utrechtsedwars, Around De Duif (ov8irfxbpf51g140y6sdlehv) | keep | (Prinsengracht 808 at 265 m) | Compact behind-the-Prinsengracht walk; the insurer's corner is the far end but on the way. |
| eil-kadijk, Kadijksplein and the old sea dike (brus3k6wsu74kcdv4qgrf7k5) | keep | (Arcam pavilion; Entrepotdok at 344 m) | 9 members, a long but linear walk along the dike. Arcam and the Museumhaven are the odd ones in a "sailors, skippers and cheap beer" story, but they sit on the Kadijksplein edge and no neighbouring cluster suits them better. |
| eil-bastions, The eastern bastions (o7wtwwzr0n812u3omd648p03) | keep | none | One edge-of-town story from Centrale Oost to the Funen; spread up to 326 m but linear. |
| nz-drink, Drink and smoke behind the Nieuwe Kerk (jq16qyuhhic70pdptt84tcac) | keep membership, fix title and text | De Drie Fleschjes (standalone Amazing, vknzgi00blo9vr1vr3q4s7nj); Molsteeg 4 | The live cluster has 3 children (Port van Cleve, De Vorstenlanden, Molsteeg 4), yet its title, summary and pin (Gravenstraat 14) lead with "the tasting room", which is a separate Amazing place 12 m away. A visitor sees the same tasting room twice. Retitle around Heineken's beer house and the cigar shops, move the pin to Die Port van Cleve, and keep De Drie Fleschjes as a one-line pointer. Molsteeg 4 is off-theme (a boy's first stone) but needed for the minimum of 3, and it sits between the members; if it goes, dissolve the cluster and let Die Port van Cleve stand alone. |
| nz-spui, Spui, where Provo was born (l1awc3rqmfpgktsp5zqwnl18) | keep | none | Eight places round one square; the Kloppenburg bridge and the HELP neon tell one story. |
| oz-voc, The East India House and the Koestraat (heoglsc980zoy9jsqjdrqnoj) | move | Compagnietheater: to "The Trippenhuis ... a Kloveniersburgwal walk" (rgb0qd6oba8s7sf2zfy2a5yc, 5 members) | The former Lutheran church is on the Kloveniersburgwal, 52 m from a Trippenhuis-walk member, and has no VOC or Koestraat link; the remaining three (East India House, Koestraat, wine merchants' guild house) make a tighter story. |
| nz-palace, Behind the Palace (wwk17qjojkuw89oq1riokm1b) | keep | Walk of Pride; P.C. Hoofthuis | Both sit within 70 m of the pin; the Walk of Pride starts here by the Dam. Its other end is the Homomonument (standalone, h717mexcm82kxcygf7pl8grb), whose text does not mention the tiles; add a line there rather than moving the member. The P.C. Hoofthuis fits "behind the palace" geographically and the body uses it as the start. |
| gz-leidsestraat, Leidsestraat and its canal corners (fj4xhnnccon6yhjnji63fifs) | keep | none | 9 members on one street axis from the Koningsplein, within 180 m. |
| nm-ruijterkade, De Ruijterkade behind the station (au0cv48yf5pqtbkhm8qe21df) | keep | none | One quay, five places; Oud Nico at 266 m is the natural end. |
