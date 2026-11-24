# Brief: Centrum cluster places (parent places for the citywide view)

You write cluster places: one place per cluster that tells the connected story of several
nearby Centrum places. In the planned data model a cluster is a **parent place**; its members
are full places in their own right (already written, in `research/centrum/places/*.yaml`).
The citywide map shows the cluster; the detailed Centrum view shows the members.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/everything-from-here-current-b8db62f6`.
No web, no browser, no subagents, no commits, no live writes. Touch only your own output
files. Never an em dash, nor a spaced en dash as one. Never mention the research process.

## Input

- Your part: `research/centrum/clusters/parts/$PART.json` (clusters with key, proposed title,
  story line, pin member, members, wijk, category and rank guesses).
- The members' drafts: grep their exact titles in `research/centrum/places/*.yaml`. **Every
  fact you write must come from the member drafts** (their body, nl body and sources). Add
  nothing new; if members disagree, follow the one with the better source or leave it out.
- Style and format: `research/centrum/BRIEF.md` ("Writing") and the skill
  `.claude/skills/c-list-sights/SKILL.md` ("Rules that matter most").

## Each cluster place

- `title`: the plan's title, improved if it can be clearer (a name people would use plus the
  story). Unique, stable.
- `summary` (≤280): the hook of the whole cluster.
- `body`, English, about 150 to 250 words: the connecting story, told as one walk or one
  idea, naming the member places in the order you'd meet them. End with "Look for:" (the
  three or four best things to see across the members).
- `nl`: title, summary, body written natively in Dutch from the members' Dutch texts, ending
  "Let op:". Not a translation of your English.
- `category`, `attributes.rank` (from the plan unless the text shows otherwise), pin =
  the pin member's lat/lng, `address` of the pin member.
- `links`: up to 4, the best sources from the members.
- `photos`: 1 to 3 taken from the members' `photos` (cover first: the pin member's).
- `cluster: {key: <plan key>, members: [exact member titles]}` (stripped before import;
  used to link members to their parent).
- Validate with `python3 -B research/centrum/scripts/validate.py <file>` (ignore an error
  only if it is about the unknown `cluster` key; say so) and run the dash grep.

## Output

`research/centrum/clusters/places/$PART.yaml`, and a short report: clusters written, any
whose members turned out not to make one story (say how you'd regroup), any member titles
you couldn't find.
