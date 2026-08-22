import type { Project } from "../data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="flex h-full flex-col rounded-2xl border p-6 md:p-7"
      style={{ borderColor: "var(--line)", background: "var(--bg-raised)" }}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="font-mono text-xs" style={{ color: "var(--red)" }}>
          {project.index}
          {project.year ? ` · ${project.year}` : ""}
        </span>
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="font-mono flex-shrink-0 rounded-full border px-3 py-1 text-xs transition-colors"
            style={{ borderColor: "var(--line-strong)", color: "var(--ink-muted)" }}
          >
            GitHub ↗
          </a>
        ) : (
          <span
            className="font-mono flex-shrink-0 rounded-full border px-3 py-1 text-xs"
            style={{ borderColor: "var(--line)", color: "var(--ink-muted)" }}
          >
            {project.status ?? "No public repo"}
          </span>
        )}
      </div>

      <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">{project.title}</h3>

      <p className="font-mono mt-2 text-[11px] leading-relaxed tracking-wide" style={{ color: "var(--blue)" }}>
        {project.stack.join(" · ")}
      </p>

      <p className="mt-4 flex-1 text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
        {project.description}
      </p>
    </article>
  );
}
