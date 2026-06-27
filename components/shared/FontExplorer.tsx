"use client";

import { useState, useEffect, useCallback, useRef, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { FontMeta } from "@/lib/registry";
import { FontSpecimen } from "./FontSpecimen";
import { useFontFavorites } from "@/lib/useFontFavorites";

// ─── Featured font card ────────────────────────────────────────────────────────

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
      link.rel  = "stylesheet";
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

// ─── Welcome state ─────────────────────────────────────────────────────────────

function WelcomeState({
  fonts, favorites, onSelect,
}: {
  fonts: Record<string, FontMeta>;
  favorites: Set<string>;
  onSelect: (slug: string) => void;
}) {
  const featured = ["playfair-display", "bebas-neue", "jetbrains-mono", "dancing-script", "manrope", "oswald"];

  return (
    <div className="px-8 py-10">
      <div className="mb-10">
        <h1 className="mb-1 text-3xl font-bold tracking-tight">Typography</h1>
        <p className="text-[0.9375rem] text-muted-foreground">
          {Object.keys(fonts).length} fonts across 5 categories — serif, sans-serif, display, monospace, and handwriting.
        </p>
      </div>

      {favorites.size > 0 && (
        <div className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground/50">Favorites</p>
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

      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground/50">Featured</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border/50 border border-border/50 rounded-xl overflow-hidden">
        {featured.filter((s) => fonts[s]).map((slug) => (
          <FeaturedFontCard key={slug} slug={slug} meta={fonts[slug]} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}

// ─── Inner (uses useSearchParams) ─────────────────────────────────────────────

function FontExplorerInner({ fonts }: { fonts: Record<string, FontMeta> }) {
  const searchParams = useSearchParams();
  const router       = useRouter();
  const pathname     = usePathname();
  const selectedSlug = searchParams.get("font");
  const selectedMeta = selectedSlug ? fonts[selectedSlug] ?? null : null;

  const { favorites, toggle } = useFontFavorites();

  const selectFont = useCallback(
    (slug: string) => router.push(`${pathname}?font=${slug}`, { scroll: false }),
    [router, pathname]
  );

  if (selectedSlug && selectedMeta) {
    return (
      <FontSpecimen
        key={selectedSlug}
        slug={selectedSlug}
        meta={selectedMeta}
        isFavorite={favorites.has(selectedSlug)}
        onToggleFavorite={() => toggle(selectedSlug)}
      />
    );
  }

  return <WelcomeState fonts={fonts} favorites={favorites} onSelect={selectFont} />;
}

// ─── Export ───────────────────────────────────────────────────────────────────

type Props = { fonts: Record<string, FontMeta> };

export function FontExplorer({ fonts }: Props) {
  return (
    <Suspense fallback={<div className="px-8 py-10"><p className="text-muted-foreground text-sm">Loading…</p></div>}>
      <FontExplorerInner fonts={fonts} />
    </Suspense>
  );
}
