# Brief: Centrum second pass with imagery (checks and photos)

Rules: research/centrum/STATUS-BRIEF.md (authoritative, both languages, check_note <= 200 chars,
summary <= 280, no em dashes, no research talk, no live writes, no commits, no subagents;
BrowserOS neo one tab, load the browseros-neo skill, close the tab at the end). Save output files
as you go (the machine may sleep).

## Checks (visual-s1 / visual-s2)

The first status pass settled everything that text sources could. What is left is "needs a look".
Use dated street-level imagery: Mapillary (mapillary.com/app, open imagery with capture dates) and
Google Street View (the capture date shown in the viewer), plus the city's own imagery where
available (Amsterdam panorama viewer data.amsterdam.nl, which shows the capture year). A check is
settled when an image from 2024 or later clearly shows the answer; give the image date and
source in the note. Location checks: settle when imagery or a register clearly shows the spot,
patch lat/lng (6 decimals). If the imagery is older than 2024 or unclear, leave the flag but put
the newest dated evidence in check_note.

Output: research/centrum/fixes/visual-sN.json, research/centrum/notes/visual-sN.md.

## Photos (photo-gaps-2.json, Amazing and Nice first)

No usable Commons file exists for these (see notes/photos.md for what was searched). Try, in order:
1. Rijksdienst voor het Cultureel Erfgoed beeldbank (beeldbank.cultureelerfgoed.nl, CC BY-SA 4.0
   for most photos) for national monuments (monument_number).
2. Stadsarchief Amsterdam beeldbank (archief.amsterdam/beeldbank): only images marked public
   domain / no known copyright (CC0, "Publiek domein"), for gone or historic things.
3. Mapillary street-level images (CC BY-SA 4.0): a recent, sharp frame that shows the object well;
   record the image key and the photographer username.
4. Flickr: only CC BY, CC BY-SA, CC0 or public domain.
Verify the image shows exactly this object. A wrong or poor photo is worse than none.
Output: research/centrum/fixes/photos-2.json as
`[{"id","title","photo":{"url":"<direct image URL>","credit":"<author / source>","license":"CC BY-SA 4.0","sourceUrl":"<page URL>"},"why":"<=150 chars"}]`
(one or two per place), and notes/photos-2.md for places still without.
