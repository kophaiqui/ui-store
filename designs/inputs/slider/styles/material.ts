export type { SliderStyleConfig } from "./default";
import type { SliderStyleConfig } from "./default";

export const materialStyle: SliderStyleConfig = {
  track: "relative h-1.5 w-full rounded-full bg-violet-100 dark:bg-violet-900/30 data-[disabled]:opacity-40",
  indicator: "absolute h-full rounded-full bg-violet-600 dark:bg-violet-400 data-[disabled]:bg-violet-300 dark:data-[disabled]:bg-violet-700",
  thumb: "block size-[18px] rounded-full border-2 border-violet-600 bg-white shadow-[0_0_0_3px_rgba(103,80,164,0.15)] transition-shadow duration-100 hover:shadow-[0_0_0_5px_rgba(103,80,164,0.2)] active:scale-110 focus-visible:outline-none focus-visible:shadow-[0_0_0_5px_rgba(103,80,164,0.3)] dark:border-violet-400 dark:bg-[#1d1b20] dark:shadow-[0_0_0_3px_rgba(167,139,250,0.15)] dark:hover:shadow-[0_0_0_5px_rgba(167,139,250,0.2)] dark:focus-visible:shadow-[0_0_0_5px_rgba(167,139,250,0.3)] data-[disabled]:cursor-not-allowed data-[disabled]:border-violet-300 dark:data-[disabled]:border-violet-800 data-[disabled]:shadow-none",
};
