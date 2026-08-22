import { useState } from "react";
import { leadership, type LeadershipEntry } from "../data";
import Section from "./Section";

function Tile({ entry }: { entry: LeadershipEntry }) {
  const [errored, setErrored] = useState(false);
  const showImage = entry.photo && !errored;

  return (
    <div
      className="flex h-20 w-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl md:h-24 md:w-24"
      style={{ border: "1px solid var(--line)", background: entry.isLogo ? "#fff" : "transparent" }}
    >
      {showImage ? (
        <img
          src={entry.photo}
          alt={entry.title}
          loading="lazy"
          onError={() => setErrored(true)}
          className={entry.isLogo ? "h-full w-full object-contain p-2" : "h-full w-full object-cover"}
        />
      ) : (
        <span className="font-mono text-xs" style={{ color: "var(--ink-muted)" }}>
          {entry.title
            .split(" ")
            .map((w) => w[0])
            .slice(0, 3)
            .join("")}
        </span>
      )}
    </div>
  );
}

export default function Leadership() {
  return (
    <Section id="leadership" eyebrow="LEADERSHIP" title="Outside the codebase" webCorner>
      <div className="grid gap-5 sm:grid-cols-2">
        {leadership.map((entry) => (
          <article
            key={entry.title}
            className="flex gap-4 rounded-2xl border p-5 md:p-6"
            style={{ borderColor: "var(--line)", background: "var(--bg-raised)" }}
          >
            <Tile entry={entry} />
            <div>
              <h3 className="font-display text-base font-semibold leading-snug md:text-lg">{entry.title}</h3>
              <p className="font-mono mt-1 text-[11px]" style={{ color: "var(--blue)" }}>
                {entry.org}
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                {entry.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
