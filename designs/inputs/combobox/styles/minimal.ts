export type { ComboboxStyleConfig } from "./default";
import type { ComboboxStyleConfig } from "./default";

export const minimalStyle: ComboboxStyleConfig = {
  trigger: "flex min-h-9 w-full items-center justify-between rounded-none border-0 border-b border-border bg-transparent px-0 py-1.5 text-sm transition-colors duration-150 hover:border-foreground/40 focus-within:ring-0 focus-within:border-foreground disabled:cursor-not-allowed disabled:opacity-40",
  inputGroup: "flex flex-1 flex-wrap items-center gap-1 min-w-0",
  input: "flex-1 min-w-[60px] bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none",
  icon: "shrink-0 text-muted-foreground transition-transform duration-150 data-[popup-open]:rotate-180",
  popup: "z-50 min-w-[var(--anchor-width)] overflow-hidden rounded-none border border-border bg-background shadow-none py-1 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-150",
  item: "flex cursor-pointer items-center gap-2 px-3 py-2 text-sm text-foreground/80 transition-colors duration-100 select-none data-[highlighted]:bg-muted data-[highlighted]:text-foreground data-[disabled]:opacity-40 data-[disabled]:cursor-not-allowed",
  itemIndicator: "ml-auto shrink-0 text-foreground",
  empty: "px-3 py-6 text-center text-sm text-muted-foreground",
  chip: "flex items-center gap-1 rounded-none border border-border bg-transparent px-1.5 py-0.5 text-xs text-foreground",
  chipRemove: "text-muted-foreground hover:text-foreground transition-colors cursor-pointer leading-none",
  clear: "shrink-0 text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
  placeholder: "text-muted-foreground",
  label: "text-sm font-medium text-foreground/90 leading-none",
  description: "text-xs text-muted-foreground leading-relaxed",
  error: "text-xs text-red-500",
};
