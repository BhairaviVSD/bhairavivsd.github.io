import React, { useState } from 'react';
import styles from './Experience.module.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "New York University",
      title: "Graduate Research Assistant",
      period: "Aug 2024 – Dec 2024",
      description: [
        "Implemented a real-time recession forecasting pipeline to process 1.2M+ macroeconomic indicators, enhancing prediction accuracy by 15% through advanced anomaly detection and econometric modeling.",
        "Applied Markov-switching models and multivariate filters to detect regime shifts with 30% lower latency, enabling faster recognition of market transitions in research outputs.",
        "Orchestrated a scalable, event-driven data infrastructure using Apache Spark and AWS Lambda, delivering sub-2s dashboard refreshes and accelerating downturn signal surfacing by 20%."
      ]
    },
    {
      company: "New York University",
      title: "Recitation Leader & Mentor",
      period: "Sep 2024 – May 2025",
      description: [
        "Led recitations for Computer Systems Organization, improving participation and performance among 60+ students.",
        "Mentored NYC high school students through the IDEAS Maker Club, helping them build STEAM projects and navigate college pathways."
      ]
    },
    {
      company: "Accenture",
      title: "Software Engineer 2",
      period: "Jun 2021 – Jul 2023",
      description: [
        "Engineered backend services for transaction-intensive systems using Spring Boot, optimizing API throughput to improve response speed by 18% and reduce system errors by 25%.",
        "Redesigned a client-facing interface in React and facilitated a monorepo migration, streamlining development workflows and reducing build failures by 60%.",
        "Led the migration of a sales and strategy dashboard from Angular to Vue.js, cutting frontend load times by 35% and improving user engagement for 30K+ global users.",
        "Refactored ETL pipelines built on Informatica, minimizing data latency by 25% and improving the reliability of cross-regional sales and marketing insights.",
        "Streamlined release operations by enhancing CI/CD pipelines with Docker and Jenkins, reducing manual intervention by 50%, accelerating regression testing, and improving overall deployment reliability."
      ]      
    },
    {
      company: "Knowledge Solutions",
      title: "Java Developer Intern",
      period: "May 2020 – Jun 2020",
      description: [
        "Built a secure JSP-based banking portal serving 500+ users with seamless CRUD operations and MySQL integration.",
        "Achieved 90%+ JUnit test coverage with Mockito, reducing testing time by 25% and ensuring release stability."
      ]
    },
    {
      company: "Bennett Coleman & Co. Ltd.",
      title: "Data Intern",
      period: "May 2020 – Jun 2020",
      description: [
        "Processed 100K+ customer records using R to derive insights for campaign optimization, boosting engagement by 15%.",
        "Implemented segmentation and predictive models, expanding outreach to 20K new customers."
      ]
    },
    {
      company: "Finlatics",
      title: "Equity Markets Analyst Intern",
      period: "Jul 2020 – Sep 2020",
      description: [
        "Simulated stock portfolios in real-time using BSE500 stocks under FMEP; leveraged historical and real-time data for performance analysis.",
        "Conducted technical and fundamental research, informing trading hypotheses with actionable insights."
      ]
    },
    {
      company: "Rotaract Club of Thane",
      title: "Treasurer & ED Director",
      period: "Mar 2020 – May 2023",
      description: [
        "Led 40+ community impact events, raising awareness and driving attendance of 200+ per event through strategic content marketing.",
        "Created promotional materials using Canva and Adobe Suite; mobilized resources to support sanitation workers and leprosy home residents.",
        "Ran 15+ career development workshops, resulting in 30+ members securing internships and full-time roles."
      ]
    },
    {
      company: "Mumbai University",
      title: "Course Assistant – Microprocessors",
      period: "Jul 2019 – Dec 2019",
      description: [
        "Graded coursework and exams for 80+ students; established a digital repository to improve learning access and support exam preparation.",
        "Streamlined communication and logistics, increasing student satisfaction and performance."
      ]
    },
    {
      company: "Mumbai University",
      title: "Coordinator – International Society of Automation",
      period: "Aug 2018 – May 2019",
      description: [
        "Organized 20+ technical events including bootcamps and workshops, increasing student participation by 150%.",
        "Provided on-ground tech support for all events, ensuring smooth setup and execution."
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
