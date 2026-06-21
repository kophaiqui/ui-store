export type { BreadcrumbStyleConfig } from "./default";
import type { BreadcrumbStyleConfig } from "./default";

export const minimalStyle: BreadcrumbStyleConfig = {
  nav: "",
  list: "flex items-center gap-1 flex-wrap",
  item: "flex items-center gap-1",
  link: "text-xs text-muted-foreground uppercase tracking-wider transition-colors duration-100 hover:text-foreground",
  current: "text-xs text-foreground font-semibold uppercase tracking-wider",
  separator: "text-border select-none text-xs",
  ellipsis: "text-xs text-muted-foreground uppercase tracking-wider hover:text-foreground transition-colors cursor-pointer px-1",
};
