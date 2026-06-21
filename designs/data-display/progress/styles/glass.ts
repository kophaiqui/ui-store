export type { ProgressStyleConfig } from "./default";
import type { ProgressStyleConfig } from "./default";

export const glassStyle: ProgressStyleConfig = {
  track: "relative h-1.5 w-full overflow-hidden rounded-full bg-white/10 backdrop-blur-sm",
  indicator: "absolute inset-y-0 left-0 rounded-full bg-sky-400/70 transition-all duration-500 ease-out",
  label: "text-xs font-medium text-foreground/60",
  value: "text-xs font-mono text-foreground/50",
};
