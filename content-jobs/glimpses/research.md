# Item 18 research: Shell Points / Gloom / Glimpses / Resolve Explained

- Plan item: 18
- Title: Shell Points / Gloom / Glimpses / Resolve Explained
- Slug: `mortal-shell-ii/glimpses`
- Action: expand
- Research date: 2026-08-24 (Asia/Shanghai)
- Scope: the four named resource/combat systems only. Item 19 NPC questline coverage is out of scope, even where a vendor is mentioned as a resource source.
- Protected scope: `content-plan.json`, `src/config/game.ts`, `src/components/experience/BossHub.astro`, and `src/data/map-markers.ts` were not edited. No writer CLI, GPT/APIMart call, deployment, push, or IndexNow request was used.
- Image status: no image added. A screenshot of a menu could illustrate the systems, but it is not required to answer the resource distinctions and would add provenance/maintenance cost.

## Research conclusion

The page should explain four different systems rather than call all of them “currencies”:

1. **Gloom** is the Harbinger-leveling resource. It is earned through combat and other world sources, spent at Beacons for level-ups, and is the only one of the four that current coverage consistently identifies as a death-recovery risk. Balance Patch 1 also moved Shell-map reveals to Gloom.
2. **Glimpses** advance the Bond of one specific Shell. They are scarce, are found mainly through Beacon/gate progression and exploration, and are spent at the Shellkeeper/Bonding interaction to open higher Shell ability tiers and memories. They are not ordinary Gloom and are not a confirmed infinite farm.
3. **Shell Points** are ability/perk points awarded at some Harbinger level milestones. They buy individual abilities inside rows that the Shell’s Bond has already opened. Allocated points are reported as resettable; the Glimpses used to open Bond tiers are not reported as generally refundable.
4. **Resolve** is the active combat meter, not a banked exploration currency. The checked review evidence ties it to successful melee strikes and the combat sources describe it as powering weapon skills and other combat actions. Exact per-action gains, costs, controls, and whether every defensive action grants Resolve are not sufficiently stable to publish as fixed rules.

## Claim and evidence matrix

| Claim | Evidence | Confidence / page treatment |
| --- | --- | --- |
| Gloom levels the Harbinger at Beacons | GamesRadar’s Gloom guide describes Gloom as the level-up resource and says level-ups happen at Beacons; the local `gloom-farm.md` page preserves the same launch-build boundary | High. State directly; avoid fixed prices. |
| Gloom is dropped on death and can be recovered only before another death | GamesRadar describes the death drop, recovery attempt, and loss if the player dies again before recovery | High. State directly, with “current launch coverage.” |
| Shell-map reveals use Gloom after Balance Patch 1 | Cold Symmetry developer post labels the change as an Economy item and says prior map Glimpses are refunded in the Shell Keeper’s alcove in Blackmarrow | High for the published patch state. Mention the post’s PC-live / console-following rollout note rather than claiming universal platform parity. |
| Glimpses are scarce and do not have a confirmed normal farm | GamesRadar lists cleansing Beacons, exploring behind Cleansed Gates, one Merrick purchase, and rare world finds; it explicitly says there is no Glimpse farm | Medium-high. Use “no confirmed universal infinite farm,” not an absolute claim about every future build. |
| Glimpses raise a Shell’s Bond and open its ability tiers/memories | AllThingsHow separates Glimpse Bond Levels from Shell Points; local `shells.md` independently records the Bonding loop | High. State directly. |
| Shell Points come from Harbinger level milestones | NerdsChalk states that Shell Points are milestone rewards from Gloom-funded Harbinger levels; it also warns that not every level awards one | Medium-high. State milestones, not a complete level table. |
| Shell Points buy abilities only after Bond opens the relevant row | NerdsChalk and AllThingsHow agree on the two-gate model: Bond opens tiers and Shell Points buy abilities in those tiers | High. State directly. |
| Shell Point allocation can be refunded | NerdsChalk reports free Shell Point refunds; no developer-published reset specification was found in the checked sources | Medium. Say “current guides report free refunds,” not “the official rules guarantee.” |
| Resolve refills during combat and powers combat effects | GamesRadar’s review says the Resolve bar is replenished by successful melee strikes and powers special attacks/debuffs; the official patch note refers to minimum Resolve requirements for Caged Hystrix and Triarch Repeater | Medium-high. Explain the combat role; do not publish exact costs or a fixed gain table. |
| Resolve should not inherit original Mortal Shell rules automatically | ShowU’s current evidence-bound Resolve guide explicitly warns against importing original-game parry advice and says exact controls/fixed rewards are not verified | High as an editorial limitation. Keep parry/Guard/Harden refill claims qualified. |

## Resource-by-resource notes

### Gloom

- Ordinary enemies and bosses provide Gloom; GamesRadar also identifies Gloom in the world and says respawning enemies can be used for farming.
- Spend it at a Beacon to level the Harbinger. The reward preview is the safest current authority for the next cost and stat result; no fixed cost table is needed for this page.
- On death, the carried Gloom is left at the death location. A second death before recovery removes the previous drop according to the checked launch guide.
- Balance Patch 1 added Shell-map reveals to Gloom and moved the older map purchase away from Glimpses. The developer post says the refunded map Glimpses are in the Shell Keeper’s alcove in Blackmarrow.
- Do not pull the Gloombound Flame/Night Mode questline into this page. The similarly named Gloombound Stone is a separate Tarstone and is outside the locked four-system explanation except as an optional link boundary.

### Glimpses

- The stable use is Shell Bonding: choose a Shell and deepen its Bond at the Shellkeeper/Bonding interaction. Each Bond step opens another row/tier of Shell abilities and can expose Shell memories.
- Current independent coverage identifies Cleansed Beacons, routes behind Cleansed Gates, rare exploration finds, and a limited Merrick purchase as sources. A boss/chest/NPC source should be treated as a source-specific lead unless the player sees it in the current build.
- Glimpses do not appear to be lost on death, but spending them on Bond is a persistent commitment in the checked coverage.
- Do not state a universal total or claim that a fixed number of Shells can be fully bonded in one run. The numbers conflict: Neonsect reports 27 per Shell and 216 for eight, while GamesRadar reports more than 20 per Shell and a one-playthrough total just over 90. These are guide calculations, not a developer-published economy table.
- Patch 1’s refund is narrow: it returns Glimpses spent on Shell-map reveals. It is not evidence that Bond spending or Shell ability purchases are refundable.

### Shell Points

- Shell Points are earned as Harbinger level-up milestone rewards, not by spending Glimpses directly.
- A Bond tier must be open before its ability row is available. Having an unused Shell Point does not bypass the Bond gate.
- Current guides report that allocated Shell Points can be refunded and redistributed, while Glimpses committed to Bond are the lasting decision. The page should preserve this distinction without asserting a complete shared/per-Shell accounting model.
- Coverage is inconsistent in how it describes the point pool: NerdsChalk says all Shells draw from one shared pool, while other summaries describe a Shell’s own tree/capacity without specifying the pool. The stable player instruction is to select the intended Shell, inspect its unlocked rows and remaining capacity in the current UI, and spend only after confirming the prompt.

### Resolve

- Resolve appears on the combat HUD and refills through active combat. GamesRadar specifically describes successful melee strikes as the refill loop.
- It powers combat actions such as weapon skills/special attacks and certain sidearm or Shell effects. The official Balance Patch 1 note is direct evidence that two sidearms formerly had minimum Resolve-to-fire requirements, which were removed.
- Do not present Resolve as a pickup, vendor currency, or death-drop resource.
- Exact refill rules are unresolved. ShowU’s current guide recommends checking the meter before and after a combat exchange and warns that original Mortal Shell parry rules should not be transferred automatically. A separate current combat page reports hits, kills, and successful Guard/Parry/Harden as gains, but that detail is not corroborated by a developer manual or official systems page.
- The safe page wording is: build Resolve through normal combat, watch the meter, and spend it on the ability or weapon/sidearm action the current UI makes available. Do not promise a fixed amount per hit, exact control mapping, or universal defensive gain.

## Practical decision model

| If the player wants to… | Use / protect | Practical instruction |
| --- | --- | --- |
| Level the character | Gloom | Spend some at the hub and do not carry a large unspent balance into an avoidable boss run. |
| Open Shell progression | Glimpses | Test one Shell, then deepen the Bond of the Shell the player actually plans to use. |
| Buy a Shell ability | Shell Points | Confirm the Bond row is open; use milestone-earned points, then rely on the current refund prompt if the build needs reshaping. |
| Fire a special attack or combat effect | Resolve | Build the meter in combat and reserve it for the next meaningful weapon, sidearm, or Shell action. |

## Conflicts and omissions to preserve

1. **Glimpse totals:** 27-per-Shell / 216-total and “just over 90 per run” are guide calculations that do not reconcile. No fixed total is published on this page.
2. **Shell Point pool:** current guides differ on shared-pool versus Shell-specific wording. The page explains the two gates without hard-coding the accounting model.
3. **Resolve gains:** successful melee is supported; exact defensive-action triggers and per-action values are not cross-verified. Original Mortal Shell rules are not imported.
4. **Patch rollout:** the developer post says Patch 1 is live on PC and coming to PlayStation 5 and Xbox Series shortly. The article calls out the patch change but does not assert that every platform received it at the same time.
5. **Exact Gloom prices and farm returns:** these are patch-sensitive and owned by the dedicated local [Gloom farm guide](/mortal-shell-ii/gloom-farm/), not this resource overview.

## Existing local handoffs

- `/mortal-shell-ii/gloom-farm/` — repeatable Gloom routes and source-reported returns.
- `/mortal-shell-ii/shells/` — Shell roster, unlock sequence, Bonding, and Shell-specific boundaries.
- `/mortal-shell-ii/balance-patch-1/` — full Patch 1 changes and rollout context.
- `/mortal-shell-ii/sidearms/` and `/mortal-shell-ii/tarstones/` — Resolve-consuming equipment context.
- `/mortal-shell-ii/new-game-plus/` — carry-over/reset context for future Glimpse collection, without duplicating the NG+ guide here.

## Sources checked

1. Cold Symmetry developer post, **Balance Patch 1**, official news on the Mortal Shell subreddit — Shell-map Gloom cost, Glimpse refund location, and platform rollout note: https://www.reddit.com/r/MortalShell/comments/1vttz2d/balance_patch_1/ (checked 2026-08-24).
2. GamesRadar+, **What is Gloom in Mortal Shell 2?** — Gloom leveling, death recovery, Shell-map costs, and Patch 1 update: https://www.gamesradar.com/games/rpg/mortal-shell-2-gloom/ (checked 2026-08-24).
3. GamesRadar+, **How to get Mortal Shell 2 Glimpses** — Glimpse sources, scarcity, Bond use, and NG+ context: https://www.gamesradar.com/games/rpg/mortal-shell-2-glimpse/ (checked 2026-08-24).
4. GamesRadar+, **Mortal Shell 2 review** — Resolve refill through successful melee strikes and its role in special attacks/debuffs: https://www.gamesradar.com/games/action-rpg/mortal-shell-2-review/ (checked 2026-08-24).
5. AllThingsHow, **How to Increase Shell Level and Unlock Shell Abilities** — Glimpse/Bond versus Shell Point ability gates and Gloom death-risk distinction: https://allthings.how/mortal-shell-2-how-to-increase-shell-level-and-unlock-shell-abilities/ (checked 2026-08-24).
6. NerdsChalk, **Mortal Shell 2 Shell Points Explained and How to Earn Them** — milestone earning, unlocked-row gating, point refunds, and the reported shared-pool model: https://nerdschalk.com/mortal-shell-2-shell-points-explained-and-how-to-earn-them/ (checked 2026-08-24).
7. ShowU, **Mortal Shell II How to Earn Resolve: Combat Gains** — current evidence boundary for Resolve and warning against transferring original-game parry rules: https://showu.net/mortal-shell-ii/how-to-earn-resolve/ (checked 2026-08-24).
8. Neonsect, **Mortal Shell II Currencies: Gloom, Glimpses, Points** — source of the conflicting 27-per-Shell / 216-total estimate: https://neonsect.com/mortal-shell-2/mortal-shell-2-currencies/ (checked 2026-08-24).
9. Official Steam store page — high-level Shell, exploration, combat, and upgrade framing only: https://store.steampowered.com/app/2584270/Mortal_Shell_II/ (checked 2026-08-24).
