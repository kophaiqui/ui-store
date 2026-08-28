import type { AvatarStyleConfig } from "./default";
export type { AvatarStyleConfig, AvatarSize, AvatarStatus } from "./default";

export const pixelStyle: AvatarStyleConfig = {
  root: "relative inline-flex items-center justify-center overflow-hidden border-4 border-[#ef476f] bg-[#0d0d12] shadow-[3px_3px_0_0_#000,6px_6px_0_0_#ef476f]",
  shapes: {
    circle: "rounded-none",
    square: "rounded-none",
  },
  sizes: {
    xs: { root: "size-6",  text: "text-[0.5625rem]" },
    sm: { root: "size-8",  text: "text-[0.625rem]" },
    md: { root: "size-10", text: "text-xs" },
    lg: { root: "size-12", text: "text-sm" },
    xl: { root: "size-16", text: "text-base" },
  },
  fallback: "flex h-full w-full items-center justify-center font-mono font-bold uppercase tracking-wide text-[#0d0d12] bg-[#06d6a0]",
  status: {
    online:  "bg-[#06d6a0]",
    offline: "bg-zinc-600",
    busy:    "bg-[#ef476f]",
  },
  statusSizes: {
    xs: "size-[7px] ring-[1.5px] ring-[#0d0d12]",
    sm: "size-[9px] ring-2 ring-[#0d0d12]",
    md: "size-[10px] ring-2 ring-[#0d0d12]",
    lg: "size-3 ring-2 ring-[#0d0d12]",
    xl: "size-3.5 ring-2 ring-[#0d0d12]",
  },
};
