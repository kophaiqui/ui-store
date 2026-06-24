import type { SwitchStyleConfig } from "./default";
export type { SwitchStyleConfig, SwitchSize } from "./default";

export const terminalStyle: SwitchStyleConfig = {
  track: "group relative inline-flex shrink-0 items-center rounded-sm border border-[#16A34A]/40 bg-[#16A34A]/10 transition-colors duration-200 data-[checked]:bg-[#16A34A] data-[checked]:border-[#16A34A] dark:border-[#22C55E]/30 dark:bg-[#22C55E]/5 dark:data-[checked]:bg-[#22C55E] dark:data-[checked]:border-[#22C55E] dark:data-[checked]:shadow-[0_0_8px_rgba(34,197,94,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A]/50 dark:focus-visible:ring-[#22C55E]/50 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-40",
  thumb: "pointer-events-none block rounded-[2px] bg-[#16A34A] border-0 dark:bg-[#22C55E] group-data-[checked]:bg-white dark:group-data-[checked]:bg-black translate-x-0 transition-transform duration-200 ease-out",
  sizes: {
    sm: { track: "h-[18px] w-8",  thumb: "size-[14px]", translate: "group-data-[checked]:translate-x-[14px]" },
    md: { track: "h-[22px] w-10", thumb: "size-[18px]", translate: "group-data-[checked]:translate-x-[18px]" },
    lg: { track: "h-[26px] w-12", thumb: "size-[22px]", translate: "group-data-[checked]:translate-x-[22px]" },
  },
  label: "font-mono text-sm font-bold text-[#065F46] dark:text-[#22C55E] group-hover:text-[#065F46] dark:group-hover:text-[#86EFAC] transition-colors duration-100",
};
