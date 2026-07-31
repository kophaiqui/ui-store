"use client";
import { motion } from "motion/react";

type Props = {
  children?: React.ReactNode;
  distance?: number;
  duration?: number;
  delay?: number;
};

function SlideUp({ children = <DemoCard />, distance = 24, duration = 0.4, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}

function DemoCard() {
  return (
    <div className="rounded-lg border border-border bg-card px-6 py-4 text-sm font-medium shadow-sm">
      Slides up
    </div>
  );
}

export { SlideUp as default };
