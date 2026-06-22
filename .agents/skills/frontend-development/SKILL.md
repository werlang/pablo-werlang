---
name: frontend-development
description: Build or change the lean Express/Mustache/Webpack portfolio in web/, including the static build path, page script, and checked-in public assets.
---

# Frontend Development

Use this skill for changes under `web/`.

## Structure

- `web/app.js`: Express server, render middleware, route mount, and static assets.
- `web/route/index.js`: homepage route plus `getIndexData()` shared by SSR and static export.
- `web/build.js`: renders `web/view/index.html` into `web/public/index.html` for static deployment.
- `web/view/index.html`: source of truth for portfolio content and section structure.
- `web/src/js/index.js`: page enhancement only, currently navigation highlighting and viewport reveals.
- `web/src/css/index.css`: stylesheet entrypoint.
- `web/src/css/tokens.css`: shared color, spacing, radius, and font tokens.
- `web/src/css/base.css`: shared font imports, reset rules, and global element styles.
- `web/src/css/portifolio.css`: current portfolio page layout and component-like sections.
- `web/public/`: checked-in build output used by the Worker/static deploy path.

## Rules

- Treat pages as server-rendered first and browser-enhanced second.
- Keep portfolio content in the Mustache view unless it becomes genuinely dynamic.
- Keep `getIndexData()` aligned with both `web/app.js` runtime rendering and `web/build.js` static rendering.
- Do not add API clients, frontend models, form helpers, auth flows, or database assumptions unless the site grows into a dynamic app.
- Keep page entry JS small and behavior-oriented; avoid introducing a component framework for static content.
- Keep Webpack entries aligned with page entry files.
- Load fonts through CSS `@import` in `web/src/css/base.css`.
- Rebuild after JS/CSS changes so `web/public/` stays current.

## Validation

Run the web build after JS/CSS changes. `npm test` currently runs Node's native test runner without a checked-in browser suite, so use real browser checks for layout and interaction changes.
