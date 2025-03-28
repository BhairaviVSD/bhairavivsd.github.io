import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Hi, I’m Bhairavi Sawantdesai</h1>
        <p className={styles.subheading}>
          I build scalable software systems and craft digital experiences.
        </p>
        {/* <a href="#projects" className={styles.cta}>See My Work</a> */}
      </div>
    </section>
  );
}
