export type { SelectStyleConfig } from "./default";
import type { SelectStyleConfig } from "./default";

export const glassStyle: SelectStyleConfig = {
  trigger: "flex h-9 w-full items-center justify-between gap-2 rounded-lg border border-white/15 bg-white/8 backdrop-blur-sm px-3 text-sm text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-150 hover:border-white/25 hover:bg-white/10 focus:outline-none focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/20 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40",
  icon: "shrink-0 text-foreground/40",
  placeholder: "text-foreground/40",
  popup: "z-50 min-w-[var(--anchor-width)] overflow-hidden rounded-xl border border-white/10 bg-black/55 backdrop-blur-2xl py-1 shadow-[0_24px_48px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]",
  item: "flex h-8 cursor-default select-none items-center px-3 text-sm text-foreground/80 transition-colors duration-100 data-[highlighted]:bg-white/10 data-[highlighted]:text-foreground data-[selected]:text-sky-300",
};
