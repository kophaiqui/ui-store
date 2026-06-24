import type { TabsStyleConfig } from "./default";
export type { TabsStyleConfig };

export const gradientStyle: TabsStyleConfig = {
  list: "relative flex gap-0 border-b border-[#FCE7F3] dark:border-zinc-800",
  indicator: "absolute bottom-0 left-0 h-px bg-gradient-to-r from-[#7C3AED] to-[#EC4899] transition-all duration-200 ease-out dark:from-fuchsia-500 dark:to-pink-500",
  tab: "relative px-4 pb-3 pt-1 text-sm font-medium text-[#64748B] transition-colors duration-150 hover:text-[#7C3AED] data-[selected]:text-[#7C3AED] focus-visible:outline-none cursor-default select-none dark:text-zinc-500 dark:hover:text-zinc-300 dark:data-[selected]:text-fuchsia-300",
  panel: "pt-4 text-sm text-[#64748B] leading-relaxed focus-visible:outline-none dark:text-zinc-400",
};
