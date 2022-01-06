import React from 'react';
import styles from './LoginPage.module.css';

const LoginPage = () => (
  <div className={styles.LoginPage}>
    <form className={styles.LoginForm}>
      <h1>Login</h1>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" />
      <button type="submit">Login</button>
    </form>    
  </div>
);

export default LoginPage;
