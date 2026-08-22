import { useState, useEffect } from "react";
import { useForm } from "@formspree/react";
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
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const formId = import.meta.env.VITE_FORMSPREE_FORM_ID || "placeholder";
  const [formspreeState, sendToFormspree, resetFormspree] = useForm(formId);

  useEffect(() => {
    if (formspreeState.succeeded) {
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    }
  }, [formspreeState.succeeded]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: typeof errors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }
    if (!message.trim()) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    if (!formId) {
      console.warn("VITE_FORMSPREE_FORM_ID is missing. Submission will fail.");
    }

    await sendToFormspree(e);
  };

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
            A role, a project, or just a hello — drop me a message and I'll get back to you soon.
          </p>

          {formspreeState.succeeded ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border text-lg"
                style={{ borderColor: "var(--blue)", color: "var(--blue)" }}
              >
                ✓
              </div>
              <h4 className="font-display text-lg font-semibold tracking-tight mb-2">Message Sent</h4>
              <p className="text-sm max-w-sm leading-relaxed mb-6" style={{ color: "var(--ink-muted)" }}>
                Message sent successfully. I'll get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => {
                  resetFormspree();
                  setName("");
                  setEmail("");
                  setMessage("");
                  setErrors({});
                }}
                className="rounded-full px-5 py-2 text-xs font-mono border tracking-wider transition-transform hover:-translate-y-0.5 cursor-pointer"
                style={{ borderColor: "var(--line-strong)", color: "var(--ink)" }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col">
                  <input
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    type="text"
                    placeholder="Your name"
                    className="rounded-xl border px-4 py-3 text-sm outline-none"
                    style={{ borderColor: "var(--line-strong)", background: "var(--bg)", color: "var(--ink)" }}
                  />
                  {errors.name && (
                    <span className="font-mono text-[10px] mt-1 text-left" style={{ color: "var(--red)" }}>
                      {errors.name}
                    </span>
                  )}
                </div>
                <div className="flex flex-col">
                  <input
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    type="email"
                    placeholder="Your email"
                    className="rounded-xl border px-4 py-3 text-sm outline-none"
                    style={{ borderColor: "var(--line-strong)", background: "var(--bg)", color: "var(--ink)" }}
                  />
                  {errors.email && (
                    <span className="font-mono text-[10px] mt-1 text-left" style={{ color: "var(--red)" }}>
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col mt-4">
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                  }}
                  placeholder="What are we building?"
                  rows={5}
                  className="w-full resize-y rounded-xl border px-4 py-3 text-sm outline-none"
                  style={{ borderColor: "var(--line-strong)", background: "var(--bg)", color: "var(--ink)" }}
                />
                {errors.message && (
                  <span className="font-mono text-[10px] mt-1 text-left" style={{ color: "var(--red)" }}>
                    {errors.message}
                  </span>
                )}
              </div>

              {formspreeState.errors && (
                <div
                  className="mt-4 p-3 rounded-xl border text-xs font-mono"
                  style={{ borderColor: "var(--red)", background: "var(--red-soft)", color: "var(--ink)" }}
                >
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={formspreeState.submitting}
                className="mt-5 rounded-full px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                style={{ background: "var(--red)" }}
              >
                {formspreeState.submitting ? "Sending..." : "Send message →"}
              </button>
            </>
          )}
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
