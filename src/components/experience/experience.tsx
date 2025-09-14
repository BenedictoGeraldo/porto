import React from 'react';
import styles from './experience.module.css';

const experiences = [
    {
        date: "Juli 2025 - Sekarang",
        title: "Fullstack Developer",
        company: "Pusat Kodifikasi Kementrian Pertahanan RI",
        description: "Membangun sebanyak 4 buah website dengan tujuan yang berbeda-beda."
    },
    {
        date: "Januari 2025 - September 2025",
        title: "Head Of Web Development",
        company: "House Ilmu Indonesia",
        description: "Maintenance website company, memimpin, mengarahkan, dan mengevaluasi staff tim web development. Memimpin berbagai projek website perusahaan yang berkolaborasi dengan divisi lain"
    },
    {
        date: "Agustus 2024 - Desember 2024",
        title: "Staff Web Development",
        company: "House Ilmu Indonesia",
        description: "Maintenancee website company sembari membangun website admin dan juga berkontribusi terhadap kolaborasi dengan divisi lain."
    },
    {
        date: "Oktober 2024 - Desember 2024",
        title: "Event Management",
        company: "International Opinion Festival at DPR RI",
        description: "Merencanakan, mengatur, hingga memastikan acara ini berjalan dengan lancar"
    },
];

const Experience: React.FC = () => {
  return (
    <section className={styles.experienceSection}>
      <h2>Pengalaman Kerja</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
            <div className={styles.timelineContent}>
              <h3>{exp.title}</h3>
              <h4>{exp.company} ({exp.date})</h4>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;