"use client";
import { motion } from "motion/react";

type Props = {
  children?: React.ReactNode;
  distance?: number;
  duration?: number;
};

function Shake({ children = <DemoField />, distance = 8, duration = 0.4 }: Props) {
  return (
    <motion.div
      animate={{ x: [0, -distance, distance, -distance / 2, distance / 2, 0] }}
      transition={{ duration, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

function DemoField() {
  return (
    <div className="rounded-lg border border-red-500/60 bg-card px-6 py-4 text-sm font-medium text-red-600 shadow-sm dark:text-red-400">
      Invalid input
    </div>
  );
}

export { Shake as default };
