"use client";

import { cn } from "@/lib/utils";

type Props = {
  name?: string;
  role?: string;
  quote?: string;
  avatar?: string;
  size?: "sm" | "md" | "lg";
  blur?: "sm" | "md" | "lg";
};

export function GlassCard({
  name = "Alex Johnson",
  role = "Product Designer",
  quote = "Building products that people love is about understanding the small moments that matter.",
  avatar,
  size = "md",
  blur = "md",
}: Props) {
  return (
    <div
      className={cn(
        "relative rounded-2xl",
        "bg-white/10 dark:bg-white/5",
        "border border-white/20 dark:border-white/10",
        "shadow-[0_8px_32px_rgba(0,0,0,0.12)]",
        blur === "sm" && "backdrop-blur-sm",
        blur === "md" && "backdrop-blur-md",
        blur === "lg" && "backdrop-blur-xl",
        size === "sm" && "w-56 p-4",
        size === "md" && "w-72 p-6",
        size === "lg" && "w-96 p-8",
      )}
    >
      <div className="mb-3 flex items-center gap-3">
        {avatar ? (
          <img src={avatar} alt={name} className="h-9 w-9 rounded-full object-cover" />
        ) : (
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet-400 to-indigo-600 shrink-0" />
        )}
        <div>
          <div className="text-sm font-semibold text-foreground">{name}</div>
          <div className="text-xs text-muted-foreground">{role}</div>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{quote}</p>
    </div>
  );
}
