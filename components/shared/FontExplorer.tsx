"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
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
      {sidebarOpen && (
        <div
          className="absolute inset-0 z-20 bg-background/70 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden
        />
      )}

      {/* ── Sidebar ──────────────────────────────────────────────── */}
      <aside
        className={cn(
          "absolute inset-y-0 left-0 z-30 flex w-64 shrink-0 flex-col border-r border-border/60 bg-background overflow-hidden",
          "transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "md:relative md:translate-x-0",
          sidebarOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        )}
        aria-label="Font library"
      >
        {/* Search */}
        <div className="flex-none px-3 pt-4 pb-3 border-b border-border/40">
          <div className="relative">
            <svg
              className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground/40"
              width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search fonts…"
              aria-label="Search fonts"
              className="w-full rounded-lg border border-border/50 bg-muted/20 py-1.5 pl-7 pr-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-foreground/25 focus:bg-background focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Font list */}
        <div className="flex-1 overflow-y-auto overscroll-contain py-2 px-1.5">
          {!search && favMeta.length > 0 && (
            <div className="mb-2">
              <p className="px-2.5 py-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground/40">
                Favorites
              </p>
              {favMeta.map((slug) => (
                <FontSidebarItem
                  key={slug}
                  slug={slug}
                  meta={fonts[slug]}
                  isActive={selectedSlug === slug}
                  isFavorite
                  onSelect={selectFont}
                />
              ))}
            </div>
          )}

          {Object.entries(grouped).map(([cat, items]) => (
            <div key={cat}>
              <button
                onClick={() => toggleCategory(cat)}
                aria-expanded={!collapsed.has(cat)}
                className="flex w-full items-center justify-between px-2.5 pt-3 pb-1.5"
              >
                <span className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground/40">
                  {CATEGORY_LABELS[cat] ?? cat}
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[0.5625rem] tabular-nums text-muted-foreground/30">{items.length}</span>
                  <svg
                    width="9" height="9" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                    className={cn("text-muted-foreground/30 transition-transform duration-200", collapsed.has(cat) && "-rotate-90")}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </button>

              {!collapsed.has(cat) && items.map(([slug, meta]) => (
                <FontSidebarItem
                  key={slug}
                  slug={slug}
                  meta={meta}
                  isActive={selectedSlug === slug}
                  isFavorite={favorites.has(slug)}
                  onSelect={selectFont}
                />
              ))}
            </div>
          ))}

          {Object.keys(grouped).length === 0 && (
            <div className="py-10 text-center">
              <p className="text-sm text-muted-foreground">No results for &ldquo;{search}&rdquo;</p>
              <button
                onClick={() => setSearch("")}
                className="mt-1.5 text-xs text-muted-foreground/50 hover:text-foreground transition-colors"
              >
                Clear
              </button>
            </div>
          )}
        </div>

        {/* Sidebar footer */}
        <div className="flex-none border-t border-border/40 px-4 py-2.5">
          <p className="text-[0.625rem] tabular-nums text-muted-foreground/30">
            {Object.keys(fonts).length} fonts · 5 categories
          </p>
        </div>
      </aside>

      {/* ── Main ─────────────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Mobile bar */}
        <div className="flex items-center gap-3 border-b border-border/60 px-4 py-2.5 md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="Open font library"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <span className="text-sm font-medium text-foreground">
            {selectedMeta ? selectedMeta.name : "Typography"}
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

// ─── Sidebar font item — renders name in its own typeface ─────────────────────

function FontSidebarItem({
  slug, meta, isActive, isFavorite, onSelect,
}: {
  slug: string;
  meta: FontMeta;
  isActive: boolean;
  isFavorite: boolean;
  onSelect: (slug: string) => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (meta.source.provider !== "google") { setLoaded(true); return; }

    const existing = document.head.querySelector(`link[data-font="${meta.family}"]`);
    if (existing) { setLoaded(true); return; }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(meta.family)}:wght@400&display=swap`;
        link.setAttribute("data-font", meta.family);
        link.onload = () => setLoaded(true);
        document.head.appendChild(link);
      },
      { rootMargin: "120px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [meta.family, meta.source.provider]);

  return (
    <button
      ref={ref}
      onClick={() => onSelect(slug)}
      aria-current={isActive}
      className={cn(
        "group relative flex w-full items-center justify-between rounded-md px-2.5 py-2 text-left transition-colors duration-100",
        isActive
          ? "bg-foreground/[0.06] before:absolute before:inset-y-1.5 before:left-0 before:w-[2px] before:rounded-full before:bg-foreground"
          : "hover:bg-muted/50"
      )}
    >
      <span
        className={cn(
          "truncate text-[0.9375rem] leading-tight transition-opacity",
          isActive ? "text-foreground" : "text-foreground/70"
        )}
        style={{ fontFamily: loaded ? `'${meta.family}', sans-serif` : "inherit" }}
      >
        {meta.name}
      </span>
      <div className={cn(
        "flex shrink-0 items-center gap-1 ml-2 transition-opacity",
        isActive ? "opacity-60" : "opacity-0 group-hover:opacity-60"
      )}>
        {isFavorite && (
          <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" className="text-rose-400">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        )}
        <span className="text-[0.5625rem] tabular-nums text-muted-foreground/40">{meta.weights.length}w</span>
      </div>
    </button>
  );
}

// ─── Welcome state ────────────────────────────────────────────────────────────

function WelcomeState({
  onSelect, fonts, favorites,
}: {
  onSelect: (slug: string) => void;
  fonts: Record<string, FontMeta>;
  favorites: Set<string>;
}) {
  const featured = ["playfair-display", "bebas-neue", "jetbrains-mono", "dancing-script", "manrope", "oswald"];

  return (
    <div className="px-8 py-10 max-w-4xl">
      <div className="mb-10">
        <p className="mb-2 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground/50">
          Typography
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground leading-none mb-3">
          {Object.keys(fonts).length} fonts
        </h1>
        <p className="text-[0.9375rem] leading-relaxed text-muted-foreground max-w-[52ch]">
          Serif, sans-serif, display, monospace, and handwriting. Select a font from the sidebar to explore its full specimen.
        </p>
      </div>

      {favorites.size > 0 && (
        <div className="mb-10">
          <p className="mb-3 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground/50">Favorites</p>
          <div className="flex flex-wrap gap-2">
            {[...favorites].filter((s) => fonts[s]).map((slug) => (
              <button
                key={slug}
                onClick={() => onSelect(slug)}
                className="rounded-md border border-rose-300/40 bg-rose-50/60 px-3 py-1.5 text-sm text-rose-600 hover:border-rose-300/70 hover:bg-rose-50 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/30 transition-colors"
              >
                {fonts[slug].name}
              </button>
            ))}
          </div>
        </div>
      )}

      <p className="mb-4 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground/50">Featured</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border/50 border border-border/50 rounded-xl overflow-hidden">
        {featured.filter((s) => fonts[s]).map((slug) => (
          <FeaturedFontCard key={slug} slug={slug} meta={fonts[slug]} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}

// ─── Featured font card — shows name in its own typeface ─────────────────────

function FeaturedFontCard({
  slug, meta, onSelect,
}: {
  slug: string;
  meta: FontMeta;
  onSelect: (slug: string) => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (meta.source.provider !== "google") { setLoaded(true); return; }

    const existing = document.head.querySelector(`link[data-font="${meta.family}"]`);
    if (existing) { setLoaded(true); return; }

    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      const w = meta.weights.includes(700) ? 700 : meta.weights[meta.weights.length - 1];
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(meta.family)}:wght@${w}&display=swap`;
      link.setAttribute("data-font", meta.family);
      link.onload = () => setLoaded(true);
      document.head.appendChild(link);
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [meta.family, meta.weights, meta.source.provider]);

  const displayWeight = meta.weights.includes(700) ? 700 : meta.weights[meta.weights.length - 1];

  return (
    <button
      ref={ref}
      onClick={() => onSelect(slug)}
      className="group flex flex-col justify-between bg-background p-6 text-left hover:bg-muted/20 active:scale-[0.99] transition-all duration-150 min-h-[148px]"
    >
      <span className="text-[0.5625rem] uppercase tracking-[0.12em] text-muted-foreground/40 capitalize">
        {meta.category} · {meta.weights.length} weights
      </span>
      <div>
        <p
          className={cn("text-[2rem] leading-tight mb-1 transition-opacity duration-500", !loaded && "opacity-20")}
          style={{
            fontFamily: loaded ? `'${meta.family}', sans-serif` : "inherit",
            fontWeight: displayWeight,
          }}
        >
          {meta.name}
        </p>
        <p className="text-[0.75rem] text-muted-foreground/50 line-clamp-1 group-hover:text-muted-foreground/70 transition-colors">
          {meta.description}
        </p>
      </div>
    </button>
  );
}
