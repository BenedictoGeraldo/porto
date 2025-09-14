import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Benedicto Geraldo
      </div>
      <nav className={styles.socialIcons}>
        <a href="https://www.linkedin.com/in/benedicto-geraldo/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/BenedictoGeraldo" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="mailto:geraldodawa@gmail.com">
          <FaEnvelope size={24} />
        </a>
      </nav>
    </header>
  );
};

export default Header;