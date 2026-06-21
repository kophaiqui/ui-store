export type { SwitchStyleConfig, SwitchSize } from "./default";
import type { SwitchStyleConfig } from "./default";

export const glassStyle: SwitchStyleConfig = {
  track: "group relative inline-flex shrink-0 items-center rounded-full border-2 border-white/10 bg-white/8 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_2px_4px_rgba(0,0,0,0.25)] transition-colors duration-200 data-[checked]:bg-sky-400/40 data-[checked]:border-sky-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40",
  thumb: "pointer-events-none block rounded-full bg-white/90 shadow-[0_1px_4px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.6)] translate-x-0 transition-transform duration-200 ease-out",
  sizes: {
    sm: { track: "h-[18px] w-8",  thumb: "size-[14px]", translate: "group-data-[checked]:translate-x-[14px]" },
    md: { track: "h-[22px] w-10", thumb: "size-[18px]", translate: "group-data-[checked]:translate-x-[18px]" },
    lg: { track: "h-[26px] w-12", thumb: "size-[22px]", translate: "group-data-[checked]:translate-x-[22px]" },
  },
  label: "text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-150",
};
