import React, { useState, useEffect } from 'react';
import styles from './Section.module.css';
import halftoneImage from './halftone-16.png';
import ah from './ah-17.png';

function Section() {
  const [mediaType, setMediaType] = useState('anime');
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://api.jikan.moe/v4/top/${mediaType}`);
        const data = await res.json();
        setItems(data.data.slice(0, 3));
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    }

    fetchData();
  }, [mediaType]);

  return (
    <section id="section" className={styles.section}>
      <h1 className={styles.sectionH1}>Most Popular</h1>
      <div className={styles.categories}>
        <button
          className={styles.animeTag}
          onClick={() => setMediaType('anime')}
        >
          Anime
        </button>
        <button
          className={styles.mangaTag}
          onClick={() => setMediaType('manga')}
        >
          Manga
        </button>
      </div>

      <div className={styles.carousel}>
        <div className={styles.cardGrid}>
          {items.map((item) => (
            <div
              key={item.mal_id}
              className={styles.card}
              style={{
                backgroundImage: `url(${item.images.jpg.large_image_url || item.images.jpg.image_url})`,
              }}
            >
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardTitle}>{item.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/*<img
        src={halftoneImage}
        alt="A halftone pattern"
        className={styles.styledImage}
      />*/}
    </section>
  );
}

export default Section;
