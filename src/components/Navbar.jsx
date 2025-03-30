import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>BVS</a>
        
        <div className={styles.hamburger} onClick={toggleMobileMenu}>
          <span className={`${styles.bar} ${mobileMenuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.bar} ${mobileMenuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.bar} ${mobileMenuOpen ? styles.active : ''}`}></span>
        </div>

        <ul className={`${styles.navlinks} ${mobileMenuOpen ? styles.active : ''}`}>
          <li><a href="#" onClick={closeMobileMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
          <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
          <li><a href="#experience" onClick={closeMobileMenu}>Experience</a></li>
          <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
          <li>
            <a 
              href="/resume.pdf"
              className={styles.resumeBtn} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;