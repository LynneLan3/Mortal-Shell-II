# Item 01 Interactive Map — blocking research checkpoint

Research date: 2026-08-24

## Current repository boundary

- `src/data/map-markers.ts` contains the marker contract and an intentionally empty `mapMarkers` collection.
- `src/components/experience/InteractiveMap.astro` renders a placeholder and explicitly requires a real, calibratable world-map image before plotting verified locations.
- Marker coordinates remain percentages of the map image. The map UI now uses a temporary, attributed 960x960 preview of the public LootMap world basemap; its public map contract identifies an 8,192x8,192 source canvas. Marker x/y values are normalized from the exact public map links recorded per marker, not guessed from guide prose.

## Evidence checked

- GamesRadar's [How to reveal the Mortal Shell 2 map](https://www.gamesradar.com/games/rpg/mortal-shell-2-map/) provides screenshots and route explanation for Ruk map fragments, but not a reusable, calibratable full-world map asset or coordinate table.
- Destructoid's [How to unlock the map in Mortal Shell 2](https://www.destructoid.com/how-to-unlock-the-map-in-mortal-shell-2/) provides map-unlock behavior and a screenshot, but not a source-backed coordinate system or a repository-usable basemap.
- The third-party [Mortal Shell 2 Interactive Map](https://mortal-shell2.wiki/map) explicitly describes its markers as placeholders and says real coordinates / a full overworld tile layer are future work.
- The third-party [Mortal Shell 2 Interactive Map Routes and Locations](https://mortalshell2.space/guides/mortal-shell-2-interactive-map/) recommends named-landmark checklists and explicitly warns against assuming retail coordinates or a complete full-game map.
- The current [LootMap interactive map guide](https://lootmap.gg/mortal-shell-ii/guides/interactive-map/) documents a post-launch build, a full 8,192x8,192 map canvas, and public marker links containing map pixels. The shipped implementation uses only a small curated Shell and Map Station subset, retains each exact source URL, and does not import LootMap's marker dataset or client implementation.
- The temporary basemap is the public [LootMap map preview](https://lootmap.gg/bundles/mortal-shell-ii/world/24841087-0b9892af/preview.webp). It is copied into `public/images/map/mortal-shell-ii-world.webp` with visible attribution and `replaceLater` status; it is not claimed as original artwork.

## Decision

The earlier blocker is cleared for a bounded coordinate-map release. The repository now has a real map surface, a curated set of public-source coordinates, guide links, search/filter/selection behavior, and a documented replacement path for the temporary basemap. Item 01 may move from `blocked` to `done` only after the production route is built and verified.
