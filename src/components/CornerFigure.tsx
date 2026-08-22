/**
 * A real Spider-Man visual hanging upside-down from a thin web line.
 * It is positioned in the upper right viewport as an Easter egg.
 */
export default function CornerFigure({ className = "" }: { className?: string }) {
  return (
    <div
      className={`spiderman-container ${className}`}
      aria-hidden="true"
    >
      {/* Thin web line */}
      <div className="spiderman-web" />

      {/* Spider-Man character image */}
      <img
        src="/spiderman.png"
        alt="Spider-Man Easter Egg"
        className="spiderman-img"
      />

      <style>{`
        .spiderman-container {
          position: absolute;
          top: 0;
          right: 12%;
          width: min(15vw, 130px);
          pointer-events: none;
          z-index: 5;
          transform-origin: top center;
          animation: spidermanDescend 4s cubic-bezier(0.25, 1, 0.5, 1) forwards,
                     spidermanSway 10s ease-in-out infinite 4s;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .spiderman-web {
          width: 1px;
          height: min(15vh, 180px);
          background: rgba(255, 255, 255, 0.22);
          box-shadow: 0 0 3px rgba(255, 255, 255, 0.1);
        }

        .spiderman-img {
          width: 100%;
          height: auto;
          margin-top: -12px; /* Pull up to join cleanly with the web line */
          filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.45));
        }

        @keyframes spidermanDescend {
          0% {
            transform: translateY(-380px) rotate(-8deg);
            opacity: 0;
          }
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes spidermanSway {
          0%, 100% {
            transform: rotate(-1.8deg);
          }
          50% {
            transform: rotate(1.8deg);
          }
        }

        @media (max-width: 640px) {
          .spiderman-container {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .spiderman-container {
            animation: none !important;
            transform: translateY(0) rotate(0deg) !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}
