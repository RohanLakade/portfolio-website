import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaClock,
} from "react-icons/fa";
import styles from "./About.module.scss";

const facts = [
  { icon: FaMapMarkerAlt, label: "Location", value: "Navi Mumbai, India" },
  { icon: FaBriefcase, label: "Experience", value: "2+ Years" },
  {
    icon: FaGraduationCap,
    label: "Education",
    value: "B.E. Information Technology",
  },
  {
    icon: FaClock,
    label: "Availability",
    value: "Open to Work",
    highlight: true,
  },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.header}>
        <h2 className={styles.heading}>
          About <span className={styles.accent}>Me</span>
        </h2>
        <div className={styles.accentLine} />
      </div>

      <div className={styles.grid}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/profile.png"
            alt="Rohan Lakade"
            fill
            sizes="(max-width: 768px) 100vw, 450px"
            className={styles.image}
            priority
          />
        </div>

        <div className={styles.content}>
          <h3 className={styles.subheading}>
            Frontend Developer based in Navi Mumbai, India
          </h3>

          <p className={styles.text}>
            Frontend developer with hands-on experience building responsive web
            applications using React and Next.js, including production UI work
            on e-commerce platforms. More recently, I built a multi-user expense
            tracker with real-time analytics and Excel export, and a product
            browsing app using Next.js&apos;s App Router — applying deliberate
            state management, runtime theming, and performance optimizations
            throughout.
          </p>

          <div className={styles.facts}>
            {facts.map(({ icon: Icon, label, value, highlight }) => (
              <div className={styles.fact} key={label}>
                <div
                  className={`${styles.factIcon} ${
                    highlight ? styles.factIconHighlight : ""
                  }`}
                >
                  <Icon size={18} />
                </div>
                <div className={styles.factBody}>
                  <span className={styles.factLabel}>{label}</span>
                  <span
                    className={`${styles.factValue} ${
                      highlight ? styles.factValueHighlight : ""
                    }`}
                  >
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <a
            href="/Rohan_Lakade_Resume.pdf"
            download="Rohan_Lakade_Resume.pdf"
            className={styles.resumeBtn}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
