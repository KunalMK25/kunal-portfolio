import { useEffect, useState } from "react";
import { nav } from "../data";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
      style={{
        background: scrolled ? "color-mix(in srgb, var(--bg) 88%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--line)" : "transparent"}`,
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display relative text-sm font-semibold tracking-[0.15em]">
          KM<span style={{ color: "var(--red)" }}>·</span>K
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-xs tracking-wide transition-colors"
                style={{ color: "var(--ink-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-muted)")}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="border-t px-6 py-4 md:hidden"
          style={{ borderColor: "var(--line)", background: "var(--bg)" }}
        >
          <ul className="flex flex-col gap-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm"
                  style={{ color: "var(--ink-muted)" }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
