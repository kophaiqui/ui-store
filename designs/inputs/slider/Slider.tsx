"use client";
import { Slider } from "@base-ui/react/slider";
import { cn } from "@/lib/utils";
import type { SliderStyleConfig } from "./styles/default";

export type { SliderStyleConfig };

type Props = React.ComponentProps<typeof Slider.Root> & {
  styleConfig: SliderStyleConfig;
};

export function UISlider({ styleConfig, defaultValue = [42], className, ...props }: Props) {
  return (
    <Slider.Root defaultValue={defaultValue} className={cn("w-full touch-none", className)} {...props}>
      <Slider.Control className="flex items-center py-3 w-full">
        <Slider.Track className={styleConfig.track}>
          <Slider.Indicator className={styleConfig.indicator} />
          <Slider.Thumb className={styleConfig.thumb} />
        </Slider.Track>
      </Slider.Control>
    </Slider.Root>
  );
}
