import type { BreadcrumbStyleConfig } from "./default";
export type { BreadcrumbStyleConfig };

export const gradientStyle: BreadcrumbStyleConfig = {
  nav: "",
  list: "flex items-center gap-1 flex-wrap",
  item: "flex items-center gap-1",
  link: "text-sm font-medium text-[#64748B] transition-colors duration-100 hover:text-[#7C3AED] dark:text-zinc-500 dark:hover:text-fuchsia-300",
  current: "text-sm font-medium text-[#0F172A] dark:text-zinc-200",
  separator: "text-[#FCE7F3] select-none text-sm dark:text-zinc-700",
  ellipsis: "text-sm text-[#64748B] hover:text-[#7C3AED] transition-colors cursor-pointer px-1 dark:text-zinc-500 dark:hover:text-fuchsia-300",
};
