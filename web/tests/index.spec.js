import { expect, test } from '@playwright/test';

test('renders the lean portfolio homepage', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Pablo Werlang/);
    await expect(page.getByRole('heading', { name: 'Pablo Werlang', level: 1 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Projetos em andamento' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'GladCode' })).toBeVisible();
    await expect(page.getByRole('link', { name: /github/i }).first()).toHaveAttribute('href', 'https://github.com/werlang/');
    await expect(page.locator('#template-vars')).toHaveCount(0);
});
