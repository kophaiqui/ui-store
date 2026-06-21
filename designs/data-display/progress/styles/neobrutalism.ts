import type { ProgressStyleConfig } from "./default";
export type { ProgressStyleConfig };

export const neobrutalismStyle: ProgressStyleConfig = {
  track: "relative h-4 w-full overflow-hidden rounded-none border-2 border-zinc-950 bg-white",
  indicator: "absolute inset-y-0 left-0 rounded-none bg-yellow-300 transition-all duration-500 ease-out border-r-2 border-zinc-950",
  label: "text-xs font-black text-zinc-950 uppercase tracking-wide",
  value: "text-xs font-black font-mono text-zinc-950",
};
