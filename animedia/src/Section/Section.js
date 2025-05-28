import React from 'react';
import styles from './Section.module.css';

function Section() {
  return (
    <section id="section" className={styles.section}>
      <h1 className={styles.sectionH1}>Most Popular</h1>

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
    </section>
  );
}

export default Section;