"use client";
import { motion } from "motion/react";

type Props = {
  children?: React.ReactNode;
  blur?: number;
  duration?: number;
};

function BlurIn({ children = <DemoCard />, blur = 8, duration = 0.5 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: `blur(${blur}px)` }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function DemoCard() {
  return (
    <div className="rounded-lg border border-border bg-card px-6 py-4 text-sm font-medium shadow-sm">
      Blurs in
    </div>
  );
}

export { BlurIn as default };
