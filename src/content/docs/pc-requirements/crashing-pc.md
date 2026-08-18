---
title: "Mortal Shell 2 Crashing on PC? Hotfix 1.0, Respawn Crash & Fixes"
description: "Mortal Shell 2 Hotfix 1.0 addresses several launch crashes. See what the patch fixes, current respawn crash reports, the Frame Generation workaround, and what to try next."
category: pc-requirements
slug: mortal-shell-ii/crashing-pc
status: needs-verification
featured: true
quickAnswer: "Hotfix 1.0 is live on Steam’s default branch. Update Mortal Shell II, restart Steam, and retest your crash. Cold Symmetry says the patch should address several launch crashes, but it has not claimed all crashes are fixed or published a full issue-by-issue list."
related:
  - mortal-shell-ii/system-requirements
  - mortal-shell-ii/release-date
sidebar:
  label: PC Crashes & Hotfix 1.0
  order: 2
  badge: Launch
lastUpdated: 2026-08-18
---

## Is Mortal Shell 2 crashing after launch?

**Yes — some PC players are still reporting crashes during the August 17–18 Advanced Access window**, even after **Hotfix 1.0**.

Cold Symmetry told press before launch that more crash work shipped for release, but crashes were not promised to be fully solved. If the game closes, freezes, or locks up, start with the Hotfix steps below.

See [PC system requirements](/mortal-shell-ii/system-requirements/) for hardware context and [release date / Advanced Access status](/mortal-shell-ii/release-date/) for the current launch build.

## What does Hotfix 1.0 fix?

On **August 17, 2026 at 4:35 PM PDT**, developer **XBIGY** posted [**Hotfix 1.0 — Crashes and Optimization fixes**](https://steamcommunity.com/app/2584270/discussions/0/418424310691158574/) on Steam.

Official wording:

> Hey all, for any players experiencing crashes, we've just pushed a hotfix to the game's **default branch**. This should address **several of the crashes and other issues reported since launch**. Please make sure your game is fully updated before jumping back in. Please reply here if you have any stability issues when playing the game.

**Cold Symmetry has not published a full issue-by-issue list for Hotfix 1.0 yet.** The post does not claim all crashes are fixed, and replies still report crashes during exploration, menus, fast travel, and loading screens.

**Hotfix 1.0 is not the same as the pre-launch day-one patch.** Press-supplied notes ([GamerFuzion](https://www.gamerfuzion.com/mortal-shell-2-day-one-patch-notes/), August 16) describe earlier crash fixes plus **frame generation / FSR timing fixes**. Use the Hotfix thread if crashes started after August 17.

## How to make sure Hotfix 1.0 is installed

1. Open **Steam**.
2. Go to **Library → Mortal Shell II → Properties → Updates** and confirm automatic updates are enabled.
3. If Steam shows a pending download, let it finish.
4. **Restart Steam**, then launch the game once to confirm the build updated.
5. Retest the exact situation that crashed before (death loading, fast travel, a specific boss, and so on).

Steam does not expose a simple public build number in the Hotfix post, so the practical check is: **no pending update + a clean relaunch**.

## Current crash reports at a glance

| Issue | Current status | What to try |
| --- | --- | --- |
| General launch crashes | Hotfix 1.0 released on default branch | Update game first, then restart Steam |
| Loading / fast travel / beacon loading crash | Still player-reported after Hotfix 1.0 | Update, then test with Frame Generation off |
| Random gameplay or menu crash | Still player-reported after Hotfix 1.0 | Update, note when it happens, file a bug report |
| Lost Gloom after a crash | Limited player reports; no official recovery | Spend Gloom before risky fights; report if reproducible |

This table reflects **launch-window player reports and the official Hotfix post**, not a confirmed Cold Symmetry known-issues list.

## Mortal Shell 2 crashing after death or respawn

**Confirmed observation:** multiple Advanced Access players report crashes on **loading screens** — after death, during map changes, fast travel, and beacon loading.

From the Hotfix 1.0 thread and Bug Reports (August 17–18, 2026): crashes on **every loading screen**, an **infinite loading screen after changing maps**, and **freezes during beacon loading**.

Cold Symmetry has **not** named a dedicated respawn bug. Treat death-to-beacon crashes as loading-screen instability: update, restart, retest.

## Does disabling Frame Generation fix the respawn crash?

**Community-reported workaround only.** Cold Symmetry has **not** confirmed this.

Launch-window Hotfix replies tie crashes to **DLSS Frame Generation** (“Seems to be when DLSS Frame gen is turned on”; “with frame gen the game crash again”). Others suggested testing without DLSS after post-hotfix crashes. Worth a **low-risk test**, not a guarantee.

Launch-window PC coverage confirms **Frame Generation** is its own graphics option, separate from **Resolution Upscaler** (FSR) ([Destructoid](https://www.destructoid.com/best-mortal-shell-2-graphics-settings-for-no-lag-and-max-fps/), August 17). In PC **graphics settings**, set **Frame Generation → Off**. Leave upscaler settings alone unless you are testing them separately.

## Mortal Shell 2 random crashes

Players still report crashes during dialogue, menus or tarstone screens (some with full PC lockups), after many stable hours, and during cutscenes. These are **symptoms**, not confirmed root causes — do not assume VRAM, DX12, drivers, or memory leaks without evidence for your PC.

## Can a crash make you lose Gloom?

**Player reports only.** Gloom normally stays at your death spot until you recover it or die again; a crash can interrupt that state.

[GamingTrend’s review in progress](https://gamingtrend.com/reviews/mortal-shell-ii-review-in-progress/) (PS5 review build) reported **permanent Gloom loss after a death**. Launch Steam threads checked August 18 focus more on stability than crash-related Gloom loss. **No confirmed official recovery method** exists — spend Gloom before risky fights, and file a bug report if it happens.

## Mortal Shell 2 crash troubleshooting checklist

1. **Update Mortal Shell II** — Hotfix 1.0 / latest Steam build.
2. **Restart Steam and the game.**
3. **Re-test the exact crash scenario.**
4. **If loading crashes continue, try Frame Generation off** — community workaround only.
5. **Verify Steam game files** — standard troubleshooting, not proven for a specific Mortal Shell II crash.
6. **Update your graphics driver** — Cold Symmetry’s pre-launch Q&A asked players to check drivers and settings.
7. **Report the crash** — [Bug Reports subforum](https://steamcommunity.com/app/2584270/discussions/3/) per the pinned [How to Report a Bug!](https://steamcommunity.com/app/2584270/discussions/0/418424310691110842/) post. Note when it happens, your GPU/driver, and whether Frame Generation was on. Reply on the [Hotfix 1.0 thread](https://steamcommunity.com/app/2584270/discussions/0/418424310691158574/) if still broken.

This page **does not** recommend Open Beta workarounds such as `-dx11`, registry edits, DLL downloads, DDU, disabling security software, or deleting AppData/shader caches unless Cold Symmetry documents them for the **current launch build**.

## What to do if the game still crashes after Hotfix 1.0

File a [bug report](https://steamcommunity.com/app/2584270/discussions/3/) with when the crash happens, your GPU and driver, and whether Frame Generation was enabled. Reply on the [Hotfix 1.0 thread](https://steamcommunity.com/app/2584270/discussions/0/418424310691158574/) so Cold Symmetry can track remaining cases. There is no public Hotfix 1.1 timeline.

## FAQ

### Is Mortal Shell 2 crashing on PC?

Some players yes, especially on loading screens after the August 17 launch. Hotfix 1.0 helps several crashes but does not guarantee stability.

### Is there a Mortal Shell 2 crash hotfix?

Yes — **Hotfix 1.0** on Steam’s default branch, posted August 17, 2026.

### How do I install Hotfix 1.0?

Let Steam update, restart Steam, relaunch. No manual download.

### Why does Mortal Shell 2 crash when I respawn?

No respawn-specific bug is confirmed. Loading-screen crashes can hit the death-to-beacon flow. Update first, then test Frame Generation off.

### Should I turn off Frame Generation?

Try it as a **community-reported workaround** if loading crashes persist. Not an official fix.

### Does Hotfix 1.0 fix the respawn crash?

Unknown. Official wording is “several” crashes; loading crashes were still reported afterward.

### Can I recover Gloom lost after a crash?

No confirmed official method.

### Where can I report Mortal Shell 2 crashes?

[Bug Reports subforum](https://steamcommunity.com/app/2584270/discussions/3/).

## Sources

- [Hotfix 1.0 — Crashes and Optimization fixes](https://steamcommunity.com/app/2584270/discussions/0/418424310691158574/) — Cold Symmetry developer post, August 17, 2026
- [How to Report a Bug!](https://steamcommunity.com/app/2584270/discussions/0/418424310691110842/) — Cold Symmetry pinned post, August 17, 2026
- [Crashes and freezes (Unreal Engine)](https://steamcommunity.com/app/2584270/discussions/3/418424310691170780/) — launch Bug Report mentioning beacon loading
- [Mortal Shell II day-one patch notes (press-supplied)](https://www.gamerfuzion.com/mortal-shell-2-day-one-patch-notes/) — August 16, 2026; separate from Hotfix 1.0
- [Mortal Shell II dev Q&A on crashes](https://www.gamerfuzion.com/mortal-shell-2-dev-qa-difficulty-slayer-seal/) — pre-launch developer comments
- [Destructoid graphics settings guide](https://www.destructoid.com/best-mortal-shell-2-graphics-settings-for-no-lag-and-max-fps/) — confirms Frame Generation as a separate PC option, August 17, 2026
- [GamingTrend review in progress](https://gamingtrend.com/reviews/mortal-shell-ii-review-in-progress/) — PS5 review-build Gloom loss report
