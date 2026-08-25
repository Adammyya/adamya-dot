import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { profile } from "../data/portfolioData";

const links = [
  { href: "#about", label: "01 Profile" },
  { href: "#projects", label: "02 Work" },
  { href: "#skills", label: "03 Skills" },
  { href: "#experience", label: "04 Experience" },
  { href: "#education", label: "Record" },
  { href: "#github", label: "05 Development" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "06 Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "border-ink-line bg-ink-950/95" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-lg text-paper">
  <span className="font-light tracking-[0.25em] lowercase">
    adamya<span className="text-synapse">.</span>
  </span>
</a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[12.5px] uppercase tracking-wide text-paper-dim transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={profile.resumeUrl}
          download
          className="hidden rounded-full bg-paper px-4 py-2 text-xs font-medium text-ink-950 transition-transform hover:scale-105 lg:inline-block"
        >
          Resume
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-paper lg:hidden"
        >
          {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="glass overflow-hidden lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2.5 font-mono text-sm uppercase tracking-wide text-paper-dim transition-colors hover:bg-white/5 hover:text-paper"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.resumeUrl}
                download
                className="mt-2 rounded-full bg-paper px-4 py-2 text-center text-xs font-medium text-ink-950"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
