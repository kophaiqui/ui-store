import type { DialogStyleConfig } from "./default";
export type { DialogStyleConfig };

export const neobrutalismStyle: DialogStyleConfig = {
  trigger: "inline-flex h-9 items-center justify-center gap-2 rounded-none border-2 border-zinc-950 bg-white px-4 text-sm font-bold text-zinc-950 shadow-[3px_3px_0px_0px_#09090b] transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#09090b] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none focus-visible:outline-none",
  backdrop: "fixed inset-0 z-40 bg-zinc-950/60",
  popup: "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-none border-2 border-zinc-950 bg-white p-6 shadow-[8px_8px_0px_0px_#09090b]",
  title: "mb-2 text-base font-black text-zinc-950 uppercase tracking-wide",
  description: "mb-6 text-sm font-medium leading-relaxed text-zinc-700",
  cancelBtn: "inline-flex h-8 items-center rounded-none border-2 border-zinc-950 px-3 text-sm font-bold text-zinc-950 shadow-[2px_2px_0px_0px_#09090b] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#09090b] transition-all duration-100 focus-visible:outline-none",
  confirmBtn: "inline-flex h-8 items-center rounded-none border-2 border-zinc-950 bg-yellow-300 px-3 text-sm font-bold text-zinc-950 shadow-[2px_2px_0px_0px_#09090b] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#09090b] transition-all duration-100 focus-visible:outline-none",
};
