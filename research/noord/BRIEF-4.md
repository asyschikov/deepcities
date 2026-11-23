# Research brief: Deep Amsterdam, Noord round C (one slice per agent)

Same rules as `research/noord/BRIEF-3.md` (read it fully, and everything it points to:
`BRIEF-2.md`, `BRIEF.md`, the skill's "Rules that matter most"). Only the differences are here.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/documents-b8db62f6`.
Create and edit **only** your own `research/noord/places/r4-$SLICE.yaml` and
`research/noord/notes/r4-$SLICE.md`, plus the merge targets named for your slice (only those
places, titles unchanged). Never write to the live site, never commit, never use em dashes.

## Round C specifics

- Items 301–315 in `research/noord/SCOUT-4.md`. Verify everything; the scout list is a lead.
- Site checks the scout asked for: 306 which houses were the guardhouse; 311 whether the 2012
  Marktplaats bar still stands; 313 this year's season and fares, and leave the Queen Beatrix
  anecdote out unless the sources agree; 314 whether both pull ferries still work. Unsettled:
  leave the claim out, or set `check` / `check_note` (both languages) if the place stands.
- Set `outlook` fields if a place is due to change (see the skill).
- User's decisions: 301, 305 and 313 are their own places. 304 is one Look for line in
  "Durgerdammerdijk, west end (nos. 37–63)" (or "Durgerdam" if the house falls outside that
  stretch). Buiksloterbreek, the Landsmeerderdijk houseboats and the A10 tunnel are out.

## Slices

- `east` (owns `durgerdam.yaml`, `waterland-south.yaml`, `waterland-north.yaml`, `r3-dijk.yaml`):
  new 301 Goudriaankanaal, 308 IJdoornlaanbrug, 313 Pontje Holysloot, 314 Schellingwouderpark's
  pull ferries. Merges: 302 into "Schellingwouderkerk and bandstand"; 303 into "Dorpskerk
  Durgerdam" and "De Kapel, former town hall of Durgerdam" as the scout says; 304 as above;
  312 into "Tuinpark Tuinwijck, the allotments that kept moving"; a pointer to 313 from
  "Holysloot and the 1916 flood (former Reformed church)".
- `west` (owns `tuindorpen.yaml`, `r2-west.yaml`, `volewijck.yaml`): new 305 Gentiaanbuurt,
  306 the powder-magazine guardhouse and Villa Friekens, 307 Sint-Rosaschool, 311
  Noorderparkkamer. Merges: 309 into "War memorials at De Nieuwe Noorder (Fokker bombing,
  Draka)"; 310 into "Molenwijk and its art route"; 315 into "Krijtmolen d'Admiraal".

Validate until 0 errors. Report briefly: new places, merges, ranks, flags, items left out and
why, places without photos, decisions needed.
