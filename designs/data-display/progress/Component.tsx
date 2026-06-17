"use client";
import { Progress } from "@base-ui/react/progress";
import { cn } from "@/lib/utils";

type Props = Omit<React.ComponentProps<typeof Progress.Root>, "value"> & {
  value?: number;
  label?: string;
  showValue?: boolean;
  striped?: boolean;
  animated?: boolean;
  color?: string;
};

export function UIProgress({
  value = 62,
  label,
  showValue = false,
  striped = false,
  animated = false,
  color,
  className,
  ...props
}: Props) {
  const fillStyle = color ? { backgroundColor: color, width: `${value}%` } : { width: `${value}%` };

  return (
    <Progress.Root
      value={value}
      className={cn("flex w-full flex-col gap-1.5", className)}
      {...props}
    >
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && (
            <span className="text-xs font-medium text-muted-foreground">{label}</span>
          )}
          {showValue && (
            <span className="text-xs font-mono text-muted-foreground">{value}%</span>
          )}
        </div>
      )}
      <Progress.Track className="relative h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <Progress.Indicator
          className={cn(
            "absolute inset-y-0 left-0 rounded-full transition-all duration-500 ease-out",
            !color && "bg-emerald-500/80",
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
