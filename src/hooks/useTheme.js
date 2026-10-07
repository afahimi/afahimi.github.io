import { useCallback, useState } from "react";

const read = () => document.documentElement.getAttribute("data-theme") || "light";

// Light by default; the visitor's choice is remembered.
export default function useTheme() {
  const [theme, setTheme] = useState(read);

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
