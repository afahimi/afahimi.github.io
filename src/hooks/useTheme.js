import { useCallback, useEffect, useState } from "react";

const read = () => document.documentElement.getAttribute("data-theme") || "light";

// Follows the system setting until the visitor picks a theme with the toggle.
export default function useTheme() {
  const [theme, setTheme] = useState(read);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      let stored = null;
      try {
        stored = localStorage.getItem("theme");
      } catch (err) {}
      if (stored) return;
      const next = e.matches ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      setTheme(next);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    const next = read() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (err) {}
    setTheme(next);
  }, []);

  return [theme, toggle];
}
