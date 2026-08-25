# Gloombound Flame hotspot update brief

## Job contract

- **Existing canonical page:** `/mortal-shell-ii/gloombound-flame/`
- **Integration mode:** bounded in-place patch only. Do not create `/night-mode/`, do not change the slug, and do not rewrite the existing guide wholesale.
- **Primary intent:** Gloombound Flame location.
- **Secondary intent:** how to unlock Night Mode, return to Day Mode, and understand confirmed versus player-reported Night Mode changes.
- **Output requirement:** return a page package whose `articleMarkdown` contains only compact replacement/addition blocks. The integrator will preserve correct existing route prose, images, FAQ coverage, and source list unless a requested block is being replaced.

## GSC opportunity

- Hotword 7D: 5 clicks / 642 impressions.
- Latest query cluster:
  - `gloombound flame`: 80 impressions, 0 clicks, approximately position 5.9.
  - `mortal shell 2 gloombound flame`: 37 impressions, 0 clicks, approximately position 9.9.
  - `gloombound flame mortal shell 2`: 19 impressions, 0 clicks, approximately position 7.7.
- Existing query coverage includes `light extinguished lantern`, `call forth the night`, and `gloombound flame location`.
- The page was last updated 2026-08-23. This is the only target in this batch eligible for an in-place hotspot update; New Game Plus and Seedbearer's Scripture were updated 2026-08-25 and are cooldown.

## Stable facts already supported by the page

- The Gloombound Flame is in Fainweald near the Widow's Overlook Beacon, inside the Great Arbiter of Flesh arena, beside a ritual stone / stone marker.
- Launch gameplay footage shows the Flame can be picked up while Great Arbiter of Flesh is still alive. Keep this as gameplay-observed / video-supported, not developer-confirmed.
- Return to the top of Marrow Keep, interact with `LIGHT EXTINGUISHED LANTERN`, summon Thestus, and choose `CALL FORTH THE NIGHT`; the prompt says `Enable increased difficulty.`
- Thestus is at the top of Marrow Keep after the lantern is lit.
- Night Mode is reversible through Thestus. `Seek Daylight` is supported by secondary launch coverage but was not locally video-verified; label it secondary-source supported.
- Existing page evidence supports increased difficulty, more rewards / Gloom, extra hazards, additional encounters, a night-only merchant, night-related quest content, and the Shrine of Sorrows Night Mode-only dungeon. Keep exact multipliers and exact Gloom numbers out of confirmed-fact wording.
- Seedbearer's Scripture is a separate Night Mode-only objective requiring Depleted, Thawed, and Faded Glands at the Forgotten Tower; link to the existing page rather than duplicating its route.

## Latest external evidence and boundaries

- Official Steam developer post, Balance Patch 1 (2026-08-20): https://steamcommunity.com/app/2584270/discussions/0/582805931178489108/
  - The post says future updates will extend Night Mode, Tarstones, PP Items, and more.
  - It does not publish a Night Mode multiplier or invalidate the existing activation chain.
  - Do not present future Night Mode extensions as already released.
- Recent Reddit player discussion, 2026-08-24: https://www.reddit.com/r/MortalShell/comments/1vwwutf/just_beat_the_game_for_the_first_time_have_some/
  - A player reports one extra dungeon near Mushroom Village, a night vendor near the abandoned outpost selling Glimpses / Tarstones / thorium, extra Glimpses near Shell locations, more overworld enemies, and roughly 20% extra Gloom.
  - Treat all of these as player-reported discoveries, not confirmed facts. Do not publish the 20% figure as settled fact.
- Recent Reddit discussion, 2026-08-24: https://www.reddit.com/r/MortalShell/comments/1vwwu9t/how_much_better_is_the_loot_in_night_mode/
  - Players report more difficult encounters, extra moves / reduced stagger, currency differences, night-only dungeons, a night vendor, and a night-only boss/NPC discovery.
  - These are anecdotal and conflicting; label them community-reported or omit them if they would confuse the answer.

## Requested bounded generated fields

Generate:

1. One SEO title at or below 65 characters, led by `Mortal Shell 2 Gloombound Flame`, and naturally including location or Night Mode.
2. One answer-first meta description at or below 150 characters covering the Flame location, lighting the `LIGHT EXTINGUISHED LANTERN`, Thestus, and Night Mode.
3. One concise Quick Answer of 1–2 sentences answering where the Flame is and the exact unlock chain.
4. One compact section headed around `How to Unlock Night Mode` that directly answers the four first-screen questions: where the Flame is, what the Light Extinguished Lantern is, how to find Thestus, and how to choose `CALL FORTH THE NIGHT`.
5. One compact section headed around `What Changes in Night Mode` that separates confirmed / source-supported facts from a short `Community-reported discoveries` list. Include only verified or clearly attributed Night Mode rewards/events; do not invent exact numbers.
6. One short section around `How to Return to Day Mode`, preserving the secondary-source boundary for `Seek Daylight`.
7. Up to four FAQ entries only if they sharpen the existing FAQ; do not duplicate the current page unnecessarily.

## Integration boundaries

- Preserve the canonical URL, current location evidence, images, internal links, and the existing evidence-tier language.
- Preserve the distinction between confirmed/source-supported facts and player discoveries. Do not convert Reddit or Steam discussion into official mechanics.
- Do not add a standalone Night Mode page, Tarcore page, or any new URL.
- Do not add exact Night Mode stat multipliers, exact Gloom percentages, or future-patch claims as current facts.
- The activation chain must explicitly say to use the Gloombound Flame to light the `LIGHT EXTINGUISHED LANTERN` before Thestus appears. Do not imply that merely interacting with an unlit lantern summons Thestus.
- Do not publish the Reddit-reported 20% figure even with a community label; summarize the report as unquantified currency/reward differences if needed.
- Where the generated block mentions the current official patch or community discoveries, include Markdown links to the supplied official Steam Balance Patch 1 post and the two supplied Reddit threads. Keep the links in a compact evidence note; do not add a full source rewrite.
- The generated `articleMarkdown` must be patch blocks, not a full replacement article and not a new H1.
