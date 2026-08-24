# APIMart generation failures

Run date: 2026-08-24

- `beginner-guide` — the initial command returned before the background request had flushed output, but the same single invocation later produced a valid `article.md` and `page.json`; integrated successfully.
- `magdalena-boss-guide` — one real `page-package` invocation with `APIMART_TIMEOUT_MS=10000` returned `APIMart request timed out after 10000 ms.`
- `skip-prologue-refresh`, `beta-progress-carry-over`, and `authority-hubs` — generated successfully after the Magdalena timeout; integrated successfully.

No Magdalena article, title, description, quick answer, FAQ, or strategy copy was generated or integrated from the failed attempt. Do not retry Magdalena without a working APIMart endpoint/credential state and renewed execution authorization.
