# Target intent

Update the existing `/mortal-shell-ii/beta-progress-carry-over/` page for the post-launch query cluster around beta save transfer, beta rewards, Prologue skip eligibility, and what resets. Do not create a second beta, rewards, or Flayed Harbinger page.

- The full game is released as of 2026-08-20. Replace pre-launch framing with launch-era answers; do not say to prepare for launch or wait for release.

# Confirmed facts

- The official developer-marked Steam answer says the Open Beta save data does **not** transfer to the full game.
- The same developer answer says playing the Open Beta for **more than 30 minutes** automatically unlocks The Flayed Harbinger, an exclusive cosmetic reward claimable in the full game at launch, and says the player will also be able to skip the Prologue.
- The official PlayStation Open Beta listing says players who progress **beyond Marrow Keep** unlock the option to skip the Prologue in the full game.
- That PlayStation listing says beta save progress does not carry over in full and names **currency, weapons, Shells, collectibles, and other items discovered during the Open Beta** as resetting at launch.
- The existing page's direct distinction is correct: beta benefits are launch entitlements/unlocks, not a restored beta save.
- The Steam-library re-add / partial-download steps are troubleshooting reports for Steam only. They are not evidence of save transfer and must not be presented as console instructions.

# Post-launch Steam reward detection troubleshooting (required addition)

Add a conspicuous section titled exactly `Steam reward not showing?` after the existing benefit-securing guidance, or in the nearest equivalent position. Write it for ordinary players, not as a research note. The section must give this direct sequence:

The exact visible heading in `articleMarkdown` must be `Steam reward not showing?` (including the question mark). Do not substitute a broader heading such as "Developer-confirmed Steam troubleshooting".

1. Confirm the same Steam account was used for the Open Beta.
2. Exit and relaunch the full game once.
3. Make sure Mortal Shell II Open Beta is still added to the Steam Library.
4. Relaunch the full game again.
5. If the unlock still does not register, developer guidance says to start reinstalling the Beta, pause the download at about 7%, then relaunch the full game.
6. Once the rewards appear in the full game, the Beta can be uninstalled.

Label this as developer-confirmed Steam troubleshooting. The developer's pinned Known Issues also lists keeping the Beta in the Library or partially installed as a workaround. Do not call any Library or partial-install state a save transfer, and state that it does not restore Beta save data, weapons, Shells, currency, collectibles, or other Beta progress.

The generated integration block must also replace the old misleading Common Mistakes point with two separate player-facing points: (a) uninstalling or reinstalling the Beta does **not** change whether the player originally qualified for the rewards; (b) Steam developer reports confirm that the Beta's Library / install state can affect whether the retail game currently detects and grants the entitlement. Keep these as separate concepts and do not say reinstalling changes eligibility.

The page must preserve the first-party eligibility conflict instead of resolving it: storefront copy says progress beyond Marrow Keep unlocks the optional Prologue skip, while later Steam developer replies say 30+ minutes in the Open Beta qualifies for The Flayed Harbinger and the Prologue skip. Present both source claims with their source labels; do not make them sound like one identical universal threshold.

## Integration boundary

Return a valid page-package JSON, but `articleMarkdown` must contain only integration-ready replacement/addition blocks for this existing page. Do not rewrite the page's title, description, existing carry-over explanation, or unrelated sections. Keep the existing title and description unchanged at integration time. A short Quick Answer addition is allowed only if it does not displace the existing save-transfer and benefit answer.

# Beta save vs Beta rewards distinction

Make this distinction visible immediately:

- **Beta save/progress:** does not transfer. Do not promise story progress, levels, inventory, weapons, Shells, currency, collectibles, map state, or dungeon state from the Beta save.
- **Beta-player benefits:** The Flayed Harbinger cosmetic and an optional Prologue skip are the documented benefits. These unlock in the full game but do not restore normal Beta progression.
- The phrase “select progress carries forward” in storefront copy refers to these bounded benefits, not a full save migration.

# Prologue skip rules

- Official PlayStation storefront copy ties eligibility to progressing beyond Marrow Keep during the Open Beta.
- The developer-marked Steam answer confirms that a qualifying Beta player can skip the Prologue but does not publish the exact menu label or button.
- Link `/mortal-shell-ii/skip-prologue/` for the decision, exact current guide boundaries, and confirmed Prologue trophy consequences.
- Do not claim that reaching Magdalena, completing every Beta objective, or keeping the Beta installed is universally required.

# Platform differences

- The developer threshold of more than 30 minutes is explicitly stated in a Steam developer reply; do not silently promote that number to a verified console requirement.
- The official PlayStation listing independently confirms the reward, Marrow Keep skip eligibility, and reset list. No checked first-party source establishes a different PS5/Xbox save-transfer rule.
- State conservatively that no platform-specific exception was verified. The Steam library visibility workaround applies only to Steam.

# What carries over

Only the documented launch benefits should appear in the carry-over answer:

| Benefit | Verified rule | Boundary |
| --- | --- | --- |
| The Flayed Harbinger | Steam developer reply: more than 30 minutes of Open Beta play automatically unlocks the cosmetic; PlayStation listing presents it as the Open Beta bonus | The numeric time threshold is not verified for consoles in the checked sources |
| Prologue skip | Progress beyond Marrow Keep unlocks an optional full-game skip in official PlayStation copy; developer Steam reply also confirms the skip benefit | It is an option, not a transferred Beta save or inventory |

# What does NOT carry over

The official PlayStation listing explicitly says these reset at launch: currency, weapons, Shells, collectibles, and other items discovered during the Open Beta. The developer Steam answer separately says save data does not transfer. Avoid extending the list into unverified levels, map completion, quests, or dungeon flags; say they are not confirmed as transferred rather than inventing a complete save schema.

# Conflicting or uncertain facts

- Storefront wording such as “select progress carrying forward” is broader than the developer's direct “save data will not transfer” clarification; use the developer clarification and bounded reward list.
- The Steam developer reply gives the >30-minute Flayed Harbinger threshold, while the PlayStation listing says only to play the Beta. Do not claim the exact number is console-confirmed.
- The exact Prologue-skip menu prompt and post-skip spawn details are not published in the checked first-party sources; defer to the dedicated Skip Prologue page for current practical guidance.
- GamesRadar's Steam-library workaround is secondary evidence and should remain clearly labeled as Steam-specific troubleshooting.
- The new Library / partial-download sequence is supported by post-launch Steam developer replies and the pinned Known Issues; it supersedes the old community-only label for this specific workaround. Keep GamesRadar as secondary context only if it is still useful.

# Internal-link opportunities

- `/mortal-shell-ii/skip-prologue/` — eligibility, decision, and what the skip bypasses.
- `/mortal-shell-ii/open-beta/` — what the preview contained.
- `/mortal-shell-ii/new-game-plus/` — prevent confusion between Beta → release and NG → NG+.
- `/mortal-shell-ii/ova/` — only if discussing the separate full-game progression boundary; do not turn this page into NG+ coverage.
- `/mortal-shell-ii/release-date/` — launch context, with past-tense wording because the full game is now released.

# Sources

- [Steam developer-marked answer: save transfer to full game](https://steamcommunity.com/app/2584270/discussions/0/418424007826605250/) — smithbodie [developer], “save data will not transfer,” more-than-30-minute Flayed Harbinger threshold, and Prologue skip; checked 2026-08-24.
- [Official PlayStation Open Beta listing](https://store.playstation.com/en-us/product/EP3495-PPSA38671_00-000000000000BETA) — Flayed Harbinger bonus, beyond-Marrow-Keep skip eligibility, and explicit reset list; checked 2026-08-24.
- [Official Steam Open Beta listing](https://store.steampowered.com/app/4711740/Mortal_Shell_II__Open_Beta/) — official product page retained for the Open Beta scope and current source URL; age gate limits direct text extraction.
- [GamesRadar: How to claim Mortal Shell 2 beta rewards](https://www.gamesradar.com/games/rpg/mortal-shell-2-beta-rewards-progress/) — secondary Steam-library workaround, beta reset examples, and post-launch skip context; checked 2026-08-24.
- Local [Skip Prologue](/mortal-shell-ii/skip-prologue/) and [Open Beta](/mortal-shell-ii/open-beta/) guides — current internal boundaries and links; do not copy their unresolved community claims as first-party facts.
