"use client";
import { motion } from "motion/react";

type Props = {
  size?: number;
  duration?: number;
};

function SuccessPop({ size = 56, duration = 0.4 }: Props) {
  return (
    <motion.div
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="flex items-center justify-center rounded-full bg-emerald-500/15"
      style={{ width: size, height: size }}
    >
      <motion.svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24" fill="none">
        <motion.path
          d="M4 12l6 6L20 6"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-emerald-500"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration, delay: 0.15, ease: "easeOut" }}
        />
      </motion.svg>
    </motion.div>
  );
}

export { SuccessPop as default };
