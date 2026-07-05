/* Self-authored brand mark — a soft leaf motif in the studio's green. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      role="img"
      aria-label="ShijimiWORKs ロゴ"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="12" fill="#8caa82" />
      <path
        d="M20 9c-6 3-9 7-9 12a9 9 0 0 0 18 0c0-5-3-9-9-12Z"
        fill="#ffffff"
        opacity="0.92"
      />
      <path
        d="M20 13v14"
        stroke="#6f9065"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M20 19c2-1 3.5-2.4 4.5-4M20 23c-2-1-3.5-2.4-4.5-4"
        stroke="#6f9065"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
