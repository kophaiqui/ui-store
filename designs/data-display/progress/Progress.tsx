"use client";
import { Progress } from "@base-ui/react/progress";
import { cn } from "@/lib/utils";
import type { ProgressStyleConfig } from "./styles/default";

export type { ProgressStyleConfig };

type Props = Omit<React.ComponentProps<typeof Progress.Root>, "value"> & {
  value?: number;
  label?: string;
  showValue?: boolean;
  styleConfig: ProgressStyleConfig;
};

export function UIProgress({ styleConfig, value = 62, label, showValue = false, className, ...props }: Props) {
  return (
    <Progress.Root value={value} className={cn("flex w-full flex-col gap-1.5", className)} {...props}>
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && <span className={styleConfig.label}>{label}</span>}
          {showValue && <span className={styleConfig.value}>{value}%</span>}
        </div>
      )}
      <Progress.Track className={styleConfig.track}>
        <Progress.Indicator className={styleConfig.indicator} style={{ width: `${value}%` }} />
      </Progress.Track>
    </Progress.Root>
  );
}
