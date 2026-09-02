# Hotfix 3 crash/performance append — APIMart pass

- Slug: `mortal-shell-ii/crashing-pc`
- Canonical URL: `/mortal-shell-ii/crashing-pc/`
- Action: **APPEND_ONLY** — generate one new Markdown section only; do not rewrite existing page body
- Research date: 2026-09-02 (verified on branch `codex/week-1-update`)
- Writer boundary: output **only** the section titled `## After Hotfix 3 — Current PC Status` and its subsections. Do not repeat or replace Hotfix 2.0 content below.

## Page purpose

Capture GSC crash/freeze/loading queries after Hotfix 3 and Week 1 Update. Route players to safe troubleshooting without claiming all crashes are fixed.

## Verified facts (do not expand)

### Hotfix 3 — Sept 1, 2026 (PC Steam hotfix)

Developer-confirmed fixes include:

- Devout / Pre-Order Shell Shades not appearing
- Opening world map while using FSR
- Citadel Annex giant-spider traversal issue
- Some enemies not reacting to the player
- Several collision issues
- Minibeacon lens flare / visual issues

**Boundaries:**

- Hotfix 3 does **not** claim to fix all crashes, freezes, or performance problems.
- Community reports after Hotfix 3 still include stutter, 1% low drops, performance degradation, and severe frame drops on some Steam Deck units.
- Do **not** write “Hotfix 3 fixed performance/crashes.”

### Week 1 Update official update precautions (PC)

From the official Week 1 Update post — use only these two official pre-update notes in troubleshooting order:

1. Remove or disable mods before updating.
2. Ensure `engine.ini` is not read-only before updating — the official note says this can affect frame generation.

Do **not** present Nexus mods, Smart App Control, or single Reddit workarounds as official fixes.

### Search intents to cover naturally

- keep crashing / crashing pc
- freezing / freeze
- crashing on loading / loading crash
- couldn't start / couldnt start
- stuttering after patch
- performance drop after update

## Required section structure (output exactly this shape)

```markdown
## After Hotfix 3 — Current PC Status

(1–2 sentence lead: confirm Hotfix 3 is the latest PC hotfix after Week 1; crashes/freezes/performance may persist.)

### What Hotfix 3 fixed (official)

- bullet list of confirmed items above

### What Hotfix 3 did not confirm

- crashes, freezes, stutter, performance regression still reported by players; not resolved by official wording

### If the problem started after Week 1 or Hotfix 3

Numbered safe troubleshooting order:
1. Confirm Steam installed Week 1 + Hotfix 3 (no pending download; restart Steam)
2. Official Week 1 precautions: remove/disable mods; ensure engine.ini is not read-only before updating
3. Retest the exact trigger
4. Match symptom to existing sections below (Keyboard Bindings, loading crashes, etc.)
5. File bug report with GPU/driver and whether Frame Generation was on

Link to [Week 1 Update](/mortal-shell-ii/updates/week-1-update/) and [Updates hub](/mortal-shell-ii/updates/).
```

## Required internal links

- `/mortal-shell-ii/updates/week-1-update/`
- `/mortal-shell-ii/updates/`

## FAQ entries to also return (for frontmatter merge — separate from articleMarkdown)

Return these four FAQ objects in addition to articleMarkdown when using page-package; if article-only, include equivalent ### FAQ subsections at end of section:

1. Did Hotfix 3 fix Mortal Shell II crashes?
2. Why is Mortal Shell II freezing after the latest patch?
3. Why won't Mortal Shell II start after updating?
4. Is the Week 1 Update live on PS5 and Xbox? (PS5 available Sept 1; Xbox delayed — checked Sept 2, 2026)

## Tone

Utility-first. Separate official fixes from ongoing player reports. No hype.
