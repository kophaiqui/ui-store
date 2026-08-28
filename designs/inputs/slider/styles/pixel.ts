import type { SliderStyleConfig } from "./default";
export type { SliderStyleConfig } from "./default";

export const pixelStyle: SliderStyleConfig = {
  track: "relative h-3 w-full rounded-none border-2 border-black bg-zinc-900 data-[disabled]:opacity-40",
  indicator: "absolute h-full rounded-none bg-[#06d6a0] border-r-2 border-black data-[disabled]:bg-zinc-600",
  thumb: "block size-[18px] rounded-none border-2 border-black bg-[#ef476f] shadow-[2px_2px_0_0_#000] transition-shadow duration-100 hover:shadow-[3px_3px_0_0_#000] active:scale-110 focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_#06d6a0] data-[disabled]:cursor-not-allowed data-[disabled]:shadow-none",
};
