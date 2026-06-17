"use client";
import { RadioGroup } from "@base-ui/react/radio-group";
import { Radio } from "@base-ui/react/radio";
import { cn } from "@/lib/utils";
import type { RadioGroupStyleConfig } from "./styles/default";

export type { RadioGroupStyleConfig };
export type RadioGroupSize = "sm" | "md" | "lg";
export type RadioGroupOrientation = "horizontal" | "vertical";

type Option = { label: string; value: string };

type Props = React.ComponentProps<typeof RadioGroup> & {
  options?: Option[];
  orientation?: RadioGroupOrientation;
  size?: RadioGroupSize;
  styleConfig: RadioGroupStyleConfig;
};

export function UIRadioGroup({
  styleConfig,
  options = [
    { label: "Option A", value: "a" },
    { label: "Option B", value: "b" },
    { label: "Option C", value: "c" },
  ],
  orientation = "vertical",
  size = "md",
  className,
  ...props
}: Props) {
  return (
    <RadioGroup
      className={cn(
        orientation === "vertical" ? "flex flex-col gap-2.5" : "flex flex-row gap-5",
        className,
      )}
      {...props}
    >
      {options.map((opt) => (
        <label key={opt.value} className="flex items-center gap-2.5 cursor-pointer select-none group">
          <Radio.Root
            value={opt.value}
            className={cn(styleConfig.root, styleConfig.sizes[size])}
          >
            <Radio.Indicator className="flex items-center justify-center w-full h-full">
              <span className={cn("block rounded-full", styleConfig.dot, styleConfig.dotSizes[size])} />
            </Radio.Indicator>
          </Radio.Root>
          <span className={styleConfig.label}>{opt.label}</span>
        </label>
      ))}
    </RadioGroup>
  );
}
