import type { SliderStyleConfig } from "./default";
export type { SliderStyleConfig };

export const neumorphismStyle: SliderStyleConfig = {
  track: "relative h-3 w-full rounded-full bg-[#e8ecf1] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] data-[disabled]:opacity-40",
  indicator: "absolute h-full rounded-full bg-blue-400/60 data-[disabled]:bg-slate-300/60",
  thumb: "block size-[20px] rounded-full bg-[#e8ecf1] shadow-[4px_4px_8px_rgba(163,177,198,0.6),-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-200 hover:shadow-[3px_3px_6px_rgba(163,177,198,0.5),-3px_-3px_6px_rgba(255,255,255,0.7)] active:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 data-[disabled]:cursor-not-allowed",
};
