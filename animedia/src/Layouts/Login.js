import React from 'react';
import Header from '../Components/Header/Header.js';
import Footer from '../Components/Footer/Footer.js';
import LoginForm from '../Components/LoginForm/LoginForm.js';
import styles from './Login.module.css';



function Login() {
  return (
    <div className={styles.loginpage}>
      <Header />
      <div className={styles.logincontainer}>

    <LoginForm />
      </div>
       <Footer />
      
    </div>
  );
}

export default Login;