# Item 04 research — All Bosses, Boss Order, and Locations

## Scope and evidence boundary

This is research for the locked hub item `mortal-shell-ii/bosses`. It is not a claim that every named combat encounter has the same progression role. The sources use different scopes:

- **GameSpot** and **GamingProMax** use “major bosses” for the six Corrupted Gate bosses plus the three Unfound Path guardians and Zmey; GameSpot explicitly excludes the scripted prologue encounter from its ten-boss count.
- **AllThingsHow** separates story-route fights, optional overworld fights, six Corrupted Gate bosses, four Unfound Path fights, and Shell-linked minibosses.
- **Gamer Guides** exposes a broad 46-location checklist that mixes major bosses, optional fights, minibosses, duplicate/variant labels, and encounters whose exact classification is not explained in the page text.
- **Nerd’s Chalk** supplies a chronological reference list, but says that the order is not a guaranteed fixed route and counts Orrem’s subtitles separately.

The production hub should therefore present a **progression backbone plus optional/linked encounter index**, not a single universal numbered route and not an invented total. The broad checklist below is a source index for coverage decisions; it is not an instruction to add 46 new plan items.

## Recommended hub information architecture

1. **Prologue / early route:** show the scripted Tar Golem and the source-reported Gloombound Ritualist separately, with a warning that sources classify the prologue differently.
2. **Fainweald Corrupted Gates:** Magdalena, The Lost Child, and The Nameless Captive. These are the first three major gate bosses and can be approached with route flexibility once their regions are accessible.
3. **Mammon Corrupted Gates:** Droeg, Hexapod, and Isaac. These are the three major Mammon gate bosses; source coverage does not prove one mandatory order among them.
4. **Unfound Path:** Orrem’s two-form encounter, The Monolith, Malborn Offspring, then Zmey after the three guardian branches are cleared. The three branches are not source-proven to require one fixed internal order.
5. **Optional / Shell / weapon-linked encounters:** index them by region and nearest Beacon when verified, and link to an existing route page or the relevant locked future item where one exists.

## Progression backbone matrix

| Group / practical order | Encounter | Location / nearest route anchor | Route rule and evidence | Internal link |
| --- | --- | --- | --- | --- |
| Prologue | Gloombound Ritualist | Village Outskirts Beacon; AllThingsHow says cross the bridge and drop into the sunken arena | AllThingsHow lists it as the first prologue fight; Gamer Guides also has a second “Gloombound Ritualist” entry in Revenant Graves, so do not silently merge those labels | No dedicated page; keep as a hub row only if the duplicate is explained |
| Prologue | Tar Golem | Disciple’s Grotto Beacon; descend, ride the air current, pass Ruk, then reach Bone Gate | Scripted outcome. AllThingsHow says the health bar can be depleted for an achievement while the cutscene still plays; GameSpot calls this the one prologue boss and excludes it from the ten major-boss count | [`/mortal-shell-ii/tar-golem/`](/mortal-shell-ii/tar-golem/) |
| Fainweald gate 1 of 3 | Magdalena, the Lady of the Woods | Glutted Mire / Sunken Village route; AllThingsHow describes the route from Sunken Village toward the Glutted Mire arena | GameSpot says Magdalena will likely be first, not that she is mandatory first; treat the three Fainweald gates as flexible after access | [`/mortal-shell-ii/magdalena/`](/mortal-shell-ii/magdalena/) |
| Fainweald gate 2 of 3 | The Lost Child | Sanguine Caverns; AllThingsHow routes from Sanguine Shoreline through the Tarblighted Stoner approach | Major gate boss; its post-fight Beacon contains Ova according to GameSpot/AllThingsHow. Do not force it into one universal number in the hub | [`/mortal-shell-ii/lost-child/`](/mortal-shell-ii/lost-child/) |
| Fainweald gate 3 of 3 | The Nameless Captive | Captive’s End inside Prisoner’s Domain | Major gate boss. The current site confirms the Peter’s Perfect Parry attempt must happen before the kill or be deferred to NG+ | [`/mortal-shell-ii/nameless-captive/`](/mortal-shell-ii/nameless-captive/), [`/mortal-shell-ii/peters-perfect-parry/`](/mortal-shell-ii/peters-perfect-parry/) |
| Mammon gate 1 of 3 | Droeg the Conqueror | Conquered Temple; current guide starts at Ovate’s Chamber Beacon and uses the traversal gate | Major gate boss; no reliable source proves it must precede Hexapod or Isaac | [`/mortal-shell-ii/droeg-the-conqueror/`](/mortal-shell-ii/droeg-the-conqueror/) |
| Mammon gate 2 of 3 | Hexapod | Withered Shoals; current guide uses Nameless Pass Beacon and the route below Ruk | Major gate boss; no fixed Mammon order is supported | [`/mortal-shell-ii/hexapod/`](/mortal-shell-ii/hexapod/) |
| Mammon gate 3 of 3 | Isaac, the Scholar Prince | Faded Citadel / Ashen Sanctum; current guide uses Citadel Atrium Beacon after the Gate of Infinity route | Major gate boss; “Isaac” / “Sir Isaac” spelling varies. No fixed Mammon order is supported | [`/mortal-shell-ii/isaac-the-scholar-prince/`](/mortal-shell-ii/isaac-the-scholar-prince/) |
| Unfound Path guardian branch | Orrem, the Discarded Golem → Orrem, the Reclaimed | Bridge of Procession; current guide uses Bridge of Procession Beacon | One two-form fight, not two independent campaign bosses for the main hub. Nerd’s Chalk lists Discarded, Headless, and Reclaimed as separate checklist labels; this conflict must remain visible | [`/mortal-shell-ii/orrem-discarded-golem/`](/mortal-shell-ii/orrem-discarded-golem/) |
| Unfound Path guardian branch | The Monolith | Obsidian Vault branch; current guide uses the Obsidian Vault Beacon | One of three tendril guardians. AllThingsHow does not prescribe branch order | [`/mortal-shell-ii/monolith/`](/mortal-shell-ii/monolith/) |
| Unfound Path guardian branch | Malborn Offspring | Faithful’s Shelter; current guide uses Faithful’s Shelter Beacon | One of three tendril guardians. Current guides report a two-phase fight; branch order remains flexible | [`/mortal-shell-ii/malborn-offspring/`](/mortal-shell-ii/malborn-offspring/) |
| Endgame final | Zmey, the Unbidden | Centre platform of the Unfound Path after the three guardians; current guide uses Hidden Nave Beacon and the updraft | The final fight is gated by the three guardian branches. Exact Ova entry threshold is source-conflicted (167/168 in current coverage); link the Ova guide rather than hard-coding one number in a summary card | [`/mortal-shell-ii/zmey/`](/mortal-shell-ii/zmey/), [`/mortal-shell-ii/ova/`](/mortal-shell-ii/ova/) |

## Optional, Shell-linked, and weapon-linked encounter matrix

These encounters belong in a secondary checklist or grouped regional table. A blank Beacon cell means the checked source did not expose a dependable Beacon name in its text; do not infer one from map proximity.

| Encounter | Scope | Location / nearest Beacon evidence | Internal link or next integration |
| --- | --- | --- | --- |
| Tainted Vestige | Prologue / optional | Disciple’s Grotto route; AllThingsHow says turn left from the Beacon and take the cave exit | No dedicated page; do not make it a major-boss row |
| Great Arbiter of Flesh | Optional overworld | South-east of Widow’s Overlook Beacon, in a dirt clearing | No dedicated page; useful related link from [`/mortal-shell-ii/gloombound-flame/`](/mortal-shell-ii/gloombound-flame/) only if the final hub copy keeps the item route context |
| The Tarblighted Shepherd | Optional overworld | Across the bridge from Sunken Village Beacon | No dedicated page; classify as optional, not as Magdalena’s mandatory prerequisite |
| Circle of the Grasping Root | Optional overworld | Rootwater Hollow after cleansing Sleeping Mire Beacon | No dedicated page; preserve “optional” classification |
| Vrannic, the Grand Illusionist | Dungeon / route encounter | Hall of Illusions after Mushroom Village Gate Beacon | [`/mortal-shell-ii/hall-of-illusions/`](/mortal-shell-ii/hall-of-illusions/) |
| Tarblighted Stoner | Optional / late Fainweald | Near Sanguine Shoreline Beacon; AllThingsHow describes the transporter to the cave entrance | No dedicated page; link the Lost Child route only as “approach context,” not as a duplicate boss page |
| Bor, the Deluded Monarch | Optional / source checklist | Gamer Guides says the fight begins after dropping through a hole; no dependable Beacon is exposed in the checked text | No dedicated page; mark location as landmark-only until verified in-game |
| Vrago, Solikar Champion | Optional / source checklist | No dependable Beacon is exposed in the checked text | No dedicated page; do not invent a region from the name |
| Gloombound Legion | Optional / source checklist | No dependable Beacon is exposed in the checked text | No dedicated page |
| Twin Sesters / Stray Sesters | Optional / source checklist | Gamer Guides describes a three-bell and toppled-bridge access; no dependable Beacon is exposed in the checked text | No dedicated page; preserve slash naming |
| Tishina’s Confessor | Optional / source checklist | Nearby Traversal Gate is mentioned; no dependable Beacon is exposed in the checked text | No dedicated page |
| Grisha | Dungeon / optional | South of Blackridge Pass Beacon, at the end of Flooded Village according to AllThingsHow | No dedicated page; do not confuse with the separate Pale/Caged/Strange Grisha labels |
| Gloombound Wraith | Secret encounter | Secret room within Gate of Infinity Beacon | No dedicated page; Gamer Guides describes a book-mechanic phase but not a campaign gate |
| Pale Grisha | Dungeon / optional | Grisha Hunting Grounds Dungeon; Beacon not exposed in checked text | No dedicated page |
| Caged Grisha | Dungeon / optional | Downstairs from the crossroad after the blocking hand moves; Beacon not exposed in checked text | No dedicated page |
| Solnir, the Gloom Seeker | Optional / source checklist | Between two blue flames; Beacon not exposed in checked text | No dedicated page |
| Servants of the Scholar-Prince | Faded Citadel lead-in encounter | Gate of Infinity / Faded Citadel route; exact nearest Beacon should follow the Isaac page’s verified route | [`/mortal-shell-ii/isaac-the-scholar-prince/`](/mortal-shell-ii/isaac-the-scholar-prince/) as prerequisite context, not a duplicate page |
| Urrig, the Executioner | Optional / source checklist | Gamer Guides gives a bridge-repair, bats, narrow-bridge, and drop-down route; Beacon not exposed | No dedicated page |
| Infested Miner | Optional / source checklist | Blow up barrels by a broken wheelbarrow to open the gap; Beacon not exposed | No dedicated page |
| The Warden | Shell-linked encounter | Citadel of Penance Beacon; use a lift to the upper structure and approach the centre | [`/mortal-shell-ii/eredrim/`](/mortal-shell-ii/eredrim/) |
| Gloombound Ritualist (second source entry) | Ambiguous duplicate / source checklist | Gamer Guides places a same-named entry north of Revenant Graves by the large wall | Do not merge with the prologue entry until gameplay evidence identifies whether this is a duplicate label or a distinct encounter |
| Sester Secundus | Shell-linked encounter | Revenant Graves / Sester’s Censer Dungeon; current boss-index evidence anchors it south-east of Outskirts of Mammon Beacon | [`/mortal-shell-ii/sester-genessa/`](/mortal-shell-ii/sester-genessa/) |
| Broodshell Swarm | Optional overworld | North of Blackridge Pass Beacon through the spider-infested stretch; AllThingsHow says continue north-east past the graveyard | No dedicated page |
| Viletongue Batushka | Optional / source checklist | Appears after drinking the Strange Concoction by a gate; Beacon not exposed | No dedicated page |
| Starved Harridan | Optional / source checklist | Gamer Guides says head down the area’s south slope into the centre; Beacon not exposed | No dedicated page |
| Lucian, the Thirsting Knight | Dungeon boss | Hidden Keep near / at Stonebled Gate Beacon | [`/mortal-shell-ii/lucian-thirsting-knight/`](/mortal-shell-ii/lucian-thirsting-knight/) |
| Sariel, the Endless | Shell-linked / overworld encounter | Chamber of Becoming route; Gamer Guides describes the central path north/east of the traversal gate | [`/mortal-shell-ii/sariel/`](/mortal-shell-ii/sariel/) |
| Sariel | Shell-linked dungeon encounter | Chamber of Becoming after entering the dungeon; first encounter can retreat at partial health, then resolves farther down the hall | [`/mortal-shell-ii/sariel/`](/mortal-shell-ii/sariel/); treat as one route with the Endless encounter unless verified otherwise |
| Rabid Grisha Pack | Optional dungeon encounter | Holding Cells after using the Feeding Room Key and taking the lift/traversal gate | No dedicated page; related weapon route is [`/mortal-shell-ii/great-martyrs-blade/`](/mortal-shell-ii/great-martyrs-blade/) |
| Prophet of Profane Infinities | Weapon-linked encounter | Obsidianite Mines; Gamer Guides says continue from the stone pillars into the arena | [`/mortal-shell-ii/obsidian-hammer/`](/mortal-shell-ii/obsidian-hammer/) |
| Bloodcursed Lithopod | Optional gate opener | In front of a corrupted-dungeon entrance; defeating it yields the Citadel Gate Lever | No dedicated page; classify as an access encounter, not a main gate boss without more evidence |
| Vellen, High Lord of Mammon | Shell-linked encounter | Royal Crypts / High Lords Courtyard; AllThingsHow says west of High Lords Courtyard Beacon down the large stairwell | Planned locked item 34: [`/mortal-shell-ii/vellen-lazlo/`](/mortal-shell-ii/vellen-lazlo/) (not yet published) |
| Subjugated Guardian | Weapon-linked encounter | End of Sentry’s Grave Dungeon; Beacon not exposed | Planned locked item 47 concerns Ballistazooka, so link only after that page exists: [`/mortal-shell-ii/ballistazooka/`](/mortal-shell-ii/ballistazooka/) |
| Strange Grisha | Optional / source checklist | Gamer Guides says use a Traversal Gate to reach the boss arena; exact Beacon not exposed | No dedicated page |

## Route flexibility and order rules

- **Do not publish a single numbered 1–46 route.** The broad Gamer Guides checklist is a location index, not a chronological campaign order.
- **Six Corrupted Gates are route-flexible.** GameSpot identifies three in Fainweald (Glutted Mire, Sanguine Caverns, Prisoners’ Domain) and three in Mammon (Conquered Temple, Withered Shoals, Faded Citadel). AllThingsHow maps those dungeons to Magdalena, The Lost Child, The Nameless Captive, Droeg, Hexapod, and Isaac. The sources support choosing among accessible branches rather than one mandatory boss order.
- **The Unfound Path is dependency-ordered at the group level.** The three tendril branches must be cleared before the centre route opens; only then is Zmey available. The sources do not prove whether Orrem, Monolith, or Malborn must be first within that group.
- **The prologue is a classification conflict.** GameSpot’s “ten major bosses” count excludes the scripted prologue. AllThingsHow lists Gloombound Ritualist and Tar Golem in the story route; Gamer Guides has both a prologue Gloombound Ritualist and a second same-named Revenant Graves entry. Keep separate labels and explicitly mark the duplicate until verified.
- **Orrem’s labels need normalization.** The actual current site guide documents Discarded Golem and Reclaimed as phases of one encounter. Nerd’s Chalk lists Discarded, Headless, and Reclaimed as three chronological checklist labels. The hub should show one primary row with “two-form encounter” and a note about the source-only Headless label.
- **Ova progression is a gate-level rule, not a boss-number rule.** GameSpot and AllThingsHow report a post-major-boss Beacon with 26 Ova. Existing local Ova/Zmey research records conflicting 167/168 entry claims. Link the Ova guide and tell readers to follow the in-game prompt rather than promising one universal threshold.

## Uncertainty and conflict register

| Claim | Evidence conflict | Safe wording for the future page |
| --- | --- | --- |
| Total boss count | 10 major bosses (GameSpot/GamingProMax), 12 chronological labels (Nerd’s Chalk), and 46 broad locations (Gamer Guides) | “Major progression bosses” and “optional encounters” are separate scopes; do not state one total without defining the scope |
| First boss / prologue | GameSpot says one scripted prologue boss and excludes it; AllThingsHow lists Gloombound Ritualist and Tar Golem; Gamer Guides duplicates Gloombound Ritualist | “The prologue contains scripted/early encounters; source lists classify them differently” |
| Fixed order | Nerd’s Chalk gives a chronological reference; GameSpot/AllThingsHow describe open regions and flexible gates | “Use this as a recommended group order; gate branches can be cleared in different orders” |
| Fainweald first gate | GameSpot says Magdalena will likely be first; that is not a hard dependency | “Magdalena is a common early target, not a universal mandatory first boss” |
| Orrem count | One current site page treats Discarded → Reclaimed as phases; Nerd’s Chalk separates variants and adds Headless | “Orrem is one two-form guardian for progression; source checklists may split the subtitles” |
| Isaac name | Sources alternate between Isaac, Sir Isaac, and Scholar Prince / Scholar-Prince | Use site canonical “Isaac the Scholar Prince” and mention the source alias once |
| Zmey name | Sources use Unbidden, Uninvited, and inconsistent final-boss phrasing | Use current page’s “Zmey, the Unbidden” and avoid importing a different final-boss label |
| Ova threshold | Current launch coverage reports 167–168 depending on source/version | Do not hard-code a threshold in the hub; link [`/mortal-shell-ii/ova/`](/mortal-shell-ii/ova/) |
| Exact Beacon anchors | Broad checklist gives route landmarks for many entries but not a Beacon for every item; some names only appear in a checklist | Use a Beacon only where named by a checked source; otherwise say “dungeon/landmark anchor not independently exposed” |
| Rewards / currency totals | Gamer Guides reports exact Gloom values that do not always match dedicated guide pages | Prefer named rewards and guide-confirmed unlocks; qualify exact currency totals as source-reported/version-sensitive |

## Patch and version notes

GamesRadar’s report on Balance Patch 1 says the update directly nerfed The Lost Child and The Monolith and retimed some Monolith attacks. It also changed economy, weapon, Tarstone, enemy, and stability behavior. The checked notes do not identify a direct HP, damage, or timing change for every other boss in this index. The future hub should link the patch tracker rather than implying that all boss values are launch-stable:

- [`/mortal-shell-ii/balance-patch-1/`](/mortal-shell-ii/balance-patch-1/)

## Internal-link opportunities

Primary existing boss pages:

- `/mortal-shell-ii/tar-golem/`
- `/mortal-shell-ii/magdalena/`
- `/mortal-shell-ii/hall-of-illusions/`
- `/mortal-shell-ii/lost-child/`
- `/mortal-shell-ii/nameless-captive/`
- `/mortal-shell-ii/peters-perfect-parry/`
- `/mortal-shell-ii/lucian-thirsting-knight/`
- `/mortal-shell-ii/eredrim/` (The Warden route)
- `/mortal-shell-ii/sariel/`
- `/mortal-shell-ii/obsidian-hammer/` (Prophet-linked weapon route)
- `/mortal-shell-ii/droeg-the-conqueror/`
- `/mortal-shell-ii/hexapod/`
- `/mortal-shell-ii/isaac-the-scholar-prince/`
- `/mortal-shell-ii/orrem-discarded-golem/`
- `/mortal-shell-ii/monolith/`
- `/mortal-shell-ii/malborn-offspring/`
- `/mortal-shell-ii/zmey/`

Supporting existing pages:

- `/mortal-shell-ii/routes/world-progression/` — locked Item 02, useful when published for route grouping
- `/mortal-shell-ii/beacons-fast-travel/` — locked Item 05, useful for Beacon return routes
- `/mortal-shell-ii/ova/` — Ova gate and endgame warning
- `/mortal-shell-ii/shells/` — Shell recommendations and unlock grouping
- `/mortal-shell-ii/weapons/` and `/mortal-shell-ii/sidearms/` — reward/weapon follow-through
- `/mortal-shell-ii/balance-patch-1/` — version caveat
- `/mortal-shell-ii/endings/` and `/mortal-shell-ii/new-game-plus/` — post-Zmey / NG+ context

Planned locked item links, only after those pages exist:

- Item 34: `/mortal-shell-ii/vellen-lazlo/`
- Item 47: `/mortal-shell-ii/ballistazooka/`

## Screenshot / visual opportunities for a later Integrator pass

These are locations where a screenshot would improve the hub or linked guide; no images were collected in this research-only worker task.

1. **Progression overview:** a clean, source-proven route diagram or in-game map view showing Fainweald gate group, Mammon gate group, and the Unfound Path dependency. Do not add invented map x/y coordinates.
2. **Beacon return example:** one post-boss Beacon with the Ova reward visible, credited to the source/capture owner.
3. **Fainweald gate comparison:** a screenshot showing a named Gate/Beacon landmark for the Magdalena, Lost Child, or Nameless Captive route.
4. **Mammon gate comparison:** a screenshot showing one of Ovate’s Chamber, Nameless Pass, or Citadel Atrium route anchors.
5. **Unfound Path structure:** the centre platform/tendril split or Hidden Nave Beacon, with spoiler-aware alt text and provenance.
6. **Optional/Shell route:** The Warden, Vellen, Sester Secundus, or Sariel route entrance only if a reliable, attributable image is available.

## Sources and URLs

1. GameSpot — [All Bosses In Mortal Shell 2 And How To Beat Them](https://www.gamespot.com/articles/mortal-shell-2-all-bosses-how-to-defeat/) — ten-boss major scope, six Corrupted Gates, post-boss Ova Beacons, gate locations/rewards, and Unfound Path structure.
2. AllThingsHow — [Mortal Shell 2 Boss Locations: Every Boss and Where to Find It](https://allthings.how/mortal-shell-2-boss-locations-every-boss-and-where-to-find-it/) — story-route order, Beacon anchors, optional encounters, six-gate matrix, Unfound Path branches, and Shell-linked fights.
3. Gamer Guides — [All 46 Bosses Locations](https://www.gamerguides.com/mortal-shell-ii/checklists/bosses-locations) — broad 46-entry location checklist, exact encounter labels, and source-reported route/reward details. Treat its count as a checklist scope, not a canonical major-boss count.
4. Nerd’s Chalk — [All Mortal Shell 2 bosses in order](https://nerdschalk.com/all-mortal-shell-2-bosses-in-order/) — chronological reference list and explicit warning that the list is not a fixed route; splits Orrem subtitles.
5. GamingProMax — [Mortal Shell 2 All Boss List](https://gamingpromax.com/mortal-shell-2-all-boss-list/) — corroborates the ten-major-boss framing, six-gate structure, route flexibility, and optional encounter distinction.
6. Steam Community — [Mortal Shell II Achievements](https://steamcommunity.com/stats/2584270/achievements) — primary-platform achievement names for cross-checking encounter/reward naming; not a location source.
7. GamesRadar — [First Mortal Shell 2 balance patch](https://www.gamesradar.com/games/action-rpg/first-mortal-shell-2-balance-patch-stacks-the-deck-for-players-refunds-for-anyone-who-wasted-glimpses-bosses-nerfed-and-gold-drops-buffed-massively/) — patch scope, including direct Lost Child and Monolith changes.
8. Internal production pages used for route normalization: [`tar-golem.md`](../../src/content/docs/gameplay/tar-golem.md), [`nameless-captive.md`](../../src/content/docs/gameplay/nameless-captive.md), [`droeg-the-conqueror.md`](../../src/content/docs/gameplay/droeg-the-conqueror.md), [`hexapod.md`](../../src/content/docs/gameplay/hexapod.md), [`isaac-the-scholar-prince.md`](../../src/content/docs/gameplay/isaac-the-scholar-prince.md), [`orrem-discarded-golem.md`](../../src/content/docs/gameplay/orrem-discarded-golem.md), [`monolith.md`](../../src/content/docs/gameplay/monolith.md), [`malborn-offspring.md`](../../src/content/docs/gameplay/malborn-offspring.md), and [`zmey.md`](../../src/content/docs/gameplay/zmey.md).

## Worker boundary

Only this research checkpoint is prepared. `src/components/experience/BossHub.astro`, `src/pages/mortal-shell-ii/bosses/index.astro`, `content-plan.json`, `src/config/game.ts`, all other item files, Writer/API calls, build, deployment, IndexNow, and main push are Integrator-owned and were not touched.
