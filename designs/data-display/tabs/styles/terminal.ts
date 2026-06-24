import type { TabsStyleConfig } from "./default";
export type { TabsStyleConfig } from "./default";

export const terminalStyle: TabsStyleConfig = {
  list: "relative flex gap-0 border-b border-[#16A34A]/30 dark:border-[#22C55E]/20",
  indicator: "absolute bottom-0 left-0 h-px bg-[#16A34A] dark:bg-[#22C55E] transition-all duration-200 ease-out",
  tab: "relative px-4 pb-3 pt-1 font-mono text-sm font-bold text-[#047857] dark:text-[#86EFAC] uppercase tracking-wide transition-colors duration-100 hover:text-[#065F46] dark:hover:text-[#22C55E] data-[selected]:text-[#065F46] dark:data-[selected]:text-[#22C55E] focus-visible:outline-none cursor-default select-none",
  panel: "pt-4 font-mono text-sm text-[#047857] dark:text-[#86EFAC] leading-relaxed focus-visible:outline-none",
};
