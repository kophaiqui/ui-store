"use client";
import { RadioGroup } from "@base-ui/react/radio-group";
import { Radio } from "@base-ui/react/radio";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { RadioGroupStyleConfig, RadioGroupSize } from "./styles/default";

export type { RadioGroupStyleConfig, RadioGroupSize };

type Option = { label: string; value: string };

type Props = React.ComponentProps<typeof RadioGroup> & {
  styleConfig?: RadioGroupStyleConfig;
  options?: Option[];
  orientation?: "horizontal" | "vertical";
  size?: RadioGroupSize;
  disabledOptions?: string[];
  label?: string;
};

export function UIRadioGroup({
  styleConfig = defaultStyle,
  options = [
    { label: "Option A", value: "a" },
    { label: "Option B", value: "b" },
    { label: "Option C", value: "c" },
  ],
  orientation = "vertical",
  size = "md",
  disabledOptions = [],
  label,
  className,
  required,
  ...props
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <span className="text-xs font-medium text-foreground/80">
          {label}
          {required && <span className="ml-1 text-red-400" aria-hidden>*</span>}
        </span>
      )}
      <RadioGroup
        required={required}
        className={cn(
          orientation === "vertical" ? "flex flex-col gap-2.5" : "flex flex-row gap-5",
          className,
        )}
        {...props}
      >
        {options.map((opt) => {
          const isDisabled = disabledOptions.includes(opt.value);
          return (
            <label
              key={opt.value}
              className={cn(
                "flex items-center gap-2.5 select-none group",
                isDisabled ? "cursor-not-allowed opacity-40" : "cursor-pointer",
              )}
            >
              <Radio.Root
                value={opt.value}
                disabled={isDisabled}
                className={cn(styleConfig.root, styleConfig.sizes[size])}
              >
                <Radio.Indicator className="flex items-center justify-center w-full h-full">
                  <span className={cn("block rounded-full", styleConfig.dot, styleConfig.dotSizes[size])} />
                </Radio.Indicator>
              </Radio.Root>
              <span className={styleConfig.label}>{opt.label}</span>
            </label>
          );
        })}
      </RadioGroup>
    </div>
  );
}

export { UIRadioGroup as default };
