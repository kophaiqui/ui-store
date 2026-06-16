import type { ReactNode } from "react";

type Props = {
  sidebar: ReactNode;
  children: ReactNode;
  toc?: ReactNode;
};

export function SectionLayout({ sidebar, children, toc }: Props) {
  return (
    <div className="mx-auto flex w-full max-w-[1400px]">
      {/* Left sidebar */}
      <aside className="sticky top-[57px] hidden h-[calc(100vh-57px)] w-60 shrink-0 overflow-y-auto border-r border-border/60 py-6 lg:block">
        {sidebar}
      </aside>

      {/* Main content */}
      <div className="min-w-0 flex-1">
        {children}
      </div>

      {/* Right TOC */}
      {toc && (
        <aside className="sticky top-[57px] hidden h-[calc(100vh-57px)] w-52 shrink-0 overflow-y-auto border-l border-border/60 py-6 xl:block">
          {toc}
        </aside>
      )}
    </div>
  );
}
