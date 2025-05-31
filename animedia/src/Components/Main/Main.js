import React from 'react';
import styles from './Main.module.css'; 
import sailormoon from './sailor-moon-power-1.avif';
import moon from './moon.png';
import picture from './picture.avif';


function Main(){
return (
  <main id="main" className={styles.main}>
    <div className={styles.mainContent}>

    <div className={styles.mainLeft}>
      <p className={styles.trending}> Trending </p>
      <h1 className={styles.mainH1}>Sailor <br />moon</h1>
      <p className={styles.category}>Comedy,Fantasy, Romance</p>
      <div className={styles.rating}>
      <div className={styles.star}>
        <i className="fa-solid fa-star"></i>
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
      {/*<div className={styles.card2}></div>*/}
    </div>

    </div>
    
  </main>
  );
}

export default Main;