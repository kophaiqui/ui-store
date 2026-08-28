export type { BreadcrumbStyleConfig } from "./default";
import type { BreadcrumbStyleConfig } from "./default";

export const auroraStyle: BreadcrumbStyleConfig = {
  nav: "",
  list: "flex items-center gap-1 flex-wrap",
  item: "flex items-center gap-1",
  link: "text-sm text-indigo-300/60 transition-colors duration-100 hover:text-teal-200",
  current: "text-sm text-teal-100 font-medium",
  separator: "text-indigo-400/30 select-none text-sm",
  ellipsis: "text-sm text-indigo-300/60 hover:text-teal-200 transition-colors cursor-pointer px-1",
};
