import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send the form data to a backend
    // For now, just open the mail client
    window.location.href = `mailto:bvs9764@nyu.edu?subject=Contact from ${formState.name}&body=${formState.message}`;
    
    // Reset form
    setFormState({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Get In Touch</h2>
        <p className={styles.subheading}>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll do my best to get back to you!
        </p>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formState.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>
        
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <i className="fas fa-envelope"></i>
            <a href="mailto:bvs9764@nyu.edu">bvs9764@nyu.edu</a>
          </div>
          <div className={styles.contactItem}>
            <i className="fas fa-phone"></i>
            <a href="tel:+19179146238">(917) 914-6238</a>
          </div>
          <div className={styles.contactItem}>
            <i className="fas fa-map-marker-alt"></i>
            <span>New York City, NY</span>
          </div>
        </div>
        
        <div className={styles.socialLinks}>
          <a href="https://github.com/BhairaviVSD" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/bhairavi-sawantdesai" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;