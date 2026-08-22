import { skillGroups } from "../data";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="SKILLS" title="What I work with" webCorner>
      <div className="flex flex-col gap-8">
        {skillGroups.map((group, i) => (
          <div key={group.label}>
            <h3
              className="font-mono mb-3 text-xs font-bold tracking-[0.15em]"
              style={{ color: "var(--ink)" }}
            >
              {group.label.toUpperCase()}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono rounded-full border-2 px-3 py-1 text-[11px] font-semibold"
                  style={{ borderColor: "var(--line-strong)", color: "var(--ink)" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
