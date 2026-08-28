import type { ProgressStyleConfig } from "./default";
export type { ProgressStyleConfig } from "./default";

export const pixelStyle: ProgressStyleConfig = {
  track: "relative h-4 w-full overflow-hidden rounded-none border-2 border-black bg-zinc-900",
  indicator: "absolute inset-y-0 left-0 rounded-none bg-[#06d6a0] transition-all duration-300 ease-out border-r-2 border-black",
  label: "font-mono text-xs font-bold text-[#06d6a0] uppercase tracking-widest",
  value: "font-mono text-xs font-bold text-[#06d6a0]",
};
