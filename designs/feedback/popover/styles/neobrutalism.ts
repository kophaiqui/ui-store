import type { PopoverStyleConfig } from "./default";
export type { PopoverStyleConfig };

export const neobrutalismStyle: PopoverStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-none border-2 border-zinc-950 bg-white px-4 text-sm font-bold text-zinc-950 shadow-[3px_3px_0px_0px_#09090b] transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#09090b] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none focus-visible:outline-none",
  popup: "z-50 w-72 rounded-none border-2 border-zinc-950 bg-white p-4 shadow-[5px_5px_0px_0px_#09090b]",
  title: "text-sm font-black text-zinc-950 uppercase tracking-wide",
  description: "text-xs font-medium leading-relaxed text-zinc-700",
  close: "flex size-5 items-center justify-center rounded-none border border-zinc-950 text-zinc-950 hover:bg-yellow-300 transition-colors duration-100 focus-visible:outline-none",
};
