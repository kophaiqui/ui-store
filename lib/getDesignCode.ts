import fs from "fs";
import path from "path";
import type { DesignMeta } from "@/lib/registry";

export function getDesignCode(slug: string, meta: DesignMeta): string {
  const base = path.join(process.cwd(), "designs", meta.category, slug);
  // Prefer Component.tsx — the reusable parametrized component users actually copy
  const componentPath = path.join(base, "Component.tsx");
  const previewPath = path.join(base, "Preview.tsx");
  const filePath = fs.existsSync(componentPath) ? componentPath : previewPath;
  try {
    return fs.readFileSync(filePath, "utf-8");
  } catch {
    return "// Source not available";
  }
}

export function getDesignStyleCode(slug: string, meta: DesignMeta): string | null {
  const stylePath = path.join(process.cwd(), "designs", meta.category, slug, "styles", "default.ts");
  if (!fs.existsSync(stylePath)) return null;
  try {
    return fs.readFileSync(stylePath, "utf-8");
  } catch {
    return null;
  }
}
