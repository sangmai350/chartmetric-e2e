import { test, expect } from '@playwright/test';

test('Navigate successfully', async ({ page }) => {
  const title = "Login | Chartmetric";

  await page.goto("https://app.staging.chartmetric.com/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(title);
});

test('Login failure', async ({ page }) => {
  const email = "sangmai350@gmail.com";
  const incorrect_password = "failLoginCase";

  await page.goto("https://app.staging.chartmetric.com/");

  // Fill the email.
  await page.getByPlaceholder('Email').fill(email);

  // Fill the incorrect password
  await page.getByPlaceholder('Password').fill(incorrect_password);

  // Click Log In button
  await page.getByRole('button', { name: 'Log In' }).click();

  // Expect an error message during login.
  await expect(page.getByText('Invalid email or password')).toBeVisible();
});

test('Login successfully', async ({ page }) => {
  const email = "sangmai350@gmail.com";
  const password = "ed735e787154";
  const title = "Dashboard | Chartmetric";

  await page.goto("https://app.staging.chartmetric.com/");

  // Fill the email.
  await page.getByPlaceholder('Email').fill(email);

  // Fill the incorrect password
  await page.getByPlaceholder('Password').fill(password);

  // Click Log In button
  await page.getByRole('button', { name: 'Log In' }).click();

  // Expect to successfully access the dashboard
  await expect(page).toHaveTitle(title);
  await expect(page.getByRole('img', { name: 'User Image' })).toBeVisible();
});
