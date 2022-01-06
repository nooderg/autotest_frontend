import React from 'react';
import styles from './RegisterPage.module.css';

const RegisterPage = () => (
  <div className={styles.RegisterPage}>
    <h1>Register</h1>
    <form className={styles.RegisterForm}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input type="password" id="confirmPassword" />
      <button type="submit">Register</button>
    </form>
  </div>
);

export default RegisterPage;
