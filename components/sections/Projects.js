import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/data/projects";
import styles from "./Projects.module.scss";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.header}>
        <h2 className={styles.heading}>
          Featured <span className={styles.accent}>Projects</span>
        </h2>
        <div className={styles.accentLine} />
      </div>

      <div className={styles.grid}>
        {featuredProjects.map((project) => (
          <article className={styles.card} key={project.slug}>
            {project.image && (
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className={styles.image}
                  priority={project.featured}
                />
              </div>
            )}
            <div className={styles.cardHeader}>
              <h3 className={styles.title}>{project.title}</h3>
              <div className={styles.cardLinks}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live demo`}
                >
                  <FaExternalLinkAlt size={18} />
                </a>
              </div>
            </div>

            <p className={styles.description}>{project.shortDescription}</p>

            <ul className={styles.techStack}>
              {project.techStack.map((tech) => (
                <li key={tech} className={styles.tag}>
                  {tech}
                </li>
              ))}
            </ul>

            <ul className={styles.features}>
              {project.keyFeatures.slice(0, 3).map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <Link
              href={`/projects/${project.slug}`}
              className={styles.detailLink}
            >
              View Project Details →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
