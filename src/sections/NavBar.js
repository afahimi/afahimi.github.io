import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import signature from "../assets/signature.png";
import ThemeToggle from "../ui/ThemeToggle";

const links = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const NavBar = ({ active, theme, onToggleTheme }) => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 border-b border-line backdrop-blur-md"
      style={{ backgroundColor: "color-mix(in srgb, var(--bg) 80%, transparent)" }}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-page items-center justify-between px-5 md:px-8"
      >
        <a href="#home" aria-label="Back to top" onClick={() => setOpen(false)}>
          <img
            src={signature}
            alt="Amin Fahimi"
            className="h-7 w-auto dark:invert"
          />
        </a>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={`relative block px-4 py-2 text-base transition-colors ${
                    active === id ? "text-accent" : "text-muted hover:text-ink"
                  }`}
                >
                  {label}
                  {active === id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 500, damping: 36 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <FaTimes aria-hidden /> : <FaBars aria-hidden />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-line px-5 md:hidden"
            style={{ backgroundColor: "var(--bg)" }}
          >
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-lg ${active === id ? "text-accent" : "text-ink"}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
