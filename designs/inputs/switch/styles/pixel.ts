import type { SwitchStyleConfig } from "./default";
export type { SwitchStyleConfig, SwitchSize } from "./default";

export const pixelStyle: SwitchStyleConfig = {
  track: "group relative inline-flex shrink-0 items-center rounded-none border-2 border-[#06d6a0] bg-[#0d0d12] transition-colors duration-150 data-[checked]:bg-[#ef476f] data-[checked]:border-black focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40",
  thumb: "pointer-events-none block rounded-none bg-[#06d6a0] translate-x-0 transition-transform duration-150 ease-out group-data-[checked]:bg-black",
  sizes: {
    sm: { track: "h-[18px] w-8",  thumb: "size-[14px]", translate: "group-data-[checked]:translate-x-[14px]" },
    md: { track: "h-[22px] w-10", thumb: "size-[18px]", translate: "group-data-[checked]:translate-x-[18px]" },
    lg: { track: "h-[26px] w-12", thumb: "size-[22px]", translate: "group-data-[checked]:translate-x-[22px]" },
  },
  label: "font-mono text-sm font-bold text-[#06d6a0] uppercase tracking-wide group-hover:text-[#ffd166] transition-colors duration-100",
};
