import type { SwitchStyleConfig } from "./default";
export type { SwitchStyleConfig };

export const neumorphismStyle: SwitchStyleConfig = {
  track: "group relative inline-flex shrink-0 items-center rounded-full bg-[#e8ecf1] dark:bg-[#1E293B] border-2 border-transparent shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] dark:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.03)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/30 dark:focus-visible:ring-[#818CF8]/30 disabled:pointer-events-none disabled:opacity-40",
  thumb: "pointer-events-none block rounded-full bg-[#e8ecf1] dark:bg-[#334155] shadow-[4px_4px_8px_rgba(163,177,198,0.6),-4px_-4px_8px_rgba(255,255,255,0.8)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.6),-4px_-4px_8px_rgba(255,255,255,0.04)] translate-x-0 transition-all duration-200 ease-out group-data-[checked]:shadow-[2px_2px_5px_rgba(163,177,198,0.5),-2px_-2px_5px_rgba(255,255,255,0.7)] dark:group-data-[checked]:shadow-[2px_2px_5px_rgba(0,0,0,0.5),-2px_-2px_5px_rgba(255,255,255,0.03)]",
  sizes: {
    sm: { track: "h-[20px] w-9",  thumb: "size-[14px]", translate: "group-data-[checked]:translate-x-[14px]" },
    md: { track: "h-[24px] w-11", thumb: "size-[18px]", translate: "group-data-[checked]:translate-x-[18px]" },
    lg: { track: "h-[28px] w-13", thumb: "size-[22px]", translate: "group-data-[checked]:translate-x-[22px]" },
  },
  label: "text-sm font-semibold text-slate-700 dark:text-[#E2E8F0]",
};
