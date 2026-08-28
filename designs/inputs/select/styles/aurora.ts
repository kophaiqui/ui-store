export type { SelectStyleConfig } from "./default";
import type { SelectStyleConfig } from "./default";

export const auroraStyle: SelectStyleConfig = {
  trigger: "flex h-9 w-full items-center justify-between gap-2 rounded-lg border border-indigo-400/20 bg-indigo-950/50 px-3 text-sm text-teal-50 transition-all duration-150 hover:border-teal-400/30 focus:outline-none focus:border-teal-400/40 focus:ring-2 focus:ring-teal-400/25 disabled:pointer-events-none disabled:opacity-40",
  icon: "shrink-0 text-indigo-300/50",
  placeholder: "text-indigo-300/40",
  popup: "z-50 min-w-[var(--anchor-width)] overflow-hidden rounded-lg border border-indigo-400/20 bg-[#0b1022]/95 backdrop-blur-xl py-1 shadow-[0_0_32px_rgba(99,102,241,0.15),0_8px_32px_rgba(0,0,0,0.5)]",
  item: "flex h-8 cursor-default select-none items-center px-3 text-sm text-indigo-200/80 transition-colors duration-100 data-[highlighted]:bg-teal-400/10 data-[highlighted]:text-teal-100 data-[selected]:text-teal-300",
};
