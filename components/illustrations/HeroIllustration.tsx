/* Self-authored SVG illustration — a soft freelance workspace scene.
   No third-party assets are used. */
export function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 440"
      role="img"
      aria-label="ノートパソコンとコーヒーのある、やわらかいワークスペースのイラスト"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="heroSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#eef3ea" />
          <stop offset="1" stopColor="#f6f1e7" />
        </linearGradient>
        <linearGradient id="heroScreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#f2f6ef" />
        </linearGradient>
      </defs>

      {/* soft backdrop */}
      <circle cx="260" cy="200" r="185" fill="url(#heroSky)" />
      <circle cx="410" cy="90" r="30" fill="#e7efe4" />
      <circle cx="86" cy="120" r="18" fill="#efe6d5" />

      {/* plant */}
      <g>
        <rect x="70" y="250" width="46" height="52" rx="10" fill="#cbb79b" />
        <rect x="70" y="250" width="46" height="14" rx="7" fill="#b79c78" />
        <path
          d="M93 250c-8-16-6-34 4-46-2 16 2 30 10 40"
          fill="#8caa82"
        />
        <path
          d="M93 250c10-12 24-16 38-14-12 4-22 12-28 22"
          fill="#a7c39d"
        />
        <path d="M93 252c-10-8-24-8-36-2 12 0 24 6 30 14" fill="#a7c39d" />
      </g>

      {/* desk */}
      <rect x="40" y="300" width="440" height="14" rx="7" fill="#efe6d5" />
      <rect x="40" y="300" width="440" height="6" rx="3" fill="#e3d7c1" />

      {/* laptop */}
      <g>
        <rect x="170" y="150" width="220" height="150" rx="14" fill="#6f9065" />
        <rect x="182" y="162" width="196" height="126" rx="8" fill="url(#heroScreen)" />
        {/* screen content */}
        <rect x="196" y="178" width="60" height="10" rx="5" fill="#8caa82" />
        <rect x="196" y="198" width="150" height="8" rx="4" fill="#e4e9e0" />
        <rect x="196" y="214" width="120" height="8" rx="4" fill="#e4e9e0" />
        <rect x="196" y="238" width="70" height="24" rx="12" fill="#8caa82" />
        <rect x="278" y="238" width="68" height="24" rx="12" fill="#efe6d5" />
        {/* base */}
        <path
          d="M150 300h260l14 12H136l14-12Z"
          fill="#5d7a54"
        />
        <rect x="240" y="303" width="80" height="6" rx="3" fill="#4f6a47" />
      </g>

      {/* coffee cup */}
      <g>
        <ellipse cx="430" cy="298" rx="34" ry="8" fill="#e3d7c1" />
        <path
          d="M406 266h44v16a22 22 0 0 1-22 22 22 22 0 0 1-22-22v-16Z"
          fill="#ffffff"
        />
        <path
          d="M450 270h8a10 10 0 0 1 0 20h-8"
          fill="none"
          stroke="#cbb79b"
          strokeWidth="5"
        />
        <rect x="406" y="266" width="44" height="7" rx="3.5" fill="#b79c78" />
        <path
          d="M420 256c-3-5-3-9 0-13M432 256c-3-5-3-9 0-13"
          stroke="#cbb79b"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* floating tags */}
      <g>
        <rect x="356" y="120" width="86" height="30" rx="15" fill="#ffffff" />
        <circle cx="373" cy="135" r="6" fill="#8caa82" />
        <rect x="385" y="131" width="44" height="8" rx="4" fill="#e4e9e0" />
      </g>
    </svg>
  );
}
