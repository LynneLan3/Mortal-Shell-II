# Tarstones — Duality Stone Sep. 5 current-state APPEND_ONLY

- Slug: `mortal-shell-ii/tarstones`
- Canonical URL: `/mortal-shell-ii/tarstones/`
- Action: **APPEND_ONLY** surgical update on the existing Tarstones guide
- Research date: 2026-09-07
- Do **not** create `/duality-stone/`, `/duality-stone-nerf/`, or `/best-tarstones/`
- Do **not** expand other pages (Weapons, Shells, Lazlo, Updates, etc.)
- Do **not** invent a Duality Stone tier list or rewrite the full Tarstones database

## Intent Brief

```json
{
  "primaryQuery": "mortal shell 2 duality stone nerf",
  "queryCluster": [
    "mortal shell 2 duality stone nerf",
    "mortal shell 2 duality stone",
    "duality stone replacement mortal shell 2",
    "mortal shell 2 tarstones"
  ],
  "userJob": "Confirm whether Duality Stone was nerfed after Sep. 5, what still works, and what Resolve-focused Axatana / Axe & Dagger players can try instead.",
  "intentOwnerStatus": "KEEP",
  "serpPromise": "State the post-Sep. 5 Duality Stone current state first, then keep the Tarstones database and goal-based picks useful.",
  "secondaryIntents": [
    {
      "query": "duality stone replacement mortal shell 2",
      "action": "KEEP_SUPPORTING"
    },
    {
      "query": "mortal shell 2 best tarstones",
      "action": "KEEP_SUPPORTING"
    }
  ]
}
```

## OFFICIAL

- The Sep. 5 official update / patch notes do **not** list any Duality Stone change.
- Duality Stone is therefore **not** an officially documented nerf in the Sep. 5 notes.
- Link context when useful: `/mortal-shell-ii/updates/september-5-update/` and `/mortal-shell-ii/updates/`.
- Do not invent official numbers, damage multipliers, or Resolve percentages.

## COMMUNITY

Cross-channel community reports appeared around Sep. 5–6:

- Reddit thread titled along the lines of “Duality got nerfed” with roughly **116 votes**
- Steam discussion titled along the lines of “Duality Stone nerf sanity check?” with roughly **20+ replies**
- Multiple players report that after Sep. 5, Duality Stone **Resolve generation dropped substantially**
- Repeated community-tested figures in those threads:
  - second / additional hit ≈ **80% damage**
  - Resolve generation ≈ **25%**
- These figures are **community-reported / community-tested only**
- They are **not listed or confirmed by the developer**
- Replacement intent is already active: players ask **“Duality Stone Replacement?”** for Axatana / Axe & Dagger Combat Tarstone alternatives after the reported Resolve nerf
- Community discussion already recommends **Zealot's Stone** (page spelling: Zealot's Stone) as a **Resolve-oriented alternative**
- Zealot's Stone remains a **community recommendation**, not an official best-in-slot

## Current-page Duality wording that must be corrected

Existing Best Tarstones row currently says Duality is “Reported to double parts of the standing light combo…”. That framing is still useful for the extra-hit idea, but the page must **not** continue to imply:

- double DPS as a current unconditional claim
- double Resolve
- doubled light-combo benefit as an unconditional auto-pick
- Duality as the default auto-pick for Axatana / Axe & Dagger after Sep. 5

## Required page changes (APPEND_ONLY)

Preserve the existing page architecture, database tables, Tempering route, Week 1 economy section, Balance Patch 1 table, missable warnings, Sources list, slug, category, related links, and status.

Update only Duality-related surfaces:

### 1) Compact Sep. 5 Duality Stone status block

Add a compact section near the Best Tarstones area (before or immediately after the goal table is fine), titled along the lines of:

`## Sep. 5 Duality Stone current state`

**Primary answer (must lead):**

Duality Stone still adds the extra light-attack hit for its compatible dual-wield weapons, but players report substantially lower Resolve generation after the Sep. 5 update. The change was not documented in the official patch notes.

Then briefly cover:

- Still useful for the additional hit, fast dual-wield synergy, and status / hit-count oriented builds
- Resolve-focused builds now have stronger reason to compare alternatives
- Community-tested values may mention Resolve generation ≈ 25% **only** as community-tested, and must say they are **not listed or confirmed by the developer**
- The ≈ 80% additional-hit damage figure is **optional**. Prefer omitting it from Quick Answer. Include it in the status block only if labeled community-tested and unconfirmed; if the wording feels unstable, omit the 80% figure entirely
- Do **not** put the 80% damage figure in Quick Answer

### 2) Best / Recommended Tarstones row

Update the Duality Stone goal row so it is **conditional**, not an unconditional auto-pick:

- Keep value for additional hit / dual-wield light-combo synergy / hit-count or status builds
- Explicitly note the community-reported Sep. 5 Resolve generation drop
- Point Resolve-focused players to compare alternatives

### 3) What to use instead of Duality Stone?

Add a short natural subsection:

`### What to use instead of Duality Stone?`

Evidence-supported direction only:

- For Resolve-oriented Axatana / Axe & Dagger players after the reported nerf, community discussion already points to **Zealot's Stone** as a Resolve-oriented alternative
- Label that as community recommendation, not official ranking
- Do **not** invent a full replacement tier list
- Do **not** invent acquisition, effect numbers, or synergy claims beyond what the existing page already supports for Zealot's Stone location (Giant knight at Besieged Ruins, High Lord's Courtyard)

### 4) FAQ merge (existing FAQ structure only)

Add or refresh these FAQ items if they fit the existing FAQ pattern. Do **not** add FAQ schema markup or a new FAQ system:

1. Was Duality Stone nerfed?
2. How much Resolve does Duality Stone generate now?
3. Is Duality Stone still good?
4. What should I use instead of Duality Stone?

Also refresh the existing “What is the best early Tarstone?” answer so Duality is no longer an unconditional early auto-pick.

### 5) Quick Answer / description guidance

- Keep the page as the Tarstones database / build guide
- Quick Answer may briefly acknowledge the Sep. 5 Duality Resolve community reports, but the Duality primary answer belongs first in the status block
- Do **not** put community 80% damage into Quick Answer
- If Resolve ≈ 25% appears anywhere near Quick Answer, it must remain community-tested and unconfirmed; safer to keep numeric community values only in the status block / FAQ
- Preserve useful Week 1 Tempering / Tarcore framing if still present
- Update `lastUpdated` to `2026-09-07` when integrating

## Forbidden claims

- Do not say the developer confirmed a Duality Stone nerf
- Do not present 80% damage or 25% Resolve as official values
- Do not say Duality is useless / dead / removed
- Do not say Zealot's Stone is officially best-in-slot
- Do not create new pages or change the canonical URL
- Do not rewrite unrelated Tarstone rows, Balance Patch 1 values, or the 73 vs 75 total conflict

## Sources to retain in research framing

- OFFICIAL: Sep. 5 notes do not list Duality Stone
- COMMUNITY: Reddit Duality nerf thread (~116 votes); Steam Duality Stone nerf sanity-check thread (~20+ replies); community replacement discussion pointing to Zealot's Stone
