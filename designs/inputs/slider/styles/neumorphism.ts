import type { SliderStyleConfig } from "./default";
export type { SliderStyleConfig };

export const neumorphismStyle: SliderStyleConfig = {
  track: "relative h-3 w-full rounded-full bg-[#e8ecf1] dark:bg-[#1E293B] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] dark:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.03)] data-[disabled]:opacity-40",
  indicator: "absolute h-full rounded-full bg-blue-400/60 dark:bg-[#818CF8]/60 data-[disabled]:bg-slate-300/60 dark:data-[disabled]:bg-slate-600/60",
  thumb: "block size-[20px] rounded-full bg-[#e8ecf1] dark:bg-[#1E293B] shadow-[4px_4px_8px_rgba(163,177,198,0.6),-4px_-4px_8px_rgba(255,255,255,0.8)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.6),-4px_-4px_8px_rgba(255,255,255,0.04)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(163,177,198,0.5),-3px_-3px_6px_rgba(255,255,255,0.7)] dark:hover:shadow-[3px_3px_6px_rgba(0,0,0,0.5),-3px_-3px_6px_rgba(255,255,255,0.03)] active:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.7)] dark:active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.03)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 dark:focus-visible:ring-[#818CF8]/40 data-[disabled]:cursor-not-allowed",
};
