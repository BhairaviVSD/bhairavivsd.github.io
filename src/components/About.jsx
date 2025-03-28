import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <h2>About Me</h2>
      <p>
        I'm a software engineer with a passion for building high-impact systems.
        I’ve worked on scalable, serverless solutions at Accenture and currently explore
        research-driven development at NYU.
      </p>
    </section>
  );
}
