"use client";
import { motion } from "motion/react";

type Props = {
  children?: React.ReactNode;
  duration?: number;
  delay?: number;
};

function FadeIn({ children = <DemoCard />, duration = 0.4, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}

function DemoCard() {
  return (
    <div className="rounded-lg border border-border bg-card px-6 py-4 text-sm font-medium shadow-sm">
      Fades in
    </div>
  );
}

export { FadeIn as default };
