import { useEffect, useRef, useState } from "react";

type Line = { prompt?: string; text: string; color?: "ink" | "red" | "blue" | "muted" };

const LINES: Line[] = [
  { prompt: "~$", text: "whoami" },
  { text: "kunal_mk — AI/ML & Software Engineer", color: "ink" },
  { prompt: "~$", text: "web.spin(--corner top-right)" },
  { text: "spinning web... done", color: "blue" },
  { prompt: "~$", text: "run tests/network_zonation.cpp" },
  { text: "12/12 hidden tests passed ✓", color: "red" },
  { prompt: "~$", text: "status" },
  { text: "building intelligent systems...", color: "muted" },
];

const TYPE_MS = 28;
const LINE_PAUSE_MS = 420;
const LOOP_PAUSE_MS = 2200;

export default function HeroTerminal({ className = "" }: { className?: string }) {
  const [rendered, setRendered] = useState<string[]>([]);
  const [cursorOn, setCursorOn] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    let lineIndex = 0;
    let charIndex = 0;
    let current: string[] = [];

    const typeStep = () => {
      if (cancelled) return;
      const line = LINES[lineIndex];
      const full = (line.prompt ? line.prompt + " " : "") + line.text;

      if (charIndex <= full.length) {
        const next = [...current];
        next[lineIndex] = full.slice(0, charIndex);
        setRendered(next);
        charIndex++;
        timeoutRef.current = window.setTimeout(typeStep, TYPE_MS);
      } else {
        current = [...current];
        current[lineIndex] = full;
        lineIndex++;
        charIndex = 0;
        if (lineIndex < LINES.length) {
          timeoutRef.current = window.setTimeout(typeStep, LINE_PAUSE_MS);
        } else {
          timeoutRef.current = window.setTimeout(() => {
            if (cancelled) return;
            current = [];
            lineIndex = 0;
            charIndex = 0;
            setRendered([]);
            timeoutRef.current = window.setTimeout(typeStep, TYPE_MS);
          }, LOOP_PAUSE_MS);
        }
      }
    };

    timeoutRef.current = window.setTimeout(typeStep, 500);
    return () => {
      cancelled = true;
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => setCursorOn((c) => !c), 500);
    return () => window.clearInterval(id);
  }, []);

  const colorFor = (line: Line) => {
    switch (line.color) {
      case "red":
        return "var(--red)";
      case "blue":
        return "var(--blue)";
      case "muted":
        return "var(--ink-muted)";
      default:
        return "var(--ink)";
    }
  };

  return (
    <div
      className={className}
      style={{
        width: "min(92vw, 380px)",
        borderRadius: "12px",
        border: "1px solid var(--line-strong)",
        background: "color-mix(in srgb, var(--bg-raised) 92%, transparent)",
        boxShadow: "0 20px 60px -20px rgba(0,0,0,0.5)",
        overflow: "hidden",
      }}
    >
      <div
        className="flex items-center gap-1.5 px-4 py-2.5"
        style={{ borderBottom: "1px solid var(--line)" }}
      >
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--red)", opacity: 0.7 }} />
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--blue)", opacity: 0.7 }} />
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--ink-muted)", opacity: 0.5 }} />
        <span className="font-mono ml-2 text-[11px]" style={{ color: "var(--ink-muted)" }}>
          web-shell
        </span>
      </div>
      <div className="font-mono px-4 py-4 text-[12.5px] leading-relaxed" style={{ minHeight: 190 }}>
        {LINES.map((line, i) => {
          const text = rendered[i];
          if (text === undefined) return null;
          const isLast = i === rendered.length - 1 && rendered.length <= LINES.length;
          const promptLen = line.prompt ? line.prompt.length + 1 : 0;
          return (
            <div key={i} style={{ color: colorFor(line), whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
              {line.prompt && (
                <span style={{ color: "var(--blue)", opacity: 0.9 }}>{text.slice(0, promptLen)}</span>
              )}
              {text.slice(promptLen)}
              {isLast && (
                <span
                  style={{
                    display: "inline-block",
                    width: 7,
                    height: 13,
                    marginLeft: 2,
                    background: "var(--red)",
                    opacity: cursorOn ? 0.9 : 0,
                    verticalAlign: "text-bottom",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
