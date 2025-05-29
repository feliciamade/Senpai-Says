import React from 'react';
import Header from '../Components/Header/Header.js';
import Footer from '../Components/Footer/Footer.js';
import Sidebar from '../Components/Sidebar/Sidebar.js';
import Entertainment from '../Components/Entertainment/Entertainment.js';
import styles from './Anime.module.css';
import halftoneImage from './halftone.png'; 

function Anime() {
  return (
    <div className={styles.Anime}>
      <Header />
      <div className={styles.AnimeContent}>
      <Sidebar />
      <Entertainment />
    {/* <img src={halftoneImage} alt="A halftone pattern" className={styles.styledImage}  /> */ }
      </div>
       <Footer />
      
    </div>
  );
}

export default Anime;