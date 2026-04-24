
import { test } from '@playwright/test';
import { ChartPage } from '../pages/ChartPage.js';

test('Line chart values extraction', async ({ page }) => {

  const chart = new ChartPage(page);

  await page.goto('https://inerg-test.web.app/');

  await page.waitForTimeout(3000);

  await chart.selectState('Kerala');

  await chart.printChartValues();
});


// second test
/*
test('Tooltip should display on hover', async ({ page }) => {

  const chart = new ChartPage(page);

  await page.goto('https://inerg-test.web.app/');

  await page.waitForTimeout(3000);

  await chart.hoverOnElement();

  await expect(chart.tooltip.first()).toBeVisible();

  console.log(" Tooltip displayed successfully");
});
*/