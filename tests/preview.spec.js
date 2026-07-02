import { expect, test } from "@playwright/test";
import { STYLES, STAGE } from "../src/data/stylesData";

test.describe("Frontend Harness Slides Design System", () => {
  test("every style and its beats can render correctly in Lab view", async ({ page }) => {
    const errors = [];
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("pageerror", (error) => errors.push(error.message));

    // Sweep through a selection of styles representing different densities to keep tests fast but comprehensive
    const stylesToTest = ["01", "02", "12", "24"];
    
    for (const styleId of stylesToTest) {
      const style = STYLES.find((s) => s.id === styleId);
      
      for (const scene of [1, 3, 5]) { // Test graduated scene densities (1, 3, 5)
        for (const beat of [0, 1, 2]) {
          await page.goto(`/?view=lab&style=${styleId}&scene=${scene}&beat=${beat}`);
          
          const stage = page.locator("#slide-stage");
          await stage.waitFor({ state: "visible" });
          
          // Verify that style ID matches
          await expect(page.locator('[data-testid="slide-style-id"]')).toContainText(styleId);
          
          // Check that the stage has appropriate aspect ratio structures
          const box = await stage.boundingBox();
          expect(box.width).toBeGreaterThan(100);
          expect(box.height).toBeGreaterThan(50);
          
          const ratio = box.width / box.height;
          expect(ratio).toBeCloseTo(1.77, 1); // 16:9 is ~1.77
        }
      }
    }

    expect(errors).toEqual([]);
  });

  test("can switch views through the global switcher header", async ({ page }) => {
    await page.goto("/");
    
    // Switch to Grid view
    const gridBtn = page.locator("button:has-text('Grid View')");
    await gridBtn.click();
    await page.waitForURL(/\?.*view=grid/);
    await expect(page.locator("h2")).toContainText("Grid View");

    // Switch to Board view
    const boardBtn = page.locator("button:has-text('Board View')");
    await boardBtn.click();
    await page.waitForURL(/\?.*view=board/);
    await expect(page.locator("h2")).toContainText("Board View");
    
    // Board view should categorize low, med, high density columns
    await expect(page.locator("span:has-text('01 - 08 (Low)')")).toBeVisible();
    await expect(page.locator("span:has-text('09 - 16 (Med)')")).toBeVisible();
    await expect(page.locator("span:has-text('17 - 24 (High)')")).toBeVisible();
  });

  test("Grid view thumbnails fill their 16:9 frames at large viewport sizes", async ({ page }) => {
    await page.setViewportSize({ width: 2048, height: 900 });
    await page.goto("/?view=grid");

    const frame = page.locator('[data-testid="grid-thumbnail-frame"]').first();
    const stage = page.locator('[data-testid="grid-thumbnail-stage"]').first();

    await frame.waitFor({ state: "visible" });
    const frameBox = await frame.boundingBox();
    const stageBox = await stage.boundingBox();

    expect(stageBox.width).toBeCloseTo(frameBox.width, 0);
    expect(stageBox.height).toBeCloseTo(frameBox.height, 0);
  });

  test("Grid view badges do not overlap the rendered slide stage", async ({ page }) => {
    await page.setViewportSize({ width: 2048, height: 900 });
    await page.goto("/?view=grid");

    const frame = page.locator('[data-testid="grid-thumbnail-frame"]').first();
    const badges = page.locator('[data-testid="grid-thumbnail-badges"]').first();

    await frame.waitFor({ state: "visible" });
    const frameBox = await frame.boundingBox();
    const badgesBox = await badges.boundingBox();

    expect(badgesBox.y).toBeGreaterThanOrEqual(frameBox.y + frameBox.height - 1);
  });

  test("language switcher localizes app chrome and slide content", async ({ page }) => {
    await page.goto("/?view=grid");

    await page.locator('[data-testid="language-switcher"] button[title="中文"]').click();

    await expect(page.locator("h2")).toContainText("网格视图矩阵");
    await expect(page.locator("body")).toContainText("主动错误抑制");
    await expect(page.locator("body")).toContainText("量子编译器架构");
  });

  test("theme switcher defaults to auto and supports light and dark modes", async ({ page }) => {
    await page.goto("/?view=grid");

    const root = page.locator("#root > div").first();
    await expect(page.locator('[data-testid="theme-switcher"] button[title="Auto"]')).toHaveAttribute("aria-pressed", "true");

    await page.locator('[data-testid="theme-switcher"] button[title="Light"]').click();
    await expect(root).toHaveClass(/bg-slate-100/);

    await page.locator('[data-testid="theme-switcher"] button[title="Dark"]').click();
    await expect(root).toHaveClass(/bg-zinc-950/);
  });

  test("Interactive Lab keyboard stepping controls", async ({ page }) => {
    await page.goto("/?view=lab&style=01&scene=1&beat=0");
    await page.locator("#slide-stage").waitFor({ state: "visible" });
    
    // Press Space or ArrowRight to advance
    await page.keyboard.press("ArrowRight");
    await page.waitForURL(/\?.*beat=1/);
    
    await page.keyboard.press("ArrowRight");
    await page.waitForURL(/\?.*beat=2/);

    // Cross scene boundary (supports 5 scenes now)
    await page.keyboard.press("ArrowRight");
    await page.waitForURL(/\?.*scene=2/);
    await page.waitForURL(/\?.*beat=0/);

    // Backtrack with ArrowLeft
    await page.keyboard.press("ArrowLeft");
    await page.waitForURL(/\?.*scene=1/);
    await page.waitForURL(/\?.*beat=2/);
  });

  test("Mobile view sidebars auto-hides on style change", async ({ page }) => {
    // Set mobile viewport size
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/?view=lab&style=01");

    const sidebar = page.locator("aside");
    
    // Sidebar should be default hidden on mobile
    await expect(sidebar).toHaveClass(/translate-x-full|hidden/);

    // Toggle menu button
    const toggleBtn = page.locator('[data-testid="sidebar-toggle"]');
    await toggleBtn.click();
    await expect(sidebar).toHaveClass(/translate-x-0/);

    // Clicking a style from the sidebar list should select it and auto-hide the sidebar
    const styleBtn = page.locator("button:has-text('02')").first();
    await styleBtn.click();
    
    await page.waitForURL(/\?.*style=02/);
    // Sidebar should be automatically hidden after selection
    await expect(sidebar).toHaveClass(/translate-x-full|hidden/);
  });
});
