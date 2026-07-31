"use client";
import { motion } from "motion/react";

type Props = {
  children?: React.ReactNode;
  from?: number;
  overshoot?: boolean;
  duration?: number;
};

function ScaleIn({ children = <DemoCard />, from = 0.9, overshoot = false, duration = 0.35 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: from }}
      animate={{ opacity: 1, scale: 1 }}
      transition={
        overshoot
          ? { type: "spring", stiffness: 400, damping: 15 }
          : { duration, ease: "easeOut" }
      }
    >
      {children}
    </motion.div>
  );
}

function DemoCard() {
  return (
    <div className="rounded-lg border border-border bg-card px-6 py-4 text-sm font-medium shadow-sm">
      Scales in
    </div>
  );
}

export { ScaleIn as default };
