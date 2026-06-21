export type { EmptyStyleConfig } from "./default";
import type { EmptyStyleConfig } from "./default";

export const minimalStyle: EmptyStyleConfig = {
  wrapper: "flex flex-col items-center justify-center gap-4 py-12 text-center",
  icon: "text-muted-foreground/30",
  title: "text-base font-medium text-foreground tracking-wide",
  description: "max-w-xs text-sm text-muted-foreground",
  actions: "flex items-center gap-3",
};
