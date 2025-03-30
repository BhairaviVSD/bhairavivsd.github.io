import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>BVS</div>
          
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h3>Navigation</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className={styles.linkGroup}>
              <h3>Projects</h3>
              <ul>
                <li><a href="#projects">RAG Summarizer</a></li>
                <li><a href="#projects">Vision-Language System for Medical Image Analysis</a></li>
                <li><a href="#projects">CineMatch</a></li>
                <li><a href="#projects">StoryCrafter</a></li>
                <li><a href="#projects">TaskManager</a></li>
              </ul>
            </div>
            
            <div className={styles.linkGroup}>
              <h3>Connect</h3>
              <ul>
                <li><a href="mailto:bhairavi.s@nyu.edu">Email</a></li>
                <li><a href="https://github.com/BhairaviVSD" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://linkedin.com/in/bhairavi-sawantdesai" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>© {currentYear} Bhairavi Sawantdesai. All rights reserved.</p>
          <p className={styles.credits}>Designed & Built with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;