import type { ProgressStyleConfig } from "./default";
export type { ProgressStyleConfig };

export const gradientStyle: ProgressStyleConfig = {
  track: "relative h-2 w-full overflow-hidden rounded-full bg-zinc-800",
  indicator: "absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-500 transition-all duration-500 ease-out shadow-[0_0_8px_rgba(217,70,239,0.4)]",
  label: "text-xs font-medium text-zinc-400",
  value: "text-xs font-mono text-fuchsia-400",
};
