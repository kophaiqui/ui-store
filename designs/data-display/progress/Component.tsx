"use client";
import { Progress } from "@base-ui/react/progress";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { ProgressStyleConfig } from "./styles/default";

export type { ProgressStyleConfig };

type Props = Omit<React.ComponentProps<typeof Progress.Root>, "value"> & {
  styleConfig?: ProgressStyleConfig;
  value?: number;
  label?: string;
  showValue?: boolean;
  striped?: boolean;
  animated?: boolean;
  color?: string;
};

export function UIProgress({
  styleConfig = defaultStyle,
  value = 62,
  label,
  showValue = false,
  striped = false,
  animated = false,
  color,
  className,
  ...props
}: Props) {
  const fillStyle = color
    ? { backgroundColor: color, width: `${value}%` }
    : { width: `${value}%` };

  return (
    <Progress.Root
      value={value}
      className={cn("flex w-full flex-col gap-1.5", className)}
      {...props}
    >
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && <span className={styleConfig.label}>{label}</span>}
          {showValue && <span className={styleConfig.value}>{value}%</span>}
        </div>
      )}
      <Progress.Track className={styleConfig.track}>
        <Progress.Indicator
          className={cn(
            styleConfig.indicator,
            // when a custom color is provided, clear the default bg so inline style takes effect
            color && "bg-transparent",
            striped && [
              "bg-[length:16px_16px]",
              !color && "bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)]",
              animated && "animate-[progress-stripe_1s_linear_infinite]",
            ],
          )}
          style={
            striped && color
              ? {
                  ...fillStyle,
                  backgroundImage: "linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)",
                  backgroundSize: "16px 16px",
                }
              : fillStyle
          }
        />
      </Progress.Track>
    </Progress.Root>
  );
}

export { UIProgress as default };
