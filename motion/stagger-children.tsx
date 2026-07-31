"use client";
import { motion } from "motion/react";

type Props = {
  items?: string[];
  stagger?: number;
  childDelay?: number;
};

function StaggerChildren({
  items = ["One", "Two", "Three", "Four"],
  stagger = 0.08,
  childDelay = 0,
}: Props) {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: childDelay },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.ul initial="hidden" animate="show" variants={container} className="flex flex-col gap-2">
      {items.map((label) => (
        <motion.li
          key={label}
          variants={item}
          className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium shadow-sm"
        >
          {label}
        </motion.li>
      ))}
    </motion.ul>
  );
}

export { StaggerChildren as default };
