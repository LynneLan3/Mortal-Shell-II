# Week 1 platform status + Hotfix 3 cross-links — APIMart pass

- Slug: `mortal-shell-ii/updates/week-1-update`
- Canonical URL: `/mortal-shell-ii/updates/week-1-update/`
- Action: **APPEND_ONLY** updates to existing Week 1 page — add platform rollout block and Hotfix 3 cross-reference; preserve all existing sections A–E, guide table, and sources
- Research date: 2026-09-02
- Writer boundary: improve natural English; do not invent rollout dates beyond verified facts below

## Verified platform status (Sept 2, 2026)

| Platform | Status |
| --- | --- |
| PC | Week 1 Update available |
| PS5 | Week 1 Update available (rolled out Sept 1, 2026) |
| Xbox | Officially delayed / coming as soon as possible — **do not claim live** without stronger evidence |

**Remove outdated unified wording** such as “PS5 and Xbox coming soon.”

## Hotfix 3 cross-reference (PC only)

- Sept 1, 2026 PC Steam hotfix after Week 1
- Link to `/mortal-shell-ii/crashing-pc/` for crash/performance status
- Hotfix 3 does not fix all crashes/performance — one sentence only in Performance/crashes section (section E)

## Required additions

### 1. After `## Quick answer` block, insert:

`## Platform availability / Current rollout`

Compact table or bullet list with PC / PS5 / Xbox statuses above. Note “Status checked Sept 2, 2026” for Xbox line.

### 2. Update section E (Performance and crashes)

Add one sentence: Hotfix 3 (Sept 1, PC) addressed several targeted bugs; see [PC crash guide](/mortal-shell-ii/crashing-pc/) for what it did and did not fix.

### 3. Update FAQ

Replace console rollout answer:
- PC: live
- PS5: live (Sept 1, 2026)
- Xbox: delayed per last official confirmation; checked Sept 2, 2026

Add link to crashing-pc for post-patch crash/performance questions.

## Required internal links (preserve all existing + add)

- `/mortal-shell-ii/crashing-pc/`
- `/mortal-shell-ii/updates/`

## Output contract

Return page-package JSON with full `articleMarkdown` that **includes all original sections** plus the new platform block and updated FAQ/sources lines. Update `quickAnswer` first sentence to mention PS5 live and Xbox delayed (checked Sept 2, 2026). Update frontmatter `faq` array with revised console question.

Preserve every verified Week 1 economy/respec/exploration fact from the existing page — do not drop sections.
