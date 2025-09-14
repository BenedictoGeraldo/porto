import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <h2>Halo, perkenalkan nama saya Benedicto Geraldo</h2>
      <p>
        Saya merupakan mahasiswa semester 7 di Universitas Pembangunan Nasional 
        "Veteran" Jakarta. Saya memiliki ketertarikan pada bidang fullstack web development
        dan sampai saat ini terus memperdalam keahlian saya pada bidang ini. Saya pernah
        berkesempatan untuk mengikuti magang di Kantor Pusat Kodifikasi Kementrian Pertahanan RI,
        dimana saya telah berhasil membangun 4 website yang berguna.
      </p>
    </section>
  );
};

export default About;