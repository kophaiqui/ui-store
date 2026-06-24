import type { SwitchStyleConfig } from "./default";
export type { SwitchStyleConfig };

export const gradientStyle: SwitchStyleConfig = {
  track: "group relative inline-flex shrink-0 items-center rounded-full border-2 border-transparent bg-[#FCE7F3] shadow-inner transition-all duration-200 data-[checked]:bg-gradient-to-r data-[checked]:from-[#7C3AED] data-[checked]:to-[#EC4899] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]/40 disabled:pointer-events-none disabled:opacity-40 dark:bg-zinc-700 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_2px_4px_rgba(0,0,0,0.25)] dark:data-[checked]:from-fuchsia-600 dark:data-[checked]:to-pink-500 dark:focus-visible:ring-fuchsia-500/40",
  thumb: "pointer-events-none block rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.6)] translate-x-0 transition-transform duration-200 ease-out dark:shadow-[0_1px_4px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.6)]",
  sizes: {
    sm: { track: "h-[18px] w-8",  thumb: "size-[14px]", translate: "group-data-[checked]:translate-x-[14px]" },
    md: { track: "h-[22px] w-10", thumb: "size-[18px]", translate: "group-data-[checked]:translate-x-[18px]" },
    lg: { track: "h-[26px] w-12", thumb: "size-[22px]", translate: "group-data-[checked]:translate-x-[22px]" },
  },
  label: "text-sm font-medium text-[#0F172A] dark:text-zinc-300",
};
