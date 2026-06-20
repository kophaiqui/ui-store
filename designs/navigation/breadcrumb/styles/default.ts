export type BreadcrumbStyleConfig = {
  nav: string;
  list: string;
  item: string;
  link: string;
  current: string;
  separator: string;
  ellipsis: string;
};

export const defaultStyle: BreadcrumbStyleConfig = {
  nav: "",
  list: "flex items-center gap-1 flex-wrap",
  item: "flex items-center gap-1",
  link: "text-sm text-muted-foreground transition-colors duration-100 hover:text-foreground",
  current: "text-sm text-foreground font-medium",
  separator: "text-muted-foreground/40 select-none text-sm",
  ellipsis: "text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer px-1",
};
