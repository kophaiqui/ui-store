"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export type StyleNavSection = {
  category: string;
  items: { slug: string; name: string }[];
};

function GridIcon({ className }: { className?: string }) {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={className}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

const ACTIVE_RAIL =
  "bg-violet-500/[0.08] text-foreground before:absolute before:inset-y-1 before:left-0 before:w-[2px] before:rounded-full before:bg-violet-500";
const INACTIVE_RAIL = "text-muted-foreground hover:bg-muted/60 hover:text-foreground";

// ── Left rail — Overview + flat component list (each links to its detail page) ─
export function StyleSidebar({
  styleId,
  styleName,
  sections,
}: {
  styleId: string;
  styleName: string;
  sections: StyleNavSection[];
}) {
  const pathname = usePathname();
  const overviewHref = `/style/${styleId}`;
  const isOverview = pathname === overviewHref;

  return (
    <nav className="px-3 pb-10 pt-2">
      <Link
        href="/style"
        className="mb-3 flex items-center gap-1.5 px-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        ← All styles
      </Link>
      <p className="mb-4 px-2 text-sm font-semibold">{styleName}</p>

      <Link
        href={overviewHref}
        className={cn(
          "relative mb-4 flex items-center gap-2 rounded-md px-2 py-2 text-[0.875rem] font-medium transition-all duration-150",
          isOverview ? ACTIVE_RAIL : INACTIVE_RAIL
        )}
      >
        <GridIcon className={cn(isOverview ? "text-violet-400" : "text-muted-foreground/50")} />
        Overview
      </Link>

      {sections.map((section) => (
        <div key={section.category} className="mb-4">
          <p className="mb-1 px-2 py-1 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/50">
            {section.category}
          </p>
          <ul className="space-y-0.5">
            {section.items.map((item) => {
              const href = `/style/${styleId}/${item.slug}`;
              const isActive = pathname === href;
              return (
                <li key={item.slug}>
                  <Link
                    href={href}
                    className={cn(
                      "relative flex w-full items-center rounded-md px-2 py-1.5 text-[0.875rem] font-medium transition-all duration-150",
                      isActive ? ACTIVE_RAIL : INACTIVE_RAIL
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

// ── Right rail — adapts to the overview grid vs. a component detail page ───────
export function StyleToc({ styleId, sections }: { styleId: string; sections: StyleNavSection[] }) {
  const pathname = usePathname();
  return pathname === `/style/${styleId}` ? (
    <OverviewToc sections={sections} />
  ) : (
    <DetailToc />
  );
}

function useActiveId(ids: string[]) {
  const key = ids.join(",");
  const [active, setActive] = useState("");

  useEffect(() => {
    const list = key ? key.split(",") : [];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    list.forEach((id) => {
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

function TocShell({ children }: { children: React.ReactNode }) {
  return (
    <nav className="px-4 pt-2">
      <p className="mb-3 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/50">
        On this page
      </p>
      {children}
    </nav>
  );
}

function OverviewToc({ sections }: { sections: StyleNavSection[] }) {
  const active = useActiveId(sections.flatMap((s) => s.items.map((i) => i.slug)));

  return (
    <TocShell>
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
    </TocShell>
  );
}

const DETAIL_SECTIONS = ["preview", "props", "usage", "tags"] as const;

function DetailToc() {
  const active = useActiveId([...DETAIL_SECTIONS]);

  return (
    <TocShell>
      <ul className="space-y-0.5">
        {DETAIL_SECTIONS.map((id) => (
          <li key={id}>
            <button
              onClick={() => scrollTo(id)}
              className={cn(
                "flex items-center py-1 pl-2 text-[0.875rem] capitalize transition-colors border-l-2",
                active === id
                  ? "border-violet-500 font-medium text-violet-400"
                  : "border-transparent font-normal text-muted-foreground hover:text-foreground"
              )}
            >
              {id}
            </button>
          </li>
        ))}
      </ul>
    </TocShell>
  );
}
