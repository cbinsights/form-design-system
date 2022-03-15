import { test as baseTest, expect } from '@playwright/test';
import {
  fixtures,
  TestingLibraryFixtures,
} from '@playwright-testing-library/test/fixture';

baseTest.describe.configure({ mode: 'parallel' });
const test = baseTest.extend<TestingLibraryFixtures>(fixtures);

test('Intro', async ({ page }) => {
  await page.goto('http://localhost:6006/?path=/story/intro-intro--page');
  const title = page.locator('#contributing-guidelines :text("Contributing guidelines")');
  expect(title).toBeTruthy();
});

test('System Messages', async ({ page }) => {
  await page.goto(
    'http://localhost:6006/?path=/story/ui-guidelines-system-messages--page'
  );
  await expect(page).toHaveTitle(/System Messages/);
});

test('UI Copy', async ({ page }) => {
  await page.goto(
    'http://localhost:6006/?path=/story/ui-guidelines-system-messages--page'
  );
  const title = page.locator('#ui-copy-guidelines :text("UI Copy Guidelines")');
  expect(title).toBeTruthy();
});

test('Dictionary', async ({ page }) => {
  await page.goto('http://localhost:6006/?path=/story/design-tokens-dictionary--color');
  const title = page.locator('.swatchContainer-name :text("Charcoal")');
  expect(title).toBeTruthy();
});

test('Icons', async ({ page }) => {
  await page.goto('http://localhost:6006/?path=/story/icons-icons--page');
  await expect(page).toHaveTitle(/Icons/);
});

test('Style Utilities', async ({ page }) => {
  await page.goto(
    'http://localhost:6006/?path=/story/style-utilities-style-utilities--responsive'
  );
  const title = page.locator('.doctable  :text("Breakpoint prefix")');
  expect(title).toBeTruthy();
});

test('Button story', async ({ page }) => {
  await page.goto('http://localhost:6006/?path=/story/components-button--breakout');
  await expect(page).toHaveTitle(/Button/);
});
