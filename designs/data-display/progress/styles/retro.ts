import type { ProgressStyleConfig } from "./default";
export type { ProgressStyleConfig } from "./default";

export const retroStyle: ProgressStyleConfig = {
  track: "relative h-3 w-full overflow-hidden rounded-none border-2 border-[#3d2410] bg-amber-100 shadow-[2px_2px_0px_0px_#3d2410]",
  indicator: "absolute inset-y-0 left-0 rounded-none bg-[#e8743b] transition-all duration-500 ease-out",
  label: "text-xs font-black text-[#2c1a0e] uppercase tracking-wide",
  value: "text-xs font-black text-[#2c1a0e] font-mono",
};
