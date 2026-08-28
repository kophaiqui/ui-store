export type { DropdownMenuStyleConfig } from "./default";
import type { DropdownMenuStyleConfig } from "./default";

export const materialStyle: DropdownMenuStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-full border border-violet-300/60 bg-transparent px-4 text-sm font-medium text-violet-700 dark:border-violet-700/40 dark:text-violet-300 transition-all duration-150 hover:bg-violet-50 dark:hover:bg-violet-500/10 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[popup-open]:bg-violet-50 dark:data-[popup-open]:bg-violet-500/10",
  popup: "z-50 min-w-[180px] overflow-hidden rounded-2xl border border-violet-200/40 bg-white dark:border-violet-800/30 dark:bg-[#1d1b20] py-1 shadow-[0_8px_24px_rgba(103,80,164,0.18),0_2px_8px_rgba(103,80,164,0.10)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.3)] data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-all duration-150 ease-out origin-[var(--transform-origin)]",
  item: "flex h-8 cursor-default select-none items-center gap-2 px-3 text-sm text-foreground/80 transition-colors duration-100 focus-visible:outline-none data-[highlighted]:bg-violet-100 dark:data-[highlighted]:bg-violet-500/15 data-[highlighted]:text-foreground",
  itemDanger: "flex h-8 cursor-default select-none items-center gap-2 px-3 text-sm text-rose-600 dark:text-rose-300/80 transition-colors duration-100 focus-visible:outline-none data-[highlighted]:bg-rose-100 dark:data-[highlighted]:bg-rose-500/10 data-[highlighted]:text-rose-700 dark:data-[highlighted]:text-rose-300",
  separator: "my-1 h-px bg-violet-200/40 dark:bg-violet-800/30 mx-2",
  shortcut: "ml-auto text-[10px] font-mono text-foreground/40",
};
