import Link from "next/link";
import { getAllComponents } from "@/lib/registry";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Components" };

export default function ComponentsPage() {
  const components = getAllComponents();
  const entries = Object.entries(components);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-10">
        <h1 className="mb-2 text-3xl font-semibold tracking-tight">
          Components
        </h1>
        <p className="text-muted-foreground">
          {entries.length} component{entries.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map(([slug, meta]) => (
          <Link
            key={slug}
            href={`/components/${slug}`}
            className="rounded-xl border border-border p-5 transition-colors hover:border-foreground/20 hover:bg-muted/40"
          >
            <div className="mb-1 font-medium">{meta.title}</div>
            <div className="mb-3 text-sm text-muted-foreground line-clamp-2">
              {meta.description}
            </div>
            <div className="flex flex-wrap gap-1">
              {meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
