# Item 37 research: Unfound Path Complete Walkthrough

- **Scope:** Item 37 only — `mortal-shell-ii/unfound-path`
- **Action:** `create`
- **Checked:** 2026-08-24
- **Deliverables:** this research checkpoint and `src/content/docs/gameplay/unfound-path.md`
- **Exclusions:** no other plan item, no writer or provider call, no shared-file edits, no map coordinates, no image asset

## Direct answer

The Unfound Path is the late-game route to Zmey the Unbidden. Enter it after the current Gloom Siphon/Ova gate becomes available, clear the three tendril branches, complete each branch's post-boss progression interaction, and use the opened central platform to reach Zmey. The branches are:

1. **Bridge of Procession → Orrem, the Discarded Golem / the Reclaimed**
2. **Obsidian Vault → The Monolith**
3. **Faithful's Shelter → Malborn Offspring**

The evidence supports clearing all three, but not one universal branch order. A practical first-run recommendation is **Orrem → Monolith → Malborn Offspring** because the reviewed final-dungeon guide calls Malborn the hardest of the three and recommends saving it for last. That is a recommendation, not a mandatory quest sequence.

## Claim-to-source ledger

| Claim | Evidence | Confidence | Caveat |
| --- | --- | --- | --- |
| The Unfound Path is the final major dungeon and its center is blocked by three tendril branches | [All Things How — Complete The Unfound Path Final Dungeon](https://allthings.how/mortal-shell-2-how-to-complete-the-unfound-path-final-dungeon/) describes the inaccessible central platform, three sealed segments, and three guarding bosses; [GameSpot — All Bosses](https://www.gamespot.com/articles/mortal-shell-2-all-bosses-how-to-defeat/) independently calls it the final dungeon with three tendril guardians | High | Use the central platform/tendril model, not an invented map layout |
| The branch-to-boss mapping is Bridge of Procession/Orrem, Obsidian Vault/Monolith, and Faithful's Shelter/Malborn Offspring | All Things How lists all three mappings in its branch table; GameSpot repeats each Unfound Path encounter | High | Orrem has two names/forms; preserve both |
| Enough Ova from Corrupted Gate progression opens the area | All Things How says the area opens after enough Ova from the six Corrupted Gate dungeons; [Nerd's Chalk — Zmey guide](https://nerdschalk.com/mortal-shell-2-final-boss-guide-zmey-location-how-to-beat-builds-and-reward/) reports 168; the existing local Ova/Zmey pages preserve 150 versus 167–168 conflicts | High for the Ova gate, low for an exact number | Do not publish one fixed threshold; send readers to the current Gloom Siphon prompt and the local [Ova guide](/mortal-shell-ii/ova/) |
| All three branches must be cleared before the central route opens | All Things How says all three tendrils must fall before the center becomes reachable; [All Things How — Faithful's Shelter Beacon](https://allthings.how/mortal-shell-2-how-to-clear-the-faithful-s-shelter-beacon-in-the-unfound-path/) explicitly says the three branches can be taken in any order but all three tendrils must fall | High | State order uncertainty explicitly |
| Orrem is a two-form fight, Monolith has a later beam phase, and Malborn has delayed strings plus lightning in phase two | All Things How's final-dungeon guide and GameSpot's boss guide agree on the broad encounter identities and transitions | High for broad tactics | Link to the existing boss pages instead of adding exact frame data or a complete moveset |
| Hidden Nave should be cleansed before the final boss; it contains Endless Core | GameSpot says to cleanse Hidden Nave before Zmey and identifies Endless Core as removing the Tarforge upgrade limit; the local Zmey and Beacons pages carry the same qualified handoff | High | The guide should make this a pre-Zmey checklist item, not claim it is a second entry gate |
| Defeating Zmey and entering New Game Plus are separate decisions | GameSpot says to avoid “Send Ova” if continuing the current save; [Nerd's Chalk — What to do after Zmey](https://nerdschalk.com/mortal-shell-2-final-boss-guide-zmey-location-how-to-beat-builds-and-reward/) says the current save remains playable until Send Ova is selected | High | Use a clear warning before linking to [New Game Plus](/mortal-shell-ii/new-game-plus/) |

## Evidence-backed route spine

1. **Finish the pre-endgame route.** Reach the Ova/Gloom Siphon progression at Marrow Keep and follow the current in-game prompt. The reviewed sources agree on an Ova-driven gate but disagree on the exact total and on how earlier gate rewards are counted.
2. **Enter the Unfound Path.** Use the opening beneath Marrow Keep once it is available. Activate or cleanse a named Beacon when encountered so a failed attempt does not require treating the whole dungeon as one uninterrupted run.
3. **Choose a branch.** The branches are separate objectives around a locked central platform. The source-supported safe recommendation is Orrem first, Monolith second, and Malborn last; the Faithful's Shelter source explicitly says the three can be taken in any order.
4. **Clear Bridge of Procession.** Use the [Orrem guide](/mortal-shell-ii/orrem-discarded-golem/) for the Beacon approach and the two-form fight. Preserve healing for the Reclaimed form and confirm the branch's tendril state before leaving.
5. **Clear Obsidian Vault.** Use the [Monolith guide](/mortal-shell-ii/monolith/) for the Obsidian Vault Beacon, jump-slam recovery loop, and beam phase. After the kill, use the **sever red gland** interaction; the local guide explicitly treats the boss kill alone as incomplete branch progress.
6. **Clear Faithful's Shelter.** Use the [Malborn Offspring guide](/mortal-shell-ii/malborn-offspring/) for the Beacon, stairs, bridge, and arena route. Survive the delayed strings, dodge red-circle attacks, use the Stagger break, and keep attacking during the slow resurrection. After the kill, extract the gland/tendril interaction at the back of the arena before leaving.
7. **Open the center.** When all three tendrils are gone, the central platform becomes reachable. If it remains blocked, re-check the branch arena for the required post-boss interaction rather than assuming a missing coordinate or hidden switch.
8. **Cleanse Hidden Nave before Zmey.** Claim the **Endless Core** if you want the Tarforge upgrade limit removed, then follow the final approach in the [Zmey guide](/mortal-shell-ii/zmey/).
9. **Finish and choose deliberately.** Defeat Zmey, return to the current save for cleanup, and select **Send Ova** at Marrow Keep only when ready to begin New Game Plus. See [New Game Plus](/mortal-shell-ii/new-game-plus/) and [Endings](/mortal-shell-ii/endings/).

## Route/order uncertainty to preserve in the article

- **Entry threshold:** reports range from a source-reported 150 to 167–168 Ova. The number is not stable enough for a hard requirement; the in-game Siphon prompt is the operational checkpoint.
- **Prior gate count:** GameSpot and the local route model use six Corrupted Gates; AltChar's progression guide says there are two Mammon gates. This conflict is outside the new page's core scope, so the guide should say “enough Ova from the preceding gate progression” rather than restating a disputed total.
- **Branch order:** the branches are independent and all three are required. Orrem → Monolith → Malborn is a difficulty-oriented recommendation only; do not label it mandatory.
- **Interior turns and coordinates:** sources provide named Beacons and landmarks but no consistent auditable coordinate system. Use route names and linked boss pages; do not invent map coordinates or compass claims.
- **Rewards:** Orrem's Head, Monolith Fragment, and Offspring Trophy are reported branch rewards, but the new page should keep rewards secondary and avoid asserting unverified exact currency labels or Gloom totals.

## Internal handoffs for the guide

- Progression and Ova: [Ova](/mortal-shell-ii/ova/)
- Beacon interaction and travel: [Beacons & Fast Travel](/mortal-shell-ii/beacons-fast-travel/)
- Bridge of Procession: [Orrem](/mortal-shell-ii/orrem-discarded-golem/)
- Obsidian Vault: [The Monolith](/mortal-shell-ii/monolith/)
- Faithful's Shelter: [Malborn Offspring](/mortal-shell-ii/malborn-offspring/)
- Final arena and cleanup boundary: [Zmey](/mortal-shell-ii/zmey/), [New Game Plus](/mortal-shell-ii/new-game-plus/), [Endings](/mortal-shell-ii/endings/)
- Broader route hub: `/mortal-shell-ii/routes/world-progression/` (body link only; it is a route page, not a collection `related` entry)

## Research stop reason

The core route, branch mapping, central-platform gate, Hidden Nave/Endless Core checkpoint, and post-Zmey cleanup boundary have repeated support from independent current walkthroughs and the existing item-specific pages. Remaining disagreements are bounded to the entry threshold, prior gate-count framing, exact interior turns, and optional branch order. Further broad searching is unlikely to improve Item 37 without first-party map data or an in-game capture, neither of which is required for the requested conservative route spine.

## Sources checked

- [All Things How — Mortal Shell 2: How to Complete The Unfound Path Final Dungeon](https://allthings.how/mortal-shell-2-how-to-complete-the-unfound-path-final-dungeon/) — central platform, three tendrils, branch mapping, broad fight identities, recommended Malborn-last difficulty framing, and free-roam after Zmey.
- [GameSpot — All Bosses In Mortal Shell 2 And How To Beat Them](https://www.gamespot.com/articles/mortal-shell-2-all-bosses-how-to-defeat/) — six Corrupted Gates, Ova-bearing post-boss Beacons, all three Unfound Path guardians, Hidden Nave/Endless Core, Zmey, and Send Ova behavior.
- [All Things How — How to Clear the Faithful's Shelter Beacon in The Unfound Path](https://allthings.how/mortal-shell-2-how-to-clear-the-faithful-s-shelter-beacon-in-the-unfound-path/) — explicit branch-order flexibility and the requirement to clear all three tendrils.
- [Nerd's Chalk — Mortal Shell 2 Final Boss Guide: Zmey Location, How to Beat, Builds, and Reward](https://nerdschalk.com/mortal-shell-2-final-boss-guide-zmey-location-how-to-beat-builds-and-reward/) — source-reported 168-Ova value and separation between defeating Zmey and selecting Send Ova.
- [AltChar — Mortal Shell 2: The Complete Progression Guide](https://www.altchar.com/guides/mortal-shell-2-the-complete-progression-guide-aDaUv0P7BNa7) — southern-first progression recommendation and the conflicting two-Mammon-gate claim retained as a bounded uncertainty.
- Local existing pages: [Ova](/mortal-shell-ii/ova/), [Beacons & Fast Travel](/mortal-shell-ii/beacons-fast-travel/), [Orrem](/mortal-shell-ii/orrem-discarded-golem/), [The Monolith](/mortal-shell-ii/monolith/), [Malborn Offspring](/mortal-shell-ii/malborn-offspring/), and [Zmey](/mortal-shell-ii/zmey/), checked for current site route names and handoff boundaries.
