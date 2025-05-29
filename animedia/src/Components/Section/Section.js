import React from 'react';
import styles from './Section.module.css';
import halftoneImage from './halftone-16.png'; 

function Section() {
  return (
    <section id="section" className={styles.section}>
      <h1 className={styles.sectionH1}>Most Popular</h1>
      <div className={styles.categories}>
       <h3 className={styles.animeTag}>Anime</h3>
       <h3 className={styles.mangaTag}>Manga</h3>
      </div>
      <div className={styles.carousel}>
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <div className={styles.color1}></div>
          </div>
          <div className={styles.card}>
            <div className={styles.color2}></div>
          </div>
          <div className={styles.card}>
            <div className={styles.color3}></div>
          </div>
        </div>
      </div>
    <img src={halftoneImage} alt="A halftone pattern" className={styles.styledImage}  />
    </section>
  );
}

export default Section;