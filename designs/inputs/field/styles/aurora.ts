export type { FieldStyleConfig } from "./default";
import type { FieldStyleConfig } from "./default";

export const auroraStyle: FieldStyleConfig = {
  root: "flex flex-col gap-1.5",
  label: "text-sm font-medium text-indigo-200 leading-none",
  description: "text-xs text-indigo-300/50 leading-relaxed",
  error: "text-xs text-rose-300",
  control: "w-full",
  horizontal: "flex flex-row items-start gap-4",
};
