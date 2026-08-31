# Abhay Pareek — Portfolio

Personal portfolio website for Abhay Pareek, an aspiring Data Analyst, built to showcase data analytics projects, technical skills, and background.

**Live site:** _add your Vercel URL here once deployed_

## About

This portfolio highlights hands-on data analytics work across SQL, Python, Excel, and Power BI, along with a summary of skills, education, and ways to get in touch.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) for icons

## Features

- Responsive, mobile-first layout with no horizontal overflow
- Sticky navigation with a mobile menu
- Sections for Home, About, Skills, Projects, Education, GitHub, and Contact
- Subtle scroll-reveal animations that respect `prefers-reduced-motion`
- Auto-generated Open Graph / Twitter preview image
- SEO metadata (title, description, Open Graph tags, favicon)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

To create a production build:

```bash
npm run build
npm start
```

## Deployment

This project is deployed on [Vercel](https://vercel.com), which auto-detects the Next.js setup with no extra configuration.

If deploying to a custom domain, set the environment variable `NEXT_PUBLIC_SITE_URL` to the live site URL so social preview images resolve correctly.

## Project Structure

```
app/            → pages, layout, global styles, OG image
components/     → reusable UI components (header, project card, reveal animation)
content/        → site content and profile data (site.ts)
public/         → static assets (resume PDF, etc.)
```

## Credits

This project was built with the assistance of AI coding tools — [Codex](https://openai.com/index/introducing-codex/) and [Claude](https://claude.ai) — for scaffolding, development, content integration, and verification (linting, build checks, and responsive testing).

## Contact

- Email: pareekabhi0189@gmail.com
- GitHub: [@22ec016abhay](https://github.com/22ec016abhay)
- LinkedIn: [Abhay Pareek](https://www.linkedin.com/in/abhaypareek/)
