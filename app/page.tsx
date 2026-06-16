import Link from "next/link";
import { getAllComponents } from "@/lib/registry";

const SECTIONS = [
  {
    label: "Components",
    href: "/components",
    description: "Reusable UI primitives — buttons, inputs, cards, and more.",
  },
  {
    label: "Fonts",
    href: "/fonts",
    description: "Curated typefaces with previews and download links.",
  },
  {
    label: "Motion",
    href: "/motion",
    description: "Copy-paste animation patterns built with Motion.",
  },
  {
    label: "Docs",
    href: "/docs",
    description: "Guides, API references, and usage patterns.",
  },
];

export default function HomePage() {
  const components = getAllComponents();
  const count = Object.keys(components).length;

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-16 max-w-xl">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight">
          UI Store
        </h1>
        <p className="text-lg text-muted-foreground">
          A curated resource index for UI components, fonts, and motion
          patterns. Everything is open-source and copy-paste ready.
        </p>
      </div>

      <div className="mb-6 text-sm text-muted-foreground">
        {count} component{count !== 1 ? "s" : ""} available
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {SECTIONS.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group rounded-xl border border-border p-6 transition-colors hover:border-foreground/20 hover:bg-muted/40"
          >
            <div className="mb-2 font-medium">{section.label}</div>
            <div className="text-sm text-muted-foreground">
              {section.description}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
