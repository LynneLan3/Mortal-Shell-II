# Nameless Captive CTR intent package

## Page scope

## Locked CTR copy contract

- The `title` field must be exactly: `Mortal Shell 2 Nameless Captive Location & How to Beat It`.
- The `description` must be 160 characters or fewer; prefer: `Find Nameless Captive at Captive's End in Prisoner's Domain, then survive its sword strings and red-warning attacks to beat it.`
- The visible H1 uses the same page title in this site architecture; keep the H1 promise centered on `Nameless Captive Location & How to Beat the Boss`.
- The `description` and `quickAnswer` must lead with the location, then reaching/triggering the encounter, then the beat strategy. Do not use `Boss Guide` as the main title promise.

- Canonical URL: `/mortal-shell-ii/nameless-captive/`
- Primary intent: `FIND + BEAT`
- Target title direction: `Mortal Shell 2 Nameless Captive Location & How to Beat It`
- Target H1 direction: `Nameless Captive Location & How to Beat the Boss`
- Do not create a new boss page, change the slug, or rewrite unrelated boss, trophy, weapon, or route pages.

## Required first-screen order

1. Location: Nameless Captive is at Captive's End inside Prisoner's Domain in Fainweald.
2. How to reach / trigger: enter through the western / northwest Corrupted Gate after cleansing the Nochtean Gate beacon, then pass Executioner's Pulpit and Tishina's Confessor to reach Captive's End.
3. How to beat: wait for the full sword strings to finish, take only short punish windows, dodge red-warning attacks, and keep central arena space.
4. Attacks / rewards: cover the sword string, headspin / windmill, kick / red attack, leap / slam, Captive's Scabstone, and the Headcase trophy. Keep Peter's Perfect Parry as a clearly labeled pre-kill warning.

## Stable facts from the existing page

- The Nameless Captive is one of the major Corrupted Gate bosses in Fainweald.
- The arena is at Captive's End in Prisoner's Domain.
- The current route uses Nochtean Gate, Executioner's Pulpit, and Tishina's Confessor as approach landmarks.
- The fight's reliable rhythm is to survive the complete sword combo, wait for recovery, land a short punish, and reset.
- Red-warning attacks should be dodged rather than parried. The headspin can be handled by creating distance for a normal kill; Peter's Perfect Parry requires the separate Untarnished Seal setup and the full seven-hit sequence before killing the boss.
- Eredrim is optional supporting help for 1 Glimpse.
- The boss reward is Captive's Scabstone for the Great Martyr's Blade, and the Headcase trophy / achievement is tied to defeating the boss.

## Writing constraints

- Answer the location before combat strategy.
- Do not lead with `Boss Guide`, `Attacks & Rewards`, or generic walkthrough language.
- Do not invent a precise trigger, map coordinate, phase threshold, damage value, or reward beyond the facts above.
- Preserve the existing Peter's Perfect Parry and New Game Plus links when relevant.
- Return the normal page-package JSON fields: `title`, `description`, `quickAnswer`, `faq`, and `articleMarkdown`.
