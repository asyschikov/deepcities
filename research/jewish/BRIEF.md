# Brief: Jewish Heritage of Amsterdam, place drafts

The user picked the new places from research/jewish/SHORTLIST.md. You draft your slice's
places as bilingual YAML for the shared Amsterdam pool; they will appear on a new
list-view map, **Jewish Heritage of Amsterdam**, and (for most) on Deep Amsterdam / Deep
Centrum too.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/everything-from-here-current-b8db62f6`.
Read first: your items in `research/jewish/scouts/SCOUT-C.md` or `SCOUT-R.md` (hook, pin,
lead sources, caveats), `research/west/BRIEF.md` (the draft format, bilingual rule, photo
rules), `.claude/skills/c-list-sights/SKILL.md` ("Rules that matter most") and
`.claude/skills/local-sources/SKILL.md`. Check the pool before writing (read only):
`cd /Users/andrey/projects/deepcities/.claude/worktrees/agent-a3f2f45d176b45242 && pnpm -s dc places sights --all --q <word>`.

## Rules

- **Two sources** for every fact that matters (dates, numbers, names, what happened where).
  The scouts flagged single-source items: find the second source or leave the claim out
  (and say so in your notes). joodsamsterdam.nl and the joodsamsterdam KML are CC BY-NC:
  facts only, your own words, cite them.
- **Dutch** (`nl:`) written natively from Dutch sources, not translated.
- **Sensitive history**: factual, neither sensational nor evasive. Name victims and
  perpetrators where sources do; never living private people. No graphic detail for effect.
- **Current status**: what stands there now, whether there is anything to see, whether it
  can be visited. Gone things: `attributes: {status: Gone}`.
- **Pin** the object itself (the door, the plaque, the stone, the site), 6 decimals.
- **Rank** per the c-list skill (Amazing is rare). **Category**: one of the sights map's
  keys (`pnpm -s dc map sights`).
- **Theme map values**: give each draft
  `override: {attributes: {era: ..., theme: ...}}` with
  `era` one of `Before 1796` / `1796 to 1940` / `1940 to 1945` / `After 1945`
  (the period the place's story is mainly about) and `theme` one of `Synagogues and
  religion` / `Community and care` / `Work and trade` / `Culture and sport` /
  `Persecution and war` / `Remembrance` / `Neighbourhoods` / `Cemeteries`.
- Photos from Commons with a clear licence (see west BRIEF); none is better than a wrong one.
- Never an em dash, nor a spaced en dash as one. Never mention the research process.
- No live writes, no commits, no subagents. curl with `User-Agent: deep-cities-research/0.1`.
  Browser: BrowserOS neo, one tab of your own, name your session, close the tab at the end.

## Output

- `research/jewish/places/<slice>.yaml`, validated with
  `python3 -B research/centrum/scripts/validate.py <file>` (it doesn't know `override`;
  ignore only that).
- `research/jewish/notes/<slice>.md`: sources per place, claims dropped for want of a second
  source, photo gaps, uncertainties, and anything in the pool your drafts overlap with.

## Update (user, 24 Nov): mainstream, authoritative history only

"Stick to mainstream history, and authoritative facts and stories; there is no shortage anyway."
Every fact that matters needs authoritative support: registers, archives, museums and memorial
institutions (JCK, NIOD, Stadsarchief, Joods Monument, 4en5mei, Rijksmonumentenregister),
published histories and journals, serious press. joodsamsterdam.nl, Wikipedia, blogs and walking-tour
sites may lead you to a fact but never carry it alone (they don't count as one of the two sources
unless an authoritative source agrees). No exceptions for "visible on site" or "too good to lose":
leave it out.
