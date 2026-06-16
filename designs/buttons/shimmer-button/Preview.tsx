"use client";

export default function ShimmerButton() {
  return (
    <button
      className="
        relative overflow-hidden px-8 py-3 rounded-lg font-medium text-sm
        bg-zinc-900 dark:bg-zinc-800 text-white border border-zinc-700
        cursor-pointer
        group
      "
    >
      <span
        className="
          absolute inset-0 -translate-x-full
          bg-gradient-to-r from-transparent via-white/20 to-transparent
          skew-x-[-20deg]
          group-hover:translate-x-[200%]
          transition-transform duration-700 ease-in-out
        "
      />
      <span className="relative z-10">Deploy Now</span>
    </button>
  );
}
