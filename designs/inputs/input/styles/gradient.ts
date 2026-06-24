import type { InputStyleConfig } from "./default";
export type { InputStyleConfig };

export const gradientStyle: InputStyleConfig = {
  base: "flex w-full rounded-xl text-[#0F172A] placeholder:text-[#64748B] transition-all duration-150 focus:outline-none disabled:pointer-events-none disabled:opacity-40 read-only:cursor-default dark:text-zinc-200 dark:placeholder:text-zinc-600",
  sizes: {
    sm: "h-7 text-xs px-3",
    md: "h-9 text-sm px-3",
    lg: "h-11 text-base px-4",
  },
  variants: {
    outline: {
      base:  "border border-[#FCE7F3] bg-white shadow-sm focus:border-[#7C3AED]/60 focus:ring-2 focus:ring-[#7C3AED]/20 dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.04)] dark:focus:border-fuchsia-500/60 dark:focus:ring-fuchsia-500/20",
      error: "border border-red-400/60 bg-white shadow-sm focus:border-red-500/80 focus:ring-2 focus:ring-red-500/20 dark:border-red-500/60 dark:bg-zinc-900 dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.25)] dark:focus:border-red-500/80 dark:focus:ring-red-500/20",
    },
    filled: {
      base:  "border-0 bg-[#FDF2F8] focus:bg-white focus:ring-2 focus:ring-[#7C3AED]/20 dark:bg-zinc-800 dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] dark:focus:bg-zinc-800/80 dark:focus:ring-fuchsia-500/20",
      error: "border-0 bg-[#FDF2F8] ring-2 ring-red-400/40 dark:bg-zinc-800 dark:ring-red-500/40",
    },
    ghost: {
      base:  "border-0 bg-transparent hover:bg-[#FDF2F8] focus:bg-[#FDF2F8] focus:ring-2 focus:ring-[#7C3AED]/20 dark:hover:bg-zinc-900/60 dark:focus:bg-zinc-900/60 dark:focus:ring-fuchsia-500/20",
      error: "border-0 bg-transparent ring-2 ring-red-400/40 dark:ring-red-500/40",
    },
  },
  icon: "pointer-events-none flex items-center text-[#64748B] dark:text-zinc-500",
  errorText: "text-xs text-red-600 dark:text-red-400",
};
