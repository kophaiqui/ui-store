export type { FieldStyleConfig } from "./default";
import type { FieldStyleConfig } from "./default";

export const materialStyle: FieldStyleConfig = {
  root: "flex flex-col gap-1.5",
  label: "text-sm font-medium text-foreground/80 leading-none",
  description: "text-xs text-foreground/50 leading-relaxed",
  error: "text-xs text-rose-600 dark:text-rose-300",
  control: "w-full",
  horizontal: "flex flex-row items-start gap-4",
};
