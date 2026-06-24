import type { SliderStyleConfig } from "./default";
export type { SliderStyleConfig } from "./default";

export const retroStyle: SliderStyleConfig = {
  track: "relative h-2 w-full rounded-none bg-amber-100 border-2 border-[#3d2410] shadow-[2px_2px_0px_0px_#3d2410] data-[disabled]:opacity-50 dark:bg-[#1e1a2e] dark:border-[#A78BFA] dark:shadow-[2px_2px_0px_0px_#A78BFA]",
  indicator: "absolute h-full rounded-none bg-[#e8743b] data-[disabled]:bg-[#7a5230] dark:bg-[#A78BFA] dark:data-[disabled]:bg-[#A1A1AA]",
  thumb: "block size-[20px] rounded-sm border-2 border-[#3d2410] bg-[#fdf6e3] shadow-[2px_2px_0px_0px_#3d2410] transition-shadow duration-100 hover:shadow-[3px_3px_0px_0px_#3d2410] active:scale-110 focus-visible:outline-none focus-visible:border-[#e8743b] data-[disabled]:cursor-not-allowed data-[disabled]:border-[#7a5230] data-[disabled]:shadow-none dark:border-[#A78BFA] dark:bg-[#F5F3FF] dark:shadow-[2px_2px_0px_0px_#A78BFA] dark:hover:shadow-[3px_3px_0px_0px_#A78BFA] dark:focus-visible:border-[#A78BFA] dark:data-[disabled]:border-[#A1A1AA]",
};
