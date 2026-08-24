# Item 14 research: All Keys & What They Open

Research date: 2026-08-24 (Asia/Shanghai)
Item: 14
Title: All Keys & What They Open
Slug: `mortal-shell-ii/blackmarrow-keys`
Action: `expand`

## Scope and evidence status

This is the Item 14 research checkpoint only. It is not an article draft and it does not create a second Blackmarrow Keys page for Item 23. The only page prepared in this checkout is `src/content/docs/gameplay/blackmarrow-keys.md`; no plan, hub, map, config, or shared file is in scope.

The existing page was inspected before this pass. Its current working model says there are eight Blackmarrow Keys, eight Shade chests, and five routed locations. Its original launch-build version preserved an eight-versus-nine key-count conflict, but the later page update changed the frontmatter to `status: confirmed` without a tracked Item 14 research artifact. This research restores the evidence boundary: **eight keys/eight chests is the current local working model, not a fully independently verified all-locations count**.

Public-source retrieval was attempted only through direct, read-only `curl` requests to already-known URLs. DNS was unavailable in this worker (`Could not resolve host`), so no new web page was treated as freshly verified. The cross-check below uses the repository's preserved research notes, related pages, Beacon inventory, and existing local route evidence. Unresolved claims stay unresolved.

## Bottom line for the later writer

- A Blackmarrow Key is used in **Marrow Keep** to open a **Shade chest** around the elevator-room area.
- The local page supports a one-to-one consumption model: one key opens one chest, and the key is consumed.
- The local Shell research supports **eight permanent Shells** plus Harros as a prologue-only Shell. That makes eight Shade chests plausible, but it does not by itself prove the exact chest order or reconcile the earlier eight-versus-nine key-count conflict.
- Five route leads are currently usable at landmark level: **Abandoned Outpost / The Collector**, **Shrine of Sorrows**, **Desolate Keep**, **Abbey Entrance**, and **Child's Feeding Grounds**. The first, third, and fourth have only page-level key-route evidence in this checkout; Shrine and Child's Feeding Grounds have stronger related-page support.
- Three exact key locations remain unconfirmed. Do not manufacture a complete eight-row or nine-row location table, compass coordinates, chest order, or key-to-Shell mapping.

## What each key opens

| Inventory item | Destination | Cost | Reward | Evidence boundary |
| --- | --- | --- | --- | --- |
| Blackmarrow Key | One unopened Shade chest around the Marrow Keep elevator room | One key, consumed | A cosmetic Shade associated with the chest's matching Shell | Supported by the existing Item 14 page; no direct key-specific public page was available locally |

The eight chest model is described as corresponding to the eight permanent Shells: Tiel, Proxima, Gragu, Eredrim, Smert, Lazlo, Sariel, and Genessa/Sester Genessa. The repository does **not** record which chest position maps to which Shell, whether the chest order is fixed, or whether the player can choose any unlocked Shell chest. The writer should say “choose an unopened Shade chest for a Shell you have unlocked” only if retaining the current local page wording, and should not invent chest labels.

Opening a Shade chest is not the same as unlocking a Shell body. The matching Shell must already be unlocked before the chest can be opened, and the cosmetic can then be selected through **Change Shades** at a Beacon. This is a practical dependency, not evidence that the key opens the Shell itself.

Blackmarrow Keys are separate from other named keys in the checkout, including the Chapel Key, Crypt Key, Damp Key, Light Keys, and dungeon-specific keys. Do not merge those systems into one “all keys” table.

## Count, name, and mapping uncertainty

### Key count

The original version of the existing page explicitly recorded a launch-source conflict between **eight** and **nine** first-run Blackmarrow Keys. The later page update adopted eight and stated that there are eight matching Shade chests. No Item 14 research note or key-specific external checklist exists in this checkout to resolve that conflict.

Recommended wording for the prepared page: “The current local working model is eight Blackmarrow Keys and eight Shade chests; five routes are described here, while three exact locations remain unconfirmed. Earlier launch coverage recorded an eight-versus-nine key-count conflict, so this is not a verified complete location database.”

### Shell and chest count

`content-jobs/shells/research.md` and `content-jobs/shells/article.md` independently use a nine-total / eight-permanent Shell model: Harros is prologue-only and the eight permanent Shells are Tiel, Proxima, Gragu, Eredrim, Smert, Lazlo, Sariel, and Genessa/Sester Genessa. This cross-check supports the local eight-chest explanation, but it does not prove that every Blackmarrow Key source uses the same count or that no extra key is a duplicate/alternate-run item.

### Area-name variants

- The Beacon inventory uses **Child's Feeding Grounds** (plural), while the existing key page uses “Child's Feeding Ground” in places. Prefer the in-game Beacon label and record the singular as an alias only.
- “Abandoned Outpost / The Collector” is the local page's combined route label. The Collector's exact spawn wording and whether the purchase restocks are not independently documented in this checkout.
- “Abbey Entrance” is a confirmed Beacon name in the local Beacon inventory. The key chest's “beneath / around the tower scaffolding” landmark is page-level evidence only.
- “Desolate Keep” and its relation to Marrow Keep are preserved from the existing page, but the checkout has no separate Desolate Keep route page or key-specific source note.

## Route and Beacon anchors

### 1. Abandoned Outpost / The Collector — low-to-medium confidence

Use **Abandoned Outpost Beacon** as the route anchor. The existing page says to enable Night Mode, find The Collector south of the Beacon, and buy a Blackmarrow Key for **1,500 Gold**. The page deliberately does not claim that the purchase restocks.

Evidence available locally:

- `src/content/docs/gameplay/blackmarrow-keys.md` contains the route and price.
- `src/content/docs/gameplay/beacons-fast-travel.md` and `content-jobs/beacons-fast-travel/research.md` confirm Abandoned Outpost as a named Beacon in the Mammon route inventory.
- `src/content/docs/gameplay/gloombound-flame.md` documents how to enable Night Mode through the Gloombound Flame, Marrow Keep lantern, and Thestus.

The key purchase itself is not independently cross-checked by a second preserved local source. Keep the price and direction qualified as the current page-level lead until a key-specific source or in-game capture is available.

### 2. Shrine of Sorrows — medium-to-high confidence

Use **Mushroom Village Beacon**. The Shrine page identifies Shrine of Sorrows as Night Mode-only and records the route: enter the cocoon-like entrance, collect the Moonlight, Sunlight, and Starlight Sonatas, solve the mounted-head/frozen-world sequence, make Alluring Mushrooms, obtain the Basement Key, and complete the basement ritual. The reward list includes a **Blackmarrow Key** and Tooth of Nochte.

This is a stronger local cross-check than the other optional routes because the dedicated Shrine page carries the full prerequisite and reward sequence and links back to the Blackmarrow Keys page. The exact entrance turn or coordinates are not needed; use the Beacon and named landmarks.

### 3. Desolate Keep — low-to-medium confidence

The existing page ties a Blackmarrow Key to the secret **Desolate Keep** route under/at Marrow Keep and gives the prerequisite as having the **Slayer Seal in inventory**. The page explicitly distinguishes inventory possession from equipping the Seal.

The dedicated Slayer Seal page independently supports that picking up the Seal puts it in inventory and that the achievement consequence is tied to switching/equipping it, not merely collecting it. It does not independently document the Desolate Keep key room. Do not tell players to equip the Seal for access, and do not publish an exact hidden-route turn sequence or coordinates.

### 4. Abbey Entrance — low confidence

Use **Abbey Entrance Beacon** as the route anchor. The existing page says a Blackmarrow Key is in a chest beneath/around the tower scaffolding. The Beacon inventory independently confirms Abbey Entrance as a named Mammon Beacon, but no other local file verifies the chest or scaffolding landmark.

Retain this as a landmark-level route lead only. Do not add a map marker or more precise “left/right” instructions until a source or in-game capture confirms them.

### 5. Child's Feeding Grounds — medium-to-high confidence

Use **Sanguine Shoreline Beacon** to reach The Lost Child route, then continue to **Child's Feeding Grounds Beacon**. The Lost Child page independently records that after the boss route, the player continues through the Child's Feeding Grounds Beacon/Ova progression, returns to the dungeon's innermost chamber, and can collect a Blackmarrow Key in the newly accessible area behind the former Ova location.

The route is progression-gated rather than documented as permanently missable. The exact chamber geometry is not a coordinate claim; use “innermost chamber / former Ova location” and the Beacon name.

## Prerequisites and dependency gates

| Route | Supported prerequisite | Do not overstate |
| --- | --- | --- |
| Abandoned Outpost / The Collector | Night Mode; 1,500 Gold per the existing page | No evidence that the key restocks, or that Night Mode is needed for every Blackmarrow Key |
| Shrine of Sorrows | Night Mode; Mushroom Village Beacon; complete the Sonata, frozen-world, mushroom, and basement sequence | Do not collapse the Shrine's ordinary dungeon keys into Blackmarrow Keys |
| Desolate Keep | Slayer Seal in inventory per the existing page | Do not say the Seal must be equipped; equipping it carries a separate achievement warning |
| Abbey Entrance | Reach the Abbey Entrance tower-scaffolding area | No fixed Ova count, exact turn sequence, or coordinate is locally verified |
| Child's Feeding Grounds | Complete The Lost Child route, then the Beacon/Ova progression and return to the former Ova area | Do not call the key permanently missable or place it at the boss arena without the return step |
| Shade chest use | Matching permanent Shell already unlocked; return to Marrow Keep elevator-room area | Do not imply that a key unlocks the Shell body or grants combat stats |

For Beacon travel, the local fast-travel research distinguishes the early Marrow Keep platform route from direct Beacon-to-Beacon travel through Mether's Breath. The practical advice is to activate named Beacons as encountered and use the current Siphon/menu prompt rather than hard-coding a disputed Ova threshold. The exact key route does not require invented coordinates.

## Three unresolved locations

The evidence set does not identify the remaining three exact key locations. The count of three follows the current local eight-key working model, not a newly verified total. The earlier eight-versus-nine conflict means the writer should not describe these as “the final three in the game” without the qualification.

For a completion checklist, track:

1. Blackmarrow Keys collected.
2. Blackmarrow Keys spent.
3. Shade chests opened in Marrow Keep.
4. Permanent Shells unlocked before attempting a matching chest.
5. The five route leads already checked.

This is safer than inferring a missing key from an unopened chest because the exact key-to-chest order is not recorded.

## Missables and player-safety warnings

- **No permanent Blackmarrow-Key miss is established** in the local evidence. Child's Feeding Grounds is a return/progression route, not a documented one-time pickup.
- **Night Mode is reversible** through Thestus according to the local Gloombound Flame guidance; use it for the Collector and Shrine routes when needed, but do not present it as a prerequisite for all keys.
- **Slayer Seal:** picking it up is different from equipping it. The local difficulty page reports that switching/equipping locks achievements on that save; achievement-focused players should not equip it merely to test the Desolate Keep route.
- **Do not spend a key blindly.** Confirm the matching Shell is unlocked and remember that the key is consumed.
- **Do not treat every locked object as a Shade chest.** Chapel, Crypt, Damp, Light, and dungeon keys belong to separate systems.
- **No current evidence establishes key restocking, New Game Plus duplication, or an irreversible chest choice.** Keep those behaviors out of the writer draft unless later verified.

## Patch and version notes

### Balance Patch 1

The local Balance Patch 1 page changes **Shell-map reveals** from Glimpses to Gloom and refunds eligible pre-patch Glimpse spending at the Shell Keeper's alcove in Blackmarrow. This is relevant to the Blackmarrow hub, but it is not a documented Blackmarrow-Key or Shade-chest change.

The local notes do not establish a change to the key count, chest count, Collector price, Shrine reward, Desolate Keep condition, Abbey chest, or Child's Feeding Grounds route. Do not infer that the map-refund change altered key availability.

### Hotfix 2.0

The preserved official Hotfix 2.0 reference covers crash, stability, performance, Slayer Seal menu, and riposte weapon-stealing fixes. No key, chest, Shade, or Blackmarrow route change is recorded in the local research. This is a “no documented change found” result, not proof that no unlisted change occurred.

### Beta versus launch

The repository repeatedly warns that Open Beta and launch routes can differ for weapons and Beacon inventories. No key-specific beta route is preserved here. Treat any older guide that uses a different key name, chest count, or location as unverified until it matches the launch-build UI.

## Practical player advice

- Start with the named Beacon for the route, not a guessed compass coordinate.
- Turn on Night Mode only after the Gloombound Flame/Thestus prerequisite is ready; the page's two Night Mode routes are the Collector and Shrine.
- For The Lost Child, do not leave after the boss reward: finish the Child's Feeding Grounds Beacon/Ova progression and make the return trip to the former Ova area.
- For Desolate Keep, carry the Slayer Seal in inventory but do not equip it on an achievement save.
- At Marrow Keep, count keys collected and chests opened separately. A mismatch identifies a missing route without requiring a guessed chest-to-Shell mapping.
- Prioritize a chest for a Shell already unlocked; if the UI rejects the interaction, verify the matching Shell requirement before assuming the key is invalid.
- Keep one checklist entry for “unconfirmed” rather than filling the three missing routes with speculative coordinates.

## Internal-link opportunities

Use existing intent-owning pages only:

- `/mortal-shell-ii/shells/` — eight permanent Shells, Shell unlock and Memory model.
- `/mortal-shell-ii/beacons-fast-travel/` — Beacon labels, Marrow Keep travel, Mether's Breath, and cleanse/tag distinction.
- `/mortal-shell-ii/gloombound-flame/` — Gloombound Flame, lantern, Thestus, and Night Mode activation.
- `/mortal-shell-ii/shrine-of-sorrows/` — Shrine prerequisites, Sonata sequence, and Blackmarrow Key reward.
- `/mortal-shell-ii/lost-child/` — Sanguine Shoreline, Child's Feeding Grounds progression, and return-trip key route.
- `/mortal-shell-ii/slayer-seal-difficulty/` — inventory versus equip distinction and achievement warning.
- `/mortal-shell-ii/balance-patch-1/` — Blackmarrow Shell-map refund context.
- `/mortal-shell-ii/ova/` — Ova/Siphon progression when a route requires the return to a Beacon or hub.

Do not link Item 23 to create a second competing page. Do not add map markers or a new route hub.

## Image opportunities (0 new images in this worker)

No image was downloaded or added. Scarcity is not a blocker. If a later integrator has safely sourced, provenance-preserving captures, useful positions are:

1. **Marrow Keep elevator-room Shade chest cluster** — best answer-first image for what the key opens; no local item-specific asset exists.
2. **Mushroom Village Beacon / Shrine of Sorrows entrance** — shows the Night Mode route anchor and avoids confusing the Shrine's internal keys with the Blackmarrow Key reward.
3. **Abandoned Outpost Beacon / The Collector** — shows the south-of-Beacon merchant landmark; use only with a launch-build source or capture.
4. **Child's Feeding Grounds Beacon or former Ova chamber** — illustrates the required return after Beacon/Ova progression; a route aid, not a map coordinate.
5. **Abbey Entrance tower scaffolding** — illustrates the current landmark-level lead while preserving uncertainty about the exact chest position.
6. **Slayer Seal inventory/equip warning** — useful only as a prerequisite warning for Desolate Keep, not as evidence of the key location.

Existing images in other item folders should not be copied into `public/images/blackmarrow-keys/` merely to reach a quota. If new assets are later added, preserve the source URL, access date, watermark/provenance, and descriptive alt text.

## Source URLs and access notes

The following URLs are preserved in the repository's related research and pages. They are source leads for the eventual writer; they were not freshly fetched in this worker because direct DNS retrieval was unavailable.

1. AllThingsHow, fast travel between Beacons: https://allthings.how/mortal-shell-2-how-to-unlock-fast-travel-between-beacons/
2. AllThingsHow, 49 Beacon locations and cleansing: https://allthings.how/mortal-shell-2-all-49-beacon-locations-and-how-to-cleanse-them/
3. GameSpot, Ruk's maps and fast-travel Beacons: https://www.gamespot.com/articles/mortal-shell-2-ruks-maps-fast-travel-beacons/
4. GameSpot, where to go first: https://www.gamespot.com/articles/mortal-shell-2-where-to-go-first/
5. GameSpot, boss and dungeon route overview: https://www.gamespot.com/articles/mortal-shell-2-all-bosses-how-to-defeat/
6. AllThingsHow, Night Mode activation: https://allthings.how/mortal-shell-2-how-to-turn-on-night-mode-with-the-gloombound-flame/
7. GameSpot, Night Mode and difficulty cross-check: https://www.gamespot.com/articles/mortal-shell-2-change-difficulty-night-mode/
8. Steam developer post, Balance Patch 1: https://steamcommunity.com/app/2584270/discussions/0/582805931178489108/
9. Steam developer post, Hotfix 2.0: https://steamcommunity.com/app/2584270/discussions/0/582805931178328609/
10. GamesRadar+, Balance Patch 1 summary: https://www.gamesradar.com/games/action-rpg/first-mortal-shell-2-balance-patch-stacks-the-deck-for-players-refunds-for-anyone-who-wasted-glimpses-bosses-nerfed-and-gold-drops-buffed-massively/
11. Steam, Mortal Shell II official store context: https://store.steampowered.com/app/2584270/Mortal_Shell_II/

**Important source gap:** no key-specific public URL for the Collector, Desolate Keep, Abbey scaffolding, or the exact chest-to-Shell mapping is present in the checkout. Do not fabricate one. The existing Blackmarrow page and related local pages are the current evidence owners until a future worker can fetch and cross-check a launch-build key checklist.

## Repository references inspected

- `src/content/docs/gameplay/blackmarrow-keys.md` — existing Item 14 page, inspected before editing; prior eight-versus-nine conflict and current five-route working model.
- `content-jobs/shells/research.md` and `content-jobs/shells/article.md` — nine-total/eight-permanent Shell model and Blackmarrow Shellkeeper context.
- `content-jobs/beacons-fast-travel/research.md` and `src/content/docs/gameplay/beacons-fast-travel.md` — Beacon labels including Abbey Entrance, Abandoned Outpost, Sanguine Shoreline, and Child's Feeding Grounds.
- `src/content/docs/gameplay/shrine-of-sorrows.md` — Night Mode, Mushroom Village Beacon, full Shrine sequence, Blackmarrow Key reward.
- `src/content/docs/gameplay/lost-child.md` — Sanguine Shoreline, Child's Feeding Grounds, and return-trip key route.
- `src/content/docs/gameplay/gloombound-flame.md` — Night Mode activation and reversibility context.
- `src/content/docs/gameplay/slayer-seal-difficulty.md` — inventory versus equip distinction and achievement warning.
- `src/content/docs/gameplay/balance-patch-1.md` — Shell-map refund in Blackmarrow and patch boundary.
- `content-jobs/world-progression/research.md` — Sanguine Caverns key cleanup, Beacon anchors, no-coordinate rule, and patch uncertainty.

No `article.md`, `content-plan.json`, `src/config/game.ts`, BossHub, map marker, shared page, image, build output, API result, deployment, push, or IndexNow artifact was created or changed by this worker.
