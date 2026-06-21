"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { contactInfo } from "@/data/contact";
import styles from "./Footer.module.scss";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Link href="/#home" className={styles.logo}>
            Rohan<span className={styles.accent}>.</span>
          </Link>
          <p className={styles.tagline}>
            Frontend developer focused on clean, maintainable React
            applications.
          </p>
          <div className={styles.socials}>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <div className={styles.links}>
          <h3 className={styles.linksTitle}>Quick Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.contact}>
          <h3 className={styles.linksTitle}>Contact</h3>
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          <p className={styles.location}>{contactInfo.location}</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {year} Rohan Lakade. All rights reserved.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={styles.backToTop}
        >
          <FaArrowUp size={12} /> Back to top
        </button>
      </div>
    </footer>
  );
}
