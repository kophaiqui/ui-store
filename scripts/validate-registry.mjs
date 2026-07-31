// Validates registry/designs.json and registry/styles.json against the real
// files on disk, so drift between the registry and the actual components
// fails loudly instead of shipping a broken demo or a dead prop.
//
//   node scripts/validate-registry.mjs
//
import fs from "fs";
import path from "path";

const root = process.cwd();
const designs = JSON.parse(fs.readFileSync(path.join(root, "registry", "designs.json"), "utf8"));
const styles = JSON.parse(fs.readFileSync(path.join(root, "registry", "styles.json"), "utf8"));

const availableStyles = Object.entries(styles)
  .filter(([, meta]) => meta.status === "available")
  .map(([id]) => id);

const errors = [];

// Extracts the top-level prop names from a Component.tsx's `type Props = { ... }` block.
function extractPropNames(source) {
  const nameStart = source.search(/type Props\b/);
  if (nameStart === -1) return null;
  let i = nameStart + "type Props".length;
  if (source[i] === "<") {
    let depth = 0;
    for (; i < source.length; i++) {
      if (source[i] === "<") depth++;
      if (source[i] === ">") {
        depth--;
        if (depth === 0) {
          i++;
          break;
        }
      }
    }
  }
  const eq = source.indexOf("=", i);
  if (eq === -1) return null;
  const braceStart = source.indexOf("{", eq);
  if (braceStart === -1) return null;
  // Props inherited from a wrapped primitive (`SomeBaseType & {...}`) aren't
  // visible in the literal block below, so we can't verify them by name.
  const extendsBase = source.slice(eq, braceStart).includes("&");

  let depth = 0;
  let end = -1;
  for (let i = braceStart; i < source.length; i++) {
    if (source[i] === "{") depth++;
    if (source[i] === "}") {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  if (end === -1) return null;

  const body = source.slice(braceStart + 1, end);
  const names = new Set();
  for (const line of body.split("\n")) {
    const m = line.match(/^\s*(\w+)\??:/);
    if (m) names.add(m[1]);
  }
  return { names, extendsBase };
}

for (const [slug, meta] of Object.entries(designs)) {
  const dir = path.join(root, "designs", meta.category, slug);
  const componentPath = path.join(dir, "Component.tsx");
  const defaultStylePath = path.join(dir, "styles", "default.ts");

  if (!fs.existsSync(componentPath)) {
    errors.push(`${slug}: missing Component.tsx (${path.relative(root, componentPath)})`);
    continue;
  }
  if (!fs.existsSync(defaultStylePath)) {
    errors.push(`${slug}: missing styles/default.ts`);
  }

  for (const styleId of availableStyles) {
    if (styleId === "default") continue;
    const stylePath = path.join(dir, "styles", `${styleId}.ts`);
    if (!fs.existsSync(stylePath)) {
      errors.push(`${slug}: missing styles/${styleId}.ts (declared available in styles.json)`);
    }
  }

  const source = fs.readFileSync(componentPath, "utf8");
  const extracted = extractPropNames(source);
  if (!extracted) {
    errors.push(`${slug}: could not find a \`type Props\` block in Component.tsx`);
    continue;
  }
  const { names: propNames, extendsBase } = extracted;

  // When Props extends `React.ComponentProps<typeof X>`, inherited prop names
  // aren't visible in the literal block, so presence can't be verified statically.
  if (!extendsBase) {
    for (const prop of meta.props ?? []) {
      if (!propNames.has(prop.name)) {
        errors.push(`${slug}: registry prop "${prop.name}" not found in Component.tsx Props type`);
      }
      for (const target of Object.keys(prop.companions ?? {})) {
        if (!propNames.has(target)) {
          errors.push(`${slug}: companion target "${target}" (on prop "${prop.name}") is not a real prop`);
        }
      }
    }
  }

  const underscoreProps = (meta.props ?? []).filter((p) => p.name.startsWith("_"));
  for (const prop of underscoreProps) {
    for (const usage of meta.usage ?? []) {
      if (usage.code.includes(`${prop.name}=`)) {
        errors.push(`${slug}: demo-only prop "${prop.name}" leaks into usage snippet "${usage.label}"`);
      }
    }
  }
}

if (errors.length > 0) {
  console.error(`✗ ${errors.length} registry validation error(s):\n`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

console.log(`✓ registry valid — ${Object.keys(designs).length} components, ${availableStyles.length} available styles.`);
