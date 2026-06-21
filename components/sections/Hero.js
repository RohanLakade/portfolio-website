import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { contactInfo } from "@/data/contact";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.greeting}>Hi, I&apos;m 👋</p>
          <h1 className={styles.name}>
            Rohan <span className={styles.accent}>Lakade</span>
          </h1>
          <p className={styles.roles}>
            Frontend Developer · React.js Developer · Next.js Developer
          </p>
          <p className={styles.tagline}>
            Frontend developer focused on clean, maintainable React applications
            — with a recent focus on Next.js and modern App Router architecture.
          </p>
          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryAction}>
              View Projects
            </a>
            <a href="#contact" className={styles.secondaryAction}>
              Contact Me
            </a>
          </div>
          <div className={styles.socials}>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className={styles.socialLink}
            >
              <FaGithub size={22} />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className={styles.socialLink}
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
        <div className={styles.photoWrapper}>
          <div className={styles.photoContainer}>
            <Image
              src="/images/profile.png"
              alt="Rohan Lakade"
              fill
              sizes="(max-width: 768px) 260px, 340px"
              className={styles.photo}
              priority
            />
          </div>
          <div className={styles.ring} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
