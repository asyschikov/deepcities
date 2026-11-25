# Brief: Centrum status pass (open checks)

Live Centrum places carry `attributes.check` (Facts / Location / Still there?) with a
`check_note`. Your slice is `research/centrum/notes/status-sN.json`. For each place, settle the
check from current, authoritative sources (Ons Amsterdam, Het Parool, AT5/NH Nieuws, district
papers, the business or institution's own site for its own status, city registers and
monument register, Stadsherstel, Hendrick de Keyser, the city's tree and art registers,
Street View imagery with a visible date for "is it still on the front" questions).

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/everything-from-here-current-b8db62f6`.
CLI (read only for you): `cd /Users/andrey/projects/deepcities/.claude/worktrees/agent-a3f2f45d176b45242 && pnpm -s dc place <id>`.

## Rules

- Mainstream, authoritative facts only; a single hobby or listing site does not settle anything.
- Settled: write a patch that fixes the text where needed (summary, body, and `translations.nl`
  summary/body, Dutch written natively) and clears the flag: `"attributes":{"check":null,"check_note":null}`.
  Full texts built from the current live text, changing only what the finding requires.
  Gone: say so plainly and set `attributes.status: "Gone"`; if the thing is gone and the place has
  nothing else left to see, say so in the note (I decide on archiving).
  Location settled: patch `lat`/`lng` (6 decimals) from a source that pins it (register point,
  tree register, Street View, an official map).
- Not settleable online (needs a visit): leave the flag, and if you learned something, update
  `check_note` (max 300 chars) with what is now known and dated. Never invite readers to report.
- Never touch rank, title, category or detail. Never an em dash, nor a spaced en dash as one.
  Never mention the research process in place text.
- No live writes, no commits, no subagents. curl `User-Agent: deep-cities-research/0.1`.
  BrowserOS neo (load the browseros-neo skill): one tab of your own, name your session,
  list tabs first after a reconnect, close your tab at the end. No iamsterdam.

## Output

- `research/centrum/fixes/status-sN.json`: `[{"id","patch":{...},"note":"<=300 chars, what and source"}]`
- `research/centrum/notes/status-sN.md`: per place: verdict (settled / gone / still open),
  sources with dates, what changed.
