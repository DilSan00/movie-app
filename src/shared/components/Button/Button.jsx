'use client'

import styles from "./Button.module.css";

const Button = ({ children, onClick, darkMode }) => {
  const styleBtn = darkMode ? styles.buttonDark : styles.button;

  return <button onClick={onClick} className={styleBtn}>
    {children}
    </button>;
};

export default Button;
