# Item 20 research: Lazlo Location & Build

**Scope:** Item 20 only — `mortal-shell-ii/lazlo`, action `create`.

**Research date:** 2026-08-24 (Asia/Shanghai).

**Protected scope:** Do not edit `content-plan.json`, `src/config/game.ts`, `src/components/experience/BossHub.astro`, or `src/data/map-markers.ts`. Do not run a writer CLI or call GPT/APIMart. Do not push or deploy. The only implementation artifacts authorized for this item are this research record and `src/content/docs/gameplay/lazlo.md`.

## Editorial answer

Lazlo the Justiciar is a later permanent Shell in the Mammon region. The stable route is to reach the High Lord's Courtyard / keep route, defeat Vellen, Lord of Mammon, then inspect the chamber or crypt beyond the encounter and interact with Lazlo's remains. The first Memory sequence is part of the permanent-unlock flow; defeating Vellen alone should not be presented as the complete Shell unlock.

The most defensible build recommendation is a Heat-and-Overheat bruiser: use the Axatana or another comfortable melee weapon, keep Lazlo's armor and Heat Meter active, build Resolve through melee, then trigger Overheat for a Burn/shockwave burst and convert the temporary armor-off window with critical hits. Current guides agree on the core loop and several perks, but they disagree on the preferred sidearm and do not establish an objective universal “best build.”

## Source hierarchy and cross-checks

### Location and unlock

- **GameSpot** gives the clearest independent route summary: travel from the Outskirts of Mammon toward High Lord's Courtyard, enter the keep, defeat Vellen, and inspect the last chamber for Lazlo's corpse. It also states that Shells become permanent through their first Memory sequence.
- **Destructoid** independently cross-checks the High Lord's Courtyard Beacon → stairs/air-current → dark crypt → Vellen → Lazlo body route.
- **Gaming ProMax** describes the body as being in the Royal Crypt below High Lord's Keep and says to interact with it in the room behind Vellen to trigger the Memory sequence.
- **AltChar** independently places the encounter beyond the High Lord's Courtyard Beacon and confirms Vellen as the boss gate and the post-fight inhabit prompt.

These sources converge on region, beacon/keep route, Vellen, and the post-boss body. They do not justify a map coordinate or a fully fixed turn-by-turn route.

### Build and playstyle

- **AllThings.How** describes Fortified Plate's armor-on damage reduction, Retribution's Heat/Overheat cycle, and a recommended Axatana + Caged Hystrix + Vatra's Seal setup with crit-oriented Tarstones and the perks Worthy Armor, Warmed Up, Incandescence, Temperament, Furnace, Inflamed, and Rush.
- **Gaming ProMax** independently reports the same armor/Heat/Retribution/Overheat core and recommends Axatana + Ballistazooka for a critical-hit burst during the armor-off window. It also lists the same central perk names, with exact percentages and costs that should remain source-reported rather than be treated as official balance data.

The overlapping mechanic is stronger evidence than either publisher's complete loadout. The article should present a recommended starting template and alternatives, not a tier-list verdict.

## Claim ledger

| Claim | Evidence level | Publication boundary |
| --- | --- | --- |
| Lazlo is a permanent Shell in Mammon | Strong secondary-source convergence; local Shells hub already records the same roster boundary | State as current launch coverage; link the local [Shells Guide](/mortal-shell-ii/shells/) |
| High Lord's Courtyard / keep route leads to Lazlo | GameSpot, Destructoid, Gaming ProMax, AltChar converge at landmark level | Use named landmarks and the beacon; do not invent coordinates |
| Vellen gates access to Lazlo | All four route sources agree | State as the practical boss gate |
| Lazlo is in the last chamber / crypt beyond Vellen | GameSpot, Gaming ProMax, Destructoid agree; AltChar describes the inhabit prompt after the fight | Tell readers to enter the post-fight chamber and interact with the remains/prompt |
| First Memory is required for permanent Shell access | GameSpot and local Shells research/model | Do not imply the body pickup alone completes the unlock |
| Fortified Plate protects Lazlo while armor is active | AllThings.How and Gaming ProMax | Use as current guide reporting, not an official stat table |
| Retribution heats armor and creates a shockwave; Overheat is stronger and temporarily removes armor | AllThings.How and Gaming ProMax independently agree | This is the build's core loop |
| Axatana is the shared primary recommendation | AllThings.How and Gaming ProMax agree | Phrase as a strong starting choice, not objectively best |
| Caged Hystrix or Ballistazooka is the preferred sidearm | Sources disagree | Present Caged Hystrix for safer armor-off ranged pressure and Ballistazooka for burst; let the player choose |
| Vatra's Seal is the best Seal | AllThings.How recommends it; no independent controlled comparison found | Label as a source recommendation and optional fit, not a requirement |
| Exact HP, damage reduction, perk percentages, Gloom/ Glimpse totals, or tier ranking | Only guide-reported and not independently reconciled here | Omit exact values or label them as source-reported; do not create a universal tier claim |

## Uncertainty register

1. **Area naming:** Sources call the destination the High Lord's Courtyard, High Lord's Keep, Royal Crypt, or Mammon crypt. AltChar also uses a different regional label (“Ruins of Charr”) than the Mammon wording used by the other route guides. Treat these as unresolved guide nomenclature and anchor the reader to the in-game High Lord's Courtyard Beacon and Vellen encounter.
2. **Bearings:** Sources vary between west, south, stairs, air current, and jump-teleporter instructions. These may describe different approach segments or different route writeups. Use the beacon → keep/crypt → Vellen sequence and omit compass coordinates.
3. **Unlock timing:** Some guides say the inhabit prompt appears immediately after Vellen; others say to inspect the last chamber and corpse. The safe instruction is to continue beyond the boss arena, interact with Lazlo's remains, and complete the Memory sequence.
4. **Sidearm/build:** Caged Hystrix and Ballistazooka are both recommended by current guides for different reasons. Neither is established as universally superior.
5. **Patch sensitivity:** Perk values, costs, and weapon performance can change. Avoid presenting publisher-specific numbers as timeless facts; link [Balance Patch 1](/mortal-shell-ii/balance-patch-1/) for the site's patch boundary.

## Recommended article boundary

The page should answer these questions only:

1. Where is Lazlo and what must be defeated first?
2. What interaction completes the Shell unlock?
3. What does Lazlo's armor/Heat/Overheat loop ask the player to do?
4. What is a practical starting build, and where do the sources disagree?
5. What should a reader avoid treating as confirmed?

Valid existing internal links:

- `/mortal-shell-ii/shells/` — roster and permanent-unlock model
- `/mortal-shell-ii/beacons-fast-travel/` — beacon route context
- `/mortal-shell-ii/glimpses/` — Bonding resource context
- `/mortal-shell-ii/axatana/` — primary weapon route
- `/mortal-shell-ii/tarstones/` — Tarstone effects and collection boundary
- `/mortal-shell-ii/sidearms/` — Ballistazooka and Caged Hystrix route context
- `/mortal-shell-ii/caged-hystrix/` — dedicated Caged Hystrix page
- `/mortal-shell-ii/slayer-seal-difficulty/` — Seal/difficulty context
- `/mortal-shell-ii/balance-patch-1/` — patch-sensitive resource and balance context

Do not link to the planned `/mortal-shell-ii/vellen-lazlo/` page because it is not present. Do not add a map marker or shared navigation entry as part of Item 20.

## Image decision

No new image is needed. The route can be answered with stable named landmarks, and no Lazlo-specific local asset was found that would materially improve the page. Do not force a screenshot or reuse an unrelated Shell image.

## Sources and URLs

- [GameSpot — All Shell Locations In Mortal Shell 2](https://www.gamespot.com/articles/mortal-shell-2-all-shell-locations/) — Mammon route, High Lord's Courtyard, Vellen, last chamber, and first-Memory permanence; checked 2026-08-24.
- [Destructoid — All shells in Mortal Shell 2 and how to get them](https://www.destructoid.com/all-shells-in-mortal-shell-2-and-how-to-get-them/) — High Lord's Courtyard Beacon, crypt approach, Vellen, and Lazlo body; checked 2026-08-24.
- [Gaming ProMax — Mortal Shell 2 Lazlo the Justiciar Guide](https://gamingpromax.com/mortal-shell-2-lazlo-the-justiciar-guide/) — Royal Crypt route, Vellen gate, Heat/Overheat mechanics, perks, and Axatana/Ballistazooka build; checked 2026-08-24.
- [AllThings.How — Mortal Shell 2: Best Lazlo Build](https://allthings.how/mortal-shell-2-best-lazlo-build-full-setup/) — armor/Heat loop, perk priorities, Axatana/Caged Hystrix/Vatra's Seal recommendation, and crit Tarstones; checked 2026-08-24.
- [AltChar — Mortal Shell 2: How To Unlock Lazlo's Shell](https://www.altchar.com/guides/mortal-shell-2-how-to-unlock-lazlos-shell-aDLUI8L1hmFY) — beacon approach, Vellen encounter, and post-fight inhabit prompt; checked 2026-08-24.
- Local [Shells Guide](/mortal-shell-ii/shells/) — existing route roster boundary and the site's conservative Shell unlock model; checked 2026-08-24.
