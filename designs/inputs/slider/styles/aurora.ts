export type { SliderStyleConfig } from "./default";
import type { SliderStyleConfig } from "./default";

export const auroraStyle: SliderStyleConfig = {
  track: "relative h-1.5 w-full rounded-full bg-indigo-950/60 data-[disabled]:opacity-40",
  indicator: "absolute h-full rounded-full bg-gradient-to-r from-teal-400 via-indigo-400 to-violet-400 shadow-[0_0_10px_rgba(45,212,191,0.4)] data-[disabled]:bg-indigo-400/30",
  thumb: "block size-[18px] rounded-full border-2 border-teal-400 bg-[#0a0e1f] shadow-[0_0_0_3px_rgba(45,212,191,0.2)] transition-shadow duration-100 hover:shadow-[0_0_0_5px_rgba(45,212,191,0.3)] active:scale-110 focus-visible:outline-none focus-visible:shadow-[0_0_0_5px_rgba(45,212,191,0.4)] data-[disabled]:cursor-not-allowed data-[disabled]:border-indigo-400/40 data-[disabled]:shadow-none",
};
