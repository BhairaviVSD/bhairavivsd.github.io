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
              I'm Bhairavi Sawantdesai, currently pursuing my Master’s in Computer Engineering at NYU with a CGPA of 3.72. I bring over two years of experience at Accenture, where I led CRM deployments, microservice migrations, and cloud-native development across cross-functional teams.
            </p>
            <p>
              I’ve built robust systems at scale—from React + Spring Boot frontends, Dockerized services on Kubernetes, to AI pipelines for forecasting. My work spans CRM engineering, ML optimization, embedded prototyping, and full-stack web apps.
            </p>
            <p>
              At NYU, I’m involved in teaching, mentoring, and research—improving recession prediction accuracy and mentoring makers through the IDEAS Maker Club. I love building fast, scalable, and meaningful systems.
            </p>
          </div>

          <div className={styles.skills}>
            <div className={styles.skillCategory}>
              <h3>Software & Web Development</h3>
              <ul className={styles.twoColumn}>
                <li>Java, Python, C/C++, TypeScript, Go</li>
                <li>React, Node.js, Express, Vue.js, Angular</li>
                <li>PostgreSQL, MySQL, MongoDB, Redis</li>
                <li>GraphQL, REST APIs</li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <h3>DevOps & Cloud</h3>
              <ul className={styles.twoColumn}>
                <li>AWS</li>
                <li>Docker, Kubernetes, Jenkins, CircleCI</li>
                <li>Terraform, Ansible, Prometheus, Grafana</li>
                <li>CI/CD, Monitoring, Cloud Scaling</li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <h3>Embedded Systems & Hardware</h3>
              <ul className={styles.twoColumn}>
                <li>Arduino, Raspberry Pi, ARM Cortex-A72, STM32</li>
                <li>Verilog, VHDL, TASM, Assembly</li>
                <li>SPI, I2C, UART, Sensors & Actuators</li>
                <li>Oscilloscope, Multimeter, Breadboarding</li>
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
              <p className={styles.gpa}>CGPA: 3.89/4</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
