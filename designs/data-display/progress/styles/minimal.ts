export type { ProgressStyleConfig } from "./default";
import type { ProgressStyleConfig } from "./default";

export const minimalStyle: ProgressStyleConfig = {
  track: "relative h-px w-full overflow-hidden bg-border",
  indicator: "absolute inset-y-0 left-0 bg-foreground transition-all duration-500 ease-out",
  label: "text-xs font-medium text-muted-foreground uppercase tracking-wider",
  value: "text-xs font-mono text-muted-foreground",
};
