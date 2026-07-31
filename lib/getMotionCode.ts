import fs from "fs";
import path from "path";

export function getMotionCode(slug: string): string {
  const filePath = path.join(process.cwd(), "motion", `${slug}.tsx`);
  try {
    return fs.readFileSync(filePath, "utf-8");
  } catch {
    return "// Source not available";
  }
}
