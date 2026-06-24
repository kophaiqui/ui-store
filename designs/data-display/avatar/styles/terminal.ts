import type { AvatarStyleConfig } from "./default";
export type { AvatarStyleConfig, AvatarSize, AvatarStatus } from "./default";

export const terminalStyle: AvatarStyleConfig = {
  root: "relative inline-flex items-center justify-center overflow-hidden border border-[#16A34A] bg-[#16A34A]/10 dark:border-[#22C55E] dark:bg-[#22C55E]/10",
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
  fallback: "flex h-full w-full items-center justify-center font-mono font-bold tracking-wide text-[#065F46] dark:text-[#22C55E] bg-[#16A34A]/10 dark:bg-[#22C55E]/10",
  status: {
    online:  "bg-[#16A34A] dark:bg-[#22C55E]",
    offline: "bg-[#047857] dark:bg-[#86EFAC]",
    busy:    "bg-red-600 dark:bg-red-500",
  },
  statusSizes: {
    xs: "size-[7px] ring-[1.5px] ring-white dark:ring-black",
    sm: "size-[9px] ring-2 ring-white dark:ring-black",
    md: "size-[10px] ring-2 ring-white dark:ring-black",
    lg: "size-3 ring-2 ring-white dark:ring-black",
    xl: "size-3.5 ring-2 ring-white dark:ring-black",
  },
};
