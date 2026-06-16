"use client";
import { Progress } from "@base-ui/react/progress";
import { cn } from "@/lib/utils";

type Props = Omit<React.ComponentProps<typeof Progress.Root>, "value"> & {
  value?: number;
  label?: string;
  showValue?: boolean;
};

export function UIProgress({
  value = 62,
  label,
  showValue = false,
  className,
  ...props
}: Props) {
  return (
    <Progress.Root
      value={value}
      className={cn("flex w-full flex-col gap-1.5", className)}
      {...props}
    >
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && (
            <span className="text-xs font-medium text-zinc-400">{label}</span>
          )}
          {showValue && (
            <span className="text-xs font-mono text-zinc-500">{value}%</span>
          )}
        </div>
      )}
      <Progress.Track className="relative h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
        <Progress.Indicator
          className="absolute inset-y-0 left-0 rounded-full bg-emerald-500/80 transition-all duration-500 ease-out"
          style={{ width: `${value}%` }}
        />
      </Progress.Track>
    </Progress.Root>
  );
}

export { UIProgress as default };
