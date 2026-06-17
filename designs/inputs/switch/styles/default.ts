import type { SwitchSize } from "../Switch";

export type SwitchStyleConfig = {
  track: string;
  thumb: string;
  sizes: Record<SwitchSize, { track: string; thumb: string; translate: string }>;
  label: string;
};

export const defaultStyle: SwitchStyleConfig = {
  track: "group relative inline-flex shrink-0 items-center rounded-full border-2 border-transparent bg-muted transition-colors duration-200 data-[checked]:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40",
  thumb: "pointer-events-none block rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.4)] translate-x-0 transition-transform duration-200 ease-out",
  sizes: {
    sm: { track: "h-[18px] w-8",  thumb: "size-[14px]", translate: "group-data-[checked]:translate-x-[14px]" },
    md: { track: "h-[22px] w-10", thumb: "size-[18px]", translate: "group-data-[checked]:translate-x-[18px]" },
    lg: { track: "h-[26px] w-12", thumb: "size-[22px]", translate: "group-data-[checked]:translate-x-[22px]" },
  },
  label: "text-sm text-foreground/90 group-hover:text-foreground transition-colors duration-150",
};
