import { selectedProjects, additionalProjects } from "../data";
import Section from "./Section";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="PROJECTS" title="Systems I've built end to end">
      <div className="grid gap-5 sm:grid-cols-2">
        {selectedProjects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>

      <div className="mt-20">
        <p className="font-mono mb-6 text-xs tracking-[0.2em]" style={{ color: "var(--ink-muted)" }}>
          ADDITIONAL PROJECTS
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {additionalProjects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </Section>
  );
}
