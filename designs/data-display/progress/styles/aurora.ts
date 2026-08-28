export type { ProgressStyleConfig } from "./default";
import type { ProgressStyleConfig } from "./default";

export const auroraStyle: ProgressStyleConfig = {
  track: "relative h-1.5 w-full overflow-hidden rounded-full bg-indigo-950/60",
  indicator: "absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-teal-400 via-indigo-400 to-violet-400 shadow-[0_0_10px_rgba(45,212,191,0.4)] transition-all duration-500 ease-out",
  label: "text-xs font-medium text-indigo-300/60",
  value: "text-xs font-mono text-indigo-300/50",
};
