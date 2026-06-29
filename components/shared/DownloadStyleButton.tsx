"use client";

import { useState } from "react";
import { Download, Check, Loader } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = { style: string; count: number };

export function DownloadStyleButton({ style, count }: Props) {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  async function handleDownload() {
    if (state !== "idle") return;
    setState("loading");
    try {
      const res = await fetch(`/api/download-style/${style}`);
      if (!res.ok) throw new Error("Failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      const folderName = style === "default" ? "components" : `${style}-components`;
      a.download = `${folderName}.zip`;
      a.click();
      URL.revokeObjectURL(url);
      setState("done");
      setTimeout(() => setState("idle"), 2500);
    } catch {
      setState("idle");
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={state !== "idle"}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors",
        state === "done"
          ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-500"
          : "border-border bg-muted/40 text-muted-foreground hover:border-border/80 hover:text-foreground"
      )}
    >
      {state === "loading" && <Loader size={14} className="animate-spin" />}
      {state === "done" && <Check size={14} />}
      {state === "idle" && <Download size={14} />}
      {state === "done"
        ? "Downloaded"
        : state === "loading"
        ? "Building ZIP..."
        : `Download all ${count} components`}
    </button>
  );
}
