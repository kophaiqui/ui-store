import type { DropdownMenuStyleConfig } from "./default";
export type { DropdownMenuStyleConfig } from "./default";

export const terminalStyle: DropdownMenuStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-sm border border-[#16A34A] bg-transparent px-4 font-mono text-sm font-bold text-[#065F46] dark:border-[#22C55E] dark:text-[#22C55E] transition-all duration-100 hover:bg-[#16A34A]/10 dark:hover:bg-[#22C55E]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A]/40 dark:focus-visible:ring-[#22C55E]/40 data-[popup-open]:bg-[#16A34A]/10 dark:data-[popup-open]:bg-[#22C55E]/10",
  popup: "z-50 min-w-[180px] overflow-hidden rounded-sm border border-[#16A34A] bg-white dark:border-[#22C55E] dark:bg-[#0F0F0F] dark:shadow-[0_0_12px_rgba(34,197,94,0.15)] py-1 data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-all duration-150 ease-out origin-[var(--transform-origin)]",
  item: "flex h-8 cursor-default select-none items-center gap-2 px-3 font-mono text-sm font-bold text-[#065F46] dark:text-[#22C55E] transition-colors duration-100 focus-visible:outline-none data-[highlighted]:bg-[#16A34A] data-[highlighted]:text-white dark:data-[highlighted]:bg-[#22C55E] dark:data-[highlighted]:text-black",
  itemDanger: "flex h-8 cursor-default select-none items-center gap-2 px-3 font-mono text-sm font-bold text-red-600 dark:text-red-500 transition-colors duration-100 focus-visible:outline-none data-[highlighted]:bg-red-50 data-[highlighted]:text-red-700 dark:data-[highlighted]:bg-red-500/10 dark:data-[highlighted]:text-red-400",
  separator: "my-1 h-px bg-[#16A34A]/15 dark:bg-[#22C55E]/10 mx-2",
  shortcut: "ml-auto font-mono text-[10px] font-bold text-[#047857] dark:text-[#86EFAC] uppercase",
};
