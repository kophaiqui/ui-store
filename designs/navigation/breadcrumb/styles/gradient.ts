import type { BreadcrumbStyleConfig } from "./default";
export type { BreadcrumbStyleConfig };

export const gradientStyle: BreadcrumbStyleConfig = {
  nav: "",
  list: "flex items-center gap-1 flex-wrap",
  item: "flex items-center gap-1",
  link: "text-sm font-medium text-zinc-500 transition-colors duration-100 hover:text-fuchsia-300",
  current: "text-sm font-medium text-zinc-200",
  separator: "text-zinc-700 select-none text-sm",
  ellipsis: "text-sm text-zinc-500 hover:text-fuchsia-300 transition-colors cursor-pointer px-1",
};
