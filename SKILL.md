---
name: lucky-point-design
description: Use this skill to generate well-branded interfaces and assets for Lucky Point Coffee (specialty café, Osorno, Chile), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

Key reminders for Lucky Point Coffee:
- **Type:** Handgoal (ALL-CAPS marker hand) for h1–h3 only; Montserrat for everything else.
- **Color:** cream surfaces, coffee browns, forest-green CTAs, gold reserved for Lucky Points.
- **Prices are always dual:** `$3.200` CLP + Lucky Points equivalent (10 CLP = 1 pt). Use the `PriceTag` component / `toLuckyPoints()` helper.
- **Voice:** Spanish (Chile), warm and informal ("tú"), no emoji. The ★ gold token is the only brand glyph.
- Components live under `window.LuckyPointCoffeeDesignSystem_11711f` once `_ds_bundle.js` is loaded; tokens come from `styles.css`.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
