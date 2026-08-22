import { profile } from "../data";
import WebCorner from "./WebCorner";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t" style={{ borderColor: "var(--line)" }}>
      <WebCorner corner="bottom-left" className="opacity-80" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-sm font-semibold">{profile.name}</p>
          <p className="font-mono mt-1 text-[11px]" style={{ color: "var(--ink-muted)" }}>
            AI/ML · Software Engineering · Systems
          </p>
        </div>
        <div className="font-mono flex flex-wrap gap-x-6 gap-y-2 text-xs" style={{ color: "var(--ink-muted)" }}>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.resume} target="_blank" rel="noreferrer">Résumé</a>
        </div>
      </div>
    </footer>
  );
}
