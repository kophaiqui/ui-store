"use client";

import { useRouter, usePathname } from "next/navigation";
import type { FontMeta } from "@/lib/registry";
import { useFontFavorites } from "@/lib/useFontFavorites";
import { TypoOverviewPanel } from "./TypoOverviewPanel";

type Props = { fonts: Record<string, FontMeta> };

export function FontExplorer({ fonts }: Props) {
  const router   = useRouter();
  const pathname = usePathname();

  const { favorites } = useFontFavorites();

  const selectFont = (slug: string) => router.push(`${pathname}/${slug}`);

  return (
    <div className="px-8 py-10">
      {favorites.size > 0 && (
        <div className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground/50">Favorites</p>
          <div className="flex flex-wrap gap-2">
            {[...favorites].filter(s => fonts[s]).map(slug => (
              <button
                key={slug}
                onClick={() => selectFont(slug)}
                className="rounded-md border border-rose-300/40 bg-rose-50/60 px-3 py-1.5 text-sm text-rose-600 hover:border-rose-300/70 hover:bg-rose-50 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/30 transition-colors"
              >
                {fonts[slug].name}
              </button>
            ))}
          </div>
        </div>
      )}
      <TypoOverviewPanel fonts={fonts} onSelect={selectFont} />
    </div>
  );
}
