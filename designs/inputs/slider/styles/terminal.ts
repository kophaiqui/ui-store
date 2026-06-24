import type { SliderStyleConfig } from "./default";
export type { SliderStyleConfig } from "./default";

export const terminalStyle: SliderStyleConfig = {
  track: "relative h-1.5 w-full rounded-none bg-[#16A34A]/15 border border-[#16A34A]/40 dark:bg-[#22C55E]/10 dark:border-[#22C55E]/30 data-[disabled]:opacity-40",
  indicator: "absolute h-full rounded-none bg-[#16A34A] dark:bg-[#22C55E] dark:shadow-[0_0_6px_rgba(34,197,94,0.4)] data-[disabled]:opacity-60",
  thumb: "block size-[18px] rounded-sm border border-[#16A34A] bg-white dark:border-[#22C55E] dark:bg-[#0F0F0F] dark:shadow-[0_0_6px_rgba(34,197,94,0.3)] transition-shadow duration-100 hover:shadow-[0_0_0_3px_rgba(22,163,74,0.2)] dark:hover:shadow-[0_0_8px_rgba(34,197,94,0.4)] active:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A]/50 dark:focus-visible:ring-[#22C55E]/50 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40",
};
