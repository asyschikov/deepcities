# Jewish Heritage of Amsterdam: source library

Compiled 24 Nov 2026 for the Jewish Heritage map (places, 23 documents, 10 routes). It adds to
what the three scouts already cite (scouts/SCOUT-C.md, SCOUT-R.md, SCOUT-D.md) and does not
repeat their datasets (joodsamsterdam.nl KML and indexes, the 4en5mei endpoint, the Joods
Monument and Oorlogsbronnen notes, the monuments API, the stippenkaart). Where a scout source is
named again below, it is marked **(D)**, **(C)** or **(R)** and only because it is one of the
best for that document.

**Marks.**
- Reliability: **[A]** archival, primary or peer-reviewed; **[B]** solid secondary (museum,
  established historian, edited magazine, quality press); **[C]** lead only (single local
  memory, reader letter, commercial or anonymous page): confirm before use.
- Access: *free*, *paywall*, *offline* (library or reading room only), *browser only*
  (robots-refusing: read one page at a time at human pace, facts only, cite), *licence* noted
  where it matters for photos and text.
- Ons Amsterdam (onsamsterdam.nl) refuses automated readers. Its articles below were opened one
  at a time in the browser to read title, author and issue only; nothing was copied. Year and
  volume are the magazine's own ("2014 66" = jaargang 66, 2014).

How this was built: WebSearch (NL and EN), WebFetch for open pages, the KB's SRU API for Delpher
holdings (curl, `deep-cities-research/0.1`), and the BrowserOS browser for JavaScript catalogues
(Stadsarchief inventories, Amstelodamum digital archive, Ons Amsterdam article headers, Beth Haim
search). Nothing was written live; no commits.

---

## 1. Archives and databases

### Stadsarchief Amsterdam (archief.amsterdam)

How to search: inventories at https://archief.amsterdam/inventarissen/ (type a keyword in
"Zoeken op trefwoord"; the URL query string does not work, use the form), person indexes at
https://archief.amsterdam/indexen/, images at https://archief.amsterdam/beeldbank/. Free; scans of
many series online; reading room for the rest. A beta site is live in parallel. Person data under
privacy rules (historical use only).

Jewish archives found by keyword search (24 Nov 2026), with access number (toegang):
- **334 Portugees-Israëlietische Gemeente** [A]: the Portuguese community's own archive from
  the 17th century (minutes, the Ascamot, poor relief, synagogue, Beth Haim burials; the 1656
  cherem of Spinoza is in its minute books: check the inventory number before citing). Key for
  docs 02, 18, 19.
- **714 Nederlands Israëlietische Hoofdsynagoge** [A]: the Ashkenazi community (NIHS) and its
  predecessor; synagogues, schools, charities, cemeteries. Docs 03, 07, 08.
- **1407 Nederlands Israëlitisch Kerkgenootschap** [A]: the national church body (Hoofdcommissie,
  rabbinate). Doc 04.
- **1213 Vereniging De Joodse Invalide** [A]: the Glass Palace and its predecessors. Doc 07.
- **1330 Joodse HBS / Stichting Joodse Scholengemeenschap JBO** [A]: Jewish secondary schools,
  incl. postwar. Docs 07, 13, 17.
- **1534 Stichting Joodse Kindergemeenschap Cheider** [A]. Doc 17.
- **1312 Liberaal Joodse Gemeente** [A]. Docs 08, 17.
- **1316 Toutseous Chaim** [A]: a Jewish society (name as catalogued). Doc 07.
- **1066 Vereeniging Centraal Israëlietisch Krankzinnigengesticht** [A]: the Apeldoorn asylum's
  Amsterdam society. Doc 07.
- **1346 Nederlands-Israëlitische Instelling voor Sociale Arbeid**, **1168 Stichting Joods
  Maatschappelijk Werk** [A]: care and welfare after 1945. Docs 07, 13.
- **1113 Nederlandse Zionistenbond**, **30009 WIZO Nederland**, **1286 Joodse Vrouwengroep
  Deborah**, **1251 Genootschap voor Joodse Wetenschap** [A]: Jewish associations. Docs 04, 15, 17.
- **1379 Nieuw Israëlitisch Weekblad** [A]: the NIW's own business archive. Docs 15, 17.
- **31161 Jaap Kaas** [A]: the photographer of the emptied Jodenbuurt (Nieuwe Hoogstraat, 1943).
  Docs 05, 09; photo rights to check.
- **30264 Salomon Boas** [A]: the diamond factory family (Boas, Uilenburg). Doc 06.
- **31185 H. Elte: bouwtekeningen** [A]: Harry Elte's architectural drawings (synagogues,
  Portuguese hospital, houses). Doc 08.
- **5131 Commissie van Onderzoek inzake Erfpacht** [A]: the city's ground-lease fines on
  deported and returning Jews (the 2010s inquiry). Doc 13.
- Family archives with Jewish content: 1241 Berenstein, 30677 Kransberg, 30808 Oestreicher,
  1501 Grewel, 1304 Van Emde Boas, 946 Da Costa, 30654 Josephus Jitta, 1484 Van Lier, 457 De
  Jongh, 1547 Dr. Herman Musaph [A]. Leads for biographies and houses.
- **15005 Collectie Meijer** [A] (check content), **30797 Collectie In Memoriam** [A].
- **5225 Politierapporten 1940-1945** (archive of the police) [A]: daily reports per station,
  incl. "wijkbureau Jonas Daniël Meyerplein", indexed per report on Open Archieven
  (https://www.openarchieven.nl, search "Politierapporten '40-'45"). Docs 05, 09, 10.
- **Beeldbank**: search by street name plus "sloop", "Jodenbuurt", "synagoge", "Joodsche Wijk";
  photographer collections Jaap Kaas, Jacob Olie (pre-1900 streets), Stadsfotograaf. Licence:
  many images public domain or CC0; check each record.
- **Person cards** (persoonskaarten 1939-1994) and gezinskaarten: linked from Joods Monument
  person pages; the 1941 registration forms themselves: not located in the Stadsarchief
  catalogue (see NIOD and Arolsen below; *to verify*).
- USHMM holds a microfilm copy of Stadsarchief "Records relating to Jews in Amsterdam"
  (193,967 images: school isolation, property registration, refugees, Aryan declarations):
  https://collections.ushmm.org/search/catalog/irn509698 [A] (EHRI description:
  https://portal.ehri-project.eu/units/us-005578-irn509698).

### NIOD (niod.nl) and the EHRI portal

- **Archive 182 Joodsche Raad voor Amsterdam** [A]: the Jewish Council's records, card indexes
  of Amsterdam Jews, lists, circulars, the Hollandsche Schouwburg administration. Inventory on
  EHRI: https://portal.ehri-project.eu/units/nl-002896-mf759708 ; per item also on
  oorlogsbronnen.nl. Yad Vashem has microfilm copies (collection 6184322:
  https://collections.yadvashem.org/en/documents/6184322). Reading room Herengracht 380,
  Tue-Fri. Docs 09, 11, 22, 23.
- **Beeldbank WO2** https://beeldbankwo2.nl [A]: NIOD and war museums' photos (Waterlooplein raid
  1941, NIOD 215682, etc.); fees and terms at https://beeldbankwo2.nl/en/about-us/terms-of-use
  (*licence: paid for publication; NIOD photos not CC*). The crowdsourcing project "Achter de
  ster" (https://beeldbankwo2.nl/en/behind-the-star) identifies people wearing the star.
- **L. de Jong, Het Koninkrijk der Nederlanden in de Tweede Wereldoorlog**: full text free on
  the NIOD site [A] (site rate-limits; read single volumes).
- **Jeroen Kemperman, *Een kwestie van uitvoering*** (NIOD, 2025) [A]: the city administration's
  part in the persecution, commissioned by the city; the basis for Mayor Halsema's apology.
  Staff page https://niod.nl/en/staff/jeroen-kemperman ; UvA news (May 2025):
  https://www.uva.nl/content/nieuws/nieuwsberichten/2025/05/de-rol-van-de-gemeente-amsterdam-als-instrument-van-de-duitse-repressie-tijdens-woii.html
  (publisher *to verify*).

### Joods Monument and the Jewish Cultural Quarter

- **Joods Monument thematic articles** https://www.joodsmonument.nl/en/page/548827/thematic-articles
  [B]: long-form pieces, e.g. "Jewish diamond workers" (/page/749), "Joodse markt- en
  straathandelaren in Amsterdam" (/page/671), "From the 19th to the 20th century" (/page/482),
  "Asterdorp" (/page/721645), "Nieuw Israëlietisch Weekblad" (/page/595), "Hollandsche
  Schouwburg" (/page/621). Free; visitor contributions CC BY-NC.
- **Joods Monument PDFs**: "Grote en kleine voetbalhelden" (football, PDF
  https://joodsmonument.nl/image/2016/3/28/grote_en_kleine_voetbalhelden.pdf) [B]; Open Joodse
  Huizen walk flyers (https://www.joodsmonument.nl/image/2016/3/29/flyers_wandelingen.pdf) [B];
  names list of the Joodsche HBS 1941 (PDF) [A].
- **JCK research guide** https://jck.nl/en/collections-and-resource/research-guide [B]: where to
  look for people, genealogy, collections.
- **JCK "Jewish communities" pages** (one per town, from the old Joods Historisch Museum
  communities database), e.g. Weesp https://jck.nl/en/jewish-communities/weesp [B].
- Jewish Museum collection images on Europeana (provider "jhm", e.g.
  https://www.europeana.eu/item/272/resource_document_jhm_foto_F004437) [A]; *licence per item*.
- **Open Joodse Huizen | Huizen van Verzet** https://www.openjoodsehuizen.nl [B]: yearly house
  talks around 4 May; each house has a researched story. Good for Stolpersteine and street
  stories.

### Other Dutch databases

- **Delpher** https://www.delpher.nl [A], free. Jewish titles checked through the KB SRU API
  (`jsru.kb.nl`), with what is online:
  - *Nieuw Israëlietisch Weekblad* (newspapers): 1865 to 1994, about 494,000 articles.
  - *Het Joodsche Weekblad* (periodicals): 145 issues, 1941-1943 (the Jewish Council's paper, all
    anti-Jewish decrees).
  - *De Vrijdagavond. Joodsch weekblad* (periodicals): 466 items, 1924-1932.
  - *De Joodsche Wachter*: 1905-1966 (Zionist).
  - *Weekblad voor Israëlietische huisgezinnen*: 1870-1924.
  - *De Joodsche Prins*: 52 issues, 1912-1913 (photo weekly of Jewish Amsterdam).
  - *Joodsch Amsterdam Zuid*: 12 issues, 1919-1921 (the new south's own paper).
  - *De Joodsche middenstander*: 225 issues, 1931-1940 (shopkeepers).
  - *Officieel orgaan van de Joodsche Invalide*: 134 issues, 1927-1938.
  - *Joodsch hulpbetoon* (1933-1934); *Nederlandsch-Israelietisch jaarboekje*; *Israëlietisch
    nieuws- en advertentieblad*.
  Search tip: full text in the newspaper collection; in the periodicals collection search by
  title first, then by word.
- **Oorlogsbronnen** https://www.oorlogsbronnen.nl (D) [A]: aggregates NIOD, EHRI, Beeldbank WO2,
  Joods Monument and oral history; per-person and per-place pages.
- **Open Archieven** https://www.openarchieven.nl [A]: free index of Stadsarchief population
  records, police reports, and the Weesp registers (prefix "vev").
- **WieWasWie** https://wiewaswie.nl [A]: civil records incl. Stadsarchief.
- **Nederlandse Kring voor Joodse Genealogie** https://www.nljewgen.org [B]: guides ("Vroege
  bronnen voor genealogen van Amsterdamse joodse families"), lectures (Rob van het Groenewoud,
  "De Weesperstraat", 3 Apr 2022, PDF:
  https://www.nljewgen.org/wp-content/uploads/2022/04/Rob-van-het-Groenewoud_lezing-03-04-2022-De-Weesperstraat.pdf),
  and the **buurtkaarten** of the Jodenbuurt by Ko Sturkop (18th-19th c., per neighbourhood, with
  old street names): https://buurtkaarten.sturkop.nl (announced 27 Dec 2015).
- **dutchjewry.org** (Akevoth; archived, closed 1 Mar 2020) [B]: cemetery databases (Beth Haim,
  Zeeburg, Muiderberg, Diemen), community pages (Weesp), the diamond workers database
  (https://www.dutchjewry.org/diamond_workers/index.shtml), Sarphati essay by Lydia Hagoort.
- **Beth Haim** https://bethhaim.nl [A]: grave pages with field-row-number codes (e.g. B-6-229)
  and a site search; the Beth Haim app.
- **Anne Frank House research portal** https://research.annefrank.org/en/ [A]: locations and
  topics with sources (e.g. Hollandsche Schouwburg, Delphi tearoom), and an API
  (`/en/api/locations/<id>?format=api`).
- **Huygens Databank Sport** https://resources.huygens.knaw.nl/sportbondenclubsperiodieken [A]:
  clubs by "levensbeschouwing joods" (Wilhelmina Vooruit, I.L.F.R.A., Maja, Kadimah).
- **IISG** https://www.iisg.amsterdam/en [A]: the ANDB archive, fully digitised (membership cards,
  photos); search.iisg.amsterdam (D).
- **Mapping Slavery** https://www.mappingslavery.nl [B]: Amsterdam slavery sites, incl. Sephardic
  merchants. Doc 02.

### International

- **Yad Vashem** [A]: Righteous database https://collections.yadvashem.org/en/righteous (per
  rescuer, Dutch files are rich); names https://collections.yadvashem.org/en/names ; deportation
  database https://collections.yadvashem.org/en/deportations (Westerbork transports); Jewish
  Council microfilms (above); blog "Theater in Holland: a cultural refuge during the Holocaust"
  https://www.yadvashem.org/blog/theater-in-holland-a-cultural-refuge-during-the-holocaust-part-1 [B].
- **USHMM** [A]: Holocaust Encyclopedia "Amsterdam"
  https://encyclopedia.ushmm.org/content/en/article/amsterdam (D for the essay); collections
  search https://collections.ushmm.org/search/ (Stadsarchief microfilms, oral histories,
  "Bystander Memories" interviews RG-50.570).
- **Arolsen Archives** https://collections.arolsen-archives.org/en/search [A]: Westerbork series
  1.1.46 (transport lists, copies at 1.1.46.7), "Nazi regime in the Netherlands A-Z", and a copy
  of the Amsterdam Judenrat card index (1.2.4.2, cited on Joods Monument). Free, name search.
- **EHRI portal** https://portal.ehri-project.eu [A]: descriptions of NIOD, Stadsarchief and
  foreign holdings on Amsterdam.
- **USC Shoah Foundation VHA** https://vha.usc.edu [A] (registration; many Dutch testimonies) and
  its iWalk "Jewish Resistance in Amsterdam" (stops with testimony clips):
  https://iwalk-dev.usc.edu/jewish-resistance-in-amsterdam [B].
- **Fortunoff Archive (Yale)** https://fortunoff.library.yale.edu [A]: video testimonies, some
  Dutch (registration).

### Libraries and special collections

- **Bibliotheca Rosenthaliana** (Allard Pierson, UvA) https://www.allardpierson.nl/en/jewish-cultural-history
  [A]: Hebraica and Judaica, Menasseh ben Israel imprints (digitised 1999), UNESCO Memory of the
  World (2023, UvA news:
  https://www.uva.nl/content/nieuws/nieuwsberichten/2023/12/collectie-joodse-cultuurgeschiedenis-allard-pierson-krijgt-unesco-erkenning.html).
  Images in the UvA image database; some items in Delpher.
- **Ets Haim / Livraria Montezinos manuscripts** https://etshaimmanuscripts.nl [A]: images and
  descriptions of the Portuguese community library's manuscripts (digitised with the National
  Library of Israel). The library itself is at the Portuguese Synagogue (visits via JCK).
- **National Library of Israel**: e.g. "Copies of letters received after the death of Samuel
  Sarphati" https://www.nli.org.il/en/manuscripts/NNL_ALEPH997010326267205171/NLI [A].
- **DBNL** https://www.dbnl.org [A]: free full texts, incl. J. Presser, *Ondergang*
  (https://www.dbnl.org/tekst/pres003onde01_01/) and Monumenten in Nederland: Noord-Holland (Beth
  Haim metaarhuis).

### Amstelodamum (amstelodamum.nl)

- Digital archive of all Maandblad and Jaarboek issues since 1900 except the last five years,
  full-text page search:
  https://www.amstelodamum.nl/archieven/?mivast=2601&mizig=412&miadt=2601&milang=nl&miview=ldt
  (free; results are pages, not articles). Hit counts on 24 Nov 2026: "joodse" 769 pages,
  "synagoge" 475, "Jodenhoek" 24, "Sarphati broodfabriek" 2 (Maandblad 1959 p. 47, 1975 p. 100).
  Use it per street or building name.
- Known articles: T. De Paepe and P.D. Meijer, "De Talmoed Tora-synagoge (1639-1675). Een
  reconstructie van de directe voorganger van de nog bestaande Portugese synagoge in Amsterdam",
  *Jaarboek Amstelodamum* 2014 (https://amstelodamum.nl/?p=714&post_type=publication) [A];
  J.W. van Dijk, "De boekenkast die hield ons bij elkaar: een speurtocht naar de Jiddische
  collectie van de An-Ski-bibliotheek", *Maandblad Amstelodamum* 71 (1984) 11-15 [A];
  *Voorzichtig manoeuvreren: de bezettingsgeschiedenis van het Genootschap Amstelodamum
  1940-1945* (the society's own exclusion of Jewish members) [A].

---

## 2. Long-form texts

### 2a. Ons Amsterdam (onsamsterdam.nl; *browser only*; recent issues partly *paywall*)

All [B] unless marked; reader memories [C]. Tagged "Jodenvervolging" by the magazine: 17 items
(listing read 24 Nov 2026).

Persecution, return, memory:
- Serge Markx, "Zoektocht naar cijfers. De massamoord op de Amsterdamse Joden", May 2020 (72):
  /artikelen/zoektocht-naar-cijfers-de-massamoord-op-de-amsterdamse-joden (the victim numbers,
  57,500 to 75,000; 77,252 registered).
- Rob Snijders, "Had Amsterdam Joodse getto's", 2014 (66): /artikelen/had-amsterdam-joodse-getto-s
  (the three German-recognised ghettos and the compensation claims).
- Rob de Spa, "Wie zijn er nog?", May 2025 (77): /artikelen/wie-zijn-er-nog (the service of 9 May
  1945 in the Esnoga). His bachelor thesis "Een beladen transactie" (2025, PDF):
  https://onsamsterdam.nl/uploads/files/250224-Rob-de-Spa-Bachelorscriptie-online.pdf [B].
- Koen Kleijn, "'Dáárom een Holocaustmuseum'", Mar 2024 (76): /artikelen/daarom-een-holocaustmuseum.
- David Barnouw, "Nederland en de herinnering aan de Jodenvervolging 1945-2024" (review), Mar 2024
  (76): /artikelen/nederland-en-de-herinnering-aan-de-jodenvervolging-1945-2024.
- Hansje Galesloot, "Opnieuw beginnen na de oorlog", 2015 (67): /artikelen/opnieuw-beginnen-na-de-oorlog
  (Amsterdam and Rotterdam monuments compared).
- Herman Vuijsje, "Koppijn in verdwenen straat", 2014 (66): /artikelen/koppijn-in-verdwenen-straat
  (the Weesperstraat, the IJtunnel road, the Erkentelijkheid monument).
- Lion Tokkie, "Voorportalen van Westerbork", 2017 (69): /artikelen/voorportalen-van-westerbork.
- Rogier Schravendeel, "De ondergang van een Joods pension", May 2024 (76):
  /artikelen/de-ondergang-van-een-joods-pension (the Verdooner pensions; reader follow-up
  /artikelen/lezersherinnering-pension-verdooner [C]).
- Johannes Houwink ten Cate, "Het schoolleven ging door", Oct 2025 (77):
  /artikelen/het-schoolleven-ging-door (Hanny Michaelis at the Vossius Gymnasium).
- Sonja Vetter-Samuels, "De lege plek in een rij met zerken", Dec 2025 (77):
  /artikelen/de-lege-plek-in-een-rij-met-zerken.
- Frank Meelker, "'Ga maar naar Eli'", May 2026 (78): /artikelen/ga-maar-naar-eli (Eli van Tijn,
  headmaster and resister).
- Janna Toepoel, "'We slaan hem dood!'", May 2026 (78): /artikelen/we-slaan-hem-dood (the
  Transvaalbuurt between the wars).
- Koen Kleijn, "Recensie: Weeskind in Betondorp", Nov 2026 (78):
  /artikelen/wat-verzwegen-werd-weeskind-in-betondorp.
- Ben Poelman, "Pendelen tussen twee tachtigers", May 2024 (76): /artikelen/pendelen-tussen-twee-tachtigers
  (conductor Frieder Weissmann).
- Boudewijn Drechsler, "Sally van de Albert Cuyp", 2008 (60): /artikelen/sally-van-de-albert-cuyp.
- Leo Piller, "De Joodse kweekschool in de bezettingstijd", Apr 1989 (41):
  /artikelen/de-joodse-kweekschool-in-de-bezettingstijd.
- "Herinneringen aan 1943" (reader memories), May 2023 (75): /artikelen/herinneringen-aan-1943 [C].
- "Meer over bureau Meijerplein, afl. 3: februari 1941" (reader series on the police station):
  /artikelen/meer-over-bureau-meijerplein-afl-3-februari-1941 [C].
- Dick de Scally, "Herinneringen: verzetsstrijder Johan van Hulst": /artikelen/herinneringen-verzetsstrijder-johan-van-hulst [C].
- David Barnouw, "Twaalf Pimentels en de oorlog" (review), Jan-Feb 2021 (73):
  /artikelen/twaalf-pimentels-en-de-oorlog.
- "Vluchtroute naar de vrijheid": /artikelen/vluchtroute-naar-de-vrijheid (the crèche and the
  hedge to the Kweekschool; year not read).
- Liesbeth van der Horst, "Artis in oorlogstijd" (2002 (54), republished Sep 2022): /artikelen/artis-in-oorlogstijd.
- "Recensie: Etty Hillesum": /artikelen/biografie-van-etty-hillesum; "Huis gered waarin Etty
  Hillesum haar oorlogsmemoires schreef": /artikelen/huis-gered-waarin-etty-hillesum-haar-oorlogsmemoires-schreef.
- Geerthe Schilder and Annemarie de Wildt, "Merwedeplein 37 II", 2006 (58): /artikelen/merwedeplein-37-ii.
- "Sporen van levens" (on Guus Luijters's Rapenburgerstraat project): /artikelen/sporen-van-levens.
- Marchien den Hertog, "Recensie: De Joodsche Invalide", Jul 2023 (75): /artikelen/recensie-de-joodsche-invalide.
- Carolus van Doornen, "Joachimsthal. Familie en firma 1823-1945" (review), Nov 2023 (75):
  /artikelen/joachimsthal-familie-en-firma-1823-1945.

The old quarter, trades and daily life:
- "De Jodenhoek door politie-ogen": /artikelen/de-jodenhoek-door-politie-ogen (bureau J.D.
  Meijerplein 1867-1967; day reports).
- Salvador Bloemgarten, "Die brutale Joden", 2011 (63): /artikelen/die-brutale-joden (the
  Jewish poor and their reputation; integration).
- Elsbeth Etty, "Het Amsterdam van Meijer Sluyser", Feb 2006 (58): /artikelen/het-amsterdam-van-meijer-sluyser.
- Peter-Paul de Baar, "'De mazzel, gabber!'", Jan 2009 (61): /artikelen/de-mazzel-gabber (Mokum
  words from Yiddish).
- Lisa Schonenberg, "Lief en leed in de 'Jodenkerkstraat'", 2009 (61): /artikelen/lief-en-leed-in-de-jodenkerkstraat.
- Janna Toepoel, "Heimwee naar de Joodse broodjeswinkels", Dec 2022 (74): /artikelen/broodjeswinkels.
- Frits Slicht, "Chroniqueur van het Joodse leven", May 2024 (76): /artikelen/chroniqueur-van-het-joodse-leven
  (De Joodsche Prins and Herman Kisch).
- Frits Slicht, "Een bijna vergeten geschiedenis", Oct 2015 (67): /artikelen/een-bijna-vergeten-geschiedenis
  (Handwerkers Vriendenkring, Tugelaweg blocks).
- Daniel Metz, "Diamantairs op Achtergracht", 2008 (60): /artikelen/diamantairs-op-achtergracht.
- "De eerste diamantairs": /de-eerste-diamantairs (1748 council decision, home workshops).
- Peter de Brock, "Dorpse woonwijk of armoedig getto?", Jan 2005 (57): /artikelen/dorpse-woonwijk-of-armoedig-getto (Diamantbuurt).
- Ruben Vis, "Gemoedelijk en intiem: Sjoel West", May 2021 (73): /artikelen/gemoedelijk-en-intiem-sjoel-west.
- "De Zacharias Jansestraat: oase van rust in de Watergraafsmeer":
  /artikelen/de-zacharias-jansestraat-oase-van-rust-in-de-watergraafsmeer.
- Marius van Melle, "Muidergracht / Mr. Visserplein: Inwijding van de Esnoga":
  /artikelen/muidergracht-mr-visserplein-inwijding-van-de-esnoga.
- Fanta Voogd, "Valse messias bracht joods Amsterdam in extase": /artikelen/valse-messias-bracht-joods-amsterdam-in-extase (Sabbatai Zevi, 1666).
- Fashion and shops: "Wie den hobbezak droeg frequenteerde ons huis niet. Parijse stijl was
  keurmerk modehuis Hirsch": /artikelen/wie-den-hobbezak-droeg-frequenteerde-ons-huis-niet-parijse-stijl-was-keurmerk-modehuis-hirsch ;
  "Mode voor elke beurs: confectiepioniers kwamen uit Duitsland": /artikelen/mode-voor-elke-beurs-confectie-pioniers-kwamen-uit-duitsland ;
  "Modezaken": /modezaken ; "De band met onze klanten gaat generaties terug" (De Leeuw
  zuurwaren): /artikelen/de-band-met-onze-klanten-gaat-generaties-terug ; "De Foeliedwarsstraat":
  /de-foeliedwarsstraat.
- Ajax: "De klassieker Ajax-Feyenoord": /artikelen/de-klassieker-ajax-feyenoord ; "Leo Horn,
  textielhandelaar, verzetsstrijder, stadsprins maar bovenal voetbalscheidsrechter":
  /artikelen/leo-horn-textielhandelaar-verzetsstrijder-stadsprins-maar-bovenal-voetbalscheidsrechter.
- Sarphati: Henne van der Kooy, "Leven en werk van Samuel Sarphati. Van armenarts tot
  projectontwikkelaar", 2001 (53): /artikelen/leven-en-werk-van-samuel-sarphati-van-armenarts-tot-projectontwikkelaar ;
  "Symbool van grootsteedse bravoure" (Paleis voor Volksvlijt): /artikelen/symbool-van-grootsteedse-bravoure ;
  Karin van Munster, "'Hulde aan wijlen Sarphati'", Sep 2024 (76): /artikelen/hulde-aan-wijlen-sarphati ;
  "Sarphatipark, 15 juli 1886": /sarphatipark-15-juli-1886 ; "Meesterwerk vol tegenslag":
  /artikelen/meesterwerk-vol-tegenslag.
- Already cited by scouts (not repeated): "Het gat dat Synagoge Oost naliet" (R), "De vaste route
  van André Klukhuhn" (D), "Hoofdpijn van het dansen" (C).

### 2b. Journals

- **Studia Rosenthaliana** [A], *free*: relaunched 2020 by Amsterdam University Press as diamond
  open access (CC BY-NC), https://www.aup-online.com/content/journals/26667444 (site blocks
  scripts; open in a browser) and UvA DARE; back volumes 1967-2012 on JSTOR (*paywall* or library).
  Search it for: Vlooienburg, the Ashkenazi kehilla, the Portuguese poor, Ets Haim, Spinoza's
  family, the NIW.
- **TSEG** (tseg.nl) [A], *free*: review of Hagoort's Sarphati biography (2013),
  https://tseg.nl/article/download/7491/8121/11233 ; Lesger, Van Leeuwen, Vissers on residential
  segregation (2013).
- **BMGN - Low Countries Historical Review** (bmgn-lchr.nl) [A], *free*: reviews and articles on
  the ANDB and on Amsterdam and the occupation (e.g. /article/download/11294/13620/24800).
- **De Sportwereld** 71 (2014): Vliet, "Joodse voetbalclubs" (PDF):
  https://www.desportwereld.nl/wp-content/uploads/Vliet-Joodse-voetbalclubs-DeSportwereld-71-najaar-2014-5.pdf [B].
- **Historisch Nieuwsblad**: Willem de Bruin, "Samuel Sarphati. Schepper van een nieuwe stad",
  nr. 8/2010 [B] (*paywall*).
- **The Low Countries**: "Samuel Sarphati" https://www.the-low-countries.com/article/samuel-sarphati/ [B].
- **PMC**: "Hospital Care for Jews in Nineteenth-century Amsterdam: The Emergence of the First
  Jewish Hospitals", https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5916234/ [A]. Doc 07.

### 2c. Dissertations and theses

- J. Kok, *Social mobility and integration of Amsterdam Jews: the ethnic niche of the diamond
  industry, 1850-1940s* (PhD, Leiden, 18 Sep 2025), *free*:
  https://scholarlypublications.universiteitleiden.nl/access/item%3A4261318/view [A]. Docs 04, 06.
- Stephan Steinmetz, *Asterdorp. Een Amsterdamse geschiedenis van verheffing en vernedering*
  (PhD 2016; Atlas Contact) [A]: the Noord "problem families" village where Jews were
  concentrated in 1942-1943.
- Laurien Vastenhout (D: book 2022); Bart Wallet, *Nieuwe Nederlanders* (D).
- Rena G. Fuks-Mansfeld, *De Sefardim in Amsterdam tot 1795* (PhD; Verloren, 1989) [A]. Doc 02.
- Evelien Gans, *De kleine verschillen die het leven uitmaken. Een historische studie naar
  joodse sociaal-democraten en socialistisch-zionisten in Nederland* (PhD; Vassallucci, 1999)
  [A]. Docs 06, 20.
- Ido de Haan, *Na de ondergang. De herinnering aan de Jodenvervolging in Nederland 1945-1995*
  (PhD; Sdu, 1997) [A]. Docs 13, 14.
- Evert de Vos, doctoraalscriptie on Jewish football clubs in Amsterdam 1908-1948 (UvA; cited
  in the De Sportwereld article; *offline*, title to verify) [B].
- Rob de Spa, *Een beladen transactie* (BA thesis 2025, PDF on onsamsterdam.nl, above) [B].
- Mandy Hakker (D).
- Where to look for more: UvA scripties (scripties.uba.uva.nl), Leiden studenttheses
  (studenttheses.universiteitleiden.nl, e.g. items 2601796, 2631868 on Jewish Amsterdam and sport),
  NIOD's publication list.

### 2d. Museum, institutional and public-history essays

- **JCK long reads** (D) and the Jewish Museum's "Amsterdam, City of Diamonds" exhibition page
  (27 Sep 2019 to 1 Mar 2020): https://jck.nl/en/agenda/amsterdam-city-diamonds [B].
- **Mokum. De biografie van Joods Amsterdam** (De Nieuwe Kerk with the JCK, Oct 2025 to Apr 2026),
  press kit PDF: https://www.nieuwekerk.nl/wp-content/uploads/2025/09/Digitale-persmap-Mokum-DEF-NL.pdf ;
  museum.nl page https://www.museum.nl/en/de-nieuwe-kerk/exhibition/mokum-de-biografie-van-joods-amsterdam [B].
- **UvA, "Waterlooplein. De buurt binnenstebuiten"** (archaeology of the Waterlooplein finds,
  2020): https://www.uva.nl/shared-content/faculteiten/nl/faculteit-der-geesteswetenschappen/nieuws/2020/10/tentoonstelling-waterlooplein-de-buurt-binnenstebuiten.html [B].
- **De Joodse Stad** (UvA, JCK, city): project site https://www.dejoodsestad.nl ; events such as
  "Ontdek de Joodse geschiedenis van de Transvaalbuurt" (Jul 2026,
  https://www.uva.nl/shared-content/faculteiten/nl/faculteit-der-geesteswetenschappen/evenementen/2026/07/ontdek-de-joodse-geschiedenis-van-de-transvaalbuurt.html) [B].
- **Menasseh ben Israel Instituut** (JCK, UvA, VU; mbii.nl, site blocks scripts) [A]: research
  papers and the "Menassehcast".
- **Europeana**, Adrian Murphy, "Ben Bril: the youngest ever Olympic boxer" (26 Jan 2021):
  https://www.europeana.eu/en/stories/ben-bril-the-youngest-ever-olympic-boxer [B].
- **Canon van Nederland / Amsterdam 750** (D for 750).

### 2e. Press (dated; use facts only when confirmed)

- **Het Parool** (*paywall*): Marcel Wiegman, "Samuel Sarphati uitgeroepen tot grootste
  Amsterdammer aller tijden" (17 Jan 2025); April 2025 report that Halsema would apologise
  (relayed by DutchNews, https://www.dutchnews.nl/2025/04/amsterdam-mayor-to-apologise-for-citys-role-in-wwii-parool/);
  the 2012 Verdooner campaign (cited by Ons Amsterdam); Etty Hillesum walk (D).
- **NIW** (niw.nl, *paywall*; archive 1865-1994 free in Delpher, above).
- **NH Nieuws** [B], *free*: "Amsterdamse ambtenaren werkten massaal mee aan Jodenvervolging"
  (/nieuws/348795); "Augurken en diamanten: Joodse DNA van Amsterdam vastgelegd in tentoonstelling"
  (/nieuws/354976); "Serie over Joodse Raad legt worsteling bloot" (/nieuws/333083); "Opperrabbijn
  wijzigt mening over de Amsterdamse Joodse Raad" (/nieuws/334658); "Geschiedenis Joodse Weespers
  vereeuwigd met naamplaat" (/nieuws/224147); "Nooit meer onopgemerkt: de Joodse Emma Wonder-Menko"
  (Weesp, /nieuws/224137); "Speciale herdenking voor weggevoerde Joden Amsterdamse Swammerdambuurt"
  (/nieuws/303499). All at https://www.nhnieuws.nl .
- **NOS** [B]: "Gemeente Amsterdam verdiende flink aan de Jodenvervolging"
  (https://nos.nl/nieuwsuur/artikel/2087679); "Boksen was voor Ben Bril letterlijk een zaak van
  overleven" (https://nos.nl/l/2283165); "Honderden foto's van mensen met Jodenster, NIOD wil
  weten wie het zijn" (https://nos.nl/artikel/2415689).
- **JTA archive** [B]: NIW 75th and 100th anniversaries; Dutch actors refusing the Schouwburg.

### 2f. Local history societies and neighbourhood platforms

- **Geheugen van Oost** https://geheugenvanoost.amsterdam (and geheugenvanoost.nl) [B/C]:
  5,503 stories (2023) by residents; search "Joods", "Transvaalbuurt", street names. Anniversary
  booklet "Zijn wie je bent in Oost" (PDF):
  https://www.dynamo-amsterdam.nl/wp-content/uploads/2023/10/Zijn-wie-je-bent-in-Oost-GvO-20-jaar.pdf .
  Memories are [C] until confirmed.
- **Vereniging Vrienden van de Plantage** https://www.vriendenvandeplantage.nl [B]: *Het
  Bulletin* (35 volumes, PDFs at /bulletins), the "Huizen van de Plantage" house series (/huizen).
- **Historische Kring Weesp** https://hkweesp.nl [B]: magazine *Historisch Weesp* (and
  predecessor *Historische kijk op Weesp*), dossiers, beeldbank (20,000 images), clipping and
  newspaper archive, WeesperNieuws index 2016-2021; library on site only (*offline*).
- **OudOost.nl** https://oudoost.nl [C]: community platform for Dapper, Transvaal, Oosterpark,
  Weesperzijde (successor of buurtbalietransvaal.nl); events only.
- **wijkkrantzuid.nl** (R). Amsterdam Museum "Vrouwen van Amsterdam" (Geheugen van Oost
  contributions, e.g. Wil Erents-de Brave):
  https://www.amsterdammuseum.nl/en/topic/women-of-amsterdam/group/geheugen-van-oost [C].
- **hmdb.org** markers [C]: transcriptions of Amsterdam and Weesp memorials (e.g. Weesp
  https://www.hmdb.org/m.asp?m=262160 ; Ben Brilstraat https://www.hmdb.org/m.asp?m=209443).

### 2g. Podcasts, podwalks and audio (with transcripts where noted)

- **De Joodse Stad** (UvA Amsterdam Humanities Hub, 2024-), Julia van der Krieke and Caspar
  Stalenhoef with Bart Wallet; season 1 Vlooienburg and Uilenburg, then Rapenburg and the
  Plantage: https://amsterdamhumanitieshub.nl/projecten/de-joodse-stad/podcast [B].
- **Joods Cultureel Kwartier podcast** (e.g. diamond city, the lost Waterlooplein) [B]: on
  Player FM and Castbox ("Joods Cultureel Kwartier").
- **Menassehcast** (Menasseh ben Israel Instituut) [A/B].
- **"Een klassenfoto"**, Sandra Rottenberg (VPRO DOCS), on pupils of the Joods Lyceum:
  https://www.vpro.nl/artikelen/podcast-een-klassenfoto-is-een-eerbetoon-aan-de-leerlingen-van-het-joods-lyceum [B].
- **Memorials of Amsterdam** (podcast since 2020, WWII stories) [C].
- **Amsta, "Hoor eens hoe het begon: het Dr. Sarphatihuis"** https://www.amsta.nl/podcast [C].
- Already in SCOUT-D: NTR podwalk with PDF transcript, the Rivierenbuurt audio walk, the "Bezet"
  podcasts.

### 2h. Oral history

- Philo Bregstein and Salvador Bloemgarten, *Herinnering aan Joods Amsterdam* (De Bezige Bij,
  1978); EN *Remembering Jewish Amsterdam* (Holmes & Meier, 2004) [A]: about 80 interviews with
  Jews of the prewar quarter; the core oral source for docs 05, 06, 15.
- Selma Leydesdorff's interviews behind *Wij hebben als mens geleefd* (D).
- Ester Wouthuysen and Willem Campschreur, *Jong in de oorlog* (Boom): twenty residents of the
  Plantage-Weesperbuurt, Jewish and not, https://boom.nl/zoeken/100-10680_Jong-in-de-oorlog [B].
- Frits Slicht, book of memories of Jewish residents of Oost ("verteld om niet te vergeten",
  via Geheugen van Oost; exact title *to verify*) [B].
- USC Shoah Foundation VHA, Fortunoff, USHMM (above) [A].
- "Bystander Memories" (Erfgoed van de Oorlog): 59 interviews with non-Jewish Dutch witnesses,
  several from Amsterdam (e.g. the Rode Dorp); DANS, research use only:
  https://portal.ehri-project.eu/units/nl-003006-easy_collection_2-urn_nbn_nl_ui_13_6e0_7w3 [A].
- "The Memory Archives" (Northwestern / HAW Hamburg), via Oorlogsbronnen [B].
- Ons Amsterdam reader memories (above) [C].

### 2i. Books (new to this map's research; scouts' shelf in SCOUT-D section 1)

Overview and old quarter:
- Bart Wallet et al., *Jews in the Netherlands. A short history* (AUP, 2023), open access:
  https://library.oapen.org/bitstream/20.500.12657/62475/1/9789048557790.pdf [A]. The best free
  modern survey (EN; NL ed. exists).
- Meyer Sluyser, *Voordat ik het vergeet* (1957), *Hun lach klinkt van zo ver* (1958), *Er groeit
  gras in de Weesperstraat* (1962) [B: memoir, nostalgic by his own admission; Ons Amsterdam 2006
  discusses]. Docs 05, 15.
- Guus Luijters (ed.), *Rapenburgerstraat 1937-1947* project and presentation (JCK) [B]; Guus
  Luijters, *In memoriam* (2012, the 17,964 children) [A]; Guus Luijters and Willy Lindwer,
  *Verdwenen stad* (2024, the deportation by tram) [B].
- Bianca Stigter, *Atlas van een bezette stad. Amsterdam 1940-1945* (Atlas Contact, 2019) [A]:
  about 600 pages arranged by address; the single best address-level book for docs 09-12 and
  the routes (first chapter PDF:
  https://www.goethe.de/resources/files/pdf222/eerste-hoofdstuk_atlas-van-een-bezette-stad.pdf).
  Her earlier *De bezette stad. Plattegrond van Amsterdam 1940-1945* (2005) [A].
- Steven Nadler, *Rembrandt's Jews* (University of Chicago Press, 2003) [A]: the Jodenbreestraat
  neighbours, Menasseh, myths about Rembrandt and the Jews.
- *Geschiedenis van de Joodse gemeenschap te Weesp* (Dick van Zomeren; Boekhandel De Ark /
  Heureka, Weesp, 1983; ISBN 90 6262 092 2) [A]. The only monograph on Weesp.
Trades, labour, diamonds:
- Theo van Tijn, *Amsterdam en diamant 1845-1897* (1976) [A]; H. Heertje, *De diamantbewerkers
  van Amsterdam* (1936) [A].
- The ANDB history published with the IISG and the Jewish Museum (Walburg Pers?, ISBN
  9789462492912, e-ISBN 9789462495784; title *to verify*, sample:
  https://static.theologie.nl/2024/06/9789462495784_fragm.epub) [A].
- Marjet Derks, "Jewish sport in the Netherlands, 1890-1940" (chapter; *to verify* venue) [A].
Persecution and after:
- Wally de Lang, *De razzia's van 22 en 23 februari 1941 in Amsterdam. Het lot van 389 Joodse
  mannen* (Atlas Contact, 2021) [A]. Doc 10.
- Sytze van der Zee, *Vogelvrij. De jacht op de Joodse onderduiker* (2010) [B]. Doc 12.
- Gerard Aalders, *Roof. De ontvreemding van joods bezit tijdens de Tweede Wereldoorlog* (1999)
  [A]; Raymund Schütz, *Kille mist. Het Nederlandse notariaat en de erfenis van de oorlog*
  (2016) [A]. Docs 09, 13.
- Abel Herzberg, *Kroniek der Jodenvervolging* (1950; many editions) [A].
- Conny Kristel, *Geschiedschrijving als opdracht. Abel Herzberg, Jacques Presser en Loe de
  Jong over de jodenvervolging* (1998) [A]. Doc 14.
- Bart Wallet and Hetty Berg (eds.), *Wie niet weg is, is gezien. Joods Nederland na 1945*
  (2010) [A]. Docs 13, 17.
- Truus Wijsmuller-Meijer, *Geen tijd voor tranen* (1961) [B: memoir]. Doc 12.
Biography:
- Lydia Hagoort, *Samuel Sarphati 1813-1866. Van Portugese armenarts tot Amsterdams ondernemer*
  (Bas Lubberhuizen, 2012/2013, 416 pp., ISBN 9789059373297) [A]; Lydia Hagoort, *Het Beth Haim
  in Ouderkerk aan de Amstel* (Verloren, 2005, ISBN 90-6550-861-9) [A].
- Henne van der Kooy and Justus de Leeuwe, *Sarphati, een biografie* (2000/2001) [A].
- S.A.M. Bottenheim, *Dr. Samuel Sarphati en zijne beteekenis voor Amsterdam* (1945) [A].
- Henri Krop, *Spinoza. Een paradoxale icoon van Nederland* (Prometheus, 2014) [A].
- Yosef Kaplan, Henry Méchoulan and Richard H. Popkin (eds.), *Menasseh ben Israel and His
  World* (Brill, 1989) [A].
- Klaas A.D. Smelik (ed.), *Etty. De nagelaten geschriften van Etty Hillesum 1941-1943*
  (Balans, 1986 and later) [A].
- Jaap Meijer, *They Left Their Traces* / *Zij lieten hun sporen achter. Joodse bijdragen tot
  de Nederlandse beschaving* (1964) [B].

---

## 3. Per document (4 to 8 best, NL and EN)

Scout sources marked (D) are the ones already in SCOUT-D, kept here only when they are among the
best.

**01 Jewish Amsterdam, four centuries**
1. Wallet et al., *Jews in the Netherlands. A short history* (2023, OA, EN) [A]
2. Blom, Fuks-Mansfeld, Schöffer (D) [A]
3. Serge Markx, "Zoektocht naar cijfers", Ons Amsterdam May 2020 (NL; the numbers) [B]
4. Mokum exhibition press kit (2025, NL) and Joods Monument thematic articles (NL/EN) [B]
5. USHMM "Amsterdam" (D, EN) [B]
6. De Joodse Stad podcast (NL) [B]
7. Bregstein and Bloemgarten, *Herinnering aan Joods Amsterdam* (NL/EN) [A]

**02 The Portuguese Nation (incl. colonial and slave-trade side)**
1. Stadsarchief archive 334, Portugees-Israëlietische Gemeente [A]
2. Fuks-Mansfeld, *De Sefardim in Amsterdam tot 1795* (NL) [A]
3. Bodian; Swetschinski; Levie Bernfeld (D, EN) [A]
4. De Paepe and Meijer, Talmoed Tora-synagoge, *Jaarboek Amstelodamum* 2014 (NL) [A]
5. Ets Haim manuscripts site (EN) [A]
6. Mapping Slavery (NL/EN) [B]
7. Ons Amsterdam, "Inwijding van de Esnoga" and "Valse messias" (NL) [B]
8. Hagoort, *Het Beth Haim in Ouderkerk* (NL) [A]

**03 The Hoogduitsers**
1. Stadsarchief archive 714, NIHS [A]
2. Blom et al. (D) [A]
3. Studia Rosenthaliana (search: kehilla, Ashkenazi, Yiddish; EN, OA) [A]
4. Ko Sturkop's buurtkaarten (NL) [B]
5. Ons Amsterdam, "'De mazzel, gabber!'" (2009) and "Die brutale Joden" (2011) (NL) [B]
6. J.W. van Dijk on the An-Ski Yiddish library, Maandblad Amstelodamum 1984 (NL) [A]
7. Hans Beem (D) [A]

**04 Emancipation and assimilation 1796-1940**
1. Stadsarchief 1407, Nederlands Israëlitisch Kerkgenootschap [A]
2. Michman; Wallet (D) [A]
3. Kok, PhD Leiden 2025 (EN, OA) [A]
4. Ons Amsterdam, "Die brutale Joden" (NL) [B]
5. Delpher: *Weekblad voor Israëlietische huisgezinnen* 1870-1924, NIW from 1865 [A]
6. Ons Amsterdam fashion pieces (Hirsch, German confection pioneers) (NL) [B]
7. Hagoort on Sarphati (NL) [A]

**05 The Jodenbuurt and its clearance**
1. Bregstein and Bloemgarten (NL/EN) [A]
2. Hakker (D) [B]
3. Stadsarchief beeldbank and the Jaap Kaas archive (31161) [A]
4. Ons Amsterdam, "De Jodenhoek door politie-ogen", "Koppijn in verdwenen straat" (2014),
   "Sporen van levens" (NL) [B]
5. Meyer Sluyser's memoirs (NL) [B]
6. Ko Sturkop's buurtkaarten (NL) [B]
7. UvA "Waterlooplein. De buurt binnenstebuiten" (2020) (NL/EN) [B]
8. Rob Snijders, "Had Amsterdam Joodse getto's", Ons Amsterdam 2014 (NL) [B]

**06 Diamonds and the ANDB**
1. IISG ANDB archive, digitised [A]
2. Leydesdorff; Hofmeester; Bloemgarten (D) [A]
3. Kok, PhD Leiden 2025 (EN) [A]
4. Van Tijn 1976; Heertje 1936 (NL) [A]
5. ANDB book with IISG and Jewish Museum (2019?, NL; title to verify) [A]
6. Joods Monument "Jewish diamond workers" (NL/EN) [B]
7. Ons Amsterdam, "Diamantairs op Achtergracht" (2008), "De eerste diamantairs",
   "Dorpse woonwijk of armoedig getto?" (2005) (NL) [B]
8. dutchjewry.org diamond workers database (EN) [B]

**07 Charity, schools and care**
1. Stadsarchief 1213 (Joodse Invalide), 1330 (Joodse HBS), 1066, 1316, 1346 [A]
2. PMC, "Hospital Care for Jews in Nineteenth-century Amsterdam" (EN) [A]
3. Delpher: *Officieel orgaan van de Joodsche Invalide* 1927-1938; *Joodsch hulpbetoon* [A]
4. Ons Amsterdam, "Recensie: De Joodsche Invalide" (2023), "De Joodse kweekschool in de
   bezettingstijd" (1989) (NL) [B]
5. Levie Bernfeld (D, EN) [A]
6. Joods Monument institution pages (D) [B]

**08 Synagogues of Amsterdam**
1. Stadsarchief 31185, Harry Elte's drawings; 714 NIHS [A]
2. De Paepe and Meijer 2014 (the Talmoed Tora reconstruction) [A]
3. Amstelodamum archive search "synagoge" (475 pages) per building [A]
4. Ons Amsterdam, "Gemoedelijk en intiem: Sjoel West" (2021), "Lief en leed in de
   'Jodenkerkstraat'" (2009) (NL) [B]
5. joodsamsterdam synagogue index (D) [B]
6. Rijksmonumenten register texts (D) [A]

**09 Persecution 1940-1943 and the Joodsche Raad**
1. NIOD archive 182 (Joodsche Raad) and *Het Joodsche Weekblad* 1941-1943 in Delpher [A]
2. Kemperman, *Een kwestie van uitvoering* (NIOD, 2025) (NL) [A]
3. Presser, *Ondergang*, free on DBNL (NL; EN *Ashes in the Wind*) [A]
4. Stigter, *Atlas van een bezette stad* (NL) [A]
5. Stadsarchief 5225 police reports (indexed) [A]
6. Aalders, *Roof*; Schütz, *Kille mist* (NL) [A]
7. Vastenhout; Moore (D, EN) [A]
8. USHMM microfilm of Stadsarchief records on Jews (EN catalogue) [A]

**10 February 1941**
1. Wally de Lang, *De razzia's van 22 en 23 februari 1941* (2021) [A]
2. Sijes (D) [A]
3. Stadsarchief 5225 police reports, wijkbureau J.D. Meijerplein [A]
4. USC iWalk "Jewish Resistance in Amsterdam" (EN, testimony) [B]
5. Ons Amsterdam, "Meer over bureau Meijerplein, afl. 3: februari 1941" [C] and the 2011 piece by
   Damsma and Schumacher on the WA men (title to find) [B]
6. Paul Winters, "The Amsterdam boxing school which formed the first Jewish resistance"
   (Flashscore, May 2025, EN) [C]
7. Beeldbank WO2, Waterlooplein raid photos [A]

**11 Hollandsche Schouwburg, the crèche, the children**
1. Van Vree, Berg, Duindam (D) [A]
2. NIOD 182 (Schouwburg administration) [A]
3. Guus Luijters, *In memoriam* (2012) [A]
4. Ons Amsterdam, "Vluchtroute naar de vrijheid", "Twaalf Pimentels en de oorlog" (2021),
   "Daarom een Holocaustmuseum" (2024), "De Joodse kweekschool in de bezettingstijd" (1989) [B]
5. Anne Frank House research portal, location "Hollandsche Schouwburg" (EN/NL) [A]
6. Yad Vashem Righteous files (Van Hulst and helpers) [A]
7. Yad Vashem blog on theatre in Holland (EN) [B]

**12 Hiding, help and resistance**
1. Croes and Tammes (D) [A]
2. Stigter, *Atlas* [A]
3. Yad Vashem Righteous database (EN) [A]
4. Sytze van der Zee, *Vogelvrij* (NL) [B]
5. USC iWalk "Jewish Resistance in Amsterdam" (EN) [B]
6. Ons Amsterdam, "Artis in oorlogstijd", "Ga maar naar Eli" (2026), "De Zacharias Jansestraat" [B]
7. Wijsmuller, *Geen tijd voor tranen* (memoir) [B]

**13 Return and postwar years**
1. Hondius; Bossenbroek; Verhey (D) [A]
2. Ido de Haan, *Na de ondergang* (1997) [A]
3. Wallet and Berg (eds.), *Wie niet weg is, is gezien* (2010) [A]
4. Stadsarchief 5131 Erfpacht commission; 1168, 1346 (Jewish social work) [A]
5. Rob de Spa, "Wie zijn er nog?" (Ons Amsterdam 2025) and his thesis (2025) [B]
6. NIW 1945-1970 in Delpher [A]
7. NOS, "Gemeente Amsterdam verdiende flink aan de Jodenvervolging" [B]

**14 Remembering: monuments, names, stones**
1. 4en5mei database (D) [A]
2. Ido de Haan (1997); Kristel (1998) [A]
3. David Barnouw, review of *Nederland en de herinnering aan de Jodenvervolging 1945-2024*
   (Ons Amsterdam 2024; find the book itself) [B]
4. Hansje Galesloot, "Opnieuw beginnen na de oorlog" (2015) [B]
5. Herman Vuijsje, "Koppijn in verdwenen straat" (2014) [B]
6. Open Joodse Huizen (NL) [B]

**15 Mokum culture**
1. Delpher: *De Joodsche Prins* 1912-1913; *De Vrijdagavond* 1924-1932 [A]
2. Ons Amsterdam, "Chroniqueur van het Joodse leven" (2024), "Heimwee naar de Joodse
   broodjeswinkels" (2022), "'De mazzel, gabber!'" (2009), "De klassieker Ajax-Feyenoord" [B]
3. Huygens Databank Sport; Vliet, "Joodse voetbalclubs" (2014); Joods Monument "Grote en kleine
   voetbalhelden" [A/B]
4. Kuper (D, EN) [B]
5. Meyer Sluyser's memoirs [B]
6. Ben Bril: Europeana (2021), NOS [B]
7. Yad Vashem, "Theater in Holland" (EN) [B]

**16 Stolpersteine**
1. stolpersteine-amsterdam.com and NU.nl (D) [B]
2. Open Joodse Huizen house stories [B]
3. Joods Monument per address (D) [A]
4. hmdb.org Weesp stones (59, at homes and at the synagogue) [C]
5. NH Nieuws, Weesp name plaque (79 names, 59 Jewish) [B]

**17 Jewish Amsterdam today**
1. Van Solinge and Van Praag (D) [A]
2. Wallet and Berg (eds.) (2010) [A]
3. Stadsarchief 1312 (LJG), 1534 (Cheider), 1330 (JBO) for institutional history [A]
4. NOS on the city's 25 million for Jewish life (https://nos.nl/l/2607675) [B]
5. Community sites (D) [B]

**18 Spinoza**
1. Nadler (D, EN) [A]
2. Henri Krop, *Spinoza. Een paradoxale icoon van Nederland* (2014, NL) [A]
3. Stadsarchief 334, the community minute books (the 1656 cherem) [A]
4. De Paepe and Meijer 2014, the synagogue he knew [A]
5. Spinoza Web (D, EN) [A]
6. Studia Rosenthaliana on the Spinoza family and Vlooienburg (EN) [A]

**19 Menasseh ben Israel**
1. Nadler, *Menasseh ben Israel* (D, EN) [A]
2. Kaplan, Méchoulan, Popkin (eds.), *Menasseh ben Israel and His World* (1989, EN) [A]
3. Nadler, *Rembrandt's Jews* (2003, EN) [A]
4. Bibliotheca Rosenthaliana, digitised Menasseh imprints [A]
5. Hagoort, *Het Beth Haim* (his grave) [A]

**20 Henri Polak**
1. Bloemgarten (D, NL) [A]
2. IISG ANDB and Polak papers [A]
3. Evelien Gans (1999, NL) [A]
4. ANDB book with IISG and Jewish Museum (NL) [A]
5. Ons Amsterdam, "De eerste diamantairs" (NL) [B]
6. parlement.com (D) [B]

**21 Samuel Sarphati** (see section 5)
1. Hagoort (2012/2013) [A]
2. Van der Kooy and De Leeuwe (2000/2001) [A]
3. Bottenheim (1945) [A]
4. Van der Kooy, Ons Amsterdam 2001 [B]
5. De Bruin, Historisch Nieuwsblad 2010 [B]
6. dutchjewry.org Hagoort essay (EN) [B]
7. TSEG review (2013) [A]

**22 Etty Hillesum**
1. Smelik (ed.), complete writings (NL; EN Eerdmans ed. in D) [A]
2. Koelemeijer (D) [A]
3. NIOD 182 (her Joodsche Raad work) [A]
4. Ons Amsterdam, "Recensie: Etty Hillesum" and "Huis gered..." [B]
5. Stigter, *Atlas* (Gabriël Metsustraat and the Museumplein) [A]

**23 Süskind and Pimentel**
1. Schellekens; Flim (D) [A]
2. Ons Amsterdam, "Twaalf Pimentels en de oorlog" (2021) and "Vluchtroute naar de vrijheid" [B]
3. Leo Piller, "De Joodse kweekschool in de bezettingstijd" (1989) [B]
4. NIOD 182 [A]
5. Joods Monument, Pimentel's page (D) [A]
6. Yad Vashem Righteous files (Van Hulst) [A]

---

## 4. Per neighbourhood

- **Jodenbuurt** (Vlooienburg, Marken, Uilenburg, Rapenburg): Bregstein and Bloemgarten; De
  Joodse Stad podcast season 1; Ko Sturkop's buurtkaarten; Stadsarchief 334, 714, 5225 and the
  Jaap Kaas archive; Ons Amsterdam ("De Jodenhoek door politie-ogen", "Sporen van levens", "Het
  Amsterdam van Meijer Sluyser", "Die brutale Joden"); UvA Waterlooplein archaeology; Amstelodamum
  2014 (Talmoed Tora); Luijters, Rapenburgerstraat project.
- **Plantage**: Vrienden van de Plantage *Bulletin* and house series; Wouthuysen and Campschreur,
  *Jong in de oorlog*; De Joodse Stad season 2 (Rapenburg and Plantage); Ons Amsterdam ("Artis in
  oorlogstijd", "Daarom een Holocaustmuseum", "De Joodse kweekschool in de bezettingstijd").
- **Weesperbuurt**: Rob van het Groenewoud, "De Weesperstraat" (NIJG lecture 2022, PDF); Ons
  Amsterdam ("Koppijn in verdwenen straat", "Lief en leed in de 'Jodenkerkstraat'"); Meyer
  Sluyser, *Er groeit gras in de Weesperstraat*; *Jong in de oorlog*.
- **Transvaalbuurt**: Geheugen van Oost; Ons Amsterdam ("Een bijna vergeten geschiedenis" on the
  HWV blocks, "'We slaan hem dood!'", "'Ga maar naar Eli'", "Had Amsterdam Joodse getto's"); UvA
  Transvaalbuurt event (2026); Frits Slicht's memory book (title to verify); Stadsarchief 5225
  (Judenviertel II, 1942-1943).
- **Rivierenbuurt**: Ons Amsterdam ("Merwedeplein 37 II", 2006; news item "Oorlogskinderen van
  de Rivierenbuurt en Joods buurtleven in Oost", /nieuws/3080); Anne Frank House research portal;
  David Kann, "It happened here: the annihilation of the Jews of the Amsterdam Rivierenbuurt",
  History Matters (Sheffield), 29 Oct 2020,
  https://historymatters.sites.sheffield.ac.uk/blog-archive/2020/it-happened-here-the-annihilation-of-the-jews-of-the-amsterdam-rivierenbuu [B];
  Stigter, *Atlas*.
- **Oud-Zuid**: Delpher *Joodsch Amsterdam Zuid* (1919-1921), the new south's own paper; Ons
  Amsterdam ("Het schoolleven ging door", Vossius Gymnasium, 2025; Etty Hillesum pieces; Verdooner
  reader memory); Stigter, *Atlas*; Anne Frank House portal; Joods Monument per address.
- **De Pijp** (with W7): Kok PhD 2025; Ons Amsterdam ("Dorpse woonwijk of armoedig getto?",
  "Sally van de Albert Cuyp", "Hulde aan wijlen Sarphati"); Van Tijn; IISG.
- **Oost** (Oosterpark, Watergraafsmeer, Indische Buurt): Geheugen van Oost; Ons Amsterdam ("De
  Zacharias Jansestraat", "Weeskind in Betondorp", "Het gat dat Synagoge Oost naliet" (R)); NH
  Nieuws on the Swammerdambuurt commemoration; Huygens Databank Sport (clubs near the Middenweg).
- **West**: Ons Amsterdam, "Gemoedelijk en intiem: Sjoel West" (2021): West "was never popular
  with Jewish Amsterdammers"; Ben Brilstraat sign (hmdb); thin otherwise.
- **Noord**: Steinmetz, *Asterdorp* (2016); Joods Monument "Asterdorp"; Ons Amsterdam tags "Ga
  maar naar Eli" as Noord (check why); NOS on the city's profit from Asterdorp housing.
- **Weesp**: Van Zomeren (1983); Historische Kring Weesp (*Historisch Weesp*, beeldbank, clippings);
  dutchjewry.org "The Jewish community of Weesp"; JCK Weesp page; NH Nieuws (name plaque; Emma
  Wonder-Menko); hmdb markers (59 stones); Weesp registers on Open Archieven.

---

## 5. Sarphati

Samuel Sarphati (Amsterdam, 31 Jan 1813 to 23 Jun 1866), physician of the Portuguese poor, then
the city's great improver.

- **Birthplace**: Nieuwe Keizersgracht 49, corner of the Weesperstraat (family home in 1813).
  Sources: joodsamsterdam.nl, "Samuel Sarphati" https://www.joodsamsterdam.nl/samuel-sarphati/
  [B]; nl.wikipedia "Samuel Sarphati" [B]. Childhood also given as Jodenbreestraat, later Nieuwe
  Herengracht (Hagoort essay, dutchjewry) [B]: the two need reconciling.
- **Parents' house and practice**: Nieuwezijds Voorburgwal (stamp-market stretch, no number);
  apprenticeship with pharmacist Coronel, Joden Houtgracht 7 (joodsamsterdam) [B].
- **Hospital**: physician of the Portuguese-Israelite hospital Mesjiw Nefesj (founded 1835 after
  the cholera), corner Rapenburgerstraat and Rapenburg, from 1840; resigned 1846 after the scarlet
  fever epidemic (Hagoort essay; joodsamsterdam) [B].
- **Home and death**: Herengracht 598, by the Amstel; he died there in 1866 (joodsamsterdam;
  Hagoort essay on dutchjewry) [B].
- **Public health**: 1847 permit to collect ashes, refuse and night soil and turn it into
  manure, Amsterdam's first cleansing service (taken over by the city: decision 1875,
  concession ended Oct 1877); 1842 trade school and pharmaceutical society; 1847 agricultural
  society. Sources: Hagoort (book and dutchjewry essay) [A/B]; Ons Amsterdam 2001 [B]; DBNL
  *Geschiedenis van de techniek in Nederland* [A].
- **Bread factory**: Maatschappij voor Meel- en Broodfabrieken, founded 1855, west side of the
  Vijzelgracht; about 9,000 cheap loaves a week; bread prices fell. Sources: joodsamsterdam
  Sarphati page [B]; nl.wikipedia (citing Fanta Voogd, "Fabrieksbrood", *De Ingenieur*, 19 Jan
  2007, and Lintsen, *Geschiedenis van de techniek in Nederland* I, 1992) [B/A]; Amstelodamum
  Maandblad 1959 p. 47 and 1975 p. 100 (full-text hits for "Sarphati broodfabriek") [A]. House
  numbers and closing date: not found; check Stadsarchief beeldbank "Vijzelgracht broodfabriek".
- **Paleis voor Volksvlijt**: Vereeniging voor Volksvlijt 1852; palace on the Frederiksplein
  built 1859-1864, opened 16 Aug 1864, burned 17-18 Apr 1929; De Nederlandsche Bank now on the
  site. Sources: Ons Amsterdam "Symbool van grootsteedse bravoure" [B]; M.G. de Boer in the
  jubilee yearbook of the Maatschappij van Nijverheid en Handel (1928) pp. 35-38 [A]; Rijksmuseum
  prints (https://www.rijksmuseum.nl/en/collection/node/Paleis+voor+Volksvlijt--f4a30841ee41e5b222030b5cc1f6dee8) [A].
  Pool place: Frederiksplein (`xt1qvhjm0c30868v1pk5llpq`).
- **Amstel Hotel and the plan for the Pijp**: prospectus 1865 (Rijksmuseum); first stone about
  three months before his death; opened 1867 after he died; only the Amstel wing built;
  architect Cornelis Outshoorn. Sources: Amstel Hotel history PDF
  (https://samsa.home.xs4all.nl/pdf/AmstelHotelGeschiedenis.pdf) [C]; nl.wikipedia [B]. Pool:
  `sbhpzekdnypghuwnmnpv9ozf`.
- **The "Bouwfonds"**: not confirmed. Hagoort's essay names a "Nederlandsche Bouwmaatschappij"
  (Netherlands Building Society) he helped found, and his financing vehicles (Crediet Mobilier,
  1842 in nl.wikipedia). No source found for an "Amsterdamsch(e) Bouwfonds" under his name;
  check Hagoort (2013) chapters on the Amstel Hotel and the city extension before using the word.
- **Grave**: Beth Haim, Ouderkerk aan de Amstel, beside his wife Abigaël Mendes de Leon (Hagoort
  essay; Monumenten in Nederland, DBNL) [B/A]. bethhaim.nl search returns "F022 Gedenksteen
  familie Sarphatie" only; the grave's field-row-number not found: ask Beth Haim or check
  Hagoort, *Het Beth Haim* (2005).
- **Remembered**: Sarphatistraat (named 1870); Sarphatipark (begun 1877, named 1885 or 1888:
  sources differ) and monument (Ons Amsterdam Sep 2024); Dr. Sarphatihuis, Roetersstraat (named
  1978; Amsta podcast); Het Parool readers' "greatest Amsterdammer" (17 Jan 2025).
- New place candidates from this: S-01 to S-03 below.

---

## 6. Places the scouts missed (S-NN)

Checked against INVENTORY.json, the SHORTLIST and the three scout files (several candidates
turned out to be covered: the police station and Talmud Tora site are in SCOUT-C's Mozes en
Aäronkerk enrichment; Alcazar and Hirsch are enrichment lines; Sal Meijer was dropped; the
Kraaipanstraat plaque for Eli van Tijn sits in the Transvaalplein place).

- **S-01 Sarphati's bread factory (site), Vijzelgracht, west side.** Hook: the first bread
  factory in the Netherlands (1855), 9,000 cheap loaves a week from a Portuguese-Jewish doctor's
  company. Sources: joodsamsterdam.nl Sarphati page; nl.wikipedia (Voogd 2007, Lintsen 1992);
  Amstelodamum Maandblad 1959 p. 47. House number needed (Stadsarchief beeldbank). Status: gone.
- **S-02 Nieuwe Keizersgracht 49, Sarphati's birthplace.** Hook: the city improver was born on
  the corner of the Weesperstraat, in the better part of the Jodenbuurt. Sources: joodsamsterdam;
  nl.wikipedia. Could be a Look-for line in the Nieuwe Keizersgracht place
  (`gcgxah305ci3a06vsag6295o`) instead.
- **S-03 Herengracht 598, Sarphati's house.** Hook: he planned the Amstel Hotel and the Pijp from
  a canal house a few doors from the Amstel, and died here in 1866. Sources: joodsamsterdam;
  Hagoort essay (dutchjewry). Check the building survives (BAG).
- **S-04 Boxing school Olympia and the first Jewish knokploeg.** Hook: Joop Cosman's school
  (1928) in the Jodenbuurt trained the young men who fought the WA on the Waterlooplein on
  11 Feb 1941, with Olympian Ben Bril as coach. Sources: USC iWalk "Jewish Resistance in Amsterdam";
  Flashscore (Paul Winters, 2025) [C]; book sample on Jewish boxers of the Jodenbuurt
  (https://download.boekhuis.nl/9789044651775_fragm-docb.pdf, title to identify). Address needed
  (Delpher NIW 1928-1940, "Olympia" "Cosman"). If no address: a section in doc 10 and a line in
  the Waterlooplein place.
- **S-05 Ben Brilstraat, Bos en Lommer.** Hook: a street for the 16-year-old Jewish boxer from
  the Valkenburgerstraat who boxed in the 1928 Olympics, refused Berlin 1936 and survived the
  camps after a teammate betrayed him. Sources: hmdb.org marker 209443; NOS (2283165); Europeana
  (2021); en.wikipedia "Ben Bril". Weak as a pin (a street sign): better a Look-for line in the
  Valkenburgerstraat place (`wxeueb8f6c9a6zd1gjahyho8`) and doc 15.
- **S-06 Korte Middenstraat, Weesp: the first (house) synagogue, 1774.** Hook: Weesp's Jews prayed
  in a house here for 66 years before the Nieuwstraat synagogue (1840); in April 1844 rioters broke
  the new synagogue's windows and those of Jewish homes (use in the synagogue place). Sources:
  dutchjewry.org "The Jewish community of Weesp" (from Van Zomeren 1983); jck.nl Weesp; joodsamsterdam
  "Weesp" (D). House number needed (Van Zomeren; Historische Kring Weesp).
- **S-07 De Joodsche Prins and Herman Kisch's shop.** Hook: for one year (1912-1913) a cheese
  seller photographed Jewish Amsterdam for an illustrated weekly; all 52 issues are in Delpher.
  Sources: Ons Amsterdam, "Chroniqueur van het Joodse leven" (May 2024); Delpher, *De Joodsche
  Prins*. Address of the shop needed (Delpher adverts, Stadsarchief adresboeken). Strong for doc
  15 even without a pin.
- **S-08 Vossius Gymnasium, Messchaertstraat 1 (Zuid).** Hook: the school life of Hanny Michaelis
  and her Jewish classmates until the 1941 expulsion. Sources: Ons Amsterdam, "Het schoolleven ging
  door" (Houwink ten Cate, Oct 2025); second source needed (school history; 4en5mei). Check: the
  pool's only Vossius hit is the Vossiusstraat Institute for the Blind, not the school.

Leads, not places yet: Jewish football clubs Wilhelmina Vooruit, I.L.F.R.A., Maja, Eendracht Doet
Winnen, AED (grounds unknown; Huygens Databank Sport, De Sportwereld 2014); the Jewish sandwich
shops (Ons Amsterdam 2022: which survive?); De Leeuw zuurwaren (traces to the Rapenburg, about
1850; current address to check); Frieder Weissmann (no place); the Verdooner pensions in Bussum and
Zandvoort (outside).

---

## 7. Coverage log and not read

- **Read or opened**: Delpher holdings via SRU (titles and year ranges; no article text);
  Stadsarchief inventory search (3 keyword searches, titles only); Amstelodamum digital archive
  (4 searches, hit counts only); Ons Amsterdam: about 30 article headers opened one by one at
  pace in the browser, plus the "Jodenvervolging" tag listing (3 pages); joodsamsterdam Sarphati
  page; nl.wikipedia Sarphati; dutchjewry Sarphati and Weesp pages; Europeana Ben Bril; Flashscore
  Olympia; NIJG buurtkaarten post; UvA De Joodse Stad post; hkweesp.nl, vriendenvandeplantage.nl,
  oudoost.nl home pages; Beth Haim search.
- **From search results only** (titles and snippets, not opened): most NH Nieuws, NOS, JTA,
  Yad Vashem, USHMM, Arolsen, EHRI and Joods Monument items; some Ons Amsterdam slugs
  ("Vluchtroute naar de vrijheid", fashion pieces, Ajax pieces, "Meesterwerk vol tegenslag").
- **Not read**: Het Parool and NIW (paywall); Stadsarchief beeldbank series; the Amstelodamum
  pages themselves; Geheugen van Oost stories; Vrienden van de Plantage bulletins (PDFs exist);
  Historisch Weesp issues (not online as far as seen); NIOD site (rate-limited 429); the
  Menasseh ben Israel Instituut and AUP sites (block scripted access).
- **To verify before citing**: the ANDB book title (ISBN 9789462492912); Kemperman's publisher;
  Marjet Derks's chapter venue; Evert de Vos's thesis title; Frits Slicht's book title; the
  Bouwfonds; the 1941 registration forms' whereabouts; Sarphatipark naming year.
- The BrowserOS tab used for this work was closed at the end.
