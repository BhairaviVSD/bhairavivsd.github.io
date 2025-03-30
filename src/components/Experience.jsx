import React, { useState } from 'react';
import styles from './Experience.module.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "NYU",
      title: "Recitation Leader & Mentor",
      period: "Sep 2024 – Present",
      description: [
        "Led weekly recitations for Computer Systems Organization, increasing student engagement and performance.",
        "Mentored high school students through the IDEAS Maker Club, assisting with STEAM projects and college planning."
      ]
    },
    {
      company: "NYU",
      title: "Graduate Research Assistant",
      period: "Aug 2024 – Dec 2024",
      description: [
        "Enhanced business cycle detection models, improving recession prediction accuracy by 20%.",
        "Designed ML models that reduced economic forecasting errors by 15% with <2s latency."
      ]
    },
    {
      company: "Accenture",
      title: "Analyst, Associate",
      period: "Jun 2021 – Jul 2023",
      description: [
        "Built and deployed scalable Veeva CRM solutions for a biopharma client processing 1.5M records in 10s.",
        "Developed 20+ responsive React.js components with Java Spring Boot & MongoDB, cutting UI load times by 40%.",
        "Migrated monolith to microservices using Docker & Kubernetes, reducing deployment time by 50%.",
        "Implemented CI/CD pipeline with Jenkins and Ansible, automating 90% of deployments and shortening releases to 5 days."
      ]
    },
    {
      company: "Bennett Coleman & Co. Ltd.",
      title: "Intern – Data & Marketing",
      period: "May 2020 – Jun 2020",
      description: [
        "Analyzed 100K+ customer interactions using R for sales strategy optimization.",
        "Led customer segmentation and predictive modeling to increase marketing reach by 20,000 customers."
      ]
    },
    {
      company: "Knowledge Solutions",
      title: "Java Developer Intern",
      period: "May 2020 – Jun 2020",
      description: [
        "Built a banking portal in JSP/MySQL serving 500+ users with secure CRUD operations.",
        "Achieved 90%+ test coverage with JUnit and Mockito, reducing validation time by 25%."
      ]
    },
    {
      company: "Finlatics",
      title: "Equity Markets Analyst Intern",
      period: "Jul 2020 – Sep 2020",
      description: [
        "Built real-time simulated portfolios and analyzed BSE500 stocks through FMEP.",
        "Performed in-depth equity research to support trading decisions and investment hypotheses."
      ]
    },
    {
      company: "Rotaract Club of Thane",
      title: "Treasurer & ED Director",
      period: "Mar 2020 – May 2023",
      description: [
        "Led 40+ social cause events; boosted attendance by 200+ and digital engagement by 500+ interactions.",
        "Created content using Canva & Adobe Suite; raised awareness for leprosy homes and supported 700+ sanitation workers.",
        "Spearheaded 15+ resume workshops helping 30+ members land jobs; improved satisfaction by 15 points."
      ]
    },
    {
      company: "Mumbai University",
      title: "Course Assistant – Microprocessors",
      period: "Jul 2019 – Dec 2019",
      description: [
        "Graded assignments for 80+ students; developed digital repository to improve access and scores.",
        "Improved student feedback and course efficiency through better logistics and communication."
      ]
    },
    {
      company: "Mumbai University",
      title: "Coordinator – ISA",
      period: "Aug 2018 – May 2019",
      description: [
        "Organized 20+ technical bootcamps and workshops; boosted participation by 150 attendees.",
        "Provided on-ground technical support, ensuring smooth execution of all events."
      ]
    }
  ];

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Professional Experience</h2>
        
        <div className={styles.tabsContainer}>
          <div className={styles.tabsList}>
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`${styles.tabButton} ${activeTab === index ? styles.active : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <span>{exp.company}</span>
              </button>
            ))}
          </div>
          
          <div className={styles.tabContent}>
            <div className={styles.experienceHeader}>
              <h3>{experiences[activeTab].title} <span className={styles.company}>@ {experiences[activeTab].company}</span></h3>
              <p className={styles.period}>{experiences[activeTab].period}</p>
            </div>
            
            <ul className={styles.responsibilities}>
              {experiences[activeTab].description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
