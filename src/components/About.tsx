import Section from "./Section";

export default function About() {
  return (
    <Section id="about" eyebrow="ABOUT" title="A quick intro">
      <div className="flex max-w-2xl flex-col gap-4 text-base leading-relaxed sm:text-lg" style={{ color: "var(--ink-muted)" }}>
        <p>
          I'm a final-year Computer Science undergraduate focused on AI-integrated systems,
          machine learning pipelines, and backend engineering. Most of what I build starts as a
          data or modeling problem — a geospatial risk model, a multi-agent audit pipeline, a
          routing/optimization engine — and ends as something deployed and usable.
        </p>
        <p>
          My experience spans geospatial ML (Random Forest models on satellite elevation data),
          LLM-based multi-agent systems, blockchain-backed security tooling, and systems-level
          desktop programming in C#/.NET. I'm comfortable moving between a Jupyter notebook, a
          FastAPI backend, and a rendering pipeline in the same week.
        </p>
        <p>
          Alongside coursework, I lead technical communities at PESCE Mandya — running AI/Cloud
          workshops, coordinating placement drives, and organizing DSA and innovation events. I'd
          rather ship something small and working than talk about something large and
          hypothetical.
        </p>
      </div>
    </Section>
  );
}
