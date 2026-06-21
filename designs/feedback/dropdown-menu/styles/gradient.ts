import type { DropdownMenuStyleConfig } from "./default";
export type { DropdownMenuStyleConfig };

export const gradientStyle: DropdownMenuStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 px-4 text-sm font-medium text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-150 hover:border-zinc-600 hover:bg-zinc-700 active:scale-[0.97] focus-visible:outline-none data-[popup-open]:bg-zinc-700",
  popup: "z-50 min-w-[180px] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 py-1 shadow-[0_16px_40px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.05)] data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 transition-all duration-150 ease-out origin-[var(--transform-origin)]",
  item: "flex h-8 cursor-default select-none items-center gap-2 px-3 text-sm text-zinc-300 transition-colors duration-100 focus-visible:outline-none data-[highlighted]:bg-fuchsia-500/10 data-[highlighted]:text-fuchsia-200",
  itemDanger: "flex h-8 cursor-default select-none items-center gap-2 px-3 text-sm text-red-400 transition-colors duration-100 focus-visible:outline-none data-[highlighted]:bg-red-500/10 data-[highlighted]:text-red-300",
  separator: "my-1 h-px bg-zinc-800 mx-2",
  shortcut: "ml-auto text-[10px] font-mono text-zinc-600",
};
