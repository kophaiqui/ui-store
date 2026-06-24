export type { DropdownMenuStyleConfig } from "./default";
import type { DropdownMenuStyleConfig } from "./default";

export const glassStyle: DropdownMenuStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-black/10 bg-black/5 backdrop-blur-sm px-4 text-sm font-medium text-foreground/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:border-white/10 dark:bg-white/8 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-150 hover:bg-black/8 dark:hover:bg-white/12 hover:text-foreground active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 dark:focus-visible:ring-sky-400/40 data-[popup-open]:bg-black/8 dark:data-[popup-open]:bg-white/12",
  popup: "z-50 min-w-[180px] overflow-hidden rounded-xl border border-black/8 bg-white/90 backdrop-blur-2xl dark:border-white/10 dark:bg-black/55 py-1 shadow-[0_16px_48px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)] data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-all duration-150 ease-out origin-[var(--transform-origin)]",
  item: "flex h-8 cursor-default select-none items-center gap-2 px-3 text-sm text-foreground/80 transition-colors duration-100 focus-visible:outline-none data-[highlighted]:bg-black/5 dark:data-[highlighted]:bg-white/10 data-[highlighted]:text-foreground",
  itemDanger: "flex h-8 cursor-default select-none items-center gap-2 px-3 text-sm text-red-600 dark:text-red-300/80 transition-colors duration-100 focus-visible:outline-none data-[highlighted]:bg-red-500/8 dark:data-[highlighted]:bg-red-400/10 data-[highlighted]:text-red-700 dark:data-[highlighted]:text-red-300",
  separator: "my-1 h-px bg-black/8 dark:bg-white/10 mx-2",
  shortcut: "ml-auto text-[10px] font-mono text-foreground/40",
};
