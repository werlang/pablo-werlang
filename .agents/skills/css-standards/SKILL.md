---
name: css-standards
description: Enforce the current web CSS architecture and warm editorial styling conventions in this repository. Use when creating or changing styles, theming, design tokens, component visuals, layout classes, or page atmosphere in web/src/css.
---

# CSS Standards

## Scope

Applies to the web client styles under `web/src/css/` and class names used in `web/view/*.html` and `web/src/js/index.js`.

## Visual Direction

- The UI theme is warm and print-like, not dark, neon, or glass-heavy.
- Base colors should stay anchored to the current palette: soft paper background, green primary, plum accent, muted text, and restrained blue links.
- Surfaces should feel calm and tactile: soft white cards and panels, warm borders, modest gradients, and controlled shadows.
- Background atmosphere belongs in `base.css` and should stay subtle: layered gradients, low-contrast texture, and no loud decorative effects.
- Avoid reintroducing purple/cyan tech aesthetics unless the user explicitly asks for a different direction.

## Typography

- Use `--font-body` for normal UI copy and form controls.
- Use `--font-display` for hero headings, section headings, and brand-forward moments.
- Use `--font-mono` sparingly for pills, badges, or compact metadata that benefits from a coded label feel.
- Use Font Awesome for UI icons and keep icon styling tied to the package-provided CSS variables instead of version-pinned font-family names.
- The current stack is `Roboto`, `Raleway`, and `Source Code Pro`, loaded through CSS `@import` in `base.css`.
- Do not add new font families in component files. If typography needs to change globally, update `tokens.css` and `base.css` together.

## Icons

- Font Awesome is the shared icon system for the web app and is loaded globally through `web/src/css/base.css`.
- Prefer semantic Font Awesome markup in HTML/JS components for visible controls, badges, and status affordances instead of emoji, ad hoc inline SVG fragments, or bespoke icon fonts.
- Keep visible labels alongside icons in buttons, chips, cards, links, and modal actions; icons support the label and should not replace it by default.
- When a pseudo-element icon is necessary, use the package-defined tokens such as `var(--fa-font-solid)` with the appropriate glyph content rather than hardcoded family names tied to a specific Font Awesome version.
- If an icon requires spacing, alignment, or color treatment, handle that in the component stylesheet instead of inline styles or one-off markup attributes.

## Core Rules

1. Keep `web/src/css/index.css` as the entrypoint: imports only unless a tiny global composition rule is unavoidable.
2. Keep project-wide tokens in `web/src/css/tokens.css` under `:root`.
3. Keep font imports, reset rules, atmospheric background, global typography, and shared element defaults in `web/src/css/base.css`.
4. Keep the current portfolio page styles in `web/src/css/portifolio.css`.
5. Extract smaller CSS files only when there is a real reusable boundary; do not recreate generic template component folders just for ceremony.
6. Never hardcode palette colors, fonts, radii, or shadows when an existing token already covers the need.
7. For hover, focus, active, muted, and surface variations, prefer `color-mix(...)` with existing tokens.
8. Keep responsive rules close to the selectors they modify.
9. Keep interactions visually soft: subtle lift, border shifts, and shadow changes are preferred over aggressive transforms or high-contrast effects.
10. Do not introduce alternate icon systems or version-specific Font Awesome font-family strings in CSS.

## Token Usage

Use shared token names from `tokens.css`:

- Typography: `--font-body`, `--font-display`, `--font-mono`
- Background/surfaces: `--color-background`
- Brand/accent: `--color-main`, `--color-main-alt`
- Contrast on colored surfaces: `--color-main-contrast`, `--color-alt-contrast`
- Text and links: `--color-text`, `--color-text-secondary`, `--color-link`
- Feedback: `--color-info`, `--color-success`, `--color-warning`, `--color-error`
- Structure: `--color-border`, `--color-shadow`, `--radius`, `--radius-sm`, `--radius-pill`

## Portfolio Language

- Hero, profile, project cards, repository chips, and academic timeline styles currently live in `portifolio.css`.
- Cards should read as soft paper surfaces: bright backgrounds, warm borders, modest radius, and careful shadows.
- Compact metadata elements such as pills, chips, tags, and contact links should feel crisp and intentional, not flashy.
- Use semantic classes in HTML for new sections instead of inline styles.

## Organization Pattern

- `tokens.css`: color, spacing, radius, and font primitives
- `base.css`: reset, atmospheric background, global typography primitives, and font imports
- `index.css`: imports tokens/base/portfolio CSS
- `portifolio.css`: portfolio page sections and responsive rules

## Interaction with JS

When JS has visual state changes, toggle CSS classes instead of writing inline styles.

Example pattern:

- JS toggles `active` on navigation links and `is-visible` on reveal blocks
- CSS in `portifolio.css` defines those variants with token-based colors and surface treatments

## Theming Guardrails

- Prefer warm neutrals and soft contrast over dramatic dark/light clashes.
- Keep gradients within the project palette and use them mainly for large branded surfaces.
- Use `--font-display` only where hierarchy or brand presence matters; do not turn body copy into display text.
- Preserve roomy spacing in cards and timeline sections. The current UI should feel calm and breathable.
- When in doubt, match the tone of `base.css` and `portifolio.css` before inventing a new pattern.

## Review Checklist

- Does `index.css` remain an import-focused entrypoint?
- Does the change belong in `tokens.css`, `base.css`, or `portifolio.css`?
- Does the change preserve the warm editorial theme instead of drifting back to a dark or neon look?
- Are all colors, fonts, radii, and shadows tokenized via `var(--...)` where appropriate?
- Do icon treatments follow the shared Font Awesome setup and avoid ad hoc glyph systems or stale font-family names?
- Are tone variants created with `color-mix(...)`?
- Do responsive overrides stay near the selectors they modify?
- Are JS visual states represented by CSS classes instead of inline styles?
- Do headings, badges, buttons, and surfaces still match the current typography and component language?
