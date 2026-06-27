"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "base",        label: "Base tokens",    count: "21" },
  { id: "styles",      label: "Style palettes", count: "11" },
  { id: "inspiration", label: "Inspiration",    count: "12" },
  { id: "maincolor",   label: "Your colors"                 },
  { id: "collection",  label: "Collection",     count: "15" },
] as const;

function ColorNavInner() {
  const searchParams = useSearchParams();
  const router       = useRouter();
  const pathname     = usePathname();
  const activeTab    = searchParams.get("tab") ?? "base";

  return (
    <nav className="px-3 pb-10 pt-2">
      <p className="mb-1 px-2 py-1 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground/50">
        Colors
      </p>
      <ul className="space-y-0.5">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <li key={tab.id}>
              <button
                onClick={() => router.push(`${pathname}?tab=${tab.id}`, { scroll: false })}
                className={cn(
                  "group relative flex w-full items-center justify-between rounded-md px-2 py-1.5 text-[0.875rem] font-medium transition-all duration-150",
                  isActive
                    ? "bg-violet-500/[0.08] text-foreground before:absolute before:inset-y-1 before:left-0 before:w-[2px] before:rounded-full before:bg-violet-500"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                )}
              >
                {tab.label}
                {"count" in tab && (
                  <span
                    className={cn(
                      "flex h-4 min-w-[18px] items-center justify-center rounded-full px-1 text-[0.5rem] font-bold",
                      isActive
                        ? "bg-violet-500/20 text-violet-400"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function ColorSidebarNav() {
  return (
    <Suspense>
      <ColorNavInner />
    </Suspense>
  );
}
