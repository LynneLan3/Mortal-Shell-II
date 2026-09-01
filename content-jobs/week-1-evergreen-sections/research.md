# Week 1 evergreen section polish — APIMart pass

- Action: improve natural English in **Week 1-only sections** on six existing guides
- Do not rewrite full pages; preserve all other sections, URLs, rankings, locations, and patch-vs-editorial boundaries
- Research date: 2026-08-30

## Shared verified Week 1 facts

- August 29, 2026 official Steam Week 1 Update
- Glimpses and Tarcores no longer finite
- Fragile Tarstones repeatable
- Mether's Severance → Zhirelle → Shell respec + Glimpse refund
- Merrick expanded stock (no exact restock schedule)
- New Beacons / navigation pacing (not all routes changed)
- Substantial crash fixes — not all crashes fixed
- Link pattern for "Current version" blocks: `/mortal-shell-ii/updates/week-1-update/` and `/mortal-shell-ii/updates/`

## Pages and sections to polish

### 1. `/mortal-shell-ii/tarstones/` — section "Week 1 Update: Tarstone economy changes"
Polish economy block + "Current version" line. Keep Shattering Stone bug coverage and rankings untouched.

### 2. `/mortal-shell-ii/crashing-pc/` — section "Current Week 1 crash status"
Polish Week 1 status + current version links. Keep Hotfix 2.0 troubleshooting below unchanged.

### 3. `/mortal-shell-ii/shells/` — section "Week 1 Update: Shell respec"
Polish Mether's Severance / Zhirelle respec block. Keep Balance Patch 1 section separate.

### 4. `/mortal-shell-ii/glimpses/` — FAQ answers about finite Glimpses
Polish Week 1-related FAQ lines only (finite cap removed). Keep resource distinction sections.

### 5. `/mortal-shell-ii/weapons/` — paragraph linking Week 1 Riposte vs Balance Patch 1 weapon facts
Polish the Balance Patch 1 weapons section closing sentence about Week 1 Riposte. Do not change tier table editorial picks except clarity.

### 6. `/mortal-shell-ii/beacons-fast-travel/` — section "Week 1 Update: new Beacons"
Polish new Beacon block. Keep 49-beacon checklist and Mether's Breath content.

## Output contract

Return JSON with key `sectionUpdates`: array of `{ "pageSlug": "...", "sectionHeading": "...", "replacementMarkdown": "..." }` — one entry per section above. Pure Markdown for replacement blocks only (no frontmatter). Preserve all internal link paths exactly.
