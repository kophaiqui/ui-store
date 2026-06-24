import type { BreadcrumbStyleConfig } from "./default";
export type { BreadcrumbStyleConfig };

export const neumorphismStyle: BreadcrumbStyleConfig = {
  nav: "",
  list: "flex items-center gap-1.5 flex-wrap",
  item: "flex items-center gap-1.5",
  link: "text-sm font-medium text-slate-500 dark:text-[#94A3B8] transition-colors duration-150 hover:text-slate-800 dark:hover:text-[#E2E8F0]",
  current: "text-sm font-semibold text-slate-800 dark:text-[#E2E8F0]",
  separator: "text-slate-300 dark:text-[#334155] select-none text-sm",
  ellipsis: "text-sm text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-[#E2E8F0] transition-colors cursor-pointer px-1",
};
