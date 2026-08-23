# Item 02 integration note

- Integrator-only target: the existing `world-progression` object in `src/config/game.ts`.
- Preserve the route id `world-progression`, canonical href `/mortal-shell-ii/routes/world-progression/`, existing visual asset, and current route architecture. Do not create a second Markdown page for this slug.
- `src/pages/mortal-shell-ii/routes/[routeId].astro` renders the dynamic Route Hub; `RouteTimeline.astro` displays `route.pages` in the exact order supplied by `game.routes`. Any future expansion should therefore be a minimal `game.routes[].pages` / `fastAnswers` update by the Integrator, not a worker edit to shared config.
- Use the research's stable campaign spine and label the Fainweald/Mammon order as recommended rather than mandatory. Keep the Mammon two-gate report and the competing Ova thresholds in an uncertainty note or link to the relevant detail pages.
- Item-specific pages already available for linking include Ova, Beacons & Fast Travel, Map Fragments, Shells, Proxima, Eredrim, Sester Genessa, Blackmarrow Keys, the Fainweald/Mammon boss pages, Unfound Path boss pages, Endings, and New Game Plus.
- No article writer call, shared-file edit, content-plan edit, build, deployment, push, or IndexNow submission belongs in this worker checkpoint.
