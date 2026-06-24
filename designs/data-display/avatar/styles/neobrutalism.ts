import type { AvatarStyleConfig } from "./default";
export type { AvatarStyleConfig };

export const neobrutalismStyle: AvatarStyleConfig = {
  root: "relative inline-flex items-center justify-center overflow-hidden border-2 border-zinc-950 dark:border-white bg-yellow-300 shadow-[3px_3px_0px_0px_#09090b] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.7)]",
  shapes: {
    circle: "rounded-full",
    square: "rounded-none",
  },
  sizes: {
    xs: { root: "size-6",  text: "text-[0.5625rem]" },
    sm: { root: "size-8",  text: "text-[0.625rem]" },
    md: { root: "size-10", text: "text-xs" },
    lg: { root: "size-12", text: "text-sm" },
    xl: { root: "size-16", text: "text-base" },
  },
  fallback: "flex h-full w-full items-center justify-center font-black tracking-wide text-zinc-950 bg-yellow-300",
  status: {
    online:  "bg-emerald-500",
    offline: "bg-zinc-500",
    busy:    "bg-red-500",
  },
  statusSizes: {
    xs: "size-[7px] ring-[1.5px] ring-white dark:ring-[#0A0A0A]",
    sm: "size-[9px] ring-2 ring-white dark:ring-[#0A0A0A]",
    md: "size-[10px] ring-2 ring-white dark:ring-[#0A0A0A]",
    lg: "size-3 ring-2 ring-white dark:ring-[#0A0A0A]",
    xl: "size-3.5 ring-2 ring-white dark:ring-[#0A0A0A]",
  },
};
