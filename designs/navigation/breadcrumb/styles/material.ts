export type { BreadcrumbStyleConfig } from "./default";
import type { BreadcrumbStyleConfig } from "./default";

export const materialStyle: BreadcrumbStyleConfig = {
  nav: "",
  list: "flex items-center gap-1 flex-wrap",
  item: "flex items-center gap-1",
  link: "text-sm text-foreground/50 transition-colors duration-100 hover:text-violet-700 dark:hover:text-violet-300",
  current: "text-sm text-foreground font-medium",
  separator: "text-violet-300 dark:text-violet-700 select-none text-sm",
  ellipsis: "text-sm text-foreground/50 hover:text-foreground transition-colors cursor-pointer px-1",
};
