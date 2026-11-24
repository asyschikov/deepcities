# Fact-check brief: Contemporary Architecture (one slice per agent)

Read `research/contemporary/BRIEF.md` first: it is what the writer followed. Repo root:
`/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/documents-b8db62f6`.

The user's first rule: **never make anything up**, and only authoritative sources. Check
slice `$SLICE`:
- Kind A (`new-*`): `research/contemporary/places/$SLICE.yaml`.
- Kind B (`ex-*`): `research/contemporary/overrides/$SLICE.json`, against the live place
  (`env -u DC_URL -u DC_TOKEN pnpm -s dc place <id>`), plus any Kind A drafts the writer made
  for wrong matches in `research/contemporary/places/$SLICE.yaml`.
- Notes: `research/contemporary/notes/$SLICE.md`.

For every factual claim, in English and Dutch (text and the `arch` / override fields: designer,
year, kind of work, access, recognition): open its source (curl, `User-Agent:
deep-cities-research/0.1`; BrowserOS only if curl fails, own tab, closed after) and confirm it.
Unsupported, single-source from a blog or Wikipedia only, or contradicted: narrow it or cut
it. Never add a new fact. Also check:
- the building is completed, still stands, and the use and access are current;
- the pin is on the building (compare with the address; 6 decimals);
- EN and NL state the same facts; the Dutch has no run of 8+ words copied from a source;
- an extra description does not repeat the live place text and reads on from it;
- no hype words, no superlatives without attribution, no em dashes or spaced en dashes;
- summaries at most 280 characters; validate with
  `python3 -B research/contemporary/scripts/validate.py research/contemporary/places/$SLICE.yaml`
  (if the file exists) until 0 errors; the overrides file is valid JSON.

Fix directly in the slice's files, edit nothing else, never write to the live site, never
commit. Append a "Verification" section to the notes listing each change. Return two lines:
claims cut or narrowed (count and the main ones), other fixes.
