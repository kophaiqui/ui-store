export type { AvatarStyleConfig, AvatarSize, AvatarStatus } from "./default";
import type { AvatarStyleConfig } from "./default";

export const materialStyle: AvatarStyleConfig = {
  root: "relative inline-flex items-center justify-center overflow-hidden border border-violet-200/60 bg-violet-100 ring-2 ring-card dark:border-violet-800/40 dark:bg-violet-900/30 dark:ring-card",
  shapes: {
    circle: "rounded-full",
    square: "rounded-lg",
  },
  sizes: {
    xs: { root: "size-6",  text: "text-[0.5625rem]" },
    sm: { root: "size-8",  text: "text-[0.625rem]" },
    md: { root: "size-10", text: "text-xs" },
    lg: { root: "size-12", text: "text-sm" },
    xl: { root: "size-16", text: "text-base" },
  },
  fallback: "flex h-full w-full items-center justify-center font-medium tracking-wide text-violet-900 bg-violet-100 dark:text-violet-100 dark:bg-violet-900/40",
  status: {
    online:  "bg-teal-500 dark:bg-teal-400",
    offline: "bg-zinc-400 dark:bg-zinc-500",
    busy:    "bg-rose-500 dark:bg-rose-400",
  },
  statusSizes: {
    xs: "size-[7px] ring-[1.5px] ring-background",
    sm: "size-[9px] ring-2 ring-background",
    md: "size-[10px] ring-2 ring-background",
    lg: "size-3 ring-2 ring-background",
    xl: "size-3.5 ring-2 ring-background",
  },
};
