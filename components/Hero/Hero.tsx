import React from 'react';
import Image from 'next/image';
import { ImLinkedin } from "react-icons/im";
import { FaGithubSquare} from "react-icons/fa";
import cssStyle from './Hero.module.css';

const Hero = () => {
  return (
    <div className={cssStyle.heroContainer}>
      <Image
        className={cssStyle.heroImage}
        alt="hero"
        src="/images/umair.jpg"
        width={300}
        height={300}
      />
      <h1 className={cssStyle.heroTitle}>
      Hello, I am Umair Dilshad, A creative Frontend Developer dedicated to building
       visually stunning and user-centric websites that engage and inspire.
      </h1>
      <p className={cssStyle.heroDescription}>
      A frontend enthusiast who thrives on turning innovative concepts into seamless, 
      interactive web experiences. From dynamic games to essential tools, I deliver high-quality, responsive
       applications with precision and flair.
      </p>
      <div className={cssStyle.heroIcons}>
        <a href="https://www.linkedin.com/in/umair-khan-983788b3/" className={cssStyle.iconButton}>
          <ImLinkedin />
        </a>
        <a href="https://github.com/Umairkhans19" className={cssStyle.iconButton}>
          <FaGithubSquare />
        </a>
      </div>
    </div>
  );
};

export default Hero;
