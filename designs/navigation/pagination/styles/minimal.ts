export type { PaginationStyleConfig } from "./default";
import type { PaginationStyleConfig } from "./default";

export const minimalStyle: PaginationStyleConfig = {
  nav: "flex items-center",
  list: "flex items-center gap-0",
  item: "",
  btn: "flex items-center justify-center rounded-none border-0 border-b border-transparent font-medium text-muted-foreground transition-colors duration-100 hover:text-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40",
  sizes: {
    sm: "h-7 min-w-[28px] px-2 text-xs",
    md: "h-8 min-w-[32px] px-2.5 text-sm",
    lg: "h-9 min-w-[36px] px-3 text-sm",
  },
  active: "border-b-2 border-foreground text-foreground font-semibold",
  disabled: "opacity-40 cursor-not-allowed pointer-events-none",
  ellipsis: "flex items-end justify-center pb-0.5 text-muted-foreground select-none",
  prevNext: "",
  firstLast: "",
};
