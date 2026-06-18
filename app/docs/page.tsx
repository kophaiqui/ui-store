import Link from "next/link";
import type { Metadata } from "next";
import { getAllDesigns } from "@/lib/registry";

export const metadata: Metadata = { title: "Documentation" };

const GETTING_STARTED = [
  { title: "Introduction", href: "/docs/introduction", description: "What this is, how it works, and the styleConfig pattern.", available: true },
  { title: "Quick Start", href: "/docs/quick-start", description: "Install a component and get it running in under 5 minutes.", available: false },
  { title: "Installation", href: "/docs/installation", description: "Dependencies, setup, and project configuration.", available: false },
];

const FOUNDATIONS = [
  { title: "Design Tokens", href: "/docs/design-tokens", description: "CSS variables that drive color, spacing, and radius." },
  { title: "Colors", href: "/docs/colors", description: "Palette, semantic tokens, and dark mode strategy." },
  { title: "Typography", href: "/docs/typography", description: "Font scale, weights, and line heights." },
  { title: "Dark Mode", href: "/docs/dark-mode", description: "How the theme system works and how to extend it." },
  { title: "Spacing", href: "/docs/spacing", description: "Scale reference and usage guidelines." },
  { title: "Accessibility", href: "/docs/accessibility", description: "ARIA, keyboard nav, and what Base UI handles for you." },
];

const CATEGORY_ORDER = ["inputs", "data-display", "feedback"];

function StatusBadge({ available }: { available: boolean }) {
  if (available) {
    return (
      <span className="flex items-center gap-1.5 text-[0.6875rem] font-medium text-emerald-500">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Available
      </span>
    );
  }
  return (
    <span className="rounded-full border border-border/60 px-2 py-0.5 text-[0.625rem] font-medium text-muted-foreground/60">
      Coming soon
    </span>
  );
}

export default function DocsPage() {
  const designs = getAllDesigns();

  const byCategory: Record<string, { slug: string; name: string; description: string }[]> = {};
  for (const [slug, meta] of Object.entries(designs)) {
    if (!byCategory[meta.category]) byCategory[meta.category] = [];
    byCategory[meta.category].push({ slug, name: meta.name, description: meta.description });
  }
  const categories = CATEGORY_ORDER.filter((c) => byCategory[c]);

  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      {/* Header */}
      <div className="mb-14">
        <h1 className="mb-3 text-4xl font-bold tracking-tight">Documentation</h1>
        <p className="text-[1.0625rem] text-muted-foreground">
          Guides, references, and everything you need to build with That One UI.
        </p>
      </div>

      {/* Getting Started */}
      <section className="mb-14">
        <h2 className="mb-1 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/50">Getting started</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {GETTING_STARTED.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col gap-3 rounded-xl border border-border/60 bg-card p-5 transition-colors hover:border-border"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="font-medium text-foreground">{item.title}</p>
                <StatusBadge available={item.available} />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Component Reference */}
      <section className="mb-14">
        <h2 className="mb-1 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/50">Component reference</h2>
        <p className="mt-1 mb-6 text-sm text-muted-foreground">
          {Object.keys(designs).length} components — live demos, props, and usage on each page.
        </p>
        <div className="space-y-8">
          {categories.map((cat) => (
            <div key={cat}>
              <p className="mb-3 text-xs font-semibold capitalize text-muted-foreground/70">{cat}</p>
              <div className="grid gap-2 sm:grid-cols-3">
                {byCategory[cat].map((c) => (
                  <Link
                    key={c.slug}
                    href={`/components/${c.slug}`}
                    className="flex items-center justify-between rounded-lg border border-border/60 bg-card px-4 py-3 text-sm transition-colors hover:border-border hover:bg-muted/30"
                  >
                    <span className="font-medium">{c.name}</span>
                    <span className="text-xs text-muted-foreground/50">→</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Foundations */}
      <section>
        <h2 className="mb-1 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/50">Foundations</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {FOUNDATIONS.map((item) => (
            <div
              key={item.href}
              className="flex flex-col gap-3 rounded-xl border border-border/60 bg-card/50 p-5 opacity-60"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="font-medium text-foreground">{item.title}</p>
                <StatusBadge available={false} />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
