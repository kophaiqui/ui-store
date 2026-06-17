// Generates docs/COMPONENT_PROPS.md — a props reference table for every
// component, sourced from the registry so it never drifts from the real props.
//
//   node scripts/generate-component-props.mjs
//
import fs from "fs";
import path from "path";

const root = process.cwd();
const designs = JSON.parse(
  fs.readFileSync(path.join(root, "registry", "designs.json"), "utf8"),
);

// Escape a cell value so pipes don't break the Markdown table.
const cell = (v) => String(v).replace(/\|/g, "\\|");
// Wrap in a code span, falling back to an em dash for empty values.
const code = (v) => {
  const s = String(v ?? "").trim();
  return s ? `\`${cell(s)}\`` : "—";
};

// Preserve category order as they first appear in the registry.
const categories = [...new Set(Object.values(designs).map((d) => d.category))];

let out = `# Component Props Reference

> **Auto-generated** from \`registry/designs.json\` — do not edit by hand.
> Run \`npm run props\` (or \`node scripts/generate-component-props.mjs\`) to regenerate.

Every component, its props, the values each accepts, the default, and what it does.
Try them live on each component's page under **Props**.

`;

for (const category of categories) {
  const entries = Object.entries(designs).filter(([, m]) => m.category === category);
  const title = category
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");

  out += `## ${title}\n\n`;

  for (const [, meta] of entries) {
    out += `### ${meta.name}\n\n`;
    if (meta.description) out += `${meta.description}\n\n`;

    const props = meta.props ?? [];
    if (props.length === 0) {
      out += `_No configurable props._\n\n`;
      continue;
    }

    out += `| Prop | Values | Default | Description |\n`;
    out += `| --- | --- | --- | --- |\n`;
    for (const p of props) {
      out += `| \`${cell(p.name)}\` | ${code(p.type)} | ${code(p.default)} | ${cell(p.description)} |\n`;
    }
    out += `\n`;
  }
}

const dest = path.join(root, "docs", "COMPONENT_PROPS.md");
fs.writeFileSync(dest, out);
console.log(`Wrote ${path.relative(root, dest)} (${categories.length} categories, ${Object.keys(designs).length} components).`);
