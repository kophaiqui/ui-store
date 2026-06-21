export type { CommandStyleConfig } from "./default";
import type { CommandStyleConfig } from "./default";

export const glassStyle: CommandStyleConfig = {
  backdrop: "fixed inset-0 bg-black/60 backdrop-blur-sm data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-150",
  popup: "fixed left-1/2 top-[20%] -translate-x-1/2 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/55 backdrop-blur-2xl shadow-[0_24px_64px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)] focus:outline-none data-[starting-style]:opacity-0 data-[starting-style]:-translate-x-1/2 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-[opacity,transform] duration-150",
  sizes: { sm: "max-w-sm", md: "max-w-lg", lg: "max-w-2xl" },
  search: "flex items-center gap-3 border-b border-white/10 px-4 py-3",
  searchInput: "flex-1 bg-transparent text-sm text-foreground placeholder:text-foreground/40 outline-none",
  list: "max-h-[320px] overflow-y-auto p-1.5",
  groupHeading: "px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-wider text-foreground/40",
  item: "flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors duration-100 select-none",
  itemSelected: "bg-white/10 text-foreground",
  itemDisabled: "opacity-40 cursor-not-allowed",
  itemIcon: "shrink-0 text-foreground/50",
  itemLabel: "flex-1 font-medium text-foreground/80",
  itemDescription: "text-xs text-foreground/50",
  itemShortcut: "ml-auto shrink-0 font-mono text-[0.6875rem] text-foreground/40 bg-white/8 rounded-md px-1.5 py-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
  empty: "py-10 text-center text-sm text-foreground/40",
  trigger: "inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/8 backdrop-blur-sm px-3 py-1.5 text-sm text-foreground/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-150 hover:bg-white/12 hover:text-foreground active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40",
};
