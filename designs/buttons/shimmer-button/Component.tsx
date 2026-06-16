"use client";

import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  variant?: "dark" | "light";
};

export function ShimmerButton({
  children = "Deploy Now",
  disabled,
  loading,
  variant = "dark",
}: Props) {
  const shimmer = !disabled;

  return (
    <button
      disabled={disabled}
      className={cn(
        "relative overflow-hidden rounded-lg font-medium text-sm px-8 py-3",
        "border transition-colors",
        variant === "dark"
          ? "bg-zinc-900 dark:bg-zinc-800 text-white border-zinc-700 hover:border-zinc-600"
          : "bg-white text-zinc-900 border-zinc-200 hover:border-zinc-300",
        disabled && "opacity-40 cursor-not-allowed",
        "cursor-pointer group",
      )}
    >
      {shimmer && (
        <span
          className={cn(
            "absolute inset-0 -translate-x-full skew-x-[-20deg]",
            "bg-gradient-to-r from-transparent via-white/20 to-transparent",
            loading
              ? "animate-[shimmer_1.2s_ease-in-out_infinite]"
              : "group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out",
          )}
        />
      )}
      <span className="relative z-10">{loading ? "Loading…" : children}</span>
    </button>
  );
}
