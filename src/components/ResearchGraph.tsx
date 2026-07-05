import { researchNodes } from "@/data/profile";

export function ResearchGraph() {
  const orbitLines = [
    { rotate: -18, rx: 205, ry: 74 },
    { rotate: 24, rx: 205, ry: 74 },
    { rotate: 62, rx: 192, ry: 70 },
    { rotate: -58, rx: 192, ry: 70 }
  ];
  const particles = [
    { cx: 136, cy: 88, r: 3 },
    { cx: 216, cy: 58, r: 1.8 },
    { cx: 310, cy: 82, r: 2.2 },
    { cx: 380, cy: 146, r: 3.4 },
    { cx: 352, cy: 270, r: 2 },
    { cx: 254, cy: 326, r: 3 },
    { cx: 160, cy: 300, r: 1.8 },
    { cx: 92, cy: 220, r: 2.8 },
    { cx: 118, cy: 142, r: 1.6 }
  ];

  return (
    <div className="soft-card relative h-full min-h-[300px] overflow-hidden rounded-3xl p-6">
      <svg
        className="absolute inset-0 h-full w-full opacity-95"
        viewBox="0 0 480 380"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="research-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6C7CFF" stopOpacity="0.45" />
            <stop offset="48%" stopColor="#9C7CFF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#9C7CFF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="research-orbit" x1="48" y1="72" x2="432" y2="308">
            <stop stopColor="#6C7CFF" stopOpacity="0.1" />
            <stop offset="0.5" stopColor="#9C7CFF" stopOpacity="0.34" />
            <stop offset="1" stopColor="#6C7CFF" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        <circle cx="240" cy="190" r="158" stroke="#6C7CFF" strokeOpacity="0.08" strokeWidth="1.2" />
        <circle cx="240" cy="190" r="106" stroke="#6C7CFF" strokeOpacity="0.08" strokeWidth="1" />
        <circle cx="240" cy="190" r="78" fill="url(#research-core)" />
        {orbitLines.map((line) => (
          <ellipse
            key={line.rotate}
            cx="240"
            cy="190"
            rx={line.rx}
            ry={line.ry}
            stroke="url(#research-orbit)"
            strokeWidth="1.4"
            transform={`rotate(${line.rotate} 240 190)`}
          />
        ))}
        <path
          d="M96 214 C150 134 203 268 242 190 C287 98 328 254 386 142"
          stroke="#6C7CFF"
          strokeOpacity="0.12"
          strokeWidth="1.2"
        />
        <path
          d="M108 142 C172 184 204 96 264 140 C322 182 314 248 398 218"
          stroke="#9C7CFF"
          strokeOpacity="0.14"
          strokeWidth="1"
        />
        {particles.map((particle, index) => (
          <circle key={`${particle.cx}-${particle.cy}`} cx={particle.cx} cy={particle.cy} r={particle.r} fill={index % 2 ? "#9C7CFF" : "#6C7CFF"} opacity="0.55" />
        ))}
      </svg>
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple/20 blur-2xl" />
      <div className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-br from-blue to-purple text-white shadow-glow ring-8 ring-blue/10">
        <span className="text-2xl">∿</span>
      </div>
      {researchNodes.map((node, index) => {
        const angle = (Math.PI * 2 * index) / researchNodes.length;
        const x = 50 + Math.cos(angle - Math.PI / 2) * 37;
        const y = 50 + Math.sin(angle - Math.PI / 2) * 36;
        return (
          <div
            key={node.en}
            className="absolute z-10 max-w-[132px] text-center leading-5"
            style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
          >
            <span className="mx-auto mb-1.5 grid h-6 w-6 place-items-center rounded-full border border-blue/15 bg-white/80 shadow-soft">
              <span className="block h-3 w-3 rounded-full bg-blue shadow-glow" />
            </span>
            <span className="block text-[12px] font-medium text-[#1C1C1E]">{node.en}</span>
            <span className="block text-[11px] text-muted">{node.zh}</span>
          </div>
        );
      })}
    </div>
  );
}
