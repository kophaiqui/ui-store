export function Logo({ size = 28 }: { size?: number }) {
  const scale = size / 28;
  return (
    <svg
      width={size}
      height={Math.round(25 * scale)}
      viewBox="0 0 28 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="That One UI logo"
    >
      {/* dot above i */}
      <circle cx="21.5" cy="2.5" r="3" fill="currentColor" />
      {/* u – left stem */}
      <rect x="0" y="6" width="5" height="16" rx="1.5" fill="currentColor" />
      {/* u – right stem */}
      <rect x="10" y="6" width="5" height="16" rx="1.5" fill="currentColor" />
      {/* u – bottom curve */}
      <rect x="0" y="17" width="15" height="5" rx="2.5" fill="currentColor" />
      {/* i – stem */}
      <rect x="19" y="6" width="5" height="16" rx="1.5" fill="currentColor" />
    </svg>
  );
}
