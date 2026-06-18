"use client";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { CardStyleConfig, CardVariant, CardPadding, CardRadius } from "./styles/default";

export type { CardStyleConfig, CardVariant, CardPadding, CardRadius };

type Props = {
  styleConfig?: CardStyleConfig;
  variant?: CardVariant;
  padding?: CardPadding;
  radius?: CardRadius;
  shadow?: boolean;
  hoverable?: boolean;
  clickable?: boolean;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
};

export function UICard({
  styleConfig = defaultStyle,
  variant = "default",
  padding = "md",
  radius = "md",
  shadow = false,
  hoverable = false,
  clickable = false,
  onClick,
  className,
  children,
}: Props) {
  const isInteractive = clickable || Boolean(onClick);

  return (
    <div
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onClick={onClick}
      onKeyDown={isInteractive ? (e) => { if (e.key === "Enter" || e.key === " ") onClick?.(); } : undefined}
      className={cn(
        styleConfig.base,
        styleConfig.variants[variant],
        styleConfig.padding[padding],
        styleConfig.radius[radius],
        shadow && styleConfig.shadow,
        hoverable && styleConfig.hoverable,
        isInteractive && styleConfig.interactive,
        className,
      )}
    >
      {children}
    </div>
  );
}

export { UICard as default };
