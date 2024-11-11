import React from 'react';
import Image from 'next/image';
import styles from './projects.module.css';

const Projects = () => {
  return (
    <div>
      <section className={`${styles['project-container']} mt-20`}>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className={`${styles['project-title']} lg:w-1/3 lg:mb-0 mb-4`}>
            <b> My Featured Projects </b>
            </h1>
            <h2 className={`${styles['project-description']} lg:pl-6 lg:w-2/3 mx-auto`}>
            I am excited to share a few projects I have built using TypeScript, each showcasing my passion 
            for creating interactive and functional web applications. From a streamlined task management to-do list,
             an engaging number guessing game, and a fully responsive calculator, to an immersive adventure game and 
             a practical currency converter each project highlights my commitment to writing clean, efficient code while
              ensuring a seamless and user-friendly experience.
            </h2> 
            <h3>
            Dive into these projects to explore how I approach problem-solving and bring creative ideas to life through 
            TypeScript!
            </h3>
          </div>

          <div className={styles['project-grid']}>
            
            <div className={styles['project-card']}>
              <Image
                width={250}
                height={150}
                alt="project-1"
                className={styles['project-image']}
                src="/images/portfolio.jpg"
              />
            </div>

            <div className={styles['project-card']}>
              <Image
                width={230}
                height={10}
                alt="project-2"
                className={styles['project-image']}
                src="/images/project.jpg"
              />
            </div>
            <div className={styles['project-card']}>
              <Image
                width={250}
                height={100}
                alt="project-3"
                className={styles['project-image']}
                src="/images/number.jpg"
              />
            </div>
            <div className={styles['project-card']}>
              <Image
                width={250}
                height={150}
                alt="project-4"
                className={styles['project-image']}
                src="/images/game.jpg"
              />
            </div>
            <div className={styles['project-card']}>
              <Image
                width={250}
                height={150}
                alt="project-5"
                className={styles['project-image']}
                src="/images/cli.jpg"
              />
            </div>
            
            <div className={styles['project-card']}>
              <Image
                width={250}
                height={150}
                alt="project-1"
                className={styles['project-image']}
                src="/images/To-Do.jpg"
              />
              
              <div className={styles['project-card']}>
              <Image
                width={250}
                height={150}
                alt="project-6"
                className={styles['project-image']}
                src="/images/calculator.jpg"
              />
            </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
