import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={`${styles.title} ${styles.gradientText}`}>Hi, I'm Keshala senarath</h1>
        <p className={styles.description}>
          I'm a student at institute of technology, University of Moratuwa.
          I'm a full-stack developer with 2 years of experience using React and
          NodeJS.Reach out if you'd like to learn more!
        </p>
        <a href="mailto:senuu08@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.profileGlow}>
        <img
          src="https://i.postimg.cc/ZRPWyrkq/Whats-App-Image-2025-06-15-at-10-27-21-623466cb.jpg"
          alt="Hero image of me"
          className={styles.heroImg}
        />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
