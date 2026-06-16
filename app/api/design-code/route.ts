import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  const category = searchParams.get("category");

  if (!slug || !category) {
    return NextResponse.json({ code: "" }, { status: 400 });
  }

  const base = path.join(process.cwd(), "designs", category, slug);
  // Prefer Component.tsx (the reusable parametrized component) over Preview.tsx
  const filePath = fs.existsSync(path.join(base, "Component.tsx"))
    ? path.join(base, "Component.tsx")
    : path.join(base, "Preview.tsx");

  try {
    const code = fs.readFileSync(filePath, "utf-8");
    return NextResponse.json({ code });
  } catch {
    return NextResponse.json({ code: "// Source not available" }, { status: 404 });
  }
}
