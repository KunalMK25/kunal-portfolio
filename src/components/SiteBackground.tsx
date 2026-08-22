// Deterministic pseudo-random so the skyline is stable across renders.
import CornerFigure from "./CornerFigure";

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

const rand = seededRandom(1337);

const CANVAS_H = 1000;
const BUILDING_COUNT = 46;

type Building = { x: number; width: number; height: number; hasCap: boolean; windows: { x: number; y: number; on: number }[] };

function buildSkyline(): { buildings: Building[]; totalWidth: number } {
  let cursor = 0;
  const buildings: Building[] = [];
  for (let i = 0; i < BUILDING_COUNT; i++) {
    const width = 55 + rand() * 90;
    const height = 260 + rand() * 660;
    const gap = 6 + rand() * 16;
    const x = cursor;
    cursor += width + gap;

    const cols = Math.max(2, Math.floor(width / 16));
    const rows = Math.max(3, Math.floor(height / 22));
    const windows: { x: number; y: number; on: number }[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (rand() < 0.4) {
          windows.push({
            x: c * (width / cols) + width / cols / 2,
            y: r * (height / rows) + height / rows / 2,
            on: rand() < 0.5 ? 1 : 2, // 1 = red tint, 2 = blue tint
          });
        }
      }
    }

    buildings.push({ x, width, height, hasCap: rand() < 0.3, windows });
  }
  return { buildings, totalWidth: cursor };
}

const { buildings, totalWidth } = buildSkyline();

const stars = Array.from({ length: 60 }).map(() => ({
  left: rand() * 100,
  top: rand() * 55,
  size: 1 + rand() * 1.6,
  opacity: 0.3 + rand() * 0.6,
}));

export default function SiteBackground() {
  return (
    <div aria-hidden="true" className="site-bg">
      <div className="site-bg-sky" />
      <div className="site-bg-stars">
        {stars.map((s, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size,
              height: s.size,
              borderRadius: "50%",
              background: "var(--ink)",
              opacity: s.opacity,
            }}
          />
        ))}
      </div>

      <svg
        viewBox={`0 0 ${totalWidth} ${CANVAS_H}`}
        preserveAspectRatio="xMidYMax slice"
        className="site-bg-skyline"
      >
        {buildings.map((b, i) => (
          <g key={i}>
            <rect
              x={b.x}
              y={CANVAS_H - b.height}
              width={b.width}
              height={b.height}
              fill="var(--bg-raised)"
              stroke="var(--line)"
              strokeWidth="1.5"
            />
            {b.hasCap && (
              <line
                x1={b.x + b.width / 2}
                y1={CANVAS_H - b.height}
                x2={b.x + b.width / 2}
                y2={CANVAS_H - b.height - 46}
                stroke="var(--line-strong)"
                strokeWidth="2"
              />
            )}
            {b.windows.map((w, wi) => (
              <rect
                key={wi}
                x={b.x + w.x - 3}
                y={CANVAS_H - b.height + w.y - 3}
                width="6"
                height="8"
                fill={w.on === 1 ? "var(--red)" : "var(--blue)"}
                className="site-bg-window"
              />
            ))}
          </g>
        ))}
      </svg>

      <svg viewBox="0 0 1600 1000" preserveAspectRatio="none" className="site-bg-strands">
        <path d="M120 140 Q 500 40 900 220 T 1550 300" stroke="var(--red)" strokeWidth="1.5" fill="none" opacity="0.35" />
        <path d="M60 380 Q 480 260 980 430 T 1520 520" stroke="var(--blue)" strokeWidth="1.5" fill="none" opacity="0.3" />
      </svg>

      <CornerFigure />
    </div>
  );
}
