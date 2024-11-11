import React from 'react';
import Image from 'next/image';
import Link from 'next/link';  // No need for an anchor tag anymore
import { ImLinkedin } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import styles from './about.module.css';

const About = () => (
  <div>
    <div className={styles.heroContainer}>
      <Image
        className={styles.heroImage}
        alt="hero"
        src="/images/umair.jpg"
        width={300}
        height={300} />
    </div>
    <div className={styles.aboutTextWrapper}>
      <h1 className={styles.heroTitle}>
        Hello, I am Umair Dilshad, A creative Frontend Developer dedicated to building visually stunning
        and user-centric websites that engage and inspire.
      </h1>
      <p className={styles.heroDescription}>
      A passionate Frontend Developer driven by the desire to build interactive, user-centric web applications. With a solid foundation in TypeScript, I excel in transforming creative ideas into seamless, functional digital experiences.

I have had the privilege of developing projects like a to-do list app, number guessing game, interactive calculator, adventure game, resume builder, personal portfolio and currency converter each crafted with precision to ensure a smooth, engaging user experience.

I take pride in writing clean, maintainable code and am always seeking opportunities to enhance my skills, staying up-to-date with the latest trends in web development. When I am not coding, you can find me exploring new technological innovations or refining my design skills to create more visually captivating solutions.


      </p>
      <div className={styles.heroIcons}>
        {/* LinkedIn Link */}
        <Link href="https://www.linkedin.com/in/umair-khan-983788b3/" target="_blank" className={styles.iconButton}>
          <ImLinkedin />
        </Link>

        {/* Github Link */}
        <Link href="https://github.com/Umairkhans19" target="_blank" className={styles.iconButton}>
          <FaGithubSquare />
        </Link>
      </div>
    </div>
  </div>
);

export default About;