// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: Boolean(process.env.CI),
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'html',
    use: {
        baseURL: process.env.WEB_BASE_URL || 'http://127.0.0.1:3000',
        trace: 'on-first-retry',
    },
    webServer: process.env.WEB_BASE_URL ? undefined : {
        command: 'npm run production',
        url: 'http://127.0.0.1:3000',
        reuseExistingServer: !process.env.CI,
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
});
