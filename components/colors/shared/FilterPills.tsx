"use client";

import { cn } from "@/lib/utils";

export function FilterPills<T extends string>({
  options,
  active,
  setActive,
}: {
  options: { value: T; label: string }[];
  active: T;
  setActive: (v: T) => void;
}) {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => setActive(opt.value)}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-150",
            active === opt.value
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
