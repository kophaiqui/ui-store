import type { AvatarStyleConfig } from "./default";
export type { AvatarStyleConfig };

export const neumorphismStyle: AvatarStyleConfig = {
  root: "relative inline-flex items-center justify-center overflow-hidden bg-[#e8ecf1] shadow-[4px_4px_8px_rgba(163,177,198,0.5),-4px_-4px_8px_rgba(255,255,255,0.7)]",
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
  fallback: "flex h-full w-full items-center justify-center font-semibold tracking-wide text-slate-600 bg-[#e8ecf1]",
  status: {
    online:  "bg-emerald-500",
    offline: "bg-slate-400",
    busy:    "bg-red-400",
  },
  statusSizes: {
    xs: "size-[7px] ring-[1.5px] ring-[#e8ecf1]",
    sm: "size-[9px] ring-2 ring-[#e8ecf1]",
    md: "size-[10px] ring-2 ring-[#e8ecf1]",
    lg: "size-3 ring-2 ring-[#e8ecf1]",
    xl: "size-3.5 ring-2 ring-[#e8ecf1]",
  },
};
