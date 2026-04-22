# NasaCare Website

A premium, responsive, light-themed product website for **NasaCare Disposable Nasal Cleaning Stick**, built with React + TypeScript + Vite + Tailwind CSS + Framer Motion.

## Pages Included

- Home
- Product
- How It Works
- About
- FAQ
- Pricing / Buy
- Contact

## Built Components

- Navbar
- Footer
- HeroSection
- FeatureGrid
- ProductShowcase
- HowItWorksSteps
- LifestyleSection
- PackagingSection
- Testimonials
- CTASection
- PricingCards
- FAQAccordion
- ContactForm

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Lucide React

## Project Structure

```text
src/
├─ components/
│  ├─ layout/
│  │  ├─ Footer.tsx
│  │  ├─ Navbar.tsx
│  │  └─ PageLayout.tsx
│  ├─ sections/
│  │  ├─ CTASection.tsx
│  │  ├─ ContactForm.tsx
│  │  ├─ FAQAccordion.tsx
│  │  ├─ FeatureGrid.tsx
│  │  ├─ HeroSection.tsx
│  │  ├─ HowItWorksSteps.tsx
│  │  ├─ LifestyleSection.tsx
│  │  ├─ PackagingSection.tsx
│  │  ├─ PricingCards.tsx
│  │  ├─ ProductShowcase.tsx
│  │  └─ Testimonials.tsx
│  └─ ui/
│     └─ Reveal.tsx
├─ pages/
│  ├─ About.tsx
│  ├─ Contact.tsx
│  ├─ FAQ.tsx
│  ├─ Home.tsx
│  ├─ HowItWorks.tsx
│  ├─ Pricing.tsx
│  └─ Product.tsx
├─ assets/
├─ lib/
│  └─ animations.ts
├─ App.tsx
├─ index.css
└─ main.tsx
```

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Production Build

```bash
npm run build
npm run preview
```

## Deployment (Vercel)

`vercel.json` is included with SPA rewrite support:

- All routes rewrite to `index.html`
- React Router routes work on refresh and direct link opens

Deploy with Vercel as a standard Vite project.

## Design Notes

- Light-only theme
- Mint/teal healthcare brand accents
- Rounded corners and soft shadows
- Mobile-first responsive layouts
- Framer Motion animations for entrance and hover interactions
