import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "/#projects", label: "Projects" },
  { href: "/#problem", label: "Problem" },
  { href: "/#solution", label: "Solution" },
  { href: "/#model", label: "Model" },
  { href: "/#revenue", label: "Revenue" },
  { href: "/#features", label: "Platform" },
  { href: "/#security", label: "Security" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between rounded-2xl transition-all ${
          scrolled
            ? "glass shadow-glow border border-emerald-100/60 px-4 py-2"
            : "px-2 py-2"
        }`}
      >
        <a href="#top" className="flex items-center gap-2">
          <Logo className="h-8 sm:h-9" />
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-emerald-900/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-emerald-700 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#cta"
            className="hidden sm:inline-flex items-center rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-50 transition"
          >
            Investor Access
          </a>
          <a
            href="#cta"
            className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-glow hover:bg-emerald-700 transition"
          >
            Start Partnership
          </a>
        </div>
      </div>
    </header>
  );
}
