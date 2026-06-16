"use client";

import { useRef, useState } from "react";

export default function TiltCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current!.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (py - 0.5) * -16, y: (px - 0.5) * 16 });
    setGlare({ x: px * 100, y: py * 100 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50 });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: tilt.x === 0 ? "transform 0.5s ease" : "transform 0.08s ease",
      }}
      className="relative w-72 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-lg cursor-pointer"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.8) 0%, transparent 60%)`,
        }}
      />
      <div className="mb-4 h-8 w-8 rounded-lg bg-gradient-to-br from-rose-400 to-orange-500" />
      <div className="mb-1 font-semibold">Tilt Effect</div>
      <p className="text-sm text-muted-foreground">
        Move your cursor over this card to see the 3D tilt and glare effect.
      </p>
    </div>
  );
}
