import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section className={styles.experience} id="experience">
      <h2>Experience</h2>
      <div>
        <h3>Graduate Research Assistant, NYU</h3>
        <p>Built recession detection models and event-driven Spark pipelines.</p>
      </div>
      <div>
        <h3>Software Engineer II, Accenture</h3>
        <p>Led full-stack feature delivery on serverless & microservices stack.</p>
      </div>
    </section>
  );
}
