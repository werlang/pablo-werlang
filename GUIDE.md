# Portfolio Guide

## Architecture

The primary product is the portfolio app in `web/`, an Express server that renders Mustache templates and serves Webpack-built browser assets. The repository also keeps the current `project-template` API/MySQL baseline in `api/` and `database.sql` for parity with the source template.

```text
web/app.js -> web/view/index.html -> web/src/js/index.js -> web/src/css/
```

`web/middleware/render.js` injects server values into a temporary `<script id="template-vars" type="application/json">` tag. Browser code reads those values through `TemplateVar`, then removes the tag from the DOM.

The synced API baseline follows the template dependency direction:

```text
API routes -> API models -> MySQL helper -> MySQL
```

## Content Model

The page is intentionally static. Project descriptions are curated from the local workspace and public links:

- GladCode
- AutoJudge
- Owlracle
- MOCITEC
- TrocaAula
- Programacao Web I

Keep copy concise and developer-oriented. Academic information should support the professional profile without taking over the page.

## Styling

- `web/src/css/tokens.css` owns colors, spacing, fonts and shared tokens.
- `web/src/css/base.css` owns font imports, reset rules and default element styles.
- `web/src/css/components/portfolio.css` owns this site's layout and visual components.
- Rebuild after changing CSS because compiled assets live in `web/public/`.

## API Baseline

`api/app.js` exposes the template sample API routes (`/ready`, `/health`, `/login`, and `/items`). These routes are not part of the public portfolio experience today, but they should stay buildable and tested while this repo tracks the updated template baseline.

Keep SQL construction inside `api/helpers/mysql.js`. The helper owns CRUD queries, upserts, transaction context, raw SQL fragments, date formatting, and database dump support.

## Runtime

The Express app supports `HOST` and `PORT` environment variables:

```bash
HOST=127.0.0.1 PORT=4173 npm run production
```

Use `compose.dev.yaml` for local full-stack development. It starts `web`, `api`, and `mysql` with the `pablo-werlang` Docker network and project-specific resource names.
