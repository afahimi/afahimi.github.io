import { useEffect } from "react";

const THRESHOLD = 90; // wheel distance needed before the page launches
const GESTURE_GAP = 120; // ms of quiet that separates one scroll gesture from the next
const COOLDOWN = 500; // ms to ignore wheel input after a launch
const NAV_HEIGHT = 64;

const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Between the hero and About, small scrolls do nothing; a firmer scroll launches to the other screen.
export default function useScrollLaunch(enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined;

    let acc = 0;
    let lastWheel = 0;
    let gestureStarted = false;
    let busy = false;
    let cooldownUntil = 0;

    const launch = (to) => {
      busy = true;
      acc = 0;
      const from = window.scrollY;
      const start = performance.now();
      const duration = 800;
      const step = (now) => {
        const t = Math.min((now - start) / duration, 1);
        window.scrollTo({ top: from + (to - from) * ease(t), behavior: "instant" });
        if (t < 1) {
          requestAnimationFrame(step);
        } else {
          busy = false;
          cooldownUntil = performance.now() + COOLDOWN;
        }
      };
      requestAnimationFrame(step);
    };

    const onWheel = (e) => {
      const about = document.getElementById("about");
      if (!about || e.ctrlKey) return;
      const aboutTop = about.offsetTop - NAV_HEIGHT;
      const y = window.scrollY;

      if (busy || performance.now() < cooldownUntil) {
        if (y <= aboutTop + 40) e.preventDefault();
        return;
      }

      const goingDown = e.deltaY > 0;
      const inHeroZone = goingDown && y < aboutTop - 2;
      const inAboutTop = !goingDown && y > 0 && y <= aboutTop + 40;
      if (!inHeroZone && !inAboutTop) {
        acc = 0;
        return;
      }

      e.preventDefault();
      const now = performance.now();
      if (now - lastWheel > GESTURE_GAP) {
        gestureStarted = true;
        acc = 0;
      }
      lastWheel = now;
      if (!gestureStarted) return; // still riding inertia from an earlier scroll

      acc += e.deltaY;
      if (acc > THRESHOLD) launch(aboutTop);
      else if (acc < -THRESHOLD) launch(0);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [enabled]);
}
