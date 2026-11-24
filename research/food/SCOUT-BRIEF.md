# Scout brief: food, drink and shops round, Centrum (Deep Centrum / Deep Amsterdam)

The user wants the eating-and-drinking places and shops that are part of Amsterdam's fabric on
the map. **Scouting only: build a shortlist for the user to pick from. No drafts, no live writes.**

## The test (the user's words)

- Worth visiting **even if you don't eat, drink or buy anything** (though that always helps):
  the interior, the history, the role in the neighbourhood, something to see.
- In: **iconic, legendary, historic, institutions, part of the local fabric**. "Oldest bar: good;
  best pizza in the west: nah." Food quality alone never qualifies. Ordinary cafés, chains and
  tourist traps stay out.
- Benchmarks: Café-Restaurant Amsterdam in the 1897 pumping hall of the old waterworks (West);
  Wynand Fockink's / De Drie Fleschjes tasting rooms (already on the map); for shops, the Centrum
  art shop that sells original Marc Chagall prints (identify it: name, address).
- Typical candidates: brown cafés with intact interiors (bruine kroegen), proeflokalen and
  distillers, the oldest bars, cafés with a famous history (writers, artists, the gay scene,
  squatters, jazz), historic bakeries, cheese and herring institutions, markets, old shops with
  intact interiors (tobacconists, apothecaries, toy and book shops, ironmongers), shop fronts
  that are monuments, Indonesian and Surinamese institutions with a history, cafés locals fought
  to save.

## Before proposing anything

- Check the pool (read only): `cd /Users/andrey/projects/deepcities/.claude/worktrees/agent-a3f2f45d176b45242 && pnpm -s dc places sights --all --q <word>`.
  `--all` matters: most Centrum places are detail "district" (Deep Centrum only). If a candidate
  is already a place, say so (id) and whether it is (a) already pitched as an eatery/shop or
  (b) only mentioned; don't propose a duplicate.
- Start from the "Food and drink, borderline" sections of `research/centrum/scouts/*.md` and the
  open items in `research/centrum/notes/_coordinator.md` (Cotton Club, Café 't Mandje,
  Jacob Hooy & Co., Van Wees, Café Eijlders, Saarein). Already done: Sea Palace, De Bijenkorf,
  De Drie Fleschjes, Brouwerij 't IJ.

## Sources

Local and informal first (`.claude/skills/local-sources/SKILL.md`): Het Parool (Ps, café
reviews, "De kroeg van"), the Amsterdamse Cafécultuur / CaféKrant, PROEF Amsterdam,
Ons Amsterdam (browser only, targeted), Amstelodamum, Stadsarchief beeldbank, neighbourhood
papers (Jordaan Gazette, Oud-West Krant), the city's list of "Amsterdamse ondernemingen met
historie" if any, Rijksmonumenten register (shop fronts and interiors), Atlas Obscura, blogs.
No iamsterdam. For every fact that matters: authoritative support (user rule: mainstream,
authoritative history only; hobby sites may lead but never carry a fact alone).
**Current status is essential**: still open? same owner? interior intact? latest news (2025-26).

## Output

`research/food/scouts/SCOUT-<slice>.md`: numbered `<SLICE>-NN`, grouped (bars and cafés;
proeflokalen; eateries; bakeries, fish and food shops; shops; markets), each with a one-line
hook, why it passes the test, address and pin (6 decimals, the door), current status and date
checked, lead sources (two, NL and EN where possible), pool status (new / already a place id /
mentioned in place id), caveats, suggested rank (Amazing rare / Nice / Okay). End with a short
"near misses" list (and why).
Never an em dash. No live writes, no commits, no subagents. curl `User-Agent: deep-cities-research/0.1`.
BrowserOS neo browser: one tab of your own, name your session, after a reconnect list tabs first,
close your tab at the end.
