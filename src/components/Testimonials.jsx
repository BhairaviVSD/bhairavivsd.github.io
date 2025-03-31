import React from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What Others Say</h2>
        <div className={styles.card}>
          <p className={styles.quote}>
            “Bhairavi is one of the most talented and hardworking professionals I have ever worked with. She's technically brilliant, a great team player, and consistently goes above and beyond. I'd highly recommend her for any role.”
          </p>
          <p className={styles.name}>— Soumya Mohapatra, Senior Analyst at Accenture</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
