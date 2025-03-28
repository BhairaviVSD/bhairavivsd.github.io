import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Bhairavi Sawantdesai. All rights reserved.</p>
    </footer>
  );
}
