import { profile } from "../data";
import WebCorner from "./WebCorner";
import HeroTerminal from "./HeroTerminal";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-32 md:pt-44 md:pb-44">
      <WebCorner corner="top-right" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
      <div>
        <p className="font-mono mb-6 text-xs tracking-[0.25em]" style={{ color: "var(--red)" }}>
          {profile.location.toUpperCase()} · FINAL YEAR CSE · {profile.graduation}
        </p>

        <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          {profile.name}
        </h1>

        <p
          className="font-display mt-4 text-xl font-medium sm:text-2xl md:text-3xl"
          style={{ color: "var(--ink-muted)" }}
        >
          {profile.title}
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: "var(--ink-muted)" }}>
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {profile.focus.map((f, i) => (
            <span
              key={f}
              className="font-mono rounded-full border px-3 py-1 text-xs"
              style={{
                borderColor: i === 0 ? "var(--red)" : "var(--line-strong)",
                color: i === 0 ? "var(--red)" : "var(--ink-muted)",
                background: i === 0 ? "var(--red-soft)" : "transparent",
              }}
            >
              {f}
            </span>
          ))}
        </div>

        <dl className="mt-10 grid max-w-md grid-cols-2 gap-x-8 gap-y-3 font-mono text-xs" style={{ color: "var(--ink-muted)" }}>
          <div>
            <dt className="mb-1" style={{ color: "var(--ink)" }}>Education</dt>
            <dd>{profile.education}</dd>
          </div>
          <div>
            <dt className="mb-1" style={{ color: "var(--ink)" }}>CGPA</dt>
            <dd>{profile.cgpa}</dd>
          </div>
        </dl>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--red)" }}
          >
            View Résumé →
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border px-6 py-3 text-sm font-medium transition-colors hover:-translate-y-0.5"
            style={{ borderColor: "var(--line-strong)" }}
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
            style={{ borderColor: "var(--line-strong)" }}
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hidden justify-self-end lg:flex">
        <HeroTerminal />
      </div>
      </div>
    </section>
  );
}
