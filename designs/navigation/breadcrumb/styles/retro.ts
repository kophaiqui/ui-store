import type { BreadcrumbStyleConfig } from "./default";
export type { BreadcrumbStyleConfig } from "./default";

export const retroStyle: BreadcrumbStyleConfig = {
  nav: "",
  list: "flex items-center gap-1 flex-wrap",
  item: "flex items-center gap-1",
  link: "text-sm font-bold text-[#7a5230] transition-colors duration-100 hover:text-[#2c1a0e] uppercase tracking-wide dark:text-[#A1A1AA] dark:hover:text-[#F5F3FF]",
  current: "text-sm font-black text-[#2c1a0e] uppercase tracking-wide border-b-2 border-[#e8743b] dark:text-[#F5F3FF] dark:border-[#A78BFA]",
  separator: "text-[#3d2410] select-none text-sm font-black dark:text-[#A78BFA]",
  ellipsis: "text-sm font-bold text-[#7a5230] hover:text-[#2c1a0e] transition-colors cursor-pointer px-1 uppercase dark:text-[#A1A1AA] dark:hover:text-[#F5F3FF]",
};
