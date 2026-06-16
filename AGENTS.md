# Agent Operating Guide

This repository contains Pablo Werlang's personal portfolio website. It was started from `project-template` and stays synced with the template's full `web` + `api` + `mysql` baseline. The primary product is still the portfolio homepage in `web/`.

## Canonical Context

- Human documentation: `README.md`, `GUIDE.md`, `TESTING.md`
- Runtime config: `.env.example`, `compose.yaml`, `compose.dev.yaml`, `compose.playwright.yaml`
- Web entrypoint: `web/app.js`
- Main view: `web/view/index.html`
- Browser entrypoint: `web/src/js/index.js`
- Styles: `web/src/css/`
- API entrypoint: `api/app.js`
- Database schema: `database.sql`

## Working Rules

- Keep the site focused on Pablo's developer portfolio first and academic profile second.
- Use local workspace READMEs as source material for project descriptions.
- Keep shared visual tokens in `web/src/css/tokens.css`.
- Keep page-specific layout in `web/src/css/components/portfolio.css`.
- Keep the synced API/MySQL template baseline healthy, but do not make the portfolio homepage depend on it unless the website grows into a dynamic app.
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

For full-stack template parity checks, prefer Docker:

```bash
docker compose -f compose.dev.yaml up -d --build
docker exec pablo-werlang-api-1 sh -c "NODE_ENV=test npm run test:unit"
docker exec pablo-werlang-api-1 sh -c "NODE_ENV=test npm run test:integration"
docker exec pablo-werlang-web-1 npm run build
docker compose -f compose.dev.yaml -f compose.playwright.yaml up -d playwright
docker exec pablo-werlang-playwright-1 npx playwright test
```
