import type { AvatarStyleConfig } from "./default";
export type { AvatarStyleConfig };

export const gradientStyle: AvatarStyleConfig = {
  root: "relative inline-flex items-center justify-center overflow-hidden bg-gradient-to-br from-fuchsia-600 to-pink-500 ring-2 ring-fuchsia-500/30",
  shapes: {
    circle: "rounded-full",
    square: "rounded-xl",
  },
  sizes: {
    xs: { root: "size-6",  text: "text-[0.5625rem]" },
    sm: { root: "size-8",  text: "text-[0.625rem]" },
    md: { root: "size-10", text: "text-xs" },
    lg: { root: "size-12", text: "text-sm" },
    xl: { root: "size-16", text: "text-base" },
  },
  fallback: "flex h-full w-full items-center justify-center font-semibold tracking-wide text-white bg-gradient-to-br from-fuchsia-600 to-pink-500",
  status: {
    online:  "bg-emerald-400",
    offline: "bg-zinc-500",
    busy:    "bg-red-400",
  },
  statusSizes: {
    xs: "size-[7px] ring-[1.5px] ring-zinc-950",
    sm: "size-[9px] ring-2 ring-zinc-950",
    md: "size-[10px] ring-2 ring-zinc-950",
    lg: "size-3 ring-2 ring-zinc-950",
    xl: "size-3.5 ring-2 ring-zinc-950",
  },
};
