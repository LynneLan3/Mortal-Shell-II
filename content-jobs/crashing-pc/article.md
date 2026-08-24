Short answer — what to do first
1) Update to the latest Steam build, restart Steam, relaunch the game, and immediately retest the exact transition that crashed (see numbered route below).
2) If the crash happens when opening Keyboard Bindings, use only the developer-provided two-file procedure already on this page (do not replace or broaden it).
3) If the crash happens while loading, after death/respawn, during fast travel, or at a Beacon, try disabling Frame Generation as a low-risk test and retest the exact transition. If none of the above helps, collect the data listed below and file a bug report using the existing bug-report link on this page.

Official / developer-confirmed items (what is known)
- Hotfix 2.0 release notes (official) list miscellaneous crash, stability, and performance improvements; the Slayer Seal beacon-menu UI lock fix; and a riposte enemy-weapon-steal fix. Source: Hotfix 2.0 notes.
- Balance Patch 1 (official) lists miscellaneous crash fixes, bug fixes, and performance updates. It does not claim every crash is resolved. Source: Balance Patch 1 notes.
- The current Keyboard Bindings workaround on this page (a two-file procedure) is the authoritative temporary developer workaround for that specific settings-menu crash and must be used as documented here.

Player-reported symptoms and (unconfirmed) workarounds
- Player reports include: EXCEPTION_ACCESS_VIOLATION messages, loading-screen/save-load crashes, crashes after death/respawn, fast-travel / Beacon-loading crashes, and some players reporting instability they associate with Frame Generation. These are player reports, not developer confirmations.
- Disabling Frame Generation: reported by players as a low-risk test that in some cases changed crash behaviour. This is a player-reported troubleshooting step, not a confirmed universal fix. If you test it, keep Resolution Upscaler settings distinct from Frame Generation when you change options.

Fast decision path — numbered route you should follow (do each step and retest the same trigger)
1. Update Steam and the game
   1. Update the Steam build and the game to the latest available client/build.
   2. Restart the Steam client, relaunch Mortal Shell II, and immediately retest the exact action/transition that triggered the crash.
2. Keyboard Bindings crash
   1. If the crash occurs when opening Keyboard Bindings, use only the developer-provided two-file procedure already documented on this page. Do not substitute other methods or broaden that workaround to other crashes.
3. Loading / death / fast travel / Beacon crashes
   1. If the crash occurs on loading, after death/respawn, during fast travel, or when loading a Beacon, disable Frame Generation (as a test), then retest the same transition.
   2. If you change graphics options, ensure you record whether Resolution Upscaler and Frame Generation were on or off — they are separate settings.
4. Ordinary next checks (optional, do them after the above tests)
   1. Verify local game files (Steam “Verify integrity of game files”) and check graphics drivers. These are routine checks but are not guaranteed to fix a game-side crash.
5. Prepare a bug report if the crash persists
   1. Record the exact trigger/transition that causes the crash.
   2. Note GPU model and driver version.
   3. Note whether Frame Generation was enabled when the crash occurred.
   4. Note whether the crash froze the whole PC or only the game process.
   5. Submit those details using the existing bug-report link already present on this page.

Practical player insights and cautions (what players should keep in mind)
- Start with the patch gate and symptom match: confirm you are on the current build and reproduce the same trigger before changing other files or settings.
- Do not delete settings files, caches, shaders, or other data blindly — the guide’s steps focus on low-risk checks first.
- Treat EXCEPTION_ACCESS_VIOLATION as a symptom label, not a diagnosis of root cause.
- A crash that persists after official patches and the low-risk Frame Generation test may still be a game-side issue — record and report the exact transition rather than assume a hardware fault.

Common mistakes
- Skipping the initial update/restart step and testing on an out-of-date build.
- Applying the Keyboard Bindings two-file workaround to unrelated crashes (the two-file procedure only applies to that specific settings-menu crash).
- Deleting configuration or cache files without first reproducing the crash on the updated build.
- Treating a player-reported workaround (for example, turning Frame Generation off) as a definitive fix for all crash types.
- Interpreting an EXCEPTION_ACCESS_VIOLATION message as a final diagnosis instead of a symptom to report.

What happens next (if the crash remains after these steps)
- If crashes persist after Hotfix 2.0 / Balance Patch 1 and after the low-risk Frame Generation test, the issue may be game-side. File a bug report with the recorded trigger and system details so developers can investigate.
- Hotfix 2.0 and Balance Patch 1 both list miscellaneous crash fixes but do not promise every crash is resolved; future fixes may follow. This page covers the current PC state and does not claim later hotfix timing or content.
- Use the bug-report link already on this page when filing reports; include the exact transition, logs or screenshots if available, GPU/driver, Frame Generation state, and whether the whole PC locked up.

Internal links and sources
- See Balance Patch 1 notes for the current patch context: /mortal-shell-ii/balance-patch-1/
- For PC baseline requirements, see: /mortal-shell-ii/system-requirements/
- Official patch sources used for this update:
  - Hotfix 2.0 – Release Notes (official): https://steamcommunity.com/app/2584270/discussions/0/582805931178328609/
  - Balance Patch 1 – Patch Notes (official): https://steamcommunity.com/app/2584270/discussions/0/582805931178489108/

Notes about things deliberately excluded or uncertain
- Do not treat the Hotfix 2.0 “misc. crash fixes” line as a per-symptom guarantee — it’s a broad statement from the developer.
- Player reports linking Frame Generation to crashes are useful symptom data but do not prove causation.
- Shader-cache deletion or similar cache manipulations are not listed here as an official fix; omit such steps unless a first‑party source explicitly recommends them.
