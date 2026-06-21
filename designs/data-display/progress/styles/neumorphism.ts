import type { ProgressStyleConfig } from "./default";
export type { ProgressStyleConfig };

export const neumorphismStyle: ProgressStyleConfig = {
  track: "relative h-3 w-full overflow-hidden rounded-full bg-[#e8ecf1] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.7)]",
  indicator: "absolute inset-y-0 left-0 rounded-full bg-blue-500/70 transition-all duration-500 ease-out",
  label: "text-xs font-semibold text-slate-600",
  value: "text-xs font-mono text-slate-500",
};
