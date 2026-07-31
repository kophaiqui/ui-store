"use client";

import { UISidebar } from "@/designs/navigation/sidebar/Component";
import { UICard } from "@/designs/data-display/card/Component";
import { UITabs } from "@/designs/data-display/tabs/Component";
import { UIDataTable } from "@/designs/data-display/data-table/Component";
import { UIDialog } from "@/designs/feedback/dialog/Component";

const STATS = [
  { label: "Revenue", value: "$48,290" },
  { label: "Active users", value: "1,204" },
  { label: "Open tickets", value: "12" },
];

const ROWS = [
  { name: "Alice Kim", role: "Designer", status: "Active" },
  { name: "Bob Chen", role: "Engineer", status: "Active" },
  { name: "Carol Lane", role: "Manager", status: "Inactive" },
];

export function DashboardTemplate() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <div className="w-56 shrink-0">
        <UISidebar />
      </div>

      <div className="flex-1 overflow-auto p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">Overview</h1>
            <p className="text-sm text-muted-foreground">Here’s what’s happening today.</p>
          </div>
          <UIDialog trigger="New item" title="Create item" description="Fill in the details below to add a new item." />
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {STATS.map((s) => (
            <UICard key={s.label}>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{s.label}</p>
              <p className="mt-1 text-2xl font-bold text-foreground">{s.value}</p>
            </UICard>
          ))}
        </div>

        <UITabs
          className="mb-6"
          tabs={[
            { label: "Team", value: "team", content: <TeamTable /> },
            { label: "Activity", value: "activity", content: "No recent activity." },
          ]}
        />
      </div>
    </div>
  );
}

function TeamTable() {
  return (
    <UIDataTable
      columns={[
        { key: "name", header: "Name" },
        { key: "role", header: "Role" },
        { key: "status", header: "Status" },
      ]}
      data={ROWS}
      pagination={false}
    />
  );
}

export { DashboardTemplate as default };
