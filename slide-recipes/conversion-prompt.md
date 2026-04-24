# Conversion Prompt — Apply the SCU brand to any deck

Copy and paste the prompt below into a Claude Cowork session after enabling the
`scu-presentation` skill. Drag your source `.pptx` into the same chat.

---

## Prompt to paste

Convert the attached `.pptx` to a Santa Clara University-branded deck using the
`scu-presentation` skill.

Rules:
- Preserve the original content (titles, body copy, lists). Don't rewrite or
  embellish unless I ask.
- Map each source slide to the most appropriate SCU template slide type
  (title, agenda, section divider, content, two-column, key numbers, quote,
  content-with-image, discussion, steps, comparison, work time, closing).
- Use the SCU brand palette and typography defined in the skill's
  `brand-deck-rules.md`. Don't substitute colors or fonts.
- Place the SCU color logo on light slides, white logo on dark slides.
- Add a section divider before any major topic shift if the source doesn't
  already have one.
- Add a closing slide if the source ends abruptly.
- Save the output as `<original-name>-scu.pptx` in the workspace.
- After building, run the visual QA pass described in the skill (render to
  images, inspect for overlapping or cut-off text, fix any issues, re-render).

When you're done, send me the file link and a one-line summary of what changed
between the source and the converted deck.

---

## Tips

- For best results, your source deck should already have clear slide titles and
  bulleted body content. If a slide is image-only or has no text, the skill
  may default to a generic layout.
- Don't paste this prompt into Claude Design. Claude Design uses design systems
  rather than skills. See `scu-design-tokens.md` for the equivalent setup.
- If the conversion looks wrong, ask for a single slide rebuild rather than a
  whole-deck regeneration: "Rebuild slide 3 as a Two-Column layout instead of
  Content."

---

## Variations worth trying

- **Tone shift:** add "Make the body copy more concise. Aim for 4 bullets max
  per slide."
- **Add a stat slide:** add "If any slide has a number worth featuring, convert
  it to a Key Numbers slide."
- **Add a discussion prompt:** add "End with a Discussion slide that asks one
  open question based on the deck's main theme."
