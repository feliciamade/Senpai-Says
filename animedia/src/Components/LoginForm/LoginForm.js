import React from 'react';
import styles from './loginform.module.css'; 

function LoginForm(){
    return (
        <div className={styles.login}>
            <div className={styles.logincontainer}>
                <div className={styles.right}>
                    {}
                    <h1 className={styles.title}>Signup</h1>
                    <p className={styles.description}>
                       Already have an account login ?
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
                    <button className={styles.loginButton}>Signup</button>
                </div>
                <div className={styles.color2}></div>
            </div>
            
        </div>
    );
}


export default LoginForm;