# Agent Operating Guide

This repository contains Pablo Werlang's personal portfolio website. It was started from `project-template`, but the current app is intentionally lean and lives in `web/`.

## Canonical Context

- Human documentation: `README.md`, `GUIDE.md`, `TESTING.md`
- Runtime config: `.env.example`, `compose.yaml`, `compose.dev.yaml`, `compose.playwright.yaml`
- Web entrypoint: `web/app.js`
- Main view: `web/view/index.html`
- Browser entrypoint: `web/src/js/index.js`
- Styles: `web/src/css/`

## Working Rules

- Keep the site focused on Pablo's developer portfolio first and academic profile second.
- Use local workspace READMEs as source material for project descriptions.
- Keep shared visual tokens in `web/src/css/tokens.css`.
- Keep the small page-specific layout in `web/src/css/index.css` unless the CSS grows enough to justify a component file again.
- Do not reintroduce API/MySQL baseline files unless the website grows into a dynamic app.
- Keep Compose resources named for `pablo-werlang`, not `template`, to avoid collisions with the source template repo.
- Rebuild `web/public/` assets after CSS or JS changes.
- Validate desktop and mobile layout with a real browser whenever possible.

## Default Validation

```bash
cd web
npm install
npm run build
npm test
```

In this Codex environment, `npm` may not be available on the host PATH. If so, use Docker or an existing project-local Node toolchain only for validation, and report that clearly.

```bash
docker compose -f compose.dev.yaml up -d --build
docker exec pablo-werlang-web-1 npm run build
docker compose -f compose.dev.yaml -f compose.playwright.yaml up -d playwright
docker exec pablo-werlang-playwright-1 npx playwright test
```
