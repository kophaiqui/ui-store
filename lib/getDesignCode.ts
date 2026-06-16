import fs from "fs";
import path from "path";
import type { DesignMeta } from "@/lib/registry";

export function getDesignCode(slug: string, meta: DesignMeta): string {
  const filePath = path.join(
    process.cwd(),
    "designs",
    meta.category,
    slug,
    "Preview.tsx"
  );
  try {
    return fs.readFileSync(filePath, "utf-8");
  } catch {
    return "// Source not available";
  }
}
