import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";
import WebCorner from "./WebCorner";

export default function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
  webCorner,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
  webCorner?: boolean;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      {webCorner && <WebCorner corner="top-right" className="opacity-[0.12]" />}
      <div ref={ref} className="reveal relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-10 flex items-baseline gap-3 md:mb-14">
          <span
            className="font-mono text-xs tracking-[0.2em]"
            style={{ color: "var(--red)" }}
          >
            {eyebrow}
          </span>
          <span className="h-px flex-1" style={{ background: "var(--line)" }} />
        </div>
        <h2 className="font-display mb-10 text-3xl font-semibold tracking-tight md:mb-14 md:text-4xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
