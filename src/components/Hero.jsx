import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <h1>Bhairavi Sawantdesai</h1>
        <h2>Computer Engineering MS Student & Software Engineer</h2>
        <p>Building innovative solutions at the intersection of software, embedded systems, and machine learning</p>
        
        <div className={styles.cta}>
          <a href="#contact" className={styles.primary}>Contact Me</a>
          <a href="#projects" className={styles.secondary}>View Projects</a>
        </div>
        
        <div className={styles.social}>
          <a href="https://linkedin.com/in/bhairavi-sawantdesai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/BhairaviVSD" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:bvs9764@nyu.edu" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;