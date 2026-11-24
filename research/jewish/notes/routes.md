# Jewish Heritage routes: notes

Eleven route files in `research/jewish/routes/`, in the `dc route-create` shape with
`translations.nl` on route, stops and legs. All stops are map places (ids validated against
`map-places.json`; no ad-hoc points were needed: starts and ends are described in the body).
Not yet created live.

## Sourcing

Narrations and route bodies use only facts already in the map's place texts (which carry
their own authoritative sources, see the place notes j1 to j4 and the pool notes), plus
plain wayfinding (streets, bridges, tram and metro lines). No browser checks were needed and
no new facts were introduced. Opening hours come from the place texts (Portuguese Synagogue,
Jewish Museum, Hollandsche Schouwburg, Holocaust Museum, Names Monument, Beth Haim, Zeeburg,
Diemen). Where a place text hedges (the diary at Blankevoort: "very likely"), the narration
keeps the hedge.

## Length check (pins, straight lines x1.3 walking, x1.25 cycling)

| File | Stops | Straight | Estimate | Body says |
|---|---|---|---|---|
| 01 Vlooienburg, Marken, Uilenburg | 23 | 2.1 km | 2.8 km + 0.2 from metro | about 3 km |
| 02 The Plantage | 15 | 2.7 km | 3.5 km | about 3.5 km |
| 03 Weesperbuurt and the new canals | 19 | 2.4 km | 3.1 km + start | about 3 km |
| 04 Rivierenbuurt | 12 | 3.5 km | 4.6 km | about 4.5 km |
| 05 Transvaalbuurt and Oosterpark | 13 | 4.6 km | 6.0 km | about 6 km |
| 06 Oud-Zuid 1943 | 19 | 4.4 km | 5.8 km | 5.5 to 6 km |
| 07 Diamond city | 8 | 3.5 km | 4.6 km | about 4.5 km |
| 08 Weesp (from and to station) | 6 | 1.75 km | 2.3 km | about 2.5 km |
| 09 Bike, Amstel to Beth Haim | 10 | 8.75 km | 10.9 km | about 11 km |
| 10 Bike, Zeeburg and Diemen | 10 | 7.9 km | 9.9 km | about 10.5 km |
| 11 Sarphati's Amsterdam | 8 | 3.4 km | 4.5 km | about 4.5 km |

## Order and doubling back

- 01: Rapenburgerstraat north, then the Valkenburgerstraat, a short loop round Uilenburg
  (synagogue, nursery yard, Oudeschans school, back down the Nieuwe Uilenburgerstraat), then
  west to the Jodenbreestraat and the Nieuwmarkt. The Uilenburg loop is a loop, not a return.
- 02: one small westward step (Desmet before De Burcht) so the Jews-only theatre comes before
  the Schouwburg; the last leg follows the deportation route along the Mauritskade.
- 03: two sweeps: south strip west to east (Achtergracht to Weesperplein), then the canals
  east to west (Nieuwe Prinsengracht, Nieuwe Kerkstraat, Nieuwe Keizersgracht, Nieuwe
  Herengracht). The Weesperstraat is crossed at the lights.
- 04: the Waalstraat garage synagogue (first congregation) comes after the Lekstraat (its
  successor) for geography; the narration says so.
- 05: Transvaalbuurt, then north through the Oosterpark and south-west to the Amstel; no leg
  repeats a street.
- 07: after the IJsbreker the route continues south on the Weesperzijde and crosses the Amstel
  by the Nieuwe Amstelbrug (Ceintuurbaan), not back over the Hogesluis.
- 10: Herberg Zeeburg is the far tip of the dike; the next leg goes south-west through the
  Flevopark rather than back along the dike.
- 11: Sarphatihuis, Wertheimpark, Snoge, then over the Blauwbrug to Herengracht 598, south
  along the Amstel and over the Hogesluis to the hotel, back over it to the Frederiksplein
  (the bridge is crossed twice: the only short repeat in the set, about 150 m).

## Choices

- Duplicates: used `w3sk…` (Sarphati's Amstel Hotel) in 09 and 11, `sbhp…` (Sarphati's Amstel
  end, with Sarphatistraat 66 and the exchange) in 07. Wertheimpark: used `vor93…` (mirrors) in
  02 and `srkj…` (fountain) in 11.
- Left out of the scout plans as stops: Bussenschuthofje, Zonnehofje, Kokshofje (gone, nothing to
  see; 01 already long), Uylenburgh's corner (weak Jewish link), Hortus elms (02, 03: off-line),
  Barmat house (05: off theme), Blauwbrug as an end stop (03: its Jewish nickname is not in the
  place text). Mauritskade 23-24 is in 02, not repeated in 05.
- 09: men cover their heads at Beth Haim; closed Saturdays and Jewish holidays. 10: the only
  window when both cemeteries are open is a Sunday afternoon, April to October; Zeeburg is closed
  until 1 April 2027.
- Leg directions are kept general where I was not sure of the exact street; the app routes walk
  and bike legs on streets automatically. Worth a look on the map after creation: 01 (Uilenburg
  loop), 07 (Amstel crossing), 09 (Ouderkerk: which bank Beth Haim's gate is on; the leg says
  "follow the signs"), 10 (Flevopark leg).
- Public transport named only where certain (metro stations, tram 4 Victorieplein and
  Frederiksplein, tram 14 Plantage, tram 26 Rietlandpark, trams 2, 5, 12 Van Baerlestraat,
  tram 5 Beethovenstraat).

## Gaps (places a walk would use that are not on the map)

- W1: none essential (Tip Top and Bussenschuthofje are on the map but have nothing to see).
- W2: Walter Süskindbrug and the Henriëtte Pimentelbrug have no places of their own (both are
  named in "Bridges with wartime names"); Süskind's home on the Nieuwe Prinsengracht.
- W3: Liro bank, Sarphatistraat 47; Sarphatistraat 66 as a place of its own (now inside the
  Amstel end place).
- W4: GVB tram depot Lekstraat (February strike); Kinderbrug viewpoint.
- W5: Linnaeusstraat 107, the last synagogue of Oost (mentioned in the Synagoge Oost text);
  Kraaipanstraat school (inside the Transvaalbuurt memorials place).
- W6: Van Eeghenstraat refugee boarding house.
- W7 (biggest): steam diamond works Recht Boomssloot; Nieuwe Achtergracht diamond factories;
  Diamantstraat and the Asscher housing; Van Moppes, Albert Cuypstraat; Coster villas,
  Paulus Potterstraat. With them W7 would reach the 6 km and the Museumplein ending the scout
  planned.
- B1: Riekermolen and the sabbath pole on the Amstel; the Lopes Suasso / De Castro houses on
  the Nieuwe Herengracht.
- B2: the Monument voor Joodse Betondorpers has no place of its own (it is in the Betondorp
  text, which is enough).
- W9: Sarphati's birthplace (Nieuwe Keizersgracht 49, sources disagree, nothing to see) and his
  refuse-collection works (no trace) stay out by design.

## Live (25 Nov)
All 11 created on the jewish map (route ids): 01 fdozsc4hmc9i6yrda1ddtwxz, 02 aan7xyqwndunbz53tx6bh8bm, 03 qjbqh3gnw52ykeb0d6x4vnm5, 04 mpkiv2obtem230c43g0myhel, 05 bejin7pmnlko8eyicm41udfa, 06 kdny6wouaafbpabsrf58qa27, 07 fm4y1emoby4yqoj3t48ecz5y, 08 gq9i5lj1yy1gxvd2accvrng8, 09 aq47xi14tnqa9g21ts9g20ny, 10 gtrnalwcpf3mi8zprj27mefq, 11 k1kfodd41e55qn5xmw4dcdp5. Street-routed lengths: 3.9, 3.8, 3.8, 5.1, 6.6, 6.7, 4.7, 0.8 (+ station walk), 11.9, 11.6, 4.6 km. No routing fallbacks; flagged legs are canal-bridge detours. Note: `dc route-create` has no --dry-run (the flag is ignored and the route is created). Summaries max 280 chars.

## W7 update (25 Nov): diamond pool places

Overrides in fixes/diamond-overrides.json (view field extra_description, EN and NL):

- **wx78pd7n Diamond factories of the Nieuwe Achtergracht** (1796 to 1940, Work and trade). Founding in 1845, J.J. Posno president, Wolf Josephus Jitta treasurer: the company's own jubilee history, *De Diamantslijperij Maatschappij te Amsterdam 1845-1920* (Barents 1920, archive.org; IISG holds it). "Most of them Jewish": amsterdamopdekaart (Nieuwe Achtergracht 168-170) and joodsamsterdam (Jacob Joseph Posno) agree, and the founders' names in the 1920 book bear it out; the weakest claim of the three texts. 1748 guild refusal and the 1906 share: doc 06 (W, JM 749). Gassan at no. 17 from 1963: pool text and amsterdamopdekaart; Gassan trained at Boas: Boas place text.
- **nyz7ajid Sarphatistraat 66** (1796 to 1940, Work and trade). First residents 1878 the Josephus Jitta family from Brussels, Alfred died 1878, family moved 1880: amsterdamopdekaart (Sarphatistraat 66). Alfred (1822-1878) x Fanny Polak Daniels, a Jewish family of jewellers (court jeweller title, Jewish calendars, Grand Rabbinate of Belgium papers) and the Jozef Israels portrait of Alfred, 1858: Stadsarchief, archive 30654 (Familie Josephus Jitta) inventory; Kedem auction catalogue and HP/De Tijd also call it a Jewish family of jewel and diamond merchants.
- **u1dqmquh Van Epen's Diamantbuurt** (1940 to 1945, Persecution and war; not the era/theme the coordinator suggested, because the story is the war). Joods Monument address and person pages: Topaasstraat 10 (Benedictus Adelaar 1893-1943, Engelina 1918-1943, Asser and Emanuel 1922-1942) and Saffierstraat 80 I (Isaac Aluin 1885-1943, Rachel Aluin-Kraal, Maria Aluin, all 1943); Adelaar and Aluin have ANDB membership cards (IISG) on their pages, so diamond workers. Greta Adelaar-Slap at the same address is listed as a relative, not his wife, so left out.

Skipped, no authoritative Jewish link found:
- xdzjybc6 Recht Boomssloot 14: S.J. Boas not linked to the Boas brothers in any source (not in the Stadsarchief Boas archive 1110 inventory); no source on the workforce.
- hbumzw6d Van Moppes, Albert Cuypstraat 2-6: Van Moppes there only after 1945; the family's wartime flight to Brazil rests on joodsamsterdam and a Facebook post only; the Stadsarchief Van Moppes Diamonds inventory (1313) is post-war clippings.
- bxuq5cpm Bellamystraat: built by Petrus de Voys, nothing Jewish found.
- vf4xheqr Coster villas: not researched further, as asked.

New W7 (routes/07-diamond-city.json), "Diamond city: from Uilenburg to the Museumplein", 10 stops:
Boas, De Burcht, Nieuwe Achtergracht factories (new), Sarphatistraat 66 (new), Diamantbeurs, De IJsbreker, Van Epen's Diamantbuurt (new), Asscher works, Gerard Dou Synagogue, Abraham Asscher's house (bbe5wwz0, already on the map).
Straight line through the stops and the two Amstel crossing points 5.0 km; about 6 km on the street.
Dropped: Premsela & Hamburger (start, +0.4 km; dealers now told by Sarphatistraat 66 and the exchange) and Sarphati's Amstel end (on W9, and its Sarphatistraat 66 mention is now a stop).
The last leg passes Van Moppes (Albert Cuypstraat 2-6) and the Diamantbrug without a stop.
The three new stop ids are pool places: they must be added to the Jewish map (with the overrides) before the route is created.

## W7 live update (25 Nov, coordinator)
Applied with two cuts under the authoritative-only rule: Sarphatistraat 66 dropped (the family's address rests on amsterdamopdekaart only), and "most of them Jewish" cut from the Nieuwe Achtergracht text. Added to the map with extra_description: wx78pd7n, u1dqmquh. Live W7: 9 stops, 6.5 km street-routed, ends at Abraham Asscher's house.
