# Research brief: West round 4 (one slice per gebied)

Same rules as `research/west/BRIEF.md` (draft format, bilingual rule, photos) and the current
`.claude/skills/c-list-sights/SKILL.md` ("Rules that matter most", "Needs checking",
"Outlook", "Running a round"). Model round briefs: `research/nieuw-west/BRIEF-3.md`,
`research/oost/BRIEF-4.md`; model drafts: `research/nieuw-west/places/r5-aker.yaml`.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/documents-b8db62f6`.
Other agents work in this checkout at the same time. Create and edit **only** your own
`research/west/places/r4-$SLICE.yaml` and `research/west/notes/r4-$SLICE.md`, plus merge
targets in the files your slice owns (only the places a scout item names, titles unchanged).
Never write to the live site, never commit, never use em dashes or spaced en dashes.

## Round 4 specifics

- Items 401–441 and the merge lists in `research/west/SCOUT-4.md`. Verify everything; the
  scout list is a lead. Items without a rank are merges into the place the scout names.
- **Write, don't paste**, especially the Dutch: no run of 8+ words from any source, never a
  translation of the English. Same facts in both languages. This is what the blind checks mark
  down most (`research/quality/rubric.md`).
- **Merge targets with no draft.** Many live West places have no YAML in `places/` (rounds 2
  and 3 were never committed). If a merge target is not in a file your slice owns, find it in
  `scripts/data/amsterdam-west-live-only-2026-11-24.json` (live text, by title) or
  `scripts/data/amsterdam-west*.json`, and write a **full entry with the exact same title** in
  your `r4-$SLICE.yaml`: the live text (category, pin, attributes, links, EN and NL) plus the
  merge. Where you touch its Dutch, write it fresh. Note each such entry in your notes.
- **User's decisions**: 427 and 428 are **one place** (the allotment parks are basically the
  same thing): pin on the Tuinen van Westerpark entrance, Zonnehoek in the text and Look for.
  429 Jan Wolkerstuin is its own place. 440 Boerderij Westerpark is a Look for line in the
  nearest fitting place. 439 Amsterdam in Motion is its own place (not a line in the A-list
  Westergasfabriek). 421 De Vlugtlaan platforms go in with `check: Still there?`. 426 Claudius
  Civilis gable stone is out.
- **Corrections to live texts** (both languages, remove what becomes wrong):
  "Van Bossestraat 8-54" (the turret was lost to a crashing bomber with a New Zealand crew,
  3 May 1943, not a stray bomb) and "Telefooncentrale West" (20 homes since 2024).
- Validate your new file and every file you edited until 0 errors:
  `python3 -B research/west/scripts/validate.py <file>`. Quote link labels with commas.

## Slices

- `westerpark` (owns `spaarndammer.yaml`, `staatslieden.yaml`, `houthavens-pvh.yaml`,
  `houthavens-swim.yaml`): new 401–408, 418, 427+428, 429, 439; every Westerpark merge in the scout's merge lists;
  both corrections above.
- `bos-en-lommer` (owns `bos-en-lommer.yaml`): new 409–412, 414, 419–421, 430–434; every
  Bos en Lommer merge.
- `oud-west` (owns `baarsjes.yaml`, `oud-west.yaml`, `vondelpark.yaml`): new 413, 415–417,
  422–425, 435–438, 441; every Oud-West/De Baarsjes merge.

Report briefly: new places, merges, full entries written for draft-less targets, ranks,
flags and outlooks, items left out and why, places without photos, decisions needed.
