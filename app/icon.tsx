import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 7,
        }}
      >
        <svg
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* dot above i */}
          <circle cx="17" cy="2" r="2.5" fill="white" />
          {/* u – left stem */}
          <rect x="0" y="5" width="4" height="13" rx="1" fill="white" />
          {/* u – right stem */}
          <rect x="8" y="5" width="4" height="13" rx="1" fill="white" />
          {/* u – bottom */}
          <rect x="0" y="14" width="12" height="4" rx="2" fill="white" />
          {/* i – stem */}
          <rect x="15" y="5" width="4" height="13" rx="1" fill="white" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
