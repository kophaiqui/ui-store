import fs from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";
import { getTemplate, getAllDesigns } from "@/lib/registry";
import { buildZip } from "@/lib/zip";

type Params = { params: Promise<{ slug: string }> };

export async function GET(_req: Request, { params }: Params) {
  const { slug } = await params;
  const meta = getTemplate(slug);
  if (!meta) {
    return NextResponse.json({ error: "Template not found" }, { status: 404 });
  }

  const root = process.cwd();
  const designs = getAllDesigns();
  const folderName = `${slug}-template`;
  const entries: { name: string; data: Buffer }[] = [];

  const templatePath = path.join(root, "templates", slug, "Template.tsx");
  if (fs.existsSync(templatePath)) {
    entries.push({ name: `${folderName}/Template.tsx`, data: fs.readFileSync(templatePath) });
  }

  for (const componentSlug of meta.components) {
    const design = designs[componentSlug];
    if (!design) continue;
    const base = path.join(root, "designs", design.category, componentSlug);
    const componentPath = path.join(base, "Component.tsx");
    const stylePath = path.join(base, "styles", "default.ts");
    if (fs.existsSync(componentPath)) {
      entries.push({
        name: `${folderName}/designs/${design.category}/${componentSlug}/Component.tsx`,
        data: fs.readFileSync(componentPath),
      });
    }
    if (fs.existsSync(stylePath)) {
      entries.push({
        name: `${folderName}/designs/${design.category}/${componentSlug}/styles/default.ts`,
        data: fs.readFileSync(stylePath),
      });
    }
  }

  if (entries.length === 0) {
    return NextResponse.json({ error: "No files found" }, { status: 404 });
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
