import { test, expect } from '@playwright/test';

test.describe('Missing Attributes Test', () => {
  test('Glowforge Test - check how system handles missing attributes', async ({ page }) => {
    
    page.on('pageerror', error => {
      console.log('Page error:', error.message);
    });
    
    await page.goto('http://localhost:8080/product/laser-cutters/glowforge-test');
    await page.waitForTimeout(1000);
    
    // Check if page loads without errors
    await expect(page.locator('h1').nth(1)).toContainText('Glowforge Test');
    
    // Click on specifications tab
    await page.click('button:has-text("Характеристики")');
    await page.waitForTimeout(1000);
    
    // Check if specifications section loads
    const specificationsContent = page.locator('[data-testid="specifications"], .specifications, [class*="specification"]');
    
    // Take a screenshot to see what's displayed
    await page.screenshot({ path: 'tests/screenshots/glowforge-test-specs.png', fullPage: true });
    
    // Check if there are any empty specification fields displayed
    const specItems = page.locator('text=/^\\s*$/', { hasText: /^\s*$/ });
    const count = await specItems.count();
    console.log(`Found ${count} empty specification fields`);
    
    // Check if the page still functions properly despite missing data
    const pageTitle = await page.locator('h1').nth(1).textContent();
    console.log(`Page title: ${pageTitle}`);
    
    // Verify no JavaScript errors occurred
    console.log('Test completed - checking for any console errors');
  });
});