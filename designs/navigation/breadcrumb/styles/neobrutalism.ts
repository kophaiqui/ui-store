import type { BreadcrumbStyleConfig } from "./default";
export type { BreadcrumbStyleConfig };

export const neobrutalismStyle: BreadcrumbStyleConfig = {
  nav: "",
  list: "flex items-center gap-1 flex-wrap",
  item: "flex items-center gap-1",
  link: "text-sm font-bold text-zinc-500 dark:text-[#9CA3AF] transition-colors duration-100 hover:text-zinc-950 dark:hover:text-white underline-offset-2 hover:underline",
  current: "text-sm font-black text-zinc-950 dark:text-white uppercase tracking-wide",
  separator: "text-zinc-950 dark:text-white select-none text-sm font-black",
  ellipsis: "text-sm font-bold text-zinc-600 dark:text-[#9CA3AF] hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer px-1",
};
