export type { AvatarStyleConfig, AvatarSize, AvatarStatus } from "./default";
import type { AvatarStyleConfig } from "./default";

export const auroraStyle: AvatarStyleConfig = {
  root: "relative inline-flex items-center justify-center overflow-hidden border border-teal-400/20 bg-indigo-950/60 backdrop-blur-sm ring-2 ring-violet-500/10 shadow-[0_0_16px_rgba(99,102,241,0.15)]",
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
  fallback: "flex h-full w-full items-center justify-center font-medium tracking-wide text-teal-100 bg-gradient-to-br from-teal-500/20 via-indigo-500/20 to-violet-500/20",
  status: {
    online:  "bg-teal-400",
    offline: "bg-indigo-400/40",
    busy:    "bg-rose-400",
  },
  statusSizes: {
    xs: "size-[7px] ring-[1.5px] ring-background",
    sm: "size-[9px] ring-2 ring-background",
    md: "size-[10px] ring-2 ring-background",
    lg: "size-3 ring-2 ring-background",
    xl: "size-3.5 ring-2 ring-background",
  },
};
