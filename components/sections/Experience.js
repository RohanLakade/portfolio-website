import styles from "./Experience.module.scss";

const experiences = [
  {
    company: "Fortune4 Technologies",
    role: "Trainee, IT Department",
    period: "Jan 2023 – Nov 2023",
    points: [
      "Worked hands-on with React.js, Next.js, Node.js, and MySQL across live client projects",
      "Built UI functionality including product search, ratings and reviews, wishlist, and filters",
      "Implemented routing, forms, and SEO-optimized pages using Next.js and next-seo",
    ],
  },
  {
    company: "Acute Informatics Pvt Ltd (HDFC Bank, Mumbai)",
    role: "Data Center Operation Engineer",
    period: "Oct 2020 – Jun 2022",
    points: [
      "Gained foundational exposure to HTML, CSS, and JavaScript during this period",
      "Began the transition toward frontend development through self-driven learning",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.header}>
        <h2 className={styles.heading}>
          Work <span className={styles.accent}>Experience</span>
        </h2>
        <div className={styles.accentLine} />
      </div>

      <div className={styles.timeline}>
        {experiences.map((exp) => (
          <div className={styles.entry} key={exp.company}>
            <div className={styles.dot} aria-hidden="true" />
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.role}>{exp.role}</h3>
                <span className={styles.period}>{exp.period}</span>
              </div>
              <p className={styles.company}>{exp.company}</p>
              <ul className={styles.points}>
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
