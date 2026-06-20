"use client";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { SkeletonStyleConfig } from "./styles/default";

export type { SkeletonStyleConfig };

type Props = {
  styleConfig?: SkeletonStyleConfig;
  width?: string | number;
  height?: string | number;
  count?: number;
  shape?: "line" | "circle" | "rect" | "text";
  animation?: "pulse" | "wave" | "none";
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const TEXT_WIDTHS = ["100%", "92%", "85%", "78%", "88%", "70%"];

export function UISkeleton({
  styleConfig = defaultStyle,
  width = "100%",
  height = "1rem",
  count = 1,
  shape = "rect",
  animation = "pulse",
  loading = true,
  className,
  children,
}: Props) {
  if (!loading) return <>{children}</>;

  const shapeClass =
    shape === "circle" ? styleConfig.circle
    : shape === "line" ? styleConfig.line
    : shape === "text" ? styleConfig.text
    : styleConfig.rect;

  const animClass =
    animation === "pulse" ? styleConfig.pulse
    : animation === "wave" ? styleConfig.wave
    : "";

  const items = Array.from({ length: count });

  return (
    <div className="flex flex-col gap-2">
      {items.map((_, i) => {
        const w = shape === "text" ? TEXT_WIDTHS[i % TEXT_WIDTHS.length] : width;
        const isCircle = shape === "circle";
        return (
          <span
            key={i}
            role="status"
            aria-busy="true"
            aria-label="Loading…"
            style={{
              width: isCircle ? height : (typeof w === "number" ? `${w}px` : w),
              height: typeof height === "number" ? `${height}px` : height,
            }}
            className={cn(styleConfig.base, shapeClass, animClass, className)}
          />
        );
      })}
    </div>
  );
}

export { UISkeleton as default };
