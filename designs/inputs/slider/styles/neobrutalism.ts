import type { SliderStyleConfig } from "./default";
export type { SliderStyleConfig };

export const neobrutalismStyle: SliderStyleConfig = {
  track: "relative h-3 w-full rounded-none border-2 border-zinc-950 bg-white data-[disabled]:opacity-40",
  indicator: "absolute h-full rounded-none bg-yellow-300 data-[disabled]:bg-zinc-300 border-r-2 border-zinc-950",
  thumb: "block size-[18px] rounded-none border-2 border-zinc-950 bg-white shadow-[2px_2px_0px_0px_#09090b] transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#09090b] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none focus-visible:outline-none data-[disabled]:cursor-not-allowed data-[disabled]:shadow-none",
};
