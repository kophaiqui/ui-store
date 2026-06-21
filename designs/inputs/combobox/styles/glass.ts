export type { ComboboxStyleConfig } from "./default";
import type { ComboboxStyleConfig } from "./default";

export const glassStyle: ComboboxStyleConfig = {
  trigger: "flex min-h-9 w-full items-center justify-between rounded-lg border border-white/15 bg-white/8 backdrop-blur-sm px-3 py-1.5 text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-150 hover:border-white/25 hover:bg-white/10 focus-within:ring-2 focus-within:ring-sky-400/25 focus-within:border-sky-400/40 disabled:cursor-not-allowed disabled:opacity-40",
  inputGroup: "flex flex-1 flex-wrap items-center gap-1 min-w-0",
  input: "flex-1 min-w-[60px] bg-transparent text-sm text-foreground placeholder:text-foreground/40 outline-none",
  icon: "shrink-0 text-foreground/40 transition-transform duration-150 data-[popup-open]:rotate-180",
  popup: "z-50 min-w-[var(--anchor-width)] overflow-hidden rounded-xl border border-white/10 bg-black/55 backdrop-blur-2xl shadow-[0_24px_48px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] py-1 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-150",
  item: "flex cursor-pointer items-center gap-2 px-3 py-2 text-sm text-foreground/80 transition-colors duration-100 select-none data-[highlighted]:bg-white/10 data-[highlighted]:text-foreground data-[disabled]:opacity-40 data-[disabled]:cursor-not-allowed",
  itemIndicator: "ml-auto shrink-0 text-sky-400",
  empty: "px-3 py-6 text-center text-sm text-foreground/40",
  chip: "flex items-center gap-1 rounded-md border border-white/15 bg-white/8 px-1.5 py-0.5 text-xs text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
  chipRemove: "text-foreground/40 hover:text-foreground transition-colors cursor-pointer leading-none",
  clear: "shrink-0 text-foreground/40 hover:text-foreground transition-colors cursor-pointer",
  placeholder: "text-foreground/40",
  label: "text-sm font-medium text-foreground/80 leading-none",
  description: "text-xs text-foreground/50 leading-relaxed",
  error: "text-xs text-red-300",
};
