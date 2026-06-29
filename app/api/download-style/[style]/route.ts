import fs from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";
import { getStyle, getAllDesigns, getDesignsByStyle } from "@/lib/registry";
import { buildZip } from "@/lib/zip";

type Params = { params: Promise<{ style: string }> };

export async function GET(_req: Request, { params }: Params) {
  const { style } = await params;
  const styleMeta = getStyle(style);

  if (!styleMeta || styleMeta.status !== "available") {
    return NextResponse.json({ error: "Style not found" }, { status: 404 });
  }

  const designs = getDesignsByStyle(style);
  const root = process.cwd();
  const folderName = style === "default" ? "components" : `${style}-components`;

  const entries: { name: string; data: Buffer }[] = [];

  for (const [slug, meta] of Object.entries(designs)) {
    const base = path.join(root, "designs", meta.category, slug);
    const componentPath = path.join(base, "Component.tsx");

    if (!fs.existsSync(componentPath)) continue;

    const componentData = fs.readFileSync(componentPath);
    entries.push({
      name: `${folderName}/${meta.category}/${slug}/Component.tsx`,
      data: componentData,
    });

    // Include the style config file for non-default styles
    if (style !== "default") {
      const stylePath = path.join(base, "styles", `${style}.ts`);
      if (fs.existsSync(stylePath)) {
        entries.push({
          name: `${folderName}/${meta.category}/${slug}/styles/${style}.ts`,
          data: fs.readFileSync(stylePath),
        });
      }
    }
  }

  if (entries.length === 0) {
    return NextResponse.json({ error: "No components found" }, { status: 404 });
  }

  const zip = buildZip(entries);

  return new Response(new Uint8Array(zip), {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${folderName}.zip"`,
      "Content-Length": String(zip.length),
    },
  });
}
