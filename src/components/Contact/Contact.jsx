import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.leftSection}>
        <h2 className={styles.gradientTitle}>Let's talk</h2>
        <p className={styles.description}>
          I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
        </p>
        <ul className={styles.contactInfo}>
          <li>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <span>senuu08@gmail.com</span>
          </li>
          <li>
            <img src={getImageUrl("contact/phoneIcon.png")} alt="Phone icon" />
            <span>0742936380</span>
          </li>
          <li>
            <img src={getImageUrl("contact/locationIcon.png")} alt="Location icon" />
            <span>ITUM,Diyagama, Homagama</span>
          </li>
        </ul>
        <div className={styles.socialIcons}>
          <a href="https://github.com/Keshala123" target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
          </a>
          <a href="https://www.linkedin.com/in/keshala-senarath/" target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
          </a>
        </div>
      </div>
      <form className={styles.rightSection} onSubmit={e => e.preventDefault()}>
        <label htmlFor="name">Your Name</label>
        <input id="name" name="name" type="text" placeholder="Enter your name" required />
        <label htmlFor="email">Your Email</label>
        <input id="email" name="email" type="email" placeholder="Enter your email" required />
        <label htmlFor="message">Write your message here</label>
        <textarea id="message" name="message" placeholder="Enter your message" rows={5} required />
        <button type="submit" className={styles.submitButton}>Submit now</button>
      </form>
    </section>
  );
};
