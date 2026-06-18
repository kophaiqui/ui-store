"use client";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { ChipStyleConfig } from "./styles/default";

export type { ChipStyleConfig };
export type ChipSize = "sm" | "md" | "lg";

type Props = {
  styleConfig?: ChipStyleConfig;
  selected?: boolean;
  removable?: boolean;
  onRemove?: () => void;
  onClick?: () => void;
  size?: ChipSize;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

function RemoveIcon() {
  return (
    <svg viewBox="0 0 10 10" fill="none" aria-hidden className="w-full h-full">
      <path d="M1.5 1.5L8.5 8.5M8.5 1.5L1.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function UIChip({
  styleConfig = defaultStyle,
  selected = false,
  removable = false,
  onRemove,
  onClick,
  size = "md",
  icon,
  className,
  children = "Chip",
}: Props) {
  const sz = styleConfig.sizes[size];
  const isClickable = Boolean(onClick);

  return (
    <span
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onClick={onClick}
      onKeyDown={isClickable ? (e) => { if (e.key === "Enter" || e.key === " ") onClick?.(); } : undefined}
      className={cn(
        styleConfig.base,
        sz.chip,
        selected ? styleConfig.selected : styleConfig.unselected,
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
          className={cn(styleConfig.removeBtn, sz.remove)}
        >
          <RemoveIcon />
        </button>
      )}
    </span>
  );
}

export { UIChip as default };
