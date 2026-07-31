"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type Props = {
  label?: string;
  content?: string;
  duration?: number;
};

function Collapse({
  label = "Toggle details",
  content = "This content animates from height 0 to its natural height, the same technique an accordion uses.",
  duration = 0.3,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-64 rounded-lg border border-border bg-card">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium"
      >
        {label}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          ↓
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-4 pb-3 text-sm text-muted-foreground">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export { Collapse as default };
