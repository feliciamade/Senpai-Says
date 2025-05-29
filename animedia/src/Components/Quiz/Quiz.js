import React from 'react';
import styles from './Quiz.module.css'; 

function Quiz(){
return (
    <div className={styles.quiz}>
        <div className={styles.quizContainer}>
            <h1 className={styles.title}>Name That Anime</h1>
            <button className={styles.quizButton}>Play</button>
        </div>
    </div>
);
}

export default Quiz;