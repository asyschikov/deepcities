# Westerpark West (slice notes, 2026-11-25)

Fact base: notes/voortuinen-complex.md (scout). Sources re-opened for this slice are listed below.
Nothing written to the live site.

## Already live: not drafted as a new place

`dc places sights --all --q Pepper` finds **Westerpark West** (`ysdiurnzy5zsg5ai52opipta`, housing,
created 2026-11-21, MVRDV masterplan, all six designs, "no social rent" via NUL20). Per the brief it is
not drafted again. Its Contemporary fields are in `overrides/westerpark-west.json` (dry-run of
`dc override-many contemporary` gives would-update, only those fields).

- extra_description written: the live text names the buildings but not the GP+B landscape or the
  planning story (housing mix and why no social rent, the council striking the Kavel X tower, the
  2022 AAP jury's remark on a new resident group).
- Live place, for the coordinator: summary says 921 homes (MVRDV masterplan page and 2026 news);
  MVRDV's Blend and Salt pages say 913, and so do the BAG counts. Its pin (52.385593, 4.852963) is
  inside Salt's footprint; a pin on the promenade/square between Salt and Blend, just north of the
  canal edge (BGT), would be 52.385420, 4.853380. Not changed.

## Sources per fact (override)

- GP+B landscape, 450 m promenade and boardwalk, heemparks: https://www.gp-b.com/westerpark-west ;
  extension of their Westergasfabriek design, squares and courtyards per plot: MVRDV masterplan
  page and news 31/08/2023 and 29/10/2026 (read in BrowserOS).
- Half sale, half mid-to-high rent; no social rent; Landlust more than 50% social rent: bestemmingsplan
  toelichting (housing policy section and §3.7), https://ruimtelijkeplannen.nl/documents/NL.IMRO.0363.E1502BPSTD-VG01/b_NL.IMRO.0363.E1502BPSTD-VG01_23.pdf
- Residents regretted no social rent at the informatiemarkten: participation document,
  https://ruimtelijkeplannen.nl/documents/NL.IMRO.0363.E1502BPSTD-VG01/b_NL.IMRO.0363.E1502BPSTD-VG01_18.pdf
- Kavel X struck by amendment on 29 Nov 2017; 44 m Westerpoort: same toelichting (note on p. 5, §3.8.6).
- AAP 2022 vakjury on De Voortuinen (new resident group, neighbourhood make-up):
  https://arcam.nl/algemeen/vakjuryrapport-amsterdamse-architectuurprijs-2022/
- Recognition: Gulden Feniks 2022 winner transformatie, https://nrp.nl/wp-content/uploads/2023/07/Juryrapport-Gulden-Feniks-2022.pdf ;
  AAP 2022 nominated, https://arcam.nl/architectuur-gids/de-voortuinen/ ("Genomineerd, 2022");
  Blend and Pepper among the ten finalists of the Amsterdamse Nieuwbouwprijs 2025 (won by
  Amstelkwartier kavel 8A), https://www.amsterdamwoont.nl/nieuwbouwprijs/2025/ . MVRDV lists this as
  a "Nomination" for the masterplan; named by building here.

## Salt and Pepper (places/westerpark-west.yaml)

Drafted as a child of `ysdiurnzy5zsg5ai52opipta` (in `note`). Title follows MVRDV's own order
("Salt and Pepper"). Sources: MVRDV Salt page (48 m, tallest by a narrow margin, white ceramic,
narrow windows, 92 flats with loggias, 10 m cantilevers in opposite directions, reason); MVRDV news
31/08/2023 (delivered by J.P. van Eesteren to CBRE IM with Blend); Elephant Pepper page EN/NL
(façade options at fixed prices, parametric script, planters in thickened balustrades); Amsterdam
Woont Pepper NL/EN (black, faces the allotments to the north, Salt faces the city; free-sector rent).
Left out: Pepper's flat count (Elephant 82, Amsterdam Woont 76, BAG 78) and the ground-floor gym
and restaurant (current use not checked). Address from BAG: Pepper 778-938, Salt 940-1138 (pand
0363100012250972, the 48 m one in 3D BAG). Pin between the two towers.

Photos (Commons, looked at): 2023 Haarlemmerweg, Asd-Salt (1), Asd-Pepper, Asd-Salt (2).
Also seen and suitable for the live ensemble: 2023 Haarlemmerweg, Asd-Blend; Asd-Voortuinen.
No Commons photos found of Basil or Kruidentuin.

Dutch: written fresh; checked for 8-word runs against the bestemmingsplan, participation document,
Arcam pages and jury reports, Amsterdam Woont NL, Elephant NL and Van Wijnen pages: 0 hits.

## De Voortuinen address fix

`fixes/glg9a1k1viqkeeu5kqebbav6.json` now holds only `{"address": "Haarlemmerweg 290-488"}`
(dry run: address only). BAG pand 0363100012116511 (bouwjaar 1970, in gebruik): in-use units
Haarlemmerweg 290-488, 94 dwellings, postcode 1014BL. The file's earlier patch (trees, about 120)
is already live and in git (64a9a1c), so it was replaced, not merged.
