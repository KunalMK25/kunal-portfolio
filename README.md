# Kunal MK — Portfolio

A single-page portfolio built with React, TypeScript, Tailwind CSS v4, and Vite.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to Vercel, Netlify, GitHub Pages, or any static host.

## Structure

- `src/data.ts` — all site content (projects, skills, leadership, achievements). Edit this file to update copy without touching components.
- `src/components/` — one component per section.
- `public/photos/` — leadership/event photos.
- `public/resume/` — resume PDF, linked from the Hero and Contact sections.

## Theme

Dark mode is the default; the toggle in the nav persists the choice to `localStorage`. Colors and fonts are defined as CSS variables in `src/index.css`.
