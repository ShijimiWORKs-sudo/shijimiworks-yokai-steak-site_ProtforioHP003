/* Self-authored SVG illustration — a person working at a desk.
   No third-party assets are used. */
export function AboutIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 440 360"
      role="img"
      aria-label="デスクでノートパソコンに向かって作業する人のイラスト"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="aboutBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6f1e7" />
          <stop offset="1" stopColor="#eef3ea" />
        </linearGradient>
      </defs>

      <rect width="440" height="360" rx="22" fill="url(#aboutBg)" />
      <circle cx="352" cy="82" r="40" fill="#e7efe4" />
      <circle cx="86" cy="70" r="16" fill="#efe6d5" />

      {/* window with plant */}
      <rect x="40" y="46" width="96" height="120" rx="10" fill="#ffffff" />
      <rect x="40" y="46" width="96" height="120" rx="10" fill="none" stroke="#e3d7c1" strokeWidth="3" />
      <path d="M88 46v120M40 106h96" stroke="#e3d7c1" strokeWidth="3" />

      {/* desk */}
      <rect x="24" y="236" width="392" height="16" rx="8" fill="#e3d7c1" />

      {/* person */}
      <g>
        {/* chair back */}
        <rect x="120" y="150" width="120" height="90" rx="26" fill="#cbb79b" />
        {/* body */}
        <path
          d="M150 240c0-40 20-64 50-64s50 24 50 64Z"
          fill="#8caa82"
        />
        {/* head */}
        <circle cx="200" cy="150" r="30" fill="#f0d9bf" />
        <path
          d="M170 148c0-22 14-34 30-34s30 12 30 30c0-8-8-14-30-14s-30 10-30 18Z"
          fill="#5f5347"
        />
        {/* arm to desk */}
        <path
          d="M242 210c22 6 34 16 40 28"
          stroke="#7a9670"
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* laptop on desk */}
      <g>
        <rect x="250" y="200" width="120" height="36" rx="6" fill="#6f9065" />
        <rect x="258" y="207" width="104" height="22" rx="3" fill="#ffffff" />
        <rect x="240" y="234" width="140" height="8" rx="4" fill="#5d7a54" />
      </g>

      {/* coffee */}
      <g>
        <rect x="70" y="212" width="30" height="24" rx="5" fill="#ffffff" />
        <rect x="70" y="212" width="30" height="6" rx="3" fill="#b79c78" />
        <path d="M100 216h6a7 7 0 0 1 0 14h-6" fill="none" stroke="#cbb79b" strokeWidth="4" />
      </g>
    </svg>
  );
}
