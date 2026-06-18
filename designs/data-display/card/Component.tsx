"use client";
import { cn } from "@/lib/utils";

type Props = {
  variant?: "default" | "bordered";
  padding?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg";
  shadow?: boolean;
  hoverable?: boolean;
  clickable?: boolean;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
};

const paddingMap = {
  none: "",
  sm: "p-3",
  md: "p-5",
  lg: "p-7",
};

const radiusMap = {
  none: "rounded-none",
  sm: "rounded-md",
  md: "rounded-xl",
  lg: "rounded-2xl",
};

export function UICard({
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
        "w-full",
        paddingMap[padding],
        radiusMap[radius],
        variant === "default" && "bg-card border border-border/60",
        variant === "bordered" && "bg-transparent border-2 border-border",
        shadow && "shadow-[0_4px_24px_rgba(0,0,0,0.3)]",
        hoverable && "transition-all duration-200 hover:border-border hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:-translate-y-0.5",
        isInteractive && "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40",
        className,
      )}
    >
      {children}
    </div>
  );
}

export { UICard as default };
