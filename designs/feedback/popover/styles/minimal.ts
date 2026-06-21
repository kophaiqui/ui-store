export type { PopoverStyleConfig } from "./default";
import type { PopoverStyleConfig } from "./default";

export const minimalStyle: PopoverStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-none border-0 border-b border-border bg-transparent px-4 text-sm font-medium text-foreground/80 transition-all duration-150 hover:text-foreground focus-visible:outline-none",
  popup: "z-50 w-72 rounded-none border border-border bg-background p-4 shadow-none",
  title: "text-sm font-semibold tracking-tight text-foreground",
  description: "text-xs leading-relaxed text-muted-foreground",
  close: "flex size-5 items-center justify-center rounded-none text-muted-foreground/70 hover:text-foreground transition-colors duration-150 focus-visible:outline-none",
};
