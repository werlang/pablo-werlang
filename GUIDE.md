# Portfolio Guide

## Architecture

The active product is a lean portfolio app under `web/`.

```text
web/app.js
  -> web/route/index.js
  -> web/view/index.html
  -> web/src/js/index.js
  -> web/src/css/index.css
```

`web/app.js` serves the Express/Mustache version for local runtime. `web/build.js` renders the same home page into `web/public/index.html` for static deployment. Both paths use `getIndexData()` from `web/route/index.js`.

There is no API, database, auth flow, or generic starter entity layer in the current app.

## Content Model

The page is intentionally curated and mostly static. Keep the first impression focused on Pablo as a developer, then use the academic section to support the professional profile.

Current content groups:

- profile, contact, and public identity links;
- developer stack and selected repositories;
- project cards for GladCode, AutoJudge, Owlracle, MOCITEC, TrocaAula, and related work;
- academic and teaching trajectory at IFSul.

Use local workspace READMEs and public repository/profile pages as source material before changing project descriptions.

## Styling

`web/src/css/index.css` is only the CSS entrypoint. It imports:

- `tokens.css` for shared colors, typography, radius, and spacing tokens;
- `base.css` for font imports, reset rules, global element styles, and page atmosphere;
- `portifolio.css` for the current portfolio page layout and component-like sections.

Keep shared visual decisions in `tokens.css`. Keep page-specific selectors in `portifolio.css` until there is a strong reason to extract smaller component files.

## Runtime

Install and run locally:

```bash
cd web
npm install
npm run build
npm run production
```

The Express server uses `HOST` and `PORT`:

```bash
HOST=127.0.0.1 PORT=4173 npm run production
```

For local development with the file watcher and Webpack Dev Server:

```bash
cd web
npm run development
```

## Docker

```bash
cp .env.example .env
docker compose -f compose.dev.yaml up -d --build
```

The dev stack starts only the `web` service and exposes it at `http://localhost`.

## Deploy Path

The Cloudflare Worker in `wrangler/` serves static assets through the `ASSETS` binding. Build the web app first so `web/public/index.html`, `web/public/css/index.min.css`, and `web/public/js/index.min.js` are current.

```bash
docker compose -f compose.dev.yaml run --rm web npm run build
docker compose -f compose.deploy.yaml run --rm --service-ports wrangler
```
