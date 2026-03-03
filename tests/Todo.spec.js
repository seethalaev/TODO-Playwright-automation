import { test, expect } from '@playwright/test';

test('test to do application @sanity', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await expect(page.locator('h3')).toBeVisible();

  await page.getByTestId('text-input').click();
  
  await page.getByTestId('text-input').fill('Buy grocery');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('coding');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('learning');
  await page.getByTestId('text-input').press('Enter');
  

  await page.getByRole('listitem').filter({ hasText: 'Buy grocery' }).getByTestId('todo-item-toggle').check();
  await page.goto('https://todomvc.com/examples/react/dist/#/');
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await expect(page.locator('.todo-list li')).toHaveCount(1)
  
  await expect(page.getByRole('listitem').filter({ hasText: 'coding' }).getByTestId('todo-item-toggle')).toBeVisible();
});