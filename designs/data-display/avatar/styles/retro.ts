import type { AvatarStyleConfig } from "./default";
export type { AvatarStyleConfig, AvatarSize, AvatarStatus } from "./default";

export const retroStyle: AvatarStyleConfig = {
  root: "relative inline-flex items-center justify-center overflow-hidden border-2 border-[#3d2410] bg-amber-100 shadow-[2px_2px_0px_0px_#3d2410] dark:border-[#A78BFA] dark:bg-[#1e1a2e] dark:shadow-[2px_2px_0px_0px_#A78BFA]",
  shapes: {
    circle: "rounded-full",
    square: "rounded-sm",
  },
  sizes: {
    xs: { root: "size-6",  text: "text-[0.5625rem]" },
    sm: { root: "size-8",  text: "text-[0.625rem]" },
    md: { root: "size-10", text: "text-xs" },
    lg: { root: "size-12", text: "text-sm" },
    xl: { root: "size-16", text: "text-base" },
  },
  fallback: "flex h-full w-full items-center justify-center font-black tracking-wide text-[#2c1a0e] bg-amber-100 dark:text-[#F5F3FF] dark:bg-[#1e1a2e]",
  status: {
    online:  "bg-[#e8743b] dark:bg-[#A78BFA]",
    offline: "bg-[#7a5230] dark:bg-[#A1A1AA]",
    busy:    "bg-red-700 dark:bg-red-500",
  },
  statusSizes: {
    xs: "size-[7px] ring-[1.5px] ring-[#fdf6e3] border border-[#3d2410] dark:ring-[#0D0B16] dark:border-[#A78BFA]",
    sm: "size-[9px] ring-2 ring-[#fdf6e3] border border-[#3d2410] dark:ring-[#0D0B16] dark:border-[#A78BFA]",
    md: "size-[10px] ring-2 ring-[#fdf6e3] border border-[#3d2410] dark:ring-[#0D0B16] dark:border-[#A78BFA]",
    lg: "size-3 ring-2 ring-[#fdf6e3] border border-[#3d2410] dark:ring-[#0D0B16] dark:border-[#A78BFA]",
    xl: "size-3.5 ring-2 ring-[#fdf6e3] border border-[#3d2410] dark:ring-[#0D0B16] dark:border-[#A78BFA]",
  },
};
