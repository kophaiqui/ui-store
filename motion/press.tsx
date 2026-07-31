"use client";
import { motion } from "motion/react";

type Props = {
  children?: React.ReactNode;
  scale?: number;
};

function Press({ children = <DemoButton />, scale = 0.96 }: Props) {
  return (
    <motion.div whileTap={{ scale }} transition={{ duration: 0.1 }} className="inline-block">
      {children}
    </motion.div>
  );
}

function DemoButton() {
  return (
    <button className="rounded-lg border border-border bg-card px-6 py-2.5 text-sm font-medium shadow-sm">
      Press me
    </button>
  );
}

export { Press as default };
