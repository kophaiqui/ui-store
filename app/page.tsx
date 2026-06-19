import Link from "next/link";
import { getAllDesigns, getAllStyles } from "@/lib/registry";
import { DesignCardPreview } from "@/components/shared/DesignCardPreview";
import { HeroShowcase } from "@/components/shared/HeroShowcase";
import { StyleCarousel } from "@/components/shared/StyleCarousel";

const SHOWCASE_SLUGS = ["button", "select", "tabs", "accordion", "card", "badge", "toast", "checkbox"];

type Accent = "neutral" | "purple" | "blue" | "green";

const FEATURES: { accent: Accent; label: string; title: string; body: string }[] = [
  {
    accent: "purple",
    label: "Files",
    title: "Copy and paste",
    body: "Every component is a single self-contained file. Pick one, drop it in your project—done.",
  },
  {
    accent: "blue",
    label: "Styles",
    title: "Style it your way",
    body: "Each component ships with a styleConfig. Swap the whole visual layer without touching props or logic.",
  },
  {
    accent: "green",
    label: "Props",
    title: "All props, no limits",
    body: "Nothing is hardcoded. Every string, color, and behavior is a prop with a sensible default you can override.",
  },
];

export default function HomePage() {
  const designs = getAllDesigns();
  const total = Object.keys(designs).length;
  const showcase = SHOWCASE_SLUGS.flatMap((slug) => {
    const meta = designs[slug];
    return meta ? [[slug, meta] as const] : [];
  });
  const styles = getAllStyles();
  const styleEntries = Object.entries(styles).sort(([a], [b]) =>
    a === "default" ? -1 : b === "default" ? 1 : 0
  );

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-border/40 px-6 pt-20 pb-24 lg:pt-28 lg:pb-32">
        {/* Ambient color blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-[8%] h-[560px] w-[560px] rounded-full bg-violet-500/[0.09] dark:bg-violet-400/[0.1] blur-[100px]" />
          <div className="absolute top-16 right-[5%] h-[380px] w-[380px] rounded-full bg-blue-500/[0.07] dark:bg-blue-400/[0.09] blur-[80px]" />
          <div className="absolute bottom-0 left-[38%] h-[280px] w-[420px] rounded-full bg-emerald-500/[0.06] dark:bg-emerald-400/[0.07] blur-[70px]" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_480px]">

            {/* Left: text */}
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-500/30 dark:border-violet-400/30 bg-violet-500/[0.07] dark:bg-violet-400/[0.08] px-3.5 py-1.5 text-xs font-medium text-violet-700 dark:text-violet-400">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-500 dark:bg-violet-400" />
                {total} components · 11 styles
              </div>

              <h1 className="mb-6 text-[3.25rem] font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4rem]">
                UI components<br />
                <span className="text-violet-700 dark:text-violet-400">
                  with a different soul.
                </span>
              </h1>

              <p className="mb-8 max-w-[42ch] text-[1.0625rem] leading-relaxed text-muted-foreground">
                One component. Multiple visual worlds.<br />
                Change the style, not the code.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/style"
                  className="rounded-lg bg-blue-600 dark:bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 dark:hover:bg-blue-400 active:scale-[0.98]"
                >
                  Explore styles
                </Link>
                <Link
                  href="/components"
                  className="rounded-lg border border-border/70 px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-border hover:text-foreground"
                >
                  Browse components
                </Link>
              </div>

              {/* Stat row */}
              <div className="mt-10 flex flex-wrap items-center gap-5 text-xs text-muted-foreground/60">
                <span className="flex items-center gap-2">
                  <span className="h-px w-5 bg-violet-700 dark:bg-violet-300" />
                  {total} components
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-px w-5 bg-blue-700 dark:bg-blue-300" />
                  11 styles
                </span>
              </div>
            </div>

            {/* Right: live component showcase */}
            <HeroShowcase />
          </div>
        </div>
      </section>

      {/* ── Feature pillars ──────────────────────────────────────────── */}
      <section className="border-b border-border/40 px-6 py-0">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 divide-y divide-border/50 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {FEATURES.map((f) => {
              const dotClass: Record<Accent, string> = {
                neutral: "bg-muted-foreground/40",
                purple:  "bg-violet-600 dark:bg-violet-400",
                blue:    "bg-blue-600 dark:bg-blue-400",
                green:   "bg-emerald-600 dark:bg-emerald-400",
              };
              const labelClass: Record<Accent, string> = {
                neutral: "text-muted-foreground bg-muted",
                purple:  "text-violet-700 dark:text-violet-400 bg-violet-500/10 dark:bg-violet-400/15",
                blue:    "text-blue-700 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-400/15",
                green:   "text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-400/15",
              };
              return (
                <div key={f.title} className="px-8 py-10 first:pl-0 last:pr-0">
                  <div className="mb-4 flex items-center gap-2">
                    <div className={`h-1.5 w-1.5 rounded-full ${dotClass[f.accent]}`} />
                    <span className={`rounded px-1.5 py-0.5 text-[0.5625rem] font-semibold uppercase tracking-wider ${labelClass[f.accent]}`}>
                      {f.label}
                    </span>
                  </div>
                  <p className="mb-2 text-[0.9375rem] font-semibold text-foreground">{f.title}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Component showcase ───────────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-1 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/40">
                Library
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">Built and ready</h2>
            </div>
            <Link
              href="/components"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              All {total} →
            </Link>
          </div>

          <p className="mb-10 max-w-md text-sm text-muted-foreground">
            Each component works out of the box. Hover any card to see its name and category.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {showcase.map(([slug, meta]) => (
              <DesignCardPreview key={slug} slug={slug} meta={meta} showNew={false} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Style system teaser ──────────────────────────────────────── */}
      <section className="border-t border-border/40 px-6 py-20 bg-muted/20 dark:bg-muted/10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-1 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/40">
                Style system
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">
                11 styles.{" "}
                <span className="text-muted-foreground/40">One component.</span>
              </h2>
            </div>
            <Link
              href="/style"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Explore all →
            </Link>
          </div>

          <p className="mb-10 max-w-[52ch] text-sm text-muted-foreground">
            Import a different{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.8125rem] text-violet-700 dark:text-violet-400">
              styleConfig
            </code>{" "}
            to change the entire visual character — glass, terminal, neobrutalism, and more.
          </p>

          <StyleCarousel styleIds={styleEntries.map(([id]) => id)} />
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────────────── */}
      <section className="border-t border-border/40 px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Start building
          </h2>
          <p className="mb-8 text-[0.9375rem] text-muted-foreground">
            New components ship regularly. Everything is open source and free to use.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/components"
              className="rounded-lg bg-blue-600 dark:bg-blue-500 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 dark:hover:bg-blue-400 active:scale-[0.98]"
            >
              Browse the library
            </Link>
            <Link
              href="/docs"
              className="rounded-lg border border-border/70 px-6 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-border hover:text-foreground"
            >
              Documentation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
