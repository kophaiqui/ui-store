"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type Props = {
  children?: React.ReactNode;
  strength?: number;
};

function Magnetic({ children = <DemoButton />, strength = 0.3 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

function DemoButton() {
  return (
    <button className="rounded-full border border-border bg-card px-8 py-3 text-sm font-medium shadow-sm">
      Move near me
    </button>
  );
}

export { Magnetic as default };
