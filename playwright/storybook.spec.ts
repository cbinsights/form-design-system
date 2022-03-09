import { test as baseTest, expect } from '@playwright/test';
// import {
//   fixtures,
//   TestingLibraryFixtures,
// } from '@playwright-testing-library/test/fixture';

baseTest('my test', async ({ page }) => {
  await page.goto('http://localhost:6006/?path=/story/components-button--breakout');
  // eslint-disable-next-line jest/no-standalone-expect
  await expect(page).toHaveTitle(/Button/);
});
