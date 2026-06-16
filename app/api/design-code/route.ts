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

  const filePath = path.join(process.cwd(), "designs", category, slug, "Preview.tsx");
  try {
    const code = fs.readFileSync(filePath, "utf-8");
    return NextResponse.json({ code });
  } catch {
    return NextResponse.json({ code: "// Source not available" }, { status: 404 });
  }
}
