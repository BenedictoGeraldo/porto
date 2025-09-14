import React from 'react';
import styles from './Projects.module.css';
import { FaGithub } from 'react-icons/fa';

const projectData = [
    {
        title: "Pendaftaran Kode NCAGE",
        description: "Projek ini dikerjakan saat saya magang di Pusat Kodifikasi Kementrian Pertahanan RI. NCAGE sendiri merupakan kode yang harus dimiliki oleh setiap perusahaan di Indonesia yang mau mengekspor barang-barang alutsista dan sejenisnya ke negara NATO. Bahasa pemrograman utama dari project ini adalah PHP dengan framework Laravel",
        githubLink: "https://github.com/BenedictoGeraldo/Project_NCAGE.git"
    },
    {
        title: "UNIFIND",
        description: "UNIFIND merupakan aplikasi mobile untuk menemukan, melaporkan, serta melacak barang hilang yang telah diintegrasikan dengan perangkat IOT. Bahasa pemrograman utama yang digunakan dalam project ini adalah Kotlin",
        githubLink: "https://github.com/BenedictoGeraldo/Unifind.git"
    },
    {
        title: "Company Website House Ilmue",
        description: "Saya berkontribusi dalam menambahkan beberapa fitur baru seperti fitur informasi mengenai lowongan magang, beasiswa, dan pertukaran pelajar di website ini. Bahasa pemrograman utama dari website ini adalah HTML, CSS, dan JavaScript",
        githubLink: "https://github.com/BenedictoGeraldo/Unifind.git"
    },
];

const Projects: React.FC = () => {
  return (
    <section className={styles.projectsSection}>
      <h2>Proyek Saya</h2>
      <div className={styles.projectsGrid}>
        {projectData.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
              <FaGithub /> Lihat Kode
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;