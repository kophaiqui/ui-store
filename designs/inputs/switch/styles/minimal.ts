export type { SwitchStyleConfig, SwitchSize } from "./default";
import type { SwitchStyleConfig } from "./default";

export const minimalStyle: SwitchStyleConfig = {
  track: "group relative inline-flex shrink-0 items-center rounded-full border-2 border-border bg-transparent transition-colors duration-200 data-[checked]:bg-foreground data-[checked]:border-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40",
  thumb: "pointer-events-none block rounded-full bg-muted-foreground shadow-none translate-x-0 transition-transform duration-200 ease-out group-data-[checked]:bg-background",
  sizes: {
    sm: { track: "h-[18px] w-8",  thumb: "size-[14px]", translate: "group-data-[checked]:translate-x-[14px]" },
    md: { track: "h-[22px] w-10", thumb: "size-[18px]", translate: "group-data-[checked]:translate-x-[18px]" },
    lg: { track: "h-[26px] w-12", thumb: "size-[22px]", translate: "group-data-[checked]:translate-x-[22px]" },
  },
  label: "text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-150",
};
