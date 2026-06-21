import type { SelectStyleConfig } from "./default";
export type { SelectStyleConfig };

export const gradientStyle: SelectStyleConfig = {
  trigger: "flex h-9 w-full items-center justify-between gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-3 text-sm text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_2px_4px_rgba(0,0,0,0.2)] transition-all duration-150 hover:border-zinc-600 focus:outline-none focus:border-fuchsia-500/60 focus:ring-2 focus:ring-fuchsia-500/20 disabled:pointer-events-none disabled:opacity-40",
  icon: "shrink-0 text-zinc-500",
  placeholder: "text-zinc-600",
  popup: "z-50 min-w-[var(--anchor-width)] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 py-1 shadow-[0_24px_48px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]",
  item: "flex h-8 cursor-default select-none items-center px-3 text-sm text-zinc-300 transition-colors duration-100 data-[highlighted]:bg-fuchsia-500/10 data-[highlighted]:text-fuchsia-200 data-[selected]:text-fuchsia-400",
};
