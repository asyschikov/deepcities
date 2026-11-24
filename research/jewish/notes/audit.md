# Jewish Heritage: authoritative-sources audit (25 Nov 2026)

Rule applied: every fact that matters (dates, numbers, names, what happened where, attributions,
superlatives) in text written for the Jewish Heritage map (j1, j2, j3 drafts, the Bijenkorf
enrichment, the 25 text patches) must rest on at least one authoritative source (registers,
archives, museums and memorial institutions, published histories and journals, serious press).
joodsamsterdam.nl, Wikipedia, blogs, tour and hobby sites do not count on their own. Pre-existing
text of patched places was not audited, except where flagged at the end.

Output: `fixes/audit-patches.json` (33 patches, full replacement texts built from the live text of
25 Nov 2026, EN and NL; no ranks or attributes touched). The same edits are synced into
`places/j1-centrum-war.yaml`, `places/j2-centrum-community.yaml`, `places/j3-city.yaml`,
`fixes/patches.json`, `notes/j2-centrum-community-enrich.json` and into the source drafts that
mirror the live text (a-list centrum-east and centrum-landmarks, centrum nieuwmarkt-3, gg-zuid-1,
wetering-1, zuid stadion, pijp-zuid, apollo-b, noord r2-volewijck and volewijck, west oud-west,
oost betondorp and indische). Validator: no new errors (only the known override/a_list ones).

## j1, Centrum war (7 places)

- **Hollandsche Schouwburg** (dvtwact7): unchanged. JCK "De Hollandsche Schouwburg 1891-1942"
  (Bombach, opened 5 May 1892, Joodsche Schouwburg from Oct 1941, only for and by Jews), JCK
  deportation and remembrance pages, 4en5mei 1516, register 532241.
- **National Holocaust Museum** (axiln8o2): unchanged. JCK "De Kweekschool als plaats van verzet"
  (tram blocking the guards' view, Van Hulst, garden route, Pimentel), 4en5mei 1515 (plaque,
  about 1,100), artist's own page and NH Nieuws for the Lester ladder.
- **Names Monument** (qm1v277r): unchanged. holocaustnamenmonument.nl, 4en5mei 4417.
- **Nieuwe Keizersgracht 58** (ip4e7syn): CHANGED. Register 2796, Presser's Ondergang (DBNL), JCK
  hold. Cut the look-for line "the plaque on the front": only joodsamsterdam and an hmdb title.
- **Nes 118** (cccvet9b): unchanged. Nederlands Fotomuseum record (couple in the cellar under
  Entcomayer, Nes 118, 1945), C. Weijers, De kracht van een foto (2015, via the publisher's page).
- **Geldersekade 105** (aps3pqfu): unchanged. Anne Frank House (photo), Duitsland Instituut,
  Joods Monument (Barend and Aaltje Jacobs).
- **UvA names memorial** (o98e13oz): unchanged. UvA, 4en5mei 4973, NH Nieuws.

## j2, Centrum community (10 places)

- **Rapenburgersjoel** (zp84x109): CHANGED. Encyclopaedia Judaica "Amsterdam" (Neie Kille 1797,
  Overveen cemetery, Dutch for announcements, Rapenburgerstraat from 1799, reunion 1808); Stoutenbeek
  and Vigeveno, Jewish Amsterdam (2008); JCK (seminary at 175-179, 1839-1943). Cut: "Jewish Dutchmen
  rather than Dutch Jews" (dutchjewry only), the June 1797 Nieuwe Herengracht house, the exact
  1 May 1799, "in use until the Second World War". "Dutch in the service" softened to announcements;
  seminary address corrected to 175-179.
- **Waterlooplein market** (hfisq9jg): CHANGED. JCK "Waterloopleinmarkt" (1882, forced move,
  opposition, popularity), Anne Frank House timeline (Jewish markets incl. the Waterlooplein
  playground). Cut "from 1893 a daily market, shut on Saturday": sources give 1885 and 1893, none
  authoritative.
- **Aby Jetomim** (fr812hcp): CHANGED. Oorlogsbronnen theme (1648, boarding out, 1817, 1930), Joods
  Monument (Isaac Drukker, father of the orphanage, Sobibor 4 June 1943; Stadsarchief card). Cut:
  "built for a private family", "a private home again after the war", the founding plaque inside.
- **Beth Am** (q3g2hrfp): CHANGED. NIW and Algemeen Handelsblad 1923 (Delpher). The October opening
  and "lecture evenings, Zionist groups" were not in them: softened.
- **Tip Top** (fgby0kx6): CHANGED. Theaterencyclopedie (architects, 17 March 1914, Kroonenberg,
  films and variety, projectionist and back door, Telegraaf 1945 on the stripped interior, 1953),
  NIOD Beeldbank WO2 (photo, 22 Feb 1941), Joods Monument (the Davids), Parool (closed 1942), ATD
  (2026 windows). Projectionist softened (the sources differ on what the door was for); cut the 1953
  street-widening reason.
- **De Haan matzo rooster** (nlnyvcdl): CHANGED. Oneindig Noord-Holland (Jewish Museum collection):
  here from 1830, 5 to 6 million matzos a year, rooster stone now in the hall of the new block. Cut
  "ceramic", "one of the best-known in the country", the 2002 and 2007 dates and the gable-stone
  society's rescue (its own register only).
- **De Swarte Mvele / De Vries van Buuren** (f9jgphhh): CHANGED. Stadsarchief inventory 880 (firm
  started about 1830 at Jodenbreestraat 8; by 1928 also nos. 10-14, Waterlooplein 1-13 and corner
  plots on the Zwanenburgwal); Joods Monument (Jewish textile firm). Cut 1829, the thread-ribbon-lace
  detail, the Jan Cornelis Molen 1609 attribution. The stone's museum years and 2007 return rest on
  the gable-stone society's register: kept, as the stone itself is in place.
- **Nieuwe Herengracht 33** (ol4waw19): CHANGED (minor). 4en5mei 2224, JCK, Encyclopaedia Judaica,
  city register (Amstel 53). Dropped "when the old house was demolished".
- **Lindenbaum** (pnrb175t): unchanged. City register, Joods Monument, Hoge Raad ruling.
- **Waag** (gwoonzr3): CHANGED. Rijksmonument 3848 (gate 1488, weigh house 1617, octagonal middle
  tower 1691); JCK "Geschiedenis Joods Museum" (1930, 24 Feb 1932, closed 1940, collection taken,
  reopened 1955 with a fifth of it, 1975, 1987); Algemeen Handelsblad 1932 and Ons Amsterdam
  (Boekman); RKD and Leiden University (Tulp, surgeons' guild, anatomy lessons in the Waag). Cut:
  "one of only two" gates left, the stone-versus-archive dating, the guild list with own doors, the
  dome of 1690-1691, "Prime Minister Willem Drees" reopening it, and the look-for lines for the 1488
  stone and the guild emblems.

## j3, the wider city (12 places)

- **Synagoge Oost** (utvd8wqr): CHANGED. Ons Amsterdam (Galesloot; "Prententies aan de Polderweg"),
  Joods Monument (Pinkhof). Pinkhof was living in Den Helder (corrected). Cut: flats "for single
  people", closure in 1995 for want of a minyan, "now business premises". The Linnaeusparkweg
  predecessor rests on NIW 1920 and 1922.
- **Blasiussjoel** (sznqovap): CHANGED. NIW 23 Nov 1962 (full reprint), NIW 1923 (Delpher), NH
  Nieuws (4 May boards). Cut: the 1907 conversion with bricked-up windows and study room, 51 seats in
  1908, Russian-shul members joining, the 1967 move and "still exists" (joodsamsterdam only). Kept
  what NIW 1962 says: board told to look for premises in Zuid.
- **Rechouwous** (s0o8tx2z): unchanged. Joods Monument story 416317, which cites NIW and Leydesdorff.
- **Waalstraat garage shul** (wah2zu2v): CHANGED. NIW and Het Vaderland 1926. Cut the closing when
  the Lekstraat opened and the furnishings lost in the Obrechtstraat annexe (joodsamsterdam only).
- **De Lairessestraat 145** (pp2021cr): CHANGED. Stadsarchief inventory 1312 introduction (13 Jan
  1932 founding, first service in the Odd Fellowhuis, refugees, Soetendorp 1954, about 50 to 612
  member families, 1957 here, 1966 new synagogue); LJG's own site (Graafschapstraat, then Jacob
  Soetendorpstraat; new building mid-2010). Corrected where the 1966 synagogue stood; cut its 2008
  demolition and the later Jewish social work offices.
- **Herman Elte School plaque** (se1ydl1b): CHANGED. 4en5mei 3711 (text, 13 March 2012, former
  pupils, school there until evacuated in 1943, Christian school at 201); Joods Monument (Kennis en
  Godsvrucht). Cut "summer", the move from the Nieuwe Achtergracht, and "the school grew".
- **CIZ hospital** (vzedeg9w): CHANGED. Ziekenhuis Amstelland's own CIZ history (1911 Jacobson, 1916,
  purpose, sole Jewish hospital after 1949, 70-bed wing from 9 May 1978), Oorlogsbronnen (August
  1943, sterilisations), Presser. Closure year corrected 1979 to 1978. Cut: architects, first stone,
  4 July, 800 donors, "with the other two", looting, the failed reuse plan, 1980 demolition.
- **Concertgebouw memorial** (h9lxbkxb): CHANGED. 4en5mei 4341, Joods Monument (Gomperts), Het
  Concertgebouw (Merkx, Knip), Parool. Muller was a viola player, not a violinist.
- **Beethovenstraat** (mhthdzsj): CHANGED. 4en5mei 4570 (plate, poem, trams to CS), Joods Monument
  213103 (Delicia, food for the Schouwburg, Leopold died Auschwitz 19 Nov 1943), GVB (thresholds).
  Cut: Delicia opened 1934, Lina's camp and date, the second smaller plate, the Stolpersteine at
  no. 55 (tracesofwar and wiki only). "January 2025" to "2025" (GVB: Artis laid 27 Jan 2025, the
  other two to follow).
- **Victorieplein threshold** (hra5difz): CHANGED. NOS (fund from the tram earnings, three stops),
  GVB. Same date fix; the threshold's exact wording rests on tracesofwar only, so it is now
  paraphrased in general terms.
- **Zuideinde 443** (refa3obw): unchanged. 4en5mei 2673, Joods Monument (Rozenszajn).
- **Maasstraat window** (lw6zbl9e): CHANGED. 4en5mei 4616, Lutheran diaconate. Cut the look-for
  line about a swan on the block.

## Bijenkorf enrichment (qac2sgak): CHANGED

4en5mei 2941: a Jewish board and about a third of staff Jewish before the war; in 1940 the Jewish
directors formally made way for non-Jewish ones to keep the firm from the Germans; German
administrator after the February Strike; Jewish staff dismissed from May 1941; a tenth returned.
The live text ("on the occupier's orders handed to non-Jewish trustees") contradicted this:
rewritten. Joods Monument (Van Wesel, Kannewasser, citing Volkskrant 2001): staff-party organisers
in the 1930s, duo from 1936, deported Sept 1944, died Bergen-Belsen 20 March and 15 April 1945.
Cut: "discovered at a staff party in 1934", "left two years later", "died of exhaustion".
Goudsmit and Isaac: Stadsarchief inventory 929, amsterdam.nl "150 jaar Bijenkorf".

## The 25 patches

- **Rembrandthuis** (y853cvdf): CHANGED. Ons Amsterdam, "Mystieke sjoel in het Rembrandthuis"
  (Colthof, from his 2018 book): shul in use until the end of the 19th century, gone by the 1906
  sale. "Until 1906" corrected.
- **Artis** (l6wvo37k): unchanged. Verzetsmuseum "Verstopt bij de dieren" and "Anti-Joodse
  maatregelen", Anne Frank House.
- **Cinétol** (v7j8193d): CHANGED. Anne Frank House timeline 33: Otto Frank was involved in founding
  the synagogue (1937), not the congregation (1931).
- **Olympic Stadium** (zigsxso8): CHANGED. NOC*NSF, Yad Vashem. The 2010 date of the Stolpersteine
  not found in an authoritative source: dropped.
- **Stadion De Meer** (oe2dy0du): CHANGED. Joods Monument (Hamel). Cut "the only Ajax first-team
  player to die in the war".
- **Mozes Cohen murals** (jxvqgeiq): CHANGED. De Hallen, 4en5mei 4483, UvA-DARE (dates). Cut the
  arrest on the way to Switzerland and Drancy.
- **De Hallen** (zl76l8gf): unchanged (pointer only; same sources).
- **Slijkstraat Weesp** (g744ia4o): unchanged. Regional archive and NIK (Historische Kring Weesp:
  kosher bakery with party hall around 1900); Stolpersteine: Joods Monument.
- **Friendly Fire covers** (x6mjorka): CHANGED. Historisch Centrum Amsterdam-Noord places the
  synagogue at the Mosveld corner. Cut: former shop, about 80 seats, the bomb hitting it, 625 Jews.
- **'t Tolhuis** (m7hdd2fg): CHANGED. Historisch Centrum Amsterdam-Noord: the community first rented
  a room in the Tolhuis. "In the 1920s" softened to "before they had a synagogue of their own".
  (HCAN is a district history society; weakest source kept in this audit.)
- **Coöperatiehof** (bo7jjgf2): unchanged. Ons Amsterdam, De Pijp Krant.
- **Mozes en Aäronkerk** (u36dpf41): CHANGED. Stadsarchief "Spinoza in de ban". Cut "very probably on
  or by this site" and that the ban was pronounced on this spot.
- **Maupoleum / Visser** (kex5iaoj): unchanged. Hoge Raad, rechtspraak.nl, NRC, EHRI.
- **Diamantbeurs** (sg5x5jc3): unchanged. 4en5mei, Oorlogsgravenstichting, JCK.
- **Hirschgebouw** (owooq6lk): CHANGED. Verzetsmuseum "Modehuizen": founders Berg and Kahn Jewish;
  directors arrested end 1940, Arnold Kahn died in Buchenwald 1941, the others dismissed and in
  hiding; firm plundered; restart in the Kalverstraat, back to the Leidseplein. Replaces the
  Verwalter and liquidation line (wiki and joodsamsterdam).
- **Wertheim & Gompertsz** (r1d5sba5): CHANGED. Multatuli Encyclopedie (DBNL): Wertheim worked at
  his uncle's bank and became a partner after marrying Gompertz's daughter ("the founder's daughter"
  corrected).
- **Thorbecke / Alcazar** (hf1nkgyn): unchanged. Anne Frank House timeline 68, Oorlogsbronnen.
- **Schaduwkade / NIZ** (jvqlmwep): unchanged. Oorlogsbronnen (NIZ from 1882 on the Nieuwe
  Keizersgracht, raid 13 Aug 1943).
- **Felix Meritis / Felix Libertate** (jqgi05b6): unchanged. Stadsarchief inventory 1312
  introduction: Felix Libertate, mostly Jewish members, pushed for the decree of 2 Sept 1796.
- **Nooit meer Auschwitz / Parktuin** (vor93h9n): unchanged. NOS (Wertheimpark renamed Parktuin).
- **Dokwerker / Rosenbaum** (mpt5qdh3): unchanged. Joods Monument, AT5.
- **Portuguese Synagogue hours** (mgbfdpu4): unchanged. JCK visitor page.
- **Centrale Markthal** (tz8nsaab): unchanged (patch added only the 2024 re-unveiling; 4en5mei 1449).
- **Gerrit van der Veen College** (m7pix3x4): unchanged. 4en5mei 3595, Oorlogsgravenstichting.
- **De Burcht** (uet78dwn): unchanged. JCK Diamantbeurs story.

## Coordinator additions

- **Zeeburg cemetery** (o0mpgfjn): CHANGED. Not a contradiction: the Stadsarchief ("Joodse
  begraafplaats") says the oldest part was moved in 1956 for the Flevoweg, under rabbinical
  supervision, over two years; Stichting Eerherstel says about five hectares were taken in
  1956-1957 for the approach road to the Schellingwouderbrug and the dead reburied on a separate
  field in Diemen; JCK also names the Flevoweg. The text now says both.
- **Vossius Gymnasium** (wnt0wq3e): ADDED a war-years paragraph (EN, NL). Ons Amsterdam, "Het
  schoolleven ging door" (J. Houwink ten Cate, Oct 2025, from his book De school voor 'Joden' en
  'Roden', 2025): six Jewish teachers out in late 1940, Presser among them; strike on the afternoon
  of 28 Nov 1940, about fifty pupils; seven ringleaders and thirty strikers sent away for a week
  (the draft said only the ringleaders); 66 Jewish pupils removed after summer 1941, 62 to the
  Joodsch Lyceum (so the count is settled by the book's author); Hanny Michaelis survived in hiding;
  130 Vossianen murdered; memorial by the stairs. 4en5mei 1460: memorial by Hans Reicher, kneeling
  figure, Latin inscription, unveiled early July 1951. No look-for line (the memorial is inside).

## Outside the audit, worth a look

- Vossius: Ons Amsterdam (Houwink ten Cate) says the school was founded in 1925; the live text says
  1926 (pre-existing text, not changed).
- Centrale Markthal: the pre-existing war paragraph (red J on market passes, "many Jews hid in the
  cellars until the liberation without being found") came with the West import, not the Jewish
  patches; it was not checked and reads like single-source material.
- `fixes/a-list-centrum-east.diff` still shows the old Rembrandthuis wording.
