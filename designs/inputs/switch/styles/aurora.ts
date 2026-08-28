export type { SwitchStyleConfig, SwitchSize } from "./default";
import type { SwitchStyleConfig } from "./default";

export const auroraStyle: SwitchStyleConfig = {
  track: "group relative inline-flex shrink-0 items-center rounded-full border-2 border-transparent bg-indigo-950/60 transition-colors duration-200 data-[checked]:bg-gradient-to-r data-[checked]:from-teal-500 data-[checked]:to-violet-500 data-[checked]:shadow-[0_0_10px_rgba(45,212,191,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0e1f] disabled:pointer-events-none disabled:opacity-40",
  thumb: "pointer-events-none block rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.4)] translate-x-0 transition-transform duration-200 ease-out",
  sizes: {
    sm: { track: "h-[18px] w-8",  thumb: "size-[14px]", translate: "group-data-[checked]:translate-x-[14px]" },
    md: { track: "h-[22px] w-10", thumb: "size-[18px]", translate: "group-data-[checked]:translate-x-[18px]" },
    lg: { track: "h-[26px] w-12", thumb: "size-[22px]", translate: "group-data-[checked]:translate-x-[22px]" },
  },
  label: "text-sm text-indigo-200 group-hover:text-teal-100 transition-colors duration-150",
};
