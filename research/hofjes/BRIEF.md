# Brief: Hofjes of Amsterdam (a theme map)

The user wants a separate map with **all hofjes of Amsterdam** (municipality, incl. Weesp) with
**up-to-date information on whether and when each is open to the public**. Start from our
own findings, then look online, **well beyond Wikipedia**, for more hofjes and more data.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/everything-from-here-current-b8db62f6`.
Read first: `research/hofjes/INVENTORY.json` (38 places already on our maps, with ids; plus
the hofjes on nl.wikipedia's list that we lack), `.claude/skills/local-sources/SKILL.md`
(how to scout informal sources), `.claude/skills/c-list-sights/SKILL.md` ("Rules that matter
most") and `research/west/BRIEF.md` (draft format, bilingual rule, photos). Our existing
texts: `research/centrum/places/*.yaml` (grep the title) or `pnpm -s dc place <id>` (read only).

## What counts as a hofje

A courtyard of small homes founded as a charitable or foundation housing (almshouse, *hofje*,
*begijnhof*, *weduwenhof*, foundation housing for workers or the elderly) built round a
shared garden or court, any period (14th c. to 20th c. foundation hofjes, e.g. the
Fontainehofje). Include gone hofjes with a visible trace or a good story (`status: Gone`).
**Borderline** (list them separately, don't draft): 20th-century housing blocks called
"-hof" (Zaanhof, Krugerhof), modern courtyard housing, gasthuizen and orphanages, private
courtyards behind houses. Note why for each.

## Sources (beyond Wikipedia; Wikipedia only as a cross-check)

Hofjes guide and blog sites, the foundations' own sites and annual reports (many hofjes are
still run by a stichting or a housing corporation: Stadsherstel, Hendrick de Keyser,
de Key, Rochdale, Eigen Haard, Woonstichting De Key, Dienst Jordaan), *De Jordaan & Gouden
Reael* (wijkkrant), *Ons Amsterdam* (robots-refusing: browser only, targeted, cite),
Het Parool / AT5 / NH Nieuws on hofjes closing to tourists, Open Monumentendag and
Amsterdamse hofjesroute programmes, walking-tour sites, Atlas Obscura, Amsterdam
Stadsarchief beeldbank, Google Maps / reviews and photos (a recent review or photo of a sign
"Privé / geen toegang" is evidence with its date; prefer a second source), the city's
monument register (`api.data.amsterdam.nl`) for addresses and dates. No iamsterdam.

## Access: the point of this map

For every hofje, establish **now** (2025 or 2026 evidence; say the date of each source):

- `access`: one of `Open daily` (courtyard freely open set hours every day), `Open at set
  times` (some days/hours, or by the warden, or groups by appointment), `Open days only`
  (Open Monumentendag, hofjesdagen), `Closed` (residents only: see it from the gate or
  street), `Not visible` (nothing to see from the street), `Gone`.
- `hours`: hours/days as published, in plain words, EN and NL.
- `rules`: quiet, no groups, no photos, gate code, ring the bell, etc.
- `access_note`: one line on what a visitor actually experiences (e.g. "the gate on the
  Egelantiersgracht is usually locked; the passage door at no. 107 opens 10:00 to 17:00").
- `checked`: month and year of the newest evidence; `sources`: URLs with their dates.
Also: `founded`, `founder`, `homes` (number), `residents_now` (elderly women, students,
artists, mixed, private), `entrance_address` and pin of the **gate or passage door** (6
decimals), and the courtyard pin if different.
Many hofjes closed to visitors in the 2010s and 2020s; some reopened on set hours. Never
guess: if evidence is old or contradictory, set `access` from the best source and say so in
`access_note`, and list it under "unsure".

## Output (write only your own files)

- `research/hofjes/access/<slice>.yaml`: one entry per hofje: `id` (pool id or null),
  `title` (ours if in the pool), `access`, `hours: {en, nl}`, `rules: {en, nl}`,
  `access_note: {en, nl}`, `checked`, `founded`, `founder`, `homes`, `residents_now`,
  `entrance_address`, `lat`, `lng`, `sources`.
- New hofjes (not in the pool): also a full bilingual draft in
  `research/hofjes/places/<slice>.yaml` in the BRIEF.md format (category `housing` unless
  another fits better; rank by the c-list skill), Dutch written natively from Dutch sources,
  with photos from Commons where they exist. Validate with
  `python3 -B research/centrum/scripts/validate.py <file>`.
- `research/hofjes/notes/<slice>.md`: sources used (list the non-Wikipedia ones), borderline
  items, unsure items, corrections to our existing texts (e.g. a text that says "open to
  visitors" when it no longer is).
Never an em dash, nor a spaced en dash as one. Never mention the research process. No live
writes, no commits, no subagents. User-Agent for curl: `deep-cities-research/0.1`.
Browser: BrowserOS neo, one tab of your own, name your session, close your tab at the end.
