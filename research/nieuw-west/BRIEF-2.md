# Research brief: Deep Amsterdam, Nieuw-West round A (one slice per agent)

Same rules as `research/nieuw-west/BRIEF.md` (read it fully, and the briefs it points to), and
the current `.claude/skills/c-list-sights/SKILL.md` "Rules that matter most", "Needs checking"
and "Outlook". Model round brief: `research/noord/BRIEF-2.md` (public art and memory, round A).

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/documents-b8db62f6`.
Other agents work in this checkout at the same time. Create and edit **only** your own
`research/nieuw-west/places/r2-$SLICE.yaml` and `research/nieuw-west/notes/r2-$SLICE.md`, plus
the merge targets named for your slice in the files your slice owns (only those places, titles
unchanged). Never write to the live site, never commit, never use em dashes.

## Round A specifics

- Items 101–154 in `research/nieuw-west/SCOUT-2.md`. Verify everything; the scout list is a lead.
  Kunstwacht texts are mostly undated: find recent evidence for every artwork (news, dated
  Commons or Street Art Cities photos, Mapillary). Not established that it still exists: leave
  it out, or set `check: Still there?` if the evidence is merely old.
- **Write, don't paste**, especially the Dutch. Same facts in both languages.
- **The bar for a place.** A sculpture with no story of its own (who, why, a fight, a first, a
  twist) is not a place: make it a Look for line in the nearest fitting existing or new place in
  your slice, or drop it with a reason in notes. Okay places need a real hook.
- **Memorials**: name the people where the memorial does; factual, neither sensational nor evasive.
- **User's decisions**: 112 Chile vencerá is its own place (Amazing if the sources bear it out),
  linked to the Allende monument and 149. 144 Kora and 145 De Antifascist are two places.
  131 Wilhelmina is merged into "Former Stibbe coat factory (Koningin Wilhelminaplein)".
  121 Siegerpark is Nice. Senza Parole is out (leaving for Venray). Surround Sound (round 1
  item 8 in `research/nieuw-west/SCOUT.md`) is a new place with `outlook` (the Plein '40-'45
  redesign, from 2028). 110 and 148 become one "Eendrachtspark" place only if there is a
  story; 125 and RISE/The Swarm are out. 151: draft the Kars and Bierman stone (round 1 item 32)
  as a new place including the American pilot's tile.
- Site checks first: 112 (how the public sees it), 130 (Appel's glass wall, no trace after Feb
  2020), 132 (does Horn's strike mural survive), 114, 141, 142, 105, 144, 145.
- Validate your new file and every file you edited until 0 errors. Quote link labels with commas.

## Slices

- `gs` (owns `geuzenveld.yaml`, `slotermeer.yaml`, `history.yaml`): 101–111, 144–148, Surround
  Sound. Merges: 105 (new place or Look for in "Sloterplas: the lake dug for sand"), 109 into
  "Vrijheidscarillon", 111 into "Dudok's farmhouse homes (Boerderijwoningen)", 146 into
  "Resistance fighters' faces (Verzetsstrijdersbuurt)", 113 into "Van Eyck playground, Witte
  Klok", 137 into "Graphic Surgery lines on the ACTA building", and a pointer from "Allende
  monument and President Allendelaan" to Chile vencerá (title "Chile vencerá mural (Brigada
  Ramona Parra)", which the `osdorp` slice writes).
- `osdorp` (owns `osdorp.yaml`, `art.yaml`, `green.yaml`): new 112 (use the title above),
  114–117, 149, 150, the Kars and Bierman stone (151). Merges: 118 into "Tenerife monument
  (Westgaarde)", 119 into "Salomonson shopping square, Pieter Calandlaan", 120 into "Schaap met
  vijf poten", 123 into "Molen van Sloten", 128 into "De Oeverlanden", 143 into "Lange Bretten".
- `sloten` (owns `sloten.yaml`): new 121 Siegerpark, 122 the apes, 127, 140 Banpaal
  Spaarnwouderdijk, 152. Merges: 124 into "Dorpsplein Sloten and the police post", 126 into
  "Akermolen (De Oude Molen)", 153 into "Sloterkerk", and keep "Villa Maupertuus and Riecker
  State" and "Banpaal of Sloten" pointing to 121 and 140.
- `slotervaart` (owns `slotervaart.yaml`, `sloterhof.yaml`): new 129, 130, 132, 133, 134 (135 as
  a Look for in it), 136, 139, 141, 142, 154. Merges: 131 into "Former Stibbe coat factory
  (Koningin Wilhelminaplein)", 138 into "Sloterhof".

Report briefly: new places, merges, ranks, flags and outlooks set, items left out and why,
places without photos, decisions needed.
