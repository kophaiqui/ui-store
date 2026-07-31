type Props = {
  children: React.ReactNode;
  scale?: number;
  frameWidth?: number;
  frameHeight?: number;
  interactive?: boolean;
};

/** Renders the real template component at full size, scaled down to fit — a live thumbnail, not a screenshot. */
export function TemplateFrame({ children, scale = 0.32, frameWidth = 1280, frameHeight = 900, interactive = false }: Props) {
  return (
    <div
      className="relative overflow-hidden rounded-xl border border-border bg-background"
      style={{ height: frameHeight * scale }}
    >
      <div
        className={interactive ? undefined : "pointer-events-none"}
        style={{ width: frameWidth, transform: `scale(${scale})`, transformOrigin: "top left" }}
      >
        {children}
      </div>
    </div>
  );
}
