import { test, expect } from '@playwright/test';

test('renders the portfolio homepage and template vars', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Pablo Werlang' })).toBeVisible();
    await expect(page.locator('#template-vars')).toHaveCount(0);
    await expect(page.getByText('Desenvolvedor full-stack')).toBeVisible();
    await expect(page.getByRole('img', { name: 'Foto de perfil de Pablo Werlang' })).toBeVisible();
});

test('shows the main developer projects and public links', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'GladCode' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'AutoJudge' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Owlracle' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'MOCITEC' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'TrocaAula' })).toBeVisible();
    await expect(page.getByRole('link', { name: /github.com\/werlang/i })).toHaveAttribute('href', 'https://github.com/werlang/');
    await expect(page.getByRole('link', { name: /Curriculo Lattes/i })).toHaveAttribute('href', 'http://lattes.cnpq.br/6490709711099792');
});
