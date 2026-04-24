# SCU Design Tokens — for Claude Design (or any AI slide tool)

A short, paste-ready reference for setting up a Santa Clara University design
system in Claude Design, or for prompting any AI slide tool with brand context.

---

## Colors

| Token | Hex | Use |
|-------|-----|-----|
| SCU Red | `#A32035` | Primary brand red. Title/section backgrounds, card borders, rule bars. |
| Bronco Red | `#862633` | Darker red. Accent panels on title slides, comparison cards. |
| Adobe Light | `#F8F3E5` | Default light background for content slides. |
| Gold | `#FFB600` | Accent only. Short rules under titles, bottom bar on closing slides. Never as a background. |
| Black | `#000000` | Headlines on light slides. |
| Body Gray | `#555555` | Body text on light slides. |
| White | `#FFFFFF` | All text on red backgrounds. Card fills on light slides. |

Optional brand neutrals (use sparingly):
- Stone `#758592`, Fog `#E0DAD3`, Slate `#425766`, Clay `#C2A98B`

---

## Typography

| Tier | Headers | Body |
|------|---------|------|
| Primary (licensed) | Santa Clara Nueva | Minion Pro |
| Free fallback | Figtree (Google Fonts) | Crimson Pro (Google Fonts) |

| Role | Size | Weight |
|------|------|--------|
| Slide title | 36-44pt | Bold (700) |
| Section header | 24-28pt | Bold (700) |
| Category label (uppercase, letter-spaced) | 16-20pt | Semibold (600) |
| Body / bullets | 16-18pt | Medium (500) |
| Large stats | 60-72pt | Black (900) |
| Captions | 14pt minimum | Medium (500) |

Rules:
- Never set any font below 14pt.
- Title must be at least 1.75x the body size.
- Title and closing slides: centered titles. Content slides: left-aligned.

---

## Voice

- Warm and pragmatic. Confident without bravado.
- Cut throat-clearing and adverbs. Drop "really," "just," "fundamentally."
- Active voice. Name the actor.
- Two-item rhythms over three. Short sentences.
- For AI Kitchen specifically: kitchen-themed metaphors are welcome (recipes,
  taste tests, slow roasts, plating, etc.).

---

## Layout patterns

- Dark slides (title, section divider, discussion, work time, closing): SCU
  Red background with a Bronco Red right panel (~25% width).
- Light slides (all content types): Adobe Light background.
- SCU white logo on dark slides, color logo on light slides.
- 0.5" minimum margins. Content covers ≥70% of the safe area.
- Cards on light slides: white fill, 2pt SCU Red border, rounded corners.
- Vertical SCU Red rule bar on left edge of single-column content slides.
- Numbered steps: SCU Red rounded-rectangle badges with white numbers.

---

## How to use this in Claude Design

1. Open a new design system in Claude Design.
2. Paste the colors table above into the "Brand colors" section. Mark SCU Red
   as the primary, Bronco Red as secondary, Gold as accent.
3. Set typography to Figtree (sans, headers) and Crimson Pro (serif, body).
4. Paste the voice notes into the brand voice or tone field.
5. Save and apply. Future projects in your Claude Design will pick up the
   tokens automatically.

---

## How to use this in any AI slide tool (without a design system feature)

Paste this block into your prompt before asking for slides:

> Use this brand:
> Colors: SCU Red #A32035 (primary), Bronco Red #862633 (secondary), Adobe
> Light #F8F3E5 (backgrounds), Gold #FFB600 (accent). Fonts: Figtree for
> headers (bold, 36-44pt), Crimson Pro for body (medium, 16-18pt). Voice:
> warm, pragmatic, confident. No throat-clearing, no adverb crutches. Active
> voice.

That's the design tokens block, compressed.

---

## Brand assets

- SCU color logo: download from [scu.edu/marcom](https://www.scu.edu/marcom/) or pull from the `scu-presentation` skill ZIP under `assets/scu-logo-color.png`.
- SCU white logo: same source, `scu-logo-white.png` for dark backgrounds.

Do not modify the logos. Maintain ~0.5" of clear space around them.
