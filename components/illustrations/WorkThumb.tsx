/* Self-authored abstract "website mockup" thumbnail, tinted per work theme.
   No third-party assets are used. */
type Theme = "green" | "beige" | "brown" | "grey" | "cream" | "sky";

const palettes: Record<Theme, { bg: string; panel: string; accent: string }> = {
  green: { bg: "#e7efe4", panel: "#ffffff", accent: "#8caa82" },
  beige: { bg: "#efe6d5", panel: "#ffffff", accent: "#b79c78" },
  brown: { bg: "#e6dccd", panel: "#ffffff", accent: "#a9865f" },
  grey: { bg: "#ececea", panel: "#ffffff", accent: "#9aa39a" },
  cream: { bg: "#f4efe5", panel: "#ffffff", accent: "#c9b489" },
  sky: { bg: "#e4ecec", panel: "#ffffff", accent: "#7fa3a0" },
};

export function WorkThumb({ theme }: { theme: Theme }) {
  const p = palettes[theme];
  return (
    <svg
      viewBox="0 0 320 200"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="320" height="200" fill={p.bg} />
      {/* browser window */}
      <rect x="40" y="34" width="240" height="132" rx="12" fill={p.panel} />
      <rect x="40" y="34" width="240" height="24" rx="12" fill={p.accent} opacity="0.18" />
      <circle cx="56" cy="46" r="4" fill={p.accent} />
      <circle cx="70" cy="46" r="4" fill={p.accent} opacity="0.6" />
      <circle cx="84" cy="46" r="4" fill={p.accent} opacity="0.35" />

      {/* hero block */}
      <rect x="56" y="72" width="90" height="10" rx="5" fill={p.accent} />
      <rect x="56" y="90" width="130" height="7" rx="3.5" fill={p.accent} opacity="0.25" />
      <rect x="56" y="104" width="110" height="7" rx="3.5" fill={p.accent} opacity="0.25" />
      <rect x="56" y="124" width="52" height="18" rx="9" fill={p.accent} />

      {/* side image */}
      <rect x="196" y="72" width="68" height="70" rx="10" fill={p.accent} opacity="0.3" />
      <circle cx="230" cy="98" r="12" fill={p.panel} />
      <path d="M206 132l16-16 12 10 14-14 6 6v14h-48v-0Z" fill={p.panel} opacity="0.85" />
    </svg>
  );
}
