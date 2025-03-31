import React from 'react';
import styles from './Testimonials.module.css';
import gizemPost from '../assets/prof_kayar_post.png';
import soummyaPost from '../assets/accent_soumya_rec.png';

const Testimonials = () => {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What Others Say</h2>

        <div className={styles.card}>
        <div className={styles.imageLabel}>LinkedIn Recommendation by Soumya Mohapatra</div>
        <div className={styles.imageWrapper}>
          <img
            src={soummyaPost}
            alt="LinkedIn Recommendation from Soumya Mohapatra, Senior Analyst at Accenture"
            className={styles.postImage}
          />
        </div>
      </div>

      <div className={`${styles.card} ${styles.gizemCard}`}>
        <div className={styles.imageLabel}>LinkedIn Appreciation Post by Professor Gizem Kayar, New York University</div>
        <div className={styles.imageWrapper}>
          <img
            src={gizemPost}
            alt="LinkedIn post from Professor Gizem Kayar"
            className={styles.postImage}
          />
        </div>
      </div>

      </div>
    </section>
  );
};

export default Testimonials;
