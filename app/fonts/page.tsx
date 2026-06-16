import Link from "next/link";
import { getAllFonts } from "@/lib/registry";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Fonts" };

export default function FontsPage() {
  const fonts = getAllFonts();
  const entries = Object.entries(fonts);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-10">
        <h1 className="mb-2 text-3xl font-semibold tracking-tight">Fonts</h1>
        <p className="text-muted-foreground">
          {entries.length} font{entries.length !== 1 ? "s" : ""} — metadata only, external download links
        </p>
      </div>

      <div className="divide-y divide-border">
        {entries.map(([slug, meta]) => (
          <Link
            key={slug}
            href={`/fonts/${slug}`}
            className="flex items-start justify-between gap-6 py-5 transition-colors hover:bg-muted/20"
          >
            <div className="min-w-0 flex-1">
              <div className="mb-1 font-medium">{meta.name}</div>
              <div className="truncate text-sm text-muted-foreground">
                {meta.preview}
              </div>
            </div>
            <div className="shrink-0 text-right text-sm text-muted-foreground">
              <div>{meta.category}</div>
              <div>{meta.license}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
