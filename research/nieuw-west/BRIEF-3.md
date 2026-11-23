# Research brief: Deep Amsterdam, Nieuw-West round B (one slice per agent)

Same rules as `research/nieuw-west/BRIEF-2.md` (read it fully, and everything it points to).
Model round B briefs: `research/noord/BRIEF-3.md`, `research/oost/BRIEF-4.md`.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/documents-b8db62f6`.
Create and edit **only** your own `research/nieuw-west/places/r3-$SLICE.yaml` and
`research/nieuw-west/notes/r3-$SLICE.md`, plus merge targets in the files your slice owns
(only the places a scout item names, titles unchanged). If a merge target sits in a file you
don't own, write the text into your notes under "Merge for another slice" instead. Never
write to the live site, never commit, never use em dashes.

## Round B specifics

- Items 201–248 in `research/nieuw-west/SCOUT-3.md`. Verify everything; the scout list is a
  lead. Items without a rank are merges into the place the scout names.
- Site checks first (scout flagged): 201, 213, 220, 223 (pin), 228, 229, 240, 244, 245, 246.
- **Modern architecture**: say what makes the building odd, new or contested, what a passer-by
  sees; homes are private.
- **Renewal, mosques, squats**: factual and balanced; name sides by institution, not private
  people; say what can be seen from public ground. Set `outlook` where demolition or big change
  is decided or proposed.
- **User's decisions**: 201 is Amazing only if the sub is confirmed to be there and visible
  from public ground (else Nice, or flagged). 223 WoZoCo is Nice. 202 merges into
  "Sint-Pancratiuskerk (Sloten)". 233 is one Sloterdijk place (station and Teleport) with 234
  VERTICAL and 246 the Orlyplein roof garden as Look for lines. 222 and 225 are two Okay places.
  Out: 216, 218, 231 Startblok, Tuincentrum Osdorp.
- Validate your new file and every file you edited until 0 errors.

## Slices

- `sloten` (owns `sloten.yaml`, `green.yaml`, `r2-sloten.yaml`): new 201, 205, 214, 235
  Tuinen van West, 239 Raesberg. Merges: 202, 203, 204, 206, 207, 208, 226, 241. Also update
  "Lutkemeerpolder" (building of an industrial laundry started Nov 2026, Voedselpark status;
  update its `outlook` fields and text in both languages), and a pointer from "Banpaal
  Spaarnwouderdijk" to 245.
- `osdorp` (owns `osdorp.yaml`, `r2-osdorp.yaml`, `history.yaml`): new 215, 223, 224, 225
  Wildemanbuurt. Merges: 209, 210, 211, 212, 213, 238, 240, and a pointer from "Bevrijde vogel,
  Sierplein" to 215 if the scout suggests it.
- `gs` (owns `geuzenveld.yaml`, `slotermeer.yaml`, `r2-gs.yaml`): new 219 Bakemabuurt, 220
  Parkrand, 221 Moskee Al-Ihsane, 222 Couperusbuurt and Nieuwenhuysenbuurt renewal, 236
  A. Nouriplein, 245 Geuzenbos. Merges: 237. Check whether "Adriaan van Oordthof" is inside the
  Couperusbuurt demolition plan; if so set `outlook` on it.
- `slotervaart` (owns `slotervaart.yaml`, `sloterhof.yaml`, `r2-slotervaart.yaml`): new 217
  RWZI West, 227 Blauwe Moskee, 228 De Drie Hoven, 229 Jacob Geelbuurt, 230 self-build row,
  233 Sloterdijk (with 234, 246), 242 Rembrandtpark west, 243 De KasKantine, 244 Origin,
  247 Train Lodge, 248 Kapkar. Merges: 232. Check each pin is in borough Nieuw-West.

Report briefly: new places, merges, ranks, flags and outlooks set, items left out and why,
places without photos, decisions needed.
