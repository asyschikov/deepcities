# Notes: vondelpark slice (Oud-West: Vondelparkbuurt)

There are 42 places in `places/vondelpark.yaml`. 35 cover monuments, made by merging the slice records; 7 are not monuments. The validator reports 0 errors. Every point except the Vondelpark itself falls inside Vondelparkbuurt, checked with `areas.locate`.

## Merges (monument numbers per place)

| Place | Monuments |
|---|---|
| Villa Betty | 491951 villa, 491961 coach house (Overtoom 243-245), 491971 footbridge |
| Notary's houses (Overtoom 247–253) | 224028, 224061 |
| Zevenlandenhuizen | 491879, 491886, 491894, 491901, 491909, 491917, 491924 (the slice gives "30" for both 491917 and 491924; 491924 is 30A, England) |
| Villas at the park end of Roemer Visscherstraat | 224017, 224019, 224018, 492074 |
| Gemeentetram headquarters | 491984, 491994 (utility building and porter's lodge) |
| 1914 shops and workshop | 224025 (Overtoom 21-25), 224027 (Overtoom 45) |
| Start of the Vondelstraat | 224007 (10-14), 224023 (9), 492011 (13) |
| Cuypers' first houses | 224039, 224002, 224015 |
| Cuypers' own villas | 492043, 492050, 5905, 5906 |
| Vondelkerk | 5907 church, 524833 parsonage |
| Garden buildings on the Zandpad | 491934 orangery, 491941 gardener's cottage |

Each remaining monument has a place of its own. Nothing in the slice was left out.

## Added beyond the register (7)

- **Vondelpark** (complex 504733). Its pin falls in **Zuid / Museumkwartier**; see the decisions below.
- **Leidsebosje**: the thickest trees in Amsterdam, which were moved with winches, and the Beatrix lime.
- **Boomzagertje** by De Onbekende Beeldhouwer.
- **OT301**: the former Film Academy, squatted in 1999 and now collectively owned.
- **Maria Austria's hiding place**, Vondelstraat 110. She made passport photos for forged identity cards here with Henk Jonker.
- **Mural of the amazon** by Paul Watty (2025), in the Manege underpass.
- **Reade murals** (2026) by Marije Maria and OPZICH, Overtoom 283.

WWII facts were added to existing places from joodsamsterdam.nl (after Stigter, *Atlas van een bezette stad*):
- Vondelstraat 14: the Broederschap der Notarissen.
- AMVJ: the 1943 WA report.

## Decisions for the coordinator

1. **The Vondelpark lies in Zuid.** Only its northern rim belongs to this wijk. I kept the park as a place, pinned it centrally, and wrote the text about the northern edge. Choose one:
   - keep it here, accepting the area mismatch;
   - move it to a Zuid slice;
   - re-pin it on the rim near the pavilion, around 52.3612, 4.8745, which is in Vondelparkbuurt.
2. **Vondelpark 4.** nl.wikipedia puts it in Zuid, but the register point is in Vondelparkbuurt. I kept it here.
3. **Category for commercial buildings.** Offices, garages, a showroom and a timber yard are filed as `industrial`: Overtoom 141-145, the R.I.V.A. garage, Aurora, Atlanta, Van de Vijsel, and 21-25/45. Bos en Lommer put offices under civic or housing. Pick one rule for all slices.
4. **Vondelbunker / Vondelbrug** is in Zuid, so I left it out.
5. **Places without a register entry.** The AMVJ and Maria Austria places link to joodsamsterdam.nl, and the street-art places link to De Westkrant. Those sources are quoted only briefly.

## Source conflicts

- **Villa Betty architect.** RCE says "vermoedelijk H.G. Koster". nl.wikipedia and the city say P.F. (Peter) Laarman. The attribute gives both.
- **Villa Betty purchase.** RCE says Lehmann bought it in 1896. nl.wikipedia says he bought it for 80,000 guilders from the widow, with no year given. I used 1896.
- **Parkkerk denomination.** RCE: built for the "Hervormde Gemeente". nl.wikipedia: built as Gereformeerd, the congregation joining the Hervormde Kerk only after the war. The text follows Wikipedia's sequence.
- **Pavilion dates.** RCE says 1879–1881; nl.wikipedia says 1874–1881. I used RCE.
- **Pavilion goddess statues.** RCE places them "on both sides of the plot boundary". Earlier secondary sources place them beside the terrace stairs. I followed RCE.
- **Name "Oud Leyerhoven".** RCE uses it for Tesselschadestraat 31; amsterdamopdekaart and city data use it for Vondelstraat 77-79. The text mentions both.
- **Vondelstraat 77-79 date.** 1881 or 1882. I used 1881–1882.
- **Vondelstraat 65-67 architect.** The city record names the client, J.C. van Laar. amsterdamopdekaart names N. Vos. The attribute reads "N. Vos (attributed)".
- **Zandpad gardener's cottage.** Its weathervane reads 1853; the city data says 1885. I used 1853.
- **R.I.V.A. opening by Henry Ford in 1927.** The register only says "most probably". The text flags it as unconfirmed.
- **Zevenlandenhuizen client.** nl.wikipedia says Sam van Eeghen. The city register says J.W. van Eeghen and J.K. Huizinga. The text says "Van Eeghen and Huizinga".

## Dutch texts

The `nl` texts are spliced from Dutch sources: city register texts, RCE omschrijvingen, nl.wikipedia, De Westkrant, Amsterdam Alternative and Collectief Eigendom. Every source is in `links` or `nl.sources`.

The exception is Vondelstraat 65-67. Its city record has no description, so I wrote the Dutch myself from the facts on amsterdamopdekaart.nl.

## Photos

- **No photo found:** Mural of the amazon (new in 2025), Reade murals (new in 2026), Vondelstraat 81-85.
- **Archive image only:** Vondelstraat 89-91.
- **Vondelkerk:** the set includes one photo taken after the fire of 1 January 2026, from March 2026.

## Route ideas

- **Cuypers' Vondelstraat:** start of the Vondelstraat (9–14) → 36–48 → Repelius (29) → Oud Leyerhoven → freemasons' lodge → castle villa 47-49 / Huize Johanna / no. 72 → 65-67 → Vondelkerk → Cuypers' villas 73–79 → Maria Austria (110) → Manege → 81-85 → 89-91 → 101-103.
- **Overtoom, from canal to car:** Leidsebosje / Boomzagertje → Gemeentetram → Aurora / Atlanta / AMVJ → Van de Vijsel → 21-25 / 45 → mounted police → traffic police → hidden nursery school → Westerman showroom → R.I.V.A. garage → Manege mural → Villa Betty → notary's houses → Parkkerk → Reade murals → OT301.
- **Park edge:** Zandpad garden buildings → Huishoudschool → Zevenlandenhuizen → Roemer Visscherstraat villas → pavilion → Vondelpark 4 and the Enquist culvert.
