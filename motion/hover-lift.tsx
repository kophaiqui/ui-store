"use client";
import { motion } from "motion/react";

type Props = {
  children?: React.ReactNode;
  lift?: number;
  duration?: number;
};

function HoverLift({ children = <DemoCard />, lift = 4, duration = 0.2 }: Props) {
  return (
    <motion.div
      whileHover={{ y: -lift, boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
      transition={{ duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function DemoCard() {
  return (
    <div className="rounded-lg border border-border bg-card px-6 py-4 text-sm font-medium shadow-sm">
      Hover me
    </div>
  );
}

export { HoverLift as default };
