import { ImageResponse } from "next/og";

export const alt = "That One UI — the UI library you keep coming back to";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded fallback OG image for every route. Individual routes may override
// by adding their own opengraph-image file deeper in the tree.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#09090b",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "8px",
              background: "#10b981",
            }}
          />
          <span style={{ fontSize: "26px", color: "#a1a1aa", letterSpacing: "0.02em" }}>
            that-one-ui.vercel.app
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <span style={{ fontSize: "108px", fontWeight: 700, lineHeight: 1.02 }}>
            That One UI
          </span>
          <span style={{ fontSize: "40px", color: "#d4d4d8", lineHeight: 1.25, maxWidth: "900px" }}>
            One accessible component, many complete styles. Copy the source or download the file.
          </span>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          {["#10b981", "#8b5cf6", "#3b82f6", "#f59e0b", "#ef4444"].map((c) => (
            <div
              key={c}
              style={{ width: "72px", height: "10px", borderRadius: "9999px", background: c }}
            />
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
