// Screenshots one style's component grid (all categories, light + dark) for
// the manual style audit in docs/audits/STYLE_AUDIT.md - see plan 02.
// Requires the dev server running at localhost:3000.
//
//   node scripts/audit-style-screenshots.mjs <style> <outDir>
//
import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const style = process.argv[2];
const outDir = process.argv[3];
if (!style || !outDir) {
  console.error("usage: node scripts/audit-style-screenshots.mjs <style> <outDir>");
  process.exit(1);
}
fs.mkdirSync(outDir, { recursive: true });

const designs = JSON.parse(fs.readFileSync(path.join(process.cwd(), "registry", "designs.json"), "utf8"));
const categories = [...new Set(Object.values(designs).map((d) => d.category))];

const browser = await chromium.launch();
for (const mode of ["light", "dark"]) {
  const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
  await page.emulateMedia({ colorScheme: mode });
  await page.goto(`http://localhost:3000/style/${style}`, { waitUntil: "networkidle" });
  await page.evaluate((m) => localStorage.setItem("theme", m), mode);
  await page.reload({ waitUntil: "networkidle" });
  for (const cat of categories) {
    const loc = page.locator(`section#${cat}`);
    if ((await loc.count()) === 0) continue;
    await loc.screenshot({ path: path.join(outDir, `${style}-${mode}-${cat}.png`) });
  }
  await page.close();
}
await browser.close();
console.log(`Wrote ${categories.length * 2} screenshots to ${outDir}`);
