import type { SwitchStyleConfig } from "./default";
export type { SwitchStyleConfig };

export const neobrutalismStyle: SwitchStyleConfig = {
  track: "group relative inline-flex shrink-0 items-center rounded-none border-2 border-zinc-950 bg-zinc-200 shadow-[2px_2px_0px_0px_#09090b] transition-all duration-100 data-[checked]:bg-yellow-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40",
  thumb: "pointer-events-none block rounded-none bg-zinc-950 translate-x-0 transition-transform duration-200 ease-out",
  sizes: {
    sm: { track: "h-[18px] w-8",  thumb: "size-[12px]", translate: "group-data-[checked]:translate-x-[14px]" },
    md: { track: "h-[22px] w-10", thumb: "size-[16px]", translate: "group-data-[checked]:translate-x-[18px]" },
    lg: { track: "h-[26px] w-12", thumb: "size-[20px]", translate: "group-data-[checked]:translate-x-[22px]" },
  },
  label: "text-sm font-bold text-zinc-950 group-hover:text-zinc-700 transition-colors duration-100",
};
