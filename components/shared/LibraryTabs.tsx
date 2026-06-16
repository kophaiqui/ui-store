"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = { categories: string[]; active?: string };

export function LibraryTabs({ categories, active }: Props) {
  return (
    <div className="flex flex-wrap gap-2 border-b border-border/60 pb-4">
      <Link
        href="/library"
        className={cn(
          "rounded-full px-4 py-1.5 text-sm transition-colors",
          !active
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        )}
      >
        All
      </Link>
      {categories.map((cat) => (
        <Link
          key={cat}
          href={`/library?category=${cat}`}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm capitalize transition-colors",
            active === cat
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          )}
        >
          {cat}
        </Link>
      ))}
    </div>
  );
}
