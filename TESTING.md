# Testing Guide

## Build Validation

```bash
cd web
npm install
npm run build
```

The build emits assets into `web/public/js/`, `web/public/css/`, and `web/public/assets/generated/`.

## Browser Tests

```bash
cd web
npm test
```

The Playwright smoke tests in `web/tests/` verify:

- homepage render;
- template variable cleanup;
- main developer projects;
- public GitHub and Lattes links.

For layout changes, also check desktop and mobile viewports in a real browser and confirm there is no horizontal overflow.

## Full-Stack Template Baseline

Use Docker when validating the synced API/MySQL baseline:

```bash
docker compose -f compose.dev.yaml up -d --build
docker exec pablo-werlang-api-1 sh -c "NODE_ENV=test npm run test:unit"
docker exec pablo-werlang-api-1 sh -c "NODE_ENV=test npm run test:integration"
docker exec pablo-werlang-web-1 npm run build
docker compose -f compose.dev.yaml -f compose.playwright.yaml up -d playwright
docker exec pablo-werlang-playwright-1 npx playwright test
```

The Playwright overlay reaches the web service at `http://web:3000` inside Docker and sets `API_URL=http://api:3000` for container-to-container API requests.

## CSS Loading

The stylesheet entrypoint is `web/src/css/index.css`. It imports `tokens.css` first, then `base.css`, then the portfolio component stylesheet.
