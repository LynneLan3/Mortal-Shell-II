# Item 17 research: Latest Patch Notes & Update Tracker

- Plan item: 17
- Slug: `mortal-shell-ii/balance-patch-1`
- Action: expand
- Research date: 2026-08-24 (Asia/Shanghai)
- Worker boundary: Item 17 only. No `content-plan.json`, shared config, hub component, map-marker data, other content item, writer CLI, GPT/APIMart call, push, deploy, or IndexNow action.
- Existing artifact: `src/content/docs/gameplay/balance-patch-1.md`
- Page status decision: keep `needs-verification` because the official post records PC availability and a planned console rollout, but does not provide a current PS5/Xbox receipt.

## Editorial decision

Keep the existing route and answer-first structure, but turn the page into a compact tracker for the two checked developer-published updates:

1. **Hotfix 2.0** — a stability/bug-fix update documented on August 18, 2026.
2. **Balance Patch 1** — the August 20, 2026 economy, balance, weapon, Seal, Tarstone, and miscellaneous-fix update.

The practical answer should lead with the changes a player can act on immediately: Shell-map refunds, Gloom map costs, cheaper Tarforge smelting, increased Gold drops, and the named weapon/enemy changes. The page should then separate confirmed notes from platform rollout and future-update uncertainty.

Do not present community reports as official platform availability. The official Balance Patch 1 post says the patch was live on PC and was coming to PlayStation 5 and Xbox Series shortly at the time of posting. That is not the same as a current PS5/Xbox installation receipt.

## Source hierarchy

### Primary sources used

1. **Cold Symmetry developer post on Steam, “Balance Patch 1 - Patch Notes”** — posted August 20, 2026; developer account `smithbodie`; pinned discussion. This is the controlling source for the patch contents, the PC-live/platform-rollout wording, and the future-update statement.
2. **Mortal Shell II developer post on Steam, “Hotfix 2.0 - Release Notes”** — posted August 18, 2026; developer account `XBIGY`. This is the controlling source for the hotfix scope.

The Steam post is primary evidence for what the developer announced, not a guarantee that every platform received the same build at the same time. No third-party article or social post is needed to establish the page's core patch facts.

## Confirmed Balance Patch 1 facts

The official post states:

### Economy

- Shell-map locations now cost **Gloom** instead of Glimpses.
- Glimpses spent on Shell maps are refunded in the **Shell Keeper's alcove in Blackmarrow**.
- Enemy Gold drops were significantly increased; enemies in **Mammon** drop double Gold according to the note.
- Tarforge weapon smelting costs **75% less Gloom**.

### Enemies and bosses

- Enemies present in the beta were restored to their beta HP values, except the Caerinid Spider in Magdalena's area, which the developer says remains a threatening non-respawning enemy.
- **The Lost Child:** base damage -10%; maximum health -15%.
- **Monolith:** base damage -19%; maximum health -10%; some attacks retimed.
- **Mace Cultist:** maximum health -21.1%.
- **Caerinid Spider:** maximum health -33.3%.
- **Infested Stalker:** maximum health -52.4%.
- **Rusted Knave (Halberd):** maximum health -20.8%; overhead-strike hit detection fixed.

The named enemy percentages and the broader beta-HP restoration statement should both be retained. The latter is the developer's broad framing; the former are the explicit listed adjustments.

### Weapons, Seals, and Tarstones

- **Great Martyr's Blade:** attack damage +20%.
- **Troubadour's Lute:** attack damage +100%.
- **Caged Hystrix** and **Triarch Repeater:** no minimum Resolve requirement to fire.
- **Axatana**, **Black Needle**, and **Clockwork Scythe:** improved tracking for light attacks.
- **Guard** can now be used while walking.
- **Parasitic Stone**, **Grudge Stone**, **Clerik's Stone**, and **Squall Stone** were buffed.
- **Bulwark Stone** received a significant Damage Reduction increase.

The official post does not provide exact numerical values for the Tarstone buffs. Do not invent percentages or convert “significantly” into a number.

### Miscellaneous

The post lists miscellaneous crash fixes, bug fixes, and performance updates. This supports “includes fixes” but does not support “all crashes are fixed.” Keep the existing link to the PC crash guide for unresolved or differently caused crashes.

## Confirmed Hotfix 2.0 facts

The official Hotfix 2.0 note lists:

- miscellaneous crash fixes, stability improvements, and performance improvements;
- a fix so equipping Slayer Seal from the Beacon menu no longer locks up the UI;
- a fix for players “stealing” enemy weapons during ripostes.

This hotfix is a separate dated update and should not be folded into the Balance Patch 1 percentage table. It is useful in the tracker because it is the most recent separately documented developer update before Balance Patch 1 in the checked primary record.

## Uncertainty and conflict handling

- **Platform rollout:** the Balance Patch 1 post explicitly says “live on PC” and “coming to PlayStation 5 and Xbox Series shortly.” It does not state that either console rollout is complete. The page should mark PC as confirmed and PS5/Xbox as unconfirmed in this record. Do not infer current console availability from community posts or from the announcement's future-tense wording.
- **Version timing:** the official post gives a post date, not a universal build number or per-platform rollout timestamp. Avoid claiming one identical release timestamp across platforms.
- **Patch scope versus player outcome:** crash/performance fixes are release-note categories, not proof that every player's crash, save, or loading issue is resolved.
- **Future updates:** the developer says a bigger patch is in the works and mentions future extensions to Night Mode, Tarstones, PP Items, and more. No date, version number, or final feature list is confirmed. Use “planned,” not “scheduled.”
- **Tarstone values:** only the named buff/status wording is official in the checked note; exact effect numbers are unknown here.
- **Community reports:** social posts mention console availability and individual bugs, but they are not required to support the page's core claims and should not override the official platform-status wording without a first-party receipt.

## Page implementation notes

- Preserve `slug: mortal-shell-ii/balance-patch-1`, `category: combat-exploration`, existing route, related links, sidebar placement, and answer-first opening.
- Update `lastUpdated` to `2026-08-24`.
- Add a short “Update tracker” section near the top, with dated Hotfix 2.0 and Balance Patch 1 entries.
- Replace “PS5 players have since reported receiving the patch” with the stricter official-source boundary described above.
- Add official Steam links for both release-note posts near the tracker/source note.
- Keep “needs-verification” while console rollout remains unconfirmed in this evidence record.
- Retain existing practical sections and internal links when they remain accurate; do not expand into a new item such as a Tarstones database or a separate crash guide.

## Image decision

No image added. A patch tracker is made more useful by a readable change table and source links; a generic game screenshot would not prove a patch change. No source image was collected, altered, or removed, and there are no new image credits to preserve.

## Sources and URLs

- Steam / Cold Symmetry developer post, **Balance Patch 1 - Patch Notes** (posted 2026-08-20): https://steamcommunity.com/app/2584270/discussions/0/582805931178489108/
- Steam / Mortal Shell II developer post, **Hotfix 2.0 - Release Notes** (posted 2026-08-18): https://steamcommunity.com/app/2584270/discussions/0/582805931178328609/
