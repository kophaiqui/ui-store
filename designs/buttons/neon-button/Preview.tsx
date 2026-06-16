"use client";

export default function NeonButton() {
  return (
    <button
      className="
        relative px-8 py-3 rounded-lg font-medium text-sm
        text-cyan-300 border border-cyan-500/50
        bg-transparent
        shadow-[0_0_12px_rgba(6,182,212,0.3),inset_0_0_12px_rgba(6,182,212,0.05)]
        hover:shadow-[0_0_24px_rgba(6,182,212,0.6),0_0_48px_rgba(6,182,212,0.2),inset_0_0_24px_rgba(6,182,212,0.1)]
        hover:border-cyan-400
        hover:text-cyan-100
        transition-all duration-300 ease-out
        cursor-pointer
      "
    >
      Get Started
    </button>
  );
}
