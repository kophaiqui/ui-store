import type { BreadcrumbStyleConfig } from "./default";
export type { BreadcrumbStyleConfig };

export const neumorphismStyle: BreadcrumbStyleConfig = {
  nav: "",
  list: "flex items-center gap-1.5 flex-wrap",
  item: "flex items-center gap-1.5",
  link: "text-sm font-medium text-slate-500 transition-colors duration-150 hover:text-slate-800",
  current: "text-sm font-semibold text-slate-800",
  separator: "text-slate-300 select-none text-sm",
  ellipsis: "text-sm text-slate-400 hover:text-slate-700 transition-colors cursor-pointer px-1",
};
