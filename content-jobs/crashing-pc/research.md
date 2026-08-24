# Target intent

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
- Existing local crashing-PC page and its developer workaround / bug-report source links — exact Keyboard Bindings procedure and current player-report boundaries.
