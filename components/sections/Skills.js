import { skillGroups } from "@/data/skills";
import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.header}>
        <h2 className={styles.heading}>
          My <span className={styles.accent}>Skills</span>
        </h2>
        <div className={styles.accentLine} />
      </div>

      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <div className={styles.card} key={group.category}>
            <h3 className={styles.category}>{group.category}</h3>
            <ul className={styles.list}>
              {group.items.map((skill) => (
                <li key={skill} className={styles.tag}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}