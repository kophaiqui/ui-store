"use client";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { BadgeStyleConfig, BadgeVariant, BadgeColor, BadgeSize } from "./styles/default";

export type { BadgeStyleConfig, BadgeVariant, BadgeColor, BadgeSize };

type Props = {
  styleConfig?: BadgeStyleConfig;
  variant?: BadgeVariant;
  color?: BadgeColor;
  size?: BadgeSize;
  dot?: boolean;
  rounded?: boolean;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

export function UIBadge({
  styleConfig = defaultStyle,
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
        styleConfig.base,
        rounded ? styleConfig.rounded : styleConfig.square,
        styleConfig.sizes[size],
        styleConfig.colors[color][variant],
        className,
      )}
    >
      {dot && (
        <span className={cn("block shrink-0 rounded-full size-1.5", styleConfig.dotColors[color])} />
      )}
      {!dot && icon && <span className="shrink-0 flex items-center">{icon}</span>}
      {children}
    </span>
  );
}

export { UIBadge as default };
