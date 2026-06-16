"use client";

export default function GlassCard() {
  return (
    <div
      className="
        relative w-72 rounded-2xl p-6
        bg-white/10 dark:bg-white/5
        border border-white/20 dark:border-white/10
        backdrop-blur-md
        shadow-[0_8px_32px_rgba(0,0,0,0.12)]
      "
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet-400 to-indigo-600" />
        <div>
          <div className="text-sm font-semibold text-foreground">Alex Johnson</div>
          <div className="text-xs text-muted-foreground">Product Designer</div>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">
        Building products that people love is about understanding the small moments that matter.
      </p>
    </div>
  );
}
