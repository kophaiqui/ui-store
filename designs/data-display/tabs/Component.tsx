"use client";
import { Tabs } from "@base-ui/react/tabs";
import { cn } from "@/lib/utils";
import { defaultStyle } from "./styles/default";
import type { TabsStyleConfig } from "./styles/default";

export type { TabsStyleConfig };

type TabItem = {
  label: string;
  value: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
};

type Props = {
  styleConfig?: TabsStyleConfig;
  tabs?: TabItem[];
  defaultValue?: string;
  fullWidth?: boolean;
  iconPosition?: "left" | "right";
  className?: string;
};

export function UITabs({
  styleConfig = defaultStyle,
  tabs = [
    {
      label: "Overview",
      value: "overview",
      content: "Overview content goes here.",
      icon: (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <rect x="1" y="1" width="4" height="4" rx="1" />
          <rect x="7" y="1" width="4" height="4" rx="1" />
          <rect x="1" y="7" width="4" height="4" rx="1" />
          <rect x="7" y="7" width="4" height="4" rx="1" />
        </svg>
      ),
    },
    {
      label: "Settings",
      value: "settings",
      content: "Settings content goes here.",
      icon: (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <circle cx="6" cy="6" r="2" />
          <path d="M6 1v1M6 10v1M1 6h1M10 6h1M2.5 2.5l.7.7M8.8 8.8l.7.7M9.5 2.5l-.7.7M3.2 8.8l-.7.7" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: "Analytics",
      value: "analytics",
      content: "Analytics content goes here.",
      icon: (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M1 10L4 7L7 8.5L11 3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ],
  defaultValue = "overview",
  fullWidth = false,
  iconPosition = "left",
  className,
}: Props) {
  return (
    <Tabs.Root defaultValue={defaultValue} className={cn("w-full", className)}>
      <Tabs.List className={styleConfig.list}>
        <Tabs.Indicator
          className={styleConfig.indicator}
          style={{ width: "var(--active-tab-width)", left: "var(--active-tab-left)" }}
        />
        {tabs.map((tab) => (
          <Tabs.Tab
            key={tab.value}
            value={tab.value}
            className={cn(
              styleConfig.tab,
              "inline-flex items-center gap-1.5",
              fullWidth && "flex-1 justify-center",
            )}
          >
            {tab.icon && iconPosition === "left" && <span className="shrink-0">{tab.icon}</span>}
            {tab.label}
            {tab.icon && iconPosition === "right" && <span className="shrink-0">{tab.icon}</span>}
          </Tabs.Tab>
        ))}
      </Tabs.List>
      {tabs.map((tab) => (
        <Tabs.Panel
          key={tab.value}
          value={tab.value}
          className={styleConfig.panel}
        >
          {tab.content}
        </Tabs.Panel>
      ))}
    </Tabs.Root>
  );
}

export { UITabs as default };
