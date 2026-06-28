import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Introduction",
  description: "What That One UI is, how it works, and how to get started.",
};

function SectionAnchor({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="mb-4 mt-12 scroll-mt-20 text-xl font-bold tracking-tight text-foreground first:mt-0"
    >
      {children}
    </h2>
  );
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.8125rem] text-foreground/80">
      {children}
    </code>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-xl border border-violet-500/20 bg-violet-500/[0.05] px-5 py-4 text-[0.9375rem] leading-relaxed text-foreground/80">
      {children}
    </div>
  );
}

const QUICK_LINKS = [
  {
    label: "Components",
    href: "/components",
    description: "38 UI components — copy the code, install the style.",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    label: "Colors",
    href: "/colors",
    description: "21 semantic tokens + 8 style palettes + harmony tools.",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" /><path d="M12 3v18M3 12h18" strokeOpacity="0.4" />
      </svg>
    ),
  },
  {
    label: "Typography",
    href: "/fonts",
    description: "32 curated fonts across 5 categories, open license.",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 7V4h16v3M9 20h6M12 4v16" />
      </svg>
    ),
  },
  {
    label: "Installation",
    href: "/documents/installation",
    description: "Set up tokens and install your first component.",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 3v12M8 11l4 4 4-4M3 17v1a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-1" />
      </svg>
    ),
  },
];

const STACK = [
  { label: "Next.js 15",      description: "App Router, server components, file-based routing" },
  { label: "Tailwind CSS v4", description: "Utility-first styling, zero config in components" },
  { label: "shadcn tokens",   description: "21 CSS custom properties that resolve in light + dark" },
  { label: "Google Fonts",    description: "32 open-license typefaces, lazy-loaded on scroll" },
  { label: "TypeScript",      description: "Fully typed props and style configs throughout" },
];

export default function IntroductionPage() {
  return (
    <div className="mx-auto max-w-3xl px-8 py-12">

      {/* Header */}
      <div className="mb-10">
        <p className="mb-3 text-[0.6875rem] font-bold uppercase tracking-widest text-muted-foreground/40">
          Getting started
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">Introduction</h1>
        <p className="text-[1.0625rem] leading-relaxed text-muted-foreground">
          That One UI is a design resource platform — components, color systems, and typography tools — built for developers who want to move fast without starting from scratch.
        </p>
      </div>

      {/* Quick links */}
      <div className="mb-12 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {QUICK_LINKS.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex items-start gap-3.5 rounded-xl border border-border/60 bg-card/40 p-4 transition-all duration-150 hover:border-border hover:bg-card"
          >
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-muted/40 text-muted-foreground transition-colors group-hover:border-violet-500/30 group-hover:bg-violet-500/[0.06] group-hover:text-violet-400">
              {link.icon}
            </span>
            <div>
              <p className="mb-0.5 text-[0.9375rem] font-semibold text-foreground">{link.label}</p>
              <p className="text-[0.8125rem] leading-relaxed text-muted-foreground">{link.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* What is it */}
      <SectionAnchor id="what-is-it">What is That One UI?</SectionAnchor>
      <p className="mb-4 text-[0.9375rem] leading-relaxed text-muted-foreground">
        It's a copy-paste component library — not a package you install. Every component lives in your codebase as plain TypeScript and Tailwind. You own the code from day one.
      </p>
      <p className="mb-4 text-[0.9375rem] leading-relaxed text-muted-foreground">
        The design system is built on{" "}
        <InlineCode>oklch</InlineCode>-based CSS custom properties — the same token shape used by shadcn/ui — so every component responds automatically to light and dark mode, and to your brand color.
      </p>
      <Callout>
        There is no <InlineCode>npm install that-one-ui</InlineCode>. You copy components directly into your project and modify them as you need. The library is a starting point, not a dependency.
      </Callout>

      {/* Philosophy */}
      <SectionAnchor id="philosophy">Philosophy</SectionAnchor>
      <p className="mb-6 text-[0.9375rem] leading-relaxed text-muted-foreground">
        Three rules guide every component built here:
      </p>
      <div className="mb-6 space-y-3">
        {[
          { n: "1", title: "All props are adjustable", body: "Every string, number, or node that renders must be exposed as a prop with a default. Nothing hardcoded." },
          { n: "2", title: "StyleConfig swaps styles, not behavior", body: "A custom styleConfig replaces Tailwind classes only. Prop shape, defaults, and logic are unchanged." },
          { n: "3", title: "Component.tsx is the source of truth", body: "No separate Preview files. Default props define the preview. One file, one contract." },
        ].map(({ n, title, body }) => (
          <div key={n} className="flex gap-4 rounded-xl border border-border/60 bg-card/40 p-4">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-[0.75rem] font-bold text-violet-400">
              {n}
            </span>
            <div>
              <p className="mb-1 text-[0.9375rem] font-semibold text-foreground">{title}</p>
              <p className="text-[0.8125rem] leading-relaxed text-muted-foreground">{body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Stack */}
      <SectionAnchor id="tech-stack">Tech stack</SectionAnchor>
      <p className="mb-6 text-[0.9375rem] leading-relaxed text-muted-foreground">
        Everything here is built with this stack. Copy-pasted components assume you have it too.
      </p>
      <div className="mb-6 overflow-hidden rounded-xl border border-border/60">
        {STACK.map((item, i) => (
          <div
            key={item.label}
            className={`flex items-start gap-4 px-5 py-3.5 ${i < STACK.length - 1 ? "border-b border-border/40" : ""}`}
          >
            <InlineCode>{item.label}</InlineCode>
            <p className="text-[0.875rem] leading-relaxed text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>

      {/* What's included */}
      <SectionAnchor id="whats-included">What&apos;s included</SectionAnchor>
      <p className="mb-6 text-[0.9375rem] leading-relaxed text-muted-foreground">
        The platform has five resource sections:
      </p>
      <div className="mb-8 space-y-2">
        {[
          { label: "Components",  count: "38",  detail: "inputs, data-display, feedback, navigation — each with variants and a prop explorer" },
          { label: "Colors",      count: "5",   detail: "tools: base tokens, your palette, style presets, inspiration, and a brand collection" },
          { label: "Typography",  count: "32",  detail: "fonts across serif, sans-serif, display, monospace, and handwriting — with a live specimen viewer" },
          { label: "Styles",      count: "8",   detail: "complete style personalities — swap one import and every component updates" },
          { label: "Motion",      count: "—",   detail: "animation patterns and interaction presets (in progress)" },
        ].map(({ label, count, detail }) => (
          <div key={label} className="flex items-start gap-4 rounded-lg border border-border/40 bg-card/20 px-4 py-3">
            <span className="w-24 shrink-0 text-[0.9375rem] font-semibold text-foreground">{label}</span>
            <span className="w-8 shrink-0 font-mono text-sm font-bold text-violet-400">{count}</span>
            <p className="text-[0.875rem] leading-relaxed text-muted-foreground">{detail}</p>
          </div>
        ))}
      </div>

      {/* Next steps */}
      <SectionAnchor id="next-steps">Next steps</SectionAnchor>
      <p className="mb-6 text-[0.9375rem] leading-relaxed text-muted-foreground">
        The fastest path to your first component:
      </p>
      <ol className="mb-8 space-y-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
        {[
          <>Read the <Link href="/documents/installation" className="font-medium text-foreground underline decoration-border underline-offset-2 hover:decoration-foreground">Installation</Link> guide — paste the token block into your <InlineCode>globals.css</InlineCode>.</>,
          <>Browse <Link href="/components" className="font-medium text-foreground underline decoration-border underline-offset-2 hover:decoration-foreground">Components</Link> and pick one. Copy its code into your project.</>,
          <>Customize the <InlineCode>StyleConfig</InlineCode> or override individual tokens to match your brand.</>,
          <>Use the <Link href="/colors/maincolor" className="font-medium text-foreground underline decoration-border underline-offset-2 hover:decoration-foreground">color tool</Link> to generate a full palette from your primary color.</>,
        ].map((step, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted text-[0.625rem] font-bold text-muted-foreground">
              {i + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>

      {/* Footer nav */}
      <div className="border-t border-border/40 pt-8">
        <Link
          href="/documents/installation"
          className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Installation
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="transition-transform group-hover:translate-x-0.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

    </div>
  );
}
