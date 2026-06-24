import type { DropdownMenuStyleConfig } from "./default";
export type { DropdownMenuStyleConfig };

export const gradientStyle: DropdownMenuStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-xl border border-[#FCE7F3] bg-white px-4 text-sm font-medium text-[#0F172A] shadow-sm transition-all duration-150 hover:border-[#7C3AED]/30 hover:bg-[#FDF2F8] active:scale-[0.97] focus-visible:outline-none data-[popup-open]:bg-[#FDF2F8] dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] dark:hover:border-zinc-600 dark:hover:bg-zinc-700 dark:data-[popup-open]:bg-zinc-700",
  popup: "z-50 min-w-[180px] overflow-hidden rounded-xl border border-[#FCE7F3] bg-white py-1 shadow-[0_8px_24px_rgba(0,0,0,0.08)] data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-all duration-150 ease-out origin-[var(--transform-origin)] dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-[0_16px_40px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.05)]",
  item: "flex h-8 cursor-default select-none items-center gap-2 px-3 text-sm text-[#0F172A] transition-colors duration-100 focus-visible:outline-none data-[highlighted]:bg-[#7C3AED]/8 data-[highlighted]:text-[#7C3AED] dark:text-zinc-300 dark:data-[highlighted]:bg-fuchsia-500/10 dark:data-[highlighted]:text-fuchsia-200",
  itemDanger: "flex h-8 cursor-default select-none items-center gap-2 px-3 text-sm text-red-600 transition-colors duration-100 focus-visible:outline-none data-[highlighted]:bg-red-500/8 data-[highlighted]:text-red-700 dark:text-red-400 dark:data-[highlighted]:bg-red-500/10 dark:data-[highlighted]:text-red-300",
  separator: "my-1 h-px bg-[#FCE7F3] mx-2 dark:bg-zinc-800",
  shortcut: "ml-auto text-[10px] font-mono text-[#64748B] dark:text-zinc-600",
};
