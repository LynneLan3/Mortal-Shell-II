# APIMart page brief: Skip Prologue winner refresh

## Scope

- Optimize the existing `/mortal-shell-ii/skip-prologue/` winner page in place.
- Do not create a new URL and do not turn this into a large rewrite.
- Return a bounded rewrite focused on the title, description, first answer/opening, and only the FAQ needed to answer the target cluster.

## Existing factual boundary

- Official Open Beta listings say progress beyond Marrow Keep unlocks the optional full-game Prologue skip.
- The full game is released; this is a current launch-era decision page.
- The skip is not Beta save transfer. Beta currency, weapons, Shells, collectibles, and other discovered items reset.
- The existing page has two confirmed Prologue trophy opportunities bypassed by the skip: `Mid Summer?` (flower crown / Festival interaction) and `No, You Still Can't Win` (take the Prologue Tar Golem to minimum health).
- New Game Plus begins at Marrow Keep and does not replay those Prologue opportunities.
- Exact menu wording and prompt timing are not published in the checked first-party sources; do not guess UI text.
- The existing page contains a secondary/community troubleshooting block for a missing Steam unlock. Replace that block with the developer-confirmed Steam workaround below; do not leave the old "community reports — not official" framing for this specific sequence.
- A developer-marked Steam answer says a skip can roughly compensate Prologue Gloom/currency; no exact amount or item list is confirmed.

## First-screen answers required

Answer these immediately:

1. How to skip: progress beyond Marrow Keep in the Open Beta, then choose the optional skip in the full-game start flow if the unlock is available.
2. Should you skip: first-time and completion-focused players should normally play the Prologue; returning Beta players who value speed can consider the option.
3. What you miss / keep: the skip bypasses the two confirmed Prologue trophy opportunities; it does not transfer Beta inventory.

## Required post-launch Steam troubleshooting addition

Keep the existing Quick Answer / first-screen skip and should-you-skip answers. A very short troubleshooting sentence may be appended to the Quick Answer, but it must not displace those answers or rewrite the clicked main body.

Replace the old secondary block with a formal section titled exactly `Steam: Prologue Skip or Beta Reward Not Showing`. State that this is a developer-confirmed Steam workaround and give the following order:

The exact visible heading in `articleMarkdown` must be `Steam: Prologue Skip or Beta Reward Not Showing`.

1. Confirm the same Steam account was used for the Open Beta.
2. Exit and relaunch the full game once.
3. Make sure Mortal Shell II Open Beta is still added to the Steam Library.
4. Relaunch the full game.
5. If the unlock still does not register, developer guidance says to start reinstalling the Beta, pause around 7%, then relaunch the full game.
6. Once the rewards appear in the full game, the Beta can be uninstalled.

The developer's pinned Known Issues also lists the Beta being in the Library or partially installed as a workaround. Make clear that this is only entitlement detection/troubleshooting. It does not restore the Beta save, weapons, Shells, currency, collectibles, or other Beta progress.

Eligibility boundary: storefront copy says progressing beyond Marrow Keep unlocks the optional Prologue skip; later Steam developer replies say 30+ minutes in the Open Beta qualifies for The Flayed Harbinger and the Prologue skip. Present both first-party claims with their source labels and explicitly preserve the conflict rather than treating them as identical.

The generated integration block must contain a short player-facing eligibility note stating both claims: the Store copy says beyond Marrow Keep, while later Steam developer replies say 30+ minutes qualifies for The Flayed Harbinger and the Prologue skip. Do not omit this note even though the rest of the existing page body is preserved.

## Integration boundary

Return a valid page-package JSON, but `articleMarkdown` must contain only the new Quick Answer addition (if needed) and the replacement troubleshooting block. Do not rewrite the existing title, description, skip decision, trophy discussion, internal links, or other main body. Keep the existing title and description unchanged at integration time.

## Required internal links

- `/mortal-shell-ii/beginner-guide/`
- `/mortal-shell-ii/beta-progress-carry-over/`
- `/mortal-shell-ii/trophies/`
- `/mortal-shell-ii/tar-golem/`
- `/mortal-shell-ii/new-game-plus/`

## Metadata brief

- Return a page-package JSON with an answer-first title/description/quick answer, 3–5 focused FAQs, and a concise body.
- Preserve the existing winner intent and avoid repeating every secondary report.
