# Scout brief: food, drink and shops round, the other districts

Same rules, test, sources and output format as `research/food/SCOUT-BRIEF.md` (read it first),
with these differences:

- **Area:** your district only (borough as in `dc places`: West, Zuid, Oost, Noord, Nieuw-West,
  Zuidoost, Weesp), as given in your task.
- **Map level:** outside Centrum, Deep Amsterdam shows detail `city`; so the bar is the city map:
  a place must be worth crossing town for, or be the institution of its neighbourhood.
- **What was done in Centrum** (for calibration, don't repeat): research/food/SHORTLIST-CENTRUM.md
  and research/food/places/*.yaml (brown cafés with intact interiors, proeflokalen, old shops,
  markets, one historic coffeeshop).
- **Pool check:** `pnpm -s dc places sights --all --q <word>` and also by the district's
  neighbourhoods; many eateries sit inside heritage places as one line (bring-forward
  candidates: list them with the place id, like SCOUT-FI.md did for Centrum).
- **Typical outside Centrum:** cafés in old village cores (Sloten, Ransdorp, Durgerdam, Watergraafsmeer),
  Amsterdam School corner cafés, Surinamese, Indonesian, Turkish, Moroccan, Ghanaian institutions
  with a history, markets (Albert Cuyp, Dappermarkt, Ten Katemarkt, Plein '40-'45), old bakeries
  and shops, cafés in former industrial buildings, tea houses in parks, ferry and harbour cafés.
- **Categories:** research/quality/CATEGORY-SCHEME.md.
- Output: `research/food/scouts/SCOUT-D<slice>.md`, numbered `D<slice>-NN`. Save after every few
  candidates (the machine may sleep). End with "Top 10" and "Questions for the user".
