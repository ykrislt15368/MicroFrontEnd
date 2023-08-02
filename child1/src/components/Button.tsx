import * as React from 'react';
import styles from '@/styles/Home.module.css'

const shoot = () => {
    let value = prompt("Provide your name");
    alert(`Hello ${value}, great to meet you`);
  }

const Button = () => <button className={styles.button} onClick={shoot}>Child MFE 1 Button</button>;
export default Button;