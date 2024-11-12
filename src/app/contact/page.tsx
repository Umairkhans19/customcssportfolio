import React from 'react';
import styles from './contact.module.css'; 

const Contact = () => {
  return (
    <section className={styles['contact-section']}>
      <div className={styles['contact-container']}>
        
         <div className={styles['contact-form']}>
          <h2>Contact Me</h2>
          <p>Thank you for visiting my portfolio. If you have any inquiries or feedback,
             please feel free to reach out. I will respond to your message promptly.</p>

          <div className={styles['form-group']}>
            <label htmlFor="name"> Name : </label>
            <input type="text" id="name" name="name" />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="email"> Email : </label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="message"> Message : </label>
            <textarea id="message" name="message"></textarea>
          </div>
          
          <button type="submit" className={styles['submit-btn']}>Submit</button>
          <p className={styles['small-text']}>Thanks for reaching out! I will be in touch after reviewing your message.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
