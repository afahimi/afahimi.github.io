import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import pfp from "../assets/pfp.png";
import Button from "../ui/Button";

const GREETING = "Hello, I am Amin!";

// Types the greeting once; the caret then stays put.
const useTypewriter = (text, enabled) => {
  const [count, setCount] = useState(enabled ? 0 : text.length);
  useEffect(() => {
    if (!enabled || count >= text.length) return undefined;
    const t = setTimeout(() => setCount((c) => c + 1), count === 0 ? 500 : 70);
    return () => clearTimeout(t);
  }, [count, text, enabled]);
  return text.slice(0, count);
};

// Soft drifting circles: the speech-bubble motif, quieter.
const bubbles = [
  { size: 220, top: "6%", left: "-4%", dur: 9 },
  { size: 120, top: "58%", left: "8%", dur: 7 },
  { size: 160, top: "12%", left: "82%", dur: 8 },
  { size: 80, top: "72%", left: "70%", dur: 6 },
];

const Hero = () => {
  const reduce = useReducedMotion();
  const typed = useTypewriter(GREETING, !reduce);

  return (
    <section id="home" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {bubbles.map((b, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-accent-soft opacity-40"
            style={{ width: b.size, height: b.size, top: b.top, left: b.left }}
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: b.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid max-w-page items-center gap-10 px-5 py-16 md:grid-cols-[auto_1fr] md:gap-16 md:px-8 md:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto"
        >
          <img
            src={pfp}
            alt="Amin Fahimi"
            width="320"
            height="320"
            className="themed h-56 w-56 rounded-[2rem] border border-line object-cover shadow-lift sm:h-72 sm:w-72 md:h-80 md:w-80"
          />
        </motion.div>

        <div className="text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-sm font-medium uppercase tracking-[0.18em] text-accent"
          >
            Software engineer
          </motion.p>
          <h1 className="mt-3 text-step-4" aria-label={`\u{1F44B} ${GREETING}`}>
            <span aria-hidden>
              <span className="mr-2">{"\u{1F44B}"}</span>
              {typed}
              <span className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] bg-accent" />
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-5 max-w-xl text-step-1 text-muted md:max-w-lg"
          >
            Welcome to my personal website.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-8"
          >
            <Button href="#projects">See my work</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
