# Item 12 research: Best Weapons / Weapon Tier List

**Scope:** Item 12 only — `mortal-shell-ii/weapons`, action `expand`.

**Research date:** 2026-08-24 (Asia/Shanghai).

**Repository context:** The existing hub already listed eight launch-build primary weapons, but it incorrectly treated The Iconoclast as an unresolved route and gave most weapons no practical-use comparison. `content-plan.json` was read for Item 12 context and was not edited. No writer, API, build, deployment, or IndexNow action was run.

## Editorial decision

Keep this page as an evidence-bounded weapon hub rather than publishing an unsupported universal S/A/B damage ranking.

- The current launch-window roster is **eight primary weapons**: The Iconoclast, Axe & Dagger, Veteran's Battle Axe, Great Martyr's Blade, Obsidian Hammer, Black Needle, Axatana, and Clockwork Scythe.
- **The Iconoclast** is prologue starting gear obtained with the Harros Shell; it is not a missing late-game route. The site still has no standalone Iconoclast location page, so the hub should give the short route fact without inventing a detailed walkthrough.
- Seven other weapons have local route pages. The hub should link to each existing route page and keep route details concise.
- “Best” should mean best-supported use case or route fit: early dual-wield, heavy impact, reach, morph/stance experimentation, or late-route reward. It should not mean a tested universal damage ranking.
- Shell synergy is only named where the local evidence supports it: the Axe & Dagger page cites an early Tiel pairing as a practical recommendation. Do not assign exclusive “signature” weapons to every Shell from lore speculation or screenshots.

## Source hierarchy and cross-checks

### Official/high-level context

1. **Steam — Mortal Shell II** (`https://store.steampowered.com/app/2584270/Mortal_Shell_II/`) is the official high-level game page. The browser age-gated it during this pass, so use it only for broad weapon-upgrade positioning, not as the sole source for the roster or routes.
2. **Local Tarforge page** (`src/content/docs/gameplay/tarforge.md`) is the repository owner for the five upgrade-part functions. It states that Muradean Actuator unlocks primary weapon enhancement, Foundry Stone unlocks Smelt Equipment, and Endless Core removes the normal upgrade cap. It also records the 75% Smelt Equipment cost reduction after Balance Patch 1.
3. **Local Balance Patch 1 page** (`src/content/docs/gameplay/balance-patch-1.md`) is the repository's current patch summary and gives the direct weapon changes used below.

### Independent launch-window route cross-checks

- **GameSpot, “All Weapon And Sidearm Locations In Mortal Shell 2”** reports 16 total melee weapons and sidearms, with eight full melee weapons, and says all can be upgraded through the Tarforge. It identifies The Iconoclast as prologue gear, Axe & Dagger in the Chapel Key route, Axatana in Forgotten Tower, Black Needle at the Sester encounter, and Clockwork Scythe after Sariel.
- **Gamer Guides, “All 8 Weapons Locations”** independently lists the same eight primary weapons. Its short entries cross-check The Iconoclast as prologue gear, Axe & Dagger at Shrine of Trials, Black Needle from Twin Sesters, Clockwork Scythe from Sariel, Axatana in Forgotten Tower, Great Martyr's Blade in Martyr's Prison, Veteran's Battle Axe in King's Crypt, and Obsidian Hammer from Prophet of Profane Infinities.
- **AllThings.How, “Mortal Shell 2: All 16 Weapon and Sidearm Locations”** independently separates eight weapons from eight sidearms and gives the same region/dungeon/boss route model. It also says weapons and sidearms can be improved at the Tarforge, but its advice to save Tarstones is an editorial recommendation, not a universal economy rule.
- The local route pages preserve more specific launch-build evidence for Axe & Dagger, Great Martyr's Blade, Axatana, Black Needle, Obsidian Hammer, Veteran's Battle Axe, and Clockwork Scythe. Where a local page is more specific than an external checklist, keep the hub at the local page's supported granularity.

## Roster and acquisition evidence

| Weapon | Cross-checked route fact | Evidence boundary |
| --- | --- | --- |
| The Iconoclast | Given during the Prologue when Harros is unlocked. | Short prologue fact is supported; no standalone local route page or measured tier test is available. |
| Axe & Dagger | Chapel Key → chapel near Mushroom Village → Shrine of Trials pedestal after the puzzle/combat sequence. | Older Open Beta pages place it at Mushroom Village Gate Beacon; the launch route should be treated as current and the beta claim kept as a warning. |
| Veteran's Battle Axe | King's Crypt near Blackridge Pass / Proxima route; loot the final reward area. | Local evidence does not establish a mandatory boss kill or an objective damage rank. |
| Great Martyr's Blade | Martyr's Prison after the Holding Cells / Widow's Overlook route. | One run showed +4 on pickup, but that is an observed state, not a universal upgrade level. |
| Obsidian Hammer | Obsidianite Mines in Mammon; defeat Prophet of Profane Infinities. | Local page supports a slow, heavy, impact/stagger identity and Heavy Stomps; it does not establish comparative DPS. |
| Black Needle | Sester's Bastion / Sisters' Gate route; complete the bell route and Sester encounter. | It is a long-reaching spear with Needle Storm; Balance Patch 1 improved light-attack tracking. Do not infer extra damage or scaling changes. |
| Axatana | Forgotten Tower via the Mammon route; open the final gate and pick it up after the local room encounter. | One run showed +5 and creator coverage calls it strong; neither proves a universal +5 state or “best weapon” ranking. Kill requirement is not consistently established. |
| Clockwork Scythe | Chamber of Becoming after the full Sariel route and permanent defeat. | Sariel, the Shell, and Caged Hystrix are separate rewards; do not collapse them into one pickup. Balance Patch 1 improved light-attack tracking. |

## Practical “tier list” that the evidence can support

Use a use-case table, not S/A/B damage tiers:

| Practical tier/use case | Weapon(s) | Why this is supportable |
| --- | --- | --- |
| **Best first dual-wield route** | **Axe & Dagger** | It is an early Fainweald option behind a contained Shrine of Trials route. The local page describes the faster dual-wield identity and notes Tiel as a practical early pairing; this is not a universal damage claim. |
| **Best early heavy route** | **Great Martyr's Blade** | The route is optional but relatively early after the Prologue, and the local page documents it as a named heavy weapon. Patch 1 also increased its attack damage by 20%. |
| **Best early experimentation / morph route** | **Axatana** | Its early Mammon detour and dual-mode presentation make it useful for players who want to test different weapon modes. “Best weapon” remains creator opinion, not a measured ranking. |
| **Best reach-focused option** | **Black Needle** | The local page supports a long-reaching spear identity and Needle Storm. Patch 1 improved light-attack tracking. No complete matchup or range comparison is available. |
| **Best impact/stagger direction** | **Obsidian Hammer** | The local route page explicitly describes a slow, heavy, blunt weapon with impact/stagger-oriented attacks and Heavy Stomps. |
| **Best route-adjacent pickup** | **Veteran's Battle Axe** | King's Crypt sits on the broader Blackridge/Proxima exploration route, making it a useful pickup when already traveling there. This is route efficiency, not a damage tier. |
| **Best late-route reward / Sariel objective** | **Clockwork Scythe** | It is tied to the multi-stage Chamber of Becoming/Sariel route. The hub should recommend it to players already pursuing that route, not call it universally strongest. |
| **Best guaranteed starting option** | **The Iconoclast** | It is available in the Prologue with Harros and can be used immediately. No evidence in this pass supports a numerical comparison against the other seven. |

## Upgrade and Tarforge context

The safe upgrade flow is:

1. Find or keep the weapon you intend to use; the eight weapons are not all available at the same progression point.
2. Return the **Muradean Actuator** to Franz in Marrow Keep to unlock primary weapon enhancement at the Tarforge.
3. Use weapon enhancement when the route and material supply justify the investment. The checked evidence does not provide a complete universal material-cost or level table for all eight weapons.
4. After obtaining the **Foundry Stone**, Smelt Equipment can recover weapon/sidearm upgrade materials from gear you no longer want to keep upgraded.
5. Balance Patch 1 reduced Smelt Equipment's Gloom cost by **75%**, making respec/recovery more practical. The patch does not prove that every weapon should be upgraded, smelted, or respeced in the same order.
6. The **Endless Core** removes the normal weapon/sidearm upgrade cap, but the local evidence intentionally does not publish a fixed final maximum level.

Observed upgrade states that must stay labeled as observations:

- Great Martyr's Blade was shown at **+4** in one checked run.
- Axatana was shown at **+5** in one checked run.
- These are not guaranteed pickup levels for every save or platform.

## Patch changes relevant to the weapon recommendation

Balance Patch 1 is the current launch-window version boundary used by the page. The local patch record states:

- Great Martyr's Blade attack damage increased by **20%**.
- Axatana light-attack tracking improved.
- Black Needle light-attack tracking improved.
- Clockwork Scythe light-attack tracking improved.
- Tarforge Smelt Equipment Gloom cost reduced by **75%**.
- Additional changes affected sidearms, Tarstones, enemies, bosses, economy, and stability.

The patch summary does **not** provide exact damage/handling numbers for the tracking changes, and no other weapon buff should be inferred. Old Open Beta or pre-patch tier lists should be labeled dated opinions rather than repeated as current truth. Platform rollout timing is version-sensitive; the local patch page records PC first, PS5 reported received, and Xbox availability unconfirmed in its current evidence.

## Shell synergy boundary

Only one practical pairing is strong enough to surface in the hub: the local Axe & Dagger page describes it as an early dual-wield option and mentions it as a common pairing for an early Tiel run. Phrase this as “a practical pairing to test,” not an exclusive or mathematically best Tiel weapon.

Do not publish the following without new evidence:

- a complete one-to-one Shell-to-weapon table;
- lore-based “signature weapon” claims;
- claims that a weapon is best for a Shell because a loading screen shows it;
- a universal build matrix involving Shell Bond, Seals, Tarstones, and weapon upgrades;
- numerical weapon rankings or matchup tiers without controlled, current-build tests.

## Conflict and uncertainty register

1. **Eight weapons vs 16 total armaments:** current sources agree on eight primary weapons and eight sidearms. The page must not call the 16-item total “16 weapons.”
2. **The Iconoclast page gap:** the route is confirmed as Prologue starting gear, but this checkout has no dedicated Iconoclast page. Keep it in the hub and do not create another item-specific route page.
3. **Axe & Dagger beta location:** older Open Beta pages put it at Mushroom Village Gate Beacon; launch/Advanced Access coverage puts it in Shrine of Trials behind the Chapel Key. Preserve the conflict and prefer the launch route.
4. **Boss/encounter wording:** external checklists differ on whether a named weapon is described as a boss drop or a post-encounter pickup. The hub should use the local route page's narrower wording and link out for steps.
5. **Observed +4/+5 states:** treat them as footage observations only, not universal starting levels.
6. **Axatana kill requirement:** local and creator footage show the room enemy being cleared, but the checked evidence does not establish that the kill is a hard requirement in every build.
7. **Tier ranking:** no official source or controlled test found in this pass supports a universal best-weapon order. Preserve the use-case ranking instead.
8. **Patch availability:** platform rollout and future weapon tuning can change the practical ranking. Keep the page dated and link to the local patch tracker.

## Internal-link opportunities

Use only existing routes:

- `/mortal-shell-ii/axe-dagger/` for the Chapel Key, Shrine of Trials, launch-vs-beta warning, and practical Tiel pairing.
- `/mortal-shell-ii/veterans-battle-axe/` for King's Crypt traps and pickup route.
- `/mortal-shell-ii/great-martyrs-blade/` for the Holding Cells / Martyr's Prison route and observed +4 caveat.
- `/mortal-shell-ii/obsidian-hammer/` for the Obsidianite Mines and Prophet route.
- `/mortal-shell-ii/black-needle/` for the bell puzzle, Sester encounter, Needle Storm, and tracking patch.
- `/mortal-shell-ii/axatana/` for the Mammon route, observed +5, and uncertain kill requirement.
- `/mortal-shell-ii/clockwork-scythe/` for Sariel's four-marker route and reward separation.
- `/mortal-shell-ii/tarforge/` for Muradean Actuator, Smelt Equipment, Endless Core, and upgrade recovery.
- `/mortal-shell-ii/balance-patch-1/` for current weapon and economy changes.
- `/mortal-shell-ii/shells/` for Shell unlocks and the boundary against unsupported weapon pairings.
- `/mortal-shell-ii/gameplay/` for broader combat and exploration context.
- `/mortal-shell-ii/gloom-farm/` and `/mortal-shell-ii/slayer-seal-difficulty/` for optional resource/difficulty advice only.

Do not link a nonexistent `/mortal-shell-ii/iconoclast/` page and do not modify shared hubs or map data as part of Item 12.

## Image opportunities and provenance

**Images added: 0.** No new `public/images/weapons/` asset is necessary for this hub: the existing Axatana and Great Martyr's Blade route pages already contain provenance-labeled gameplay captures, and copying them into a new shared folder would add duplication without improving the overview.

Useful future candidates, if an item-specific asset pass is authorized:

1. A prologue inventory or `NEW WEAPON ACQUIRED — THE ICONOCLAST` screen to close the current Iconoclast page gap.
2. A roster/inventory screen showing all eight primary weapons, with source URL and access date retained.
3. A Tarforge primary-weapon enhancement menu or Smelt Equipment screen, again with provenance and watermark preserved.

Do not crop out watermarks, synthesize map coordinates, or treat third-party gameplay captures as original site artwork.

## Source URLs

- https://store.steampowered.com/app/2584270/Mortal_Shell_II/ — official high-level game page; age-gated during this pass.
- https://www.gamespot.com/articles/mortal-shell-2-all-weapon-sidearm-locations/ — 16 total armaments, eight primary weapons, prologue starting gear, route checklist, and Tarforge upgrade statement; checked 2026-08-24.
- https://www.gamerguides.com/mortal-shell-ii/checklists/weapons-locations — compact independent checklist for all eight primary weapon locations; checked 2026-08-24.
- https://allthings.how/mortal-shell-2-all-16-weapon-and-sidearm-locations/ — eight weapons/eight sidearms split, route table, Tarforge context, and location cross-check; checked 2026-08-24.
- https://www.gamesradar.com/games/action-rpg/first-mortal-shell-2-balance-patch-stacks-the-deck-for-players-refunds-for-anyone-who-wasted-glimpses-bosses-nerfed-and-gold-drops-buffed-massively/ — independent Balance Patch 1 scope cross-check; checked 2026-08-24.
- https://www.gosunoob.com/guides/mortal-shell-2-axe-dagger-weapon-location-and-how-to-get-it/ — launch Axe & Dagger route cross-check; preserved on the local Axe & Dagger page.
- https://gamerant.com/mortal-shell-2-best-weapons-get-first/ — early-use-case opinion and Axe & Dagger route context; not used as an objective tier ranking.
- https://www.youtube.com/watch?v=Pu163xI1uLQ — Gamer Guru Axatana footage/UI and observed +5; used through the local route page.
- https://www.youtube.com/watch?v=-GdX8a8SWSs — Great Martyr's Blade footage and observed +4; used through the local route page.

## Worker checkpoint

- Research: complete for the bounded Item 12 scope, with source hierarchy, cross-checks, conflicts, link opportunities, and image opportunities recorded.
- Page: minimally expanded in place; no new Iconoclast route page was created.
- Images: 0 added.
- Writer/API: not run.
- Shared files: not modified.
