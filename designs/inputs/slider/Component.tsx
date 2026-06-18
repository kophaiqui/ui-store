"use client";
import { Slider } from "@base-ui/react/slider";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<typeof Slider.Root> & {
  showValue?: boolean;
};

export function UISlider({
  defaultValue = [42],
  showValue = true,
  orientation,
  className,
  ...props
}: Props) {
  const isVertical = orientation === "vertical";
  return (
    <Slider.Root
      defaultValue={defaultValue}
      orientation={orientation}
      className={cn(
        "touch-none",
        isVertical ? "h-36 flex-col" : "w-full",
        className,
      )}
      {...props}
    >
      {showValue && !isVertical && (
        <div className="mb-1.5 flex justify-end">
          <Slider.Value className="text-xs font-medium tabular-nums text-muted-foreground" />
        </div>
      )}
      <Slider.Control className={cn("flex items-center", isVertical ? "h-full px-3 flex-col" : "py-3 w-full")}>
        <Slider.Track className={cn("relative rounded-full bg-muted", isVertical ? "w-1.5 h-full" : "h-1.5 w-full")}>
          <Slider.Indicator className={cn("absolute rounded-full bg-emerald-500/80", isVertical ? "bottom-0 left-0 right-0" : "h-full")} />
          <Slider.Thumb
            className={cn(
              "block size-[18px] rounded-full",
              "border-2 border-emerald-500 bg-background",
              "shadow-[0_0_0_3px_rgba(16,185,129,0.15)]",
              "transition-[box-shadow,transform] duration-100",
              "hover:shadow-[0_0_0_5px_rgba(16,185,129,0.2)]",
              "active:scale-110",
              "focus-visible:outline-none focus-visible:shadow-[0_0_0_5px_rgba(16,185,129,0.3)]",
            )}
          />
        </Slider.Track>
      </Slider.Control>
    </Slider.Root>
  );
}

export { UISlider as default };
