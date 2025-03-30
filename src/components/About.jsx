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
              I'm Bhairavi Sawantdesai, a Computer Engineering graduate student at NYU with a CGPA of 3.704. I bring over two years of experience at Accenture, where I led CRM engineering, microservices migration, and cloud-native architecture development. I've built robust systems across React-Spring stacks, containerized deployments, and AI pipelines.
            </p>
            <p>
              At New York University, I'm actively involved in teaching, mentoring, and research—improving recession prediction models and guiding students in the IDEAS Maker Club. I love building intelligent systems that are scalable, resilient, and impactful.
            </p>
          </div>

          <div className={styles.skills}>
            <div className={styles.skillCategory}>
              <h3>Languages</h3>
              <p>Python, Java, C/C++, JavaScript, TypeScript, Go, Rust, C#, Swift</p>
            </div>
            <div className={styles.skillCategory}>
              <h3>Frameworks & Libraries</h3>
              <p>React, Angular, Vue, Node.js, Express.js, Spring Boot, Django, .NET, TensorFlow, PyTorch, scikit-learn, Keras, OpenCV, Hugging Face</p>
            </div>
            <div className={styles.skillCategory}>
              <h3>Databases & Web</h3>
              <p>PostgreSQL, MySQL, Oracle, Redis, Firebase, SQL, NoSQL, HTML, CSS, REST APIs, GraphQL</p>
            </div>
            <div className={styles.skillCategory}>
              <h3>Cloud & DevOps</h3>
              <p>AWS (Lambda, DynamoDB, S3, EC2), CI/CD pipelines, Jenkins, Docker, Kubernetes, Git, GitHub</p>
            </div>
            <div className={styles.skillCategory}>
              <h3>Embedded Systems</h3>
              <p>Arduino, Raspberry Pi, STM32, ARM Cortex-A72, Verilog, VHDL, TASM, UART, SPI, I2C, Oscilloscope, Multimeter, Breadboarding</p>
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
              <p className={styles.gpa}>CGPA: 3.70/4</p>
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