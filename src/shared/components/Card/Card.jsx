'use client'

import styles from './Card.module.css';


const Card = ({ children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardDivContainer}>

        <h3 className={styles.cardTitle}> { children } </h3>

        <img src="/img/icons/array-next.png" alt="array-next" />

      </div>
    </div>
  );
}


export default Card