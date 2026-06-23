export type { SliderStyleConfig } from "./default";
import type { SliderStyleConfig } from "./default";

export const minimalStyle: SliderStyleConfig = {
  track: "relative h-px w-full bg-border data-[disabled]:opacity-40",
  indicator: "absolute h-full bg-foreground data-[disabled]:bg-muted-foreground",
  thumb: "block size-[14px] rounded-full border-2 border-foreground bg-background shadow-none transition-shadow duration-100 hover:shadow-[0_0_0_4px_rgba(0,0,0,0.1)] active:scale-110 focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_rgba(0,0,0,0.15)] data-[disabled]:cursor-not-allowed data-[disabled]:border-muted-foreground data-[disabled]:shadow-none",
};
