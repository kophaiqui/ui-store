// Generates public/llms.txt and public/llms-full.txt — plain-text indexes of
// the component library for AI coding agents, sourced from the registry and
// the real component files so they never drift. See plan 07.
//
//   node scripts/generate-llms-txt.mjs
//
import fs from "fs";
import path from "path";

const root = process.cwd();
const SITE_URL = "https://that-one-ui.vercel.app";

const designs = JSON.parse(fs.readFileSync(path.join(root, "registry", "designs.json"), "utf8"));
const styles = JSON.parse(fs.readFileSync(path.join(root, "registry", "styles.json"), "utf8"));

const availableStyles = Object.entries(styles)
  .filter(([, meta]) => meta.status === "available")
  .map(([id]) => id);

const categories = [...new Set(Object.values(designs).map((d) => d.category))];

const INTRO = `# That One UI

${SITE_URL}

That One UI is a copy-paste React component library on Base UI primitives.
Every component ships as one self-contained file (\`Component.tsx\`) with a
\`styles/default.ts\` file next to it. There is no separate preview file —
\`Component.tsx\` is both the installable component and what renders in every
preview surface on the site.

## The styleConfig contract

1. Every prop that renders inside a component has a default value. Nothing is
   hardcoded — a consumer can always override any string, number, array, or
   node the component renders.
2. A component accepts an optional \`styleConfig\` prop. Swapping it changes
   Tailwind classes ONLY — colors, borders, shadows, radius. It never changes
   the prop shape, defaults, or behavior. The full prop API is identical
   regardless of which style is imported.
3. Types shared between the component and its style file (e.g. a variant
   union) are defined in \`styles/default.ts\` and re-exported from
   \`Component.tsx\`.

To install a component: copy \`Component.tsx\` and \`styles/default.ts\` (and any
other style file you want) into your project. No other setup is required
beyond the Tailwind + Base UI primitives already listed in the component's
imports.

## ${Object.keys(designs).length} components across ${categories.length} categories, ${availableStyles.length} available styles

Available styles: ${availableStyles.join(", ")}.
`;

function componentSection(slug, meta) {
  const detailUrl = `${SITE_URL}/components/${slug}/default`;
  const sourceUrl = `${SITE_URL}/api/design-code?slug=${slug}&category=${meta.category}`;
  return `- ${meta.name} (\`${slug}\`, ${meta.category}): ${meta.description}\n  page: ${detailUrl}\n  source: ${sourceUrl}`;
}

let llms = INTRO + "\n## Components\n\n";
for (const category of categories) {
  llms += `### ${category}\n\n`;
  for (const [slug, meta] of Object.entries(designs).filter(([, m]) => m.category === category)) {
    llms += componentSection(slug, meta) + "\n";
  }
  llms += "\n";
}
llms += `\n## Full sources\n\n${SITE_URL}/llms-full.txt has every component's Component.tsx and styles/default.ts inlined.\n`;

fs.writeFileSync(path.join(root, "public", "llms.txt"), llms);

let full = INTRO + "\n## Full component sources\n\n";
for (const category of categories) {
  for (const [slug, meta] of Object.entries(designs).filter(([, m]) => m.category === category)) {
    const dir = path.join(root, "designs", meta.category, slug);
    const componentSrc = fs.readFileSync(path.join(dir, "Component.tsx"), "utf8");
    const defaultStylePath = path.join(dir, "styles", "default.ts");
    const styleSrc = fs.existsSync(defaultStylePath) ? fs.readFileSync(defaultStylePath, "utf8") : "";

    full += `### ${meta.name} (\`${slug}\`)\n\n`;
    full += `\`\`\`tsx\n// designs/${meta.category}/${slug}/Component.tsx\n${componentSrc}\`\`\`\n\n`;
    if (styleSrc) {
      full += `\`\`\`ts\n// designs/${meta.category}/${slug}/styles/default.ts\n${styleSrc}\`\`\`\n\n`;
    }
  }
}

fs.writeFileSync(path.join(root, "public", "llms-full.txt"), full);

console.log(
  `Wrote public/llms.txt (${(llms.length / 1024).toFixed(1)} KB) and public/llms-full.txt (${(full.length / 1024).toFixed(1)} KB).`,
);
