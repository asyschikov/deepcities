# Brief: Centrum loose ends (facts and clusters)

Live Deep Centrum / Deep Amsterdam. Read only for you; output patches for me.
CLI: `cd /Users/andrey/projects/deepcities/.claude/worktrees/agent-a3f2f45d176b45242 && pnpm -s dc place <id>` / `pnpm -s dc places sights --all --q <word>`.
Rules as in research/centrum/STATUS-BRIEF.md (authoritative sources only, both languages, no em
dashes, no research talk, no live writes, no commits, no subagents, BrowserOS one tab, close it).

## A. Fact conflicts across places (make every place that mentions it agree, correct value)

1. Vijzelflat collapse: 3 or 23 March 1955 (gg-zuid-3, Poentunnel and any other place).
2. Vijzelstraat widening: 1911 vs 1917 among the members of the Vijzelstraat cluster and places.
3. 1772 Schouwburg fire (Leidseplein theatre): the death toll "sixteen"? Check all places that give one.
4. Westerkerk graveyard closing date (1655 vs before 1814) in the meat-hall place.
5. Woning-Maatschappij (Oostelijke Eilanden) 1871 vs 1874.
6. Door wind bewogen beweging (w9emk4hjtq66o923p9ma3cvl): unveiled 28 Aug 2015 vs working from 28 Oct 2015.
7. Coentje Gans Plantsoen: find a second authoritative source (city naming decision 2021, Joods
   Monument, Stolpersteine). If found, draft it as a new place (YAML in research/centrum/places/loose.yaml,
   format as other files there, validated with research/centrum/scripts/validate.py); else note why not.

## B. Loose clusters (Deep Amsterdam cluster places in research/centrum/clusters/; members in members.json)

Review each and recommend, don't change membership yourself: jo-laurier, jo-marnixplein,
nz-station, nz-kolk, ws-leidseplein-east, ws-almshouses (Van Breemen), gz-disguise (no photo; Den
Helder stones), ws-utrechtsedwars, eil-kadijk, eil-bastions, nz-drink (Molsteeg 4), nz-spui,
oz-voc (Compagnietheater), nz-palace (Walk of Pride, P.C. Hoofthuis), gz-leidsestraat, nm-ruijterkade.
For each: is the cluster coherent as it stands live (`dc place <cluster id>` shows children)? If a
member clearly doesn't belong, say where it should go. Keep it practical: only recommend changes
that a visitor would notice.

## Output

- `research/centrum/fixes/loose.json` (`[{"id","patch","note"}]`, full texts from live, summary <=280,
  check_note <=200) for section A.
- `research/centrum/notes/loose.md`: per item verdict and sources; section B recommendations as a
  table (cluster, verdict keep/split/move, which members, why).
