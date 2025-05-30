import React, { useState, useEffect } from 'react';
import styles from './Entertainment.module.css';

function Entertainment() {
  const [mediaType, setMediaType] = useState('anime');
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://api.jikan.moe/v4/top/${mediaType}`);
        const data = await res.json();
        setItems(data.data.slice(0, 16)); 
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    }

    fetchData();
  }, [mediaType]);

  return (
    <div className={styles.entertainment}>
      <h1>Top {mediaType === 'anime' ? 'Anime' : 'Manga'}</h1>

      <div className={styles.categories}>
        <button
          className={mediaType === 'anime' ? styles.active : styles.tag}
          onClick={() => setMediaType('anime')}
        >
          Anime
        </button>
        <button
          className={mediaType === 'manga' ? styles.active : styles.tag}
          onClick={() => setMediaType('manga')}
        >
          Manga
        </button>
      </div>

      <div className={styles.showGrid}>
        {items.map((item) => (
          <div
            key={item.mal_id}
            className={styles.show}
            style={{
              backgroundImage: `url(${item.images.jpg.large_image_url || item.images.jpg.image_url})`,
            }}
          >
            <div className={styles.overlay}></div>
            <div className={styles.title}>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Entertainment;
