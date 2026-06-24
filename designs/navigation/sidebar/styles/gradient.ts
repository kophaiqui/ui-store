import type { SidebarStyleConfig } from "./default";
export type { SidebarStyleConfig };

export const gradientStyle: SidebarStyleConfig = {
  nav: "flex flex-col h-full bg-white border-r border-[#FCE7F3] dark:bg-zinc-950 dark:border-zinc-800",
  item: "flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium text-[#64748B] transition-colors duration-100 hover:bg-[#FDF2F8] hover:text-[#0F172A] cursor-pointer select-none mx-2 my-0.5 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-200",
  itemActive: "bg-[#7C3AED]/10 text-[#7C3AED] border border-[#7C3AED]/20 dark:bg-fuchsia-500/10 dark:text-fuchsia-300 dark:border-fuchsia-500/20",
  itemDisabled: "opacity-40 cursor-not-allowed pointer-events-none",
  icon: "shrink-0 text-[#64748B]/50 dark:text-zinc-600",
  label: "flex-1 truncate",
  badge: "ml-auto shrink-0 rounded-full bg-[#7C3AED]/10 px-1.5 py-0.5 text-[10px] font-medium text-[#7C3AED] border border-[#7C3AED]/20 dark:bg-fuchsia-500/15 dark:text-fuchsia-400 dark:border-fuchsia-500/20",
  nested: "ml-4 mt-0.5 flex flex-col gap-0.5 border-l border-[#FCE7F3] pl-3 dark:border-zinc-800",
  nestedItem: "flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-medium text-[#64748B] transition-colors hover:bg-[#FDF2F8] hover:text-[#0F172A] cursor-pointer dark:text-zinc-500 dark:hover:bg-zinc-900 dark:hover:text-zinc-300",
  collapseBtn: "mt-auto flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium text-[#64748B] transition-colors hover:bg-[#FDF2F8] hover:text-[#0F172A] cursor-pointer mx-2 dark:text-zinc-600 dark:hover:bg-zinc-900 dark:hover:text-zinc-400",
  header: "border-b border-[#FCE7F3] p-4 dark:border-zinc-800",
  footer: "border-t border-[#FCE7F3] p-4 dark:border-zinc-800",
};
