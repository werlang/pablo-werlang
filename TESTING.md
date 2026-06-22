# Testing Guide

## Automated Checks

```bash
cd web
npm install
npm run build
npm test
```

`npm run build` runs Webpack and then `web/build.js`, producing:

- `web/public/js/index.min.js`;
- `web/public/css/index.min.css`;
- `web/public/index.html`.

`npm test` currently runs `node --test`. There are no checked-in tests under `web/tests/`, so this command is a sanity check for any future native Node tests, not a browser coverage signal.

## Docker Checks

Use Docker when host Node/npm is unavailable or when validating the container path:

```bash
docker compose -f compose.dev.yaml up -d --build
docker exec pablo-werlang-web-1 npm run build
docker exec pablo-werlang-web-1 npm test
```

The only local service is `web`, exposed at `http://localhost`.

## Browser Review

For HTML, CSS, or user-facing JS changes, inspect the page in a real browser after rebuilding.

Check at least:

- desktop width around 1440px;
- mobile width around 390px;
- no horizontal overflow;
- hero/profile contacts, project cards, repository chips, and academic timeline remain readable;
- section reveal behavior and active navigation still work.

There is no checked-in Playwright compose overlay in this repo at the moment. Do not claim automated browser coverage unless a test suite is added and run.

## Static Deploy Review

Before deploy, verify that the generated static output exists:

```bash
test -f web/public/index.html
test -f web/public/css/index.min.css
test -f web/public/js/index.min.js
```

When CSS or JS source changes, rebuild before committing or deploying so `web/public/` stays in sync.
