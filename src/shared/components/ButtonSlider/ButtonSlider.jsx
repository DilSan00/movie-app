'use client'

import { useState } from 'react';
import styles from './ButtonSlider.module.css';


const ButtonSlider = () => {
  const [currentID, setCurrentID] = useState(1);
  const sliderIDs = [1, 2, 3, 4]

  const handlePrevious = () => {
    setCurrentID((prevID) => (prevID === 1 ? sliderIDs.length : prevID - 1));
  };

  const handleNext = () => {
    setCurrentID((prevID) => (prevID === sliderIDs.length ? 1 : prevID + 1));
  };

  const getHoverActionClass = (id) => {
    return currentID === id ? styles.pointItem1 : styles.pointItem;
  };

  return (
    <div className={styles.buttonSlider}>
      <button className={styles.arrowBtn} onClick={handlePrevious}>
        <img src="/img/icons/arrow-left.png" alt="arrow-left" />
      </button>

      <div className={styles.pointContainer}>
        {sliderIDs.map((id) => {
          return <div
            key={id}
            className={getHoverActionClass( id )}
          ></div>
        })}
      </div>

      <button className={styles.arrowBtn} onClick={handleNext}>
        <img src="/img/icons/arrow-right.png" alt="arrow-left" />
      </button>
    </div>
  );
}


export default ButtonSlider