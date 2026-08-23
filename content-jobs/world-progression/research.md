# Mortal Shell II Full Walkthrough / Progression Route — research

Research date: 2026-08-24
Item: 02
Title: Full Walkthrough / Progression Route
Slug: `mortal-shell-ii/routes/world-progression`
Action: `expand`

## Scope and confidence

This is a research checkpoint for the existing `world-progression` Route Hub. It is not an article draft, a new Markdown guide page, or a replacement for the shared route configuration. The current route is rendered from `game.routes` in `src/config/game.ts`; its dynamic page is `src/pages/mortal-shell-ii/routes/[routeId].astro`, and `RouteTimeline.astro` preserves the configured page order. No map x/y coordinates are used.

The high-confidence campaign spine is:

1. Complete the Prologue and establish Marrow Keep.
2. Explore Fainweald and recover Ova through its three Corrupted Gate dungeons.
3. Use the Ova / Gloom Siphon progression to remove the corruption blocking the route into the Ruins of Mammon.
4. Clear Mammon's three Corrupted Gate dungeons and recover enough Ova for the endgame transition.
5. Enter the Unfound Path, defeat the three branch guardians, and open the central route.
6. Defeat Zmey the Unbidden, then clean up the current cycle before deliberately choosing Send Ova for New Game Plus.

The exact order inside Fainweald and Mammon is flexible. A recommended order is useful for difficulty and backtracking, but it must be labeled as a recommendation rather than a mandatory quest sequence.

## Answer-first progression summary

- **Start:** finish the Prologue, reach Marrow Keep, speak with the hub NPCs, and use the upper Keep travel mechanism to enter Fainweald.
- **Early Fainweald anchor:** Widow's Overlook is the first active Beacon reported by the checked guides. Use it to branch south toward Tiel, the Great Arbiter / Gloombound Flame area, and Mushroom Village, then north toward Blackridge Pass and Proxima.
- **Fainweald campaign gates:** the three major Corrupted Gate dungeons are Glutted Mire (Magdalena), Sanguine Caverns (The Lost Child), and Prisoners' Domain (The Nameless Captive).
- **Mammon campaign gates:** the strongest cross-check identifies Conquered Temple (Droeg), Withered Shoals (Hexapod), and Faded Citadel (Isaac the Scholar Prince). One progression guide says Mammon has only two gates; this conflicts with GameSpot's three-dungeon list and the repository's existing Droeg, Hexapod, and Isaac items. The route should retain the three-gate model and flag the older/two-gate claim as unresolved rather than silently mixing the lists.
- **Endgame:** enough deposited Ova opens the Unfound Path. Its three branches are Bridge of Procession (Orrem), Obsidian Vault (The Monolith), and Faithful's Shelter (Malborn Offspring). After all three guardians, the central path leads to Zmey.
- **Completion:** defeating Zmey does not itself force NG+. Current reporting says the player can remain in the cycle for cleanup; `Send Ova` at the Marrow Keep Gloom Siphon is the deliberate transition into the ending / NG+ flow.

## Route stages and evidence

### 0. Prologue → Marrow Keep

1. Finish the required Prologue sequence and reach Marrow Keep.
2. Treat the Keep as the persistent hub for Shell discovery, equipment, Tarforge, Gloom, and Ova handling.
3. Speak with the Keep NPCs and use the elevator / upper travel mechanism to reach the first open-world destination, Fainweald.

The official Open Beta store page confirms that the opening flow runs from the Prologue into the first explorable region and that the full game uses fallen Shells, Beacons, optional dungeons, and hidden minibosses. GameSpot independently describes Marrow Keep as the post-Prologue hub and the cleared Fainweald teleporter as the first destination.

**Do not skip the early missable check for completionists:** current trophy reporting identifies `Mid Summer?` and `No, You Still Can't Win` as Prologue-bound, and `Peter's Perfect Parry` as tied to The Nameless Captive. The exact achievement conditions belong in Item 03 / the relevant boss pages; the route should only show a short warning and link there. Skipping the Prologue is therefore a completion decision, not a neutral shortcut.

### 1. Fainweald orientation and early power

Recommended orientation, not a hard lock:

1. Land at **Widow's Overlook** and activate or use it as the central early anchor.
2. Explore south first for the lower-pressure route described by AltChar. The checked GameSpot route also places the **Tiel** Shell south of the early miniboss area and identifies the nearby **Gloombound Flame** and **Revered Gland** pickups.
3. Reach **Mushroom Village**, activate its Beacon, and use the surrounding dungeons and loot to establish a build.
4. Return north to **Blackridge Pass** and continue toward the **Proxima** route / Shattered Beacon.
5. Collect Ruk map fragments when encountered. They reveal map sections, but the checked sources do not establish that all fragments are required for main-story progression.

This stage should link to the existing [Proxima](/mortal-shell-ii/proxima/), [Gloombound Flame](/mortal-shell-ii/gloombound-flame/), [Map Fragments](/mortal-shell-ii/map-fragments/), and [Shells](/mortal-shell-ii/shells/) pages instead of duplicating their route details.

### 2. Beacons, Ova, and the first travel gate

Beacons have three distinct roles that the route must keep separate:

- **Tag / activate:** make a destination available in the travel list.
- **Cleanse:** enter the Beacon's short dungeon, claim its reward, and unlock the full Beacon menu.
- **Post-boss Beacon:** a Beacon that appears after a major Corrupted Gate boss and supplies a large Ova reward.

The checked Beacon guide says that cleansing also changes the Beacon menu, establishes the practical checkpoint, and removes nearby corruption. It lists **Marrow Keep**, **Widow's Overlook**, and **Outskirts of Mammon** as pre-cleansed anchors, while the early route uses **Village Outskirts**, **Disciple's Grotto**, **Mushroom Village**, **Blackridge Pass**, **Mushroom Village Gate**, **Outskirts of Nochte**, **Stonebled Gate**, and **Nochtean Gate** as relevant route nodes.

Travel has two layers:

1. After reaching and settling in Marrow Keep, the upper Keep mechanism can send the player to an activated Beacon, with the longer travel sequence.
2. **Mether's Breath** later enables direct Beacon-to-Beacon travel and removes certain overworld corruption barriers.

The threshold needs careful wording. AllThingsHow says Mether's Breath follows at least five additional Ova, while the same article's detailed math describes roughly seven to eight total Ova including starting stock. Its separate Send Ova guide explicitly reports **168 Ovum** as the current endgame trigger, while its trophy guide reports **167 Ova** in a completion checklist. The repository's existing Ova page also uses 168. These are not interchangeable numbers. The route should say “collect and siphon enough Ova for the current Gloom Siphon prompt,” link to the Ova page, and label 168 as the current reported value with the 167 conflict preserved.

### 3. Fainweald Corrupted Gates

The three-gate campaign backbone is cross-checked by GameSpot:

| Region / dungeon | Major boss | Route consequence or cleanup note |
| --- | --- | --- |
| Glutted Mire | Magdalena, Lady of the Woods | First major-gate candidate in the recommended early route; post-boss Beacon supplies Ova. |
| Sanguine Caverns | The Lost Child | The final Beacon / inner chamber is reported as the place to check for a Blackmarrow Key before leaving. |
| Prisoners' Domain | The Nameless Captive | Check the Peter's Perfect Parry condition before treating the boss as finished. |

The **order is flexible**. GameSpot says most of Fainweald and Mammon can be explored before committing to the Corrupted Gates, while AltChar recommends the easier southern loop before the tougher north. A future page can offer the southern-first route as the low-backtracking recommendation, but it must not state that Magdalena, The Lost Child, and The Nameless Captive have one universal mandatory order.

Each major boss produces a Beacon containing Ova in GameSpot's launch reporting. The exact global Ova threshold and whether every major-gate reward is strictly required for the endgame trigger remain a route-level uncertainty; the safest completion route is to clear all three Fainweald gates and collect every post-boss reward before moving on.

### 4. Fainweald → Ruins of Mammon

After enough Ova has been collected and siphoned at Marrow Keep, use Mether's Breath to clear the corrupted growth on the far side of the Keep's teleporter. AltChar describes the resulting route south into the Ruins of Mammon and calls Mammon a clear difficulty increase. Its suggested level 20 is a practical guide recommendation, not a game prerequisite and should not be presented as a hard gate.

Use **Outskirts of Mammon** as the arrival / checkpoint anchor. From there, activate nearby Beacons and choose the Mammon gate whose mechanics best fit the current Shell, weapon, and upgrade state.

### 5. Mammon Corrupted Gates

The current cross-checked three-gate model is:

| Region / dungeon | Major boss | Existing item-specific handoff |
| --- | --- | --- |
| Conquered Temple | Droeg the Conqueror | Item 26 page; post-boss Ova / Conqueror's Hoard Beacon. |
| Withered Shoals | Hexapod | Item 27 page; post-boss Ova / Hexapod's Burrow Beacon. |
| Faded Citadel | Isaac, the Scholar Prince | Item 28 page; post-boss Ova / Scholar-Prince's Chamber Beacon. |

GameSpot explicitly lists all three Mammon dungeons and their boss rewards. AltChar's progression article says “there are only two gates in Mammon,” which is a material conflict. The repository already has independent item scope for all three bosses and the Beacon list also separates Conquered Temple, Faded Citadel, and Withered Shoals. Keep three as the working campaign model, preserve the AltChar discrepancy in research, and avoid citing the two-gate sentence as fact.

The gate order is not established as mandatory. A practical route can recommend clearing the most manageable gate first, returning to Marrow Keep after a major reward, and using the new weapon / Shell reward only if it solves a real build problem. Do not impose a weapon or Shell requirement on the walkthrough.

### 6. Unfound Path → Zmey

After the Ova progression opens the endgame, enter the **Unfound Path**. The central platform is initially blocked by tendrils. GameSpot describes three branches that must be explored and guarded by:

- **Bridge of Procession:** Orrem, the Discarded Golem / Orrem, the Reclaimed.
- **Obsidian Vault:** The Monolith.
- **Faithful's Shelter:** Malborn Offspring.

The three branches are the endgame gate, not a proven fixed order. Clear all three, then take the opened central path to **Zmey the Unbidden**. Before the final fight, current reporting specifically recommends cleansing the **Hidden Nave** Beacon and collecting the **Endless Core**, which removes the Tarforge upgrade limit.

The route should link the existing Orrem, Monolith, Malborn, Zmey, [Ova](/mortal-shell-ii/ova/), and [Tarstones](/mortal-shell-ii/tarstones/) pages. Boss mechanics belong to those item-specific pages, not to a broad route timeline except for short preparation warnings.

### 7. Post-Zmey cleanup and NG+

The strongest current reporting says the final boss does not immediately force New Game Plus. The player can remain in the current cycle and clean up Beacons, Shells, weapons, Tarstones, keys, NPC scenes, and optional dungeons. **Send Ova** at the Marrow Keep Gloom Siphon is the deliberate transition that begins the ending / NG+ flow.

The route should therefore display a final checklist:

- finish the three missable trophy checks that apply to the current run;
- cleanse remaining Beacons and collect their Ova;
- finish optional Shell, weapon, Tarstone, key, and NPC routes;
- check the [Endings](/mortal-shell-ii/endings/) and [New Game Plus](/mortal-shell-ii/new-game-plus/) pages;
- choose Send Ova only when current-cycle cleanup is complete.

AllThingsHow reports that Beacons remain cleanup-legal after the final boss. A Steam community report separately warns that the two tutorial Beacons may matter for the “cleanse all Beacons” achievement. Treat the practical safe rule as: cleanse the Prologue Beacons during the first run, then use post-boss free roam for remaining overworld cleanup. Do not promise that every missed tutorial achievement can be recovered in NG+.

## Prerequisites and decision gates

| Gate | What is supported | What remains uncertain |
| --- | --- | --- |
| Reach Marrow Keep | Prologue completion and hub settlement precede the open-world route. | Exact dialogue order among hub NPCs is not needed for the route spine. |
| Enter Fainweald | The cleared upper-Keep teleporter sends the player to the first open region. | No source proves that every optional early dungeon must be cleared before a first Corrupted Gate. |
| Unlock direct travel / corruption clearing | Collect and siphon Ova to obtain Mether's Breath. | The “five additional” and “roughly seven to eight total” figures describe the early unlock; the separate 168 endgame requirement is a different progression point. |
| Enter Mammon | Use Mether's Breath to clear the blocked route from Marrow Keep. | A level recommendation is practical only, not a formal prerequisite. |
| Enter Unfound Path | Accumulate enough Ova through the main gate loop and return to the hub progression. | Exact minimum trigger and whether the game requires every gate reward are not stated consistently enough to hard-code here. |
| Reach Zmey | Clear all three Unfound Path guardian branches. | Branch order is not established as mandatory. |
| Begin NG+ | Defeat Zmey, then choose Send Ova at the Gloom Siphon. | Keep page wording tied to the current UI and existing NG+ evidence; do not call the pre-Zmey route a point of no return. |

## Missables and “do this before leaving” warnings

- **Prologue achievements:** PowerPyx-style trophy reporting and AllThingsHow identify `Mid Summer?` and `No, You Still Can't Win` as Prologue-bound. The route should warn before a player chooses to skip the Prologue or leaves the encounter sequence.
- **Peter's Perfect Parry:** the condition is tied to The Nameless Captive's head-spin sequence. Link the detailed Item 03 / boss guidance and place the warning before the Prisoners' Domain boss, not after it.
- **Prologue Beacons:** cleanse the tutorial Beacons during the first run if pursuing the all-Beacons achievement. The general post-boss cleanup claim should not be used to promise that a missed tutorial-specific trophy is recoverable.
- **Send Ova:** do not select it until current-cycle cleanup is finished. It is not an accidental route trigger; it is a deliberate Gloom Siphon choice after Zmey.
- **Other NPC quests:** this research pass does not establish a universal missable rule for every side quest. Keep quest-specific warnings on the relevant pages unless independently cross-checked.

## Practical player insights

- Activate every Beacon encountered, then distinguish “tagged” from “cleansed”; the two actions do not have the same completion value.
- Use Marrow Keep as the resupply and decision hub after a major boss or a new weapon / Shell reward. Do not carry a full unspent Ova or upgrade decision through an entire new region if the hub is available.
- Establish one Shell and weapon that the player can control before entering Mammon. The sources describe Mammon enemies as a practical difficulty check, not a mandatory level gate.
- Treat the Fainweald and Mammon gate order as a build-routing decision. If one boss exposes a weakness, explore for a Shell, weapon, Tarstone, Beacon, or Tarforge upgrade rather than repeating an underpowered attempt.
- Collect map fragments when convenient because they reveal fog and improve navigation, but do not make the full 11-fragment collection a prerequisite for the campaign route.
- Preserve at least one clean endgame preparation pass before Zmey: Hidden Nave / Endless Core, relevant Beacon activation, and current-cycle cleanup.

## Conflicting or uncertain claims

1. **Mammon gate count:** GameSpot and the repository's existing Item 26–28 scope support three Mammon gates; AltChar says two. Keep three as the working model and label the two-gate claim unresolved.
2. **Ova thresholds:** early Mether's Breath reporting varies between five additional Ova and roughly seven to eight total including starting stock. The repository's 168 value refers to a later endgame requirement. Do not collapse these into one number.
3. **Mandatory gate count:** the safest walkthrough clears all six Corrupted Gate dungeons, but the current Send Ova guide says 168 Ova can be reached without clearing every gate. Treat all six as the reliable full-completion route, not as a proven minimum. Use the player's Gloom Siphon prompt as the live gate.
4. **Endgame Ova count:** the current Send Ova guide reports 168, while the same site's trophy checklist reports 167. Keep the local page's 168 value qualified and do not turn either number into an unconditional route invariant without a current in-game check.
5. **Exact boss order:** sources provide recommended routes, not a universal forced sequence for the three Fainweald or three Mammon gates. Present recommended order separately from required campaign milestones.
6. **Beacon total / achievement behavior:** AllThingsHow reports 49 total Beacons, 46 cleanseable, and post-Zmey cleanup. A Steam community report highlights the tutorial Beacons for the all-Beacons achievement. Preserve the conservative early-cleanse warning until the achievement behavior is independently reproduced.
7. **Area naming:** some sources alternate between “Nochte,” “Nochtean,” “Outskirts of Nochte,” and nearby gate labels. Use the in-game Beacon label on the relevant page and avoid relying on an unverified directional alias.

## Internal-link opportunities

Use only links to existing or separately planned pages; do not create competing route pages from this checkpoint.

- `/mortal-shell-ii/beacons-fast-travel/` — Beacon activation, cleansing, and Mether's Breath.
- `/mortal-shell-ii/ova/` — Ova collection, siphon thresholds, and endgame progression.
- `/mortal-shell-ii/map-fragments/` — Ruk fragments and fog-of-war navigation.
- `/mortal-shell-ii/gloombound-flame/` and `/mortal-shell-ii/slayer-seal-difficulty/` — optional Night Mode / difficulty context.
- `/mortal-shell-ii/shells/`, `/mortal-shell-ii/proxima/`, `/mortal-shell-ii/sester-genessa/`, `/mortal-shell-ii/eredrim/` — early and route-gated Shell choices.
- `/mortal-shell-ii/bosses/` — the shared Boss Hub when its Integrator card set is complete.
- `/mortal-shell-ii/magdalena/`, `/mortal-shell-ii/lost-child/`, `/mortal-shell-ii/nameless-captive/` — Fainweald gate detail.
- `/mortal-shell-ii/droeg-the-conqueror/`, `/mortal-shell-ii/hexapod/`, `/mortal-shell-ii/isaac-the-scholar-prince/` — Mammon gate detail.
- `/mortal-shell-ii/orrem-discarded-golem/`, `/mortal-shell-ii/monolith/`, `/mortal-shell-ii/malborn-offspring/`, `/mortal-shell-ii/zmey/` — Unfound Path and finale detail.
- `/mortal-shell-ii/blackmarrow-keys/` — Sanguine Caverns / key cleanup context.
- `/mortal-shell-ii/peters-perfect-parry/` — pre-Nameless Captive warning.
- `/mortal-shell-ii/endings/` and `/mortal-shell-ii/new-game-plus/` — post-Zmey decision boundary.

## Image opportunities (3–6 useful positions)

No image was downloaded in this research-only worker. If the Integrator later adds images, retain source attribution and any watermark; do not call third-party captures original.

1. **Marrow Keep upper travel mechanism / elevator:** an answer-first image showing the first travel unlock. Candidate source: AllThingsHow fast-travel guide, whose page includes the Gloom Siphon, elevator, and upper mechanism screenshots: https://allthings.how/mortal-shell-2-how-to-unlock-fast-travel-between-beacons/
2. **Widow's Overlook early-route anchor:** a route orientation image showing the first Fainweald Beacon and the south/north split. Candidate source: AltChar progression guide: https://www.altchar.com/guides/mortal-shell-2-the-complete-progression-guide-aDaUv0P7BNa7
3. **Mushroom Village / Blackridge Pass Beacon chain:** a navigation image showing the early Beacon network and the transition from south to north Fainweald. Candidate source: GameSpot's early-route guide: https://www.gamespot.com/articles/mortal-shell-2-where-to-go-first/
4. **Post-boss Ova Beacon:** an image of a major-gate reward Beacon / Ova pickup. Existing repository candidates include `public/images/droeg-the-conqueror/beacon-reward.png` and `public/images/orrem-discarded-golem/bridge-of-procession-beacon.png`; retain their existing provenance if reused.
5. **Mammon transition / gate overview:** a map or route screenshot showing Outskirts of Mammon and the three gate regions. Candidate source: AltChar's progression guide: https://www.altchar.com/guides/mortal-shell-2-the-complete-progression-guide-aDaUv0P7BNa7
6. **Unfound Path final preparation:** Hidden Nave / Endless Core or a clearly labeled guardian-route Beacon. Existing repository candidates include `public/images/malborn-offspring/faithful-shelter-beacon.webp` and `public/images/zmey/zmey-route.png`; use only if their provenance is preserved and the image is labeled as a route aid rather than an original capture.

If only one or two reliable images can be verified, keep the route useful with the existing `src/assets/experience/route-world-progression.jpg` and text-first steps. Image count is not a blocker for this item.

## Patch / version notes

- The official Steam **Hotfix 2.0** notes list crash, stability, performance, Slayer Seal menu, and riposte weapon-stealing fixes. They do not document a route-order or Ova-threshold change: https://steamcommunity.com/app/2584270/discussions/0/582805931178328609/
- The current Balance Patch 1 reporting changes named bosses, economy, equipment, and other systems, but the checked summaries do not establish a direct change to the campaign spine or the Fainweald → Mammon → Unfound Path sequence. Keep any threshold or Beacon-count statement version-qualified and defer to the existing local Balance Patch 1 page: https://www.gamesradar.com/games/action-rpg/first-mortal-shell-2-balance-patch-stacks-the-deck-for-players-refunds-for-anyone-who-wasted-glimpses-bosses-nerfed-and-gold-drops-buffed-massively/

## Sources and URLs

1. GameSpot, “Where To Go First In Mortal Shell 2” — Marrow Keep → Fainweald, Widow's Overlook, early Shells, Mushroom Village / Blackridge Pass, early Ova, and Mether's Breath transition: https://www.gamespot.com/articles/mortal-shell-2-where-to-go-first/
2. GameSpot, “All Bosses In Mortal Shell 2 And How To Beat Them” — six Corrupted Gate dungeons, three Mammon dungeons, Ova Beacon rewards, Unfound Path guardians, Hidden Nave, and Zmey: https://www.gamespot.com/articles/mortal-shell-2-all-bosses-how-to-defeat/
3. AltChar, “Mortal Shell 2: The Complete Progression Guide” — recommended southern-first Fainweald route, Beacon order, Outskirts of Nochte, Mether's Breath, Mammon difficulty context, and the conflicting two-gate statement: https://www.altchar.com/guides/mortal-shell-2-the-complete-progression-guide-aDaUv0P7BNa7
4. AllThingsHow, “Mortal Shell 2: How to Unlock Fast Travel Between Beacons” — upper-Keep travel, Mether's Breath, early Ova math, and corruption clearing: https://allthings.how/mortal-shell-2-how-to-unlock-fast-travel-between-beacons/
5. AllThingsHow, “Mortal Shell 2: All 49 Beacon Locations and How to Cleanse Them” — Beacon roles, relevant route anchors, cleanse-vs-tag distinction, post-boss Ova Beacons, and post-Zmey cleanup claim: https://allthings.how/mortal-shell-2-all-49-beacon-locations-and-how-to-cleanse-them/
6. AllThingsHow, “Mortal Shell 2 Point of No Return Guide (Send Ova)” — Send Ova / NG+ boundary and current-cycle cleanup: https://allthings.how/mortal-shell-2-point-of-no-return-guide-send-ova/
7. AllThingsHow, “Mortal Shell 2: All 53 Achievements” — Prologue and Nameless Captive missable-trophy warnings: https://allthings.how/mortal-shell-2-trophy-guide-how-to-unlock-all-53-achievements/
8. PowerPyx, “Mortal Shell 2 Trophy List Revealed” — independent trophy-list naming cross-check for the missable candidates; the current site exposes the article through its trophy-list index: https://www.powerpyx.com/trophy-lists/
9. Steam, Mortal Shell II Open Beta store page — official developer/publisher context for the Prologue → first explorable region structure: https://store.steampowered.com/app/4711740/Mortal_Shell_II/
10. Steam Community, “Hotfix 2.0 - Release Notes” — official patch scope: https://steamcommunity.com/app/2584270/discussions/0/582805931178328609/
11. GamesRadar+, “First Mortal Shell 2 balance patch…” — current Balance Patch 1 summary: https://www.gamesradar.com/games/action-rpg/first-mortal-shell-2-balance-patch-stacks-the-deck-for-players-refunds-for-anyone-who-wasted-glimpses-bosses-nerfed-and-gold-drops-buffed-massively/
12. AllThingsHow, “Mortal Shell 2 Trophy Guide: How to Unlock All 53 Achievements” — 167-vs-168 checklist discrepancy, missable warnings, six gate / four endgame boss summary: https://allthings.how/mortal-shell-2-trophy-guide-how-to-unlock-all-53-achievements/

## Repository references inspected

- `content-plan.json` — Item 02 is `todo`, `action: expand`, slug `mortal-shell-ii/routes/world-progression`.
- `src/config/game.ts` — existing `world-progression` Route 04, visual asset, eight configured timeline pages, and fast answers.
- `src/pages/mortal-shell-ii/routes/[routeId].astro` — dynamic route renderer with `noindex,follow`.
- `src/components/experience/routes/RouteHub.astro` — hero, fast answers, ordered timeline, and other routes.
- `src/components/experience/routes/RouteTimeline.astro` — renders `route.pages` in exact config order.
- Existing pages: `ova.md`, `beacons-fast-travel.md`, `map-fragments.md`, `shells.md`, `proxima.md`, `sester-genessa.md`, `eredrim.md`, `blackmarrow-keys.md`, `endings.md`, `new-game-plus.md`, `peters-perfect-parry.md`, `tarstones.md`, and the existing boss-specific pages.

No shared file, content plan, production page, image directory, build output, deployment, API, or IndexNow state was changed by this worker.
