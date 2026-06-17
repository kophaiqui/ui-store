"use client";
import { cn } from "@/lib/utils";

type BadgeVariant = "solid" | "soft" | "outline";
type BadgeColor = "default" | "emerald" | "red" | "amber" | "blue" | "violet";

type Props = {
  variant?: BadgeVariant;
  color?: BadgeColor;
  size?: "sm" | "md" | "lg";
  dot?: boolean;
  rounded?: boolean;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

const colorMap: Record<BadgeColor, Record<BadgeVariant, string>> = {
  default: {
    solid:   "bg-zinc-700 text-zinc-100",
    soft:    "bg-zinc-700/40 text-zinc-300",
    outline: "border border-zinc-600 text-zinc-300",
  },
  emerald: {
    solid:   "bg-emerald-500 text-white",
    soft:    "bg-emerald-500/15 text-emerald-400",
    outline: "border border-emerald-500/40 text-emerald-400",
  },
  red: {
    solid:   "bg-red-500 text-white",
    soft:    "bg-red-500/15 text-red-400",
    outline: "border border-red-500/40 text-red-400",
  },
  amber: {
    solid:   "bg-amber-500 text-white",
    soft:    "bg-amber-500/15 text-amber-400",
    outline: "border border-amber-500/40 text-amber-400",
  },
  blue: {
    solid:   "bg-blue-500 text-white",
    soft:    "bg-blue-500/15 text-blue-400",
    outline: "border border-blue-500/40 text-blue-400",
  },
  violet: {
    solid:   "bg-violet-500 text-white",
    soft:    "bg-violet-500/15 text-violet-400",
    outline: "border border-violet-500/40 text-violet-400",
  },
};

const dotColorMap: Record<BadgeColor, string> = {
  default: "bg-zinc-400",
  emerald: "bg-emerald-400",
  red:     "bg-red-400",
  amber:   "bg-amber-400",
  blue:    "bg-blue-400",
  violet:  "bg-violet-400",
};

const sizeMap = {
  sm: "h-4 px-1.5 text-[10px] gap-1",
  md: "h-5 px-2 text-xs gap-1",
  lg: "h-6 px-2.5 text-xs gap-1.5",
};

export function UIBadge({
  variant = "soft",
  color = "default",
  size = "md",
  dot = false,
  rounded = false,
  icon,
  className,
  children = "Badge",
}: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium leading-none",
        rounded ? "rounded-full" : "rounded-md",
        sizeMap[size],
        colorMap[color][variant],
        className,
      )}
    >
      {dot && (
        <span className={cn("block shrink-0 rounded-full size-1.5", dotColorMap[color])} />
      )}
      {!dot && icon && <span className="shrink-0 flex items-center">{icon}</span>}
      {children}
    </span>
  );
}

export { UIBadge as default };
