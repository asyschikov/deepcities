# Research brief: Deep Amsterdam, Noord round A (one slice per agent)

Same rules as `research/noord/BRIEF.md` (read it fully, and the briefs it points to), and the
current `.claude/skills/c-list-sights/SKILL.md` "Rules that matter most" (read them: they were
tightened on 2026-11-23 after a blind review). Model round briefs: `research/oost/BRIEF-2.md`
and `research/oost/BRIEF-3.md`. This file only lists what is different.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/documents-b8db62f6`.
Other agents work in this checkout at the same time. Create and edit **only**:
- your own new files `research/noord/places/r2-$SLICE.yaml` and `research/noord/notes/r2-$SLICE.md`;
- the existing places named under "Merges" for your slice, in the files your slice owns, and
  nothing else in those files. Keep their titles unchanged (titles are the import key).
Never write to the live site, never touch app code, never commit.

## Round A specifics

- Items 101–147 in `research/noord/SCOUT-2.md` (hook, location, lead source, caveats).
  Verify everything; the scout list is a lead, not a source. Kunstwacht texts are mostly
  undated: find recent evidence for every artwork (news, recent Commons or Street Art Cities
  photos, Mapillary).
- **Write, don't paste**, especially the Dutch: no sentences lifted from Kunstwacht,
  Stadscuratorium, Wikipedia, the register or artists' sites. Same facts in both languages.
- **Needs checking**: where a pin is approximate or a work's survival is unconfirmed, set
  `attributes.check` (Location / Still there? / Facts) and `check_note`, with
  `nl.attributes.check_note`. If you can't establish that something exists at all, leave it
  out and say so in notes.
- **User's decisions**: 135 Friendly Fire is its own place, Amazing, with 140 (the 1946
  gable stone) as a Look for line in it. 103 De 7 Poorten and 136 Lancaster R5512 are one
  place ("Noorderpark station"). 115 NDSM murals: a Look for list in the STRAAT place only.
  143 the 1960 flood is its own place; 144 stays a merge.
- No monuments this round. Food and drink: none.
- Validate your new file and every file you edited until 0 errors.

## Slices

- `volewijck` (owns `volewijck.yaml` and `ndsm.yaml`): new 103+136 Noorderpark station,
  104 Noorderklankpark, 107 arms with shopping bags, 111 Frieling's light cabinets,
  113 Van Gerwen's word plates, 134 Spanjemonument, 135 Friendly Fire (with 140),
  139 Gerben Wagenaar plaque.
  Merges: 108 Naald van Goedkoop into the NDSM place the scout names; 115 NDSM murals into
  "Lasloods (STRAAT Museum)"; 109 De Knoop into "Asterdorp gatehouse (Atelier Volten)";
  112 Stienstra's girls into "Former Wingerdschool and Resedaschool"; 114 Vreemde vogels into
  the parakeet statue place; 138 De Phoenix and 146 the Draka wall into "Fokker bombing
  memorial, 1943"; 141 Nauta's window into the A Lab place.
- `west` (owns `tuindorpen.yaml`): new 105 Simbl's "Genie Mythology" (only if it still exists),
  117 Drijfbeeld, 118 Molenwijk and its art route, 121 Verzonken Stad, 122 Banne Buiksloot
  murals, 123 The Dutch Windmill, 133 Hollandia-Kattenburg monument, 142 Atatürk hostel
  memorial, 143 the 1960 flood.
  Merges: 106 the parakeet relief into the Zwanenplein place; 110 ADM monument into
  "IJplein"; 119 Keppler bust, 120 Tellegen poems (if any survive) and 144 the war memorial
  into "'t Zonnehuis and the Zonneplein"; 145 Zuideinde 443 into "Zuideinde, Oostzanerwerf".
- `east` (owns `nieuwendam.yaml`, `durgerdam.yaml`, `waterland-south.yaml`,
  `waterland-north.yaml`): new 116 Schellingwouderbreek, 124 Amerbos pocket park (Amazing only
  if the Heilige Stede columns are confirmed), 125 Observatorium, 126 Tajiri and Van
  Kruiningen, 127 Poort van Nieuwendam, 128 Flyways, 129 Waterlandplein, 130 Hof der
  Herinnering, 132 De Turfdrager, 137 Bezinningsmonument Nieuwendam.
  Merges: 101 Krop's Saint George into "Kitchen houses north of the Purmerweg" (check the
  exact title); 102 Lex Horn's mosaic into "Wooden houses, Brede Kerkepad" (or own place if
  it is not near; decide); 131 one shared sentence into "Durgerdam bandstand", "Ransdorp
  bandstand" and "Schellingwouderkerk and bandstand"; 147 Zunderdorp's two villagers into
  "Zunderdorp village church".

Finish with a short report: new places, merges, ranks, check flags set, items left out and
why, places without photos, and anything that needs a decision.
