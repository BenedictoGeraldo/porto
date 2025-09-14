import React from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <footer className={styles.contactSection}>
      <h2>Tertarik Bekerja Sama?</h2>
      <p>Jangan ragu untuk menghubungi saya melalui email.</p>
      <a href="mailto:geraldodawa@gmail.com" className={styles.emailButton}>
        Hubungi Saya
      </a>
    </footer>
  );
};

export default Contact;