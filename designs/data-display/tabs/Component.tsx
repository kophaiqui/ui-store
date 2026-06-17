"use client";
import { Tabs } from "@base-ui/react/tabs";
import { cn } from "@/lib/utils";

type TabItem = { label: string; value: string; content: React.ReactNode };

type Props = {
  tabs?: TabItem[];
  defaultValue?: string;
  className?: string;
};

export function UITabs({
  tabs = [
    { label: "Overview", value: "overview", content: "Overview content goes here." },
    { label: "Settings", value: "settings", content: "Settings content goes here." },
    { label: "Analytics", value: "analytics", content: "Analytics content goes here." },
  ],
  defaultValue = "overview",
  className,
}: Props) {
  return (
    <Tabs.Root defaultValue={defaultValue} className={cn("w-full", className)}>
      <Tabs.List className="relative flex gap-0 border-b border-border">
        <Tabs.Indicator
          className="absolute bottom-0 left-0 h-px bg-emerald-500 transition-all duration-200 ease-out"
          style={{ width: "var(--active-tab-width)", left: "var(--active-tab-left)" }}
        />
        {tabs.map((tab) => (
          <Tabs.Tab
            key={tab.value}
            value={tab.value}
            className={cn(
              "relative px-4 pb-3 pt-1 text-sm font-medium text-muted-foreground",
              "transition-colors duration-150 hover:text-foreground",
              "data-[selected]:text-foreground",
              "focus-visible:outline-none",
              "cursor-default select-none",
            )}
          >
            {tab.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
      {tabs.map((tab) => (
        <Tabs.Panel
          key={tab.value}
          value={tab.value}
          className="pt-4 text-sm text-muted-foreground leading-relaxed focus-visible:outline-none"
        >
          {tab.content}
        </Tabs.Panel>
      ))}
    </Tabs.Root>
  );
}

export { UITabs as default };
