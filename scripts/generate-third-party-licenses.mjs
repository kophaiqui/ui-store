// Generates THIRD_PARTY_LICENSES.md (full texts) and app/licenses/licenses.json
// (compact, for the /licenses page) from the production dependency tree.
//
//   node scripts/generate-third-party-licenses.mjs
//
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const root = process.cwd();

// 1. Collect every production dependency (direct + transitive).
const tree = JSON.parse(
  execSync("npm ls --omit=dev --all --json", { maxBuffer: 1e8 }).toString(),
);
const names = new Set();
(function walk(node) {
  if (!node.dependencies) return;
  for (const [name, child] of Object.entries(node.dependencies)) {
    names.add(name);
    walk(child);
  }
})(tree);

const LICENSE_FILES = [
  "LICENSE", "LICENSE.md", "LICENSE.txt", "license", "License",
  "LICENCE", "LICENCE.md", "LICENSE-MIT", "LICENSE-MIT.txt", "COPYING",
];

function licenseOf(pj) {
  if (typeof pj.license === "string") return pj.license;
  if (pj.license && pj.license.type) return pj.license.type;
  if (Array.isArray(pj.licenses)) return pj.licenses.map((l) => l.type).join(" OR ");
  return "UNKNOWN";
}

const pkgs = [];
for (const name of [...names].sort()) {
  let pjPath;
  try {
    pjPath = require.resolve(`${name}/package.json`, { paths: [root] });
  } catch {
    const guess = path.join(root, "node_modules", name, "package.json");
    if (!fs.existsSync(guess)) continue;
    pjPath = guess;
  }
  const dir = path.dirname(pjPath);
  const pj = JSON.parse(fs.readFileSync(pjPath, "utf8"));

  let licenseText = "";
  for (const f of LICENSE_FILES) {
    const p = path.join(dir, f);
    if (fs.existsSync(p) && fs.statSync(p).isFile()) {
      licenseText = fs.readFileSync(p, "utf8").trim();
      break;
    }
  }

  const author =
    typeof pj.author === "string" ? pj.author : pj.author?.name || "";
  const repo =
    (typeof pj.repository === "string" ? pj.repository : pj.repository?.url) || "";

  pkgs.push({
    name: pj.name || name,
    version: pj.version || "",
    license: licenseOf(pj),
    author,
    homepage: pj.homepage || "",
    repository: repo.replace(/^git\+/, "").replace(/\.git$/, ""),
    licenseText,
  });
}

// 2. License summary.
const byLicense = {};
for (const p of pkgs) byLicense[p.license] = (byLicense[p.license] || 0) + 1;
const summary = Object.entries(byLicense).sort((a, b) => b[1] - a[1]);

// 3. THIRD_PARTY_LICENSES.md (with full texts).
const date = new Date().toISOString().slice(0, 10);
let md = `# Third-Party Licenses\n\n`;
md += `This product bundles third-party open-source software. The packages below are the production dependencies and their transitive dependencies.\n\n`;
md += `_Generated ${date} — ${pkgs.length} packages. Regenerate with \`node scripts/generate-third-party-licenses.mjs\`._\n\n`;
md += `## Summary\n\n`;
for (const [lic, n] of summary) md += `- **${lic}**: ${n}\n`;
md += `\n---\n\n## Packages\n\n`;
for (const p of pkgs) {
  md += `### ${p.name}@${p.version} — ${p.license}\n\n`;
  const link = p.homepage || p.repository;
  if (link) md += `${link}\n\n`;
  if (p.author) md += `Copyright © ${p.author}\n\n`;
  if (p.licenseText) md += `\`\`\`\n${p.licenseText}\n\`\`\`\n\n`;
  else md += `_(No bundled license file; declared license: ${p.license}.)_\n\n`;
  md += `---\n\n`;
}
fs.writeFileSync(path.join(root, "THIRD_PARTY_LICENSES.md"), md);

// 4. Compact JSON for the /licenses page (no full texts to keep the bundle small).
const compact = {
  generated: date,
  count: pkgs.length,
  summary,
  packages: pkgs.map(({ name, version, license, homepage, repository }) => ({
    name,
    version,
    license,
    url: homepage || repository || "",
  })),
};
const outDir = path.join(root, "app", "licenses");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "licenses.json"), JSON.stringify(compact, null, 2));

console.log(`Wrote THIRD_PARTY_LICENSES.md and app/licenses/licenses.json (${pkgs.length} packages)`);
console.log("Licenses:", summary.map(([l, n]) => `${l}:${n}`).join("  "));
