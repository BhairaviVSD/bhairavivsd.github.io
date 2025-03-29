import styles from './Hero.module.css';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        Hi, I’m Bhairavi Sawantdesai
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        I build scalable software systems and craft digital experiences.
      </motion.p>
      <a className={styles.resumeBtn} href="/resume.pdf" download>Download Resume</a>
    </section>
  );
}