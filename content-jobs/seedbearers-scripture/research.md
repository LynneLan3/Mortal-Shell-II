# Seedbearer's Scripture CTR + final-boss intent patch brief

## Job contract

## Locked CTR copy contract

- The `title` field must be exactly: `Mortal Shell 2 Seedbearer's Scripture: How to Get It + All 3 Gland Locations`.
- The visible H1 uses the same page title in this site architecture; keep the H1 promise centered on `How to Get Seedbearer's Scripture — All 3 Gland Locations`, not a Zmey guide or a gland-only page.
- The `description` and `quickAnswer` must name Depleted Gland, Thawed Gland, and Faded Gland, explain the Night Mode/Forgotten Tower offering, and keep Scripture acquisition primary.
- The FAQ must retain the acquisition, all-three-locations, `Insufficient Materials`, and Depleted Gland-use intents.

- **Existing canonical page:** `/mortal-shell-ii/seedbearers-scripture/`
- **Primary intent:** Seedbearer's Scripture acquisition in Mortal Shell II / Mortal Shell 2.
- **Secondary intent:** all three quest Glands, Night Mode, Forgotten Tower offering, and what the Depleted Gland is for.
- **Adjacent problem intent:** Zmey's Cosmic Disease, why the Scripture matters before the final boss, and the Forgotten Tower `Insufficient Materials` blocker.
- **Canonical URL:** do not change the slug or create another Seedbearer page.
- **Integration mode:** local patch only. The existing three Gland route sections, route landmarks, Night Mode/Forgotten Tower process, Scripture effect wording, Revered Glands distinction, breadcrumb, schema, internal links, and existing assets are already strong. Do not regenerate or replace those sections.
- **Output requirement:** return a JSON page package. `articleMarkdown` must contain only integration-ready replacement/addition blocks for this page, not a full rewritten guide. The integrator will keep the existing route prose and select only the requested blocks.

## Search behavior and CTR opportunity

The supplied GSC signal is approximately 346 impressions and 1 click (about 0.29% CTR) for the canonical page. Queries include many spelling variants of `Seedbearer's Scripture` / `Seedbearers Scripture`.

Two entrances converge on this page:

1. **Acquisition intent:** “Where/how do I get Seedbearer's Scripture?”
2. **Problem intent:** “Why is Zmey damaging my Shell / how do I deal with Cosmic Disease?”

The page must still read first as the Scripture acquisition guide. The final-boss language is a value explanation and preparation handoff, not a second Zmey guide.

## Stable facts to use

- The three quest Glands are **Depleted Gland**, **Thawed Gland**, and **Faded Gland**.
- The existing page's route anchors are authoritative for integration: Nameless Pass / Ruk and the torch-side bone arm for Depleted; the Abbey / Valley of the Revered Corrupt Gate route, statue chamber, Martyr's Ash, and pedestal for Thawed; Citadel Annex and the candle-ringed well-like structure for Faded.
- The offering requires **Night Mode**, then the three named Glands are offered at the upper interaction in the **Forgotten Tower** to receive Seedbearer's Scripture.
- The existing page documents the current local Scripture effect as: active use cures Cosmic Disease and grants 50% Cosmic Disease Mitigation for 30 seconds; passive effect provides 15% Cosmic Disease Mitigation. Preserve these values if the generated patch mentions them.
- The existing Zmey research states that Zmey's Cosmic Flame can apply Cosmic Disease and recommends the Scripture as a mitigation option. It explicitly warns that an external 80% value conflicts with the local page; do not repeat an external percentage as settled fact.
- The intended boundary is: this page explains why the Scripture is useful against the status effect; the existing `/mortal-shell-ii/zmey/` page explains the boss route, attacks, phases, builds, and full fight.
- The exact `Insufficient Materials` interaction wording/sequence is not independently established beyond the page's current offering flow. State only the reliable blocker: the offering cannot proceed until all three named quest Glands are present; do not invent whether the game consumes them one at a time or in one batch beyond the existing page's supported “offer all three” wording.
- Do not confuse Cosmic Disease with unrelated final-boss equipment/weapon disappearance reports, including Grisha Remnant-related reports. If mentioned, keep it to one sentence and link the existing Zmey troubleshooting/fight guide; do not expand the bug.

## Confirmed user blockers to address

- A player finds only one Gland and does not know the other two are part of the same Scripture objective.
- A player picks up **Depleted Gland** and does not know its use. Add one short, answer-first sentence: it is one of the three quest Glands required for Seedbearer's Scripture.
- The Forgotten Tower shows **“Insufficient Materials”** because one or more of Depleted, Thawed, and Faded Gland is missing. Answer with the exact three names.
- A player reaches the tower in daytime or without the full set and does not understand the Night Mode / inventory gate.
- A player reaches Zmey without understanding why the Scripture is relevant.

## Requested generated fields

Generate:

- One SEO title at or below 70 characters. It must naturally include Seedbearer's Scripture plus acquisition / the three Glands and a real final-boss or Cosmic Disease value. Keep Seedbearer's Scripture primary; do not keyword-stuff or turn it into a Zmey Guide. Include `Mortal Shell 2` only if it fits without losing the intent signal.
- One answer-first meta description at or below 160 characters that communicates all three Glands, Night Mode / Forgotten Tower progression, Scripture acquisition, and its role against Zmey's Cosmic Disease. Count characters before returning it.
- One concise quick answer of 1–2 sentences. It must give the acquisition chain and immediately explain why the Scripture matters before Zmey / Cosmic Disease. Do not write a boss walkthrough.
- One compact section headed `Why You Want Seedbearer's Scripture Before Zmey` (or a natural equivalent) covering only: Cosmic Disease is a Zmey fight mechanic; why it disrupts Shell/combat state; the Scripture's role as the corresponding preparation tool; obtain it before entering the final boss. Include a contextual link to `/mortal-shell-ii/zmey/`.
- One short troubleshooting section headed around `Insufficient Materials` explaining the three required Glands by name and preserving the Night Mode check. Do not assert unsupported submission mechanics.
- Up to four FAQ entries, prioritizing: Scripture vs Zmey/Cosmic Disease; cure/resist wording; `Insufficient Materials`; Depleted Gland use. Avoid duplicate FAQ entries already covered unless the answer is materially sharper.

## Media decision

- No verified, self-owned/local screenshots for the three Gland landmarks are currently present in this checkout. Do not copy competitor screenshots or create decorative placeholders.
- A relevant public YouTube walkthrough is discoverable on a third-party guide page and is attributed there to **LunarGaming**: `https://www.youtube.com/embed/Q0GTsG38y5c`. It covers the all-three-Gland / Night Mode / Forgotten Tower sequence according to the source page. If the generated package includes a concise video title/caption, the integrator may add at most one lazy-loaded, click-to-load-compatible embed after the Gland route and before the final-boss explanation; preserve the creator/source link and do not download or re-upload it. If the package does not provide a useful caption, omit the video.
- Do not generate image alt text for images that are not being added.

## Source and uncertainty boundary

- Existing local page and `content-jobs/zmey/research.md` are the main factual authority for integration.
- Current public search confirms the acquisition/problem intent intersection and the public walkthrough attribution, but single Reddit comments are leads only, not hard facts.
- Do not add new exact Scripture duration, mitigation percentage, familiarity value, balance-patch change, boss phase, attack pattern, equipment bug diagnosis, or reward claim unless it is already supported above.
- All final English page copy must be generated by APIMart; do not write final editorial sentences outside the generated package.
