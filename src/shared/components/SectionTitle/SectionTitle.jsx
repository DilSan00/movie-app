'use client'

import styles from './SectionTitle.module.css';


const SectionTitle = ({ title, description, children }) => {
  return (
    <div className={styles.sectionTitleContainer}>
      <div className={styles.sectionTitle}>
        <h2 className={styles.title}>
          { title }
        </h2>
        <p className={styles.description}>
          { description }
        </p>
      </div>

      { children }
    </div>
  );
}


export default SectionTitle