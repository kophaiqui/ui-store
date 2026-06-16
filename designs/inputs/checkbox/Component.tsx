"use client";
import { Checkbox } from "@base-ui/react/checkbox";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<typeof Checkbox.Root> & {
  label?: string;
  description?: string;
  size?: "sm" | "md" | "lg";
  indeterminate?: boolean;
};

const sizeMap = {
  sm: "size-[14px] rounded-[3px]",
  md: "size-[18px] rounded",
  lg: "size-[22px] rounded-md",
};

const checkSizeMap = {
  sm: { w: 8, h: 6, d: "M1 3L2.8 5L7 1" },
  md: { w: 10, h: 7, d: "M1 3.5L3.5 6L9 1" },
  lg: { w: 12, h: 9, d: "M1.5 4.5L4.5 7.5L10.5 1.5" },
};

export function UICheckbox({ label, description, size = "md", indeterminate, className, ...props }: Props) {
  const sz = sizeMap[size];
  const check = checkSizeMap[size];

  return (
    <label className="flex items-start gap-2.5 cursor-pointer select-none group">
      <Checkbox.Root
        className={cn(
          "relative flex shrink-0 items-center justify-center",
          "border border-zinc-700 bg-zinc-900",
          "transition-all duration-150",
          "hover:border-zinc-600",
          "data-[checked]:border-emerald-500 data-[checked]:bg-emerald-500",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-1 focus-visible:ring-offset-zinc-950",
          "disabled:pointer-events-none disabled:opacity-40",
          sz,
          className,
        )}
        {...props}
      >
        <Checkbox.Indicator className="flex items-center justify-center text-zinc-950">
          {indeterminate ? (
            <svg width={check.w} height="2" viewBox={`0 0 ${check.w} 2`} fill="none" aria-hidden>
              <line x1="0" y1="1" x2={check.w} y2="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width={check.w} height={check.h} viewBox={`0 0 ${check.w} ${check.h}`} fill="none" aria-hidden>
              <path d={check.d} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </Checkbox.Indicator>
      </Checkbox.Root>
      {(label || description) && (
        <div className="flex flex-col gap-0.5 pt-px">
          {label && (
            <span className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors duration-150 leading-none">
              {label}
            </span>
          )}
          {description && (
            <span className="text-xs text-zinc-500 leading-relaxed">{description}</span>
          )}
        </div>
      )}
    </label>
  );
}

export { UICheckbox as default };
