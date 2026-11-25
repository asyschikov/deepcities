# Notes: Gasholder pools (Westergasfabriek) / Gashoudervijvers

One new place, `research/west/places/westergas-pools.yaml` (validated, 0 errors), plus a pointer
patch for the live Gashouder place in `research/west/fixes/westergas-pools.json`.

## What the two pools are

- **Two round water basins, each about 51 m across** (OSM ways 55145011 and 55145274; centres
  52.386084, 4.868069 and 52.386101, 4.868985), side by side just south of the Gosschalklaan,
  south of the Gashouder. Pin set between them: 52.386092, 4.868527.
- **They are the foundations of two of the works' first gasholders.** Stadsarchief (Bureau
  Monumentenzorg negative BMAB00015000093_014) shows "de drie gashouders uit 1885" in a row along
  the Haarlemmervaart, guide-framed bells, with the 1902-1903 Gashouder going up behind. A Stadsarchief
  photo by E. Wendt, dated ca. 1975 (ANWI00312000009), shows "twee van de gashouders ... tijdens de
  afbraak". Fabrique des Lumières' history timeline: watertoren demolished 1968, "de twee gashouders
  in 1974". Trouw and the Federatie Industrieel Erfgoed Flickr album: "voormalige fundamenten twee
  gashouders, nu twee vijvers".
- **Design**: Gustafson Porter (Kathryn Gustafson, Neil Porter), competition plan *Changement* with
  Francine Houben (Mecanoo), won 1996/97, detailed design completed 2004, project 1997-2005 (GP+B
  project sheet; ArchDaily architects' text). The architects' text: "two historic gas holding
  structures adjacent to the Cité des Artistes complex frame displays of aquatic plants, fish and
  reflective water". Arketipo 3/09: converted into circular basins rich in aquatic plants, with
  floating terraces and wooden walkways.
- **Name**: Westergas itself calls them the **Gashoudervijvers** / "Gashouder Vijvers" (World Pride
  2026 page, Westerdag 2026 programme, its site plan). Commons captions: "Westelijke" and
  "Oostelijke gashoudervijver". No other name found. "Waterspiegel" is unrelated (the
  Waterspiegelplein is on the GWL-terrein).
- **One place, not two** (coordinator's question): same gasholder row of 1885, same demolition, same
  2004 design, one name in the plural. They differ only in planting (west: water lilies; east: mostly
  reeds), which is one line in the body.
- **Use now**: open park, boardwalk inside the rim. Occasional stage: Ryoji Ikeda's
  *spectra [amsterdam]*, Dream Amsterdam, 6-21 June 2008 ("Westergasfabriek Water Bassins", white
  light every evening; Flickr album dated 7 June 2008 confirms the pools); WorldPride 2026 photo
  exhibition (westergas.nl); Westerdag 30 Aug 2026, Dilruba Tayfun's *Twee Meter Tien* on a circular
  scaffold among water and reeds plus a saxophone piece by Floris van der Vlugt (westergas.nl).

## Calls made

- **Category: industrial**, not green. The reason to go is that these are gasholder pits; as plain
  ponds they would not make the map. Same category as the Gashouder they point to.
- **Rank: Nice.** A good, odd stop inside a park people visit anyway; not worth a special trip on
  its own (the Westergasfabriek place is Amazing).
- **Detail: city** (set at import; `detail` is not a validator key, so it is only noted in the YAML
  header).
- Title EN "Gasholder pools (Westergasfabriek)", NL "Gashoudervijvers (Westergasfabriek)", mirroring
  "Gashouder (Westergasfabriek)".

## Claims dropped or softened

- **Depth**: no source found. Left out.
- **Water source, fish today, winter use (skating), paddling**: no source. Fish appear only as design
  intent ("frame ... fish"), and the text says so. Trouw (undated walk article) hinted people walked the basin
  rims "though that is probably not the idea"; left out.
- **Beehives in the eastern pool**: only a 2022 Commons photo caption (Marion Golsteijn); no current
  status. Left out.
- **Which of the three 1885 gasholders the pools were, and what became of the third**: no source.
  The text says "two of the rings". PIE-rapport 26 lists "gashouders 1886 en 1962" as demolished
  and the 1962 dry gasholder's foundation as still there in 1995; that foundation is not these pools
  (different size and date), and its location was not established. Left out.
- **Demolition year**: Fabrique des Lumières says 1974 (a venue's history page, not a primary
  source); the Stadsarchief photo of the demolition is dated "ca. 1975". Text says "around 1974".
- **"Cité des Artistes"**: not used; not needed for the visitor.
- The Westergas "1903" vs register "1902" for the Gashouder: the pool text uses "1902-1903" for
  building it and "1902" for the date on it, which fits both.

## Photos (all verified by viewing; Commons, clear licence)

1. `File:Spaarndammer en Zeeheldenbuurt, Amsterdam, Netherlands - panoramio (2).jpg` (Ben Bender,
   CC BY-SA 3.0): a pool with reeds, the rim, and the Gashouder behind. Cover.
2. `File:Gashoudervijver.jpg` (Marion Golsteijn, 2022, CC BY-SA 4.0): the western pool, lilies,
   boardwalk, brick rim with steel parapet.
3. `File:Voormalige gashouders van de Westergasfabriek, thans vijver en relaxplek - Amsterdam - 20536709 - RCE.jpg`
   (Bert van As, RCE, 2009, CC BY-SA 4.0): boardwalk inside the ring, planted pool.

Not used: `Overzicht vijver op het terrein bij de Westergasfabriek ... 20536582 - RCE.jpg` shows a
long rectangular pond elsewhere in the park, not these pools.

## Gashouder pointer patch

`research/west/fixes/westergas-pools.json`, built from live revision 3 of
`jsds7c6k9b08ytpixfmvm8kx`: replaces "the site of former ones is now a pond and a place to relax in
the park" and the "pond on the site of former gasholders" Look for line (EN and NL) with pointers to
the new place. Rest of the text unchanged.

**For the coordinator:**
- The Gashouder's draft of record is `research/west/places/spaarndammer.yaml` (not mine to edit). It
  still has the old pond sentences, and its `sources` cite the RCE pool photo. Apply the same two
  replacements there, or a later `--upsert` will bring the old text back.
- The Gashouder reopened in early November 2026 after a long rebuild that added a basement (Het
  Parool, 3 Nov 2026); its live text doesn't mention this. Worth a separate update.

## Sources

- Stadsarchief Amsterdam beeldbank: BMAB00015000093_014 (three gasholders of 1885), ANWI00312000009
  (demolition, ca. 1975).
- PIE-rapport 26, *Gasproductie en gasdistributie*, § 2.11 fig. 30 and § 4.4.4.1 (industrieel-erfgoed.nl).
- Het Parool, Peter de Brock, "De Westergasfabriek toen ze nog een fabriek was", 31 Jul 2026.
- Trouw, "Westerpark: wandelen in een sfeer van vrijheid, creativiteit en een vleugje anarchie".
- Fabrique des Lumières, "Onze geschiedenis".
- Gustafson Porter + Bowman project page and project sheets (EN, NL); ArchDaily 803228; Landezine;
  Landscape Institute case study; Arketipo 3/09; Gravagnuolo et al., *Sustainability* 2019, 11, 3512
  (quotes the full architects' sentence that is cut off on ArchDaily).
- westergas.nl: Geschiedenis, Westerdag 2026, World Pride in het Cultuurpark.
- ryojiikeda.com works archive (spectra [amsterdam]); Flickr, industrieelerfgoed album "Vijver (gashouder)".
- RCE kennisbank, complex 337499.
- OpenStreetMap (pool geometry, Gosschalklaan).
