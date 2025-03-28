import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <h2>Contact</h2>
      <p>Email: <a href="mailto:bvs9764@stern.nyu.edu">bvs9764@stern.nyu.edu</a></p>
      <p>GitHub: <a href="https://github.com/BhairaviVSD" target="_blank">BhairaviVSD</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/bhairavi-sawantdesai" target="_blank">@bhairavi-sawantdesai</a></p>
    </section>
  );
}
