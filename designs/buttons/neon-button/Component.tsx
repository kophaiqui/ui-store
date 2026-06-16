"use client";

import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
};

export function NeonButton({ children = "Get Started", size = "md", disabled }: Props) {
  return (
    <button
      disabled={disabled}
      className={cn(
        "relative rounded-lg font-medium",
        "text-cyan-300 border border-cyan-500/50 bg-transparent",
        "shadow-[0_0_12px_rgba(6,182,212,0.3),inset_0_0_12px_rgba(6,182,212,0.05)]",
        !disabled && [
          "hover:shadow-[0_0_24px_rgba(6,182,212,0.6),0_0_48px_rgba(6,182,212,0.2),inset_0_0_24px_rgba(6,182,212,0.1)]",
          "hover:border-cyan-400 hover:text-cyan-100",
          "cursor-pointer",
        ],
        "transition-all duration-300 ease-out",
        disabled && "opacity-40 cursor-not-allowed",
        size === "sm" && "px-4 py-1.5 text-xs",
        size === "md" && "px-8 py-3 text-sm",
        size === "lg" && "px-10 py-4 text-base",
      )}
    >
      {children}
    </button>
  );
}
