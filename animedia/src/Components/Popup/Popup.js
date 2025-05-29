import React, { useState } from 'react'; 
import styles from './popup.module.css';

function PopUp() {
    const [isVisible, setIsVisible] = useState(true); 
 
    const togglePopUp = () => {
        setIsVisible(!isVisible); 
    };

    if (!isVisible) {
        return null; 
    }

    return (
        <div className={styles.popup}>
            <div className={styles.popupContainer}>
                <div className={styles.right}>
                    {}
                    <div className={styles.closeButton} onClick={togglePopUp}>X</div>
                    <h1 className={styles.title}>Newsletter</h1>
                    <p className={styles.description}>
                        Unlock anime! Get curated content, exclusive discounts, 
                        and the latest buzz. Subscribe today!
                    </p>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className={styles.nameInput}
                    />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className={styles.emailInput}
                    />
                    <button className={styles.popupButton}>Subscribe</button>
                </div>
                <div className={styles.color2}></div>
            </div>
            
        </div>
    );
}

export default PopUp;