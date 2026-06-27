"use client";

import { useState, useRef, useCallback } from "react";
import { InspirationPanel } from "@/components/colors/panels/InspirationPanel";
import { CopyToast } from "@/components/colors/shared/CopyToast";

export default function InspirationPage() {
  const [toast, setToast] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const copy = useCallback((text: string, label: string) => {
    navigator.clipboard.writeText(text).catch(() => {});
    setToast(label);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 1800);
  }, []);

  return (
    <div className="px-8 py-10">
      <div className="mb-10">
        <h1 className="mb-1 text-3xl font-bold tracking-tight">Inspiration</h1>
        <p className="text-[0.9375rem] text-muted-foreground">
          Curated palettes from Vercel, Linear, Nord, Dracula, and more — filterable by mood.
        </p>
      </div>
      <InspirationPanel copy={copy} />
      <CopyToast message={toast} />
    </div>
  );
}
