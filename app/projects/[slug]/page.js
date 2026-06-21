import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { projects } from "@/data/projects";
import styles from "./page.module.scss";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/#projects" className={styles.backLink}>
          <FaArrowLeft size={14} /> Back to Projects
        </Link>

        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.description}>{project.shortDescription}</p>

        <div className={styles.links}>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryLink}>
            <FaExternalLinkAlt size={16} /> Live Demo
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.secondaryLink}>
            <FaGithub size={16} /> View Code
          </a>
        </div>

        {project.image && (
          <div className={styles.imageWrapper}>
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              className={styles.image}
            />
          </div>
        )}

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Tech Stack</h2>
          <ul className={styles.techStack}>
            {project.techStack.map((tech) => (
              <li key={tech} className={styles.tag}>{tech}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Key Features</h2>
          <ul className={styles.featureList}>
            {project.keyFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}