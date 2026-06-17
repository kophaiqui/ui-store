"use client";
import { cn } from "@/lib/utils";

type Props = {
  selected?: boolean;
  removable?: boolean;
  onRemove?: () => void;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

const sizeMap = {
  sm: { chip: "h-6 px-2.5 text-xs gap-1", remove: "size-3", icon: "size-3" },
  md: { chip: "h-7 px-3 text-xs gap-1.5", remove: "size-3.5", icon: "size-3.5" },
  lg: { chip: "h-8 px-3.5 text-sm gap-2", remove: "size-4", icon: "size-4" },
};

function RemoveIcon() {
  return (
    <svg viewBox="0 0 10 10" fill="none" aria-hidden className="w-full h-full">
      <path d="M1.5 1.5L8.5 8.5M8.5 1.5L1.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function UIChip({
  selected = false,
  removable = false,
  onRemove,
  onClick,
  size = "md",
  icon,
  className,
  children = "Chip",
}: Props) {
  const sz = sizeMap[size];
  const isClickable = Boolean(onClick);

  return (
    <span
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onClick={onClick}
      onKeyDown={isClickable ? (e) => { if (e.key === "Enter" || e.key === " ") onClick?.(); } : undefined}
      className={cn(
        "inline-flex items-center rounded-full font-medium transition-all duration-150",
        "border select-none",
        sz.chip,
        selected
          ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-400"
          : "bg-muted/60 border-border text-muted-foreground hover:border-input hover:text-foreground",
        className,
      )}
    >
      {icon && (
        <span className={cn("shrink-0 flex items-center", sz.icon)}>
          {icon}
        </span>
      )}
      {children}
      {removable && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onRemove?.(); }}
          aria-label="Remove"
          className={cn(
            "shrink-0 ml-0.5 flex items-center justify-center rounded-full",
            "opacity-60 hover:opacity-100 transition-opacity duration-100",
            "focus:outline-none",
            sz.remove,
          )}
        >
          <RemoveIcon />
        </button>
      )}
    </span>
  );
}

export { UIChip as default };
