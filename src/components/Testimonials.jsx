import React from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What Others Say</h2>
        <div className={styles.card}>
          <div className={styles.quoteBlock}>
            <p className={styles.quote}>
              "I had the pleasure of working with Bhairavi at Accenture and I can say without hesitation that she is one of the most talented and hardworking professionals I have ever had the pleasure of working with.
            </p>
            <p className={styles.quote}>
              She has impressive technical skills, and also a great team player and an excellent communicator. She consistently demonstrated a willingness to go above and beyond her duties to ensure that the team achieved its objectives. She was always willing to lend a helping hand to colleagues and was a great source of knowledge and guidance.
            </p>
            <p className={styles.quote}>
              Overall, I would highly recommend Bhairavi for any role. She is a talented and dedicated professional with a great attitude and an exceptional work ethic. Any team or organization would be lucky to have her on board."
            </p>
          </div>
          <p className={styles.name}>— Soumya Mohapatra, Senior Analyst at Accenture</p>
        </div>
      </div>
    </section>
  );
};


export default Testimonials;
