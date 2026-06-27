"use client";

import { useState, useEffect, useCallback, useMemo, useRef, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useFontFavorites } from "@/lib/useFontFavorites";
import type { FontMeta } from "@/lib/registry";

const CATEGORY_ORDER = ["serif", "sans-serif", "display", "monospace", "handwriting"] as const;

const CATEGORY_LABELS: Record<string, string> = {
  "serif":       "Serif",
  "sans-serif":  "Sans Serif",
  "display":     "Display",
  "monospace":   "Monospace",
  "handwriting": "Handwriting",
};

// ─── Font item (renders name in its own typeface) ─────────────────────────────

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
        link.rel  = "stylesheet";
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
      <div
        className={cn(
          "ml-2 flex shrink-0 items-center gap-1 transition-opacity",
          isActive ? "opacity-60" : "opacity-0 group-hover:opacity-60"
        )}
      >
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

// ─── Inner sidebar (needs useSearchParams) ────────────────────────────────────

function FontSidebarInner({ fonts }: { fonts: Record<string, FontMeta> }) {
  const searchParams  = useSearchParams();
  const router        = useRouter();
  const pathname      = usePathname();
  const selectedSlug  = searchParams.get("font");

  const [search,    setSearch]    = useState("");
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());

  const { favorites } = useFontFavorites();

  const selectFont = useCallback(
    (slug: string) => router.push(`${pathname}?font=${slug}`, { scroll: false }),
    [router, pathname]
  );

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

  const favMeta = [...favorites].filter((s) => fonts[s]);

  return (
    <div className="flex h-full flex-col">
      {/* Search */}
      <div className="flex-none border-b border-border/40 px-3 pb-3 pt-1">
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

      {/* Footer count */}
      <div className="flex-none border-t border-border/40 px-4 py-2.5">
        <p className="text-[0.625rem] tabular-nums text-muted-foreground/30">
          {Object.keys(fonts).length} fonts · 5 categories
        </p>
      </div>
    </div>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export function FontSidebarClient({ fonts }: { fonts: Record<string, FontMeta> }) {
  return (
    <Suspense>
      <FontSidebarInner fonts={fonts} />
    </Suspense>
  );
}
