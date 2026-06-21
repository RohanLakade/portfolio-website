"use client";

import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { contactInfo } from "@/data/contact";
import styles from "./Contact.module.scss";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.target);

    if (formData.get("botcheck")) {
      return;
    }

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        event.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.header}>
        <h2 className={styles.heading}>
          Get In <span className={styles.accent}>Touch</span>
        </h2>
        <div className={styles.accentLine} />
      </div>

      <div className={styles.grid}>
        <div className={styles.info}>
          <h3 className={styles.infoHeading}>Let&apos;s connect</h3>
          <p className={styles.infoText}>
            I&apos;m actively looking for Frontend Developer or Junior Fullstack
            roles in React.js, Next.js, Node.js, or the MERN stack. If you have
            an opportunity that matches, feel free to reach out.
          </p>

          <div className={styles.detailItem}>
            <FaEnvelope size={18} />
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </div>
          <div className={styles.detailItem}>
            <FaMapMarkerAlt size={18} />
            <span>{contactInfo.location}</span>
          </div>

          <div className={styles.socials}>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="botcheck" className={styles.honeypot}>
            Leave this field empty
            <input
              type="checkbox"
              id="botcheck"
              name="botcheck"
              tabIndex="-1"
              autoComplete="off"
            />
          </label>

          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="subject" className={styles.label}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className={styles.textarea}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className={styles.submitBtn}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className={styles.successMsg}>
              Thanks for reaching out! I&apos;ll get back to you soon.
            </p>
          )}

          {status === "error" && (
            <p className={styles.errorMsg}>
              Something went wrong — please email me directly at{" "}
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>{" "}
              instead.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
