import { test as baseTest, expect } from '@playwright/test';
import {
  fixtures,
  TestingLibraryFixtures,
} from '@playwright-testing-library/test/fixture';

const test = baseTest.extend<TestingLibraryFixtures>(fixtures);

test('Intro', async ({ page }, testInfo) => {
  await page.goto('http://localhost:6006/?path=/story/intro-intro--page');
  const title = page.locator('#contributing-guidelines :text("Contributing guidelines")');
  expect(title).toBeTruthy();

  if (testInfo.status !== testInfo.expectedStatus)
    console.log(`Did not run as expected, ended up at ${page.url()}`);
});

test('System Messages', async ({ page }, testInfo) => {
  await page.goto(
    'http://localhost:6006/?path=/story/ui-guidelines-system-messages--page'
  );
  await expect(page).toHaveTitle(/System Messages/);

  if (testInfo.status !== testInfo.expectedStatus)
    console.log(`Did not run as expected, ended up at ${page.url()}`);
});

test('UI Copy', async ({ page }, testInfo) => {
  await page.goto(
    'http://localhost:6006/?path=/story/ui-guidelines-system-messages--page'
  );
  const title = page.locator('#ui-copy-guidelines :text("UI Copy Guidelines")');
  expect(title).toBeTruthy();

  if (testInfo.status !== testInfo.expectedStatus)
    console.log(`Did not run as expected, ended up at ${page.url()}`);
});

test('Dictionary', async ({ page }, testInfo) => {
  await page.goto('http://localhost:6006/?path=/story/design-tokens-dictionary--color');
  const title = page.locator('.swatchContainer-name :text("Charcoal")');
  expect(title).toBeTruthy();

  if (testInfo.status !== testInfo.expectedStatus)
    console.log(`Did not run as expected, ended up at ${page.url()}`);
});

test('Icons', async ({ page }, testInfo) => {
  await page.goto('http://localhost:6006/?path=/story/icons-icons--page');
  await expect(page).toHaveTitle(/Icons/);

  if (testInfo.status !== testInfo.expectedStatus)
    console.log(`Did not run as expected, ended up at ${page.url()}`);
});

test('Style Utilities', async ({ page }, testInfo) => {
  await page.goto(
    'http://localhost:6006/?path=/story/style-utilities-style-utilities--responsive'
  );
  const title = page.locator('.doctable  :text("Breakpoint prefix")');
  expect(title).toBeTruthy();

  if (testInfo.status !== testInfo.expectedStatus)
    console.log(`Did not run as expected, ended up at ${page.url()}`);
});

test('Button story', async ({ page }, testInfo) => {
  await page.goto('http://localhost:6006/?path=/story/components-button--breakout');
  await expect(page).toHaveTitle(/Button/);

  if (testInfo.status !== testInfo.expectedStatus)
    console.log(`Did not run as expected, ended up at ${page.url()}`);
});
