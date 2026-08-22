/**
 * A black widow spider silhouette, dangling from a single thread in the
 * corner web. Purely decorative — no click interaction, gentle idle sway.
 */
export default function CornerFigure({ className = "" }: { className?: string }) {
  return (
    <div
      className={`corner-figure-swing ${className}`}
      style={{
        position: "absolute",
        top: "6%",
        right: "9%",
        width: "min(14vw, 150px)",
        pointerEvents: "none",
        zIndex: 1,
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 240 260" style={{ width: "100%", height: "auto", overflow: "visible" }}>
        <line x1="120" y1="-30" x2="120" y2="70" stroke="var(--line-strong)" strokeWidth="1" opacity="0.7" />

        <g transform="translate(120 110)">
          {/* legs, thin curved strokes, four per side */}
          <path d="M-14 -6 Q -70 -30 -100 -70" fill="none" stroke="#0d0f14" strokeWidth="3" strokeLinecap="round" />
          <path d="M-16 8 Q -80 6 -112 -10" fill="none" stroke="#0d0f14" strokeWidth="3" strokeLinecap="round" />
          <path d="M-14 24 Q -74 44 -100 78" fill="none" stroke="#0d0f14" strokeWidth="3" strokeLinecap="round" />
          <path d="M-10 40 Q -56 66 -70 104" fill="none" stroke="#0d0f14" strokeWidth="3" strokeLinecap="round" />

          <path d="M14 -6 Q 70 -30 100 -70" fill="none" stroke="#0d0f14" strokeWidth="3" strokeLinecap="round" />
          <path d="M16 8 Q 80 6 112 -10" fill="none" stroke="#0d0f14" strokeWidth="3" strokeLinecap="round" />
          <path d="M14 24 Q 74 44 100 78" fill="none" stroke="#0d0f14" strokeWidth="3" strokeLinecap="round" />
          <path d="M10 40 Q 56 66 70 104" fill="none" stroke="#0d0f14" strokeWidth="3" strokeLinecap="round" />

          {/* body: abdomen + smaller cephalothorax */}
          <ellipse cx="0" cy="22" rx="27" ry="36" fill="#0d0f14" />
          <ellipse cx="0" cy="-28" rx="15" ry="13" fill="#0d0f14" />
        </g>
      </svg>
      <style>{`
        .corner-figure-swing {
          transform-origin: 50% -30px;
          animation: cornerFigureSway 6.5s ease-in-out infinite;
        }
        @keyframes cornerFigureSway {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .corner-figure-swing { animation: none; }
        }
      `}</style>
    </div>
  );
}
