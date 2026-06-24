import type { SliderStyleConfig } from "./default";
export type { SliderStyleConfig };

export const gradientStyle: SliderStyleConfig = {
  track: "relative h-2 w-full rounded-full bg-[#FCE7F3] data-[disabled]:opacity-40 dark:bg-zinc-800",
  indicator: "absolute h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] data-[disabled]:opacity-60 dark:from-fuchsia-600 dark:to-pink-500",
  thumb: "block size-[18px] rounded-full border-2 border-[#7C3AED] bg-white shadow-[0_0_0_3px_rgba(124,58,237,0.15)] transition-shadow duration-150 hover:shadow-[0_0_0_5px_rgba(124,58,237,0.2)] active:scale-110 focus-visible:outline-none focus-visible:shadow-[0_0_0_5px_rgba(124,58,237,0.3)] data-[disabled]:cursor-not-allowed data-[disabled]:border-[#64748B] data-[disabled]:shadow-none dark:border-fuchsia-500 dark:bg-zinc-950 dark:shadow-[0_0_0_3px_rgba(217,70,239,0.2)] dark:hover:shadow-[0_0_0_5px_rgba(217,70,239,0.25)] dark:focus-visible:shadow-[0_0_0_5px_rgba(217,70,239,0.35)] dark:data-[disabled]:border-zinc-600",
};
