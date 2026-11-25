# Centrum photo gaps, second pass (RCE, Stadsarchief, Mapillary, Flickr)

Sources: RCE beeldbank (Memorix API), Stadsarchief Amsterdam beeldbank (only "Auteursrechtvrij" photos),
Mapillary (CC BY-SA 4.0, frames since 2022, aimed at the place), Flickr via Openverse (CC BY / BY-SA / CC0 / PDM).
Note: Mapillary image URLs are signed and expire; the sourceUrl carries the image key (pKey) to refetch.
Most Amsterdam numbers here (2xxxxx) are municipal monuments, so the RCE beeldbank has little for them.

Checked: 81 of 81. Found for 20 (fixes/photos-2.json): Stadsarchief 12, RCE 6, Mapillary 1, Flickr 1. Still without: 61.
The Mapillary entry's url is a signed CDN link that expires; refetch thumb_2048_url via the key in sourceUrl before upload.
Stadsarchief photos are all marked 'Auteursrechtvrij' (public domain); RCE photos are CC BY-SA 3.0.

## Places still without a photo

| Rank | Place | Id | Why |
|---|---|---|---|
| Nice | Café De la Paix, where the COC began (Leidsestraat 67) | t8pqots0bt62opq7o8nntrq3 | Stadsarchief 1917/1918 photos show nos. 67-71 marked for demolition, so not the 1946 café building; Mapillary frames do not identify nos. 67-71 |
| Nice | Beta berlayar jauh, the Moluccan marines' monument | xfz0lp41wyazu32abhv8il7y | Unveiled April 2026 on the closed Marineterrein quay; no Mapillary frames since 2022 within 45 m; nothing on Flickr/Openverse; RCE and Stadsarchief nothing |
| Nice | Coentje Gansplantsoen, the hidden garden named after a toddler | w9z1o3rput0eosgpll69vn03 | Walled courtyard garden behind a gate; Mapillary only two 2023 panoramas 40 m off, garden not visible; nothing in Stadsarchief or Flickr |
| Nice | Henri Julien, the watchmaker's house on the Rokin | satcjl0c04vo3xat5o2ks5ed | Mapillary frames on the Rokin (2023-2025) do not single out no. 36; Stadsarchief has only a 1943 frame with no. 36 cut off; RCE only drawings |
| Nice | The Knobbeliep, Amsterdam's own knobbly elm | slq4nv5l02xm1l0kcdfegsd9 | Mapillary 2023-2025 frames of the Westermarkt show several elms; the knobbly one cannot be told apart with certainty; no Flickr/Openverse or archive hit |
| Nice | The Schietbaan, a navy firing range turned into a grandstand | eca42qma36vf0m6a538q08jw | No Mapillary coverage on the Marineterrein tip; no Flickr/Openverse, RCE or Stadsarchief hit |
| Nice | The oldest wild fig of Amsterdam, Drieharingenbrug | wcd941xyzvz7i9xkqckuz1sy | No Mapillary frame near the quay wall; Stadsarchief has only pre-1930 bridge views (fig self-sown c. 1990) |
| Nice | The pick-your-own herb garden and the champion leaning poplar, Weteringplantsoen | yeanyepzb2scj6cyuxs6z2qx | Mapillary frames (2023-2025) are taken along the Weteringschans, herb garden and leaning poplar not identifiable; Stadsarchief only 1930s views |
| Okay | 't Seepaert, a wartime warehouse with a modern secret | jy33f924n5vp6m5elxg5wwyx | Mapillary frames on the Prinseneiland (2024-2026) are oblique, front with the concrete wall not identifiable; RCE only a gable-stone close-up; Stadsarchief nothing |
| Okay | Aby Jetomim, the Portuguese boys' orphanage (Plantage Middenlaan 80) | fr812hcp5sxlf6ofioh57z7u | Mapillary 2023-2026 frames of the Plantage Middenlaan do not single out no. 80; Stadsarchief and RCE nothing free |
| Okay | Art under Centraal Station, tomorrow's weather and a mosaic seen through peepholes | yyjnvqxkb9isco2ro7mdag20 | Underground metro hall art; Mapillary frames in the hall show neither the weather screen nor the mosaic; nothing on Flickr/Openverse |
| Okay | Bickerseiland renewal housing | r6vllytg40eanlgg9gtpvkx1 | Mapillary has only two 2025 panoramas aimed elsewhere; Stadsarchief photos predate the 1972-1982 renewal; nothing on Flickr/Openverse |
| Okay | Boldoot's coach house (Langestraat 47) | tfyxqtxjrewdrsmnfs2hcpy1 | Mapillary has only two 2025 panoramas aimed past the coach house; nothing free in Stadsarchief; no RCE or Flickr hit |
| Okay | Chagall Gallery Wuyt, a canal house full of Chagall prints | cvp5feqplou8q2gmzwvxdaky | Ordinary front, gallery visible only inside; Stadsarchief Spiegelgracht 30-38 view is late and not identifiable; Mapillary not identifiable |
| Okay | The 120-year-old wisteria of the Amstel (Amstel 169–171) | vrfzern93eig86ybut3b0v09 | Mapillary 2022-2026 frames show the climber only behind cyclists or at an angle; no clean frame; Stadsarchief c. 1938 view not identifiable |
| Okay | Café Eik en Linde (Plantage Middenlaan 22) | awjvl1lzomqloecde27m7azt | Mapillary frames show the Hollandsche Schouwburg next door, not the café front at no. 22; nothing free in Stadsarchief, nothing on Flickr/Openverse |
| Okay | Café Krom, the Monopole Bar of 1913 on the Utrechtsestraat | ax8o7aj5lqn7wx1q9lod5ze0 | Mapillary frames along the Utrechtsestraat (2023-2025) do not single out the corner at no. 76; Stadsarchief only an odd-side view |
| Okay | The phone box library of the Boomstraat | rfxd4avj5e7wlgiy6v4ym9pb | Mapillary 2023-2025 frames of the Boomstraat corner show the shopfronts but not the phone-box bookcase; nothing on Flickr/Openverse |
| Okay | The bitters seller's little stepped gable | ko43uev4nt66jfyiz1s4hpbw | Mapillary frames along the Kerkstraat do not show the one-storey house clearly; nothing free in Stadsarchief or RCE |
| Okay | De Naaister and the corn measure, Bergstraat | y5bilt7dvjipxwwzr8qyheyn | Stadsarchief has only old Bergstraat views (statue is from 2017, stone returned later); no Mapillary frame shows the statue or the stone |
| Okay | De Swarte Mvele and the De Vries van Buuren building (Waterlooplein 3) | f9jgphhhiwhy7v43hhef0vgv | Stadsarchief Waterlooplein 3-7 view does not show the side wall or the mill stone; Mapillary not identifiable |
| Okay | Gas mantle factory with rooster tiles (Herengracht 267) | z4h8npqrr8jc8ancu4mj6t0e | Stadsarchief Herengracht 267-271 (B. Knopper) has the workshop only cut off at the edge; RCE 1963 overview too general; Mapillary not identifiable |
| Okay | Gebouw De Fakkel, the newspaper printers' front | t5h7hh0wm45np92zfupqm446 | Stadsarchief frames (1927 Busman bar, 1970s McDonald's) do not show the Kromhout front and tile frieze clearly; Mapillary not identifiable |
| Okay | Jac. Baars's own house (Henri Polaklaan 11) | xg8dx0w2nsaez0q6bu4p394e | Stadsarchief 1940 view of Henri Polaklaan 9A-13A does not single out Baars's yellow-brick house; Mapillary not identifiable |
| Okay | Liefde is 't Fondament, the 'papist' hofje | mrw332h6gn0yxjwn5m2wyft1 | Stadsarchief views (1867-1883) show the hofje fronts before the 1912-1914 rebuild; no later free photo; Mapillary not identifiable |
| Okay | The excommunicated apostle's church on Prinseneiland | kc8zl5mchmhnidrs1gsok2mg | Stadsarchief 1950 Prinseneiland views do not single out no. 89; Mapillary not identifiable |
| Okay | Hans Brinker Budget Hotel, proudly the worst | m0goh9ysmwnkcyfzmffclwha | Flickr 'Kerkstraat at Night' (alusch) shows a HOTEL sign that cannot be tied to nos. 136-138; Mapillary one frame, not identifiable; Stadsarchief nothing free |
| Okay | Garage De Hoofdstad, a car park from 1917 | ydy2cfnoj6p9m0ryaq6zgmwu | RCE 1963 view of Prinsengracht 540-544 does not show the 1917 wavy front clearly; no Mapillary frame since 2022 aimed at it; Stadsarchief nothing free |
| Okay | Harry Elte's first synagogue (Nieuwe Kerkstraat 10–14) | lf9gf56u8f04rj6hm56mcxfk | No Mapillary frame aimed at nos. 10-14; nothing free in Stadsarchief; RCE nothing |
| Okay | Havana, a cigar factory in a former stable | fhdms8earfskhtsgitxrrf3s | No Mapillary frame aimed at the front; Stadsarchief and RCE nothing; Flickr/Openverse no match |
| Okay | Plukbos, the food forest behind the Wittenburg blocks | srn4uj1q14br9ow9lf71ksqn | Inner-court food forest; no Mapillary frame; Stadsarchief only pre-war street views; nothing on Flickr/Openverse |
| Okay | Sarphati's bread factory (gone), Nieuwe Weteringstraat | p9w447f33n4plfkc2fidkx77 | Gone; Stadsarchief has an 1879 building drawing (Vijzelgracht 28) but no free photo of the bread factory itself |
| Okay | Second-hand gables of the 1930s | ujc3i3qzky641epjpyooqh4x | No Mapillary frame aimed at no. 35; Stadsarchief and RCE nothing for no. 35 |
| Okay | The Marionettentheater in the old Smederij | uj9e5r0yvdw0jjjra7e6y4lz | No Mapillary frame aimed at no. 8; Stadsarchief nothing free; nothing on Flickr/Openverse |
| Okay | The first stone of a five-year-old (Korte Koningsstraat 14) | mi4rjrsg88upigw72zlyhrpm | No Mapillary frame aimed at no. 14; Stadsarchief and RCE nothing |
| Okay | The garden house that moved behind Keizersgracht 62 | ipfhqi07gu2rgi5de3e7jr1u | Garden house behind the canal houses, not visible from the street; no archive photo found |
| Okay | Van Kollem's clothing factory dressed as canal houses | genspucmsx8ra9g234no85pg | No Mapillary frame aimed at no. 62; Stadsarchief only a 1917 view of the other side |
| Okay | Huis Wilhelmina, a house in an alley | cl73lqpm5yf79rtctnuji61q | Mapillary 2023-2025 frames of the Geldersekade do not show the one-window front clearly; Stadsarchief only Vingboons reproductions |
| Okay | Justus van Maurik's cigar factory | w2myuvfp68uudv81syym56p8 | Mapillary frames along the Spuistraat do not single out nos. 64-70; nothing free in Stadsarchief |
| Okay | Kalverstraat 10, the booksellers' palace above the shops | yb6cfvlm9nvxifdz273f8jkb | Kalverstraat frames show only shopfronts, never the upper front with the busts; Stadsarchief and RCE only drawings or other numbers |
| Okay | Molsteeg 4, the first stone laid by an eleven-year-old | iexda83idlscpnnazenvtm1i | Mapillary frames in the Molsteeg do not show no. 4's caryatids or stone; Stadsarchief 1939/1942 views show nos. 1-9 (other side) |
| Okay | Twentsche Bank archive, five fronts that are one building | dd1la5yblxtk5qagdgptpkoh | Stadsarchief views show Het Torentje or the 1939 building site, not the finished bank archive; Mapillary not identifiable |
| Okay | Wertheim & Gompertsz, a bank for American railway shares | r1d5sba5vdybktxios05bz0r | Stadsarchief c. 1905 Flora view has the bank only cut off at the left edge; Mapillary and RCE nothing identifiable |
| Okay | Het Huis, Eduard Cuypers' design workshop | qwlmm62olnsspfdn9t0kux6y | Nos. 312-314 not singled out in Mapillary frames; nothing free in Stadsarchief; RCE nothing |
| Okay | Het Veilinghuisje, the auction house everyone thought was demolished | ykinnyg8tbrbdhh8o3hhjkdc | Inner-court building, not visible from the street; no free Stadsarchief or RCE photo found |
| Okay | Kapel Immanuël, Amsterdam's first Pentecostal church | kku5v3x7n46l3nlyu2lyjhg6 | Church hall inside a housing block; Mapillary frames do not show nos. 342-344 clearly; nothing in Stadsarchief or RCE |
| Okay | Langestraat 3-19, one office that swallowed a row | evd18t9gd41t6nzz2ofh8heg | Stadsarchief nothing free for nos. 3-19 (RCE only a gable-stone close-up of 17-19); Mapillary frames since 2022 near the spot checked, none shows it identifiably |
| Okay | Lindenbaum's printing works and the boy's first stone (Reguliersdwarsstraat 10) | pnrb175tr81kptfva7jpjrh5 | Stadsarchief and RCE hits are other numbers (Korte Reguliersdwarsstraat, no. 100-108); Mapillary frames since 2022 near the spot checked, none shows it identifiably |
| Okay | Nes 118, the cellar in the famous hiding photo | cccvet9bozuvua2qmko5d91g | The Oorthuys cellar photo is not free; Mapillary frames since 2022 near the spot checked, none shows it identifiably; Stadsarchief nothing free for Nes 118 |
| Okay | Premsela & Hamburger, the jewellers of the Nieuwe Hoogstraat | c85ddsoh5ej344b2yvi86lji | Stadsarchief only a 1945 view of the opposite corner; Mapillary frames since 2022 near the spot checked, none shows it identifiably |
| Okay | Rembrandtplein 44, an Amsterdam School front for a night out | f6hct13pb5dsx2vws30rm5ny | Stadsarchief has nothing free after the 1918 front; Mapillary frames since 2022 near the spot checked, none shows it identifiably |
| Okay | Ruijtergaard, a food forest in crates on the IJ quay | byrfvkvij8lzjrp4yecshqq0 | Mapillary frames on the De Ruijterkade (2023-2025) are car shots, the crates not identifiable; nothing on Flickr/Openverse |
| Okay | Senembah's office on the Leidsegracht | u9znmm943q6ms0lex1bbxa67 | Stadsarchief only a business-card record and a distant view; Mapillary frames since 2022 near the spot checked, none shows it identifiably |
| Okay | Spuistraat 34, where Berlage got his first job | hzm105qev6wg4xap2126hl0y | Stadsarchief view of Spuistraat 32-44 has no. 34 too small to use; Mapillary frames since 2022 near the spot checked, none shows it identifiably |
| Okay | Stolpersteine for Meijer and Regina Turfkruier | xa5qogswc15o84txcx33ly1h | Brass stones laid January 2026; Mapillary frames are street views where stones are not legible; nothing on Flickr/Openverse |
| Okay | Stones that came home, Bickersgracht 14 and 22 | sp24qjunc0hkptv44wjz68v3 | Gable stones back since Aug 2022; Mapillary frames do not show them legibly; RCE 1959 photos predate the return |
| Okay | The other Mart Stam's office (Herengracht 303) | g4o5j2mvg2dsmrohbkzg26gg | Stadsarchief 1910 view predates the 1919-1920 front; Mapillary frames since 2022 near the spot checked, none shows it identifiably |
| Okay | Tjerk Hiddesschool, the school children fought over and Constant's studio | oyab8lbwbrnd9wbnb43wkhiz | Stadsarchief has only other numbers of the street; Mapillary frames since 2022 near the spot checked, none shows it identifiably |
| Okay | Tkramrepus, the reverse supermarket in the Czaar Peterstraat | td894hd1f41q5d0rzm2upozo | Opened 2022; Mapillary frames on the Czaar Peterstraat do not show no. 233 identifiably; nothing on Flickr/Openverse |
| Okay | Waterline, a red figure on the quay wall | d8uytodxme83nrgtia38n2f9 | Figure on the quay wall from 2025; Mapillary frames (two) do not show it; nothing on Flickr/Openverse |
| Okay | Wegewijs, the Rozengracht grocer since 1905 | zpwtrlv8nf1eqipqq1vs3sny | Mapillary 2023-2025 frames of the Rozengracht do not show the Wegewijs front identifiably; Stadsarchief only an old street view |
