# Portfolio Guide

## Architecture

The product is the portfolio app in `web/`, an Express server that renders one Mustache page and serves Webpack-built browser assets.

```text
web/app.js -> web/view/index.html -> web/src/js/index.js -> web/src/css/
```

The page is intentionally static. Server-side variables are limited to Mustache values such as the page title, heading and current year.

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
- `web/src/css/index.css` owns this site's small page layout.
- Rebuild after changing CSS because compiled assets live in `web/public/`.

## Runtime

The Express app supports `HOST` and `PORT` environment variables:

```bash
HOST=127.0.0.1 PORT=4173 npm run production
```

Use `compose.dev.yaml` for local Docker development. It starts only `web` on the `pablo-werlang` Docker network.
