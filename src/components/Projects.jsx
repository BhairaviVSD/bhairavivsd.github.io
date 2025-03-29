import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: "FoodForThought",
      description: "Enhanced food classification deep learning model with cloud-based Kubernetes deployment. Improved model accuracy from 76% to 89% and reduced transaction latency from 400ms to 239ms.",
      skills: ["TensorFlow", "Kubernetes", "CNNs", "Cloud Infrastructure", "Transfer Learning"],
      link: "https://github.com/BhairaviVSD/FoodForThought"
    },
    {
      title: "Socially Apart",
      description: "IoT + ML device using ARM Cortex-A72 processor to detect social distancing violations and improper mask usage. National Innovation Contest 2020 qualifier and published paper in ICESC 2021.",
      skills: ["Computer Vision", "IoT", "ARM", "YOLOv3", "Embedded Systems"],
      link: "https://github.com/BhairaviVSD/SociallyApart"
    },
    {
      title: "LLM Compression via Quantization",
      description: "Developed quantization-based compression for LLMs with kurtosis regularization, achieving 4x compression with minimal accuracy loss on BERT for sentiment analysis.",
      skills: ["NLP", "Model Compression", "Quantization", "BERT", "Regularization"],
      link: "https://github.com/BhairaviVSD/LLMCompression"
    },
    {
      title: "CineMatch",
      description: "Movie recommendation engine using MinHash segmentation and ALS collaborative filtering on MovieLens dataset. Achieved ALS MAP of 0.9378 and precision at K of 0.9578.",
      skills: ["Collaborative Filtering", "MinHash", "Big Data", "Recommendation Systems"],
      link: "https://github.com/BhairaviVSD/CineMatch"
    },
    {
      title: "RISC-V Simulator",
      description: "Cycle-accurate RISC-V processor simulators in Python modeling single-stage and 5-stage pipelined implementations. Implemented branch prediction for 3x higher instructions per cycle.",
      skills: ["Computer Architecture", "Python", "Pipeline Design", "Branch Prediction"],
      link: "https://github.com/BhairaviVSD/RISCV-Simulator"
    },
    {
      title: "GPT Chronicles",
      description: "Style-specific GPT models trained for creative writing that emulate authors like Shakespeare and Dickinson, achieving high coherence scores and originality in generated text.",
      skills: ["NLP", "Text Generation", "Fine-tuning", "Literary Analysis"],
      link: "https://github.com/BhairaviVSD/GPT-Chronicles"
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