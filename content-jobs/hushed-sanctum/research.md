# Hushed Sanctum location guide research

Research date: 2026-08-31 (Asia/Shanghai)
Slug: `mortal-shell-ii/hushed-sanctum`
Action: `create`
GSC signal: `mortal shell 2 hushed sanctum`

## Scope

Create a narrow location/troubleshooting page for Hushed Sanctum only. Do **not** reproduce the full Faded Citadel walkthrough or compete with `/mortal-shell-ii/faded-citadel/` main-route intent. Link to Faded Citadel for broader route context.

## Player problems to answer

- Where is Hushed Sanctum?
- How do you enter it?
- What is the Citadel Annex Beacon cleanse flow?
- What is Stillblade's Stone?
- How do you finish the cleanse / corrupted core step?
- Why is the Beacon stuck / not cleansed / can't cleanse?

## Evidence-backed facts

### Location and entry

- Hushed Sanctum is **not** the same as Ashen Sanctum. It is the separate cleanse dungeon entered when you choose **Cleanse Beacon** at **Citadel Annex Beacon** inside Faded Citadel.
- Route anchor: reach **Citadel Annex Beacon** via the Faded Citadel interior (Gate of Infinity → Ashen Sanctum approach → Citadel Annex). See [Faded Citadel walkthrough](/mortal-shell-ii/faded-citadel/) for main-route landmarks only; do not duplicate that page's full numbered walkthrough.
- AllThingsHow documents the Annex → Hushed Sanctum cleanse sequence and Stillblade's Stone reward: https://allthings.how/mortal-shell-2-how-to-cleanse-the-citadel-annex-beacon-hushed-sanctum/

### Reported cleanse sequence (secondary source)

When Cleanse Beacon is chosen at Citadel Annex, sources report:

1. Narrow bridge with ranged caster
2. Tunnel with melee enemies and spiders
3. Stairs with teleporting lightning caster
4. Large pillared spider room
5. Platforming/drop into circular arena
6. Red rift to high ledge (mage + chest)
7. Interact with **corrupted crystal core** to complete cleanse

A **Beacon Cleansed** message confirms completion. Reward reported as **Stillblade's Stone** (Tarstone).

### Stuck / troubleshooting boundaries

- Taking the chest and leaving without touching the corrupted core does **not** register the Beacon as Cleansed (reported in local Faded Citadel coverage).
- Do not invent platform-specific bug fixes. If stuck, verify the core interaction, retest from Citadel Annex rest, and cross-check [Beacons and fast travel](/mortal-shell-ii/beacons-fast-travel/).
- For Isaac combat or blue-flame damage issues, link [Isaac, the Scholar Prince](/mortal-shell-ii/isaac-the-scholar-prince/) — out of scope for this page's primary intent.

## Intent contract

Primary query family: `hushed sanctum`, `citadel annex cleanse`, `stillblade's stone`, `hushed sanctum stuck`, `can't cleanse citadel annex`

Secondary (link only): full Faded Citadel route, Isaac boss, Tarstones database

## Writer constraints

- Return page-package JSON with title, description, quickAnswer, 3–6 FAQ, articleMarkdown.
- Title should target Hushed Sanctum location/entry/cleanse, not "Faded Citadel walkthrough".
- Include internal links to Faded Citadel (context only), Tarstones, Beacons, Isaac (combat only if needed).
- No fabricated coordinates or unverified bug patches.

## Sources

1. AllThingsHow — How to Cleanse the Citadel Annex Beacon (Hushed Sanctum)
2. Local `content-jobs/faded-citadel/research.md` — Annex vs Ashen Sanctum distinction, core-cleanse requirement
3. Local `src/content/docs/gameplay/tarstones.md` — Stillblade's Stone row
