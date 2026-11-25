# Centrum cluster fixes (loose.md section B), 25 Nov 2026

Patches: `research/centrum/fixes/clusters.json` (17 items). Drafted from live data; `dc update-many --dry-run` passes on the 16 items without an upload (all would-update, no errors). Nothing written live. No ranks touched.

## 1. jo-laurier (pc2ev0nj091wiwc0gwkcxyrh)
- Laurierstraat's 1915 blocks (brr54xxs9bwiqreptq0d3olm) and Tweede Laurierdwarsstraat (lhd1532kdv5vhvsq7tqdsyt9): parentId null. Both are detail "district", so they stay on Deep Centrum as standalone places.
- Cluster EN+NL: the two sentences about them cut from the body, "blocks against unemployment" cut from the summary, the unemployment-stone look-for item dropped.
- Title kept: gables plus the Lauriergracht walk still delivers what it says.

## 2. jo-marnixplein (jaa41ej2rk2t3qtw3d9ykey3)
- Riot paragraph reduced to one pointer: the plantsoen "keeps a bastion's pointed shape and a story of its own about the riot of 1966" (NL likewise). Summary clause about the riot removed.
- Not changed: the third cluster photo is the Eerste Marnixplantsoen seen from the Singelgracht. It still fits the pointer; drop it if you want no overlap at all.

## 3. nz-station (tlp9ba6wgk9zvadb07yuunha)
- Canvas van Amsterdam (esde0b83ua681iohkzcvkglh) to Droogbak (n6htkv29sszft59dh8few57x); Lloyd building (jnr5senvcx9anonwf0ijqybk) to the Damrak walk (adqipies5fphb49b9bd6601m).
- Station: Lloyd and Haringpakkersbrug sentences and "the gilded coffin" in the summary removed (EN+NL); its Lloyd photo dropped from photoIds (koffiehuis and Mercuriusgebouw kept). The cluster keeps 7 members.
- Droogbak: one sentence on the bridge painting where the Haringpakkerstoren stood; summary lists it (summary now exactly 280 chars in both languages, "that shut off the harbour front" trimmed to make room).
- Damrak: one sentence on the shipping line's stone office on the Martelaarsgracht corner, "the gilded coffin"; summary lists it. NL summary names "de neonpijl van de Cineac" to stay under 280.

## 4. nz-drink (jq16qyuhhic70pdptt84tcac)
- Title: "Drink and smoke behind the Nieuwe Kerk: Heineken's beer house and a cigar shop" / "Drinken en roken achter de Nieuwe Kerk: Heinekens bierhuis en een sigarenwinkel" (singular: only one cigar shop is a member).
- De Drie Fleschjes: Bootz distillery paragraph cut to a single pointer sentence; its look-for item dropped; summary ends "The oldest tasting room is round the corner."
- Pin moved to Die Port van Cleve (52.374044, 4.890699), address now Nieuwezijds Voorburgwal 176-180.
- photoIds: the De Drie Fleschjes cover photo dropped; the Port van Cleve front (r14hcguoqd6142mowtypex9s) becomes the cover.

## 5. oz-voc (heoglsc980zoy9jsqjdrqnoj)
- Compagnietheater (nbj11zik8thpzc180j9i4aa0) to the Trippenhuis walk (rgb0qd6oba8s7sf2zfy2a5yc).
- East India House: Kloveniersburgwal 50 paragraph, summary clause and the Ziesenis look-for item removed; the theatre photo dropped. Leaves 3 members.
- Trippenhuis: one sentence on the church at no. 50 (across the water from De Engelbewaarder), the Ziesenis look-for item added, summary lists "a church turned theatre" (ends "along the Kloveniersburgwal" to fit 280).

## 6. gz-disguise (kd15mp0ddrz33u3inb3szidm)
- photoIds: `UPLOAD:commons:File:Gevelsteen_Kerkstraat_404.jpg` (the landscape stone photo from Four views of Den Helder, Marion Golsteijn, CC BY-SA 3.0). Upload with `dc photo sights commons:File:Gevelsteen_Kerkstraat_404.jpg` and put the id in.
- Child brqbfl333rbq3smayl3nf1th retitled "Keizersgracht 826 and Nieuwe Spiegelstraat 55, Van Houten's recycled gables" / "Keizersgracht 826 en Nieuwe Spiegelstraat 55, de hergebruikte gevels van Van Houten" (both addresses, since the place covers both).

## 7. Homomonument (h717mexcm82kxcygf7pl8grb)
- One sentence added to the "daily use" paragraph, EN+NL: since July 2026 the Walk of Pride, more than fifty bronze tiles with queer names and stories, has led here from the Dam through the Raadhuisstraat. Built from the Walk of Pride's live text.
