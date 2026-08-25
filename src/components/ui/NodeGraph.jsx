// Decorative, ambient node graph: reads as a neural network (AI) or a
// distributed systems diagram (backend) depending on how you look at it —
// which is the point. Pure CSS animation, no JS loop, so it's cheap to render.

const layer1 = [
  { x: 70, y: 130 },
  { x: 70, y: 300 },
  { x: 70, y: 470 },
];

const layer2 = [
  { x: 310, y: 90 },
  { x: 310, y: 230 },
  { x: 310, y: 380 },
  { x: 310, y: 520 },
];

const layer3 = [
  { x: 540, y: 200 },
  { x: 540, y: 400 },
];

const edges = [
  [layer1[0], layer2[0]],
  [layer1[0], layer2[1]],
  [layer1[1], layer2[1]],
  [layer1[1], layer2[2]],
  [layer1[2], layer2[2]],
  [layer1[2], layer2[3]],
  [layer2[0], layer3[0]],
  [layer2[1], layer3[0]],
  [layer2[1], layer3[1]],
  [layer2[2], layer3[1]],
  [layer2[3], layer3[1]],
];

const nodes = [
  ...layer1.map((n) => ({ ...n, color: "#2F5233", r: 5 })),
  ...layer2.map((n, i) => ({ ...n, color: i % 2 === 0 ? "#8C3B2E" : "#2F5233", r: 4.5 })),
  ...layer3.map((n) => ({ ...n, color: "#8C3B2E", r: 6 })),
];

export default function NodeGraph({ className = "" }) {
  return (
    <svg
      viewBox="0 0 600 600"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <g opacity="0.55">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="url(#edgeGradient)"
            strokeWidth="1"
            strokeDasharray="4 6"
            className="animate-pulse-line"
            style={{ animationDelay: `${(i % 5) * 0.4}s` }}
          />
        ))}
      </g>
      <defs>
        <linearGradient id="edgeGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2F5233" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#8C3B2E" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {nodes.map((n, i) => (
        <g
          key={i}
          className="animate-float"
          style={{
            animationDelay: `${(i % 6) * 0.7}s`,
            animationDuration: `${6 + (i % 4)}s`,
            transformOrigin: `${n.x}px ${n.y}px`,
          }}
        >
          <circle cx={n.x} cy={n.y} r={n.r + 8} fill={n.color} opacity="0.12" />
          <circle cx={n.x} cy={n.y} r={n.r} fill={n.color} opacity="0.9" />
        </g>
      ))}
    </svg>
  );
}
