"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "@/components/layout/ThemeToggle";
import styles from "./Navbar.module.scss";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="/" onClick={closeMenu} className={styles.logo}>
          Rohan Lakade
        </a>

        <ul className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.desktopActions}>
          <a
            href="/Rohan_Lakade_Resume.pdf"
            download="Rohan_Lakade_Resume.pdf"
            className={styles.resumeButton}
          >
            Resume
          </a>
          <ThemeToggle />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className={styles.menuToggle}
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.mobileActions}>
            <a
              href="/Rohan_Lakade_Resume.pdf"
              download="Rohan_Lakade_Resume.pdf"
              className={styles.resumeButton}
              onClick={closeMenu}
            >
              Resume
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
