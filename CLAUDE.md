# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site (React 18, Create React App via `react-scripts`), deployed to GitHub Pages. Styling mixes CSS Modules (`*.module.css`), Tailwind (custom palette in `tailwind.config.js`), plus MUI / react-bootstrap in places.

## Commands

- `npm start` — dev server
- `npm run build` — production build into `build/`
- `npm run deploy` — builds, publishes `build/` to the `gh-pages` branch, then copies `build/index.html` to `404.html` and `200.html` (SPA fallback)
- `npm test` — Jest via react-scripts (`npm test -- --watchAll=false` for one-shot; no tests currently exist)

## Architecture

- `src/App.js` renders one scrolling page: `NavBar`, then the sections `Hero` (id `home`), `About`, `Experience`, `Projects`, `Contact`, then `Footer`. There is no router. The nav uses `#section` anchors, `useActiveSection` (IntersectionObserver) drives the highlight and keeps the URL hash in sync, and old `#/projects`-style links are mapped to sections.
- `src/sections/` holds each page section; `src/ui/` holds shared pieces (Button, Chip, Reveal, SectionHeading, ThemeToggle); `src/hooks/` holds `useTheme` and `useActiveSection`.
- Content is data-driven: projects live in `src/data/projects.js` (entries without `img` render a placeholder tile; `href` and `fit: "contain"` are optional) and experience in `src/data/experience.js` (`upcoming: true` renders the dashed "next up" node).
- Styling is Tailwind plus CSS variables. Theme tokens (light azure, dark near-black/magenta) are defined once in `src/index.css` and mapped to Tailwind colors in `tailwind.config.js`. Dark mode is `data-theme="dark"` on `<html>`, set before first paint by an inline script in `public/index.html` and toggled by `useTheme` (system setting until the visitor picks one). Animation uses Framer Motion; `MotionConfig reducedMotion="user"` in `App.js` honors reduced-motion.
- Contact form (`sections/Contact.js`) sends mail through `@emailjs/browser`, with a honeypot field. The destination inbox is configured in the EmailJS dashboard, not in the repo.
- Static assets live in `public/` (`Images/ProjectImages/` are pre-compressed to about 1200px wide). Reference them with `process.env.PUBLIC_URL + "/Images/..."`.
- `src/components/` is the old multi-page UI and is no longer imported; it can be deleted.

## Gotchas

- `build/` is committed to git (the `main` branch tracks build output), so builds produce noisy diffs with hashed filenames; the deployed copy is on the `gh-pages` branch.
- Do not reintroduce `zoom` or global resets in CSS modules; the old `body { zoom: 1.5 }` hack is gone.
