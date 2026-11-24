# Slice `gone`: notes (2026-11-24)

Drafts: `research/hofjes/places/gone.yaml`, 37 entries (discovery.md section B, minus the
Oude Doelenhofje gate, Schippershofje entrance, Bussenschuthofje gable stone and the
Vossengang, which other slices cover). All `category: hidden-history`, `attributes.status: Gone`.

## Today values (`override.attributes.today`)

| Today | Count | Entries |
|---|---|---|
| Gone | 23 | Zonnehofje, Hamershofje, Fontainehofje (Keizersgracht), Henriëtte Hofje, Appelhofje, Klaverbladshofje, both Turfdragershofjes, Lutherse Diaconiehofje, Anjeliershofje, Bijbelshofje, Trompettershofje, Van Beeck's Hofje, Herdershofje, Karseboomshofje, Hoedenmakershofje, Salamanderhofje, Mosterdpothofje, Emmenesserhofje, Tamboershofje, Ockershofje, Moenshofje, Hij is mijn Borg |
| A trace left | 11 + 1 | Klein Schippershofje, Kokshofje/Klokkenhofje (the 1766 synagogue), Spiegelhofje, De Witte Os, Gruttershofje, Houtkopershofje (gable stone back since Oct 2022), Het Klooster, Lombardshofje, Keizershofje, Stuurmanshofje, Wassende Maanshofje; plus Catharinahofje Egelantiersgracht (see conflicts) |
| Unconfirmed | 2 | Groenehofje (two addresses), Brillenhofje (site uncertain) |

**Deviation from the slice brief:** the brief said `Gone` or `Unconfirmed`, but 12 sites still
have a passage, gate or stone recorded in the city's own "Gangen en sloppen" dataset
(maps.amsterdam.nl/sloppen, open_geodata SLOPPEN) or in a dated source. For those I used
`A trace left`, and I titled them "(former)" rather than "(gone)". If the map keeps "(gone)" in
every title for status Gone, rename those 12. Ranks: Nice for Kokshofje, Fontainehofje,
Henriëtte Hofje, Houtkopershofje, Turfdragershofje Prinsengracht, Lutherse Diaconiehofje,
Ockershofje and Moenshofje; Okay for the rest.

**Validator:** `research/centrum/scripts/validate.py` does not allow the `override` key. A copy
with the `override:` lines stripped validates clean: "37 places, 0 with errors, 0 duplicate titles".
`dc import <listView>` reads `override` as LIST-VIEWS-SPEC.md describes.

**Gang courts:** most of these were never charitable foundations. They were courts of rented
houses or alleys that got called "-hofje" on 19th-century maps. The texts say so where a
source does (Lombardshofje, Hoedenmakershofje, Bijbelshofje, Zonnehofje). Only these have a
known founder or foundation: Hamershofje, Fontainehofje, Henriëtte Hofje, Houtkopershofje
(1819), Lutherse Diaconiehofje, Catharinahofje, Van Beeck's Hofje, Ockershofje, Moenshofje
and Kokshofje (owned by the Jewish community). By the brief's own definition, the others are
borderline. They are on the map anyway, as the user asked for every hofje.

## Pins

- **amsterdamhistorie.nl/hofjes:** its point is used where it lies on the right block.
- **Where the old number no longer exists:** BAG (PDOK) building points of the nearest
  surviving address, or the passage line from the city's gangen dataset.
- **Turfdragershofje, Prinsengracht:** the amsterdamhistorie point is about 80 m off, so the
  pin is BAG Prinsengracht 933.
- **Kokshofje/Klokkenhofje:** the street plan of Uilenburg changed. The pin is the
  amsterdamhistorie point, about 45 m west of the synagogue (Nieuwe Uilenburgerstraat 91,
  52.370212, 4.905264).

## Conflicts and unsure items

- **Groenehofje:**
  - amsterdamhistorie gives Nieuwe Looiersstraat 33.
  - Blok gives "73 tusschen 88 en 90", leading to the vervallen Nieuwe Groenewoudshofje (Atlas 1876).
  - The pin is between 88 and 90. Today: Unconfirmed.
- **Brillenhofje:**
  - amsterdamhistorie gives Willemsstraat 196.
  - Blok gives Goudsbloemgracht 51/52 (old numbering).
  - theobakker suggests an inner court behind the Constantiahofje (149-165).
  - Unplaceable on present evidence. Today: Unconfirmed.
- **Catharinahofje, Egelantiersgracht:** sources disagree on whether the passage survives.
  - theobakker (jordaangangen.pdf) says "Ook de Vierhuizengang is verdwenen voor de rigoureuze nieuwbouw".
  - The city's gangen dataset still lists the Vierhuizengang at 213-215 (publiek, overbouwde gang).
  - Set to A trace left with `check: Still there?`. A street visit settles it.
- **Klein Schippershofje:** the city dataset's "Klein Schippershof" passage (Oudekerksplein
  22-28) sits close to the Schippershofje that another slice covers. The coordinator should
  check that the two pins and texts don't describe the same passage.
- **Henriëtte Hofje:**
  - Residents: nl.wikipedia says elderly ladies, amsterdam-monumentenstad says female domestic staff. The text leaves residents out.
  - amsterdamhistorie claims a move to Marnixstraat 237-241 with demolition in 1969. Not confirmed elsewhere, so not used.
- **Van Beeck's Hofje:** founding date conflict.
  - amsterdamhistorie gives 1655, which is the first record of the Schuiermakersgang.
  - The Voorloopige lijst (1928) gives 1735; deeds of 1715 and 1741 already call it the Mennonite hofje.
  - The text gives the dated facts without picking a founding year.
- **Herdershofje:**
  - amsterdamhistorie says it went between 1876 and 1906.
  - Blok lists the name to 1935 (Tram25, AS30, SvA35).
  - The text says the sources differ.
- **Salamanderhofje:** which alley led in is uncertain (theobakker: 34-38, 38-40 or 44-60;
  "bronnen spreken elkaar tegen"). The pin is at 34-36, following Blok.
- **Trompettershofje:** amsterdamhistorie gives 1621-1946. The Voorloopige lijst (1928)
  confirms 1621.
- **Ockershofje:** amsterdamhistorie names Adriaen Ocker as founder. theobakker points out
  that he died c. 1608 and the Kromme Palmstraat site was not sold before 1648. The text keeps
  that distinction.
- **Hamershofje / Hamer- en Bouwershofje:** a gone predecessor of the existing hofje at
  Marnixstraat 281. Make sure the Marnixstraat entry does not duplicate this story.
- **Fontainehofje, Keizersgracht** and **Catharinahofje, Egelantiersgracht** are the old sites
  of existing hofjes (Valeriusstraat 198, Overtoom 224), so the titles carry the street.
- **Lutherse Diaconiehofje:** its residents went to the Lutherhof (Staringplein) in 1909.
  Cross-link if the Lutherhof is in the pool.

## Photos

- **Used (all Commons, Stadsarchief or RCE scans):**
  - Lamberts 1817 (Hamershofje), PD.
  - Stadhouderskade 85 1900 and Wenckebach (Henriëtte Hofje), PD.
  - Rieke 1875 (Turfdragershofje Prinsengracht), PD.
  - Schouten 1797 (Bijbelshofje), PD.
  - Stadsarchief 1936 (Lombardshofje), 1933 (Keizershofje) and Jan 1938 (Moenshofje), PD per Commons.
  - RCE "Ingang van het hofje" 20015110 (Moenshofje), CC BY-SA 4.0.
- **Not used:** Herman Misset drawings (Konijnenstraat 1905, Egelantiersgracht 1909,
  Turfdragershofje 1909, Van Beeckshofje 1901). Commons tags them PD, but Misset died in 1958,
  so they are not public domain until 2029. Cited as sources only.
- **Not checked:** the Postma drawing of the Houtkopershofje (Stadsarchief 010097001553). It is
  linked from the beeldbank but has no photo entry.

## Sources (non-Wikipedia)

- amsterdamhistorie.nl/hofjes (map data: addresses, dates, aliases)
- W. Blok, *Alfabetische Lijst van Gangen in Amsterdam* (velehanden.nl PDF)
- J.Z. Kannegieter, *Het ontstaan van de Amsterdamse Jordaan*, ch. VII-2 and VIII-2 (amsterdamhistorie.nl/jordaan/kannegieter)
- Theo Bakker:
  - "De Jordaan, koninkrijk der sloppen" (theobakker.net/pdf/jordaangangen.pdf)
  - "Amsterdamse hofjes" (theobakker.net/blaadje wk30, wk31, wk40, wk46)
  - topotekenaars.pdf
- City of Amsterdam, Gangen en sloppen dataset (maps.amsterdam.nl/sloppen; open_geodata SLOPPEN)
- BAG via PDOK (locatieserver and BAG OGC API): addresses and building years
- *Voorloopige lijst der Nederlandsche monumenten*, deel V-II Amsterdam (1928), DBNL
- hofjesinamsterdam.nl (Fontainehofje, Catharinahofje, Lutherhof, Hamer- en Bouwershofje)
- Stadsarchief Amsterdam:
  - news "Het Fontainehofje" (27 Feb 2024)
  - blog "Aan het juiste adres (9): gangen en hofjes" (26 Feb 2024)
  - beeldbank
- amsterdam-monumentenstad.nl (grachtenboek: Herengracht 130, Lijnbaansgracht 274-275)
- joodsamsterdam.nl (Zonnehofje; sloppen Valkenburgerstraat; Uilenburgersjoel)
- uilenburgersjoel.nl (Herinneringen van morgen)
- gevelstenenvanamsterdam.nl (Nieuwe Looiersstraat 58, Houtkopershoffie; Valeriusstraat 198)
- *De Nieuwe Vijzelcourant* 2021/1 (prre.net PDF)
- Margry, Reynaerts and Vis, *Het verdwenen hofje* (Vantilt 2017), publisher's text
- adamlink.nl (street and alley identifiers)
- familiedeclercq.com (Stadsarchief charters: Van Beeckshofje directors 1745)
- Kirkehistoriske Samlinger (tidsskrift.dk), on the 1668 Konijnenhofje decision
- Wikipedia (cross-check only): nl Stadhouderskade 85, Konijnenstraat, Spiegelpleintje
