# Akash Bajpai – Developer Portfolio (React + Vite)

Senior Full Stack Engineer portfolio built with React, Vite, TypeScript, Tailwind CSS, MDX, and Framer Motion.

## Features

- Dark-mode first UI with custom design system and motion.
- Case studies with architecture, challenges, and impact.
- MDX-powered blog with static imports.
- Command palette (`cmd+k`) navigation.
- GitHub contribution graph.
- SEO-ready metadata, OpenGraph, JSON-LD, sitemap, and robots.

## Tech Stack

- React + Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- MDX
- React Router

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Deployment (Vercel)

1. Push the repository to GitHub.
2. Import the repo into Vercel.
3. Framework preset: Vite.
4. Output directory: `dist`.
5. Update the domain and sitemap URLs in `public/sitemap.xml` when live.

## Content Updates

- Profile data: `src/data/profile.ts`
- Case studies: `src/data/projects.ts`
- Blog posts: `src/content/blog/*.mdx`
- Resume PDF: `public/documents/akash-bajpai-resume.pdf`

## Notes

- Replace the placeholder resume PDF with your latest version.
- Update social links in `src/data/profile.ts`.
