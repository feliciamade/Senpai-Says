import React from 'react';
import styles from './Header.module.css'; 

function Header(){
return (
    <header>
    <h1 className={styles.logo}>Logo</h1>
    <nav>
    <a href="#">Title</a>
    <a href="#">Title</a>
    <a href="#">Title</a>
    <a href="#">Title</a>
    </nav>
    <div className={styles.icons}>
    <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    </header>

);
}

export default Header