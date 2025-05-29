import React from 'react';
import Header from '../Components/Header/Header.js';
import Footer from '../Components/Footer/Footer.js';
import Sidebar from '../Components/Sidebar/Sidebar.js';
import Entertainment from '../Components/Entertainment/Entertainment.js';
import styles from './Discover.module.css';
import halftoneImage from './halftone.png'; 

function Discover() {
  return (
    <div className={styles.discover}>
      <Header />
      <div className={styles.discoverContent}>
      <Sidebar />
      <Entertainment />
    {/* <img src={halftoneImage} alt="A halftone pattern" className={styles.styledImage}  /> */ }
      </div>
       <Footer />
      
    </div>
  );
}

export default Discover;