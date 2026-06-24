"use client";

import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

type StyleOption = {
  id: string;
  name: string;
  accent: string;
};

type Props = {
  slug: string;
  current: string;
  options: StyleOption[];
};

export function StyleVariantSwitcher({ slug, current, options }: Props) {
  const router = useRouter();

  if (options.length <= 1) return null;

  return (
    <div className="mb-8 flex flex-wrap items-center gap-2">
      <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/50 mr-1">
        Style
      </span>
      {options.map((opt) => {
        const isActive = opt.id === current;
        return (
          <button
            key={opt.id}
            onClick={() => router.push(`/components/${slug}/${opt.id}`)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-all duration-150",
              isActive
                ? "border-border bg-accent text-foreground shadow-sm"
                : "border-border/60 text-muted-foreground hover:border-border hover:text-foreground"
            )}
          >
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: opt.accent }}
            />
            {opt.name}
          </button>
        );
      })}
    </div>
  );
}
