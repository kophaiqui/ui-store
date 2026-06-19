"use client";

import { useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, useMotionValue, animate } from "motion/react";
import { StyleDemo } from "@/components/shared/StyleDemo";

const CARD_W = 248;
const GAP = 16;
const STEP = CARD_W + GAP;

type Props = { styleIds: string[] };

export function StyleCarousel({ styleIds }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const animatingRef = useRef(false);
  const x = useMotionValue(0);
  const loopWidth = styleIds.length * STEP;

  // Items doubled for seamless wrap
  const items = [...styleIds, ...styleIds];

  const step = useCallback(async (dir: 1 | -1) => {
    if (animatingRef.current) return;
    animatingRef.current = true;

    const from = x.get();
    const to = from - dir * STEP;

    await animate(x, to, { type: "spring", stiffness: 200, damping: 30, restDelta: 0.5 });

    // Seamless loop: after settling, silently reset position
    const settled = x.get();
    if (settled <= -loopWidth) x.set(settled + loopWidth);
    else if (settled >= loopWidth) x.set(settled - loopWidth);

    animatingRef.current = false;
  }, [x, loopWidth]);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) step(1);
    }, 2600);
    return () => clearInterval(id);
  }, [step]);

  const go = (dir: 1 | -1) => {
    pausedRef.current = true;
    step(dir);
    setTimeout(() => { pausedRef.current = false; }, 5000);
  };

  return (
    <div
      ref={containerRef}
      className="w-full group relative overflow-hidden"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <motion.div className="flex" style={{ gap: GAP, x }}>
        {items.map((id, i) => (
          <Link
            key={i}
            href="/style"
            className="shrink-0 overflow-hidden rounded-xl border border-border/60 transition-colors hover:border-border hover:shadow-md"
            style={{ width: CARD_W }}
          >
            <StyleDemo style={id} className="h-[140px]" />
          </Link>
        ))}
      </motion.div>

      <button
        onClick={() => go(-1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-card shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Previous"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        onClick={() => go(1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-card shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Next"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}
