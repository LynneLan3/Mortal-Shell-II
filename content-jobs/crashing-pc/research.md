# Sep. 5 current-status refresh — APIMart page-package brief

- Slug: `mortal-shell-ii/crashing-pc`
- Canonical URL: `/mortal-shell-ii/crashing-pc/`
- Action: UPDATE_PAGE, APPEND_ONLY freshness refresh at the top; preserve all existing historical Hotfix / Week 1 material and the exact Keyboard Bindings procedure.

## OFFICIAL CONFIRMED

- The Sep. 5 official update is live on PC, PS5, and Xbox.
- Its stability wording is only: “Several crash fixes and optimisations.”
- The update does not claim all crashes, freezes, or performance issues are resolved.
- Week 1 official crash/stability facts remain valid: fixes involving enemy spawning, audio, attribute changes, interface loading, save loading, shutdown; removal of some graphics-driver-crash-related settings; and added crash diagnostics / diagnostic context.
- Week 1 official performance facts remain valid: shader-compilation hitch work; tar gate cleansing frame-rate-drop work; dungeon lighting/effects/final-boss optimisations; reduced background work for weapons, hit detection, and movement; frame-generation rework; and optional Increased Geometry Budgets, default OFF.
- The existing developer Keyboard Bindings workaround remains limited to that specific settings-menu crash.

## COMMUNITY REPORTED

- After Sep. 5, some players still report performance degradation, FPS drops, stuttering/freezing, and performance worsening during play.
- A Steam performance-degradation/crashes discussion has about 31 replies and includes a report of FPS starting normally, gradually dropping after several minutes, then possibly freezing or crashing.
- Some players report new load/save problems after the update, including a save that would not load.
- One player reported FPS falling from about 50–60 to 15–20 after Sep. 5 and recovering after updating the NVIDIA App. This is not an official or universal fix; include only as a brief community report if the existing community section can hold it.
- Do not label these symptoms as a memory leak, VRAM leak, shader leak, driver fault, or confirmed patch regression.

## DO NOT CLAIM

- Do not say crashes are fixed, save-loading crashes are fixed, performance problems are fixed, or Sep. 5 caused confirmed save corruption.
- Do not create or link `/load-save-fix/`, `/stuttering/`, `/fps-drop/`, `/performance/`, or `/crashes-after-update/`.
- Do not add unverified save-recovery steps.

## Required current-status refresh

- Add or replace the top current-status block with `## Current Status After the Sep. 5 Update`.
- Core answer: Sep. 5 includes additional crash fixes and optimisations; it does not claim all crashes/freezes/performance issues are resolved; players still report crashes and performance degradation; distinguish crash, freeze, FPS degradation, and load/save failure before troubleshooting.
- Add a compact Problem Router after Current Status:
  - normal crashes → existing crash troubleshooting;
  - freezes/FPS worsening → current community-reported symptom and existing performance troubleshooting;
  - loading-save crashes → Week 1 did address save-loading crash cases, but not every case;
  - save will not load after Sep. 5 → some player reports, insufficient evidence for a confirmed widespread patch bug, no speculative recovery steps.
- Link the Sep. 5 update page `/mortal-shell-ii/updates/september-5-update/` and `/mortal-shell-ii/updates/`.
- Keep existing NVIDIA/AMD sections and evidence labels; developer shader-cache advice remains a potential fix, not guaranteed.
- Keep the existing canonical URL and no new media.

---

# Prior research retained

Update the existing `/mortal-shell-ii/crashing-pc/` guide for the post-Balance-Patch-1 PC state. Give a fast decision path, separate official/developer-confirmed information from player-reported workarounds, and do not create another crash page.

# Confirmed facts

- Cold Symmetry's official Hotfix 2.0 notes list miscellaneous crash, stability, and performance improvements; the Slayer Seal beacon-menu UI lock fix; and the riposte enemy-weapon-steal fix.
- Balance Patch 1 separately lists miscellaneous crash fixes, bug fixes, and performance updates. It does not claim that every crash is resolved.
- The current page's official Keyboard Bindings workaround is the authoritative temporary procedure for that specific settings-menu crash. Preserve the exact two-file procedure already documented there and do not broaden it to unrelated crashes.
- Current player reports include `EXCEPTION_ACCESS_VIOLATION`, loading-screen / save-load crashes, crashes after death or respawn, fast-travel / beacon-loading crashes, and instability associated by some players with Frame Generation.
- Disabling Frame Generation is a player-reported low-risk test, not a universal or developer-confirmed fix. If used, keep the separate Resolution Upscaler setting distinction.
- Do not label shader-cache deletion as official unless a first-party source explicitly supports it; omit it if not verified.

# Route / procedure

1. Update the Steam build, restart Steam, relaunch the game, and retest the exact trigger.
2. If the crash occurs when opening Keyboard Bindings, use only the current developer workaround on the page.
3. If the crash occurs on loading, after death, on fast travel, or at a Beacon, test Frame Generation off and retest the same transition.
4. Verify files and graphics drivers only as ordinary next checks; do not promise that either fixes a game-side crash.
5. Record the trigger, GPU / driver, whether Frame Generation was enabled, and whether the whole PC locked up before filing a bug report.

# Practical player insights

- Start with the patch gate and symptom match; do not delete settings or caches blindly.
- A crash that persists after the official patches and the low-risk Frame Generation test may still be game-side. Report the exact transition instead of assuming a hardware fault.
- Keep `EXCEPTION_ACCESS_VIOLATION` as a symptom label, not a diagnosis.

# Conflicting or uncertain facts

- Hotfix 2.0's broad “misc. crash fixes” line is not a per-symptom fix list.
- Player reports are useful for symptoms and workarounds but do not prove Frame Generation is the root cause.
- Platform rollout and later hotfix status can differ; this page is a current PC guide and must not claim a future Hotfix 2.1 timeline.

# Internal-link opportunities

- `/mortal-shell-ii/balance-patch-1/` for the current patch context.
- `/mortal-shell-ii/system-requirements/` for the PC baseline.
- Keep the existing bug-report links and do not add a new troubleshooting hub.

# Image opportunities

- No new image is needed for a troubleshooting page.
- Preserve existing warning / settings imagery only if it already has provenance and helps the Keyboard Bindings procedure.

# Sources

- XBIGY, [Hotfix 2.0 - Release Notes](https://steamcommunity.com/app/2584270/discussions/0/582805931178328609/) — official crash/stability/performance and named UI/riposte fixes, posted 2026-08-18.
- Cold Symmetry, [Balance Patch 1 - Patch Notes](https://steamcommunity.com/app/2584270/discussions/0/582805931178489108/) — official miscellaneous crash/performance update and patch context, posted 2026-08-20.
- Cold Symmetry, [New Update Out Now](https://steamcommunity.com/app/2584270/discussions/0/581681621355213340/) — official Sep. 5, 2026 update; the Crashes and Stability wording is “Several crash fixes and optimisations.”
- Existing local crashing-PC page and its developer workaround / bug-report source links — exact Keyboard Bindings procedure and current player-report boundaries.
