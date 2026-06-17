import { cn } from "@/lib/utils";

type Props = { style: string; className?: string };

/**
 * A small, representative mock of each visual style — used on style cards.
 * Each demo brings its own surface/background so the aesthetic reads on its own.
 */
export function StyleDemo({ style, className }: Props) {
  const Demo = DEMOS[style] ?? DefaultDemo;
  return (
    <div className={cn("relative flex h-full w-full items-center justify-center overflow-hidden", className)}>
      <Demo />
    </div>
  );
}

function DefaultDemo() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-950">
      {/* faint grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%)",
        }}
      />
      <div className="relative w-40 rounded-xl border border-zinc-800 bg-zinc-900/80 p-3 shadow-[0_8px_24px_rgba(0,0,0,0.5)]">
        <div className="mb-2.5 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="h-1.5 w-14 rounded-full bg-zinc-700" />
        </div>
        <div className="flex items-center justify-center rounded-md bg-emerald-500 py-1.5 text-[0.6875rem] font-medium text-emerald-950 shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
          Button
        </div>
      </div>
    </div>
  );
}

function GlassDemo() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-slate-950">
      {/* colorful blobs behind the glass */}
      <div className="pointer-events-none absolute -left-6 top-2 h-24 w-24 rounded-full bg-sky-500/60 blur-2xl" />
      <div className="pointer-events-none absolute -right-4 bottom-0 h-24 w-24 rounded-full bg-fuchsia-500/50 blur-2xl" />
      <div className="relative w-40 rounded-2xl border border-white/25 bg-white/10 p-3 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md">
        <div className="mb-2.5 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
          <span className="h-1.5 w-14 rounded-full bg-white/30" />
        </div>
        <div className="flex items-center justify-center rounded-lg border border-white/30 bg-white/20 py-1.5 text-[0.6875rem] font-medium text-white backdrop-blur-sm">
          Button
        </div>
      </div>
    </div>
  );
}

function MinimalDemo() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#fafafa]">
      <div className="relative w-40 border border-zinc-200 bg-white p-4">
        <div className="mb-3 space-y-1.5">
          <span className="block h-1 w-10 rounded-full bg-zinc-300" />
          <span className="block h-1 w-20 rounded-full bg-zinc-200" />
        </div>
        <div className="inline-block border-b border-zinc-900 pb-0.5 text-[0.625rem] font-medium uppercase tracking-[0.15em] text-zinc-900">
          Button
        </div>
      </div>
    </div>
  );
}

function NeobrutalismDemo() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#fde68a]">
      <div className="relative w-40 border-2 border-black bg-white p-3 shadow-[5px_5px_0_0_#000]">
        <div className="mb-2.5 flex items-center gap-1.5">
          <span className="h-2 w-2 border-2 border-black bg-fuchsia-400" />
          <span className="h-1.5 w-14 bg-black/80" />
        </div>
        <div className="flex items-center justify-center border-2 border-black bg-yellow-300 py-1.5 text-[0.6875rem] font-bold text-black shadow-[3px_3px_0_0_#000]">
          Button
        </div>
      </div>
    </div>
  );
}

function NeumorphismDemo() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#e0e5ec]">
      <div className="relative w-40 rounded-2xl bg-[#e0e5ec] p-3.5 shadow-[6px_6px_12px_#bec3c9,-6px_-6px_12px_#ffffff]">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]" />
          <span className="h-1.5 w-14 rounded-full bg-[#cdd2d9]" />
        </div>
        <div className="flex items-center justify-center rounded-xl bg-[#e0e5ec] py-1.5 text-[0.6875rem] font-semibold text-slate-500 shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff]">
          Button
        </div>
      </div>
    </div>
  );
}

function GradientDemo() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#0b0614]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-fuchsia-600/30 via-transparent to-indigo-600/30" />
      <div className="relative w-40 rounded-2xl border border-white/10 bg-white/[0.03] p-3 shadow-[0_8px_32px_rgba(168,85,247,0.25)]">
        <div className="mb-2.5 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
          <span className="h-1.5 w-14 rounded-full bg-white/15" />
        </div>
        <div className="flex items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 py-1.5 text-[0.6875rem] font-medium text-white shadow-[0_4px_16px_rgba(217,70,239,0.5)]">
          Button
        </div>
      </div>
    </div>
  );
}

function RetroDemo() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#f3e3c3]">
      <div className="relative w-40 rounded-2xl border-2 border-[#5b4636] bg-[#fff7e8] p-3 shadow-[4px_4px_0_0_#5b4636]">
        <div className="mb-2.5 flex items-center gap-1">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e8743b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#e3b23c]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3a7d6e]" />
        </div>
        <div className="flex items-center justify-center rounded-full border-2 border-[#5b4636] bg-[#e8743b] py-1.5 text-[0.6875rem] font-bold uppercase tracking-wide text-[#fff7e8]">
          Button
        </div>
      </div>
    </div>
  );
}

function TerminalDemo() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black font-mono">
      <div className="relative w-44 rounded-md border border-green-500/30 bg-black p-3 text-[0.625rem] leading-relaxed text-green-400 shadow-[0_0_24px_rgba(34,197,94,0.15)]">
        <div className="mb-1 text-green-500/60">$ ui add button</div>
        <div className="mb-1">✓ installed</div>
        <div className="flex items-center">
          <span className="text-green-500/60">&gt;&nbsp;</span>
          <span className="ml-0.5 inline-block h-3 w-1.5 animate-pulse bg-green-400" />
        </div>
      </div>
    </div>
  );
}

function AuroraDemo() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#06090f]">
      <div className="pointer-events-none absolute -left-6 -top-4 h-28 w-28 rounded-full bg-emerald-500/40 blur-2xl" />
      <div className="pointer-events-none absolute left-10 top-0 h-24 w-24 rounded-full bg-indigo-500/40 blur-2xl" />
      <div className="pointer-events-none absolute -right-4 bottom-0 h-28 w-28 rounded-full bg-fuchsia-500/30 blur-2xl" />
      <div className="relative w-40 rounded-2xl border border-white/10 bg-white/[0.04] p-3 shadow-[0_8px_32px_rgba(45,212,191,0.2)] backdrop-blur-sm">
        <div className="mb-2.5 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
          <span className="h-1.5 w-14 rounded-full bg-white/15" />
        </div>
        <div className="flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-400 py-1.5 text-[0.6875rem] font-medium text-slate-900 shadow-[0_4px_16px_rgba(45,212,191,0.4)]">
          Button
        </div>
      </div>
    </div>
  );
}

function PixelDemo() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#1a1c2c] font-mono [image-rendering:pixelated]">
      <div className="relative w-40 border-2 border-[#f4f4f4] bg-[#29366f] p-3 shadow-[4px_4px_0_0_#000]">
        <div className="mb-2.5 flex items-center gap-1">
          <span className="h-2 w-2 bg-[#ef476f]" />
          <span className="h-2 w-2 bg-[#ffd166]" />
          <span className="h-2 w-2 bg-[#06d6a0]" />
        </div>
        <div className="flex items-center justify-center border-2 border-black bg-[#ef476f] py-1.5 text-[0.625rem] font-bold uppercase tracking-widest text-white shadow-[3px_3px_0_0_#000]">
          Button
        </div>
      </div>
    </div>
  );
}

function MaterialDemo() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#f4f1f8]">
      <div className="relative w-40 rounded-2xl bg-white p-3 shadow-[0_4px_12px_rgba(103,80,164,0.18),0_1px_3px_rgba(0,0,0,0.1)]">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-4 w-4 rounded-full bg-[#6750a4]" />
          <span className="h-1.5 w-16 rounded-full bg-[#e7e0ec]" />
        </div>
        <div className="flex items-center justify-center rounded-full bg-[#6750a4] py-1.5 text-[0.6875rem] font-medium uppercase tracking-wide text-white shadow-[0_2px_6px_rgba(103,80,164,0.4)]">
          Button
        </div>
      </div>
    </div>
  );
}

const DEMOS: Record<string, () => React.ReactElement> = {
  default: DefaultDemo,
  glass: GlassDemo,
  minimal: MinimalDemo,
  neobrutalism: NeobrutalismDemo,
  neumorphism: NeumorphismDemo,
  gradient: GradientDemo,
  retro: RetroDemo,
  terminal: TerminalDemo,
  aurora: AuroraDemo,
  pixel: PixelDemo,
  material: MaterialDemo,
};
