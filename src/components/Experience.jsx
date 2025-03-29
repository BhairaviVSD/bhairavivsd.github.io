import React, { useState } from 'react';
import styles from './Experience.module.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const experiences = [
    {
      company: "Accenture",
      title: "Custom Software Engineering Analyst",
      period: "Sep 2022 – Jul 2023",
      description: [
        "Engineered Salesforce Veeva CRM solution for a biopharmaceutical company boosting sales forecast accuracy by 30% and reducing sales cycle time by 20%.",
        "Customized CRM user experience on MyInsights dashboard; visualized data for 30,000+ reps on Vue JS, improving data accessibility and analysis."
      ]
    },
    {
      company: "Accenture",
      title: "Application Development Associate",
      period: "Jun 2021 – Aug 2022",
      description: [
        "Delivered features by deploying 10+ high-impact components and building/maintaining 20+ responsive React JS components for a leading telecommunications company across 5+ repositories.",
        "Upgraded 10+ legacy components to a mono repo on bit.dev, and configured and integrated MuleSoft APIs with UI.",
        "Headed web content management on 50+ components utilizing Adobe Experience Manager and Sanity.io, optimizing web content delivery and user experience.",
        "Spearheaded employee training for 10+ recruits over the course of 4 months to reduce onboarding time."
      ]
    },
    {
      company: "Knowledge Solutions",
      title: "Java Developer Intern",
      period: "May 2020 – Jun 2020",
      description: [
        "Architected a web application based banking portal using HTML, CSS, Bootstrap, JSP, and MySQL to facilitate streamlined services for 500+ users.",
        "Implemented CRUD operations ensuring a 99.99% success rate for user transactions while maintaining the highest level of security for sensitive financial data.",
        "Developed and implemented 100+ Junit test cases using Mockito, resulting in over 90% testing coverage and a 25% reduction in the time required for pre-commerce validation on a Spring Microservices platform."
      ]
    },
    {
      company: "Rotaract Club of Thane",
      title: "Treasurer, ED Director",
      period: "Mar 2020 – May 2023",
      description: [
        "Facilitated multiple successful events, showcasing proficiency in time management and coordination.",
        "Spearheaded the use of digital marketing tools, including Canva, Adobe CS6 and Final Cut, to create engaging promotional content for over 40 social causes."
      ]
    },
    {
      company: "Mumbai University",
      title: "Team Lead - Socially Apart Project",
      period: "Mar 2020 – May 2021",
      description: [
        "Led the development team in designing and developing an IoT device with an ARM Cortex-A72 processor to detect distancing violations and improper mask usage, effectively curbing the spread of COVID-19 in public spaces.",
        "Played a pivotal role in the National Innovation Contest 2020, where our team's project, 'Socially Apart,' was recognized."
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