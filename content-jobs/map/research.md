# Item 01 Interactive Map — blocking research checkpoint

Research date: 2026-08-24

## Current repository boundary

- `src/data/map-markers.ts` contains the marker contract and an intentionally empty `mapMarkers` collection.
- `src/components/experience/InteractiveMap.astro` renders a placeholder and explicitly requires a real, calibratable world-map image before plotting verified locations.
- Marker coordinates are percentages of the eventual map image. Adding x/y values without a matched basemap would be fabricated placement and violates the locked Item 01 rule.

## Evidence checked

- GamesRadar's [How to reveal the Mortal Shell 2 map](https://www.gamesradar.com/games/rpg/mortal-shell-2-map/) provides screenshots and route explanation for Ruk map fragments, but not a reusable, calibratable full-world map asset or coordinate table.
- Destructoid's [How to unlock the map in Mortal Shell 2](https://www.destructoid.com/how-to-unlock-the-map-in-mortal-shell-2/) provides map-unlock behavior and a screenshot, but not a source-backed coordinate system or a repository-usable basemap.
- The third-party [Mortal Shell 2 Interactive Map](https://mortal-shell2.wiki/map) explicitly describes its markers as placeholders and says real coordinates / a full overworld tile layer are future work.
- The third-party [Mortal Shell 2 Interactive Map Routes and Locations](https://mortalshell2.space/guides/mortal-shell-2-interactive-map/) recommends named-landmark checklists and explicitly warns against assuming retail coordinates or a complete full-game map.
- A newer [Mortal Shell II Interactive Map](https://mortalshell2guide.org/map?marker=crypt-key) claims a complete map and curated markers, but the available result does not provide an auditable downloadable basemap/coordinate dataset that can be calibrated against the repository UI; copying its asserted positions would still be an unverified external import.

## Decision

No reliable, auditable, calibratable basemap plus coordinate evidence is currently available for the repository's Interactive Map UI. Item 01 must be marked `blocked` with the precise reason:

> No reliable, calibratable world-map asset and coordinate evidence is available for the repository map UI.

This checkpoint does not add markers, coordinates, a new basemap, or a new topic. The blocked Item does not stop the remaining content plan.
