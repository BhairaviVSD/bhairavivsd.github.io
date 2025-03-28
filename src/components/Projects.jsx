import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <h2>Projects</h2>
      <ul>
        <li><strong>StoryCrafter</strong> — AI-powered storytelling with AWS + GPT</li>
        <li><strong>RAG Summarizer</strong> — Text summarizer using RAG & DistilBART</li>
        <li><strong>CineMatch</strong> — Movie recommender using ALS + MinHash</li>
        <li><strong>FoodForThought</strong> — AI food classifier optimized on K8s</li>
        <li><strong>TaskManager</strong> — Full-stack Java Spring task manager</li>
      </ul>
    </section>
  );
}
