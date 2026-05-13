# Satish — Portfolio

A modern, premium, fully responsive personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Highlights

- Dark theme with elegant gradients and glassmorphism
- Sticky responsive navbar with active section indicator
- Hero with typing animation, gradient blobs, floating tech chips
- About, Skills (with animated progress bars), Experience timeline
- Projects with tilt cards, filter tabs, glow borders
- Achievements with animated counters
- Contact form (opens user's mail client with prefilled message)
- Scroll progress bar, back-to-top button, smooth scrolling
- Light / dark mode toggle (powered by `next-themes`)
- SEO metadata via Next.js metadata API

## Tech Stack

- Next.js 14 — App Router
- React 18 + TypeScript
- Tailwind CSS 3
- Framer Motion
- Lucide React icons
- next-themes

## Getting Started

```bash
# 1. Install
npm install

# 2. Run dev server
npm run dev

# 3. Open
# http://localhost:3000
```

## Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
.
├── app/
│   ├── globals.css      # Tailwind + custom styles
│   ├── layout.tsx       # Root layout + providers
│   └── page.tsx         # Home (composes all sections)
├── components/
│   ├── About.tsx
│   ├── Achievements.tsx
│   ├── AnimatedCounter.tsx
│   ├── BackToTop.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── Providers.tsx
│   ├── ScrollProgress.tsx
│   ├── SectionHeading.tsx
│   ├── Skills.tsx
│   └── TypingText.tsx
├── lib/
│   ├── data.ts          # Site copy: roles, skills, projects, experience
│   └── motion.ts        # Shared Framer Motion variants
├── public/
│   └── favicon.svg
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

## Customizing

Edit `lib/data.ts` to update your name, role, social links, skills, experience, projects, and achievements. The site copy is centralized — most updates are one file change.

To swap the hero avatar emoji for a real photo, replace the floating circle in `components/Hero.tsx` with a `<Image>` from `next/image`.

Drop your resume at `public/resume.pdf` to wire up the download button.
