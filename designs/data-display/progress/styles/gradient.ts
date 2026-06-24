import type { ProgressStyleConfig } from "./default";
export type { ProgressStyleConfig };

export const gradientStyle: ProgressStyleConfig = {
  track: "relative h-2 w-full overflow-hidden rounded-full bg-[#FCE7F3] dark:bg-zinc-800",
  indicator: "absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] transition-all duration-500 ease-out shadow-[0_0_8px_rgba(124,58,237,0.3)] dark:from-fuchsia-600 dark:to-pink-500 dark:shadow-[0_0_8px_rgba(217,70,239,0.4)]",
  label: "text-xs font-medium text-[#64748B] dark:text-zinc-400",
  value: "text-xs font-mono text-[#7C3AED] dark:text-fuchsia-400",
};
