import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        
        <div className={styles.content}>
          <div className={styles.aboutText}>
            <p>
              I'm a Computer Engineering MS student at New York University with a passion for building innovative solutions 
              at the intersection of software engineering, embedded systems, and machine learning.
            </p>
            <p>
              With professional experience as a Software Engineering Analyst at Accenture, I've engineered 
              Salesforce Veeva CRM solutions, delivered high-impact React components, and led web content 
              management initiatives that significantly improved user experiences and business outcomes.
            </p>
            <p>
              My technical journey spans frontend and backend development, cloud infrastructure, and embedded systems.
              I thrive on challenges that combine hardware and software to create meaningful solutions.
            </p>
          </div>
          
          <div className={styles.skills}>
            <div className={styles.skillCategory}>
              <h3>Software Development</h3>
              <ul>
                <li>Java, Python, C/C++, JavaScript</li>
                <li>React, Spring, Node.js, Express</li>
                <li>SQL, MongoDB, Cassandra, Hadoop</li>
                <li>CI/CD, Git, Jenkins, Maven</li>
              </ul>
            </div>
            
            <div className={styles.skillCategory}>
              <h3>Embedded Systems</h3>
              <ul>
                <li>Arduino, Raspberry Pi, ARM Cortex</li>
                <li>Verilog, VHDL</li>
                <li>SPI, I2C, UART protocols</li>
                <li>Electronics Prototyping</li>
              </ul>
            </div>
            
            <div className={styles.skillCategory}>
              <h3>AI/ML</h3>
              <ul>
                <li>TensorFlow, PyTorch, Keras</li>
                <li>Computer Vision, OpenCV</li>
                <li>Deep Learning</li>
                <li>Model Optimization</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.education}>
          <h3>Education</h3>
          <div className={styles.educationItem}>
            <div className={styles.degree}>
              <h4>Master of Science in Computer Engineering</h4>
              <p>New York University, USA</p>
            </div>
            <div className={styles.eduDetails}>
              <p>Sep 2023 – May 2025</p>
              <p className={styles.gpa}>CGPA: 3.72/4</p>
            </div>
          </div>
          
          <div className={styles.educationItem}>
            <div className={styles.degree}>
              <h4>Bachelor of Engineering in Electronics and Telecommunications</h4>
              <p>University of Mumbai, India</p>
            </div>
            <div className={styles.eduDetails}>
              <p>Aug 2017 – Jun 2021</p>
              <p className={styles.gpa}>CGPA: 3.64/4</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;