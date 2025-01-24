import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Khushboo</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quae
          beatae maxime! Praesentium cum, blanditiis labore esse expedita
          sapiente, sed temporibus reprehenderit deleniti ducimus est minima
          velit molestias possimus, cumque veniam?
        </p>
        <a
          href="mailto:patelkhushboo057@gmail.com"
          className={styles.contactBtn}
        >
          Contact me
        </a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="hero image" className={styles.heroImg} />
      <div className={styles.topBlur}/>
      
    </section>
  );
};
