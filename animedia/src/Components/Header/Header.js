import React from 'react';
import styles from './Header.module.css'; 

function Header(){
return (
    <header>
    <h1 className={styles.logo}>Animedia</h1>
    <nav>
    <a href="#">Anime</a>
    <a href="#">Manga</a>
    <a href="#">Discover</a>
    <a href="#">News</a>
    </nav>
    <div className={styles.icons}>
    <i class="fa-solid fa-magnifying-glass"></i>
    <input type="search" placeholder="search" className={styles.search}></input>
    </div>
    </header>

);
}

export default Header