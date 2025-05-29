import React from 'react';
import styles from './Sidebar.module.css'; 

function Sidebar(){
return (
    <aside>
    <a href="#">Action</a>
    <a href="#">Adventure</a>
    <a href="#">Comedy</a>
    <a href="#" className={styles.active}>Drama</a>
    <a href="#">Fantasy</a>
    <a href="#">Horror</a>
    <a href="#">Mystery</a>
    <a href="#">Romance</a>
    <a href="#">Sci-Fi</a>
    <a href="#">Slice of Life</a>
    <a href="#">Supernatural</a>
    <a href="#">Thriller</a>
    </aside>

);
}

export default Sidebar;