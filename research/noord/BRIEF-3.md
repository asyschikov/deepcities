# Research brief: Deep Amsterdam, Noord round B (one slice per agent)

Same rules as `research/noord/BRIEF-2.md` (read it fully, and everything it points to:
`research/noord/BRIEF.md`, the skill's "Rules that matter most", the West, Nieuw-West and
Weesp briefs). This file only lists what is different for round B.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/documents-b8db62f6`.
Other agents work in this checkout at the same time. Create and edit **only**:
- your own new files `research/noord/places/r3-$SLICE.yaml` and `research/noord/notes/r3-$SLICE.md`;
- the existing places named under "Merges" for your slice, in the files your slice owns, and
  nothing else in those files. Keep their titles unchanged (titles are the import key).
Never write to the live site, never touch app code, never commit.

## Round B specifics

- Items 201–258 in `research/noord/SCOUT-3.md` (hook, location, lead source, caveats).
  Verify everything; the scout list is a lead, not a source, and its scout did not check
  every fact. Scout items marked just "merge." with no title are **new places**.
- **Write, don't paste**, especially the Dutch. Same facts in both languages.
- **Needs checking** (`check`, `check_note`, `nl.attributes.check_note`) where a pin is
  approximate or survival is unconfirmed. If you can't establish that something exists at all
  (e.g. 202 the "Anemoi" octagon), leave it out and say so in notes.
- **Modern architecture** (the user's focus): say what makes the building odd, new or
  contested, not just who designed it; say what a passer-by sees; homes are private.
- **People's homes and sensitive places**: 244 Het Groene Veld and 243 De Bowling are lived-in
  or used squats: be factual and respectful, say what can be seen from public ground and that
  it is someone's home or space; no invitation to walk in.
- **User's decisions**: 225 and 226 are one place (the timber towers: Patch22, Top-Up,
  Stories). 216 Wilmkebreek merges into "Kadoelen stolp farms". 242 Plan Van Gool is its own
  place. 244 Het Groene Veld at Okay. 245 Breehorn and 246 Startblok are out. 234 Hamerkwartier
  and Ketjen becomes a paragraph in "W.H. Vliegenbos". 219 Molenwijk vote: add only if the
  outcome is found. 249 Durgerdam dike: one sentence, only with a dated current source.
- No monuments this round. Food and drink: none.
- Validate your new file and every file you edited until 0 errors.

## Slices

- `oud` (owns `volewijck.yaml`, `ndsm.yaml`, `r2-volewijck.yaml`): new 201 Johan van
  Hasseltkanaal, 233 Van der Pekbuurt, 250 Radio Veronica ship, 251 elm arboretum.
  Merges: 203 Kromwijk bow, 238 Helling X and 255 the two trams into "NDSM slipways and Kraan 13
  (Faralda Crane Hotel)"; 236 into "NDSM Loods (Scheepsbouwloods)"; 206 into "Hotel de
  Goudfazant"; 204 into "Volewijck gallows field (gone)"; 207 and the factory-side part of 213
  as the scout suggests into "Tolhuistuin and the Shell canteen" and "War memorials at De
  Nieuwe Noorder (Fokker bombing, Draka)"; 209 into "Mosveld's stone floodlights"; 210 into
  "Friendly Fire manhole covers"; 212 into "Disteldorp"; 254 into "Noorderklankpark".
- `buiksloterham` (owns no existing file): new 225+226 the timber towers, 227 Republica,
  228 Cityplot and the Tolhuiskade beacon, 229 the self-build plots, 230 the Botel's letter
  rooms, 231 Hyperion Lyceum, 232 De Jakoba. No merges.
- `west` (owns `tuindorpen.yaml`, `r2-west.yaml`): new 214 Paard van Noord (with 240 Damen
  Shiprepair against Haven-Stad as a paragraph), 215 Gemaal Kadoelen and the Concertgemaal,
  239 Twiske-West's turning drums, 256 NoordOogst.
  Merges: 208 into "Sixhaven and the ghost metro station" or "Willem I-sluis" (decide; the
  other may get a pointer only if it is a merge target here, which both are); 237 into "Sixhaven
  and the ghost metro station"; 216 into "Kadoelen stolp farms"; 217 into "Concrete test houses,
  Castorplein"; 218 into "Flood monument, Zonneplein (1960)"; 219 into "Molenwijk and its art
  route"; 235 into "IJplein"; 241 into "Noorder IJplas".
- `dijk` (owns `dijk.yaml`, `nieuwendam.yaml`, `r2-east.yaml`): new 202 Anemoi (only if it
  exists), 242 Plan Van Gool, 243 De Bowling, 244 Het Groene Veld, 252 Tuinpark Buitenzorg,
  257 Tuinpark Tuinwijck, 258 KiMu.
  Merges: 205 into the Nieuwendammerdijk place the scout names; 211 into "Purmerplein and the
  Purmerweg gatehouses"; 234 and 253 into "W.H. Vliegenbos"; 247 into "Flyways (Harmen
  Liemburg), metro station Noord"; 248 into "Zilveren Manen, Waterlandplein"; a pointer from
  "Tajiri's Ontmoetingsplaats and Van Kruiningen's mosaics, Het Breed" to the new Plan Van Gool
  place.
- `waterland` (owns `durgerdam.yaml`, `waterland-south.yaml`, `waterland-north.yaml`): new
  220 Termieterweg tram bed, 221 Poppendam, 223 Adcock station Durgerdam.
  Merges: 222 into "Schellingwouderkerk and bandstand"; 224 into "Kinselmeer and the Durgerdam
  dike"; 249 into "Durgerdam".

Finish with a short report: new places, merges, ranks, check flags set, items left out and
why, places without photos, and anything that needs a decision.
