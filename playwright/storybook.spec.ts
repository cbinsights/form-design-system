import { test as baseTest, expect } from '@playwright/test';
import {
  fixtures,
  TestingLibraryFixtures,
} from '@playwright-testing-library/test/fixture';

const test = baseTest.extend<TestingLibraryFixtures>(fixtures);

test('Button story', async ({ page }, testInfo) => {
  await page.goto('http://localhost:6006/?path=/story/components-button--breakout');
  await expect(page).toHaveTitle(/Button/);

  if (testInfo.status !== testInfo.expectedStatus)
    console.log(`Did not run as expected, ended up at ${page.url()}`);
});
