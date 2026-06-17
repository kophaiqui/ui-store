"use client";
import { Tabs } from "@base-ui/react/tabs";
import { cn } from "@/lib/utils";
import type { TabsStyleConfig } from "./styles/default";

export type { TabsStyleConfig };

type TabItem = { label: string; value: string; content: React.ReactNode };

type Props = {
  tabs?: TabItem[];
  defaultValue?: string;
  className?: string;
  styleConfig: TabsStyleConfig;
};

export function UITabs({
  styleConfig,
  tabs = [
    { label: "Overview",  value: "overview",  content: "Overview content goes here." },
    { label: "Settings",  value: "settings",  content: "Settings content goes here." },
    { label: "Analytics", value: "analytics", content: "Analytics content goes here." },
  ],
  defaultValue = "overview",
  className,
}: Props) {
  return (
    <Tabs.Root defaultValue={defaultValue} className={cn("w-full", className)}>
      <Tabs.List className={styleConfig.list}>
        <Tabs.Indicator className={styleConfig.indicator} style={{ width: "var(--active-tab-width)", left: "var(--active-tab-left)" }} />
        {tabs.map((tab) => (
          <Tabs.Tab key={tab.value} value={tab.value} className={styleConfig.tab}>
            {tab.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
      {tabs.map((tab) => (
        <Tabs.Panel key={tab.value} value={tab.value} className={styleConfig.panel}>
          {tab.content}
        </Tabs.Panel>
      ))}
    </Tabs.Root>
  );
}
