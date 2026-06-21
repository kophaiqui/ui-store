export type { DropdownMenuStyleConfig } from "./default";
import type { DropdownMenuStyleConfig } from "./default";

export const minimalStyle: DropdownMenuStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-none border-0 border-b border-border bg-transparent px-4 text-sm font-medium text-foreground/80 transition-all duration-150 hover:text-foreground focus-visible:outline-none data-[popup-open]:text-foreground",
  popup: "z-50 min-w-[180px] overflow-hidden rounded-none border border-border bg-background py-1 shadow-none data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-all duration-150 ease-out origin-[var(--transform-origin)]",
  item: "flex h-8 cursor-default select-none items-center gap-2 px-3 text-sm text-foreground/80 transition-colors duration-100 focus-visible:outline-none data-[highlighted]:bg-muted data-[highlighted]:text-foreground",
  itemDanger: "flex h-8 cursor-default select-none items-center gap-2 px-3 text-sm text-red-500 transition-colors duration-100 focus-visible:outline-none data-[highlighted]:bg-red-500/5 data-[highlighted]:text-red-500",
  separator: "my-1 h-px bg-border mx-0",
  shortcut: "ml-auto text-[10px] font-mono text-muted-foreground/60",
};
