"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { StyleDemo } from "@/components/shared/StyleDemo";

const CARD_W = 248;
const GAP = 16;
const STEP = CARD_W + GAP;

type Props = { styleIds: string[] };

export function StyleCarousel({ styleIds }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const [offset, setOffset] = useState(0);
  const [animated, setAnimated] = useState(true);
  const [visibleCount, setVisibleCount] = useState(5);

  // Duplicated items for seamless looping
  const items = [...styleIds, ...styleIds];
  const loopAt = styleIds.length;

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      setVisibleCount(Math.max(1, Math.floor((w + GAP) / STEP)));
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (pausedRef.current) return;
      setOffset((o) => {
        const next = o + 1;
        if (next >= loopAt) {
          // jump back to 0 without animation then let next tick advance
          setAnimated(false);
          setTimeout(() => {
            setOffset(0);
            setAnimated(true);
          }, 0);
          return o;
        }
        return next;
      });
    }, 2800);
    return () => clearInterval(id);
  }, [loopAt]);

  const go = (dir: 1 | -1) => {
    pausedRef.current = true;
    setAnimated(true);
    setOffset((o) => Math.max(0, Math.min(loopAt - 1, o + dir)));
    setTimeout(() => { pausedRef.current = false; }, 5000);
  };

  return (
    <div
      ref={containerRef}
      className="w-full group relative overflow-hidden"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <motion.div
        className="flex"
        style={{ gap: GAP }}
        animate={{ x: -offset * STEP }}
        transition={animated ? { type: "spring", stiffness: 180, damping: 28 } : { duration: 0 }}
      >
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

      {offset > 0 && (
        <button
          onClick={() => go(-1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-card shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Previous"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

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
