"use client";

import { useRef, useState } from "react";

export default function MagneticButton() {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = ref.current!.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setPos({
      x: (e.clientX - cx) * 0.35,
      y: (e.clientY - cy) * 0.35,
    });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: pos.x === 0 && pos.y === 0 ? "transform 0.4s ease" : "transform 0.1s ease",
      }}
      className="
        px-8 py-3 rounded-full font-medium text-sm
        bg-white dark:bg-zinc-100 text-zinc-900
        shadow-md hover:shadow-lg
        cursor-pointer border border-zinc-200 dark:border-zinc-300
      "
    >
      Hover me
    </button>
  );
}
