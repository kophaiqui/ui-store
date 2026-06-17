"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type StyleNavSection = {
  category: string;
  items: { slug: string; name: string }[];
};

/** Tracks which component section is currently in view, for active highlighting. */
function useActiveSlug(slugs: string[]) {
  const key = slugs.join(",");
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = key ? key.split(",") : [];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-10% 0px -70% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [key]);

  return active;
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// ── Left rail — flat component list (no variant dropdown) ─────────────────────
export function StyleSidebar({
  styleName,
  sections,
}: {
  styleName: string;
  sections: StyleNavSection[];
}) {
  const active = useActiveSlug(sections.flatMap((s) => s.items.map((i) => i.slug)));

  return (
    <nav className="px-3 pb-10 pt-2">
      <Link
        href="/style"
        className="mb-3 flex items-center gap-1.5 px-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        ← All styles
      </Link>
      <p className="mb-4 px-2 text-sm font-semibold">{styleName}</p>

      {sections.map((section) => (
        <div key={section.category} className="mb-4">
          <p className="mb-1 px-2 py-1 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/50">
            {section.category}
          </p>
          <ul className="space-y-0.5">
            {section.items.map((item) => {
              const isActive = item.slug === active;
              return (
                <li key={item.slug}>
                  <button
                    onClick={() => scrollTo(item.slug)}
                    className={cn(
                      "relative flex w-full items-center rounded-md px-2 py-1.5 text-left text-[0.875rem] font-medium transition-all duration-150",
                      isActive
                        ? "bg-violet-500/[0.08] text-foreground before:absolute before:inset-y-1 before:left-0 before:w-[2px] before:rounded-full before:bg-violet-500"
                        : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                    )}
                  >
                    {item.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

// ── Right rail — "on this page" ───────────────────────────────────────────────
export function StyleToc({ sections }: { sections: StyleNavSection[] }) {
  const active = useActiveSlug(sections.flatMap((s) => s.items.map((i) => i.slug)));

  return (
    <nav className="px-4 pt-2">
      <p className="mb-3 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/50">
        On this page
      </p>
      <ul className="space-y-4">
        {sections.map((section) => {
          const catActive = section.items.some((i) => i.slug === active);
          return (
            <li key={section.category}>
              <button
                onClick={() => scrollTo(section.category)}
                className={cn(
                  "mb-1 block text-[0.6875rem] font-semibold uppercase tracking-widest transition-colors",
                  catActive ? "text-violet-400" : "text-muted-foreground/60 hover:text-muted-foreground"
                )}
              >
                {section.category}
              </button>
              <ul className="ml-2 space-y-0.5 border-l border-border/40 pl-3">
                {section.items.map((item) => {
                  const isActive = item.slug === active;
                  return (
                    <li key={item.slug}>
                      <button
                        onClick={() => scrollTo(item.slug)}
                        className={cn(
                          "flex items-center gap-1.5 py-0.5 text-[0.8125rem] font-medium transition-colors",
                          isActive ? "text-violet-400" : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        <span
                          className={cn(
                            "h-1 w-1 shrink-0 rounded-full transition-colors",
                            isActive ? "bg-violet-500" : "bg-transparent"
                          )}
                        />
                        {item.name}
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
