# Lucky Point Coffee — Design System

A warm, minimal design system for **Lucky Point Coffee**, a specialty coffee café in **Osorno, Chile**. It powers a modern website with Inicio, Quiénes Somos, an interactive digital **Carta** with a **Lucky Points** loyalty system, a **Tienda** for whole-bean coffee and accessories, and a Puntos explainer.

> **Stack note:** the live website is built strictly with **HTML5 + pure CSS3 (CSS variables) + Vanilla JS**, BEM-friendly and GitHub-Pages-ready. This design-system repo additionally ships React recreations of the same UI so design agents can compose branded screens quickly — the *tokens and visual rules here are the source of truth* for either stack.

## Sources used
- **Menu PDF** — `uploads/Menu LP .pdf` (full carta extracted into `ui_kits/website/menu-data.js`).
- **Display font** — `uploads/Handgoal.ttf` (copied to `assets/fonts/Handgoal.ttf`).
- **GitHub repo** — https://github.com/SebaPobando/lucky-point — *attached but currently empty (no commits)*. Explore it once code lands there to refine these recreations against the real implementation.

---

## CONTENT FUNDAMENTALS
**Language:** Spanish (Chile). Friendly, warm, unpretentious — a neighborhood café that takes its coffee seriously but never talks down to you.

- **Voice & person:** Mostly **“tú”** (informal you) and **“nosotros”** for the café (“Tostamos en lotes pequeños”, “Nuestra carta”). Inclusive and personal, never corporate.
- **Tone:** Cálido, cercano, honesto. Short declarative sentences. A touch of warmth (“Hecho con cariño en el sur de Chile”) without being saccharine.
- **Casing:** Sentence case for body and UI. **Display headings render ALL-CAPS** because the Handgoal font is uppercase by nature — so write headings normally and let the font do the casing. Eyebrows/overlines are intentionally UPPERCASE with wide tracking.
- **Product names** keep their café spelling: *Mokka, Vaniglia, Capuccino, Aerocano, Cold Brew, Iced Latte* (mix of Spanish, Italian and English borrowings — keep as-is from the carta).
- **Prices:** always dual — **`$3.200` CLP + its Lucky Points equivalent** (Chilean grouping with a period: `$3.200`, not `$3,200`). Never show a price without points.
- **Lucky Points rule (temporary, state it plainly):** “10 CLP = 1 Lucky Point”. Refer to the currency as **Lucky Points** (or **pts** in compact UI).
- **Emoji:** **none.** The brand’s one playful glyph is the ★ inside the gold Lucky Points token — used as a brand mark, not as emoji decoration.
- **Examples:** *“Tu punto de la suerte para un buen café.” · “Recién tostado.” · “Llévate Lucky Point a casa.” · “Empezar a sumar.”*

## VISUAL FOUNDATIONS
**Overall vibe:** warm, clean, rounded and tactile — cream paper, coffee browns, a confident dark-green accent, and a single gold spark for the loyalty program.

- **Color:** Cream surfaces (`--lp-cream-50/100/200/300`) as the canvas; coffee browns (`--lp-espresso → --lp-latte`) for text and rich dark blocks; **forest green (`--lp-forest #20392B`)** as the primary accent / CTA; **ink** for high-contrast dark buttons; **gold (`--lp-gold #C68A2E`)** reserved almost exclusively for Lucky Points. Reference semantic aliases (`--surface-page`, `--text-strong`, `--accent`, `--points`) rather than raw values.
- **Type:** Display = **Handgoal** (rounded marker hand, ALL-CAPS) on h1–h3 and big numbers only. Body/UI = **Montserrat** (400–700). Never set long text in Handgoal. Fluid `clamp()` scale, mobile-first.
- **Spacing:** 8px base rhythm (`--sp-1…9`). Generous section padding (`--sp-7/8/9`); `--gutter` clamps page margins.
- **Backgrounds:** flat cream — **no busy patterns or noisy gradients.** The only gradients are warm, two-stop brown washes used as *image placeholders* (hero panels, product blocks) where real photography will go. Dark sections use solid espresso or forest, not gradients.
- **Corner radii:** rounded and friendly to match Handgoal — cards `--r-lg (20px)`, inputs `--r-md (14px)`, buttons & pills fully `--r-pill`. Avoid sharp 0-radius corners.
- **Cards:** white (or sand/dark/forest) surface, 20px radius, hairline border (`--border`), soft **warm brown-tinted shadow** (`--shadow-sm`), lifting to `--shadow-lg` with a `-4px` translate on hover when interactive. No colored-left-border cards.
- **Shadows:** always brown-tinted `rgba(42,28,18,…)`, never pure black. Four steps xs→lg. Focus ring is a 3px forest glow.
- **Borders:** 1px hairlines for dividers; **2px** borders for interactive controls (buttons, inputs, tabs) — gives the UI a slightly drawn, sturdy feel.
- **Buttons:** pill-shaped, weight-600 Montserrat. Press = `scale(0.97)`; hover = `brightness(1.06)`. Primary is forest, then dark (ink), gold (points), secondary (outline), ghost.
- **Animation:** subtle and quick. `--dur 240ms` with a soft ease; hover lifts and brightness; **no bounces, no infinite loops, no parallax.** Reduced-motion friendly.
- **Transparency / blur:** used sparingly — sticky header is translucent cream with `backdrop-filter: blur(10px)`; category badges over images use a dark translucent chip with blur.
- **Imagery vibe:** warm, inviting, slightly moody coffee photography (browns, creams, natural light) — placeholders here are warm brown gradients standing in for real photos.
- **Layout rules:** `--container 1180px`, content centered with `--gutter` margins. Sticky header (68px). Mobile-first: nav collapses < 760px, hero grids stack.

## ICONOGRAPHY
- **There is no icon system in the source material** — the brand’s identity is typographic. Use icons sparingly.
- The **one proprietary glyph** is the **★ star inside a gold circular token**, the Lucky Points mark. Reuse it consistently (gold disc, espresso star) for anything points-related.
- **Emoji are not used.** Unicode arrows (→) appear in low-emphasis “ver más” links — acceptable, keep them rare.
- If a screen genuinely needs UI icons (cart, search, location), use **[Lucide](https://lucide.dev)** via CDN — thin, rounded 2px strokes that match the 2px control borders and the rounded radii. **This is a substitution flagged for the user** — there were no icons in the brief, so confirm before standardizing on Lucide.
- Never hand-draw SVG illustrations or generate decorative imagery; use real photography in warm tones, or the warm-gradient placeholders shown in the kit.

---

## INDEX / MANIFEST
**Root**
- `styles.css` — global entry (consumers link this). `@import`s tokens + Montserrat.
- `tokens/colors.css`, `tokens/typography.css` (+ Handgoal `@font-face`), `tokens/spacing.css` — all custom properties.
- `assets/fonts/Handgoal.ttf` — display webfont.
- `SKILL.md` — Agent-Skills-compatible entry for downloading this system into Claude Code.

**Components** (`window.LuckyPointCoffeeDesignSystem_11711f.*`)
- `components/forms/` — **Button**, **Input**, **QtyStepper**
- `components/core/` — **Card**, **Badge**
- `components/coffee/` — **PriceTag** (dual CLP/points + `formatCLP`/`toLuckyPoints`), **MenuItem**, **ProductCard**
- `components/navigation/` — **CategoryTabs**

**Guidelines / specimen cards** — `guidelines/*.card.html` (Colors, Type, Spacing, Brand).

**UI kit** — `ui_kits/website/` — interactive site recreation (Inicio, Quiénes Somos, Carta, Tienda, Puntos). Open `ui_kits/website/index.html`.

---
*Built from the menu PDF, the Handgoal font, and the brand brief. The `SebaPobando/lucky-point` GitHub repo was empty at build time — revisit it for source-accurate refinements.*
