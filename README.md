# NasaCare Website

Professional multi-page marketing website for **NasaCare**, a disposable nasal cleaning stick brand.
Built as a modern, responsive startup website with a clean healthcare visual system.

## Overview

This project is the production-ready front-end website for NasaCare, designed to present:

- Product value and trust signals
- How-it-works education
- Pricing conversion flow
- FAQ and contact support

The website is built as a single-page application (SPA) with route-based pages and reusable section components.

## Live Product Scope

Core pages currently implemented:

- Home
- Product
- How It Works
- About
- FAQ
- Pricing
- Contact

## Design Direction

- Professional healthcare-oriented UI
- Light, clean visual language
- Consistent spacing and typography system
- Subtle motion only (no heavy animation)
- Fully responsive across mobile, tablet, and desktop
- Optimized image assets in `.webp`

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Lucide React + React Icons

## Project Structure

```text
src/
├─ assets/                  # Product and lifestyle webp assets
├─ components/
│  ├─ layout/               # Navbar, Footer, Page shell
│  ├─ sections/             # Reusable marketing sections
│  └─ ui/                   # Shared UI primitives
├─ lib/                     # Shared helpers (animations)
├─ pages/                   # Route pages
├─ App.tsx                  # Router configuration
├─ index.css                # Global design system styles
└─ main.tsx                 # App entry point
```

## Local Development

### Prerequisites

- Node.js 20+
- npm 10+

### Install

```bash
npm install
```

### Run Dev Server

```bash
npm run dev
```

Default local URL: `http://localhost:5173`

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Type-check + production build
npm run preview  # Preview built app locally
npm run lint     # Run ESLint
```

## Deployment

This project is configured for Vercel deployment.

- SPA rewrites are defined in [`vercel.json`](/Users/sankalpmtellur/Desktop/nasacare/vercel.json)
- All routes are rewritten to `index.html` for client-side routing compatibility

Build command:

```bash
npm run build
```

Output directory:

```text
dist/
```

## Content and Asset Notes

- Product images are stored in `src/assets/`
- Current app uses `.webp` assets for better performance
- Update section copy directly inside files in `src/components/sections/` and `src/pages/`

## Quality Expectations

Before shipping changes, run:

```bash
npm run lint
npm run build
```

This keeps the site aligned with production standards for reliability and maintainability.

## Repository Status

This repository is currently marked private (`"private": true` in `package.json`).
