type Corner = "top-right" | "bottom-left";

/**
 * A real radial spiderweb, quarter-cropped into the page corner — spokes
 * radiating from the corner point plus concentric connecting arcs, the way
 * an orb-weaver actually builds one. This is the site's signature visual;
 * used at full strength in the hero and quietly in the footer.
 */
export default function WebCorner({ corner = "top-right", className = "" }: { corner?: Corner; className?: string }) {
  const flip = corner === "bottom-left";

  // Spokes radiating from the corner (0,0) out to the far edge.
  const spokeAngles = [8, 22, 36, 50, 64, 78];
  const R = 640;
  const spokes = spokeAngles.map((deg) => {
    const rad = (deg * Math.PI) / 180;
    const x = R * Math.cos(rad);
    const y = R * Math.sin(rad);
    return `M0 0 L${x.toFixed(1)} ${y.toFixed(1)}`;
  });

  // Concentric connecting arcs between the spokes (quarter-circle bands).
  const arcRadii = [90, 170, 260, 360, 470];
  const arcs = arcRadii.map((r) => {
    const a0 = (spokeAngles[0] * Math.PI) / 180;
    const a1 = (spokeAngles[spokeAngles.length - 1] * Math.PI) / 180;
    const x0 = r * Math.cos(a0);
    const y0 = r * Math.sin(a0);
    const x1 = r * Math.cos(a1);
    const y1 = r * Math.sin(a1);
    return `M${x0.toFixed(1)} ${y0.toFixed(1)} A${r} ${r} 0 0 1 ${x1.toFixed(1)} ${y1.toFixed(1)}`;
  });

  return (
    <svg
      viewBox="0 0 640 640"
      className={className}
      style={{
        position: "absolute",
        width: "min(58vw, 560px)",
        height: "min(58vw, 560px)",
        top: flip ? "auto" : "-4%",
        bottom: flip ? "-6%" : "auto",
        right: flip ? "auto" : "-4%",
        left: flip ? "-6%" : "auto",
        transform: flip ? "rotate(180deg)" : "none",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    >
      <g strokeWidth="1" fill="none" opacity="0.8">
        {spokes.map((d, i) => (
          <path key={`s${i}`} d={d} stroke={i % 3 === 0 ? "var(--red)" : "var(--line-strong)"} opacity={i % 3 === 0 ? 0.55 : 0.7} />
        ))}
        {arcs.map((d, i) => (
          <path key={`a${i}`} d={d} stroke={i === 2 ? "var(--blue)" : "var(--line)"} opacity={i === 2 ? 0.5 : 0.65} />
        ))}
      </g>
      <circle cx="0" cy="0" r="4" fill="var(--red)" opacity="0.8" />
    </svg>
  );
}
