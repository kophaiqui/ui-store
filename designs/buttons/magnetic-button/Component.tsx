"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode;
  disabled?: boolean;
  strength?: number;
  variant?: "default" | "outline" | "ghost";
};

export function MagneticButton({
  children = "Hover me",
  disabled,
  strength = 0.35,
  variant = "default",
}: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    if (disabled) return;
    const rect = ref.current!.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setPos({ x: (e.clientX - cx) * strength, y: (e.clientY - cy) * strength });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  return (
    <button
      ref={ref}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition:
          pos.x === 0 && pos.y === 0
            ? "transform 0.4s ease"
            : "transform 0.1s ease",
      }}
      className={cn(
        "px-8 py-3 rounded-full font-medium text-sm shadow-md transition-shadow",
        variant === "default" && "bg-white dark:bg-zinc-100 text-zinc-900 border border-zinc-200 hover:shadow-lg",
        variant === "outline" && "bg-transparent text-foreground border border-border hover:bg-muted",
        variant === "ghost" && "bg-transparent text-muted-foreground hover:text-foreground",
        disabled && "opacity-40 cursor-not-allowed",
        !disabled && "cursor-pointer",
      )}
    >
      {children}
    </button>
  );
}
