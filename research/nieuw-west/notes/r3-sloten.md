# Nieuw-West round B, slice "sloten": notes

5 new places in `places/r3-sloten.yaml`; 8 merges, one existing-place update and one pointer in `places/sloten.yaml`, `places/green.yaml` and `places/r2-sloten.yaml` (titles unchanged). All four files validate with 0 errors. Every new pin point-checked with `scripts/areas.py`: all in borough Nieuw-West.

## New places

| Scout | Title | Category | Rank | Flags / outlook |
|---|---|---|---|---|
| 201 | Biber submarine "Fenix", Sloterweg | curiosities | Nice | check: Still there? |
| 205 | Wees- en Armenhuis and Speeltuin Sloten | hidden-history | Okay | none |
| 214 | Amsterdam South Connection heat station | industrial | Okay | none |
| 235 | Tuinen van West | green | Nice | outlook: Major change ahead (decision due in 2027) |
| 239 | Raesberg and the lost village of Raesdorp | green | Nice | none |

## Merges and updates

- 202 Tolhuis and the toll: paragraph and Look for line in "Sint-Pancratiuskerk (Sloten)" (EN + NL), link, sources, and a 2025 Commons photo of the toll house added as the last photo.
- 203 Annexation stone, GEB doors, telephone, time capsule, De Buisonjé: paragraph and an extended Look for line in "Dorpsplein Sloten and the police post".
- 241 Tuinpark VAT history: folded into the existing Wiedster Look for line in "Dorpsplein Sloten and the police post" (1916 potatoes, club 1919, lease ended 1952, 116 members moved, opened 28 June 1958). Source: the club's own history page (vat-sloten.nl/historie).
- 204 Sloten's arms on the Akergemaal: Look for line in "Molen van Sloten" (green.yaml).
- 206 Bell JERON: sentence in "Sloterkerk".
- 207 Bundle lime: Look for line in "Nieuw en Meer". Note: slotenoudosdorp's Aug 2026 headline says "in De Oeverlanden", but both articles place the tree on the Nieuw en Meer grounds (gathering point Oude Haagseweg 125, south side near the Ringvaart); kept in Nieuw en Meer. Status: advice for monument status 27 May 2026, borough decision pending.
- 208 Osdorperweg 1 (1692) and the Vleeschhouwerij lettering at Sloterweg 1233: two Look for lines in "Sloterweg village houses".
- 226 B. Amsterdam and The David: paragraph and Look for line in "IBM headquarters, Johan Huizingalaan".
- "Lutkemeerpolder": text in both languages updated (Vega Amsterdam / Lamme laundry, building started end Oct 2026, laundry from early 2028; Voedselpark's objections; N5 still conventionally farmed in late 2025; Raad van State ruling awaited). Outlook set: Under threat, `outlook_when` "laundry due early 2028", note in EN and NL. Pointer to "Tuinen van West" added in the Look for list.
- "Banpaal Spaarnwouderdijk" (r2-sloten.yaml): Look for line pointing to "Geuzenbos" (EN + NL).

## Status evidence

- Biber: Ons Amsterdam/slotenoudosdorp (May 2020, "tot op de dag van vandaag"), OSM node 11010115163 mapped 27 Jun 2023, TracesOfWar (undated, "by the entrance of the Siegerpark"). No dated photo found; no Commons photo; Mapillary could not be checked. Not confirmed visible from public ground recently, so Nice with `check: Still there?` (not Amazing, per the user's rule).
- Wees- en Armenhuis: renovated spring 2021, photo May 2023; playground photo May 2023 (slotenoudosdorp Jul 2024).
- Amsterdam South Connection: Commons photos 2025; Staalprijs Oct 2024.
- Tuinen van West: landscape-park scenarios 2 Nov 2026; NH Nieuws Dec 2025; bird hides photographed 2022 (In between the gap, 270 degrees).
- Raesberg: Commons photos 14 Apr 2022 (outlines, bridge beams, info board); no newer evidence found, but it is landscape, not an object, so no flag.

## Conflicts and uncertainties

- **Biber address**: the scout gives Sloterweg 795 or 785; used 795 with the OSM node pin. "Pilot still inside" is written as the family story. The side of the road is not stated in the text.
- **Biber since when**: "shortly after the war" (Ons Amsterdam: about fifteen years after 1932); written as "the late 1940s" in `built`.
- **Raesberg brick outlines**: the info board's Dutch paragraph "Raesberg versus Raesdorp" is unreadable in the photo (glare). Commons calls the outlines "valse bebouwing" (fake buildings). The text describes them as outlines like house footings and says only that the board links the hill to the vanished village; it does not claim the designer's intent. Designer unknown. Wijsentkade dating (11th/12th century) from slotenoudosdorp, written as "medieval".
- **Speeltuin Sloten**: "oldest playground association in Amsterdam" and the German requisition (scout) not found in the sources read; left out.
- **Toll board in Café Kerkzicht**: from slotenoudosdorp (Feb 2024); not seen. Kerkzicht's "oldest café" claim left out.
- **ASC**: the scout's 3,600 m3 buffer and four boilers not found in a source read; left out. Vattenfall's 2020 coupling date taken from the search snippet of its newsroom article.
- **B. Amsterdam**: "one of Europe's biggest start-up hubs" and "IBM back as tenant" not confirmed; left out. Its site is live (Nov 2026).
- **Tuinen van West hides**: Amfibion (Commons photo 2020, "Lutkemeerpark") left out: artist not confirmed. The "Rietveld Academy contest" not confirmed; left out. "270 degrees" (round A item 107, dropped as a place) now a Look for line.
- **Tuinen van West name**: the Dorpsraad and slotenoudosdorp say the area should be called Oud Osdorp; written neutrally ("not everyone likes the name").
- **Akergemaal arms stone**: no recent photo; the gemaal is largely hidden behind a chestnut (2023 photo). Kept as a Look for line, no flag (merge into an existing place).
- **Geuzenbos pointer**: the `gs` slice writes 245; the pointer says "see Geuzenbos". If gs titles it differently, adjust the pointer in r2-sloten.yaml.

## Left out

- Nothing from the slice's item list. Claims left out are listed above.

## Places without photos

- Biber submarine "Fenix", Sloterweg (no free photo found).
- Wees- en Armenhuis and Speeltuin Sloten (no Commons photo found; Commons search was rate-limited, worth one more look under Akerpolderstraat).

## For the coordinator

- New ranks (Biber Nice, Wees- en Armenhuis Okay, ASC Okay, Tuinen van West Nice, Raesberg Nice) are not yet in `scripts/data/amsterdam-c-list-ranks.json`.
- Duplicate check: Wees- en Armenhuis pin is about 85 m from the Dorpsplein pin; ASC about 290 m from IBM; Biber about 120 m from the Siegerpark pin.
- Decision: the Biber could go to Amazing once someone confirms on site that it is still there and visible from the road.
