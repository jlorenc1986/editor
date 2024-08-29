import { test, expect } from '@playwright/test';
import { markdownHeaderLevelThree } from '../src/constants/test.mocks';

/**
 * check if app is rendered
 */
test('hello world', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Markdown Editor')).toBeVisible();
});

/**
 * check if user types on editor are the preview changes accordingly
 */
test.only('write markdown and get proper preview', async ({ page }) => {
  await page.goto('/');
  await page.locator('#editor').fill(markdownHeaderLevelThree);
  await expect((await page.locator('.preview').allInnerTexts()).toLocaleString()).toContain(
    'A third-level heading'
  );
});
