import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div className={`${styles.heroContent} ${isVisible ? styles.visible : ''}`}>
        <h1 className={styles.name}>
          <span className={styles.greeting}>Hello, I'm</span>
          <span className={styles.fullName}>Bhairavi Sawantdesai</span>
        </h1>
        <h2 className={styles.title}>Software Engineer & ML Enthusiast</h2>
        <p className={styles.description}>
          Building scalable systems and leveraging AI to solve real-world problems
        </p>
        <div className={styles.cta}>
          <a href="#projects" className={styles.primaryBtn}>View Projects</a>
          <a href="#contact" className={styles.secondaryBtn}>Contact Me</a>
        </div>
        <div className={styles.socialIcons}>
          <a href="https://github.com/BhairaviVSD" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/bhairavi-sawantdesai" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className={`${styles.heroBackground} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>
    </section>
  );
};

export default Hero;