export type { SelectStyleConfig } from "./default";
import type { SelectStyleConfig } from "./default";

export const minimalStyle: SelectStyleConfig = {
  trigger: "flex h-9 w-full items-center justify-between gap-2 rounded-none border-0 border-b border-border bg-transparent px-0 text-sm text-foreground transition-all duration-150 hover:border-foreground/40 focus:outline-none focus:border-foreground focus:ring-0 disabled:pointer-events-none disabled:opacity-40",
  icon: "shrink-0 text-muted-foreground",
  placeholder: "text-muted-foreground",
  popup: "z-50 min-w-[var(--anchor-width)] overflow-hidden rounded-none border border-border bg-background py-1 shadow-none",
  item: "flex h-8 cursor-default select-none items-center px-3 text-sm text-foreground/80 transition-colors duration-100 data-[highlighted]:bg-muted data-[highlighted]:text-foreground data-[selected]:text-foreground data-[selected]:font-medium",
};
