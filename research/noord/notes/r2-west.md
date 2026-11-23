# Noord round A, slice west (notes)

7 new places in `places/r2-west.yaml`, 6 items merged into 4 places of `places/tuindorpen.yaml`. No monuments, no food and drink. All new pins point-checked with `areas.py` (borough Noord). No duplicates: grepped all `places/*.yaml` for each item, artist and address.

## Items

| Item | Result | Rank | Category | Check |
|---|---|---|---|---|
| 105 Genie Mythology (Simbl) | **left out** (see below) | | | |
| 117 Drijfbeeld | "Drijfbeeld (Atelier Van Lieshout)" | Nice | street-art | |
| 118 Molenwijk and its art route | "Molenwijk and its art route", pinned on the Familie Woezel | Nice | street-art | Still there? |
| 121 Verzonken Stad (Šípek) | **left out** (see below) | | | |
| 122 Banne Buiksloot murals | "Ship murals, Tjalkstraat and Klipperstraat", pinned on "Life is a dream" | Okay | street-art | |
| 123 The Dutch Windmill | "The Dutch Windmill (Bep van Klaverenboulevard)" | Okay | curiosities | Location |
| 133 Hollandia-Kattenburg monument | "Hollandia-Kattenburg monument" | Nice | hidden-history | |
| 142 Atatürk hostel memorial | "Gedenkteken Atatürk" | Nice | hidden-history | |
| 143 the 1960 flood | "Flood monument, Zonneplein (1960)" | Nice | hidden-history | |
| 106 parakeet relief | merged into "Zwanenplein (Patrimonium housing)": paragraph, Look for line, photo, source | | | |
| 110 ADM monument and De Muur | merged into "IJplein": paragraph, 2 Look for lines, 2 links, 2 photos, sources | | | |
| 119 Keppler bust | merged into "'t Zonnehuis and the Zonneplein" (one paragraph with 120 and 144), Look for line, link, photo | | | |
| 120 Tellegen poems | merged into the same paragraph (they survive: Commons photos of September 2018), Look for line, photo | | | |
| 144 Tuindorp Oostzaan war memorial | merged into the same paragraph, Look for line, 4en5mei link, photo | | | |
| 145 Zuideinde 443 | merged into "Zuideinde, Oostzanerwerf": paragraph, Look for line, 4en5mei link | | | |

Titles of all merged places unchanged; nothing else in `tuindorpen.yaml` touched. A cross-reference to the flood place was added to the Zonnehuis paragraph about current use.

## Left out

- **105 Genie Mythology (Simbl, IJplein 3).** The only evidence is the Street Art Cities marker the artist himself added in September 2025 ("one of my first bigger walls back in 1990"), with one photo that could be from any year. No Commons, news or other recent photo. A May 2017 photosphere at IJplein 3 (the youth building "Dock") shows other painted walls but not this one. Existence today not established, so not written. Worth one look on site: if it is there, it is a Nice place.
- **121 Verzonken Stad (Bořek Šípek, Meteorenweg 266).** Latest photo is from 2011 (Commons); the HATO site and a 2015 blog repeat the old texts. Google Street View of April 2026 at the Kunstwacht point shows that the low striped-brick works building in the 2011 photo has gone: the site now holds modular three-storey container housing, and the three towers are not visible in front of it. Probably removed with the depot; not written. Kunstwacht still lists it.

## Status checks

- Hollandia-Kattenburg: Commons May 2022; committee site has the programme of 11 November 2026.
- Atatürk: Commons September 2023; Het Parool listed it on 19 March 2025.
- Flood monument: Commons May 2023 shows it on the newly redone Zonneplein.
- Drijfbeeld: Flickr photo taken 19 May 2025.
- Molenwijk: Woezels, balloons and Veen's signs on Commons June/July 2021; Karski and Beyond garage mural only in the Kunstwacht text (2019). Flag `Still there?` set. Pieter Holstein's 1972 signs are told as gone (nl.wikipedia). The Aldo van Eyck climbing frame mentioned in the Kunstwacht route text was left out: it could not be pinned or dated.
- Banne murals: Commons photos 14 October 2025 (Life is a dream); nl.wikipedia Klipperstraat has photos of Splash! from October 2025.
- Dutch Windmill: Commons October 2017; designer's page has a 2026 note on the trees along it, so the paving is still there. Not a stone statue (the scout's description): it is 150 m of black and white paving tiles.
- Merges: ADM monument and De Muur on Commons May 2022 (De Muur is the 2020 plastic remake); parakeets July 2022; Keppler bust September 2023; war memorial in the 4en5mei agenda for 4 May 2026; Tellegen poems September 2018; Zuideinde 443 plaque no recent photo (plaque on a private house, 2005; not flagged since the merge place is a monument ensemble).

## Source conflicts and uncertainties

- Hollandia-Kattenburg: Kunstwacht "367 deported, 8 returned" and "factory demolished in the 1970s"; 4en5mei and the committee site: demolished 1969, 359 names; nl.wikipedia: 826 deported (with families), 8 survived. Text uses 367 arrested, 826 deported, eight survived, 359 names. Name plates: Kunstwacht 10 November 1995, committee 1996; text says "mid-1990s". Kunstwacht pin and OSM node agree (52.38206, 4.91242); 4en5mei is about 50 m west.
- Atatürk: opening 1965 (Kunstwacht, nl.wikipedia, the plaque "1965-1978") or 1966 (Ons Amsterdam); text says "mid-1960s" and quotes the plaque.
- 1960 flood: evacuated 15,000 (nl.wikipedia, Kunstwacht), 11,000 (Ons Amsterdam), 10,000 (HATO); text "well over ten thousand". Breach closed "a day later" (wiki) or after 33 hours (HATO): "a day and a half". Return after a week (wiki) or two weeks (HATO): "within one to two weeks". Cause: "never explained" (Ons Amsterdam), "probably a burst water main" (HATO); text gives both. Commons files call the monument "Watersnoodramp 1950" in their titles (typo); the image is right.
- Parakeet relief: nl.wikipedia list dates it 1923, a Commons file name says 1918; no year in the text.
- ADM: the existing IJplein text says the yard ran "1879 to 1980"; nl.wikipedia ADM says founded 1877 (first dock 1879), closed 1978 and bankrupt 1985 as ADM/NSM. Left the existing sentence alone (only the merge was in scope); worth a fix.
- Klipperstraat mural: Street Art Cities and SAMA call it The Flying Dutchman, the artist (via nl.wikipedia) Splash!; both given.
- Bep van Klaveren: the 150 m of letters lie on one of the three OSM segments of the walkway; pinned on the longest (`check: Location`).

## Places without photos

None. Drijfbeeld has only a 2011 Commons photo.

## Route ideas

- **Noord-West memory walk:** Gedenkteken Atatürk, then Flood monument, Zonneplein (1960), 't Zonnehuis and the Zonneplein (Keppler bust, war memorial), Zuideinde, Oostzanerwerf (refugee plaque), Keienmonument, Oostzanerdijk.
- **Odd art of Noord-West:** Drijfbeeld (Atelier Van Lieshout), Molenwijk and its art route, Tellegen's poems (via the Zonnehuis place), Ship murals, Tjalkstraat and Klipperstraat, The Dutch Windmill (Bep van Klaverenboulevard).
- **Shipyard to IJplein:** IJplein (ADM monument, De Muur), Hollandia-Kattenburg monument, Zwanenplein (Patrimonium housing).
