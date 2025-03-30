import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: 'Vision-Language System for Medical Image Analysis',
      description: 'Developed a CLIP-based multimodal system to interpret chest X-rays with radiology reports on MIMIC-CXR. Boosted diagnostic insight through joint vision-language embeddings and feature fusion.',
      skills: ['Computer Vision', 'PyTorch', 'CLIP', 'Radiology Reports', 'ChestX-ray'],
      link: 'https://github.com/BhairaviVSD/Vision-Language-System-for-Analysis-of-Medical-Images'
    },
    {
      title: 'CineMatch',
      description: 'Collaborative filtering system using ALS and MinHash segmentation on MovieLens. Achieved 0.9578 precision and 0.95 Jaccard similarity across 86K+ movies and 33M+ ratings.',
      skills: ['Spark ML', 'ALS', 'Big Data'],
      link: 'https://github.com/BhairaviVSD/CineMatch'
    },
    {
      title: 'StoryCrafter',
      description: 'AI-powered storytelling app using AWS Rekognition for image analysis and GPT for story generation. Hosted on AWS EC2, backed by DynamoDB, Lambda, and Cognito.',
      skills: ['AWS Rekognition', 'OpenAI GPT', 'AWS Lambda', 'EC2'],
      link: 'https://github.com/BhairaviVSD/StoryCrafter'
    },
    {
      title: 'RAG Text Summarizer',
      description: 'Built a RAG-based summarizer combining Next.js and Flask using the distilbart-cnn-12-6 model. Supports fast summarization for long documents.',
      skills: ['Next.js', 'Flask', 'RAG', 'Transformers'],
      link: 'https://github.com/BhairaviVSD/RAG-Powered-Summarizer'
    },
    {
      title: 'The Embedded Gyrometer',
      description: 'Built a wearable gyroscope-powered speedometer using STM32 and L3GD20. Achieved 9% error margin without GPS and demonstrated 3-axis angular velocity measurement.',
      skills: ['STM32', 'Embedded C', 'Sensor Fusion', 'Signal Filtering'],
      link: 'https://github.com/BhairaviVSD/The-Embedded-Gyrometer'
    },
    {
      title: 'RISC-V Simulator',
      description: 'Developed cycle-accurate single and 5-stage pipelined RISC-V simulators. Integrated hazard handling, branch prediction, and improved IPC by 3x.',
      skills: ['Python', 'RISC-V', 'Computer Architecture', 'Pipelining'],
      link: 'https://github.com/BhairaviVSD/-RISC-V-Simulator'
    },
    {
      title: 'GPT Chronicles',
      description: 'Trained GPT models to emulate distinct authors (Shakespeare, Holmes, Dickinson) using prompt engineering and finetuning. Achieved high coherence and minimal plagiarism in generated text.',
      skills: ['GPT-2', 'Prompt Engineering', 'NLP', 'Text Generation'],
      link: 'https://github.com/BhairaviVSD/GPT-Chronicles'
    },
    {
      title: 'FoodForThought',
      description: 'Optimized CNN food classification model for Kubernetes deployment. Boosted accuracy from 76% to 89% and reduced inference latency to 239ms.',
      skills: ['TensorFlow', 'CNN', 'Kubernetes', 'CloudLab'],
      link: 'https://github.com/BhairaviVSD/FoodForThought'
    },
    {
      title: 'TaskManager',
      description: 'Spring Boot-based task manager with secure login, H2 database, and user-specific dashboards. Achieved 35% API latency reduction with caching.',
      skills: ['Java', 'Spring Boot', 'JDBC', 'H2'],
      link: 'https://github.com/BhairaviVSD/TaskManager'
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div className={styles.projectCard} key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.skills}>
                {project.skills.map((skill, idx) => (
                  <span key={idx} className={styles.skill}>{skill}</span>
                ))}
              </div>
              <a href={project.link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                View Project <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
        <div className={styles.moreProjects}>
          <a href="https://github.com/BhairaviVSD" target="_blank" rel="noopener noreferrer">
            See More Projects on GitHub <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
