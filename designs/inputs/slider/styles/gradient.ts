import type { SliderStyleConfig } from "./default";
export type { SliderStyleConfig };

export const gradientStyle: SliderStyleConfig = {
  track: "relative h-2 w-full rounded-full bg-zinc-800 data-[disabled]:opacity-40",
  indicator: "absolute h-full rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-500 data-[disabled]:bg-zinc-600",
  thumb: "block size-[18px] rounded-full border-2 border-fuchsia-500 bg-zinc-950 shadow-[0_0_0_3px_rgba(217,70,239,0.2)] transition-all duration-150 hover:shadow-[0_0_0_5px_rgba(217,70,239,0.25)] active:scale-110 focus-visible:outline-none focus-visible:shadow-[0_0_0_5px_rgba(217,70,239,0.35)] data-[disabled]:cursor-not-allowed data-[disabled]:border-zinc-600 data-[disabled]:shadow-none",
};
