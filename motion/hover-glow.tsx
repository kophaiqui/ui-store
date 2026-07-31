"use client";
import { useState } from "react";
import { motion } from "motion/react";

type Props = {
  children?: React.ReactNode;
  glowColor?: string;
  intensity?: number;
};

function HoverGlow({ children = <DemoCard />, glowColor = "#8b5cf6", intensity = 0.5 }: Props) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{
        boxShadow: hovered
          ? `0 0 32px ${intensity * 24}px ${glowColor}${Math.round(intensity * 60).toString(16).padStart(2, "0")}`
          : "0 0 0px 0px transparent",
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

function DemoCard() {
  return (
    <div className="rounded-lg border border-border bg-card px-6 py-4 text-sm font-medium">
      Hover me
    </div>
  );
}

export { HoverGlow as default };
