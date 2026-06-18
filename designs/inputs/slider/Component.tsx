"use client";
import { Slider } from "@base-ui/react/slider";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { SliderStyleConfig } from "./styles/default";

export type { SliderStyleConfig };

type Props = React.ComponentProps<typeof Slider.Root> & {
  styleConfig?: SliderStyleConfig;
  showValue?: boolean;
};

export function UISlider({
  styleConfig = defaultStyle,
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
        <Slider.Track
          className={cn(
            styleConfig.track,
            // orientation overrides: vertical flips w/h
            isVertical && "w-1.5 h-full",
          )}
        >
          <Slider.Indicator
            className={cn(
              styleConfig.indicator,
              isVertical && "bottom-0 left-0 right-0 h-auto w-auto",
            )}
          />
          <Slider.Thumb className={styleConfig.thumb} />
        </Slider.Track>
      </Slider.Control>
    </Slider.Root>
  );
}

export { UISlider as default };
