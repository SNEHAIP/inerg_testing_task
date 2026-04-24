import { test, expect } from '@playwright/test';
import { ENV } from '../config/env';

test('UI validation test', async ({ page }) => {
  await page.goto(ENV.baseURL);

 // await expect(page).toHaveTitle(/InerG/);


 
});