import React from 'react';
import styles from './Section.module.css';
import halftoneImage from './halftone-16.png'; 

function Section() {
  return (
    <section id="section" className={styles.section}>
      <h1 className={styles.sectionH1}>Most Popular</h1>
      <div className={styles.categories}>
       <button className={styles.animeTag}>Anime</button>
       <button className={styles.mangaTag}>Manga</button>
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