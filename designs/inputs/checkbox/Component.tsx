"use client";
import { Checkbox } from "@base-ui/react/checkbox";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { CheckboxStyleConfig, CheckboxSize } from "./styles/default";

export type { CheckboxStyleConfig, CheckboxSize };

type Props = React.ComponentProps<typeof Checkbox.Root> & {
  styleConfig?: CheckboxStyleConfig;
  label?: string;
  description?: string;
  size?: CheckboxSize;
  indeterminate?: boolean;
};

export function UICheckbox({
  styleConfig = defaultStyle,
  label,
  description,
  size = "md",
  indeterminate,
  className,
  required,
  disabled,
  ...props
}: Props) {
  const { w, h, d } = styleConfig.checkSizes[size];

  return (
    <label
      className={cn(
        "flex select-none group",
        description ? "items-start gap-2.5" : "items-center gap-2.5",
        disabled ? "cursor-not-allowed" : "cursor-pointer",
      )}
    >
      <Checkbox.Root
        required={required}
        disabled={disabled}
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
          {label && (
            <span className={cn(styleConfig.label, disabled && "opacity-40")}>
              {label}
              {required && <span className="ml-1 text-red-400" aria-hidden>*</span>}
            </span>
          )}
          {description && (
            <span className={styleConfig.description}>{description}</span>
          )}
        </div>
      )}
    </label>
  );
}

export { UICheckbox as default };
