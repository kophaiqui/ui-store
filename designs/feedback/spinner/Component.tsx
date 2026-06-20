"use client";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { SpinnerSize, SpinnerStyleConfig } from "./styles/default";

export type { SpinnerSize, SpinnerStyleConfig };

type Props = {
  styleConfig?: SpinnerStyleConfig;
  size?: SpinnerSize;
  label?: string;
  loading?: boolean;
  ariaLabel?: string;
  className?: string;
};

export function UISpinner({
  styleConfig = defaultStyle,
  size = "md",
  label,
  loading = true,
  ariaLabel = "Loading",
  className,
}: Props) {
  if (!loading) return null;

  const { svgSize, strokeWidth } = styleConfig.sizes[size];
  const r = (Number(svgSize) / 2 - strokeWidth) * 0.85;
  const center = Number(svgSize) / 2;

  return (
    <span role="status" aria-label={ariaLabel} className={cn(styleConfig.wrapper, className)}>
      <svg
        width={svgSize}
        height={svgSize}
        viewBox={`0 0 ${svgSize} ${svgSize}`}
        fill="none"
        aria-hidden
        className={styleConfig.svg}
      >
        <circle
          cx={center}
          cy={center}
          r={r}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeOpacity="0.25"
        />
        <path
          d={`M ${center} ${center - r} A ${r} ${r} 0 0 1 ${center + r} ${center}`}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </svg>
      {label && <span className={styleConfig.label}>{label}</span>}
    </span>
  );
}

export { UISpinner as default };
