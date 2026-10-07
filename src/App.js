import React, { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import useTheme from "./hooks/useTheme";
import useActiveSection from "./hooks/useActiveSection";
import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import "./index.css";

const SECTIONS = ["home", "experience", "projects", "contact"];

const App = () => {
  const [theme, toggleTheme] = useTheme();
  const active = useActiveSection(SECTIONS);

  // Old hash-router links such as #/projects land on the matching section.
  useEffect(() => {
    const match = window.location.hash.match(/^#\/(\w+)/);
    if (match && SECTIONS.includes(match[1])) {
      document.getElementById(match[1])?.scrollIntoView();
    }
  }, []);

  // Keep the URL hash in step with the section being read.
  useEffect(() => {
    const hash = active === "home" ? window.location.pathname + window.location.search : `#${active}`;
    window.history.replaceState(null, "", hash);
  }, [active]);

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#experience"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent-strong focus:px-4 focus:py-2 focus:text-on-accent"
      >
        Skip to content
      </a>
      <NavBar active={active} theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
};

export default App;
