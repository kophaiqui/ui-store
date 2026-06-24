export type { SliderStyleConfig } from "./default";
import type { SliderStyleConfig } from "./default";

export const glassStyle: SliderStyleConfig = {
  track: "relative h-1.5 w-full rounded-full bg-black/10 backdrop-blur-sm dark:bg-white/10 data-[disabled]:opacity-40",
  indicator: "absolute h-full rounded-full bg-sky-500/70 dark:bg-sky-400/60 data-[disabled]:bg-black/20 dark:data-[disabled]:bg-white/20",
  thumb: "block size-[18px] rounded-full border-2 border-sky-500/70 bg-white shadow-[0_0_0_3px_rgba(14,165,233,0.15)] transition-shadow duration-100 hover:shadow-[0_0_0_5px_rgba(14,165,233,0.2)] active:scale-110 focus-visible:outline-none focus-visible:shadow-[0_0_0_5px_rgba(14,165,233,0.3)] dark:border-sky-400/70 dark:bg-white/10 dark:backdrop-blur-sm dark:shadow-[0_0_0_3px_rgba(56,189,248,0.15)] dark:hover:shadow-[0_0_0_5px_rgba(56,189,248,0.2)] dark:focus-visible:shadow-[0_0_0_5px_rgba(56,189,248,0.3)] data-[disabled]:cursor-not-allowed data-[disabled]:border-black/20 dark:data-[disabled]:border-white/20 data-[disabled]:shadow-none",
};
