"use client";
import { Checkbox } from "@base-ui/react/checkbox";
import { cn } from "@/lib/utils";
import type { CheckboxStyleConfig } from "./styles/default";

export type { CheckboxStyleConfig };
export type CheckboxSize = "sm" | "md" | "lg";

type Props = React.ComponentProps<typeof Checkbox.Root> & {
  label?: string;
  description?: string;
  size?: CheckboxSize;
  indeterminate?: boolean;
  styleConfig: CheckboxStyleConfig;
};

export function UICheckbox({ styleConfig, label, description, size = "md", indeterminate, className, ...props }: Props) {
  const { w, h, d } = styleConfig.checkSizes[size];

  return (
    <label className={cn("flex cursor-pointer select-none group", description ? "items-start gap-2.5" : "items-center gap-2.5")}>
      <Checkbox.Root
        className={cn(styleConfig.root, styleConfig.sizes[size], className)}
        {...props}
      >
        <Checkbox.Indicator className={styleConfig.indicator}>
          {indeterminate ? (
            <svg width={w} height="2" viewBox={`0 0 ${w} 2`} fill="none" aria-hidden>
              <line x1="0" y1="1" x2={w} y2="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" aria-hidden>
              <path d={d} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </Checkbox.Indicator>
      </Checkbox.Root>
      {(label || description) && (
        <div className="flex flex-col gap-0.5 pt-px">
          {label && <span className={styleConfig.label}>{label}</span>}
          {description && <span className={styleConfig.description}>{description}</span>}
        </div>
      )}
    </label>
  );
}
