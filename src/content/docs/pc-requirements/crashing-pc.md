---
title: "Mortal Shell 2 Crashing on PC? Hotfix 2.0, Crash Fixes & Known Issues"
description: "Mortal Shell 2 Hotfix 2.0 crash, stability, and performance fixes are live. See what Hotfix 2.0 fixes, the Keyboard Bindings workaround, remaining crash reports, and how to report a bug."
category: pc-requirements
slug: mortal-shell-ii/crashing-pc
status: needs-verification
featured: true
quickAnswer: "Hotfix 3 (Sept 1, 2026, PC) fixed several targeted bugs but does not guarantee every crash, freeze, or performance issue is resolved. Confirm Steam has installed the Week 1 Update and Hotfix 3, follow official mod/engine.ini precautions if problems started after patching, then use the symptom-specific troubleshooting below."
related:
  - mortal-shell-ii/system-requirements
  - mortal-shell-ii/release-date
  - mortal-shell-ii/updates/week-1-update
  - mortal-shell-ii/updates/balance-patch-1
sidebar:
  label: PC Crashes & Hotfix 2.0
  order: 2
  badge: Launch
lastUpdated: 2026-09-02
---

## After Hotfix 3 — Current PC Status

**Hotfix 3** (Steam PC hotfix, **September 1, 2026**) is the latest PC hotfix after the [Week 1 Update](/mortal-shell-ii/updates/week-1-update/). Crashes, freezes, and performance issues may still persist for some players. The developer confirmed targeted fixes but did **not** claim to resolve every crash or performance report.

### What Hotfix 3 fixed (official)

- Devout / Pre-Order Shell Shades not appearing
- Opening world map while using FSR
- Citadel Annex giant-spider traversal issue
- Some enemies not reacting to the player
- Several collision issues
- Minibeacon lens flare / visual issues

### What Hotfix 3 did not confirm

- The developer did not state that Hotfix 3 fixed all crashes, freezes, or performance regressions.
- Community reports after Hotfix 3 still include stutter, 1% low drops, general performance degradation, and severe frame drops on some Steam Deck units.

### If the problem started after Week 1 or Hotfix 3

Follow these steps in order:

1. Confirm Steam installed the **Week 1 Update** and **Hotfix 3** (no pending download). Restart Steam, then relaunch.
2. Follow official Week 1 update precautions: **remove or disable mods** before updating, and ensure **`engine.ini` is not read-only** — the official note says a read-only `engine.ini` can affect frame generation.
3. Retest the exact trigger (loading crash, freeze, won't start, stutter after patch).
4. Match your symptom to the sections below (Keyboard Bindings, loading crashes, random gameplay crashes).
5. If the issue persists, file a bug report with GPU/driver details and whether Frame Generation was enabled.

**Current version:** [Updates hub](/mortal-shell-ii/updates/) · [Week 1 Update](/mortal-shell-ii/updates/week-1-update/) · [Week 1 crash notes](/mortal-shell-ii/updates/week-1-update/#e-performance-and-crashes)

## Current Week 1 crash status

The **Week 1 Update (August 29, 2026)** includes substantial crash and stability fixes across spawning, audio, attribute changes, UI loading, save loading, and shutdown. It also removes some settings implicated in graphics-driver crashes and adds crash diagnostics. **Mortal Shell II crashing is not completely fixed by this note.** If you are still crashing, first confirm Steam has installed the latest update, restart Steam, and retest the same action before using the troubleshooting below.

**Current version:** [Week 1 Update crash status](/mortal-shell-ii/updates/week-1-update/#e-performance-and-crashes) · [Updates hub](/mortal-shell-ii/updates/)

## Is Mortal Shell 2 crashing after launch?

**Some PC players are still reporting crashes during the launch window**, even after **Hotfix 2.0** (released **August 19, 2026**). Cold Symmetry told press before launch that more crash work shipped for release, but crashes were not promised to be fully solved. If the game closes, freezes, or locks up, start with the Hotfix steps below. If it crashes specifically when you open **Keyboard Bindings**, use the developer workaround in that section.

See [PC system requirements](/mortal-shell-ii/system-requirements/) for hardware context and [release date / Advanced Access status](/mortal-shell-ii/release-date/) for the current launch build.

## What to do first when Mortal Shell 2 crashes on PC

Use this short route before trying broad or risky system changes:

1. **Update the game, restart Steam, and relaunch.** Confirm Steam has no pending Mortal Shell II download, then retest the exact action that caused the crash.
2. **Match the symptom to the fix below.** Use the Keyboard Bindings workaround only for that settings-menu crash. For loading, death, respawn, fast-travel, or beacon-loading crashes, test Frame Generation off.
3. **If the crash is random or happens in a menu, dialogue, tarstone screen, or cutscene,** record the trigger and your GPU/driver details before reporting it. These reports do not establish a root cause by themselves.
4. **If the problem continues,** verify Steam files, check the graphics driver, and file a report with the exact scenario and whether Frame Generation was enabled.

The fixes below separate developer-confirmed guidance from player-reported tests. Hotfix 2.0 and the Keyboard Bindings file reset are official/developer-sourced; Frame Generation off is a community-reported test rather than a confirmed fix.

## Official / developer-confirmed fixes or recommendations

### What does Hotfix 2.0 fix?

**Hotfix 2.0 — Release Notes** was posted by developer **XBIGY** on **August 19, 2026** on Steam.

Official wording:

> **Bugfixes:**
> - Misc. Crash Fixes, Stability, and Performance Improvements.
> - Equipping **Slayer Seal** from the beacon menu no longer causes UI to lock up.
> - Fix for player "stealing" **enemy weapons** during ripostes.

That gives three official, confirmed Hotfix 2.0 items:

1. **Misc crash fixes, stability, and performance improvements** — the broad stability patch line. Cold Symmetry does not publish a per-crash list for this item.
2. **Slayer Seal beacon-menu UI lock fix** — equipping the Slayer Seal from a **beacon menu** no longer locks the UI. (This is a **different** issue from the Keyboard Bindings settings-menu crash below.)
3. **Riposte enemy-weapon steal fix** — players could take / "steal" an enemy's weapon during a riposte; this is fixed.

Hotfix 2.0 **does not** name the **Keyboard Bindings** settings-menu crash or every loading-screen crash. The two named gameplay fixes above are what the studio has officially confirmed for Hotfix 2.0.

## Hotfix 1.0 (earlier patch, still relevant)

On **August 17, 2026 at 4:35 PM PDT**, developer **XBIGY** posted [**Hotfix 1.0 — Crashes and Optimization fixes**](https://steamcommunity.com/app/2584270/discussions/0/418424310691158574/) on Steam. Hotfix 2.0 is the later patch; if your build already shows no pending Steam update, you are on the newest hotfix, not an older one.

**Hotfix 1.0 is not the same as the pre-launch day-one patch.** Press-supplied notes ([GamerFuzion](https://www.gamerfuzion.com/mortal-shell-2-day-one-patch-notes/), August 16) describe earlier crash fixes plus **frame generation / FSR timing fixes**. Use the Hotfix threads if crashes started after August 17.

## How to make sure Hotfix 2.0 is installed

1. Open **Steam**.
2. Go to **Library → Mortal Shell II → Properties → Updates** and confirm automatic updates are enabled.
3. If Steam shows a pending download, let it finish.
4. **Restart Steam**, then launch the game once to confirm the build updated.
5. Retest the exact situation that crashed before (death loading, fast travel, a specific boss, and so on).

Steam does not expose a simple public build number in the Hotfix posts, so the practical check is: **no pending update + a clean relaunch**.

## Crash scenarios and the next fix

| Issue | Current status | What to try |
| --- | --- | --- |
| General launch crashes | Hotfix 2.0 released on Steam (Aug 19); Hotfix 1.0 earlier | Update game, restart Steam, then retest |
| Slayer Seal beacon-menu UI lock | **Fixed in Hotfix 2.0** (official) | Update to Hotfix 2.0 and retest equipping the seal |
| Riposte enemy-weapon steal | **Fixed in Hotfix 2.0** (official) | Update to Hotfix 2.0 and retest riposte |
| Keyboard Bindings menu crash | Developer acknowledged; not named in Hotfix 2.0 | Official temporary settings-file workaround |
| Loading, death, respawn, fast travel, or beacon-loading crash | Still player-reported after Hotfix 2.0 | Update, then test with Frame Generation off |
| Random gameplay, dialogue, menu, tarstone, or cutscene crash | Still player-reported after Hotfix 2.0 | Capture the trigger and file a bug report |
| Lost Gloom after a crash | Limited player reports; no official recovery | Spend Gloom before risky fights; report if reproducible |

This table reflects **launch-window player reports and official developer posts**. Only the Slayer Seal beacon-menu fix, the riposte fix, and the Keyboard Bindings row are named Cold Symmetry issues; the other rows are not a full known-issues list.

## Mortal Shell 2 crashes when opening Keyboard Bindings

**Short answer:** Opening **Keyboard Bindings** in Settings can crash the PC build. Cold Symmetry has acknowledged multiple reports and is working on a permanent fix. Until that lands, the studio published an **official temporary workaround**: delete two named settings files — not your save files.

### What happens?

On **August 17, 2026 at 9:32 AM PDT**, developer **XBIGY** posted [**Crash on keyboards binding menu (Fix Instructions)**](https://steamcommunity.com/app/2584270/discussions/0/418424310691125754/) on Steam.

Official wording: the team has received **several reports** of crashes when opening the Keyboard Bindings menu in Settings; they are **currently working on a fix**; and players who hit the issue can use the steps below in the meantime.

This is a **developer-acknowledged** PC issue. It is not the same as the still-unconfirmed respawn / loading crashes, and it is not the community-reported Frame Generation workaround.

Hotfix 1.0 shipped later that same day and said it should address several crashes, but that post **did not name Keyboard Bindings**. Hotfix 2.0 (August 19, 2026) also does **not** name Keyboard Bindings in its release notes. The dedicated workaround thread has not been updated to mark the crash as fixed. As of August 20, 2026, the settings-file workaround is still the current official guidance.

### Official temporary workaround

This is **not** a guaranteed fix, **not** a Hotfix 1.0 patch-note item, and **not** a community guess. Follow only the two files Cold Symmetry named.

**Only remove the exact two settings files named in the official workaround.** Do not delete any other `.sav` files in that folder, and do not delete the whole SaveGames directory.

1. Close Mortal Shell II completely so the files are not in use.
2. Open Windows Run (`Win + R`).
3. Paste: `%LOCALAPPDATA%\MortalShell2\Saved\SaveGames\`
   That is the same folder the developer listed as `\Users\[Your Username]\AppData\Local\MortalShell2\Saved\SaveGames`.
4. Find **only**:
   - `EnhancedInputUserSettings.sav`
   - `SpartaGameSettings.sav`
5. Optional safety step: copy those two files somewhere else before deleting them if you want an easy rollback.
6. Delete **only** those two files.
7. Launch Mortal Shell II again.
8. Test Keyboard Bindings.

These are the two files specifically named by the developer workaround. Cold Symmetry did not publish a file-by-file explanation of what each one stores, so do not treat this as a full settings reset or as deleting your save. If problems continue, the developer asked players to reply on that Steam thread.

Cold Symmetry is working on a proper fix, so this section should be revisited when the next hotfix lands.

## Player-reported workarounds

### Why does Mortal Shell 2 crash on loading, after death, or during fast travel?

**Confirmed observation:** multiple Advanced Access players report crashes on **loading screens** — after death, during map changes, fast travel, and beacon loading.

From the Hotfix threads and Bug Reports (August 17–20, 2026): crashes on **every loading screen**, an **infinite loading screen after changing maps**, and **freezes during beacon loading**.

Cold Symmetry has **not** named a dedicated respawn bug. Treat death-to-beacon crashes as loading-screen instability: update, restart, retest.

### Does disabling Frame Generation fix the respawn crash?

**Community-reported workaround only.** Cold Symmetry has **not** confirmed this.

Launch-window Hotfix replies tie crashes to **DLSS Frame Generation** (“Seems to be when DLSS Frame gen is turned on”; “with frame gen the game crash again”). Others suggested testing without DLSS after post-hotfix crashes. Worth a **low-risk test**, not a guarantee.
Launch-window PC coverage confirms **Frame Generation** is its own graphics option, separate from **Resolution Upscaler** (FSR) ([Destructoid](https://www.destructoid.com/best-mortal-shell-2-graphics-settings-for-no-lag-and-max-fps/), August 17). In PC **graphics settings**, set **Frame Generation → Off**. Leave upscaler settings alone unless you are testing them separately.

Retest the same transition after changing the setting: launch, death-to-respawn, map change, fast travel, or beacon loading. If the crash still occurs with Frame Generation off, record the exact transition rather than treating the test as proof of a different cause.

### Why does Mortal Shell 2 crash randomly in gameplay or menus?

Players still report crashes during dialogue, menus or tarstone screens (some with full PC lockups), after many stable hours, and during cutscenes. These are **symptoms**, not confirmed root causes — do not assume VRAM, DX12, drivers, or memory leaks without evidence for your PC.

For this pattern, first confirm the current Steam build and reproduce once with the same sequence. Note whether it happens in gameplay, dialogue, a menu, a tarstone screen, or a cutscene; whether the whole PC locks up; and whether Frame Generation was enabled. Use those details in the bug report instead of applying unsupported registry edits, DLL downloads, or cache deletion.

## Can a crash make you lose Gloom?

**Player reports only.** Gloom normally stays at your death spot until you recover it or die again; a crash can interrupt that state.

[GamingTrend’s review in progress](https://gamingtrend.com/reviews/mortal-shell-ii-review-in-progress/) (PS5 review build) reported **permanent Gloom loss after a death**. Launch Steam threads checked August 18 focus more on stability than crash-related Gloom loss. **No confirmed official recovery method** exists — spend Gloom before risky fights, and file a bug report if it happens.

## Mortal Shell 2 crash troubleshooting checklist

1. **Patch gate:** install Hotfix 2.0 / the latest Steam build, restart Steam, and relaunch.
2. **Scenario gate:** reproduce the exact crash once. For Keyboard Bindings, use the developer workaround above; for loading, death, respawn, fast travel, or beacon loading, test Frame Generation off.
3. **Standard checks:** verify Steam game files and update the graphics driver. These are general troubleshooting steps, not proven fixes for a specific Mortal Shell II crash.
4. **Evidence gate:** record the trigger, location or menu, whether the PC fully locked up, your GPU and driver, and whether Frame Generation was enabled.
5. **Report:** use the [Bug Reports subforum](https://steamcommunity.com/app/2584270/discussions/3/) and follow the pinned [How to Report a Bug!](https://steamcommunity.com/app/2584270/discussions/0/418424310691110842/) post. If a Hotfix 2.0 issue remains broken, also reply on the [Hotfix 2.0 / Hotfix 1.0 thread](https://steamcommunity.com/app/2584270/discussions/0/418424310691158574/).

This page **does not** recommend Open Beta workarounds such as `-dx11`, registry edits, DLL downloads, DDU, disabling security software, or deleting AppData/shader caches unless Cold Symmetry documents them for the **current launch build**.

## What to do if the game still crashes after Hotfix 2.0

File a [bug report](https://steamcommunity.com/app/2584270/discussions/3/) with when the crash happens, your GPU and driver, and whether Frame Generation was enabled. Reply on the [Hotfix threads](https://steamcommunity.com/app/2584270/discussions/0/418424310691158574/) so Cold Symmetry can track remaining cases. There is no public Hotfix 2.1 timeline.

## FAQ

### Did Hotfix 3 fix Mortal Shell II crashes?

Hotfix 3 fixed the specific issues listed in the official notes above, but the developer did **not** claim it fixed all crashes. Community reports of crashes and performance issues continue.

### Why is Mortal Shell II freezing after the latest patch?

The developer did not confirm a universal freeze fix. If freezing began after the Week 1 Update or Hotfix 3, confirm your build is updated, remove/disable mods, ensure `engine.ini` is not read-only, restart Steam, retest, then file a bug report with system details.

### Why won't Mortal Shell II start after updating?

Start failures can be tied to mods or a read-only `engine.ini` among other factors. Follow the official precautions above, restart Steam to confirm the update applied, then retest.

### Is the Week 1 Update live on PS5 and Xbox?

**PC:** live. **PS5:** available (rolled out September 1, 2026). **Xbox:** officially delayed per the last confirmed status — checked September 2, 2026. See the [Week 1 Update guide](/mortal-shell-ii/updates/week-1-update/#platform-availability--current-rollout).

### Is Mortal Shell 2 crashing on PC?

Some players yes, especially on loading screens. Hotfix 2.0 (August 19, 2026) ships crash, stability, and performance fixes but does not guarantee stability.

### Is there a Mortal Shell 2 crash hotfix?

Yes — **Hotfix 2.0** on Steam, posted August 19, 2026. Hotfix 1.0 shipped earlier on August 17.

### What does Hotfix 2.0 fix?

Misc crash fixes, stability and performance improvements; the Slayer Seal beacon-menu UI lock; and players stealing enemy weapons during ripostes.

### Does Hotfix 2.0 fix the Slayer Seal beacon menu?

Yes. Official release notes: "Equipping Slayer Seal from the beacon menu no longer causes UI to lock up."

### Does Hotfix 2.0 fix the riposte weapon steal?

Yes. Official release notes include a fix for player "stealing" enemy weapons during ripostes.

### How do I install Hotfix 2.0?

Let Steam update, restart Steam, relaunch. No manual download.

### Why does Mortal Shell 2 crash when I respawn?

No respawn-specific bug is confirmed. Loading-screen crashes can hit the death-to-beacon flow. Update first, then test Frame Generation off.

### Why does Mortal Shell 2 crash when I open Keyboard Bindings?

Cold Symmetry has received several reports of a PC crash when opening the Keyboard Bindings menu in Settings. Neither Hotfix 1.0 nor Hotfix 2.0 names this issue in its release notes.

### How do I fix the Mortal Shell 2 keybind menu crash?

Use the **official temporary workaround**: close the game, then delete only `EnhancedInputUserSettings.sav` and `SpartaGameSettings.sav` from `%LOCALAPPDATA%\MortalShell2\Saved\SaveGames\`. Do not delete other `.sav` files. Relaunch and test the menu.

### Is the Keyboard Bindings crash permanently fixed?

No permanent fix has been announced or released as of August 20, 2026. Neither Hotfix 1.0 nor Hotfix 2.0 named this issue, and the developer workaround thread is still the current official guidance.

### Should I turn off Frame Generation?

Try it as a **community-reported workaround** if loading crashes persist. Not an official fix.

### Does Hotfix 2.0 fix the respawn crash?

Unknown. Official wording is misc crash fixes plus stability and performance improvements; loading crashes were still reported after the patch.

### Can I recover Gloom lost after a crash?

No confirmed official method.

### Why does Mortal Shell 2 keep crashing?

Launch-window players most often report repeated crashes on loading screens, fast travel, and beacon loading. Start by confirming Hotfix 2.0 is installed, restart Steam, retest the exact crash, then try Frame Generation off if loading crashes persist. If it keeps crashing, file a bug report with your GPU, driver, and when it happens.

### Where can I report Mortal Shell 2 crashes?

[Bug Reports subforum](https://steamcommunity.com/app/2584270/discussions/3/).

## Sources

- [Mortal Shell II — The Week 1 Update is Available Now](https://store.steampowered.com/news/app/2584270/view/690892955941077484) — official August 29, 2026 crash, stability, graphics-driver settings, and diagnostics changes.
- [Hotfix 2.0 — Release Notes (Steam Community)](https://steamcommunity.com/app/2584270) — official release notes: misc crash fixes, stability and performance improvements; Slayer Seal beacon-menu UI lock fix; riposte enemy-weapon steal fix; posted August 19, 2026
- [Crash on keyboards binding menu (Fix Instructions)](https://steamcommunity.com/app/2584270/discussions/0/418424310691125754/) — Cold Symmetry developer post by XBIGY, August 17, 2026, 9:32 AM PDT
- [Hotfix 1.0 — Crashes and Optimization fixes](https://steamcommunity.com/app/2584270/discussions/0/418424310691158574/) — Cold Symmetry developer post, August 17, 2026
- [How to Report a Bug!](https://steamcommunity.com/app/2584270/discussions/0/418424310691110842/) — Cold Symmetry pinned post, August 17, 2026
- [Crashes and freezes (Unreal Engine)](https://steamcommunity.com/app/2584270/discussions/3/418424310691170780/) — launch Bug Report mentioning beacon loading
- [Mortal Shell II day-one patch notes (press-supplied)](https://www.gamerfuzion.com/mortal-shell-2-day-one-patch-notes/) — August 16, 2026; separate from Hotfix 1.0 / Hotfix 2.0
- [Mortal Shell II dev Q&A on crashes](https://www.gamerfuzion.com/mortal-shell-2-dev-qa-difficulty-slayer-seal/) — pre-launch developer comments
- [Destructoid graphics settings guide](https://www.destructoid.com/best-mortal-shell-2-graphics-settings-for-no-lag-and-max-fps/) — confirms Frame Generation as a separate PC option, August 17, 2026
- [GamingTrend review in progress](https://gamingtrend.com/reviews/mortal-shell-ii-review-in-progress/) — PS5 review-build Gloom loss report
