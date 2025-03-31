import React from 'react';
import styles from './Recognitions.module.css';

const Recognitions = () => {
  return (
    <section id="recognitions" className={styles.recognition}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Recognitions & Achievements</h2>

        <div className={styles.list}>
        <div className={styles.item}>
        <h3>🏆 National Innovation Contest 2020 – India</h3>
        <p>
            Selected among top student innovations across India for the project:
            <strong> Smart Device to Detect Social Distancing Violations</strong>, which was later
            <strong> published in IEEE ICESC 2021</strong>.
        </p>
        <a href="https://ieeexplore.ieee.org/document/9532822" target="_blank" rel="noopener noreferrer">
            View IEEE Publication
        </a>
        </div>


          <div className={styles.item}>
            <h3>🏅 Semi-Finalist – India Innovation Challenge 2019</h3>
            <p>
              Recognized by Texas Instruments among 30,000+ participants for <strong>Quality Road</strong>:
              a real-time road quality classification tool using SVM, computer vision, and GPS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognitions;
