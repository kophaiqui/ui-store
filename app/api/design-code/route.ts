import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  const category = searchParams.get("category");
  const variant = searchParams.get("variant") || "default";

  if (!slug || !category) {
    return NextResponse.json({ code: "" }, { status: 400 });
  }

  const dir = path.join(process.cwd(), "designs", category, slug);

  try {
    const code = fs.readFileSync(path.join(dir, "Component.tsx"), "utf-8");
    let styleCode = "";
    try {
      styleCode = fs.readFileSync(path.join(dir, "styles", `${variant}.ts`), "utf-8");
    } catch {}
    return NextResponse.json({ code, styleCode });
  } catch {
    return NextResponse.json({ code: "// Source not available" }, { status: 404 });
  }
}
