import { achievements } from "../data";
import Section from "./Section";

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="ALONG THE WAY" title="Hackathons & Achievements">
      <ul className="flex flex-col" style={{ borderTop: "1px solid var(--line)" }}>
        {achievements.map((a) => (
          <li
            key={a.title}
            className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-8"
            style={{ borderBottom: "1px solid var(--line)" }}
          >
            <h3
              className="font-display flex-shrink-0 text-lg font-semibold sm:w-64"
              style={{ color: "var(--red)" }}
            >
              {a.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
              {a.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
