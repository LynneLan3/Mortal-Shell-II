# Item 06 Research — Ova / Mether's Breath / Clear Corruption

Research date: 2026-08-24
Repository item: 06 — `mortal-shell-ii/ova` (`expand`)

## Scope and existing-page audit

The existing `src/content/docs/gameplay/ova.md` already covered the broad Ova loop, the reported 168 Ovum late-game requirement, and a Send Ova checklist. It did not sufficiently document the early Mether's Breath route, the conflicting early thresholds, the concrete Beacon route, post-boss Ova rewards, or the fact that current launch reporting identifies `Send Ova` as the transition into NG+. The page also contained a contrary statement that Send Ova does not start New Game Plus; that claim needs correction.

No Map x/y coordinates are needed for this item. Route descriptions below use named Beacons and landmarks only.

## Confirmed or strongly cross-checked facts

### Early prerequisites and route

- Finish the prologue and reach Marrow Keep. GameSpot describes Marrow Keep as the hub after the prologue and directs the player toward Fainweald first; the Ruins of Mammon side is initially blocked by corruption.
- Use the Fainweald side and activate/reach the named early Beacons. GameSpot's early route identifies Widow's Overlook as the first active Fainweald Beacon, then lists Blackridge Pass, Mushroom Village, and Mushroom Village Gate as useful early Ova targets.
- Cleansing an eligible Beacon is different from merely discovering or resting at a Beacon. The Beacon menu must offer a cleanse route; the route is completed before the Ova reward is claimed.
- Return the collected Ova to the Ova Nursery in Marrow Keep and interact with the Gloom Siphon. The player must deposit/siphon the resource; carrying Ova in the field alone is not the unlock action.

### Ova collection and route rewards

GameSpot's early route gives concrete examples:

| Route target | Reported reward / consequence | Evidence boundary |
|---|---|---|
| Blackridge Pass Beacon | 1 Ovum after cleansing its dungeon | GameSpot early-route guide |
| Mushroom Village Beacon | 1 Ovum after cleansing its dungeon | GameSpot early-route guide |
| Mushroom Village Gate Beacon | 3 Ova after cleansing its dungeon | GameSpot early-route guide |
| Major Corrupted Gate / post-boss Beacon | 26 Ova in launch-guide reporting | GameSpot Beacon guide and AllThingsHow; not a complete universal reward table |

AllThingsHow separately reports 3 Ova from finishing the tutorial, 1 from a regular Beacon, 3 from a Beacon next to a Corrupted Gate, and 26 for clearing a full Gate and its final boss. These numbers are useful route planning evidence, but should remain attributed launch-build reporting rather than an exhaustive in-game database.

Practical early route:

1. Finish the prologue and inspect Marrow Keep.
2. Enter Fainweald through the cleared route and activate Widow's Overlook.
3. Continue toward Blackridge Pass and the Mushroom Village branch when ready.
4. Cleanse eligible Beacons, prioritizing the named targets above when the menu offers a cleanse.
5. Return to Marrow Keep and deposit the Ova at the Gloom Siphon in the Ova Nursery.
6. After Mether's Breath unlocks, revisit corruption-blocked routes and use the direct Beacon network.

This is an efficient early route described by current guides, not a mandatory universal boss order. The existing Beacon page is the better internal reference for the broader named-Beacon list.

### Mether's Breath and Gloom Siphon

- Mether's Breath is the progression reward associated with the Ova Siphon/Gloom Siphon interaction in Marrow Keep.
- It has two relevant uses in current launch reporting: direct travel between discovered/rested Beacons and clearing the black corruption growths that block overworld routes.
- A Beacon need not be treated as a cleanse dungeon merely because it is a travel destination. Cleansing matters for Ova progression; discovery/resting matters for travel availability.
- If a player has enough Ova but sees no reward, the safe troubleshooting step is to return to the Ova Nursery and interact with the Siphon again, then check the Beacon menu. Do not invent a different key or boss prerequisite.

### Clearing corruption

Before Mether's Breath, a black corruption wall/growth presents a message that the route is blocked and the Siphon will distill a cleansing vapor after enough Ova are collected. This is a progression gate, not a normal breakable obstacle.

After the item is unlocked:

1. Fast travel or walk back to the named corruption blockage.
2. Approach the black growth.
3. Hold the platform's interact prompt until the growth dissolves.
4. Walk through the newly opened route and rest at any newly discovered Beacon.

AllThingsHow and AltChar agree on the hold-to-interact behavior. Controller labels are platform-specific; the page should say “hold the interact prompt,” not hard-code PlayStation X as a universal input.

### Thresholds and uncertainty

The early unlock number is not safely universal in current launch reporting:

- GameSpot's early route says that after the prologue's Ova and at least five additional Ova from the listed Beacons, returning to the Ova chamber unlocks Mether's Breath.
- AllThingsHow says to collect 7–8 Ova and explicitly notes that the game does not expose a hard number in the corruption message.
- NerdsChalk reports an 8-Ova siphon threshold.
- AltChar reports 10 Ova from firsthand experience but allows that a lower total may be sufficient depending on route order.
- The local Beacon page also records conflicting 4/8/10 launch reports.

The article must not present one early number as a guaranteed threshold. The defensible player instruction is: cleanse nearby eligible Beacons, return to the Ova Nursery after meaningful progress, siphon the collected Ova, and use the in-game unlock prompt / appearance of Mether's Breath as the authority. The tutorial's reported 3 Ova plus the GameSpot early targets may explain why some saves reach the unlock with five additional Ova, while other guides count total siphoned Ova differently.

The late-game `168 Ovum` requirement is a separate milestone and must not be confused with the early Mether's Breath threshold.

### 168 Ovum, post-boss sequence, and Send Ova / NG+ boundary

Current launch guides consistently report 168 Ovum as the requirement that opens the late-game route at the Marrow Keep Siphon. AllThingsHow's current sequence is:

1. Bank 168 Ovum; Corrupted Gates are a major source, but beacons and other activities can contribute.
2. Return to the Gloom Siphon room in Marrow Keep and speak to the NPC there; the 168 requirement opens the route below.
3. Clear the four bosses in the underground route, with Zmey, the Unbidden reported as the last.
4. Return to Marrow Keep. `Send Ova` becomes available at the Siphon after the final-boss sequence.

GameSpot's late-boss coverage and NerdsChalk's NG+ guide identify choosing `Send Ova` as the action that starts New Game Plus. This corrects the existing Ova page's old “Send Ova does not start NG+” wording.

The practical boundary is:

- Defeating the final boss does not by itself force the reset; sources report that the player can return to Marrow Keep and continue current-run cleanup.
- Selecting `Send Ova` is the irreversible commitment / point of no return. Current reports say there is no confirmation prompt.
- Before selecting it, finish optional current-world routes, weapon and Shell pickups, Beacons, quests, and missable trophy attempts that the player does not want to repeat.
- NG+ carries character-facing progress in current launch reporting, while world content such as cleansed Beacons, dungeons, quests, Corrupted Gates, and Ova progression resets. The linked local NG+ page keeps the carry-over/reset distinction but intentionally does not replace this item-specific Send Ova evidence.

### Rewards and what happens next

- A post-boss Beacon in a major Corrupted Gate dungeon is reported to contain 26 Ova. Keep the number qualified as launch-guide evidence rather than promising every Beacon has that payout.
- The direct reward for Mether's Breath is the corruption-clearing / Beacon-travel capability, not a Shell or weapon recommendation.
- After clearing an early corruption wall, the player can reach new routes, discover additional Beacons, and use the direct travel network. The [Gloom Farm guide](/mortal-shell-ii/gloom-farm/) gives one practical post-Mether's-Breath revisit example at the corruption arch north of Blackridge Pass.
- After the late 168/boss sequence, return to the Siphon and decide whether to continue current-world cleanup or select Send Ova for NG+.

## Patch notes and live-build caveats

Balance Patch 1 notes reviewed for the launch window list economy changes, enemy and boss tuning, weapon/Tarstone changes, and bug/performance fixes. They do not list a change to the Ova threshold, Mether's Breath behavior, the 168 requirement, or the Send Ova boundary. Hotfix 2.0 notes list stability/UI and riposte-related fixes, not an Ova-system change.

That absence is not proof that every platform/version behaves identically. Console rollout timing and launch hotfixes can affect bugs. Keep the page's threshold wording qualified and use the in-game prompt if a save does not match a guide.

## Practical player insights and common mistakes

- Do not repeatedly attack or search for a hidden key when the UI says a route is blocked by corruption; return to Ova progression.
- Do not confuse holding Ova with siphoning it. The unlock action is at the Siphon in the Ova Nursery.
- Record corruption-blocked routes while exploring, then revisit them after Mether's Breath so the backtrack becomes a deliberate checklist.
- Rest at Beacons you want available for future travel. A discovered but unrested node may not behave as expected in the travel menu.
- If a Beacon still displays an old corruption state after cleansing, treat that as a possible launch-build/UI bug rather than changing the route rule. Community reports describe stale Beacon status and fast-travel-list issues after patches; no stable workaround is confirmed here.
- Do not spend the 168 milestone as if it were the Mether's Breath threshold. They are separate progression gates.

## Conflicting or uncertain claims to preserve

1. Early Mether's Breath threshold: reports range from five additional Ova after the tutorial to 7–8 total, 8 total, or 10 total. Page wording must defer to the in-game unlock prompt.
2. Ova/Ovum terminology: sources use both terms for the resource/progression counter. The page should explain the terms rather than imply two independent currencies.
3. Exact Corrupted Gate reward table: 26 Ova is repeatedly reported for the post-boss/end Beacon, but a complete universal table for every cleanse route is not independently established here.
4. Send Ova sequencing: the 168 requirement, four-boss route, and Zmey naming come from current guide reporting; the exact in-game NPC/menu wording can vary by progression state.
5. Post-patch Beacon display: community reports describe stale corruption labels or missing travel entries. This is a bug report, not a confirmed alternate progression rule.

## Internal-link opportunities

- `/mortal-shell-ii/beacons-fast-travel/` — named Beacon route, fast travel, cleanse-vs-discovery distinction.
- `/mortal-shell-ii/gloom-farm/` — a post-Mether's-Breath route example north of Blackridge Pass.
- `/mortal-shell-ii/map-fragments/` — map and route orientation without inventing coordinates.
- `/mortal-shell-ii/zmey/` — late-boss context after the 168 route opens.
- `/mortal-shell-ii/new-game-plus/` — carry-over and reset planning after Send Ova.
- `/mortal-shell-ii/balance-patch-1/` — version-sensitive launch patch context.
- `/mortal-shell-ii/peters-perfect-parry/` — example of a trophy attempt worth finishing before a current-run boundary.

## Useful image positions (3)

1. Immediately after the quick answer / corruption explanation: the in-game “blocked by corruption” warning showing the Siphon prerequisite.
2. In the Mether's Breath section: the in-game tutorial card stating that the item cleanses corruption and reveals hidden paths.
3. In the Send Ova section: the Gloom Siphon menu with `Send Ova` visible, used to make the irreversible boundary concrete.

Downloaded item-specific images are third-party source material from AllThingsHow's launch guides. Preserve the files' source comments, do not remove watermarks or crop away attribution, and do not describe them as original captures.

Image URLs used:

- Corruption warning: https://static.allthings.how/wp-content/uploads/2026/08/how-to-cleanse-corruption-in-mortal-shell-2-1986457660.webp
- Mether's Breath tutorial: https://static.allthings.how/wp-content/uploads/2026/08/how-to-cleanse-corruption-in-mortal-shell-2-8757830439.webp
- Send Ova Siphon menu: https://static.allthings.how/wp-content/uploads/2026/08/mortal-shell-2-point-of-no-return-guide-681411954-2.webp

## Sources and URLs

- AllThingsHow — “Mortal Shell 2: How to Unlock Mether’s Breath and Cleanse Corruption”: https://allthings.how/mortal-shell-2-how-to-unlock-mether-s-breath-and-cleanse-corruption/ (threshold range, Ova examples, Siphon, hold-to-interact behavior; checked 2026-08-24)
- GameSpot — “Where To Go First In Mortal Shell 2”: https://www.gamespot.com/articles/mortal-shell-2-where-to-go-first/ (Fainweald start, Blackridge Pass / Mushroom Village route, 1/1/3 Ova examples, five additional Ova report; checked 2026-08-24)
- GameSpot — “All Ruk's Maps And Fast Travel Beacons In Mortal Shell 2”: https://www.gamespot.com/articles/mortal-shell-2-ruks-maps-fast-travel-beacons/ (five additional Ova, discovered Beacons, post-boss 26-Ova Beacon report; checked 2026-08-24)
- AllThingsHow — “Mortal Shell 2 Point of No Return Guide (Send Ova)”: https://allthings.how/mortal-shell-2-point-of-no-return-guide-send-ova/ (168 Ovum, four-boss route, Zmey, Send Ova menu boundary; checked 2026-08-24)
- GameSpot — “All Bosses In Mortal Shell 2 And How To Beat Them”: https://www.gamespot.com/articles/mortal-shell-2-all-bosses-how-to-defeat/ (post-final-boss Send Ova → New Game Plus context; checked 2026-08-24)
- NerdsChalk — “Mortal Shell 2 Mether's Breath Guide: Requirements, Unlock Steps, and Uses”: https://nerdschalk.com/mortal-shell-2-methers-breath-guide-requirements-unlock-steps-and-uses/ (8-Ova report, Ova Nursery/Siphon/Beacon travel sequence; checked 2026-08-24)
- NerdsChalk — “Mortal Shell 2 New Game Plus and Ovum survival explained”: https://nerdschalk.com/mortal-shell-2-new-game-plus-and-ovum-survival-explained/ (Send Ova starts NG+, carry-over/reset boundary; checked 2026-08-24)
- AltChar — “Mortal Shell 2: How to Clear Corruption”: https://www.altchar.com/guides/mortal-shell-2-how-to-clear-corruption-a19my5z1iVAh (corruption behavior, 10-Ova firsthand report, hold-to-interact; checked 2026-08-24)
- Reddit repost of developer “Balance Patch 1” notes: https://www.reddit.com/r/MortalShell/comments/1vttz2d/balance_patch_1/ (listed launch changes; no Ova/Mether's Breath threshold change listed; checked 2026-08-24)
- Steam Community — “Hotfix 2.0 - Release Notes”: https://steamcommunity.com/app/2584270/discussions/0/582805931178328609/ (stability/UI/riposte fixes; no Ova-system change listed; checked 2026-08-24)
- Image source page: AllThingsHow corruption guide, image URLs retained in page comments; third-party screenshots credited by the source to Cold Symmetry/Playstack where shown.

---

# Item 21 Research Addendum — All Corrupted Gates + Recommended Order

Research date: 2026-08-24
Repository item: 21 — `mortal-shell-ii/ova` (`expand`)
Scope: Add the complete named Corrupted Gate inventory and an evidence-bounded recommended clear order to the existing Ova page. Preserve the Item 06 early Ova / Mether's Breath / Send Ova coverage above. No map coordinates, shared-file edits, writer calls, or new images are required.

## Direct answer

The current cross-checked launch model has **six major Corrupted Gate dungeons**: three in Fainweald and three in Mammon.

1. **Glutted Mire** — Fainweald — Magdalena, Lady of the Woods.
2. **Sanguine Caverns** — Fainweald — The Lost Child.
3. **Prisoners' Domain** — Fainweald — The Nameless Captive.
4. **Withered Shoals** — Mammon — Hexapod.
5. **Conquered Temple** — Mammon — Droeg the Conqueror.
6. **Faded Citadel** — Mammon — Isaac, the Scholar Prince.

Recommended player order: clear the three Fainweald gates in the order above, then use **Withered Shoals → Conquered Temple → Faded Citadel** as a practical Mammon loop. This is a low-backtracking / difficulty-aware recommendation, not a universal mandatory boss order. Gamer Guides explicitly presents Glutted Mire, Sanguine Caverns, and Prisoners' Domain in that sequence, then says the Mammon gates can be taken in any order and uses Withered Shoals, Conquered Temple, and Faded Citadel as its route. GameSpot and AllThingsHow separately support the six-gate inventory and the named approach Beacons.

## Gate inventory and entry evidence

| Recommended slot | Gate and region | Boss | Named approach Beacon / access evidence | Confidence |
| ---: | --- | --- | --- | --- |
| 1 | Glutted Mire — Fainweald | Magdalena, Lady of the Woods | Mushroom Village Gate; GameSpot identifies this as the first major dungeon candidate. | High |
| 2 | Sanguine Caverns — Fainweald | The Lost Child | Stonebled Gate; GameSpot says cleansing this Beacon grants entry. | High |
| 3 | Prisoners' Domain — Fainweald | The Nameless Captive | Nochtean Gate; GameSpot places the Beacon directly before the Gate, and Into Indie Games describes cleansing the path before entry. | High |
| 4 | Withered Shoals — Mammon | Hexapod | Gate of Mammon; GameSpot identifies the cleansed Beacon as the access point. | High |
| 5 | Conquered Temple — Mammon | Droeg the Conqueror | Sester's Gate; GameSpot says cleansing it unlocks the Gate. | High |
| 6 | Faded Citadel — Mammon | Isaac, the Scholar Prince | Gate of Infinity; GameSpot says this Beacon must be cleansed for access. | High |

AllThingsHow's boss-location table independently maps the same six dungeons to the same bosses and identifies three Gates per region. The repository's existing route research and boss-specific pages use the same six-gate model.

## Order reasoning and player-facing boundaries

### Fainweald: southern loop, then north and west

- **Glutted Mire first:** GameSpot calls the Glutted Mire Gate the first major dungeon to tackle after the Mushroom Village Gate; Gamer Guides uses it as its first gate.
- **Sanguine Caverns second:** Stonebled Gate is the named access Beacon. Gamer Guides calls the Sanguine Caverns Gate the easiest second-gate choice after Mether's Breath is available.
- **Prisoners' Domain third:** Nochtean Gate is the named approach. Place the Peter's Perfect Parry warning before the Nameless Captive kill, not after it.

This order follows route access and practical early progression. It is not a hard boss lock; sources say most of Fainweald can be explored for gear before committing to the Gate dungeons.

### Mammon: practical loop, flexible order

- **Withered Shoals first:** Gamer Guides starts with this gate because it is closest to the Ruins of Mammon Beacon; AllThingsHow describes Hexapod as one of the easier major encounters. This is a practical recommendation, not a formal requirement.
- **Conquered Temple second:** The eastward continuation after Withered Shoals in Gamer Guides' route. The post-Ova hallway has a cold-damage exploration reward, but that detail belongs to the Droeg page and is not required for Gate progression.
- **Faded Citadel third:** The southern Mammon branch after Gate of Infinity. The Gate Beacon access is independently documented by GameSpot.

Sources disagree on whether Mammon has two or three Gates: AltChar's progression article says there are only two, while GameSpot, AllThingsHow, Gamer Guides, the local Beacon inventory, and the existing Droeg / Hexapod / Isaac page set support three. Keep the three-gate model in the article, preserve the discrepancy here, and do not claim a universal mandatory minimum when the evidence only supports a full-completion route.

## Ova and cleanup evidence

- AllThingsHow reports that each of the six major Gate dungeons creates a final Beacon after the boss and that each such post-boss Beacon contains 26 Ova.
- GameSpot independently reports 26 Ova in the post-boss Beacon and says the major Gate dungeons can be delayed while the player explores for gear.
- This supports a practical checklist instruction: defeat the boss, sweep the post-boss Beacon, claim the Ova, and return to the Gloom Siphon when useful.
- The 26-Ova figure is launch-guide reporting for the post-boss Beacon, not a complete reward table for every internal Beacon or partial cleanse.
- All six Gates are the conservative completion route. Do not turn that into a claim that all six are always required for the player's exact Siphon threshold; the existing Item 06 research already labels the separate 168 milestone and early threshold uncertainty.

## Conflicts and exclusions

1. **Mammon count:** one AltChar sentence says two Gates; stronger multi-source cross-checks support three. Article wording should say six in total and label the two-gate report as a source conflict in research, not silently combine incompatible lists.
2. **Order:** no source establishes one mandatory order across all six bosses. The article must label the proposed order as recommended / practical and tell players to leave and upgrade if a fight is a poor build match.
3. **Thresholds:** this addendum does not change the Item 06 early Mether's Breath or late 168 Ovum wording. Those are separate progression questions.
4. **Coordinates:** none are needed. Use named Beacons, Gate names, and internal links to the existing Beacon and boss pages.
5. **Images:** no new image is genuinely useful for this expansion. The existing Ova screenshots already illustrate the Siphon and corruption mechanic; a six-row named table is clearer than an unverified map screenshot.

## Source ledger

- GameSpot, “All Bosses In Mortal Shell 2 And How To Beat Them,” Jason Rodriguez, published 2026-08-17 — explicitly lists six Corrupted Gate dungeons, maps all six regions to bosses, and reports the 26-Ova post-boss Beacon: https://www.gamespot.com/articles/mortal-shell-2-all-bosses-how-to-defeat/
- AllThingsHow, “Mortal Shell 2: Boss Locations: Every Boss and Where to Find It,” Sehaj Padda, updated 2026-08-18 — independently lists three Gates per region, maps each Gate to its boss, and reports weapon ability stones plus the post-boss Ova Beacon: https://allthings.how/mortal-shell-2-boss-locations-every-boss-and-where-to-find-it/
- AllThingsHow, “Mortal Shell 2: How to Complete The Unfound Path Final Dungeon,” Pallav Pathak, updated 2026-08-20 — restates the six-Gate regional inventory and explains that the Gates can be explored before the final Ova transition: https://allthings.how/mortal-shell-2-how-to-complete-the-unfound-path-final-dungeon/
- AllThingsHow, “Mortal Shell 2: All 49 Beacon Locations and How to Cleanse Them,” updated 2026-08-18 — lists post-boss Beacon behavior, 26-Ova reports, and internal Beacon names by Gate region: https://allthings.how/mortal-shell-2-all-49-beacon-locations-and-how-to-cleanse-them/
- GameSpot, “All Ruk’s Maps And Fast Travel Beacons In Mortal Shell 2,” Jason Rodriguez, published 2026-08-17 — identifies named Gate access Beacons: Mushroom Village Gate, Stonebled Gate, Nochtean Gate, Gate of Mammon, Gate of Infinity, and Sester’s Gate: https://www.gamespot.com/articles/mortal-shell-2-ruks-maps-fast-travel-beacons/
- Gamer Guides, “Ideal Game Progress Route,” checked 2026-08-24 — gives the recommended Fainweald order, calls Sanguine Caverns an easy second gate, and uses Withered Shoals → Conquered Temple → Faded Citadel for its Mammon route while noting Mammon's gates are flexible: https://www.gamerguides.com/mortal-shell-ii/routes/ideal-game-progress-route
- AltChar, “Mortal Shell 2: The Complete Progression Guide,” Asmir Kovacevic, published 2026-08-17 — supports a southern-first Fainweald route but says Mammon has only two Gates; retained as the explicit conflict rather than accepted over the three-gate cross-check: https://www.altchar.com/guides/mortal-shell-2-the-complete-progression-guide-aDaUv0P7BNa7
- Into Indie Games, “Mortal Shell 2 – Walkthrough Part 4: Prisoner's Domain,” Fahad Suleman, checked 2026-08-24 — corroborates Nochtean Gate access and the cleanse-before-entry route: https://intoindiegames.com/walkthroughs/mortal-shell-2-walkthrough-part-4-prisoners-domain/
