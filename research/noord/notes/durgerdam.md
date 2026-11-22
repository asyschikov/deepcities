# Noord, slice durgerdam: notes

68 records in `slices/durgerdam.json`, plus 6688 and 6689 (Durgerdammerdijk 195 and 206) taken
over from waterland-south. All 70 are used exactly once across `research/noord/places/*.yaml`
(checked with a script over every places file).

## Places in durgerdam.yaml (8)

| Place | Rank | Monument numbers |
|---|---|---|
| Durgerdam (the village) | Nice | none (village story; houses are in the ensembles) |
| De Kapel, former town hall of Durgerdam | Nice | 6648 |
| Dorpskerk Durgerdam | Nice | 6636 |
| Durgerdam bandstand | Okay | 200508 (municipal) |
| Durgerdammerdijk, west end (nos. 37–63) | Okay | 6619–6630, 6632, 6633 (14), pinned on no. 38 |
| Durgerdammerdijk, village centre (nos. 70–97) | Okay | 6634, 6637–6647, 41954 (13), pinned on no. 87 |
| Durgerdammerdijk, east of the Kapel (nos. 105–129) | Okay | 6649–6664 (16), pinned on no. 117 |
| Durgerdammerdijk, east end (nos. 133–206) | Okay | 6666–6685 (minus 6679), 6687, 6688, 6689 (22), pinned on no. 137 |

The dike is split into four stretches because of the 200-character limit on `monument_number`
(east of no. 105 alone is 38 records, 226 characters).

## Records placed in waterland-south.yaml

- **6635, Durgerdammerdijk 72 (register: 72, 73 and 73A, original function "Hotel")**: this is the
  building of De Durgerdam inn (Durgerdammerdijk 73). Added to the existing "De Durgerdam, inn
  since 1664" block: heritage_status, monument_number, listed 1970, a register link, the 2010
  Commons photo of no. 72 (taken before the 2018–2023 rebuild) and a "Look for" line from the
  register text. Address changed to "Durgerdammerdijk 72–73".
- **6788, lighthouse "bij Vuurtoreneiland 1"**: added to the existing Vuurtoreneiland block rather
  than given its own place. The lighthouse is the reason the island exists (made in 1701 to carry
  the light) and the island place already tells its story; a separate pin would sit about 120 m
  away and repeat it. Added heritage_status, monument_number, architect (A.C. van Loo, "probably"
  per the register), listed 1981, a register link, and the register details (14.75 m, five storeys,
  copper-domed lantern with gallery) in both languages. The pin moved from the island address to
  the register point of the tower (52.371813, 5.014077). If you would rather have the lighthouse
  as its own Nice place in `infrastructure`, it is an easy split.

## Edits to waterland-south.yaml

1. Removed the block "Durgerdammerdijk, wooden houses at the east end" (6688, 6689). Its houses
   are now in "Durgerdammerdijk, east end (nos. 133–206)" (same two photos, same Look for lines),
   and its village story (1421 flood, Ydoornickerdam, fishing, the 1849 ice floe, protected view)
   is in the new "Durgerdam" village place, together with the 1573 and 1687 destructions and the
   current dike problem.
2. De Durgerdam inn block: 6635 added as above.
3. Vuurtoreneiland block: 6788 added as above.

Not changed (outside the blocks I was allowed to touch): the header comment of waterland-south.yaml
still says "All 41 monument records ... are used exactly once", and `notes/waterland-south.md`
still lists the removed place in its merge table and route. Both need a one-line update by the
waterland-south owner or the coordinator.

## Source conflicts and uncertainties

- **Kapel date**: the national register reads the gable stone as 1687; DBNL (Monumenten in
  Nederland) says "houtskelet uit 1678 (gevelsteen)". 1687 is also the year of the village fire,
  and nl.wikipedia and the Noord in Beeld photo archive both say 1687. Used 1687; 1678 is
  probably a transposition in DBNL.
- **Kapel name and earlier history**: a Komoot user tip says a Catholic chapel stood here from
  1499 and that the town archive in it burned in 1687, citing Stadsherstel; I could not find a
  Stadsherstel page or any solid source, so left out. nl.wikipedia says the building "never had
  religious functions" in the sense of having served as school and town hall; the text says only
  that it is called the Kapel despite its uses.
- **Kapel restoration and use**: restored 1951 (Anefo photo "Restauratie Kapel te Durgerdam
  (1687)", 8 January 1951). A draft permit for restoring it was published in 2012 (Staatscourant
  2012-7087); I did not confirm the work was carried out. DBNL says it is fitted out as a house;
  current use not independently confirmed, so the text says "has long been a private house".
- **Address errors in the slice**: 6650 is listed as "117-118" in the slice; the national register
  gives Durgerdammerdijk 107 and 108. 6653 is "117" in the register but "116" on nl.wikipedia and
  "116-117" on its Commons photo. Used the register.
- **Records missing from the slice**: nl.wikipedia lists 6665 (no. 131), 6679 (no. 157) and 6686
  (no. 173, a stolp farm), and 6631 is skipped in the numbering. The register pages for 6631 and
  6665 return no monument, so they look delisted; not added. Worth a check if completeness matters.
- **Church**: the register gives no. 76, reliwiki no. 78. Used 76. The memorial to Gerrit
  Frederickszoon (Battle of the Downs, 1639) is in nl.wikipedia as a "bord"; the Commons photo
  calls it a "gedenksteen". The text just says "a memorial".
- **Dike**: rejected in 2006 (east) and 2011 (west) per the HHNK plan of approach (February 2022);
  the summary of that plan gives the 10-year holding course and the new test around 2032. No newer
  decision found in 2026 news; if one exists, the village text needs an update.
- **Bandstand date**: city register says about 1910, possibly a decade later; used "about 1910–1925".
- I found no visible memorial to the 1849 ice-floe fishermen, so none is mentioned.

## Dutch text

Spliced from the national register descriptions, the city register text (bandstand),
nl.wikipedia (Durgerdam, Kerk van Durgerdam) and the HHNK plan summary. DBNL and the Noord in Beeld
captions are copyrighted, so only facts and very short phrases were taken from them (the shipyard
caption for the Kapel).

## Photos

All Commons. House photos are Marion Golsteijn's 2010 series (CC BY-SA 3.0 nl); the photo for
no. 117 is titled "Durgerdammerdijk 116" (described as 116-117). The Kapel has a modern photo, an RCE
photo of 2005 and the Anefo restoration photo of 1951 (CC0). The village place uses a 2010 harbour
view (public domain) and an RCE photo of 1937. No place is without a photo.

## Walking route idea

Durgerdam along the dike (about 2 km, west to east, can extend from Schellingwoude or on to the
Kinselmeer by bike):
1. Durgerdammerdijk, west end (nos. 37–63)
2. Durgerdam bandstand
3. De Durgerdam, inn since 1664
4. Dorpskerk Durgerdam
5. Durgerdammerdijk, village centre (nos. 70–97)
6. Durgerdam (village place)
7. De Kapel, former town hall of Durgerdam
8. Durgerdammerdijk, east of the Kapel (nos. 105–129)
9. Durgerdammerdijk, east end (nos. 133–206), with the view to Vuurtoreneiland
10. Kinselmeer and the Durgerdam dike

Note the Finse school (no. 68) is also on the way, between the bandstand and the inn.
