import type { BreadcrumbStyleConfig } from "./default";
export type { BreadcrumbStyleConfig } from "./default";

export const retroStyle: BreadcrumbStyleConfig = {
  nav: "",
  list: "flex items-center gap-1 flex-wrap",
  item: "flex items-center gap-1",
  link: "text-sm font-bold text-[#7a5230] transition-colors duration-100 hover:text-[#2c1a0e] uppercase tracking-wide",
  current: "text-sm font-black text-[#2c1a0e] uppercase tracking-wide border-b-2 border-[#e8743b]",
  separator: "text-[#3d2410] select-none text-sm font-black",
  ellipsis: "text-sm font-bold text-[#7a5230] hover:text-[#2c1a0e] transition-colors cursor-pointer px-1 uppercase",
};
