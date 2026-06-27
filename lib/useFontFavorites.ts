"use client";

import { useState, useEffect, useCallback } from "react";

export function useFontFavorites() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  useEffect(() => {
    const load = () => {
      try {
        const raw = localStorage.getItem("font-favorites");
        setFavorites(new Set(JSON.parse(raw ?? "[]")));
      } catch { /* ignore */ }
    };
    load();
    window.addEventListener("storage", load);
    return () => window.removeEventListener("storage", load);
  }, []);

  const toggle = useCallback((slug: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      const arr = [...next];
      localStorage.setItem("font-favorites", JSON.stringify(arr));
      window.dispatchEvent(new StorageEvent("storage", { key: "font-favorites" }));
      return next;
    });
  }, []);

  return { favorites, toggle };
}
