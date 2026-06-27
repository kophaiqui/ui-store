"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutGrid,
  Braces,
  Pipette,
  Palette,
  Lightbulb,
  Bookmark,
} from "lucide-react";

const TABS = [
  { id: "overview",    label: "Overview",       Icon: LayoutGrid },
  { id: "base",        label: "Base tokens",    Icon: Braces     },
  { id: "maincolor",   label: "Your colors",    Icon: Pipette    },
  { id: "styles",      label: "Style palettes", Icon: Palette    },
  { id: "inspiration", label: "Inspiration",    Icon: Lightbulb  },
  { id: "collection",  label: "Collection",     Icon: Bookmark   },
] as const;

function ColorNavInner() {
  const searchParams = useSearchParams();
  const router       = useRouter();
  const pathname     = usePathname();
  const activeTab    = searchParams.get("tab") ?? "overview";

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
                  "group relative flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-[0.875rem] font-medium transition-all duration-150",
                  isActive
                    ? "bg-violet-500/[0.08] text-foreground before:absolute before:inset-y-1 before:left-0 before:w-[2px] before:rounded-full before:bg-violet-500"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                )}
              >
                <tab.Icon size={14} className="shrink-0 opacity-70" />
                {tab.label}
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
