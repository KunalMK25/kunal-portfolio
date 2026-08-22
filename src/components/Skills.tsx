import { skillGroups } from "../data";
import Section from "./Section";

// Map category labels (lowercase) to sub-descriptions, tags, priority, and colors.
const CATEGORY_METADATA: Record<
  string,
  { desc: string; tag: string; isPrimary: boolean; accent: "red" | "blue" | "neutral" }
> = {
  "ai / machine learning": {
    desc: "Intelligent Systems & Models",
    tag: "AI.ML",
    isPrimary: true,
    accent: "red",
  },
  "programming & cs fundamentals": {
    desc: "Core Engineering & CS",
    tag: "CS.CORE",
    isPrimary: true,
    accent: "red",
  },
  "backend & apis": {
    desc: "Application Infrastructure",
    tag: "SYS.API",
    isPrimary: true,
    accent: "blue",
  },
  "data & geospatial": {
    desc: "Spatial Analysis & Pipelines",
    tag: "GEO.DATA",
    isPrimary: true,
    accent: "blue",
  },
  "systems": {
    desc: "Low-level & Desktop Platforms",
    tag: "SYS.PLAT",
    isPrimary: false,
    accent: "neutral",
  },
  "blockchain": {
    desc: "Smart Contracts & Protocols",
    tag: "DLT.SC",
    isPrimary: false,
    accent: "neutral",
  },
  "cloud & devops": {
    desc: "Cloud Systems & CI/CD Pipelines",
    tag: "OPS.CLOUD",
    isPrimary: false,
    accent: "neutral",
  },
  "frontend & full stack": {
    desc: "Client Interfaces & Web Tech",
    tag: "FE.STACK",
    isPrimary: false,
    accent: "neutral",
  },
};

// Set of primary skills (lowercase) for fast lookup.
const PRIMARY_SKILLS = new Set([
  // AI/ML
  "llms",
  "langchain",
  "rag",
  "multi-agent systems",
  "prompt engineering",
  "hugging face",
  "scikit-learn",
  "lightgbm",
  "random forest",
  "svm",
  // Programming/CS
  "python",
  "java",
  "c++",
  "c",
  "sql",
  "data structures & algorithms",
  "object-oriented programming",
  "system design",
  "dbms",
  "operating systems",
  "computer networks",
  // Backend
  "rest apis",
  "fastapi",
  "streamlit",
  "jwt authentication",
  // Data/Geospatial
  "geopandas",
  "rasterio",
  "folium",
  "nasa srtm",
  // Systems
  "c#",
  ".net 8",
  "wpf",
  "skiasharp",
  "clean architecture",
  // Blockchain
  "stellar",
  "soroban",
  "smart contracts",
  "ipfs",
  "sha-256",
  "on-chain data anchoring",
  // Cloud/DevOps
  "google cloud",
  "firebase",
  "git",
  "github",
  "github actions (ci/cd)",
  "vercel",
  "render",
  // Frontend/Full Stack
  "html5",
  "css3",
  "tailwindcss",
  "bootstrap",
  "react.js",
  "node.js",
  "express.js",
  "mongodb",
  "mongoose",
]);

export default function Skills() {
  return (
    <Section id="skills" eyebrow="SKILLS" title="What I work with" webCorner>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group, i) => {
          const key = group.label.toLowerCase();
          const meta = CATEGORY_METADATA[key] || {
            desc: "Technical Stack",
            tag: "TECH",
            isPrimary: false,
            accent: "neutral",
          };
          const indexStr = String(i + 1).padStart(2, "0");

          // Styling variables based on category priority
          let cardBorderClass = "border-[var(--line)]";
          let accentBorderClass = "";
          let hoverGlowClass = "";

          if (meta.isPrimary) {
            cardBorderClass = "border-[var(--line-strong)]";
            if (meta.accent === "red") {
              accentBorderClass = "border-l-2 border-l-[var(--red)]";
              hoverGlowClass = "hover:shadow-[0_4px_24px_rgba(214,48,63,0.06)]";
            } else if (meta.accent === "blue") {
              accentBorderClass = "border-l-2 border-l-[var(--blue)]";
              hoverGlowClass = "hover:shadow-[0_4px_24px_rgba(46,90,172,0.06)]";
            }
          }

          return (
            <div
              key={group.label}
              className={`flex flex-col rounded-xl border p-5 md:p-6 bg-[var(--bg-raised)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--line-strong)] ${accentBorderClass} ${cardBorderClass} ${hoverGlowClass}`}
            >
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-baseline gap-3">
                  <span
                    className="font-mono text-xs font-bold"
                    style={{
                      color:
                        meta.accent === "red"
                          ? "var(--red)"
                          : meta.accent === "blue"
                          ? "var(--blue)"
                          : "var(--ink-muted)",
                    }}
                  >
                    {indexStr}
                  </span>
                  <div className="flex flex-col">
                    <h3 className="font-display text-sm font-bold tracking-wider text-[var(--ink)]">
                      {group.label.toUpperCase()}
                    </h3>
                    <span className="font-mono text-[10px] tracking-wide mt-0.5 text-[var(--ink-muted)]">
                      {meta.desc}
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[9px] px-1.5 py-0.5 rounded border border-[var(--line)] text-[var(--ink-muted)] bg-[var(--bg)]/50 select-none">
                  [{meta.tag}]
                </span>
              </div>

              {/* Technical Divider */}
              <div className="h-px w-full my-3" style={{ background: "var(--line)" }} />

              {/* Skill Chips */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {group.skills.map((skill) => {
                  const isSkillPrimary = PRIMARY_SKILLS.has(skill.toLowerCase());
                  return (
                    <span
                      key={skill}
                      className={`font-mono px-2.5 py-1 text-[11px] transition-all duration-200 cursor-default rounded select-none ${
                        isSkillPrimary
                          ? "font-semibold border text-[var(--ink)] bg-[var(--bg)] hover:bg-[var(--bg-raised)] hover:text-white hover:border-[var(--ink)] hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(255,255,255,0.06)]"
                          : "text-[var(--ink-muted)] border bg-transparent hover:text-[var(--ink)] hover:border-[var(--line-strong)] hover:-translate-y-0.5"
                      }`}
                      style={
                        isSkillPrimary
                          ? {
                              borderColor: "var(--line-strong)",
                            }
                          : {
                              borderColor: "var(--line)",
                            }
                      }
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
