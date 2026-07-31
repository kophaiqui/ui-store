"use client";

import { useState } from "react";
import { Download, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function DownloadTemplateButton({ slug }: { slug: string }) {
  const [state, setState] = useState<"idle" | "done">("idle");

  async function handleDownload() {
    const res = await fetch(`/api/download-template/${slug}`);
    if (!res.ok) return;
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${slug}-template.zip`;
    a.click();
    URL.revokeObjectURL(url);
    setState("done");
    setTimeout(() => setState("idle"), 2000);
  }

  return (
    <button
      onClick={handleDownload}
      className={cn(
        "flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-sm font-medium transition-colors",
        state === "done" ? "text-emerald-500" : "text-foreground hover:bg-muted"
      )}
    >
      {state === "done" ? <Check size={14} /> : <Download size={14} />}
      {state === "done" ? "Downloaded" : "Download template"}
    </button>
  );
}
