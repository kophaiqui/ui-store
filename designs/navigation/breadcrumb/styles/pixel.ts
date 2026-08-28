import type { BreadcrumbStyleConfig } from "./default";
export type { BreadcrumbStyleConfig } from "./default";

export const pixelStyle: BreadcrumbStyleConfig = {
  nav: "",
  list: "flex items-center gap-1 flex-wrap",
  item: "flex items-center gap-1",
  link: "font-mono text-sm font-bold text-[#06d6a0]/60 uppercase tracking-wide transition-colors duration-100 hover:text-[#06d6a0]",
  current: "font-mono text-sm font-bold text-[#ef476f] uppercase tracking-wide",
  separator: "text-[#06d6a0]/40 select-none text-sm font-mono font-bold",
  ellipsis: "font-mono text-sm font-bold text-[#06d6a0]/60 hover:text-[#06d6a0] transition-colors cursor-pointer px-1 uppercase",
};
