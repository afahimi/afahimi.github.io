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

- `src/App.js` wraps everything in a `HashRouter` (hash routing is deliberate, so GitHub Pages needs no server rewrites). `NavBar` and `Footer` are persistent; routes are `/` (IntroScreen + AboutScreen), `/projects`, `/notes`, `/experience`, `/contact`.
- `src/components/UI/` holds the home-page sections and shared pieces (NavBar, Footer, SocialLinks, and reusable `Elements/` such as Btn, Bubble, PhotoCard, TextContainer, Typography). `src/components/pages/` holds one folder per route.
- Content is data-driven: projects come from `pages/Projects/ProjectList.js` (array of objects: title, context, img, date, location, description, keywords, hasref/href); experience from `pages/Experience/ExperienceListing.js`.
- Contact form (`pages/Contact/Components/ContactForm.js`) sends mail through `@emailjs/browser`.
- Static assets live in `public/` (`Images/ProjectImages/`, `Amin_Resume.pdf`). Reference them with `process.env.PUBLIC_URL + "/Images/..."` — note that some entries in `ProjectList.js` omit the leading slash, which is inconsistent.

## Gotchas

- `build/` is committed to git (the `main` branch tracks build output), so builds produce noisy diffs with hashed filenames; the deployed copy is on the `gh-pages` branch.
- Theme colors are defined in two places: the comment block in `App.js` and `tailwind.config.js`.
