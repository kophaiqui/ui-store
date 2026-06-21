export type { EmptyStyleConfig } from "./default";
import type { EmptyStyleConfig } from "./default";

export const glassStyle: EmptyStyleConfig = {
  wrapper: "flex flex-col items-center justify-center gap-4 py-12 text-center",
  icon: "text-white/20",
  title: "text-base font-medium text-foreground/90",
  description: "max-w-xs text-sm text-foreground/50",
  actions: "flex items-center gap-3",
};
