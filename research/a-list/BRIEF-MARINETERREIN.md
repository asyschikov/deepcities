# Research brief: the Marineterrein (one agent)

Same rules as `research/a-list/BRIEF.md` (format, sources, fresh Dutch, no em dashes, never
write to the live site, never commit), except: **not A-list** (no a_list), no rank (the
coordinator sets it), and bodies may run to about 250 words.

Items from `research/a-list/SCOUT-MARINETERREIN.md` (the user picked all five new places):

**New places**, in `research/a-list/places/marineterrein.yaml`:
- 1 the swimming harbour as a water lab;
- 2 the 1960s navy campus (De Weger): officers' tower, the signal-flag classroom on the roof,
  the schools on stilts, the 2025 municipal listings;
- 3 the Moluccan marines' monument (2026);
- 5 the marechaussee's black box (seen from outside only);
- 8 the ship carpenters' workshop and the scheepskameel.

**The existing place** "Marineterrein, the navy yard behind the wall" (id
mqhz13s7x8994o1wovg0en78; read it with `env -u DC_URL -u DC_TOKEN pnpm -s dc place
mqhz13s7x8994o1wovg0en78`): write `research/a-list/marineterrein-existing-patch.json`, a
`dc update` patch (`summary`, `body`, `translations.nl.summary`, `translations.nl.body`,
`attributes` as needed, full new text of each changed field) that:
- adds Look for / Let op lines and short text lines from scout items 4, 6, 7, 9, 10, 11, 12,
  16, 17, 18, 19, 20, 21, 22, 23, 24, as far as they are sourced and visible;
- removes or fixes anything item 14 shows is gone (Kanteen 025, the Buurtboerderij);
- sets `attributes.outlook: "Major change ahead"` with `outlook_when` and `outlook_note` from
  item 13 (note at most 200 characters, in both languages via translations.nl.attributes);
- leaves the Van Gogh line (item 15) unchanged unless you find a second independent source;
- points to the five new places in one line each, without retelling them.
Keep the existing text's sourced content; never add an unsourced claim. Also write the list
of every change to `research/a-list/notes/marineterrein.md`.

Validate the new places with `python3 -B research/a-list/scripts/validate.py
research/a-list/places/marineterrein.yaml` until 0 errors. Notes: sources per place, left
out and why, photos, and a "Fact check" list (each claim, EN and NL, with its source).
