import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';

const BASE = 'http://localhost:3333';
const OUT  = '/tmp/component-screenshots';
await mkdir(OUT, { recursive: true });

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1280, height: 900 },
  colorScheme: 'dark',
});
const page = await ctx.newPage();

// ── helpers ──────────────────────────────────────────────────────────────────
async function shot(name, fn) {
  try {
    await fn();
    await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: false });
    console.log(`✅ ${name}`);
  } catch (e) {
    await page.screenshot({ path: `${OUT}/${name}-ERROR.png`, fullPage: false }).catch(() => {});
    console.log(`❌ ${name}: ${e.message.split('\n')[0]}`);
  }
}

// ── Components list page ──────────────────────────────────────────────────────
await shot('00-components-list', async () => {
  await page.goto(`${BASE}/components`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500); // let dynamic imports settle
});

// ── Each component detail page ────────────────────────────────────────────────
const slugs = [
  'button', 'checkbox', 'input', 'radio-group', 'select', 'slider', 'switch',
  'avatar', 'separator', 'tabs', 'progress', 'accordion', 'tooltip',
  'dialog', 'popover',
];

for (const slug of slugs) {
  await shot(`component-${slug}`, async () => {
    await page.goto(`${BASE}/components/${slug}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1200);
  });
}

// ── Interaction spot-checks ───────────────────────────────────────────────────

// Button — try all variants on the detail page usage section
await shot('interact-button-variants', async () => {
  await page.goto(`${BASE}/components/button`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  // scroll to usage section
  await page.evaluate(() => window.scrollBy(0, 600));
  await page.waitForTimeout(400);
});

// Select — open the dropdown
await shot('interact-select-open', async () => {
  await page.goto(`${BASE}/components/select`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  const trigger = page.locator('button').filter({ hasText: /Select an option/i }).first();
  await trigger.click();
  await page.waitForTimeout(400);
});

// Dialog — open it
await shot('interact-dialog-open', async () => {
  await page.goto(`${BASE}/components/dialog`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  const trigger = page.locator('button').filter({ hasText: /Open Dialog/i }).first();
  await trigger.click();
  await page.waitForTimeout(500);
});

// Popover — open it
await shot('interact-popover-open', async () => {
  await page.goto(`${BASE}/components/popover`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  const trigger = page.locator('button').filter({ hasText: /Open Popover/i }).first();
  await trigger.click();
  await page.waitForTimeout(500);
});

// Accordion — expand first panel
await shot('interact-accordion-open', async () => {
  await page.goto(`${BASE}/components/accordion`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  const trigger = page.locator('button').first();
  await trigger.click();
  await page.waitForTimeout(400);
});

// Checkbox — click to check
await shot('interact-checkbox-checked', async () => {
  await page.goto(`${BASE}/components/checkbox`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  // find the checkbox button (Base UI renders it as a button)
  const cb = page.locator('[role="checkbox"]').first();
  await cb.click();
  await page.waitForTimeout(300);
});

// Switch — click to toggle
await shot('interact-switch-toggled', async () => {
  await page.goto(`${BASE}/components/switch`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  const sw = page.locator('[role="switch"]').first();
  await sw.click();
  await page.waitForTimeout(300);
});

// Tabs — click second tab
await shot('interact-tabs-second', async () => {
  await page.goto(`${BASE}/components/tabs`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  const tabs = page.locator('[role="tab"]');
  await tabs.nth(1).click();
  await page.waitForTimeout(300);
});

await browser.close();
console.log(`\nScreenshots saved to ${OUT}`);
