"use client";
import { Radio } from "@base-ui/react/radio";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { RadioSize, RadioStyleConfig } from "./styles/default";

export type { RadioSize, RadioStyleConfig };

type Props = React.ComponentProps<typeof Radio.Root> & {
  styleConfig?: RadioStyleConfig;
  label?: string;
  description?: string;
  size?: RadioSize;
  loading?: boolean;
};

function Spinner() {
  return (
    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden className="animate-spin shrink-0 text-muted-foreground">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
      <path d="M8 2a6 6 0 0 1 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function UIRadio({
  styleConfig = defaultStyle,
  label = "Option A",
  description,
  size = "md",
  loading = false,
  className,
  disabled,
  ...props
}: Props) {
  const isDisabled = loading || disabled;

  return (
    <label
      className={cn(
        "flex select-none group",
        description ? "items-start gap-2.5" : "items-center gap-2.5",
        isDisabled ? "cursor-not-allowed" : "cursor-pointer",
      )}
    >
      {loading ? (
        <div className={cn("flex shrink-0 items-center justify-center", styleConfig.sizes[size])}>
          <Spinner />
        </div>
      ) : (
        <Radio.Root
          disabled={isDisabled}
          className={cn(styleConfig.root, styleConfig.sizes[size], className)}
          {...props}
        >
          <Radio.Indicator className="flex items-center justify-center w-full h-full">
            <span className={cn(styleConfig.dot, styleConfig.dotSizes[size])} />
          </Radio.Indicator>
        </Radio.Root>
      )}
      {(label || description) && (
        <div className="flex flex-col gap-0.5 pt-px">
          {label && (
            <span className={cn(styleConfig.label, isDisabled && "opacity-40")}>{label}</span>
          )}
          {description && (
            <span className={styleConfig.description}>{description}</span>
          )}
        </div>
      )}
    </label>
  );
}

export { UIRadio as default };
