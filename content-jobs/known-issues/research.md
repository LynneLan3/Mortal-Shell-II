# Known Issues hub research

Research date: 2026-08-31 (Asia/Shanghai)
Slug: `mortal-shell-ii/known-issues`
Action: `create`

## Scope

Create a **navigation hub** for bug/stuck/not-working queries. Do **not** replace or rewrite `/mortal-shell-ii/crashing-pc/` crash intent. Do not modify winner page bodies.

## Player problems to route (hub only)

- bug / stuck / not working / can't cleanse / boss no damage / save issue
- General "something is broken" searches that need a directory, not a duplicate crash page

## Hub links (outbound only — do not rewrite target pages)

| Symptom cluster | Route to |
| --- | --- |
| PC crash, hotfix, stability | [Crashing on PC](/mortal-shell-ii/crashing-pc/) |
| Beacon cleanse stuck / can't cleanse | [Beacons and fast travel](/mortal-shell-ii/beacons-fast-travel/), [Hushed Sanctum](/mortal-shell-ii/hushed-sanctum/) |
| Isaac no damage / boss issue | [Isaac, the Scholar Prince](/mortal-shell-ii/isaac-the-scholar-prince/) |
| Hushed Sanctum stuck | [Hushed Sanctum](/mortal-shell-ii/hushed-sanctum/) |
| Save / progress / beta carry-over | [Beta progress carry-over](/mortal-shell-ii/beta-progress-carry-over/), [Skip Prologue](/mortal-shell-ii/skip-prologue/) |
| Shattering Stone chest open / missing | [Tarstones](/mortal-shell-ii/tarstones/) (Week 1 bug note) |
| Slayer Seal / achievement concerns | [Slayer Seal difficulty](/mortal-shell-ii/slayer-seal-difficulty/) |

## Intent contract

Primary: `known issues`, `bug`, `stuck`, `not working`, `can't cleanse`, `boss no damage`, `save issue`

Explicitly **not** primary for: `crash`, `crashing`, `hotfix` — those stay on crashing-pc.

## Writer constraints

- Return page-package JSON.
- Title/meta should frame as a **Known Issues & Troubleshooting Hub**, not a crash guide.
- Body is scannable symptom → link tables and short routing copy only.
- No fabricated bug list beyond evidence-backed routing above.
- Link crashing-pc once as the PC crash entry, not as the page's main H1 intent.

## Sources

- Local `src/content/docs/pc-requirements/crashing-pc.md` — crash scope boundary
- Local `src/content/docs/gameplay/tarstones.md` — Shattering Stone bug note
- Local Faded Citadel / Hushed Sanctum research — cleanse stuck routing
