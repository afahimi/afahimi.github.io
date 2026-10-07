/** @type {import('tailwindcss').Config} */
// Colors are CSS variables (see src/index.css) so light and dark share one set of class names.
module.exports = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        band: "var(--band)",
        surface: "var(--surface)",
        line: "var(--line)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        "accent-strong": "var(--accent-strong)",
        "accent-soft": "var(--accent-soft)",
        "on-accent": "var(--on-accent)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
      },
      fontSize: {
        // Fluid type scale
        "step-0": ["clamp(1rem, 0.96rem + 0.2vw, 1.125rem)", { lineHeight: "1.7" }],
        "step-1": ["clamp(1.15rem, 1.08rem + 0.35vw, 1.35rem)", { lineHeight: "1.5" }],
        "step-2": ["clamp(1.5rem, 1.3rem + 1vw, 2.1rem)", { lineHeight: "1.2" }],
        "step-3": ["clamp(2rem, 1.5rem + 2.4vw, 3.4rem)", { lineHeight: "1.1" }],
        "step-4": ["clamp(2.6rem, 1.7rem + 4vw, 5rem)", { lineHeight: "1.02" }],
      },
      maxWidth: {
        page: "72rem",
      },
      boxShadow: {
        soft: "0 1px 2px var(--shadow), 0 8px 24px -12px var(--shadow)",
        lift: "0 2px 4px var(--shadow), 0 18px 40px -16px var(--shadow)",
      },
    },
  },
  plugins: [],
};
