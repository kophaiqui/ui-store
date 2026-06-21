import type { BreadcrumbStyleConfig } from "./default";
export type { BreadcrumbStyleConfig };

export const neobrutalismStyle: BreadcrumbStyleConfig = {
  nav: "",
  list: "flex items-center gap-1 flex-wrap",
  item: "flex items-center gap-1",
  link: "text-sm font-bold text-zinc-500 transition-colors duration-100 hover:text-zinc-950 underline-offset-2 hover:underline",
  current: "text-sm font-black text-zinc-950 uppercase tracking-wide",
  separator: "text-zinc-950 select-none text-sm font-black",
  ellipsis: "text-sm font-bold text-zinc-600 hover:text-zinc-950 transition-colors cursor-pointer px-1",
};
