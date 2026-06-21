export type { FieldStyleConfig } from "./default";
import type { FieldStyleConfig } from "./default";

export const minimalStyle: FieldStyleConfig = {
  root: "flex flex-col gap-1.5",
  label: "text-xs font-medium text-muted-foreground leading-none uppercase tracking-wider",
  description: "text-xs text-muted-foreground leading-relaxed",
  error: "text-xs text-red-500",
  control: "w-full",
  horizontal: "flex flex-row items-start gap-4",
};
