"use client";

import type { FontMeta } from "@/lib/registry";
import { FontSpecimen } from "./FontSpecimen";
import { useFontFavorites } from "@/lib/useFontFavorites";

type Props = { slug: string; meta: FontMeta };

export function FontSpecimenPage({ slug, meta }: Props) {
  const { favorites, toggle } = useFontFavorites();
  return (
    <FontSpecimen
      slug={slug}
      meta={meta}
      isFavorite={favorites.has(slug)}
      onToggleFavorite={() => toggle(slug)}
    />
  );
}
