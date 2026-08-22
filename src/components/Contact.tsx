import { useState } from "react";
import { profile } from "../data";
import Section from "./Section";

const socials = [
  { label: "GitHub", value: "github.com/KunalMK25", href: profile.github },
  { label: "LinkedIn", value: "linkedin.com/in/kunal-m-k", href: profile.linkedin },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Résumé", value: "View Résumé", href: profile.resume },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "your site"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ""}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <Section id="contact" eyebrow="LET'S TALK" title="Contact">
      <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
        <form
          onSubmit={handleSubmit}
          className="relative overflow-hidden rounded-2xl border p-6 md:p-8"
          style={{ borderColor: "var(--line)", background: "var(--bg-raised)" }}
        >
          <span
            aria-hidden="true"
            className="absolute right-6 top-6 h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--red)" }}
          />
          <span
            aria-hidden="true"
            className="absolute right-12 top-12 h-1 w-1 rounded-full"
            style={{ background: "var(--blue)" }}
          />

          <p className="mb-6 max-w-md text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
            A role, a project, or just a hello — this opens straight in your email client.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your name"
              required
              className="rounded-xl border px-4 py-3 text-sm outline-none"
              style={{ borderColor: "var(--line-strong)", background: "var(--bg)", color: "var(--ink)" }}
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your email"
              required
              className="rounded-xl border px-4 py-3 text-sm outline-none"
              style={{ borderColor: "var(--line-strong)", background: "var(--bg)", color: "var(--ink)" }}
            />
          </div>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What are we building?"
            required
            rows={5}
            className="mt-4 w-full resize-y rounded-xl border px-4 py-3 text-sm outline-none"
            style={{ borderColor: "var(--line-strong)", background: "var(--bg)", color: "var(--ink)" }}
          />

          <button
            type="submit"
            className="mt-5 rounded-full px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--red)" }}
          >
            Send message →
          </button>
        </form>

        <div
          className="flex flex-col justify-between rounded-2xl border p-6 md:p-8"
          style={{ borderColor: "var(--line)", background: "var(--bg-raised)" }}
        >
          <ul className="flex flex-col gap-4">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group flex items-center justify-between border-b pb-3 text-sm"
                  style={{ borderColor: "var(--line)" }}
                >
                  <span className="font-mono text-xs tracking-[0.12em]" style={{ color: "var(--ink-muted)" }}>
                    {s.label.toUpperCase()}
                  </span>
                  <span className="font-display font-medium transition-transform group-hover:translate-x-1">
                    {s.value} →
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="font-mono mt-8 text-[11px] tracking-[0.15em]" style={{ color: "var(--ink-muted)" }}>
            {profile.location.split(",")[0].toUpperCase()} · OPEN TO OPPORTUNITIES
          </p>
        </div>
      </div>
    </Section>
  );
}
