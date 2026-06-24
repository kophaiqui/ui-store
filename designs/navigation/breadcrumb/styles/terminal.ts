import type { BreadcrumbStyleConfig } from "./default";
export type { BreadcrumbStyleConfig } from "./default";

export const terminalStyle: BreadcrumbStyleConfig = {
  nav: "",
  list: "flex items-center gap-1 flex-wrap",
  item: "flex items-center gap-1",
  link: "font-mono text-sm font-bold text-[#047857] dark:text-[#86EFAC] transition-colors duration-100 hover:text-[#065F46] dark:hover:text-[#22C55E] uppercase tracking-wide",
  current: "font-mono text-sm font-bold text-[#065F46] dark:text-[#22C55E] uppercase tracking-wide border-b border-[#16A34A] dark:border-[#22C55E]",
  separator: "text-[#16A34A] dark:text-[#22C55E] select-none text-sm font-mono font-bold",
  ellipsis: "font-mono text-sm font-bold text-[#047857] dark:text-[#86EFAC] hover:text-[#065F46] dark:hover:text-[#22C55E] transition-colors cursor-pointer px-1 uppercase",
};
