import { test, expect } from '@playwright/test';

test.describe('Harness Slides 24-Style Workbench E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the local workbench
    await page.goto('/');
  });

  test('should load the workbench with the correct title and initial grid view', async ({ page }) => {
    // Check title
    await expect(page).toHaveTitle(/Harness Slides 24-Style Workbench/);

    // Verify grid view is active by default
    await expect(page.locator('h2:has-text("24-Style Matrix Catalog")')).toBeVisible();

    // Verify there are 24 grid cards displayed
    const gridCards = page.locator('.responsive-grid > div');
    await expect(gridCards).toHaveCount(24);
  });

  test('should support light/dark/system theme switching', async ({ page }) => {
    const html = page.locator('html');

    // Click dark mode button and verify dark class is added
    await page.click('button:has-text("Dark")');
    await expect(html).toHaveClass(/dark/);

    // Click light mode button and verify dark class is removed
    await page.click('button:has-text("Light")');
    await expect(html).not.toHaveClass(/dark/);
  });

  test('should allow switching views between Grid, Board, and Lab', async ({ page }) => {
    // Switch to Board View
    await page.click('button:has-text("Board View")');
    await expect(page.locator('h3:has-text("Minimal Keynote")')).toBeVisible();
    await expect(page.locator('h3:has-text("Balanced Hybrid")')).toBeVisible();
    await expect(page.locator('h3:has-text("Text Report")')).toBeVisible();

    // Switch to Interactive Lab
    await page.click('button:has-text("Interactive Lab")');
    await expect(page.locator('aside:has-text("Select Style")')).toBeVisible();
    await expect(page.locator('#stage-container')).toBeVisible();
  });

  test('should navigate to Lab when clicking a grid card', async ({ page }) => {
    // Click on the second style card (Sketch Board Emoji)
    const card = page.locator('.responsive-grid > div').nth(1);
    await card.click();

    // Verify view changed to Interactive Lab
    await expect(page.locator('aside:has-text("Select Style")')).toBeVisible();
    await expect(page.locator('button.bg-indigo-600:has-text("Interactive Lab")')).toBeVisible();

    // Verify Style #02 is active in the sidebar list
    const activeSidebarBtn = page.locator('aside button.bg-indigo-600\\/10');
    await expect(activeSidebarBtn).toContainText('#02');
  });

  test('should support Story Mode vs Specs Sheet toggling in Interactive Lab', async ({ page }) => {
    await page.click('button:has-text("Interactive Lab")');

    // Default should be Story Mode and density selectors are visible
    await expect(page.locator('button:has-text("Low Density")')).toBeVisible();

    // Click Specs Sheet mode
    await page.click('button:has-text("Specs Sheet")');

    // Verify Specs layout loads in slide container (specs text)
    const stage = page.locator('#stage-container');
    await expect(stage).toContainText('STYLE SPECIFICATION SHEET');

    // Switch back to Story Mode
    await page.click('button:has-text("Story Mode")');
    await expect(page.locator('button:has-text("Low Density")')).toBeVisible();
  });

  test('should support keyboard navigation in Interactive Lab', async ({ page }) => {
    await page.click('button:has-text("Interactive Lab")');

    // Initial state check (Style #1, Scene 1, Beat 1)
    const initialStage = page.locator('#stage-container');
    await expect(initialStage).toContainText('The Quantum Compiler Thesis');

    // Press ArrowRight to advance beat (Beat 1 -> Beat 2)
    await page.keyboard.press('ArrowRight');
    await expect(initialStage).toContainText('Three-Layer Pipeline');

    // Press ArrowRight to advance beat (Beat 2 -> Beat 3)
    await page.keyboard.press('ArrowRight');
    await expect(initialStage).toContainText('Unified Compilation Stack');

    // Press ArrowRight to advance to Scene 2 Beat 1
    await page.keyboard.press('ArrowRight');
    await expect(initialStage).toContainText('SCENE 2 · HANDOFF');

    // Press ArrowLeft to go back to Scene 1 Beat 3
    await page.keyboard.press('ArrowLeft');
    await expect(initialStage).toContainText('Unified Compilation Stack');

    // Press ArrowDown to switch styles (Style #1 -> Style #2)
    await page.keyboard.press('ArrowDown');
    // Style #2 should be active (Sketch Board Emoji / Offline-First Sync Engine Design)
    const activeSidebarBtn = page.locator('aside button.bg-indigo-600\\/10');
    await expect(activeSidebarBtn).toContainText('#02');
  });
});
