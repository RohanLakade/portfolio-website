// data/projects.js

export const projects = [
  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    image: "/images/projects/expense-tracker.png",
    shortDescription:
      "A multi-user expense tracking SPA with per-user data isolation, analytics, and Excel export — built entirely client-side with LocalStorage as the data layer.",
    techStack: [
      "React 19",
      "Vite",
      "Redux Toolkit",
      "React Router v7",
      "Sass (BEM)",
      "Recharts",
      "ExcelJS",
    ],
    keyFeatures: [
      "Multi-user mock authentication with per-user data isolation",
      "Transaction history with search, filters, and date-range filtering",
      "Analytics dashboard with category breakdown and monthly trend charts",
      "Client-side Excel export (summary + detailed transaction sheets)",
      "Dark mode with persisted theme preference",
      "Fully responsive, with route-based code splitting for heavy chart views",
    ],
    liveUrl: "https://expense-tracker-rohanlakade.vercel.app/",
    githubUrl: "https://github.com/RohanLakade/expense-tracker",
    featured: true,
  },
  {
    slug: "portfolio-website",
    title: "Personal Portfolio Website",
    image: "/images/projects/portfolio-website.png",
    shortDescription:
      "A production-quality developer portfolio built with Next.js App Router and Server Components by default, featuring custom theming, dynamic SEO, and a working contact integration.",
    techStack: [
      "Next.js 16",
      "React 19",
      "SCSS Modules",
      "CSS Custom Properties",
      "Web3Forms",
    ],
    keyFeatures: [
      "Light/dark theming via CSS custom properties with a no-flash hydration strategy",
      "Dynamic SEO metadata, Open Graph tags, and generated preview image",
      "Server Components by default for fast, minimal-JS page loads",
      "Working contact form via Web3Forms, with spam protection and graceful error fallback",
      "Full responsive, accessibility (WCAG-compliant contrast, keyboard nav, reduced motion), and performance review",
    ],
    liveUrl: "https://your-portfolio-domain.vercel.app/",
    githubUrl: "https://github.com/rohanlakade/portfolio",
    featured: true,
  },
];
