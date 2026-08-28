export type { ProgressStyleConfig } from "./default";
import type { ProgressStyleConfig } from "./default";

export const materialStyle: ProgressStyleConfig = {
  track: "relative h-1.5 w-full overflow-hidden rounded-full bg-violet-100 dark:bg-violet-900/30",
  indicator: "absolute inset-y-0 left-0 rounded-full bg-violet-600 dark:bg-violet-400 transition-all duration-500 ease-out",
  label: "text-xs font-medium text-foreground/60",
  value: "text-xs font-mono text-foreground/50",
};
