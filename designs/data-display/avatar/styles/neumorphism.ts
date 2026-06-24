import type { AvatarStyleConfig } from "./default";
export type { AvatarStyleConfig };

export const neumorphismStyle: AvatarStyleConfig = {
  root: "relative inline-flex items-center justify-center overflow-hidden bg-[#e8ecf1] dark:bg-[#1E293B] shadow-[4px_4px_8px_rgba(163,177,198,0.5),-4px_-4px_8px_rgba(255,255,255,0.7)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.5),-4px_-4px_8px_rgba(255,255,255,0.03)]",
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
  fallback: "flex h-full w-full items-center justify-center font-semibold tracking-wide text-slate-600 dark:text-[#94A3B8] bg-[#e8ecf1] dark:bg-[#1E293B]",
  status: {
    online:  "bg-emerald-500",
    offline: "bg-slate-400",
    busy:    "bg-red-400",
  },
  statusSizes: {
    xs: "size-[7px] ring-[1.5px] ring-[#e8ecf1] dark:ring-[#1E293B]",
    sm: "size-[9px] ring-2 ring-[#e8ecf1] dark:ring-[#1E293B]",
    md: "size-[10px] ring-2 ring-[#e8ecf1] dark:ring-[#1E293B]",
    lg: "size-3 ring-2 ring-[#e8ecf1] dark:ring-[#1E293B]",
    xl: "size-3.5 ring-2 ring-[#e8ecf1] dark:ring-[#1E293B]",
  },
};
