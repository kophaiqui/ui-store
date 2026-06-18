"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import designsRegistry from "@/registry/designs.json";

// ── Component detail page TOC ─────────────────────────────────────────────────
const DETAIL_SECTIONS = ["preview", "props", "tags"] as const;

function ComponentTOC() {
  const [active, setActive] = useState<string>("preview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );

    DETAIL_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="px-4 pt-2">
      <p className="mb-3 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/50">
        On this page
      </p>
      <ul className="space-y-0.5">
        {DETAIL_SECTIONS.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={cn(
                "flex items-center py-1 pl-2 text-[0.875rem] capitalize transition-colors border-l-2",
                active === id
                  ? "border-violet-500 font-medium text-violet-400"
                  : "border-transparent font-normal text-muted-foreground hover:text-foreground"
              )}
            >
              {id}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ── Overview page TOC ─────────────────────────────────────────────────────────
function OverviewTOC() {
  const designs = designsRegistry as Record<string, { name: string; category: string }>;
  const categories = [...new Set(Object.values(designs).map((d) => d.category))];
  const slugs = Object.keys(designs);

  const [activeSlug, setActiveSlug] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSlug(entry.target.id);
        }
      },
      { rootMargin: "-10% 0px -70% 0px", threshold: 0 }
    );

    slugs.forEach((slug) => {
      const el = document.getElementById(slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className="px-4 pt-2">
      <p className="mb-3 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/50">
        On this page
      </p>
      <ul className="space-y-4">
        {categories.map((cat) => {
          const items = Object.entries(designs).filter(([, m]) => m.category === cat);
          const catActive = items.some(([slug]) => slug === activeSlug);
          return (
            <li key={cat}>
              <button
                onClick={() => scrollTo(cat)}
                className={cn(
                  "mb-1 block text-[0.6875rem] font-semibold uppercase tracking-widest transition-colors",
                  catActive ? "text-violet-400" : "text-muted-foreground/60 hover:text-muted-foreground"
                )}
              >
                {cat}
              </button>
              <ul className="ml-2 space-y-0.5 border-l border-border/40 pl-3">
                {items.map(([slug, meta]) => {
                  const isActive = slug === activeSlug;
                  return (
                    <li key={slug}>
                      <button
                        onClick={() => scrollTo(slug)}
                        className={cn(
                          "flex items-center gap-1.5 py-0.5 text-[0.8125rem] font-medium transition-colors",
                          isActive
                            ? "font-medium text-violet-400"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        <span
                          className={cn(
                            "h-1 w-1 shrink-0 rounded-full transition-colors",
                            isActive ? "bg-violet-500" : "bg-transparent"
                          )}
                        />
                        {meta.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

// ── Public export ─────────────────────────────────────────────────────────────
export function TableOfContents() {
  const pathname = usePathname();

  if (pathname === "/components" || pathname === "/components/overview") {
    return <OverviewTOC />;
  }

  if (pathname.startsWith("/components/")) {
    return <ComponentTOC />;
  }

  return null;
}
