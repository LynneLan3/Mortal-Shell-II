# APIMart page brief: Guide + Wiki authority hub module

## Scope

- This is a structured copy brief for the existing Mortal Shell II homepage and `/mortal-shell-ii/guides/` hub.
- Do not create `/wiki/` or another hub URL. Do not redesign the Map Workspace, Routes product, or other architecture.
- The provider must return the normal page-package fields plus an `authorityHubs` array and `sectionTitle` / `sectionDescription` fields for integration.

## Authority goal

Make the existing site clearly present itself as `Mortal Shell 2 Guide + Wiki + Map + Database` through a concise, human-readable hub module and prominent links. Avoid keyword stuffing.

## Exact hub cards to return

Return one object per item, preserving the exact `href` values. The provider writes the concise card title and description; it must not invent new URLs:

1. Beginner Guide — `/mortal-shell-ii/beginner-guide/`
2. Interactive Map — `/mortal-shell-ii/map/`
3. Shells — `/mortal-shell-ii/shells/`
4. Weapons — `/mortal-shell-ii/weapons/`
5. Bosses — `/mortal-shell-ii/bosses/`
6. Walkthrough / Routes — `/mortal-shell-ii/routes/world-progression/`
7. Achievements — `/mortal-shell-ii/trophies/`
8. NG+ — `/mortal-shell-ii/new-game-plus/`
9. Upgrades — `/mortal-shell-ii/tarforge/`

Use this JSON extension:

"sectionTitle": "...",
"sectionDescription": "...",
"authorityHubs": [
  {"label": "...", "href": "one of the exact hrefs above", "description": "...", "badge": "Guide|Wiki|Map|Database"}
]

## Existing content boundary

- The homepage already has a `Mortal Shell II Guide & Wiki` H1 and a launch-guide flow. Preserve its visual language and existing sections.
- The Guides hub already groups existing guides by topic. Add the authority module and prominent internal links without inventing placeholder pages.
- Use the existing page descriptions and route labels as context; do not duplicate whole guides.
- The Beginner Guide is the only new article URL in this goal.

## Required links from the graph

- Homepage → Beginner Guide, Skip Prologue, Shells, Weapons, Map, Routes
- Homepage / Guides → Magdalena and Bosses
- Beta Carry Over ↔ Skip Prologue ↔ Beginner Guide
- Magdalena → Bosses and Glutted Mire / world route

## Metadata

- The normal page-package fields should provide current guide-hub title/description/quick answer and 3–6 FAQs suitable for the Guides hub. The existing homepage H1 may remain unchanged if it already matches.
