import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm M Haris</h1>
        <p className={styles.description}>
        A skilled Software Developer specializing in React, Node.js, Redux, MongoDB, PostgreSQL, and payment integration. I craft scalable, high-performance applications with seamless user experiences. Let’s build something impactful together!
        </p>
        <a href="mailto:mh47098@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/profile.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
