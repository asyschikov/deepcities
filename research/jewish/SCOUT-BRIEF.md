# Scout brief: Jewish Heritage of Amsterdam (a theme map)

The user wants a new map, **Jewish Heritage**: everything noteworthy related to Jewish history
in Amsterdam (municipality incl. Weesp; note candidates just outside it, e.g. the cemeteries at
Ouderkerk aan de Amstel, Diemen and Muiderberg, separately), with **documents** (long-form
essays and biographies) and **routes** (walks). This is the scouting step: build a shortlist
for the user to pick from. **Do not write place drafts yet.**

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/everything-from-here-current-b8db62f6`.
Read first: `research/jewish/INVENTORY.json` (322 places already in our pool that mention
Jewish history, with ids; `hits` = how strongly; read their texts with
`cd /Users/andrey/projects/deepcities/.claude/worktrees/agent-a3f2f45d176b45242 && pnpm -s dc place <id>`, read only),
`.claude/skills/local-sources/SKILL.md` (how to scout informal sources),
`.claude/skills/c-list-sights/SKILL.md` (shortlist format, rules) and the manage-content
skill's sections on documents and routes (`.claude/skills/manage-content/SKILL.md`).

## Scope (all periods)

Sephardic arrival and the Golden Age; Ashkenazi immigration; synagogues (active, former,
hidden, house synagogues), mikvaot, schools, yeshivot, libraries; poor relief, orphanages,
hospitals, old people's homes; the Jodenbuurt and the other Jewish neighbourhoods
(Uilenburg, Marken, Plantage, Weesperbuurt, Transvaalbuurt, Rivierenbuurt, Nieuw-West
postwar); trades (diamond industry, markets, street trade, textiles, printing and
publishing); culture (theatres, cinemas, music, sport clubs, newspapers, writers, artists);
politics and the labour movement (ANDB, Henri Polak, SDAP); emancipation (1796) and
assimilation; 1940-1945 (persecution, the Joodsche Raad, deportation sites, the
Hollandsche Schouwburg and the crèche, hiding places, resistance, the February strike,
returnees); memorials and monuments; Stolpersteine (decide with a recommendation how a
map should treat thousands of stones: individual places vs a document vs a few emblematic
ones); postwar revival and today's community (kosher shops, bakeries, restaurants with a
history, institutions); A-list sights belong on this map too (Portuguese Synagogue, Jewish
Museum, Anne Frank House, Hollandsche Schouwburg, National Holocaust Museum): they are fine.

## Sources: well beyond Wikipedia

joodsamsterdam.nl, the Joods Cultureel Kwartier, Joods Monument (joodsmonument.nl), 4en5mei
and oorlogsmonumenten (4en5mei.nl monuments database), Stolpersteine Amsterdam, Amsterdam
Stadsarchief (beeldbank, archive pieces), Ons Amsterdam (robots-refusing: browser only,
targeted, cite), Het Parool / NIW (Nieuw Israëlietisch Weekblad) / AT5, neighbourhood
papers and history societies (Oost, Transvaalbuurt, Rivierenbuurt), Jewish community sites
(NIHS, PIG, LJG, Beit Ha'Chidush), walking-tour sites and published walks, dissertations and
books' tables of contents. Wikipedia only as a cross-check. No iamsterdam.

## Output (write only your own files)

`research/jewish/scouts/SCOUT-<slice>.md`:
- **New places** not in INVENTORY: numbered `<SLICE>-NN`, grouped by theme, each with a
  one-line hook, why it belongs, pin (6 decimals, the object itself) and address, lead
  source(s) (prefer two, NL and EN), current status (still there? gone? `status: Gone`
  candidates), caveats, and a suggested rank (Amazing / Nice / Okay).
- **In the pool, should be on this map**: the INVENTORY ids you'd include (with a word on
  why), and ones you'd leave out (only a passing mention).
- **Enrichment**: pool places whose text misses the Jewish story or gets it wrong (id, what,
  source).
Never an em dash, nor a spaced en dash as one. No live writes, no commits, no subagents.
User-Agent for curl: `deep-cities-research/0.1`. Browser: BrowserOS neo, one tab of your own,
name your session, close your tab at the end. Sensitive history: factual, neither sensational
nor evasive; never private people who are alive.
