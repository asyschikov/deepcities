# Brief: food, drink and shops, Centrum drafts

The user picked the items in `research/food/SHORTLIST-CENTRUM.md` (A: core, B: bring forward,
plus coffeeshops). You draft your slice as bilingual YAML for the shared Amsterdam pool. New
places are Centrum places at detail "district" (Deep Centrum; standouts may later be lifted to
Deep Amsterdam).

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/everything-from-here-current-b8db62f6`.
Read first: your items in `research/food/scouts/SCOUT-*.md` (hooks, pins, sources, caveats),
`research/west/BRIEF.md` (draft format, bilingual rule, photo rules),
`.claude/skills/c-list-sights/SKILL.md` ("Rules that matter most"), `.claude/skills/local-sources/SKILL.md`.
Map categories and fields: `cd /Users/andrey/projects/deepcities/.claude/worktrees/agent-a3f2f45d176b45242 && pnpm -s dc map sights` (cafés, bars, tasting rooms, eateries: `food-drink`; shops and markets: the best-fitting key, ask in notes if none fits). Check the pool before writing (read only): `pnpm -s dc places sights --all --q <word>`.

## Rules

- **The pitch is the place, not the menu.** Why it's worth walking in without ordering: the
  interior, the history, who drank or worked there, its role in the neighbourhood, what to look
  at. Food and drink are a line, not the story. No reviews, no "best", no prices.
- **Mainstream, authoritative facts only** (user rule): registers, archives, Stadsherstel /
  Hendrick de Keyser, Ons Amsterdam, Amstelodamum, Het Parool and serious press, the business's
  own history only for its own uncontested facts (and say "according to the house" where it's a
  claim). Where dates conflict, give the range or leave the date out. Legends are told as legends.
- **Current status checked now** (2026): open, owner, interior intact; opening hours in a
  "Visiting:" line (days, roughly), and whether you can look in without ordering.
- **Coffeeshops** (user): "not a weed guide, but some are part of the city's history". Pitch
  the history (tolerance policy, the first coffeeshops, the building), neutral tone, no product talk.
- **Dutch** (`nl:`) written natively from Dutch sources, not translated.
- Pin the door (6 decimals). Rank: Amazing rare; most Nice or Okay.
- Photos: Commons with a clear licence (verify the file exists); none beats a wrong one.
- Never an em dash, nor a spaced en dash as one. Never mention the research process.
- No live writes, no commits, no subagents. curl `User-Agent: deep-cities-research/0.1`.
  BrowserOS neo: one tab of your own, name your session, list tabs first after a reconnect,
  close your tab at the end.

## Output

- New places: `research/food/places/<slice>.yaml`, validated with
  `python3 -B research/centrum/scripts/validate.py <file>` until 0 errors.
- Changes to existing places (bring forward): `research/food/fixes/<slice>.json` as
  `[{"id","patch":{summary?,body?,translations:{nl:{summary?,body?}}},"note":"<=300 chars"}]`,
  full texts built from the current live text (`pnpm -s dc place <id>`), changing only what's
  needed (usually: name the business, what sitting there is like, a Visiting line, a Look-for
  line). Never touch rank. Where a business deserves its own place instead, draft it in your
  YAML and add a short pointer line to the existing place's patch.
- `research/food/notes/<slice>.md`: sources per place, claims dropped, status checks with dates,
  photo gaps, overlaps with pool places.
