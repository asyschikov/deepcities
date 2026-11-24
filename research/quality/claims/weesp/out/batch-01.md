# Claims check: Weesp batch 01

11 places checked, 11 changed. About 175 factual claims checked (EN and NL summary, body, Look for lines, attributes).

- Sourced: 5 (claims kept, with a source found or confirmed)
- Narrowed: 32 (counted on the EN side; the NL text was changed to match)
- Cut: 9
- Copied Dutch rewritten in 8 places. Copy checker (nlcheck.py) result: 0 copied sentences in all 11 places.

## Changes

**Drosthagen, Middenstraat 9-11**
- cut: "the back stones are not visible from the street" (EN and NL); no source.
- NL: two sentences copied from DBNL and RCE rewritten fresh.

**Former waterworks house, Provincialeweg 16**
- narrowed: summary "seepage water from the Vecht lakes ... for half of Amsterdam" changed to "from the Bethunepolder ... for Amsterdam east of the Amstel" (KIVI; nl.wikipedia gives about a third, not half).
- narrowed: "just west of Driemond ... at the gate of a large, fenced water plant" changed to "near Driemond ... beside the Weesperkarspel water plant".
- sourced: "east of the Amstel" (KIVI page, already in draft sources, added to the links list).
- cut: "The plant itself is closed to the public"; Look for lines on the entrance position, the Gaasp view and the solar park.
- NL: Bethunepolder sentences copied from nl.wikipedia rewritten fresh; NL summary shortened to fit 280.

**Former cantor's house, Sleutelsteeg**
- narrowed: Stolpersteine "for the last people who lived here" changed to "for the cantor, his wife and their lodger, forced out in 1942" (EN and NL).
- NL: RCE phrase "van betekenis uit een oogpunt van ..." and the Joods Monument sentence about 29 April 1942 rewritten fresh.

**De Melkkoe gable stone, Dammerweg 10**
- cut: "Most farm names along the Vecht are painted on a board"; gate with brick piers; cellar-window Look for line.
- narrowed: cow relief and "proud sign for a dairy farm" changed to the inscription only; "near Uitermeer / close to Fort Uitermeer / dike road" changed to "east side of the Vecht" (street list); original_use "Dairy farm"/"Melkveehouderij" changed to "Farm"/"Boerderij" (RCE function Boerderij).
- NL: RCE opening sentence rewritten fresh.

**Hoogstraat, Vecht end (nos. 1–30)**
- cut: "Deep houses and warehouses stood close to the river traffic ... to Amsterdam" (EN and NL).
- narrowed: "Many fronts ... often 17th century" changed to "Several houses ... some with T-shaped sash windows"; no. 26 railing marked "probably 18th century"; no. 30 dormer "carved" changed to "richly detailed".
- NL: runs copied from tgooi/DBNL and the city register rewritten.

**Gate "Al voor een ander", Oudegracht**
- cut: "leads to a passage behind the Oudegracht / opens onto the plot behind".
- narrowed: "puzzling motto" changed to "motto"; "What the motto meant is not recorded" changed to "The register does not say what the motto means"; "sandstone lintel" changed to "stone lintel"; NL "gebouwtjes met trapgevels" changed to "gebouwtjes"; original_use changed to "Gateway in a property boundary" / "Poortje in een erfscheiding" (RCE: Erfscheiding).
- NL: copied RCE sentence rewritten.

**Achtergracht**
- sourced: 1961 filling-in (DBNL); 1649 map and 1651 decision (city register records, now added to sources).
- narrowed: summary "lived here among gardens and orchards" changed to "Land registers name ... as owners" (the orchards are 1649, the owners 1832 and later); "along the Nieuwstad" removed; "his sons Jan and Hermanus" changed to "Jan and Hermanus Schep" (no relation stated); Van Maanen sentence aligned to the register (houses and a stable, later house and yard); 78–82 "one cornice" removed, and NL "gepleisterde" removed.
- NL: two copied cadastral sentences and the no. 56 sentence rewritten fresh.

**Hoogstraat, south (nos. 32–62)**
- cut: "South of the Slijkstraat corner the Hoogstraat grows grander" (the Slijkstraat corner is Hoogstraat 5, at the north end).
- narrowed: "quieter half" changed to "southern half"; "dated gable of 1675" changed to "gable stone dated 1675"; "merchant's house" changed to "town house"; "tower house of 1911" changed to "1905-1911"; "Walenkamp family of architects" changed to "the architect Walenkamp"; "slate-roofed" tower changed to "with a tented roof" (now artificial slate); "Further south" removed before the church.
- NL: copied city-register runs for nos. 36 and 44 rewritten.

**House of 1754, Zandpad Driemond**
- sourced: Driemond as the place where Gein, Gaasp and Smal Weesp meet (nl.wikipedia Driemond, added).
- narrowed: "front gable" changed to "gable"; "wooden side walls behind the brick front" changed to "wooden parts of the house beside the brick gable" (EN and NL).
- cut: "Such jaartalankers were a common way to put a building year on a Dutch house".

**Huize America and Vechtzicht**
- narrowed: "through open polder" changed to "the winding Vecht on its dike" (street list); farm no. 7 "working and living parts behind" changed to say only that it has them and that the register calls America its front house.

**Toll and bridge-keeper's house, Ossenmarkt**
- sourced: "For a time it also held a church" (DBNL).
- narrowed: "at the east end" and "from the Hoogstraat" changed to "by the bridge" and "crosses the Vecht at the Ossenmarkt"; "unexpectedly grand" changed to "grander"; "A few steps away on the island" changed to "Further along the Ossenmarkt, at no. 44" (EN and NL).

## For the user

- RCE 38615 (Ossenmarkt 1) register text reads "bakstenen gebouw met kerk XVIII". That is probably a typo for "kern" (core). The church claim on the map rests on DBNL ("waarin enige tijd ook een kerk was gevestigd"), not on this register line. The NL body reads it as "kern".
- The city register for Hoogstraat 36 (450077006) lists architectOntwerp "Bazel, K.P.C. de", but its own text suggests Walenkamp. The map says "possibly by the architect Walenkamp". This conflict is worth a look.
- The Achtergracht cadastral story comes from the city register records (data.amsterdam.nl fe3a7dec..., eb3163d6..., 8761f420...), not from the RCE texts the draft cites. They are added to `sources_add`.
- The waterworks summary used to say "half of Amsterdam". nl.wikipedia says about a third, and KIVI says the area east of the Amstel. The map now uses KIVI's wording.

## Verification

All 11 changed places re-checked against the originals and sources (KIVI, DBNL, RCE register texts, city register records, Joods Monument, dutchjewry.org, nl.wikipedia). The "sourced" changes hold up: KIVI confirms "east of the Amstel ... Bethunepolder ... Weesperkarspel", DBNL confirms the 1961 filling-in, the church in Ossenmarkt 1 and the Vecht island fort, and the city register records confirm the Achtergracht owners and the 1649/1651 facts. nl.wikipedia Driemond confirms the three rivers. Spot-checked cuts (Dammerweg cow relief, gate and Uitermeer; gate passage; waterworks access and solar park; jaartalankers as common practice; Hoogstraat "grander"; America "open polder") have no support in any listed source and stay cut.

Fixes:
- Waterworks: NL summary "Wordt gemeentelijk monument" stated the outcome as certain; now "Aanwijzing tot gemeentelijk monument loopt" (record status "In procedure Gemeentelijk Monument").
- Cantor's house: NL body lacked the EN fact of the stone with 1878 and the Jewish year 5638; added (dutchjewry.org: "a front stone ... 1878 and on top of this 5638").
- Hoogstraat Vecht end: restored the sourced part of a cut sentence, EN "River traffic from the Vecht to Amsterdam went by way of the Smal Weesp." / NL "Het vaarverkeer van de Vecht naar Amsterdam ging via de Smal Weesp." (DBNL: "De doorvaart van de Vecht via de Smal-Weesp en de Gaasp naar Amsterdam werd in de 15de eeuw belangrijk"). The deep houses and warehouses stay cut.
- Hoogstraat Vecht end: NL lock-keeper's house "begin van de 19e eeuw" changed to "eerste helft van de 19e eeuw" to match the EN (RCE "aanvang 19e eeuw", DBNL "circa 1840").
- Hoogstraat south: NL no. 47 said "hardstenen ... guirlandes uit de 17e eeuw" while the EN says a late 18th-century bell gable with sandstone festoons of about 1670; NL now follows DBNL like the EN, Look for line too.
- Zandpad Driemond: Look for "wooden parts of the house beside the brick gable" / "naast de bakstenen puntgevel" placed the wood without a source; now "the wooden parts of the house" / "de houten delen van het huis".
- Huize America: NL body now says the farm has "bedrijfs- en woongedeelte", as the EN does (DBNL).
- Ossenmarkt: "Further along the Ossenmarkt" / "Verderop aan de Ossenmarkt" was a new position claim; now "On the Vecht island, at Ossenmarkt 44" / "Op het Vechteiland, op Ossenmarkt 44" (DBNL).

Checks after fixes: nlcheck.py 0 copied runs in all 11 places; no em dashes or spaced en dashes; all summaries at most 280 characters (longest NL 272); titles unchanged; changed attributes (Dammerweg original_use, gate original_use) have NL counterparts.

For the user: RCE 38531 (Hoogstraat 47) calls the ornaments "hardstenen" (bluestone), DBNL "zandstenen" (sandstone). The map follows DBNL in both languages.
