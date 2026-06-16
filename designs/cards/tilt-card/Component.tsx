"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  title?: string;
  description?: string;
  icon?: string;
  maxTilt?: number;
  glare?: boolean;
  disabled?: boolean;
};

export function TiltCard({
  title = "Tilt Effect",
  description = "Move your cursor over this card to see the 3D tilt and glare effect.",
  icon = "🟧",
  maxTilt = 16,
  glare = true,
  disabled,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (disabled) return;
    const rect = ref.current!.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (py - 0.5) * -maxTilt, y: (px - 0.5) * maxTilt });
    setGlarePos({ x: px * 100, y: py * 100 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
    setGlarePos({ x: 50, y: 50 });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: disabled
          ? "none"
          : `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: tilt.x === 0 ? "transform 0.5s ease" : "transform 0.08s ease",
      }}
      className={cn(
        "relative w-64 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-lg",
        !disabled && "cursor-pointer",
      )}
    >
      {glare && !disabled && (
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.8) 0%, transparent 60%)`,
          }}
        />
      )}
      <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-rose-400 to-orange-500 text-white text-sm font-bold">
        {icon}
      </div>
      <div className="mb-1 font-semibold">{title}</div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
