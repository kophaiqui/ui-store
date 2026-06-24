export type { AvatarStyleConfig, AvatarSize, AvatarStatus } from "./default";
import type { AvatarStyleConfig } from "./default";

export const glassStyle: AvatarStyleConfig = {
  root: "relative inline-flex items-center justify-center overflow-hidden border border-black/12 bg-black/8 backdrop-blur-sm ring-2 ring-black/5 dark:border-white/15 dark:bg-white/10 dark:ring-white/5",
  shapes: {
    circle: "rounded-full",
    square: "rounded-md",
  },
  sizes: {
    xs: { root: "size-6",  text: "text-[0.5625rem]" },
    sm: { root: "size-8",  text: "text-[0.625rem]" },
    md: { root: "size-10", text: "text-xs" },
    lg: { root: "size-12", text: "text-sm" },
    xl: { root: "size-16", text: "text-base" },
  },
  fallback: "flex h-full w-full items-center justify-center font-medium tracking-wide text-foreground/90 bg-black/5 dark:bg-white/5",
  status: {
    online:  "bg-sky-500 dark:bg-sky-400",
    offline: "bg-black/25 dark:bg-white/30",
    busy:    "bg-red-500 dark:bg-red-400",
  },
  statusSizes: {
    xs: "size-[7px] ring-[1.5px] ring-background",
    sm: "size-[9px] ring-2 ring-background",
    md: "size-[10px] ring-2 ring-background",
    lg: "size-3 ring-2 ring-background",
    xl: "size-3.5 ring-2 ring-background",
  },
};
