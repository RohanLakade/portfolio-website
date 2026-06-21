import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Rohan Lakade — Frontend Developer",
  description:
    "Frontend developer specializing in React.js and Next.js. View my projects, skills, and experience.",
  openGraph: {
    title: "Rohan Lakade — Frontend Developer",
    description:
      "Frontend developer specializing in React.js and Next.js. View my projects, skills, and experience.",
    type: "website",
    locale: "en_IN",
  },
};

const themeScript = `
  (function() {
    try {
      var stored = localStorage.getItem('theme');
      var theme = stored ? stored : 'light';
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {}
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
