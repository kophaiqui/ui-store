"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { cn } from "@/lib/utils";
import type { FontMeta } from "@/lib/registry";
import { FontSpecimen } from "./FontSpecimen";

const CATEGORY_ORDER = ["serif", "sans-serif", "display", "monospace", "handwriting"] as const;

const CATEGORY_LABELS: Record<string, string> = {
  "serif": "Serif",
  "sans-serif": "Sans Serif",
  "display": "Display",
  "monospace": "Monospace",
  "handwriting": "Handwriting",
};

type Props = { fonts: Record<string, FontMeta> };

export function FontExplorer({ fonts }: Props) {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  // Restore state from localStorage + URL param on mount (client-only)
  useEffect(() => {
    try {
      const favs = JSON.parse(localStorage.getItem("font-favorites") ?? "[]");
      setFavorites(new Set(favs));
    } catch { /* ignore */ }

    const slug = new URLSearchParams(window.location.search).get("font");
    if (slug && fonts[slug]) setSelectedSlug(slug);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectFont = useCallback((slug: string) => {
    setSelectedSlug(slug);
    setSidebarOpen(false);
    history.replaceState(null, "", `?font=${slug}`);
  }, []);

  const toggleFavorite = useCallback((slug: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      localStorage.setItem("font-favorites", JSON.stringify([...next]));
      return next;
    });
  }, []);

  const toggleCategory = (cat: string) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  // Group fonts by category
  const grouped = useMemo(() => {
    const q = search.toLowerCase().trim();
    const result: Record<string, Array<[string, FontMeta]>> = {};

    for (const cat of CATEGORY_ORDER) {
      const items = Object.entries(fonts).filter(([, m]) => {
        if (m.category !== cat) return false;
        if (!q) return true;
        return m.name.toLowerCase().includes(q) || m.category.includes(q);
      });
      if (items.length) result[cat] = items;
    }
    return result;
  }, [fonts, search]);

  const selectedMeta = selectedSlug ? fonts[selectedSlug] ?? null : null;
  const favMeta = [...favorites].filter((s) => fonts[s]);

  return (
    <div className="relative flex h-[calc(100dvh-57px)] overflow-hidden bg-background">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="absolute inset-0 z-20 bg-background/70 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "absolute inset-y-0 left-0 z-30 flex w-60 shrink-0 flex-col border-r border-border/60 overflow-hidden",
          "transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "md:relative md:translate-x-0",
          sidebarOpen ? "translate-x-0 shadow-xl" : "-translate-x-full"
        )}
        aria-label="Font library"
      >
        {/* Search */}
        <div className="flex-none border-b border-border/60 px-3 py-4">
          <div className="relative">
            <svg
              className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground/50"
              width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search fonts…"
              aria-label="Search fonts"
              className="w-full rounded-md border border-border/50 bg-muted/30 py-1.5 pl-7 pr-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-foreground/30 focus:outline-none focus:ring-0 transition-colors"
            />
          </div>
        </div>

        {/* Font list */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-3 pb-10 pt-1">

          {/* Favorites */}
          {!search && favMeta.length > 0 && (
            <div className="mb-4">
              <p className="px-2 py-1 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/50">
                Favorites
              </p>
              <ul className="mt-0.5 space-y-0.5">
                {favMeta.map((slug) => (
                  <li key={slug}>
                    <FontItem
                      slug={slug}
                      meta={fonts[slug]}
                      isActive={selectedSlug === slug}
                      isFavorite
                      onSelect={selectFont}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Categories */}
          {Object.entries(grouped).map(([cat, items]) => (
            <div key={cat} className="mb-4">
              <button
                onClick={() => toggleCategory(cat)}
                aria-expanded={!collapsed.has(cat)}
                className="flex w-full items-center justify-between px-2 py-1 text-left"
              >
                <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/50">
                  {CATEGORY_LABELS[cat] ?? cat}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[0.625rem] text-muted-foreground/40">{items.length}</span>
                  <svg
                    width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                    className={cn("shrink-0 transition-transform duration-200", collapsed.has(cat) && "-rotate-90")}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </button>

              {!collapsed.has(cat) && (
                <ul className="mt-0.5 space-y-0.5">
                  {items.map(([slug, meta]) => (
                    <li key={slug}>
                      <FontItem
                        slug={slug}
                        meta={meta}
                        isActive={selectedSlug === slug}
                        isFavorite={favorites.has(slug)}
                        onSelect={selectFont}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {Object.keys(grouped).length === 0 && (
            <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
              <p className="text-sm text-muted-foreground">No fonts match "{search}"</p>
              <button
                onClick={() => setSearch("")}
                className="mt-2 text-xs text-muted-foreground/60 hover:text-foreground transition-colors"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Mobile top bar */}
        <div className="flex items-center gap-3 border-b border-border/60 px-4 py-2.5 md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="Open font library"
            className="flex h-8 w-8 items-center justify-center rounded-md border border-border/60 text-muted-foreground hover:border-border hover:text-foreground transition-colors"
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <span className="text-sm text-muted-foreground">
            {selectedMeta ? selectedMeta.name : "Select a font"}
          </span>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain">
          {selectedSlug && selectedMeta ? (
            <FontSpecimen
              key={selectedSlug}
              slug={selectedSlug}
              meta={selectedMeta}
              isFavorite={favorites.has(selectedSlug)}
              onToggleFavorite={() => toggleFavorite(selectedSlug)}
            />
          ) : (
            <WelcomeState onSelect={selectFont} fonts={fonts} favorites={favorites} />
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Font list item ───────────────────────────────────────────────────────────

function FontItem({
  slug,
  meta,
  isActive,
  isFavorite,
  onSelect,
}: {
  slug: string;
  meta: FontMeta;
  isActive: boolean;
  isFavorite: boolean;
  onSelect: (slug: string) => void;
}) {
  return (
    <button
      onClick={() => onSelect(slug)}
      aria-current={isActive}
      className={cn(
        "group relative flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left text-[0.875rem] font-medium transition-all duration-150",
        isActive
          ? "bg-violet-500/[0.08] text-foreground before:absolute before:inset-y-1 before:left-0 before:w-[2px] before:rounded-full before:bg-violet-500"
          : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
      )}
    >
      <span className="truncate">{meta.name}</span>
      <div className={cn(
        "flex shrink-0 items-center gap-1.5 transition-opacity",
        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      )}>
        {isFavorite && (
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-rose-400">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        )}
        <span className="text-[0.625rem] text-muted-foreground/60">{meta.weights.length}w</span>
      </div>
    </button>
  );
}

// ─── Welcome state ────────────────────────────────────────────────────────────

function WelcomeState({
  onSelect,
  fonts,
  favorites,
}: {
  onSelect: (slug: string) => void;
  fonts: Record<string, FontMeta>;
  favorites: Set<string>;
}) {
  const featured = ["playfair-display", "bebas-neue", "jetbrains-mono", "dancing-script", "manrope", "oswald"];

  return (
    <div className="flex flex-1 flex-col px-8 py-12">
      <div className="mb-10">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Typography</h1>
        <p className="max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
          {Object.keys(fonts).length} fonts across 5 categories. Select a font from the sidebar to view its full specimen, weights, and character set.
        </p>
      </div>

      {/* Favorites quick access */}
      {favorites.size > 0 && (
        <div className="mb-8">
          <p className="mb-3 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/50">Your Favorites</p>
          <div className="flex flex-wrap gap-2">
            {[...favorites].map((slug) => fonts[slug] && (
              <button
                key={slug}
                onClick={() => onSelect(slug)}
                className="rounded-lg border border-rose-400/30 bg-rose-50/50 px-3 py-1.5 text-sm text-rose-600 transition-colors hover:border-rose-400/60 hover:bg-rose-50 dark:bg-rose-500/10 dark:text-rose-400"
              >
                {fonts[slug].name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Featured fonts grid */}
      <p className="mb-4 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/50">Featured</p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {featured.filter((s) => fonts[s]).map((slug) => {
          const meta = fonts[slug];
          return (
            <button
              key={slug}
              onClick={() => onSelect(slug)}
              className="group flex flex-col gap-2 rounded-xl border border-border/60 bg-card p-5 text-left transition-all duration-150 hover:border-border hover:shadow-sm active:scale-[0.99]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs capitalize text-muted-foreground/60">{meta.category}</span>
                <span className="text-[0.625rem] text-muted-foreground/40">{meta.weights.length} weights</span>
              </div>
              <p
                className="truncate text-2xl text-foreground"
                style={{ fontFamily: "inherit" }}
              >
                {meta.name}
              </p>
              <p className="text-xs text-muted-foreground/70 line-clamp-2">{meta.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
