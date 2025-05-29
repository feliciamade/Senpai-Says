import React from 'react';
import styles from './Footer.module.css';

function Footer() {
 return (
 <footer className={styles.footer}>
 <div className={styles.columns}>
 <div className={styles.column}>
 <h3 className={styles.columnTitle}>Pages</h3>
 <ul className={styles.navList}>
 <li><a href="/manga" className={styles.navLink}>Manga</a></li>
 <li><a href="/anime" className={styles.navLink}>Anime</a></li>
 <li><a href="/discover" className={styles.navLink}>Discover</a></li>
 <li><a href="/news" className={styles.navLink}>News</a></li>
 </ul>
 </div>
 <div className={styles.column}>
 <h3 className={styles.columnTitle}>Contact Us</h3>
 <p>Email: info@example.com</p>
 <p>Phone: (123) 456-7890</p>
 <p>Address: 123 Main St, Anytown USA</p>
 </div>
 <div className={styles.column}>
 <h3 className={styles.columnTitle}>Follow Us</h3>
 <ul className={styles.socialList}>
 <li><a href="#" className={styles.socialLink}>Facebook</a></li>
 <li><a href="#" className={styles.socialLink}>Twitter</a></li>
 <li><a href="#" className={styles.socialLink}>Instagram</a></li>
 </ul>
 </div>
 </div>
 <p className={styles.copyright}>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
 </footer>
 );
}

export default Footer;