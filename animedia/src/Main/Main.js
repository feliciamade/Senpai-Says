import React from 'react';
import styles from './Main.module.css'; 

function Main(){
return (
    <main id="main" className={styles.main}>
      <div className={styles.mainContent}>

        <div className={styles.mainLeft}>
          <p className={styles.trending}> Trending </p>
          <h1 className={styles.mainH1}>Name</h1>
          <p className={styles.category}>Comedy,Fantasy, Romance</p>
          <div className={styles.rating}>
            <div className={styles.star}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p  className={styles.rate}>4.6(8.6k)</p>
          </div>
          <button id="main-button" className={styles.mainButton}>Preview</button>
        </div>

        <div className={styles.mainRight}>
          <div className={styles.card} id="card">
          </div>
          <div className={styles.card}></div>
        </div>

      </div>
    </main>
  );
}

export default Main