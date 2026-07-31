import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ code: "" }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), "motion", `${slug}.tsx`);

  try {
    const code = fs.readFileSync(filePath, "utf-8");
    return NextResponse.json({ code });
  } catch {
    return NextResponse.json({ code: "// Source not available" }, { status: 404 });
  }
}
