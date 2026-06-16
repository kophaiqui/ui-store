"use client";
import { Slider } from "@base-ui/react/slider";
import { cn } from "@/lib/utils";

export function UISlider({
  defaultValue = [42],
  className,
  ...props
}: React.ComponentProps<typeof Slider.Root>) {
  return (
    <Slider.Root
      defaultValue={defaultValue}
      className={cn("w-full touch-none", className)}
      {...props}
    >
      <Slider.Control className="flex items-center py-3 w-full">
        <Slider.Track className="relative h-1.5 w-full rounded-full bg-zinc-800">
          <Slider.Indicator className="absolute h-full rounded-full bg-emerald-500/80" />
          <Slider.Thumb
            className={cn(
              "block size-[18px] rounded-full",
              "border-2 border-emerald-500 bg-zinc-950",
              "shadow-[0_0_0_3px_rgba(16,185,129,0.15)]",
              "transition-all duration-100",
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
